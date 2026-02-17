export const calcABBasicDiffPart2Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic2-intro',
      type: 'text' as const,
      content: `
# Constant & Sum Rules

**Part 2 of 7 — Constant & Sum Rules**

### 1. Constant rule

d/dx[c] = 0 for any constant c

### 2. Sum/Difference rule

d/dx[f ± g] = f' ± g'

### 3. Constant multiple rule

d/dx[c·f(x)] = c·f'(x)

### 4. Differentiate each term independently, then combine

Differentiate each term independently, then combine
      `
    },
    {
      id: 'basic2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Constant rule?',
            options: [
              'd/dx[c] = 0 for any constant c',
              'd/dx[c·f(x)] = c·f\'(x)',
              'd/dx[f ± g] = f\' ± g\'',
              'Differentiate each term independently, then combine'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Constant rule: d/dx[c] = 0 for any constant c. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Constant multiple rule:',
            options: [
              'd/dx[c] = 0 for any constant c',
              'Differentiate each term independently, then combine',
              'd/dx[c·f(x)] = c·f\'(x)',
              'd/dx[f ± g] = f\' ± g\''
            ],
            correctAnswer: 2,
            explanation: 'Correct — Constant multiple rule: d/dx[c·f(x)] = c·f\'(x). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'basic2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Constant rule**: d/dx[c] = 0 for any constant c
- **Sum/Difference rule**: d/dx[f ± g] = f' ± g'
- **Constant multiple rule**: d/dx[c·f(x)] = c·f'(x)
- **Differentiate each term independently, then combine**
      `
    },
    {
      id: 'basic2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Differentiate each term independently,… is correct?',
            options: [
              'Differentiate each term independently, then combine',
              'd/dx[c·f(x)] = c·f\'(x)',
              'd/dx[c] = 0 for any constant c',
              'd/dx[f ± g] = f\' ± g\''
            ],
            correctAnswer: 0,
            explanation: 'Correct — Differentiate each term independently, then combine. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'basic2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Constant rule',
            options: ['d/dx[c·f(x)] = c·f\'(x)', 'd/dx[f ± g] = f\' ± g\'', 'Differentiate each term independently, then combine', 'd/dx[c] = 0 for any constant c']
          },
          {
            label: 'Sum/Difference rule',
            options: ['d/dx[c] = 0 for any constant c', 'd/dx[c·f(x)] = c·f\'(x)', 'd/dx[f ± g] = f\' ± g\'', 'Differentiate each term independently, then combine']
          },
          {
            label: 'Constant multiple rule',
            options: ['Differentiate each term independently, then combine', 'd/dx[c·f(x)] = c·f\'(x)', 'd/dx[c] = 0 for any constant c', 'd/dx[f ± g] = f\' ± g\'']
          }
        ],
        correctAnswers: ['d/dx[c] = 0 for any constant c', 'd/dx[f ± g] = f\' ± g\'', 'd/dx[c·f(x)] = c·f\'(x)'],
        hint1: 'Think about what each concept specifically describes in Constant & Sum Rules.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Constant & Sum Rules describes a specific idea. Constant rule: d/dx[c] = 0 for any constant c. Sum/Difference rule: d/dx[f ± g] = f\' ± g\'. Constant multiple rule: d/dx[c·f(x)] = c·f\'(x).'
      }
    }
  ]
}
