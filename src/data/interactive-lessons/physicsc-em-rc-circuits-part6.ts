export const physCEMRCPart6Data = {
  topicSlug: "rc-circuits-physics-c-em",
  sections: [
    {
      id: 'rc6-intro',
      type: 'text' as const,
      content: `# RC Circuits — Part 6: Problem-Solving Workshop

These problems cover the full range of RC circuit analysis expected on the AP Physics C: E&M exam, including differential equations, energy, and multi-component circuits.

### Problem-solving checklist

1. Identify charging or discharging
2. Compute $\\tau = RC$ (or $R_{\\text{Th}}C$ for complex circuits)
3. Write the appropriate equation ($Q$, $I$, or $V$)
4. Apply initial and boundary conditions
5. Integrate if energy/charge questions arise`
    },
    {
      id: 'rc6-mcq1',
      type: 'mcq' as const,
      question: 'A $200$ μF capacitor charges through $R = 5$ kΩ from $\\mathcal{E} = 24$ V. What is the current after $2$ s?',
      options: [
        '$4.8e^{-2} \\approx 0.65$ mA',
        '$4.8$ mA',
        '$2.4$ mA',
        '$0.48$ mA'
      ],
      correctAnswer: 0,
      explanation: '$\\tau = RC = 5000 \\times 200 \\times 10^{-6} = 1$ s. $I_0 = \\mathcal{E}/R = 24/5000 = 4.8$ mA. $I(2) = 4.8e^{-2} \\approx 0.65$ mA.'
    },
    {
      id: 'rc6-problem2',
      type: 'text' as const,
      content: `## Problem 2: Finding $R$ from a discharge curve

A capacitor $C = 10$ μF starts at $V_0 = 50$ V. After $3$ ms, $V = 6.77$ V. Find $R$.

### Solution

$$V = V_0 e^{-t/\\tau}$$

$$6.77 = 50\\,e^{-0.003/\\tau}$$

$$e^{-0.003/\\tau} = 0.1354$$

$$-0.003/\\tau = \\ln(0.1354) = -2.000$$

$$\\tau = 0.003/2 = 0.0015 \\text{ s} = 1.5 \\text{ ms}$$

$$R = \\tau/C = 0.0015/(10 \\times 10^{-6}) = 150\\;\\Omega$$`
    },
    {
      id: 'rc6-mcq2',
      type: 'mcq' as const,
      question: 'In the problem above, how much energy was dissipated in the first $3$ ms?',
      options: [
        '$12.27$ mJ',
        '$12.5$ mJ',
        '$0.23$ mJ',
        '$6.25$ mJ'
      ],
      correctAnswer: 0,
      explanation: '$U_0 = \\frac{1}{2}CV_0^2 = \\frac{1}{2}(10^{-5})(2500) = 12.5$ mJ. $U(3\\text{ms}) = \\frac{1}{2}C(6.77)^2 = \\frac{1}{2}(10^{-5})(45.8) = 0.229$ mJ. Energy dissipated $= 12.5 - 0.23 \\approx 12.27$ mJ.'
    },
    {
      id: 'rc6-problem3',
      type: 'text' as const,
      content: `## Problem 3: Two-resistor RC circuit

A circuit has $\\mathcal{E} = 20$ V, $R_1 = 4$ kΩ (in series), and $R_2 = 6$ kΩ (in parallel with $C = 50$ μF).

### (a) Long-time behavior ($t \\to \\infty$)

When fully charged, $I_C = 0$. All current flows through $R_1$ and $R_2$:

$$I_{\\infty} = \\frac{\\mathcal{E}}{R_1 + R_2} = \\frac{20}{10{,}000} = 2 \\text{ mA}$$

$$V_C = I_{\\infty} R_2 = 2 \\times 6 = 12 \\text{ V}$$

### (b) Time constant

Zero the source, remove $C$: from $C$'s terminals, $R_1$ and $R_2$ are in parallel:

$$R_{\\text{Th}} = R_1 \\| R_2 = \\frac{4 \\times 6}{10} = 2.4 \\text{ kΩ}$$

$$\\tau = R_{\\text{Th}} C = 2400 \\times 50 \\times 10^{-6} = 0.12 \\text{ s}$$

### (c) Capacitor voltage

$$V_C(t) = 12(1 - e^{-t/0.12})$$`
    },
    {
      id: 'rc6-mcq3',
      type: 'mcq' as const,
      question: 'In Problem 3, what is the initial current through $R_1$ (at $t = 0^+$)?',
      options: [
        '$5$ mA',
        '$2$ mA',
        '$3.33$ mA',
        '$20$ mA'
      ],
      correctAnswer: 0,
      explanation: 'At $t = 0^+$, the uncharged capacitor is a short circuit ($V_C = 0$). So $R_2$ is shorted, and all current flows through $R_1$: $I = \\mathcal{E}/R_1 = 20/4000 = 5$ mA.'
    },
    {
      id: 'rc6-problem4',
      type: 'text' as const,
      content: `## Problem 4: Charge transfer between capacitors

$C_1 = 10$ μF is charged to $V_1 = 100$ V. It is then connected to uncharged $C_2 = 40$ μF through $R = 1$ kΩ.

### Differential equation

$$\\frac{Q_1}{C_1} = \\frac{Q_2}{C_2} + I R$$

With charge conservation: $Q_1 + Q_2 = Q_{1,0} = C_1 V_1 = 1$ mC.

Let $Q_2 = q$ (charge transferred). Then $Q_1 = Q_{1,0} - q$:

$$\\frac{Q_{1,0} - q}{C_1} - \\frac{q}{C_2} = R\\frac{dq}{dt}$$

The effective time constant:

$$\\tau = R\\cdot\\frac{C_1 C_2}{C_1 + C_2} = R C_{\\text{series}} = 1000 \\times \\frac{10 \\times 40}{50} \\times 10^{-6} = 8 \\text{ ms}$$

Final voltages: $V_f = Q_{1,0}/(C_1 + C_2) = 10^{-3}/(50 \\times 10^{-6}) = 20$ V on both.`
    },
    {
      id: 'rc6-mcq4',
      type: 'mcq' as const,
      question: 'In Problem 4, how much energy is lost to heat in $R$?',
      options: [
        '$40$ mJ',
        '$10$ mJ',
        '$50$ mJ',
        '$0$ mJ (energy conserved)'
      ],
      correctAnswer: 0,
      explanation: '$U_i = \\frac{1}{2}C_1 V_1^2 = \\frac{1}{2}(10^{-5})(10^4) = 50$ mJ. $U_f = \\frac{1}{2}(C_1+C_2)V_f^2 = \\frac{1}{2}(50\\times10^{-6})(400) = 10$ mJ. Lost $= 50 - 10 = 40$ mJ.'
    },
    {
      id: 'rc6-mcq5',
      type: 'mcq' as const,
      question: 'A capacitor charges to $80\\%$ of $\\mathcal{E}$ in $3.22$ ms. What is $\\tau$?',
      options: [
        '$2$ ms',
        '$4$ ms',
        '$3.22$ ms',
        '$1.61$ ms'
      ],
      correctAnswer: 0,
      explanation: '$0.80 = 1 - e^{-t/\\tau} \\implies e^{-t/\\tau} = 0.20 \\implies t/\\tau = \\ln 5 \\approx 1.609$. $\\tau = 3.22/1.609 \\approx 2.0$ ms.'
    },
    {
      id: 'rc6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

### Key problem types

| Type | Approach |
|:---|:---|
| Basic charging/discharging | $Q(t)$, $I(t)$, $V(t)$ formulas |
| Find $R$ or $C$ from data | Solve $V = V_0 e^{-t/\\tau}$ for $\\tau$, then $R = \\tau/C$ |
| Multi-resistor circuits | Find $R_{\\text{Th}}$, then $\\tau = R_{\\text{Th}}C$ |
| Capacitor-to-capacitor | Use charge conservation + series $C$ time constant |
| Energy problems | Integrate $P_R = I^2R$ or use energy conservation |

> **Exam strategy:** For free-response, always (1) write the differential equation, (2) state the solution, (3) verify initial/final conditions. Partial credit is awarded for each step.`
    }
  ]
};
