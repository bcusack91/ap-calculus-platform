export const mcatSciPassagePart4Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Discrete Questions

**Part 4 of 7 — Discrete Questions**

Discrete questions: standalone, not linked to a passage — test pure content knowledge.

These are often the quickest points — do them if you have solid content mastery.
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
            question: 'Which of the following best describes a key concept in discrete questions?',
            options: [
              'Discrete questions: standalone, not linked to a passage — test pure content knowledge',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Discrete questions: standalone, not linked to a passage — test pure content knowledge'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Use process of elimination: cross out answers that are clearly wrong.

**MCAT Tip:** Educated guessing: if you can eliminate 2 options, you have a 50% chance.
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
            question: 'What is an important principle for MCAT Strategy related to discrete questions?',
            options: [
              'Use process of elimination: cross out answers that are clearly wrong',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Use process of elimination: cross out answers that are clearly wrong'
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
            label: 'Discrete questions',
            options: ['These are often the quickest points — do them if you have solid content mastery.', 'Educated guessing: if you can eliminate 2 options, you have a 50% chance.', 'Use process of elimination: cross out answers that are clearly wrong.', 'standalone, not linked to a passage — test pure content knowledge.']
          },
          {
            label: 'Key Insight',
            options: ['standalone, not linked to a passage — test pure content knowledge.', 'Use process of elimination: cross out answers that are clearly wrong.', 'Educated guessing: if you can eliminate 2 options, you have a 50% chance.', 'These are often the quickest points — do them if you have solid content mastery.']
          },
          {
            label: 'MCAT Tip',
            options: ['These are often the quickest points — do them if you have solid content mastery.', 'Use process of elimination: cross out answers that are clearly wrong.', 'standalone, not linked to a passage — test pure content knowledge.', 'Educated guessing: if you can eliminate 2 options, you have a 50% chance.']
          }
        ],
        correctAnswers: ['standalone, not linked to a passage — test pure content knowledge.', 'Use process of elimination: cross out answers that are clearly wrong.', 'Educated guessing: if you can eliminate 2 options, you have a 50% chance.'],
        hint1: 'Think about what each concept specifically describes in Discrete Questions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Discrete Questions describes a specific idea. Discrete questions: standalone, not linked to a passage — test pure content knowledge. Key Insight: Use process of elimination: cross out answers that are clearly wrong. MCAT Tip: Educated guessing: if you can eliminate 2 options, you have a 50% chance.'
      }
    }
  ]
}
