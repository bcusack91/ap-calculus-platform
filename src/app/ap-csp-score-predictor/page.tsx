'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP CS Principles"
      description="Your projected AP CS Principles exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-csp-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="cyan"
      practiceLink={{ href: '/courses/ap-computer-science-principles', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-csp-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
