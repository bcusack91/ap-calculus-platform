'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Environmental Science"
      description="Your projected AP Environmental Science exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-enviro-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="lime"
      practiceLink={{ href: '/courses/ap-environmental-science', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-enviro-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
