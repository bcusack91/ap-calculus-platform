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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Symbolic interactionism',
            options: ['Looking-glass self (Cooley): self-concept based on how we think others perceive us.', 'meaning is created through social interaction and shared symbols.', 'life as a stage — front stage (public self) vs backstage (private self).', 'Social identity theory (Tajfel): in-group favoritism and out-group discrimination.']
          },
          {
            label: 'Dramaturgy (Goffman)',
            options: ['Social identity theory (Tajfel): in-group favoritism and out-group discrimination.', 'meaning is created through social interaction and shared symbols.', 'life as a stage — front stage (public self) vs backstage (private self).', 'Looking-glass self (Cooley): self-concept based on how we think others perceive us.']
          },
          {
            label: 'Key Insight',
            options: ['Social identity theory (Tajfel): in-group favoritism and out-group discrimination.', 'meaning is created through social interaction and shared symbols.', 'Looking-glass self (Cooley): self-concept based on how we think others perceive us.', 'life as a stage — front stage (public self) vs backstage (private self).']
          }
        ],
        correctAnswers: ['meaning is created through social interaction and shared symbols.', 'life as a stage — front stage (public self) vs backstage (private self).', 'Looking-glass self (Cooley): self-concept based on how we think others perceive us.'],
        hint1: 'Think about what each concept specifically describes in Social Interaction & Self.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Social Interaction & Self describes a specific idea. Symbolic interactionism: meaning is created through social interaction and shared symbols. Dramaturgy (Goffman): life as a stage — front stage (public self) vs backstage (private self). Key Insight: Looking-glass self (Cooley): self-concept based on how we think others perceive us.'
      }
    }
  ]
}
