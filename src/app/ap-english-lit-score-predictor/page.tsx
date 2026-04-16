'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP English Literature"
      description="Your projected AP English Literature exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-english-lit-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="rose"
      practiceLink={{ href: '/courses/ap-english-literature', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-english-lit-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
