export const oChemAldehydesKetonesPart2Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh2-intro',
      type: 'text' as const,
      content: `
# Nucleophilic Addition

**Part 2 of 7 — Nucleophilic Addition**

### 1. Nucleophilic addition mechanism

Nu⁻ attacks C=O → alkoxide → protonate

### 2. Hydride reduction

NaBH₄ (mild) or LiAlH₄ (strong)

### 3. Cyanide addition

NaCN → cyanohydrin

### 4. Wittig reaction

Ph₃P=CHR → alkene
      `
    },
    {
      id: 'aldeh2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nucleophilic addition?',
            options: [
              'Nucleophilic addition mechanism',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Nucleophilic addition mechanism: Nu⁻ attacks C=O → alkoxide → protonate'
          },
          {
            question: 'In the context of nucleophilic addition, which is accurate?',
            options: [
              'NaCN → cyanohydrin',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cyanide addition: NaCN → cyanohydrin'
          }
        ]
      }
    },
    {
      id: 'aldeh2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Nucleophilic addition mechanism**: Nu⁻ attacks C=O → alkoxide → protonate
- **Hydride reduction**: NaBH₄ (mild) or LiAlH₄ (strong)
- **Cyanide addition**: NaCN → cyanohydrin
- **Wittig reaction**: Ph₃P=CHR → alkene
      `
    },
    {
      id: 'aldeh2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nucleophilic addition?',
            options: [
              'Ph₃P=CHR → alkene',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Wittig reaction: Ph₃P=CHR → alkene'
          }
        ]
      }
    },
    {
      id: 'aldeh2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleophilic addition mechanism',
            options: ['Nu⁻ attacks C=O → alkoxide → protonate', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hydride reduction',
            options: ['NaBH₄ (mild) or LiAlH₄ (strong)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Cyanide addition',
            options: ['NaCN → cyanohydrin', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Nu⁻ attacks C=O → alkoxide → protonate', 'NaBH₄ (mild) or LiAlH₄ (strong)', 'NaCN → cyanohydrin'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nucleophilic Addition.'
      }
    }
  ]
}
