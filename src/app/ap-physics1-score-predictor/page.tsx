'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Physics 1"
      description="Your projected AP Physics 1 exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-physics1-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="cyan"
      practiceLink={{ href: '/ap-physics1-practice', label: 'Take Practice Exam' }}
      diagnosticLink={{ href: '/physics1-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
