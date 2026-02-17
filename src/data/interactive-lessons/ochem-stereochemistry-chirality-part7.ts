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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Stereochemistry determines biological…" refer to in this topic?',
            options: [
              'Stereochemistry determines biological activity',
              'Enantiomers can have very different biological effects',
              'Understanding 3D structure is crucial in drug design',
              'chirality, configuration, and stereoisomers'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Stereochemistry determines biological activity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Understanding 3D structure is crucial…?',
            options: [
              'chirality, configuration, and stereoisomers',
              'Enantiomers can have very different biological effects',
              'Stereochemistry determines biological activity',
              'Understanding 3D structure is crucial in drug design'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Understanding 3D structure is crucial in drug design. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stereochemistry determines biological…',
            options: ['Understanding 3D structure is crucial in drug design', 'Enantiomers can have very different biological effects', 'Stereochemistry determines biological activity', 'chirality, configuration, and stereoisomers']
          },
          {
            label: 'Enantiomers can have very different…',
            options: ['Enantiomers can have very different biological effects', 'chirality, configuration, and stereoisomers', 'Stereochemistry determines biological activity', 'Understanding 3D structure is crucial in drug design']
          },
          {
            label: 'Understanding 3D structure is crucial…',
            options: ['Understanding 3D structure is crucial in drug design', 'Stereochemistry determines biological activity', 'Enantiomers can have very different biological effects', 'chirality, configuration, and stereoisomers']
          }
        ],
        correctAnswers: ['Stereochemistry determines biological activity', 'Enantiomers can have very different biological effects', 'Understanding 3D structure is crucial in drug design'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Stereochemistry determines biological activity. Enantiomers can have very different biological effects. Understanding 3D structure is crucial in drug design.'
      }
    }
  ]
}
