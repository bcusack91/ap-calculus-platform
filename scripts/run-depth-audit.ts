import fs from 'fs'
import path from 'path'
import { depthReportToMarkdown, generateDailyPoolDepthReport } from '../src/lib/depth-audit'

const report = generateDailyPoolDepthReport()
const outDir = path.join(process.cwd(), 'reports')
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

const jsonPath = path.join(outDir, 'daily-pool-depth-report.json')
const mdPath = path.join(outDir, 'daily-pool-depth-report.md')

fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2))
fs.writeFileSync(mdPath, depthReportToMarkdown(report))

console.log(`Depth audit complete. Scanned ${report.totals.poolsScanned} pools; thin pools: ${report.totals.thinPools}.`)
console.log(`JSON: ${jsonPath}`)
console.log(`Markdown: ${mdPath}`)
