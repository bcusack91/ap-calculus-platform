export const satWordProblemsPart2Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w2-intro',
      type: 'text' as const,
      content: `
# Rate & Work Problems

**Part 2 of 7 — Rate & Work Problems**

Distance = Rate × Time (d = rt).

Work rate: if A does a job in a hours, rate = 1/a per hour.
      `
    },
    {
      id: 'sat-w2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Distance = Rate × Time (d = rt).?',
            options: [
              'Distance = Rate × Time (d = rt).',
              'Combined work: 1/a + 1/b = 1/t where t is time together.',
              'if A does a job in a hours, rate = 1/a per hour.',
              'Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Distance = Rate × Time (d = rt). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Distance = Rate × Time (d = rt).',
              'Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).',
              'Combined work: 1/a + 1/b = 1/t where t is time together.',
              'if A does a job in a hours, rate = 1/a per hour.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Combined work: 1/a + 1/b = 1/t where t is time together. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-w2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Combined work: 1/a + 1/b = 1/t where t is time together.

**SAT Tip:** Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).
      `
    },
    {
      id: 'sat-w2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'if A does a job in a hours, rate = 1/a per hour.',
              'Combined work: 1/a + 1/b = 1/t where t is time together.',
              'Distance = Rate × Time (d = rt).',
              'Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Two objects moving: determine if approaching (subtract speeds) or separating (add speeds). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-w2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Work rate',
            options: ['if A does a job in a hours, rate = 1/a per hour.', 'Combined work: 1/a + 1/b = 1/t where t is time together.', 'Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).', 'Distance = Rate × Time (d = rt).']
          },
          {
            label: 'Key Insight',
            options: ['Distance = Rate × Time (d = rt).', 'if A does a job in a hours, rate = 1/a per hour.', 'Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).', 'Combined work: 1/a + 1/b = 1/t where t is time together.']
          },
          {
            label: 'SAT Tip',
            options: ['Combined work: 1/a + 1/b = 1/t where t is time together.', 'if A does a job in a hours, rate = 1/a per hour.', 'Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).', 'Distance = Rate × Time (d = rt).']
          }
        ],
        correctAnswers: ['if A does a job in a hours, rate = 1/a per hour.', 'Combined work: 1/a + 1/b = 1/t where t is time together.', 'Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).'],
        hint1: 'Think about what each concept specifically describes in Rate & Work Problems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Rate & Work Problems describes a specific idea. Work rate: if A does a job in a hours, rate = 1/a per hour. Key Insight: Combined work: 1/a + 1/b = 1/t where t is time together. SAT Tip: Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).'
      }
    }
  ]
}
