export const physCConsForcePart5Data = {
  topicSlug: "conservative-forces-physics-c",
  sections: [
    {
      id: 'cf5-intro',
      type: 'text' as const,
      content: `# Path Independence and Work

**Part 5 of 7 — Conservative Forces & Energy**

Path independence is the defining property of conservative forces. In this part, we prove it and explore its implications using the work integral along a path.

## Line Integrals and Work

The work done by a force $\\vec{F}$ along a path $C$ from $A$ to $B$:

$$W = \\int_C \\vec{F} \\cdot d\\vec{r} = \\int_C (F_x\\,dx + F_y\\,dy + F_z\\,dz)$$

For a conservative force, $\\vec{F}\\cdot d\\vec{r} = -dU$ along any small step of the path, so:

$$W = -\\int_C dU = -(U_B - U_A) = U_A - U_B = -\\Delta U$$

This depends only on the values of $U$ at the endpoints — **not the path**.

## Proof: Path Independence ↔ $\\oint \\vec{F} \\cdot d\\vec{r} = 0$

### Forward Direction

Suppose the work is path-independent. Take two paths $C_1$ and $C_2$ from $A$ to $B$:

$$\\int_{C_1} \\vec{F}\\cdot d\\vec{r} = \\int_{C_2} \\vec{F}\\cdot d\\vec{r}$$

Now form a closed loop: go from $A$ to $B$ via $C_1$, then back from $B$ to $A$ via $-C_2$:

$$\\oint \\vec{F}\\cdot d\\vec{r} = \\int_{C_1} \\vec{F}\\cdot d\\vec{r} + \\int_{-C_2} \\vec{F}\\cdot d\\vec{r} = \\int_{C_1} - \\int_{C_2} = 0$$

### Reverse Direction

If $\\oint \\vec{F}\\cdot d\\vec{r} = 0$ for any loop, then for any two paths $C_1$, $C_2$ from $A$ to $B$:

$$\\int_{C_1} \\vec{F}\\cdot d\\vec{r} - \\int_{C_2} \\vec{F}\\cdot d\\vec{r} = \\oint \\vec{F}\\cdot d\\vec{r} = 0$$

So $\\int_{C_1} = \\int_{C_2}$ — path-independent. ∎`
    },
    {
      id: 'cf5-mcq1',
      type: 'mcq' as const,
      question: 'A constant force $\\vec{F} = (3\\hat{x} + 4\\hat{y})$ N acts on a particle as it moves along a curved path from $(0, 0)$ to $(2, 1)$ m. The work done by this force is:',
      options: [
        '$10$ J',
        '$11.2$ J',
        '$7$ J',
        'It depends on the path'
      ],
      correctAnswer: 0,
      explanation: 'For a constant force, $W = \\vec{F}\\cdot\\Delta\\vec{r} = (3)(2) + (4)(1) = 10$ J, whatever the path. Multiplying the magnitudes $|\\vec{F}||\\Delta\\vec{r}| = 5\\sqrt{5} \\approx 11.2$ J ignores the angle between them.'
    },
    {
      id: 'cf5-curl',
      type: 'text' as const,
      content: `## Work by a Constant Force: The Dot Product

For a **constant** force, the work integral reduces to a dot product with the displacement:

$$W = \\vec{F}\\cdot\\Delta\\vec{r} = F_x\\,\\Delta x + F_y\\,\\Delta y = F\\,\\Delta r\\cos\\theta$$

Only the endpoints enter, so every constant force is conservative. Gravity near Earth's surface ($\\vec{F} = -mg\\hat{y}$) is the classic example: $W = -mg\\,\\Delta y$ along any path.

### Contrast: Friction on Two Paths

A box is dragged at constant speed from $A$ to $B$, which are $4.0$ m apart, with a kinetic friction force of $5.0$ N.

| Path | Length | Work by friction |
|:---:|:---:|:---:|
| Straight line | $4.0$ m | $-(5.0)(4.0) = -20$ J |
| Curved detour | $6.0$ m | $-(5.0)(6.0) = -30$ J |

Same endpoints, different work: friction is **non-conservative**, so no potential energy can be defined for it.

### Work from an $F$–$x$ Graph

For a force that varies with position in one dimension, the work is the **area** under the $F_x$ versus $x$ graph (areas below the axis count as negative work). For a spring, the triangle under $F = kx$ from $0$ to $x$ has area $\\tfrac{1}{2}kx^2$, which is the work needed to stretch it, matching $U_{\\text{spring}}$.`
    },
    {
      id: 'cf5-mcq2',
      type: 'mcq' as const,
      question: 'A box is dragged at constant speed between two points 4.0 m apart against a 5.0 N kinetic friction force, once along the straight line and once along a 6.0 m detour. How much more energy does friction dissipate on the detour?',
      options: [
        '$20$ J',
        '$10$ J',
        '$0$ J',
        '$50$ J'
      ],
      correctAnswer: 1,
      explanation: 'Friction does $-(5.0)(4.0) = -20$ J on the straight path and $-(5.0)(6.0) = -30$ J on the detour, so the detour dissipates 10 J more. A conservative force would give 0 J difference.'
    },
    {
      id: 'cf5-applications',
      type: 'text' as const,
      content: `## Applications of Path Independence

### Work Done by Gravity on Any Path

A 5 kg object moves from $(0, 0, 10)$ to $(3, 4, 2)$ along an arbitrary path. Work done by gravity:

$$W = -mg\\Delta y = -5(10)(2 - 10) = 400 \\text{ J}$$

We don't need to know the path! Gravity is conservative, so the work depends only on the height change $\\Delta h = -8$ m.

### Work-Energy with Multiple Conservative Forces

If the system has spring PE and gravitational PE:

$$E = K + U_{\\text{grav}} + U_{\\text{spring}} = \\text{const}$$

$$\\frac{1}{2}mv^2 + mgy + \\frac{1}{2}kx^2 = \\text{const}$$

### Worked Example: Spring + Gravity

A 2 kg block is released from rest at the natural length of a vertical spring ($k = 200$ N/m). How far does it drop?

Let $y$ be the compression (downward positive):

$$\\frac{1}{2}mv_0^2 + mgy_0 + \\frac{1}{2}ky_0^2 = \\frac{1}{2}mv^2 + mgy + \\frac{1}{2}ky^2$$

At max compression ($v = 0$, start and end):

$$0 + 0 + 0 = 0 - mg y_{\\max} + \\frac{1}{2}ky_{\\max}^2$$

$$mg y_{\\max} = \\frac{1}{2}ky_{\\max}^2$$

$$y_{\\max} = \\frac{2mg}{k} = \\frac{2(2)(10)}{200} = 0.2 \\text{ m}$$

Note: this is twice the equilibrium compression ($mg/k = 0.1$ m) — the block overshoots and oscillates.`
    },
    {
      id: 'cf5-mcq3',
      type: 'mcq' as const,
      question: 'A conservative force does $W_1 = 20$ J on a particle as it moves from $A$ to $B$ along path 1. Along path 2 (also from $A$ to $B$, different route), the work done is:',
      options: [
        '$20$ J, by path independence',
        'Unknown, since the paths differ',
        '$-20$ J, since the route is different',
        '$0$ J, since the force is conservative'
      ],
      correctAnswer: 0,
      explanation: 'For a conservative force, the work depends only on the endpoints $A$ and $B$, not the path. Both paths have the same endpoints, so $W_2 = W_1 = 20$ J.'
    },
    {
      id: 'cf5-mcq4',
      type: 'mcq' as const,
      question: 'A particle moves around a closed loop in a force field. The net work done is $-15$ J. This force is:',
      options: [
        'Non-conservative',
        'Conservative, with negative potential energy',
        'Conservative, though the particle lost energy',
        'Impossible to classify from this information'
      ],
      correctAnswer: 0,
      explanation: 'For a conservative force: $\\oint \\vec{F}\\cdot d\\vec{r} = 0$. Since the work is $-15$ J $\\neq 0$, the force must be non-conservative (e.g., friction doing negative work).'
    },
    {
      id: 'cf5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Concept | Key Result |
|:---:|:---:|
| Path independence | $W = U_A - U_B = -\\Delta U$ for conservative forces |
| Closed-loop test | $\\oint \\vec{F}\\cdot d\\vec{r} = 0$ ↔ conservative |
| Constant force | $W = \\vec{F}\\cdot\\Delta\\vec{r}$ (path-independent) |
| Friction | Work grows with path length (non-conservative) |
| $F$–$x$ graph | Work $=$ area under the curve |
| Energy conservation | $K + U = \\text{const}$ (when only conservative forces act) |

> **Next up:** Part 6 — Problem-Solving Workshop with AP-style energy and force problems.`
    }
  ]
};
