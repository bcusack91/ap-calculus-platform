export const oChemStereoPart7Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'stere7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Stereochemistry determines biological activity

Stereochemistry determines biological activity

### 2. Enantiomers can have very different biological effects

Enantiomers can have very different biological effects

### 3. Understanding 3D structure is crucial in drug design

Understanding 3D structure is crucial in drug design

### 4. Review

chirality, configuration, and stereoisomers
      `
    },
    {
      id: 'stere7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Stereochemistry determines biological activity',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Stereochemistry determines biological activity'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Understanding 3D structure is crucial in drug design',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Understanding 3D structure is crucial in drug design'
          }
        ]
      }
    },
    {
      id: 'stere7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Stereochemistry determines biological activity**
- **Enantiomers can have very different biological effects**
- **Understanding 3D structure is crucial in drug design**
- **Review**: chirality, configuration, and stereoisomers
      `
    },
    {
      id: 'stere7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'chirality, configuration, and stereoisomers',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: chirality, configuration, and stereoisomers'
          }
        ]
      }
    },
    {
      id: 'stere7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stereochemistry determines biological activity',
            options: ['Stereochemistry determines biological activity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Enantiomers can have very different biological effects',
            options: ['Enantiomers can have very different biological eff', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Understanding 3D structure is crucial in drug design',
            options: ['Understanding 3D structure is crucial in drug desi', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Stereochemistry determines biological activity', 'Enantiomers can have very different biological eff', 'Understanding 3D structure is crucial in drug desi'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
