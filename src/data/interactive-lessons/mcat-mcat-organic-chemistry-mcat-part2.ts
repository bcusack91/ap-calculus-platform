export const mcatOrgChemPart2Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Stereochemistry

**Part 2 of 7 — Stereochemistry**

Chirality: a carbon with 4 different substituents is a chiral center (stereocenter).

R/S configuration: assign priorities by atomic number (Cahn-Ingold-Prelog rules).
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
            question: 'Which of the following best describes a key concept in stereochemistry?',
            options: [
              'Chirality: a carbon with 4 different substituents is a chiral center (stereocenter)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Chirality: a carbon with 4 different substituents is a chiral center (stereocenter)'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation.

**MCAT Tip:** Diastereomers: stereoisomers that are NOT mirror images — different physical properties.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to stereochemistry?',
            options: [
              'Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation'
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
            label: 'Chirality',
            options: ['Diastereomers: stereoisomers that are NOT mirror images — different physical properties.', 'Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation.', 'assign priorities by atomic number (Cahn-Ingold-Prelog rules).', 'a carbon with 4 different substituents is a chiral center (stereocenter).']
          },
          {
            label: 'R/S configuration',
            options: ['assign priorities by atomic number (Cahn-Ingold-Prelog rules).', 'Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation.', 'Diastereomers: stereoisomers that are NOT mirror images — different physical properties.', 'a carbon with 4 different substituents is a chiral center (stereocenter).']
          },
          {
            label: 'Key Insight',
            options: ['Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation.', 'Diastereomers: stereoisomers that are NOT mirror images — different physical properties.', 'a carbon with 4 different substituents is a chiral center (stereocenter).', 'assign priorities by atomic number (Cahn-Ingold-Prelog rules).']
          }
        ],
        correctAnswers: ['a carbon with 4 different substituents is a chiral center (stereocenter).', 'assign priorities by atomic number (Cahn-Ingold-Prelog rules).', 'Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation.'],
        hint1: 'Think about what each concept specifically describes in Stereochemistry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Stereochemistry describes a specific idea. Chirality: a carbon with 4 different substituents is a chiral center (stereocenter). R/S configuration: assign priorities by atomic number (Cahn-Ingold-Prelog rules). Key Insight: Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation.'
      }
    }
  ]
}
