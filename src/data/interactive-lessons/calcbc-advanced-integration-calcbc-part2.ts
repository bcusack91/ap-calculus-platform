export const calcBCAdvIntegrationPart2Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'advan2-intro',
      type: 'text' as const,
      content: `
# Integration Strategy Selection

**Part 2 of 7 — Integration Strategy Selection**

### 1. Try direct/simple methods first

u-sub, basic formulas

### 2. Products of powers

integration by parts or reduction formulas

### 3. Rational functions with quadratics

partial fractions

### 4. Recognize inverse trig patterns

arctan, arcsin forms
      `
    },
    {
      id: 'advan2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integration strategy selection?',
            options: [
              'Try direct/simple methods first',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Try direct/simple methods first: u-sub, basic formulas'
          },
          {
            question: 'In the context of integration strategy selection, which is accurate?',
            options: [
              'partial fractions',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Rational functions with quadratics: partial fractions'
          }
        ]
      }
    },
    {
      id: 'advan2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Try direct/simple methods first**: u-sub, basic formulas
- **Products of powers**: integration by parts or reduction formulas
- **Rational functions with quadratics**: partial fractions
- **Recognize inverse trig patterns**: arctan, arcsin forms
      `
    },
    {
      id: 'advan2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integration strategy selection?',
            options: [
              'arctan, arcsin forms',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Recognize inverse trig patterns: arctan, arcsin forms'
          }
        ]
      }
    },
    {
      id: 'advan2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Try direct/simple methods first',
            options: ['u-sub, basic formulas', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Products of powers',
            options: ['integration by parts or reduction formulas', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Rational functions with quadratics',
            options: ['partial fractions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['u-sub, basic formulas', 'integration by parts or reduction formulas', 'partial fractions'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integration Strategy Selection.'
      }
    }
  ]
}
