export const calcABChainRulePart1Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain1-intro',
      type: 'text' as const,
      content: `
# ∫ Chain Rule

**Part 1 of 7 — The Chain Rule**

### 1. Chain Rule

d/dx[f(g(x))] = f'(g(x)) · g'(x)

### 2. Outer derivative times inner derivative

Outer derivative times inner derivative

### 3. Leibniz notation

dy/dx = (dy/du)(du/dx)

### 4. Used whenever one function is "inside" another

Used whenever one function is "inside" another
      `
    },
    {
      id: 'chain1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of the chain rule?',
            options: [
              'Chain Rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Chain Rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x)'
          },
          {
            question: 'In the context of the chain rule, which is accurate?',
            options: [
              'dy/dx = (dy/du)(du/dx)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Leibniz notation: dy/dx = (dy/du)(du/dx)'
          }
        ]
      }
    },
    {
      id: 'chain1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Chain Rule**: d/dx[f(g(x))] = f'(g(x)) · g'(x)
- **Outer derivative times inner derivative**
- **Leibniz notation**: dy/dx = (dy/du)(du/dx)
- **Used whenever one function is "inside" another**
      `
    },
    {
      id: 'chain1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to the chain rule?',
            options: [
              'Used whenever one function is "inside" another',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Used whenever one function is "inside" another'
          }
        ]
      }
    },
    {
      id: 'chain1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chain Rule',
            options: ['d/dx[f(g(x))] = f\'(g(x)) · g\'(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Outer derivative times inner derivative',
            options: ['Outer derivative times inner derivative', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Leibniz notation',
            options: ['dy/dx = (dy/du)(du/dx)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[f(g(x))] = f\'(g(x)) · g\'(x)', 'Outer derivative times inner derivative', 'dy/dx = (dy/du)(du/dx)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding The Chain Rule.'
      }
    }
  ]
}
