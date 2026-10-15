export const chemActivationEnergyArrheniusPart3Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae3-intro',
      type: 'text' as const,
      content: `# 📐 The Arrhenius Equation

**Part 3 of 7 — How Temperature and Activation Energy Control k**

---

### The Arrhenius Equation

$$k = Ae^{-E_a/RT}$$

| Symbol | Meaning |
|--------|---------|
| $k$ | Rate constant |
| $A$ | Frequency factor (how often collisions occur with a suitable orientation) |
| $E_a$ | Activation energy |
| $T$ | Absolute temperature |

> 🔑 **Why this matters:** The Arrhenius equation summarizes collision theory: the rate constant rises with temperature and falls as the activation energy rises. On the AP exam you reason with these trends; calculations with the equation are not assessed (CED 5.6 exclusion).

---

### What You'll Master in Part 3
- Explaining what each part of $k = Ae^{-E_a/RT}$ represents
- Predicting how $k$ changes with temperature and with $E_a$
- Explaining why reactions with large $E_a$ are especially sensitive to temperature`
    },
    {
      id: 'ae3-equation',
      type: 'text' as const,
      content: `
## 📌 Reading the Arrhenius Equation

$$\\boxed{k = Ae^{-E_a/(RT)}}$$

The equation is a compact statement of the collision model (CED 5.6.A.4).

---

### What Each Part Means

**$A$ (frequency factor):** reflects how often molecules collide with an orientation that allows bonds to rearrange.
- Reactions between simple particles have a larger $A$.
- Reactions that need a very specific orientation have a smaller $A$.

**$e^{-E_a/(RT)}$:** reflects the fraction of collisions with enough energy to reach the transition state.
- As $T$ increases, this fraction grows, so $k$ grows.
- As $E_a$ increases, this fraction shrinks, so $k$ shrinks.


---

### Trend Summary

| Change | Effect on $k$ | Reason |
|--------|---------------|--------|
| Raise $T$ | Increases | More collisions have energy ≥ $E_a$ |
| Larger $E_a$ (same $T$) | Smaller | Fewer collisions reach the transition state |
| Add a catalyst | Increases | New pathway with a lower $E_a$ |
| Raise concentration | **No change** to $k$ | Rate rises through the rate law, but $k$ itself does not change |
      `
    },
    {
      id: 'ae3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Arrhenius Equation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to the Arrhenius equation, increasing temperature:',
            options: [
              'Decreases k',
              'Increases k',
              'Has no effect on k',
              'Changes Ea'
            ],
            correctAnswer: 1,
            explanation: 'A higher temperature means a larger fraction of collisions have energy at or above Ea, so the rate constant k increases. Ea is a property of the pathway and does not change with temperature.'
          },
          {
            question: 'Which statement best explains why the rate constant of a reaction increases when the temperature increases?',
            options: [
              'The activation energy of the reaction decreases',
              'More collisions have energy ≥ Ea',
              'The reaction becomes more exothermic at higher temperature',
              'Each collision lasts longer, giving bonds more time to break'
            ],
            correctAnswer: 1,
            explanation: 'Heating spreads the Maxwell-Boltzmann distribution toward higher energies, so more collisions can reach the transition state. Ea is unchanged by temperature, ΔH does not control rate, and faster particles collide more briefly, not longer.'
          },
          {
            question: 'Two reactions have the same A value. Reaction 1 has Ea = 40 kJ/mol, Reaction 2 has Ea = 80 kJ/mol. At the same temperature:',
            options: [
              'The lower-Ea reaction has the larger k',
              'The higher-Ea reaction has the larger k',
              'Both have the same rate constant',
              'Cannot determine without knowing T'
            ],
            correctAnswer: 0,
            explanation: 'With the same A and T, the lower activation energy means a larger fraction of collisions are energetic enough to react, so Reaction 1 has the larger k. The temperature is the same for both, so its value is not needed to compare them.'
          }
        ]
      }
    },
    {
      id: 'ae3-temperature-effects',
      type: 'text' as const,
      content: `
## 🌡️ Temperature Sensitivity and Ea

### Which Reactions Speed Up Most When Heated?

The sensitivity of $k$ to temperature depends on $E_a$:

- **Large $E_a$**: the threshold sits far out in the tail of the Maxwell-Boltzmann curve, where heating makes the area beyond $E_a$ grow by a large **factor**. The rate constant rises steeply.
- **Small $E_a$**: most collisions already clear the barrier, so heating changes the fraction by a smaller factor. The rate constant rises gently.


---

### A Useful Rule of Thumb

For many reactions near room temperature, a **10 °C increase roughly doubles** the rate. Reactions with larger activation energies speed up by more than that; reactions with smaller activation energies by less.


---

### Graph Shapes to Recognize

| Graph | Shape |
|-------|-------|
| $k$ vs. $T$ | Curves **upward** (increases faster and faster) |
| Maxwell-Boltzmann at higher $T$ | Lower, broader peak shifted to higher energy |

> ⚠️ **Warning:** Temperature changes $k$; concentration does not. If an AP question says "the concentration is doubled," the rate may change through the rate law, but the rate constant stays the same.
      `
    },
    {
      id: 'ae3-trend-drill',
      type: 'input-boxes' as const,
      content: `
**Predict the Trend** 🧮

For each change, type **increases**, **decreases**, or **unchanged** to describe the effect on the **rate constant k**.

**1)** The temperature of the reaction mixture is raised from 25 °C to 45 °C.

**2)** The concentration of a reactant is doubled at constant temperature.

**3)** A catalyst that provides a pathway with a lower $E_a$ is added at constant temperature.
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'increases', acceptableAnswers: ['increases', 'increase'] }, { question: '(2)', answer: 'unchanged', acceptableAnswers: ['unchanged', 'no change', 'same'] }, { question: '(3)', answer: 'increases', acceptableAnswers: ['increases', 'increase'] }],
        hint1: 'What happens to the fraction of collisions with energy ≥ $E_a$?',
        hint2: 'Concentration appears in the rate law, not in the Arrhenius equation.',
        hint3: 'A lower barrier means more collisions can clear it at the same temperature.',
        explanation: '1) Increases: more collisions have enough energy. 2) Unchanged: the rate increases (if the reactant appears in the rate law), but k depends only on temperature and the pathway. 3) Increases: the catalyzed pathway has a lower $E_a$, so a larger fraction of collisions succeed.'
      }
    },
    {
      id: 'ae3-a-factor',
      type: 'text' as const,
      content: `
## 📊 The Frequency Factor A

The frequency factor $A$ captures the parts of the collision model that are **not** about energy: how often particles collide, and how often those collisions have a suitable orientation.


---

### Comparing Reactions with Different A Values

| Reaction feature | Effect on $A$ | Why |
|-----------------|---------------|-----|
| Small, simple particles (e.g., atoms) | Larger | Nearly every orientation works |
| Large molecules that must meet at one specific site | Smaller | Most orientations fail |

> 🔑 **Key Point for AP:** Nearly all of the temperature dependence of $k$ comes from the energy term, not from $A$. When you explain a rate increase on heating, focus on the larger fraction of collisions with energy ≥ $E_a$.
      `
    },
    {
      id: 'ae3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Arrhenius Equation Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Raising the temperature makes the rate constant k',
            options: ['larger', 'smaller', 'unchanged', 'negative']
          },
          {
            label: 'A reaction with high Ea will be',
            options: ['fast at all temperatures', 'slow at low T, faster at high T', 'independent of temperature', 'always slow']
          },
          {
            label: 'At the same temperature and A, the reaction with the larger Ea has',
            options: ['the larger k', 'the smaller k', 'the same k', 'no k']
          },
          {
            label: 'When the temperature is raised, the activation energy',
            options: ['increases', 'decreases', 'stays the same', 'becomes zero']
          }
        ],
        correctAnswers: ['larger', 'slow at low T, faster at high T', 'the smaller k', 'stays the same'],
        hint1: 'More collisions clear the energy barrier at higher T.',
        hint2: 'A high barrier is cleared by few collisions until the temperature is raised.',
        hint3: 'A higher barrier means fewer successful collisions.',
        explanation: 'Raising T increases k. High-Ea reactions are slow at low T and speed up markedly when heated. With everything else equal, a larger Ea gives a smaller k. Ea is a property of the pathway, so heating does not change it.'
      }
    },
    {
      id: 'ae3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Arrhenius Equation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which graph of k vs T correctly shows the Arrhenius relationship?',
            options: [
              'A straight line through (0, 0)',
              'A decreasing exponential curve',
              'An increasing curve that gets steeper',
              'A parabola'
            ],
            correctAnswer: 2,
            explanation: 'As T increases, k increases, and it increases faster and faster, so the k vs T graph curves upward. It is not linear, and k never decreases on heating.'
          },
          {
            question: 'Reaction X has Ea = 30 kJ/mol and reaction Y has Ea = 90 kJ/mol. Both are heated from 300 K to 320 K. Which statement is correct?',
            options: [
              'The rate constant of X increases by a larger factor than that of Y',
              'The rate constant of Y increases by a larger factor than that of X',
              'Both rate constants increase by the same factor',
              'The rate constant of Y decreases because its barrier is higher'
            ],
            correctAnswer: 1,
            explanation: 'The larger the activation energy, the farther out in the tail of the Maxwell-Boltzmann curve the threshold lies, and the larger the factor by which heating increases the fraction of successful collisions. So Y is more temperature-sensitive. Both rate constants increase on heating.'
          }
        ]
      }
    }
  ]
}
