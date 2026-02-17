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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Prophase" refer to in biology?',
            options: [
              'sister chromatids separate, move to poles',
              'chromosomes condense, spindle forms',
              'chromosomes align at metaphase plate',
              'nuclear envelopes reform, chromosomes decondense'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Prophase: chromosomes condense, spindle forms. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Anaphase?',
            options: [
              'nuclear envelopes reform, chromosomes decondense',
              'chromosomes align at metaphase plate',
              'chromosomes condense, spindle forms',
              'sister chromatids separate, move to poles'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Anaphase: sister chromatids separate, move to poles. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Telophase?',
            options: [
              'sister chromatids separate, move to poles',
              'chromosomes condense, spindle forms',
              'nuclear envelopes reform, chromosomes decondense',
              'chromosomes align at metaphase plate'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Telophase: nuclear envelopes reform, chromosomes decondense. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Prophase',
            options: ['sister chromatids separate, move to poles', 'nuclear envelopes reform, chromosomes decondense', 'chromosomes condense, spindle forms', 'chromosomes align at metaphase plate']
          },
          {
            label: 'Metaphase',
            options: ['chromosomes align at metaphase plate', 'nuclear envelopes reform, chromosomes decondense', 'sister chromatids separate, move to poles', 'chromosomes condense, spindle forms']
          },
          {
            label: 'Anaphase',
            options: ['nuclear envelopes reform, chromosomes decondense', 'chromosomes condense, spindle forms', 'sister chromatids separate, move to poles', 'chromosomes align at metaphase plate']
          }
        ],
        correctAnswers: ['chromosomes condense, spindle forms', 'chromosomes align at metaphase plate', 'sister chromatids separate, move to poles'],
        hint1: 'Think about what each concept specifically describes in Mitosis Phases.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mitosis Phases describes a specific idea. Prophase: chromosomes condense, spindle forms. Metaphase: chromosomes align at metaphase plate. Anaphase: sister chromatids separate, move to poles.'
      }
    }
  ]
}
