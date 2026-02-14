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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of brønsted-lowry acids & bases?',
            options: [
              'Brønsted acid',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Brønsted acid: proton (H⁺) donor'
          },
          {
            question: 'In the context of brønsted-lowry acids & bases, which is accurate?',
            options: [
              'Conjugate acid-base pairs differ by one proton',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Conjugate acid-base pairs differ by one proton'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Brønsted acid',
            options: ['proton (H⁺) donor', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Brønsted base',
            options: ['proton acceptor', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Conjugate acid-base pairs differ by one proton',
            options: ['Conjugate acid-base pairs differ by one proton', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['proton (H⁺) donor', 'proton acceptor', 'Conjugate acid-base pairs differ by one proton'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Brønsted-Lowry Acids & Bases.'
      }
    }
  ]
}
