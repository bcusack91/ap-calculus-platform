'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Geometry"
      description="Your projected Geometry readiness score based on quiz performance and topic mastery."
      apiEndpoint="/api/geometry-score-predictor"
      maxScore={100}
      scoreLabel="out of 100"
      accent="green"
      practiceLink={{ href: '/courses/geometry', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/geometry-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
