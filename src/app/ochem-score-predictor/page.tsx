'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Organic Chemistry"
      description="Your projected Organic Chemistry score based on quiz performance and topic mastery."
      apiEndpoint="/api/ochem-score-predictor"
      maxScore={5}
      scoreLabel="out of 5"
      accent="indigo"
      practiceLink={{ href: '/organic-chemistry', label: 'Practice Topics' }}
      diagnosticLink={{ href: '/ochem-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
