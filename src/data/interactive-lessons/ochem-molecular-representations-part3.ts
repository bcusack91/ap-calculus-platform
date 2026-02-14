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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of constitutional isomers?',
            options: [
              'Constitutional (structural) isomers',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Constitutional (structural) isomers: same formula, different connectivity'
          },
          {
            question: 'In the context of constitutional isomers, which is accurate?',
            options: [
              'More carbons → more possible isomers',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'More carbons → more possible isomers'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Constitutional (structural) isomers',
            options: ['same formula, different connectivity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Example',
            options: ['C₄H₁₀ → butane and isobutane', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'More carbons → more possible isomers',
            options: ['More carbons → more possible isomers', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['same formula, different connectivity', 'C₄H₁₀ → butane and isobutane', 'More carbons → more possible isomers'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Constitutional Isomers.'
      }
    }
  ]
}
