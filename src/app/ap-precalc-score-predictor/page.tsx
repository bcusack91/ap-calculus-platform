'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Precalculus"
      description="Your projected AP Precalculus exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-precalc-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="cyan"
      practiceLink={{ href: '/courses/ap-precalculus', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/ap-precalculus-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
