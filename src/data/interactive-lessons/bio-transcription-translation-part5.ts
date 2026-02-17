export const bioTranscriptionPart5Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran5-intro-p5',
      type: 'text' as const,
      content: `
# ## Post-Translational Modification

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
            question: 'Which of the following correctly describes Protein folding (chaperones assist)?',
            options: [
              'Protein folding (chaperones assist)',
              'phosphorylation, glycosylation',
              'Protein targeting and sorting',
              'Proteolytic cleavage (e.g., insulin from proinsulin)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Protein folding (chaperones assist). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Proteolytic cleavage (e.g., insulin…?',
            options: [
              'Protein targeting and sorting',
              'Protein folding (chaperones assist)',
              'Proteolytic cleavage (e.g., insulin from proinsulin)',
              'phosphorylation, glycosylation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Proteolytic cleavage (e.g., insulin from proinsulin). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'tran5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

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
              'Proteolytic cleavage (e.g., insulin from proinsulin)',
              'Protein targeting and sorting',
              'phosphorylation, glycosylation',
              'Protein folding (chaperones assist)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Protein targeting and sorting. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
