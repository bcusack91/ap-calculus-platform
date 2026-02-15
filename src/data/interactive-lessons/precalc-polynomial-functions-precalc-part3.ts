export const precalcPolynomialPart3Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'polyn3-intro',
      type: 'text' as const,
      content: `
# Zeros & Multiplicity

**Part 3 of 7 — Zeros & Multiplicity**

### 1. Zeros (roots)

values of x where f(x) = 0

### 2. Multiplicity

the number of times a factor repeats

### 3. Odd multiplicity

graph crosses the x-axis at that zero

### 4. Even multiplicity

graph touches and bounces off the x-axis
      `
    },
    {
      id: 'polyn3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of zeros & multiplicity?',
            options: [
              'Zeros (roots)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Zeros (roots): values of x where f(x) = 0'
          },
          {
            question: 'In the context of zeros & multiplicity, which is accurate?',
            options: [
              'graph crosses the x-axis at that zero',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Odd multiplicity: graph crosses the x-axis at that zero'
          }
        ]
      }
    },
    {
      id: 'polyn3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Zeros (roots)**: values of x where f(x) = 0
- **Multiplicity**: the number of times a factor repeats
- **Odd multiplicity**: graph crosses the x-axis at that zero
- **Even multiplicity**: graph touches and bounces off the x-axis
      `
    },
    {
      id: 'polyn3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to zeros & multiplicity?',
            options: [
              'graph touches and bounces off the x-axis',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Even multiplicity: graph touches and bounces off the x-axis'
          }
        ]
      }
    },
    {
      id: 'polyn3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Zeros (roots)',
            options: ['values of x where f(x) = 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Multiplicity',
            options: ['the number of times a factor repeats', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Odd multiplicity',
            options: ['graph crosses the x-axis at that zero', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['values of x where f(x) = 0', 'the number of times a factor repeats', 'graph crosses the x-axis at that zero'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Zeros & Multiplicity.'
      }
    }
  ]
}
