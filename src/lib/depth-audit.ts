import fs from 'fs'
import path from 'path'

export type DailyPoolDepthRow = {
  file: string
  questionCount: number
  uniqueTopicCount: number
  avgQuestionsPerTopic: number
  isThin: boolean
}

export type DailyPoolDepthReport = {
  generatedAt: string
  thresholds: {
    minQuestions: number
    minUniqueTopics: number
  }
  totals: {
    poolsScanned: number
    thinPools: number
  }
  pools: DailyPoolDepthRow[]
}

const DATA_DIR = path.join(process.cwd(), 'src/data')
const MIN_QUESTIONS = 40
const MIN_UNIQUE_TOPICS = 8

function walkFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath))
      continue
    }
    files.push(fullPath)
  }

  return files
}

export function generateDailyPoolDepthReport(): DailyPoolDepthReport {
  const allFiles = walkFiles(DATA_DIR)
  const candidates = allFiles.filter((file) => {
    const lower = file.toLowerCase()
    if (!lower.endsWith('.ts')) return false
    if (!lower.includes('daily-question')) return false
    return !lower.includes('/__tests__/')
  })

  const pools: DailyPoolDepthRow[] = candidates.map((filePath) => {
    const source = fs.readFileSync(filePath, 'utf8')
    const questionCount = (source.match(/correctAnswer\s*:/g) ?? []).length

    const topicMatches = source.matchAll(/topicSlug\s*:\s*['\"`]([^'\"`]+)['\"`]/g)
    const topics = new Set<string>()
    for (const match of topicMatches) {
      if (match[1]) topics.add(match[1])
    }

    const uniqueTopicCount = topics.size
    const avgQuestionsPerTopic = uniqueTopicCount > 0 ? Number((questionCount / uniqueTopicCount).toFixed(2)) : 0
    const isThin = questionCount < MIN_QUESTIONS || uniqueTopicCount < MIN_UNIQUE_TOPICS

    return {
      file: path.relative(process.cwd(), filePath),
      questionCount,
      uniqueTopicCount,
      avgQuestionsPerTopic,
      isThin,
    }
  })

  pools.sort((a, b) => {
    if (a.isThin !== b.isThin) return a.isThin ? -1 : 1
    return a.questionCount - b.questionCount
  })

  return {
    generatedAt: new Date().toISOString(),
    thresholds: {
      minQuestions: MIN_QUESTIONS,
      minUniqueTopics: MIN_UNIQUE_TOPICS,
    },
    totals: {
      poolsScanned: pools.length,
      thinPools: pools.filter((p) => p.isThin).length,
    },
    pools,
  }
}

export function depthReportToMarkdown(report: DailyPoolDepthReport): string {
  const lines: string[] = []
  lines.push('# Daily Pool Depth Report')
  lines.push('')
  lines.push(`Generated: ${report.generatedAt}`)
  lines.push(`Scanned pools: ${report.totals.poolsScanned}`)
  lines.push(`Thin pools: ${report.totals.thinPools}`)
  lines.push('')
  lines.push('| File | Questions | Topics | Avg Q/Topic | Thin |')
  lines.push('| --- | ---: | ---: | ---: | --- |')

  for (const row of report.pools) {
    lines.push(`| ${row.file} | ${row.questionCount} | ${row.uniqueTopicCount} | ${row.avgQuestionsPerTopic} | ${row.isThin ? 'yes' : 'no'} |`)
  }

  return lines.join('\n')
}
