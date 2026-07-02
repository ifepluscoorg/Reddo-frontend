import type { DefaultSession, DefaultUser } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";
import type { AuthUser } from "@/app/lib/auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
    refreshToken?: string;
    user?: AuthUser;
  }

  interface User extends DefaultUser {
    accessToken?: string;
    refreshToken?: string;
    user: AuthUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string;
    refreshToken?: string;
    user?: AuthUser;
  }
}
