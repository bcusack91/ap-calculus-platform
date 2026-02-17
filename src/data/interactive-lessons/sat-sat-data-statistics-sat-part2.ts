export const satDataStatsPart2Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-d2-intro',
      type: 'text' as const,
      content: `
# Standard Deviation & Spread

**Part 2 of 7 — Standard Deviation & Spread**

Range = max - min.

Standard deviation measures spread from the mean.
      `
    },
    {
      id: 'sat-d2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Range = max - min.?',
            options: [
              'Range = max - min.',
              'Larger SD = more spread out; smaller SD = more clustered.',
              'Standard deviation measures spread from the mean.',
              'SAT won\'t ask you to calculate SD, but you must compare or interpret it.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Range = max - min. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'SAT won\'t ask you to calculate SD, but you must compare or interpret it.',
              'Larger SD = more spread out; smaller SD = more clustered.',
              'Range = max - min.',
              'Standard deviation measures spread from the mean.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Larger SD = more spread out; smaller SD = more clustered. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-d2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Larger SD = more spread out; smaller SD = more clustered.

**SAT Tip:** SAT won't ask you to calculate SD, but you must compare or interpret it.
      `
    },
    {
      id: 'sat-d2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Range = max - min.',
              'SAT won\'t ask you to calculate SD, but you must compare or interpret it.',
              'Larger SD = more spread out; smaller SD = more clustered.',
              'Standard deviation measures spread from the mean.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: SAT won\'t ask you to calculate SD, but you must compare or interpret it. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-d2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Range = max - min.', 'SAT won\'t ask you to calculate SD, but you must compare or interpret it.', 'Larger SD = more spread out; smaller SD = more clustered.', 'Standard deviation measures spread from the mean.']
          },
          {
            label: 'SAT Tip',
            options: ['Standard deviation measures spread from the mean.', 'Range = max - min.', 'Larger SD = more spread out; smaller SD = more clustered.', 'SAT won\'t ask you to calculate SD, but you must compare or interpret it.']
          }
        ],
        correctAnswers: ['Larger SD = more spread out; smaller SD = more clustered.', 'SAT won\'t ask you to calculate SD, but you must compare or interpret it.'],
        hint1: 'Think about what each concept specifically describes in Standard Deviation & Spread.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Standard Deviation & Spread describes a specific idea. Key Insight: Larger SD = more spread out; smaller SD = more clustered. SAT Tip: SAT won\'t ask you to calculate SD, but you must compare or interpret it.'
      }
    }
  ]
}
