'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Precalculus"
      description="Your projected AP Precalculus readiness score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-precalculus-score-predictor"
      maxScore={100}
      scoreLabel="out of 100"
      accent="cyan"
      practiceLink={{ href: '/courses/ap-precalculus', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/ap-precalculus-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
