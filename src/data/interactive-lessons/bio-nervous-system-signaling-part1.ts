export const bioNervousSystemSignalingPart1Data = {
  topicSlug: 'nervous-system-signaling',
  sections: [
    {
      id: 'ner1-intro',
      type: 'text' as const,
      content: `# Neuron Structure & Types

**Part 1 of 7 — Nervous System Signaling**

Neurons are the fundamental signaling cells of the nervous system. They are specialized to receive, process, and transmit electrical and chemical signals across the body. Understanding neuron anatomy is essential for understanding how signals travel from stimulus to response.

### Basic Neuron Anatomy

A typical neuron has three major structural regions:

| Structure | Function | Key Details |
|---|---|---|
| **Cell body (soma)** | Contains the nucleus and most organelles; integrates incoming signals | Site of most protein synthesis; contains Nissl bodies (rough ER) |
| **Dendrites** | Receive signals from other neurons or sensory receptors | Highly branched; increase surface area for synaptic input |
| **Axon** | Conducts electrical impulses (action potentials) away from the cell body | Single, long projection; may be over 1 meter in motor neurons |

### Additional Structures

- **Axon hillock** — The junction between the cell body and axon; the "trigger zone" where action potentials are initiated when the threshold voltage is reached.
- **Axon terminals (synaptic boutons)** — Swollen endings at the terminus of the axon that contain **synaptic vesicles** filled with neurotransmitters.
- **Synaptic cleft** — The narrow gap (~20–40 nm) between the axon terminal of one neuron and the dendrite or cell body of the next.
`
    },
    {
      id: 'ner1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Neuron Anatomy** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which part of the neuron is the primary site of action potential initiation?',
            options: [
              'Dendrites',
              'Cell body (soma)',
              'Axon hillock',
              'Axon terminals'
            ],
            correctAnswer: 2,
            explanation: 'The axon hillock is the trigger zone where the summed input from dendrites and the cell body is evaluated. If the membrane potential reaches threshold (~-55 mV), an action potential is initiated here and propagated down the axon.'
          },
          {
            question: 'A neuron with extensive dendritic branching would most likely have:',
            options: [
              'Fewer synaptic inputs from other neurons',
              'A greater number of synaptic connections receiving signals',
              'A faster action potential conduction velocity',
              'A shorter axon than typical neurons'
            ],
            correctAnswer: 1,
            explanation: 'Dendrites are the primary receiving structures of the neuron. More extensive branching increases surface area, allowing the neuron to form synaptic connections with a greater number of presynaptic neurons and integrate more incoming signals.'
          }
        ]
      }
    },
    {
      id: 'ner1-myelin',
      type: 'text' as const,
      content: `## The Myelin Sheath

Many axons are wrapped in a **myelin sheath** — a fatty, insulating layer that dramatically increases the speed of signal conduction.

### Myelinating Cells

| Location | Myelinating Cell | Key Feature |
|---|---|---|
| **Peripheral nervous system (PNS)** | Schwann cells | Each Schwann cell wraps around one segment of one axon |
| **Central nervous system (CNS)** | Oligodendrocytes | Each oligodendrocyte myelinates segments of multiple axons |

### Structure of the Myelin Sheath
- Myelin is composed of ~80% lipid and ~20% protein, making it an excellent electrical insulator.
- The sheath is interrupted at regular intervals by gaps called **nodes of Ranvier**, where the axon membrane is exposed and rich in voltage-gated Na⁺ channels.
- Signal conduction in myelinated axons is called **saltatory conduction** — the action potential "jumps" from node to node, greatly increasing speed.

### Clinical Connection
- In **multiple sclerosis (MS)**, the immune system attacks myelin in the CNS, disrupting signal conduction and causing muscle weakness, vision problems, and loss of coordination.
- **Guillain-Barré syndrome** involves immune-mediated destruction of Schwann cells in the PNS.
`
    },
    {
      id: 'ner1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Myelin & Supporting Cells** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which cell type is responsible for producing myelin in the peripheral nervous system?',
            options: [
              'Oligodendrocytes',
              'Astrocytes',
              'Schwann cells',
              'Microglia'
            ],
            correctAnswer: 2,
            explanation: 'Schwann cells produce myelin in the PNS, with each Schwann cell wrapping around a single segment of one axon. Oligodendrocytes perform this function in the CNS, where one cell can myelinate segments of multiple axons.'
          },
          {
            question: 'A patient with multiple sclerosis would most likely exhibit impaired nervous system function because:',
            options: [
              'Neurotransmitter production in the axon terminals is blocked',
              'Myelin degradation slows or blocks action potential propagation in the CNS',
              'Dendrites lose their ability to receive input from presynaptic neurons',
              'The nodes of Ranvier become too numerous, causing signal delay'
            ],
            correctAnswer: 1,
            explanation: 'Multiple sclerosis is an autoimmune disease that destroys myelin in the CNS. Without myelin insulation, action potentials cannot undergo efficient saltatory conduction and signal propagation is slowed or completely blocked, leading to neurological symptoms.'
          }
        ]
      }
    },
    {
      id: 'ner1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Neuron Types & Structure** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Neurons that carry signals FROM sensory receptors TO the central nervous system are called ___ neurons.',
            options: ['motor (efferent)', 'sensory (afferent)', 'interneurons', 'glial']
          },
          {
            label: 'Neurons that carry signals FROM the CNS TO muscles and glands are called ___ neurons.',
            options: ['sensory (afferent)', 'motor (efferent)', 'interneurons', 'association']
          },
          {
            label: 'Neurons found entirely within the CNS that connect sensory and motor neurons are called ___.',
            options: ['motor neurons', 'sensory neurons', 'interneurons', 'Schwann cells']
          },
          {
            label: 'The fatty insulating layer around many axons that speeds up conduction is the ___.',
            options: ['cell membrane', 'myelin sheath', 'axon hillock', 'synaptic cleft']
          }
        ],
        correctAnswers: ['sensory (afferent)', 'motor (efferent)', 'interneurons', 'myelin sheath'],
        hint1: 'Afferent = arriving; efferent = exiting (relative to the CNS).',
        hint2: 'Interneurons serve as the "middlemen" in neural circuits.',
        hint3: 'Myelin is a lipid-rich layer formed by Schwann cells (PNS) or oligodendrocytes (CNS).',
        explanation: 'Sensory (afferent) neurons transmit signals toward the CNS. Motor (efferent) neurons carry signals away from the CNS to effectors (muscles/glands). Interneurons connect the two within the CNS and are the most numerous neuron type. The myelin sheath insulates axons and enables fast saltatory conduction.'
      }
    },
    {
      id: 'ner1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary — Neuron Structure & Types

### Key Takeaways
1. Neurons have three main regions: **dendrites** (receive), **cell body** (integrate), and **axon** (transmit).
2. The **axon hillock** is the trigger zone for action potential initiation.
3. **Schwann cells** (PNS) and **oligodendrocytes** (CNS) produce the myelin sheath.
4. **Nodes of Ranvier** are gaps in myelin where voltage-gated Na⁺ channels cluster, enabling saltatory conduction.
5. Three functional neuron types: **sensory (afferent)**, **motor (efferent)**, and **interneurons**.

### AP Exam Connection
- Know the structural differences between sensory, motor, and interneurons and their roles in reflex arcs.
- Be prepared to explain how demyelinating diseases impair nervous system function.
- Understand that the direction of signal flow is: dendrites → cell body → axon hillock → axon → axon terminals.

**Next up:** Part 2 — Resting Membrane Potential
`
    }
  ]
};