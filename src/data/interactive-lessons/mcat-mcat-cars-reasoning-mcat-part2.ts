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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Strengthening & Weakening Arguments:',
            options: ['Strengthen: find evidence that supports the conclusion or fi', 'Weaken: find evidence that undermines a premise or provides ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['The correct answer addresses the specific connection between', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Strengthen: find evidence that supports the conclusion or fi', 'The correct answer addresses the specific connection between'],
        hint1: 'Think about strengthening & weakening arguments',
        hint2: 'Consider the MCAT application',
        explanation: 'Strengthen: find evidence that supports the conclusion or fills a gap. The correct answer addresses the specific connection between evidence and conclusion.'
      }
    }
  ]
}
