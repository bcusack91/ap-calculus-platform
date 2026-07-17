export const bioNervousSystemSignalingPart4Data = {
  topicSlug: 'nervous-system-signaling',
  sections: [
    {
      id: 'ner4-intro',
      type: 'text' as const,
      content: `# Signal Propagation Along the Axon

**Part 4 of 7 — Nervous System Signaling**

Once an action potential is triggered at the axon hillock, it must travel the full length of the axon to reach the axon terminals. The speed and mechanism of this propagation depend critically on whether the axon is **myelinated** or **unmyelinated**.

### Continuous Conduction (Unmyelinated Axons)

In unmyelinated axons, the action potential propagates by **continuous conduction**:

1. $Na^{+}$ rushes into the cell at the site of the action potential.
2. These positive ions spread to the adjacent membrane region (local current).
3. The adjacent region depolarizes to threshold and fires its own action potential.
4. This process repeats **sequentially** along every segment of the axon membrane.

> This is slow (~0.5–2 m/s) because *every* section of the axon must depolarize individually.

### Saltatory Conduction (Myelinated Axons)

In myelinated axons, the action potential propagates by **saltatory conduction** (Latin *saltare* = "to jump"):

1. The myelin sheath **insulates** the axon, preventing ion flow across myelinated segments.
2. Action potentials can only occur at the **nodes of Ranvier**, where the membrane is exposed and rich in voltage-gated $Na^{+}$ channels.
3. Local current flows rapidly through the myelinated segments (low resistance, like current through a wire).
4. The action potential effectively **"jumps"** from node to node.

> This is fast (~12–120 m/s) and energy-efficient (fewer ions cross the membrane, so less $Na^{+}/K^{+}$ pump activity needed).
`
    },
    {
      id: 'ner4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Conduction Types** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Saltatory conduction occurs in myelinated axons because:',
            options: [
              'Myelin prevents the neuron from reaching threshold',
              'Action potentials regenerate only at nodes of Ranvier, effectively jumping over myelinated segments',
              'Myelin increases the number of $Na^{+}$ channels evenly along the axon',
              'The myelin sheath releases neurotransmitters at each segment'
            ],
            correctAnswer: 1,
            explanation: 'Myelin insulates the axon membrane between nodes, preventing ion exchange. Action potentials can only be generated at the nodes of Ranvier, where voltage-gated $Na^{+}$ channels are concentrated. The signal "jumps" from node to node via rapid local current flow through the myelinated internodes.'
          },
          {
            question: 'A researcher compares signal speed in two neurons of equal diameter — one myelinated and one unmyelinated. The myelinated neuron conducts signals faster because:',
            options: [
              'It has more $Na^{+}/K^{+}$ pumps to restore ion gradients quickly',
              'Current travels rapidly through insulated segments and only needs to regenerate at nodes',
              'It has a higher threshold for action potential initiation',
              'Myelin increases the diameter of the axon mechanically'
            ],
            correctAnswer: 1,
            explanation: 'In myelinated axons, local current flows quickly through the insulated internodal segments (low electrical resistance) and only needs to regenerate the action potential at the nodes of Ranvier. This makes propagation much faster than continuous conduction, where every segment must depolarize individually.'
          }
        ]
      }
    },
    {
      id: 'ner4-factors',
      type: 'text' as const,
      content: `## Factors Affecting Conduction Speed

Several factors determine how fast an action potential travels along an axon:

### Comparison Table

| Factor | Effect on Speed | Explanation |
|---|---|---|
| **Myelination** | ↑↑↑ Greatly increases speed | Saltatory conduction jumps between nodes; reduces membrane capacitance |
| **Axon diameter** | ↑ Larger = faster | Larger diameter → lower internal resistance to current flow |
| **Temperature** | ↑ Warmer = faster (to a point) | Higher temperatures increase ion channel kinetics and diffusion rates |

### Myelinated vs. Unmyelinated — Detailed Comparison

| Property | Unmyelinated | Myelinated |
|---|---|---|
| **Conduction type** | Continuous | Saltatory |
| **Speed** | 0.5–2 m/s | 12–120 m/s |
| **Energy cost** | Higher (more ions cross membrane) | Lower (ions cross only at nodes) |
| **$Na^{+}$ channel distribution** | Evenly distributed along entire axon | Concentrated at nodes of Ranvier |
| **Example** | C-fibers (slow pain, temperature) | Aα fibers (proprioception, motor) |

### Axon Diameter and Speed

- In **unmyelinated** axons, increasing diameter is the primary way to increase speed. The giant squid axon (~1 mm diameter) achieves ~25 m/s through sheer size alone.
- In **myelinated** vertebrate axons, even small-diameter fibers (2–20 μm) achieve 12–120 m/s thanks to myelin.
- This is why vertebrates can have complex nervous systems without needing massive axons — myelination is far more space-efficient than increasing diameter.

### Fiber Types in the Human Body

| Fiber Type | Diameter | Speed | Myelin | Function |
|---|---|---|---|---|
| **Aα** | 12–20 μm | 70–120 m/s | Heavily myelinated | Proprioception, motor |
| **Aβ** | 5–12 μm | 30–70 m/s | Myelinated | Touch, pressure |
| **Aδ** | 1–5 μm | 5–30 m/s | Lightly myelinated | Fast pain, temperature |
| **C** | 0.2–1.5 μm | 0.5–2 m/s | Unmyelinated | Slow pain, temperature, itch |
`
    },
    {
      id: 'ner4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Conduction Speed Factors** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The giant squid axon has a diameter of approximately 1 mm and is unmyelinated. It achieves relatively fast conduction by:',
            options: [
              'Using saltatory conduction between widely spaced nodes',
              'Having a very large diameter that reduces internal resistance to current flow',
              'Containing more $Na^{+}/K^{+}$ ATPase pumps than vertebrate neurons',
              'Being surrounded by a specialized type of myelin found only in invertebrates'
            ],
            correctAnswer: 1,
            explanation: 'The giant squid axon achieves its relatively fast conduction speed (~25 m/s) through its enormous diameter (~1 mm). A larger diameter means lower internal resistance, so local currents spread faster along the axon interior. Vertebrates evolved myelination as a more space-efficient solution.'
          },
          {
            question: 'A person touches a hot stove and feels an immediate sharp pain followed by a slower, dull aching pain. The two pain sensations are carried by different nerve fibers because:',
            options: [
              'Sharp pain travels via fast, myelinated Aδ fibers; dull pain via slow, unmyelinated C fibers',
              'Sharp pain uses chemical signaling; dull pain uses electrical signaling',
              'Sharp pain signals travel through motor neurons; dull pain uses sensory neurons',
              'Both pain types use the same fibers but at different frequencies'
            ],
            correctAnswer: 0,
            explanation: 'Fast, sharp pain is transmitted by lightly myelinated Aδ fibers (5–30 m/s), which is why you feel it immediately. The slower, dull, aching pain arrives later via unmyelinated C fibers (0.5–2 m/s). This two-phase pain response is a classic example tested on AP exams.'
          }
        ]
      }
    },
    {
      id: 'ner4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Signal Propagation** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In myelinated axons, action potentials jump from node to node in a process called ___ conduction.',
            options: ['continuous', 'saltatory', 'graded', 'retrograde']
          },
          {
            label: 'Action potentials can only regenerate at ___ in a myelinated axon because these are the only sites with exposed voltage-gated $Na^{+}$ channels.',
            options: ['Schwann cells', 'axon hillocks', 'nodes of Ranvier', 'dendrite spines']
          },
          {
            label: 'Increasing axon ___ reduces internal resistance and increases conduction speed in unmyelinated axons.',
            options: ['length', 'diameter', 'myelin thickness', 'vesicle number']
          },
          {
            label: 'Myelinated axons use ___ energy than unmyelinated axons because fewer ions cross the membrane.',
            options: ['more', 'less', 'the same amount of', 'no']
          }
        ],
        correctAnswers: ['saltatory', 'nodes of Ranvier', 'diameter', 'less'],
        hint1: 'Saltatory comes from the Latin word for "to jump."',
        hint2: 'Nodes of Ranvier are the gaps between myelin segments.',
        hint3: 'Wider tubes allow current to flow more easily, like wider pipes carry more water.',
        explanation: 'Saltatory conduction allows action potentials to jump between nodes of Ranvier, dramatically increasing speed. Larger diameter reduces internal resistance. Myelinated axons are energy-efficient because $Na^{+}$ and $K^{+}$ only cross the membrane at nodes, requiring less $Na^{+}/K^{+}$ ATPase activity to restore gradients.'
      }
    },
    {
      id: 'ner4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary — Signal Propagation

### Key Takeaways
1. **Continuous conduction** (unmyelinated): slow (0.5–2 m/s); every membrane segment depolarizes sequentially.
2. **Saltatory conduction** (myelinated): fast (12–120 m/s); action potentials jump between nodes of Ranvier.
3. **Myelination** is the most important factor for increasing conduction speed in vertebrate neurons.
4. **Larger axon diameter** also increases speed by reducing internal resistance.
5. Myelinated conduction is more **energy-efficient** because fewer ions cross the membrane.
6. Different nerve fiber types (Aα, Aβ, Aδ, C) have different diameters and myelination levels, resulting in different conduction speeds for different signal types.

### AP Exam Connection
- Be ready to compare myelinated vs. unmyelinated conduction in terms of speed, mechanism, and energy cost.
- Explain why demyelinating diseases slow signal conduction.
- Predict how changing axon diameter or temperature would affect conduction speed.

**Next up:** Part 5 — Synaptic Transmission
`
    }
  ]
};