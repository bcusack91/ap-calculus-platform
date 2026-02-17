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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "For √(a²-x²)" refer to in calculus?',
            options: [
              'substitute x = a sec θ',
              'substitute x = a tan θ',
              'After substitution, simplify using trig identities and integrate',
              'substitute x = a sin θ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — For √(a²-x²): substitute x = a sin θ. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ∮ Advanced Integration, which explains For √(x²-a²)?',
            options: [
              'substitute x = a tan θ',
              'After substitution, simplify using trig identities and integrate',
              'substitute x = a sin θ',
              'substitute x = a sec θ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — For √(x²-a²): substitute x = a sec θ. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents After substitution, simplify using trig…?',
            options: [
              'substitute x = a tan θ',
              'After substitution, simplify using trig identities and integrate',
              'substitute x = a sin θ',
              'substitute x = a sec θ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — After substitution, simplify using trig identities and integrate. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'advan1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For √(a²-x²)',
            options: ['substitute x = a sin θ', 'After substitution, simplify using trig identities and integrate', 'substitute x = a sec θ', 'substitute x = a tan θ']
          },
          {
            label: 'For √(a²+x²)',
            options: ['substitute x = a sin θ', 'After substitution, simplify using trig identities and integrate', 'substitute x = a sec θ', 'substitute x = a tan θ']
          },
          {
            label: 'For √(x²-a²)',
            options: ['substitute x = a sec θ', 'After substitution, simplify using trig identities and integrate', 'substitute x = a sin θ', 'substitute x = a tan θ']
          }
        ],
        correctAnswers: ['substitute x = a sin θ', 'substitute x = a tan θ', 'substitute x = a sec θ'],
        hint1: 'Think about what each concept specifically describes in ∮ Advanced Integration.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Advanced Integration describes a specific idea. For √(a²-x²): substitute x = a sin θ. For √(a²+x²): substitute x = a tan θ. For √(x²-a²): substitute x = a sec θ.'
      }
    }
  ]
}
