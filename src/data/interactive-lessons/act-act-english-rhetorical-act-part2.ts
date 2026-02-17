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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Add a sentence if it" refer to in ACT prep?',
            options: [
              'is off-topic, redundant, or disrupts the argument.',
              'supports the main idea, provides relevant detail, improves flow.',
              'Read the paragraph with and without the sentence to decide.',
              'The question will state the purpose — match the answer to that specific goal.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Add a sentence if it: supports the main idea, provides relevant detail, improves flow. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Adding & Deleting Sentences, which explains Key Insight?',
            options: [
              'Read the paragraph with and without the sentence to decide.',
              'The question will state the purpose — match the answer to that specific goal.',
              'is off-topic, redundant, or disrupts the argument.',
              'supports the main idea, provides relevant detail, improves flow.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: The question will state the purpose — match the answer to that specific goal. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'is off-topic, redundant, or disrupts the argument.',
              'supports the main idea, provides relevant detail, improves flow.',
              'The question will state the purpose — match the answer to that specific goal.',
              'Read the paragraph with and without the sentence to decide.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Read the paragraph with and without the sentence to decide. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Add a sentence if it',
            options: ['The question will state the purpose — match the answer to that specific goal.', 'supports the main idea, provides relevant detail, improves flow.', 'Read the paragraph with and without the sentence to decide.', 'is off-topic, redundant, or disrupts the argument.']
          },
          {
            label: 'Delete a sentence if it',
            options: ['is off-topic, redundant, or disrupts the argument.', 'supports the main idea, provides relevant detail, improves flow.', 'The question will state the purpose — match the answer to that specific goal.', 'Read the paragraph with and without the sentence to decide.']
          },
          {
            label: 'Key Insight',
            options: ['Read the paragraph with and without the sentence to decide.', 'supports the main idea, provides relevant detail, improves flow.', 'is off-topic, redundant, or disrupts the argument.', 'The question will state the purpose — match the answer to that specific goal.']
          }
        ],
        correctAnswers: ['supports the main idea, provides relevant detail, improves flow.', 'is off-topic, redundant, or disrupts the argument.', 'The question will state the purpose — match the answer to that specific goal.'],
        hint1: 'Think about what each concept specifically describes in Adding & Deleting Sentences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Adding & Deleting Sentences describes a specific idea. Add a sentence if it: supports the main idea, provides relevant detail, improves flow. Delete a sentence if it: is off-topic, redundant, or disrupts the argument. Key Insight: The question will state the purpose — match the answer to that specific goal.'
      }
    }
  ]
}
