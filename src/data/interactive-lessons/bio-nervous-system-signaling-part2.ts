export const bioNervousSystemSignalingPart2Data = {
  topicSlug: 'nervous-system-signaling',
  sections: [
    {
      id: 'ner2-intro',
      type: 'text' as const,
      content: `# Resting Membrane Potential

**Part 2 of 7 — Nervous System Signaling**

Before a neuron can fire an action potential, it must first establish a **resting membrane potential** — a stable voltage difference across its plasma membrane when the cell is not actively transmitting a signal. This electrical charge separation is the foundation for all neural signaling.

### What Is Resting Potential?

The resting membrane potential of a typical neuron is approximately **−70 mV** (the inside of the cell is negative relative to the outside). This charge difference exists because of:

1. **Unequal ion distribution** across the membrane
2. **Selective membrane permeability** to different ions
3. **Active transport** by the Na⁺/K⁺ ATPase pump

### Key Ions Involved

| Ion | Higher Concentration | Lower Concentration | Equilibrium Potential |
|---|---|---|---|
| **K⁺** (potassium) | Inside the cell | Outside the cell | −90 mV |
| **Na⁺** (sodium) | Outside the cell | Inside the cell | +60 mV |
| **Cl⁻** (chloride) | Outside the cell | Inside the cell | −70 mV |
| **Large anions (A⁻)** | Inside the cell | Cannot cross membrane | N/A (trapped) |

The resting potential (−70 mV) is closest to the equilibrium potential of K⁺ (−90 mV) because the membrane at rest is **most permeable to K⁺** through leak channels.
`
    },
    {
      id: 'ner2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Resting Potential Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The resting membrane potential of a neuron is approximately −70 mV. This value is closest to the equilibrium potential of which ion?',
            options: [
              'Na⁺ (+60 mV)',
              'K⁺ (−90 mV)',
              'Cl⁻ (−70 mV)',
              'Ca²⁺ (+120 mV)'
            ],
            correctAnswer: 1,
            explanation: 'The resting potential (−70 mV) is closest to the K⁺ equilibrium potential (−90 mV) because the resting membrane is most permeable to K⁺ through leak channels. It is not exactly −90 mV because there is a small permeability to Na⁺, which pulls the potential slightly positive.'
          },
          {
            question: 'Which of the following best explains why the inside of a resting neuron is negatively charged?',
            options: [
              'Na⁺ channels are wide open, allowing Na⁺ to flood into the cell',
              'K⁺ leak channels allow K⁺ to exit, and large negatively charged proteins remain trapped inside',
              'The Na⁺/K⁺ pump moves equal numbers of Na⁺ and K⁺ across the membrane',
              'Cl⁻ is actively pumped into the cell by ATP-driven transporters'
            ],
            correctAnswer: 1,
            explanation: 'K⁺ leak channels allow K⁺ to diffuse out of the cell down its concentration gradient, leaving behind large, negatively charged proteins (anions) that cannot cross the membrane. This creates the negative interior charge. The Na⁺/K⁺ pump also contributes by moving 3 Na⁺ out for every 2 K⁺ in (net loss of positive charge).'
          }
        ]
      }
    },
    {
      id: 'ner2-pump',
      type: 'text' as const,
      content: `## The Na⁺/K⁺ ATPase Pump

The **sodium-potassium pump** is a transmembrane protein that uses energy from ATP hydrolysis to maintain the ion concentration gradients essential for neural signaling.

### How It Works (One Cycle)

1. **3 Na⁺ ions bind** to the pump on the intracellular side.
2. **ATP is hydrolyzed** → ADP + Pᵢ; the pump is phosphorylated and changes shape.
3. **3 Na⁺ are released** to the extracellular fluid.
4. **2 K⁺ ions bind** to the pump on the extracellular side.
5. The phosphate group is released; the pump returns to its original shape.
6. **2 K⁺ are released** inside the cell.

### Why It Matters

| Feature | Detail |
|---|---|
| **Stoichiometry** | 3 Na⁺ out : 2 K⁺ in per ATP |
| **Electrogenic** | Net export of 1 positive charge per cycle → contributes ~−3 mV to resting potential |
| **Energy cost** | Consumes ~20–40% of a neuron's total ATP |
| **Gradient maintenance** | Maintains the concentration gradients that drive all ion channel-based signaling |

### The Nernst Equation (Conceptual)

The **equilibrium potential** for any ion can be calculated using the Nernst equation:

**E = (RT/zF) × ln([ion]outside / [ion]inside)**

For the AP exam, you don't need to calculate with this equation, but you should understand that:
- Each ion has its own equilibrium potential based on its concentration gradient.
- The membrane potential at rest reflects the weighted contributions of all permeable ions.
- Opening channels for a specific ion drives the membrane potential toward that ion's equilibrium potential.
`
    },
    {
      id: 'ner2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Na⁺/K⁺ Pump** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Na⁺/K⁺ ATPase pump moves 3 Na⁺ out and 2 K⁺ in per cycle. This pump is described as "electrogenic" because:',
            options: [
              'It uses ATP as an energy source',
              'It creates a net movement of positive charge out of the cell',
              'It moves ions in the same direction as their concentration gradients',
              'It operates only during action potentials'
            ],
            correctAnswer: 1,
            explanation: 'The pump is electrogenic because it exports more positive charges (3 Na⁺) than it imports (2 K⁺), producing a net outward current. This directly contributes about −3 mV to the resting membrane potential. "Electrogenic" means it generates a voltage across the membrane.'
          },
          {
            question: 'If a drug completely inhibits the Na⁺/K⁺ ATPase, which of the following would occur over time?',
            options: [
              'The concentration gradients for Na⁺ and K⁺ would be maintained by leak channels',
              'Na⁺ would accumulate inside and K⁺ would accumulate outside, and the resting potential would depolarize',
              'The neuron would become hyperpolarized as K⁺ continues to leak out',
              'No change, because the pump only operates during action potentials'
            ],
            correctAnswer: 1,
            explanation: 'Without the Na⁺/K⁺ pump, leaked Na⁺ would accumulate inside and leaked K⁺ would accumulate outside. The concentration gradients would gradually dissipate, and the resting membrane potential would depolarize (become less negative). Eventually, the neuron would lose its ability to fire action potentials.'
          }
        ]
      }
    },
    {
      id: 'ner2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Resting Potential** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The resting membrane potential of a typical neuron is approximately ___.',
            options: ['+60 mV', '−90 mV', '−70 mV', '0 mV']
          },
          {
            label: 'The Na⁺/K⁺ ATPase moves ___ Na⁺ ions out and ___ K⁺ ions in per cycle.',
            options: ['2 Na⁺ out, 3 K⁺ in', '3 Na⁺ out, 2 K⁺ in', '3 Na⁺ out, 3 K⁺ in', '2 Na⁺ out, 2 K⁺ in']
          },
          {
            label: 'At rest, the neuron membrane is most permeable to ___ through leak channels.',
            options: ['Na⁺', 'K⁺', 'Cl⁻', 'Ca²⁺']
          },
          {
            label: 'Large negatively charged ___ trapped inside the cell contribute to the negative resting potential.',
            options: ['sodium ions', 'potassium ions', 'proteins (anions)', 'chloride ions']
          }
        ],
        correctAnswers: ['−70 mV', '3 Na⁺ out, 2 K⁺ in', 'K⁺', 'proteins (anions)'],
        hint1: 'The resting potential is negative but not as negative as the K⁺ equilibrium potential.',
        hint2: 'The pump is electrogenic — it moves unequal numbers of Na⁺ and K⁺.',
        hint3: 'K⁺ leak channels are the most abundant leak channels in the resting neuron membrane.',
        explanation: 'The resting potential is −70 mV, maintained by K⁺ leak channels (most permeable ion at rest), the electrogenic Na⁺/K⁺ ATPase (3 Na⁺ out, 2 K⁺ in), and trapped intracellular protein anions that cannot cross the membrane.'
      }
    },
    {
      id: 'ner2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary — Resting Membrane Potential

### Key Takeaways
1. The resting membrane potential is approximately **−70 mV** (inside negative).
2. The **Na⁺/K⁺ ATPase** uses ATP to pump 3 Na⁺ out and 2 K⁺ in, maintaining concentration gradients.
3. **K⁺ leak channels** dominate at rest, making the membrane most permeable to K⁺ and pulling the potential toward −90 mV.
4. Small Na⁺ permeability pulls the resting potential slightly positive from K⁺ equilibrium.
5. **Trapped intracellular anions** (negatively charged proteins) contribute to the negative interior.
6. The **Nernst equation** predicts each ion's equilibrium potential based on its concentration gradient.

### AP Exam Connection
- Expect questions asking you to predict what happens if ion concentrations or pump activity is altered.
- Understand that the resting potential is a prerequisite for action potentials — without it, neurons cannot fire.
- Be ready to explain the role of electrochemical gradients (both concentration and electrical forces) in ion movement.

**Next up:** Part 3 — Action Potentials
`
    }
  ]
};