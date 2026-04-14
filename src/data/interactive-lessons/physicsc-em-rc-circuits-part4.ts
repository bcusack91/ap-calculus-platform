export const physCEMRCPart4Data = {
  topicSlug: "rc-circuits-physics-c-em",
  sections: [
    {
      id: 'rc4-intro',
      type: 'text' as const,
      content: `# RC Circuits — Part 4: Current and Voltage Graphs

Understanding the shapes of RC circuit graphs is essential for the AP exam. Every graph is built from two patterns: exponential growth ($1 - e^{-t/\\tau}$) and exponential decay ($e^{-t/\\tau}$).

### The two fundamental shapes

**Exponential decay** $f(t) = A\\,e^{-t/\\tau}$:
- Starts at $A$, decreases toward $0$
- Steepest at $t = 0$
- Concave up (curves upward)

**Exponential growth** $f(t) = A(1 - e^{-t/\\tau})$:
- Starts at $0$, increases toward $A$
- Steepest at $t = 0$
- Concave down (curves downward)`
    },
    {
      id: 'rc4-mcq1',
      type: 'mcq' as const,
      question: 'During **charging**, the capacitor voltage $V_C(t)$ graph is:',
      options: [
        'Starts at $0$, rises with decreasing slope toward $\\mathcal{E}$ (concave down)',
        'Starts at $\\mathcal{E}$, falls exponentially toward $0$ (concave up)',
        'Linear increase from $0$ to $\\mathcal{E}$',
        'Starts at $\\mathcal{E}/2$ and remains constant'
      ],
      correctAnswer: 0,
      explanation: '$V_C = \\mathcal{E}(1 - e^{-t/\\tau})$: starts at $0$, asymptotes to $\\mathcal{E}$, concave down (slope $= (\\mathcal{E}/\\tau)e^{-t/\\tau}$ is decreasing).'
    },
    {
      id: 'rc4-charging-graphs',
      type: 'text' as const,
      content: `## Charging graphs

### Capacitor voltage $V_C$

$$V_C(t) = \\mathcal{E}(1 - e^{-t/\\tau})$$

- Shape: **exponential growth** (concave down)
- $V_C(0) = 0$, $V_C(\\infty) = \\mathcal{E}$
- Slope at $t = 0$: $dV_C/dt|_0 = \\mathcal{E}/\\tau$

### Current $I$

$$I(t) = \\frac{\\mathcal{E}}{R}e^{-t/\\tau}$$

- Shape: **exponential decay** (concave up)
- $I(0) = \\mathcal{E}/R$, $I(\\infty) = 0$

### Resistor voltage $V_R$

$$V_R(t) = \\mathcal{E}\\,e^{-t/\\tau}$$

- Same shape as current (exponential decay)
- $V_R = IR$, so $V_R$ is proportional to $I$

### Check: $V_R + V_C = \\mathcal{E}$ at all times

At any instant, $V_R$ and $V_C$ are **complementary**: they add up to $\\mathcal{E}$. If you flip the $V_C$ graph upside down and shift it, you get $V_R$.`
    },
    {
      id: 'rc4-mcq2',
      type: 'mcq' as const,
      question: 'At $t = \\tau$ during charging, $V_R$ equals:',
      options: [
        '$\\mathcal{E}/e \\approx 0.368\\mathcal{E}$',
        '$\\mathcal{E}(1-1/e) \\approx 0.632\\mathcal{E}$',
        '$\\mathcal{E}/2$',
        '$\\mathcal{E}$'
      ],
      correctAnswer: 0,
      explanation: '$V_R(\\tau) = \\mathcal{E}\\,e^{-1} \\approx 0.368\\mathcal{E}$. Meanwhile $V_C(\\tau) \\approx 0.632\\mathcal{E}$, and $V_R + V_C = \\mathcal{E}$ ✓.'
    },
    {
      id: 'rc4-discharge-graphs',
      type: 'text' as const,
      content: `## Discharging graphs

All quantities decay exponentially:

$$Q(t) = Q_0\\,e^{-t/\\tau}, \\quad V_C(t) = V_0\\,e^{-t/\\tau}, \\quad I(t) = I_0\\,e^{-t/\\tau}$$

All three have the same shape: **exponential decay** (concave up), starting at their maximum values and approaching zero.

### Time to reach a specific value

To find when $V_C$ reaches a target $V_{\\text{target}}$:

$$V_{\\text{target}} = V_0\\,e^{-t/\\tau}$$

$$t = -\\tau\\ln\\left(\\frac{V_{\\text{target}}}{V_0}\\right) = \\tau\\ln\\left(\\frac{V_0}{V_{\\text{target}}}\\right)$$

### Slope at $t = 0$ (discharge)

$$\\left.\\frac{dV_C}{dt}\\right|_{t=0} = -\\frac{V_0}{\\tau}$$

The initial slope is steepest and equals $-V_0/\\tau$. A tangent line at $t = 0$ crosses zero at $t = \\tau$.`
    },
    {
      id: 'rc4-mcq3',
      type: 'mcq' as const,
      question: 'A discharging RC circuit has $\\tau = 2$ s and $V_0 = 10$ V. What is the slope of $V_C(t)$ at $t = 0$?',
      options: [
        '$-5$ V/s',
        '$-10$ V/s',
        '$-2.5$ V/s',
        '$-20$ V/s'
      ],
      correctAnswer: 0,
      explanation: '$dV_C/dt|_0 = -V_0/\\tau = -10/2 = -5$ V/s.'
    },
    {
      id: 'rc4-switching',
      type: 'text' as const,
      content: `## Switched RC circuits

A common AP problem: a capacitor charges for a while, then the switch redirects to discharge through a different resistor.

### Example

Charge through $R_1 = 10$ kΩ with $\\mathcal{E} = 20$ V, $C = 50$ μF for $t_1 = 1$ s.

$\\tau_1 = R_1 C = 0.5$ s. After $t_1/\\tau_1 = 2$ time constants:

$$V_C = 20(1 - e^{-2}) \\approx 20(0.865) = 17.3 \\text{ V}$$

Then discharge through $R_2 = 20$ kΩ. New time constant: $\\tau_2 = R_2 C = 1.0$ s.

$$V_C(t) = 17.3\\,e^{-t/1.0}$$

The graph shows a kink at the switching time — the voltage is continuous but the slope changes because $\\tau$ changes.`
    },
    {
      id: 'rc4-mcq4',
      type: 'mcq' as const,
      question: 'When a charging RC circuit is suddenly switched to discharge through a larger resistor, $V_C$ at the switching instant:',
      options: [
        'Is continuous (same value) but the rate of change decreases in magnitude',
        'Jumps discontinuously',
        'Is continuous and the rate of change stays the same',
        'Drops to zero immediately'
      ],
      correctAnswer: 0,
      explanation: 'Voltage across a capacitor cannot change instantaneously (that would require infinite current). The voltage is continuous. But $dV/dt = -V/(R_2 C)$ with larger $R_2$ means the decay is slower — smaller $|dV/dt|$.'
    },
    {
      id: 'rc4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Graph | Charging | Discharging |
|:---|:---:|:---:|
| $V_C$ | Growth: $\\mathcal{E}(1-e^{-t/\\tau})$ ↗ | Decay: $V_0 e^{-t/\\tau}$ ↘ |
| $I$ | Decay: $(\\mathcal{E}/R)e^{-t/\\tau}$ ↘ | Decay: $(V_0/R)e^{-t/\\tau}$ ↘ |
| $V_R$ | Decay: $\\mathcal{E}\\,e^{-t/\\tau}$ ↘ | Decay: $V_0 e^{-t/\\tau}$ ↘ |
| Shape (decay) | Concave up | Concave up |
| Shape (growth) | Concave down | — |

> **Exam tip:** You'll often be asked to sketch or identify these graphs. Remember: the current **always** decays exponentially in RC circuits. Only $V_C$ during charging shows exponential growth.`
    }
  ]
};
