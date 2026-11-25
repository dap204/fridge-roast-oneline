// Fridge Roast: One Line, Biggest Laugh — make.fun entry.
// The program writes a single roast line to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge updated its firmware and now judges my 2 a.m. snacks in push notifications.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  console.error(`line must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
  process.exit(1);
}
if (!LINE.trim()) {
  console.error("line must not be only whitespace");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written and confirm it round-trips byte for byte,
// so a bad write fails loudly instead of silently entering a wrong line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  console.error("verification failed: /output/entry.txt does not match the line");
  process.exit(1);
}
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
