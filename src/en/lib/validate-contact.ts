export type ContactErrors = { name?: string; message?: string };

export function validateContact(v: { name: string; message: string }): ContactErrors {
  const errors: ContactErrors = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (!v.message.trim()) errors.message = "Enter your message.";
  return errors;
}
