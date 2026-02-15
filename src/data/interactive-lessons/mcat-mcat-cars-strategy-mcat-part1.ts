export const mcatCarsStratPart1Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Cars Strategy

**Part 1 of 7 — CARS Overview & Approach**

CARS = 53 questions in 90 minutes across 9 passages — NO outside knowledge needed.

Passages come from humanities, social sciences, ethics, philosophy, and cultural studies.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in cars overview & approach?',
            options: [
              'CARS = 53 questions in 90 minutes across 9 passages — NO outside knowledge needed',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'CARS = 53 questions in 90 minutes across 9 passages — NO outside knowledge needed'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Read the passage FIRST, then answer questions — do not skim.

**MCAT Tip:** Build a mental outline: what is each paragraphs purpose?.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to cars overview & approach?',
            options: [
              'Read the passage FIRST, then answer questions — do not skim',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Read the passage FIRST, then answer questions — do not skim'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for CARS Overview & Approach:',
            options: ['CARS = 53 questions in 90 minutes across 9 passages — NO out', 'Passages come from humanities, social sciences, ethics, phil', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Read the passage FIRST, then answer questions — do not skim', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['CARS = 53 questions in 90 minutes across 9 passages — NO out', 'Read the passage FIRST, then answer questions — do not skim'],
        hint1: 'Think about cars overview & approach',
        hint2: 'Consider the MCAT application',
        explanation: 'CARS = 53 questions in 90 minutes across 9 passages — NO outside knowledge needed. Read the passage FIRST, then answer questions — do not skim.'
      }
    }
  ]
}
