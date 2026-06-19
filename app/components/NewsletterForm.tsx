"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <form
        className="flex flex-col sm:flex-row gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3.5 rounded-full bg-white border border-white/20 text-white text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="px-7 py-3.5 bg-highlight text-white font-semibold rounded-full hover:bg-highlight/90 transition-colors text-sm whitespace-nowrap shadow-lg"
        >
          Subscribe Free
        </button>
      </form>
    </div>
  );
}
