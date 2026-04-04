export const physics2CurrentResistancePart5Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr5-intro',
      type: 'text' as const,
      content: `
# 💡 Electric Power & Energy

**Part 5 of 7 — Paying for Electrons**

Every electrical device converts energy from one form to another. Understanding power and energy lets you calculate how much energy a device uses — and how much it costs to run.
      `
    },
    {
      id: 'cr5-power-review',
      type: 'text' as const,
      content: `
## Power Formulas (Review & Extension)

Recall the three forms of the power equation:

$$P = IV = I^2R = \\frac{V^2}{R}$$

### Energy

Power is the rate of energy use, so:

$$E = Pt$$

| Symbol | Meaning | SI Unit |
|--------|---------|---------|
| $E$ | Energy | Joule (J) |
| $P$ | Power | Watt (W) |
| $t$ | Time | Second (s) |

### The Kilowatt-Hour

Your electric company doesn't bill you in joules — they use **kilowatt-hours** (kWh):

$$1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3.6 \\times 10^6 \\text{ J} = 3.6 \\text{ MJ}$$

A kilowatt-hour is the energy used by a 1000 W device running for 1 hour.

### Typical Electricity Cost

In the US: approximately **$0.12–$0.15 per kWh** (varies by region).

$$\\text{Cost} = \\text{Energy (kWh)} \\times \\text{Rate (\\$/kWh)}$$
      `
    },
    {
      id: 'cr5-household',
      type: 'text' as const,
      content: `
## Household Circuits

### Standard US Household Power

| Property | Value |
|----------|-------|
| Voltage | 120 V (standard) or 240 V (large appliances) |
| Frequency | 60 Hz (AC) |
| Typical circuit breaker | 15 A or 20 A |

### Maximum Power per Circuit

For a 15 A, 120 V circuit:

$$P_{\\text{max}} = IV = (15)(120) = 1800 \\text{ W}$$

This is why you can't run too many high-power devices on one circuit!

### Common Appliance Power Ratings

| Appliance | Power (W) |
|-----------|-----------|
| LED bulb | 10 |
| Laptop | 50–100 |
| Hair dryer | 1200–1800 |
| Microwave | 1000–1200 |
| Space heater | 1500 |
| Electric oven | 2000–5000 (240 V circuit) |
| Central AC | 3000–5000 (240 V circuit) |

### Why Large Appliances Use 240 V

For the same power: $P = IV$, doubling $V$ halves $I$. Lower current means:
- Thinner (cheaper) wires
- Less $I^2R$ heating loss in the wires
- Smaller circuit breakers
      `
    },
    {
      id: 'cr5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Power & Energy Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A 1500 W space heater runs for 8 hours. The energy consumed is:',
            options: [
              '12 kWh',
              '12,000 kWh',
              '187.5 kWh',
              '1.5 kWh'
            ],
            correctAnswer: 0,
            explanation: '$E = Pt = 1500 \\text{ W} \\times 8 \\text{ h} = 12{,}000 \\text{ Wh} = 12$ kWh.'
          },
          {
            question: 'A 120 V circuit with a 20 A breaker can safely supply a maximum power of:',
            options: [
              '6 W',
              '140 W',
              '2400 W',
              '24,000 W'
            ],
            correctAnswer: 2,
            explanation: '$P_{\\text{max}} = IV = (20)(120) = 2400$ W.'
          }
        ]
      }
    },
    {
      id: 'cr5-energy-drill',
      type: 'input-boxes' as const,
      content: `
**Energy & Cost Drill** 💰

Use an electricity rate of $0.12/kWh.

1) A 100 W light bulb runs 24 hours a day for 30 days. How many kWh does it use?

2) What is the monthly cost for that light bulb? (in $, round to nearest cent)

3) A 5000 W electric dryer runs for 45 minutes. How many kWh does it use?

4) You replace ten 60 W incandescent bulbs with ten 9 W LED bulbs. How many kWh do you save per day if they run 6 hours/day?

5) At $0.12/kWh, how much do you save per year (365 days) from that LED swap? (in $, round to nearest dollar)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['72', '8.64', '3.75', '3.06', '134'],
        hint1: '$E = Pt = 0.1 \\text{ kW} \\times 24 \\times 30$.',
        hint2: 'Cost = $72 \\times 0.12$.',
        hint3: '$E = 5.0 \\text{ kW} \\times 0.75 \\text{ h}$.',
        hint4: 'Savings per bulb = $(60 - 9) = 51$ W. Ten bulbs for 6 hours: $10 \\times 0.051 \\times 6$.',
        hint5: 'Annual savings = $3.06 \\times 365 \\times 0.12$.',
        explanation: '1) $E = 0.1 \\times 24 \\times 30 = 72$ kWh. 2) Cost $= 72 \\times 0.12 = \\$8.64$. 3) $E = 5.0 \\times 0.75 = 3.75$ kWh. 4) $\\Delta P = 10 \\times 51 = 510$ W $= 0.51$ kW. $E = 0.51 \\times 6 = 3.06$ kWh/day. 5) $3.06 \\times 365 \\times 0.12 = \\$134$.'
      }
    },
    {
      id: 'cr5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Why do power companies transmit electricity at very high voltages (hundreds of thousands of volts)?',
            options: [
              'High voltage is safer for workers',
              'High voltage allows the use of thinner wires',
              'For a given power, higher voltage means lower current, which reduces $I^2R$ transmission losses',
              'Appliances need high voltage to operate'
            ],
            correctAnswer: 2,
            explanation: '$P = IV$. For fixed power, raising $V$ lowers $I$. Transmission losses are $P_{\\text{loss}} = I^2R$. Lowering $I$ by a factor of 10 reduces losses by a factor of 100!'
          },
          {
            question: 'One kilowatt-hour equals:',
            options: [
              '1000 J',
              '3600 J',
              '$3.6 \\times 10^6$ J',
              '$3.6 \\times 10^9$ J'
            ],
            correctAnswer: 2,
            explanation: '$1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3{,}600{,}000 \\text{ J} = 3.6 \\times 10^6$ J.'
          }
        ]
      }
    }
  ]
}
