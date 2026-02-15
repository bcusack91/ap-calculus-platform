export const calcBCEulerAdvPart4Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler4-intro',
      type: 'text' as const,
      content: `
# Second-Order DEs (Preview)

**Part 4 of 7 — Second-Order DEs (Preview)**

### 1. Second-order DE

involves y'' — Preview/enrichment for BC

### 2. y'' + y = 0 → y = A cos t + B sin t (simple harmonic motion)

y'' + y = 0 → y = A cos t + B sin t (simple harmonic motion)

### 3. Not heavily tested on AP BC, but useful conceptual understanding

Not heavily tested on AP BC, but useful conceptual understanding

### 4. Relates to parametric and vector motion problems

Relates to parametric and vector motion problems
      `
    },
    {
      id: 'euler4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of second-order des (preview)?',
            options: [
              'Second-order DE',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Second-order DE: involves y\'\' — Preview/enrichment for BC'
          },
          {
            question: 'In the context of second-order des (preview), which is accurate?',
            options: [
              'Not heavily tested on AP BC, but useful conceptual understanding',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Not heavily tested on AP BC, but useful conceptual understanding'
          }
        ]
      }
    },
    {
      id: 'euler4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Second-order DE**: involves y'' — Preview/enrichment for BC
- **y'' + y = 0 → y = A cos t + B sin t (simple harmonic motion)**
- **Not heavily tested on AP BC, but useful conceptual understanding**
- **Relates to parametric and vector motion problems**
      `
    },
    {
      id: 'euler4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to second-order des (preview)?',
            options: [
              'Relates to parametric and vector motion problems',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Relates to parametric and vector motion problems'
          }
        ]
      }
    },
    {
      id: 'euler4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Second-order DE',
            options: ['involves y\'\' — Preview/enrichment for BC', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)',
            options: ['y\'\' + y = 0 → y = A cos t + B sin t (simple harmon', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Not heavily tested on AP BC, but useful conceptual understanding',
            options: ['Not heavily tested on AP BC, but useful conceptual', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['involves y\'\' — Preview/enrichment for BC', 'y\'\' + y = 0 → y = A cos t + B sin t (simple harmon', 'Not heavily tested on AP BC, but useful conceptual'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Second-Order DEs (Preview).'
      }
    }
  ]
}
