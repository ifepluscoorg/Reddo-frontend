"use client";

import { useState } from "react";
import NewsletterForm from "./NewsletterForm";
export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent font-mono">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-center mb-4">
          {/* <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-2">
            Newsletter
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-snug">
            The Inside{" "}
            <span
              style={{ fontFamily: "'Caveat', cursive" }}
              className="text-primary text-4xl sm:text-5xl"
            >
              Reddo
            </span>{" "}
            <br /> Newsletter
          </h2>
        </div>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Events, community stories and what’s happening in Lagos business. No
          spam, we promise!
        </p>
        {/* Form */}

        <NewsletterForm />

        {/* <form
          className="flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-highlight text-white font-semibold rounded-full hover:bg-highlight/90 transition-colors text-sm whitespace-nowrap shadow-lg"
          >
            Subscribe Free
          </button>
        </form> */}
        <p className="text-muted-foreground text-xs mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
