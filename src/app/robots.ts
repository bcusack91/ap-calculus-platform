import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/auth/', '/competitive/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/auth/', '/competitive/'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/', '/admin/', '/competitive/'],
      },
    ],
    sitemap: 'https://www.studymondo.com/sitemap.xml',
  }
}
