// robot-vacuum-excuse — main.ts (Node 22, no dependencies).
// Writes the entry: one line, at most 120 characters, in which a robot
// vacuum explains why it missed a spot.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pick (111 characters). A case file, not an apology: three counts,
// one named crumb, one closed case — the vacuum lost the corner and owns it.
// Barry is the crumb's name now: it survived 12 passes, so it keeps the spot.
// The dock gets the report; the crumb gets the corner. That is the deal.
const ENTRY =
  "Incident #38: 12 passes, 1 wheel lost, 0 crumbs moved, and I have named the crumb Barry. Case closed, I docked.";

const OUTPUT_DIR = "/output";
const FALLBACK_DIR = join(process.cwd(), "output");

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  chmodSync(target, 0o644);
}

try {
  writeEntry(OUTPUT_DIR);
} catch {
  writeEntry(FALLBACK_DIR);
}

console.log(`entry.txt written (${ENTRY.length} chars)`);
