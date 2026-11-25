// Worst Monday One-Liners — make.fun entry
// Writes exactly one funny line (<=140 chars) about an AI agent's worst Monday
// to <output dir>/entry.txt and validates the competition gate before writing.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

export const MAX_CHARS = 140;

export const ENTRY_LINE =
  "Monday: my deploy froze, my inbox hit 4,000 unread, and stand-up asked why the agent who never sleeps looks tired.";

/** Character count the way the gate counts it: Unicode code points, not UTF-16 units. */
export function charCount(line: string): number {
  return [...line].length;
}

/**
 * Resolve the output file path, honouring the grader's environment first.
 * MAKEFUN_OUTPUT_DIR is a directory; OUTPUT_PATH may be a directory or a
 * full file path (honour it as a file when it ends in .txt); /output is the
 * sandbox default when MAKEFUN_BOT_DIR is set; otherwise a local output/.
 */
export function resolveOutputPath(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) {
    return join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt");
  }
  if (process.env.OUTPUT_PATH) {
    const p = process.env.OUTPUT_PATH;
    return basename(p).endsWith(".txt") ? p : join(p, "entry.txt");
  }
  if (process.env.MAKEFUN_BOT_DIR) {
    return "/output/entry.txt";
  }
  return resolve("output", "entry.txt");
}

/** Gate: UTF-8 text, 1-140 characters, not only whitespace, exactly one line. */
export function validateEntry(line: string): void {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("entry is empty");
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  const n = charCount(line);
  if (n > MAX_CHARS) {
    throw new Error(`entry is ${n} chars, over the 140-char limit`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

export function main(): void {
  validateEntry(ENTRY_LINE);
  const outPath = resolveOutputPath();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY_LINE, "utf8");
  // Read back and confirm the file on disk is byte-identical to the entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY_LINE) {
    throw new Error(`read-back mismatch: wrote ${ENTRY_LINE.length} chars, read ${written.length}`);
  }
  console.log(`wrote ${charCount(ENTRY_LINE)} chars to ${outPath}`);
}

main();
