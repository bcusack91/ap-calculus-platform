'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Grade 8 Math"
      description="Your projected Grade 8 Math readiness score based on quiz performance and topic mastery."
      apiEndpoint="/api/grade8-math-score-predictor"
      maxScore={100}
      scoreLabel="out of 100"
      accent="rose"
      practiceLink={{ href: '/courses/grade-8-math', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/grade8-math-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
