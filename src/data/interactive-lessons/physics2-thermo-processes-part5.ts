export const physics2ThermoProcPart5Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p5-intro',
      type: 'text' as const,
      content: `# 💨 Ideal Gas & Kinetic Theory

**Part 5 of 7 — Connecting Micro to Macro**

---

### Ideal Gas Law

$$PV = nRT = Nk_BT$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $P$ | Pressure | Pa |
| $V$ | Volume | m³ |
| $n$ | Moles | mol |
| $R$ | Gas constant | 8.314 J/(mol·K) |
| $N$ | Number of molecules | - |
| $k_B$ | Boltzmann constant | $1.38 \\\\times 10^{-23}$ J/K |

### Kinetic Theory

Average kinetic energy per molecule:
$$\\\\overline{KE} = \\\\frac{3}{2}k_BT$$

RMS speed:
$$v_{rms} = \\\\sqrt{\\\\frac{3k_BT}{m}} = \\\\sqrt{\\\\frac{3RT}{M}}$$

### Internal Energy of Ideal Gas

| Gas Type | Degrees of Freedom | $U$ |
|----------|-------------------|-----|
| Monatomic | 3 | $\\\\frac{3}{2}nRT$ |
| Diatomic | 5 | $\\\\frac{5}{2}nRT$ |`
    },    {
      id: 'thermodynamicprocesses-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the temperature of an ideal gas (at constant V) will:',
            options: ['Double the pressure', 'Halve the pressure', 'Quadruple the pressure', 'Not change the pressure'],
            correctAnswer: 0,
            explanation: '$P = nRT/V$. Double $T$ at constant $V$ → double $P$.'
          },
          {
            question: 'Average kinetic energy of a gas molecule depends on:',
            options: ['Pressure only', 'Volume only', 'Temperature only', 'Mass of the molecule'],
            correctAnswer: 2,
            explanation: '$\\\\overline{KE} = \\\\frac{3}{2}k_BT$ depends only on temperature.'
          },
          {
            question: 'Heavier gas molecules at the same temperature have:',
            options: ['Higher rms speed', 'Lower rms speed', 'Same rms speed', 'Lower temperature'],
            correctAnswer: 1,
            explanation: '$v_{rms} = \\\\sqrt{3k_BT/m}$. Larger $m$ → smaller $v_{rms}$.'
          }
        ]
      }
    },    {
      id: 'thermodynamicprocesses-p5-input',
      type: 'input-boxes' as const,
      content: `
**Kinetic Theory** 🧮

Helium gas ($M = 4$ g/mol) at $T = 300$ K.

**1)** Average KE per molecule? (in J, scientific notation like 6.21e-21)

**2)** $v_{rms}$ of helium? (in m/s, round to nearest integer; $R = 8.314$)

**3)** If temperature doubles, by what factor does $v_{rms}$ change? (round to 2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6.21e-21', '1369', '1.41'],
        hint1: '$\\\\frac{3}{2}k_BT = \\\\frac{3}{2}(1.38 \\\\times 10^{-23})(300)$',
        hint2: '$\\\\sqrt{3(8.314)(300)/0.004}$',
        hint3: '$v_{rms} \\\\propto \\\\sqrt{T}$',
        explanation: '1) $\\\\frac{3}{2}(1.38 \\\\times 10^{-23})(300) = 6.21 \\\\times 10^{-21}$ J. 2) $\\\\sqrt{3(8.314)(300)/0.004} \\\\approx 1369$ m/s. 3) $\\\\sqrt{2} \\\\approx 1.41$.'
      }
    }
  ]
};
