export const satRatiosPart6Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Rate = distance/time or work/time.

Combined rates: add rates when working together.
      `
    },
    {
      id: 'sat-r6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Rate = distance/time or work/time." refer to in SAT prep?',
            options: [
              'Average speed = total distance / total time (NOT average of speeds).',
              'add rates when working together.',
              'Rate = distance/time or work/time.',
              'd = rt (distance = rate × time).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Rate = distance/time or work/time. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'd = rt (distance = rate × time).',
              'Average speed = total distance / total time (NOT average of speeds).',
              'Rate = distance/time or work/time.',
              'add rates when working together.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: d = rt (distance = rate × time). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** d = rt (distance = rate × time).

**SAT Tip:** Average speed = total distance / total time (NOT average of speeds).
      `
    },
    {
      id: 'sat-r6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Rate = distance/time or work/time.',
              'add rates when working together.',
              'd = rt (distance = rate × time).',
              'Average speed = total distance / total time (NOT average of speeds).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Average speed = total distance / total time (NOT average of speeds). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Combined rates',
            options: ['add rates when working together.', 'd = rt (distance = rate × time).', 'Rate = distance/time or work/time.', 'Average speed = total distance / total time (NOT average of speeds).']
          },
          {
            label: 'Key Insight',
            options: ['Rate = distance/time or work/time.', 'd = rt (distance = rate × time).', 'add rates when working together.', 'Average speed = total distance / total time (NOT average of speeds).']
          },
          {
            label: 'SAT Tip',
            options: ['d = rt (distance = rate × time).', 'Rate = distance/time or work/time.', 'Average speed = total distance / total time (NOT average of speeds).', 'add rates when working together.']
          }
        ],
        correctAnswers: ['add rates when working together.', 'd = rt (distance = rate × time).', 'Average speed = total distance / total time (NOT average of speeds).'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Combined rates: add rates when working together. Key Insight: d = rt (distance = rate × time). SAT Tip: Average speed = total distance / total time (NOT average of speeds).'
      }
    }
  ]
}
