export const calcABDerivAppsPart7Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'appli7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes f\'\' > 0?',
            options: [
              'where concavity changes (f\'\' changes sign)',
              'concave up (holds water like a cup)',
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)',
              'concave down (spills water like a cap)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — f\'\' > 0: concave up (holds water like a cup). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Inflection point?',
            options: [
              'where concavity changes (f\'\' changes sign)',
              'concave up (holds water like a cup)',
              'concave down (spills water like a cap)',
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Inflection point: where concavity changes (f\'\' changes sign). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'appli7-detail',
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
      id: 'appli7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes Inflection points occur where f\'\' = 0…?',
            options: [
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)',
              'concave down (spills water like a cap)',
              'where concavity changes (f\'\' changes sign)',
              'concave up (holds water like a cup)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'appli7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f\'\' > 0',
            options: ['concave up (holds water like a cup)', 'where concavity changes (f\'\' changes sign)', 'concave down (spills water like a cap)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)']
          },
          {
            label: 'f\'\' < 0',
            options: ['where concavity changes (f\'\' changes sign)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)', 'concave down (spills water like a cap)', 'concave up (holds water like a cup)']
          },
          {
            label: 'Inflection point',
            options: ['concave up (holds water like a cup)', 'where concavity changes (f\'\' changes sign)', 'concave down (spills water like a cap)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)']
          }
        ],
        correctAnswers: ['concave up (holds water like a cup)', 'concave down (spills water like a cap)', 'where concavity changes (f\'\' changes sign)'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. f\'\' > 0: concave up (holds water like a cup). f\'\' < 0: concave down (spills water like a cap). Inflection point: where concavity changes (f\'\' changes sign).'
      }
    }
  ]
}
