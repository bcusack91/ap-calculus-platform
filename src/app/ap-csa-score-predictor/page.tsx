'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Computer Science A"
      description="Your projected AP Computer Science A exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-csa-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="gray"
      practiceLink={{ href: '/courses/ap-computer-science-a', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-csa-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
