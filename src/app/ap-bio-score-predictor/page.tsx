'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Biology"
      description="Your projected AP Biology exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-bio-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="green"
      practiceLink={{ href: '/ap-bio-practice', label: 'Take Practice Exam' }}
      diagnosticLink={{ href: '/bio-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
