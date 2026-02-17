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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Chiral" refer to in this topic?',
            options: [
              'Plane of symmetry → achiral molecule',
              'carbon with 4 different substituents',
              'superimposable on its mirror image',
              'non-superimposable on its mirror image'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Chiral: non-superimposable on its mirror image. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Achiral:',
            options: [
              'non-superimposable on its mirror image',
              'superimposable on its mirror image',
              'carbon with 4 different substituents',
              'Plane of symmetry → achiral molecule'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Achiral: superimposable on its mirror image. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chiral',
            options: ['Plane of symmetry → achiral molecule', 'non-superimposable on its mirror image', 'superimposable on its mirror image', 'carbon with 4 different substituents']
          },
          {
            label: 'Stereocenter',
            options: ['carbon with 4 different substituents', 'Plane of symmetry → achiral molecule', 'superimposable on its mirror image', 'non-superimposable on its mirror image']
          },
          {
            label: 'Achiral',
            options: ['non-superimposable on its mirror image', 'carbon with 4 different substituents', 'superimposable on its mirror image', 'Plane of symmetry → achiral molecule']
          }
        ],
        correctAnswers: ['non-superimposable on its mirror image', 'carbon with 4 different substituents', 'superimposable on its mirror image'],
        hint1: 'Think about what each concept specifically describes in ️ Stereochemistry Chirality.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Stereochemistry Chirality describes a specific idea. Chiral: non-superimposable on its mirror image. Stereocenter: carbon with 4 different substituents. Achiral: superimposable on its mirror image.'
      }
    }
  ]
}
