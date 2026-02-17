export const oChemLipidsPart6Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'lipid6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying lipid types from structure

Identifying lipid types from structure

### 2. Drawing nucleotide structures

Drawing nucleotide structures

### 3. Predicting membrane behavior

Predicting membrane behavior

### 4. Analyzing saponification reactions

Analyzing saponification reactions
      `
    },
    {
      id: 'lipid6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Identifying lipid types from structure?',
            options: [
              'Identifying lipid types from structure',
              'Drawing nucleotide structures',
              'Predicting membrane behavior',
              'Analyzing saponification reactions'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Identifying lipid types from structure. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Predicting membrane behavior?',
            options: [
              'Identifying lipid types from structure',
              'Drawing nucleotide structures',
              'Analyzing saponification reactions',
              'Predicting membrane behavior'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Predicting membrane behavior. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lipid6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Identifying lipid types from structure**
- **Drawing nucleotide structures**
- **Predicting membrane behavior**
- **Analyzing saponification reactions**
      `
    },
    {
      id: 'lipid6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Analyzing saponification reactions',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing saponification reactions'
          }
        ]
      }
    },
    {
      id: 'lipid6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying lipid types from structure',
            options: ['Predicting membrane behavior', 'Identifying lipid types from structure', 'Drawing nucleotide structures', 'Analyzing saponification reactions']
          },
          {
            label: 'Drawing nucleotide structures',
            options: ['Identifying lipid types from structure', 'Drawing nucleotide structures', 'Analyzing saponification reactions', 'Predicting membrane behavior']
          },
          {
            label: 'Predicting membrane behavior',
            options: ['Predicting membrane behavior', 'Drawing nucleotide structures', 'Analyzing saponification reactions', 'Identifying lipid types from structure']
          }
        ],
        correctAnswers: ['Identifying lipid types from structure', 'Drawing nucleotide structures', 'Predicting membrane behavior'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Identifying lipid types from structure. Drawing nucleotide structures. Predicting membrane behavior.'
      }
    }
  ]
}
