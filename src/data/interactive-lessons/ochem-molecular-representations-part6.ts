export const oChemMolRepPart6Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Drawing and interpreting skeletal structures

Drawing and interpreting skeletal structures

### 2. Identifying functional groups

Identifying functional groups

### 3. Calculating degrees of unsaturation

Calculating degrees of unsaturation

### 4. Predicting physical properties from structure

Predicting physical properties from structure
      `
    },
    {
      id: 'molec6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Drawing and interpreting skeletal structures',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Drawing and interpreting skeletal structures'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Calculating degrees of unsaturation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Calculating degrees of unsaturation'
          }
        ]
      }
    },
    {
      id: 'molec6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Drawing and interpreting skeletal structures**
- **Identifying functional groups**
- **Calculating degrees of unsaturation**
- **Predicting physical properties from structure**
      `
    },
    {
      id: 'molec6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Predicting physical properties from structure',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Predicting physical properties from structure'
          }
        ]
      }
    },
    {
      id: 'molec6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing and interpreting skeletal structures',
            options: ['Drawing and interpreting skeletal structures', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Identifying functional groups',
            options: ['Identifying functional groups', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Calculating degrees of unsaturation',
            options: ['Calculating degrees of unsaturation', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Drawing and interpreting skeletal structures', 'Identifying functional groups', 'Calculating degrees of unsaturation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
