export const bioPhotosynthesisPart2Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot2-intro-p2',
      type: 'text' as const,
      content: `
# ## Photosystems I & II

**Part 2 of 7 — Photosystems I & II**

1. PS II (P680): splits water, passes electrons to ETC
2. PS I (P700): reduces NADP⁺ to NADPH
3. Non-cyclic electron flow: H₂O → PS II → ETC → PS I → NADPH
4. Cyclic electron flow: PS I only, produces ATP only
      `
    },
    {
      id: 'phot2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "PS II (P680)" refer to in biology?',
            options: [
              'PS I only, produces ATP only',
              'splits water, passes electrons to ETC',
              'H₂O → PS II → ETC → PS I → NADPH',
              'reduces NADP⁺ to NADPH'
            ],
            correctAnswer: 1,
            explanation: 'Correct — PS II (P680): splits water, passes electrons to ETC. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Non-cyclic electron flow:',
            options: [
              'reduces NADP⁺ to NADPH',
              'splits water, passes electrons to ETC',
              'H₂O → PS II → ETC → PS I → NADPH',
              'PS I only, produces ATP only'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Non-cyclic electron flow: H₂O → PS II → ETC → PS I → NADPH. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'phot2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **PS II (P680)**: splits water, passes electrons to ETC
- **PS I (P700)**: reduces NADP⁺ to NADPH
- **Non-cyclic electron flow**: H₂O → PS II → ETC → PS I → NADPH
- **Cyclic electron flow**: PS I only, produces ATP only
      `
    },
    {
      id: 'phot2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Cyclic electron flow is correct?',
            options: [
              'splits water, passes electrons to ETC',
              'H₂O → PS II → ETC → PS I → NADPH',
              'PS I only, produces ATP only',
              'reduces NADP⁺ to NADPH'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Cyclic electron flow: PS I only, produces ATP only. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'phot2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'PS II (P680)',
            options: ['H₂O → PS II → ETC → PS I → NADPH', 'reduces NADP⁺ to NADPH', 'splits water, passes electrons to ETC', 'PS I only, produces ATP only']
          },
          {
            label: 'PS I (P700)',
            options: ['reduces NADP⁺ to NADPH', 'splits water, passes electrons to ETC', 'H₂O → PS II → ETC → PS I → NADPH', 'PS I only, produces ATP only']
          },
          {
            label: 'Non-cyclic electron flow',
            options: ['H₂O → PS II → ETC → PS I → NADPH', 'reduces NADP⁺ to NADPH', 'splits water, passes electrons to ETC', 'PS I only, produces ATP only']
          }
        ],
        correctAnswers: ['splits water, passes electrons to ETC', 'reduces NADP⁺ to NADPH', 'H₂O → PS II → ETC → PS I → NADPH'],
        hint1: 'Think about what each concept specifically describes in Photosystems I & II.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Photosystems I & II describes a specific idea. PS II (P680): splits water, passes electrons to ETC. PS I (P700): reduces NADP⁺ to NADPH. Non-cyclic electron flow: H₂O → PS II → ETC → PS I → NADPH.'
      }
    }
  ]
}
