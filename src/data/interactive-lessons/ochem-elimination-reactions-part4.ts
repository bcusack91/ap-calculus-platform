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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Zaitsev\'s rule" refer to in this topic?',
            options: [
              'less substituted alkene (with bulky base)',
              'more substituted alkene is major product (more stable)',
              'E2 with small base → Zaitsev product',
              'E2 with bulky base (t-BuOK) → Hofmann product'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Zaitsev\'s rule: more substituted alkene is major product (more stable). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes E2 with small base → Zaitsev product:',
            options: [
              'more substituted alkene is major product (more stable)',
              'less substituted alkene (with bulky base)',
              'E2 with small base → Zaitsev product',
              'E2 with bulky base (t-BuOK) → Hofmann product'
            ],
            correctAnswer: 2,
            explanation: 'Correct — E2 with small base → Zaitsev product. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Zaitsev\'s rule',
            options: ['less substituted alkene (with bulky base)', 'E2 with bulky base (t-BuOK) → Hofmann product', 'E2 with small base → Zaitsev product', 'more substituted alkene is major product (more stable)']
          },
          {
            label: 'Hofmann product',
            options: ['E2 with bulky base (t-BuOK) → Hofmann product', 'E2 with small base → Zaitsev product', 'less substituted alkene (with bulky base)', 'more substituted alkene is major product (more stable)']
          }
        ],
        correctAnswers: ['more substituted alkene is major product (more stable)', 'less substituted alkene (with bulky base)'],
        hint1: 'Think about what each concept specifically describes in Zaitsev vs Hofmann.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Zaitsev vs Hofmann describes a specific idea. Zaitsev\'s rule: more substituted alkene is major product (more stable). Hofmann product: less substituted alkene (with bulky base).'
      }
    }
  ]
}
