export const mcatSociologyPart3Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Social Interaction & Self

**Part 3 of 7 — Social Interaction & Self**

Symbolic interactionism: meaning is created through social interaction and shared symbols.

Dramaturgy (Goffman): life as a stage — front stage (public self) vs backstage (private self).
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in social interaction & self?',
            options: [
              'Symbolic interactionism: meaning is created through social interaction and shared symbols',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Symbolic interactionism: meaning is created through social interaction and shared symbols'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Looking-glass self (Cooley): self-concept based on how we think others perceive us.

**MCAT Tip:** Social identity theory (Tajfel): in-group favoritism and out-group discrimination.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to social interaction & self?',
            options: [
              'Looking-glass self (Cooley): self-concept based on how we think others perceive us',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Looking-glass self (Cooley): self-concept based on how we think others perceive us'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Social Interaction & Self:',
            options: ['Symbolic interactionism: meaning is created through social i', 'Dramaturgy (Goffman): life as a stage — front stage (public ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Looking-glass self (Cooley): self-concept based on how we th', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Symbolic interactionism: meaning is created through social i', 'Looking-glass self (Cooley): self-concept based on how we th'],
        hint1: 'Think about social interaction & self',
        hint2: 'Consider the MCAT application',
        explanation: 'Symbolic interactionism: meaning is created through social interaction and shared symbols. Looking-glass self (Cooley): self-concept based on how we think others perceive us.'
      }
    }
  ]
}
