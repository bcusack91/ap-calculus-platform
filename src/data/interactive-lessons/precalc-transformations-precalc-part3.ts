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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of stretches & compressions?',
            options: [
              'Vertical stretch by factor a',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Vertical stretch by factor a: a · f(x) where |a| > 1'
          },
          {
            question: 'In the context of stretches & compressions, which is accurate?',
            options: [
              'f(bx) where |b| > 1',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Horizontal compression by factor b: f(bx) where |b| > 1'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vertical stretch by factor a',
            options: ['a · f(x) where |a| > 1', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Vertical compression by factor a',
            options: ['a · f(x) where 0 < |a| < 1', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Horizontal compression by factor b',
            options: ['f(bx) where |b| > 1', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['a · f(x) where |a| > 1', 'a · f(x) where 0 < |a| < 1', 'f(bx) where |b| > 1'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Stretches & Compressions.'
      }
    }
  ]
}
