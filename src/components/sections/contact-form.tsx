"use client";

import { useState, type FormEvent } from "react";

const locations = ["Amsterdam", "Barcelona"];

import { validateContact, type ContactErrors as Errors } from "@/lib/validate-contact";

/**
 * Frontend-only contact form. Field chrome matches the reference: 44px rows on
 * #f5f4f6 with radius 10, white on focus, 14px ink text, dark 40px submit that
 * darkens to #383838 on hover. Validation and the success note are ours — the
 * reference posts to Framer's backend, which we do not have.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next = validateContact({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      location: String(data.get("location") ?? ""),
    });
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  const field = (invalid?: boolean) =>
    `flex h-11 w-full items-center rounded-[10px] px-3 text-sm leading-5 text-ink transition-colors ${
      invalid ? "bg-white ring-1 ring-[#d93025]" : "bg-surface focus-within:bg-white"
    }`;

  return (
    <form noValidate onSubmit={onSubmit} className="flex w-full flex-col gap-6 md:min-w-0 md:flex-1 lg:w-[420px] lg:flex-none">
      <div className="flex w-full flex-col gap-3">
        <label className="flex flex-col gap-2.5">
          <span className="text-xs leading-[18px] text-body">Name</span>
          <span className={field(!!errors.name)}>
            <input
              name="name"
              type="text"
              placeholder="Jane Smith"
              aria-invalid={!!errors.name}
              className="w-full bg-transparent outline-none placeholder:text-muted"
            />
          </span>
          {errors.name ? <span className="text-xs leading-[18px] text-[#d93025]">{errors.name}</span> : null}
        </label>

        <label className="flex flex-col gap-2.5">
          <span className="text-xs leading-[18px] text-body">Email</span>
          <span className={field(!!errors.email)}>
            <input
              name="email"
              type="email"
              placeholder="jane@framer.com"
              aria-invalid={!!errors.email}
              className="w-full bg-transparent outline-none placeholder:text-muted"
            />
          </span>
          {errors.email ? <span className="text-xs leading-[18px] text-[#d93025]">{errors.email}</span> : null}
        </label>

        <label className="flex flex-col gap-2.5">
          <span className="text-xs leading-[18px] text-body">Location</span>
          <span className={`${field(!!errors.location)} pr-3`}>
            <select
              name="location"
              defaultValue=""
              aria-invalid={!!errors.location}
              className="w-full appearance-none bg-transparent text-ink outline-none invalid:text-muted"
              required
            >
              <option value="">Select…</option>
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <svg viewBox="0 0 24 24" className="pointer-events-none size-4 shrink-0 text-ink" aria-hidden>
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          {errors.location ? (
            <span className="text-xs leading-[18px] text-[#d93025]">{errors.location}</span>
          ) : null}
        </label>


      </div>
      <button
        type="submit"
        className="flex h-10 w-full items-center justify-center rounded-[10px] bg-ink text-sm leading-5 font-semibold text-white transition-colors hover:bg-body"
      >
        Submit
      </button>
      {/* ponytail: local-only confirmation; wire to an API route when a backend exists. */}
      <p aria-live="polite" className="-mt-3 min-h-0 text-xs leading-[18px] text-body empty:hidden">
        {sent ? "Thanks, your message has been noted. We’ll be in touch shortly." : ""}
      </p>
    </form>
  );
}
