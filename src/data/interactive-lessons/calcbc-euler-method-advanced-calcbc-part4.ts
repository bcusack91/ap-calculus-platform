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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Second-order DE?',
            options: [
              'y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)',
              'Relates to parametric and vector motion problems',
              'involves y\'\' — Preview/enrichment for BC',
              'Not heavily tested on AP BC, but useful conceptual understanding'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Second-order DE: involves y\'\' — Preview/enrichment for BC. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Not heavily tested on AP BC, but useful…:',
            options: [
              'Not heavily tested on AP BC, but useful conceptual understanding',
              'involves y\'\' — Preview/enrichment for BC',
              'y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)',
              'Relates to parametric and vector motion problems'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Not heavily tested on AP BC, but useful conceptual understanding. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Relates to parametric and vector motion…?',
            options: [
              'y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)',
              'Relates to parametric and vector motion problems',
              'Not heavily tested on AP BC, but useful conceptual understanding',
              'involves y\'\' — Preview/enrichment for BC'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Relates to parametric and vector motion problems. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'euler4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Second-order DE',
            options: ['y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)', 'Not heavily tested on AP BC, but useful conceptual understanding', 'Relates to parametric and vector motion problems', 'involves y\'\' — Preview/enrichment for BC']
          },
          {
            label: 'y\'\' + y = 0 → y = A cos t + B sin t…',
            options: ['y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)', 'Relates to parametric and vector motion problems', 'involves y\'\' — Preview/enrichment for BC', 'Not heavily tested on AP BC, but useful conceptual understanding']
          },
          {
            label: 'Not heavily tested on AP BC, but useful…',
            options: ['y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)', 'Not heavily tested on AP BC, but useful conceptual understanding', 'involves y\'\' — Preview/enrichment for BC', 'Relates to parametric and vector motion problems']
          }
        ],
        correctAnswers: ['involves y\'\' — Preview/enrichment for BC', 'y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)', 'Not heavily tested on AP BC, but useful conceptual understanding'],
        hint1: 'Think about what each concept specifically describes in Second-Order DEs (Preview).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Second-Order DEs (Preview) describes a specific idea. Second-order DE: involves y\'\' — Preview/enrichment for BC. y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion). Not heavily tested on AP BC, but useful conceptual understanding.'
      }
    }
  ]
}
