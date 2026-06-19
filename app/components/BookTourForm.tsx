"use client";

import { useState } from "react";
// import SmallMascot from "./SmallMascot";

export default function BookTourForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [spaceInterest, setSpaceInterest] = useState("");
  const [date, setDate] = useState("");

  return (
    <section className="py-2 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Form */}
        <div className=" rounded-xl p-8 max-w-lg mx-auto bg-accent">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Book Your Tour
          </h3>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-accent bg-input-background text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-accent bg-input-background text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Space Interest and Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Space Interest */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Space Interest
                </label>
                <select
                  value={spaceInterest}
                  onChange={(e) => setSpaceInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-accent bg-input-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Space</option>
                  <option value="private-office">Private Office</option>
                  <option value="meeting-room">Meeting Room</option>
                  <option value="coworking-space">Coworking Space</option>
                  <option value="event-space">Event Space</option>
                  <option value="virtual-office">Virtual Office</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-accent bg-input-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-d-accent text-white font-semibold rounded-xl hover:bg-d-accent/80 transition-colors text-sm mt-2"
            >
              Request Tour
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
