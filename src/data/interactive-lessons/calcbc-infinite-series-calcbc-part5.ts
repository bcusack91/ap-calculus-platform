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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Ratio Test?',
            options: [
              'L = lim|aₙ|^(1/n); same conclusion rules as ratio test',
              'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1',
              'Best for series with factorials and exponentials',
              'If L = 1, the ratio test is inconclusive'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Ratio Test: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Ratio & Root Tests, which explains Best for series with factorials and…?',
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Ratio & Root Tests, which correctly describes Root Test?',
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
      id: 'infin5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio Test',
            options: ['Best for series with factorials and exponentials', 'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1', 'If L = 1, the ratio test is inconclusive', 'L = lim|aₙ|^(1/n); same conclusion rules as ratio test']
          },
          {
            label: 'Root Test',
            options: ['Best for series with factorials and exponentials', 'L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1', 'If L = 1, the ratio test is inconclusive', 'L = lim|aₙ|^(1/n); same conclusion rules as ratio test']
          }
        ],
        correctAnswers: ['L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1', 'L = lim|aₙ|^(1/n); same conclusion rules as ratio test'],
        hint1: 'Think about what each concept specifically describes in Ratio & Root Tests.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ratio & Root Tests describes a specific idea. Ratio Test: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1. Root Test: L = lim|aₙ|^(1/n); same conclusion rules as ratio test.'
      }
    }
  ]
}
