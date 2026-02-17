export const calcABDerivAppsPart6Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. f'' > 0

concave up (holds water like a cup)

### 2. f'' < 0

concave down (spills water like a cap)

### 3. Inflection point

where concavity changes (f'' changes sign)

### 4. Inflection points occur where f'' = 0 or f'' is undefined (check sign change)

Inflection points occur where f'' = 0 or f'' is undefined (check sign change)
      `
    },
    {
      id: 'appli6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes f\'\' > 0?',
            options: [
              'concave down (spills water like a cap)',
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)',
              'concave up (holds water like a cup)',
              'where concavity changes (f\'\' changes sign)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — f\'\' > 0: concave up (holds water like a cup). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Inflection point?',
            options: [
              'concave down (spills water like a cap)',
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)',
              'where concavity changes (f\'\' changes sign)',
              'concave up (holds water like a cup)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Inflection point: where concavity changes (f\'\' changes sign). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'appli6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f'' > 0**: concave up (holds water like a cup)
- **f'' < 0**: concave down (spills water like a cap)
- **Inflection point**: where concavity changes (f'' changes sign)
- **Inflection points occur where f'' = 0 or f'' is undefined (check sign change)**
      `
    },
    {
      id: 'appli6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Inflection points occur where f\'\' = 0…?',
            options: [
              'where concavity changes (f\'\' changes sign)',
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)',
              'concave down (spills water like a cap)',
              'concave up (holds water like a cup)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'appli6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f\'\' > 0',
            options: ['concave up (holds water like a cup)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)', 'concave down (spills water like a cap)', 'where concavity changes (f\'\' changes sign)']
          },
          {
            label: 'f\'\' < 0',
            options: ['where concavity changes (f\'\' changes sign)', 'concave down (spills water like a cap)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)', 'concave up (holds water like a cup)']
          },
          {
            label: 'Inflection point',
            options: ['concave down (spills water like a cap)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)', 'concave up (holds water like a cup)', 'where concavity changes (f\'\' changes sign)']
          }
        ],
        correctAnswers: ['concave up (holds water like a cup)', 'concave down (spills water like a cap)', 'where concavity changes (f\'\' changes sign)'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. f\'\' > 0: concave up (holds water like a cup). f\'\' < 0: concave down (spills water like a cap). Inflection point: where concavity changes (f\'\' changes sign).'
      }
    }
  ]
}
