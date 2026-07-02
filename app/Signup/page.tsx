import {SignUpForm} from "../components/SignUpForm"
export default async function SignupPage() {
 
  return (
    <div
      className="relative min-h-screen w-full flex flex-col"
      style={{
        backgroundImage: "url('/images/signup-bg.png')", // ← replace with your photo path
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "var(--font-zen-dots)",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-20">
        <SignUpForm/>
      </div>
    </div>
  );
}
