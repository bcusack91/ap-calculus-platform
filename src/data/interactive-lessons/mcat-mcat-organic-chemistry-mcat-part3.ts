export const mcatOrgChemPart3Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Substitution & Elimination

**Part 3 of 7 — Substitution & Elimination**

SN1: two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent.

SN2: one step, backside attack, inversion of configuration, favored by 1-degree substrate and strong nucleophile.
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
            question: 'Which of the following best describes a key concept in substitution & elimination?',
            options: [
              'SN1: two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'SN1: two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1.

**MCAT Tip:** E2: one step, anti-periplanar geometry required, strong base needed, Zaitsev product preferred.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to substitution & elimination?',
            options: [
              'E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1'
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
            label: 'SN1',
            options: ['E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1.', 'two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent.', 'one step, backside attack, inversion of configuration, favored by 1-degree substrate and strong nucleophile.', 'E2: one step, anti-periplanar geometry required, strong base needed, Zaitsev product preferred.']
          },
          {
            label: 'SN2',
            options: ['one step, backside attack, inversion of configuration, favored by 1-degree substrate and strong nucleophile.', 'two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent.', 'E2: one step, anti-periplanar geometry required, strong base needed, Zaitsev product preferred.', 'E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1.']
          },
          {
            label: 'Key Insight',
            options: ['one step, backside attack, inversion of configuration, favored by 1-degree substrate and strong nucleophile.', 'E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1.', 'E2: one step, anti-periplanar geometry required, strong base needed, Zaitsev product preferred.', 'two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent.']
          }
        ],
        correctAnswers: ['two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent.', 'one step, backside attack, inversion of configuration, favored by 1-degree substrate and strong nucleophile.', 'E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1.'],
        hint1: 'Think about what each concept specifically describes in Substitution & Elimination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Substitution & Elimination describes a specific idea. SN1: two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent. SN2: one step, backside attack, inversion of configuration, favored by 1-degree substrate and strong nucleophile. Key Insight: E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1.'
      }
    }
  ]
}
