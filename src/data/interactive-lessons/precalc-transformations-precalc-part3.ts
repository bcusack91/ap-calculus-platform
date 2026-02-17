export const precalcTransformationsPart3Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'trans3-intro',
      type: 'text' as const,
      content: `
# Stretches & Compressions

**Part 3 of 7 — Stretches & Compressions**

### 1. Vertical stretch by factor a

a · f(x) where |a| > 1

### 2. Vertical compression by factor a

a · f(x) where 0 < |a| < 1

### 3. Horizontal compression by factor b

f(bx) where |b| > 1

### 4. Horizontal stretch by factor b

f(bx) where 0 < |b| < 1
      `
    },
    {
      id: 'trans3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Vertical stretch by factor a" refer to in precalculus?',
            options: [
              'a · f(x) where |a| > 1',
              'a · f(x) where 0 < |a| < 1',
              'f(bx) where 0 < |b| < 1',
              'f(bx) where |b| > 1'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Vertical stretch by factor a: a · f(x) where |a| > 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Horizontal compression by factor b?',
            options: [
              'a · f(x) where 0 < |a| < 1',
              'f(bx) where |b| > 1',
              'a · f(x) where |a| > 1',
              'f(bx) where 0 < |b| < 1'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Horizontal compression by factor b: f(bx) where |b| > 1. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'trans3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Vertical stretch by factor a**: a · f(x) where |a| > 1
- **Vertical compression by factor a**: a · f(x) where 0 < |a| < 1
- **Horizontal compression by factor b**: f(bx) where |b| > 1
- **Horizontal stretch by factor b**: f(bx) where 0 < |b| < 1
      `
    },
    {
      id: 'trans3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to stretches & compressions?',
            options: [
              'f(bx) where 0 < |b| < 1',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Horizontal stretch by factor b: f(bx) where 0 < |b| < 1'
          }
        ]
      }
    },
    {
      id: 'trans3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vertical stretch by factor a',
            options: ['f(bx) where 0 < |b| < 1', 'a · f(x) where |a| > 1', 'a · f(x) where 0 < |a| < 1', 'f(bx) where |b| > 1']
          },
          {
            label: 'Vertical compression by factor a',
            options: ['f(bx) where |b| > 1', 'a · f(x) where |a| > 1', 'a · f(x) where 0 < |a| < 1', 'f(bx) where 0 < |b| < 1']
          },
          {
            label: 'Horizontal compression by factor b',
            options: ['a · f(x) where 0 < |a| < 1', 'f(bx) where |b| > 1', 'a · f(x) where |a| > 1', 'f(bx) where 0 < |b| < 1']
          }
        ],
        correctAnswers: ['a · f(x) where |a| > 1', 'a · f(x) where 0 < |a| < 1', 'f(bx) where |b| > 1'],
        hint1: 'Think about what each concept specifically describes in Stretches & Compressions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Stretches & Compressions describes a specific idea. Vertical stretch by factor a: a · f(x) where |a| > 1. Vertical compression by factor a: a · f(x) where 0 < |a| < 1. Horizontal compression by factor b: f(bx) where |b| > 1.'
      }
    }
  ]
}
