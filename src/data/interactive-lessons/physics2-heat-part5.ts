export const physics2HeatPart5Data = {
  topicSlug: 'heat-specific-heat',
  sections: [
    {
      id: 'ht5-intro',
      type: 'text' as const,
      content: `
# 🧱 Conduction Problem Solving

**Part 5 of 7 — Conduction Rates and Composite Walls**

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
      id: 'ht5-composite',
      type: 'text' as const,
      content: `
## Two Layers in a Row (Composite Walls)

Real walls are often made of layers, such as brick on the outside and foam insulation on the inside. In **steady state**, the temperature at every point stops changing, so energy cannot pile up at the boundary between layers:

$$\\left(\\frac{Q}{t}\\right)_{\\text{layer 1}} = \\left(\\frac{Q}{t}\\right)_{\\text{layer 2}}$$

The temperature drops across the two layers must also add up to the total difference:

$$\\Delta T_1 + \\Delta T_2 = \\Delta T_{\\text{total}}$$

Those two facts, plus $\\frac{Q}{t} = \\frac{kA\\Delta T}{L}$ for each layer, are all you need.

### Example: Brick Plus Insulation

A 12 $\\text{m}^2$ wall has 10 cm of brick ($k = 0.60$ W/(m·K)) and 5.0 cm of insulation ($k = 0.040$ W/(m·K)). Inside is at 22°C, outside at $-8$°C. Let $T_i$ be the temperature where the layers meet.

**Brick:** $\\frac{Q}{t} = \\frac{(0.60)(12)(22 - T_i)}{0.10} = 72(22 - T_i)$

**Insulation:** $\\frac{Q}{t} = \\frac{(0.040)(12)(T_i + 8)}{0.050} = 9.6(T_i + 8)$

**Set them equal:** $72(22 - T_i) = 9.6(T_i + 8) \\Rightarrow 1584 - 76.8 = 81.6\\,T_i \\Rightarrow T_i \\approx 18.5$°C

**Rate:** $\\frac{Q}{t} = 72(22 - 18.5) \\approx 254$ W

The insulation carries about 26.5 of the 30 degrees of temperature drop. The layer that conducts poorly gets most of the temperature difference, because it needs a large $\\Delta T$ to pass the same energy per second.
      `
    },
    {
      id: 'ht5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Conduction Rate Quiz** 🧠
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
              '1,000× faster than Wall A',
              '10,000× faster than Wall A'
            ],
            correctAnswer: 2,
            explanation: '$Q/t \\propto k$. The ratio is $40/0.04 = 1{,}000$. Wall B (a metal) conducts heat 1,000 times faster than Wall A (an insulator).'
          }
        ]
      }
    },
    {
      id: 'ht5-calc-drill',
      type: 'input-boxes' as const,
      content: `
**Conduction Calculation Drill** 🔢

A Styrofoam cooler wall ($k = 0.033$ W/(m·K)) is 3.0 cm thick and has a total surface area of 0.80 $\\text{m}^2$. The inside is at 2°C and the outside is at 32°C.

1) What is the rate of energy flow into the cooler? (in watts, 3 significant figures)

2) How much energy enters the cooler in 6 hours? (in kJ, round to the nearest ten)

3) If the wall were made twice as thick, what would the rate be? (in watts, 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['26.4', '570', '13.2'],
        hint1: '$\\frac{Q}{t} = \\frac{kA\\Delta T}{L} = \\frac{(0.033)(0.80)(30)}{0.030}$.',
        hint2: 'Energy = rate × time. Six hours is $6 \\times 3600 = 21{,}600$ s. Divide joules by 1,000 for kJ.',
        hint3: 'The rate is inversely proportional to the thickness $L$.',
        explanation: '1) $\\frac{(0.033)(0.80)(30)}{0.030} = 26.4$ W. 2) $Q = (26.4)(21{,}600) \\approx 570{,}000$ J $\\approx 570$ kJ. 3) Doubling $L$ halves the rate: $13.2$ W.'
      }
    },
    {
      id: 'ht5-composite-drill',
      type: 'input-boxes' as const,
      content: `
**Composite Wall Drill** 🔢

A 10 $\\text{m}^2$ wall has 2.0 cm of wood ($k = 0.12$ W/(m·K)) on the inside and 3.0 cm of foam ($k = 0.030$ W/(m·K)) on the outside. Inside is at 20°C and outside is at 0°C. The wall is in steady state.

1) Temperature where the wood meets the foam, in °C (3 significant figures)

2) Rate of energy flow through the wall, in watts (3 significant figures)

3) Temperature drop across the wood, in °C (2 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17.1', '171', '2.9'],
        hint1: 'Wood: $\\frac{Q}{t} = \\frac{(0.12)(10)(20 - T_i)}{0.020} = 60(20 - T_i)$. Foam: $\\frac{Q}{t} = \\frac{(0.030)(10)(T_i - 0)}{0.030} = 10\\,T_i$.',
        hint2: 'Set the two rates equal and solve for $T_i$, then substitute back into either rate.',
        hint3: 'The drop across the wood is $20 - T_i$.',
        explanation: '1) $60(20 - T_i) = 10\\,T_i \\Rightarrow T_i = 1200/70 \\approx 17.1$°C. 2) $\\frac{Q}{t} = 10(17.14) \\approx 171$ W. 3) $20 - 17.1 \\approx 2.9$°C; the poorly conducting foam takes most of the drop.'
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
            question: 'A wall has a thin inner layer of metal and a thick outer layer of foam. In steady state, most of the temperature difference across the wall occurs across:',
            options: [
              'The foam layer, which conducts energy poorly',
              'The metal layer, which conducts energy well',
              'Both layers equally, since the same rate passes through each',
              'Neither layer, since the wall has reached steady state'
            ],
            correctAnswer: 0,
            explanation: 'The same rate of energy flow passes through both layers. A poor conductor needs a large temperature difference to pass that rate, so the foam carries most of the drop. Equal rates do not mean equal temperature drops, because $k$ and $L$ differ.'
          }
        ]
      }
    }
  ]
}
