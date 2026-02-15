export const mcatPsychBehavPart3Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Cognition & Language

**Part 3 of 7 — Cognition & Language**

Problem solving: algorithms (systematic) vs heuristics (shortcuts — availability, representativeness).

Language development: Chomsky (innate LAD) vs Skinner (operant conditioning).
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
            question: 'Which of the following best describes a key concept in cognition & language?',
            options: [
              'Problem solving: algorithms (systematic) vs heuristics (shortcuts — availability, representativeness)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Problem solving: algorithms (systematic) vs heuristics (shortcuts — availability, representativeness)'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia).

**MCAT Tip:** Cognitive biases: confirmation bias, anchoring, framing effect, hindsight bias.
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
            question: 'What is an important principle for MCAT Psych/Soc related to cognition & language?',
            options: [
              'Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia)'
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
            label: 'Core concept for Cognition & Language:',
            options: ['Problem solving: algorithms (systematic) vs heuristics (shor', 'Language development: Chomsky (innate LAD) vs Skinner (opera', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Brocas area: speech production (damage = nonfluent aphasia);', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Problem solving: algorithms (systematic) vs heuristics (shor', 'Brocas area: speech production (damage = nonfluent aphasia);'],
        hint1: 'Think about cognition & language',
        hint2: 'Consider the MCAT application',
        explanation: 'Problem solving: algorithms (systematic) vs heuristics (shortcuts — availability, representativeness). Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia).'
      }
    }
  ]
}
