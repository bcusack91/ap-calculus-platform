export const physics2ThermoProcPart5Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p5-intro',
      type: 'text' as const,
      content: `# 🌡️ Ideal Gas Law & Kinetic Theory

**Part 5 of 7 — Connecting Macroscopic and Microscopic**

---

### The Ideal Gas Law

$$\\boxed{PV = nRT = Nk_BT}$$

| Symbol | Meaning | Value / Units |
|--------|---------|---------------|
| $P$ | Pressure | Pa ($\\text{N/m}^2$) |
| $V$ | Volume | $\\text{m}^3$ |
| $n$ | Number of moles | mol |
| $R$ | Universal gas constant | $8.314$ J/(mol·K) |
| $N$ | Number of molecules | dimensionless |
| $k_B$ | Boltzmann constant | $1.38 \\times 10^{-23}$ J/K |
| $T$ | Temperature | K (always Kelvin!) |

**Relationship:** $R = N_A k_B$ where $N_A = 6.022 \\times 10^{23}$ mol$^{-1}$

---

### STP and Unit Conversions

| Quantity | STP Value |
|----------|-----------|
| Temperature | 273 K (0°C) |
| Pressure | $1.013 \\times 10^5$ Pa = 1 atm |
| 1 mol volume | 22.4 L |

| Unit | Conversion |
|------|-----------|
| 1 atm | $1.013 \\times 10^5$ Pa |
| 1 L | $10^{-3}$ m$^3$ |
| °C → K | $+ 273$ |

---

### When Is the Ideal Gas Approximation Good?

The ideal gas law works when:
- **Low density** (molecules far apart)
- **High temperature** (KE ≫ intermolecular PE)
- **Small molecules** (negligible volume)

Deviations occur at high pressure or low temperature (near liquefaction).

---

### Kinetic Theory: The Microscopic Picture

Gas pressure arises from billions of molecular collisions with container walls. Key assumptions:

1. Many molecules in random motion
2. Molecule size ≪ average separation
3. Elastic collisions (KE conserved)
4. No intermolecular forces except during collisions
5. Newtonian mechanics applies`
    },
    {
      id: 'thermodynamicprocesses-p5-kinetic',
      type: 'text' as const,
      content: `### Kinetic Energy Per Molecule

$$\\boxed{KE_{avg} = \\frac{3}{2}k_BT}$$

This is the **average translational kinetic energy** of one molecule. It depends only on temperature — not on mass, type, or size of molecule.

> 🔑 At the same temperature, heavy and light molecules have the **same average KE** but different speeds.

---

### Root-Mean-Square (rms) Speed

$$\\boxed{v_{rms} = \\sqrt{\\frac{3k_BT}{m}} = \\sqrt{\\frac{3RT}{M}}}$$

| Variable | Meaning |
|----------|---------|
| $m$ | Mass of one molecule (kg) |
| $M$ | Molar mass (kg/mol — NOT g/mol!) |

| Gas | $M$ (kg/mol) | $v_{rms}$ at 300 K |
|-----|-------------|-------------------|
| $H_2$ | 0.002 | 1920 m/s |
| $He$ | 0.004 | 1370 m/s |
| $N_2$ | 0.028 | 517 m/s |
| $O_2$ | 0.032 | 484 m/s |
| $CO_2$ | 0.044 | 412 m/s |

Lighter molecules move faster!

---

### Pressure from Kinetic Theory

$$P = \\frac{1}{3}\\frac{N}{V}m v_{rms}^2 = \\frac{2}{3}\\frac{N}{V}KE_{avg}$$

This beautifully connects the macroscopic variable ($P$) to microscopic motion ($v_{rms}$).

---

### Internal Energy of an Ideal Gas

Internal energy depends on **degrees of freedom** ($f$):

$$\\boxed{U = \\frac{f}{2}nRT}$$

| Gas Type | Degrees of Freedom ($f$) | $U$ | $C_v$ | $C_p$ | $\\gamma$ |
|----------|--------------------------|-----|--------|--------|----------|
| **Monatomic** (He, Ne, Ar) | 3 (translation only) | $\\frac{3}{2}nRT$ | $\\frac{3}{2}R$ | $\\frac{5}{2}R$ | $5/3 \\approx 1.67$ |
| **Diatomic** (N₂, O₂, H₂) | 5 (3 trans + 2 rot) | $\\frac{5}{2}nRT$ | $\\frac{5}{2}R$ | $\\frac{7}{2}R$ | $7/5 = 1.40$ |
| **Polyatomic** (CO₂, H₂O) | 6 (3 trans + 3 rot) | $3nRT$ | $3R$ | $4R$ | $4/3 \\approx 1.33$ |

> ⚠️ Always: $C_p = C_v + R$ (for ideal gases) and $\\gamma = C_p/C_v$

> 🔑 **Critical Insight:** Internal energy of an ideal gas depends ONLY on temperature ($U \\propto T$). This means: $\\Delta U = nC_v\\Delta T$ for ANY process (not just constant volume!).`
    },
    {
      id: 'thermodynamicprocesses-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two containers hold the same number of molecules at the same temperature. Container A has helium, container B has oxygen. Which is true?',
            options: ['$KE_{avg}$ is the same, but $v_{rms}$ of He is greater', '$v_{rms}$ is the same for both', 'He has higher $KE_{avg}$', 'O₂ has higher $v_{rms}$ because it is heavier'],
            correctAnswer: 0,
            explanation: '$KE_{avg} = \\frac{3}{2}k_BT$ depends only on $T$. But $v_{rms} = \\sqrt{3k_BT/m}$ — lighter He molecules move faster than heavier O₂ molecules.'
          },
          {
            question: 'The internal energy of 2 mol of a monatomic ideal gas at 400 K is:',
            options: ['$9970$ J', '$6650$ J', '$3320$ J', '$13300$ J'],
            correctAnswer: 0,
            explanation: '$U = \\frac{3}{2}nRT = \\frac{3}{2}(2)(8.314)(400) = 9977 \\approx 9970$ J.'
          },
          {
            question: 'If the temperature of an ideal gas doubles (from $T$ to $2T$), $v_{rms}$:',
            options: ['Increases by a factor of $\\sqrt{2}$', 'Doubles', 'Stays the same', 'Quadruples'],
            correctAnswer: 0,
            explanation: '$v_{rms} \\propto \\sqrt{T}$. If $T \\to 2T$, then $v_{rms} \\to \\sqrt{2} \\cdot v_{rms}$, about 41% faster.'
          },
          {
            question: 'For a diatomic ideal gas, $C_p - C_v$ equals:',
            options: ['$R$', '$\\frac{5}{2}R$', '$\\frac{7}{2}R$', '$2R$'],
            correctAnswer: 0,
            explanation: 'For ANY ideal gas, $C_p - C_v = R$. This is Mayer\'s relation and is independent of molecular type.'
          }
        ]
      }
    },
    {
      id: 'thermodynamicprocesses-p5-input',
      type: 'input-boxes' as const,
      content: `
**Gas Calculations** 🧮

**1)** What is the average translational KE of a molecule at $T = 600$ K? (in $10^{-20}$ J, round to 2 decimal places)

**2)** What is $v_{rms}$ for N₂ ($M = 0.028$ kg/mol) at 300 K? (in m/s, round to nearest whole number)

**3)** What is the internal energy of 3 mol of diatomic gas at 500 K? (in J, round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.24', '517', '31178'],
        hint1: '$KE = \\frac{3}{2}k_BT = \\frac{3}{2}(1.38 \\times 10^{-23})(600)$',
        hint2: '$v_{rms} = \\sqrt{3RT/M} = \\sqrt{3(8.314)(300)/0.028}$',
        hint3: '$U = \\frac{5}{2}nRT = \\frac{5}{2}(3)(8.314)(500)$',
        explanation: '1) $KE = 1.5 \\times 1.38 \\times 10^{-23} \\times 600 = 1.242 \\times 10^{-20}$ J → 1.24. 2) $v_{rms} = \\sqrt{3 \\times 8.314 \\times 300/0.028} = \\sqrt{267214} = 517$ m/s. 3) $U = 2.5 \\times 3 \\times 8.314 \\times 500 = 31178$ J.'
      }
    }
  ]
};