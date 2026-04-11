import fs from 'fs'
import path from 'path'

type BaselineResult = {
  url: string
  source: 'pagespeed' | 'fetch-fallback'
  performanceScore: number | null
  lcpMs: number | null
  inpMs: number | null
  cls: number | null
  ttfbMs: number | null
}

const baseUrl = process.env.SPEED_BASE_URL || process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'
const targets = ['/', '/courses/ap-calculus-ab', '/courses/sat']

async function runPagespeed(url: string): Promise<BaselineResult> {
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=PERFORMANCE`
  const response = await fetch(endpoint)
  if (!response.ok) {
    throw new Error(`PageSpeed request failed with ${response.status}`)
  }

  const data = await response.json() as {
    lighthouseResult?: {
      categories?: { performance?: { score?: number } }
      audits?: Record<string, { numericValue?: number }>
    }
  }

  return {
    url,
    source: 'pagespeed',
    performanceScore: data.lighthouseResult?.categories?.performance?.score != null
      ? Math.round(data.lighthouseResult.categories.performance.score * 100)
      : null,
    lcpMs: data.lighthouseResult?.audits?.['largest-contentful-paint']?.numericValue ?? null,
    inpMs: data.lighthouseResult?.audits?.['interaction-to-next-paint']?.numericValue ?? null,
    cls: data.lighthouseResult?.audits?.['cumulative-layout-shift']?.numericValue ?? null,
    ttfbMs: data.lighthouseResult?.audits?.['server-response-time']?.numericValue ?? null,
  }
}

async function runFetchFallback(url: string): Promise<BaselineResult> {
  const start = Date.now()
  const response = await fetch(url)
  await response.text()
  const ttfbMs = Date.now() - start

  return {
    url,
    source: 'fetch-fallback',
    performanceScore: null,
    lcpMs: null,
    inpMs: null,
    cls: null,
    ttfbMs,
  }
}

async function main() {
  const results: BaselineResult[] = []
  for (const target of targets) {
    const url = `${baseUrl}${target}`
    try {
      results.push(await runPagespeed(url))
    } catch {
      results.push(await runFetchFallback(url))
    }
  }

  const outDir = path.join(process.cwd(), 'reports')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const jsonPath = path.join(outDir, 'mobile-speed-baseline.json')
  const mdPath = path.join(outDir, 'mobile-speed-baseline.md')
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2))

  const lines = [
    '# Mobile Speed Baseline',
    '',
    `Base URL: ${baseUrl}`,
    '',
    '| URL | Source | Perf Score | LCP (ms) | INP (ms) | CLS | TTFB (ms) |',
    '| --- | --- | ---: | ---: | ---: | ---: | ---: |',
  ]
  for (const row of results) {
    lines.push(`| ${row.url} | ${row.source} | ${row.performanceScore ?? 'n/a'} | ${row.lcpMs ?? 'n/a'} | ${row.inpMs ?? 'n/a'} | ${row.cls ?? 'n/a'} | ${row.ttfbMs ?? 'n/a'} |`)
  }
  fs.writeFileSync(mdPath, lines.join('\n'))

  console.log(`Mobile speed baseline written to ${jsonPath} and ${mdPath}`)
}

void main()
