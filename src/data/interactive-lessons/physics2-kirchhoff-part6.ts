export const physics2KirchhoffPart6Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl6-intro',
      type: 'text' as const,
      content: `
# 🔌 RC Circuits Basics

**Part 6 of 7 — Charging, Discharging, and the Time Constant**

So far every current has been steady. When a circuit contains a capacitor, flipping a switch starts a period of change: the capacitor charges or discharges, and the currents and potential differences shift until they settle into a new steady state. Kirchhoff's laws still apply at every instant, and AP Physics 2 asks you to describe the start, the end, and the shape of the change in between.
      `
    },
    {
      id: 'kl6-charging',
      type: 'text' as const,
      content: `
## Charging a Capacitor

A battery ($\\varepsilon$), resistor ($R$), and initially uncharged capacitor ($C$) are connected in series. The switch closes.

### The Loop Rule at Any Instant

$$\\varepsilon - IR - \\frac{q}{C} = 0$$

This one equation explains the whole process:

- **Immediately after closing**: $q = 0$, so the capacitor has no potential difference and acts like a **wire**. All of $\\varepsilon$ is across $R$, and the current is at its maximum, $I_0 = \\frac{\\varepsilon}{R}$.
- **While charging**: as $q$ builds, $V_C = q/C$ grows, leaving less potential difference for $R$, so the current **decreases**. A smaller current means charge arrives more slowly, so the changes get gradually slower.
- **After a long time**: the capacitor is fully charged with $V_C = \\varepsilon$ and $Q = C\\varepsilon$. The current is zero, so the capacitor acts like an **open switch** (a break in the wire).

### Summary

| | $V_C$ | $I$ | Energy stored |
|--|-------|-----|---------------|
| Just after closing | $0$ | $\\varepsilon/R$ (maximum) | $0$ |
| During charging | Increasing | Decreasing | Increasing |
| After a long time | $\\varepsilon$ | $0$ | $\\tfrac{1}{2}C\\varepsilon^2$ |

### Graph Shapes
- **$V_C$ (and $q$) versus time**: starts at zero, rises steeply at first, then levels off toward its final value.
- **$I$ versus time**: starts at its maximum and curves down toward zero, steeply at first and then more gradually.
      `
    },
    {
      id: 'kl6-time-constant',
      type: 'text' as const,
      content: `
## The Time Constant $\\tau = RC$

The **time constant** measures how quickly a capacitor charges or discharges:

$$\\tau = RC$$

- Units: $\\Omega \\cdot \\text{F} = \\text{seconds}$
- **Charging**: in one time constant, the charge rises from zero to about **63%** of its final value.
- **Discharging**: in one time constant, the charge falls to about **37%** of its initial value.

### Physical Interpretation

- **Large $R$**: current is small, so charging is slow and $\\tau$ is large
- **Large $C$**: more charge must be moved, so it takes longer and $\\tau$ is large
- **Small $RC$**: fast charging and discharging

### Example

$R = 10\\;\\text{k}\\Omega = 10\\,000\\;\\Omega$, $C = 50\\;\\mu\\text{F} = 50 \\times 10^{-6}\\;\\text{F}$

$$\\tau = RC = (10\\,000)(50 \\times 10^{-6}) = 0.5 \\text{ s}$$

After $0.5$ s of charging, the capacitor holds about 63% of its final charge. After a time much longer than $0.5$ s, you can treat it as fully charged and use steady-state reasoning.
      `
    },
    {
      id: 'kl6-discharging',
      type: 'text' as const,
      content: `
## Discharging a Capacitor

A capacitor charged to potential difference $V_0$ is connected across a resistor $R$, with no battery in the loop.

### The Loop Rule

$$V_C - IR = 0 \\quad \\text{(the capacitor acts as the source)}$$

- **Immediately after connecting**: $V_C = V_0$, so the current is at its maximum, $I_0 = V_0/R$.
- **While discharging**: charge leaves the plates, so $V_C$ drops, the current drops with it, and the stored energy decreases (it is converted to thermal energy in the resistor).
- **After a long time**: $q = 0$, $V_C = 0$, and $I = 0$.

### Charging vs. Discharging

| | Charging | Discharging |
|--|---------|-------------|
| $V_C$ at the start | $0$ | $V_0$ |
| $V_C$ after a long time | $\\varepsilon$ | $0$ |
| Current at the start | $\\varepsilon/R$ (maximum) | $V_0/R$ (maximum) |
| Current after a long time | $0$ | $0$ |
| After one $\\tau$ | about 63% of final charge | about 37% of initial charge |

> 💡 In both processes the current starts at its maximum and fades toward zero, and both are governed by the same time constant $\\tau = RC$.
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
            question: 'An uncharged capacitor is being charged through a resistor. Immediately after the switch closes, the capacitor behaves like:',
            options: [
              'An open circuit (no current flows)',
              'A short circuit (maximum current flows)',
              'A battery opposing the source',
              'A resistor equal to $R$'
            ],
            correctAnswer: 1,
            explanation: 'An uncharged capacitor has $V_C = 0$, so all the battery voltage drops across the resistor and $I_0 = \\varepsilon/R$ is the maximum current. The capacitor acts like a wire at that instant.'
          },
          {
            question: 'After a very long time, a charging capacitor behaves like:',
            options: [
              'A short circuit (maximum current)',
              'A resistor equal to $R$',
              'An open circuit (no current flows)',
              'A source driving current backward'
            ],
            correctAnswer: 2,
            explanation: 'When fully charged, $V_C = \\varepsilon$ and $I = 0$. No current flows through the capacitor, so it acts like an open circuit (a break in the wire). Its voltage balances the battery, so it does not drive any current backward either.'
          },
          {
            question: 'If $R = 5\\;\\text{k}\\Omega$ and $C = 200\\;\\mu\\text{F}$, the time constant is:',
            options: [
              '1000 s',
              '1 s',
              '$4 \\times 10^{-8}$ s',
              '0.001 s'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = RC = (5000)(200 \\times 10^{-6}) = (5000)(0.0002) = 1$ s. 0.001 s drops the kilo prefix, 1000 s reads μF as millifarads, and $4 \\times 10^{-8}$ s divides $C$ by $R$.'
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

2) Initial current $I_0$ just after the switch closes (in mA):

3) Potential difference across the capacitor after one time constant, using the 63% rule (in V, to one decimal place):

4) After a long time, the capacitor is disconnected and discharged through a $25\\;\\text{k}\\Omega$ resistor. New time constant (in seconds):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['5', '0.4', '12.6', '2.5'],
        hint1: '$\\tau = RC = (50\\,000)(100 \\times 10^{-6})$.',
        hint2: '$I_0 = \\varepsilon / R = 20 / 50\\,000$ A; convert to mA.',
        hint3: 'After one $\\tau$, $V_C$ is about 63% of its final value: $0.632 \\times 20$.',
        explanation: '$\\tau = 5$ s. $I_0 = 0.0004$ A $= 0.4$ mA. $V_C \\approx 0.632 \\times 20 = 12.6$ V. New $\\tau = (25\\,000)(100 \\times 10^{-6}) = 2.5$ s.'
      }
    },
    {
      id: 'kl6-multibranch',
      type: 'text' as const,
      content: `
## Initial and Final States in Multi-Branch Circuits

AP questions often place a capacitor in one branch of a larger circuit. Use two snapshots:

- **Initial (uncharged capacitor)**: replace the capacitor with a wire.
- **Final (steady state)**: replace the capacitor with a break; its branch carries no current, and its potential difference equals that of whatever it is in parallel with.

### Worked Example

A $12$ V battery is in series with $R_1 = 2\\;\\Omega$. The current then splits between $R_2 = 4\\;\\Omega$ and a branch containing $R_3 = 2\\;\\Omega$ in series with an uncharged capacitor $C$.

**Just after the switch closes** (capacitor = wire):
- Capacitor branch is just $R_3 = 2\\;\\Omega$; in parallel with $4\\;\\Omega$: $\\frac{(4)(2)}{4 + 2} = \\frac{4}{3}\\;\\Omega$
- $R_{\\text{eq}} = 2 + \\frac{4}{3} = \\frac{10}{3}\\;\\Omega$, so $I_1 = 12 \\div \\frac{10}{3} = 3.6$ A
- Parallel potential difference: $12 - (3.6)(2) = 4.8$ V, so $I_{R_2} = 1.2$ A and $I_{C\\text{ branch}} = 2.4$ A

**After a long time** (capacitor = break):
- Only $R_1$ and $R_2$ carry current: $I = \\frac{12}{2 + 4} = 2$ A
- $V_{R_2} = (2)(4) = 8$ V
- No current in $R_3$ means no drop across it, so $V_C = 8$ V and $Q = C(8\\text{ V})$

Notice the battery current **decreases** from 3.6 A to 2 A as the capacitor charges, because the capacitor branch gradually stops carrying current.
      `
    },
    {
      id: 'kl6-multi-drill',
      type: 'input-boxes' as const,
      content: `
**Initial and Final Drill**

An $18$ V battery is in series with $R_1 = 3\\;\\Omega$. The current then splits between $R_2 = 6\\;\\Omega$ and a branch with $R_3 = 6\\;\\Omega$ in series with an initially uncharged $50\\;\\mu\\text{F}$ capacitor.

1) Battery current just after the switch closes (in A):

2) Current in the capacitor branch just after the switch closes (in A):

3) Potential difference across the capacitor after a long time (in V):

4) Charge on the capacitor after a long time (in μC):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3', '1.5', '12', '600'],
        hint1: 'Initially the capacitor is a wire: $6\\;\\Omega \\parallel 6\\;\\Omega = 3\\;\\Omega$, plus $R_1$ gives $6\\;\\Omega$.',
        hint2: 'Two equal parallel branches split the current equally. After a long time, only $R_1$ and $R_2$ carry current: $I = 18/9$.',
        hint3: '$V_C = V_{R_2} = (2)(6)$, and $Q = CV_C = (50\\;\\mu\\text{F})(12\\text{ V})$.',
        explanation: 'Initially $R_{\\text{eq}} = 3 + 3 = 6\\;\\Omega$, so $I_1 = 3$ A, split equally to give $1.5$ A in the capacitor branch. Finally $I = 18/9 = 2$ A, $V_C = V_{R_2} = 12$ V, and $Q = (50)(12) = 600\\;\\mu\\text{C}$.'
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
            question: 'A capacitor holding $50\\;\\mu\\text{C}$ begins discharging through a resistor, and the time constant is $2$ s. About how much charge remains after $2$ s?',
            options: [
              '$31.6\\;\\mu\\text{C}$',
              '$25.0\\;\\mu\\text{C}$',
              '$18.4\\;\\mu\\text{C}$',
              '$0\\;\\mu\\text{C}$'
            ],
            correctAnswer: 2,
            explanation: 'After one time constant, a discharging capacitor keeps about 37% of its charge: $0.368 \\times 50 \\approx 18.4\\;\\mu\\text{C}$. 31.6 μC is the 63% charging figure, 25.0 μC assumes half is gone, and zero charge is reached only after a long time.'
          },
          {
            question: 'Doubling both $R$ and $C$ in an RC circuit changes the time constant by a factor of:',
            options: [
              '2',
              '4',
              '1 (no change)',
              '1/4'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = RC$. If both $R$ and $C$ double: $\\tau_{\\text{new}} = (2R)(2C) = 4RC = 4\\tau$. A factor of 2 doubles only one of them, and 1/4 treats $\\tau$ as $1/(RC)$.'
          },
          {
            question: 'Which describes the current in the resistor of a charging RC circuit as time passes?',
            options: [
              'It starts at zero and increases toward a maximum',
              'It stays constant until the capacitor is full',
              'It decreases at a steady rate down to zero',
              'It starts at its maximum and decreases toward zero'
            ],
            correctAnswer: 3,
            explanation: 'The current is largest when the uncharged capacitor acts like a wire, then shrinks as the growing $V_C$ leaves less potential difference across the resistor. The decrease is steep at first and then gradual, not a constant rate, and starting from zero describes $V_C$ rather than the current.'
          }
        ]
      }
    }
  ]
}
