export const oChemNMRPart5Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s5-intro',
      type: 'text' as const,
      content: `
# Structure Determination

**Part 5 of 7 — Structure Determination**

### 1. Step 1

determine molecular formula and degrees of unsaturation

### 2. Step 2

analyze IR for functional groups

### 3. Step 3

count ¹H NMR signals, integration, splitting

### 4. Step 4

assemble fragments into consistent structure
      `
    },
    {
      id: 'nmr-s5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of structure determination?',
            options: [
              'Step 1',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Step 1: determine molecular formula and degrees of unsaturation'
          },
          {
            question: 'In the context of structure determination, which is accurate?',
            options: [
              'count ¹H NMR signals, integration, splitting',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Step 3: count ¹H NMR signals, integration, splitting'
          }
        ]
      }
    },
    {
      id: 'nmr-s5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Step 1**: determine molecular formula and degrees of unsaturation
- **Step 2**: analyze IR for functional groups
- **Step 3**: count ¹H NMR signals, integration, splitting
- **Step 4**: assemble fragments into consistent structure
      `
    },
    {
      id: 'nmr-s5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to structure determination?',
            options: [
              'assemble fragments into consistent structure',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Step 4: assemble fragments into consistent structure'
          }
        ]
      }
    },
    {
      id: 'nmr-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Step 1',
            options: ['determine molecular formula and degrees of unsatur', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 2',
            options: ['analyze IR for functional groups', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 3',
            options: ['count ¹H NMR signals, integration, splitting', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['determine molecular formula and degrees of unsatur', 'analyze IR for functional groups', 'count ¹H NMR signals, integration, splitting'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Structure Determination.'
      }
    }
  ]
}
