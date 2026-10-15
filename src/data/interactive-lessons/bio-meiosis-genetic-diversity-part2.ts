export const bioMeiosisPart2Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio2-intro-p2',
      type: 'text' as const,
      content: `
## Meiosis I

**Part 2 of 7 — Meiosis I**

1. Homologous chromosomes pair up (synapsis)
2. Crossing over occurs during prophase I
3. Homologs align at metaphase plate (random orientation)
4. Homologous pairs separate in anaphase I (reductional division)
      `
    },
    {
      id: 'meio2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During prophase I, what happens that does NOT happen in prophase of mitosis?',
            options: [
              'Sister chromatids separate and move toward opposite poles',
              'The DNA in each chromosome is replicated for the first time',
              'Homologous chromosomes pair up closely in a process called synapsis',
              'The nuclear envelope breaks down and spindle fibers begin to form'
            ],
            correctAnswer: 2,
            explanation: 'Synapsis, the close pairing of homologous chromosomes, happens only in prophase I of meiosis and allows crossing over. Nuclear envelope breakdown and spindle formation occur in both mitosis and meiosis, DNA was already replicated in S phase, and sister chromatids do not separate until anaphase.'
          },
          {
            question: 'At metaphase I, how are the chromosomes arranged at the cell\'s equator?',
            options: [
              'Replicated chromosomes line up singly, just as they do in mitosis',
              'Homologous pairs line up, each pair oriented randomly toward the poles',
              'Homologous pairs line up with all maternal homologs facing one pole',
              'Homologous pairs line up with sister chromatids facing opposite poles'
            ],
            correctAnswer: 1,
            explanation: 'In metaphase I, homologous pairs (not single chromosomes) line up at the metaphase plate. Each pair\'s orientation is random and independent of the other pairs, which is the basis of independent assortment. Single chromosomes line up individually only in mitosis and meiosis II.'
          }
        ]
      }
    },
    {
      id: 'meio2-detail-p2',
      type: 'text' as const,
      content: `
### Key Details

- **Homologous chromosomes pair up (synapsis)**
- **Crossing over occurs during prophase I**
- **Homologs align at metaphase plate (random orientation)**
- **Homologous pairs separate in anaphase I (reductional division)**
      `
    },
    {
      id: 'meio2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which event makes meiosis I a reductional division?',
            options: [
              'Sister chromatids separate as cohesin at the centromere is cleaved',
              'Homologous chromosomes separate and move to opposite poles',
              'Crossing over removes chromosome segments from each homolog',
              'The cytoplasm divides unevenly, so one cell receives fewer chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'In anaphase I, homologous chromosomes separate, so each daughter cell receives only one member of each pair and the chromosome number is halved (2n to n). Sister chromatids stay together until meiosis II, and crossing over swaps segments without removing them.'
          }
        ]
      }
    },
    {
      id: 'meio2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Homologous chromosomes pair up…',
            options: ['Crossing over occurs during prophase I', 'Homologous chromosomes pair up (synapsis)', 'Homologs align at metaphase plate (random orientation)', 'Homologous pairs separate in anaphase I (reductional division)']
          },
          {
            label: 'Crossing over occurs during prophase I',
            options: ['Homologous pairs separate in anaphase I (reductional division)', 'Homologs align at metaphase plate (random orientation)', 'Crossing over occurs during prophase I', 'Homologous chromosomes pair up (synapsis)']
          },
          {
            label: 'Homologs align at metaphase plate…',
            options: ['Homologs align at metaphase plate (random orientation)', 'Crossing over occurs during prophase I', 'Homologous pairs separate in anaphase I (reductional division)', 'Homologous chromosomes pair up (synapsis)']
          }
        ],
        correctAnswers: ['Homologous chromosomes pair up (synapsis)', 'Crossing over occurs during prophase I', 'Homologs align at metaphase plate (random orientation)'],
        hint1: 'Think about what each concept specifically describes in Meiosis I.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Meiosis I describes a specific idea. Homologous chromosomes pair up (synapsis). Crossing over occurs during prophase I. Homologs align at metaphase plate (random orientation).'
      }
    }
  ]
}
