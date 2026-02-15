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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes 35 minutes, 44 questions across 4 passages?',
            options: [
              '35 minutes, 44 questions across 4 passages is a fundamental concept in SAT Reading & Writing',
              'Standard English Conventions: grammar, punctuation, sentence structure',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: '35 minutes, 44 questions across 4 passages'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for writing section overview?',
            options: [
              'Expression of Ideas: development, organization, effective language use',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Expression of Ideas: development, organization, effective language use'
          }
        ]
      }
    },
    {
      id: 'sat-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Writing Section Overview:',
            options: ['35 minutes, 44 questions across 4 passages', 'Standard English Conventions: grammar, punctuation', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Expression of Ideas: development, organization, ef', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['35 minutes, 44 questions across 4 passages', 'Expression of Ideas: development, organization, ef'],
        hint1: 'Think about writing section overview',
        hint2: 'Consider the best SAT strategy',
        explanation: '35 minutes, 44 questions across 4 passages. Expression of Ideas: development, organization, effective language use.'
      }
    }
  ]
}
