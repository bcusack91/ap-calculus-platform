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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Application',
            options: ['Stay close to the text — MCAT inferences are conservative, not speculative.', 'Inference = what must be true based on the passage (not explicitly stated).', 'Strongly supported > possibly true; eliminate answers that go too far.', 'how would the author respond to a new scenario?.']
          },
          {
            label: 'Key Insight',
            options: ['Strongly supported > possibly true; eliminate answers that go too far.', 'how would the author respond to a new scenario?.', 'Stay close to the text — MCAT inferences are conservative, not speculative.', 'Inference = what must be true based on the passage (not explicitly stated).']
          },
          {
            label: 'MCAT Tip',
            options: ['Stay close to the text — MCAT inferences are conservative, not speculative.', 'how would the author respond to a new scenario?.', 'Inference = what must be true based on the passage (not explicitly stated).', 'Strongly supported > possibly true; eliminate answers that go too far.']
          }
        ],
        correctAnswers: ['how would the author respond to a new scenario?.', 'Stay close to the text — MCAT inferences are conservative, not speculative.', 'Strongly supported > possibly true; eliminate answers that go too far.'],
        hint1: 'Think about what each concept specifically describes in Inference & Application.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inference & Application describes a specific idea. Application: how would the author respond to a new scenario?. Key Insight: Stay close to the text — MCAT inferences are conservative, not speculative. MCAT Tip: Strongly supported > possibly true; eliminate answers that go too far.'
      }
    }
  ]
}
