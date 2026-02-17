export const mcatCellBioPart3Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Cell Signaling

**Part 3 of 7 — Cell Signaling**

Signal transduction: ligand binds receptor, activates intracellular cascade, produces cellular response.

G-protein coupled receptors (GPCRs): activate G proteins which activate effector enzymes.
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
            question: 'Which of the following best describes a key concept in cell signaling?',
            options: [
              'Signal transduction: ligand binds receptor, activates intracellular cascade, produces cellular response',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Signal transduction: ligand binds receptor, activates intracellular cascade, produces cellular response'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding.

**MCAT Tip:** Second messengers: cAMP, IP3, DAG, Ca2+ — amplify the signal inside the cell.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to cell signaling?',
            options: [
              'Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding'
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
            label: 'Signal transduction',
            options: ['Second messengers: cAMP, IP3, DAG, Ca2+ — amplify the signal inside the cell.', 'Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding.', 'ligand binds receptor, activates intracellular cascade, produces cellular response.', 'activate G proteins which activate effector enzymes.']
          },
          {
            label: 'G-protein coupled receptors (GPCRs)',
            options: ['activate G proteins which activate effector enzymes.', 'Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding.', 'Second messengers: cAMP, IP3, DAG, Ca2+ — amplify the signal inside the cell.', 'ligand binds receptor, activates intracellular cascade, produces cellular response.']
          },
          {
            label: 'Key Insight',
            options: ['Second messengers: cAMP, IP3, DAG, Ca2+ — amplify the signal inside the cell.', 'activate G proteins which activate effector enzymes.', 'Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding.', 'ligand binds receptor, activates intracellular cascade, produces cellular response.']
          }
        ],
        correctAnswers: ['ligand binds receptor, activates intracellular cascade, produces cellular response.', 'activate G proteins which activate effector enzymes.', 'Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding.'],
        hint1: 'Think about what each concept specifically describes in Cell Signaling.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Signaling describes a specific idea. Signal transduction: ligand binds receptor, activates intracellular cascade, produces cellular response. G-protein coupled receptors (GPCRs): activate G proteins which activate effector enzymes. Key Insight: Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding.'
      }
    }
  ]
}
