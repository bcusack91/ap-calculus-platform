import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/flashcards/', // Flashcard study pages are duplicates of topic pages
          '/topics?*', // Block query parameter URLs
        ],
      },
    ],
    sitemap: 'https://studymondo.com/sitemap.xml',
  }
}
