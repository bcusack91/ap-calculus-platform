'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP US History"
      description="Your projected AP US History exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-us-history-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="red"
      practiceLink={{ href: '/courses/ap-us-history', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-us-history-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
