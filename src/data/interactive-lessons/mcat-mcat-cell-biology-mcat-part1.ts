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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleus',
            options: ['contains DNA; Mitochondria: ATP via oxidative phosphorylation; ER: protein/lipid synthesis.', 'Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not.', 'Golgi apparatus: modifies, sorts, and packages proteins for secretion or intracellular use.', 'Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification.']
          },
          {
            label: 'Key Insight',
            options: ['Golgi apparatus: modifies, sorts, and packages proteins for secretion or intracellular use.', 'Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification.', 'contains DNA; Mitochondria: ATP via oxidative phosphorylation; ER: protein/lipid synthesis.', 'Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not.']
          },
          {
            label: 'MCAT Tip',
            options: ['Golgi apparatus: modifies, sorts, and packages proteins for secretion or intracellular use.', 'Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification.', 'contains DNA; Mitochondria: ATP via oxidative phosphorylation; ER: protein/lipid synthesis.', 'Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not.']
          }
        ],
        correctAnswers: ['contains DNA; Mitochondria: ATP via oxidative phosphorylation; ER: protein/lipid synthesis.', 'Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification.', 'Golgi apparatus: modifies, sorts, and packages proteins for secretion or intracellular use.'],
        hint1: 'Think about what each concept specifically describes in Cell Biology.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Biology describes a specific idea. Nucleus: contains DNA; Mitochondria: ATP via oxidative phosphorylation; ER: protein/lipid synthesis. Key Insight: Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification. MCAT Tip: Golgi apparatus: modifies, sorts, and packages proteins for secretion or intracellular use.'
      }
    }
  ]
}
