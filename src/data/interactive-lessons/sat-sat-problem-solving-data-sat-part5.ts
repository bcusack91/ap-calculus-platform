export const satProbSolvDataPart5Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p5-intro',
      type: 'text' as const,
      content: `
# Survey & Experiment Design

**Part 5 of 7 — Survey & Experiment Design**

Random sampling: every member has an equal chance of being selected.

Random assignment: participants are randomly placed in treatment groups.
      `
    },
    {
      id: 'sat-p5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Random sampling?',
            options: [
              'every member has an equal chance of being selected.',
              'participants are randomly placed in treatment groups.',
              'Experiment with random assignment: CAN establish causation.',
              'Observational study: no treatment applied — can show association but not causation.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Random sampling: every member has an equal chance of being selected. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Experiment with random assignment: CAN establish causation.',
              'Observational study: no treatment applied — can show association but not causation.',
              'every member has an equal chance of being selected.',
              'participants are randomly placed in treatment groups.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Observational study: no treatment applied — can show association but not causation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Observational study: no treatment applied — can show association but not causation.

**SAT Tip:** Experiment with random assignment: CAN establish causation.
      `
    },
    {
      id: 'sat-p5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Experiment with random assignment: CAN establish causation.',
              'every member has an equal chance of being selected.',
              'Observational study: no treatment applied — can show association but not causation.',
              'participants are randomly placed in treatment groups.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Experiment with random assignment: CAN establish causation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Random sampling',
            options: ['participants are randomly placed in treatment groups.', 'every member has an equal chance of being selected.', 'Observational study: no treatment applied — can show association but not causation.', 'Experiment with random assignment: CAN establish causation.']
          },
          {
            label: 'Random assignment',
            options: ['Observational study: no treatment applied — can show association but not causation.', 'Experiment with random assignment: CAN establish causation.', 'participants are randomly placed in treatment groups.', 'every member has an equal chance of being selected.']
          },
          {
            label: 'Key Insight',
            options: ['Observational study: no treatment applied — can show association but not causation.', 'Experiment with random assignment: CAN establish causation.', 'participants are randomly placed in treatment groups.', 'every member has an equal chance of being selected.']
          }
        ],
        correctAnswers: ['every member has an equal chance of being selected.', 'participants are randomly placed in treatment groups.', 'Observational study: no treatment applied — can show association but not causation.'],
        hint1: 'Think about what each concept specifically describes in Survey & Experiment Design.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Survey & Experiment Design describes a specific idea. Random sampling: every member has an equal chance of being selected. Random assignment: participants are randomly placed in treatment groups. Key Insight: Observational study: no treatment applied — can show association but not causation.'
      }
    }
  ]
}
