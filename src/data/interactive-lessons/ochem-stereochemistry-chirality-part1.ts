export const oChemStereoPart1Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'stere1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Stereochemistry Chirality

**Part 1 of 7 — Chirality & Stereocenters**

### 1. Chiral

non-superimposable on its mirror image

### 2. Stereocenter

carbon with 4 different substituents

### 3. Achiral

superimposable on its mirror image

### 4. Plane of symmetry → achiral molecule

Plane of symmetry → achiral molecule
      `
    },
    {
      id: 'stere1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of chirality & stereocenters?',
            options: [
              'Chiral',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Chiral: non-superimposable on its mirror image'
          },
          {
            question: 'In the context of chirality & stereocenters, which is accurate?',
            options: [
              'superimposable on its mirror image',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Achiral: superimposable on its mirror image'
          }
        ]
      }
    },
    {
      id: 'stere1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Chiral**: non-superimposable on its mirror image
- **Stereocenter**: carbon with 4 different substituents
- **Achiral**: superimposable on its mirror image
- **Plane of symmetry → achiral molecule**
      `
    },
    {
      id: 'stere1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to chirality & stereocenters?',
            options: [
              'Plane of symmetry → achiral molecule',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Plane of symmetry → achiral molecule'
          }
        ]
      }
    },
    {
      id: 'stere1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chiral',
            options: ['non-superimposable on its mirror image', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Stereocenter',
            options: ['carbon with 4 different substituents', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Achiral',
            options: ['superimposable on its mirror image', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['non-superimposable on its mirror image', 'carbon with 4 different substituents', 'superimposable on its mirror image'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Chirality & Stereocenters.'
      }
    }
  ]
}
