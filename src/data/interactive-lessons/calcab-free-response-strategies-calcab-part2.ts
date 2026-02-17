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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Use calculus-based justifications?',
            options: [
              '"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."',
              '"Since f is continuous and f(a) < N < f(b), by IVT there exists c..."',
              'State theorems by name and verify their hypotheses',
              '"Since f\' > 0 on (a,b), f is increasing"'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Use calculus-based justifications: "Since f\' > 0 on (a,b), f is increasing". The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes MVT:',
            options: [
              '"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."',
              'State theorems by name and verify their hypotheses',
              '"Since f\' > 0 on (a,b), f is increasing"',
              '"Since f is continuous and f(a) < N < f(b), by IVT there exists c..."'
            ],
            correctAnswer: 0,
            explanation: 'Correct — MVT: "Since f is continuous on [a,b] and differentiable on (a,b), by MVT...". Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about State theorems by name and verify their… is correct?',
            options: [
              '"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."',
              '"Since f is continuous and f(a) < N < f(b), by IVT there exists c..."',
              'State theorems by name and verify their hypotheses',
              '"Since f\' > 0 on (a,b), f is increasing"'
            ],
            correctAnswer: 2,
            explanation: 'Correct — State theorems by name and verify their hypotheses. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'free-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use calculus-based justifications',
            options: ['"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."', '"Since f is continuous and f(a) < N < f(b), by IVT there exists c..."', '"Since f\' > 0 on (a,b), f is increasing"', 'State theorems by name and verify their hypotheses']
          },
          {
            label: 'IVT',
            options: ['"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."', 'State theorems by name and verify their hypotheses', '"Since f is continuous and f(a) < N < f(b), by IVT there exists c..."', '"Since f\' > 0 on (a,b), f is increasing"']
          },
          {
            label: 'MVT',
            options: ['State theorems by name and verify their hypotheses', '"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."', '"Since f\' > 0 on (a,b), f is increasing"', '"Since f is continuous and f(a) < N < f(b), by IVT there exists c..."']
          }
        ],
        correctAnswers: ['"Since f\' > 0 on (a,b), f is increasing"', '"Since f is continuous and f(a) < N < f(b), by IVT there exists c..."', '"Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."'],
        hint1: 'Think about what each concept specifically describes in Justification & Communication.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Justification & Communication describes a specific idea. Use calculus-based justifications: "Since f\' > 0 on (a,b), f is increasing". IVT: "Since f is continuous and f(a) < N < f(b), by IVT there exists c...". MVT: "Since f is continuous on [a,b] and differentiable on (a,b), by MVT...".'
      }
    }
  ]
}
