export const bioPopulationPart3Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu3-intro-p3',
      type: 'text' as const,
      content: `
# ## Life History Strategies

**Part 3 of 7 — Life History Strategies**

1. r-selected: rapid reproduction, small offspring, little parental care
2. K-selected: slow reproduction, large offspring, extensive parental care
3. r-selected examples: insects, bacteria, annual plants
4. K-selected examples: elephants, whales, humans
      `
    },
    {
      id: 'popu3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "r-selected" refer to in biology?',
            options: [
              'insects, bacteria, annual plants',
              'slow reproduction, large offspring, extensive parental care',
              'rapid reproduction, small offspring, little parental care',
              'elephants, whales, humans'
            ],
            correctAnswer: 2,
            explanation: 'Correct — r-selected: rapid reproduction, small offspring, little parental care. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Life History Strategies, which explains r-selected examples?',
            options: [
              'rapid reproduction, small offspring, little parental care',
              'elephants, whales, humans',
              'slow reproduction, large offspring, extensive parental care',
              'insects, bacteria, annual plants'
            ],
            correctAnswer: 3,
            explanation: 'Correct — r-selected examples: insects, bacteria, annual plants. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'popu3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **r-selected**: rapid reproduction, small offspring, little parental care
- **K-selected**: slow reproduction, large offspring, extensive parental care
- **r-selected examples**: insects, bacteria, annual plants
- **K-selected examples**: elephants, whales, humans
      `
    },
    {
      id: 'popu3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about K-selected examples is correct?',
            options: [
              'rapid reproduction, small offspring, little parental care',
              'elephants, whales, humans',
              'insects, bacteria, annual plants',
              'slow reproduction, large offspring, extensive parental care'
            ],
            correctAnswer: 1,
            explanation: 'Correct — K-selected examples: elephants, whales, humans. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'popu3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'r-selected',
            options: ['rapid reproduction, small offspring, little parental care', 'insects, bacteria, annual plants', 'elephants, whales, humans', 'slow reproduction, large offspring, extensive parental care']
          },
          {
            label: 'K-selected',
            options: ['slow reproduction, large offspring, extensive parental care', 'insects, bacteria, annual plants', 'elephants, whales, humans', 'rapid reproduction, small offspring, little parental care']
          },
          {
            label: 'r-selected examples',
            options: ['rapid reproduction, small offspring, little parental care', 'elephants, whales, humans', 'insects, bacteria, annual plants', 'slow reproduction, large offspring, extensive parental care']
          }
        ],
        correctAnswers: ['rapid reproduction, small offspring, little parental care', 'slow reproduction, large offspring, extensive parental care', 'insects, bacteria, annual plants'],
        hint1: 'Think about what each concept specifically describes in Life History Strategies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Life History Strategies describes a specific idea. r-selected: rapid reproduction, small offspring, little parental care. K-selected: slow reproduction, large offspring, extensive parental care. r-selected examples: insects, bacteria, annual plants.'
      }
    }
  ]
}
