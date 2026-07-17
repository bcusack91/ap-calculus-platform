export const physics2ThermoProcPart1Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p1-intro',
      type: 'text' as const,
      content: `# 🔥 Thermodynamic Processes

**Part 1 of 7 — PV Diagrams & The First Law**

---

### The First Law of Thermodynamics

The first law is simply **conservation of energy** applied to thermal systems:

$$\\boxed{\\Delta U = Q - W}$$

| Symbol | Meaning | Positive When |
|--------|---------|--------------|
| $\\Delta U$ | Change in internal energy | Temperature rises |
| $Q$ | Heat transferred | Heat flows INTO system |
| $W$ | Work done | Gas EXPANDS ($V$ increases) |

---

### The Four Thermodynamic Processes

| Process | What's Constant | PV Diagram Shape | Work | First Law Simplification |
|---------|----------------|-----------------|------|-------------------------|
| **Isobaric** | Pressure ($P$) | Horizontal line | $W = P\\Delta V$ | $\\Delta U = Q - P\\Delta V$ |
| **Isochoric** | Volume ($V$) | Vertical line | $W = 0$ | $\\Delta U = Q$ |
| **Isothermal** | Temperature ($T$) | Hyperbola ($PV = const$) | $W = nRT\\ln(V_f/V_i)$ | $Q = W$ (since $\\Delta U = 0$) |
| **Adiabatic** | No heat ($Q = 0$) | Steeper than isothermal | $W = -\\Delta U$ | $\\Delta U = -W$ |

---

### Work on PV Diagrams

$$\\boxed{W = \\text{area under the curve on a PV diagram}}$$

| Direction | Sign of $W$ | Area |
|-----------|------------|------|
| Expansion (right →) | $W > 0$ | Positive area |
| Compression (← left) | $W < 0$ | Negative area |
| Clockwise cycle | Net $W > 0$ | Engine — outputs work |
| Counterclockwise cycle | Net $W < 0$ | Refrigerator — requires work input |

> 🔑 **Key Insight:** For a complete cycle, $\\Delta U = 0$ (returns to same state), so $W_{net} = Q_{net}$. The net work equals the area ENCLOSED by the cycle on the PV diagram.

---

### Sign Convention Summary

| Scenario | $Q$ | $W$ | $\\Delta U$ |
|----------|-----|-----|------------|
| Gas heated at constant volume | $+$ | $0$ | $+$ |
| Gas expands in vacuum (free expansion) | $0$ | $0$ | $0$ |
| Adiabatic expansion | $0$ | $+$ | $-$ (cools!) |
| Adiabatic compression | $0$ | $-$ | $+$ (heats!) |
| Isothermal expansion | $+$ | $+$ | $0$ |

> ⚠️ **AP Trap:** Many students confuse the sign of work. Remember: $W$ is work done BY the gas. Expansion = positive work. Some textbooks define $W$ as work done ON the gas, flipping the sign. AP Physics 2 uses $\\Delta U = Q - W$ (work BY).`
    },
    {
      id: 'thermodynamicprocesses-p1-isobaric',
      type: 'text' as const,
      content: `### Isobaric Process in Detail ($P = $ constant)

$$W = P\\Delta V = P(V_f - V_i)$$

Since $PV = nRT$: at constant $P$, $V \\propto T$

$$\\frac{V_f}{V_i} = \\frac{T_f}{T_i}$$

---

### Isochoric Process in Detail ($V = $ constant)

$$W = 0 \\quad \\text{(no displacement, no work)}$$

All heat goes to changing internal energy: $Q = \\Delta U$

Since $PV = nRT$: at constant $V$, $P \\propto T$

$$\\frac{P_f}{P_i} = \\frac{T_f}{T_i}$$

---

### Reading PV Diagrams

| Feature | How to Read It |
|---------|----------------|
| Horizontal line | Isobaric (constant $P$) |
| Vertical line | Isochoric (constant $V$) |
| Curved line going right | Gas expanding — check if isothermal or adiabatic |
| Higher isotherm | Higher temperature |
| Area under curve | Work done in that process |
| Enclosed area in cycle | Net work output |

---

### Comparing Processes Starting from Same Point

If a gas expands from the same initial state:

| Process | Final $T$ relative to initial | Work (area) |
|---------|------------------------------|-------------|
| Isobaric expansion | $T$ increases | Largest work |
| Isothermal expansion | $T$ unchanged | Medium work |
| Adiabatic expansion | $T$ decreases | Smallest work |

> 🔑 **Why adiabatic gives least work:** With no heat input ($Q = 0$), expansion must come from internal energy → gas cools → pressure drops faster → less area under curve.`
    },
    {
      id: 'thermodynamicprocesses-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an isochoric process, the work done by the gas is:',
            options: ['$P\\Delta V$', 'Zero', '$nRT\\ln(V_f/V_i)$', 'Negative'],
            correctAnswer: 1,
            explanation: 'Isochoric = constant volume. $W = P\\Delta V = 0$ since $\\Delta V = 0$. No expansion means no work.'
          },
          {
            question: 'On a PV diagram, a clockwise cycle represents:',
            options: ['A refrigerator', 'A heat engine (net work output)', 'An impossible process', 'Constant temperature'],
            correctAnswer: 1,
            explanation: 'Clockwise cycle: net positive work ($W_{net} > 0$). The system does more work expanding than is done on it compressing → heat engine.'
          },
          {
            question: 'In an adiabatic expansion, the gas temperature:',
            options: ['Increases', 'Stays the same', 'Decreases', 'Cannot be determined'],
            correctAnswer: 2,
            explanation: 'Adiabatic: $Q = 0$. Expansion: $W > 0$. First Law: $\\Delta U = 0 - W < 0$ → temperature drops.'
          },
          {
            question: 'For a gas expanding from the same initial state, which process produces the MOST work?',
            options: ['Adiabatic', 'Isothermal', 'Isobaric', 'Isochoric'],
            correctAnswer: 2,
            explanation: 'Isobaric keeps $P$ constant (highest), so the area under the PV curve is largest. Adiabatic produces the least because pressure drops fastest.'
          }
        ]
      }
    },
    {
      id: 'thermodynamicprocesses-p1-input',
      type: 'input-boxes' as const,
      content: `
**First Law Practice** 🧮

A gas undergoes an isobaric expansion at $P = 2 \\times 10^5$ Pa from $V_i = 0.01$ $m^{3}$ to $V_f = 0.03$ $m^{3}$. $Q = 10000$ J is added.

**1)** Work done by the gas? (in J)

**2)** $\\Delta U$? (in J)

**3)** Did the temperature increase, decrease, or stay the same? (increase/decrease/same)

**4)** By what factor did the absolute temperature change? ($T_f/T_i$)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['4000', '6000', 'increase', '3'],
        hint1: '$W = P\\Delta V = 2 \\times 10^5 \\times 0.02$',
        hint2: '$\\Delta U = Q - W = 10000 - 4000$',
        hint3: 'Positive $\\Delta U$ means internal energy increased',
        hint4: 'At constant $P$: $T_f/T_i = V_f/V_i = 0.03/0.01$',
        explanation: '1) $W = 2 \\times 10^5 \\times 0.02 = 4000$ J. 2) $\\Delta U = 10000 - 4000 = 6000$ J. 3) Increase ($\\Delta U > 0$). 4) $T_f/T_i = V_f/V_i = 3$ (temperature triples at constant pressure when volume triples).'
      }
    }
  ]
};