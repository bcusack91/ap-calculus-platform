export const oChemAminoAcidsPart6Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'amino6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Determining amino acid charge at different pH values

Determining amino acid charge at different pH values

### 2. Drawing peptide structures

Drawing peptide structures

### 3. Predicting protein structure from sequence

Predicting protein structure from sequence

### 4. Analyzing electrophoresis results

Analyzing electrophoresis results
      `
    },
    {
      id: 'amino6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Determining amino acid charge at different pH values',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Determining amino acid charge at different pH values'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Predicting protein structure from sequence',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Predicting protein structure from sequence'
          }
        ]
      }
    },
    {
      id: 'amino6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Determining amino acid charge at different pH values**
- **Drawing peptide structures**
- **Predicting protein structure from sequence**
- **Analyzing electrophoresis results**
      `
    },
    {
      id: 'amino6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Analyzing electrophoresis results',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing electrophoresis results'
          }
        ]
      }
    },
    {
      id: 'amino6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Determining amino acid charge at different pH values',
            options: ['Determining amino acid charge at different pH valu', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Drawing peptide structures',
            options: ['Drawing peptide structures', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Predicting protein structure from sequence',
            options: ['Predicting protein structure from sequence', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Determining amino acid charge at different pH valu', 'Drawing peptide structures', 'Predicting protein structure from sequence'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
