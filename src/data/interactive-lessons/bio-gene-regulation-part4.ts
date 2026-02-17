export const bioGeneRegPart4Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene4-intro-p4',
      type: 'text' as const,
      content: `
# ## Epigenetics

**Part 4 of 7 — Epigenetics**

1. DNA methylation: silences genes (adds CH₃ groups)
2. Histone modification: acetylation loosens chromatin (genes ON)
3. Heritable changes without DNA sequence changes
4. Environmental factors can cause epigenetic changes
      `
    },
    {
      id: 'gene4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "DNA methylation" refer to in biology?',
            options: [
              'Heritable changes without DNA sequence changes',
              'Environmental factors can cause epigenetic changes',
              'acetylation loosens chromatin (genes ON)',
              'silences genes (adds CH₃ groups)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — DNA methylation: silences genes (adds CH₃ groups). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Epigenetics, which explains Heritable changes without DNA sequence…?',
            options: [
              'Heritable changes without DNA sequence changes',
              'Environmental factors can cause epigenetic changes',
              'silences genes (adds CH₃ groups)',
              'acetylation loosens chromatin (genes ON)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Heritable changes without DNA sequence changes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'gene4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **DNA methylation**: silences genes (adds CH₃ groups)
- **Histone modification**: acetylation loosens chromatin (genes ON)
- **Heritable changes without DNA sequence changes**
- **Environmental factors can cause epigenetic changes**
      `
    },
    {
      id: 'gene4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Epigenetics, which correctly describes Environmental factors can cause…?',
            options: [
              'Environmental factors can cause epigenetic changes',
              'silences genes (adds CH₃ groups)',
              'acetylation loosens chromatin (genes ON)',
              'Heritable changes without DNA sequence changes'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Environmental factors can cause epigenetic changes. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'gene4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA methylation',
            options: ['silences genes (adds CH₃ groups)', 'Heritable changes without DNA sequence changes', 'acetylation loosens chromatin (genes ON)', 'Environmental factors can cause epigenetic changes']
          },
          {
            label: 'Histone modification',
            options: ['Heritable changes without DNA sequence changes', 'Environmental factors can cause epigenetic changes', 'acetylation loosens chromatin (genes ON)', 'silences genes (adds CH₃ groups)']
          }
        ],
        correctAnswers: ['silences genes (adds CH₃ groups)', 'acetylation loosens chromatin (genes ON)'],
        hint1: 'Think about what each concept specifically describes in Epigenetics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Epigenetics describes a specific idea. DNA methylation: silences genes (adds CH₃ groups). Histone modification: acetylation loosens chromatin (genes ON).'
      }
    }
  ]
}
