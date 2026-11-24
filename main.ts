import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for the boss: the one who is never there,
// only felt — in the meeting invite, the unread reply,
// the approval that never lands.
const WORD = "Ghost";

// The gate wants UTF-8 text of 1 to 30 characters, not only
// whitespace, and a single word: no spaces, no sentence.
if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
  throw new Error("word outside the 1-30 char single-word gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
