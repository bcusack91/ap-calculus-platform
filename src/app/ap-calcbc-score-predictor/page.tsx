'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Calculus BC"
      description="Your projected AP Calculus BC exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-calcbc-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="indigo"
      practiceLink={{ href: '/ap-calcbc-practice', label: 'Take Practice Exam' }}
      diagnosticLink={{ href: '/ap-calcbc-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
