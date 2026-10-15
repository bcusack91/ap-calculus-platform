export const chemNernstEquationConcentrationPart5Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne5-intro',
      type: 'text' as const,
      content: `# 📉 Cell Potential Under Nonstandard Conditions

**Part 5 of 7 — A Galvanic Cell Over Its Lifetime**

---

### Topics in This Part

| Section |
|---------|
| ⏳ Following a Daniell Cell From Start to Finish |
| 📈 Reading a Potential-vs-Time Graph |
| 🔌 Recharging: Driving the Reaction Backward |
| 🧪 Worked Example — Explaining the Data |

> 🔑 **Key Concept:** Everything a "battery running down" shows you, from falling voltage to changing electrode masses, follows from one idea: the cell reaction moves toward equilibrium, so $Q$ rises toward $K$ and $E$ falls toward zero.

> 📝 The chemistry of specific commercial batteries and fuel cells is not assessed on the AP exam. The general principles below are.

---

### What You'll Master in Part 5
- Describe macroscopic and particle-level changes in each half-cell as a cell runs (CED 9.8)
- Explain the shape of a cell-potential-vs-time graph with $Q$ and $K$ (CED 9.10)
- Explain how an external source can reverse a thermodynamically favored cell reaction (CED 9.7)`
    },
    {
      id: 'ne5-lifetime',
      type: 'text' as const,
      content: `
## ⏳ Following a Daniell Cell From Start to Finish

$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s) \\qquad E° = +1.10 \\text{ V}$$

| Stage | $[\\text{Cu}^{2+}]$ | $[\\text{Zn}^{2+}]$ | $Q$ | $E$ |
|-------|------------------|------------------|-----|-----|
| Assembled at 1 M / 1 M | 1 M | 1 M | 1 | 1.10 V |
| Running | falling | rising | rising | just under 1.10 V |
| Nearly exhausted | very small | near 2 M | very large | dropping quickly |
| Equilibrium | tiny | about 2 M | $K$ | 0 |

### What you could observe

| Observation | Zinc half-cell (anode) | Copper half-cell (cathode) |
|-------------|------------------------|----------------------------|
| Electrode mass | decreases (Zn dissolves) | increases (Cu plates out) |
| Solution | $[\\text{Zn}^{2+}]$ rises | blue color fades as $\\text{Cu}^{2+}$ is used |
| Salt-bridge ions arriving | anions | cations |

> 💡 Because $K$ for this cell is enormous, $Q$ must become very large before $E$ drops much. The potential stays close to 1.10 V for most of the cell's life and then falls steeply once $\\text{Cu}^{2+}$ is nearly used up.
      `
    },
    {
      id: 'ne5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding — A Cell Running Down** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'As a Zn/Cu²⁺ galvanic cell operates, which pair of changes occurs?',
            options: [
              'The zinc electrode gains mass and [Cu²⁺] increases',
              'The zinc electrode loses mass and [Cu²⁺] decreases',
              'The zinc electrode keeps its mass and [Zn²⁺] decreases',
              'Both electrodes keep constant mass and only E changes'
            ],
            correctAnswer: 1,
            explanation: 'Zinc is oxidized at the anode, so the zinc electrode loses mass as $\\text{Zn}^{2+}$ enters solution. $\\text{Cu}^{2+}$ is reduced at the cathode, so its concentration falls and copper plates onto the cathode. The other pairs reverse at least one of these changes.'
          },
          {
            question: 'Why does the potential of a working galvanic cell fall over time?',
            options: [
              'E° gradually decreases as the electrodes are used up',
              'Product ions build up and reactant ions run low, so Q nears K',
              'The salt bridge runs out of ions, so charge stops moving',
              'The electrodes become coated, so fewer electrons can leave'
            ],
            correctAnswer: 1,
            explanation: 'As the reaction proceeds, $Q$ increases toward $K$ and the driving force shrinks, so $E$ falls toward zero. $E°$ is fixed for the reaction, and the salt bridge and electrode surfaces affect how much current flows, not the equilibrium-driven potential.'
          },
          {
            question: 'A cell with a very large K is run until its potential has fallen to 0.50 V from an initial 1.10 V. Which statement is correct?',
            options: [
              'Q has risen all the way to K',
              'Q has dropped to a value below 1',
              'Q lies between 1 and K',
              'Q has risen past the value of K'
            ],
            correctAnswer: 2,
            explanation: 'The potential is below $E°$, so $Q > 1$, but it is still positive, so the cell has not reached equilibrium and $Q < K$. $Q = K$ would give zero, and $Q > K$ would give a negative potential.'
          }
        ]
      }
    },
    {
      id: 'ne5-graph',
      type: 'text' as const,
      content: `
## 📈 Reading a Potential-vs-Time Graph

A typical graph of $E$ versus time for a galvanic cell delivering a steady current looks like this in words:

1. **Start:** $E$ near $E°$ (or above it if the cell was built with excess reactant ion).
2. **Long plateau:** $E$ falls slowly while $Q$ is still far below $K$.
3. **Steep drop:** the limiting reactant ion runs low, $Q$ climbs rapidly, and $E$ plunges.
4. **End:** $E = 0$ at equilibrium.

> 🔑 **AP Connection:** When asked to justify a feature of such a graph, name the species whose concentration changed, say how that changes $Q$, and connect $Q$'s approach to $K$ to the falling potential.

---

## 🔌 Recharging: Driving the Reaction Backward

A thermodynamically favored reaction can be reversed only by supplying energy from outside (CED 9.7.A.1). Connecting an external power source with a voltage **greater than** the cell's own potential, in the opposite direction:

- forces electrons back into the zinc electrode, so $\\text{Zn}^{2+}$ is **reduced** to Zn;
- pulls electrons out of the copper electrode, so Cu is **oxidized** to $\\text{Cu}^{2+}$;
- turns the cell into an **electrolytic** cell, with the anode and cathode labels swapped;
- moves $Q$ back down, away from $K$, restoring the cell's ability to do work.
      `
    },
    {
      id: 'ne5-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example — Explaining the Data

> **Problem:** A student builds a Ni/Ag⁺ cell, $\\text{Ni}(s) + 2\\text{Ag}^{+}(aq) \\rightarrow \\text{Ni}^{2+}(aq) + 2\\text{Ag}(s)$, with $E° = +1.05$ V, and records:

| Time (h) | Measured E (V) |
|----------|----------------|
| 0 | 1.05 |
| 2 | 1.03 |
| 4 | 1.00 |
| 6 | 0.62 |
| 7 | 0.00 |

Explain the data.

### Step 1 — Start

At $t = 0$ both ions are 1 M, so $Q = 1$ and $E = E°$.

### Step 2 — Plateau (0–4 h)

$\\text{Ag}^{+}$ is consumed and $\\text{Ni}^{2+}$ forms, so $Q = [\\text{Ni}^{2+}]/[\\text{Ag}^{+}]^2$ rises. $Q$ is still far below the very large $K$, so $E$ falls only slightly.

### Step 3 — Steep drop (4–7 h)

$\\text{Ag}^{+}$ is nearly gone. Because it is squared in the denominator, $Q$ rises sharply and $E$ falls quickly.

### Step 4 — End

At 7 h, $Q = K$: the reaction is at equilibrium and $E = 0$.
      `
    },
    {
      id: 'ne5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — A Cell Over Its Lifetime** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the Ni/Ag⁺ data above, which species\' concentration change best explains the steep drop in potential after 4 hours?',
            options: [
              'Ag⁺, because it is nearly used up and is squared in Q',
              'Ni²⁺, because it reaches its solubility limit',
              'NO₃⁻, because it leaves the salt bridge',
              'Ni(s), because the nickel electrode becomes too small'
            ],
            correctAnswer: 0,
            explanation: 'As $[\\text{Ag}^{+}]$ approaches zero, the squared term in the denominator of $Q$ shrinks rapidly, $Q$ climbs toward $K$, and $E$ falls steeply. Nitrate is a spectator ion and solid nickel does not appear in $Q$.'
          },
          {
            question: 'A dead Zn/Cu²⁺ cell is connected to a power supply that drives Zn²⁺ back to Zn. During recharging, the zinc electrode is the',
            options: [
              'The anode, since zinc atoms lose electrons there',
              'The cathode, since Zn²⁺ gains electrons there',
              'Neither, since zinc is a spectator during charging',
              'Both, since zinc changes roles partway through'
            ],
            correctAnswer: 1,
            explanation: 'Reducing $\\text{Zn}^{2+}$ to Zn is a reduction, and reduction always occurs at the cathode. The zinc electrode gains mass during recharging. Anode and cathode are defined by the half-reaction, not by a sign.'
          },
          {
            question: 'Which statement explains why a power supply is needed to recharge the cell?',
            options: [
              'Running backward has a positive E° and occurs on its own',
              'The reverse reaction has ΔG° > 0, so it needs external energy',
              'The salt bridge must be refilled by the power supply',
              'The power supply raises E° for the forward reaction'
            ],
            correctAnswer: 1,
            explanation: 'The forward reaction is thermodynamically favored, so the reverse has a negative $E°$ and a positive $\\Delta G°$. It occurs only when an external source supplies energy (CED 9.7). The power supply does not change $E°$, which is fixed for the reaction.'
          }
        ]
      }
    }
  ]
}
