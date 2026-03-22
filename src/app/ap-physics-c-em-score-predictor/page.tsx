'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Physics C: E&M"
      description="Your projected AP Physics C: Electricity and Magnetism exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-physics-c-em-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="amber"
      practiceLink={{ href: '/courses/ap-physics-c-em', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-physics-c-em-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
