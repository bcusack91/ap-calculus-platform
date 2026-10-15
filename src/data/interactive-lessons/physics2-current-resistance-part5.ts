export const physics2CurrentResistancePart5Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr5-intro',
      type: 'text' as const,
      content: `
# 💡 Electric Power & Energy

**Part 5 of 7 — Energy Transfer in Circuit Elements**

Every circuit is an energy story: the battery gives charges electric potential energy, and the resistors and bulbs convert that energy into thermal energy and light. In this part you will track that energy, compare the power in series and parallel elements, and use power to predict which bulbs glow brightest.
      `
    },
    {
      id: 'cr5-energy-per-charge',
      type: 'text' as const,
      content: `
## Energy Carried by Charge

When a charge $q$ moves through a potential difference $\\Delta V$, its electric potential energy changes by

$$\\Delta U_E = q\\Delta V$$

- In the battery, charges are raised in potential by $\\varepsilon$, gaining energy $q\\varepsilon$.
- In a resistor, charges drop in potential, and that energy is converted to **thermal energy** in the resistor.

### From Energy to Power

Power is the rate of energy transfer. Dividing $\\Delta U_E = q\\Delta V$ by time:

$$P = \\frac{\\Delta U_E}{\\Delta t} = \\frac{\\Delta q}{\\Delta t}\\Delta V = I\\Delta V$$

and the energy transferred in a time interval is

$$\\Delta E = P\\Delta t$$

### Example
A $9.0$ V battery moves $20$ C of charge through a circuit. The energy it supplies is $(20)(9.0) = 180$ J. If that takes $60$ s, the battery's power output is $180/60 = 3.0$ W.
      `
    },
    {
      id: 'cr5-power-review',
      type: 'text' as const,
      content: `
## Power in Series and Parallel

$$P = I\\Delta V = I^2R = \\frac{(\\Delta V)^2}{R}$$

| Arrangement | What is shared | Best form | Larger $R$ gets |
|-------------|----------------|-----------|-----------------|
| Series | Same current $I$ | $P = I^2R$ | **More** power |
| Parallel | Same $\\Delta V$ | $P = (\\Delta V)^2/R$ | **Less** power |

### Energy Conservation Check

The power supplied by an ideal battery, $P = \\varepsilon I$, equals the total power dissipated by all the resistors.

**Series**: $12$ V battery with $2\\;\\Omega$ and $4\\;\\Omega$: $I = 2$ A.
- $P_2 = (2)^2(2) = 8$ W and $P_4 = (2)^2(4) = 16$ W
- Total: $24$ W $= (12)(2)$ ✓

**Parallel**: the same resistors each across $12$ V.
- $P_2 = 144/2 = 72$ W and $P_4 = 144/4 = 36$ W
- Total: $108$ W $= (12)(3 + 6)$ ✓

The parallel arrangement draws much more power from the same battery, because its equivalent resistance is smaller.
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
            question: 'A $6.0$ V battery moves $15$ C of charge through a resistor. How much energy is converted to thermal energy in the resistor?',
            options: [
              '0.40 J',
              '2.5 J',
              '21 J',
              '90 J'
            ],
            correctAnswer: 3,
            explanation: '$\\Delta U_E = q\\Delta V = (15)(6.0) = 90$ J. 2.5 J divides the charge by the potential difference, 0.40 J divides the other way, and 21 J adds the two numbers.'
          },
          {
            question: 'A $3\\;\\Omega$ resistor and a $6\\;\\Omega$ resistor are connected in series to a battery. Which statement about their power is correct?',
            options: [
              'The $3\\;\\Omega$ resistor dissipates twice as much power',
              'The $6\\;\\Omega$ resistor dissipates twice as much power',
              'The $6\\;\\Omega$ resistor dissipates four times as much power',
              'The two resistors dissipate the same amount of power'
            ],
            correctAnswer: 1,
            explanation: 'Series resistors carry the same current, so $P = I^2R$ is proportional to $R$, and doubling $R$ doubles the power. Twice as much for the $3\\;\\Omega$ resistor is the parallel result, and four times squares the ratio by mistake.'
          }
        ]
      }
    },
    {
      id: 'cr5-brightness',
      type: 'text' as const,
      content: `
## Bulb Brightness Follows Power

The brightness of a bulb increases with the power it dissipates, so power is how you rank bulbs.

### Identical Bulbs: A in Series with B and C in Parallel
Bulb A carries the full current $I$; at the junction the current splits equally, so B and C each carry $I/2$.

$$P_A = I^2R \\qquad P_B = P_C = \\left(\\frac{I}{2}\\right)^2R = \\frac{I^2R}{4}$$

**Ranking**: A is brightest; B and C are equally bright and dimmer than A.

### What Happens When…
- **C is unscrewed**: the circuit becomes A and B in series. $R_{\\text{eq}}$ rises from $1.5R$ to $2R$, so the battery current drops and **A gets dimmer**. B now has a larger share of the emf, so **B gets brighter**.
- **A bulb is added in parallel directly across an ideal battery**: each existing parallel bulb keeps the full emf, so **its brightness does not change**, but the battery supplies more total power.
- **A bulb is added in series**: the current through every bulb in that path decreases, so **all of them get dimmer**.

### Different Bulbs
- In **series**, the bulb with the larger resistance is brighter ($P = I^2R$).
- In **parallel**, the bulb with the smaller resistance is brighter ($P = (\\Delta V)^2/R$).
      `
    },
    {
      id: 'cr5-energy-drill',
      type: 'input-boxes' as const,
      content: `
**Power & Energy Drill** ⚡

1) A $6.0$ V battery sends $0.50$ A through a bulb. What power does the bulb dissipate? (in W)

2) How much energy does that bulb convert in $2.0$ minutes? (in J)

3) A $3\\;\\Omega$ and a $6\\;\\Omega$ resistor are connected in parallel to a $12$ V battery. What total power does the battery supply? (in W)

4) The same two resistors are reconnected in series to the same battery. What total power does the battery supply now? (in W)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3', '360', '72', '16'],
        hint1: '$P = I\\Delta V = (0.50)(6.0)$.',
        hint2: '$\\Delta E = P\\Delta t$ with $\\Delta t = 120$ s.',
        hint3: 'Parallel: add $(\\Delta V)^2/R$ for each resistor. Series: $R_{\\text{eq}} = 9\\;\\Omega$, so $P = \\varepsilon^2/R_{\\text{eq}}$.',
        explanation: '$P = 3.0$ W and $\\Delta E = (3.0)(120) = 360$ J. Parallel: $144/3 + 144/6 = 48 + 24 = 72$ W. Series: $144/9 = 16$ W, much less because the equivalent resistance is larger.'
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
            question: 'A $4\\;\\Omega$ bulb and an $8\\;\\Omega$ bulb are first connected in series to a battery, then reconnected in parallel to the same battery. Which bulb is brighter in each arrangement?',
            options: [
              'The $4\\;\\Omega$ bulb in series; the $8\\;\\Omega$ one in parallel',
              'The $8\\;\\Omega$ bulb in series; the $4\\;\\Omega$ bulb in parallel',
              'The $8\\;\\Omega$ bulb in both of the two arrangements',
              'The $4\\;\\Omega$ bulb in both of the two arrangements'
            ],
            correctAnswer: 1,
            explanation: 'In series the current is shared, so $P = I^2R$ favors the larger resistance; in parallel the potential difference is shared, so $P = (\\Delta V)^2/R$ favors the smaller resistance. The same bulb cannot win both, because the shared quantity changes.'
          },
          {
            question: 'An ideal $12$ V battery supplies a steady $2.0$ A to a network of resistors. What is the total power dissipated by all the resistors?',
            options: [
              '6.0 W',
              '14 W',
              '24 W',
              '48 W'
            ],
            correctAnswer: 2,
            explanation: 'Energy conservation: the resistors dissipate all the power the battery supplies, $P = \\varepsilon I = (12)(2.0) = 24$ W. 6.0 W divides instead of multiplying, 14 W adds the numbers, and 48 W squares the current.'
          }
        ]
      }
    }
  ]
}
