export const precalcLogarithmicPart4Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'logar4-intro',
      type: 'text' as const,
      content: `
# Solving Logarithmic Equations

**Part 4 of 7 — Solving Logarithmic Equations**

### 1. Isolate the logarithmic expression

Isolate the logarithmic expression

### 2. Convert to exponential form

log_b(x) = y → b^y = x

### 3. Check for extraneous solutions (argument must be positive)

Check for extraneous solutions (argument must be positive)

### 4. Use properties to combine or expand log expressions before solving

Use properties to combine or expand log expressions before solving
      `
    },
    {
      id: 'logar4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of solving logarithmic equations?',
            options: [
              'Isolate the logarithmic expression',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Isolate the logarithmic expression'
          },
          {
            question: 'In the context of solving logarithmic equations, which is accurate?',
            options: [
              'Check for extraneous solutions (argument must be positive)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Check for extraneous solutions (argument must be positive)'
          }
        ]
      }
    },
    {
      id: 'logar4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Isolate the logarithmic expression**
- **Convert to exponential form**: log_b(x) = y → b^y = x
- **Check for extraneous solutions (argument must be positive)**
- **Use properties to combine or expand log expressions before solving**
      `
    },
    {
      id: 'logar4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to solving logarithmic equations?',
            options: [
              'Use properties to combine or expand log expressions before solving',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Use properties to combine or expand log expressions before solving'
          }
        ]
      }
    },
    {
      id: 'logar4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Isolate the logarithmic expression',
            options: ['Isolate the logarithmic expression', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Convert to exponential form',
            options: ['log_b(x) = y → b^y = x', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Check for extraneous solutions (argument must be positive)',
            options: ['Check for extraneous solutions (argument must be p', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Isolate the logarithmic expression', 'log_b(x) = y → b^y = x', 'Check for extraneous solutions (argument must be p'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Solving Logarithmic Equations.'
      }
    }
  ]
}
