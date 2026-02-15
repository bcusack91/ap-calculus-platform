export const precalcLawSinesCosinesPart1Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'law-o1-intro',
      type: 'text' as const,
      content: `
# 📈 Law Of Sines Cosines

**Part 1 of 7 — Law of Sines**

### 1. Law of Sines

a/sin A = b/sin B = c/sin C

### 2. Use when you know

AAS, ASA, or SSA

### 3. Relates sides to opposite angles

Relates sides to opposite angles

### 4. Can solve for unknown sides or angles

Can solve for unknown sides or angles
      `
    },
    {
      id: 'law-o1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of law of sines?',
            options: [
              'Law of Sines',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Law of Sines: a/sin A = b/sin B = c/sin C'
          },
          {
            question: 'In the context of law of sines, which is accurate?',
            options: [
              'Relates sides to opposite angles',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Relates sides to opposite angles'
          }
        ]
      }
    },
    {
      id: 'law-o1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Law of Sines**: a/sin A = b/sin B = c/sin C
- **Use when you know**: AAS, ASA, or SSA
- **Relates sides to opposite angles**
- **Can solve for unknown sides or angles**
      `
    },
    {
      id: 'law-o1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to law of sines?',
            options: [
              'Can solve for unknown sides or angles',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Can solve for unknown sides or angles'
          }
        ]
      }
    },
    {
      id: 'law-o1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Law of Sines',
            options: ['a/sin A = b/sin B = c/sin C', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Use when you know',
            options: ['AAS, ASA, or SSA', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Relates sides to opposite angles',
            options: ['Relates sides to opposite angles', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['a/sin A = b/sin B = c/sin C', 'AAS, ASA, or SSA', 'Relates sides to opposite angles'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Law of Sines.'
      }
    }
  ]
}
