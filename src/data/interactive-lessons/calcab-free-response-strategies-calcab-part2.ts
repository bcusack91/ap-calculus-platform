export const calcABFreeResponsePart2Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'free-2-intro',
      type: 'text' as const,
      content: `
# Justification & Communication

**Part 2 of 7 — Justification & Communication**

### 1. Use calculus-based justifications

"Since f' > 0 on (a,b), f is increasing"

### 2. IVT

"Since f is continuous and f(a) < N < f(b), by IVT there exists c..."

### 3. MVT

"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."

### 4. State theorems by name and verify their hypotheses

State theorems by name and verify their hypotheses
      `
    },
    {
      id: 'free-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of justification & communication?',
            options: [
              'Use calculus-based justifications',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Use calculus-based justifications: "Since f\' > 0 on (a,b), f is increasing"'
          },
          {
            question: 'In the context of justification & communication, which is accurate?',
            options: [
              '"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'MVT: "Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."'
          }
        ]
      }
    },
    {
      id: 'free-2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Use calculus-based justifications**: "Since f' > 0 on (a,b), f is increasing"
- **IVT**: "Since f is continuous and f(a) < N < f(b), by IVT there exists c..."
- **MVT**: "Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."
- **State theorems by name and verify their hypotheses**
      `
    },
    {
      id: 'free-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to justification & communication?',
            options: [
              'State theorems by name and verify their hypotheses',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'State theorems by name and verify their hypotheses'
          }
        ]
      }
    },
    {
      id: 'free-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use calculus-based justifications',
            options: ['"Since f\' > 0 on (a,b), f is increasing"', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'IVT',
            options: ['"Since f is continuous and f(a) < N < f(b), by IVT', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'MVT',
            options: ['"Since f is continuous on [a,b] and differentiable', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['"Since f\' > 0 on (a,b), f is increasing"', '"Since f is continuous and f(a) < N < f(b), by IVT', '"Since f is continuous on [a,b] and differentiable'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Justification & Communication.'
      }
    }
  ]
}
