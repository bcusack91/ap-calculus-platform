export const mcatCarsPsgPart3Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Ethics & Philosophy

**Part 3 of 7 — Ethics & Philosophy**

Ethics passages present moral dilemmas or competing ethical frameworks.

Common frameworks: utilitarianism (outcomes), deontology (duties), virtue ethics (character).
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
            question: 'Which of the following best describes a key concept in ethics & philosophy?',
            options: [
              'Ethics passages present moral dilemmas or competing ethical frameworks',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Ethics passages present moral dilemmas or competing ethical frameworks'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Identify the authors position and the strongest counterargument.

**MCAT Tip:** MCAT does not test your personal ethics — only your comprehension of the argument.
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
            question: 'What is an important principle for MCAT CARS related to ethics & philosophy?',
            options: [
              'Identify the authors position and the strongest counterargument',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Identify the authors position and the strongest counterargument'
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
            label: 'Common frameworks',
            options: ['Identify the authors position and the strongest counterargument.', 'Ethics passages present moral dilemmas or competing ethical frameworks.', 'utilitarianism (outcomes), deontology (duties), virtue ethics (character).', 'MCAT does not test your personal ethics — only your comprehension of the argument.']
          },
          {
            label: 'Key Insight',
            options: ['utilitarianism (outcomes), deontology (duties), virtue ethics (character).', 'Ethics passages present moral dilemmas or competing ethical frameworks.', 'Identify the authors position and the strongest counterargument.', 'MCAT does not test your personal ethics — only your comprehension of the argument.']
          },
          {
            label: 'MCAT Tip',
            options: ['MCAT does not test your personal ethics — only your comprehension of the argument.', 'utilitarianism (outcomes), deontology (duties), virtue ethics (character).', 'Ethics passages present moral dilemmas or competing ethical frameworks.', 'Identify the authors position and the strongest counterargument.']
          }
        ],
        correctAnswers: ['utilitarianism (outcomes), deontology (duties), virtue ethics (character).', 'Identify the authors position and the strongest counterargument.', 'MCAT does not test your personal ethics — only your comprehension of the argument.'],
        hint1: 'Think about what each concept specifically describes in Ethics & Philosophy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ethics & Philosophy describes a specific idea. Common frameworks: utilitarianism (outcomes), deontology (duties), virtue ethics (character). Key Insight: Identify the authors position and the strongest counterargument. MCAT Tip: MCAT does not test your personal ethics — only your comprehension of the argument.'
      }
    }
  ]
}
