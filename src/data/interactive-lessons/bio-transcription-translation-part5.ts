export const bioTranscriptionPart5Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran5-intro-p5',
      type: 'text' as const,
      content: `
## Post-Translational Modification

**Part 5 of 7 — Post-Translational Modification**

1. Protein folding (chaperones assist)
2. Chemical modifications: phosphorylation, glycosylation
3. Proteolytic cleavage (e.g., insulin from proinsulin)
4. Protein targeting and sorting
      `
    },
    {
      id: 'tran5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about how a new polypeptide folds is correct?',
            options: [
              'A polypeptide folds into its final shape, often helped by chaperones',
              'A polypeptide\'s shape is set by its ribosome rather than its sequence',
              'A polypeptide folds only after it has been secreted from the cell',
              'A polypeptide keeps the same linear shape it had on the ribosome'
            ],
            correctAnswer: 0,
            explanation: 'After (and during) translation, a polypeptide folds into its functional three-dimensional shape, which is determined by its amino acid sequence; chaperone proteins often assist by preventing misfolding. Folding happens inside the cell, and an unfolded linear chain would not be functional.'
          },
          {
            question: 'Which of the following is an example of proteolytic cleavage after translation?',
            options: [
              'Adding sugar groups to a protein inside the Golgi apparatus',
              'Adding a phosphate group to a protein to switch on its activity',
              'Cutting proinsulin to release the active hormone insulin',
              'Removing introns from a pre-mRNA before it is translated'
            ],
            correctAnswer: 2,
            explanation: 'Proteolytic cleavage activates a protein by cutting it: insulin is made as the inactive precursor proinsulin and is cut into the active hormone. Adding sugars (glycosylation) and phosphates (phosphorylation) are other post-translational modifications, and intron removal acts on RNA, not protein.'
          }
        ]
      }
    },
    {
      id: 'tran5-detail-p5',
      type: 'text' as const,
      content: `
### Key Details

- **Protein folding (chaperones assist)**
- **Chemical modifications**: phosphorylation, glycosylation
- **Proteolytic cleavage (e.g., insulin from proinsulin)**
- **Protein targeting and sorting**
      `
    },
    {
      id: 'tran5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Protein targeting and sorting is correct?',
            options: [
              'Every protein is made on ER-bound ribosomes and is then exported',
              'Signal sequences send proteins to places such as the ER or nucleus',
              'Proteins reach their destinations by random diffusion after folding',
              'Free ribosomes make only the proteins that the cell will secrete'
            ],
            correctAnswer: 1,
            explanation: 'Proteins carry signal sequences that direct them to their destinations; for example, a signal peptide sends a protein being made into the ER, and a nuclear localization signal directs it to the nucleus. Secreted proteins are made by ribosomes bound to the rough ER, while free ribosomes make most cytosolic proteins.'
          }
        ]
      }
    },
    {
      id: 'tran5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Protein folding (chaperones assist)',
            options: ['Protein targeting and sorting', 'phosphorylation, glycosylation', 'Protein folding (chaperones assist)', 'Proteolytic cleavage (e.g., insulin from proinsulin)']
          },
          {
            label: 'Chemical modifications',
            options: ['Protein targeting and sorting', 'Protein folding (chaperones assist)', 'phosphorylation, glycosylation', 'Proteolytic cleavage (e.g., insulin from proinsulin)']
          },
          {
            label: 'Proteolytic cleavage (e.g., insulin…',
            options: ['Protein folding (chaperones assist)', 'phosphorylation, glycosylation', 'Protein targeting and sorting', 'Proteolytic cleavage (e.g., insulin from proinsulin)']
          }
        ],
        correctAnswers: ['Protein folding (chaperones assist)', 'phosphorylation, glycosylation', 'Proteolytic cleavage (e.g., insulin from proinsulin)'],
        hint1: 'Think about what each concept specifically describes in Post-Translational Modification.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Post-Translational Modification describes a specific idea. Protein folding (chaperones assist). Chemical modifications: phosphorylation, glycosylation. Proteolytic cleavage (e.g., insulin from proinsulin).'
      }
    }
  ]
}
