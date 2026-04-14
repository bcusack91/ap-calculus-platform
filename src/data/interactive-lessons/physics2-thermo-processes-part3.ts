export const physics2ThermoProcPart3Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p3-intro',
      type: 'text' as const,
      content: `# ⚙️ Heat Engines & Efficiency

**Part 3 of 7 — Engines and Refrigerators**

---

### What Is a Heat Engine?

A heat engine is any device that converts thermal energy into mechanical work by operating in a **cycle**. It absorbs heat from a hot reservoir, converts some to work, and exhausts the rest to a cold reservoir.

---

### Energy Flow

$$\\boxed{Q_H = W_{net} + Q_C}$$

| Symbol | Meaning |
|--------|---------|
| $Q_H$ | Heat absorbed from hot reservoir |
| $W_{net}$ | Net work output per cycle |
| $Q_C$ | Heat exhausted to cold reservoir |

---

### Efficiency

$$\\boxed{e = \\frac{W_{net}}{Q_H} = 1 - \\frac{Q_C}{Q_H}}$$

| Efficiency | Meaning |
|-----------|---------|
| $e = 0.40$ | 40% of heat input becomes work, 60% is wasted |
| $e = 1.00$ | 100% conversion — IMPOSSIBLE by the 2nd Law |
| $e = 0$ | No work output — useless engine |

---

### The Carnot Engine — Maximum Possible Efficiency

The Carnot cycle (two isothermal + two adiabatic processes) sets the **theoretical maximum** efficiency:

$$\\boxed{e_{Carnot} = 1 - \\frac{T_C}{T_H}}$$

> ⚠️ **Critical:** Temperatures MUST be in **Kelvin**! $T(K) = T(°C) + 273$

| $T_H$ | $T_C$ | $e_{Carnot}$ |
|-------|-------|-------------|
| 600 K | 300 K | 50% |
| 800 K | 300 K | 62.5% |
| 1000 K | 300 K | 70% |
| $\\infty$ | Any | 100% (impossible) |

**No real engine can exceed Carnot efficiency.** Real engines have friction, irreversible processes, and heat losses.

> 🔑 **Key Insights:** (1) Raising $T_H$ or lowering $T_C$ improves efficiency. (2) $e = 100\\%$ would require $T_C = 0$ K — absolute zero is unreachable. (3) Carnot efficiency depends only on reservoir temperatures, not the working gas.`
    },
    {
      id: 'thermodynamicprocesses-p3-refrig',
      type: 'text' as const,
      content: `### Refrigerators & Heat Pumps

A refrigerator runs the engine cycle **in reverse**: it uses work input to transfer heat from cold to hot (against the natural direction).

$$Q_H = Q_C + W$$

---

### Coefficient of Performance (COP)

**Refrigerator** (goal: remove heat from cold space):

$$COP_{ref} = \\frac{Q_C}{W} = \\frac{Q_C}{Q_H - Q_C}$$

**Heat pump** (goal: deliver heat to warm space):

$$COP_{hp} = \\frac{Q_H}{W} = \\frac{Q_H}{Q_H - Q_C}$$

| Device | COP | Good when |
|--------|-----|-----------|
| Refrigerator | $Q_C/W$ | COP > 1 (always true for Carnot) |
| Heat pump | $Q_H/W$ | COP > 1 (always better than resistive heating!) |

Note: $COP_{hp} = COP_{ref} + 1$

---

### The Carnot Cycle: Four Steps

| Step | Process | $Q$ | $W$ | $\\Delta U$ |
|------|---------|-----|-----|-----------|
| 1 → 2 | Isothermal expansion at $T_H$ | $Q_H$ (in) | $+$ | 0 |
| 2 → 3 | Adiabatic expansion | 0 | $+$ | $-$ |
| 3 → 4 | Isothermal compression at $T_C$ | $Q_C$ (out) | $-$ | 0 |
| 4 → 1 | Adiabatic compression | 0 | $-$ | $+$ |
| **Cycle** | | $Q_H - Q_C$ | $W_{net}$ | **0** |

---

### Other Named Cycles (for reference)

| Cycle | Used In | Process Steps |
|-------|---------|---------------|
| **Otto** | Gasoline engines | Two adiabatic + two isochoric |
| **Diesel** | Diesel engines | Adiabatic + isobaric + adiabatic + isochoric |
| **Rankine** | Power plants | Uses phase changes (steam) |

> 🔑 **AP Connection:** The enclosed area on a PV diagram represents the net work per cycle. Clockwise = engine ($W > 0$), counterclockwise = refrigerator ($W < 0$).`
    },
    {
      id: 'thermodynamicprocesses-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A heat engine absorbs 1000 J from the hot reservoir and exhausts 600 J. Its efficiency is:',
            options: ['60%', '40%', '167%', '37.5%'],
            correctAnswer: 1,
            explanation: '$e = 1 - Q_C/Q_H = 1 - 600/1000 = 0.40 = 40\\%$. Only 40% of heat becomes work.'
          },
          {
            question: 'The maximum efficiency of an engine operating between 600 K and 300 K is:',
            options: ['100%', '50%', '25%', '75%'],
            correctAnswer: 1,
            explanation: '$e_{Carnot} = 1 - T_C/T_H = 1 - 300/600 = 0.50 = 50\\%$.'
          },
          {
            question: 'Why can no real engine achieve Carnot efficiency?',
            options: ['Carnot requires perfectly reversible processes — impossible in practice', 'The formula is wrong', 'Only applies to steam engines', 'Real gases aren\'t ideal'],
            correctAnswer: 0,
            explanation: 'Carnot efficiency requires zero friction, infinitely slow processes, and perfect thermal contact — all impossible in practice.'
          },
          {
            question: 'A heat pump has $COP = 4$. For every 1 J of work input, it delivers:',
            options: ['4 J of heat to the warm space', '1/4 J of heat', '4 J of work', 'Impossible — COP can\'t exceed 1'],
            correctAnswer: 0,
            explanation: '$COP_{hp} = Q_H/W = 4$, so $Q_H = 4W$. Heat pumps always have COP $> 1$ because they move heat rather than create it.'
          }
        ]
      }
    },
    {
      id: 'thermodynamicprocesses-p3-input',
      type: 'input-boxes' as const,
      content: `
**Engine Calculations** 🧮

A Carnot engine operates between $T_H = 500$ K and $T_C = 300$ K, absorbing $Q_H = 2000$ J per cycle.

**1)** Carnot efficiency? (as decimal, round to 2 places)

**2)** Net work per cycle? (in J)

**3)** Heat rejected per cycle? (in J)

**4)** If $T_C$ could be lowered to 200 K, new efficiency? (as decimal)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['0.40', '800', '1200', '0.60'],
        hint1: '$e = 1 - T_C/T_H = 1 - 300/500$',
        hint2: '$W = eQ_H$',
        hint3: '$Q_C = Q_H - W$',
        hint4: '$e = 1 - 200/500$',
        explanation: '1) $e = 1 - 300/500 = 0.40$. 2) $W = 0.40 \\times 2000 = 800$ J. 3) $Q_C = 2000 - 800 = 1200$ J. 4) $e = 1 - 200/500 = 0.60$ — lowering $T_C$ significantly improves efficiency.'
      }
    }
  ]
};