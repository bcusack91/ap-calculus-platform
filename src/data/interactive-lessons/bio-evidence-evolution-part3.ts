export const bioEvidencePart3Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid3-intro-p3',
      type: 'text' as const,
      content: `
# ## Molecular Evidence

**Part 3 of 7 — Molecular Evidence**

1. DNA sequence similarities indicate relatedness
2. More similar sequences = more recent common ancestor
3. Universal genetic code: all life uses same codons
4. Molecular clocks: mutation rate estimates divergence time
      `
    },
    {
      id: 'evid3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "DNA sequence similarities indicate…" refer to in biology?',
            options: [
              'DNA sequence similarities indicate relatedness',
              'mutation rate estimates divergence time',
              'all life uses same codons',
              'More similar sequences = more recent common ancestor'
            ],
            correctAnswer: 0,
            explanation: 'Correct — DNA sequence similarities indicate relatedness. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Universal genetic code?',
            options: [
              'More similar sequences = more recent common ancestor',
              'all life uses same codons',
              'DNA sequence similarities indicate relatedness',
              'mutation rate estimates divergence time'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Universal genetic code: all life uses same codons. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'evid3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **DNA sequence similarities indicate relatedness**
- **More similar sequences = more recent common ancestor**
- **Universal genetic code**: all life uses same codons
- **Molecular clocks**: mutation rate estimates divergence time
      `
    },
    {
      id: 'evid3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Molecular clocks is correct?',
            options: [
              'all life uses same codons',
              'DNA sequence similarities indicate relatedness',
              'More similar sequences = more recent common ancestor',
              'mutation rate estimates divergence time'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Molecular clocks: mutation rate estimates divergence time. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'evid3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Universal genetic code',
            options: ['all life uses same codons', 'DNA sequence similarities indicate relatedness', 'More similar sequences = more recent common ancestor', 'mutation rate estimates divergence time']
          },
          {
            label: 'Molecular clocks',
            options: ['all life uses same codons', 'DNA sequence similarities indicate relatedness', 'mutation rate estimates divergence time', 'More similar sequences = more recent common ancestor']
          }
        ],
        correctAnswers: ['all life uses same codons', 'mutation rate estimates divergence time'],
        hint1: 'Think about what each concept specifically describes in Molecular Evidence.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Molecular Evidence describes a specific idea. Universal genetic code: all life uses same codons. Molecular clocks: mutation rate estimates divergence time.'
      }
    }
  ]
}
