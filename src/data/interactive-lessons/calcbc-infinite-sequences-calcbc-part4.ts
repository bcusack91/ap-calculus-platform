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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Exponential growth dominates polynomial?',
            options: [
              'ln(n) grows slower than any positive power of n',
              'n! grows faster than aⁿ which grows faster than nᵏ',
              'xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1',
              'ln(n) << nᵖ << aⁿ << n! << nⁿ'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Exponential growth dominates polynomial: xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about ln(n) grows slower than any positive…?',
            options: [
              'ln(n) grows slower than any positive power of n',
              'ln(n) << nᵖ << aⁿ << n! << nⁿ',
              'xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1',
              'n! grows faster than aⁿ which grows faster than nᵏ'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ln(n) grows slower than any positive power of n. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Growth Rates, which correctly describes Useful hierarchy?',
            options: [
              'ln(n) grows slower than any positive power of n',
              'n! grows faster than aⁿ which grows faster than nᵏ',
              'xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1',
              'ln(n) << nᵖ << aⁿ << n! << nⁿ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Useful hierarchy: ln(n) << nᵖ << aⁿ << n! << nⁿ. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exponential growth dominates polynomial',
            options: ['n! grows faster than aⁿ which grows faster than nᵏ', 'xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1', 'ln(n) << nᵖ << aⁿ << n! << nⁿ', 'ln(n) grows slower than any positive power of n']
          },
          {
            label: 'Useful hierarchy',
            options: ['ln(n) grows slower than any positive power of n', 'n! grows faster than aⁿ which grows faster than nᵏ', 'xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1', 'ln(n) << nᵖ << aⁿ << n! << nⁿ']
          }
        ],
        correctAnswers: ['xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1', 'ln(n) << nᵖ << aⁿ << n! << nⁿ'],
        hint1: 'Think about what each concept specifically describes in Growth Rates.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Growth Rates describes a specific idea. Exponential growth dominates polynomial: xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1. Useful hierarchy: ln(n) << nᵖ << aⁿ << n! << nⁿ.'
      }
    }
  ]
}
