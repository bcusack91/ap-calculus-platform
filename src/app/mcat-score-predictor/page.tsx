'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="MCAT"
      description="Your projected MCAT score based on quiz performance and topic mastery across all sections."
      apiEndpoint="/api/mcat-score-predictor"
      maxScore={528}
      scoreLabel="out of 528"
      accent="emerald"
      practiceLink={{ href: '/mcat-practice', label: 'Take Practice Set' }}
      diagnosticLink={{ href: '/mcat-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
