export const physics2KirchhoffPart6Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl6-intro',
      type: 'text' as const,
      content: `
# 🔌 RC Circuits Basics

**Part 6 of 7 — Charging, Discharging, and the Time Constant**

So far we've analyzed circuits in **steady state** (DC). But what happens when you flip a switch and a capacitor begins charging or discharging? The currents and voltages change with time — and Kirchhoff's laws still apply at every instant!
      `
    },
    {
      id: 'kl6-charging',
      type: 'text' as const,
      content: `
## Charging a Capacitor

A battery ($\\varepsilon$), resistor ($R$), and initially uncharged capacitor ($C$) are connected in series. At $t = 0$ the switch closes.

### Applying KVL at Any Instant

$$\\varepsilon - V_R - V_C = 0$$
$$\\varepsilon - IR - \\frac{q}{C} = 0$$

Since $I = \\frac{dq}{dt}$, this becomes a differential equation whose solution is:

### Charge on the Capacitor
$$q(t) = C\\varepsilon\\left(1 - e^{-t/RC}\\right)$$

### Voltage Across the Capacitor
$$V_C(t) = \\varepsilon\\left(1 - e^{-t/RC}\\right)$$

### Current in the Circuit
$$I(t) = \\frac{\\varepsilon}{R}\\,e^{-t/RC}$$

### Key Behaviors

| Time | $V_C$ | $I$ |
|------|-------|-----|
| $t = 0$ | $0$ | $\\varepsilon / R$ (maximum) |
| $t = \\tau$ | $0.632\\,\\varepsilon$ | $0.368\\,\\varepsilon/R$ |
| $t \\to \\infty$ | $\\varepsilon$ (fully charged) | $0$ (no current) |
      `
    },
    {
      id: 'kl6-time-constant',
      type: 'text' as const,
      content: `
## The Time Constant $\\tau = RC$

The **time constant** sets the timescale for charging and discharging:

$$\\tau = RC$$

- Units: $\\Omega \\cdot \\text{F} = \\text{seconds}$
- After $1\\tau$: capacitor is 63.2% charged
- After $2\\tau$: 86.5% charged
- After $3\\tau$: 95.0% charged
- After $5\\tau$: 99.3% charged (effectively "fully charged")

### Physical Interpretation

- **Large $R$**: Current is small → charging is slow → large $\\tau$
- **Large $C$**: More charge to store → takes longer → large $\\tau$
- **Small $RC$**: Fast charging/discharging

### Example

$R = 10\\;\\text{k}\\Omega = 10{,}000\\;\\Omega$, $C = 50\\;\\mu\\text{F} = 50 \\times 10^{-6}\\;\\text{F}$

$$\\tau = RC = (10{,}000)(50 \\times 10^{-6}) = 0.5 \\text{ s}$$

The capacitor is effectively fully charged after about $5\\tau = 2.5$ s.
      `
    },
    {
      id: 'kl6-discharging',
      type: 'text' as const,
      content: `
## Discharging a Capacitor

A capacitor initially charged to voltage $V_0$ discharges through a resistor $R$ (no battery in the loop).

### KVL for Discharging

$$V_C - IR = 0 \\quad \\text{(capacitor acts as the source)}$$

### Solutions

$$V_C(t) = V_0\\,e^{-t/RC}$$

$$I(t) = \\frac{V_0}{R}\\,e^{-t/RC}$$

$$q(t) = CV_0\\,e^{-t/RC}$$

### Key Behaviors

| Time | $V_C$ | $I$ |
|------|-------|-----|
| $t = 0$ | $V_0$ | $V_0 / R$ (maximum) |
| $t = \\tau$ | $0.368\\,V_0$ | $0.368\\,V_0/R$ |
| $t \\to \\infty$ | $0$ | $0$ |

### Charging vs. Discharging Summary

| | Charging | Discharging |
|--|---------|-------------|
| $V_C$ | $\\varepsilon(1 - e^{-t/RC})$ | $V_0\\,e^{-t/RC}$ |
| $I$ | $\\frac{\\varepsilon}{R}e^{-t/RC}$ | $\\frac{V_0}{R}e^{-t/RC}$ |
| $V_C$ at $t=0$ | $0$ | $V_0$ |
| $V_C$ at $t \\to \\infty$ | $\\varepsilon$ | $0$ |

> 💡 Both processes have current that starts at a maximum and **decays exponentially** with the same time constant $\\tau = RC$.
      `
    },
    {
      id: 'kl6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**RC Circuit Concept Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A capacitor is being charged through a resistor. At $t = 0$, the capacitor behaves like:',
            options: [
              'An open circuit (no current flows)',
              'A short circuit (wire — maximum current flows)',
              'A battery',
              'A resistor'
            ],
            correctAnswer: 1,
            explanation: 'At $t = 0$, an uncharged capacitor has $V_C = 0$, so all the battery voltage drops across the resistor: $I_0 = \\varepsilon/R$ (maximum). The capacitor acts like a short circuit (wire) at $t = 0$.'
          },
          {
            question: 'After a very long time ($t \\to \\infty$), a charging capacitor behaves like:',
            options: [
              'A short circuit',
              'A resistor equal to $R$',
              'An open circuit (no current flows)',
              'A battery with EMF = $\\varepsilon/2$'
            ],
            correctAnswer: 2,
            explanation: 'When fully charged, $V_C = \\varepsilon$ and $I = 0$. No current flows through the capacitor — it acts like an open circuit (a break in the wire).'
          },
          {
            question: 'If $R = 5\\;\\text{k}\\Omega$ and $C = 200\\;\\mu\\text{F}$, the time constant is:',
            options: [
              '0.1 s',
              '1 s',
              '10 s',
              '0.001 s'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = RC = (5000)(200 \\times 10^{-6}) = (5000)(0.0002) = 1$ s.'
          }
        ]
      }
    },
    {
      id: 'kl6-drill',
      type: 'input-boxes' as const,
      content: `
**RC Circuit Calculations**

A $20\\;\\text{V}$ battery charges a capacitor ($C = 100\\;\\mu\\text{F}$) through a resistor ($R = 50\\;\\text{k}\\Omega$).

1) Time constant $\\tau$ (in seconds):
2) Initial current $I_0$ at $t = 0$ (in mA):
3) Voltage across the capacitor after one time constant, $V_C(\\tau)$ (in V, to one decimal place):
4) After a long time, the capacitor is disconnected and discharged through a $25\\;\\text{k}\\Omega$ resistor. New time constant (in seconds):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['5', '0.4', '12.6', '2.5', '0.40', '12.60', '2.50'],
        hint1: '$\\tau = RC = (50{,}000)(100 \\times 10^{-6}) = 5$ s.',
        hint2: '$I_0 = \\varepsilon / R = 20 / 50{,}000 = 0.0004$ A $= 0.4$ mA.',
        hint3: '$V_C(\\tau) = \\varepsilon(1 - e^{-1}) = 20(1 - 0.368) = 20(0.632) = 12.6$ V.',
        explanation: '$\\tau = 5$ s. $I_0 = 0.4$ mA. $V_C(\\tau) = 20 \\times 0.632 = 12.6$ V. New $\\tau = (25{,}000)(100 \\times 10^{-6}) = 2.5$ s.'
      }
    },
    {
      id: 'kl6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'During discharge, after how many time constants is the capacitor approximately 95% discharged?',
            options: [
              '1',
              '2',
              '3',
              '5'
            ],
            correctAnswer: 2,
            explanation: 'After $3\\tau$: $V_C = V_0 e^{-3} = V_0(0.050) = 5\\%$ of $V_0$. So 95% of the charge has been released.'
          },
          {
            question: 'Doubling both $R$ and $C$ in an RC circuit changes the time constant by a factor of:',
            options: [
              '2',
              '4',
              '1 (no change)',
              '$\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = RC$. If both $R$ and $C$ double: $\\tau_{\\text{new}} = (2R)(2C) = 4RC = 4\\tau$. The time constant quadruples.'
          }
        ]
      }
    }
  ]
}
