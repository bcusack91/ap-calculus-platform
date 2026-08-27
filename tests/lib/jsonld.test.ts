import { describe, it, expect } from 'vitest'
import {
  organizationJsonLd,
  websiteJsonLd,
  courseJsonLd,
  learningResourceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from '@/lib/jsonld'

describe('organizationJsonLd', () => {
  it('returns valid EducationalOrganization schema', () => {
    const data = organizationJsonLd()
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('EducationalOrganization')
    expect(data.name).toBe('Study Mondo')
    expect(data.url).toBeDefined()
    expect(data.logo).toContain('android-chrome-512x512.png')
  })
})

describe('websiteJsonLd', () => {
  it('returns valid WebSite schema with search action', () => {
    const data = websiteJsonLd()
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('WebSite')
    expect(data.name).toBe('Study Mondo')
    expect(data.potentialAction).toBeDefined()
    expect(data.potentialAction['@type']).toBe('SearchAction')
    expect(data.potentialAction.target.urlTemplate).toContain('search_term_string')
  })
})

describe('courseJsonLd', () => {
  it('returns valid Course schema', () => {
    const data = courseJsonLd({
      title: 'AP Calculus AB',
      description: 'Learn calculus fundamentals',
      slug: 'ap-calculus-ab',
      topicCount: 50,
    })
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('Course')
    expect(data.name).toBe('AP Calculus AB')
    expect(data.url).toContain('/courses/ap-calculus-ab')
    expect(data.provider['@type']).toBe('EducationalOrganization')
  })
})

describe('learningResourceJsonLd', () => {
  it('returns valid LearningResource schema', () => {
    const data = learningResourceJsonLd({
      title: 'Derivatives Introduction',
      description: 'Learn the basics of derivatives',
      slug: 'derivatives-intro',
      courseTitle: 'AP Calculus AB',
    })
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('LearningResource')
    expect(data.name).toBe('Derivatives Introduction')
    expect(data.url).toContain('/topics/derivatives-intro')
  })
})

describe('faqJsonLd', () => {
  it('returns valid FAQPage schema', () => {
    const data = faqJsonLd([
      { question: 'What is a derivative?', answer: 'A rate of change.' },
      { question: 'What is an integral?', answer: 'The area under a curve.' },
    ])
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('FAQPage')
    expect(data.mainEntity).toHaveLength(2)
    expect(data.mainEntity[0]['@type']).toBe('Question')
    expect(data.mainEntity[0].acceptedAnswer['@type']).toBe('Answer')
  })

  it('returns empty mainEntity for no questions', () => {
    const data = faqJsonLd([])
    expect(data.mainEntity).toHaveLength(0)
  })
})

describe('breadcrumbJsonLd', () => {
  it('returns valid BreadcrumbList schema', () => {
    const data = breadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'AP Calculus AB', url: '/courses/ap-calculus-ab' },
      { name: 'Derivatives', url: '/topics/derivatives-intro' },
    ])
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('BreadcrumbList')
    expect(data.itemListElement).toHaveLength(3)
    expect(data.itemListElement[0].position).toBe(1)
    expect(data.itemListElement[2].position).toBe(3)
  })
})
