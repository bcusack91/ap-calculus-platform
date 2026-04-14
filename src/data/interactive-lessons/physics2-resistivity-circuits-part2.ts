export const physics2ResCircPart2Data = {
  topicSlug: 'resistivity-circuits-advanced',
  sections: [
    {
      id: 'resistivitycircuitsadvanced-p2-intro',
      type: 'text' as const,
      content: `# 🌡️ Temperature & Resistance

**Part 2 of 7 — Temperature Dependence**

---

### Why Does Resistance Change with Temperature?

In metals, electrical resistance comes from electrons colliding with vibrating atoms in the crystal lattice. As temperature increases, atoms vibrate more vigorously → more collisions → higher resistance.

$$\\boxed{R(T) = R_0[1 + \\alpha(T - T_0)]}$$

$$\\rho(T) = \\rho_0[1 + \\alpha(T - T_0)]$$

| Symbol | Meaning |
|--------|---------|
| $R_0$ | Resistance at reference temperature $T_0$ |
| $\\alpha$ | Temperature coefficient of resistivity (per °C) |
| $T - T_0$ | Temperature change |

---

### Temperature Coefficients

| Material | Type | $\\alpha$ (per °C) | Behavior |
|----------|------|-------------------|----------|
| Silver | Metal | $3.8 \\times 10^{-3}$ | $R$ increases with $T$ |
| Copper | Metal | $3.9 \\times 10^{-3}$ | $R$ increases with $T$ |
| Tungsten | Metal | $4.5 \\times 10^{-3}$ | $R$ increases with $T$ |
| Nichrome | Alloy | $0.4 \\times 10^{-3}$ | $R$ barely changes (good for heating elements) |
| Carbon | Semiconductor | $-0.5 \\times 10^{-3}$ | $R$ decreases with $T$ |
| Silicon | Semiconductor | $-75 \\times 10^{-3}$ | $R$ decreases strongly |

---

### Metals vs. Semiconductors — Different Mechanisms

| Feature | Metals ($\\alpha > 0$) | Semiconductors ($\\alpha < 0$) |
|---------|----------------------|-------------------------------|
| Charge carriers | Free electrons (fixed number) | Electrons AND holes (number grows) |
| Temperature effect | More scattering → $R$ rises | More carriers freed → $R$ drops |
| $\\alpha$ sign | Positive | Negative |
| Example | Copper wire | Silicon, carbon |

> 🔑 **Real-World Connection:** An incandescent bulb's tungsten filament has $R_{cold} \\approx R_{hot}/12$. When you first turn it on, the rush of current through the cold, low-resistance filament is huge — that's why bulbs often burn out at switch-on!`
    },
    {
      id: 'resistivitycircuitsadvanced-p2-super',
      type: 'text' as const,
      content: `### Superconductivity

Below a critical temperature $T_c$, certain materials exhibit **zero resistance**:

$$R = 0 \\text{ for } T < T_c$$

| Material | $T_c$ | Type |
|----------|-------|------|
| Mercury (Hg) | 4.2 K | Conventional |
| Lead (Pb) | 7.2 K | Conventional |
| Niobium (Nb) | 9.3 K | Conventional |
| YBCO | 93 K | High-$T_c$ |
| BSCCO | 110 K | High-$T_c$ |

---

### Properties of Superconductors

| Property | Detail |
|----------|--------|
| Zero resistance | Current flows without energy loss |
| Meissner effect | Expels magnetic field ($B = 0$ inside) |
| Critical field | Above $B_c$, superconductivity is destroyed |
| Persistent currents | Once started, current flows indefinitely |

**Applications:** MRI magnets, particle accelerators, maglev trains, power transmission (experimental)

---

### Thermistors — Temperature Sensors

A **thermistor** is a semiconductor whose resistance changes dramatically with temperature:
- **NTC** (Negative Temperature Coefficient): $R$ drops as $T$ rises — used in temperature sensors
- **PTC** (Positive Temperature Coefficient): $R$ rises sharply at a set temperature — used as self-resetting fuses

> ⚠️ **AP Trap:** The linear formula $R = R_0[1 + \\alpha\\Delta T]$ is only an approximation valid for moderate temperature changes. For large $\\Delta T$ or semiconductors, the behavior is more complex (exponential for thermistors).`
    },
    {
      id: 'resistivitycircuitsadvanced-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For metals, as temperature increases, resistance:',
            options: ['Decreases', 'Increases', 'Stays constant', 'Drops to zero'],
            correctAnswer: 1,
            explanation: 'Metals have positive $\\alpha$: more lattice vibrations → more electron scattering → higher resistance.'
          },
          {
            question: 'Carbon has $\\alpha < 0$. This means carbon behaves as a:',
            options: ['Metal', 'Insulator at all temperatures', 'Semiconductor', 'Superconductor'],
            correctAnswer: 2,
            explanation: 'Negative $\\alpha$ means resistance decreases with temperature — more charge carriers are thermally freed. This is characteristic semiconductor behavior.'
          },
          {
            question: 'A copper wire has $R_0 = 10$ Ω at 20°C. At 120°C ($\\alpha = 3.9 \\times 10^{-3}$/°C), $R ≈$',
            options: ['10.39 Ω', '13.9 Ω', '49 Ω', '11.95 Ω'],
            correctAnswer: 1,
            explanation: '$R = 10[1 + 0.0039(120-20)] = 10[1 + 0.39] = 10(1.39) = 13.9$ Ω.'
          },
          {
            question: 'A superconductor below $T_c$ has:',
            options: ['Very low resistance', 'Exactly zero resistance', 'Negative resistance', 'Infinite resistance'],
            correctAnswer: 1,
            explanation: 'Superconductivity means EXACTLY zero resistance — not just very low. Current can flow forever without energy loss.'
          }
        ]
      }
    },
    {
      id: 'resistivitycircuitsadvanced-p2-input',
      type: 'input-boxes' as const,
      content: `
**Temperature & Resistance Problems** 🧮

A tungsten filament has $R_0 = 20$ Ω at $T_0 = 20$°C ($\\alpha = 4.5 \\times 10^{-3}$/°C).

**1)** What is $R$ at operating temperature 2520°C? (in Ω, round to nearest integer)

**2)** By what factor does resistance increase from cold to hot?

**3)** If $V = 120$ V, current at operating temperature? (in A, round to 2 decimal places)

**4)** Current when first turned on (cold, 20°C)? (in A)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['245', '12.25', '0.49', '6'],
        hint1: '$R = 20[1 + 0.0045(2500)]$',
        hint2: 'Factor $= R_{hot}/R_{cold}$',
        hint3: '$I = V/R_{hot}$',
        hint4: '$I = V/R_{cold} = 120/20$',
        explanation: '1) $R = 20[1 + 0.0045(2500)] = 20(12.25) = 245$ Ω. 2) Factor = 245/20 = 12.25×. 3) $I = 120/245 ≈ 0.49$ A. 4) $I = 120/20 = 6$ A — that is 12× the operating current! This surge is why bulbs burn out at switch-on.'
      }
    }
  ]
};