export const calcABIntAppsPart4Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'integ4-intro',
      type: 'text' as const,
      content: `
# Population & Accumulation

**Part 4 of 7 — Population & Accumulation**

### 1. Population growth

P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate

### 2. Total amount consumed/produced

integral of the rate

### 3. Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt

Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt

### 4. Net change = integral of the rate function over the interval

Net change = integral of the rate function over the interval
      `
    },
    {
      id: 'integ4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Population growth?',
            options: [
              'P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate',
              'Net change = integral of the rate function over the interval',
              'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt',
              'integral of the rate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Population growth: P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Population & Accumulation, which explains Average rate over [a,b] = (1/(b-a))∫ₐᵇ…?',
            options: [
              'Net change = integral of the rate function over the interval',
              'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt',
              'P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate',
              'integral of the rate'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'integ4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Population growth**: P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate
- **Total amount consumed/produced**: integral of the rate
- **Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt**
- **Net change = integral of the rate function over the interval**
      `
    },
    {
      id: 'integ4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Net change = integral of the rate…?',
            options: [
              'Net change = integral of the rate function over the interval',
              'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt',
              'P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate',
              'integral of the rate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Net change = integral of the rate function over the interval. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Population growth',
            options: ['integral of the rate', 'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt', 'Net change = integral of the rate function over the interval', 'P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate']
          },
          {
            label: 'Total amount consumed/produced',
            options: ['Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt', 'integral of the rate', 'Net change = integral of the rate function over the interval', 'P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate']
          }
        ],
        correctAnswers: ['P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate', 'integral of the rate'],
        hint1: 'Think about what each concept specifically describes in Population & Accumulation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Population & Accumulation describes a specific idea. Population growth: P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate. Total amount consumed/produced: integral of the rate.'
      }
    }
  ]
}
