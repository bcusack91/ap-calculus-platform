import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/auth/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/auth/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/', '/admin/'],
      },
    ],
    sitemap: 'https://studymondo.com/sitemap.xml',
  }
}
