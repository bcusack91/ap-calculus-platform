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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of optical activity?',
            options: [
              'Optical activity',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Optical activity: rotating plane-polarized light'
          },
          {
            question: 'In the context of optical activity, which is accurate?',
            options: [
              '(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Optical activity',
            options: ['rotating plane-polarized light', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Enantiomers rotate light equal amounts but opposite directions',
            options: ['Enantiomers rotate light equal amounts but opposit', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: '(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)',
            options: ['(+) dextrorotatory (clockwise); (-) levorotatory (', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['rotating plane-polarized light', 'Enantiomers rotate light equal amounts but opposit', '(+) dextrorotatory (clockwise); (-) levorotatory ('],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Optical Activity.'
      }
    }
  ]
}
