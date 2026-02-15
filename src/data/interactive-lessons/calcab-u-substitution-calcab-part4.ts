export const calcABUSubPart4Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'u-sub4-intro',
      type: 'text' as const,
      content: `
# Advanced u-Substitution Techniques

**Part 4 of 7 — Advanced u-Substitution Techniques**

### 1. Multiplying/dividing by a constant to match du

Multiplying/dividing by a constant to match du

### 2. Long division before substitution for improper rational functions

Long division before substitution for improper rational functions

### 3. Splitting fractions

∫(A+B)/C dx = ∫A/C dx + ∫B/C dx

### 4. Rewriting integrands to reveal standard forms

Rewriting integrands to reveal standard forms
      `
    },
    {
      id: 'u-sub4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of advanced u-substitution techniques?',
            options: [
              'Multiplying/dividing by a constant to match du',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Multiplying/dividing by a constant to match du'
          },
          {
            question: 'In the context of advanced u-substitution techniques, which is accurate?',
            options: [
              '∫(A+B)/C dx = ∫A/C dx + ∫B/C dx',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Splitting fractions: ∫(A+B)/C dx = ∫A/C dx + ∫B/C dx'
          }
        ]
      }
    },
    {
      id: 'u-sub4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Multiplying/dividing by a constant to match du**
- **Long division before substitution for improper rational functions**
- **Splitting fractions**: ∫(A+B)/C dx = ∫A/C dx + ∫B/C dx
- **Rewriting integrands to reveal standard forms**
      `
    },
    {
      id: 'u-sub4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to advanced u-substitution techniques?',
            options: [
              'Rewriting integrands to reveal standard forms',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Rewriting integrands to reveal standard forms'
          }
        ]
      }
    },
    {
      id: 'u-sub4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiplying/dividing by a constant to match du',
            options: ['Multiplying/dividing by a constant to match du', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Long division before substitution for improper rational functions',
            options: ['Long division before substitution for improper rat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Splitting fractions',
            options: ['∫(A+B)/C dx = ∫A/C dx + ∫B/C dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Multiplying/dividing by a constant to match du', 'Long division before substitution for improper rat', '∫(A+B)/C dx = ∫A/C dx + ∫B/C dx'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Advanced u-Substitution Techniques.'
      }
    }
  ]
}
