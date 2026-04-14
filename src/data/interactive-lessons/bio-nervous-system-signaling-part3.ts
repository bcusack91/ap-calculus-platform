export const bioNervousSystemSignalingPart3Data = {
  topicSlug: 'nervous-system-signaling',
  sections: [
    {
      id: 'ner3-intro',
      type: 'text' as const,
      content: `# Action Potentials

**Part 3 of 7 — Nervous System Signaling**

An **action potential** is a rapid, temporary reversal of the membrane potential that propagates along the axon as the neuron's long-distance electrical signal. Unlike graded potentials (which decay over distance), action potentials are **all-or-none** events that travel without losing strength.

### The All-or-None Principle

- A stimulus must reach **threshold** (approximately −55 mV) to trigger an action potential.
- If threshold is reached, the action potential fires at **full amplitude** (~+30 to +40 mV) regardless of stimulus strength.
- If threshold is not reached, no action potential occurs.
- Stronger stimuli increase the **frequency** of action potentials, not their amplitude.

### Phases of an Action Potential

| Phase | Membrane Potential | Key Ion Movement | Channels Involved |
|---|---|---|---|
| **Resting state** | −70 mV | K⁺ leak out | K⁺ leak channels open |
| **Depolarization** | −70 → +30 mV | Na⁺ rushes IN | Voltage-gated Na⁺ channels open |
| **Repolarization** | +30 → −70 mV | K⁺ rushes OUT | Voltage-gated K⁺ channels open; Na⁺ channels inactivated |
| **Hyperpolarization** | −70 → −80 mV | K⁺ continues OUT | Voltage-gated K⁺ channels slow to close |
| **Return to rest** | −80 → −70 mV | Na⁺/K⁺ pump restores gradients | Na⁺/K⁺ ATPase active |
`
    },
    {
      id: 'ner3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Action Potential Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'During depolarization of an action potential, the membrane potential changes from −70 mV to +30 mV. This is primarily due to:',
            options: [
              'K⁺ rushing out of the cell through voltage-gated channels',
              'Na⁺ rushing into the cell through voltage-gated channels',
              'Cl⁻ entering the cell through ligand-gated channels',
              'Ca²⁺ being pumped out by the Na⁺/K⁺ ATPase'
            ],
            correctAnswer: 1,
            explanation: 'Depolarization occurs when voltage-gated Na⁺ channels open, allowing Na⁺ to rush into the cell down its electrochemical gradient. The rapid influx of positive Na⁺ ions drives the membrane potential from −70 mV toward the Na⁺ equilibrium potential of +60 mV, reaching approximately +30 mV.'
          },
          {
            question: 'A neuron receives two stimuli: one that depolarizes the membrane to −60 mV and another that depolarizes it to −45 mV. What is the expected result?',
            options: [
              'Both stimuli produce action potentials of equal amplitude',
              'The −45 mV stimulus produces a larger action potential than the −60 mV stimulus',
              'Only the −45 mV stimulus produces an action potential (threshold is ~−55 mV)',
              'Neither stimulus produces an action potential because both are subthreshold'
            ],
            correctAnswer: 2,
            explanation: 'Threshold is approximately −55 mV. The −60 mV stimulus is subthreshold and does not trigger an action potential. The −45 mV stimulus exceeds threshold and produces a full action potential. By the all-or-none principle, the action potential fires at maximum amplitude regardless of how far above threshold the stimulus is.'
          }
        ]
      }
    },
    {
      id: 'ner3-channels',
      type: 'text' as const,
      content: `## Voltage-Gated Channels in Detail

### Voltage-Gated Na⁺ Channels
These channels have **two gates**:
- **Activation gate** — Opens rapidly when the membrane depolarizes to threshold, allowing Na⁺ influx.
- **Inactivation gate** — Closes after ~0.5 ms, blocking the channel even though the activation gate is still open. This is what stops Na⁺ entry and begins repolarization.
- The channel must return to resting potential to **reset** (remove inactivation and close the activation gate).

### Voltage-Gated K⁺ Channels
- Open **more slowly** than Na⁺ channels (delayed rectifier channels).
- Allow K⁺ to flow out of the cell, driving repolarization.
- Close slowly, which causes the membrane to temporarily **undershoot** the resting potential (hyperpolarization to ~−80 mV).

### Refractory Periods

| Period | Duration | Channel State | Significance |
|---|---|---|---|
| **Absolute refractory** | ~1–2 ms | Na⁺ channels inactivated; CANNOT fire another AP | Limits maximum firing frequency; ensures unidirectional propagation |
| **Relative refractory** | ~3–5 ms | Some Na⁺ channels reset; CAN fire with stronger stimulus | A stronger-than-normal stimulus can trigger an AP during this period |

The absolute refractory period is critical because it:
1. **Limits firing rate** to a maximum of ~500–1000 action potentials per second.
2. **Ensures one-way propagation** — the region just behind the action potential is refractory, so the signal moves only forward.
`
    },
    {
      id: 'ner3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Channels & Refractory Periods** 🎯`,
      exercise: {
        questions: [
          {
            question: 'During the absolute refractory period, a second action potential cannot be generated because:',
            options: [
              'All K⁺ channels are open and the cell is hyperpolarized',
              'Voltage-gated Na⁺ channels are inactivated and cannot reopen until the membrane repolarizes',
              'The Na⁺/K⁺ pump is temporarily shut down',
              'Neurotransmitters have been depleted from the synaptic vesicles'
            ],
            correctAnswer: 1,
            explanation: 'During the absolute refractory period, the inactivation gates of voltage-gated Na⁺ channels are closed. These gates cannot be reopened by any stimulus — the channel must first return to its resting state (membrane fully repolarized) before the inactivation gate resets. This prevents a second action potential regardless of stimulus strength.'
          },
          {
            question: 'Hyperpolarization (undershoot to ~−80 mV) at the end of an action potential occurs because:',
            options: [
              'Na⁺ channels open a second time, causing additional depolarization',
              'Voltage-gated K⁺ channels are slow to close, allowing excess K⁺ efflux',
              'The Na⁺/K⁺ pump suddenly increases its activity',
              'Cl⁻ ions rush into the cell through open chloride channels'
            ],
            correctAnswer: 1,
            explanation: 'Voltage-gated K⁺ channels (delayed rectifiers) close more slowly than Na⁺ channels inactivate. This means K⁺ continues to flow out of the cell even after the membrane has returned to −70 mV, briefly driving the potential below resting level to about −80 mV (hyperpolarization/undershoot) before the channels fully close.'
          }
        ]
      }
    },
    {
      id: 'ner3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Action Potential Sequence** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The minimum depolarization needed to trigger an action potential is called the ___.',
            options: ['resting potential', 'equilibrium potential', 'threshold', 'hyperpolarization']
          },
          {
            label: 'During depolarization, ___ ions rush into the cell through voltage-gated channels.',
            options: ['K⁺', 'Na⁺', 'Cl⁻', 'Ca²⁺']
          },
          {
            label: 'During repolarization, ___ ions flow out of the cell through voltage-gated channels.',
            options: ['Na⁺', 'Ca²⁺', 'K⁺', 'Cl⁻']
          },
          {
            label: 'The period during which no stimulus can trigger a second action potential is the ___ refractory period.',
            options: ['relative', 'absolute', 'resting', 'threshold']
          }
        ],
        correctAnswers: ['threshold', 'Na⁺', 'K⁺', 'absolute'],
        hint1: 'Threshold is roughly −55 mV in most neurons.',
        hint2: 'Na⁺ is concentrated outside; K⁺ is concentrated inside — they move down their gradients when channels open.',
        hint3: 'Absolute = no AP possible; relative = possible with stronger stimulus.',
        explanation: 'The sequence is: threshold reached → Na⁺ influx (depolarization) → Na⁺ channels inactivate, K⁺ efflux (repolarization) → K⁺ channels slow to close (hyperpolarization) → return to rest. The absolute refractory period prevents backward propagation and limits firing frequency.'
      }
    },
    {
      id: 'ner3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary — Action Potentials

### Key Takeaways
1. Action potentials are **all-or-none**: either threshold is reached and a full AP fires, or nothing happens.
2. **Depolarization**: voltage-gated Na⁺ channels open → Na⁺ rushes in → membrane reaches ~+30 mV.
3. **Repolarization**: Na⁺ channels inactivate; voltage-gated K⁺ channels open → K⁺ rushes out.
4. **Hyperpolarization**: K⁺ channels close slowly → membrane briefly dips to ~−80 mV.
5. **Absolute refractory period**: Na⁺ channels inactivated → no AP possible → ensures unidirectional propagation.
6. **Relative refractory period**: some Na⁺ channels reset → AP possible with stronger-than-normal stimulus.

### AP Exam Connection
- Be able to label all phases on an action potential graph (voltage vs. time).
- Predict the effect of channel blockers (e.g., tetrodotoxin blocks Na⁺ channels → no depolarization).
- Explain how stimulus intensity is encoded by action potential **frequency**, not amplitude.

**Next up:** Part 4 — Signal Propagation Along the Axon
`
    }
  ]
};