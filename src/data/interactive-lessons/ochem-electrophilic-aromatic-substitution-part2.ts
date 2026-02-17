export const oChemEASPart2Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'elect2-intro',
      type: 'text' as const,
      content: `
# Halogenation & Nitration

**Part 2 of 7 — Halogenation & Nitration**

### 1. Halogenation

Ar-H + X₂/FeX₃ → Ar-X + HX

### 2. Nitration

Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O

### 3. Sulfonation

Ar-H + SO₃/H₂SO₄ → Ar-SO₃H

### 4. Lewis acid catalysts generate strong electrophiles

Lewis acid catalysts generate strong electrophiles
      `
    },
    {
      id: 'elect2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Halogenation?',
            options: [
              'Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O',
              'Ar-H + X₂/FeX₃ → Ar-X + HX',
              'Lewis acid catalysts generate strong electrophiles',
              'Ar-H + SO₃/H₂SO₄ → Ar-SO₃H'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Halogenation: Ar-H + X₂/FeX₃ → Ar-X + HX. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Sulfonation?',
            options: [
              'Lewis acid catalysts generate strong electrophiles',
              'Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O',
              'Ar-H + SO₃/H₂SO₄ → Ar-SO₃H',
              'Ar-H + X₂/FeX₃ → Ar-X + HX'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Sulfonation: Ar-H + SO₃/H₂SO₄ → Ar-SO₃H. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'elect2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Halogenation**: Ar-H + X₂/FeX₃ → Ar-X + HX
- **Nitration**: Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O
- **Sulfonation**: Ar-H + SO₃/H₂SO₄ → Ar-SO₃H
- **Lewis acid catalysts generate strong electrophiles**
      `
    },
    {
      id: 'elect2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to halogenation & nitration?',
            options: [
              'Lewis acid catalysts generate strong electrophiles',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Lewis acid catalysts generate strong electrophiles'
          }
        ]
      }
    },
    {
      id: 'elect2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Halogenation',
            options: ['Lewis acid catalysts generate strong electrophiles', 'Ar-H + X₂/FeX₃ → Ar-X + HX', 'Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O', 'Ar-H + SO₃/H₂SO₄ → Ar-SO₃H']
          },
          {
            label: 'Nitration',
            options: ['Lewis acid catalysts generate strong electrophiles', 'Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O', 'Ar-H + X₂/FeX₃ → Ar-X + HX', 'Ar-H + SO₃/H₂SO₄ → Ar-SO₃H']
          },
          {
            label: 'Sulfonation',
            options: ['Ar-H + X₂/FeX₃ → Ar-X + HX', 'Ar-H + SO₃/H₂SO₄ → Ar-SO₃H', 'Lewis acid catalysts generate strong electrophiles', 'Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O']
          }
        ],
        correctAnswers: ['Ar-H + X₂/FeX₃ → Ar-X + HX', 'Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O', 'Ar-H + SO₃/H₂SO₄ → Ar-SO₃H'],
        hint1: 'Think about what each concept specifically describes in Halogenation & Nitration.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Halogenation & Nitration describes a specific idea. Halogenation: Ar-H + X₂/FeX₃ → Ar-X + HX. Nitration: Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O. Sulfonation: Ar-H + SO₃/H₂SO₄ → Ar-SO₃H.'
      }
    }
  ]
}
