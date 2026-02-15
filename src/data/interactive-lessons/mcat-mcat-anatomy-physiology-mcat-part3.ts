export const mcatAnatPhysPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Integumentary System

**Part 3 of 7 — Integumentary System**

Skin layers: epidermis (keratinocytes, melanocytes), dermis (connective tissue), hypodermis (fat).

Functions: protection, thermoregulation, sensation, vitamin D synthesis, immune defense.
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in integumentary system?',
            options: [
              'Skin layers: epidermis (keratinocytes, melanocytes), dermis (connective tissue), hypodermis (fat)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Skin layers: epidermis (keratinocytes, melanocytes), dermis (connective tissue), hypodermis (fat)'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Thermoregulation: vasodilation/vasoconstriction, sweating, shivering.

**MCAT Tip:** Wound healing: hemostasis, inflammation, proliferation, remodeling.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to integumentary system?',
            options: [
              'Thermoregulation: vasodilation/vasoconstriction, sweating, shivering',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Thermoregulation: vasodilation/vasoconstriction, sweating, shivering'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Integumentary System:',
            options: ['Skin layers: epidermis (keratinocytes, melanocytes), dermis ', 'Functions: protection, thermoregulation, sensation, vitamin ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Thermoregulation: vasodilation/vasoconstriction, sweating, s', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Skin layers: epidermis (keratinocytes, melanocytes), dermis ', 'Thermoregulation: vasodilation/vasoconstriction, sweating, s'],
        hint1: 'Think about integumentary system',
        hint2: 'Consider the MCAT application',
        explanation: 'Skin layers: epidermis (keratinocytes, melanocytes), dermis (connective tissue), hypodermis (fat). Thermoregulation: vasodilation/vasoconstriction, sweating, shivering.'
      }
    }
  ]
}
