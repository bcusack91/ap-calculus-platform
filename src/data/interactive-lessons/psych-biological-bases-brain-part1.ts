export const psychBrainPart1Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo1-intro',
      type: 'text' as const,
      content: `
# 🧠 The Brain & Nervous System

**Part 1 of 7 — Neurons & Neural Communication**

### 1. Neurons

cell body (soma), dendrites, axon, myelin sheath

### 2. Action potential

all-or-none electrical signal

### 3. Synapse

gap between neurons

### 4. Resting potential

-70mV inside the neuron
      `
    },
    {
      id: 'biolo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Neurons?',
            options: [
              'all-or-none electrical signal',
              'cell body (soma), dendrites, axon, myelin sheath',
              '-70mV inside the neuron',
              'gap between neurons'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Neurons: cell body (soma), dendrites, axon, myelin sheath. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of The Brain & Nervous System, which explains Synapse?',
            options: [
              'all-or-none electrical signal',
              'gap between neurons',
              '-70mV inside the neuron',
              'cell body (soma), dendrites, axon, myelin sheath'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Synapse: gap between neurons. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biolo1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Neurons**: cell body (soma), dendrites, axon, myelin sheath
- **Action potential**: all-or-none electrical signal
- **Synapse**: gap between neurons
- **Resting potential**: -70mV inside the neuron
      `
    },
    {
      id: 'biolo1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to neurons & neural communication?',
            options: [
              '-70mV inside the neuron',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Resting potential: -70mV inside the neuron'
          }
        ]
      }
    },
    {
      id: 'biolo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Neurons',
            options: ['gap between neurons', 'all-or-none electrical signal', 'cell body (soma), dendrites, axon, myelin sheath', '-70mV inside the neuron']
          },
          {
            label: 'Action potential',
            options: ['all-or-none electrical signal', '-70mV inside the neuron', 'cell body (soma), dendrites, axon, myelin sheath', 'gap between neurons']
          },
          {
            label: 'Synapse',
            options: ['gap between neurons', '-70mV inside the neuron', 'all-or-none electrical signal', 'cell body (soma), dendrites, axon, myelin sheath']
          }
        ],
        correctAnswers: ['cell body (soma), dendrites, axon, myelin sheath', 'all-or-none electrical signal', 'gap between neurons'],
        hint1: 'Think about what each concept specifically describes in The Brain & Nervous System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in The Brain & Nervous System describes a specific idea. Neurons: cell body (soma), dendrites, axon, myelin sheath. Action potential: all-or-none electrical signal. Synapse: gap between neurons.'
      }
    }
  ]
}
