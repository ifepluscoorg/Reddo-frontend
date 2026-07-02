"use server";

import axios from "axios";
import type { SignupPayload, AuthUser } from "@/app/lib/auth";

export async function signupUser(data: SignupPayload): Promise<AuthUser> {
  try {
    const res = await axios.post<AuthUser>(
      `${process.env.API_BASE_URL}/users/`,
      data
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const errorData: Record<string, any> = err.response?.data ?? {};
      const message =
        errorData.detail ||
        Object.values(errorData)?.[0]?.[0] ||
        "Signup failed. Please try again.";
      throw new Error(message);
    }
    throw err;
  }
}
