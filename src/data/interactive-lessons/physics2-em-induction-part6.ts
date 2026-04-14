export const physics2EmInductionPart6Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei6-intro',
      type: 'text' as const,
      content: `
# 🧲 Inductance

**Part 6 of 7 — Self-Induction and Energy Storage**

A changing current in a coil produces a changing magnetic field, which produces a changing flux — through the **same coil**. By Faraday's Law, this induces an EMF that opposes the current change. This phenomenon is called **self-inductance**, and it gives coils a kind of electrical "inertia."
      `
    },
    {
      id: 'ei6-self-inductance',
      type: 'text' as const,
      content: `
## Self-Inductance

### Definition

The **self-inductance** $L$ of a coil relates the flux through the coil to the current producing it:

$$N\\Phi_B = LI$$

The SI unit of inductance is the **Henry (H)**:

$$1 \\text{ H} = 1 \\frac{\\text{Wb}}{\\text{A}} = 1 \\frac{\\text{V} \\cdot \\text{s}}{\\text{A}}$$

### Induced EMF Due to Self-Inductance

Taking the time derivative of $N\\Phi_B = LI$:

$$\\varepsilon = -L\\frac{dI}{dt}$$

This says: the faster the current changes, the larger the induced EMF opposing the change.

### Key Properties

- $L$ depends only on the **geometry** of the coil (number of turns, area, length, core material) — not on the current
- The negative sign means the induced EMF always **opposes** the change in current (Lenz's Law)
- An inductor resists **changes** in current, just as a capacitor resists changes in voltage

### Inductance of a Solenoid

For an ideal solenoid with $N$ turns, length $\\ell$, cross-sectional area $A$, and core permeability $\\mu$:

$$L = \\frac{\\mu N^2 A}{\\ell}$$

More turns, larger area, shorter length → higher inductance.
      `
    },
    {
      id: 'ei6-inductance-quiz',
      type: 'multiple-choice' as const,
      content: `
**Inductance Concept Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'The SI unit of inductance is the:',
            options: [
              'Weber (Wb)',
              'Tesla (T)',
              'Henry (H)',
              'Farad (F)'
            ],
            correctAnswer: 2,
            explanation: 'Inductance is measured in Henrys (H). 1 H = 1 V·s/A = 1 Wb/A.'
          },
          {
            question: 'A 0.5 H inductor carries a current that increases at 4 A/s. The magnitude of the self-induced EMF is:',
            options: [
              '0.5 V',
              '2 V',
              '4 V',
              '8 V'
            ],
            correctAnswer: 1,
            explanation: '$|\\varepsilon| = L|dI/dt| = (0.5)(4) = 2$ V.'
          },
          {
            question: 'If you double the number of turns in a solenoid (keeping length and area the same), the inductance:',
            options: [
              'Doubles',
              'Quadruples',
              'Stays the same',
              'Halves'
            ],
            correctAnswer: 1,
            explanation: '$L = \\mu N^2 A / \\ell$. Doubling $N$ gives $L \\propto (2N)^2 = 4N^2$, so the inductance quadruples.'
          }
        ]
      }
    },
    {
      id: 'ei6-energy',
      type: 'text' as const,
      content: `
## Energy Stored in an Inductor

Building up current in an inductor requires work against the self-induced EMF. This work is stored as energy in the magnetic field:

$$U = \\frac{1}{2}LI^2$$

### Comparison with a Capacitor

| Quantity | Capacitor | Inductor |
|----------|-----------|----------|
| Stores energy in | Electric field | Magnetic field |
| Energy formula | $U = \\frac{1}{2}CV^2$ | $U = \\frac{1}{2}LI^2$ |
| Opposes changes in | Voltage | Current |
| "Inertia" analogy | — | Like mass resisting acceleration |

### Energy Density

The energy per unit volume stored in a magnetic field:

$$u_B = \\frac{B^2}{2\\mu_0}$$

This is the magnetic counterpart to the electric field energy density $u_E = \\frac{1}{2}\\varepsilon_0 E^2$.
      `
    },
    {
      id: 'ei6-rl-circuits',
      type: 'text' as const,
      content: `
## RL Circuits

An **RL circuit** contains a resistor $R$ and inductor $L$ in series.

### Charging (Switch Closed, Current Growing)

When you connect a battery of EMF $\\varepsilon_0$ to an RL circuit:

$$I(t) = \\frac{\\varepsilon_0}{R}\\left(1 - e^{-t/\\tau}\\right)$$

where the **time constant** is:

$$\\tau = \\frac{L}{R}$$

### Key Behavior

- At $t = 0$: $I = 0$ (inductor blocks sudden current change)
- At $t = \\tau$: $I = 0.632 \\times \\varepsilon_0/R$ (63.2% of max)
- At $t \\to \\infty$: $I = \\varepsilon_0/R$ (inductor acts like a wire)

### Discharging (Battery Removed, Current Decaying)

$$I(t) = I_0 e^{-t/\\tau}$$

The current decays exponentially with the same time constant $\\tau = L/R$.

### Analogy to RC Circuits

| | RC Circuit | RL Circuit |
|---|-----------|-----------|
| Time constant | $\\tau = RC$ | $\\tau = L/R$ |
| Charges/grows | Voltage on capacitor | Current through inductor |
| Reaches ~63% in | One $\\tau$ | One $\\tau$ |
| Reaches ~99% in | Five $\\tau$ | Five $\\tau$ |
      `
    },
    {
      id: 'ei6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Inductance & RL Circuit Drill** 📐

An RL circuit has $L = 0.2$ H and $R = 10\\;\\Omega$, connected to a 20 V battery.

1) Time constant $\\tau$ (in s)

2) Maximum (steady-state) current (in A)

3) Energy stored in the inductor at steady state (in J)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.02', '2', '0.4'],
        hint1: '$\\tau = L/R = 0.2/10$.',
        hint2: '$I_{\\max} = \\varepsilon_0/R = 20/10$.',
        hint3: '$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(0.2)(2)^2$.',
        explanation: '$\\tau = 0.2/10 = 0.02$ s. $I_{\\max} = 20/10 = 2$ A. $U = \\frac{1}{2}(0.2)(4) = 0.4$ J.'
      }
    },
    {
      id: 'ei6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Inductance** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In an RL circuit, immediately after the switch is closed, the inductor behaves like:',
            options: [
              'A short circuit (zero resistance)',
              'An open circuit (infinite resistance)',
              'A battery',
              'A capacitor'
            ],
            correctAnswer: 1,
            explanation: 'At $t = 0$, the inductor opposes any change from $I = 0$, so it effectively blocks current — acting like an open circuit. Over time ($t \\gg \\tau$), it allows full current to flow and acts like a simple wire.'
          },
          {
            question: 'An inductor stores 2 J of energy when carrying 4 A. Its inductance is:',
            options: [
              '0.125 H',
              '0.25 H',
              '0.5 H',
              '1.0 H'
            ],
            correctAnswer: 1,
            explanation: '$U = \\frac{1}{2}LI^2 \\Rightarrow L = \\frac{2U}{I^2} = \\frac{2(2)}{(4)^2} = \\frac{4}{16} = 0.25$ H.'
          }
        ]
      }
    }
  ]
}
