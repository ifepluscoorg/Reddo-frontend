const API_BASE = "https://reddo-backend-qus3.onrender.com/api/v1";

// ── Types ──────────────────────────────────────────────────────────────────

export interface SignupPayload {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
  is_verified: boolean;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

// ── API calls ──────────────────────────────────────────────────────────────

// export async function signupUser(data: SignupPayload): Promise<AuthUser> {
//   const res = await fetch(`${API_BASE}/users/`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) {
//     const error = await res.json();
//     // API may return field errors like { email: ["already exists"] }
//     const message =
//       error?.detail ||
//       Object.values(error)?.[0]?.[0] ||
//       "Signup failed. Please try again.";
//     throw new Error(message as string);
//   }

//   return res.json();
// }

export async function loginUser(data: LoginPayload): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE}/users/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    const message = error?.detail || "Invalid email or password.";
    throw new Error(message as string);
  }

  return res.json();
}

// ── Token helpers (client-side only) ──────────────────────────────────────

export function saveTokens(access: string, refresh: string) {
  const maxAge = 60 * 60 * 24 * 7; // 7 days
  document.cookie = `auth_token=${access}; path=/; max-age=${maxAge}; SameSite=Lax`;
  document.cookie = `refresh_token=${refresh}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function clearTokens() {
  document.cookie = "auth_token=; path=/; max-age=0";
  document.cookie = "refresh_token=; path=/; max-age=0";
}

export function getAccessToken(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)auth_token=([^;]*)/);
  return match ? match[1] : null;
}
