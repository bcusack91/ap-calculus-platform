export const precalcRatesOfChangePart3Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'rates3-intro',
      type: 'text' as const,
      content: `
# Instantaneous Rate of Change

**Part 3 of 7 — Instantaneous Rate of Change**

### 1. Instantaneous rate of change

limit of average rate as interval shrinks to zero

### 2. lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a

lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a

### 3. This is the slope of the tangent line at x = a

This is the slope of the tangent line at x = a

### 4. Preview of the derivative from calculus

Preview of the derivative from calculus
      `
    },
    {
      id: 'rates3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Instantaneous rate of change" refer to in precalculus?',
            options: [
              'lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a',
              'Preview of the derivative from calculus',
              'This is the slope of the tangent line at x = a',
              'limit of average rate as interval shrinks to zero'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Instantaneous rate of change: limit of average rate as interval shrinks to zero. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes This is the slope of the tangent line…:',
            options: [
              'limit of average rate as interval shrinks to zero',
              'lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a',
              'Preview of the derivative from calculus',
              'This is the slope of the tangent line at x = a'
            ],
            correctAnswer: 3,
            explanation: 'Correct — This is the slope of the tangent line at x = a. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'rates3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Instantaneous rate of change**: limit of average rate as interval shrinks to zero
- **lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a**
- **This is the slope of the tangent line at x = a**
- **Preview of the derivative from calculus**
      `
    },
    {
      id: 'rates3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to instantaneous rate of change?',
            options: [
              'Preview of the derivative from calculus',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Preview of the derivative from calculus'
          }
        ]
      }
    },
    {
      id: 'rates3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Instantaneous rate of change',
            options: ['lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a', 'limit of average rate as interval shrinks to zero', 'This is the slope of the tangent line at x = a', 'Preview of the derivative from calculus']
          },
          {
            label: 'lim(h→0) [f(a+h) - f(a)]/h gives the…',
            options: ['lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a', 'limit of average rate as interval shrinks to zero', 'Preview of the derivative from calculus', 'This is the slope of the tangent line at x = a']
          },
          {
            label: 'This is the slope of the tangent line…',
            options: ['lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a', 'Preview of the derivative from calculus', 'limit of average rate as interval shrinks to zero', 'This is the slope of the tangent line at x = a']
          }
        ],
        correctAnswers: ['limit of average rate as interval shrinks to zero', 'lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a', 'This is the slope of the tangent line at x = a'],
        hint1: 'Think about what each concept specifically describes in Instantaneous Rate of Change.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Instantaneous Rate of Change describes a specific idea. Instantaneous rate of change: limit of average rate as interval shrinks to zero. lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a. This is the slope of the tangent line at x = a.'
      }
    }
  ]
}
