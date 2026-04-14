export const physCConsForcePart1Data = {
  topicSlug: "conservative-forces-physics-c",
  sections: [
    {
      id: 'cf1-intro',
      type: 'text' as const,
      content: `# Conservative vs Non-Conservative Forces

**Part 1 of 7 — Conservative Forces & Energy**

The distinction between conservative and non-conservative forces is one of the most powerful ideas in physics. It determines when we can use energy conservation — a major simplification.

## Definition

A force is **conservative** if and only if:

1. The work done by the force is **independent of the path** taken between two points.
2. Equivalently: the work done around any **closed loop** is zero.
3. Equivalently: the force can be written as the negative gradient of a **potential energy** function.

$$\\vec{F} = -\\nabla U = -\\frac{dU}{dx}\\hat{x} \\quad \\text{(1D)}$$

$$\\oint \\vec{F} \\cdot d\\vec{r} = 0 \\quad \\text{(closed path)}$$

### Examples

| Conservative | Non-Conservative |
|:---:|:---:|
| Gravity ($\\vec{F} = -mg\\hat{y}$) | Kinetic friction ($f_k = \\mu_k N$) |
| Spring force ($F = -kx$) | Air resistance ($f = bv$) |
| Electrostatic ($F = kq_1q_2/r^2$) | Tension (when string does net work) |
| Gravitational ($F = GMm/r^2$) | Applied/push forces (generally) |`
    },
    {
      id: 'cf1-mcq1',
      type: 'mcq' as const,
      question: 'Which property uniquely identifies a conservative force?',
      options: [
        'The work done is path-independent (depends only on endpoints)',
        'The force is always constant',
        'The force always acts toward a fixed point',
        'The force does no work'
      ],
      correctAnswer: 0,
      explanation: 'A conservative force has path-independent work: $W = \\int_A^B \\vec{F}\\cdot d\\vec{r}$ depends only on $A$ and $B$, not the path. This is equivalent to having a potential energy function.'
    },
    {
      id: 'cf1-proof',
      type: 'text' as const,
      content: `## Why Friction Is Non-Conservative

Consider a block sliding from $A$ to $B$ on a rough surface.

**Direct path (length $d_1$):**
$$W_1 = -\\mu_k mg \\cdot d_1$$

**Longer path via point $C$ (total length $d_2 > d_1$):**
$$W_2 = -\\mu_k mg \\cdot d_2$$

Since $d_2 > d_1$: $|W_2| > |W_1|$. The work depends on the path — friction is non-conservative.

**Closed loop test:**
$$\\oint \\vec{f}_k \\cdot d\\vec{r} = -\\mu_k mg \\cdot (\\text{total distance}) \\neq 0$$

Friction always does negative work (opposes motion), so the total around a closed loop is always negative, never zero.

## Why Gravity Is Conservative

For gravity, compare two paths from height $h_A$ to height $h_B$:

$$W_{\\text{grav}} = -mg(h_B - h_A) = -mg\\Delta h$$

This depends **only** on the height difference, not the path. Whether you go straight down, zigzag, or take a winding slope — the work is the same.

### Formal Proof (1D)

$$W = \\int_{y_A}^{y_B} (-mg)\\,dy = -mg(y_B - y_A)$$

This depends only on the endpoints $y_A$ and $y_B$.`
    },
    {
      id: 'cf1-mcq2',
      type: 'mcq' as const,
      question: 'A block slides around a closed loop on a rough surface and returns to its starting point. The work done by friction is:',
      options: [
        'Negative (friction always opposes the displacement)',
        'Zero (closed loop, so displacement is zero)',
        'Positive (friction provides energy)',
        'Cannot be determined'
      ],
      correctAnswer: 0,
      explanation: 'For a closed loop, friction does $W = -f_k \\times (\\text{total distance traveled}) < 0$. The work is negative because friction always opposes the direction of motion at every point. This proves friction is non-conservative.'
    },
    {
      id: 'cf1-energy',
      type: 'text' as const,
      content: `## Work-Energy Theorem with Both Types

The total work equals the change in kinetic energy:

$$W_{\\text{total}} = \\Delta K$$

Splitting into conservative ($W_c$) and non-conservative ($W_{nc}$) work:

$$W_c + W_{nc} = \\Delta K$$

Since $W_c = -\\Delta U$ (definition of potential energy):

$$-\\Delta U + W_{nc} = \\Delta K$$

$$\\boxed{W_{nc} = \\Delta K + \\Delta U = \\Delta E_{\\text{mech}}}$$

### Interpretation

- If only conservative forces act ($W_{nc} = 0$): $\\Delta E_{\\text{mech}} = 0$ — **mechanical energy is conserved**.
- If non-conservative forces do work: mechanical energy changes by exactly $W_{nc}$.
- Friction: $W_{nc} = -f_k d < 0$, so mechanical energy decreases (converted to thermal energy).

### Worked Example

A 5 kg block slides 4 m down a $30°$ rough incline ($\\mu_k = 0.25$), starting from rest.

$$W_{nc} = -\\mu_k mg\\cos\\theta \\cdot d = -0.25(50)(\\cos 30°)(4) = -43.3 \\text{ J}$$

$$\\Delta K + \\Delta U = W_{nc}$$
$$\\frac{1}{2}(5)v^2 + (-5 \\times 10 \\times 4\\sin 30°) = -43.3$$
$$2.5v^2 - 100 = -43.3$$
$$v^2 = 22.7 \\implies v = 4.76 \\text{ m/s}$$`
    },
    {
      id: 'cf1-mcq3',
      type: 'mcq' as const,
      question: 'An applied force pushes a block up a frictionless incline at constant velocity. The work done by the applied force equals:',
      options: [
        '$\\Delta U = mgh$ (since $\\Delta K = 0$, all work becomes potential energy)',
        '$0$ (constant velocity means no work)',
        '$-mgh$ (force opposes gravity)',
        '$\\frac{1}{2}mv^2$ (kinetic energy)'
      ],
      correctAnswer: 0,
      explanation: '$W_{nc} = \\Delta K + \\Delta U = 0 + mgh = mgh$. The applied force is non-conservative, and since the velocity is constant ($\\Delta K = 0$), all the work goes into increasing potential energy.'
    },
    {
      id: 'cf1-mcq4',
      type: 'mcq' as const,
      question: 'For which of these forces can we define a potential energy function?',
      options: [
        'Gravity and spring forces (both are conservative)',
        'Friction and gravity',
        'All forces',
        'Only gravity'
      ],
      correctAnswer: 0,
      explanation: 'Potential energy can be defined only for conservative forces. Both gravity ($U = mgh$) and spring ($U = \\frac{1}{2}kx^2$) are conservative. Friction is non-conservative — no $U$ exists for it.'
    },
    {
      id: 'cf1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Concept | Key Idea |
|:---:|:---:|
| Conservative force | Path-independent work; $\\oint \\vec{F}\\cdot d\\vec{r} = 0$ |
| Non-conservative | Path-dependent; $\\oint \\vec{F}\\cdot d\\vec{r} \\neq 0$ |
| Potential energy | Exists only for conservative forces: $\\vec{F} = -\\nabla U$ |
| Energy theorem | $W_{nc} = \\Delta K + \\Delta U = \\Delta E_{\\text{mech}}$ |

> **Next up:** Part 2 — Potential Energy Functions, deriving $U(x)$ for various forces.`
    }
  ]
};
