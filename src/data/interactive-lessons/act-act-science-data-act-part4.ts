export const actScienceDataPart4Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# Comparing Data Sets

**Part 4 of 7 — Comparing Data Sets**

Compare similar measurements across different experiments or conditions.

Look for consistent patterns or notable differences.
      `
    },
    {
      id: 'act-s4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Compare similar measurements across…?',
            options: [
              'Look for consistent patterns or notable differences.',
              'Control vs. experimental groups: what changed?.',
              'Compare similar measurements across different experiments or conditions.',
              'Identify which variable was manipulated and which was measured.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Compare similar measurements across different experiments or conditions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Look for consistent patterns or notable differences.',
              'Control vs. experimental groups: what changed?.',
              'Identify which variable was manipulated and which was measured.',
              'Compare similar measurements across different experiments or conditions.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Control vs. experimental groups: what changed?. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Control vs. experimental groups: what changed?.

**ACT Tip:** Identify which variable was manipulated and which was measured.
      `
    },
    {
      id: 'act-s4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Comparing Data Sets, which correctly describes ACT Tip?',
            options: [
              'Control vs. experimental groups: what changed?.',
              'Look for consistent patterns or notable differences.',
              'Identify which variable was manipulated and which was measured.',
              'Compare similar measurements across different experiments or conditions.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Identify which variable was manipulated and which was measured. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Look for consistent patterns or notable differences.', 'Identify which variable was manipulated and which was measured.', 'Compare similar measurements across different experiments or conditions.', 'Control vs. experimental groups: what changed?.']
          },
          {
            label: 'ACT Tip',
            options: ['Compare similar measurements across different experiments or conditions.', 'Control vs. experimental groups: what changed?.', 'Identify which variable was manipulated and which was measured.', 'Look for consistent patterns or notable differences.']
          }
        ],
        correctAnswers: ['Control vs. experimental groups: what changed?.', 'Identify which variable was manipulated and which was measured.'],
        hint1: 'Think about what each concept specifically describes in Comparing Data Sets.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Comparing Data Sets describes a specific idea. Key Insight: Control vs. experimental groups: what changed?. ACT Tip: Identify which variable was manipulated and which was measured.'
      }
    }
  ]
}
