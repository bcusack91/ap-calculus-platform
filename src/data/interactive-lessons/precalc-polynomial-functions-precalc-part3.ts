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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Zeros (roots)" refer to in precalculus?',
            options: [
              'the number of times a factor repeats',
              'graph crosses the x-axis at that zero',
              'graph touches and bounces off the x-axis',
              'values of x where f(x) = 0'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Zeros (roots): values of x where f(x) = 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Odd multiplicity?',
            options: [
              'values of x where f(x) = 0',
              'the number of times a factor repeats',
              'graph touches and bounces off the x-axis',
              'graph crosses the x-axis at that zero'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Odd multiplicity: graph crosses the x-axis at that zero. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Zeros (roots)',
            options: ['the number of times a factor repeats', 'graph crosses the x-axis at that zero', 'graph touches and bounces off the x-axis', 'values of x where f(x) = 0']
          },
          {
            label: 'Multiplicity',
            options: ['the number of times a factor repeats', 'graph touches and bounces off the x-axis', 'graph crosses the x-axis at that zero', 'values of x where f(x) = 0']
          },
          {
            label: 'Odd multiplicity',
            options: ['values of x where f(x) = 0', 'graph touches and bounces off the x-axis', 'the number of times a factor repeats', 'graph crosses the x-axis at that zero']
          }
        ],
        correctAnswers: ['values of x where f(x) = 0', 'the number of times a factor repeats', 'graph crosses the x-axis at that zero'],
        hint1: 'Think about what each concept specifically describes in Zeros & Multiplicity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Zeros & Multiplicity describes a specific idea. Zeros (roots): values of x where f(x) = 0. Multiplicity: the number of times a factor repeats. Odd multiplicity: graph crosses the x-axis at that zero.'
      }
    }
  ]
}
