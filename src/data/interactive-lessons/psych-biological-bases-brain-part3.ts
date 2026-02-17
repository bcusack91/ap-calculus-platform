export const psychBrainPart3Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo3-intro',
      type: 'text' as const,
      content: `
# ## The Nervous System

**Part 3 of 7 — The Nervous System**

### 1. Central NS

brain + spinal cord

### 2. Peripheral NS

somatic (voluntary) + autonomic (involuntary)

### 3. Sympathetic

fight-or-flight

### 4. Parasympathetic

rest-and-digest
      `
    },
    {
      id: 'biolo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Central NS?',
            options: [
              'somatic (voluntary) + autonomic (involuntary)',
              'brain + spinal cord',
              'rest-and-digest',
              'fight-or-flight'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Central NS: brain + spinal cord. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of The Nervous System, which explains Sympathetic?',
            options: [
              'somatic (voluntary) + autonomic (involuntary)',
              'rest-and-digest',
              'brain + spinal cord',
              'fight-or-flight'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Sympathetic: fight-or-flight. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biolo3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Central NS**: brain + spinal cord
- **Peripheral NS**: somatic (voluntary) + autonomic (involuntary)
- **Sympathetic**: fight-or-flight
- **Parasympathetic**: rest-and-digest
      `
    },
    {
      id: 'biolo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to the nervous system?',
            options: [
              'rest-and-digest',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Parasympathetic: rest-and-digest'
          }
        ]
      }
    },
    {
      id: 'biolo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central NS',
            options: ['brain + spinal cord', 'somatic (voluntary) + autonomic (involuntary)', 'rest-and-digest', 'fight-or-flight']
          },
          {
            label: 'Peripheral NS',
            options: ['rest-and-digest', 'fight-or-flight', 'brain + spinal cord', 'somatic (voluntary) + autonomic (involuntary)']
          },
          {
            label: 'Sympathetic',
            options: ['rest-and-digest', 'fight-or-flight', 'brain + spinal cord', 'somatic (voluntary) + autonomic (involuntary)']
          }
        ],
        correctAnswers: ['brain + spinal cord', 'somatic (voluntary) + autonomic (involuntary)', 'fight-or-flight'],
        hint1: 'Think about what each concept specifically describes in The Nervous System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in The Nervous System describes a specific idea. Central NS: brain + spinal cord. Peripheral NS: somatic (voluntary) + autonomic (involuntary). Sympathetic: fight-or-flight.'
      }
    }
  ]
}
