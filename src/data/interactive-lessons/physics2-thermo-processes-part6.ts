export const physics2ThermoProcPart6Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Mastering Thermo Calculations**

---

### Essential Equations Reference

| Equation | When to Use |
|----------|------------|
| $PV = nRT$ | Any ideal gas state |
| $\\Delta U = Q - W$ | First law — always valid |
| $W = P\\Delta V$ | Work at constant pressure |
| $W = nRT\\ln(V_f/V_i)$ | Isothermal work |
| $\\Delta U = nC_v\\Delta T$ | Internal energy change (any process!) |
| $Q = nC_p\\Delta T$ | Heat at constant pressure |
| $Q = nC_v\\Delta T$ | Heat at constant volume |
| $PV^\\gamma = \\text{const}$ | Adiabatic process |
| $TV^{\\gamma-1} = \\text{const}$ | Adiabatic (temperature-volume form) |
| $e = 1 - T_C/T_H$ | Carnot efficiency |
| $\\Delta S = Q_{rev}/T$ | Entropy change (constant $T$) |
| $v_{rms} = \\sqrt{3RT/M}$ | Molecular speed |
| $KE_{avg} = \\frac{3}{2}k_BT$ | Molecular kinetic energy |

---

### Strategy for Thermo Problems

| Step | Action |
|------|--------|
| 1 | **Identify the process** — isobaric, isochoric, isothermal, adiabatic, or cycle |
| 2 | **List known quantities** — $P$, $V$, $T$, $n$, $Q$, $W$, $\\Delta U$ |
| 3 | **Apply the constraint** — what is constant? What is zero? |
| 4 | **Write the first law** — $\\Delta U = Q - W$ and substitute the constraint |
| 5 | **Check units** — Kelvin for $T$, Pa for $P$, m³ for $V$, J for energy |
| 6 | **Verify with sanity checks** — Does the sign make sense? |

---

### 🔍 Worked Problem 1: Isothermal Expansion

**Problem:** 2 mol of an ideal gas expands isothermally at 400 K from 10 L to 40 L. Find $W$, $Q$, and $\\Delta U$.

**Solution:**

| Step | Calculation |
|------|-------------|
| Process | Isothermal → $\\Delta T = 0$ → $\\Delta U = 0$ |
| Work | $W = nRT\\ln(V_f/V_i) = 2(8.314)(400)\\ln(40/10)$ |
| | $W = 6651 \\times 1.386 = 9220$ J |
| First law | $Q = \\Delta U + W = 0 + 9220 = 9220$ J |
| Check | $Q = W > 0$: gas absorbs heat and does positive work ✅ |`
    },
    {
      id: 'thermodynamicprocesses-p6-worked',
      type: 'text' as const,
      content: `### 🔍 Worked Problem 2: Complete Cycle Analysis

**Problem:** A monatomic ideal gas ($n = 1$ mol) undergoes a rectangular cycle on a PV diagram:

- A → B: Isobaric expansion at $P = 3 \\times 10^5$ Pa from $V = 0.01$ m³ to $V = 0.03$ m³
- B → C: Isochoric cooling at $V = 0.03$ m³ from $P = 3 \\times 10^5$ Pa to $P = 1 \\times 10^5$ Pa
- C → D: Isobaric compression at $P = 1 \\times 10^5$ Pa from $V = 0.03$ m³ to $V = 0.01$ m³
- D → A: Isochoric heating

Find the work done, heat absorbed, and efficiency.

| Step | $W$ | $Q$ | $\\Delta U$ |
|------|-----|-----|-----------|
| A → B | $P\\Delta V = 3 \\times 10^5 \\times 0.02 = 6000$ J | $nC_p\\Delta T > 0$ (calculate $T$'s) | $nC_v\\Delta T > 0$ |
| B → C | $0$ (constant $V$) | $nC_v\\Delta T < 0$ (cooling) | $nC_v\\Delta T < 0$ |
| C → D | $P\\Delta V = 1 \\times 10^5 \\times (-0.02) = -2000$ J | $nC_p\\Delta T < 0$ | $nC_v\\Delta T < 0$ |
| D → A | $0$ (constant $V$) | $nC_v\\Delta T > 0$ (heating) | $nC_v\\Delta T > 0$ |
| **Cycle** | $6000 + 0 - 2000 + 0 = 4000$ J | $Q_{net} = 4000$ J | **0** ✅ |

**Key result:** $W_{net}$ = enclosed area = $(P_H - P_L)(V_R - V_L) = (3-1) \\times 10^5 \\times 0.02 = 4000$ J

**Efficiency:** $Q_{in}$ = heat absorbed only during A→B and D→A (positive $Q$ steps). Calculate temperatures using $PV = nRT$, then $Q_{AB} = nC_p(T_B - T_A) = 15000$ J. So $e = W/Q_{in} \\approx 4000/15000 = 26.7\\%$.

---

### 🔍 Worked Problem 3: Adiabatic Process

**Problem:** 1 mol of a diatomic ideal gas ($\\gamma = 1.4$) at 300 K and 1 atm is compressed adiabatically to half its volume. Find the final temperature and pressure.

| Step | Calculation |
|------|-------------|
| Use $TV^{\\gamma-1} = \\text{const}$ | $T_1V_1^{0.4} = T_2V_2^{0.4}$ |
| | $300 \\times V^{0.4} = T_2 \\times (V/2)^{0.4}$ |
| | $T_2 = 300 \\times 2^{0.4} = 300 \\times 1.320 = 396$ K |
| Use $PV^\\gamma = \\text{const}$ | $P_2 = P_1(V_1/V_2)^\\gamma = 1 \\times 2^{1.4} = 2.639$ atm |
| Work done on gas | $W = -\\Delta U = -nC_v\\Delta T = -1 \\times \\frac{5}{2}R \\times 96 = -1997$ J |
| | Negative $W$ means work done ON the gas (compression) ✅ |`
    },
    {
      id: 'thermodynamicprocesses-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Practice Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A gas undergoes a process where $P$ increases and $V$ decreases. Which type of process could this be?',
            options: ['Adiabatic compression', 'Isothermal expansion', 'Isobaric expansion', 'Free expansion'],
            correctAnswer: 0,
            explanation: 'In adiabatic compression, $V$ decreases and $P$ increases (steeper than isothermal). Isothermal: $P$ increases as $V$ decreases, but we\'re told $P$ increases AND $V$ decreases, which is compression. Adiabatic compression satisfies both conditions.'
          },
          {
            question: 'An ideal gas completes a clockwise cycle on a PV diagram. Which is true?',
            options: ['$W_{net} > 0$, $\\Delta U_{cycle} = 0$, $Q_{net} > 0$', '$W_{net} = 0$ for any cycle', '$Q_{net} < 0$ because heat is expelled', '$\\Delta U_{cycle} > 0$'],
            correctAnswer: 0,
            explanation: 'Clockwise = engine = positive net work. Over a complete cycle, $\\Delta U = 0$ (returns to initial state). First law: $Q_{net} = \\Delta U + W_{net} = W_{net} > 0$.'
          },
          {
            question: 'During which process does the temperature of an ideal gas definitely change?',
            options: ['Adiabatic expansion', 'Isothermal compression', 'Any cyclic process', 'Free expansion'],
            correctAnswer: 0,
            explanation: 'Adiabatic: $Q = 0$, so $\\Delta U = -W$. During expansion, $W > 0$, so $\\Delta U < 0$ and temperature drops. Isothermal: $\\Delta T = 0$ by definition. Free expansion: $\\Delta T = 0$ for ideal gas.'
          },
          {
            question: 'A monatomic gas is heated from 300 K to 600 K at constant pressure. The ratio $Q/\\Delta U$ is:',
            options: ['$5/3$', '$3/5$', '$1$', '$5/2$'],
            correctAnswer: 0,
            explanation: '$Q = nC_p\\Delta T$ and $\\Delta U = nC_v\\Delta T$. So $Q/\\Delta U = C_p/C_v = \\gamma = 5/3$ for monatomic gas.'
          }
        ]
      }
    },
    {
      id: 'thermodynamicprocesses-p6-input',
      type: 'input-boxes' as const,
      content: `
**Calculation Practice** 🧮

**1)** 3 mol of a monatomic ideal gas is heated at constant volume from 200 K to 500 K. What is $Q$? (in J, round to nearest whole number)

**2)** The same gas (3 mol monatomic) is heated at constant pressure over the same $\\Delta T$. What is $Q$ now? (in J, round to nearest whole number)

**3)** In an isothermal compression, a gas does $-5000$ J of work. How much heat does it release? (in J, positive number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11213', '18688', '5000'],
        hint1: '$Q = nC_v\\Delta T = 3 \\times \\frac{3}{2}(8.314) \\times 300$',
        hint2: '$Q = nC_p\\Delta T = 3 \\times \\frac{5}{2}(8.314) \\times 300$',
        hint3: 'Isothermal: $\\Delta U = 0$, so $Q = W$',
        explanation: '1) $Q = 3 \\times 1.5 \\times 8.314 \\times 300 = 11213$ J. 2) $Q = 3 \\times 2.5 \\times 8.314 \\times 300 = 18688$ J. Note the ratio is $5/3 = \\gamma$. 3) Isothermal: $\\Delta U = 0$, so $Q = W = -5000$ J. The gas releases 5000 J of heat.'
      }
    }
  ]
};