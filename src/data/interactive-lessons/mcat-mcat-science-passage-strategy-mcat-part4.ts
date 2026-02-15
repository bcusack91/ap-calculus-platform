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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Discrete Questions:',
            options: ['Discrete questions: standalone, not linked to a passage — te', 'These are often the quickest points — do them if you have so', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Use process of elimination: cross out answers that are clear', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Discrete questions: standalone, not linked to a passage — te', 'Use process of elimination: cross out answers that are clear'],
        hint1: 'Think about discrete questions',
        hint2: 'Consider the MCAT application',
        explanation: 'Discrete questions: standalone, not linked to a passage — test pure content knowledge. Use process of elimination: cross out answers that are clearly wrong.'
      }
    }
  ]
}
