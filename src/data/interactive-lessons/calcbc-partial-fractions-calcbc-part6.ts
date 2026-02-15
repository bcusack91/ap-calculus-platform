export const calcBCPartialFractionsPart6Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'parti6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'parti6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'After decomposition, integrate each fraction separately',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'After decomposition, integrate each fraction separately'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              '∫A/(ax+b)²dx = -A/[a(ax+b)] + C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫A/(ax+b)²dx = -A/[a(ax+b)] + C'
          }
        ]
      }
    },
    {
      id: 'parti6-detail',
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
      id: 'parti6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: '∫(Ax+B)/(x²+a²)dx: split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan'
          }
        ]
      }
    },
    {
      id: 'parti6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After decomposition, integrate each fraction separately',
            options: ['After decomposition, integrate each fraction separ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫A/(ax+b)dx = (A/a)ln|ax+b| + C',
            options: ['∫A/(ax+b)dx = (A/a)ln|ax+b| + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫A/(ax+b)²dx = -A/[a(ax+b)] + C',
            options: ['∫A/(ax+b)²dx = -A/[a(ax+b)] + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['After decomposition, integrate each fraction separ', '∫A/(ax+b)dx = (A/a)ln|ax+b| + C', '∫A/(ax+b)²dx = -A/[a(ax+b)] + C'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
