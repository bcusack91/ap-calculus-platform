// Orchestrator: generates all 90 CSP lesson part files (parts 2..7 for 15 topics).

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { renderPart } from './render';
import type { Topic } from './types';
import { bi1Topics } from './content/bi1';
import { bi2Topics } from './content/bi2';
import { bi3Topics } from './content/bi3';
import { bi4Topics } from './content/bi4';
import { bi5Topics } from './content/bi5';

const OUT_DIR = join(process.cwd(), 'src', 'data', 'interactive-lessons');

const allTopics: Topic[] = [
  ...bi3Topics,
  ...bi2Topics,
  ...bi4Topics,
  ...bi5Topics,
  ...bi1Topics,
];

let written = 0;
for (const topic of allTopics) {
  for (const partNum of [2, 3, 4, 5, 6, 7] as const) {
    const filename = `${topic.slug}-part${partNum}.ts`;
    const filePath = join(OUT_DIR, filename);
    const src = renderPart(topic, partNum);
    writeFileSync(filePath, src);
    written++;
  }
}

console.log(`Generated ${written} CSP lesson part files into ${OUT_DIR}`);
