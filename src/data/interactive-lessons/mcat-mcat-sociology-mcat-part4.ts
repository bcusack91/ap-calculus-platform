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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conformity (Asch)',
            options: ['Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility.', 'Deviance: violation of social norms; labeling theory: societal reaction creates deviant identity.', 'people conform to group pressure even when the group is wrong.', 'people obey authority figures even when causing harm.']
          },
          {
            label: 'Obedience (Milgram)',
            options: ['people conform to group pressure even when the group is wrong.', 'Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility.', 'people obey authority figures even when causing harm.', 'Deviance: violation of social norms; labeling theory: societal reaction creates deviant identity.']
          },
          {
            label: 'Key Insight',
            options: ['people obey authority figures even when causing harm.', 'Deviance: violation of social norms; labeling theory: societal reaction creates deviant identity.', 'people conform to group pressure even when the group is wrong.', 'Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility.']
          }
        ],
        correctAnswers: ['people conform to group pressure even when the group is wrong.', 'people obey authority figures even when causing harm.', 'Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility.'],
        hint1: 'Think about what each concept specifically describes in Group Dynamics & Deviance.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Group Dynamics & Deviance describes a specific idea. Conformity (Asch): people conform to group pressure even when the group is wrong. Obedience (Milgram): people obey authority figures even when causing harm. Key Insight: Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility.'
      }
    }
  ]
}
