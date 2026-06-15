/**
 * Server-side lesson data loader.
 * 
 * Pre-loads ALL parts for a topic so they can be passed as serialized JSON props
 * to the client component. This avoids client-side dynamic imports that create
 * webpack chunks which may not be deployed to the CDN.
 */
import { getInteractiveTopicConfig, getTopicVariantCount } from './registry'
import type { LessonData } from './registry'

export interface PreloadedLessonPart {
  title: string
  data: LessonData | null
}

export interface PreloadedLessonConfig {
  parts: PreloadedLessonPart[]
  /** Variant parts keyed by variant number (2, 3). Variant 1 = parts above. */
  variantParts?: Record<number, PreloadedLessonPart[]>
  totalVariants: number
  completionDestination?: 'competitive' | 'complete'
  practiceModeParts?: number[]
}

async function loadParts(parts: { title: string; loader: () => Promise<LessonData> }[], topicSlug: string): Promise<PreloadedLessonPart[]> {
  return Promise.all(
    parts.map(async (part) => {
      try {
        const data = await part.loader()
        return { title: part.title, data }
      } catch (err) {
        console.error(`Failed to load lesson part "${part.title}" for ${topicSlug}:`, err)
        return { title: part.title, data: null }
      }
    })
  )
}

export async function preloadAllLessonParts(topicSlug: string): Promise<PreloadedLessonConfig | null> {
  const config = getInteractiveTopicConfig(topicSlug)
  if (!config) return null

  const totalVariants = getTopicVariantCount(topicSlug)

  // Load variant 1 parts (default)
  const parts = await loadParts(config.parts, topicSlug)

  // Load additional variant parts (v2, v3, etc.)
  let variantParts: Record<number, PreloadedLessonPart[]> | undefined
  if (config.variants) {
    variantParts = {}
    for (const [vStr, vParts] of Object.entries(config.variants)) {
      const v = Number(vStr)
      variantParts[v] = await loadParts(vParts, topicSlug)
    }
  }

  return {
    parts,
    variantParts,
    totalVariants,
    completionDestination: config.completionDestination,
    practiceModeParts: config.practiceModeParts,
  }
}
