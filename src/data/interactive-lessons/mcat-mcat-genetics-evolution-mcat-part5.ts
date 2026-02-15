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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Speciation & Phylogeny:',
            options: ['Speciation: formation of new species via reproductive isolat', 'Allopatric: geographic barrier; Sympatric: same location, di', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Phylogenetic trees: show evolutionary relationships; most re', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Speciation: formation of new species via reproductive isolat', 'Phylogenetic trees: show evolutionary relationships; most re'],
        hint1: 'Think about speciation & phylogeny',
        hint2: 'Consider the MCAT application',
        explanation: 'Speciation: formation of new species via reproductive isolation. Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point.'
      }
    }
  ]
}
