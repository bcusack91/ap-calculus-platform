export const mcatOrganSysPart6Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Nervous System

**Part 6 of 7 — Nervous System**

Central nervous system: brain + spinal cord; Peripheral: somatic + autonomic.

Autonomic: sympathetic (fight or flight) vs parasympathetic (rest and digest).
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in nervous system?',
            options: [
              'Central nervous system: brain + spinal cord; Peripheral: somatic + autonomic',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Central nervous system: brain + spinal cord; Peripheral: somatic + autonomic'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.

**MCAT Tip:** Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period.
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to nervous system?',
            options: [
              'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters'
          }
        ]
      }
    },
    {
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central nervous system',
            options: ['Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.', 'sympathetic (fight or flight) vs parasympathetic (rest and digest).', 'Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period.', 'brain + spinal cord; Peripheral: somatic + autonomic.']
          },
          {
            label: 'Autonomic',
            options: ['sympathetic (fight or flight) vs parasympathetic (rest and digest).', 'Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period.', 'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.', 'brain + spinal cord; Peripheral: somatic + autonomic.']
          },
          {
            label: 'Key Insight',
            options: ['Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period.', 'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.', 'brain + spinal cord; Peripheral: somatic + autonomic.', 'sympathetic (fight or flight) vs parasympathetic (rest and digest).']
          }
        ],
        correctAnswers: ['brain + spinal cord; Peripheral: somatic + autonomic.', 'sympathetic (fight or flight) vs parasympathetic (rest and digest).', 'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.'],
        hint1: 'Think about what each concept specifically describes in Nervous System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nervous System describes a specific idea. Central nervous system: brain + spinal cord; Peripheral: somatic + autonomic. Autonomic: sympathetic (fight or flight) vs parasympathetic (rest and digest). Key Insight: Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.'
      }
    }
  ]
}
