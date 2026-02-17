export const mcatOrgChemPart5Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Carboxylic Acid Derivatives

**Part 5 of 7 — Carboxylic Acid Derivatives**

Order of reactivity: acid halide > anhydride > ester > amide (most to least reactive).

Nucleophilic acyl substitution: the leaving group departs as the nucleophile attacks.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in carboxylic acid derivatives?',
            options: [
              'Order of reactivity: acid halide > anhydride > ester > amide (most to least reactive)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Order of reactivity: acid halide > anhydride > ester > amide (most to least reactive)'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism.

**MCAT Tip:** Amide bond formation: condensation of carboxylic acid + amine — this is the peptide bond.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to carboxylic acid derivatives?',
            options: [
              'Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Order of reactivity',
            options: ['acid halide > anhydride > ester > amide (most to least reactive).', 'Amide bond formation: condensation of carboxylic acid + amine — this is the peptide bond.', 'the leaving group departs as the nucleophile attacks.', 'Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism.']
          },
          {
            label: 'Nucleophilic acyl substitution',
            options: ['acid halide > anhydride > ester > amide (most to least reactive).', 'Amide bond formation: condensation of carboxylic acid + amine — this is the peptide bond.', 'the leaving group departs as the nucleophile attacks.', 'Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism.']
          },
          {
            label: 'Key Insight',
            options: ['Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism.', 'acid halide > anhydride > ester > amide (most to least reactive).', 'Amide bond formation: condensation of carboxylic acid + amine — this is the peptide bond.', 'the leaving group departs as the nucleophile attacks.']
          }
        ],
        correctAnswers: ['acid halide > anhydride > ester > amide (most to least reactive).', 'the leaving group departs as the nucleophile attacks.', 'Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism.'],
        hint1: 'Think about what each concept specifically describes in Carboxylic Acid Derivatives.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Carboxylic Acid Derivatives describes a specific idea. Order of reactivity: acid halide > anhydride > ester > amide (most to least reactive). Nucleophilic acyl substitution: the leaving group departs as the nucleophile attacks. Key Insight: Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism.'
      }
    }
  ]
}
