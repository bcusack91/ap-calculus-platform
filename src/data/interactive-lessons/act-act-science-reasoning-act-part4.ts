export const actScienceReasonPart4Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# Applying Concepts

**Part 4 of 7 — Applying Concepts**

Apply scientific principles to new situations or data.

If you understand the concept, you can predict outcomes in novel scenarios.
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
            question: 'Which of the following correctly describes Apply scientific principles to new…?',
            options: [
              'If you understand the concept, you can predict outcomes in novel scenarios.',
              'Connect findings to real-world applications.',
              'Analogical reasoning: this experiment is like that situation because....',
              'Apply scientific principles to new situations or data.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Apply scientific principles to new situations or data. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Connect findings to real-world applications.',
              'Analogical reasoning: this experiment is like that situation because....',
              'Apply scientific principles to new situations or data.',
              'If you understand the concept, you can predict outcomes in novel scenarios.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Connect findings to real-world applications. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Connect findings to real-world applications.

**ACT Tip:** Analogical reasoning: this experiment is like that situation because....
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
            question: 'Regarding Applying Concepts, which correctly describes ACT Tip?',
            options: [
              'Analogical reasoning: this experiment is like that situation because....',
              'If you understand the concept, you can predict outcomes in novel scenarios.',
              'Apply scientific principles to new situations or data.',
              'Connect findings to real-world applications.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Analogical reasoning: this experiment is like that situation because.... Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            options: ['Connect findings to real-world applications.', 'If you understand the concept, you can predict outcomes in novel scenarios.', 'Analogical reasoning: this experiment is like that situation because....', 'Apply scientific principles to new situations or data.']
          },
          {
            label: 'ACT Tip',
            options: ['If you understand the concept, you can predict outcomes in novel scenarios.', 'Analogical reasoning: this experiment is like that situation because....', 'Apply scientific principles to new situations or data.', 'Connect findings to real-world applications.']
          }
        ],
        correctAnswers: ['Connect findings to real-world applications.', 'Analogical reasoning: this experiment is like that situation because....'],
        hint1: 'Think about what each concept specifically describes in Applying Concepts.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applying Concepts describes a specific idea. Key Insight: Connect findings to real-world applications. ACT Tip: Analogical reasoning: this experiment is like that situation because....'
      }
    }
  ]
}
