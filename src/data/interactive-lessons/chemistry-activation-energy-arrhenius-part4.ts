export const chemActivationEnergyArrheniusPart4Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae4-intro',
      type: 'text' as const,
      content: `# 📈 Maxwell-Boltzmann Distributions

**Part 4 of 7 — Reading Energy Distributions to Explain Rates**

---

### Topics in This Part

| Section |
|---------|
| 📌 Anatomy of a Maxwell-Boltzmann Graph |
| Comparing Two Temperatures |
| 📌 Temperature vs. Catalyst on the Same Graph |
| ✍️ Writing an AP-Style Justification |

> 🔑 **Why this matters:** The CED uses the Maxwell-Boltzmann distribution to give a **qualitative** estimate of the fraction of collisions with enough energy to react, and of how that fraction depends on temperature (CED 5.5.A.3). AP questions ask you to read, sketch, and explain these graphs.

---

### What You'll Master in Part 4
- Identifying the higher-temperature curve and the fraction of particles above $E_a$
- Showing the effect of a catalyst and the effect of temperature on the same graph
- Writing a complete particle-level justification for a rate change`
    },
    {
      id: 'ae4-mb-anatomy',
      type: 'text' as const,
      content: `
## 📌 Anatomy of a Maxwell-Boltzmann Graph

| Feature | Meaning |
|---------|---------|
| x-axis | Kinetic energy of a particle (or collision) |
| y-axis | Number (or fraction) of particles with that energy |
| Peak | The most common energy in the sample |
| Long right-hand tail | A few particles with very high energy |
| Vertical line at $E_a$ | The minimum energy needed to reach the transition state |
| Area to the right of $E_a$ | The fraction of collisions energetic enough to react |
| Total area | All the particles in the sample (constant for a given sample) |


---

### Comparing Two Temperatures

For the same sample at two temperatures, $T_1$ and $T_2$ with $T_2 > T_1$:

| Feature | Curve at $T_1$ (lower) | Curve at $T_2$ (higher) |
|---------|----------------------|-------------------------|
| Peak position | Lower energy | Shifted to higher energy |
| Peak height | Taller | Shorter |
| Spread | Narrower | Broader |
| Area beyond $E_a$ | Smaller | **Larger** |
| Total area | Same | Same |

> 💡 **Tip:** To pick the higher-temperature curve, look for the one that is **flatter and stretched to the right**, not the taller one.
      `
    },
    {
      id: 'ae4-graph-quiz',
      type: 'multiple-choice' as const,
      content: `
**Reading the Distribution** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two Maxwell-Boltzmann curves for the same gas are shown. Curve P has a tall, narrow peak at low energy; curve Q is shorter and extends farther to the right. Which statement is correct?',
            options: [
              'Curve P represents the higher temperature because its peak is taller',
              'Curve Q represents the higher temperature',
              'Both curves represent the same temperature with different amounts of gas',
              'Curve Q represents a sample with a lower activation energy'
            ],
            correctAnswer: 1,
            explanation: 'At a higher temperature the distribution shifts to higher energies and spreads out, so its peak is lower and broader, which describes curve Q. A taller peak means the energies are bunched together at a lower temperature, the total areas are equal for the same sample, and activation energy is a vertical line, not a property of the curve.'
          },
          {
            question: 'On a Maxwell-Boltzmann graph, what represents the fraction of collisions that can lead to reaction?',
            options: [
              'The height of the peak',
              'The area under the curve to the right of Ea',
              'The region under the curve left of Ea',
              'The energy at which the peak occurs'
            ],
            correctAnswer: 1,
            explanation: 'Only collisions with energy at least equal to Ea can reach the transition state, so the fraction that can react is the area to the right of the Ea line. The peak shows the most common energy, and the area to the left of Ea is the fraction that cannot react.'
          },
          {
            question: 'Why does the total area under a Maxwell-Boltzmann curve stay the same when the sample is heated?',
            options: [
              'Heating does not change the number of particles in the sample',
              'The activation energy decreases by the same amount the peak moves',
              'The curve is always drawn to the same height',
              'Heating removes the fastest particles from the sample'
            ],
            correctAnswer: 0,
            explanation: 'The total area represents every particle in the sample. Heating redistributes energies among the same particles, so the curve changes shape (shorter and broader) while the total area stays constant. Ea does not move, the height changes, and no particles are removed.'
          }
        ]
      }
    },
    {
      id: 'ae4-temp-vs-catalyst',
      type: 'text' as const,
      content: `
## 📌 Temperature vs. Catalyst on the Same Graph

Both heating and adding a catalyst increase the fraction of collisions that can react, but they show up differently on a Maxwell-Boltzmann graph.

| Change | What moves on the graph | Why the shaded area grows |
|--------|------------------------|---------------------------|
| **Raise the temperature** | The **curve** changes shape (shorter, broader, shifted right); the $E_a$ line stays put | More particles have high energies |
| **Add a catalyst** | The **$E_a$ line** moves to the left (lower $E_a$); the curve stays the same | The catalyzed pathway has a lower barrier, so more of the existing particles clear it |
| **Increase concentration** | Neither | The **fraction** above $E_a$ is unchanged; the rate rises because there are more collisions per second |


---

### Worked Example

> **Problem:** A reaction is run at 300 K, then at 300 K with a catalyst, then at 330 K without a catalyst. Both changes double the rate. Describe how a student should draw each change on a Maxwell-Boltzmann graph.

> **Solution:**

1. **Catalyst at 300 K:** keep the 300 K curve; draw a second vertical line to the left of the original $E_a$, labeled $E_{a,\\text{cat}}$. Shade the larger area to the right of the new line.
2. **330 K, no catalyst:** keep the original $E_a$ line; draw a second curve that is shorter, broader, and shifted to higher energy. Shade the larger area under the new curve to the right of $E_a$.
3. **What both drawings show:** a larger fraction of collisions with enough energy to react, which explains the faster rate.
      `
    },
    {
      id: 'ae4-graph-drill',
      type: 'input-boxes' as const,
      content: `
**What Moves on the Graph?** 🧮

For each change, type **curve** if the Maxwell-Boltzmann curve changes shape, **line** if the $E_a$ line moves, or **neither**.

**1)** The reaction mixture is heated from 25 °C to 50 °C.

**2)** A catalyst is added at constant temperature.

**3)** More reactant is added at constant temperature and volume.
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'curve', acceptableAnswers: ['curve', 'the curve'] }, { question: '(2)', answer: 'line', acceptableAnswers: ['line', 'the line', 'Ea line'] }, { question: '(3)', answer: 'neither', acceptableAnswers: ['neither', 'none'] }],
        hint1: 'Temperature changes the energies of the particles.',
        hint2: 'A catalyst changes the pathway, not the particles.',
        hint3: 'Concentration changes how many collisions occur, not the energy distribution or the barrier.',
        explanation: '1) Heating changes the distribution of particle energies, so the curve flattens and shifts right. 2) A catalyst lowers the barrier, so the Ea line moves left. 3) Adding reactant increases the collision frequency but not the shape of the distribution or the barrier.'
      }
    },
    {
      id: 'ae4-justification',
      type: 'text' as const,
      content: `
## ✍️ Writing an AP-Style Justification

AP free-response questions often ask you to "explain, in terms of collisions" why a rate changed. A complete answer links the particle level to the observation.

### A Reliable Sentence Frame

> At the higher temperature, the particles have a greater average kinetic energy, so a **larger fraction of collisions** have energy **equal to or greater than the activation energy**. More collisions are therefore successful per unit time, and the rate increases.

### For a Catalyst

> The catalyst provides an **alternative reaction pathway with a lower activation energy**. At the same temperature, a larger fraction of collisions have enough energy to react, so the rate increases.


---

### Common Mistakes

| ❌ Weak or wrong | ✅ Better |
|-----------------|----------|
| "The molecules move faster." | "A larger fraction of collisions have energy ≥ $E_a$." |
| "Heating lowers the activation energy." | "Heating increases the fraction of particles above the same $E_a$." |
| "The catalyst gives the molecules more energy." | "The catalyst lowers $E_a$ by providing a new pathway." |
| "More collisions" (alone) | "More **successful** collisions per unit time" |
      `
    },
    {
      id: 'ae4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Maxwell-Boltzmann Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Compared with the lower-temperature curve, the higher-temperature curve has a peak that is',
            options: ['taller and at lower energy', 'shorter and at higher energy', 'the same height and position', 'taller and at higher energy']
          },
          {
            label: 'On a Maxwell-Boltzmann graph, adding a catalyst is shown by',
            options: ['a taller curve', 'moving the Ea line to the left', 'moving the Ea line to the right', 'a curve shifted to higher energy']
          },
          {
            label: 'Increasing the concentration of a reactant changes the fraction of collisions above Ea by',
            options: ['increasing it', 'decreasing it', 'not changing it', 'doubling it']
          },
          {
            label: 'The best particle-level explanation of a faster rate at higher temperature mentions',
            options: ['a lower activation energy', 'a larger fraction of collisions with energy ≥ Ea', 'a more negative ΔH', 'a larger equilibrium constant']
          }
        ],
        correctAnswers: ['shorter and at higher energy', 'moving the Ea line to the left', 'not changing it', 'a larger fraction of collisions with energy ≥ Ea'],
        hint1: 'The distribution spreads out toward higher energies.',
        hint2: 'A catalyst lowers the barrier.',
        hint3: 'Concentration changes how many collisions occur, not their energies.',
        explanation: 'At higher temperature the peak is shorter and shifted to higher energy. A catalyst moves the Ea line left. More reactant raises the collision frequency but not the fraction above Ea. A faster rate on heating is explained by a larger fraction of collisions with energy ≥ Ea.'
      }
    },
    {
      id: 'ae4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Maxwell-Boltzmann Distributions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student claims that heating a reaction mixture increases the rate because it lowers the activation energy. Which response best corrects the claim?',
            options: [
              'Heating raises the activation energy, but collisions become more frequent',
              'Ea is unchanged, but more collisions reach it',
              'Heating changes only the frequency of collisions, not their energies',
              'Heating lowers Ea only when a catalyst is also present'
            ],
            correctAnswer: 1,
            explanation: 'The activation energy belongs to the reaction pathway and does not change with temperature. Heating broadens the energy distribution so more collisions clear the same barrier. Collision energies, not only frequencies, change on heating, and a catalyst changes Ea at any temperature.'
          },
          {
            question: 'Which change increases the rate of a reaction WITHOUT changing the fraction of collisions that have energy ≥ Ea?',
            options: [
              'Raising the temperature',
              'Adding a catalyst',
              'Putting more molecules in the flask',
              'Using a pathway with a lower barrier'
            ],
            correctAnswer: 2,
            explanation: 'A higher concentration produces more collisions per second, but the energy distribution and the barrier are unchanged, so the fraction above Ea stays the same. Heating changes the distribution, and a catalyst (a lower-barrier pathway) moves the Ea line.'
          }
        ]
      }
    }
  ]
}
