export const oChemElimPart4Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi4-intro',
      type: 'text' as const,
      content: `
# Zaitsev vs Hofmann

**Part 4 of 7 — Zaitsev vs Hofmann**

### 1. Zaitsev's rule

more substituted alkene is major product (more stable)

### 2. Hofmann product

less substituted alkene (with bulky base)

### 3. E2 with small base → Zaitsev product

E2 with small base → Zaitsev product

### 4. E2 with bulky base (t-BuOK) → Hofmann product

E2 with bulky base (t-BuOK) → Hofmann product
      `
    },
    {
      id: 'elimi4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of zaitsev vs hofmann?',
            options: [
              'Zaitsev\'s rule',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Zaitsev\'s rule: more substituted alkene is major product (more stable)'
          },
          {
            question: 'In the context of zaitsev vs hofmann, which is accurate?',
            options: [
              'E2 with small base → Zaitsev product',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'E2 with small base → Zaitsev product'
          }
        ]
      }
    },
    {
      id: 'elimi4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Zaitsev's rule**: more substituted alkene is major product (more stable)
- **Hofmann product**: less substituted alkene (with bulky base)
- **E2 with small base → Zaitsev product**
- **E2 with bulky base (t-BuOK) → Hofmann product**
      `
    },
    {
      id: 'elimi4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to zaitsev vs hofmann?',
            options: [
              'E2 with bulky base (t-BuOK) → Hofmann product',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'E2 with bulky base (t-BuOK) → Hofmann product'
          }
        ]
      }
    },
    {
      id: 'elimi4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Zaitsev\'s rule',
            options: ['more substituted alkene is major product (more sta', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hofmann product',
            options: ['less substituted alkene (with bulky base)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'E2 with small base → Zaitsev product',
            options: ['E2 with small base → Zaitsev product', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['more substituted alkene is major product (more sta', 'less substituted alkene (with bulky base)', 'E2 with small base → Zaitsev product'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Zaitsev vs Hofmann.'
      }
    }
  ]
}
