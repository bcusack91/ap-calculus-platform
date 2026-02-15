export const calcBCSeriesPart5Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'infin5-intro',
      type: 'text' as const,
      content: `
# Ratio & Root Tests

**Part 5 of 7 — Ratio & Root Tests**

### 1. Ratio Test

L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1

### 2. If L = 1, the ratio test is inconclusive

If L = 1, the ratio test is inconclusive

### 3. Best for series with factorials and exponentials

Best for series with factorials and exponentials

### 4. Root Test

L = lim|aₙ|^(1/n); same conclusion rules as ratio test
      `
    },
    {
      id: 'infin5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ratio & root tests?',
            options: [
              'Ratio Test',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Ratio Test: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1'
          },
          {
            question: 'In the context of ratio & root tests, which is accurate?',
            options: [
              'Best for series with factorials and exponentials',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Best for series with factorials and exponentials'
          }
        ]
      }
    },
    {
      id: 'infin5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Ratio Test**: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1
- **If L = 1, the ratio test is inconclusive**
- **Best for series with factorials and exponentials**
- **Root Test**: L = lim|aₙ|^(1/n); same conclusion rules as ratio test
      `
    },
    {
      id: 'infin5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ratio & root tests?',
            options: [
              'L = lim|aₙ|^(1/n); same conclusion rules as ratio test',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Root Test: L = lim|aₙ|^(1/n); same conclusion rules as ratio test'
          }
        ]
      }
    },
    {
      id: 'infin5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio Test',
            options: ['L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If L = 1, the ratio test is inconclusive',
            options: ['If L = 1, the ratio test is inconclusive', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Best for series with factorials and exponentials',
            options: ['Best for series with factorials and exponentials', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if ', 'If L = 1, the ratio test is inconclusive', 'Best for series with factorials and exponentials'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Ratio & Root Tests.'
      }
    }
  ]
}
