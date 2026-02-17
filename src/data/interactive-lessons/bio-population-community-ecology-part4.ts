export const bioPopulationPart4Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu4-intro-p4',
      type: 'text' as const,
      content: `
# ## Community Interactions

**Part 4 of 7 — Community Interactions**

1. Competition: -/- (both harmed)
2. Predation: +/- (predator benefits, prey harmed)
3. Mutualism: +/+ (both benefit)
4. Parasitism: +/- (parasite benefits, host harmed)
      `
    },
    {
      id: 'popu4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Competition?',
            options: [
              '+/- (parasite benefits, host harmed)',
              '-/- (both harmed)',
              '+/- (predator benefits, prey harmed)',
              '+/+ (both benefit)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Competition: -/- (both harmed). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Community Interactions, which explains Mutualism?',
            options: [
              '+/- (parasite benefits, host harmed)',
              '+/- (predator benefits, prey harmed)',
              '-/- (both harmed)',
              '+/+ (both benefit)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Mutualism: +/+ (both benefit). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'popu4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Competition**: -/- (both harmed)
- **Predation**: +/- (predator benefits, prey harmed)
- **Mutualism**: +/+ (both benefit)
- **Parasitism**: +/- (parasite benefits, host harmed)
      `
    },
    {
      id: 'popu4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Community Interactions, which correctly describes Parasitism?',
            options: [
              '+/+ (both benefit)',
              '+/- (parasite benefits, host harmed)',
              '+/- (predator benefits, prey harmed)',
              '-/- (both harmed)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Parasitism: +/- (parasite benefits, host harmed). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'popu4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Competition',
            options: ['+/+ (both benefit)', '+/- (predator benefits, prey harmed)', '-/- (both harmed)', '+/- (parasite benefits, host harmed)']
          },
          {
            label: 'Predation',
            options: ['-/- (both harmed)', '+/- (predator benefits, prey harmed)', '+/+ (both benefit)', '+/- (parasite benefits, host harmed)']
          },
          {
            label: 'Mutualism',
            options: ['+/- (parasite benefits, host harmed)', '+/- (predator benefits, prey harmed)', '-/- (both harmed)', '+/+ (both benefit)']
          }
        ],
        correctAnswers: ['-/- (both harmed)', '+/- (predator benefits, prey harmed)', '+/+ (both benefit)'],
        hint1: 'Think about what each concept specifically describes in Community Interactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Community Interactions describes a specific idea. Competition: -/- (both harmed). Predation: +/- (predator benefits, prey harmed). Mutualism: +/+ (both benefit).'
      }
    }
  ]
}
