export const precalcConicsPart7Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'conic7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. General form

Ax² + Bxy + Cy² + Dx + Ey + F = 0

### 2. Discriminant B² - 4AC determines the conic type

Discriminant B² - 4AC determines the conic type

### 3. B² - 4AC < 0

ellipse (or circle if A = C and B = 0)

### 4. B² - 4AC = 0

parabola; B² - 4AC > 0: hyperbola
      `
    },
    {
      id: 'conic7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'General form',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'General form: Ax² + Bxy + Cy² + Dx + Ey + F = 0'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'ellipse (or circle if A = C and B = 0)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'B² - 4AC < 0: ellipse (or circle if A = C and B = 0)'
          }
        ]
      }
    },
    {
      id: 'conic7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **General form**: Ax² + Bxy + Cy² + Dx + Ey + F = 0
- **Discriminant B² - 4AC determines the conic type**
- **B² - 4AC < 0**: ellipse (or circle if A = C and B = 0)
- **B² - 4AC = 0**: parabola; B² - 4AC > 0: hyperbola
      `
    },
    {
      id: 'conic7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'parabola; B² - 4AC > 0: hyperbola',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'B² - 4AC = 0: parabola; B² - 4AC > 0: hyperbola'
          }
        ]
      }
    },
    {
      id: 'conic7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'General form',
            options: ['Ax² + Bxy + Cy² + Dx + Ey + F = 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Discriminant B² - 4AC determines the conic type',
            options: ['Discriminant B² - 4AC determines the conic type', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'B² - 4AC < 0',
            options: ['ellipse (or circle if A = C and B = 0)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Ax² + Bxy + Cy² + Dx + Ey + F = 0', 'Discriminant B² - 4AC determines the conic type', 'ellipse (or circle if A = C and B = 0)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
