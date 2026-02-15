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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Cell Signaling:',
            options: ['Signal transduction: ligand binds receptor, activates intrac', 'G-protein coupled receptors (GPCRs): activate G proteins whi', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Receptor tyrosine kinases (RTKs): dimerize and autophosphory', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Signal transduction: ligand binds receptor, activates intrac', 'Receptor tyrosine kinases (RTKs): dimerize and autophosphory'],
        hint1: 'Think about cell signaling',
        hint2: 'Consider the MCAT application',
        explanation: 'Signal transduction: ligand binds receptor, activates intracellular cascade, produces cellular response. Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding.'
      }
    }
  ]
}
