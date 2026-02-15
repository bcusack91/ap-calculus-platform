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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Ethics & Philosophy:',
            options: ['Ethics passages present moral dilemmas or competing ethical ', 'Common frameworks: utilitarianism (outcomes), deontology (du', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Identify the authors position and the strongest counterargum', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Ethics passages present moral dilemmas or competing ethical ', 'Identify the authors position and the strongest counterargum'],
        hint1: 'Think about ethics & philosophy',
        hint2: 'Consider the MCAT application',
        explanation: 'Ethics passages present moral dilemmas or competing ethical frameworks. Identify the authors position and the strongest counterargument.'
      }
    }
  ]
}
