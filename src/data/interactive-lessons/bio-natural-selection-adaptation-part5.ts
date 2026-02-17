export const bioNatSelectionPart5Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu5-intro-p5',
      type: 'text' as const,
      content: `
# ## Genetic Drift & Gene Flow

**Part 5 of 7 — Genetic Drift & Gene Flow**

1. Genetic drift: random changes in allele frequency (stronger in small populations)
2. Bottleneck effect: population crash reduces genetic diversity
3. Founder effect: small group colonizes new area
4. Gene flow: migration of alleles between populations
      `
    },
    {
      id: 'natu5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Genetic drift?',
            options: [
              'small group colonizes new area',
              'population crash reduces genetic diversity',
              'random changes in allele frequency (stronger in small populations)',
              'migration of alleles between populations'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Genetic drift: random changes in allele frequency (stronger in small populations). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Founder effect:',
            options: [
              'random changes in allele frequency (stronger in small populations)',
              'small group colonizes new area',
              'population crash reduces genetic diversity',
              'migration of alleles between populations'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Founder effect: small group colonizes new area. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'natu5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Genetic drift**: random changes in allele frequency (stronger in small populations)
- **Bottleneck effect**: population crash reduces genetic diversity
- **Founder effect**: small group colonizes new area
- **Gene flow**: migration of alleles between populations
      `
    },
    {
      id: 'natu5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Genetic Drift & Gene Flow, which correctly describes Gene flow?',
            options: [
              'population crash reduces genetic diversity',
              'migration of alleles between populations',
              'small group colonizes new area',
              'random changes in allele frequency (stronger in small populations)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Gene flow: migration of alleles between populations. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'natu5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Genetic drift',
            options: ['migration of alleles between populations', 'population crash reduces genetic diversity', 'random changes in allele frequency (stronger in small populations)', 'small group colonizes new area']
          },
          {
            label: 'Bottleneck effect',
            options: ['migration of alleles between populations', 'random changes in allele frequency (stronger in small populations)', 'population crash reduces genetic diversity', 'small group colonizes new area']
          },
          {
            label: 'Founder effect',
            options: ['population crash reduces genetic diversity', 'small group colonizes new area', 'migration of alleles between populations', 'random changes in allele frequency (stronger in small populations)']
          }
        ],
        correctAnswers: ['random changes in allele frequency (stronger in small populations)', 'population crash reduces genetic diversity', 'small group colonizes new area'],
        hint1: 'Think about what each concept specifically describes in Genetic Drift & Gene Flow.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Genetic Drift & Gene Flow describes a specific idea. Genetic drift: random changes in allele frequency (stronger in small populations). Bottleneck effect: population crash reduces genetic diversity. Founder effect: small group colonizes new area.'
      }
    }
  ]
}
