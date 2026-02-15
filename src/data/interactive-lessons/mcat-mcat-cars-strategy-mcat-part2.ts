export const mcatCarsStratPart2Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Active Reading Techniques

**Part 2 of 7 — Active Reading Techniques**

Annotate mentally: identify the thesis, supporting arguments, and counterarguments.

Look for transition words: however, moreover, nevertheless, conversely — they signal shifts.
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
            question: 'Which of the following best describes a key concept in active reading techniques?',
            options: [
              'Annotate mentally: identify the thesis, supporting arguments, and counterarguments',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Annotate mentally: identify the thesis, supporting arguments, and counterarguments'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?.

**MCAT Tip:** Paraphrase each paragraph in one sentence to ensure comprehension.
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
            question: 'What is an important principle for MCAT CARS related to active reading techniques?',
            options: [
              'Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?'
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
            label: 'Core concept for Active Reading Techniques:',
            options: ['Annotate mentally: identify the thesis, supporting arguments', 'Look for transition words: however, moreover, nevertheless, ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Note the authors tone: is it critical, supportive, neutral, ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Annotate mentally: identify the thesis, supporting arguments', 'Note the authors tone: is it critical, supportive, neutral, '],
        hint1: 'Think about active reading techniques',
        hint2: 'Consider the MCAT application',
        explanation: 'Annotate mentally: identify the thesis, supporting arguments, and counterarguments. Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?.'
      }
    }
  ]
}
