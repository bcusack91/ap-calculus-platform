export const psychSensationPart1Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensa1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation & Sensory Processing

**Part 1 of 7 — Introduction to Sensation**

### 1. Sensation

detecting stimuli

### 2. Perception

interpreting stimuli

### 3. Transduction

converting physical energy to neural signals

### 4. Bottom-up vs top-down processing

Bottom-up vs top-down processing
      `
    },
    {
      id: 'sensa1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Sensation?',
            options: [
              'Bottom-up vs top-down processing',
              'interpreting stimuli',
              'detecting stimuli',
              'converting physical energy to neural signals'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Sensation: detecting stimuli. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Sensation & Sensory Processing, which explains Transduction?',
            options: [
              'converting physical energy to neural signals',
              'Bottom-up vs top-down processing',
              'detecting stimuli',
              'interpreting stimuli'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Transduction: converting physical energy to neural signals. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sensa1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Sensation**: detecting stimuli
- **Perception**: interpreting stimuli
- **Transduction**: converting physical energy to neural signals
- **Bottom-up vs top-down processing**
      `
    },
    {
      id: 'sensa1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to sensation?',
            options: [
              'Bottom-up vs top-down processing',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Bottom-up vs top-down processing'
          }
        ]
      }
    },
    {
      id: 'sensa1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sensation',
            options: ['Bottom-up vs top-down processing', 'converting physical energy to neural signals', 'interpreting stimuli', 'detecting stimuli']
          },
          {
            label: 'Perception',
            options: ['converting physical energy to neural signals', 'detecting stimuli', 'Bottom-up vs top-down processing', 'interpreting stimuli']
          },
          {
            label: 'Transduction',
            options: ['converting physical energy to neural signals', 'detecting stimuli', 'interpreting stimuli', 'Bottom-up vs top-down processing']
          }
        ],
        correctAnswers: ['detecting stimuli', 'interpreting stimuli', 'converting physical energy to neural signals'],
        hint1: 'Think about what each concept specifically describes in Sensation & Sensory Processing.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sensation & Sensory Processing describes a specific idea. Sensation: detecting stimuli. Perception: interpreting stimuli. Transduction: converting physical energy to neural signals.'
      }
    }
  ]
}
