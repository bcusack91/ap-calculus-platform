'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP World History"
      description="Your projected AP World History exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-world-history-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="amber"
      practiceLink={{ href: '/courses/ap-world-history', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-world-history-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
