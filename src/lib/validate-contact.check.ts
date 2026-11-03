// Run: node --experimental-strip-types src/lib/validate-contact.check.ts
import assert from "node:assert/strict";
import { validateContact } from "./validate-contact.ts";

const ok = { name: "Jane", message: "Saya ingin website." };
assert.deepEqual(validateContact(ok), {});
assert.ok(validateContact({ ...ok, name: "   " }).name);
assert.ok(validateContact({ ...ok, message: "\n  " }).message);
assert.deepEqual(validateContact({ name: " Éka ", message: "Halo & +\nTerima kasih" }), {});
console.log("validate-contact: ok");
