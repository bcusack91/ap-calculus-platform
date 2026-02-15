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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'f\'\' > 0',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'f\'\' > 0: concave up (holds water like a cup)'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'where concavity changes (f\'\' changes sign)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Inflection point: where concavity changes (f\'\' changes sign)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)'
          }
        ]
      }
    },
    {
      id: 'appli7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f\'\' > 0',
            options: ['concave up (holds water like a cup)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'f\'\' < 0',
            options: ['concave down (spills water like a cap)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Inflection point',
            options: ['where concavity changes (f\'\' changes sign)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['concave up (holds water like a cup)', 'concave down (spills water like a cap)', 'where concavity changes (f\'\' changes sign)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
