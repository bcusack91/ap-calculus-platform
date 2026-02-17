export const bioMeiosisPart1Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio1-intro-p1',
      type: 'text' as const,
      content: `
# ## Meiosis Overview

**Part 1 of 7 — Meiosis Overview**

1. Meiosis produces gametes (sex cells)
2. Reduces chromosome number by half (2n → n)
3. Two divisions: meiosis I and meiosis II
4. Results in 4 haploid daughter cells
      `
    },
    {
      id: 'meio1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Meiosis produces gametes (sex cells)?',
            options: [
              'meiosis I and meiosis II',
              'Meiosis produces gametes (sex cells)',
              'Results in 4 haploid daughter cells',
              'Reduces chromosome number by half (2n → n)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Meiosis produces gametes (sex cells). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Meiosis Overview, which explains Two divisions?',
            options: [
              'Meiosis produces gametes (sex cells)',
              'Results in 4 haploid daughter cells',
              'meiosis I and meiosis II',
              'Reduces chromosome number by half (2n → n)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Two divisions: meiosis I and meiosis II. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'meio1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Meiosis produces gametes (sex cells)**
- **Reduces chromosome number by half (2n → n)**
- **Two divisions**: meiosis I and meiosis II
- **Results in 4 haploid daughter cells**
      `
    },
    {
      id: 'meio1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Meiosis Overview, which correctly describes Results in 4 haploid daughter cells?',
            options: [
              'meiosis I and meiosis II',
              'Meiosis produces gametes (sex cells)',
              'Reduces chromosome number by half (2n → n)',
              'Results in 4 haploid daughter cells'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Results in 4 haploid daughter cells. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'meio1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Meiosis produces gametes (sex cells)',
            options: ['Reduces chromosome number by half (2n → n)', 'Results in 4 haploid daughter cells', 'meiosis I and meiosis II', 'Meiosis produces gametes (sex cells)']
          },
          {
            label: 'Reduces chromosome number by half (2n →…',
            options: ['Meiosis produces gametes (sex cells)', 'meiosis I and meiosis II', 'Reduces chromosome number by half (2n → n)', 'Results in 4 haploid daughter cells']
          },
          {
            label: 'Two divisions',
            options: ['Results in 4 haploid daughter cells', 'Reduces chromosome number by half (2n → n)', 'Meiosis produces gametes (sex cells)', 'meiosis I and meiosis II']
          }
        ],
        correctAnswers: ['Meiosis produces gametes (sex cells)', 'Reduces chromosome number by half (2n → n)', 'meiosis I and meiosis II'],
        hint1: 'Think about what each concept specifically describes in Meiosis Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Meiosis Overview describes a specific idea. Meiosis produces gametes (sex cells). Reduces chromosome number by half (2n → n). Two divisions: meiosis I and meiosis II.'
      }
    }
  ]
}
