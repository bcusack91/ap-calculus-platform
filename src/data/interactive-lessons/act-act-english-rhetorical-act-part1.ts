export const actRhetoricalPart1Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e1-intro',
      type: 'text' as const,
      content: `
# 📋 English Rhetorical

**Part 1 of 7 — Transitions & Organization**

Transitions connect ideas: addition (furthermore), contrast (however), cause-effect (therefore).

Choose transitions based on the logical relationship between sentences.
      `
    },
    {
      id: 'act-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Transitions connect ideas" refer to in ACT prep?',
            options: [
              'Paragraph transitions: the first sentence should connect to the previous paragraph.',
              'Choose transitions based on the logical relationship between sentences.',
              'Sequence: first, then, finally, meanwhile, subsequently.',
              'addition (furthermore), contrast (however), cause-effect (therefore).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Transitions connect ideas: addition (furthermore), contrast (however), cause-effect (therefore). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Choose transitions based on the logical relationship between sentences.',
              'addition (furthermore), contrast (however), cause-effect (therefore).',
              'Paragraph transitions: the first sentence should connect to the previous paragraph.',
              'Sequence: first, then, finally, meanwhile, subsequently.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Paragraph transitions: the first sentence should connect to the previous paragraph. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Paragraph transitions: the first sentence should connect to the previous paragraph.

**ACT Tip:** Sequence: first, then, finally, meanwhile, subsequently.
      `
    },
    {
      id: 'act-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Sequence: first, then, finally, meanwhile, subsequently.',
              'Paragraph transitions: the first sentence should connect to the previous paragraph.',
              'addition (furthermore), contrast (however), cause-effect (therefore).',
              'Choose transitions based on the logical relationship between sentences.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Sequence: first, then, finally, meanwhile, subsequently. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transitions connect ideas',
            options: ['Choose transitions based on the logical relationship between sentences.', 'Paragraph transitions: the first sentence should connect to the previous paragraph.', 'addition (furthermore), contrast (however), cause-effect (therefore).', 'Sequence: first, then, finally, meanwhile, subsequently.']
          },
          {
            label: 'Key Insight',
            options: ['addition (furthermore), contrast (however), cause-effect (therefore).', 'Choose transitions based on the logical relationship between sentences.', 'Sequence: first, then, finally, meanwhile, subsequently.', 'Paragraph transitions: the first sentence should connect to the previous paragraph.']
          },
          {
            label: 'ACT Tip',
            options: ['addition (furthermore), contrast (however), cause-effect (therefore).', 'Sequence: first, then, finally, meanwhile, subsequently.', 'Paragraph transitions: the first sentence should connect to the previous paragraph.', 'Choose transitions based on the logical relationship between sentences.']
          }
        ],
        correctAnswers: ['addition (furthermore), contrast (however), cause-effect (therefore).', 'Paragraph transitions: the first sentence should connect to the previous paragraph.', 'Sequence: first, then, finally, meanwhile, subsequently.'],
        hint1: 'Think about what each concept specifically describes in English Rhetorical.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in English Rhetorical describes a specific idea. Transitions connect ideas: addition (furthermore), contrast (however), cause-effect (therefore). Key Insight: Paragraph transitions: the first sentence should connect to the previous paragraph. ACT Tip: Sequence: first, then, finally, meanwhile, subsequently.'
      }
    }
  ]
}
