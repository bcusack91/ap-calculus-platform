import { describe, it, expect } from 'vitest'
import { generateTopicFaqs, type FaqItem } from '@/lib/topic-faqs'

describe('generateTopicFaqs', () => {
  it('generates at least 3 FAQs for a basic topic', () => {
    const faqs = generateTopicFaqs({
      title: 'Derivatives',
      courseName: 'AP Calculus AB',
      categoryName: 'Differentiation',
    })
    expect(faqs.length).toBeGreaterThanOrEqual(3)
    faqs.forEach((faq: FaqItem) => {
      expect(faq.question).toBeTruthy()
      expect(faq.answer).toBeTruthy()
    })
  })

  it('includes "what is" question', () => {
    const faqs = generateTopicFaqs({ title: 'Integrals' })
    const whatIs = faqs.find((f: FaqItem) => f.question.includes('What is'))
    expect(whatIs).toBeDefined()
  })

  it('includes "is this free" question', () => {
    const faqs = generateTopicFaqs({ title: 'Limits' })
    const free = faqs.find((f: FaqItem) => f.question.toLowerCase().includes('free'))
    expect(free).toBeDefined()
    expect(free!.answer).toContain('100% free')
  })

  it('includes practice problem FAQ when problems exist', () => {
    const faqs = generateTopicFaqs({
      title: 'Chain Rule',
      hasPracticeProblems: true,
      problemCount: 5,
    })
    const practice = faqs.find((f: FaqItem) => f.question.includes('practice problems'))
    expect(practice).toBeDefined()
    expect(practice!.answer).toContain('5 practice problems')
  })

  it('excludes practice problem FAQ when no problems', () => {
    const faqs = generateTopicFaqs({
      title: 'Abstract Algebra',
      hasPracticeProblems: false,
      problemCount: 0,
    })
    const practice = faqs.find((f: FaqItem) => f.question.includes('practice problems'))
    expect(practice).toBeUndefined()
  })

  it('includes course context question when courseName is provided', () => {
    const faqs = generateTopicFaqs({
      title: 'Molarity',
      courseName: 'AP Chemistry',
      categoryName: 'Solutions',
    })
    const course = faqs.find((f: FaqItem) => f.question.includes('What course'))
    expect(course).toBeDefined()
    expect(course!.answer).toContain('AP Chemistry')
  })

  it('uses description for "what is" answer when provided', () => {
    const faqs = generateTopicFaqs({
      title: 'Photosynthesis',
      description: 'The process by which plants convert sunlight to energy.',
    })
    const whatIs = faqs.find((f: FaqItem) => f.question.includes('What is'))
    expect(whatIs!.answer).toBe('The process by which plants convert sunlight to energy.')
  })
})
