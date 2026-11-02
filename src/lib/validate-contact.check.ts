// Run: node --experimental-strip-types src/lib/validate-contact.check.ts
import assert from "node:assert/strict";
import { validateContact } from "./validate-contact.ts";

const ok = { name: "Jane", email: "jane@framer.com", location: "Amsterdam" };
assert.deepEqual(validateContact(ok), {});
assert.ok(validateContact({ ...ok, name: "   " }).name);
assert.ok(validateContact({ ...ok, email: "" }).email);
assert.ok(validateContact({ ...ok, email: "jane@framer" }).email);
assert.ok(validateContact({ ...ok, email: "ja ne@framer.com" }).email);
assert.deepEqual(validateContact({ ...ok, email: "  jane@framer.com " }), {});
assert.ok(validateContact({ ...ok, location: "" }).location);
console.log("validate-contact: ok");
