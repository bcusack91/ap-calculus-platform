'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Calculus AB"
      description="Your projected AP Calculus AB exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-calcab-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="blue"
      practiceLink={{ href: '/calcab-practice', label: 'Take Practice Exam' }}
      diagnosticLink={{ href: '/calcab-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
