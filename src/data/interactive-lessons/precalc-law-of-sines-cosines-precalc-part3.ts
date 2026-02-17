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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Law of Cosines" refer to in precalculus?',
            options: [
              'c² = a² + b² - 2ab cos C',
              'SAS or SSS',
              'cos C = (a² + b² - c²)/(2ab)',
              'Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Law of Cosines: c² = a² + b² - 2ab cos C. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Generalizes the Pythagorean theorem…?',
            options: [
              'Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)',
              'SAS or SSS',
              'c² = a² + b² - 2ab cos C',
              'cos C = (a² + b² - c²)/(2ab)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Generalizes the Pythagorean theorem (when C = 90°, cos C = 0). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Law of Cosines',
            options: ['Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)', 'cos C = (a² + b² - c²)/(2ab)', 'c² = a² + b² - 2ab cos C', 'SAS or SSS']
          },
          {
            label: 'Use when you know',
            options: ['Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)', 'SAS or SSS', 'c² = a² + b² - 2ab cos C', 'cos C = (a² + b² - c²)/(2ab)']
          },
          {
            label: 'Can solve for a side or for an angle',
            options: ['c² = a² + b² - 2ab cos C', 'cos C = (a² + b² - c²)/(2ab)', 'SAS or SSS', 'Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)']
          }
        ],
        correctAnswers: ['c² = a² + b² - 2ab cos C', 'SAS or SSS', 'cos C = (a² + b² - c²)/(2ab)'],
        hint1: 'Think about what each concept specifically describes in Law of Cosines.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Law of Cosines describes a specific idea. Law of Cosines: c² = a² + b² - 2ab cos C. Use when you know: SAS or SSS. Can solve for a side or for an angle: cos C = (a² + b² - c²)/(2ab).'
      }
    }
  ]
}
