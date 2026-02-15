export const mcatPhysElecPart7Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G.

Electrolytic cells: non-spontaneous, require external voltage, used for plating/purification.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
            options: [
              'Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G'
          }
        ]
      }
    },
    {
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions.

**MCAT Tip:** Standard reduction potentials: more positive = stronger oxidizing agent (wants to be reduced).
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to review & mcat practice?',
            options: [
              'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions'
          }
        ]
      }
    },
    {
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Review & MCAT Practice:',
            options: ['Galvanic (voltaic) cells: spontaneous redox, positive Ecell,', 'Electrolytic cells: non-spontaneous, require external voltag', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell poten', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Galvanic (voltaic) cells: spontaneous redox, positive Ecell,', 'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell poten'],
        hint1: 'Think about review & mcat practice',
        hint2: 'Consider the MCAT application',
        explanation: 'Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G. Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions.'
      }
    }
  ]
}
