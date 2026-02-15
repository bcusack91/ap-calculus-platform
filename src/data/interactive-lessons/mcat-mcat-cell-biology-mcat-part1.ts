export const mcatCellBioPart1Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Cell Biology

**Part 1 of 7 — Cell Structure & Organelles**

Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not.

Nucleus: contains DNA; Mitochondria: ATP via oxidative phosphorylation; ER: protein/lipid synthesis.
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
            question: 'Which of the following best describes a key concept in cell structure & organelles?',
            options: [
              'Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification.

**MCAT Tip:** Golgi apparatus: modifies, sorts, and packages proteins for secretion or intracellular use.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to cell structure & organelles?',
            options: [
              'Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Cell Structure & Organelles:',
            options: ['Eukaryotic cells have membrane-bound organelles; prokaryotic', 'Nucleus: contains DNA; Mitochondria: ATP via oxidative phosp', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Rough ER: ribosome-studded, protein synthesis; Smooth ER: li', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Eukaryotic cells have membrane-bound organelles; prokaryotic', 'Rough ER: ribosome-studded, protein synthesis; Smooth ER: li'],
        hint1: 'Think about cell structure & organelles',
        hint2: 'Consider the MCAT application',
        explanation: 'Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not. Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification.'
      }
    }
  ]
}
