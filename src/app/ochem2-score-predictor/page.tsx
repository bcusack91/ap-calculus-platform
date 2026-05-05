'use client'

import ScorePredictor from '@/components/ScorePredictor'

export default function Page() {
  return (
    <ScorePredictor
      subject="Organic Chemistry 2"
      description="Your projected Organic Chemistry 2 performance, mapped to an AP-equivalent 1–5 scale, based on quiz performance and topic mastery."
      apiEndpoint="/api/ochem2-score-predictor"
      maxScore={5}
      scoreLabel="out of 5 (AP-equivalent)"
      accent="emerald"
      practiceLink={{ href: '/organic-chemistry-2', label: 'Practice OChem 2 Topics' }}
      diagnosticLink={{ href: '/ochem-diagnostic', label: 'Take Diagnostic' }}
    />
  )
}
