export const bioGeneRegPart5Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene5-intro-p5',
      type: 'text' as const,
      content: `
# ## RNA Interference

**Part 5 of 7 — RNA Interference**

1. Small RNA molecules (miRNA, siRNA) silence genes
2. miRNA binds complementary mRNA → blocks translation
3. siRNA triggers mRNA degradation
4. Post-transcriptional regulation
      `
    },
    {
      id: 'gene5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Small RNA molecules (miRNA, siRNA)…" refer to in biology?',
            options: [
              'miRNA binds complementary mRNA → blocks translation',
              'Small RNA molecules (miRNA, siRNA) silence genes',
              'Post-transcriptional regulation',
              'siRNA triggers mRNA degradation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Small RNA molecules (miRNA, siRNA) silence genes. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of RNA Interference, which explains siRNA triggers mRNA degradation?',
            options: [
              'siRNA triggers mRNA degradation',
              'Small RNA molecules (miRNA, siRNA) silence genes',
              'miRNA binds complementary mRNA → blocks translation',
              'Post-transcriptional regulation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — siRNA triggers mRNA degradation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'gene5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Small RNA molecules (miRNA, siRNA) silence genes**
- **miRNA binds complementary mRNA → blocks translation**
- **siRNA triggers mRNA degradation**
- **Post-transcriptional regulation**
      `
    },
    {
      id: 'gene5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Post-transcriptional regulation?',
            options: [
              'Post-transcriptional regulation',
              'siRNA triggers mRNA degradation',
              'Small RNA molecules (miRNA, siRNA) silence genes',
              'miRNA binds complementary mRNA → blocks translation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Post-transcriptional regulation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'gene5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Small RNA molecules (miRNA, siRNA)…',
            options: ['siRNA triggers mRNA degradation', 'miRNA binds complementary mRNA → blocks translation', 'Post-transcriptional regulation', 'Small RNA molecules (miRNA, siRNA) silence genes']
          },
          {
            label: 'miRNA binds complementary mRNA → blocks…',
            options: ['miRNA binds complementary mRNA → blocks translation', 'Small RNA molecules (miRNA, siRNA) silence genes', 'Post-transcriptional regulation', 'siRNA triggers mRNA degradation']
          },
          {
            label: 'siRNA triggers mRNA degradation',
            options: ['miRNA binds complementary mRNA → blocks translation', 'Post-transcriptional regulation', 'Small RNA molecules (miRNA, siRNA) silence genes', 'siRNA triggers mRNA degradation']
          }
        ],
        correctAnswers: ['Small RNA molecules (miRNA, siRNA) silence genes', 'miRNA binds complementary mRNA → blocks translation', 'siRNA triggers mRNA degradation'],
        hint1: 'Think about what each concept specifically describes in RNA Interference.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in RNA Interference describes a specific idea. Small RNA molecules (miRNA, siRNA) silence genes. miRNA binds complementary mRNA → blocks translation. siRNA triggers mRNA degradation.'
      }
    }
  ]
}
