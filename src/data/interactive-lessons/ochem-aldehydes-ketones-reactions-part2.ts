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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Nucleophilic addition mechanism?',
            options: [
              'Ph₃P=CHR → alkene',
              'Nu⁻ attacks C=O → alkoxide → protonate',
              'NaBH₄ (mild) or LiAlH₄ (strong)',
              'NaCN → cyanohydrin'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Nucleophilic addition mechanism: Nu⁻ attacks C=O → alkoxide → protonate. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cyanide addition:',
            options: [
              'Nu⁻ attacks C=O → alkoxide → protonate',
              'Ph₃P=CHR → alkene',
              'NaCN → cyanohydrin',
              'NaBH₄ (mild) or LiAlH₄ (strong)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Cyanide addition: NaCN → cyanohydrin. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleophilic addition mechanism',
            options: ['Ph₃P=CHR → alkene', 'NaBH₄ (mild) or LiAlH₄ (strong)', 'Nu⁻ attacks C=O → alkoxide → protonate', 'NaCN → cyanohydrin']
          },
          {
            label: 'Hydride reduction',
            options: ['Nu⁻ attacks C=O → alkoxide → protonate', 'Ph₃P=CHR → alkene', 'NaCN → cyanohydrin', 'NaBH₄ (mild) or LiAlH₄ (strong)']
          },
          {
            label: 'Cyanide addition',
            options: ['Ph₃P=CHR → alkene', 'NaCN → cyanohydrin', 'NaBH₄ (mild) or LiAlH₄ (strong)', 'Nu⁻ attacks C=O → alkoxide → protonate']
          }
        ],
        correctAnswers: ['Nu⁻ attacks C=O → alkoxide → protonate', 'NaBH₄ (mild) or LiAlH₄ (strong)', 'NaCN → cyanohydrin'],
        hint1: 'Think about what each concept specifically describes in Nucleophilic Addition.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nucleophilic Addition describes a specific idea. Nucleophilic addition mechanism: Nu⁻ attacks C=O → alkoxide → protonate. Hydride reduction: NaBH₄ (mild) or LiAlH₄ (strong). Cyanide addition: NaCN → cyanohydrin.'
      }
    }
  ]
}
