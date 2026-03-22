'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Algebra 2"
      description="Your projected Algebra 2 readiness score based on quiz performance and topic mastery."
      apiEndpoint="/api/algebra2-score-predictor"
      maxScore={100}
      scoreLabel="out of 100"
      accent="indigo"
      practiceLink={{ href: '/courses/algebra-2', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/algebra2-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
