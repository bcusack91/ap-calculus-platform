export const oChemConjugatedPart1Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'conju1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Conjugated Systems Dienes

**Part 1 of 7 — Conjugation & Stability**

### 1. Conjugated dienes

alternating single and double bonds

### 2. Conjugation stabilizes molecules through delocalization

Conjugation stabilizes molecules through delocalization

### 3. s-cis and s-trans conformations

s-cis and s-trans conformations

### 4. Conjugated dienes are more stable than isolated dienes

Conjugated dienes are more stable than isolated dienes
      `
    },
    {
      id: 'conju1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Conjugated dienes?',
            options: [
              'alternating single and double bonds',
              'Conjugation stabilizes molecules through delocalization',
              's-cis and s-trans conformations',
              'Conjugated dienes are more stable than isolated dienes'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Conjugated dienes: alternating single and double bonds. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ️ Conjugated Systems Dienes, which explains s-cis and s-trans conformations?',
            options: [
              'Conjugated dienes are more stable than isolated dienes',
              's-cis and s-trans conformations',
              'alternating single and double bonds',
              'Conjugation stabilizes molecules through delocalization'
            ],
            correctAnswer: 1,
            explanation: 'Correct — s-cis and s-trans conformations. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conju1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Conjugated dienes**: alternating single and double bonds
- **Conjugation stabilizes molecules through delocalization**
- **s-cis and s-trans conformations**
- **Conjugated dienes are more stable than isolated dienes**
      `
    },
    {
      id: 'conju1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to conjugation & stability?',
            options: [
              'Conjugated dienes are more stable than isolated dienes',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Conjugated dienes are more stable than isolated dienes'
          }
        ]
      }
    },
    {
      id: 'conju1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conjugated dienes',
            options: ['alternating single and double bonds', 's-cis and s-trans conformations', 'Conjugated dienes are more stable than isolated dienes', 'Conjugation stabilizes molecules through delocalization']
          },
          {
            label: 'Conjugation stabilizes molecules…',
            options: ['s-cis and s-trans conformations', 'Conjugation stabilizes molecules through delocalization', 'Conjugated dienes are more stable than isolated dienes', 'alternating single and double bonds']
          },
          {
            label: 's-cis and s-trans conformations',
            options: ['Conjugation stabilizes molecules through delocalization', 's-cis and s-trans conformations', 'Conjugated dienes are more stable than isolated dienes', 'alternating single and double bonds']
          }
        ],
        correctAnswers: ['alternating single and double bonds', 'Conjugation stabilizes molecules through delocalization', 's-cis and s-trans conformations'],
        hint1: 'Think about what each concept specifically describes in ️ Conjugated Systems Dienes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Conjugated Systems Dienes describes a specific idea. Conjugated dienes: alternating single and double bonds. Conjugation stabilizes molecules through delocalization. s-cis and s-trans conformations.'
      }
    }
  ]
}
