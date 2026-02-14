export const bioBiotechPart4Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot4-intro-p4',
      type: 'text' as const,
      content: `
# ## CRISPR-Cas9

**Part 4 of 7 — CRISPR-Cas9**

1. Gene editing tool from bacterial immune system
2. Guide RNA directs Cas9 to target DNA sequence
3. Cas9 cuts both DNA strands at target site
4. Can knock out genes, insert new sequences, or make precise edits
      `
    },
    {
      id: 'biot4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes gene editing tool from bacterial immune system?',
            options: [
              'Gene editing tool from bacterial immune system',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Gene editing tool from bacterial immune system'
          },
          {
            question: 'In the context of crispr-cas9, which statement is accurate?',
            options: [
              'Cas9 cuts both DNA strands at target site',
              'metsys enummi lairetcab morf loot gnitide eneG',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Cas9 cuts both DNA strands at target site'
          }
        ]
      }
    },
    {
      id: 'biot4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Gene editing tool from bacterial immune system**
- **Guide RNA directs Cas9 to target DNA sequence**
- **Cas9 cuts both DNA strands at target site**
- **Can knock out genes, insert new sequences, or make precise edits**
      `
    },
    {
      id: 'biot4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to crispr-cas9?',
            options: [
              'Can knock out genes, insert new sequences, or make precise edits',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Can knock out genes, insert new sequences, or make precise edits'
          }
        ]
      }
    },
    {
      id: 'biot4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Gene editing tool from bacterial immune system is important in crispr-cas9 because',
            options: ['Gene editing tool from bacterial immune system', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Guide RNA directs Cas9 to target DNA sequence is important in crispr-cas9 because',
            options: ['Guide RNA directs Cas9 to target DNA sequence', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Cas9 cuts both DNA strands at target site is important in crispr-cas9 because',
            options: ['Cas9 cuts both DNA strands at target site', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Gene editing tool from bacterial immune system', 'Guide RNA directs Cas9 to target DNA sequence', 'Cas9 cuts both DNA strands at target site'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding CRISPR-Cas9.'
      }
    }
  ]
}
