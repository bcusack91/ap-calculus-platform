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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ether reactions?',
            options: [
              'Acid-catalyzed cleavage',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Acid-catalyzed cleavage: HI or HBr cleaves ethers'
          },
          {
            question: 'In the context of ether reactions, which is accurate?',
            options: [
              'nucleophilic attack at less substituted carbon (base) or more substituted (acid)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Epoxide ring-opening: nucleophilic attack at less substituted carbon (base) or more substituted (acid)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acid-catalyzed cleavage',
            options: ['HI or HBr cleaves ethers', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Epoxides',
            options: ['strained three-membered ring ethers', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Epoxide ring-opening',
            options: ['nucleophilic attack at less substituted carbon (ba', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['HI or HBr cleaves ethers', 'strained three-membered ring ethers', 'nucleophilic attack at less substituted carbon (ba'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Ether Reactions.'
      }
    }
  ]
}
