export const oChemAcidsBasesPart4Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'acids4-intro',
      type: 'text' as const,
      content: `
# Lewis Acids & Bases

**Part 4 of 7 — Lewis Acids & Bases**

### 1. Lewis acid

electron pair acceptor

### 2. Lewis base

electron pair donor

### 3. BF₃ is a Lewis acid (empty p orbital)

BF₃ is a Lewis acid (empty p orbital)

### 4. Nucleophiles are Lewis bases; electrophiles are Lewis acids

Nucleophiles are Lewis bases; electrophiles are Lewis acids
      `
    },
    {
      id: 'acids4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of lewis acids & bases?',
            options: [
              'Lewis acid',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Lewis acid: electron pair acceptor'
          },
          {
            question: 'In the context of lewis acids & bases, which is accurate?',
            options: [
              'BF₃ is a Lewis acid (empty p orbital)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'BF₃ is a Lewis acid (empty p orbital)'
          }
        ]
      }
    },
    {
      id: 'acids4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Lewis acid**: electron pair acceptor
- **Lewis base**: electron pair donor
- **BF₃ is a Lewis acid (empty p orbital)**
- **Nucleophiles are Lewis bases; electrophiles are Lewis acids**
      `
    },
    {
      id: 'acids4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to lewis acids & bases?',
            options: [
              'Nucleophiles are Lewis bases; electrophiles are Lewis acids',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Nucleophiles are Lewis bases; electrophiles are Lewis acids'
          }
        ]
      }
    },
    {
      id: 'acids4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lewis acid',
            options: ['electron pair acceptor', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Lewis base',
            options: ['electron pair donor', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'BF₃ is a Lewis acid (empty p orbital)',
            options: ['BF₃ is a Lewis acid (empty p orbital)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['electron pair acceptor', 'electron pair donor', 'BF₃ is a Lewis acid (empty p orbital)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Lewis Acids & Bases.'
      }
    }
  ]
}
