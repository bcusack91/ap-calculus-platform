export const bioMendelianPart7Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend7-intro-p7',
      type: 'text' as const,
      content: `
# ## Mendelian Genetics: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Mendel's laws and chromosome behavior
2. Probability in genetics
3. Chi-square on the AP exam
4. Connecting genetics to evolution
      `
    },
    {
      id: 'mend7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Mendel\'s laws and chromosome behavior" refer to in biology?',
            options: [
              'Chi-square on the AP exam',
              'Connecting genetics to evolution',
              'Mendel\'s laws and chromosome behavior',
              'Probability in genetics'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Mendel\'s laws and chromosome behavior. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Chi-square on the AP exam:',
            options: [
              'Chi-square on the AP exam',
              'Connecting genetics to evolution',
              'Probability in genetics',
              'Mendel\'s laws and chromosome behavior'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Chi-square on the AP exam. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'mend7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Mendel's laws and chromosome behavior**
- **Probability in genetics**
- **Chi-square on the AP exam**
- **Connecting genetics to evolution**
      `
    },
    {
      id: 'mend7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Connecting genetics to evolution is correct?',
            options: [
              'Chi-square on the AP exam',
              'Connecting genetics to evolution',
              'Mendel\'s laws and chromosome behavior',
              'Probability in genetics'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Connecting genetics to evolution. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'mend7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mendel\'s laws and chromosome behavior',
            options: ['Chi-square on the AP exam', 'Connecting genetics to evolution', 'Mendel\'s laws and chromosome behavior', 'Probability in genetics']
          },
          {
            label: 'Probability in genetics',
            options: ['Chi-square on the AP exam', 'Probability in genetics', 'Connecting genetics to evolution', 'Mendel\'s laws and chromosome behavior']
          },
          {
            label: 'Chi-square on the AP exam',
            options: ['Connecting genetics to evolution', 'Chi-square on the AP exam', 'Probability in genetics', 'Mendel\'s laws and chromosome behavior']
          }
        ],
        correctAnswers: ['Mendel\'s laws and chromosome behavior', 'Probability in genetics', 'Chi-square on the AP exam'],
        hint1: 'Think about what each concept specifically describes in Mendelian Genetics: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mendelian Genetics: Synthesis & AP Review describes a specific idea. Mendel\'s laws and chromosome behavior. Probability in genetics. Chi-square on the AP exam.'
      }
    }
  ]
}
