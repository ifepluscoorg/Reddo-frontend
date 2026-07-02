/**
 * One-off script to seed reddo-backend with the existing demo workspace data
 * from app/lib/data.ts (LOCATIONS -> workspaces), translated into the
 * backend's category enum via CATEGORY_TO_BACKEND.
 *
 * Usage:
 *   npx tsx --env-file=.env.local scripts/seed-workspaces.ts
 *
 * Required env vars (put these in .env.local, never in chat/commits):
 *   API_BASE_URL     e.g. https://reddo-backend-qus3.onrender.com/api/v1
 *   ADMIN_EMAIL
 *   ADMIN_PASSWORD
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import axios from "axios";
import FormData from "form-data";
import { LOCATIONS, CATEGORY_TO_BACKEND } from "../app/lib/data";
import type { PricingTier, SpaceItem } from "../app/lib/types";

const API_BASE_URL = requireEnv("API_BASE_URL");
const ADMIN_EMAIL = requireEnv("ADMIN_EMAIL");
const ADMIN_PASSWORD = requireEnv("ADMIN_PASSWORD");
console.log(`Using API_BASE_URL=${API_BASE_URL}, ADMIN_EMAIL=${ADMIN_EMAIL}`);
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}. Add it to .env.local.`);
  }
  return value;
}

// Reused across all seeded workspaces (alternated), per the "reuse the two
// existing local demo images" decision.
const DEMO_IMAGE_PATHS = [
  "public/images/conference-room.png",
  "public/images/breakthrough.png",
];

const BACKEND_TIER_TYPES = new Set(["HOURLY", "Monthly"]);

async function login(): Promise<string> {
  const res = await axios.post(`${API_BASE_URL}/users/login/`, {
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
  });
  return res.data.access;
}

function toBackendTiers(spaceName: string, tiers: PricingTier[]) {
  return tiers
    .filter((t) => {
      if (!BACKEND_TIER_TYPES.has(t.type)) {
        console.warn(
          `  [${spaceName}] skipping tier type "${t.type}" — backend only supports HOURLY/Monthly`,
        );
        return false;
      }
      return true;
    })
    .map((t) => ({
      type: t.type,
      capacity: t.capacity ?? "",
      price: t.price.replace(/,/g, ""),
      currency: "NGN",
    }));
}

async function createWorkspace(token: string, space: SpaceItem) {
  const category = CATEGORY_TO_BACKEND[space.category];
  if (!category) {
    throw new Error(
      `No backend category mapping for frontend category "${space.category}"`,
    );
  }

  const tiers = toBackendTiers(space.name, space.tiers);
  if (tiers.length === 0) {
    throw new Error(`No valid tiers left for "${space.name}" after filtering`);
  }

  const res = await axios.post(
    `${API_BASE_URL}/workspaces/manage/`,
    {
      name: space.name,
      category,
      capacity: space.capacity,
      amenities: space.amenities,
      tiers,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return res.data;
}

async function attachImage(token: string, workspaceId: string, localImagePath: string) {
  const form = new FormData();
  form.append("images", readFileSync(path.resolve(localImagePath)), {
    filename: path.basename(localImagePath),
    contentType: "image/png",
  });

  await axios.post(`${API_BASE_URL}/workspaces/${workspaceId}/images/`, form, {
    headers: { ...form.getHeaders(), Authorization: `Bearer ${token}` },
  });
}

async function main() {
  console.log("Logging in as admin...");
  const token = await login();

  const spaces = LOCATIONS.flatMap((loc) => loc.workspaces);
  console.log(`Seeding ${spaces.length} workspaces from lib/data.ts...`);

  const failures: { name: string; error: string }[] = [];

  for (const [i, space] of spaces.entries()) {
    try {
      console.log(
        `[${i + 1}/${spaces.length}] Creating "${space.name}" (${space.category} -> ${CATEGORY_TO_BACKEND[space.category]})...`,
      );
      const created = await createWorkspace(token, space);
      const id = created?.id;
      if (!id) {
        console.warn(
          `  created but no "id" in response — skipping image attach. Raw response:`,
          created,
        );
        continue;
      }

      const imagePath = DEMO_IMAGE_PATHS[i % DEMO_IMAGE_PATHS.length];
      await attachImage(token, id, imagePath);
      console.log(`  ok — id=${id}, image=${imagePath}`);
    } catch (err: any) {
      const message = err.response?.data
        ? JSON.stringify(err.response.data)
        : err.message;
      console.error(`  FAILED: ${message}`);
      failures.push({ name: space.name, error: message });
    }
  }

  console.log("\nDone.");
  if (failures.length > 0) {
    console.log(`${failures.length} workspace(s) failed:`);
    for (const f of failures) console.log(`  - ${f.name}: ${f.error}`);
    process.exitCode = 1;
  } else {
    console.log("All workspaces created successfully.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
