export const psychBrainPart2Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo2-intro',
      type: 'text' as const,
      content: `
# ## Neurotransmitters

**Part 2 of 7 — Neurotransmitters**

### 1. Acetylcholine

muscle movement, memory

### 2. Dopamine

pleasure, reward, movement (deficiency → Parkinson's)

### 3. Serotonin

mood, sleep, appetite (deficiency → depression)

### 4. GABA

inhibitory; Glutamate: excitatory
      `
    },
    {
      id: 'biolo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Acetylcholine?',
            options: [
              'pleasure, reward, movement (deficiency → Parkinson\'s)',
              'mood, sleep, appetite (deficiency → depression)',
              'muscle movement, memory',
              'inhibitory; Glutamate: excitatory'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Acetylcholine: muscle movement, memory. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Neurotransmitters, which explains Serotonin?',
            options: [
              'pleasure, reward, movement (deficiency → Parkinson\'s)',
              'muscle movement, memory',
              'inhibitory; Glutamate: excitatory',
              'mood, sleep, appetite (deficiency → depression)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Serotonin: mood, sleep, appetite (deficiency → depression). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biolo2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Acetylcholine**: muscle movement, memory
- **Dopamine**: pleasure, reward, movement (deficiency → Parkinson's)
- **Serotonin**: mood, sleep, appetite (deficiency → depression)
- **GABA**: inhibitory; Glutamate: excitatory
      `
    },
    {
      id: 'biolo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to neurotransmitters?',
            options: [
              'inhibitory; Glutamate: excitatory',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'GABA: inhibitory; Glutamate: excitatory'
          }
        ]
      }
    },
    {
      id: 'biolo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acetylcholine',
            options: ['mood, sleep, appetite (deficiency → depression)', 'pleasure, reward, movement (deficiency → Parkinson\'s)', 'muscle movement, memory', 'inhibitory; Glutamate: excitatory']
          },
          {
            label: 'Dopamine',
            options: ['inhibitory; Glutamate: excitatory', 'muscle movement, memory', 'pleasure, reward, movement (deficiency → Parkinson\'s)', 'mood, sleep, appetite (deficiency → depression)']
          },
          {
            label: 'Serotonin',
            options: ['inhibitory; Glutamate: excitatory', 'muscle movement, memory', 'mood, sleep, appetite (deficiency → depression)', 'pleasure, reward, movement (deficiency → Parkinson\'s)']
          }
        ],
        correctAnswers: ['muscle movement, memory', 'pleasure, reward, movement (deficiency → Parkinson\'s)', 'mood, sleep, appetite (deficiency → depression)'],
        hint1: 'Think about what each concept specifically describes in Neurotransmitters.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Neurotransmitters describes a specific idea. Acetylcholine: muscle movement, memory. Dopamine: pleasure, reward, movement (deficiency → Parkinson\'s). Serotonin: mood, sleep, appetite (deficiency → depression).'
      }
    }
  ]
}
