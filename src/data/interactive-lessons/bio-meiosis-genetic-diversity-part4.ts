export const bioMeiosisPart4Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio4-intro-p4',
      type: 'text' as const,
      content: `
# ## Crossing Over & Recombination

**Part 4 of 7 — Crossing Over & Recombination**

1. Nonsister chromatids exchange segments
2. Occurs at chiasmata during prophase I
3. Creates recombinant chromosomes
4. Increases genetic variation in offspring
      `
    },
    {
      id: 'meio4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Nonsister chromatids exchange segments?',
            options: [
              'Increases genetic variation in offspring',
              'Creates recombinant chromosomes',
              'Occurs at chiasmata during prophase I',
              'Nonsister chromatids exchange segments'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Nonsister chromatids exchange segments. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Creates recombinant chromosomes?',
            options: [
              'Occurs at chiasmata during prophase I',
              'Increases genetic variation in offspring',
              'Nonsister chromatids exchange segments',
              'Creates recombinant chromosomes'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Creates recombinant chromosomes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'meio4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Nonsister chromatids exchange segments**
- **Occurs at chiasmata during prophase I**
- **Creates recombinant chromosomes**
- **Increases genetic variation in offspring**
      `
    },
    {
      id: 'meio4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Crossing Over & Recombination, which correctly describes Increases genetic variation in offspring?',
            options: [
              'Creates recombinant chromosomes',
              'Nonsister chromatids exchange segments',
              'Occurs at chiasmata during prophase I',
              'Increases genetic variation in offspring'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Increases genetic variation in offspring. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'meio4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nonsister chromatids exchange segments',
            options: ['Creates recombinant chromosomes', 'Increases genetic variation in offspring', 'Occurs at chiasmata during prophase I', 'Nonsister chromatids exchange segments']
          },
          {
            label: 'Occurs at chiasmata during prophase I',
            options: ['Creates recombinant chromosomes', 'Increases genetic variation in offspring', 'Nonsister chromatids exchange segments', 'Occurs at chiasmata during prophase I']
          },
          {
            label: 'Creates recombinant chromosomes',
            options: ['Increases genetic variation in offspring', 'Occurs at chiasmata during prophase I', 'Nonsister chromatids exchange segments', 'Creates recombinant chromosomes']
          }
        ],
        correctAnswers: ['Nonsister chromatids exchange segments', 'Occurs at chiasmata during prophase I', 'Creates recombinant chromosomes'],
        hint1: 'Think about what each concept specifically describes in Crossing Over & Recombination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Crossing Over & Recombination describes a specific idea. Nonsister chromatids exchange segments. Occurs at chiasmata during prophase I. Creates recombinant chromosomes.'
      }
    }
  ]
}
