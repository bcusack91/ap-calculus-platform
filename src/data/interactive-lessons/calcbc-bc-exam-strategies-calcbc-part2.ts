export const calcBCExamStrategiesPart2Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex2-intro',
      type: 'text' as const,
      content: `
# Series Questions Strategy

**Part 2 of 7 — Series Questions Strategy**

### 1. Series MC

identify convergence test quickly using the strategy flowchart

### 2. Series FRQ

usually involves Taylor series construction, error bounds, and interval of convergence

### 3. Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))

Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))

### 4. Know how to construct new series from known ones by substitution, differentiation, integration

Know how to construct new series from known ones by substitution, differentiation, integration
      `
    },
    {
      id: 'bc-ex2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of series questions strategy?',
            options: [
              'Series MC',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Series MC: identify convergence test quickly using the strategy flowchart'
          },
          {
            question: 'In the context of series questions strategy, which is accurate?',
            options: [
              'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))'
          }
        ]
      }
    },
    {
      id: 'bc-ex2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Series MC**: identify convergence test quickly using the strategy flowchart
- **Series FRQ**: usually involves Taylor series construction, error bounds, and interval of convergence
- **Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))**
- **Know how to construct new series from known ones by substitution, differentiation, integration**
      `
    },
    {
      id: 'bc-ex2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to series questions strategy?',
            options: [
              'Know how to construct new series from known ones by substitution, differentiatio',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Know how to construct new series from known ones by substitution, differentiation, integration'
          }
        ]
      }
    },
    {
      id: 'bc-ex2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Series MC',
            options: ['identify convergence test quickly using the strate', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Series FRQ',
            options: ['usually involves Taylor series construction, error', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))',
            options: ['Memorize the common Maclaurin series (eˣ, sin x, c', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['identify convergence test quickly using the strate', 'usually involves Taylor series construction, error', 'Memorize the common Maclaurin series (eˣ, sin x, c'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Series Questions Strategy.'
      }
    }
  ]
}
