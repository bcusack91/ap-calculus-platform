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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Drawing and interpreting skeletal…?',
            options: [
              'Drawing and interpreting skeletal structures',
              'Predicting physical properties from structure',
              'Calculating degrees of unsaturation',
              'Identifying functional groups'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Drawing and interpreting skeletal structures. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Calculating degrees of unsaturation:',
            options: [
              'Drawing and interpreting skeletal structures',
              'Calculating degrees of unsaturation',
              'Identifying functional groups',
              'Predicting physical properties from structure'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Calculating degrees of unsaturation. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing and interpreting skeletal…',
            options: ['Predicting physical properties from structure', 'Calculating degrees of unsaturation', 'Drawing and interpreting skeletal structures', 'Identifying functional groups']
          },
          {
            label: 'Identifying functional groups',
            options: ['Calculating degrees of unsaturation', 'Identifying functional groups', 'Predicting physical properties from structure', 'Drawing and interpreting skeletal structures']
          },
          {
            label: 'Calculating degrees of unsaturation',
            options: ['Predicting physical properties from structure', 'Drawing and interpreting skeletal structures', 'Identifying functional groups', 'Calculating degrees of unsaturation']
          }
        ],
        correctAnswers: ['Drawing and interpreting skeletal structures', 'Identifying functional groups', 'Calculating degrees of unsaturation'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Drawing and interpreting skeletal structures. Identifying functional groups. Calculating degrees of unsaturation.'
      }
    }
  ]
}
