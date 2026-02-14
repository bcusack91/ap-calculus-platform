export const oChemElimPart6Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Predicting elimination products

Predicting elimination products

### 2. Distinguishing E1 from E2

Distinguishing E1 from E2

### 3. Choosing between substitution and elimination

Choosing between substitution and elimination

### 4. Drawing mechanisms and predicting stereochemistry

Drawing mechanisms and predicting stereochemistry
      `
    },
    {
      id: 'elimi6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Predicting elimination products',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting elimination products'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Choosing between substitution and elimination',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Choosing between substitution and elimination'
          }
        ]
      }
    },
    {
      id: 'elimi6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Predicting elimination products**
- **Distinguishing E1 from E2**
- **Choosing between substitution and elimination**
- **Drawing mechanisms and predicting stereochemistry**
      `
    },
    {
      id: 'elimi6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Drawing mechanisms and predicting stereochemistry',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Drawing mechanisms and predicting stereochemistry'
          }
        ]
      }
    },
    {
      id: 'elimi6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting elimination products',
            options: ['Predicting elimination products', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Distinguishing E1 from E2',
            options: ['Distinguishing E1 from E2', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Choosing between substitution and elimination',
            options: ['Choosing between substitution and elimination', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Predicting elimination products', 'Distinguishing E1 from E2', 'Choosing between substitution and elimination'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
