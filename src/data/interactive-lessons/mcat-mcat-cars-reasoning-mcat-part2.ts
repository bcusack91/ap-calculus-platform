export const mcatCarsReasonPart2Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Strengthening & Weakening Arguments

**Part 2 of 7 — Strengthening & Weakening Arguments**

Strengthen: find evidence that supports the conclusion or fills a gap.

Weaken: find evidence that undermines a premise or provides a counterexample.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in strengthening & weakening arguments?',
            options: [
              'Strengthen: find evidence that supports the conclusion or fills a gap',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Strengthen: find evidence that supports the conclusion or fills a gap'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** The correct answer addresses the specific connection between evidence and conclusion.

**MCAT Tip:** Be careful of answers that are true but irrelevant to the argument.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to strengthening & weakening arguments?',
            options: [
              'The correct answer addresses the specific connection between evidence and conclusion',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'The correct answer addresses the specific connection between evidence and conclusion'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Strengthen',
            options: ['find evidence that supports the conclusion or fills a gap.', 'find evidence that undermines a premise or provides a counterexample.', 'Be careful of answers that are true but irrelevant to the argument.', 'The correct answer addresses the specific connection between evidence and conclusion.']
          },
          {
            label: 'Weaken',
            options: ['The correct answer addresses the specific connection between evidence and conclusion.', 'find evidence that undermines a premise or provides a counterexample.', 'Be careful of answers that are true but irrelevant to the argument.', 'find evidence that supports the conclusion or fills a gap.']
          },
          {
            label: 'Key Insight',
            options: ['The correct answer addresses the specific connection between evidence and conclusion.', 'Be careful of answers that are true but irrelevant to the argument.', 'find evidence that supports the conclusion or fills a gap.', 'find evidence that undermines a premise or provides a counterexample.']
          }
        ],
        correctAnswers: ['find evidence that supports the conclusion or fills a gap.', 'find evidence that undermines a premise or provides a counterexample.', 'The correct answer addresses the specific connection between evidence and conclusion.'],
        hint1: 'Think about what each concept specifically describes in Strengthening & Weakening Arguments.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Strengthening & Weakening Arguments describes a specific idea. Strengthen: find evidence that supports the conclusion or fills a gap. Weaken: find evidence that undermines a premise or provides a counterexample. Key Insight: The correct answer addresses the specific connection between evidence and conclusion.'
      }
    }
  ]
}
