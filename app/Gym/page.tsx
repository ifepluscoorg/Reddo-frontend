import { ChevronDown } from "lucide-react";
import { GYM_PLANS } from "../lib/data";
import Navbar from "../components/Navbar-second";

// interface GymPageProps {
//   locationName: string;
// }

// { locationName }: GymPageProps
export default function GymPage() {
  const locationName = "PL8T 97 Ahmadu Bello Way";
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-16">
          {/* Title */}
          <h1 className="text-5xl font-light text-gray-900 mb-3">
            Reddo{" "}
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                color: "#1BA3DC",
                fontWeight: 600,
                fontSize: "1.1em",
              }}
            >
              Gym
            </span>
          </h1>
          <p className="text-gray-500 text-sm mb-6 max-w-xl leading-relaxed">
            A fully equipped gym on-site. Subscribe monthly — no annual
            commitment, cancel anytime. Members get priority access.
          </p>

          {/* Location */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 mb-10 cursor-pointer hover:bg-gray-50 transition-colors">
            <span>{locationName}</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>

          {/* Plan cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GYM_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl p-8 flex flex-col items-center text-center"
                style={
                  plan.highlighted
                    ? {
                        background: "#29ABE2",
                        boxShadow: "0 8px 32px rgba(41,171,226,0.35)",
                      }
                    : {
                        background: "#fff",
                        border: "1.5px solid #e5e7eb",
                      }
                }
              >
                <h2
                  className="text-xl font-semibold mb-4"
                  style={{ color: plan.highlighted ? "#fff" : "#1a1a1a" }}
                >
                  {plan.name}
                </h2>

                <p
                  className="text-4xl font-bold mb-1"
                  style={{ color: plan.highlighted ? "#fff" : "#1a1a1a" }}
                >
                  ₦{plan.price}
                </p>

                <p
                  className="text-sm mb-6"
                  style={{
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.8)"
                      : "#6b7280",
                  }}
                >
                  {plan.period}
                </p>

                <button
                  className="px-10 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                  style={
                    plan.highlighted
                      ? {
                          border: "2px solid #fff",
                          color: "#fff",
                          background: "transparent",
                        }
                      : {
                          border: "2px solid #1a1a1a",
                          color: "#1a1a1a",
                          background: "#fff",
                        }
                  }
                >
                  {plan.cta}
                </button>

                {plan.features.length > 0 && (
                  <>
                    <div
                      className="w-full my-6 border-t"
                      style={{
                        borderColor: plan.highlighted
                          ? "rgba(255,255,255,0.3)"
                          : "#e5e7eb",
                      }}
                    />
                    <ul className="flex flex-col gap-2 w-full">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="text-sm text-center"
                          style={{
                            color: plan.highlighted
                              ? "rgba(255,255,255,0.85)"
                              : "#4b5563",
                          }}
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
