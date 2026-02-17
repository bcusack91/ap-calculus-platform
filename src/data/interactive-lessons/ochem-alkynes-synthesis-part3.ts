export const oChemAlkynesPart3Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'alkyn3-intro',
      type: 'text' as const,
      content: `
# Addition to Alkynes

**Part 3 of 7 — Addition to Alkynes**

### 1. HX addition

follows Markovnikov's rule

### 2. 1 equivalent HX → vinyl halide

1 equivalent HX → vinyl halide

### 3. 2 equivalents HX → geminal dihalide

2 equivalents HX → geminal dihalide

### 4. Hydration

H₂O/H⁺/HgSO₄ → ketone (Markovnikov)
      `
    },
    {
      id: 'alkyn3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains HX addition?',
            options: [
              'H₂O/H⁺/HgSO₄ → ketone (Markovnikov)',
              '2 equivalents HX → geminal dihalide',
              'follows Markovnikov\'s rule',
              '1 equivalent HX → vinyl halide'
            ],
            correctAnswer: 2,
            explanation: 'Correct — HX addition: follows Markovnikov\'s rule. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes 2 equivalents HX → geminal dihalide:',
            options: [
              'H₂O/H⁺/HgSO₄ → ketone (Markovnikov)',
              '2 equivalents HX → geminal dihalide',
              '1 equivalent HX → vinyl halide',
              'follows Markovnikov\'s rule'
            ],
            correctAnswer: 1,
            explanation: 'Correct — 2 equivalents HX → geminal dihalide. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alkyn3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **HX addition**: follows Markovnikov's rule
- **1 equivalent HX → vinyl halide**
- **2 equivalents HX → geminal dihalide**
- **Hydration**: H₂O/H⁺/HgSO₄ → ketone (Markovnikov)
      `
    },
    {
      id: 'alkyn3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to addition to alkynes?',
            options: [
              'H₂O/H⁺/HgSO₄ → ketone (Markovnikov)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Hydration: H₂O/H⁺/HgSO₄ → ketone (Markovnikov)'
          }
        ]
      }
    },
    {
      id: 'alkyn3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'HX addition',
            options: ['1 equivalent HX → vinyl halide', 'follows Markovnikov\'s rule', '2 equivalents HX → geminal dihalide', 'H₂O/H⁺/HgSO₄ → ketone (Markovnikov)']
          },
          {
            label: 'Hydration',
            options: ['2 equivalents HX → geminal dihalide', 'follows Markovnikov\'s rule', 'H₂O/H⁺/HgSO₄ → ketone (Markovnikov)', '1 equivalent HX → vinyl halide']
          }
        ],
        correctAnswers: ['follows Markovnikov\'s rule', 'H₂O/H⁺/HgSO₄ → ketone (Markovnikov)'],
        hint1: 'Think about what each concept specifically describes in Addition to Alkynes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Addition to Alkynes describes a specific idea. HX addition: follows Markovnikov\'s rule. Hydration: H₂O/H⁺/HgSO₄ → ketone (Markovnikov).'
      }
    }
  ]
}
