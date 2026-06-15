#!/usr/bin/env node
/**
 * Generates src/data/interactive-lessons/registry-extra.ts from
 * src/data/interactive-lessons/lessons-manifest.json. The manifest is the
 * single source of truth for hand-authored lessons (pilot + bulk-generated);
 * each entry is { slug, importPath, partTitles[] }. Re-run after adding lessons.
 */
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const MANIFEST = path.join(ROOT, 'src/data/interactive-lessons/lessons-manifest.json')
const OUT = path.join(ROOT, 'src/data/interactive-lessons/registry-extra.ts')

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")

const seen = new Set()
const entries = []
for (const e of manifest) {
  if (!e.slug || !e.importPath || !Array.isArray(e.partTitles) || e.partTitles.length === 0) {
    throw new Error('bad manifest entry: ' + JSON.stringify(e))
  }
  if (seen.has(e.slug)) continue // de-dup by slug, first wins
  seen.add(e.slug)
  const parts = e.partTitles
    .map((t, i) => `      { title: '${esc(t)}', loader: () => import('${e.importPath}').then((m) => m.parts[${i}]) },`)
    .join('\n')
  entries.push(`  '${esc(e.slug)}': {\n    completionDestination: 'competitive',\n    parts: [\n${parts}\n    ],\n  },`)
}

const out = `import type { InteractiveTopicConfig } from './registry'

/**
 * AUTO-GENERATED from lessons-manifest.json by scripts/gen-registry-extra.cjs.
 * Do not edit by hand — add lessons to the manifest and re-run the generator.
 *
 * Hand-authored interactive lessons for topics not covered by the auto-generated
 * registry chunks, keyed by DB Topic.slug, spread into the registry last.
 */
export const registryExtra: Record<string, InteractiveTopicConfig> = {
${entries.join('\n')}
}
`

fs.writeFileSync(OUT, out)
console.log(`wrote ${OUT} with ${seen.size} lesson(s)`)
