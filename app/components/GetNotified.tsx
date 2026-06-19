"use client";

import { useState } from "react";

export function GetNotified() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="mt-8">
      <p className="font-mono text-base text-gray-800 mb-3">Get Notified</p>
      {submitted ? (
        <p className="font-mono text-sm" style={{ color: "#4bbfdb" }}>
          You're on the list!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-stretch gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
            className="font-mono text-sm px-4 py-2.5 bg-white border border-gray-300 outline-none placeholder-gray-400 text-gray-700 w-56 sm:w-72"
            style={{ borderRight: "none" }}
          />
          <button
            type="submit"
            className="font-mono text-sm px-6 py-2.5 bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Notify
          </button>
        </form>
      )}
    </div>
  );
}
