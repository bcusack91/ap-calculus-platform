export const calcBCIntByPartsPart5Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'integ5-intro',
      type: 'text' as const,
      content: `
# Definite Integrals by Parts

**Part 5 of 7 — Definite Integrals by Parts**

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
      id: 'integ5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du?',
            options: [
              'Watch for improper integrals when limits include ∞',
              'Evaluate the boundary term uv at both limits',
              'Then evaluate the remaining integral',
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Definite Integrals by Parts, which explains Then evaluate the remaining integral?',
            options: [
              'Evaluate the boundary term uv at both limits',
              'Watch for improper integrals when limits include ∞',
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
      id: 'integ5-detail',
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
      id: 'integ5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Watch for improper integrals when… is correct?',
            options: [
              'Watch for improper integrals when limits include ∞',
              'Then evaluate the remaining integral',
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
              'Evaluate the boundary term uv at both limits'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Watch for improper integrals when limits include ∞. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
            options: ['∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Watch for improper integrals when limits include ∞', 'Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral']
          },
          {
            label: 'Evaluate the boundary term uv at both…',
            options: ['Watch for improper integrals when limits include ∞', '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Then evaluate the remaining integral', 'Evaluate the boundary term uv at both limits']
          },
          {
            label: 'Then evaluate the remaining integral',
            options: ['Watch for improper integrals when limits include ∞', '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral']
          }
        ],
        correctAnswers: ['∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral'],
        hint1: 'Think about what each concept specifically describes in Definite Integrals by Parts.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Definite Integrals by Parts describes a specific idea. ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du. Evaluate the boundary term uv at both limits. Then evaluate the remaining integral.'
      }
    }
  ]
}
