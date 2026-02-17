export const oChemAtomicBondingPart6Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Drawing Lewis structures and assigning formal charges

Drawing Lewis structures and assigning formal charges

### 2. Determining hybridization from structure

Determining hybridization from structure

### 3. Predicting molecular geometry

Predicting molecular geometry

### 4. Calculating bond order from MO diagrams

Calculating bond order from MO diagrams
      `
    },
    {
      id: 'atomi6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Drawing Lewis structures and assigning…" refer to in this topic?',
            options: [
              'Determining hybridization from structure',
              'Calculating bond order from MO diagrams',
              'Predicting molecular geometry',
              'Drawing Lewis structures and assigning formal charges'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Drawing Lewis structures and assigning formal charges. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Predicting molecular geometry?',
            options: [
              'Predicting molecular geometry',
              'Determining hybridization from structure',
              'Calculating bond order from MO diagrams',
              'Drawing Lewis structures and assigning formal charges'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Predicting molecular geometry. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'atomi6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Drawing Lewis structures and assigning formal charges**
- **Determining hybridization from structure**
- **Predicting molecular geometry**
- **Calculating bond order from MO diagrams**
      `
    },
    {
      id: 'atomi6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Calculating bond order from MO diagrams',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Calculating bond order from MO diagrams'
          }
        ]
      }
    },
    {
      id: 'atomi6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing Lewis structures and assigning…',
            options: ['Drawing Lewis structures and assigning formal charges', 'Determining hybridization from structure', 'Predicting molecular geometry', 'Calculating bond order from MO diagrams']
          },
          {
            label: 'Determining hybridization from structure',
            options: ['Predicting molecular geometry', 'Determining hybridization from structure', 'Drawing Lewis structures and assigning formal charges', 'Calculating bond order from MO diagrams']
          },
          {
            label: 'Predicting molecular geometry',
            options: ['Calculating bond order from MO diagrams', 'Drawing Lewis structures and assigning formal charges', 'Predicting molecular geometry', 'Determining hybridization from structure']
          }
        ],
        correctAnswers: ['Drawing Lewis structures and assigning formal charges', 'Determining hybridization from structure', 'Predicting molecular geometry'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Drawing Lewis structures and assigning formal charges. Determining hybridization from structure. Predicting molecular geometry.'
      }
    }
  ]
}
