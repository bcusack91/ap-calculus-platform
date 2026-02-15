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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of population & accumulation?',
            options: [
              'Population growth',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Population growth: P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate'
          },
          {
            question: 'In the context of population & accumulation, which is accurate?',
            options: [
              'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to population & accumulation?',
            options: [
              'Net change = integral of the rate function over the interval',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Net change = integral of the rate function over the interval'
          }
        ]
      }
    },
    {
      id: 'integ4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Population growth',
            options: ['P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Total amount consumed/produced',
            options: ['integral of the rate', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt',
            options: ['Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rat', 'integral of the rate', 'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Population & Accumulation.'
      }
    }
  ]
}
