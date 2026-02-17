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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Lewis acid" refer to in this topic?',
            options: [
              'electron pair acceptor',
              'electron pair donor',
              'Nucleophiles are Lewis bases; electrophiles are Lewis acids',
              'BF₃ is a Lewis acid (empty p orbital)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Lewis acid: electron pair acceptor. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Lewis Acids & Bases, which explains BF₃ is a Lewis acid (empty p orbital)?',
            options: [
              'electron pair donor',
              'electron pair acceptor',
              'Nucleophiles are Lewis bases; electrophiles are Lewis acids',
              'BF₃ is a Lewis acid (empty p orbital)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — BF₃ is a Lewis acid (empty p orbital). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lewis acid',
            options: ['Nucleophiles are Lewis bases; electrophiles are Lewis acids', 'electron pair donor', 'BF₃ is a Lewis acid (empty p orbital)', 'electron pair acceptor']
          },
          {
            label: 'Lewis base',
            options: ['Nucleophiles are Lewis bases; electrophiles are Lewis acids', 'BF₃ is a Lewis acid (empty p orbital)', 'electron pair donor', 'electron pair acceptor']
          }
        ],
        correctAnswers: ['electron pair acceptor', 'electron pair donor'],
        hint1: 'Think about what each concept specifically describes in Lewis Acids & Bases.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Lewis Acids & Bases describes a specific idea. Lewis acid: electron pair acceptor. Lewis base: electron pair donor.'
      }
    }
  ]
}
