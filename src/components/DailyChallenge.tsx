'use client'

import { useState, useCallback } from 'react'

/**
 * #185: Daily Challenge (One Hard Problem)
 * A single challenging problem each day with bonus XP
 */

interface DailyProblem {
  id: string
  date: string
  subject: string
  difficulty: 'hard' | 'expert'
  question: string
  options: { label: string; value: string; isCorrect: boolean }[]
  explanation: string
  bonusXP: number
}

const DAILY_PROBLEMS: DailyProblem[] = [
  {
    id: 'dc-001',
    date: '2025-01-01',
    subject: 'AP Calculus',
    difficulty: 'expert',
    question: 'Find the value of lim(x→0) (sin(3x) - 3x) / x³',
    options: [
      { label: 'A', value: '-9/2', isCorrect: true },
      { label: 'B', value: '-3', isCorrect: false },
      { label: 'C', value: '0', isCorrect: false },
      { label: 'D', value: '-27/6', isCorrect: false },
    ],
    explanation: "Using Taylor series: sin(3x) = 3x - (3x)³/6 + ... = 3x - 27x³/6 + ...\nSo (sin(3x) - 3x)/x³ = -27/6 = -9/2",
    bonusXP: 200,
  },
  {
    id: 'dc-002',
    date: '2025-01-02',
    subject: 'AP Chemistry',
    difficulty: 'hard',
    question: 'A buffer contains 0.30 M NH₃ and 0.20 M NH₄Cl (Kb = 1.8×10⁻⁵). What is the pH?',
    options: [
      { label: 'A', value: '9.43', isCorrect: true },
      { label: 'B', value: '4.57', isCorrect: false },
      { label: 'C', value: '9.26', isCorrect: false },
      { label: 'D', value: '10.00', isCorrect: false },
    ],
    explanation: "pOH = pKb + log([NH₄⁺]/[NH₃]) = 4.74 + log(0.20/0.30) = 4.74 - 0.18 = 4.57. pH = 14 - 4.57 = 9.43",
    bonusXP: 200,
  },
  {
    id: 'dc-003',
    date: '2025-01-03',
    subject: 'SAT Math',
    difficulty: 'hard',
    question: 'If f(x) = 2x² - 8x + k and the minimum value of f is 3, what is k?',
    options: [
      { label: 'A', value: '11', isCorrect: true },
      { label: 'B', value: '3', isCorrect: false },
      { label: 'C', value: '5', isCorrect: false },
      { label: 'D', value: '-5', isCorrect: false },
    ],
    explanation: "Min at x = -b/2a = 8/4 = 2. f(2) = 8 - 16 + k = k - 8. Set k - 8 = 3, so k = 11.",
    bonusXP: 150,
  },
  {
    id: 'dc-004',
    date: '2025-01-04',
    subject: 'AP Biology',
    difficulty: 'hard',
    question: 'During the Calvin cycle, how many turns are needed to produce one molecule of glucose (C₆H₁₂O₆)?',
    options: [
      { label: 'A', value: '6', isCorrect: true },
      { label: 'B', value: '3', isCorrect: false },
      { label: 'C', value: '1', isCorrect: false },
      { label: 'D', value: '12', isCorrect: false },
    ],
    explanation: "Each turn of the Calvin cycle fixes 1 CO₂. Glucose has 6 carbons, so 6 turns are needed to produce one glucose molecule.",
    bonusXP: 150,
  },
  {
    id: 'dc-005',
    date: '2025-01-05',
    subject: 'AP Physics',
    difficulty: 'expert',
    question: 'A 2 kg block slides down a 30° frictionless incline. After sliding 4 m, what is its speed? (g = 10 m/s²)',
    options: [
      { label: 'A', value: '√40 ≈ 6.32 m/s', isCorrect: true },
      { label: 'B', value: '√80 ≈ 8.94 m/s', isCorrect: false },
      { label: 'C', value: '√20 ≈ 4.47 m/s', isCorrect: false },
      { label: 'D', value: '10 m/s', isCorrect: false },
    ],
    explanation: "Height = 4sin30° = 2m. Using energy: mgh = ½mv² → v² = 2gh = 2(10)(2) = 40 → v = √40 ≈ 6.32 m/s",
    bonusXP: 200,
  },
  {
    id: 'dc-006',
    date: '2025-01-06',
    subject: 'AP Statistics',
    difficulty: 'hard',
    question: 'In a normal distribution with μ = 100, σ = 15, P(X > 130) is approximately:',
    options: [
      { label: 'A', value: '2.28%', isCorrect: true },
      { label: 'B', value: '5%', isCorrect: false },
      { label: 'C', value: '15.87%', isCorrect: false },
      { label: 'D', value: '0.13%', isCorrect: false },
    ],
    explanation: "z = (130-100)/15 = 2.0. P(Z > 2) ≈ 0.0228 = 2.28%",
    bonusXP: 150,
  },
  {
    id: 'dc-007',
    date: '2025-01-07',
    subject: 'AP Calculus',
    difficulty: 'expert',
    question: '∫₀¹ x·eˣ dx = ?',
    options: [
      { label: 'A', value: '1', isCorrect: true },
      { label: 'B', value: 'e - 1', isCorrect: false },
      { label: 'C', value: 'e', isCorrect: false },
      { label: 'D', value: '2', isCorrect: false },
    ],
    explanation: "By parts: u=x, dv=eˣdx → [xeˣ]₀¹ - ∫₀¹ eˣdx = (e - 0) - (e-1) = 1",
    bonusXP: 200,
  },
]

function getTodayProblem(): DailyProblem {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
  return DAILY_PROBLEMS[dayOfYear % DAILY_PROBLEMS.length]
}

export function DailyChallenge({ onAwardXP }: { onAwardXP?: (xp: number) => void }) {
  const [problem] = useState(getTodayProblem)
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [alreadySolved, setAlreadySolved] = useState(() => {
    if (typeof window === 'undefined') return false
    const today = new Date().toISOString().split('T')[0]
    return localStorage.getItem('studymondo_daily_challenge_date') === today
  })

  const submitAnswer = useCallback(() => {
    if (!selected || alreadySolved) return
    setShowResult(true)
    const correct = problem.options.find(o => o.value === selected)?.isCorrect
    if (correct) {
      onAwardXP?.(problem.bonusXP)
    }
    const today = new Date().toISOString().split('T')[0]
    localStorage.setItem('studymondo_daily_challenge_date', today)
    setAlreadySolved(true)
  }, [selected, alreadySolved, problem, onAwardXP])

  const isCorrect = problem.options.find(o => o.value === selected)?.isCorrect

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-indigo-200 dark:border-indigo-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">🎯 Daily Challenge</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{problem.subject} · {problem.difficulty === 'expert' ? '🔴 Expert' : '🟠 Hard'}</p>
        </div>
        <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">+{problem.bonusXP} XP</span>
      </div>

      <p className="text-gray-800 dark:text-gray-200 font-medium mb-4">{problem.question}</p>

      <div className="space-y-2 mb-4">
        {problem.options.map(opt => (
          <button
            key={opt.label}
            onClick={() => !showResult && setSelected(opt.value)}
            disabled={showResult}
            className={`w-full text-left px-4 py-2.5 rounded-lg border-2 transition-all text-sm ${
              showResult && opt.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' :
              showResult && selected === opt.value && !opt.isCorrect ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
              selected === opt.value ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' :
              'border-gray-200 dark:border-gray-600 hover:border-indigo-300'
            }`}
          >
            <span className="font-bold mr-2">{opt.label}.</span>{opt.value}
          </button>
        ))}
      </div>

      {!showResult && !alreadySolved ? (
        <button onClick={submitAnswer} disabled={!selected}
          className="w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors">
          Submit Answer
        </button>
      ) : showResult ? (
        <div className={`p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'}`}>
          <p className="font-bold mb-1">{isCorrect ? `✅ Correct! +${problem.bonusXP} XP` : '❌ Not quite!'}</p>
          <p className="whitespace-pre-line">{problem.explanation}</p>
        </div>
      ) : (
        <div className="text-center text-sm text-green-600 dark:text-green-400 font-semibold py-2">
          ✅ Already completed today! Come back tomorrow.
        </div>
      )}
    </div>
  )
}
