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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Nervous System:',
            options: ['Central nervous system: brain + spinal cord; Peripheral: som', 'Autonomic: sympathetic (fight or flight) vs parasympathetic ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Neuron: dendrites receive, axon transmits, synaptic terminal', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Central nervous system: brain + spinal cord; Peripheral: som', 'Neuron: dendrites receive, axon transmits, synaptic terminal'],
        hint1: 'Think about nervous system',
        hint2: 'Consider the MCAT application',
        explanation: 'Central nervous system: brain + spinal cord; Peripheral: somatic + autonomic. Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.'
      }
    }
  ]
}
