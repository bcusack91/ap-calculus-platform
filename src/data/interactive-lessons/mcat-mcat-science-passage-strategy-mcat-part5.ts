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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Physics concepts (pressure, flow, electrical signals) apply to organ system passages.', 'General chemistry (acids, bases, equilibrium) appears throughout all science sections.', 'Amino acid chemistry appears in biochem, organic, and biology passages.', 'Connect passage info to your content knowledge — the MCAT tests integration.']
          },
          {
            label: 'MCAT Tip',
            options: ['Physics concepts (pressure, flow, electrical signals) apply to organ system passages.', 'Amino acid chemistry appears in biochem, organic, and biology passages.', 'Connect passage info to your content knowledge — the MCAT tests integration.', 'General chemistry (acids, bases, equilibrium) appears throughout all science sections.']
          }
        ],
        correctAnswers: ['Physics concepts (pressure, flow, electrical signals) apply to organ system passages.', 'General chemistry (acids, bases, equilibrium) appears throughout all science sections.'],
        hint1: 'Think about what each concept specifically describes in Integrating Content Knowledge.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integrating Content Knowledge describes a specific idea. Key Insight: Physics concepts (pressure, flow, electrical signals) apply to organ system passages. MCAT Tip: General chemistry (acids, bases, equilibrium) appears throughout all science sections.'
      }
    }
  ]
}
