export const calcABVolumesPart3Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'volum3-intro',
      type: 'text' as const,
      content: `
# Revolving Around Other Axes

**Part 3 of 7 — Revolving Around Other Axes**

### 1. Revolving about y = k

adjust radii by subtracting k

### 2. Revolving about x = k

integrate with respect to y, adjust radii

### 3. Outer radius = |farther boundary - axis|

Outer radius = |farther boundary - axis|

### 4. Inner radius = |closer boundary - axis|

Inner radius = |closer boundary - axis|
      `
    },
    {
      id: 'volum3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of revolving around other axes?',
            options: [
              'Revolving about y = k',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Revolving about y = k: adjust radii by subtracting k'
          },
          {
            question: 'In the context of revolving around other axes, which is accurate?',
            options: [
              'Outer radius = |farther boundary - axis|',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Outer radius = |farther boundary - axis|'
          }
        ]
      }
    },
    {
      id: 'volum3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Revolving about y = k**: adjust radii by subtracting k
- **Revolving about x = k**: integrate with respect to y, adjust radii
- **Outer radius = |farther boundary - axis|**
- **Inner radius = |closer boundary - axis|**
      `
    },
    {
      id: 'volum3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to revolving around other axes?',
            options: [
              'Inner radius = |closer boundary - axis|',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Inner radius = |closer boundary - axis|'
          }
        ]
      }
    },
    {
      id: 'volum3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Revolving about y = k',
            options: ['adjust radii by subtracting k', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Revolving about x = k',
            options: ['integrate with respect to y, adjust radii', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Outer radius = |farther boundary - axis|',
            options: ['Outer radius = |farther boundary - axis|', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['adjust radii by subtracting k', 'integrate with respect to y, adjust radii', 'Outer radius = |farther boundary - axis|'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Revolving Around Other Axes.'
      }
    }
  ]
}
