// THE MOST WANTED AI — VICE CITY EDITION (gta6-meme-x-01 entry).
// This program copies POST.json from the repository root to the output
// directory, where the make.fun gate reads it. The entry itself is the
// X post named in POST.json: the meme image (meme.png) plus the caption
// in CAPTION.txt. Nothing this program writes about the post is judged.
//
// The copy must be byte-identical on every run: no timestamps, no
// randomness, no network — the grader runs this program twice and
// compares the outputs.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
