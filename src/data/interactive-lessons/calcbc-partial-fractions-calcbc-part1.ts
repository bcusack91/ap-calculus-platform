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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of partial fraction decomposition?',
            options: [
              'Partial fractions',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Partial fractions: decompose P(x)/Q(x) into simpler fractions'
          },
          {
            question: 'In the context of partial fraction decomposition, which is accurate?',
            options: [
              'Degree of P must be less than degree of Q (use long division if not)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Degree of P must be less than degree of Q (use long division if not)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to partial fraction decomposition?',
            options: [
              'Each factor of Q contributes one or more partial fraction terms',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Each factor of Q contributes one or more partial fraction terms'
          }
        ]
      }
    },
    {
      id: 'parti1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Partial fractions',
            options: ['decompose P(x)/Q(x) into simpler fractions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Q(x) must be factored completely',
            options: ['Q(x) must be factored completely', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Degree of P must be less than degree of Q (use long division if not)',
            options: ['Degree of P must be less than degree of Q (use lon', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['decompose P(x)/Q(x) into simpler fractions', 'Q(x) must be factored completely', 'Degree of P must be less than degree of Q (use lon'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Partial Fraction Decomposition.'
      }
    }
  ]
}
