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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains General form?',
            options: [
              'Ax² + Bxy + Cy² + Dx + Ey + F = 0',
              'parabola; B² - 4AC > 0: hyperbola',
              'ellipse (or circle if A = C and B = 0)',
              'Discriminant B² - 4AC determines the conic type'
            ],
            correctAnswer: 0,
            explanation: 'Correct — General form: Ax² + Bxy + Cy² + Dx + Ey + F = 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes B² - 4AC < 0:',
            options: [
              'Ax² + Bxy + Cy² + Dx + Ey + F = 0',
              'ellipse (or circle if A = C and B = 0)',
              'parabola; B² - 4AC > 0: hyperbola',
              'Discriminant B² - 4AC determines the conic type'
            ],
            correctAnswer: 1,
            explanation: 'Correct — B² - 4AC < 0: ellipse (or circle if A = C and B = 0). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'General form',
            options: ['Ax² + Bxy + Cy² + Dx + Ey + F = 0', 'ellipse (or circle if A = C and B = 0)', 'parabola; B² - 4AC > 0: hyperbola', 'Discriminant B² - 4AC determines the conic type']
          },
          {
            label: 'B² - 4AC < 0',
            options: ['ellipse (or circle if A = C and B = 0)', 'Ax² + Bxy + Cy² + Dx + Ey + F = 0', 'parabola; B² - 4AC > 0: hyperbola', 'Discriminant B² - 4AC determines the conic type']
          },
          {
            label: 'B² - 4AC = 0',
            options: ['Ax² + Bxy + Cy² + Dx + Ey + F = 0', 'ellipse (or circle if A = C and B = 0)', 'Discriminant B² - 4AC determines the conic type', 'parabola; B² - 4AC > 0: hyperbola']
          }
        ],
        correctAnswers: ['Ax² + Bxy + Cy² + Dx + Ey + F = 0', 'ellipse (or circle if A = C and B = 0)', 'parabola; B² - 4AC > 0: hyperbola'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. General form: Ax² + Bxy + Cy² + Dx + Ey + F = 0. B² - 4AC < 0: ellipse (or circle if A = C and B = 0). B² - 4AC = 0: parabola; B² - 4AC > 0: hyperbola.'
      }
    }
  ]
}
