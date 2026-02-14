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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of addition to alkynes?',
            options: [
              'HX addition',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'HX addition: follows Markovnikov\'s rule'
          },
          {
            question: 'In the context of addition to alkynes, which is accurate?',
            options: [
              '2 equivalents HX → geminal dihalide',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '2 equivalents HX → geminal dihalide'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'HX addition',
            options: ['follows Markovnikov\'s rule', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: '1 equivalent HX → vinyl halide',
            options: ['1 equivalent HX → vinyl halide', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: '2 equivalents HX → geminal dihalide',
            options: ['2 equivalents HX → geminal dihalide', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['follows Markovnikov\'s rule', '1 equivalent HX → vinyl halide', '2 equivalents HX → geminal dihalide'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Addition to Alkynes.'
      }
    }
  ]
}
