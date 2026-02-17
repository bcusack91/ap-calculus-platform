export const calcBCPartialFractionsPart7Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'parti7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. After decomposition, integrate each fraction separately

After decomposition, integrate each fraction separately

### 2. ∫A/(ax+b)dx = (A/a)ln|ax+b| + C

∫A/(ax+b)dx = (A/a)ln|ax+b| + C

### 3. ∫A/(ax+b)²dx = -A/[a(ax+b)] + C

∫A/(ax+b)²dx = -A/[a(ax+b)] + C

### 4. ∫(Ax+B)/(x²+a²)dx

split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan
      `
    },
    {
      id: 'parti7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes After decomposition, integrate each…?',
            options: [
              'After decomposition, integrate each fraction separately',
              '∫A/(ax+b)²dx = -A/[a(ax+b)] + C',
              '∫A/(ax+b)dx = (A/a)ln|ax+b| + C',
              'split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan'
            ],
            correctAnswer: 0,
            explanation: 'Correct — After decomposition, integrate each fraction separately. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about ∫A/(ax+b)²dx = -A/[a(ax+b)] + C?',
            options: [
              'After decomposition, integrate each fraction separately',
              'split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan',
              '∫A/(ax+b)dx = (A/a)ln|ax+b| + C',
              '∫A/(ax+b)²dx = -A/[a(ax+b)] + C'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫A/(ax+b)²dx = -A/[a(ax+b)] + C. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'parti7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **After decomposition, integrate each fraction separately**
- **∫A/(ax+b)dx = (A/a)ln|ax+b| + C**
- **∫A/(ax+b)²dx = -A/[a(ax+b)] + C**
- **∫(Ax+B)/(x²+a²)dx**: split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan
      `
    },
    {
      id: 'parti7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ∫(Ax+B)/(x²+a²)dx is correct?',
            options: [
              'split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan',
              'After decomposition, integrate each fraction separately',
              '∫A/(ax+b)dx = (A/a)ln|ax+b| + C',
              '∫A/(ax+b)²dx = -A/[a(ax+b)] + C'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ∫(Ax+B)/(x²+a²)dx: split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After decomposition, integrate each…',
            options: ['After decomposition, integrate each fraction separately', '∫A/(ax+b)²dx = -A/[a(ax+b)] + C', '∫A/(ax+b)dx = (A/a)ln|ax+b| + C', 'split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan']
          },
          {
            label: '∫A/(ax+b)dx = (A/a)ln|ax+b| + C',
            options: ['split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan', 'After decomposition, integrate each fraction separately', '∫A/(ax+b)dx = (A/a)ln|ax+b| + C', '∫A/(ax+b)²dx = -A/[a(ax+b)] + C']
          },
          {
            label: '∫A/(ax+b)²dx = -A/[a(ax+b)] + C',
            options: ['∫A/(ax+b)dx = (A/a)ln|ax+b| + C', '∫A/(ax+b)²dx = -A/[a(ax+b)] + C', 'split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan', 'After decomposition, integrate each fraction separately']
          }
        ],
        correctAnswers: ['After decomposition, integrate each fraction separately', '∫A/(ax+b)dx = (A/a)ln|ax+b| + C', '∫A/(ax+b)²dx = -A/[a(ax+b)] + C'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. After decomposition, integrate each fraction separately. ∫A/(ax+b)dx = (A/a)ln|ax+b| + C. ∫A/(ax+b)²dx = -A/[a(ax+b)] + C.'
      }
    }
  ]
}
