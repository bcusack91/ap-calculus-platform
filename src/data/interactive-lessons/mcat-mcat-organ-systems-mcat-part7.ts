export const mcatOrganSysPart7Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Central nervous system: brain + spinal cord; Peripheral: somatic + autonomic.

Autonomic: sympathetic (fight or flight) vs parasympathetic (rest and digest).
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.

**MCAT Tip:** Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central nervous system',
            options: ['brain + spinal cord; Peripheral: somatic + autonomic.', 'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.', 'sympathetic (fight or flight) vs parasympathetic (rest and digest).', 'Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period.']
          },
          {
            label: 'Autonomic',
            options: ['brain + spinal cord; Peripheral: somatic + autonomic.', 'sympathetic (fight or flight) vs parasympathetic (rest and digest).', 'Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period.', 'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.']
          },
          {
            label: 'Key Insight',
            options: ['sympathetic (fight or flight) vs parasympathetic (rest and digest).', 'Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period.', 'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.', 'brain + spinal cord; Peripheral: somatic + autonomic.']
          }
        ],
        correctAnswers: ['brain + spinal cord; Peripheral: somatic + autonomic.', 'sympathetic (fight or flight) vs parasympathetic (rest and digest).', 'Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Central nervous system: brain + spinal cord; Peripheral: somatic + autonomic. Autonomic: sympathetic (fight or flight) vs parasympathetic (rest and digest). Key Insight: Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters.'
      }
    }
  ]
}
