import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

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
  user: AuthUser;
}

// ── API calls ──────────────────────────────────────────────────────────────

export async function loginUser(data: LoginPayload): Promise<LoginResponse> {
  try {
    const res = await axios.post<LoginResponse>(
      `${process.env.API_BASE_URL}/users/login/`,
      data
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message = err.response?.data?.detail || "Invalid email or password.";
      throw new Error(message);
    }
    throw err;
  }
}

// ── NextAuth config ─────────────────────────────────────────────────────────

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/Login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const { access, refresh, user } = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        return {
          id: user.id,
          accessToken: access,
          refreshToken: refresh,
          user,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.user = token.user;
      return session;
    },
  },
};
