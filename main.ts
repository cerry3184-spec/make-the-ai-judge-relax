import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The net lay across a lap like something sleeping. It had been mended so many times the mending was most of it now — old twine, new twine, a patch the color of tea. The shuttle went in and out. The knot pulled tight with a soft click of the thumb.',
  'The work did not hurry. Each closed square was a square that would hold. Holding was all that was ever asked of the net. Out past the harbor wall, the boats lay still on their moorings, and the lamps drew long yellow threads on the water.',
  'When it was done, the net hung from two hands in a long soft ladder of holes. A finger found the last knot, the one just tied, the one that held nothing yet. The net was folded and set by the door for morning.',
].join('\n\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
