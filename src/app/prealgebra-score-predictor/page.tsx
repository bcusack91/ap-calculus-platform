'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Pre-Algebra"
      description="Your projected Pre-Algebra readiness score based on quiz performance and topic mastery."
      apiEndpoint="/api/prealgebra-score-predictor"
      maxScore={100}
      scoreLabel="out of 100"
      accent="green"
      practiceLink={{ href: '/courses/pre-algebra', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/prealgebra-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
