export const oChemAromaticPart6Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'aroma6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Determining aromaticity using Hückel's rule

Determining aromaticity using Hückel's rule

### 2. Counting π electrons in cyclic systems

Counting π electrons in cyclic systems

### 3. Naming aromatic compounds

Naming aromatic compounds

### 4. Comparing aromatic, antiaromatic, and nonaromatic

Comparing aromatic, antiaromatic, and nonaromatic
      `
    },
    {
      id: 'aroma6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Determining aromaticity using Hückel\'s…" refer to in this topic?',
            options: [
              'Comparing aromatic, antiaromatic, and nonaromatic',
              'Naming aromatic compounds',
              'Counting π electrons in cyclic systems',
              'Determining aromaticity using Hückel\'s rule'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Determining aromaticity using Hückel\'s rule. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Naming aromatic compounds?',
            options: [
              'Naming aromatic compounds',
              'Determining aromaticity using Hückel\'s rule',
              'Comparing aromatic, antiaromatic, and nonaromatic',
              'Counting π electrons in cyclic systems'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Naming aromatic compounds. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'aroma6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Determining aromaticity using Hückel's rule**
- **Counting π electrons in cyclic systems**
- **Naming aromatic compounds**
- **Comparing aromatic, antiaromatic, and nonaromatic**
      `
    },
    {
      id: 'aroma6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Comparing aromatic, antiaromatic, and nonaromatic',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Comparing aromatic, antiaromatic, and nonaromatic'
          }
        ]
      }
    },
    {
      id: 'aroma6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Determining aromaticity using Hückel\'s…',
            options: ['Comparing aromatic, antiaromatic, and nonaromatic', 'Naming aromatic compounds', 'Determining aromaticity using Hückel\'s rule', 'Counting π electrons in cyclic systems']
          },
          {
            label: 'Counting π electrons in cyclic systems',
            options: ['Comparing aromatic, antiaromatic, and nonaromatic', 'Naming aromatic compounds', 'Determining aromaticity using Hückel\'s rule', 'Counting π electrons in cyclic systems']
          },
          {
            label: 'Naming aromatic compounds',
            options: ['Counting π electrons in cyclic systems', 'Determining aromaticity using Hückel\'s rule', 'Naming aromatic compounds', 'Comparing aromatic, antiaromatic, and nonaromatic']
          }
        ],
        correctAnswers: ['Determining aromaticity using Hückel\'s rule', 'Counting π electrons in cyclic systems', 'Naming aromatic compounds'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Determining aromaticity using Hückel\'s rule. Counting π electrons in cyclic systems. Naming aromatic compounds.'
      }
    }
  ]
}
