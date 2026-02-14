export const bioCellCyclePart3Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell3-intro-p3',
      type: 'text' as const,
      content: `
# ## Mitosis Phases

**Part 3 of 7 — Mitosis Phases**

1. Prophase: chromosomes condense, spindle forms
2. Metaphase: chromosomes align at metaphase plate
3. Anaphase: sister chromatids separate, move to poles
4. Telophase: nuclear envelopes reform, chromosomes decondense
      `
    },
    {
      id: 'cell3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes prophase?',
            options: [
              'chromosomes condense, spindle forms',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Prophase: chromosomes condense, spindle forms'
          },
          {
            question: 'In the context of mitosis phases, which statement is accurate?',
            options: [
              'Anaphase: sister chromatids separate, move to poles',
              'smrof eldnips ,esnednoc semosomorhc :esahporP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Anaphase: sister chromatids separate, move to poles'
          }
        ]
      }
    },
    {
      id: 'cell3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Prophase**: chromosomes condense, spindle forms
- **Metaphase**: chromosomes align at metaphase plate
- **Anaphase**: sister chromatids separate, move to poles
- **Telophase**: nuclear envelopes reform, chromosomes decondense
      `
    },
    {
      id: 'cell3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to mitosis phases?',
            options: [
              'Telophase: nuclear envelopes reform, chromosomes decondense',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Telophase: nuclear envelopes reform, chromosomes decondense'
          }
        ]
      }
    },
    {
      id: 'cell3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Prophase is important in mitosis phases because',
            options: ['chromosomes condense, spindle forms', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Metaphase is important in mitosis phases because',
            options: ['chromosomes align at metaphase plate', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Anaphase is important in mitosis phases because',
            options: ['sister chromatids separate, move to poles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['chromosomes condense, spindle forms', 'chromosomes align at metaphase plate', 'sister chromatids separate, move to poles'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Mitosis Phases.'
      }
    }
  ]
}
