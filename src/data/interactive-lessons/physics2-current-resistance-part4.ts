export const physics2CurrentResistancePart4Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr4-intro',
      type: 'text' as const,
      content: `
# 📊 Resistance Experiments and Graphs

**Part 4 of 7 — Measuring Resistance and Resistivity**

AP Physics 2 free-response questions often hand you a set of meters and resistors and ask you to design an experiment, choose what to graph, and pull a physical quantity out of a slope. In this part you will test whether a resistor is ohmic, find a resistance from an $I$-$V$ graph, find a material's resistivity from a graph of $R$ versus $L$, and reason about how temperature affects resistance.
      `
    },
    {
      id: 'cr4-ohmic-test',
      type: 'text' as const,
      content: `
## Testing Whether a Resistor Is Ohmic

A material is **ohmic** if its resistance stays constant for all currents, so $I$ is directly proportional to $V$.

### The Setup
- Put the resistor in series with a battery and an **ammeter** (ammeters go in series).
- Connect a **voltmeter** in parallel across the resistor (voltmeters go in parallel).
- Change the potential difference across the resistor, for example by adding different known resistors in series with it, and record $V$ and $I$ for each trial.

### The Graph
Plot $I$ on the vertical axis and $V$ on the horizontal axis.

- **Ohmic**: a straight line through the origin. Its slope is $\\frac{\\Delta I}{\\Delta V} = \\frac{1}{R}$, so $R = \\frac{1}{\\text{slope}}$.
- **Non-ohmic**: a curve, so the ratio $V/I$ changes from point to point.

If you plot $V$ (vertical) against $I$ (horizontal) instead, the slope is $R$ itself.

### Example Data

| $V$ (volts) | 1.0 | 2.0 | 3.0 | 4.0 |
|---------|-----|-----|-----|-----|
| $I$ (amperes) | 0.051 | 0.099 | 0.152 | 0.198 |

The points fall on a straight line through the origin with slope $\\approx 0.050$ A/V, so the resistor is ohmic with $R \\approx \\frac{1}{0.050} = 20\\;\\Omega$.

### Reducing Uncertainty
- Take many data points over a wide range of $V$.
- Repeat each trial and average.
- Use the slope of a best-fit line rather than any single data point.
      `
    },
    {
      id: 'cr4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Graph Analysis Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A student graphs current (vertical) versus potential difference (horizontal) for a resistor and gets a straight line through the origin with slope $0.040$ A/V. The resistance is:',
            options: [
              '$0.040\\;\\Omega$',
              '$2.5\\;\\Omega$',
              '$25\\;\\Omega$',
              '$250\\;\\Omega$'
            ],
            correctAnswer: 2,
            explanation: 'On an $I$ versus $V$ graph the slope is $1/R$, so $R = 1/0.040 = 25\\;\\Omega$. Reading the slope as $R$ gives $0.040\\;\\Omega$, and 2.5 Ω and 250 Ω misplace the decimal point while inverting.'
          },
          {
            question: 'Which result would show that a circuit element is NOT ohmic?',
            options: [
              'Its $I$-$V$ graph is a straight line with a small slope',
              'Its $I$-$V$ graph is a straight line through the origin',
              'Its $I$-$V$ graph has a slope that keeps changing with $V$',
              'Its $I$-$V$ graph has a slope larger than one'
            ],
            correctAnswer: 2,
            explanation: 'Constant resistance means a constant slope, so a slope that changes with $V$ shows the resistance is changing. A small or large constant slope just means a large or small fixed resistance.'
          },
          {
            question: 'Where must the ammeter and voltmeter be placed to collect data for an $I$-$V$ graph of resistor $R_X$?',
            options: [
              'Ammeter in parallel with $R_X$; voltmeter in series with $R_X$',
              'Ammeter in series with $R_X$; voltmeter in parallel with $R_X$',
              'Both meters in series with $R_X$ and the battery',
              'Both meters in parallel with $R_X$ and each other'
            ],
            correctAnswer: 1,
            explanation: 'The ammeter must carry the same current as $R_X$, so it goes in series; the voltmeter must share the same two endpoints as $R_X$, so it goes in parallel. Swapping them bypasses $R_X$ through the ammeter and nearly stops the current with the voltmeter.'
          }
        ]
      }
    },
    {
      id: 'cr4-resistivity-graph',
      type: 'text' as const,
      content: `
## Finding Resistivity from a Graph

Resistivity is a property of the material, so it is found by measuring resistance for different geometries and graphing.

$$R = \\frac{\\rho L}{A}$$

### Varying the Length
Measure $R$ for several lengths of the same wire (same material, same $A$). Plot $R$ (vertical) versus $L$ (horizontal).

- The graph is a straight line through the origin.
- Slope $= \\frac{\\rho}{A}$, so $\\rho = (\\text{slope}) \\times A$.

**Example**: The best-fit line has slope $0.80\\;\\Omega/\\text{m}$, and the wire's cross-sectional area is $1.0 \\times 10^{-7}\\;\\text{m}^2$.

$$\\rho = (0.80)(1.0 \\times 10^{-7}) = 8.0 \\times 10^{-8}\\;\\Omega\\cdot\\text{m}$$

### Varying the Area
For wires of the same material and the same length but different thickness, plot $R$ versus $\\frac{1}{A}$. The slope is $\\rho L$.

> 💡 Choose axes that make the graph a straight line. The quantity you want then comes from the slope, and a best-fit line uses all of your data at once.
      `
    },
    {
      id: 'cr4-temperature',
      type: 'text' as const,
      content: `
## Temperature and Resistance

### Conductors
The resistivity of a conductor **typically increases with temperature**. Hotter atoms vibrate more and interrupt the motion of charge carriers more often.

### Resistors Heat Themselves
A resistor converts electrical energy into thermal energy. That can raise the temperature of the resistor and its surroundings, which can change its resistance.

### The Ohmic Model
An ohmic material is modeled as having **constant resistivity regardless of temperature**, so its $I$-$V$ graph stays a straight line.

### A Glowing Filament
A real lightbulb filament gets much hotter at higher potential differences, so its resistance rises. On an $I$ versus $V$ graph, the curve bends toward the $V$ axis: each extra volt produces less extra current than the one before.

> 📝 Unless a question says otherwise, the AP exam treats resistors and lightbulbs as ohmic. Use the filament behavior only when a problem describes it.
      `
    },
    {
      id: 'cr4-temp-drill',
      type: 'input-boxes' as const,
      content: `
**Lab Data Drill** 🔬

1) A best-fit line on a graph of $I$ (vertical) versus $V$ (horizontal) passes through the origin and the point $(6.0\\text{ V},\\ 0.30\\text{ A})$. What is its slope? (in A/V)

2) What is the resistance of that resistor? (in $\\Omega$)

3) For a wire of cross-sectional area $4.0 \\times 10^{-7}\\;\\text{m}^2$, a graph of $R$ versus $L$ has slope $2.5\\;\\Omega/\\text{m}$. What is the resistivity? (in $\\Omega\\cdot$m, scientific notation like 1.0e-6)

4) What length of that same wire has a resistance of $10\\;\\Omega$? (in m)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['0.05', '20', '1.0e-6', '4'],
        hint1: 'Slope $= \\Delta I / \\Delta V = 0.30 / 6.0$.',
        hint2: 'On an $I$ versus $V$ graph, $R = 1/\\text{slope}$.',
        hint3: 'Slope of $R$ versus $L$ is $\\rho/A$, so $\\rho = \\text{slope} \\times A = (2.5)(4.0 \\times 10^{-7})$. For the length, $L = R / \\text{slope}$.',
        explanation: 'Slope $= 0.30/6.0 = 0.050$ A/V, so $R = 1/0.050 = 20\\;\\Omega$. Resistivity $\\rho = (2.5)(4.0 \\times 10^{-7}) = 1.0 \\times 10^{-6}\\;\\Omega\\cdot$m. A $10\\;\\Omega$ length is $10/2.5 = 4.0$ m.'
      }
    },
    {
      id: 'cr4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'On a graph of current versus potential difference for a glowing lightbulb filament, the slope decreases as the potential difference increases. This shows that the filament\'s resistance:',
            options: [
              'Decreases as the filament gets hotter',
              'Increases as the filament heats',
              'Stays constant because the filament is metal',
              'Increases only while the current is decreasing'
            ],
            correctAnswer: 1,
            explanation: 'The slope of an $I$-$V$ graph is $1/R$, so a shrinking slope means a growing resistance, consistent with conductor resistivity rising as the filament heats. A constant resistance would give a straight line, and the current is still increasing along the curve.'
          },
          {
            question: 'A student measures the resistance of several lengths of one wire and graphs $R$ (vertical) versus $L$ (horizontal). The slope of the best-fit line equals:',
            options: [
              '$\\rho A$',
              '$A/\\rho$',
              '$\\rho L$',
              '$\\rho/A$'
            ],
            correctAnswer: 3,
            explanation: 'From $R = \\rho L/A$, $R$ is proportional to $L$ with constant of proportionality $\\rho/A$. Multiplying by $A$ or inverting the ratio does not match the formula, and $\\rho L$ is the slope of a graph of $R$ versus $1/A$.'
          }
        ]
      }
    }
  ]
}
