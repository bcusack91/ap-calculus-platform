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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Then evaluate the remaining integral',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Then evaluate the remaining integral'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Watch for improper integrals when limits include ∞',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Watch for improper integrals when limits include ∞'
          }
        ]
      }
    },
    {
      id: 'integ6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du',
            options: ['∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Evaluate the boundary term uv at both limits',
            options: ['Evaluate the boundary term uv at both limits', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Then evaluate the remaining integral',
            options: ['Then evaluate the remaining integral', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
