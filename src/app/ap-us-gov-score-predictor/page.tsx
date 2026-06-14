'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP US Government"
      description="Your projected AP US Government exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-us-gov-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="blue"
      practiceLink={{ href: '/courses/ap-us-government', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-us-gov-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
