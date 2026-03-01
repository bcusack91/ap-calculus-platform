/**
 * Server-side lesson data loader.
 * 
 * Pre-loads ALL parts for a topic so they can be passed as serialized JSON props
 * to the client component. This avoids client-side dynamic imports that create
 * webpack chunks which may not be deployed to the CDN.
 */
import { getInteractiveTopicConfig } from './registry'
import type { LessonData } from './registry'

export interface PreloadedLessonPart {
  title: string
  data: LessonData | null
}

export interface PreloadedLessonConfig {
  parts: PreloadedLessonPart[]
  completionDestination?: 'competitive' | 'complete'
  practiceModeParts?: number[]
}

export async function preloadAllLessonParts(topicSlug: string): Promise<PreloadedLessonConfig | null> {
  const config = getInteractiveTopicConfig(topicSlug)
  if (!config) return null

  const parts = await Promise.all(
    config.parts.map(async (part) => {
      try {
        const data = await part.loader()
        return { title: part.title, data }
      } catch (err) {
        console.error(`Failed to load lesson part "${part.title}" for ${topicSlug}:`, err)
        return { title: part.title, data: null }
      }
    })
  )

  return {
    parts,
    completionDestination: config.completionDestination,
    practiceModeParts: config.practiceModeParts,
  }
}
