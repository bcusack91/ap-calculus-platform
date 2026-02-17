export const calcBCIntByPartsPart7Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'integ7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du

∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du

### 2. Evaluate the boundary term uv at both limits

Evaluate the boundary term uv at both limits

### 3. Then evaluate the remaining integral

Then evaluate the remaining integral

### 4. Watch for improper integrals when limits include ∞

Watch for improper integrals when limits include ∞
      `
    },
    {
      id: 'integ7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du?',
            options: [
              'Evaluate the boundary term uv at both limits',
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
              'Then evaluate the remaining integral',
              'Watch for improper integrals when limits include ∞'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Then evaluate the remaining integral:',
            options: [
              'Watch for improper integrals when limits include ∞',
              'Evaluate the boundary term uv at both limits',
              'Then evaluate the remaining integral',
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Then evaluate the remaining integral. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'integ7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du**
- **Evaluate the boundary term uv at both limits**
- **Then evaluate the remaining integral**
- **Watch for improper integrals when limits include ∞**
      `
    },
    {
      id: 'integ7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Watch for improper integrals when…?',
            options: [
              'Evaluate the boundary term uv at both limits',
              'Then evaluate the remaining integral',
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
              'Watch for improper integrals when limits include ∞'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Watch for improper integrals when limits include ∞. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
            options: ['Evaluate the boundary term uv at both limits', 'Watch for improper integrals when limits include ∞', 'Then evaluate the remaining integral', '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du']
          },
          {
            label: 'Evaluate the boundary term uv at both…',
            options: ['Then evaluate the remaining integral', '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Evaluate the boundary term uv at both limits', 'Watch for improper integrals when limits include ∞']
          },
          {
            label: 'Then evaluate the remaining integral',
            options: ['∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Then evaluate the remaining integral', 'Evaluate the boundary term uv at both limits', 'Watch for improper integrals when limits include ∞']
          }
        ],
        correctAnswers: ['∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du. Evaluate the boundary term uv at both limits. Then evaluate the remaining integral.'
      }
    }
  ]
}
