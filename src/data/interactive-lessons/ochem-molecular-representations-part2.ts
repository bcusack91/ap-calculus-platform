export const oChemMolRepPart2Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec2-intro',
      type: 'text' as const,
      content: `
# Functional Groups

**Part 2 of 7 — Functional Groups**

### 1. Functional group determines reactivity

Functional group determines reactivity

### 2. Hydroxyl (-OH)

alcohols

### 3. Carbonyl (C=O)

aldehydes, ketones, carboxylic acids

### 4. Amino (-NH₂)

amines; Halide (-X): alkyl halides
      `
    },
    {
      id: 'molec2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of functional groups?',
            options: [
              'Functional group determines reactivity',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Functional group determines reactivity'
          },
          {
            question: 'In the context of functional groups, which is accurate?',
            options: [
              'aldehydes, ketones, carboxylic acids',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Carbonyl (C=O): aldehydes, ketones, carboxylic acids'
          }
        ]
      }
    },
    {
      id: 'molec2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Functional group determines reactivity**
- **Hydroxyl (-OH)**: alcohols
- **Carbonyl (C=O)**: aldehydes, ketones, carboxylic acids
- **Amino (-NH₂)**: amines; Halide (-X): alkyl halides
      `
    },
    {
      id: 'molec2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to functional groups?',
            options: [
              'amines; Halide (-X): alkyl halides',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Amino (-NH₂): amines; Halide (-X): alkyl halides'
          }
        ]
      }
    },
    {
      id: 'molec2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Functional group determines reactivity',
            options: ['Functional group determines reactivity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hydroxyl (-OH)',
            options: ['alcohols', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Carbonyl (C=O)',
            options: ['aldehydes, ketones, carboxylic acids', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Functional group determines reactivity', 'alcohols', 'aldehydes, ketones, carboxylic acids'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Functional Groups.'
      }
    }
  ]
}
