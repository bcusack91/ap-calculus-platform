export const physics2ThermoProcPart1Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p1-intro',
      type: 'text' as const,
      content: `# 🔥 Thermodynamic Processes

**Part 1 of 7 — PV Diagrams**

---

### The Four Thermodynamic Processes

| Process | What’s Constant | PV Diagram | Work |
|---------|---------------------|------------|------|
| **Isobaric** | Pressure ($P$) | Horizontal line | $W = P\\\\Delta V$ |
| **Isochoric** (Isovolumetric) | Volume ($V$) | Vertical line | $W = 0$ |
| **Isothermal** | Temperature ($T$) | Hyperbola ($PV = nRT$) | $W = nRT\\\\ln(V_f/V_i)$ |
| **Adiabatic** | No heat transfer ($Q = 0$) | Steeper than isothermal | $W = -\\\\Delta U$ |

---

### First Law of Thermodynamics

$$\\\\Delta U = Q - W$$

- $\\\\Delta U$: change in internal energy (depends only on $T$ for ideal gas)
- $Q$: heat added to the system
- $W$: work done BY the system

> 🔑 **Work = area under the curve** on a PV diagram. Clockwise cycles do net positive work (engines). Counterclockwise cycles require net work input (refrigerators).

---

### Sign Conventions

| Quantity | Positive | Negative |
|----------|----------|----------|
| $Q$ | Heat flows IN | Heat flows OUT |
| $W$ | Gas EXPANDS | Gas COMPRESSES |
| $\\\\Delta U$ | Temperature RISES | Temperature DROPS |`
    },    {
      id: 'thermodynamicprocesses-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'In an isochoric process, work done by the gas is:',
            options: ['$P\\\\Delta V$', 'Zero', '$nRT\\\\ln(V_f/V_i)$', 'Negative'],
            correctAnswer: 1,
            explanation: 'Isochoric = constant volume. $W = P\\\\Delta V = 0$ since $\\\\Delta V = 0$.'
          },
          {
            question: 'On a PV diagram, a horizontal line represents:',
            options: ['Isothermal process', 'Adiabatic process', 'Isobaric process', 'Isochoric process'],
            correctAnswer: 2,
            explanation: 'Constant pressure = horizontal line on PV diagram.'
          },
          {
            question: 'In an adiabatic expansion:',
            options: ['$Q > 0$', '$Q = 0$ and gas cools', '$Q = 0$ and gas heats up', 'Temperature is constant'],
            correctAnswer: 1,
            explanation: 'Adiabatic: $Q = 0$. Expansion does work ($W > 0$), so $\\\\Delta U < 0$ and temperature drops.'
          }
        ]
      }
    },    {
      id: 'thermodynamicprocesses-p1-input',
      type: 'input-boxes' as const,
      content: `
**First Law Practice** 🧮

A gas undergoes an isobaric expansion at $P = 2 \\\\times 10^5$ Pa from $V_i = 0.01$ m³ to $V_f = 0.03$ m³.

**1)** Work done by gas? (in joules)

**2)** If $Q = 10000$ J, find $\\\\Delta U$? (in joules)

**3)** Did the temperature increase, decrease, or stay the same?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4000', '6000', 'increase'],
        hint1: '$W = P\\\\Delta V = 2 \\\\times 10^5 (0.02)$',
        hint2: '$\\\\Delta U = Q - W = 10000 - 4000$',
        hint3: 'Positive $\\\\Delta U$ means...',
        explanation: '1) $W = 2 \\\\times 10^5 \\\\times 0.02 = 4000$ J. 2) $\\\\Delta U = 10000 - 4000 = 6000$ J. 3) Increase ($\\\\Delta U > 0$).'
      }
    }
  ]
};
