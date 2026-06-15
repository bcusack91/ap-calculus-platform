'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

interface FormulaCategory {
  name: string
  formulas: {
    name: string
    formula: string
    notes?: string
  }[]
}

interface FormulaReferenceSheetProps {
  course: string
  categories: FormulaCategory[]
}

export function FormulaReferenceSheet({ course, categories }: FormulaReferenceSheetProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedCats, setExpandedCats] = useState<Set<number>>(new Set(categories.map((_, i) => i)))

  const toggleCat = (idx: number) => {
    setExpandedCats((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  const filtered = searchTerm
    ? categories.map((cat) => ({
        ...cat,
        formulas: cat.formulas.filter(
          (f) =>
            f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            f.formula.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      })).filter((cat) => cat.formulas.length > 0)
    : categories

  const totalFormulas = categories.reduce((acc, c) => acc + c.formulas.length, 0)

  return (
    <div className="my-6 rounded-lg border-2 border-violet-300 dark:border-violet-700 overflow-hidden print:border-gray-300">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-5 py-4 print:bg-gray-100 print:text-black">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="print:hidden">📋</span> {course} Formula Reference Sheet
            </h3>
            <p className="text-violet-100 text-sm mt-0.5 print:text-gray-600">
              {totalFormulas} formulas across {categories.length} categories
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors print:hidden"
          >
            🖨️ Print
          </button>
        </div>
      </div>

      <div className="p-4 bg-violet-50 dark:bg-violet-900/10 print:bg-white">
        {/* Search */}
        <div className="mb-4 print:hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search formulas..."
            className="w-full px-4 py-2 rounded-lg border border-violet-200 dark:border-violet-700 bg-white dark:bg-gray-900 text-sm focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          />
        </div>

        <div className="space-y-4">
          {filtered.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="bg-white dark:bg-gray-900 rounded-lg border border-violet-200 dark:border-violet-700 overflow-hidden"
            >
              <button
                onClick={() => toggleCat(catIdx)}
                className="w-full text-left px-4 py-3 flex items-center justify-between bg-violet-100 dark:bg-violet-900/30 hover:bg-violet-200 dark:hover:bg-violet-800/40 transition-colors print:bg-gray-100"
              >
                <span className="font-bold text-violet-900 dark:text-violet-200 text-sm">
                  {cat.name}
                  <span className="ml-2 text-xs font-normal text-violet-600 dark:text-violet-400">
                    ({cat.formulas.length})
                  </span>
                </span>
                <span className={`text-violet-400 transition-transform print:hidden ${expandedCats.has(catIdx) ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              {expandedCats.has(catIdx) && (
                <div className="divide-y divide-violet-100 dark:divide-violet-800">
                  {cat.formulas.map((f, fIdx) => (
                    <div key={fIdx} className="px-4 py-3 flex items-start gap-4">
                      <div className="flex-shrink-0 w-40">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {f.name}
                        </span>
                      </div>
                      <div className="flex-1 prose prose-sm max-w-none dark:prose-invert">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                          {escapeCurrencyMath(`$${f.formula}$`)}
                        </ReactMarkdown>
                      </div>
                      {f.notes && (
                        <p className="flex-shrink-0 text-xs text-gray-500 dark:text-gray-400 max-w-[200px]">
                          {f.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
