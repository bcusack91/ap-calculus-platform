export const physics2MagInductPart5Data = {
  topicSlug: 'magnetic-induction',
  sections: [
    {
      id: 'magneticinduction-p5-intro',
      type: 'text' as const,
      content: `# 🔋 Inductors & LR Circuits

**Part 5 of 7 — Self-Inductance**

---

### Self-Inductance

When current through a coil changes, the changing flux through the coil itself induces a back-EMF:

$$\\boxed{\\mathcal{E}_L = -L\\frac{dI}{dt}}$$

| Symbol | Meaning | SI Unit |
|--------|---------|---------|
| $L$ | Inductance | H (Henry) = Wb/A = V·s/A |
| $dI/dt$ | Rate of current change | A/s |

The negative sign means the inductor **opposes** changes in current — it resists both increases AND decreases.

### Inductance of a Solenoid

$$L = \\frac{\\mu_0 N^2 A}{\\ell}$$

| Variable | Meaning |
|----------|---------|
| $\\mu_0$ | $4\\pi \\times 10^{-7}$ T·m/A |
| $N$ | Total number of turns |
| $A$ | Cross-sectional area |
| $\\ell$ | Length of solenoid |

> 🔑 Inductance depends on geometry ($N$, $A$, $\\ell$) — not on the current. Doubling the turns quadruples the inductance ($N^2$)!

### Energy Stored in an Inductor

$$\\boxed{U = \\frac{1}{2}LI^2}$$

Compare with a capacitor: $U = \\frac{1}{2}CV^2$. The inductor stores energy in its **magnetic field**, just as a capacitor stores energy in its **electric field**.

### Energy Density of a Magnetic Field

$$u_B = \\frac{B^2}{2\\mu_0}$$

Compare with electric field energy density: $u_E = \\frac{1}{2}\\epsilon_0 E^2$.
      `
    },
    {
      id: 'magneticinduction-p5-lr',
      type: 'text' as const,
      content: `
## LR Circuits

### Time Constant

$$\\tau = L/R$$

The time constant determines how quickly current rises or falls in an LR circuit.

### Current Growth (Switch Closed)

$$I(t) = \\frac{\\mathcal{E}}{R}\\left(1 - e^{-t/\\tau}\\right)$$

| Time | Current | Percentage of Maximum |
|------|---------|----------------------|
| $t = 0$ | $0$ | 0% |
| $t = \\tau$ | $0.632 \\times \\mathcal{E}/R$ | 63.2% |
| $t = 2\\tau$ | $0.865 \\times \\mathcal{E}/R$ | 86.5% |
| $t = 5\\tau$ | $0.993 \\times \\mathcal{E}/R$ | ~99.3% (effectively max) |

### Current Decay (Source Removed)

$$I(t) = I_0 e^{-t/\\tau}$$

### Inductor vs. Capacitor Comparison

| Property | Inductor | Capacitor |
|----------|----------|-----------|
| Stores energy in | Magnetic field | Electric field |
| Energy formula | $\\frac{1}{2}LI^2$ | $\\frac{1}{2}CV^2$ |
| Opposes changes in | Current | Voltage |
| Time constant (with $R$) | $\\tau = L/R$ | $\\tau = RC$ |
| At $t = 0$ (growth) | Acts like open circuit | Acts like short circuit |
| At $t = \\infty$ (steady state) | Acts like short circuit (wire) | Acts like open circuit |
      `
    },
    {
      id: 'magneticinduction-p5-check1',
      type: 'multiple-choice' as const,
      content: `
**Inductor Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An inductor with $L = 0.5$ H carries 3 A. Energy stored:',
            options: ['0.75 J', '2.25 J', '4.5 J', '1.5 J'],
            correctAnswer: 1,
            explanation: '$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(0.5)(3^2) = \\frac{1}{2}(0.5)(9) = 2.25$ J.'
          },
          {
            question: 'An LR circuit has $L = 20$ mH and $R = 4$ Ω. Time constant:',
            options: ['5 ms', '80 ms', '0.005 s', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\tau = L/R = 0.020/4 = 0.005$ s = 5 ms. Options A and C are the same value in different units.'
          },
          {
            question: 'Just after closing the switch in an LR circuit, the inductor behaves like:',
            options: [
              'A short circuit (wire)',
              'An open circuit (no current)',
              'A resistor',
              'A battery'
            ],
            correctAnswer: 1,
            explanation: 'At $t = 0$, $I = 0$ (current hasn\'t had time to build up). The inductor initially blocks current — it acts like an open circuit. Over time ($t \\gg \\tau$), current reaches $\\mathcal{E}/R$ and the inductor acts like a wire.'
          },
          {
            question: 'If you double the number of turns in a solenoid (keeping everything else constant), the inductance:',
            options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'],
            correctAnswer: 1,
            explanation: '$L = \\mu_0 N^2 A / \\ell$. Doubling $N$ → $L \\propto (2N)^2 = 4N^2$. Inductance quadruples because each turn links flux from all other turns — it\'s a cooperative effect.'
          }
        ]
      }
    },
    {
      id: 'magneticinduction-p5-input',
      type: 'input-boxes' as const,
      content: `
**LR Circuit Problem** 🧮

A 12 V battery, 6 Ω resistor, and 30 mH inductor in series.

**1)** Time constant $\\tau$? (in ms)

**2)** Maximum (steady-state) current? (A)

**3)** Current at $t = \\tau$? (A, round to 2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '2', '1.26'],
        hint1: '$\\tau = L/R$',
        hint2: '$I_{\\max} = \\mathcal{E}/R$',
        hint3: '$I(\\tau) = I_{\\max}(1 - e^{-1}) = I_{\\max} \\times 0.632$',
        explanation: '1) $\\tau = 0.030/6 = 0.005$ s = 5 ms. 2) $I_{\\max} = 12/6 = 2$ A. 3) $I(\\tau) = 2(1 - e^{-1}) = 2 \\times 0.632 = 1.26$ A.'
      }
    }
  ]
};
