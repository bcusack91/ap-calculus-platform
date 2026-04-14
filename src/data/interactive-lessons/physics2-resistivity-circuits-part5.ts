export const physics2ResCircPart5Data = {
  topicSlug: 'resistivity-circuits-advanced',
  sections: [
    {
      id: 'resistivitycircuitsadvanced-p5-intro',
      type: 'text' as const,
      content: `# 💡 Power in Circuits

**Part 5 of 7 — Electrical Power & Energy**

---

### Power Formulas

Power is the rate of energy transfer. For any circuit element:

$$\\boxed{P = IV = I^2R = \\frac{V^2}{R}}$$

| Formula | Best when you know | Example |
|---------|-------------------|---------|
| $P = IV$ | Current and voltage | Any element |
| $P = I^2R$ | Current and resistance | **Series circuits** (same $I$) |
| $P = V^2/R$ | Voltage and resistance | **Parallel circuits** (same $V$) |

> 🔑 **Critical Insight:** Use $P = I^2R$ for series analysis and $P = V^2/R$ for parallel analysis — you'll reach the right conclusion about which element dissipates more power.

---

### Power in Series Circuits

All elements share the same current $I$. Using $P = I^2R$:

$$P_1 : P_2 : P_3 = R_1 : R_2 : R_3$$

**The largest resistor dissipates the most power in series.**

---

### Power in Parallel Circuits

All elements share the same voltage $V$. Using $P = V^2/R$:

$$P_1 : P_2 : P_3 = \\frac{1}{R_1} : \\frac{1}{R_2} : \\frac{1}{R_3}$$

**The smallest resistor dissipates the most power in parallel.**

---

### The Brightness Rule for Identical Bulbs

| Configuration | Brightness | Current Through Each |
|--------------|-----------|---------------------|
| 1 bulb, battery $\\mathcal{E}$ | Baseline | $I = \\mathcal{E}/R$ |
| 2 bulbs in series | Dimmer (1/4 of baseline) | $I = \\mathcal{E}/(2R)$ |
| 2 bulbs in parallel | Same as baseline each | $I = \\mathcal{E}/R$ each |

> ⚠️ **AP Trap:** "A 60 W bulb vs 100 W bulb" — these ratings are for 120 V. The 60 W bulb has HIGHER resistance ($R = V^2/P = 14400/60 = 240$ Ω vs 144 Ω). In SERIES, the 60 W bulb is BRIGHTER because $P = I^2R$ and it has more $R$!`
    },
    {
      id: 'resistivitycircuitsadvanced-p5-energy',
      type: 'text' as const,
      content: `### Energy in Circuits

**Electrical energy:** $U = Pt = IVt$

**Power companies charge for energy in kilowatt-hours:**

$$1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3.6 \\times 10^6 \\text{ J} = 3.6 \\text{ MJ}$$

---

### Energy Stored in a Capacitor

$$\\boxed{U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV}$$

| Formula | Best when you know |
|---------|-------------------|
| $U = \\frac{1}{2}CV^2$ | Capacitance and voltage |
| $U = Q^2/(2C)$ | Charge and capacitance |
| $U = \\frac{1}{2}QV$ | Charge and voltage |

---

### Power Delivered vs. Power Dissipated

| Source/Element | Power |
|---------------|-------|
| Battery (internal) | $P_{battery} = \\mathcal{E}I$ (total power delivered) |
| Internal resistance | $P_{internal} = I^2 r$ (wasted as heat) |
| External circuit | $P_{external} = \\mathcal{E}I - I^2 r = I^2 R_{ext}$ |
| Efficiency | $\\eta = P_{ext}/P_{battery} = R_{ext}/(R_{ext} + r)$ |

---

### Maximum Power Transfer Theorem

Maximum power is delivered to the external load when $R_{load} = r$ (internal resistance):

$$P_{max} = \\frac{\\mathcal{E}^2}{4r}$$

At this condition, efficiency is only 50%! In practice, power systems use $R_{load} \\gg r$ for high efficiency (close to 100%).

| Condition | $P_{load}$ | Efficiency |
|-----------|-----------|-----------|
| $R_{load} = r$ | Maximum power | 50% |
| $R_{load} \\gg r$ | Less than max | ~100% |
| $R_{load} \\ll r$ | Very low | ~0% |

> 🔑 **Real World:** Your home wiring has $r \\ll R_{load}$, so nearly all energy goes to your devices. Audio systems matching speaker impedance to amplifier impedance ($R_{load} = r$) maximize power transfer but sacrifice efficiency.`
    },
    {
      id: 'resistivitycircuitsadvanced-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two resistors in series ($R_1 = 3$ Ω, $R_2 = 6$ Ω) carry 2 A. Which dissipates more power?',
            options: ['$R_1$ (12 W)', '$R_2$ (24 W)', 'Equal power', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Series: same $I$. $P = I^2R$. $P_2 = 4 \\times 6 = 24$ W > $P_1 = 4 \\times 3 = 12$ W. Larger $R$ wins in series.'
          },
          {
            question: 'Two resistors in parallel across 12 V ($R_1 = 4$ Ω, $R_2 = 12$ Ω). Which dissipates more?',
            options: ['$R_1$ (36 W)', '$R_2$ (12 W)', 'Equal power', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Parallel: same $V$. $P = V^2/R$. $P_1 = 144/4 = 36$ W > $P_2 = 144/12 = 12$ W. Smaller $R$ wins in parallel.'
          },
          {
            question: 'A 60 W and 100 W bulb are connected in SERIES to 120 V. Which is brighter?',
            options: ['60 W bulb', '100 W bulb', 'Same brightness', 'Neither glows'],
            correctAnswer: 0,
            explanation: '$R_{60} = 120^2/60 = 240$ Ω > $R_{100} = 144$ Ω. Same current (series), so $P = I^2R$ → the 60 W bulb (higher $R$) dissipates more and is brighter!'
          },
          {
            question: 'A 100 W bulb operates at 120 V. Its resistance is:',
            options: ['1.2 Ω', '12 Ω', '144 Ω', '14400 Ω'],
            correctAnswer: 2,
            explanation: '$R = V^2/P = 120^2/100 = 14400/100 = 144$ Ω.'
          }
        ]
      }
    },
    {
      id: 'resistivitycircuitsadvanced-p5-input',
      type: 'input-boxes' as const,
      content: `
**Power Calculations** 🧮

A circuit: 12 V battery with internal resistance $r = 1$ Ω, external load $R = 5$ Ω.

**1)** Current in the circuit? (in A)

**2)** Power dissipated in $R$? (in W)

**3)** Power lost internally ($P = I^2 r$)? (in W)

**4)** Battery efficiency ($P_{ext}/P_{total}$)? (as %, round to nearest integer)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['2', '20', '4', '83'],
        hint1: '$I = \\mathcal{E}/(R + r) = 12/6$',
        hint2: '$P_R = I^2 R = 4 \\times 5$',
        hint3: '$P_r = I^2 r = 4 \\times 1$',
        hint4: '$\\eta = P_R/(P_R + P_r) = 20/24$',
        explanation: '1) $I = 12/6 = 2$ A. 2) $P_R = 4 \\times 5 = 20$ W. 3) $P_r = 4 \\times 1 = 4$ W. 4) $\\eta = 20/24 ≈ 83\\%$.'
      }
    }
  ]
};