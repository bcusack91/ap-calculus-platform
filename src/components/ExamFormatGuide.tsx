'use client'

interface ExamSection {
  name: string
  format: string
  questionCount: number
  timeMinutes: number
  weight: string
  calculator?: boolean
  notes?: string
}

interface ScoringInfo {
  scale: string
  breakdown: { score: number; label: string; percentile?: string }[]
}

interface ExamFormatGuideProps {
  examName: string
  totalTime: string
  sections: ExamSection[]
  scoring: ScoringInfo
  tips: string[]
}

export function ExamFormatGuide({
  examName,
  totalTime,
  sections,
  scoring,
  tips,
}: ExamFormatGuideProps) {
  const totalQuestions = sections.reduce((acc, s) => acc + s.questionCount, 0)

  return (
    <div className="my-8 rounded-lg border-2 border-blue-300 dark:border-blue-700 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-4">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <span>📋</span> {examName} — Exam Format Guide
        </h3>
        <div className="flex gap-4 mt-2 text-sm text-blue-100">
          <span>⏱ {totalTime}</span>
          <span>📝 {totalQuestions} questions</span>
          <span>📊 {sections.length} sections</span>
        </div>
      </div>

      <div className="p-5 space-y-6 bg-blue-50 dark:bg-blue-900/10">
        {/* Sections Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-700">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-900/30">
                <th className="text-left px-4 py-3 font-semibold text-blue-900 dark:text-blue-200">
                  Section
                </th>
                <th className="text-left px-4 py-3 font-semibold text-blue-900 dark:text-blue-200">
                  Format
                </th>
                <th className="text-center px-4 py-3 font-semibold text-blue-900 dark:text-blue-200">
                  Questions
                </th>
                <th className="text-center px-4 py-3 font-semibold text-blue-900 dark:text-blue-200">
                  Time
                </th>
                <th className="text-center px-4 py-3 font-semibold text-blue-900 dark:text-blue-200">
                  Weight
                </th>
                <th className="text-center px-4 py-3 font-semibold text-blue-900 dark:text-blue-200">
                  Calculator
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100 dark:divide-blue-800">
              {sections.map((section, i) => (
                <tr key={i} className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {section.name}
                  </td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {section.format}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300">
                    {section.questionCount}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300">
                    {section.timeMinutes} min
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300">
                    {section.weight}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {section.calculator === undefined ? (
                      <span className="text-gray-400">—</span>
                    ) : section.calculator ? (
                      <span className="text-green-600">✅</span>
                    ) : (
                      <span className="text-red-600">🚫</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scoring */}
        <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-blue-200 dark:border-blue-700">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span>📊</span> Scoring: {scoring.scale}
          </h4>
          <div className="flex flex-wrap gap-3">
            {scoring.breakdown.map((item) => (
              <div
                key={item.score}
                className={`px-4 py-2 rounded-lg border text-center ${
                  item.score >= 4
                    ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700'
                    : item.score === 3
                    ? 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-700'
                    : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                }`}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.score}
                </div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
                {item.percentile && (
                  <div className="text-xs text-gray-500 mt-0.5">{item.percentile}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-blue-200 dark:border-blue-700">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span>💡</span> Key Test-Day Tips
          </h4>
          <ul className="space-y-2">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
