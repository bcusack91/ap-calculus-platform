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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Isolate the logarithmic expression?',
            options: [
              'Check for extraneous solutions (argument must be positive)',
              'Isolate the logarithmic expression',
              'Use properties to combine or expand log expressions before solving',
              'log_b(x) = y → b^y = x'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Isolate the logarithmic expression. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Check for extraneous solutions…:',
            options: [
              'Use properties to combine or expand log expressions before solving',
              'Check for extraneous solutions (argument must be positive)',
              'log_b(x) = y → b^y = x',
              'Isolate the logarithmic expression'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Check for extraneous solutions (argument must be positive). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Isolate the logarithmic expression',
            options: ['Use properties to combine or expand log expressions before solving', 'Isolate the logarithmic expression', 'Check for extraneous solutions (argument must be positive)', 'log_b(x) = y → b^y = x']
          },
          {
            label: 'Convert to exponential form',
            options: ['Check for extraneous solutions (argument must be positive)', 'Isolate the logarithmic expression', 'log_b(x) = y → b^y = x', 'Use properties to combine or expand log expressions before solving']
          },
          {
            label: 'Check for extraneous solutions…',
            options: ['log_b(x) = y → b^y = x', 'Check for extraneous solutions (argument must be positive)', 'Use properties to combine or expand log expressions before solving', 'Isolate the logarithmic expression']
          }
        ],
        correctAnswers: ['Isolate the logarithmic expression', 'log_b(x) = y → b^y = x', 'Check for extraneous solutions (argument must be positive)'],
        hint1: 'Think about what each concept specifically describes in Solving Logarithmic Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Solving Logarithmic Equations describes a specific idea. Isolate the logarithmic expression. Convert to exponential form: log_b(x) = y → b^y = x. Check for extraneous solutions (argument must be positive).'
      }
    }
  ]
}
