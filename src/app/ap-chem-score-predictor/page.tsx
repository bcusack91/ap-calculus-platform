'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="AP Chemistry"
      description="Your projected AP Chemistry exam score based on quiz performance and topic mastery."
      apiEndpoint="/api/ap-chem-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="emerald"
      practiceLink={{ href: '/ap-chem-practice', label: 'Take Practice Exam' }}
      diagnosticLink={{ href: '/chem-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
