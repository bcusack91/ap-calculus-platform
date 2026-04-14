export const physCEMPwrCircPart2Data = {
  topicSlug: "power-circuits-physics-c-em",
  sections: [
    {
      id: 'pwr2-intro',
      type: 'text' as const,
      content: `# EMF and Internal Resistance

**Part 2 of 7 — Real Batteries and Terminal Voltage**

An ideal battery maintains a fixed voltage $\\mathcal{E}$ regardless of current. Real batteries have **internal resistance** $r$ that causes the terminal voltage to drop under load.

### The Circuit Model

A real battery is modeled as an ideal EMF $\\mathcal{E}$ in series with internal resistance $r$:

$$V_{\\text{terminal}} = \\mathcal{E} - Ir$$

where $I$ is the current drawn from the battery.

### Power Budget

| Quantity | Expression |
|:---:|:---:|
| Power delivered by EMF | $P_{\\text{emf}} = \\mathcal{E}I$ |
| Power lost internally | $P_{\\text{internal}} = I^2 r$ |
| Power to external load | $P_{\\text{load}} = I^2 R = (\\mathcal{E} - Ir)I$ |

Energy conservation requires:

$$\\mathcal{E}I = I^2 R + I^2 r$$`
    },
    {
      id: 'pwr2-mcq1',
      type: 'mcq' as const,
      question: 'A battery with $\\mathcal{E} = 12$ V and $r = 2\\,\\Omega$ drives current through a $4\\,\\Omega$ external resistor. What is the terminal voltage?',
      options: ['8 V', '10 V', '6 V', '12 V'],
      correctAnswer: 0,
      explanation: '$I = \\mathcal{E}/(R + r) = 12/6 = 2$ A. $V_{\\text{term}} = \\mathcal{E} - Ir = 12 - 2(2) = 8$ V.'
    },
    {
      id: 'pwr2-efficiency',
      type: 'text' as const,
      content: `### Efficiency of Power Transfer

The fraction of power delivered to the external load is:

$$\\eta = \\frac{P_{\\text{load}}}{P_{\\text{emf}}} = \\frac{I^2 R}{\\mathcal{E}I} = \\frac{R}{R + r}$$

As $R \\to \\infty$, $\\eta \\to 1$ (perfect efficiency, but negligible power).
As $R \\to 0$, $\\eta \\to 0$ (short circuit — all power wasted internally).

### Open-Circuit and Short-Circuit

| Condition | Current | Terminal Voltage |
|:---:|:---:|:---:|
| Open circuit ($R \\to \\infty$) | $I = 0$ | $V = \\mathcal{E}$ |
| Short circuit ($R = 0$) | $I = \\mathcal{E}/r$ | $V = 0$ |

The open-circuit voltage directly measures the EMF.`
    },
    {
      id: 'pwr2-mcq2',
      type: 'mcq' as const,
      question: 'A battery with $\\mathcal{E} = 9$ V and $r = 1\\,\\Omega$ is connected to $R = 4\\,\\Omega$. The efficiency of power delivery to $R$ is:',
      options: ['80%', '44%', '90%', '75%'],
      correctAnswer: 0,
      explanation: '$\\eta = R/(R + r) = 4/(4 + 1) = 4/5 = 80\\%$.'
    },
    {
      id: 'pwr2-charging',
      type: 'text' as const,
      content: `### Charging a Battery

When current is **forced into** a battery (charging), the terminal voltage is:

$$V_{\\text{terminal}} = \\mathcal{E} + Ir$$

The charger must supply more voltage than $\\mathcal{E}$ to overcome both the EMF and the internal resistance drop.

### Power During Charging

$$P_{\\text{charger}} = V_{\\text{terminal}} \\cdot I = (\\mathcal{E} + Ir)I = \\mathcal{E}I + I^2r$$

- $\\mathcal{E}I$ → power stored as chemical energy
- $I^2 r$ → power dissipated as heat in internal resistance

### Measuring Internal Resistance

Experimentally, plot $V_{\\text{terminal}}$ vs. $I$:

$$V = \\mathcal{E} - Ir \\implies \\text{slope} = -r, \\quad y\\text{-intercept} = \\mathcal{E}$$`
    },
    {
      id: 'pwr2-mcq3',
      type: 'mcq' as const,
      question: 'A battery being charged has $\\mathcal{E} = 6$ V and $r = 0.5\\,\\Omega$. If the charging current is 4 A, the terminal voltage of the battery is:',
      options: ['8 V', '4 V', '6 V', '7 V'],
      correctAnswer: 0,
      explanation: 'During charging: $V = \\mathcal{E} + Ir = 6 + 4(0.5) = 6 + 2 = 8$ V.'
    },
    {
      id: 'pwr2-mcq4',
      type: 'mcq' as const,
      question: 'The power dissipated internally in a battery with $\\mathcal{E} = 10$ V, $r = 2\\,\\Omega$, and $R = 3\\,\\Omega$ is:',
      options: ['8 W', '6 W', '12 W', '4 W'],
      correctAnswer: 0,
      explanation: '$I = 10/(3+2) = 2$ A. $P_{\\text{int}} = I^2 r = 4 \\times 2 = 8$ W.'
    },
    {
      id: 'pwr2-summary',
      type: 'text' as const,
      content: `### Summary — Part 2

| Concept | Formula |
|:---:|:---:|
| Terminal voltage (discharging) | $V = \\mathcal{E} - Ir$ |
| Terminal voltage (charging) | $V = \\mathcal{E} + Ir$ |
| Efficiency | $\\eta = R/(R+r)$ |
| Internal power loss | $P_{\\text{int}} = I^2 r$ |

> **Next up:** Maximum power transfer theorem — Part 3.`
    }
  ]
};
