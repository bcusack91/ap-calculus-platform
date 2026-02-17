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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Problem solving',
            options: ['algorithms (systematic) vs heuristics (shortcuts — availability, representativeness).', 'Cognitive biases: confirmation bias, anchoring, framing effect, hindsight bias.', 'Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia).', 'Chomsky (innate LAD) vs Skinner (operant conditioning).']
          },
          {
            label: 'Language development',
            options: ['Chomsky (innate LAD) vs Skinner (operant conditioning).', 'Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia).', 'algorithms (systematic) vs heuristics (shortcuts — availability, representativeness).', 'Cognitive biases: confirmation bias, anchoring, framing effect, hindsight bias.']
          },
          {
            label: 'Key Insight',
            options: ['Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia).', 'Cognitive biases: confirmation bias, anchoring, framing effect, hindsight bias.', 'Chomsky (innate LAD) vs Skinner (operant conditioning).', 'algorithms (systematic) vs heuristics (shortcuts — availability, representativeness).']
          }
        ],
        correctAnswers: ['algorithms (systematic) vs heuristics (shortcuts — availability, representativeness).', 'Chomsky (innate LAD) vs Skinner (operant conditioning).', 'Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia).'],
        hint1: 'Think about what each concept specifically describes in Cognition & Language.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cognition & Language describes a specific idea. Problem solving: algorithms (systematic) vs heuristics (shortcuts — availability, representativeness). Language development: Chomsky (innate LAD) vs Skinner (operant conditioning). Key Insight: Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia).'
      }
    }
  ]
}
