/**
 * Broken internal-link audit.
 *
 * 1. Builds the set of valid Next.js App Router routes from src/app/**\/page.tsx,
 *    recording static segments and dynamic segments ([slug], [...x]).
 * 2. Scans all .tsx/.ts under src for literal internal links:
 *      href="/..."  href='/...'  href={`/...`}  push('/...')  redirect('/...')
 * 3. Reports links whose path cannot be matched by any route, ignoring links
 *    that contain template interpolation (${...}) since those are dynamic.
 *
 * NOTE: only the leading static portion is checked; query strings / hashes are
 * stripped. Dynamic route folders match any single segment.
 */
import { promises as fs } from 'fs'
import path from 'path'

const root = path.resolve(__dirname, '..')
const appDir = path.join(root, 'src/app')
const srcDir = path.join(root, 'src')

type RouteNode = { children: Map<string, RouteNode>; dynamic?: RouteNode; catchAll?: boolean; isPage?: boolean }
const routeRoot: RouteNode = { children: new Map() }

function isGroup(seg: string) { return seg.startsWith('(') && seg.endsWith(')') }
function isDynamic(seg: string) { return seg.startsWith('[') && seg.endsWith(']') }
function isCatchAll(seg: string) { return seg.startsWith('[...') || seg.startsWith('[[...') }

async function walkApp(dir: string, segs: string[]) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const hasPage = entries.some(e => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name))
  if (hasPage) addRoute(segs)
  for (const e of entries) {
    if (!e.isDirectory()) continue
    if (e.name === 'api') continue
    const seg = e.name
    if (isGroup(seg)) { await walkApp(path.join(dir, seg), segs); continue }
    await walkApp(path.join(dir, seg), [...segs, seg])
  }
}

function addRoute(segs: string[]) {
  let node = routeRoot
  for (const seg of segs) {
    if (isCatchAll(seg)) { node.dynamic ??= { children: new Map(), catchAll: true }; node = node.dynamic; node.catchAll = true; continue }
    if (isDynamic(seg)) { node.dynamic ??= { children: new Map() }; node = node.dynamic; continue }
    if (!node.children.has(seg)) node.children.set(seg, { children: new Map() })
    node = node.children.get(seg)!
  }
  node.isPage = true
}

function matchRoute(pathname: string): boolean {
  const parts = pathname.split('/').filter(Boolean)
  function rec(node: RouteNode, i: number): boolean {
    if (i === parts.length) return true // reached end; treat as valid (layout/page)
    const seg = parts[i]
    const child = node.children.get(seg)
    if (child && rec(child, i + 1)) return true
    if (node.dynamic) {
      if (node.dynamic.catchAll) return true
      if (rec(node.dynamic, i + 1)) return true
    }
    return false
  }
  if (parts.length === 0) return true
  return rec(routeRoot, 0)
}

async function listFiles(dir: string, out: string[] = []): Promise<string[]> {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) await listFiles(p, out)
    else if (/\.(tsx|ts|jsx|js)$/.test(e.name) && !e.name.endsWith('.d.ts')) out.push(p)
  }
  return out
}

// Known top-level non-page destinations that are still valid (api handled elsewhere, files in /public)
const VALID_PREFIXES = ['/api/', '/_next/', '/sitemap', '/robots', '/manifest']

async function main() {
  await walkApp(appDir, [])
  const files = await listFiles(srcDir)

  const linkRe = /(?:href|action)\s*=\s*["'](\/[^"'`${}\s]*)["']|(?:redirect|push|replace)\(\s*["'](\/[^"'`${}\s]*)["']/g

  const broken = new Map<string, Set<string>>() // path -> files
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8')
    let m: RegExpExecArray | null
    while ((m = linkRe.exec(content))) {
      const raw = m[1] ?? m[2]
      if (!raw) continue
      const clean = raw.split('#')[0].split('?')[0]
      if (clean === '/' || clean === '') continue
      if (VALID_PREFIXES.some(p => clean.startsWith(p))) continue
      if (matchRoute(clean)) continue
      const rel = path.relative(root, file)
      if (!broken.has(clean)) broken.set(clean, new Set())
      broken.get(clean)!.add(rel)
    }
  }

  console.log('=== BROKEN INTERNAL LINK AUDIT ===\n')
  if (broken.size === 0) { console.log('✅ No broken literal internal links found.'); return }
  const sorted = [...broken.entries()].sort((a, b) => a[0].localeCompare(b[0]))
  for (const [link, fileset] of sorted) {
    console.log(`❌ ${link}`)
    for (const f of [...fileset].sort().slice(0, 6)) console.log(`     ${f}`)
    if (fileset.size > 6) console.log(`     ...and ${fileset.size - 6} more files`)
  }
  console.log(`\nTOTAL broken link targets: ${broken.size}`)
}

main().catch(e => { console.error(e); process.exit(1) })
