"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "completed" | "failed">("idle");

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    // Simulating API loading states for membership verification
    setTimeout(() => {
      setStatus("completed");
      setEmail("");
    }, 1400);
  };

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      {status === "completed" ? (
        <div className="rounded border border-amber-500/30 bg-amber-500/10 p-4 text-sm font-medium text-amber-400 backdrop-blur-sm">
          ✨ Application received. Our membership committee will review your email and contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleApply} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <label htmlFor="member-email" className="sr-only">
              Professional Email Address
            </label>
            <input
              id="member-email"
              type="email"
              required
              disabled={status === "submitting"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full rounded border border-stone-800 bg-stone-900/60 px-4 py-3 text-base text-stone-100 placeholder-stone-500 shadow-inner focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex items-center justify-center rounded bg-amber-500 px-6 py-3 text-base font-semibold text-stone-950 shadow hover:bg-amber-400 active:scale-[0.98] transition-all disabled:bg-amber-500/50 shrink-0"
          >
            {status === "submitting" ? (
              <svg className="h-5 w-5 animate-spin text-stone-950" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              "Request Invitation"
            )}
          </button>
        </form>
      )}
      {status === "failed" && (
        <p className="mt-2 text-sm text-red-400">An unexpected system timeout occurred. Please retry.</p>
      )}
    </div>
  );
}