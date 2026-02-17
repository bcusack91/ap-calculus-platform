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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Try direct/simple methods first" refer to in calculus?',
            options: [
              'partial fractions',
              'u-sub, basic formulas',
              'arctan, arcsin forms',
              'integration by parts or reduction formulas'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Try direct/simple methods first: u-sub, basic formulas. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Integration Strategy Selection, which explains Rational functions with quadratics?',
            options: [
              'arctan, arcsin forms',
              'integration by parts or reduction formulas',
              'u-sub, basic formulas',
              'partial fractions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Rational functions with quadratics: partial fractions. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Integration Strategy Selection, which correctly describes Recognize inverse trig patterns?',
            options: [
              'integration by parts or reduction formulas',
              'partial fractions',
              'arctan, arcsin forms',
              'u-sub, basic formulas'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Recognize inverse trig patterns: arctan, arcsin forms. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'advan2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Try direct/simple methods first',
            options: ['arctan, arcsin forms', 'integration by parts or reduction formulas', 'u-sub, basic formulas', 'partial fractions']
          },
          {
            label: 'Products of powers',
            options: ['u-sub, basic formulas', 'arctan, arcsin forms', 'integration by parts or reduction formulas', 'partial fractions']
          },
          {
            label: 'Rational functions with quadratics',
            options: ['integration by parts or reduction formulas', 'u-sub, basic formulas', 'partial fractions', 'arctan, arcsin forms']
          }
        ],
        correctAnswers: ['u-sub, basic formulas', 'integration by parts or reduction formulas', 'partial fractions'],
        hint1: 'Think about what each concept specifically describes in Integration Strategy Selection.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integration Strategy Selection describes a specific idea. Try direct/simple methods first: u-sub, basic formulas. Products of powers: integration by parts or reduction formulas. Rational functions with quadratics: partial fractions.'
      }
    }
  ]
}
