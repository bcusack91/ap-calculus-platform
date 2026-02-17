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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Valid reasoning',
            options: ['Sound reasoning: valid AND the premises are actually true.', 'Arguments have premises (evidence) and conclusions (claims) — identify both.', 'Deductive: general to specific (if all X are Y, and Z is X, then Z is Y).', 'if the premises are true, the conclusion must follow.']
          },
          {
            label: 'Key Insight',
            options: ['Sound reasoning: valid AND the premises are actually true.', 'Deductive: general to specific (if all X are Y, and Z is X, then Z is Y).', 'if the premises are true, the conclusion must follow.', 'Arguments have premises (evidence) and conclusions (claims) — identify both.']
          },
          {
            label: 'MCAT Tip',
            options: ['if the premises are true, the conclusion must follow.', 'Deductive: general to specific (if all X are Y, and Z is X, then Z is Y).', 'Arguments have premises (evidence) and conclusions (claims) — identify both.', 'Sound reasoning: valid AND the premises are actually true.']
          }
        ],
        correctAnswers: ['if the premises are true, the conclusion must follow.', 'Sound reasoning: valid AND the premises are actually true.', 'Deductive: general to specific (if all X are Y, and Z is X, then Z is Y).'],
        hint1: 'Think about what each concept specifically describes in Cars Reasoning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cars Reasoning describes a specific idea. Valid reasoning: if the premises are true, the conclusion must follow. Key Insight: Sound reasoning: valid AND the premises are actually true. MCAT Tip: Deductive: general to specific (if all X are Y, and Z is X, then Z is Y).'
      }
    }
  ]
}
