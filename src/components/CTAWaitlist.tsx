"use client";

import { useState } from "react";

export function CTAWaitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="bg-[#F9F8F6] py-40">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-['GesturaHeadline'] text-5xl font-normal leading-tight tracking-[-0.96px] text-[#1C1D1F] mb-4">
            Be first on the road.
          </h2>
          <p className="text-base text-[#1C1D1F]/60 leading-relaxed mb-10 font-['Inter']">
            Join the waitlist and get early access to the most complete car
            search.
          </p>

          {submitted ? (
            <p className="text-base font-medium text-[#1C1D1F] font-['Inter']">
              Thanks! You&apos;re on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-[#1C1D1F]/20 bg-white text-[#1C1D1F] text-sm placeholder-[#1C1D1F]/40 outline-none focus:border-[#1C1D1F]/50 transition font-['Inter']"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-[#1C1D1F]/20 bg-white text-[#1C1D1F] text-sm placeholder-[#1C1D1F]/40 outline-none focus:border-[#1C1D1F]/50 transition font-['Inter']"
              />
              <button
                type="submit"
                className="w-full bg-[#1C1D1F] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#1C1D1F]/90 transition font-['Inter']"
              >
                Get early access
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
