export const satExpressionPart3Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e3-intro',
      type: 'text' as const,
      content: `
# Transitions & Flow

**Part 3 of 7 — Transitions & Flow**

Transitions show relationships: addition, contrast, cause/effect, sequence.

However/nevertheless = contrast; Furthermore/moreover = addition.
      `
    },
    {
      id: 'sat-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Transitions show relationships?',
            options: [
              'Therefore/consequently = cause-effect; Similarly/likewise = comparison.',
              'However/nevertheless = contrast; Furthermore/moreover = addition.',
              'Choose transitions based on the logical relationship between ideas.',
              'addition, contrast, cause/effect, sequence.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Transitions show relationships: addition, contrast, cause/effect, sequence. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Transitions & Flow, which explains Key Insight?',
            options: [
              'However/nevertheless = contrast; Furthermore/moreover = addition.',
              'Choose transitions based on the logical relationship between ideas.',
              'Therefore/consequently = cause-effect; Similarly/likewise = comparison.',
              'addition, contrast, cause/effect, sequence.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Therefore/consequently = cause-effect; Similarly/likewise = comparison. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Therefore/consequently = cause-effect; Similarly/likewise = comparison.

**SAT Tip:** Choose transitions based on the logical relationship between ideas.
      `
    },
    {
      id: 'sat-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'addition, contrast, cause/effect, sequence.',
              'Therefore/consequently = cause-effect; Similarly/likewise = comparison.',
              'However/nevertheless = contrast; Furthermore/moreover = addition.',
              'Choose transitions based on the logical relationship between ideas.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Choose transitions based on the logical relationship between ideas. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transitions show relationships',
            options: ['Choose transitions based on the logical relationship between ideas.', 'Therefore/consequently = cause-effect; Similarly/likewise = comparison.', 'addition, contrast, cause/effect, sequence.', 'However/nevertheless = contrast; Furthermore/moreover = addition.']
          },
          {
            label: 'Key Insight',
            options: ['addition, contrast, cause/effect, sequence.', 'Choose transitions based on the logical relationship between ideas.', 'Therefore/consequently = cause-effect; Similarly/likewise = comparison.', 'However/nevertheless = contrast; Furthermore/moreover = addition.']
          },
          {
            label: 'SAT Tip',
            options: ['addition, contrast, cause/effect, sequence.', 'However/nevertheless = contrast; Furthermore/moreover = addition.', 'Therefore/consequently = cause-effect; Similarly/likewise = comparison.', 'Choose transitions based on the logical relationship between ideas.']
          }
        ],
        correctAnswers: ['addition, contrast, cause/effect, sequence.', 'Therefore/consequently = cause-effect; Similarly/likewise = comparison.', 'Choose transitions based on the logical relationship between ideas.'],
        hint1: 'Think about what each concept specifically describes in Transitions & Flow.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transitions & Flow describes a specific idea. Transitions show relationships: addition, contrast, cause/effect, sequence. Key Insight: Therefore/consequently = cause-effect; Similarly/likewise = comparison. SAT Tip: Choose transitions based on the logical relationship between ideas.'
      }
    }
  ]
}
