export const calcBCIntByPartsPart6Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'integ6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'integ6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du?',
            options: [
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
              'Watch for improper integrals when limits include ∞',
              'Then evaluate the remaining integral',
              'Evaluate the boundary term uv at both limits'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Then evaluate the remaining integral:',
            options: [
              'Then evaluate the remaining integral',
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
              'Watch for improper integrals when limits include ∞',
              'Evaluate the boundary term uv at both limits'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Then evaluate the remaining integral. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'integ6-detail',
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
      id: 'integ6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Watch for improper integrals when…?',
            options: [
              'Watch for improper integrals when limits include ∞',
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
              'Then evaluate the remaining integral',
              'Evaluate the boundary term uv at both limits'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Watch for improper integrals when limits include ∞. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
            options: ['Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral', '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Watch for improper integrals when limits include ∞']
          },
          {
            label: 'Evaluate the boundary term uv at both…',
            options: ['Watch for improper integrals when limits include ∞', '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral']
          },
          {
            label: 'Then evaluate the remaining integral',
            options: ['Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral', '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Watch for improper integrals when limits include ∞']
          }
        ],
        correctAnswers: ['∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du. Evaluate the boundary term uv at both limits. Then evaluate the remaining integral.'
      }
    }
  ]
}
