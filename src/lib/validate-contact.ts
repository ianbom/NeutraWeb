export type ContactErrors = { name?: string; message?: string };

export function validateContact(v: { name: string; message: string }): ContactErrors {
  const errors: ContactErrors = {};
  if (!v.name.trim()) errors.name = "Masukkan nama Anda.";
  if (!v.message.trim()) errors.message = "Masukkan pesan Anda.";
  return errors;
}
