'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP African American Studies"
      description="Your projected AP African American Studies exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-african-american-studies-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="purple"
      practiceLink={{ href: '/courses/ap-african-american-studies', label: 'Browse Topics' }}
      diagnosticLink={{ href: '/ap-african-american-studies-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
