'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="ACT"
      description="Your projected ACT composite score based on quiz performance and study progress."
      apiEndpoint="/api/act-score-predictor"
      maxScore={36}
      scoreLabel="out of 36"
      accent="red"
      practiceLink={{ href: '/act-practice', label: 'Take Practice Test' }}
      diagnosticLink={{ href: '/act-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
