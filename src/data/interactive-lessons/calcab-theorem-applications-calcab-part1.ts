export const calcABTheoremsPart1Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor1-intro',
      type: 'text' as const,
      content: `
# ∫ Theorem Applications

**Part 1 of 7 — Extreme Value Theorem**

### 1. EVT

a continuous function on [a,b] attains both a global max and a global min

### 2. Global max and min occur at critical points or endpoints

Global max and min occur at critical points or endpoints

### 3. Check f' = 0, f' undefined, and endpoints

Check f' = 0, f' undefined, and endpoints

### 4. EVT guarantees existence; finding extrema requires calculation

EVT guarantees existence; finding extrema requires calculation
      `
    },
    {
      id: 'theor1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of extreme value theorem?',
            options: [
              'EVT',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'EVT: a continuous function on [a,b] attains both a global max and a global min'
          },
          {
            question: 'In the context of extreme value theorem, which is accurate?',
            options: [
              'Check f\' = 0, f\' undefined, and endpoints',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Check f\' = 0, f\' undefined, and endpoints'
          }
        ]
      }
    },
    {
      id: 'theor1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **EVT**: a continuous function on [a,b] attains both a global max and a global min
- **Global max and min occur at critical points or endpoints**
- **Check f' = 0, f' undefined, and endpoints**
- **EVT guarantees existence; finding extrema requires calculation**
      `
    },
    {
      id: 'theor1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to extreme value theorem?',
            options: [
              'EVT guarantees existence; finding extrema requires calculation',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'EVT guarantees existence; finding extrema requires calculation'
          }
        ]
      }
    },
    {
      id: 'theor1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'EVT',
            options: ['a continuous function on [a,b] attains both a glob', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Global max and min occur at critical points or endpoints',
            options: ['Global max and min occur at critical points or end', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Check f\' = 0, f\' undefined, and endpoints',
            options: ['Check f\' = 0, f\' undefined, and endpoints', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['a continuous function on [a,b] attains both a glob', 'Global max and min occur at critical points or end', 'Check f\' = 0, f\' undefined, and endpoints'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Extreme Value Theorem.'
      }
    }
  ]
}
