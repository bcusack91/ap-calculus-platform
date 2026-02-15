/**
 * Server-side lesson content loader for SEO.
 * 
 * Imports all lesson parts for a topic and extracts the text content
 * so it can be server-rendered as crawlable HTML. The interactive
 * client component continues to work unchanged on top.
 */

import { getInteractiveTopicConfig } from './registry'

export interface SEOLessonContent {
  partTitle: string
  partNumber: number
  sections: {
    id: string
    content: string
  }[]
}

/**
 * Load all lesson parts for a topic and extract text content for SEO rendering.
 * This runs on the server only. Each part's loader() calls import() which
 * resolves synchronously in Node.js for local TypeScript files.
 */
export async function getInteractiveLessonSEOContent(
  topicSlug: string
): Promise<SEOLessonContent[] | null> {
  const config = getInteractiveTopicConfig(topicSlug)
  if (!config) return null

  const parts: SEOLessonContent[] = []

  for (let i = 0; i < config.parts.length; i++) {
    const partConfig = config.parts[i]
    try {
      const data = await partConfig.loader()
      if (!data?.sections) continue

      const textSections = data.sections
        .filter((s: any) => s.content && typeof s.content === 'string' && s.content.trim().length > 0)
        .map((s: any) => ({
          id: s.id || `section-${i}`,
          content: s.content.trim(),
        }))

      if (textSections.length > 0) {
        parts.push({
          partTitle: partConfig.title,
          partNumber: i + 1,
          sections: textSections,
        })
      }
    } catch (err) {
      // Skip parts that fail to load — don't break the page
      console.error(`Failed to load SEO content for ${topicSlug} part ${i + 1}:`, err)
    }
  }

  return parts.length > 0 ? parts : null
}
