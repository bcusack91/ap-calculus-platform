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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Determining aromaticity using Hückel\'s rule',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Determining aromaticity using Hückel\'s rule'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Naming aromatic compounds',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Naming aromatic compounds'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Determining aromaticity using Hückel\'s rule',
            options: ['Determining aromaticity using Hückel\'s rule', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Counting π electrons in cyclic systems',
            options: ['Counting π electrons in cyclic systems', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Naming aromatic compounds',
            options: ['Naming aromatic compounds', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Determining aromaticity using Hückel\'s rule', 'Counting π electrons in cyclic systems', 'Naming aromatic compounds'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
