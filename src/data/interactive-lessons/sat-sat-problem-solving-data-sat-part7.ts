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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Random sampling?',
            options: [
              'participants are randomly placed in treatment groups.',
              'Observational study: no treatment applied — can show association but not causation.',
              'Experiment with random assignment: CAN establish causation.',
              'every member has an equal chance of being selected.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Random sampling: every member has an equal chance of being selected. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Key Insight?',
            options: [
              'participants are randomly placed in treatment groups.',
              'Observational study: no treatment applied — can show association but not causation.',
              'every member has an equal chance of being selected.',
              'Experiment with random assignment: CAN establish causation.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Observational study: no treatment applied — can show association but not causation. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Observational study: no treatment applied — can show association but not causation.',
              'participants are randomly placed in treatment groups.',
              'Experiment with random assignment: CAN establish causation.',
              'every member has an equal chance of being selected.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Experiment with random assignment: CAN establish causation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Random sampling',
            options: ['every member has an equal chance of being selected.', 'Observational study: no treatment applied — can show association but not causation.', 'Experiment with random assignment: CAN establish causation.', 'participants are randomly placed in treatment groups.']
          },
          {
            label: 'Random assignment',
            options: ['Experiment with random assignment: CAN establish causation.', 'Observational study: no treatment applied — can show association but not causation.', 'every member has an equal chance of being selected.', 'participants are randomly placed in treatment groups.']
          },
          {
            label: 'Key Insight',
            options: ['Experiment with random assignment: CAN establish causation.', 'participants are randomly placed in treatment groups.', 'Observational study: no treatment applied — can show association but not causation.', 'every member has an equal chance of being selected.']
          }
        ],
        correctAnswers: ['every member has an equal chance of being selected.', 'participants are randomly placed in treatment groups.', 'Observational study: no treatment applied — can show association but not causation.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Random sampling: every member has an equal chance of being selected. Random assignment: participants are randomly placed in treatment groups. Key Insight: Observational study: no treatment applied — can show association but not causation.'
      }
    }
  ]
}
