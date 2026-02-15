export const mcatCarsStratPart4Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Inference & Application

**Part 4 of 7 — Inference & Application**

Inference = what must be true based on the passage (not explicitly stated).

Application: how would the author respond to a new scenario?.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in inference & application?',
            options: [
              'Inference = what must be true based on the passage (not explicitly stated)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Inference = what must be true based on the passage (not explicitly stated)'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Stay close to the text — MCAT inferences are conservative, not speculative.

**MCAT Tip:** Strongly supported > possibly true; eliminate answers that go too far.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to inference & application?',
            options: [
              'Stay close to the text — MCAT inferences are conservative, not speculative',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Stay close to the text — MCAT inferences are conservative, not speculative'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Inference & Application:',
            options: ['Inference = what must be true based on the passage (not expl', 'Application: how would the author respond to a new scenario?', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Stay close to the text — MCAT inferences are conservative, n', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Inference = what must be true based on the passage (not expl', 'Stay close to the text — MCAT inferences are conservative, n'],
        hint1: 'Think about inference & application',
        hint2: 'Consider the MCAT application',
        explanation: 'Inference = what must be true based on the passage (not explicitly stated). Stay close to the text — MCAT inferences are conservative, not speculative.'
      }
    }
  ]
}
