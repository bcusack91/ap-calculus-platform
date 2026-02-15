export const mcatOrgChemPart4Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Carbonyl Chemistry

**Part 4 of 7 — Carbonyl Chemistry**

Aldehydes (RCHO) are more reactive than ketones (RCOR) due to less steric hindrance.

Nucleophilic addition: nucleophile attacks electrophilic carbonyl carbon.
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
            question: 'Which of the following best describes a key concept in carbonyl chemistry?',
            options: [
              'Aldehydes (RCHO) are more reactive than ketones (RCOR) due to less steric hindrance',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Aldehydes (RCHO) are more reactive than ketones (RCOR) due to less steric hindrance'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Aldol condensation: alpha-carbon of one aldehyde attacks another to form beta-hydroxy carbonyl.

**MCAT Tip:** Hemiacetal/acetal formation: important for cyclic sugar chemistry on the MCAT.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to carbonyl chemistry?',
            options: [
              'Aldol condensation: alpha-carbon of one aldehyde attacks another to form beta-hydroxy carbonyl',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Aldol condensation: alpha-carbon of one aldehyde attacks another to form beta-hydroxy carbonyl'
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
            label: 'Core concept for Carbonyl Chemistry:',
            options: ['Aldehydes (RCHO) are more reactive than ketones (RCOR) due t', 'Nucleophilic addition: nucleophile attacks electrophilic car', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Aldol condensation: alpha-carbon of one aldehyde attacks ano', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Aldehydes (RCHO) are more reactive than ketones (RCOR) due t', 'Aldol condensation: alpha-carbon of one aldehyde attacks ano'],
        hint1: 'Think about carbonyl chemistry',
        hint2: 'Consider the MCAT application',
        explanation: 'Aldehydes (RCHO) are more reactive than ketones (RCOR) due to less steric hindrance. Aldol condensation: alpha-carbon of one aldehyde attacks another to form beta-hydroxy carbonyl.'
      }
    }
  ]
}
