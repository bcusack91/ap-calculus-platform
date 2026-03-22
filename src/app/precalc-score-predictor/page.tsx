'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Pre-Calculus"
      description="Your projected Pre-Calculus readiness score based on quiz performance and topic mastery."
      apiEndpoint="/api/precalc-score-predictor"
      maxScore={100}
      scoreLabel="out of 100"
      accent="amber"
      practiceLink={{ href: '/courses/ap-precalculus', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/precalc-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
