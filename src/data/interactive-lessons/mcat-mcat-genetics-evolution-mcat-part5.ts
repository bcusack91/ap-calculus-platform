export const mcatGeneticsPart5Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Speciation & Phylogeny

**Part 5 of 7 — Speciation & Phylogeny**

Speciation: formation of new species via reproductive isolation.

Allopatric: geographic barrier; Sympatric: same location, different niches or timing.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in speciation & phylogeny?',
            options: [
              'Speciation: formation of new species via reproductive isolation',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Speciation: formation of new species via reproductive isolation'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point.

**MCAT Tip:** Homologous structures: shared ancestry; Analogous: similar function, different origin (convergent evolution).
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to speciation & phylogeny?',
            options: [
              'Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speciation',
            options: ['geographic barrier; Sympatric: same location, different niches or timing.', 'formation of new species via reproductive isolation.', 'Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point.', 'Homologous structures: shared ancestry; Analogous: similar function, different origin (convergent evolution).']
          },
          {
            label: 'Allopatric',
            options: ['Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point.', 'geographic barrier; Sympatric: same location, different niches or timing.', 'formation of new species via reproductive isolation.', 'Homologous structures: shared ancestry; Analogous: similar function, different origin (convergent evolution).']
          },
          {
            label: 'Key Insight',
            options: ['formation of new species via reproductive isolation.', 'Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point.', 'geographic barrier; Sympatric: same location, different niches or timing.', 'Homologous structures: shared ancestry; Analogous: similar function, different origin (convergent evolution).']
          }
        ],
        correctAnswers: ['formation of new species via reproductive isolation.', 'geographic barrier; Sympatric: same location, different niches or timing.', 'Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point.'],
        hint1: 'Think about what each concept specifically describes in Speciation & Phylogeny.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Speciation & Phylogeny describes a specific idea. Speciation: formation of new species via reproductive isolation. Allopatric: geographic barrier; Sympatric: same location, different niches or timing. Key Insight: Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point.'
      }
    }
  ]
}
