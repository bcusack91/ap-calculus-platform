export const oChemAlcoholsPart5Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh5-intro',
      type: 'text' as const,
      content: `
# Ether Reactions

**Part 5 of 7 — Ether Reactions**

### 1. Acid-catalyzed cleavage

HI or HBr cleaves ethers

### 2. Epoxides

strained three-membered ring ethers

### 3. Epoxide ring-opening

nucleophilic attack at less substituted carbon (base) or more substituted (acid)

### 4. Epoxides are much more reactive than simple ethers

Epoxides are much more reactive than simple ethers
      `
    },
    {
      id: 'alcoh5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Acid-catalyzed cleavage?',
            options: [
              'strained three-membered ring ethers',
              'Epoxides are much more reactive than simple ethers',
              'HI or HBr cleaves ethers',
              'nucleophilic attack at less substituted carbon (base) or more substituted (acid)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Acid-catalyzed cleavage: HI or HBr cleaves ethers. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Ether Reactions, which explains Epoxide ring-opening?',
            options: [
              'strained three-membered ring ethers',
              'HI or HBr cleaves ethers',
              'nucleophilic attack at less substituted carbon (base) or more substituted (acid)',
              'Epoxides are much more reactive than simple ethers'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Epoxide ring-opening: nucleophilic attack at less substituted carbon (base) or more substituted (acid). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alcoh5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Acid-catalyzed cleavage**: HI or HBr cleaves ethers
- **Epoxides**: strained three-membered ring ethers
- **Epoxide ring-opening**: nucleophilic attack at less substituted carbon (base) or more substituted (acid)
- **Epoxides are much more reactive than simple ethers**
      `
    },
    {
      id: 'alcoh5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ether reactions?',
            options: [
              'Epoxides are much more reactive than simple ethers',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Epoxides are much more reactive than simple ethers'
          }
        ]
      }
    },
    {
      id: 'alcoh5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acid-catalyzed cleavage',
            options: ['Epoxides are much more reactive than simple ethers', 'strained three-membered ring ethers', 'HI or HBr cleaves ethers', 'nucleophilic attack at less substituted carbon (base) or more substituted (acid)']
          },
          {
            label: 'Epoxides',
            options: ['HI or HBr cleaves ethers', 'Epoxides are much more reactive than simple ethers', 'strained three-membered ring ethers', 'nucleophilic attack at less substituted carbon (base) or more substituted (acid)']
          },
          {
            label: 'Epoxide ring-opening',
            options: ['strained three-membered ring ethers', 'HI or HBr cleaves ethers', 'Epoxides are much more reactive than simple ethers', 'nucleophilic attack at less substituted carbon (base) or more substituted (acid)']
          }
        ],
        correctAnswers: ['HI or HBr cleaves ethers', 'strained three-membered ring ethers', 'nucleophilic attack at less substituted carbon (base) or more substituted (acid)'],
        hint1: 'Think about what each concept specifically describes in Ether Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ether Reactions describes a specific idea. Acid-catalyzed cleavage: HI or HBr cleaves ethers. Epoxides: strained three-membered ring ethers. Epoxide ring-opening: nucleophilic attack at less substituted carbon (base) or more substituted (acid).'
      }
    }
  ]
}
