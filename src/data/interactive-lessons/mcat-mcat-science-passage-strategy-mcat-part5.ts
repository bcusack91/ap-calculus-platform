export const mcatSciPassagePart5Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Integrating Content Knowledge

**Part 5 of 7 — Integrating Content Knowledge**

Connect passage info to your content knowledge — the MCAT tests integration.

Amino acid chemistry appears in biochem, organic, and biology passages.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in integrating content knowledge?',
            options: [
              'Connect passage info to your content knowledge — the MCAT tests integration',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Connect passage info to your content knowledge — the MCAT tests integration'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Physics concepts (pressure, flow, electrical signals) apply to organ system passages.

**MCAT Tip:** General chemistry (acids, bases, equilibrium) appears throughout all science sections.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to integrating content knowledge?',
            options: [
              'Physics concepts (pressure, flow, electrical signals) apply to organ system passages',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Physics concepts (pressure, flow, electrical signals) apply to organ system passages'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Integrating Content Knowledge:',
            options: ['Connect passage info to your content knowledge — the MCAT te', 'Amino acid chemistry appears in biochem, organic, and biolog', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Physics concepts (pressure, flow, electrical signals) apply ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Connect passage info to your content knowledge — the MCAT te', 'Physics concepts (pressure, flow, electrical signals) apply '],
        hint1: 'Think about integrating content knowledge',
        hint2: 'Consider the MCAT application',
        explanation: 'Connect passage info to your content knowledge — the MCAT tests integration. Physics concepts (pressure, flow, electrical signals) apply to organ system passages.'
      }
    }
  ]
}
