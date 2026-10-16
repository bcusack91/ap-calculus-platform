export const physCEMRCPart3Data = {
  topicSlug: "rc-circuits-physics-c-em",
  sections: [
    {
      id: 'rc3-intro',
      type: 'text' as const,
      content: `# RC Circuits — Part 3: Time Constant τ = RC

The time constant $\\tau = RC$ is the single most important parameter of an RC circuit. It sets the timescale for all exponential behavior.

### Physical meaning

$$\\tau = RC$$

| $R$ large | Charges flow slowly → slow charging/discharging |
|:---|:---|
| $C$ large | More charge to move → slow charging/discharging |
| Both large | Very slow response |
| Both small | Very fast response |

### Units verification

$$[\\tau] = [R][C] = \\Omega \\cdot \\text{F} = \\frac{\\text{V}}{\\text{A}} \\cdot \\frac{\\text{C}}{\\text{V}} = \\frac{\\text{C}}{\\text{A}} = \\frac{\\text{C}}{\\text{C/s}} = \\text{s} \\checkmark$$`
    },
    {
      id: 'rc3-mcq1',
      type: 'mcq' as const,
      question: 'What is the time constant for $R = 47$ kΩ and $C = 22$ μF?',
      options: [
        '$1.034$ s',
        '$103.4$ ms',
        '$10.34$ s',
        '$0.1034$ ms'
      ],
      correctAnswer: 0,
      explanation: '$\\tau = RC = (47 \\times 10^3)(22 \\times 10^{-6}) = 1034 \\times 10^{-3} = 1.034$ s.'
    },
    {
      id: 'rc3-meaning',
      type: 'text' as const,
      content: `## What happens at $t = \\tau$?

### During charging ($\\mathcal{E}$ applied):
- $Q(\\tau) = Q_{\\max}(1 - e^{-1}) \\approx 0.632\\,Q_{\\max}$
- Capacitor is $63.2\\%$ charged
- Current has dropped to $36.8\\%$ of $I_0$

### During discharging:
- $Q(\\tau) = Q_0\\,e^{-1} \\approx 0.368\\,Q_0$
- Capacitor retains $36.8\\%$ of its charge
- $63.2\\%$ of the charge has flowed out

### Slope interpretation

At $t = 0$ during discharge, the tangent line to $Q(t)$ has slope:

$$\\left.\\frac{dQ}{dt}\\right|_{t=0} = -\\frac{Q_0}{\\tau}$$

This tangent line would reach $Q = 0$ at $t = \\tau$. In other words, **if the initial rate of discharge continued unchanged, the capacitor would fully discharge in time $\\tau$**.`
    },
    {
      id: 'rc3-mcq2',
      type: 'mcq' as const,
      question: 'The tangent to the $Q(t)$ curve at $t = 0$ during discharge intersects the time axis at:',
      options: [
        '$t = \\tau$',
        '$t = \\tau \\ln 2$',
        '$t = 2\\tau$',
        '$t = \\infty$'
      ],
      correctAnswer: 0,
      explanation: 'The tangent at $t = 0$ has equation $Q_{\\text{tangent}} = Q_0 - (Q_0/\\tau)t$. Setting $Q = 0$: $t = \\tau$.'
    },
    {
      id: 'rc3-design',
      type: 'text' as const,
      content: `## Designing with time constants

### Example: Delay circuit

Want a $2$ s delay before a voltage reaches $70\\%$ of $\\mathcal{E}$:

$$0.70 = 1 - e^{-2/\\tau} \\implies e^{-2/\\tau} = 0.30 \\implies \\tau = \\frac{2}{\\ln(1/0.30)} = \\frac{2}{1.204} \\approx 1.66 \\text{ s}$$

Choose $R$ and $C$ such that $RC = 1.66$ s. For example: $R = 166$ kΩ, $C = 10$ μF.

### Multiple RC stages

For a circuit with several resistors and one capacitor, use the **equivalent resistance seen by the capacitor**:

$$\\tau = R_{\\text{eq}} \\cdot C$$

where $R_{\\text{eq}}$ is the resistance between the capacitor's terminals with the ideal battery replaced by a wire and $C$ removed.`
    },
    {
      id: 'rc3-mcq3',
      type: 'mcq' as const,
      question: 'A circuit has $R_1 = 10$ kΩ in series with a parallel combination of $R_2 = 20$ kΩ and $C = 5$ μF. What is $\\tau$?',
      options: [
        '$0.033$ s',
        '$0.1$ s',
        '$0.15$ s',
        '$0.05$ s'
      ],
      correctAnswer: 0,
      explanation: 'Replace the battery with a wire and remove $C$: $R_1$ then connects the top of $C$ to the bottom, so $R_1$ and $R_2$ are in parallel across $C$. $R_{\\text{eq}} = (10)(20)/30 \\approx 6.67$ kΩ, and $\\tau = (6.67 \\times 10^3)(5 \\times 10^{-6}) \\approx 0.033$ s.'
    },
    {
      id: 'rc3-mcq4',
      type: 'mcq' as const,
      question: 'Doubling both $R$ and $C$ in an RC circuit changes $\\tau$ by a factor of:',
      options: [
        '$4$',
        '$2$',
        '$1$ (no change)',
        '$\\sqrt{2}$'
      ],
      correctAnswer: 0,
      explanation: '$\\tau = RC$. Doubling both: $\\tau\' = (2R)(2C) = 4RC = 4\\tau$.'
    },
    {
      id: 'rc3-mcq5',
      type: 'mcq' as const,
      question: 'An RC circuit with $\\tau = 0.5$ ms needs to reach $90\\%$ of $\\mathcal{E}$. How long does it take?',
      options: [
        '$\\approx 1.15$ ms',
        '$\\approx 0.5$ ms',
        '$\\approx 2.5$ ms',
        '$\\approx 0.35$ ms'
      ],
      correctAnswer: 0,
      explanation: '$0.9 = 1 - e^{-t/\\tau} \\implies e^{-t/\\tau} = 0.1 \\implies t = \\tau\\ln 10 = 0.5 \\times 2.303 \\approx 1.15$ ms.'
    },
    {
      id: 'rc3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Property | Value |
|:---|:---:|
| Time constant | $\\tau = RC$ |
| Units | seconds |
| At $t = \\tau$ (charging) | $63.2\\%$ charged |
| At $t = \\tau$ (discharging) | $36.8\\%$ remaining |
| Time to reach fraction $f$ | $t = -\\tau\\ln(1-f)$ (charging) |
| Half-life | $t_{1/2} = \\tau\\ln 2 \\approx 0.693\\tau$ |
| Several resistors | $\\tau = R_{\\text{eq}} C$ (resistance seen by $C$) |

> **Key insight:** $\\tau = RC$ controls everything. On the AP exam, if they give you $R$ and $C$, compute $\\tau$ immediately — it's almost certainly needed.`
    }
  ]
};
