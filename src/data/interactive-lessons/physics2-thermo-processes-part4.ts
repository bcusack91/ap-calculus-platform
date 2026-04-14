export const physics2ThermoProcPart4Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p4-intro',
      type: 'text' as const,
      content: `# 🔄 Entropy & the Second Law

**Part 4 of 7 — Why Time Has a Direction**

---

### The Second Law of Thermodynamics

There are several equivalent statements, all saying the same thing:

| Statement | Author | Key Idea |
|-----------|--------|----------|
| **Clausius** | Rudolf Clausius | Heat cannot spontaneously flow from cold to hot |
| **Kelvin-Planck** | Lord Kelvin | No engine can convert heat entirely to work |
| **Entropy** | Modern | In any real process, $\\Delta S_{universe} \\geq 0$ |

All three are equivalent — any one implies the others.

---

### What Is Entropy?

Entropy ($S$) is a **state function** that measures the dispersal of energy and the number of accessible microstates.

**Clausius definition** (macroscopic):

$$\\boxed{\\Delta S = \\frac{Q_{rev}}{T}}$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $\\Delta S$ | Change in entropy | J/K |
| $Q_{rev}$ | Heat exchanged in a reversible process | J |
| $T$ | Temperature at which heat flows | K |

> ⚠️ **Key:** $Q_{rev}$ must be the heat for a **reversible** path between the same states, even if the actual process is irreversible. Entropy change is the same either way because $S$ is a state function.

---

### Calculating Entropy Changes

| Process | $\\Delta S$ |
|---------|-----------|
| Isothermal heat transfer | $Q/T$ |
| Heating at constant volume | $nC_v \\ln(T_f/T_i)$ |
| Heating at constant pressure | $nC_p \\ln(T_f/T_i)$ |
| Free expansion of ideal gas | $nR \\ln(V_f/V_i) > 0$ |
| Adiabatic reversible | $0$ (isentropic) |
| Phase change at $T$ | $\\Delta S = mL/T$ |

---

### The Key Inequality

$$\\boxed{\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} \\geq 0}$$

| Process Type | $\\Delta S_{universe}$ |
|-------------|----------------------|
| Reversible | $= 0$ (limiting ideal) |
| Irreversible (real) | $> 0$ (always increases) |
| Impossible | $< 0$ (violates 2nd Law) |`
    },
    {
      id: 'thermodynamicprocesses-p4-statistical',
      type: 'text' as const,
      content: `### Boltzmann's Statistical Interpretation

$$\\boxed{S = k_B \\ln \\Omega}$$

| Symbol | Meaning | Value |
|--------|---------|-------|
| $k_B$ | Boltzmann constant | $1.38 \\times 10^{-23}$ J/K |
| $\\Omega$ | Number of microstates | dimensionless |

A **microstate** is one specific arrangement of particles. $\\Omega$ counts how many arrangements correspond to the same macrostate (same $T$, $P$, $V$).

---

| Example | $\\Omega$ | Entropy |
|---------|----------|---------|
| Gas molecules all in left half of box | Very small | Very low |
| Gas molecules spread throughout box | Enormous | High |
| Dropping a hot block into cold water → reaching equilibrium | Increases | $\\Delta S > 0$ |

> 🔑 **Insight:** The second law is fundamentally **statistical**. Systems evolve toward macrostates with overwhelmingly more microstates. For $N \\sim 10^{23}$ particles, the probability of spontaneous decrease in entropy is essentially zero.

---

### Irreversibility — Why We Can't Put the Egg Back Together

Processes that increase universe entropy are **irreversible**:

| Irreversible Process | Why $\\Delta S_{univ} > 0$ |
|---------------------|--------------------------|
| Heat flows from hot to cold | Energy disperses to more microstates |
| Free expansion of gas | Volume increases → more position microstates |
| Friction converts KE to heat | Ordered motion → random thermal motion |
| Mixing two different gases | More arrangements when mixed |
| Breaking an egg | Ordered structure → disordered |

---

### Entropy and the Carnot Engine

For a Carnot cycle: $\\frac{Q_H}{T_H} = \\frac{Q_C}{T_C}$, so $\\Delta S_{universe} = 0$ (reversible).

For any real engine: $\\frac{Q_C}{T_C} > \\frac{Q_H}{T_H}$, so $\\Delta S_{universe} > 0$ (irreversible).

This is why real engines always have $e < e_{Carnot}$.

---

### Third Law of Thermodynamics

As $T \\to 0$ K, the entropy of a perfect crystal approaches zero ($\\Omega \\to 1$). This means absolute zero is **unattainable** — it would require an infinite number of steps to reach.`
    },
    {
      id: 'thermodynamicprocesses-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A block of ice melts at 273 K, absorbing 1000 J. The entropy change of the ice is:',
            options: ['$+3.66$ J/K', '$-3.66$ J/K', '0 J/K', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$\\Delta S = Q/T = 1000/273 = +3.66$ J/K. The ice absorbs heat, so its entropy increases.'
          },
          {
            question: 'Which statement is true about entropy?',
            options: ['Entropy of a system can decrease in a process', 'Entropy of the universe can decrease', 'Entropy only changes in irreversible processes', 'Entropy is always maximized for a system'],
            correctAnswer: 0,
            explanation: 'A system\'s entropy CAN decrease (e.g., freezing water), but the universe\'s entropy must increase to compensate. $\\Delta S_{univ} \\geq 0$ always.'
          },
          {
            question: 'In a free expansion of an ideal gas into a vacuum:',
            options: ['$\\Delta S_{gas} > 0$, $\\Delta S_{surr} = 0$, $\\Delta S_{univ} > 0$', '$\\Delta S_{gas} = 0$ because $Q = 0$', '$\\Delta S_{univ} = 0$ because no heat flows', '$\\Delta S_{gas} < 0$ because work is done'],
            correctAnswer: 0,
            explanation: 'Free expansion is irreversible. $Q = W = 0$, but $\\Delta S \\neq Q/T$ because the process is irreversible. Using the reversible isothermal path: $\\Delta S = nR\\ln(V_f/V_i) > 0$.'
          },
          {
            question: 'The Boltzmann equation $S = k_B \\ln \\Omega$ shows that entropy is fundamentally a measure of:',
            options: ['The number of accessible microstates', 'Heat stored in a system', 'Temperature change', 'Energy stored in bonds'],
            correctAnswer: 0,
            explanation: '$\\Omega$ counts microstates — the more ways particles can arrange themselves to produce the same macrostate, the greater the entropy.'
          }
        ]
      }
    },
    {
      id: 'thermodynamicprocesses-p4-input',
      type: 'input-boxes' as const,
      content: `
**Entropy Calculations** 🧮

**1)** 500 J of heat flows from a 400 K reservoir to a 300 K reservoir. What is $\\Delta S_{universe}$? (in J/K, round to 2 decimal places)

**2)** An ideal gas expands freely to 4× its original volume. What is $\\Delta S$ in terms of $nR$? (round to 2 decimal places, give coefficient of $nR$)

**3)** A Carnot engine absorbs 800 J at 500 K and rejects heat at 250 K. How much heat is rejected? (in J)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.42', '1.39', '400'],
        hint1: '$\\Delta S_{univ} = \\Delta S_{cold} + \\Delta S_{hot} = Q/T_{cold} - Q/T_{hot}$',
        hint2: '$\\Delta S = nR\\ln(V_f/V_i) = nR\\ln(4)$',
        hint3: 'For Carnot: $Q_C/T_C = Q_H/T_H$',
        explanation: '1) $\\Delta S = 500/300 - 500/400 = 1.667 - 1.250 = 0.42$ J/K. 2) $\\Delta S = nR\\ln(4) = 1.39nR$. 3) $Q_C = Q_H \\cdot T_C/T_H = 800 \\times 250/500 = 400$ J.'
      }
    }
  ]
};