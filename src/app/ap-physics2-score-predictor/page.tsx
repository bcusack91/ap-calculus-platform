'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Physics 2"
      description="Your projected AP Physics 2 exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-physics2-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="cyan"
      practiceLink={{ href: '/ap-physics2-practice', label: 'Take Practice Exam' }}
      diagnosticLink={{ href: '/ap-physics2-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
