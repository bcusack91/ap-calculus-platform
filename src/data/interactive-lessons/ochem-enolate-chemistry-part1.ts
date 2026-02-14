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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of keto-enol tautomerism?',
            options: [
              'Tautomers',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Tautomers: keto and enol forms in equilibrium'
          },
          {
            question: 'In the context of keto-enol tautomerism, which is accurate?',
            options: [
              'Enolization catalyzed by acid or base',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Enolization catalyzed by acid or base'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tautomers',
            options: ['keto and enol forms in equilibrium', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Keto form is usually more stable',
            options: ['Keto form is usually more stable', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Enolization catalyzed by acid or base',
            options: ['Enolization catalyzed by acid or base', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['keto and enol forms in equilibrium', 'Keto form is usually more stable', 'Enolization catalyzed by acid or base'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Keto-Enol Tautomerism.'
      }
    }
  ]
}
