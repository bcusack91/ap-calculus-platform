export const bioEvidencePart4Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid4-intro-p4',
      type: 'text' as const,
      content: `
# ## Biogeography

**Part 4 of 7 — Biogeography**

1. Geographic distribution of species supports evolution
2. Island species resemble nearby mainland species
3. Continental drift explains distribution patterns
4. Endemic species: found only in one location
      `
    },
    {
      id: 'evid4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Geographic distribution of species…" refer to in biology?',
            options: [
              'found only in one location',
              'Geographic distribution of species supports evolution',
              'Island species resemble nearby mainland species',
              'Continental drift explains distribution patterns'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Geographic distribution of species supports evolution. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Continental drift explains distribution…?',
            options: [
              'found only in one location',
              'Continental drift explains distribution patterns',
              'Geographic distribution of species supports evolution',
              'Island species resemble nearby mainland species'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Continental drift explains distribution patterns. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'evid4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Geographic distribution of species supports evolution**
- **Island species resemble nearby mainland species**
- **Continental drift explains distribution patterns**
- **Endemic species**: found only in one location
      `
    },
    {
      id: 'evid4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Endemic species?',
            options: [
              'Geographic distribution of species supports evolution',
              'Continental drift explains distribution patterns',
              'found only in one location',
              'Island species resemble nearby mainland species'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Endemic species: found only in one location. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'evid4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geographic distribution of species…',
            options: ['Continental drift explains distribution patterns', 'Island species resemble nearby mainland species', 'found only in one location', 'Geographic distribution of species supports evolution']
          },
          {
            label: 'Island species resemble nearby mainland…',
            options: ['Continental drift explains distribution patterns', 'Island species resemble nearby mainland species', 'found only in one location', 'Geographic distribution of species supports evolution']
          },
          {
            label: 'Continental drift explains distribution…',
            options: ['Island species resemble nearby mainland species', 'Geographic distribution of species supports evolution', 'Continental drift explains distribution patterns', 'found only in one location']
          }
        ],
        correctAnswers: ['Geographic distribution of species supports evolution', 'Island species resemble nearby mainland species', 'Continental drift explains distribution patterns'],
        hint1: 'Think about what each concept specifically describes in Biogeography.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Biogeography describes a specific idea. Geographic distribution of species supports evolution. Island species resemble nearby mainland species. Continental drift explains distribution patterns.'
      }
    }
  ]
}
