'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP English Language"
      description="Your projected AP English Language exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-english-lang-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="indigo"
      practiceLink={{ href: '/courses/ap-english-language', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-english-lang-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
