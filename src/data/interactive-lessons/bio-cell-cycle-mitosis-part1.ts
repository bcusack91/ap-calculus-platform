export const bioCellCyclePart1Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
# ## The Cell Cycle Overview

**Part 1 of 7 — The Cell Cycle Overview**

1. Interphase (G1, S, G2) + Mitotic phase (M)
2. Most of cell cycle spent in interphase (~90%)
3. DNA replicated during S phase
4. Cell growth in G1 and G2
      `
    },
    {
      id: 'cell1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Interphase (G1, S, G2) + Mitotic phase…" refer to in biology?',
            options: [
              'DNA replicated during S phase',
              'Most of cell cycle spent in interphase (~90%)',
              'Cell growth in G1 and G2',
              'Interphase (G1, S, G2) + Mitotic phase (M)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Interphase (G1, S, G2) + Mitotic phase (M). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about DNA replicated during S phase?',
            options: [
              'Interphase (G1, S, G2) + Mitotic phase (M)',
              'Most of cell cycle spent in interphase (~90%)',
              'Cell growth in G1 and G2',
              'DNA replicated during S phase'
            ],
            correctAnswer: 3,
            explanation: 'Correct — DNA replicated during S phase. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Interphase (G1, S, G2) + Mitotic phase (M)**
- **Most of cell cycle spent in interphase (~90%)**
- **DNA replicated during S phase**
- **Cell growth in G1 and G2**
      `
    },
    {
      id: 'cell1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding The Cell Cycle Overview, which correctly describes Cell growth in G1 and G2?',
            options: [
              'Most of cell cycle spent in interphase (~90%)',
              'Cell growth in G1 and G2',
              'Interphase (G1, S, G2) + Mitotic phase (M)',
              'DNA replicated during S phase'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cell growth in G1 and G2. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interphase (G1, S, G2) + Mitotic phase…',
            options: ['Cell growth in G1 and G2', 'Interphase (G1, S, G2) + Mitotic phase (M)', 'Most of cell cycle spent in interphase (~90%)', 'DNA replicated during S phase']
          },
          {
            label: 'Most of cell cycle spent in interphase…',
            options: ['Cell growth in G1 and G2', 'Interphase (G1, S, G2) + Mitotic phase (M)', 'DNA replicated during S phase', 'Most of cell cycle spent in interphase (~90%)']
          },
          {
            label: 'DNA replicated during S phase',
            options: ['DNA replicated during S phase', 'Cell growth in G1 and G2', 'Most of cell cycle spent in interphase (~90%)', 'Interphase (G1, S, G2) + Mitotic phase (M)']
          }
        ],
        correctAnswers: ['Interphase (G1, S, G2) + Mitotic phase (M)', 'Most of cell cycle spent in interphase (~90%)', 'DNA replicated during S phase'],
        hint1: 'Think about what each concept specifically describes in The Cell Cycle Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in The Cell Cycle Overview describes a specific idea. Interphase (G1, S, G2) + Mitotic phase (M). Most of cell cycle spent in interphase (~90%). DNA replicated during S phase.'
      }
    }
  ]
}
