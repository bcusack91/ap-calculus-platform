export const bioCellCyclePart7Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell7-intro-p7',
      type: 'text' as const,
      content: `
# ## Cell Cycle & Mitosis: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Mitosis vs meiosis comparison
2. Cell cycle regulation and cancer
3. Chromosome behavior during division
4. AP exam: diagram interpretation
      `
    },
    {
      id: 'cell7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Mitosis vs meiosis comparison" refer to in biology?',
            options: [
              'Cell cycle regulation and cancer',
              'Chromosome behavior during division',
              'Mitosis vs meiosis comparison',
              'diagram interpretation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Mitosis vs meiosis comparison. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Chromosome behavior during division:',
            options: [
              'Mitosis vs meiosis comparison',
              'Chromosome behavior during division',
              'diagram interpretation',
              'Cell cycle regulation and cancer'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Chromosome behavior during division. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Mitosis vs meiosis comparison**
- **Cell cycle regulation and cancer**
- **Chromosome behavior during division**
- **AP exam**: diagram interpretation
      `
    },
    {
      id: 'cell7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Cell Cycle & Mitosis: Synthesis & AP Review, which correctly describes AP exam?',
            options: [
              'diagram interpretation',
              'Cell cycle regulation and cancer',
              'Chromosome behavior during division',
              'Mitosis vs meiosis comparison'
            ],
            correctAnswer: 0,
            explanation: 'Correct — AP exam: diagram interpretation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mitosis vs meiosis comparison',
            options: ['Chromosome behavior during division', 'Mitosis vs meiosis comparison', 'diagram interpretation', 'Cell cycle regulation and cancer']
          },
          {
            label: 'Cell cycle regulation and cancer',
            options: ['Mitosis vs meiosis comparison', 'Cell cycle regulation and cancer', 'diagram interpretation', 'Chromosome behavior during division']
          },
          {
            label: 'Chromosome behavior during division',
            options: ['Mitosis vs meiosis comparison', 'Chromosome behavior during division', 'Cell cycle regulation and cancer', 'diagram interpretation']
          }
        ],
        correctAnswers: ['Mitosis vs meiosis comparison', 'Cell cycle regulation and cancer', 'Chromosome behavior during division'],
        hint1: 'Think about what each concept specifically describes in Cell Cycle & Mitosis: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Cycle & Mitosis: Synthesis & AP Review describes a specific idea. Mitosis vs meiosis comparison. Cell cycle regulation and cancer. Chromosome behavior during division.'
      }
    }
  ]
}
