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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Identifying lipid types from structure',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Identifying lipid types from structure'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Predicting membrane behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Predicting membrane behavior'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying lipid types from structure',
            options: ['Identifying lipid types from structure', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Drawing nucleotide structures',
            options: ['Drawing nucleotide structures', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Predicting membrane behavior',
            options: ['Predicting membrane behavior', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Identifying lipid types from structure', 'Drawing nucleotide structures', 'Predicting membrane behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
