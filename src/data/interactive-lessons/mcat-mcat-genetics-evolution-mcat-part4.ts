export const mcatGeneticsPart4Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Natural Selection

**Part 4 of 7 — Natural Selection**

Natural selection: differential reproductive success based on heritable traits.

Fitness: reproductive success, not physical strength.
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
            question: 'Which of the following best describes a key concept in natural selection?',
            options: [
              'Natural selection: differential reproductive success based on heritable traits',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Natural selection: differential reproductive success based on heritable traits'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Directional, stabilizing, and disruptive selection — different effects on trait distribution.

**MCAT Tip:** Sexual selection: traits favored in mate choice (peacock tail) vs survival.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to natural selection?',
            options: [
              'Directional, stabilizing, and disruptive selection — different effects on trait distribution',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Directional, stabilizing, and disruptive selection — different effects on trait distribution'
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
            label: 'Core concept for Natural Selection:',
            options: ['Natural selection: differential reproductive success based o', 'Fitness: reproductive success, not physical strength', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Directional, stabilizing, and disruptive selection — differe', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Natural selection: differential reproductive success based o', 'Directional, stabilizing, and disruptive selection — differe'],
        hint1: 'Think about natural selection',
        hint2: 'Consider the MCAT application',
        explanation: 'Natural selection: differential reproductive success based on heritable traits. Directional, stabilizing, and disruptive selection — different effects on trait distribution.'
      }
    }
  ]
}
