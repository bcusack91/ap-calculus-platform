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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Activating groups?',
            options: [
              '-OH, -NH₂, -OR, -R, halogens',
              '-NO₂, -CN, -COOH, -COR, -SO₃H',
              'EWG (withdraw electrons, slow down EAS)',
              'EDG (donate electrons, speed up EAS)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Activating groups: EDG (donate electrons, speed up EAS). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes ortho/para directors:',
            options: [
              'EWG (withdraw electrons, slow down EAS)',
              '-OH, -NH₂, -OR, -R, halogens',
              '-NO₂, -CN, -COOH, -COR, -SO₃H',
              'EDG (donate electrons, speed up EAS)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ortho/para directors: -OH, -NH₂, -OR, -R, halogens. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Activating groups',
            options: ['EDG (donate electrons, speed up EAS)', 'EWG (withdraw electrons, slow down EAS)', '-NO₂, -CN, -COOH, -COR, -SO₃H', '-OH, -NH₂, -OR, -R, halogens']
          },
          {
            label: 'Deactivating groups',
            options: ['-NO₂, -CN, -COOH, -COR, -SO₃H', '-OH, -NH₂, -OR, -R, halogens', 'EWG (withdraw electrons, slow down EAS)', 'EDG (donate electrons, speed up EAS)']
          },
          {
            label: 'ortho/para directors',
            options: ['EDG (donate electrons, speed up EAS)', '-NO₂, -CN, -COOH, -COR, -SO₃H', 'EWG (withdraw electrons, slow down EAS)', '-OH, -NH₂, -OR, -R, halogens']
          }
        ],
        correctAnswers: ['EDG (donate electrons, speed up EAS)', 'EWG (withdraw electrons, slow down EAS)', '-OH, -NH₂, -OR, -R, halogens'],
        hint1: 'Think about what each concept specifically describes in Substituent Effects.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Substituent Effects describes a specific idea. Activating groups: EDG (donate electrons, speed up EAS). Deactivating groups: EWG (withdraw electrons, slow down EAS). ortho/para directors: -OH, -NH₂, -OR, -R, halogens.'
      }
    }
  ]
}
