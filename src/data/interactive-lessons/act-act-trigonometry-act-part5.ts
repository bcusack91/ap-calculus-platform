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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains y = A sin(Bx + C) + D.?',
            options: [
              'ACT tests basic graph reading: period, amplitude, max, min.',
              'Phase shift = -C/B; Vertical shift = D.',
              'y = A sin(Bx + C) + D.',
              'Amplitude = |A|; Period = 2π/|B|.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — y = A sin(Bx + C) + D. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Phase shift = -C/B; Vertical shift = D.',
              'Amplitude = |A|; Period = 2π/|B|.',
              'y = A sin(Bx + C) + D.',
              'ACT tests basic graph reading: period, amplitude, max, min.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Phase shift = -C/B; Vertical shift = D. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Amplitude = |A|; Period = 2π/|B|.',
              'y = A sin(Bx + C) + D.',
              'Phase shift = -C/B; Vertical shift = D.',
              'ACT tests basic graph reading: period, amplitude, max, min.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: ACT tests basic graph reading: period, amplitude, max, min. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['ACT tests basic graph reading: period, amplitude, max, min.', 'Amplitude = |A|; Period = 2π/|B|.', 'y = A sin(Bx + C) + D.', 'Phase shift = -C/B; Vertical shift = D.']
          },
          {
            label: 'ACT Tip',
            options: ['ACT tests basic graph reading: period, amplitude, max, min.', 'Amplitude = |A|; Period = 2π/|B|.', 'y = A sin(Bx + C) + D.', 'Phase shift = -C/B; Vertical shift = D.']
          }
        ],
        correctAnswers: ['Phase shift = -C/B; Vertical shift = D.', 'ACT tests basic graph reading: period, amplitude, max, min.'],
        hint1: 'Think about what each concept specifically describes in Graphing Trig Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Graphing Trig Functions describes a specific idea. Key Insight: Phase shift = -C/B; Vertical shift = D. ACT Tip: ACT tests basic graph reading: period, amplitude, max, min.'
      }
    }
  ]
}
