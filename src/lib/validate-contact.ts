export type ContactErrors = { name?: string; email?: string; location?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Client-side contact form rules. Returns an empty object when valid. */
export function validateContact(v: { name: string; email: string; location: string }): ContactErrors {
  const e: ContactErrors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  const email = v.email.trim();
  if (!email) e.email = "Please enter your email.";
  else if (!EMAIL.test(email)) e.email = "Please enter a valid email.";
  if (!v.location) e.location = "Please choose a location.";
  return e;
}
