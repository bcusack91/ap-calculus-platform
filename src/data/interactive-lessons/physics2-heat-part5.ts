export const physics2HeatPart5Data = {
  topicSlug: 'heat-specific-heat',
  sections: [
    {
      id: 'ht5-intro',
      type: 'text' as const,
      content: `
# 🧱 Conduction Problem Solving

**Part 5 of 7 — Thermal Resistance and Composite Walls**

Now that you know the conduction equation, let's master the calculations. We'll work through single-layer problems, then build up to composite (multi-layer) walls — a favorite AP topic.
      `
    },
    {
      id: 'ht5-single-layer',
      type: 'text' as const,
      content: `
## Single-Layer Conduction Review

$$\\frac{Q}{t} = \\frac{kA\\Delta T}{L}$$

This equation gives the **steady-state** rate of heat flow — the rate after the system has settled into a constant temperature gradient.

### Worked Example

A glass window ($k = 0.84$ W/(m·K)) is 1.2 m wide, 1.5 m tall, and 6.0 mm thick. The inside surface is at 20°C and the outside surface is at 5°C. What is the rate of heat loss?

$$A = (1.2)(1.5) = 1.8 \\text{ m}^2$$
$$L = 6.0 \\text{ mm} = 0.006 \\text{ m}$$
$$\\Delta T = 20 - 5 = 15 \\text{ K}$$

$$\\frac{Q}{t} = \\frac{(0.84)(1.8)(15)}{0.006} = \\frac{22.68}{0.006} = 3{,}780 \\text{ W}$$

That's nearly 4 kilowatts — through a single window! This is why insulation matters.
      `
    },
    {
      id: 'ht5-thermal-resistance',
      type: 'text' as const,
      content: `
## Thermal Resistance (R-Value)

Just like electrical resistance opposes current flow, **thermal resistance** opposes heat flow.

### Defining R-Value

$$R = \\frac{L}{k}$$

Where:
- $R$ = thermal resistance per unit area (m²·K/W)
- $L$ = thickness (m)
- $k$ = thermal conductivity (W/(m·K))

The conduction equation becomes:

$$\\frac{Q}{t} = \\frac{A \\Delta T}{R}$$

### Composite Walls — Series

For layers in **series** (heat passes through one layer after another):

$$R_{\\text{total}} = R_1 + R_2 + R_3 + \\cdots$$

This is exactly like resistors in series in electric circuits!

$$\\frac{Q}{t} = \\frac{A \\Delta T_{\\text{total}}}{R_{\\text{total}}}$$

### Example: Double-Pane Window

A double-pane window has two glass panes ($k = 0.84$, $L = 4$ mm each) with an air gap ($k = 0.024$, $L = 10$ mm) between them.

$$R_{\\text{glass}} = \\frac{0.004}{0.84} = 0.00476 \\text{ m}^2\\text{}\\cdot\\text{K/W each}$$

$$R_{\\text{air}} = \\frac{0.010}{0.024} = 0.417 \\text{ m}^2\\text{}\\cdot\\text{K/W}$$

$$R_{\\text{total}} = 0.00476 + 0.417 + 0.00476 = 0.426 \\text{ m}^2\\text{}\\cdot\\text{K/W}$$

The air gap provides about **98%** of the total thermal resistance, despite being only slightly thicker than the glass! This demonstrates why trapped air is such an effective insulator.
      `
    },
    {
      id: 'ht5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Conduction & R-Value Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'If you double the thickness of a wall (same material), the steady-state rate of heat conduction through it:',
            options: [
              'Doubles',
              'Stays the same',
              'Is cut in half',
              'Quadruples'
            ],
            correctAnswer: 2,
            explanation: '$Q/t = kA\\Delta T / L$. Since $Q/t \\propto 1/L$, doubling $L$ cuts the heat flow rate in half. Thicker walls provide better insulation.'
          },
          {
            question: 'Two walls of equal area and thickness are made of different materials. Wall A has $k = 0.04$ W/(m·K) and Wall B has $k = 40$ W/(m·K). Wall B conducts heat at a rate that is:',
            options: [
              '2× faster than Wall A',
              '100× faster than Wall A',
              '1{,}000× faster than Wall A',
              '10{,}000× faster than Wall A'
            ],
            correctAnswer: 2,
            explanation: '$Q/t \\propto k$. The ratio is $40/0.04 = 1{,}000$. Wall B (a metal) conducts heat 1{,}000 times faster than Wall A (an insulator).'
          }
        ]
      }
    },
    {
      id: 'ht5-calc-drill',
      type: 'input-boxes' as const,
      content: `
**Conduction Calculation Drill** 🔢

A Styrofoam cooler wall ($k = 0.033$ W/(m·K)) is 3.0 cm thick and has a total surface area of 0.80 m². The inside is at 2°C and the outside is at 32°C.

1) What is the thermal resistance $R = L/k$ of the wall? (m²·K/W, round to 3 significant figures)

2) What is the rate of heat flow into the cooler? (in watts, round to 3 significant figures)

3) How much heat enters the cooler in 6 hours? (in kJ, round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.91', '26.4', '570'],
        hint1: '$R = L/k = 0.030 / 0.033$.',
        hint2: '$Q/t = A \\Delta T / R = (0.80)(30) / 0.91$.',
        hint3: 'Total heat = power × time. Convert 6 hours to seconds: $6 \\times 3{,}600 = 21{,}600$ s. Then convert J to kJ.',
        explanation: '1) $R = 0.030/0.033 = 0.909 \\approx 0.91$ m²·K/W. 2) $Q/t = (0.80)(30)/0.91 = 26.4$ W. 3) $Q = (26.4)(21{,}600) = 570{,}240$ J $\\approx 570$ kJ.'
      }
    },
    {
      id: 'ht5-composite-drill',
      type: 'input-boxes' as const,
      content: `
**Composite Wall Drill** 🔢

A wall consists of 10 cm of brick ($k = 0.60$ W/(m·K)) and 5 cm of insulation ($k = 0.040$ W/(m·K)) in series. The wall area is 12 m². The inside temperature is 22°C and the outside is $-8$°C.

1) $R_{\\text{brick}}$ in m²·K/W (round to 3 significant figures)

2) $R_{\\text{insulation}}$ in m²·K/W (round to 3 significant figures)

3) Total rate of heat loss through the wall in watts (round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.17', '1.25', '254'],
        hint1: '$R_{\\text{brick}} = L/k = 0.10/0.60$.',
        hint2: '$R_{\\text{insulation}} = L/k = 0.05/0.040$.',
        hint3: '$R_{\\text{total}} = R_{\\text{brick}} + R_{\\text{insulation}}$. Then $Q/t = A \\Delta T / R_{\\text{total}} = (12)(30)/R_{\\text{total}}$.',
        explanation: '1) $R_{\\text{brick}} = 0.10/0.60 = 0.167 \\approx 0.17$ m²·K/W. 2) $R_{\\text{insulation}} = 0.05/0.04 = 1.25$ m²·K/W. 3) $R_{\\text{total}} = 0.17 + 1.25 = 1.42$ m²·K/W. $Q/t = (12)(30)/1.42 = 254$ W. Note the insulation provides 88% of the total resistance!'
      }
    },
    {
      id: 'ht5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Conduction Problem Solving**
      `,
      exercise: {
        questions: [
          {
            question: 'Adding a 2 cm layer of Styrofoam insulation ($k = 0.033$ W/(m·K)) to a 10 cm brick wall ($k = 0.60$ W/(m·K)). The insulation\'s R-value relative to the brick\'s R-value is approximately:',
            options: [
              'Much smaller — the insulation barely helps',
              'About the same',
              'About 3.6 times larger — the insulation dominates',
              'About 10 times larger'
            ],
            correctAnswer: 2,
            explanation: '$R_{\\text{foam}} = 0.02/0.033 = 0.606$ m²·K/W. $R_{\\text{brick}} = 0.10/0.60 = 0.167$ m²·K/W. Ratio: $0.606/0.167 \\approx 3.6$. A thin layer of good insulation beats a thick wall of brick!'
          },
          {
            question: 'In steady-state conduction through a composite wall, which quantity is the SAME through every layer?',
            options: [
              'Temperature gradient ($\\Delta T / L$)',
              'Rate of heat flow ($Q/t$)',
              'Thermal conductivity ($k$)',
              'Temperature difference across the layer'
            ],
            correctAnswer: 1,
            explanation: 'In steady state, the same amount of heat flows through each layer per unit time — otherwise energy would accumulate at an interface. The temperature drop across each layer differs depending on that layer\'s R-value.'
          }
        ]
      }
    }
  ]
}
