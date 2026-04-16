'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Microeconomics"
      description="Your projected AP Microeconomics exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-micro-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="teal"
      practiceLink={{ href: '/courses/ap-microeconomics', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-micro-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
