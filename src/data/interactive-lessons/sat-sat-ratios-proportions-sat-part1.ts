export const satRatiosPart1Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r1-intro',
      type: 'text' as const,
      content: `
# 📝 Ratios Proportions

**Part 1 of 7 — Ratios and Proportions**

Ratio: comparison of two quantities (a:b or a/b).

Proportion: two equal ratios, a/b = c/d.
      `
    },
    {
      id: 'sat-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Ratio?',
            options: [
              'Cross-multiply to solve: ad = bc.',
              'Part-to-whole vs. part-to-part ratios: context matters on the SAT.',
              'two equal ratios, a/b = c/d.',
              'comparison of two quantities (a:b or a/b).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Ratio: comparison of two quantities (a:b or a/b). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'comparison of two quantities (a:b or a/b).',
              'Part-to-whole vs. part-to-part ratios: context matters on the SAT.',
              'two equal ratios, a/b = c/d.',
              'Cross-multiply to solve: ad = bc.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Cross-multiply to solve: ad = bc. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Cross-multiply to solve: ad = bc.

**SAT Tip:** Part-to-whole vs. part-to-part ratios: context matters on the SAT.
      `
    },
    {
      id: 'sat-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Ratios Proportions, which correctly describes SAT Tip?',
            options: [
              'comparison of two quantities (a:b or a/b).',
              'Part-to-whole vs. part-to-part ratios: context matters on the SAT.',
              'two equal ratios, a/b = c/d.',
              'Cross-multiply to solve: ad = bc.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Part-to-whole vs. part-to-part ratios: context matters on the SAT. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio',
            options: ['comparison of two quantities (a:b or a/b).', 'Part-to-whole vs. part-to-part ratios: context matters on the SAT.', 'two equal ratios, a/b = c/d.', 'Cross-multiply to solve: ad = bc.']
          },
          {
            label: 'Proportion',
            options: ['Cross-multiply to solve: ad = bc.', 'comparison of two quantities (a:b or a/b).', 'Part-to-whole vs. part-to-part ratios: context matters on the SAT.', 'two equal ratios, a/b = c/d.']
          },
          {
            label: 'Key Insight',
            options: ['Part-to-whole vs. part-to-part ratios: context matters on the SAT.', 'two equal ratios, a/b = c/d.', 'comparison of two quantities (a:b or a/b).', 'Cross-multiply to solve: ad = bc.']
          }
        ],
        correctAnswers: ['comparison of two quantities (a:b or a/b).', 'two equal ratios, a/b = c/d.', 'Cross-multiply to solve: ad = bc.'],
        hint1: 'Think about what each concept specifically describes in Ratios Proportions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ratios Proportions describes a specific idea. Ratio: comparison of two quantities (a:b or a/b). Proportion: two equal ratios, a/b = c/d. Key Insight: Cross-multiply to solve: ad = bc.'
      }
    }
  ]
}
