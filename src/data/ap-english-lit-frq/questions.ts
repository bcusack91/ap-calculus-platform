/**
 * AP English Literature FRQ Practice Questions
 * Based on College Board AP English Literature FRQ format
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface EngLitFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

const longFRQs: EngLitFRQ[] = [
  {
    id: 'englit-long-1',
    type: 'long' as const,
    unit: 1,
    title: 'Short Fiction: Character Analysis',
    prompt: `A student is studying Short Fiction: Character in AP English Literature. Using your knowledge of course concepts, analyze the following scenario and answer the questions below.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Define a key concept related to Short Fiction: Character and explain its significance.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides an accurate definition of a concept from Short Fiction: Character', keywords: ['define', 'definition', 'concept', 'means', 'refers to'] },
          { points: 1, description: 'Explains significance or application', keywords: ['significant', 'important', 'because', 'therefore', 'impact', 'effect'] }
        ],
        sampleAnswer: 'A key concept in Short Fiction: Character is [concept]. This concept is significant because it helps explain [application]. Understanding this concept is essential for analyzing broader patterns in AP English Literature.',
      },
      {
        label: '(b)',
        prompt: 'Identify TWO specific examples that illustrate Short Fiction: Character.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides one relevant example', keywords: ['example', 'instance', 'such as', 'for instance', 'case'] },
          { points: 1, description: 'Provides a second relevant example', keywords: ['another', 'additionally', 'second', 'also', 'furthermore'] }
        ],
        sampleAnswer: 'Two examples of Short Fiction: Character include: (1) [Example 1 with specific details], and (2) [Example 2 with specific details]. Both examples demonstrate the core principles of this topic.',
      },
      {
        label: '(c)',
        prompt: 'Explain how Short Fiction: Character connects to Short Fiction: Plot.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid connection between Short Fiction: Character and Short Fiction: Plot', keywords: ['connect', 'relate', 'link', 'influence', 'affect', 'lead to'] },
          { points: 1, description: 'Explains the mechanism of connection', keywords: ['because', 'through', 'by means of', 'resulting in', 'mechanism'] }
        ],
        sampleAnswer: 'Short Fiction: Character connects to Short Fiction: Plot through shared underlying principles. Specifically, the processes that drive Short Fiction: Character also influence Short Fiction: Plot because [mechanism]. This interconnection is a key theme in AP English Literature.',
      },
      {
        label: '(d)',
        prompt: 'Evaluate the long-term implications of changes in Short Fiction: Character.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Provides a thoughtful evaluation of implications', keywords: ['implication', 'consequence', 'future', 'long-term', 'result', 'outcome', 'trend'] }
        ],
        sampleAnswer: 'Changes in Short Fiction: Character have significant long-term implications including [consequence]. As these trends continue, we can expect [future development], which will require [response or adaptation].',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englit-long-2',
    type: 'long' as const,
    unit: 1,
    title: 'Dramatic Structure & Social Commentary',
    prompt: `Consider the relationship between Dramatic Structure and Social Commentary. Using evidence and reasoning from AP English Literature, address the following.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Compare and contrast Dramatic Structure with Social Commentary.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid similarity between Dramatic Structure and Social Commentary', keywords: ['similar', 'both', 'share', 'common', 'alike'] },
          { points: 1, description: 'Identifies a valid difference between Dramatic Structure and Social Commentary', keywords: ['differ', 'unlike', 'contrast', 'whereas', 'however', 'but'] }
        ],
        sampleAnswer: 'Dramatic Structure and Social Commentary are similar in that they both [shared characteristic]. However, they differ in that Dramatic Structure focuses on [aspect] while Social Commentary emphasizes [different aspect].',
      },
      {
        label: '(b)',
        prompt: 'Explain ONE cause-and-effect relationship within Dramatic Structure.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid cause', keywords: ['cause', 'because', 'due to', 'result of', 'driven by'] },
          { points: 1, description: 'Explains the resulting effect', keywords: ['effect', 'result', 'consequence', 'leads to', 'outcome'] }
        ],
        sampleAnswer: 'In Dramatic Structure, [cause] leads to [effect]. This cause-and-effect relationship is important because it explains why [pattern or outcome] occurs.',
      },
      {
        label: '(c)',
        prompt: 'Using a specific example, explain how Social Commentary has changed over time.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides a specific historical or real-world example', keywords: ['example', 'specific', 'instance', 'case', 'historical'] },
          { points: 1, description: 'Explains the change over time', keywords: ['change', 'evolved', 'shifted', 'transformed', 'over time', 'developed'] }
        ],
        sampleAnswer: 'Social Commentary has changed significantly over time. For example, [specific case] demonstrates how [aspect] evolved from [earlier state] to [current state] due to [driving factor].',
      },
      {
        label: '(d)',
        prompt: 'Predict how current trends in Social Commentary might develop in the future.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Makes a reasonable prediction supported by course concepts', keywords: ['predict', 'future', 'likely', 'expect', 'trend', 'continue', 'may'] }
        ],
        sampleAnswer: 'Based on current trends, Social Commentary is likely to [predicted development] because [supporting reasoning from course concepts]. This prediction is supported by [evidence or pattern].',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: EngLitFRQ[] = [
  {
    id: 'englit-short-1',
    type: 'short' as const,
    unit: 1,
    title: 'Short Fiction: Theme Application',
    prompt: `Apply your knowledge of Short Fiction: Theme from AP English Literature to the following scenario.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Define Short Fiction: Theme in the context of AP English Literature.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Provides accurate definition', keywords: ['define', 'means', 'refers', 'concept', 'term'] }
        ],
        sampleAnswer: 'Short Fiction: Theme refers to [definition]. It is a fundamental component of AP English Literature.',
      },
      {
        label: '(b)',
        prompt: 'Provide ONE specific example.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Provides a relevant, specific example', keywords: ['example', 'instance', 'such as', 'case', 'specific'] }
        ],
        sampleAnswer: 'A specific example of this concept is [detailed example with specific names, dates, or data].',
      },
      {
        label: '(c)',
        prompt: 'Explain the significance of this concept for the AP exam.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains why the concept is important for the exam', keywords: ['significant', 'important', 'tested', 'appears', 'connects', 'multiple'] }
        ],
        sampleAnswer: 'This concept is significant because it connects to multiple units and appears frequently on the AP exam in both MC and FRQ formats.',
      },
      {
        label: '(d)',
        prompt: 'Explain ONE limitation or criticism of this concept.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies a valid limitation or criticism', keywords: ['limitation', 'criticism', 'however', 'does not', 'fails', 'overlooks', 'simplistic'] }
        ],
        sampleAnswer: 'One limitation is that [this concept] [specific criticism]. This limitation is important to recognize because [reasoning].',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englit-short-2',
    type: 'short' as const,
    unit: 1,
    title: 'Poetry: Imagery Skills',
    prompt: `Demonstrate your analytical skills related to Poetry: Imagery in AP English Literature.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Identify a key debate or controversy related to this topic.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies a relevant debate', keywords: ['debate', 'controversy', 'disagree', 'argue', 'dispute', 'question'] }
        ],
        sampleAnswer: 'A key debate involves [description of the controversy]. Different perspectives on this issue include [perspective 1] and [perspective 2].',
      },
      {
        label: '(b)',
        prompt: 'Explain ONE argument on each side of this debate.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Presents arguments from multiple sides', keywords: ['on one hand', 'however', 'alternatively', 'supporters', 'critics', 'proponents', 'opponents'] }
        ],
        sampleAnswer: 'Proponents argue that [argument for one side]. Critics counter that [argument for the other side].',
      },
      {
        label: '(c)',
        prompt: 'Using evidence, explain which side you find more persuasive.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Takes a position with supporting evidence', keywords: ['because', 'evidence', 'support', 'persuasive', 'convincing', 'therefore', 'data'] }
        ],
        sampleAnswer: 'I find [position] more persuasive because [specific evidence]. The evidence suggests that [conclusion].',
      },
      {
        label: '(d)',
        prompt: 'Explain how this debate reflects broader themes in AP English Literature.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Connects to course themes', keywords: ['theme', 'broader', 'connects', 'reflects', 'illustrates', 'course'] }
        ],
        sampleAnswer: 'This debate reflects broader themes in AP English Literature because [connection to course themes]. It illustrates [broader principle or pattern].',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  }
]

export const apEngLitFRQs: EngLitFRQ[] = [...longFRQs, ...shortFRQs]

export function getApEngLitFRQs(): EngLitFRQ[] {
  return apEngLitFRQs
}

export function getLongFRQs(): EngLitFRQ[] {
  return longFRQs
}

export function getShortFRQs(): EngLitFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(pool: EngLitFRQ[] = apEngLitFRQs): {
  long: EngLitFRQ[]
  short: EngLitFRQ[]
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedLong = shuffle(pool.filter((f) => f.type === 'long')).slice(0, 2)
  const selectedShort = shuffle(pool.filter((f) => f.type === 'short')).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '120 min',
  }
}
