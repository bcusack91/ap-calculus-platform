export const oChemStereoPart3Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'stere3-intro',
      type: 'text' as const,
      content: `
# Optical Activity

**Part 3 of 7 — Optical Activity**

### 1. Optical activity

rotating plane-polarized light

### 2. Enantiomers rotate light equal amounts but opposite directions

Enantiomers rotate light equal amounts but opposite directions

### 3. (+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)

(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)

### 4. Racemic mixture

equal R and S → no net rotation
      `
    },
    {
      id: 'stere3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Optical activity" refer to in this topic?',
            options: [
              'Enantiomers rotate light equal amounts but opposite directions',
              'rotating plane-polarized light',
              '(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)',
              'equal R and S → no net rotation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Optical activity: rotating plane-polarized light. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes (+) dextrorotatory (clockwise); (-)…:',
            options: [
              'rotating plane-polarized light',
              '(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)',
              'Enantiomers rotate light equal amounts but opposite directions',
              'equal R and S → no net rotation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — (+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'stere3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Optical activity**: rotating plane-polarized light
- **Enantiomers rotate light equal amounts but opposite directions**
- **(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)**
- **Racemic mixture**: equal R and S → no net rotation
      `
    },
    {
      id: 'stere3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to optical activity?',
            options: [
              'equal R and S → no net rotation',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Racemic mixture: equal R and S → no net rotation'
          }
        ]
      }
    },
    {
      id: 'stere3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Optical activity',
            options: ['equal R and S → no net rotation', 'Enantiomers rotate light equal amounts but opposite directions', 'rotating plane-polarized light', '(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)']
          },
          {
            label: 'Racemic mixture',
            options: ['(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)', 'equal R and S → no net rotation', 'Enantiomers rotate light equal amounts but opposite directions', 'rotating plane-polarized light']
          }
        ],
        correctAnswers: ['rotating plane-polarized light', 'equal R and S → no net rotation'],
        hint1: 'Think about what each concept specifically describes in Optical Activity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Optical Activity describes a specific idea. Optical activity: rotating plane-polarized light. Racemic mixture: equal R and S → no net rotation.'
      }
    }
  ]
}
