'use client'

import { useState } from 'react'

/**
 * #191: Teacher-Created Custom Quizzes
 * Quiz builder for teachers to create custom assessments
 */

interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'free-response' | 'true-false'
  options?: string[]
  correctAnswer: string
  points: number
  explanation?: string
}

interface CustomQuiz {
  id: string
  title: string
  subject: string
  timeLimit: number // minutes, 0 = unlimited
  questions: QuizQuestion[]
  createdAt: string
  shareCode?: string
}

export function TeacherQuizBuilder() {
  const [quiz, setQuiz] = useState<CustomQuiz>(() => ({
    id: `quiz-${Date.now()}`,
    title: '',
    subject: '',
    timeLimit: 0,
    questions: [],
    createdAt: new Date().toISOString(),
  }))
  const [currentQuestion, setCurrentQuestion] = useState<Partial<QuizQuestion>>({
    type: 'multiple-choice',
    options: ['', '', '', ''],
    points: 1,
  })
  const [shareCode, setShareCode] = useState<string | null>(null)

  const addQuestion = () => {
    if (!currentQuestion.question || !currentQuestion.correctAnswer) return
    const q: QuizQuestion = {
      id: `q-${Date.now()}`,
      question: currentQuestion.question,
      type: currentQuestion.type || 'multiple-choice',
      options: currentQuestion.type === 'multiple-choice' ? currentQuestion.options?.filter(o => o.trim()) : undefined,
      correctAnswer: currentQuestion.correctAnswer,
      points: currentQuestion.points || 1,
      explanation: currentQuestion.explanation,
    }
    setQuiz(prev => ({ ...prev, questions: [...prev.questions, q] }))
    setCurrentQuestion({ type: 'multiple-choice', options: ['', '', '', ''], points: 1 })
  }

  const removeQuestion = (id: string) => {
    setQuiz(prev => ({ ...prev, questions: prev.questions.filter(q => q.id !== id) }))
  }

  const generateShareCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    setQuiz(prev => ({ ...prev, shareCode: code }))
    setShareCode(code)
    // In production, save to database
    localStorage.setItem(`studymondo_quiz_${code}`, JSON.stringify(quiz))
  }

  const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📝 Create Custom Quiz</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Quiz Title</label>
            <input type="text" value={quiz.title} onChange={e => setQuiz(prev => ({ ...prev, title: e.target.value }))}
              placeholder="e.g., Chapter 5 Review" maxLength={100}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
            <input type="text" value={quiz.subject} onChange={e => setQuiz(prev => ({ ...prev, subject: e.target.value }))}
              placeholder="e.g., AP Calculus AB" maxLength={50}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time Limit (minutes, 0 for unlimited)</label>
          <input type="number" min={0} max={180} value={quiz.timeLimit}
            onChange={e => setQuiz(prev => ({ ...prev, timeLimit: Number(e.target.value) }))}
            className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" />
        </div>

        {/* Question list */}
        {quiz.questions.length > 0 && (
          <div className="mb-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Questions ({quiz.questions.length}) · {totalPoints} points</h3>
            {quiz.questions.map((q, i) => (
              <div key={q.id} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg text-sm">
                <span className="text-gray-500 w-6">{i + 1}.</span>
                <span className="flex-1 text-gray-800 dark:text-gray-200 truncate">{q.question}</span>
                <span className="text-xs text-gray-400">{q.points}pt</span>
                <button onClick={() => removeQuestion(q.id)} className="text-red-400 hover:text-red-600 text-xs">✕</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add question form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Add Question</h3>

        <div className="space-y-3">
          <div className="flex gap-3">
            <select value={currentQuestion.type} onChange={e => setCurrentQuestion(prev => ({ ...prev, type: e.target.value as QuizQuestion['type'] }))}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
              <option value="multiple-choice">Multiple Choice</option>
              <option value="true-false">True/False</option>
              <option value="free-response">Free Response</option>
            </select>
            <input type="number" min={1} max={10} value={currentQuestion.points || 1}
              onChange={e => setCurrentQuestion(prev => ({ ...prev, points: Number(e.target.value) }))}
              className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              placeholder="Points" />
          </div>

          <textarea value={currentQuestion.question || ''} onChange={e => setCurrentQuestion(prev => ({ ...prev, question: e.target.value }))}
            placeholder="Enter question text..." rows={2} maxLength={500}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" />

          {currentQuestion.type === 'multiple-choice' && (
            <div className="space-y-2">
              {currentQuestion.options?.map((opt, i) => (
                <input key={i} type="text" value={opt}
                  onChange={e => {
                    const newOpts = [...(currentQuestion.options || [])]
                    newOpts[i] = e.target.value
                    setCurrentQuestion(prev => ({ ...prev, options: newOpts }))
                  }}
                  placeholder={`Option ${String.fromCharCode(65 + i)}`} maxLength={200}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" />
              ))}
            </div>
          )}

          <input type="text" value={currentQuestion.correctAnswer || ''}
            onChange={e => setCurrentQuestion(prev => ({ ...prev, correctAnswer: e.target.value }))}
            placeholder={currentQuestion.type === 'true-false' ? 'True or False' : 'Correct answer'} maxLength={200}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" />

          <input type="text" value={currentQuestion.explanation || ''}
            onChange={e => setCurrentQuestion(prev => ({ ...prev, explanation: e.target.value }))}
            placeholder="Explanation (optional)" maxLength={500}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" />

          <button onClick={addQuestion} disabled={!currentQuestion.question || !currentQuestion.correctAnswer}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors text-sm font-medium">
            + Add Question
          </button>
        </div>
      </div>

      {/* Share */}
      {quiz.questions.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <button onClick={generateShareCode}
            className="w-full py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Generate Share Code
          </button>
          {shareCode && (
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Share this code with students:</p>
              <p className="text-2xl font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-1">{shareCode}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
