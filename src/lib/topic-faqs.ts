/**
 * Generates FAQ questions for topic pages from topic data.
 * These are used for both visible FAQ sections and FAQPage JSON-LD schema.
 */

interface TopicFaqInput {
  title: string
  description?: string | null
  courseName?: string
  categoryName?: string
  hasFlashcards?: boolean
  hasInteractive?: boolean
  hasPracticeProblems?: boolean
  problemCount?: number
}

export interface FaqItem {
  question: string
  answer: string
}

export function generateTopicFaqs(topic: TopicFaqInput): FaqItem[] {
  const {
    title,
    courseName,
    categoryName,
    hasFlashcards = true,
    hasInteractive = false,
    hasPracticeProblems = false,
    problemCount = 0,
  } = topic

  const faqs: FaqItem[] = []

  // Core "what is" question
  faqs.push({
    question: `What is ${title}?`,
    answer:
      topic.description ||
      `${title} is a topic in ${courseName || 'our curriculum'}${categoryName ? ` under ${categoryName}` : ''}. Study Mondo provides free notes, examples, and practice resources to help you master this concept.`,
  })

  // How to study
  faqs.push({
    question: `How can I study ${title} effectively?`,
    answer: `Start by reading the study notes and working through the examples on this page. ${hasFlashcards ? 'Then use the flashcards to test your recall. ' : ''}${hasPracticeProblems && problemCount > 0 ? `Practice with the ${problemCount} problems provided, checking solutions as you go. ` : ''}${hasInteractive ? 'Try the interactive lesson for hands-on learning. ' : ''}Regular review and active practice are key to retention.`,
  })

  // Is it free?
  faqs.push({
    question: `Is this ${title} study guide free?`,
    answer: `Yes — all study notes, flashcards, and practice problems for ${title} on Study Mondo are free to access. No account is needed.`,
  })

  // Course context
  if (courseName) {
    faqs.push({
      question: `What course covers ${title}?`,
      answer: `${title} is part of the ${courseName} course on Study Mondo${categoryName ? `, specifically in the ${categoryName} section` : ''}. You can explore the full course for more related topics and practice resources.`,
    })
  }

  // Practice problems
  if (hasPracticeProblems && problemCount > 0) {
    faqs.push({
      question: `Are there practice problems for ${title}?`,
      answer: `Yes, this page includes ${problemCount} practice problem${problemCount !== 1 ? 's' : ''} with detailed solutions. Each problem includes a step-by-step explanation to help you understand the approach.`,
    })
  }

  return faqs
}
