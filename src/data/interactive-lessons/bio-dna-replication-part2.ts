export const bioDnaReplicationPart2Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-2-intro-p2',
      type: 'text' as const,
      content: `
# ## Enzymes of Replication

**Part 2 of 7 — Enzymes of Replication**

1. Helicase: unwinds double helix
2. Primase: synthesizes RNA primer
3. DNA polymerase III: adds nucleotides 5'→3'
4. Ligase: seals gaps between Okazaki fragments
      `
    },
    {
      id: 'dna-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Helicase" refer to in biology?',
            options: [
              'seals gaps between Okazaki fragments',
              'synthesizes RNA primer',
              'adds nucleotides 5\'→3\'',
              'unwinds double helix'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Helicase: unwinds double helix. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Enzymes of Replication, which explains DNA polymerase III?',
            options: [
              'unwinds double helix',
              'synthesizes RNA primer',
              'seals gaps between Okazaki fragments',
              'adds nucleotides 5\'→3\''
            ],
            correctAnswer: 3,
            explanation: 'Correct — DNA polymerase III: adds nucleotides 5\'→3\'. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'dna-2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Helicase**: unwinds double helix
- **Primase**: synthesizes RNA primer
- **DNA polymerase III**: adds nucleotides 5'→3'
- **Ligase**: seals gaps between Okazaki fragments
      `
    },
    {
      id: 'dna-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Ligase?',
            options: [
              'seals gaps between Okazaki fragments',
              'synthesizes RNA primer',
              'unwinds double helix',
              'adds nucleotides 5\'→3\''
            ],
            correctAnswer: 0,
            explanation: 'Correct — Ligase: seals gaps between Okazaki fragments. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'dna-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Helicase',
            options: ['adds nucleotides 5\'→3\'', 'synthesizes RNA primer', 'seals gaps between Okazaki fragments', 'unwinds double helix']
          },
          {
            label: 'Primase',
            options: ['synthesizes RNA primer', 'adds nucleotides 5\'→3\'', 'unwinds double helix', 'seals gaps between Okazaki fragments']
          },
          {
            label: 'DNA polymerase III',
            options: ['unwinds double helix', 'synthesizes RNA primer', 'adds nucleotides 5\'→3\'', 'seals gaps between Okazaki fragments']
          }
        ],
        correctAnswers: ['unwinds double helix', 'synthesizes RNA primer', 'adds nucleotides 5\'→3\''],
        hint1: 'Think about what each concept specifically describes in Enzymes of Replication.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Enzymes of Replication describes a specific idea. Helicase: unwinds double helix. Primase: synthesizes RNA primer. DNA polymerase III: adds nucleotides 5\'→3\'.'
      }
    }
  ]
}
