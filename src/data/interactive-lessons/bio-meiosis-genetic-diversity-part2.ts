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
            question: 'Which of the following correctly describes Homologous chromosomes pair up…?',
            options: [
              'Crossing over occurs during prophase I',
              'Homologous pairs separate in anaphase I (reductional division)',
              'Homologous chromosomes pair up (synapsis)',
              'Homologs align at metaphase plate (random orientation)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Homologous chromosomes pair up (synapsis). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Meiosis I, which explains Homologs align at metaphase plate…?',
            options: [
              'Homologous chromosomes pair up (synapsis)',
              'Homologs align at metaphase plate (random orientation)',
              'Crossing over occurs during prophase I',
              'Homologous pairs separate in anaphase I (reductional division)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Homologs align at metaphase plate (random orientation). Be careful to distinguish between the different concepts in this topic.'
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
            question: 'Which statement about Homologous pairs separate in anaphase I… is correct?',
            options: [
              'Homologous chromosomes pair up (synapsis)',
              'Homologous pairs separate in anaphase I (reductional division)',
              'Homologs align at metaphase plate (random orientation)',
              'Crossing over occurs during prophase I'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Homologous pairs separate in anaphase I (reductional division). Each option describes a real concept from this topic, so pay attention to the specific details.'
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
