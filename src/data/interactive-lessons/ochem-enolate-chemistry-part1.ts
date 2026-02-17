export const oChemEnolatePart1Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'enola1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Enolate Chemistry

**Part 1 of 7 — Keto-Enol Tautomerism**

### 1. Tautomers

keto and enol forms in equilibrium

### 2. Keto form is usually more stable

Keto form is usually more stable

### 3. Enolization catalyzed by acid or base

Enolization catalyzed by acid or base

### 4. α-hydrogens

H on carbon adjacent to carbonyl
      `
    },
    {
      id: 'enola1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Tautomers?',
            options: [
              'Enolization catalyzed by acid or base',
              'H on carbon adjacent to carbonyl',
              'keto and enol forms in equilibrium',
              'Keto form is usually more stable'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Tautomers: keto and enol forms in equilibrium. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Enolization catalyzed by acid or base:',
            options: [
              'Enolization catalyzed by acid or base',
              'Keto form is usually more stable',
              'H on carbon adjacent to carbonyl',
              'keto and enol forms in equilibrium'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Enolization catalyzed by acid or base. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'enola1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Tautomers**: keto and enol forms in equilibrium
- **Keto form is usually more stable**
- **Enolization catalyzed by acid or base**
- **α-hydrogens**: H on carbon adjacent to carbonyl
      `
    },
    {
      id: 'enola1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to keto-enol tautomerism?',
            options: [
              'H on carbon adjacent to carbonyl',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'α-hydrogens: H on carbon adjacent to carbonyl'
          }
        ]
      }
    },
    {
      id: 'enola1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tautomers',
            options: ['Enolization catalyzed by acid or base', 'Keto form is usually more stable', 'H on carbon adjacent to carbonyl', 'keto and enol forms in equilibrium']
          },
          {
            label: 'α-hydrogens',
            options: ['H on carbon adjacent to carbonyl', 'keto and enol forms in equilibrium', 'Enolization catalyzed by acid or base', 'Keto form is usually more stable']
          }
        ],
        correctAnswers: ['keto and enol forms in equilibrium', 'H on carbon adjacent to carbonyl'],
        hint1: 'Think about what each concept specifically describes in ️ Enolate Chemistry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Enolate Chemistry describes a specific idea. Tautomers: keto and enol forms in equilibrium. α-hydrogens: H on carbon adjacent to carbonyl.'
      }
    }
  ]
}
