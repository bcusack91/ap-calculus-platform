export const precalcCompositionPart4Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'funct4-intro',
      type: 'text' as const,
      content: `
# Finding Inverses Algebraically

**Part 4 of 7 — Finding Inverses Algebraically**

### 1. Replace f(x) with y

Replace f(x) with y

### 2. Swap x and y in the equation

Swap x and y in the equation

### 3. Solve the new equation for y

Solve the new equation for y

### 4. Replace y with f⁻¹(x) and state the domain

Replace y with f⁻¹(x) and state the domain
      `
    },
    {
      id: 'funct4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Replace f(x) with y?',
            options: [
              'Replace f(x) with y',
              'Replace y with f⁻¹(x) and state the domain',
              'Solve the new equation for y',
              'Swap x and y in the equation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Replace f(x) with y. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Finding Inverses Algebraically, which explains Solve the new equation for y?',
            options: [
              'Replace y with f⁻¹(x) and state the domain',
              'Replace f(x) with y',
              'Solve the new equation for y',
              'Swap x and y in the equation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Solve the new equation for y. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'funct4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Replace f(x) with y**
- **Swap x and y in the equation**
- **Solve the new equation for y**
- **Replace y with f⁻¹(x) and state the domain**
      `
    },
    {
      id: 'funct4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to finding inverses algebraically?',
            options: [
              'Replace y with f⁻¹(x) and state the domain',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Replace y with f⁻¹(x) and state the domain'
          }
        ]
      }
    },
    {
      id: 'funct4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Replace f(x) with y',
            options: ['Swap x and y in the equation', 'Solve the new equation for y', 'Replace y with f⁻¹(x) and state the domain', 'Replace f(x) with y']
          },
          {
            label: 'Swap x and y in the equation',
            options: ['Replace y with f⁻¹(x) and state the domain', 'Solve the new equation for y', 'Replace f(x) with y', 'Swap x and y in the equation']
          },
          {
            label: 'Solve the new equation for y',
            options: ['Replace y with f⁻¹(x) and state the domain', 'Replace f(x) with y', 'Solve the new equation for y', 'Swap x and y in the equation']
          }
        ],
        correctAnswers: ['Replace f(x) with y', 'Swap x and y in the equation', 'Solve the new equation for y'],
        hint1: 'Think about what each concept specifically describes in Finding Inverses Algebraically.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Finding Inverses Algebraically describes a specific idea. Replace f(x) with y. Swap x and y in the equation. Solve the new equation for y.'
      }
    }
  ]
}
