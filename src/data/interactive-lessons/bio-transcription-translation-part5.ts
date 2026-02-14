export const bioTranscriptionPart5Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran5-intro-p5',
      type: 'text' as const,
      content: `
# ## Post-Translational Modification

**Part 5 of 7 — Post-Translational Modification**

1. Protein folding (chaperones assist)
2. Chemical modifications: phosphorylation, glycosylation
3. Proteolytic cleavage (e.g., insulin from proinsulin)
4. Protein targeting and sorting
      `
    },
    {
      id: 'tran5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes protein folding (chaperones assist)?',
            options: [
              'Protein folding (chaperones assist)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Protein folding (chaperones assist)'
          },
          {
            question: 'In the context of post-translational modification, which statement is accurate?',
            options: [
              'Proteolytic cleavage (e.g., insulin from proinsulin)',
              ')tsissa senorepahc( gnidlof nietorP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Proteolytic cleavage (e.g., insulin from proinsulin)'
          }
        ]
      }
    },
    {
      id: 'tran5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Protein folding (chaperones assist)**
- **Chemical modifications**: phosphorylation, glycosylation
- **Proteolytic cleavage (e.g., insulin from proinsulin)**
- **Protein targeting and sorting**
      `
    },
    {
      id: 'tran5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to post-translational modification?',
            options: [
              'Protein targeting and sorting',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Protein targeting and sorting'
          }
        ]
      }
    },
    {
      id: 'tran5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Protein folding (chaperones assist) is important in post-translational modification because',
            options: ['Protein folding (chaperones assist)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Chemical modifications is important in post-translational modification because',
            options: ['phosphorylation, glycosylation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Proteolytic cleavage (e.g., insulin from proinsulin) is important in post-translational modification because',
            options: ['Proteolytic cleavage (e.g., insulin from proinsuli', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Protein folding (chaperones assist)', 'phosphorylation, glycosylation', 'Proteolytic cleavage (e.g., insulin from proinsuli'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Post-Translational Modification.'
      }
    }
  ]
}
