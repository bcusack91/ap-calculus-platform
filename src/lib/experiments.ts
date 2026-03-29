export type PostCompletionCtaVariant = 'control' | 'social-proof'
export type TopicAdVariant = 'control' | 'high-density'

function hashString(input: string): number {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

export function deterministicBucket(input: string, bucketCount: number): number {
  if (bucketCount <= 0) return 0
  return hashString(input) % bucketCount
}

export function getTopicAdVariant(topicSlug: string): TopicAdVariant {
  // 50/50 split for first monetization experiment rollout.
  return deterministicBucket(`topic-ad-v1:${topicSlug}`, 2) === 0 ? 'control' : 'high-density'
}

export function getOrAssignPostCompletionCtaVariant(courseSlug: string): PostCompletionCtaVariant {
  if (typeof window === 'undefined') return 'control'

  const storageKey = `dq-post-cta-v1:${courseSlug}`
  const existing = window.localStorage.getItem(storageKey)
  if (existing === 'control' || existing === 'social-proof') {
    return existing
  }

  const assigned: PostCompletionCtaVariant = Math.random() < 0.5 ? 'control' : 'social-proof'
  window.localStorage.setItem(storageKey, assigned)
  return assigned
}
