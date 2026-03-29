type SmokeResult = {
  name: string
  ok: boolean
  detail: string
}

const baseUrl = process.env.SMOKE_BASE_URL || 'http://localhost:3000'

async function fetchText(pathname: string) {
  const response = await fetch(`${baseUrl}${pathname}`)
  const text = await response.text()
  return { response, text }
}

async function run() {
  const results: SmokeResult[] = []

  const diagnostic = await fetchText('/sat-diagnostic')
  results.push({
    name: 'diagnostic start page',
    ok: diagnostic.response.ok && /diagnostic/i.test(diagnostic.text),
    detail: `/sat-diagnostic -> ${diagnostic.response.status}`,
  })

  const daily = await fetchText('/grade8-math-daily-question')
  results.push({
    name: 'daily question page',
    ok: daily.response.ok && /question of the day/i.test(daily.text),
    detail: `/grade8-math-daily-question -> ${daily.response.status}`,
  })

  const topicsIndex = await fetchText('/topics')
  const match = topicsIndex.text.match(/href="(\/topics\/[^"]+)"/)
  const topicPath = match?.[1] ?? '/hubs/ap-calculus-ab-limits-continuity'
  const topicPage = await fetchText(topicPath)
  results.push({
    name: 'content page render',
    ok: topicPage.response.ok && /<h1/i.test(topicPage.text),
    detail: `${topicPath} -> ${topicPage.response.status}`,
  })

  const failures = results.filter((r) => !r.ok)
  for (const result of results) {
    console.log(`${result.ok ? 'PASS' : 'FAIL'} ${result.name}: ${result.detail}`)
  }

  if (failures.length > 0) {
    throw new Error(`Smoke checks failed for: ${failures.map((f) => f.name).join(', ')}`)
  }
}

void run()
