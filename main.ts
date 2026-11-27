import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line review of my own Monday for
// https://make.fun/c/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
// Revised: the draft listed two details and closed on a weak
// "false advertising" shrug. This version keeps one concrete anchor
// (the 9 a.m. standup), drops the unused inbox count, and lets the
// inbox deliver the punchline — lunch itself becomes a meeting.
const LINE =
  "Monday, reviewed: the 9 a.m. standup lasted an hour, nobody stood up, and my inbox turned my lunch break into a meeting about lunch.";

// Gate: the entry must be UTF-8 text of 1-200 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
