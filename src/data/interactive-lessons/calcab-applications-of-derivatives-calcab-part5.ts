export const calcABDerivAppsPart5Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli5-intro',
      type: 'text' as const,
      content: `
# Concavity & Inflection Points

**Part 5 of 7 — Concavity & Inflection Points**

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
      id: 'appli5-quiz1',
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
              'concave down (spills water like a cap)',
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — f\'\' > 0: concave up (holds water like a cup). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Concavity & Inflection Points, which explains Inflection point?',
            options: [
              'concave up (holds water like a cup)',
              'concave down (spills water like a cap)',
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)',
              'where concavity changes (f\'\' changes sign)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Inflection point: where concavity changes (f\'\' changes sign). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'appli5-detail',
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
      id: 'appli5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Inflection points occur where f\'\' = 0… is correct?',
            options: [
              'where concavity changes (f\'\' changes sign)',
              'concave down (spills water like a cap)',
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)',
              'concave up (holds water like a cup)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'appli5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f\'\' > 0',
            options: ['where concavity changes (f\'\' changes sign)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)', 'concave down (spills water like a cap)', 'concave up (holds water like a cup)']
          },
          {
            label: 'f\'\' < 0',
            options: ['where concavity changes (f\'\' changes sign)', 'concave down (spills water like a cap)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)', 'concave up (holds water like a cup)']
          },
          {
            label: 'Inflection point',
            options: ['Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)', 'concave down (spills water like a cap)', 'where concavity changes (f\'\' changes sign)', 'concave up (holds water like a cup)']
          }
        ],
        correctAnswers: ['concave up (holds water like a cup)', 'concave down (spills water like a cap)', 'where concavity changes (f\'\' changes sign)'],
        hint1: 'Think about what each concept specifically describes in Concavity & Inflection Points.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Concavity & Inflection Points describes a specific idea. f\'\' > 0: concave up (holds water like a cup). f\'\' < 0: concave down (spills water like a cap). Inflection point: where concavity changes (f\'\' changes sign).'
      }
    }
  ]
}
