export const mcatSciPassagePart7Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Extreme answer choices are usually wrong — the MCAT favors nuanced answers.

Just because data is presented in a passage does not mean it supports the answer.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
            options: [
              'Extreme answer choices are usually wrong — the MCAT favors nuanced answers',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Extreme answer choices are usually wrong — the MCAT favors nuanced answers'
          }
        ]
      }
    },
    {
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Answer the question being asked, not the question you think they should ask.

**MCAT Tip:** If two answers are opposites, one of them is likely correct.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to review & mcat practice?',
            options: [
              'Answer the question being asked, not the question you think they should ask',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Answer the question being asked, not the question you think they should ask'
          }
        ]
      }
    },
    {
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['If two answers are opposites, one of them is likely correct.', 'Just because data is presented in a passage does not mean it supports the answer.', 'Answer the question being asked, not the question you think they should ask.', 'Extreme answer choices are usually wrong — the MCAT favors nuanced answers.']
          },
          {
            label: 'MCAT Tip',
            options: ['Extreme answer choices are usually wrong — the MCAT favors nuanced answers.', 'Answer the question being asked, not the question you think they should ask.', 'Just because data is presented in a passage does not mean it supports the answer.', 'If two answers are opposites, one of them is likely correct.']
          }
        ],
        correctAnswers: ['Answer the question being asked, not the question you think they should ask.', 'If two answers are opposites, one of them is likely correct.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Key Insight: Answer the question being asked, not the question you think they should ask. MCAT Tip: If two answers are opposites, one of them is likely correct.'
      }
    }
  ]
}
