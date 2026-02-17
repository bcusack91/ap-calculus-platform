export const oChemAcidsBasesPart1Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'acids1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Acids Bases Organic

**Part 1 of 7 — Brønsted-Lowry Acids & Bases**

### 1. Brønsted acid

proton (H⁺) donor

### 2. Brønsted base

proton acceptor

### 3. Conjugate acid-base pairs differ by one proton

Conjugate acid-base pairs differ by one proton

### 4. Stronger acid → weaker conjugate base

Stronger acid → weaker conjugate base
      `
    },
    {
      id: 'acids1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Brønsted acid" refer to in this topic?',
            options: [
              'proton (H⁺) donor',
              'proton acceptor',
              'Stronger acid → weaker conjugate base',
              'Conjugate acid-base pairs differ by one proton'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Brønsted acid: proton (H⁺) donor. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ️ Acids Bases Organic, which explains Conjugate acid-base pairs differ by one…?',
            options: [
              'Stronger acid → weaker conjugate base',
              'proton acceptor',
              'Conjugate acid-base pairs differ by one proton',
              'proton (H⁺) donor'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Conjugate acid-base pairs differ by one proton. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'acids1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Brønsted acid**: proton (H⁺) donor
- **Brønsted base**: proton acceptor
- **Conjugate acid-base pairs differ by one proton**
- **Stronger acid → weaker conjugate base**
      `
    },
    {
      id: 'acids1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to brønsted-lowry acids & bases?',
            options: [
              'Stronger acid → weaker conjugate base',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Stronger acid → weaker conjugate base'
          }
        ]
      }
    },
    {
      id: 'acids1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Brønsted acid',
            options: ['proton acceptor', 'proton (H⁺) donor', 'Stronger acid → weaker conjugate base', 'Conjugate acid-base pairs differ by one proton']
          },
          {
            label: 'Brønsted base',
            options: ['proton (H⁺) donor', 'Stronger acid → weaker conjugate base', 'proton acceptor', 'Conjugate acid-base pairs differ by one proton']
          }
        ],
        correctAnswers: ['proton (H⁺) donor', 'proton acceptor'],
        hint1: 'Think about what each concept specifically describes in ️ Acids Bases Organic.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Acids Bases Organic describes a specific idea. Brønsted acid: proton (H⁺) donor. Brønsted base: proton acceptor.'
      }
    }
  ]
}
