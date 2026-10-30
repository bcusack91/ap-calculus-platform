import type { ShotList } from './types'

/**
 * Recording plans ("shot lists") for video lessons, keyed by topic slug:
 * the clips an instructor should record, what each must cover, and drafted
 * checkpoint questions. The authoring tool shows the plan beside the lesson
 * editor and offers its questions as suggestions. Loaded lazily per topic.
 */
const SHOT_LISTS: Record<string, () => Promise<ShotList>> = {
  'types-of-chemical-bonds': () => import('./ap-chemistry/types-of-chemical-bonds').then((m) => m.shotList),
}

export function hasShotList(topicSlug: string): boolean {
  return topicSlug in SHOT_LISTS
}

export async function getShotList(topicSlug: string): Promise<ShotList | null> {
  const load = SHOT_LISTS[topicSlug]
  return load ? load() : null
}
