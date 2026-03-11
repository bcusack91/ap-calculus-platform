'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Psychology"
      description="Your projected AP Psychology exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-psych-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="rose"
      practiceLink={{ href: '/ap-psych-practice', label: 'Take Practice Exam' }}
      diagnosticLink={{ href: '/psych-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
