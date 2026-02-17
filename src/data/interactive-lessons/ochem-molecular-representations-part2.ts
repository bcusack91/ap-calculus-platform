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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Functional group determines reactivity?',
            options: [
              'amines; Halide (-X): alkyl halides',
              'alcohols',
              'Functional group determines reactivity',
              'aldehydes, ketones, carboxylic acids'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Functional group determines reactivity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Carbonyl (C=O)?',
            options: [
              'alcohols',
              'Functional group determines reactivity',
              'amines; Halide (-X): alkyl halides',
              'aldehydes, ketones, carboxylic acids'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Carbonyl (C=O): aldehydes, ketones, carboxylic acids. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hydroxyl (-OH)',
            options: ['aldehydes, ketones, carboxylic acids', 'Functional group determines reactivity', 'amines; Halide (-X): alkyl halides', 'alcohols']
          },
          {
            label: 'Carbonyl (C=O)',
            options: ['amines; Halide (-X): alkyl halides', 'Functional group determines reactivity', 'aldehydes, ketones, carboxylic acids', 'alcohols']
          },
          {
            label: 'Amino (-NH₂)',
            options: ['amines; Halide (-X): alkyl halides', 'alcohols', 'Functional group determines reactivity', 'aldehydes, ketones, carboxylic acids']
          }
        ],
        correctAnswers: ['alcohols', 'aldehydes, ketones, carboxylic acids', 'amines; Halide (-X): alkyl halides'],
        hint1: 'Think about what each concept specifically describes in Functional Groups.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Functional Groups describes a specific idea. Hydroxyl (-OH): alcohols. Carbonyl (C=O): aldehydes, ketones, carboxylic acids. Amino (-NH₂): amines; Halide (-X): alkyl halides.'
      }
    }
  ]
}
