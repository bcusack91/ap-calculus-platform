'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Organic Chemistry 1"
      description="Your projected Organic Chemistry 1 performance, mapped to an AP-equivalent 1–5 scale, based on quiz performance and topic mastery."
      apiEndpoint="/api/ochem1-score-predictor"
      maxScore={5}
      scoreLabel="out of 5 (AP-equivalent)"
      accent="lime"
      practiceLink={{ href: '/organic-chemistry-1', label: 'Practice OChem 1 Topics' }}
      diagnosticLink={{ href: '/ochem-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
