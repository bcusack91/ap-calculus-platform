'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Physics C: Mechanics"
      description="Your projected AP Physics C: Mechanics exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-physics-c-mech-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="indigo"
      practiceLink={{ href: '/courses/ap-physics-c-mechanics', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-physics-c-mech-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
