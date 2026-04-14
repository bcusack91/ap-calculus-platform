export const bioNervousSystemSignalingPart5Data = {
  topicSlug: 'nervous-system-signaling',
  sections: [
    {
      id: 'ner5-intro',
      type: 'text' as const,
      content: `# Synaptic Transmission

**Part 5 of 7 — Nervous System Signaling**

When an action potential reaches the axon terminal, the electrical signal must be converted into a **chemical signal** to cross the synaptic cleft and reach the next cell. This process — **synaptic transmission** — is the foundation for communication between neurons and between neurons and effectors (muscles, glands).

### The Chemical Synapse — Step by Step

| Step | Event | Key Players |
|---|---|---|
| **1** | Action potential arrives at the axon terminal | Voltage-gated Na⁺/K⁺ channels |
| **2** | Voltage-gated **Ca²⁺ channels** open; Ca²⁺ flows INTO the terminal | Ca²⁺ ions |
| **3** | Ca²⁺ triggers **synaptic vesicles** to fuse with the presynaptic membrane (**exocytosis**) | SNARE proteins, synaptotagmin |
| **4** | **Neurotransmitters** are released into the synaptic cleft | Acetylcholine, dopamine, etc. |
| **5** | Neurotransmitters bind to **receptors** on the postsynaptic membrane | Ligand-gated ion channels or G-protein coupled receptors |
| **6** | Ion channels open (or close) on the postsynaptic cell, changing its membrane potential | Na⁺, K⁺, Cl⁻ channels |
| **7** | Neurotransmitter is **removed** from the cleft (reuptake, enzymatic degradation, or diffusion) | Transporters, enzymes |

> **Critical concept:** Ca²⁺ influx is the trigger that links the electrical signal (action potential) to the chemical signal (neurotransmitter release). Without Ca²⁺ entry, no neurotransmitter is released.
`
    },
    {
      id: 'ner5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Synaptic Transmission Steps** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which ion is directly responsible for triggering neurotransmitter release from synaptic vesicles?',
            options: [
              'Na⁺',
              'K⁺',
              'Ca²⁺',
              'Cl⁻'
            ],
            correctAnswer: 2,
            explanation: 'When the action potential reaches the axon terminal, voltage-gated Ca²⁺ channels open. The Ca²⁺ influx causes synaptic vesicles to fuse with the presynaptic membrane via exocytosis, releasing neurotransmitters into the synaptic cleft. Ca²⁺ is the essential link between the electrical and chemical signals.'
          },
          {
            question: 'A researcher applies a drug that blocks all voltage-gated Ca²⁺ channels at the axon terminal. What would be the expected effect?',
            options: [
              'Action potentials would fail to propagate along the axon',
              'The resting membrane potential would become more negative',
              'Neurotransmitter release would be blocked, preventing synaptic transmission',
              'The postsynaptic cell would become permanently depolarized'
            ],
            correctAnswer: 2,
            explanation: 'Blocking voltage-gated Ca²⁺ channels at the axon terminal would prevent Ca²⁺ from entering the terminal when an action potential arrives. Without Ca²⁺ influx, synaptic vesicles cannot fuse with the membrane, so no neurotransmitter is released. The action potential would still propagate normally along the axon (that uses Na⁺ and K⁺ channels).'
          }
        ]
      }
    },
    {
      id: 'ner5-epsp-ipsp',
      type: 'text' as const,
      content: `## Excitatory & Inhibitory Postsynaptic Potentials

Neurotransmitters can have different effects on the postsynaptic cell depending on the receptor they bind to:

### EPSPs vs. IPSPs

| Property | EPSP (Excitatory) | IPSP (Inhibitory) |
|---|---|---|
| **Effect on membrane potential** | Depolarization (more positive) | Hyperpolarization (more negative) |
| **Ion channels that open** | Na⁺ or Ca²⁺ channels (positive ions in) | K⁺ channels (positive ions out) or Cl⁻ channels (negative ions in) |
| **Effect on action potential** | Makes firing MORE likely | Makes firing LESS likely |
| **Example** | Glutamate binding to AMPA receptor | GABA binding to GABA_A receptor |

### Key Principles
- EPSPs and IPSPs are **graded potentials** — their size varies with the amount of neurotransmitter released and the number of receptors activated.
- Unlike action potentials, graded potentials **decrease with distance** from the synapse.
- Whether a neuron fires depends on the **sum** of all EPSPs and IPSPs at the axon hillock.

### Summation

Neurons constantly integrate many inputs simultaneously:

| Type | Definition | Example |
|---|---|---|
| **Temporal summation** | Multiple signals from the SAME presynaptic neuron arriving in rapid succession add together | One synapse fires repeatedly before the first EPSP fades |
| **Spatial summation** | Signals from DIFFERENT presynaptic neurons arriving at the same time add together | EPSPs from synapses on multiple dendrites converge on the axon hillock |

If the sum of all EPSPs and IPSPs at the axon hillock reaches **threshold (−55 mV)**, an action potential is triggered. If not, no action potential fires.
`
    },
    {
      id: 'ner5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — EPSPs, IPSPs & Summation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A neuron receives 5 EPSPs and 3 IPSPs simultaneously from different presynaptic neurons. This is an example of:',
            options: [
              'Temporal summation',
              'Spatial summation',
              'Saltatory conduction',
              'All-or-none response'
            ],
            correctAnswer: 1,
            explanation: 'Spatial summation occurs when signals from multiple different presynaptic neurons (at different synapses) arrive at the same time and are summed together. The 5 EPSPs and 3 IPSPs from different sources combine at the axon hillock to determine whether threshold is reached.'
          },
          {
            question: 'A neurotransmitter binds to a postsynaptic receptor and causes Cl⁻ channels to open. Cl⁻ flows into the cell. This produces:',
            options: [
              'An EPSP, because ions are entering the cell',
              'An IPSP, because the influx of negative Cl⁻ ions hyperpolarizes the membrane',
              'An action potential, because the threshold is immediately reached',
              'No change in membrane potential, because Cl⁻ is electrically neutral'
            ],
            correctAnswer: 1,
            explanation: 'When Cl⁻ (a negative ion) flows into the cell, it makes the inside of the cell more negative (hyperpolarizes the membrane). This is an inhibitory postsynaptic potential (IPSP) because it moves the membrane potential further from threshold, making an action potential less likely.'
          }
        ]
      }
    },
    {
      id: 'ner5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Synaptic Transmission** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Neurotransmitter release is triggered by the influx of ___ into the axon terminal.',
            options: ['Na⁺', 'K⁺', 'Ca²⁺', 'Cl⁻']
          },
          {
            label: 'Synaptic vesicles release neurotransmitter into the synaptic cleft via the process of ___.',
            options: ['endocytosis', 'exocytosis', 'osmosis', 'active transport']
          },
          {
            label: 'A postsynaptic potential that depolarizes the membrane and makes firing more likely is called an ___.',
            options: ['IPSP', 'EPSP', 'action potential', 'resting potential']
          },
          {
            label: 'When rapid signals from a single presynaptic neuron add together before the previous signal decays, this is called ___ summation.',
            options: ['spatial', 'temporal', 'chemical', 'electrical']
          }
        ],
        correctAnswers: ['Ca²⁺', 'exocytosis', 'EPSP', 'temporal'],
        hint1: 'Calcium is the critical link between the electrical signal and neurotransmitter release.',
        hint2: 'Exocytosis = vesicles fuse with the membrane and release contents outward.',
        hint3: 'Temporal = time; spatial = space (different locations).',
        explanation: 'Ca²⁺ influx triggers exocytosis of synaptic vesicles. EPSPs depolarize the postsynaptic membrane (making firing more likely), while IPSPs hyperpolarize it (making firing less likely). Temporal summation involves rapid-fire signals from one source; spatial summation involves simultaneous signals from multiple sources.'
      }
    },
    {
      id: 'ner5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary — Synaptic Transmission

### Key Takeaways
1. Synaptic transmission converts an **electrical signal** (action potential) to a **chemical signal** (neurotransmitter release) and back to electrical.
2. **Ca²⁺ influx** into the axon terminal triggers **exocytosis** of synaptic vesicles containing neurotransmitters.
3. Neurotransmitters bind postsynaptic receptors, opening ion channels that produce **EPSPs** (excitatory, depolarizing) or **IPSPs** (inhibitory, hyperpolarizing).
4. **Spatial summation** = signals from multiple presynaptic neurons added together.
5. **Temporal summation** = rapid-fire signals from one presynaptic neuron added together.
6. The axon hillock is the integration center — if summed EPSPs and IPSPs reach **threshold**, an action potential fires.

### AP Exam Connection
- Understand the role of Ca²⁺ as the trigger for neurotransmitter release.
- Be able to predict the effect of blocking or enhancing any step in synaptic transmission.
- Know the difference between EPSPs and IPSPs and how summation determines whether a neuron fires.

**Next up:** Part 6 — Neurotransmitters & Drug Effects
`
    }
  ]
};