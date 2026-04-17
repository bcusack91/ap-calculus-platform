/**
 * AP English Language FRQ Practice Questions
 * Based on College Board AP English Language FRQ format
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

export interface EngLangFRQ {
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

const longFRQs: EngLangFRQ[] = [
  {
    id: 'englang-long-1',
    type: 'long' as const,
    unit: 1,
    title: 'Intro to Rhetoric Analysis',
    prompt: `A student is studying Intro to Rhetoric in AP English Language. Using your knowledge of course concepts, analyze the following scenario and answer the questions below.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Define a key concept related to Intro to Rhetoric and explain its significance.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides an accurate definition of a concept from Intro to Rhetoric', keywords: ['define', 'definition', 'concept', 'means', 'refers to'] },
          { points: 1, description: 'Explains significance or application', keywords: ['significant', 'important', 'because', 'therefore', 'impact', 'effect'] }
        ],
        sampleAnswer: 'A key concept in Intro to Rhetoric is [concept]. This concept is significant because it helps explain [application]. Understanding this concept is essential for analyzing broader patterns in AP English Language.',
      },
      {
        label: '(b)',
        prompt: 'Identify TWO specific examples that illustrate Intro to Rhetoric.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides one relevant example', keywords: ['example', 'instance', 'such as', 'for instance', 'case'] },
          { points: 1, description: 'Provides a second relevant example', keywords: ['another', 'additionally', 'second', 'also', 'furthermore'] }
        ],
        sampleAnswer: 'Two examples of Intro to Rhetoric include: (1) [Example 1 with specific details], and (2) [Example 2 with specific details]. Both examples demonstrate the core principles of this topic.',
      },
      {
        label: '(c)',
        prompt: 'Explain how Intro to Rhetoric connects to Rhetorical Situation.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid connection between Intro to Rhetoric and Rhetorical Situation', keywords: ['connect', 'relate', 'link', 'influence', 'affect', 'lead to'] },
          { points: 1, description: 'Explains the mechanism of connection', keywords: ['because', 'through', 'by means of', 'resulting in', 'mechanism'] }
        ],
        sampleAnswer: 'Intro to Rhetoric connects to Rhetorical Situation through shared underlying principles. Specifically, the processes that drive Intro to Rhetoric also influence Rhetorical Situation because [mechanism]. This interconnection is a key theme in AP English Language.',
      },
      {
        label: '(d)',
        prompt: 'Evaluate the long-term implications of changes in Intro to Rhetoric.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Provides a thoughtful evaluation of implications', keywords: ['implication', 'consequence', 'future', 'long-term', 'result', 'outcome', 'trend'] }
        ],
        sampleAnswer: 'Changes in Intro to Rhetoric have significant long-term implications including [consequence]. As these trends continue, we can expect [future development], which will require [response or adaptation].',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englang-long-2',
    type: 'long' as const,
    unit: 1,
    title: 'Diction & Syntax & Writing for Audience',
    prompt: `Consider the relationship between Diction & Syntax and Writing for Audience. Using evidence and reasoning from AP English Language, address the following.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Compare and contrast Diction & Syntax with Writing for Audience.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid similarity between Diction & Syntax and Writing for Audience', keywords: ['similar', 'both', 'share', 'common', 'alike'] },
          { points: 1, description: 'Identifies a valid difference between Diction & Syntax and Writing for Audience', keywords: ['differ', 'unlike', 'contrast', 'whereas', 'however', 'but'] }
        ],
        sampleAnswer: 'Diction & Syntax and Writing for Audience are similar in that they both [shared characteristic]. However, they differ in that Diction & Syntax focuses on [aspect] while Writing for Audience emphasizes [different aspect].',
      },
      {
        label: '(b)',
        prompt: 'Explain ONE cause-and-effect relationship within Diction & Syntax.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid cause', keywords: ['cause', 'because', 'due to', 'result of', 'driven by'] },
          { points: 1, description: 'Explains the resulting effect', keywords: ['effect', 'result', 'consequence', 'leads to', 'outcome'] }
        ],
        sampleAnswer: 'In Diction & Syntax, [cause] leads to [effect]. This cause-and-effect relationship is important because it explains why [pattern or outcome] occurs.',
      },
      {
        label: '(c)',
        prompt: 'Using a specific example, explain how Writing for Audience has changed over time.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides a specific historical or real-world example', keywords: ['example', 'specific', 'instance', 'case', 'historical'] },
          { points: 1, description: 'Explains the change over time', keywords: ['change', 'evolved', 'shifted', 'transformed', 'over time', 'developed'] }
        ],
        sampleAnswer: 'Writing for Audience has changed significantly over time. For example, [specific case] demonstrates how [aspect] evolved from [earlier state] to [current state] due to [driving factor].',
      },
      {
        label: '(d)',
        prompt: 'Predict how current trends in Writing for Audience might develop in the future.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Makes a reasonable prediction supported by course concepts', keywords: ['predict', 'future', 'likely', 'expect', 'trend', 'continue', 'may'] }
        ],
        sampleAnswer: 'Based on current trends, Writing for Audience is likely to [predicted development] because [supporting reasoning from course concepts]. This prediction is supported by [evidence or pattern].',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: EngLangFRQ[] = [
  {
    id: 'englang-short-1',
    type: 'short' as const,
    unit: 1,
    title: 'Rhetorical Writing Application',
    prompt: `Apply your knowledge of Rhetorical Writing from AP English Language to the following scenario.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Define Rhetorical Writing in the context of AP English Language.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Provides accurate definition', keywords: ['define', 'means', 'refers', 'concept', 'term'] }
        ],
        sampleAnswer: 'Rhetorical Writing refers to [definition]. It is a fundamental component of AP English Language.',
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
    id: 'englang-short-2',
    type: 'short' as const,
    unit: 1,
    title: 'Claims & Evidence Skills',
    prompt: `Demonstrate your analytical skills related to Claims & Evidence in AP English Language.`,
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
        prompt: 'Explain how this debate reflects broader themes in AP English Language.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Connects to course themes', keywords: ['theme', 'broader', 'connects', 'reflects', 'illustrates', 'course'] }
        ],
        sampleAnswer: 'This debate reflects broader themes in AP English Language because [connection to course themes]. It illustrates [broader principle or pattern].',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  }
]

export const apEngLangFRQs: EngLangFRQ[] = [...longFRQs, ...shortFRQs]

export function getApEngLangFRQs(): EngLangFRQ[] {
  return apEngLangFRQs
}

export function getLongFRQs(): EngLangFRQ[] {
  return longFRQs
}

export function getShortFRQs(): EngLangFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: EngLangFRQ[]
  short: EngLangFRQ[]
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

  const selectedLong = shuffle(longFRQs).slice(0, 2)
  const selectedShort = shuffle(shortFRQs).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '135 min',
  }
}
