export const actTrigPart5Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t5-intro',
      type: 'text' as const,
      content: `
# Graphing Trig Functions

**Part 5 of 7 — Graphing Trig Functions**

y = A sin(Bx + C) + D.

Amplitude = |A|; Period = 2π/|B|.
      `
    },
    {
      id: 'act-t5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes y = a sin(bx + c) + d?',
            options: [
              'y = A sin(Bx + C) + D is a key concept for ACT Math',
              'Amplitude = |A|; Period = 2π/|B|',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'y = A sin(Bx + C) + D'
          }
        ]
      }
    },
    {
      id: 'act-t5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Phase shift = -C/B; Vertical shift = D.

**ACT Tip:** ACT tests basic graph reading: period, amplitude, max, min.
      `
    },
    {
      id: 'act-t5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for graphing trig functions?',
            options: [
              'Phase shift = -C/B; Vertical shift = D',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Phase shift = -C/B; Vertical shift = D'
          }
        ]
      }
    },
    {
      id: 'act-t5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Graphing Trig Functions:',
            options: ['y = A sin(Bx + C) + D', 'Amplitude = |A|; Period = 2π/|B|', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Phase shift = -C/B; Vertical shift = D', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['y = A sin(Bx + C) + D', 'Phase shift = -C/B; Vertical shift = D'],
        hint1: 'Think about graphing trig functions',
        hint2: 'Consider the best ACT strategy',
        explanation: 'y = A sin(Bx + C) + D. Phase shift = -C/B; Vertical shift = D.'
      }
    }
  ]
}
