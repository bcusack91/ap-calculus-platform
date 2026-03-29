export type AdExperimentMatrixRow = {
  template: 'topic_page' | 'course_page' | 'daily_question_page'
  experimentId: string
  control: string
  variant: string
  trafficSplit: string
  successMetric: string
  status: 'active' | 'planned'
}

export const adExperimentMatrix: AdExperimentMatrixRow[] = [
  {
    template: 'topic_page',
    experimentId: 'topic_ad_density_v1',
    control: 'Current ad placements only (mid-content + cadence after problem blocks + bottom).',
    variant: 'Add one additional in-article ad near upper lesson body for high-density cohort.',
    trafficSplit: '50/50',
    successMetric: 'RPM lift with no increase in bounce rate',
    status: 'active',
  },
  {
    template: 'course_page',
    experimentId: 'course_ad_spacing_v1',
    control: 'Single in-article ad after course overview.',
    variant: 'Second ad after category block midpoint.',
    trafficSplit: '50/50',
    successMetric: 'RPM/session while preserving category clickthrough',
    status: 'planned',
  },
  {
    template: 'daily_question_page',
    experimentId: 'daily_rewarded_cta_v1',
    control: 'No inline ad inside answer reveal card.',
    variant: 'Show compact ad below post-answer CTA block.',
    trafficSplit: '50/50',
    successMetric: 'RPM without reducing next-step CTA clicks',
    status: 'planned',
  },
]
