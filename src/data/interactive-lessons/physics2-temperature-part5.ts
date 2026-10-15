export const physics2TemperaturePart5Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te5-intro',
      type: 'text' as const,
      content: `
# 🔧 Problem-Solving Workshop

**Part 5 of 7 — Gas Graphs and Finding Absolute Zero**

AP Physics 2 often gives gas data as a graph or a table and asks you to describe the gas, find an unknown, or design the experiment. This workshop shows how to read the standard gas graphs and how a simple experiment locates absolute zero.
      `
    },
    {
      id: 'te5-graphs',
      type: 'text' as const,
      content: `
## Reading Gas Graphs

### Pressure vs. Temperature (Constant Volume)

From $PV = nRT$ with $V$ and $n$ fixed:

$$P = \\left(\\frac{nR}{V}\\right)T$$

- Plotted against $T$ in **kelvins**, the graph is a straight line through the origin.
- The slope is $\\frac{nR}{V}$, so a steeper line means more gas or a smaller container.

### Pressure vs. Volume (Constant Temperature)

$$P = \\frac{nRT}{V}$$

- $P$ vs. $V$ is a curve (a hyperbola), called an **isotherm**.
- A hotter isotherm lies farther from the origin.
- To get a straight line, plot $P$ vs. $\\frac{1}{V}$: the slope is $nRT$.

### Volume vs. Temperature (Constant Pressure)

$$V = \\left(\\frac{nR}{P}\\right)T$$

A straight line through the origin when $T$ is in kelvins.

## Finding Absolute Zero

If you measure the pressure of a sealed, constant-volume bulb of gas at several **Celsius** temperatures, the points still fall on a straight line, but it does not pass through the origin. Extend (extrapolate) the line down to $P = 0$. It crosses the temperature axis near $-273°\\text{C}$, no matter which gas you use or how much of it.

That temperature, where an ideal gas would exert zero pressure, is **absolute zero**: $0$ K. The kelvin scale simply shifts the zero of the Celsius scale to that point.
      `
    },
    {
      id: 'te5-graphs-quiz',
      type: 'multiple-choice' as const,
      content: `
**Graph Reading Check** 📈
      `,
      exercise: {
        questions: [
          {
            question: 'A student graphs the pressure of a fixed amount of gas against its volume at constant temperature and wants a straight line. She should plot pressure against:',
            options: [
              '$1/V$',
              '$V^2$',
              '$\\sqrt{V}$',
              '$V$'
            ],
            correctAnswer: 0,
            explanation: 'At constant $T$, $P = nRT \\cdot (1/V)$, so $P$ is proportional to $1/V$ and that graph is a line with slope $nRT$. Plotting against $V$ itself gives a curve.'
          },
          {
            question: 'Two constant-volume gas bulbs give straight $P$ vs. $T$ (kelvin) lines through the origin. Bulb 1 has the steeper line. Which conclusion is supported?',
            options: [
              'Bulb 1 has more moles of gas per cubic meter',
              'Bulb 1 contains a heavier gas than bulb 2',
              'Bulb 1 is at a higher temperature than bulb 2',
              'Bulb 1 holds a gas that is less ideal'
            ],
            correctAnswer: 0,
            explanation: 'The slope of $P$ vs. $T$ is $nR/V$, so a steeper line means more moles per unit volume. The slope does not depend on the type of gas, and both bulbs were measured over the same range of temperatures.'
          },
          {
            question: 'A constant-volume bulb is measured at several Celsius temperatures, and the best-fit line is extended to zero pressure. The line crosses the temperature axis at about:',
            options: [
              '$-273°\\text{C}$',
              '$0°\\text{C}$',
              '$-100°\\text{C}$',
              '$-460°\\text{C}$'
            ],
            correctAnswer: 0,
            explanation: 'Extrapolating to $P = 0$ gives absolute zero, about $-273°\\text{C}$, for any ideal gas. Zero degrees Celsius is only the freezing point of water, where the gas still has plenty of pressure.'
          }
        ]
      }
    },
    {
      id: 'te5-worked',
      type: 'text' as const,
      content: `
## Worked Example: Analyzing Lab Data

A sealed $1.00 \\times 10^{-3} \\text{ m}^3$ bulb of gas is placed in water baths, and its pressure is recorded:

| $T$ (°C) | 0 | 25 | 50 | 75 | 100 |
|---|---|---|---|---|---|
| $P$ (kPa) | 91.0 | 99.3 | 107.7 | 116.0 | 124.3 |

**Step 1 — Slope.** Each 25°C step raises $P$ by about 8.33 kPa, so the slope is

$$\\frac{\\Delta P}{\\Delta T} = \\frac{124.3 - 91.0}{100 - 0} = 0.333 \\text{ kPa/°C} = 333 \\text{ Pa/K}$$

(A change of 1°C is the same size as a change of 1 K.)

**Step 2 — Extrapolate to $P = 0$.** Starting from 91.0 kPa at 0°C and dropping 0.333 kPa per degree:

$$T_{P=0} = 0 - \\frac{91.0}{0.333} \\approx -273°\\text{C}$$

**Step 3 — Moles of gas.** The slope equals $\\frac{nR}{V}$, so

$$n = \\frac{(\\text{slope})V}{R} = \\frac{(333)(1.00 \\times 10^{-3})}{8.31} \\approx 0.040 \\text{ mol}$$

**Step 4 — Sources of error.** If part of the tube connecting the bulb to the gauge sits outside the bath, some gas is not at the bath temperature, and the measured pressures rise less than they should. A careful procedure keeps the whole gas sample in the bath and waits for thermal equilibrium before each reading.
      `
    },
    {
      id: 'te5-lab-drill',
      type: 'input-boxes' as const,
      content: `
**Lab Analysis Drill** 🧪

A different sealed bulb of volume $2.00 \\times 10^{-3} \\text{ m}^3$ reads $60.0$ kPa at $0°\\text{C}$ and $82.0$ kPa at $100°\\text{C}$. Assume the graph of $P$ vs. $T$ is a straight line.

1) Slope of the line, in Pa/K (3 significant figures)

2) Temperature, in °C, where the line reaches $P = 0$ (round to the nearest whole number)

3) Moles of gas in the bulb (2 significant figures). Use $R = 8.31$ J/(mol·K).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['220', '-273', '0.053'],
        hint1: 'Slope $= (82.0 - 60.0)$ kPa $/ (100 - 0)$ K. Convert kPa to Pa.',
        hint2: 'Drop from 60,000 Pa at 0°C to zero at a rate of 220 Pa per degree: $T = -60{,}000/220$.',
        hint3: 'Slope $= nR/V$, so $n = (\\text{slope})V/R = (220)(2.00 \\times 10^{-3})/8.31$.',
        explanation: '1) $(22{,}000 \\text{ Pa})/(100 \\text{ K}) = 220$ Pa/K. 2) $-60{,}000/220 \\approx -273°\\text{C}$. 3) $n = (220)(2.00 \\times 10^{-3})/8.31 \\approx 0.053$ mol.'
      }
    },
    {
      id: 'te5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'On one set of axes, two isotherms ($P$ vs. $V$) are drawn for the same sample of gas. Isotherm A lies everywhere farther from the origin than isotherm B. Which is true?',
            options: [
              'A is at the higher temperature',
              'A is at the lower temperature',
              'A and B are at the same temperature',
              'A holds fewer moles of gas than B'
            ],
            correctAnswer: 0,
            explanation: 'For the same sample, $PV = nRT$, so a larger product $PV$ at every point means a higher temperature. Both curves describe the same number of moles.'
          },
          {
            question: 'A student repeats the absolute-zero experiment with twice as much gas in the same bulb. Compared with the first trial, the new $P$ vs. $T$ (°C) line has:',
            options: [
              'Twice the slope and the same $T$-intercept near $-273°\\text{C}$',
              'The same slope and a $T$-intercept twice as far below zero',
              'Twice the slope and a $T$-intercept closer to $0°\\text{C}$',
              'Half the slope and the same $T$-intercept near $-273°\\text{C}$'
            ],
            correctAnswer: 0,
            explanation: 'The slope $nR/V$ doubles when $n$ doubles, but every line still extrapolates to zero pressure at absolute zero. That shared intercept is why absolute zero is a property of temperature, not of a particular sample.'
          }
        ]
      }
    }
  ]
}
