export const satProbSolvDataPart6Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Random sampling: every member has an equal chance of being selected.

Random assignment: participants are randomly placed in treatment groups.
      `
    },
    {
      id: 'sat-p6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Random sampling?',
            options: [
              'participants are randomly placed in treatment groups.',
              'every member has an equal chance of being selected.',
              'Observational study: no treatment applied — can show association but not causation.',
              'Experiment with random assignment: CAN establish causation.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Random sampling: every member has an equal chance of being selected. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'participants are randomly placed in treatment groups.',
              'every member has an equal chance of being selected.',
              'Observational study: no treatment applied — can show association but not causation.',
              'Experiment with random assignment: CAN establish causation.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Observational study: no treatment applied — can show association but not causation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Observational study: no treatment applied — can show association but not causation.

**SAT Tip:** Experiment with random assignment: CAN establish causation.
      `
    },
    {
      id: 'sat-p6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes SAT Tip?',
            options: [
              'participants are randomly placed in treatment groups.',
              'every member has an equal chance of being selected.',
              'Observational study: no treatment applied — can show association but not causation.',
              'Experiment with random assignment: CAN establish causation.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Experiment with random assignment: CAN establish causation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Random sampling',
            options: ['participants are randomly placed in treatment groups.', 'Observational study: no treatment applied — can show association but not causation.', 'Experiment with random assignment: CAN establish causation.', 'every member has an equal chance of being selected.']
          },
          {
            label: 'Random assignment',
            options: ['participants are randomly placed in treatment groups.', 'Observational study: no treatment applied — can show association but not causation.', 'Experiment with random assignment: CAN establish causation.', 'every member has an equal chance of being selected.']
          },
          {
            label: 'Key Insight',
            options: ['Experiment with random assignment: CAN establish causation.', 'participants are randomly placed in treatment groups.', 'every member has an equal chance of being selected.', 'Observational study: no treatment applied — can show association but not causation.']
          }
        ],
        correctAnswers: ['every member has an equal chance of being selected.', 'participants are randomly placed in treatment groups.', 'Observational study: no treatment applied — can show association but not causation.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Random sampling: every member has an equal chance of being selected. Random assignment: participants are randomly placed in treatment groups. Key Insight: Observational study: no treatment applied — can show association but not causation.'
      }
    }
  ]
}
