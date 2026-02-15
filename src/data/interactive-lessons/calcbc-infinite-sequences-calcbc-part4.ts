export const calcBCSequencesPart4Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'infin4-intro',
      type: 'text' as const,
      content: `
# Growth Rates

**Part 4 of 7 — Growth Rates**

### 1. Exponential growth dominates polynomial

xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1

### 2. n! grows faster than aⁿ which grows faster than nᵏ

n! grows faster than aⁿ which grows faster than nᵏ

### 3. ln(n) grows slower than any positive power of n

ln(n) grows slower than any positive power of n

### 4. Useful hierarchy

ln(n) << nᵖ << aⁿ << n! << nⁿ
      `
    },
    {
      id: 'infin4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of growth rates?',
            options: [
              'Exponential growth dominates polynomial',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Exponential growth dominates polynomial: xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1'
          },
          {
            question: 'In the context of growth rates, which is accurate?',
            options: [
              'ln(n) grows slower than any positive power of n',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'ln(n) grows slower than any positive power of n'
          }
        ]
      }
    },
    {
      id: 'infin4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Exponential growth dominates polynomial**: xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1
- **n! grows faster than aⁿ which grows faster than nᵏ**
- **ln(n) grows slower than any positive power of n**
- **Useful hierarchy**: ln(n) << nᵖ << aⁿ << n! << nⁿ
      `
    },
    {
      id: 'infin4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to growth rates?',
            options: [
              'ln(n) << nᵖ << aⁿ << n! << nⁿ',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Useful hierarchy: ln(n) << nᵖ << aⁿ << n! << nⁿ'
          }
        ]
      }
    },
    {
      id: 'infin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exponential growth dominates polynomial',
            options: ['xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'n! grows faster than aⁿ which grows faster than nᵏ',
            options: ['n! grows faster than aⁿ which grows faster than nᵏ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'ln(n) grows slower than any positive power of n',
            options: ['ln(n) grows slower than any positive power of n', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1', 'n! grows faster than aⁿ which grows faster than nᵏ', 'ln(n) grows slower than any positive power of n'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Growth Rates.'
      }
    }
  ]
}
