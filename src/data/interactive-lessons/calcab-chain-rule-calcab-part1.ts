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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Chain Rule" refer to in calculus?',
            options: [
              'Used whenever one function is "inside" another',
              'dy/dx = (dy/du)(du/dx)',
              'd/dx[f(g(x))] = f\'(g(x)) · g\'(x)',
              'Outer derivative times inner derivative'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Chain Rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Leibniz notation:',
            options: [
              'Used whenever one function is "inside" another',
              'dy/dx = (dy/du)(du/dx)',
              'd/dx[f(g(x))] = f\'(g(x)) · g\'(x)',
              'Outer derivative times inner derivative'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Leibniz notation: dy/dx = (dy/du)(du/dx). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Used whenever one function is "inside"…?',
            options: [
              'Outer derivative times inner derivative',
              'dy/dx = (dy/du)(du/dx)',
              'd/dx[f(g(x))] = f\'(g(x)) · g\'(x)',
              'Used whenever one function is "inside" another'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Used whenever one function is "inside" another. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'chain1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chain Rule',
            options: ['Used whenever one function is "inside" another', 'd/dx[f(g(x))] = f\'(g(x)) · g\'(x)', 'Outer derivative times inner derivative', 'dy/dx = (dy/du)(du/dx)']
          },
          {
            label: 'Leibniz notation',
            options: ['d/dx[f(g(x))] = f\'(g(x)) · g\'(x)', 'Outer derivative times inner derivative', 'dy/dx = (dy/du)(du/dx)', 'Used whenever one function is "inside" another']
          }
        ],
        correctAnswers: ['d/dx[f(g(x))] = f\'(g(x)) · g\'(x)', 'dy/dx = (dy/du)(du/dx)'],
        hint1: 'Think about what each concept specifically describes in Chain Rule.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Chain Rule describes a specific idea. Chain Rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x). Leibniz notation: dy/dx = (dy/du)(du/dx).'
      }
    }
  ]
}
