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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of halogenation & nitration?',
            options: [
              'Halogenation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Halogenation: Ar-H + X₂/FeX₃ → Ar-X + HX'
          },
          {
            question: 'In the context of halogenation & nitration, which is accurate?',
            options: [
              'Ar-H + SO₃/H₂SO₄ → Ar-SO₃H',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sulfonation: Ar-H + SO₃/H₂SO₄ → Ar-SO₃H'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Halogenation',
            options: ['Ar-H + X₂/FeX₃ → Ar-X + HX', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Nitration',
            options: ['Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Sulfonation',
            options: ['Ar-H + SO₃/H₂SO₄ → Ar-SO₃H', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Ar-H + X₂/FeX₃ → Ar-X + HX', 'Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O', 'Ar-H + SO₃/H₂SO₄ → Ar-SO₃H'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Halogenation & Nitration.'
      }
    }
  ]
}
