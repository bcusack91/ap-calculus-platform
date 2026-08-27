/**
 * CI / pre-merge gate: run the rendering audit on CHANGED content files only.
 *
 * The full audit (scripts/audit-rendering.ts) covers 5,600+ modules and takes
 * minutes; this wrapper diffs against a base ref and audits just the touched
 * files under src/data, so the gate stays fast while guaranteeing that new or
 * edited content can never reintroduce the error classes the 2026-08 site-wide
 * audit cleaned out (620+ garbled/broken math sites).
 *
 * Fails on the REAL error classes: GARBLE, CURPAIR, RAWTEX, CTRL, KATEX,
 * IMPORT, GENFAIL. DANGLE (a lone bare `$`, renders fine) is reported but
 * does not fail the build.
 *
 *   npx tsx scripts/audit-changed-content.ts [--base <ref>]
 *
 * Base resolution: --base wins; otherwise origin/main's merge-base when it
 * exists; otherwise HEAD~1 (first commit on a fresh clone: audits nothing).
 */
import { execSync, spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const FAIL_KINDS = new Set(['GARBLE', 'CURPAIR', 'RAWTEX', 'CTRL', 'KATEX', 'IMPORT', 'GENFAIL'])

function sh(cmd: string): string {
  return execSync(cmd, { encoding: 'utf8' }).trim()
}

function resolveBase(): string | null {
  const argIdx = process.argv.indexOf('--base')
  if (argIdx !== -1 && process.argv[argIdx + 1]) return process.argv[argIdx + 1]
  try {
    return sh('git merge-base HEAD origin/main')
  } catch {
    /* no origin/main (shallow clone) — fall through */
  }
  try {
    return sh('git rev-parse HEAD~1')
  } catch {
    return null
  }
}

function main() {
  // --files <paths...>: audit exactly these files, no git involved. Lets the
  // vitest guard prove the gate actually FAILS on planted bugs — a gate that
  // has never been seen failing is not a gate.
  const filesIdx = process.argv.indexOf('--files')
  if (filesIdx !== -1) {
    const files = process.argv.slice(filesIdx + 1).filter((f) => fs.existsSync(f))
    if (files.length === 0) { console.error('--files given but none exist'); process.exit(1) }
    auditFiles(files, '(explicit file list)')
    return
  }
  const base = resolveBase()
  if (!base) {
    console.log('no base ref resolvable (single-commit history) — nothing to audit')
    return
  }

  const changed = sh(`git diff --name-only --diff-filter=ACMR ${base} -- 'src/data/**/*.ts'`)
    .split('\n')
    .filter((f) => f && fs.existsSync(f) && !f.endsWith('.d.ts'))

  if (changed.length === 0) {
    console.log(`no content files changed vs ${base.slice(0, 10)} — clean`)
    return
  }
  auditFiles(changed, `vs ${base.slice(0, 10)}`)
}

function auditFiles(changed: string[], label: string) {
  console.log(`auditing ${changed.length} content file(s) ${label}`)

  const out = path.join(process.env.TMPDIR ?? '/tmp', `audit-changed-${Date.now()}.ndjson`)
  const run = spawnSync(
    'npx',
    ['tsx', 'scripts/audit-rendering.ts', out, ...changed],
    { encoding: 'utf8', stdio: 'pipe', env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=6144' } },
  )
  process.stdout.write(run.stdout ?? '')
  if (run.status !== 0) {
    process.stderr.write(run.stderr ?? '')
    console.error('audit runner itself failed')
    process.exit(1)
  }

  const findings = fs.existsSync(out)
    ? fs.readFileSync(out, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l) as { kind: string; file: string; path: string; detail: string; excerpt: string })
    : []
  const failures = findings.filter((f) => FAIL_KINDS.has(f.kind))
  const benign = findings.length - failures.length

  if (benign > 0) console.log(`${benign} benign DANGLE finding(s) (lone bare $ — renders fine, not failing)`)
  if (failures.length === 0) {
    console.log('✓ changed content is rendering-clean')
    return
  }

  console.error(`\n✗ ${failures.length} rendering error(s) in changed content:\n`)
  for (const f of failures) {
    console.error(`  ${f.kind}  ${f.file} :: ${f.path}`)
    console.error(`        ${f.detail}`)
    console.error(`        "${f.excerpt.slice(0, 100)}"`)
  }
  console.error(
    '\nFix guidance: currency dollars must be escaped (\\$5 in evaluated text, so' +
      " \\\\$5 in a template literal); math uses $...$ delimiters, never \\(...\\);" +
      ' LaTeX commands need double backslashes in source. See scripts/audit-rendering.ts.',
  )
  process.exit(1)
}

main()
