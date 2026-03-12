'use client'

import { useState } from 'react'

/**
 * #192: Assignment Templates
 * Pre-built assignment templates teachers can customize and assign
 */

interface AssignmentTemplate {
  id: string
  title: string
  subject: string
  description: string
  type: 'homework' | 'classwork' | 'project' | 'test-prep' | 'review'
  estimatedTime: number // minutes
  topics: string[]
  problemCount: number
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed'
}

const TEMPLATES: AssignmentTemplate[] = [
  {
    id: 'calc-limits-hw',
    title: 'Limits and Continuity Homework',
    subject: 'AP Calculus AB',
    description: 'Practice evaluating limits analytically, graphically, and numerically',
    type: 'homework',
    estimatedTime: 30,
    topics: ['Direct substitution', 'Factoring', 'Rationalization', 'One-sided limits'],
    problemCount: 15,
    difficulty: 'medium',
  },
  {
    id: 'calc-derivatives-classwork',
    title: 'Derivative Rules Practice',
    subject: 'AP Calculus AB',
    description: 'In-class practice with power, product, quotient, and chain rules',
    type: 'classwork',
    estimatedTime: 25,
    topics: ['Power rule', 'Product rule', 'Quotient rule', 'Chain rule'],
    problemCount: 12,
    difficulty: 'mixed',
  },
  {
    id: 'chem-stoich-hw',
    title: 'Stoichiometry Problem Set',
    subject: 'AP Chemistry',
    description: 'Mole conversions, limiting reagents, and percent yield calculations',
    type: 'homework',
    estimatedTime: 40,
    topics: ['Mole ratios', 'Limiting reagent', 'Percent yield', 'Mass-to-mole'],
    problemCount: 10,
    difficulty: 'hard',
  },
  {
    id: 'bio-genetics-review',
    title: 'Genetics Unit Review',
    subject: 'AP Biology',
    description: 'Comprehensive review of Mendelian genetics, Punnett squares, and inheritance patterns',
    type: 'review',
    estimatedTime: 45,
    topics: ['Mendelian genetics', 'Punnett squares', 'Linked genes', 'Pedigree analysis'],
    problemCount: 20,
    difficulty: 'mixed',
  },
  {
    id: 'alg1-equations-hw',
    title: 'Solving Linear Equations',
    subject: 'Algebra 1',
    description: 'One-step and multi-step equation practice with word problems',
    type: 'homework',
    estimatedTime: 20,
    topics: ['One-step equations', 'Multi-step equations', 'Word problems'],
    problemCount: 15,
    difficulty: 'easy',
  },
  {
    id: 'sat-math-prep',
    title: 'SAT Math Section Practice',
    subject: 'SAT',
    description: 'Timed SAT-style math section with mixed problem types',
    type: 'test-prep',
    estimatedTime: 35,
    topics: ['Algebra', 'Problem solving', 'Advanced math', 'Geometry/Trig'],
    problemCount: 20,
    difficulty: 'hard',
  },
  {
    id: 'geo-proofs-classwork',
    title: 'Geometric Proofs Workshop',
    subject: 'Geometry',
    description: 'Guided practice with two-column and paragraph proofs',
    type: 'classwork',
    estimatedTime: 30,
    topics: ['Triangle congruence', 'Parallel lines', 'Angle relationships'],
    problemCount: 8,
    difficulty: 'medium',
  },
  {
    id: 'physics-kinematics-project',
    title: 'Kinematics Lab Report',
    subject: 'AP Physics 1',
    description: 'Data analysis from kinematics lab: graphing, calculating acceleration, error analysis',
    type: 'project',
    estimatedTime: 60,
    topics: ['Velocity-time graphs', 'Acceleration', 'Free fall', 'Error analysis'],
    problemCount: 6,
    difficulty: 'hard',
  },
  {
    id: 'stats-regression-hw',
    title: 'Linear Regression Analysis',
    subject: 'AP Statistics',
    description: 'Interpreting regression output, residual plots, and correlation',
    type: 'homework',
    estimatedTime: 35,
    topics: ['Least-squares regression', 'Residuals', 'r and r²', 'Outliers'],
    problemCount: 10,
    difficulty: 'medium',
  },
]

const TYPE_META: Record<AssignmentTemplate['type'], { label: string; icon: string; color: string }> = {
  homework: { label: 'Homework', icon: '📝', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  classwork: { label: 'Classwork', icon: '🏫', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  project: { label: 'Project', icon: '🔬', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
  'test-prep': { label: 'Test Prep', icon: '📋', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  review: { label: 'Review', icon: '🔄', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
}

export function AssignmentTemplates() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

  const subjects = ['all', ...new Set(TEMPLATES.map(t => t.subject))]
  const filtered = TEMPLATES.filter(t =>
    (selectedSubject === 'all' || t.subject === selectedSubject) &&
    (selectedType === 'all' || t.type === selectedType)
  )

  const [assigned, setAssigned] = useState<string[]>([])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">📋 Assignment Templates</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Ready-to-use assignments you can customize and share</p>

      <div className="flex gap-3 mb-4 flex-wrap">
        <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
          {subjects.map(s => <option key={s} value={s}>{s === 'all' ? 'All Subjects' : s}</option>)}
        </select>
        <select value={selectedType} onChange={e => setSelectedType(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
          <option value="all">All Types</option>
          {Object.entries(TYPE_META).map(([k, v]) => <option key={k} value={k}>{v.icon} {v.label}</option>)}
        </select>
      </div>

      <div className="space-y-3">
        {filtered.map(template => {
          const meta = TYPE_META[template.type]
          const isAssigned = assigned.includes(template.id)
          return (
            <div key={template.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{template.title}</h4>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${meta.color}`}>{meta.icon} {meta.label}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{template.subject} · {template.problemCount} problems · ~{template.estimatedTime} min</p>
                </div>
                <button
                  onClick={() => !isAssigned && setAssigned(prev => [...prev, template.id])}
                  className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${isAssigned ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                >
                  {isAssigned ? '✓ Assigned' : 'Assign'}
                </button>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{template.description}</p>
              <div className="flex flex-wrap gap-1">
                {template.topics.map(topic => (
                  <span key={topic} className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">{topic}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
