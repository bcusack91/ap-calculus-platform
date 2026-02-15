export const precalcLawSinesCosinesPart3Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'law-o3-intro',
      type: 'text' as const,
      content: `
# Law of Cosines

**Part 3 of 7 — Law of Cosines**

### 1. Law of Cosines

c² = a² + b² - 2ab cos C

### 2. Use when you know

SAS or SSS

### 3. Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)

Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)

### 4. Can solve for a side or for an angle

cos C = (a² + b² - c²)/(2ab)
      `
    },
    {
      id: 'law-o3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of law of cosines?',
            options: [
              'Law of Cosines',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Law of Cosines: c² = a² + b² - 2ab cos C'
          },
          {
            question: 'In the context of law of cosines, which is accurate?',
            options: [
              'Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)'
          }
        ]
      }
    },
    {
      id: 'law-o3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Law of Cosines**: c² = a² + b² - 2ab cos C
- **Use when you know**: SAS or SSS
- **Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)**
- **Can solve for a side or for an angle**: cos C = (a² + b² - c²)/(2ab)
      `
    },
    {
      id: 'law-o3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to law of cosines?',
            options: [
              'cos C = (a² + b² - c²)/(2ab)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Can solve for a side or for an angle: cos C = (a² + b² - c²)/(2ab)'
          }
        ]
      }
    },
    {
      id: 'law-o3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Law of Cosines',
            options: ['c² = a² + b² - 2ab cos C', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Use when you know',
            options: ['SAS or SSS', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)',
            options: ['Generalizes the Pythagorean theorem (when C = 90°,', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['c² = a² + b² - 2ab cos C', 'SAS or SSS', 'Generalizes the Pythagorean theorem (when C = 90°,'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Law of Cosines.'
      }
    }
  ]
}
