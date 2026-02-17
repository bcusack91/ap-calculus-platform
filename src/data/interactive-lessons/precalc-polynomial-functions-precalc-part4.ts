export const precalcPolynomialPart4Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'polyn4-intro',
      type: 'text' as const,
      content: `
# Graphing Polynomials

**Part 4 of 7 — Graphing Polynomials**

### 1. Plot zeros and y-intercept first

Plot zeros and y-intercept first

### 2. Use end behavior to sketch the tails

Use end behavior to sketch the tails

### 3. Apply multiplicity to determine crossing vs bouncing

Apply multiplicity to determine crossing vs bouncing

### 4. Connect with a smooth, continuous curve

Connect with a smooth, continuous curve
      `
    },
    {
      id: 'polyn4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Plot zeros and y-intercept first" refer to in precalculus?',
            options: [
              'Apply multiplicity to determine crossing vs bouncing',
              'Plot zeros and y-intercept first',
              'Use end behavior to sketch the tails',
              'Connect with a smooth, continuous curve'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Plot zeros and y-intercept first. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Apply multiplicity to determine…:',
            options: [
              'Use end behavior to sketch the tails',
              'Plot zeros and y-intercept first',
              'Connect with a smooth, continuous curve',
              'Apply multiplicity to determine crossing vs bouncing'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Apply multiplicity to determine crossing vs bouncing. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polyn4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Plot zeros and y-intercept first**
- **Use end behavior to sketch the tails**
- **Apply multiplicity to determine crossing vs bouncing**
- **Connect with a smooth, continuous curve**
      `
    },
    {
      id: 'polyn4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to graphing polynomials?',
            options: [
              'Connect with a smooth, continuous curve',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Connect with a smooth, continuous curve'
          }
        ]
      }
    },
    {
      id: 'polyn4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Plot zeros and y-intercept first',
            options: ['Apply multiplicity to determine crossing vs bouncing', 'Connect with a smooth, continuous curve', 'Plot zeros and y-intercept first', 'Use end behavior to sketch the tails']
          },
          {
            label: 'Use end behavior to sketch the tails',
            options: ['Apply multiplicity to determine crossing vs bouncing', 'Connect with a smooth, continuous curve', 'Plot zeros and y-intercept first', 'Use end behavior to sketch the tails']
          },
          {
            label: 'Apply multiplicity to determine…',
            options: ['Connect with a smooth, continuous curve', 'Apply multiplicity to determine crossing vs bouncing', 'Use end behavior to sketch the tails', 'Plot zeros and y-intercept first']
          }
        ],
        correctAnswers: ['Plot zeros and y-intercept first', 'Use end behavior to sketch the tails', 'Apply multiplicity to determine crossing vs bouncing'],
        hint1: 'Think about what each concept specifically describes in Graphing Polynomials.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Graphing Polynomials describes a specific idea. Plot zeros and y-intercept first. Use end behavior to sketch the tails. Apply multiplicity to determine crossing vs bouncing.'
      }
    }
  ]
}
