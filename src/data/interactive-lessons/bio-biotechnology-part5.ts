export const bioBiotechPart5Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot5-intro-p5',
      type: 'text' as const,
      content: `
# ## Bioethics

**Part 5 of 7 — Bioethics**

1. GMO safety and environmental concerns
2. Gene therapy: somatic vs germline editing
3. Genetic privacy and discrimination
4. Designer babies and enhancement ethics
      `
    },
    {
      id: 'biot5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes GMO safety and environmental concerns?',
            options: [
              'Genetic privacy and discrimination',
              'somatic vs germline editing',
              'Designer babies and enhancement ethics',
              'GMO safety and environmental concerns'
            ],
            correctAnswer: 3,
            explanation: 'Correct — GMO safety and environmental concerns. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Genetic privacy and discrimination?',
            options: [
              'Designer babies and enhancement ethics',
              'somatic vs germline editing',
              'Genetic privacy and discrimination',
              'GMO safety and environmental concerns'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Genetic privacy and discrimination. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biot5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **GMO safety and environmental concerns**
- **Gene therapy**: somatic vs germline editing
- **Genetic privacy and discrimination**
- **Designer babies and enhancement ethics**
      `
    },
    {
      id: 'biot5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Designer babies and enhancement ethics?',
            options: [
              'somatic vs germline editing',
              'Genetic privacy and discrimination',
              'GMO safety and environmental concerns',
              'Designer babies and enhancement ethics'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Designer babies and enhancement ethics. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'biot5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'GMO safety and environmental concerns',
            options: ['Genetic privacy and discrimination', 'GMO safety and environmental concerns', 'Designer babies and enhancement ethics', 'somatic vs germline editing']
          },
          {
            label: 'Gene therapy',
            options: ['Genetic privacy and discrimination', 'somatic vs germline editing', 'Designer babies and enhancement ethics', 'GMO safety and environmental concerns']
          },
          {
            label: 'Genetic privacy and discrimination',
            options: ['Genetic privacy and discrimination', 'Designer babies and enhancement ethics', 'GMO safety and environmental concerns', 'somatic vs germline editing']
          }
        ],
        correctAnswers: ['GMO safety and environmental concerns', 'somatic vs germline editing', 'Genetic privacy and discrimination'],
        hint1: 'Think about what each concept specifically describes in Bioethics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Bioethics describes a specific idea. GMO safety and environmental concerns. Gene therapy: somatic vs germline editing. Genetic privacy and discrimination.'
      }
    }
  ]
}
