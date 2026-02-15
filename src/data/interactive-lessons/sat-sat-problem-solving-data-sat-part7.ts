export const satProbSolvDataPart7Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Random sampling: every member has an equal chance of being selected.

Random assignment: participants are randomly placed in treatment groups.
      `
    },
    {
      id: 'sat-p7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes random sampling?',
            options: [
              'Random sampling is a fundamental concept in SAT Math',
              'Random assignment: participants are randomly placed in treatment groups',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Random sampling: every member has an equal chance of being selected'
          }
        ]
      }
    },
    {
      id: 'sat-p7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Observational study: no treatment applied — can show association but not causation.

**SAT Tip:** Experiment with random assignment: CAN establish causation.
      `
    },
    {
      id: 'sat-p7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Observational study: no treatment applied — can show association but not causation',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Observational study: no treatment applied — can show association but not causation'
          }
        ]
      }
    },
    {
      id: 'sat-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Random sampling: every member has an equal chance ', 'Random assignment: participants are randomly place', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Observational study: no treatment applied — can sh', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Random sampling: every member has an equal chance ', 'Observational study: no treatment applied — can sh'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Random sampling: every member has an equal chance of being selected. Observational study: no treatment applied — can show association but not causation.'
      }
    }
  ]
}
