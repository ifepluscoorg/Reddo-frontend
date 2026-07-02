"use client"
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { signupUser } from "../actions/signup";
import { useRouter } from "nextjs-toploader/app";


const signupSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type SignupValues = z.infer<typeof signupSchema>;

export function SignUpForm() {
     const router = useRouter();

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (values: SignupValues) => {
    setError(null);
    setLoading(true);
    try {
      await signupUser({
        name: values.name,
        email: values.email,
        password: values.password,
        confirm_password: values.confirmPassword,
      });

      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
        return;
      }

      toast.success("Account created", {
        position: "top-right",
      });
      router.push("/Login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
    return (
        <div
          className="w-full max-w-lg rounded-2xl px-10 py-12"
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
            SIGN UP
          </h1>

          {/* Error */}
          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/20 border border-red-300/30 text-sm text-white text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <Field data-invalid={!!errors.name || undefined}>
              <FieldLabel htmlFor="name" className="sr-only">
                Name/Company Name
              </FieldLabel>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder="Name/Company Name"
                  className="w-full bg-transparent border-b-2 border-d-acccent/70 text-d-accent placeholder-d-accent/70 text-sm py-3 pr-10 focus:outline-none focus:border-d-accent transition "
                  {...register("name")}
                />
                <User
                  size={18}
                  className="absolute right-2 top-3 text-black/70"
                />
              </div>
              {errors.name && (
                <FieldError className="text-red-200 text-xs">
                  {errors.name.message}
                </FieldError>
              )}
            </Field>

            {/* Email */}
            <Field data-invalid={!!errors.email || undefined}>
              <FieldLabel htmlFor="email" className="sr-only">
                Email
              </FieldLabel>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b-2 border-d-acccent/70 text-d-accent placeholder-d-accent/70 text-sm py-3 pr-10 focus:outline-none focus:border-d-accent transition "
                  {...register("email")}
                />
                <Mail
                  size={18}
                  className="absolute right-2 top-3 text-black/70"
                />
              </div>
              {errors.email && (
                <FieldError className="text-red-200 text-xs">
                  {errors.email.message}
                </FieldError>
              )}
            </Field>

            {/* Password */}
            <Field data-invalid={!!errors.password || undefined}>
              <FieldLabel htmlFor="password" className="sr-only">
                Password
              </FieldLabel>
              <div className="relative">
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-transparent border-b-2 border-d-acccent/70 text-d-accent placeholder-d-accent/70 text-sm py-3 pr-10 focus:outline-none focus:border-d-accent transition "
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-2 top-3 text-black/70 hover:text-white transition"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <FieldError className="text-red-200 text-xs">
                  {errors.password.message}
                </FieldError>
              )}
            </Field>

            {/* Confirm Password */}
            <Field data-invalid={!!errors.confirmPassword || undefined}>
              <FieldLabel htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </FieldLabel>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showPass ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full bg-transparent border-b-2 border-d-acccent/70 text-d-accent placeholder-d-accent/70 text-sm py-3 pr-10 focus:outline-none focus:border-d-accent transition "
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-2 top-3 text-black/70 hover:text-white transition"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <FieldError className="text-red-200 text-xs">
                  {errors.confirmPassword.message}
                </FieldError>
              )}
            </Field>

            {/* Signup button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed mt-2 bg-accent text-d-accent hover:bg-accent/80 transition-colors shadow-[5px_4px_0px_#2AABE226]"
            >
              {loading ? "Creating account..." : "Signup"}
            </button>

            {/* Login link */}
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-d-accent/70">Already have an account?</span>
              <Link
                href="/Login"
                className="text-d-accent font-bold hover:underline"
              >
                Login
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
          </form>
        </div>
    )
}