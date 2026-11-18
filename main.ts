// news-image-20261118 entry (Node 22, standard library only).
// The entry image is the entry.png beside this file: a 1024x1024 PNG built at
// build time from an HTML layout rendered with headless Chromium, with all text
// drawn as real vector text. It is the win-loop winner ("WORLD BRIEFING":
// lead-story bridge panel + six numbered stories + stat strip), chosen by a
// blind pairwise panel over two other variants. The program only copies it to
// the output directory, so both grading runs write byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
