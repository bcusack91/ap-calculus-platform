export const bioPhotosynthesisPart4Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot4-intro-p4',
      type: 'text' as const,
      content: `
# ## C4 & CAM Plants

**Part 4 of 7 — C4 & CAM Plants**

1. C3 plants: Calvin cycle directly (most plants)
2. C4 plants: fix CO₂ in mesophyll, Calvin cycle in bundle sheath
3. CAM plants: fix CO₂ at night, Calvin cycle by day
4. C4 and CAM adaptations reduce photorespiration
      `
    },
    {
      id: 'phot4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "C3 plants" refer to in biology?',
            options: [
              'C4 and CAM adaptations reduce photorespiration',
              'Calvin cycle directly (most plants)',
              'fix CO₂ in mesophyll, Calvin cycle in bundle sheath',
              'fix CO₂ at night, Calvin cycle by day'
            ],
            correctAnswer: 1,
            explanation: 'Correct — C3 plants: Calvin cycle directly (most plants). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes CAM plants:',
            options: [
              'fix CO₂ in mesophyll, Calvin cycle in bundle sheath',
              'fix CO₂ at night, Calvin cycle by day',
              'Calvin cycle directly (most plants)',
              'C4 and CAM adaptations reduce photorespiration'
            ],
            correctAnswer: 1,
            explanation: 'Correct — CAM plants: fix CO₂ at night, Calvin cycle by day. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'phot4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **C3 plants**: Calvin cycle directly (most plants)
- **C4 plants**: fix CO₂ in mesophyll, Calvin cycle in bundle sheath
- **CAM plants**: fix CO₂ at night, Calvin cycle by day
- **C4 and CAM adaptations reduce photorespiration**
      `
    },
    {
      id: 'phot4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding C4 & CAM Plants, which correctly describes C4 and CAM adaptations reduce…?',
            options: [
              'C4 and CAM adaptations reduce photorespiration',
              'fix CO₂ at night, Calvin cycle by day',
              'Calvin cycle directly (most plants)',
              'fix CO₂ in mesophyll, Calvin cycle in bundle sheath'
            ],
            correctAnswer: 0,
            explanation: 'Correct — C4 and CAM adaptations reduce photorespiration. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'phot4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'C3 plants',
            options: ['fix CO₂ at night, Calvin cycle by day', 'C4 and CAM adaptations reduce photorespiration', 'Calvin cycle directly (most plants)', 'fix CO₂ in mesophyll, Calvin cycle in bundle sheath']
          },
          {
            label: 'C4 plants',
            options: ['fix CO₂ in mesophyll, Calvin cycle in bundle sheath', 'fix CO₂ at night, Calvin cycle by day', 'C4 and CAM adaptations reduce photorespiration', 'Calvin cycle directly (most plants)']
          },
          {
            label: 'CAM plants',
            options: ['Calvin cycle directly (most plants)', 'C4 and CAM adaptations reduce photorespiration', 'fix CO₂ at night, Calvin cycle by day', 'fix CO₂ in mesophyll, Calvin cycle in bundle sheath']
          }
        ],
        correctAnswers: ['Calvin cycle directly (most plants)', 'fix CO₂ in mesophyll, Calvin cycle in bundle sheath', 'fix CO₂ at night, Calvin cycle by day'],
        hint1: 'Think about what each concept specifically describes in C4 & CAM Plants.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in C4 & CAM Plants describes a specific idea. C3 plants: Calvin cycle directly (most plants). C4 plants: fix CO₂ in mesophyll, Calvin cycle in bundle sheath. CAM plants: fix CO₂ at night, Calvin cycle by day.'
      }
    }
  ]
}
