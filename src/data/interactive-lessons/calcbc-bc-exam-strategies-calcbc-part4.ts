export const calcBCExamStrategiesPart4Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex4-intro',
      type: 'text' as const,
      content: `
# Integration Technique Selection

**Part 4 of 7 — Integration Technique Selection**

### 1. Polynomial × eˣ or trig

integration by parts (tabular method)

### 2. Rational functions

partial fractions

### 3. Recognize inverse trig forms

1/(1+x²), 1/√(1-x²)

### 4. u-substitution

always try this first if the integrand has a composite structure
      `
    },
    {
      id: 'bc-ex4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Polynomial × eˣ or trig?',
            options: [
              'partial fractions',
              'always try this first if the integrand has a composite structure',
              'integration by parts (tabular method)',
              '1/(1+x²), 1/√(1-x²)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Polynomial × eˣ or trig: integration by parts (tabular method). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Recognize inverse trig forms:',
            options: [
              '1/(1+x²), 1/√(1-x²)',
              'integration by parts (tabular method)',
              'partial fractions',
              'always try this first if the integrand has a composite structure'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Recognize inverse trig forms: 1/(1+x²), 1/√(1-x²). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'bc-ex4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Polynomial × eˣ or trig**: integration by parts (tabular method)
- **Rational functions**: partial fractions
- **Recognize inverse trig forms**: 1/(1+x²), 1/√(1-x²)
- **u-substitution**: always try this first if the integrand has a composite structure
      `
    },
    {
      id: 'bc-ex4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents u-substitution?',
            options: [
              'always try this first if the integrand has a composite structure',
              '1/(1+x²), 1/√(1-x²)',
              'partial fractions',
              'integration by parts (tabular method)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — u-substitution: always try this first if the integrand has a composite structure. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'bc-ex4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polynomial × eˣ or trig',
            options: ['always try this first if the integrand has a composite structure', 'integration by parts (tabular method)', '1/(1+x²), 1/√(1-x²)', 'partial fractions']
          },
          {
            label: 'Rational functions',
            options: ['always try this first if the integrand has a composite structure', '1/(1+x²), 1/√(1-x²)', 'integration by parts (tabular method)', 'partial fractions']
          },
          {
            label: 'Recognize inverse trig forms',
            options: ['partial fractions', '1/(1+x²), 1/√(1-x²)', 'integration by parts (tabular method)', 'always try this first if the integrand has a composite structure']
          }
        ],
        correctAnswers: ['integration by parts (tabular method)', 'partial fractions', '1/(1+x²), 1/√(1-x²)'],
        hint1: 'Think about what each concept specifically describes in Integration Technique Selection.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integration Technique Selection describes a specific idea. Polynomial × eˣ or trig: integration by parts (tabular method). Rational functions: partial fractions. Recognize inverse trig forms: 1/(1+x²), 1/√(1-x²).'
      }
    }
  ]
}
