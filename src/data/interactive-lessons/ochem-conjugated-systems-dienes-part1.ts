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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of conjugation & stability?',
            options: [
              'Conjugated dienes',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Conjugated dienes: alternating single and double bonds'
          },
          {
            question: 'In the context of conjugation & stability, which is accurate?',
            options: [
              's-cis and s-trans conformations',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 's-cis and s-trans conformations'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conjugated dienes',
            options: ['alternating single and double bonds', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Conjugation stabilizes molecules through delocalization',
            options: ['Conjugation stabilizes molecules through delocaliz', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 's-cis and s-trans conformations',
            options: ['s-cis and s-trans conformations', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['alternating single and double bonds', 'Conjugation stabilizes molecules through delocaliz', 's-cis and s-trans conformations'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Conjugation & Stability.'
      }
    }
  ]
}
