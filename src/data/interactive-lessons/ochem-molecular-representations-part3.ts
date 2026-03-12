export const oChemMolRepPart3Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec3-intro',
      type: 'text' as const,
      content: `
# Constitutional Isomers

**Part 3 of 7 — Constitutional Isomers**

### 1. Constitutional (structural) isomers

same formula, different connectivity

### 2. Example

C₄H₁₀ → butane and isobutane

### 3. More carbons → more possible isomers

More carbons → more possible isomers

### 4. Isomers have different physical and chemical properties

Isomers have different physical and chemical properties
      `
    },
    {
      id: 'molec3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Constitutional (structural) isomers?',
            options: [
              'same formula, different connectivity',
              'C₄H₁₀ → butane and isobutane',
              'Isomers have different physical and chemical properties',
              'More carbons → more possible isomers'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Constitutional (structural) isomers: same formula, different connectivity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about More carbons → more possible isomers?',
            options: [
              'same formula, different connectivity',
              'C₄H₁₀ → butane and isobutane',
              'Isomers have different physical and chemical properties',
              'More carbons → more possible isomers'
            ],
            correctAnswer: 3,
            explanation: 'Correct — More carbons → more possible isomers. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'molec3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Constitutional (structural) isomers**: same formula, different connectivity
- **Example**: C₄H₁₀ → butane and isobutane
- **More carbons → more possible isomers**
- **Isomers have different physical and chemical properties**
      `
    },
    {
      id: 'molec3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to constitutional isomers?',
            options: [
              'Isomers have different physical and chemical properties',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Isomers have different physical and chemical properties'
          }
        ]
      }
    },
    {
      id: 'molec3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Constitutional (structural) isomers',
            options: ['Isomers have different physical and chemical properties', 'C₄H₁₀ → butane and isobutane', 'same formula, different connectivity', 'More carbons → more possible isomers']
          },
          {
            label: 'Example',
            options: ['C₄H₁₀ → butane and isobutane', 'More carbons → more possible isomers', 'same formula, different connectivity', 'Isomers have different physical and chemical properties']
          }
        ],
        correctAnswers: ['same formula, different connectivity', 'C₄H₁₀ → butane and isobutane'],
        hint1: 'Think about what each concept specifically describes in Constitutional Isomers.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Constitutional Isomers describes a specific idea. Constitutional (structural) isomers: same formula, different connectivity. Example: C₄H₁₀ → butane and isobutane.'
      }
    }
  ]
}
