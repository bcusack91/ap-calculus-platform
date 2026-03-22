'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Algebra 1"
      description="Your projected Algebra 1 readiness score based on quiz performance and topic mastery."
      apiEndpoint="/api/algebra1-score-predictor"
      maxScore={100}
      scoreLabel="out of 100"
      accent="blue"
      practiceLink={{ href: '/courses/algebra-1', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/algebra1-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
