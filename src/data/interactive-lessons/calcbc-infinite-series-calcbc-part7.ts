export const calcBCSeriesPart7Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'infin7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'infin7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Ratio Test?',
            options: [
              'If L = 1, the ratio test is inconclusive',
              'Best for series with factorials and exponentials',
              'L = lim|aₙ|^(1/n); same conclusion rules as ratio test',
              'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Ratio Test: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Best for series with factorials and…?',
            options: [
              'Best for series with factorials and exponentials',
              'If L = 1, the ratio test is inconclusive',
              'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1',
              'L = lim|aₙ|^(1/n); same conclusion rules as ratio test'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Best for series with factorials and exponentials. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'infin7-detail',
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
      id: 'infin7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Root Test?',
            options: [
              'If L = 1, the ratio test is inconclusive',
              'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1',
              'L = lim|aₙ|^(1/n); same conclusion rules as ratio test',
              'Best for series with factorials and exponentials'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Root Test: L = lim|aₙ|^(1/n); same conclusion rules as ratio test. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio Test',
            options: ['L = lim|aₙ|^(1/n); same conclusion rules as ratio test', 'Best for series with factorials and exponentials', 'If L = 1, the ratio test is inconclusive', 'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1']
          },
          {
            label: 'Root Test',
            options: ['L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1', 'If L = 1, the ratio test is inconclusive', 'L = lim|aₙ|^(1/n); same conclusion rules as ratio test', 'Best for series with factorials and exponentials']
          }
        ],
        correctAnswers: ['L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1', 'L = lim|aₙ|^(1/n); same conclusion rules as ratio test'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Ratio Test: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1. Root Test: L = lim|aₙ|^(1/n); same conclusion rules as ratio test.'
      }
    }
  ]
}
