import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The net lay across a lap like something sleeping. It had been mended so many times that the mending was most of it now — old twine, new twine, a patch the color of tea. The shuttle went in and out. The knot pulled tight with a soft click of the thumb.',
  'The work did not hurry. Each square closed was a square that would hold, and holding was all the net had ever been asked to do. Out past the harbor wall the boats lay still on their moorings, and the lamps made small yellow coins on the water.',
  'When it was done the net hung from two hands in a long soft ladder of holes. A finger found the last knot, the one just made, the one that held nothing yet. Then the net was folded and set by the door for morning.',
].join('\n\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
