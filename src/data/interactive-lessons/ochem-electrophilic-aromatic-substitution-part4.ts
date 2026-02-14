export const oChemEASPart4Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'elect4-intro',
      type: 'text' as const,
      content: `
# Substituent Effects

**Part 4 of 7 — Substituent Effects**

### 1. Activating groups

EDG (donate electrons, speed up EAS)

### 2. Deactivating groups

EWG (withdraw electrons, slow down EAS)

### 3. ortho/para directors

-OH, -NH₂, -OR, -R, halogens

### 4. meta directors

-NO₂, -CN, -COOH, -COR, -SO₃H
      `
    },
    {
      id: 'elect4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of substituent effects?',
            options: [
              'Activating groups',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Activating groups: EDG (donate electrons, speed up EAS)'
          },
          {
            question: 'In the context of substituent effects, which is accurate?',
            options: [
              '-OH, -NH₂, -OR, -R, halogens',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'ortho/para directors: -OH, -NH₂, -OR, -R, halogens'
          }
        ]
      }
    },
    {
      id: 'elect4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Activating groups**: EDG (donate electrons, speed up EAS)
- **Deactivating groups**: EWG (withdraw electrons, slow down EAS)
- **ortho/para directors**: -OH, -NH₂, -OR, -R, halogens
- **meta directors**: -NO₂, -CN, -COOH, -COR, -SO₃H
      `
    },
    {
      id: 'elect4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to substituent effects?',
            options: [
              '-NO₂, -CN, -COOH, -COR, -SO₃H',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'meta directors: -NO₂, -CN, -COOH, -COR, -SO₃H'
          }
        ]
      }
    },
    {
      id: 'elect4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Activating groups',
            options: ['EDG (donate electrons, speed up EAS)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Deactivating groups',
            options: ['EWG (withdraw electrons, slow down EAS)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'ortho/para directors',
            options: ['-OH, -NH₂, -OR, -R, halogens', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['EDG (donate electrons, speed up EAS)', 'EWG (withdraw electrons, slow down EAS)', '-OH, -NH₂, -OR, -R, halogens'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Substituent Effects.'
      }
    }
  ]
}
