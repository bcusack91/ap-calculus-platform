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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of neurotransmitters?',
            options: [
              'Acetylcholine',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Acetylcholine: muscle movement, memory'
          },
          {
            question: 'In the context of neurotransmitters, which is accurate?',
            options: [
              'mood, sleep, appetite (deficiency → depression)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Serotonin: mood, sleep, appetite (deficiency → depression)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acetylcholine',
            options: ['muscle movement, memory', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Dopamine',
            options: ['pleasure, reward, movement (deficiency → Parkinson', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Serotonin',
            options: ['mood, sleep, appetite (deficiency → depression)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['muscle movement, memory', 'pleasure, reward, movement (deficiency → Parkinson', 'mood, sleep, appetite (deficiency → depression)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Neurotransmitters.'
      }
    }
  ]
}
