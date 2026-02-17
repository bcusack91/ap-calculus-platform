export const mcatGenChemPart2Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Chemical Bonding

**Part 2 of 7 — Chemical Bonding**

Ionic bonds form between metals and nonmetals via electron transfer; covalent bonds share electrons.

VSEPR theory predicts molecular geometry from electron pair repulsion around the central atom.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in chemical bonding?',
            options: [
              'Ionic bonds form between metals and nonmetals via electron transfer; covalent bonds share electrons',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Ionic bonds form between metals and nonmetals via electron transfer; covalent bonds share electrons'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Electronegativity differences determine bond polarity: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic.

**MCAT Tip:** Hybridization (sp, sp2, sp3) determines geometry: linear, trigonal planar, tetrahedral respectively.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to chemical bonding?',
            options: [
              'Electronegativity differences determine bond polarity: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Electronegativity differences determine bond polarity: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Hybridization (sp, sp2, sp3) determines geometry: linear, trigonal planar, tetrahedral respectively.', 'Electronegativity differences determine bond polarity: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic.', 'VSEPR theory predicts molecular geometry from electron pair repulsion around the central atom.', 'Ionic bonds form between metals and nonmetals via electron transfer; covalent bonds share electrons.']
          },
          {
            label: 'MCAT Tip',
            options: ['Ionic bonds form between metals and nonmetals via electron transfer; covalent bonds share electrons.', 'VSEPR theory predicts molecular geometry from electron pair repulsion around the central atom.', 'Hybridization (sp, sp2, sp3) determines geometry: linear, trigonal planar, tetrahedral respectively.', 'Electronegativity differences determine bond polarity: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic.']
          }
        ],
        correctAnswers: ['Electronegativity differences determine bond polarity: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic.', 'Hybridization (sp, sp2, sp3) determines geometry: linear, trigonal planar, tetrahedral respectively.'],
        hint1: 'Think about what each concept specifically describes in Chemical Bonding.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Chemical Bonding describes a specific idea. Key Insight: Electronegativity differences determine bond polarity: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic. MCAT Tip: Hybridization (sp, sp2, sp3) determines geometry: linear, trigonal planar, tetrahedral respectively.'
      }
    }
  ]
}
