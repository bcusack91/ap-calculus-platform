export const actRhetoricalPart2Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e2-intro',
      type: 'text' as const,
      content: `
# Adding & Deleting Sentences

**Part 2 of 7 — Adding & Deleting Sentences**

Add a sentence if it: supports the main idea, provides relevant detail, improves flow.

Delete a sentence if it: is off-topic, redundant, or disrupts the argument.
      `
    },
    {
      id: 'act-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes add a sentence if it?',
            options: [
              'Add a sentence if it is a key concept for ACT English/Reading',
              'Delete a sentence if it: is off-topic, redundant, or disrupts the argument',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Add a sentence if it: supports the main idea, provides relevant detail, improves flow'
          }
        ]
      }
    },
    {
      id: 'act-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** The question will state the purpose — match the answer to that specific goal.

**ACT Tip:** Read the paragraph with and without the sentence to decide.
      `
    },
    {
      id: 'act-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for adding & deleting sentences?',
            options: [
              'The question will state the purpose — match the answer to that specific goal',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'The question will state the purpose — match the answer to that specific goal'
          }
        ]
      }
    },
    {
      id: 'act-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Adding & Deleting Sentences:',
            options: ['Add a sentence if it: supports the main idea, prov', 'Delete a sentence if it: is off-topic, redundant, ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['The question will state the purpose — match the an', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Add a sentence if it: supports the main idea, prov', 'The question will state the purpose — match the an'],
        hint1: 'Think about adding & deleting sentences',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Add a sentence if it: supports the main idea, provides relevant detail, improves flow. The question will state the purpose — match the answer to that specific goal.'
      }
    }
  ]
}
