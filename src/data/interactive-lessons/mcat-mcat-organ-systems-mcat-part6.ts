export const mcatOrganSysPart6Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os6-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 6 of 7 — Nervous System**

### Organization

- **CNS**: Brain + Spinal cord
- **PNS**: Everything else
  - **Somatic**: Voluntary (skeletal muscle)
  - **Autonomic**: Involuntary
    - **Sympathetic**: Fight-or-flight (increases HR, dilates pupils, inhibits digestion)
    - **Parasympathetic**: Rest-and-digest (decreases HR, constricts pupils, promotes digestion)

### Neuron Structure & Action Potential

1. **Resting potential**: ~$-70$ mV (Na$^+$/K$^+$ ATPase maintains gradient)
2. **Depolarization**: Na$^+$ channels open → Na$^+$ rushes in → membrane potential rises
3. **Repolarization**: Na$^+$ channels close, K$^+$ channels open → K$^+$ flows out
4. **Hyperpolarization**: Slight overshoot below $-70$ mV
5. **Refractory period**: Na$^+$ channels inactivated → cannot fire again immediately

### Synaptic Transmission

$$\\text{AP reaches terminal} \\to \\text{Ca}^{2+}\\text{ influx} \\to \\text{Vesicle fusion} \\to \\text{NT release} \\to \\text{Binds receptor}$$

### Key Neurotransmitters

- **ACh**: NMJ (excitatory), parasympathetic
- **Norepinephrine**: Sympathetic
- **Dopamine**: Reward, movement (low in Parkinson's)
- **Serotonin**: Mood, sleep (targeted by SSRIs)
- **GABA**: Main inhibitory NT in brain
- **Glutamate**: Main excitatory NT in brain`
    },
    {
      id: 'os6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Nervous System** 🎯',
      exercise: {
        questions: [
          {
            question: 'Multiple sclerosis destroys myelin sheaths. This would:',
            options: ['Slow or block action potential conduction (loss of saltatory conduction)', 'Speed up conduction', 'Have no effect on signal transmission', 'Only affect the CNS, not the PNS'],
            correctAnswer: 0,
            explanation: 'Myelin insulates axons, enabling saltatory conduction (AP jumps between nodes of Ranvier). Without myelin, conduction slows dramatically or fails, causing motor and sensory deficits.'
          }
        ]
      }
    },
    {
      id: 'os6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Sympathetic: fight-or-flight. Parasympathetic: rest-and-digest.
- Action potential: resting → depolarization (Na$^+$ in) → repolarization (K$^+$ out)
- Myelin enables saltatory conduction (faster signaling)
- Know major neurotransmitters and their functions`
    }
  ]
};
