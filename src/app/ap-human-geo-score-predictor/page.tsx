'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Human Geography"
      description="Your projected AP Human Geography exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-human-geo-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="emerald"
      practiceLink={{ href: '/courses/ap-human-geography', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-human-geo-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
