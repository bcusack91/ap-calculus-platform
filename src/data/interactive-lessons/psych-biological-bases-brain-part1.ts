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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of neurons & neural communication?',
            options: [
              'Neurons',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Neurons: cell body (soma), dendrites, axon, myelin sheath'
          },
          {
            question: 'In the context of neurons & neural communication, which is accurate?',
            options: [
              'gap between neurons',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Synapse: gap between neurons'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Neurons',
            options: ['cell body (soma), dendrites, axon, myelin sheath', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Action potential',
            options: ['all-or-none electrical signal', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Synapse',
            options: ['gap between neurons', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['cell body (soma), dendrites, axon, myelin sheath', 'all-or-none electrical signal', 'gap between neurons'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Neurons & Neural Communication.'
      }
    }
  ]
}
