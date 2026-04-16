'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Macroeconomics"
      description="Your projected AP Macroeconomics exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-macro-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="green"
      practiceLink={{ href: '/courses/ap-macroeconomics', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-macro-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
