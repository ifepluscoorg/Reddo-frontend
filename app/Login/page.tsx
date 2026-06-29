"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Eye, EyeOff } from "lucide-react";
import { loginUser, saveTokens } from "../lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const data = await loginUser({ email, password });
      saveTokens(data.access, data.refresh);
      router.push("/BookSpace");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        backgroundImage: "url('/images/signup-bg.png')", // ← replace with your photo path
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "var(--font-zen-dots)",
      }}
    >
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div
          className="w-full max-w-lg rounded-sm px-10 py-12"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          }}
        >
          {/* Title */}
          <h1
            className="text-center text-4xl font-bold text-white mb-8 tracking-widest"
            style={{ fontFamily: "var(--font-zen-dots), sans-serif" }}
          >
            LOGIN
          </h1>

          {/* Error */}
          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/20 border border-red-300/30 text-sm text-white text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <div className="flex flex-col gap-5">
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-d-acccent/70 text-d-accent placeholder-d-accent/70 text-sm py-3 pr-10 focus:outline-none focus:border-d-accent transition "
              />
              <Mail
                size={18}
                className="absolute right-2 top-3 text-black/70"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-transparent border-b-2 border-d-acccent/70 text-d-accent placeholder-d-accent/70 text-sm py-3 pr-10 focus:outline-none focus:border-d-accent transition "
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-2 top-3 text-black/70 hover:text-white transition"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Login button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 rounded-full text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2 bg-accent text-d-accent hover:bg-accent/80 transition-colors shadow-[5px_4px_0px_#2AABE226]"
            >
              {loading ? "Signing in..." : "Login"}
            </button>

            {/* Register link */}
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-d-accent/70">
                Don&apos;t have an account?
              </span>
              <Link
                href="/Signup"
                className="text-d-accent font-bold hover:underline"
              >
                Register
              </Link>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-white/60 text-xs">Or sign up with</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* Google button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.8-6.8C35.9 2.2 30.3 0 24 0 14.7 0 6.7 5.4 2.9 13.3l7.9 6.1C12.5 13 17.8 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.8 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.1.8-4.6l-7.9-6.1A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.5 10.8l8.3-6.2z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.2 0-11.5-4.2-13.4-9.8l-8.3 6.2C6.6 42.5 14.7 48 24 48z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
