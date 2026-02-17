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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Annotate mentally',
            options: ['Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?.', 'however, moreover, nevertheless, conversely — they signal shifts.', 'identify the thesis, supporting arguments, and counterarguments.', 'Paraphrase each paragraph in one sentence to ensure comprehension.']
          },
          {
            label: 'Look for transition words',
            options: ['Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?.', 'however, moreover, nevertheless, conversely — they signal shifts.', 'Paraphrase each paragraph in one sentence to ensure comprehension.', 'identify the thesis, supporting arguments, and counterarguments.']
          },
          {
            label: 'Key Insight',
            options: ['however, moreover, nevertheless, conversely — they signal shifts.', 'identify the thesis, supporting arguments, and counterarguments.', 'Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?.', 'Paraphrase each paragraph in one sentence to ensure comprehension.']
          }
        ],
        correctAnswers: ['identify the thesis, supporting arguments, and counterarguments.', 'however, moreover, nevertheless, conversely — they signal shifts.', 'Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?.'],
        hint1: 'Think about what each concept specifically describes in Active Reading Techniques.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Active Reading Techniques describes a specific idea. Annotate mentally: identify the thesis, supporting arguments, and counterarguments. Look for transition words: however, moreover, nevertheless, conversely — they signal shifts. Key Insight: Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?.'
      }
    }
  ]
}
