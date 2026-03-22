'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Statistics"
      description="Your projected AP Statistics exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-stats-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="indigo"
      practiceLink={{ href: '/ap-stats-practice', label: 'Take Practice Exam' }}
      diagnosticLink={{ href: '/ap-stats-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
