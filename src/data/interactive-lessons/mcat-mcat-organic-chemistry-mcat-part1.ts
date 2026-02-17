export const mcatOrgChemPart1Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Organic Chemistry

**Part 1 of 7 — Functional Groups & Nomenclature**

Key functional groups: hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH).

Naming: find the longest carbon chain, number from the end nearest the first substituent.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in functional groups & nomenclature?',
            options: [
              'Key functional groups: hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Key functional groups: hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH)'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds.

**MCAT Tip:** Functional group interconversions are heavily tested: alcohol to aldehyde to carboxylic acid.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to functional groups & nomenclature?',
            options: [
              'Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key functional groups',
            options: ['Functional group interconversions are heavily tested: alcohol to aldehyde to carboxylic acid.', 'find the longest carbon chain, number from the end nearest the first substituent.', 'hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH).', 'Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds.']
          },
          {
            label: 'Naming',
            options: ['hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH).', 'Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds.', 'Functional group interconversions are heavily tested: alcohol to aldehyde to carboxylic acid.', 'find the longest carbon chain, number from the end nearest the first substituent.']
          },
          {
            label: 'Key Insight',
            options: ['Functional group interconversions are heavily tested: alcohol to aldehyde to carboxylic acid.', 'hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH).', 'find the longest carbon chain, number from the end nearest the first substituent.', 'Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds.']
          }
        ],
        correctAnswers: ['hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH).', 'find the longest carbon chain, number from the end nearest the first substituent.', 'Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds.'],
        hint1: 'Think about what each concept specifically describes in Organic Chemistry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Organic Chemistry describes a specific idea. Key functional groups: hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH). Naming: find the longest carbon chain, number from the end nearest the first substituent. Key Insight: Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds.'
      }
    }
  ]
}
