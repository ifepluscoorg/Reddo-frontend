"use server";

import axios from "axios";
import type { BackendWorkspace, BackendCategory } from "../lib/types";

export interface WorkspaceFilters {
  search?: string;
  category?: BackendCategory;
  is_available?: boolean;
}

export async function getWorkspaces(
  filters: WorkspaceFilters = {}
): Promise<BackendWorkspace[]> {
  try {
    const res = await axios.get<BackendWorkspace[]>(
      `${process.env.API_BASE_URL}/workspaces/`,
      { params: filters }
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(
        err.response?.data?.detail || "Failed to load workspaces."
      );
    }
    throw err;
  }
}
