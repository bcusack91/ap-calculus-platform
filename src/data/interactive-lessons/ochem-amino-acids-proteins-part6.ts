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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Determining amino acid charge at…?',
            options: [
              'Analyzing electrophoresis results',
              'Determining amino acid charge at different pH values',
              'Drawing peptide structures',
              'Predicting protein structure from sequence'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Determining amino acid charge at different pH values. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Predicting protein structure from…?',
            options: [
              'Drawing peptide structures',
              'Predicting protein structure from sequence',
              'Determining amino acid charge at different pH values',
              'Analyzing electrophoresis results'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Predicting protein structure from sequence. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Determining amino acid charge at…',
            options: ['Drawing peptide structures', 'Analyzing electrophoresis results', 'Determining amino acid charge at different pH values', 'Predicting protein structure from sequence']
          },
          {
            label: 'Drawing peptide structures',
            options: ['Predicting protein structure from sequence', 'Drawing peptide structures', 'Analyzing electrophoresis results', 'Determining amino acid charge at different pH values']
          },
          {
            label: 'Predicting protein structure from…',
            options: ['Drawing peptide structures', 'Predicting protein structure from sequence', 'Analyzing electrophoresis results', 'Determining amino acid charge at different pH values']
          }
        ],
        correctAnswers: ['Determining amino acid charge at different pH values', 'Drawing peptide structures', 'Predicting protein structure from sequence'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Determining amino acid charge at different pH values. Drawing peptide structures. Predicting protein structure from sequence.'
      }
    }
  ]
}
