export const calcBCAdvIntegrationPart1Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'advan1-intro',
      type: 'text' as const,
      content: `
# ∮ Advanced Integration

**Part 1 of 7 — Trig Substitution (Overview)**

### 1. For √(a²-x²)

substitute x = a sin θ

### 2. For √(a²+x²)

substitute x = a tan θ

### 3. For √(x²-a²)

substitute x = a sec θ

### 4. After substitution, simplify using trig identities and integrate

After substitution, simplify using trig identities and integrate
      `
    },
    {
      id: 'advan1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of trig substitution (overview)?',
            options: [
              'For √(a²-x²)',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'For √(a²-x²): substitute x = a sin θ'
          },
          {
            question: 'In the context of trig substitution (overview), which is accurate?',
            options: [
              'substitute x = a sec θ',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'For √(x²-a²): substitute x = a sec θ'
          }
        ]
      }
    },
    {
      id: 'advan1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For √(a²-x²)**: substitute x = a sin θ
- **For √(a²+x²)**: substitute x = a tan θ
- **For √(x²-a²)**: substitute x = a sec θ
- **After substitution, simplify using trig identities and integrate**
      `
    },
    {
      id: 'advan1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to trig substitution (overview)?',
            options: [
              'After substitution, simplify using trig identities and integrate',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'After substitution, simplify using trig identities and integrate'
          }
        ]
      }
    },
    {
      id: 'advan1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For √(a²-x²)',
            options: ['substitute x = a sin θ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'For √(a²+x²)',
            options: ['substitute x = a tan θ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'For √(x²-a²)',
            options: ['substitute x = a sec θ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['substitute x = a sin θ', 'substitute x = a tan θ', 'substitute x = a sec θ'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Trig Substitution (Overview).'
      }
    }
  ]
}
