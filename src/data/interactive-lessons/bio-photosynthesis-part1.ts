export const bioPhotosynthesisPart1Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot1-intro-p1',
      type: 'text' as const,
      content: `
# ## Light Reactions Overview

**Part 1 of 7 — Light Reactions Overview**

1. Occur in thylakoid membranes
2. Light energy → ATP + NADPH + O₂
3. Water is split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂
4. Chlorophyll absorbs red and blue light, reflects green
      `
    },
    {
      id: 'phot1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Occur in thylakoid membranes" refer to in biology?',
            options: [
              'Light energy → ATP + NADPH + O₂',
              'Occur in thylakoid membranes',
              '2H₂O → 4H⁺ + 4e⁻ + O₂',
              'Chlorophyll absorbs red and blue light, reflects green'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Occur in thylakoid membranes. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Water is split (photolysis):',
            options: [
              'Chlorophyll absorbs red and blue light, reflects green',
              '2H₂O → 4H⁺ + 4e⁻ + O₂',
              'Occur in thylakoid membranes',
              'Light energy → ATP + NADPH + O₂'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Water is split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'phot1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Occur in thylakoid membranes**
- **Light energy → ATP + NADPH + O₂**
- **Water is split (photolysis)**: 2H₂O → 4H⁺ + 4e⁻ + O₂
- **Chlorophyll absorbs red and blue light, reflects green**
      `
    },
    {
      id: 'phot1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Light Reactions Overview, which correctly describes Chlorophyll absorbs red and blue light,…?',
            options: [
              '2H₂O → 4H⁺ + 4e⁻ + O₂',
              'Chlorophyll absorbs red and blue light, reflects green',
              'Occur in thylakoid membranes',
              'Light energy → ATP + NADPH + O₂'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Chlorophyll absorbs red and blue light, reflects green. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'phot1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Occur in thylakoid membranes',
            options: ['Occur in thylakoid membranes', '2H₂O → 4H⁺ + 4e⁻ + O₂', 'Chlorophyll absorbs red and blue light, reflects green', 'Light energy → ATP + NADPH + O₂']
          },
          {
            label: 'Light energy → ATP + NADPH + O₂',
            options: ['Chlorophyll absorbs red and blue light, reflects green', '2H₂O → 4H⁺ + 4e⁻ + O₂', 'Light energy → ATP + NADPH + O₂', 'Occur in thylakoid membranes']
          },
          {
            label: 'Water is split (photolysis)',
            options: ['Chlorophyll absorbs red and blue light, reflects green', 'Occur in thylakoid membranes', '2H₂O → 4H⁺ + 4e⁻ + O₂', 'Light energy → ATP + NADPH + O₂']
          }
        ],
        correctAnswers: ['Occur in thylakoid membranes', 'Light energy → ATP + NADPH + O₂', '2H₂O → 4H⁺ + 4e⁻ + O₂'],
        hint1: 'Think about what each concept specifically describes in Light Reactions Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Light Reactions Overview describes a specific idea. Occur in thylakoid membranes. Light energy → ATP + NADPH + O₂. Water is split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂.'
      }
    }
  ]
}
