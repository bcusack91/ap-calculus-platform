'use client'

import { useState } from 'react'

/**
 * #197: Curriculum Mapping to Textbooks
 * Maps Study Mondo content to popular textbook chapters
 */

interface TextbookMapping {
  textbook: string
  edition: string
  subject: string
  chapters: {
    number: string
    title: string
    topics: { name: string; studyMondoPath: string; status: 'available' | 'coming-soon' }[]
  }[]
}

const TEXTBOOK_MAPPINGS: TextbookMapping[] = [
  {
    textbook: "Calculus: Early Transcendentals",
    edition: "9th Edition",
    subject: "AP Calculus AB/BC",
    chapters: [
      {
        number: "2",
        title: "Limits and Derivatives",
        topics: [
          { name: "The Limit of a Function", studyMondoPath: "/practice/calculus/limits", status: "available" },
          { name: "Calculating Limits", studyMondoPath: "/practice/calculus/calculating-limits", status: "available" },
          { name: "Continuity", studyMondoPath: "/practice/calculus/continuity", status: "available" },
          { name: "Limits at Infinity", studyMondoPath: "/practice/calculus/limits-at-infinity", status: "available" },
        ],
      },
      {
        number: "3",
        title: "Differentiation Rules",
        topics: [
          { name: "Derivatives of Polynomials", studyMondoPath: "/practice/calculus/derivatives", status: "available" },
          { name: "Product and Quotient Rules", studyMondoPath: "/practice/calculus/product-quotient-rule", status: "available" },
          { name: "Chain Rule", studyMondoPath: "/practice/calculus/chain-rule", status: "available" },
          { name: "Implicit Differentiation", studyMondoPath: "/practice/calculus/implicit-differentiation", status: "available" },
        ],
      },
      {
        number: "4",
        title: "Applications of Differentiation",
        topics: [
          { name: "Related Rates", studyMondoPath: "/practice/calculus/related-rates", status: "available" },
          { name: "Optimization", studyMondoPath: "/practice/calculus/optimization", status: "available" },
          { name: "L'Hôpital's Rule", studyMondoPath: "/practice/calculus/lhopitals-rule", status: "available" },
          { name: "Curve Sketching", studyMondoPath: "/practice/calculus/curve-sketching", status: "coming-soon" },
        ],
      },
      {
        number: "5",
        title: "Integrals",
        topics: [
          { name: "The Definite Integral", studyMondoPath: "/practice/calculus/definite-integrals", status: "available" },
          { name: "Fundamental Theorem of Calculus", studyMondoPath: "/practice/calculus/ftc", status: "available" },
          { name: "Substitution Rule", studyMondoPath: "/practice/calculus/u-substitution", status: "available" },
        ],
      },
    ],
  },
  {
    textbook: "Chemistry: The Central Science",
    edition: "15th Edition",
    subject: "AP Chemistry",
    chapters: [
      {
        number: "2",
        title: "Atoms, Molecules, and Ions",
        topics: [
          { name: "Atomic Theory", studyMondoPath: "/practice/chemistry/atomic-structure", status: "available" },
          { name: "Periodic Table", studyMondoPath: "/practice/chemistry/periodic-table", status: "available" },
          { name: "Ionic & Molecular Compounds", studyMondoPath: "/practice/chemistry/compounds", status: "available" },
        ],
      },
      {
        number: "5",
        title: "Thermochemistry",
        topics: [
          { name: "Enthalpy", studyMondoPath: "/practice/chemistry/enthalpy", status: "available" },
          { name: "Hess's Law", studyMondoPath: "/practice/chemistry/hess-law", status: "available" },
          { name: "Calorimetry", studyMondoPath: "/practice/chemistry/calorimetry", status: "coming-soon" },
        ],
      },
      {
        number: "14",
        title: "Chemical Kinetics",
        topics: [
          { name: "Reaction Rates", studyMondoPath: "/practice/chemistry/reaction-rates", status: "available" },
          { name: "Rate Laws", studyMondoPath: "/practice/chemistry/rate-laws", status: "available" },
          { name: "Activation Energy", studyMondoPath: "/practice/chemistry/activation-energy", status: "available" },
        ],
      },
    ],
  },
  {
    textbook: "Campbell Biology",
    edition: "12th Edition",
    subject: "AP Biology",
    chapters: [
      {
        number: "6",
        title: "A Tour of the Cell",
        topics: [
          { name: "Cell Structure", studyMondoPath: "/practice/biology/cell-structure", status: "available" },
          { name: "Organelles", studyMondoPath: "/practice/biology/organelles", status: "available" },
        ],
      },
      {
        number: "9",
        title: "Cellular Respiration",
        topics: [
          { name: "Glycolysis", studyMondoPath: "/practice/biology/glycolysis", status: "available" },
          { name: "Krebs Cycle", studyMondoPath: "/practice/biology/krebs-cycle", status: "available" },
          { name: "Electron Transport Chain", studyMondoPath: "/practice/biology/etc", status: "available" },
        ],
      },
      {
        number: "10",
        title: "Photosynthesis",
        topics: [
          { name: "Light Reactions", studyMondoPath: "/practice/biology/light-reactions", status: "available" },
          { name: "Calvin Cycle", studyMondoPath: "/practice/biology/calvin-cycle", status: "available" },
        ],
      },
    ],
  },
]

export function CurriculumMapping() {
  const [selectedTextbook, setSelectedTextbook] = useState(0)
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set(['2']))

  const mapping = TEXTBOOK_MAPPINGS[selectedTextbook]

  const toggleChapter = (num: string) => {
    setExpandedChapters(prev => {
      const next = new Set(prev)
      if (next.has(num)) next.delete(num)
      else next.add(num)
      return next
    })
  }

  const totalTopics = mapping.chapters.reduce((s, c) => s + c.topics.length, 0)
  const availableTopics = mapping.chapters.reduce((s, c) => s + c.topics.filter(t => t.status === 'available').length, 0)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">📖 Curriculum Mapping</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Find Study Mondo content that matches your textbook</p>

      {/* Textbook selector */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {TEXTBOOK_MAPPINGS.map((tm, i) => (
          <button key={i} onClick={() => { setSelectedTextbook(i); setExpandedChapters(new Set()) }}
            className={`px-3 py-2 text-xs rounded-lg whitespace-nowrap transition-colors ${i === selectedTextbook ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
            {tm.subject}
          </button>
        ))}
      </div>

      <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{mapping.textbook}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{mapping.edition} • {availableTopics}/{totalTopics} topics covered</p>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-2">
          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${(availableTopics / totalTopics) * 100}%` }} />
        </div>
      </div>

      <div className="space-y-2">
        {mapping.chapters.map(chapter => (
          <div key={chapter.number} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button onClick={() => toggleChapter(chapter.number)}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Ch. {chapter.number}: {chapter.title}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400">{chapter.topics.length} topics</span>
                <span className="text-gray-400">{expandedChapters.has(chapter.number) ? '▼' : '▶'}</span>
              </div>
            </button>
            {expandedChapters.has(chapter.number) && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-2 space-y-1">
                {chapter.topics.map(topic => (
                  <div key={topic.name} className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{topic.name}</span>
                    {topic.status === 'available' ? (
                      <a href={topic.studyMondoPath} className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded hover:bg-green-200 dark:hover:bg-green-900/50">
                        Practice →
                      </a>
                    ) : (
                      <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded">Coming Soon</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
