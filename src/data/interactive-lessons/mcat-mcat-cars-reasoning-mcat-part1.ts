export const mcatCarsReasonPart1Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Cars Reasoning

**Part 1 of 7 — Logical Reasoning**

Arguments have premises (evidence) and conclusions (claims) — identify both.

Valid reasoning: if the premises are true, the conclusion must follow.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in logical reasoning?',
            options: [
              'Arguments have premises (evidence) and conclusions (claims) — identify both',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Arguments have premises (evidence) and conclusions (claims) — identify both'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Sound reasoning: valid AND the premises are actually true.

**MCAT Tip:** Deductive: general to specific (if all X are Y, and Z is X, then Z is Y).
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to logical reasoning?',
            options: [
              'Sound reasoning: valid AND the premises are actually true',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Sound reasoning: valid AND the premises are actually true'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Logical Reasoning:',
            options: ['Arguments have premises (evidence) and conclusions (claims) ', 'Valid reasoning: if the premises are true, the conclusion mu', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Sound reasoning: valid AND the premises are actually true', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Arguments have premises (evidence) and conclusions (claims) ', 'Sound reasoning: valid AND the premises are actually true'],
        hint1: 'Think about logical reasoning',
        hint2: 'Consider the MCAT application',
        explanation: 'Arguments have premises (evidence) and conclusions (claims) — identify both. Sound reasoning: valid AND the premises are actually true.'
      }
    }
  ]
}
