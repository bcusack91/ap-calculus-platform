export const mcatGenChemPart3Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Stoichiometry & Solutions

**Part 3 of 7 — Stoichiometry & Solutions**

Molarity (M) = moles of solute / liters of solution — the most common concentration unit on the MCAT.

Dilution: M1V1 = M2V2 — moles of solute remain constant.
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
            question: 'Which of the following best describes a key concept in stoichiometry & solutions?',
            options: [
              'Molarity (M) = moles of solute / liters of solution — the most common concentration unit on the MCAT',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Molarity (M) = moles of solute / liters of solution — the most common concentration unit on the MCAT'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Limiting reagent: the reactant that runs out first determines the maximum product.

**MCAT Tip:** Percent yield = (actual yield / theoretical yield) x 100.
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
            question: 'What is an important principle for MCAT Chem/Phys related to stoichiometry & solutions?',
            options: [
              'Limiting reagent: the reactant that runs out first determines the maximum product',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Limiting reagent: the reactant that runs out first determines the maximum product'
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
            label: 'Core concept for Stoichiometry & Solutions:',
            options: ['Molarity (M) = moles of solute / liters of solution — the mo', 'Dilution: M1V1 = M2V2 — moles of solute remain constant', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Limiting reagent: the reactant that runs out first determine', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Molarity (M) = moles of solute / liters of solution — the mo', 'Limiting reagent: the reactant that runs out first determine'],
        hint1: 'Think about stoichiometry & solutions',
        hint2: 'Consider the MCAT application',
        explanation: 'Molarity (M) = moles of solute / liters of solution — the most common concentration unit on the MCAT. Limiting reagent: the reactant that runs out first determines the maximum product.'
      }
    }
  ]
}
