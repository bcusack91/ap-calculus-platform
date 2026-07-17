export const physics2EmInductionPart5Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei5-intro',
      type: 'text' as const,
      content: `
# 🔌 Generators and Transformers

**Part 5 of 7 — Turning Motion into Electricity (and Vice Versa)**

The generator is arguably humanity's most important invention. By spinning a coil in a magnetic field, we convert mechanical energy into electrical energy. Transformers then allow us to transmit that power efficiently across vast distances.
      `
    },
    {
      id: 'ei5-ac-generator',
      type: 'text' as const,
      content: `
## The AC Generator

### How It Works

A coil with $N$ turns and area $A$ rotates at angular frequency $\\omega$ in a uniform field $\\vec{B}$.

As the coil rotates, the angle $\\theta = \\omega t$, and the flux through the coil changes:

$$\\Phi_B = NBA\\cos(\\omega t)$$

### The Generator EMF

Applying Faraday's Law:

$$\\varepsilon = -\\frac{d\\Phi_B}{dt} = NBA\\omega\\sin(\\omega t)$$

The **peak EMF** is:

$$\\varepsilon_0 = NBA\\omega$$

So the output voltage oscillates sinusoidally:

$$\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t)$$

### Key Features

- The output is **alternating current (AC)** — it reverses direction every half-cycle
- The frequency of the AC equals the rotation frequency: $f = \\omega / (2\\pi)$
- In the US, power plants produce AC at $f = 60$ Hz, so $\\omega = 120\\pi$ rad/s
- Peak EMF increases with $N$, $B$, $A$, and $\\omega$
      `
    },
    {
      id: 'ei5-generator-quiz',
      type: 'multiple-choice' as const,
      content: `
**Generator Concept Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'In an AC generator, the EMF is maximum when:',
            options: [
              'The coil is perpendicular to $\\vec{B}$ (flux is maximum)',
              'The coil is parallel to $\\vec{B}$ (flux is zero)',
              'The coil is at 45° to $\\vec{B}$',
              'The coil has stopped rotating'
            ],
            correctAnswer: 1,
            explanation: 'EMF $= NBA\\omega\\sin(\\omega t)$. This is max when $\\sin(\\omega t) = 1$, i.e., when the coil plane is parallel to $\\vec{B}$. At that instant, the flux is zero but is changing most rapidly — and it\'s the **rate of change** of flux that determines EMF.'
          },
          {
            question: 'A generator coil has 100 turns, area 0.04 $m^{2}$, in a 0.5 T field, rotating at 60 Hz. The peak EMF is:',
            options: [
              '12 V',
              '120 V',
              '377 V',
              '754 V'
            ],
            correctAnswer: 3,
            explanation: '$\\omega = 2\\pi f = 2\\pi(60) = 120\\pi$ rad/s. $\\varepsilon_0 = NBA\\omega = (100)(0.5)(0.04)(120\\pi) = 2 \\times 120\\pi = 240\\pi \\approx 754$ V.'
          }
        ]
      }
    },
    {
      id: 'ei5-transformers',
      type: 'text' as const,
      content: `
## Transformers

A **transformer** transfers AC electrical energy between two coils using electromagnetic induction. It consists of:

- **Primary coil**: $N_1$ turns, connected to the AC source
- **Secondary coil**: $N_2$ turns, connected to the load
- **Iron core**: channels the magnetic flux so nearly all flux through the primary also passes through the secondary

### The Transformer Equation

Since both coils share the same changing flux:

$$\\frac{V_2}{V_1} = \\frac{N_2}{N_1}$$

### Types of Transformers

| Type | Turns Ratio | Voltage | Current |
|------|------------|---------|---------|
| **Step-Up** | $N_2 > N_1$ | $V_2 > V_1$ | $I_2 < I_1$ |
| **Step-Down** | $N_2 < N_1$ | $V_2 < V_1$ | $I_2 > I_1$ |

### Power Conservation

For an **ideal transformer** (no energy loss):

$$P_1 = P_2 \\implies V_1 I_1 = V_2 I_2$$

Combining with the voltage equation:

$$\\frac{I_1}{I_2} = \\frac{N_2}{N_1}$$

If you step up the voltage, you step down the current — and vice versa. **You cannot get more power out than you put in!**

### Why Transformers Matter

Power lines use **high voltage** ($\\sim$500 kV) to reduce current, which reduces $I^2R$ resistive losses in the wires. Without step-up/step-down transformers, long-distance power transmission would be impractical.
      `
    },
    {
      id: 'ei5-transformer-drill',
      type: 'input-boxes' as const,
      content: `
**Transformer Calculation Drill** 📐

A step-up transformer has 200 turns on the primary and 5000 turns on the secondary. The primary is connected to a 120 V AC source supplying 10 A.

1) Secondary voltage $V_2$ (in V)

2) Secondary current $I_2$ (in A)

3) Power delivered to the load (in W)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3000', '0.4', '1200'],
        hint1: '$V_2 = V_1 \\times N_2/N_1 = 120 \\times 5000/200$.',
        hint2: '$I_2 = I_1 \\times N_1/N_2 = 10 \\times 200/5000$.',
        hint3: '$P = V_2 I_2$ or $P = V_1 I_1 = 120 \\times 10$. Both must be equal for an ideal transformer.',
        explanation: '$V_2 = 120 \\times (5000/200) = 120 \\times 25 = 3000$ V. $I_2 = 10 \\times (200/5000) = 10 \\times 0.04 = 0.4$ A. $P = 3000 \\times 0.4 = 1200$ W = $120 \\times 10 = 1200$ W. ✓'
      }
    },
    {
      id: 'ei5-power-transmission',
      type: 'text' as const,
      content: `
## Power Transmission — Why High Voltage?

### The Problem

A power plant generates 1 MW of power. The transmission lines have total resistance $R = 10\\;\\Omega$.

### At Low Voltage (1000 V)

$$I = \\frac{P}{V} = \\frac{10^6}{1000} = 1000 \\text{ A}$$

$$P_{\\text{lost}} = I^2 R = (1000)^2(10) = 10{,}000{,}000 \\text{ W} = 10 \\text{ MW!}$$

That's **10× more** than the power being transmitted! Totally impractical.

### At High Voltage (500,000 V)

$$I = \\frac{P}{V} = \\frac{10^6}{500{,}000} = 2 \\text{ A}$$

$$P_{\\text{lost}} = I^2 R = (2)^2(10) = 40 \\text{ W}$$

Only **0.004%** lost! This is why we use high-voltage power lines.

### The Full System

1. Generator produces AC at moderate voltage
2. **Step-up transformer** raises voltage to ~500 kV for transmission
3. Long-distance power lines carry small current
4. **Step-down transformer** reduces voltage to 120/240 V for homes
      `
    },
    {
      id: 'ei5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Generators & Transformers** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A step-down transformer has $N_1 = 1000$ and $N_2 = 50$. If the input is 2400 V AC, the output voltage is:',
            options: [
              '120 V',
              '240 V',
              '48,000 V',
              '12 V'
            ],
            correctAnswer: 0,
            explanation: '$V_2 = V_1 (N_2/N_1) = 2400 \\times (50/1000) = 2400 \\times 0.05 = 120$ V.'
          },
          {
            question: 'Transformers work with AC but NOT with DC because:',
            options: [
              'DC has too much current',
              'DC produces a constant flux, so $d\\Phi/dt = 0$ and no EMF is induced in the secondary',
              'DC would melt the iron core',
              'DC cannot flow through a coil'
            ],
            correctAnswer: 1,
            explanation: 'Transformers rely on a **changing** flux to induce an EMF in the secondary coil. DC produces a constant current → constant $B$ → constant flux → $d\\Phi/dt = 0$ → no induced EMF. This is why the power grid uses AC.'
          }
        ]
      }
    }
  ]
}
