export const bioCellCommPart1Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
## Signal Transduction Overview

**Part 1 of 7 — Signal Transduction Overview**

1. Cells communicate through chemical signals
2. Three stages: reception, transduction, response
3. Signal molecules: hormones, neurotransmitters, growth factors
4. Specificity: only target cells with correct receptors respond
      `
    },
    {
      id: 'cell1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Cells communicate through chemical…?',
            options: [
              'Cells communicate only through chemicals that freely enter every cell',
              'Cells communicate only through direct electrical contact',
              'Cells communicate through chemical signals detected by receptors',
              'Cells communicate by exchanging chromosomes with neighbors'
            ],
            correctAnswer: 2,
            explanation: 'Cells communicate through chemical signals (ligands) that bind specific receptors on or in target cells; only cells with the right receptor respond.'
          },
          {
            question: 'Which of the following is true about Signal molecules?',
            options: [
              'They include ribosomes, chromosomes, and other organelles',
              'They include hormones, neurotransmitters, and growth factors',
              'They act on every cell in the body equally, regardless of receptors',
              'They include starch and glycogen used as fuel by target cells'
            ],
            correctAnswer: 1,
            explanation: 'Signal molecules (ligands) include hormones, neurotransmitters, and growth factors. They carry information rather than energy, and only cells with matching receptors respond.'
          }
        ]
      }
    },
    {
      id: 'cell1-detail-p1',
      type: 'text' as const,
      content: `
### Key Details

- **Cells communicate through chemical signals**
- **Three stages**: reception, transduction, response
- **Signal molecules**: hormones, neurotransmitters, growth factors
- **Specificity**: only target cells with correct receptors respond
      `
    },
    {
      id: 'cell1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Specificity?',
            options: [
              'Only target cells with the matching receptor respond',
              'Every cell exposed to a signal responds in the same way',
              'A single ligand can bind any receptor it happens to touch',
              'Each cell responds to a signal according to its unique genome'
            ],
            correctAnswer: 0,
            explanation: 'Specificity comes from receptors: only cells that express the receptor that fits a ligand respond to it. Body cells share the same genome but express different receptors.'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three stages',
            options: ['Cells communicate through chemical signals', 'only target cells with correct receptors respond', 'reception, transduction, response', 'hormones, neurotransmitters, growth factors']
          },
          {
            label: 'Signal molecules',
            options: ['reception, transduction, response', 'Cells communicate through chemical signals', 'hormones, neurotransmitters, growth factors', 'only target cells with correct receptors respond']
          },
          {
            label: 'Specificity',
            options: ['Cells communicate through chemical signals', 'reception, transduction, response', 'only target cells with correct receptors respond', 'hormones, neurotransmitters, growth factors']
          }
        ],
        correctAnswers: ['reception, transduction, response', 'hormones, neurotransmitters, growth factors', 'only target cells with correct receptors respond'],
        hint1: 'Think about what each concept specifically describes in Signal Transduction Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Signal Transduction Overview describes a specific idea. Three stages: reception, transduction, response. Signal molecules: hormones, neurotransmitters, growth factors. Specificity: only target cells with correct receptors respond.'
      }
    }
  ]
}
