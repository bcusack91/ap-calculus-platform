export const oChemSNPart6Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Predicting SN1 vs SN2 from reaction conditions

Predicting SN1 vs SN2 from reaction conditions

### 2. Drawing mechanisms with curved arrows

Drawing mechanisms with curved arrows

### 3. Predicting stereochemical outcomes

Predicting stereochemical outcomes

### 4. Analyzing substrate, nucleophile, solvent, and leaving group effects

Analyzing substrate, nucleophile, solvent, and leaving group effects
      `
    },
    {
      id: 'nucle6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Predicting SN1 vs SN2 from reaction conditions',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting SN1 vs SN2 from reaction conditions'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Predicting stereochemical outcomes',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Predicting stereochemical outcomes'
          }
        ]
      }
    },
    {
      id: 'nucle6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Predicting SN1 vs SN2 from reaction conditions**
- **Drawing mechanisms with curved arrows**
- **Predicting stereochemical outcomes**
- **Analyzing substrate, nucleophile, solvent, and leaving group effects**
      `
    },
    {
      id: 'nucle6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Analyzing substrate, nucleophile, solvent, and leaving group effects',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing substrate, nucleophile, solvent, and leaving group effects'
          }
        ]
      }
    },
    {
      id: 'nucle6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting SN1 vs SN2 from reaction conditions',
            options: ['Predicting SN1 vs SN2 from reaction conditions', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Drawing mechanisms with curved arrows',
            options: ['Drawing mechanisms with curved arrows', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Predicting stereochemical outcomes',
            options: ['Predicting stereochemical outcomes', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Predicting SN1 vs SN2 from reaction conditions', 'Drawing mechanisms with curved arrows', 'Predicting stereochemical outcomes'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
