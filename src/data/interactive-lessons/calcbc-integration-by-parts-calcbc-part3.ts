export const calcBCIntByPartsPart3Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'integ3-intro',
      type: 'text' as const,
      content: `
# Repeated Integration by Parts

**Part 3 of 7 — Repeated Integration by Parts**

### 1. Some integrals require integration by parts multiple times

Some integrals require integration by parts multiple times

### 2. ∫x²eˣ dx

apply twice to reduce x² to x then to a constant

### 3. Cycling integrals

∫eˣ sin x dx leads back to the original integral — solve algebraically

### 4. Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I

Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I
      `
    },
    {
      id: 'integ3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of repeated integration by parts?',
            options: [
              'Some integrals require integration by parts multiple times',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Some integrals require integration by parts multiple times'
          },
          {
            question: 'In the context of repeated integration by parts, which is accurate?',
            options: [
              '∫eˣ sin x dx leads back to the original integral — solve algebraically',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cycling integrals: ∫eˣ sin x dx leads back to the original integral — solve algebraically'
          }
        ]
      }
    },
    {
      id: 'integ3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Some integrals require integration by parts multiple times**
- **∫x²eˣ dx**: apply twice to reduce x² to x then to a constant
- **Cycling integrals**: ∫eˣ sin x dx leads back to the original integral — solve algebraically
- **Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I**
      `
    },
    {
      id: 'integ3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to repeated integration by parts?',
            options: [
              'Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I'
          }
        ]
      }
    },
    {
      id: 'integ3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Some integrals require integration by parts multiple times',
            options: ['Some integrals require integration by parts multip', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫x²eˣ dx',
            options: ['apply twice to reduce x² to x then to a constant', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Cycling integrals',
            options: ['∫eˣ sin x dx leads back to the original integral —', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Some integrals require integration by parts multip', 'apply twice to reduce x² to x then to a constant', '∫eˣ sin x dx leads back to the original integral —'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Repeated Integration by Parts.'
      }
    }
  ]
}
