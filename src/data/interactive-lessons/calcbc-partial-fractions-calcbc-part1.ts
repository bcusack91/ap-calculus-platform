export const calcBCPartialFractionsPart1Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'parti1-intro',
      type: 'text' as const,
      content: `
# ∮ Partial Fractions

**Part 1 of 7 — Partial Fraction Decomposition**

### 1. Partial fractions

decompose P(x)/Q(x) into simpler fractions

### 2. Q(x) must be factored completely

Q(x) must be factored completely

### 3. Degree of P must be less than degree of Q (use long division if not)

Degree of P must be less than degree of Q (use long division if not)

### 4. Each factor of Q contributes one or more partial fraction terms

Each factor of Q contributes one or more partial fraction terms
      `
    },
    {
      id: 'parti1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Partial fractions" refer to in calculus?',
            options: [
              'Degree of P must be less than degree of Q (use long division if not)',
              'Q(x) must be factored completely',
              'Each factor of Q contributes one or more partial fraction terms',
              'decompose P(x)/Q(x) into simpler fractions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Partial fractions: decompose P(x)/Q(x) into simpler fractions. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ∮ Partial Fractions, which explains Degree of P must be less than degree of…?',
            options: [
              'decompose P(x)/Q(x) into simpler fractions',
              'Each factor of Q contributes one or more partial fraction terms',
              'Degree of P must be less than degree of Q (use long division if not)',
              'Q(x) must be factored completely'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Degree of P must be less than degree of Q (use long division if not). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'parti1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Partial fractions**: decompose P(x)/Q(x) into simpler fractions
- **Q(x) must be factored completely**
- **Degree of P must be less than degree of Q (use long division if not)**
- **Each factor of Q contributes one or more partial fraction terms**
      `
    },
    {
      id: 'parti1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Each factor of Q contributes one or… is correct?',
            options: [
              'Each factor of Q contributes one or more partial fraction terms',
              'Degree of P must be less than degree of Q (use long division if not)',
              'decompose P(x)/Q(x) into simpler fractions',
              'Q(x) must be factored completely'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Each factor of Q contributes one or more partial fraction terms. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Partial fractions',
            options: ['decompose P(x)/Q(x) into simpler fractions', 'Degree of P must be less than degree of Q (use long division if not)', 'Q(x) must be factored completely', 'Each factor of Q contributes one or more partial fraction terms']
          },
          {
            label: 'Q(x) must be factored completely',
            options: ['decompose P(x)/Q(x) into simpler fractions', 'Q(x) must be factored completely', 'Degree of P must be less than degree of Q (use long division if not)', 'Each factor of Q contributes one or more partial fraction terms']
          },
          {
            label: 'Degree of P must be less than degree of…',
            options: ['decompose P(x)/Q(x) into simpler fractions', 'Q(x) must be factored completely', 'Each factor of Q contributes one or more partial fraction terms', 'Degree of P must be less than degree of Q (use long division if not)']
          }
        ],
        correctAnswers: ['decompose P(x)/Q(x) into simpler fractions', 'Q(x) must be factored completely', 'Degree of P must be less than degree of Q (use long division if not)'],
        hint1: 'Think about what each concept specifically describes in ∮ Partial Fractions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Partial Fractions describes a specific idea. Partial fractions: decompose P(x)/Q(x) into simpler fractions. Q(x) must be factored completely. Degree of P must be less than degree of Q (use long division if not).'
      }
    }
  ]
}
