export const physics2CurrentResistancePart6Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr6-intro',
      type: 'text' as const,
      content: `
# 🔋 Real Batteries

**Part 6 of 7 — EMF, Internal Resistance, and Measuring a Battery**

Real circuits aren't ideal. A real battery has internal resistance, so the potential difference it delivers depends on how much current it supplies. In this part you will model a real battery, then use measurements and graphs to find its emf and internal resistance.
      `
    },
    {
      id: 'cr6-batteries',
      type: 'text' as const,
      content: `
## Batteries: EMF & Internal Resistance

A real battery isn't a perfect voltage source. It has:

- **EMF ($\\varepsilon$)**: the "ideal" voltage the battery would supply with no current flowing (open-circuit voltage)
- **Internal resistance ($r$)**: resistance inside the battery itself

### Terminal Voltage

When current $I$ flows through the battery:

$$V_{\\text{terminal}} = \\varepsilon - Ir$$

The internal resistance causes a voltage drop **inside** the battery, so the voltage available to the external circuit is less than the EMF.

### Key Relationships

| Condition | Terminal Voltage |
|-----------|-----------------|
| No current ($I = 0$) | $V = \\varepsilon$ (full EMF) |
| Small current | $V \\approx \\varepsilon$ (small drop) |
| Large current | $V \\ll \\varepsilon$ (significant drop) |
| Short circuit ($R_{\\text{ext}} = 0$) | $V = 0$ and $I = \\varepsilon / r$ (maximum current) |

### Current in the Full Circuit

With external resistance $R$:

$$I = \\frac{\\varepsilon}{R + r}$$

The total resistance is always $R + r$, and the EMF drives the current through both.

### Power Budget

$$P_{\\text{total}} = \\varepsilon I = I^2R + I^2r$$

- $I^2R$: useful power delivered to external circuit
- $I^2r$: wasted as heat inside the battery
      `
    },
    {
      id: 'cr6-battery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Battery & EMF Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A battery has EMF 9.0 V and internal resistance 0.50 $\\Omega$. When connected to a 4.0 $\\Omega$ resistor, the terminal voltage is:',
            options: [
              '9.0 V',
              '8.0 V',
              '7.9 V',
              '1.0 V'
            ],
            correctAnswer: 1,
            explanation: '$I = \\varepsilon/(R + r) = 9.0/(4.0 + 0.50) = 9.0/4.5 = 2.0$ A. $V = \\varepsilon - Ir = 9.0 - (2.0)(0.50) = 9.0 - 1.0 = 8.0$ V. Ignoring r gives 9.0 V, 1.0 V is only the internal drop $Ir$, and using $I = \\varepsilon/R = 2.25$ A gives 7.9 V.'
          },
          {
            question: 'A real battery is connected to an external resistor, and the resistor is replaced with one of smaller resistance. The battery\'s terminal voltage:',
            options: [
              'Increases, since less resistance means less drop',
              'Stays equal to the emf, since the battery is unchanged',
              'Decreases, since a larger $I$ raises $Ir$',
              'Drops to zero, since the battery is shorted'
            ],
            correctAnswer: 2,
            explanation: 'Smaller external resistance gives a larger current $I = \\varepsilon/(R + r)$, so the internal drop $Ir$ grows and $V_{\\text{terminal}} = \\varepsilon - Ir$ falls. It equals the emf only with zero current, and it reaches zero only for a true short circuit.'
          },
          {
            question: 'A battery with EMF 12 V and internal resistance 1.0 $\\Omega$ is short-circuited. The short-circuit current is:',
            options: [
              '0 A',
              '1.0 A',
              '12 A',
              'Infinite'
            ],
            correctAnswer: 2,
            explanation: 'Short circuit: $R_{\\text{ext}} = 0$. $I = \\varepsilon / r = 12/1.0 = 12$ A. This large current would rapidly overheat the battery — extremely dangerous!'
          }
        ]
      }
    },
    {
      id: 'cr6-measuring',
      type: 'text' as const,
      content: `
## Measuring EMF and Internal Resistance

### Method 1: Open-Circuit Reading
An ideal voltmeter connected directly across a battery with nothing else attached draws no current, so $Ir = 0$ and the reading equals the emf. This is why the emf is defined as the potential difference across the terminals when there is no current in the battery.

### Method 2: Graph Terminal Voltage Versus Current
Connect the battery to different external resistors and measure $V_{\\text{terminal}}$ and $I$ each time. Since

$$V_{\\text{terminal}} = \\varepsilon - Ir$$

a graph of $V_{\\text{terminal}}$ (vertical) versus $I$ (horizontal) is a straight line:
- **Vertical intercept** ($I = 0$): $\\varepsilon$
- **Slope**: $-r$

**Example**: A best-fit line has vertical intercept $1.50$ V and passes through $(0.60\\text{ A},\\ 1.20\\text{ V})$. Slope $= \\frac{1.20 - 1.50}{0.60} = -0.50\\;\\Omega$, so $\\varepsilon = 1.50$ V and $r = 0.50\\;\\Omega$.

### Method 3: Ammeter Only
With an ammeter and several known resistors $R$, measure $I$ for each. Rearranging $I = \\frac{\\varepsilon}{R + r}$:

$$\\frac{1}{I} = \\frac{1}{\\varepsilon}R + \\frac{r}{\\varepsilon}$$

A graph of $\\frac{1}{I}$ (vertical) versus $R$ (horizontal) is a straight line with slope $\\frac{1}{\\varepsilon}$ and vertical intercept $\\frac{r}{\\varepsilon}$.
      `
    },
    {
      id: 'cr6-application-drill',
      type: 'dropdown-select' as const,
      content: `
**Real Battery Check** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When a real battery supplies more current, its terminal voltage',
            options: ['increases', 'decreases', 'stays equal to the emf', 'becomes negative']
          },
          {
            label: 'On a graph of terminal voltage versus current, the vertical intercept equals',
            options: ['the emf', 'the internal resistance', 'the short-circuit current', 'zero']
          },
          {
            label: 'On that same graph, the slope equals',
            options: ['the internal resistance', 'the negative of the internal resistance', 'the emf', 'the external resistance']
          },
          {
            label: 'Connecting a wire of negligible resistance across a real battery produces a current equal to',
            options: ['zero', 'the emf divided by r', 'the emf times r', 'an infinite value']
          }
        ],
        correctAnswers: ['decreases', 'the emf', 'the negative of the internal resistance', 'the emf divided by r'],
        hint1: '$V_{\\text{terminal}} = \\varepsilon - Ir$: more current means a larger internal drop.',
        hint2: 'At $I = 0$ there is no internal drop.',
        hint3: 'Compare $V_{\\text{terminal}} = \\varepsilon - rI$ with $y = b + mx$.',
        hint4: 'With $R = 0$, only the internal resistance limits the current: $I = \\varepsilon/r$.',
        explanation: 'Terminal voltage falls as current rises; the graph of $V_{\\text{terminal}}$ versus $I$ has intercept $\\varepsilon$ and slope $-r$; a short circuit gives $I = \\varepsilon/r$, large when $r$ is small.'
      }
    },
    {
      id: 'cr6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A battery with $\\varepsilon = 6.0$ V and $r = 0.20\\;\\Omega$ is connected to a $2.8\\;\\Omega$ resistor. What fraction of the battery\'s total power is delivered to the external resistor?',
            options: [
              '50%',
              '7%',
              '93%',
              '100%'
            ],
            correctAnswer: 2,
            explanation: 'Fraction = $R/(R + r) = 2.8/(2.8 + 0.2) = 2.8/3.0 = 0.933 = 93\\%$. The remaining 7% is wasted as heat inside the battery — that is $r/(R + r)$, not the delivered fraction. 50% applies only when $R = r$.'
          },
          {
            question: 'An ideal voltmeter connected directly across an isolated battery, with nothing else attached, reads 9.0 V. This reading equals:',
            options: [
              'The internal drop $Ir$, since current flows inside the battery',
              'The terminal voltage under load, since the meter draws current',
              'The battery\'s emf, since no current flows in the battery',
              'The emf minus the internal drop, since the meter has resistance'
            ],
            correctAnswer: 2,
            explanation: 'An ideal voltmeter draws no current, so the internal drop $Ir$ is zero and the terminal reading equals the emf. The internal drop is zero here rather than 9.0 V, and a reading below the emf happens only when the battery supplies current to a load.'
          },
          {
            question: 'A graph of terminal voltage (vertical) versus current (horizontal) for a battery is a straight line with vertical intercept $1.5$ V and slope $-0.25\\;\\Omega$. The internal resistance is:',
            options: [
              '$0.25\\;\\Omega$',
              '$1.5\\;\\Omega$',
              '$6.0\\;\\Omega$',
              '$0.38\\;\\Omega$'
            ],
            correctAnswer: 0,
            explanation: 'From $V_{\\text{terminal}} = \\varepsilon - Ir$, the slope is $-r$, so $r = 0.25\\;\\Omega$. 1.5 is the emf in volts, 6.0 divides the intercept by the slope (that is the short-circuit current in amperes), and 0.38 multiplies them.'
          }
        ]
      }
    }
  ]
}
