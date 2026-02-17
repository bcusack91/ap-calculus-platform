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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Multiplying/dividing by a constant to…?',
            options: [
              'Rewriting integrands to reveal standard forms',
              'Multiplying/dividing by a constant to match du',
              '∫(A+B)/C dx = ∫A/C dx + ∫B/C dx',
              'Long division before substitution for improper rational functions'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Multiplying/dividing by a constant to match du. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Splitting fractions?',
            options: [
              'Multiplying/dividing by a constant to match du',
              'Rewriting integrands to reveal standard forms',
              '∫(A+B)/C dx = ∫A/C dx + ∫B/C dx',
              'Long division before substitution for improper rational functions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Splitting fractions: ∫(A+B)/C dx = ∫A/C dx + ∫B/C dx. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Rewriting integrands to reveal standard… is correct?',
            options: [
              'Rewriting integrands to reveal standard forms',
              'Multiplying/dividing by a constant to match du',
              '∫(A+B)/C dx = ∫A/C dx + ∫B/C dx',
              'Long division before substitution for improper rational functions'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Rewriting integrands to reveal standard forms. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'u-sub4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiplying/dividing by a constant to…',
            options: ['∫(A+B)/C dx = ∫A/C dx + ∫B/C dx', 'Rewriting integrands to reveal standard forms', 'Long division before substitution for improper rational functions', 'Multiplying/dividing by a constant to match du']
          },
          {
            label: 'Long division before substitution for…',
            options: ['Multiplying/dividing by a constant to match du', '∫(A+B)/C dx = ∫A/C dx + ∫B/C dx', 'Rewriting integrands to reveal standard forms', 'Long division before substitution for improper rational functions']
          },
          {
            label: 'Splitting fractions',
            options: ['Long division before substitution for improper rational functions', '∫(A+B)/C dx = ∫A/C dx + ∫B/C dx', 'Multiplying/dividing by a constant to match du', 'Rewriting integrands to reveal standard forms']
          }
        ],
        correctAnswers: ['Multiplying/dividing by a constant to match du', 'Long division before substitution for improper rational functions', '∫(A+B)/C dx = ∫A/C dx + ∫B/C dx'],
        hint1: 'Think about what each concept specifically describes in Advanced u-Substitution Techniques.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Advanced u-Substitution Techniques describes a specific idea. Multiplying/dividing by a constant to match du. Long division before substitution for improper rational functions. Splitting fractions: ∫(A+B)/C dx = ∫A/C dx + ∫B/C dx.'
      }
    }
  ]
}
