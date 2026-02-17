export const calcBCSeriesPart6Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'infin6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'infin6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Ratio Test?',
            options: [
              'Best for series with factorials and exponentials',
              'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1',
              'If L = 1, the ratio test is inconclusive',
              'L = lim|aₙ|^(1/n); same conclusion rules as ratio test'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Ratio Test: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Best for series with factorials and…?',
            options: [
              'L = lim|aₙ|^(1/n); same conclusion rules as ratio test',
              'If L = 1, the ratio test is inconclusive',
              'Best for series with factorials and exponentials',
              'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Best for series with factorials and exponentials. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'infin6-detail',
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
      id: 'infin6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Root Test is correct?',
            options: [
              'L = lim|aₙ|^(1/n); same conclusion rules as ratio test',
              'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1',
              'If L = 1, the ratio test is inconclusive',
              'Best for series with factorials and exponentials'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Root Test: L = lim|aₙ|^(1/n); same conclusion rules as ratio test. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio Test',
            options: ['L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1', 'Best for series with factorials and exponentials', 'L = lim|aₙ|^(1/n); same conclusion rules as ratio test', 'If L = 1, the ratio test is inconclusive']
          },
          {
            label: 'Root Test',
            options: ['L = lim|aₙ|^(1/n); same conclusion rules as ratio test', 'If L = 1, the ratio test is inconclusive', 'Best for series with factorials and exponentials', 'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1']
          }
        ],
        correctAnswers: ['L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1', 'L = lim|aₙ|^(1/n); same conclusion rules as ratio test'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Ratio Test: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1. Root Test: L = lim|aₙ|^(1/n); same conclusion rules as ratio test.'
      }
    }
  ]
}
