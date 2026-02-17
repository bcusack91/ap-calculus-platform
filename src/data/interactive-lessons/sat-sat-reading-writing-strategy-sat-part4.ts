export const satRWStrategyPart4Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r4-intro',
      type: 'text' as const,
      content: `
# Writing Section Overview

**Part 4 of 7 — Writing Section Overview**

35 minutes, 44 questions across 4 passages.

Standard English Conventions: grammar, punctuation, sentence structure.
      `
    },
    {
      id: 'sat-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes 35 minutes, 44 questions across 4…?',
            options: [
              'Expression of Ideas: development, organization, effective language use.',
              'grammar, punctuation, sentence structure.',
              '35 minutes, 44 questions across 4 passages.',
              'Read the full sentence (and surrounding sentences) before answering.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — 35 minutes, 44 questions across 4 passages. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              '35 minutes, 44 questions across 4 passages.',
              'Read the full sentence (and surrounding sentences) before answering.',
              'Expression of Ideas: development, organization, effective language use.',
              'grammar, punctuation, sentence structure.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Expression of Ideas: development, organization, effective language use. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Expression of Ideas: development, organization, effective language use.

**SAT Tip:** Read the full sentence (and surrounding sentences) before answering.
      `
    },
    {
      id: 'sat-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              '35 minutes, 44 questions across 4 passages.',
              'grammar, punctuation, sentence structure.',
              'Read the full sentence (and surrounding sentences) before answering.',
              'Expression of Ideas: development, organization, effective language use.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Read the full sentence (and surrounding sentences) before answering. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Standard English Conventions',
            options: ['Expression of Ideas: development, organization, effective language use.', 'Read the full sentence (and surrounding sentences) before answering.', 'grammar, punctuation, sentence structure.', '35 minutes, 44 questions across 4 passages.']
          },
          {
            label: 'Key Insight',
            options: ['Expression of Ideas: development, organization, effective language use.', '35 minutes, 44 questions across 4 passages.', 'grammar, punctuation, sentence structure.', 'Read the full sentence (and surrounding sentences) before answering.']
          },
          {
            label: 'SAT Tip',
            options: ['Read the full sentence (and surrounding sentences) before answering.', 'grammar, punctuation, sentence structure.', '35 minutes, 44 questions across 4 passages.', 'Expression of Ideas: development, organization, effective language use.']
          }
        ],
        correctAnswers: ['grammar, punctuation, sentence structure.', 'Expression of Ideas: development, organization, effective language use.', 'Read the full sentence (and surrounding sentences) before answering.'],
        hint1: 'Think about what each concept specifically describes in Writing Section Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Writing Section Overview describes a specific idea. Standard English Conventions: grammar, punctuation, sentence structure. Key Insight: Expression of Ideas: development, organization, effective language use. SAT Tip: Read the full sentence (and surrounding sentences) before answering.'
      }
    }
  ]
}
