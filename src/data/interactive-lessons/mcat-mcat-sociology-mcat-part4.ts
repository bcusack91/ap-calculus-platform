export const mcatSociologyPart4Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Group Dynamics & Deviance

**Part 4 of 7 — Group Dynamics & Deviance**

Conformity (Asch): people conform to group pressure even when the group is wrong.

Obedience (Milgram): people obey authority figures even when causing harm.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in group dynamics & deviance?',
            options: [
              'Conformity (Asch): people conform to group pressure even when the group is wrong',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Conformity (Asch): people conform to group pressure even when the group is wrong'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility.

**MCAT Tip:** Deviance: violation of social norms; labeling theory: societal reaction creates deviant identity.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to group dynamics & deviance?',
            options: [
              'Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Group Dynamics & Deviance:',
            options: ['Conformity (Asch): people conform to group pressure even whe', 'Obedience (Milgram): people obey authority figures even when', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Groupthink: desire for harmony leads to poor decision-making', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Conformity (Asch): people conform to group pressure even whe', 'Groupthink: desire for harmony leads to poor decision-making'],
        hint1: 'Think about group dynamics & deviance',
        hint2: 'Consider the MCAT application',
        explanation: 'Conformity (Asch): people conform to group pressure even when the group is wrong. Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility.'
      }
    }
  ]
}
