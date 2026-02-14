export const oChemIRMSPart6Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Interpreting IR spectra to identify functional groups

Interpreting IR spectra to identify functional groups

### 2. Analyzing mass spectra for molecular weight and fragments

Analyzing mass spectra for molecular weight and fragments

### 3. Combining IR and MS data

Combining IR and MS data

### 4. Practice with unknown identification

Practice with unknown identification
      `
    },
    {
      id: 'infra6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Interpreting IR spectra to identify functional groups',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Interpreting IR spectra to identify functional groups'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Combining IR and MS data',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Combining IR and MS data'
          }
        ]
      }
    },
    {
      id: 'infra6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Interpreting IR spectra to identify functional groups**
- **Analyzing mass spectra for molecular weight and fragments**
- **Combining IR and MS data**
- **Practice with unknown identification**
      `
    },
    {
      id: 'infra6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Practice with unknown identification',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Practice with unknown identification'
          }
        ]
      }
    },
    {
      id: 'infra6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interpreting IR spectra to identify functional groups',
            options: ['Interpreting IR spectra to identify functional gro', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Analyzing mass spectra for molecular weight and fragments',
            options: ['Analyzing mass spectra for molecular weight and fr', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Combining IR and MS data',
            options: ['Combining IR and MS data', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Interpreting IR spectra to identify functional gro', 'Analyzing mass spectra for molecular weight and fr', 'Combining IR and MS data'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
