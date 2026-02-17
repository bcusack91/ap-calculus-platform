export const bioEvidencePart1Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid1-intro-p1',
      type: 'text' as const,
      content: `
# ## Fossil Record

**Part 1 of 7 — Fossil Record**

1. Fossils show organisms changed over time
2. Transitional fossils: features of two groups (Tiktaalik, Archaeopteryx)
3. Radiometric dating determines fossil age
4. Fossil record shows increasing complexity over time
      `
    },
    {
      id: 'evid1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Fossils show organisms changed over time" refer to in biology?',
            options: [
              'Fossil record shows increasing complexity over time',
              'Fossils show organisms changed over time',
              'Radiometric dating determines fossil age',
              'features of two groups (Tiktaalik, Archaeopteryx)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Fossils show organisms changed over time. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Fossil Record, which explains Radiometric dating determines fossil age?',
            options: [
              'features of two groups (Tiktaalik, Archaeopteryx)',
              'Fossil record shows increasing complexity over time',
              'Fossils show organisms changed over time',
              'Radiometric dating determines fossil age'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Radiometric dating determines fossil age. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'evid1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fossils show organisms changed over time**
- **Transitional fossils**: features of two groups (Tiktaalik, Archaeopteryx)
- **Radiometric dating determines fossil age**
- **Fossil record shows increasing complexity over time**
      `
    },
    {
      id: 'evid1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Fossil record shows increasing…?',
            options: [
              'Radiometric dating determines fossil age',
              'features of two groups (Tiktaalik, Archaeopteryx)',
              'Fossil record shows increasing complexity over time',
              'Fossils show organisms changed over time'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Fossil record shows increasing complexity over time. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'evid1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fossils show organisms changed over time',
            options: ['features of two groups (Tiktaalik, Archaeopteryx)', 'Radiometric dating determines fossil age', 'Fossil record shows increasing complexity over time', 'Fossils show organisms changed over time']
          },
          {
            label: 'Transitional fossils',
            options: ['features of two groups (Tiktaalik, Archaeopteryx)', 'Fossils show organisms changed over time', 'Radiometric dating determines fossil age', 'Fossil record shows increasing complexity over time']
          },
          {
            label: 'Radiometric dating determines fossil age',
            options: ['Radiometric dating determines fossil age', 'Fossil record shows increasing complexity over time', 'features of two groups (Tiktaalik, Archaeopteryx)', 'Fossils show organisms changed over time']
          }
        ],
        correctAnswers: ['Fossils show organisms changed over time', 'features of two groups (Tiktaalik, Archaeopteryx)', 'Radiometric dating determines fossil age'],
        hint1: 'Think about what each concept specifically describes in Fossil Record.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fossil Record describes a specific idea. Fossils show organisms changed over time. Transitional fossils: features of two groups (Tiktaalik, Archaeopteryx). Radiometric dating determines fossil age.'
      }
    }
  ]
}
