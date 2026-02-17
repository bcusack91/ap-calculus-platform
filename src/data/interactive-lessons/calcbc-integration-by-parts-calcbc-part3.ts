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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Some integrals require integration by…?',
            options: [
              'apply twice to reduce x² to x then to a constant',
              'Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I',
              'Some integrals require integration by parts multiple times',
              '∫eˣ sin x dx leads back to the original integral — solve algebraically'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Some integrals require integration by parts multiple times. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Repeated Integration by Parts, which explains Cycling integrals?',
            options: [
              'Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I',
              'Some integrals require integration by parts multiple times',
              '∫eˣ sin x dx leads back to the original integral — solve algebraically',
              'apply twice to reduce x² to x then to a constant'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Cycling integrals: ∫eˣ sin x dx leads back to the original integral — solve algebraically. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Repeated Integration by Parts, which correctly describes Set I = ∫eˣ sin x dx, apply twice, get…?',
            options: [
              '∫eˣ sin x dx leads back to the original integral — solve algebraically',
              'Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I',
              'Some integrals require integration by parts multiple times',
              'apply twice to reduce x² to x then to a constant'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫x²eˣ dx',
            options: ['Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I', 'Some integrals require integration by parts multiple times', 'apply twice to reduce x² to x then to a constant', '∫eˣ sin x dx leads back to the original integral — solve algebraically']
          },
          {
            label: 'Cycling integrals',
            options: ['Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I', 'Some integrals require integration by parts multiple times', '∫eˣ sin x dx leads back to the original integral — solve algebraically', 'apply twice to reduce x² to x then to a constant']
          }
        ],
        correctAnswers: ['apply twice to reduce x² to x then to a constant', '∫eˣ sin x dx leads back to the original integral — solve algebraically'],
        hint1: 'Think about what each concept specifically describes in Repeated Integration by Parts.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Repeated Integration by Parts describes a specific idea. ∫x²eˣ dx: apply twice to reduce x² to x then to a constant. Cycling integrals: ∫eˣ sin x dx leads back to the original integral — solve algebraically.'
      }
    }
  ]
}
