"use client";

import { useState, type FormEvent } from "react";
import { validateContact, type ContactErrors } from "@/lib/validate-contact";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next = validateContact({ name, message });
    setErrors(next);
    if (Object.keys(next).length) return;
    const text = `Halo LiniWeb, saya ${name}.\n\n${message}`;
    window.location.assign(`https://wa.me/6285151994724?text=${encodeURIComponent(text)}`);
  }

  const field = (invalid?: boolean) =>
    `w-full rounded-[10px] px-3 py-3 text-sm leading-5 text-ink outline-none transition-colors ${
      invalid ? "bg-white ring-1 ring-[#d93025] focus:ring-2" : "bg-surface focus:bg-white focus:ring-2 focus:ring-ink"
    }`;

  return (
    <form noValidate onSubmit={onSubmit} className="flex w-full flex-col gap-6 md:min-w-0 md:flex-1 lg:w-[420px] lg:flex-none">
      <label className="flex flex-col gap-2.5">
        <span className="text-xs leading-[18px] text-body">Nama</span>
        <input name="name" type="text" placeholder="Nama Anda" required aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined} className={field(!!errors.name)} />
        {errors.name && <span id="name-error" role="alert" className="text-xs text-[#d93025]">{errors.name}</span>}
      </label>
      <label className="flex flex-col gap-2.5">
        <span className="text-xs leading-[18px] text-body">Pesan</span>
        <textarea name="message" rows={4} placeholder="Ceritakan kebutuhan website Anda" required aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined} className={field(!!errors.message)} />
        {errors.message && <span id="message-error" role="alert" className="text-xs text-[#d93025]">{errors.message}</span>}
      </label>
      <button type="submit" className="flex h-10 w-full items-center justify-center rounded-[10px] bg-ink text-sm leading-5 font-semibold text-white transition-colors hover:bg-body">
        Kirim Pesan
      </button>
      <p className="-mt-3 text-xs leading-[18px] text-body">WhatsApp akan terbuka dengan pesan Anda. Tekan kirim di WhatsApp untuk mengirimkannya.</p>
    </form>
  );
}
