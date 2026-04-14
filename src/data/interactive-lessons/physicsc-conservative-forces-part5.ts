export const physCConsForcePart5Data = {
  topicSlug: "conservative-forces-physics-c",
  sections: [
    {
      id: 'cf5-intro',
      type: 'text' as const,
      content: `# Path Independence and Work

**Part 5 of 7 — Conservative Forces & Energy**

Path independence is the defining property of conservative forces. In this part, we prove it rigorously and explore its implications using line integrals.

## Line Integrals and Work

The work done by a force $\\vec{F}$ along a path $C$ from $A$ to $B$:

$$W = \\int_C \\vec{F} \\cdot d\\vec{r} = \\int_C (F_x\\,dx + F_y\\,dy + F_z\\,dz)$$

For a conservative force $\\vec{F} = -\\nabla U$:

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
      question: 'A force $\\vec{F} = (3x^2 y)\\hat{x} + (x^3)\\hat{y}$. A particle moves from $(0,0)$ to $(1,1)$ along the path $y = x$. The work done is:',
      options: [
        '$1$ J (and this is the same along any path from $(0,0)$ to $(1,1)$)',
        '$3/4$ J',
        '$2$ J',
        'Depends on the path chosen'
      ],
      correctAnswer: 0,
      explanation: 'First check if conservative: $\\partial F_x/\\partial y = 3x^2$ and $\\partial F_y/\\partial x = 3x^2$. Equal! So the force is conservative. $U(x,y) = -x^3 y + C$. $W = -(U_f - U_i) = -(-1 - 0) = 1$ J. Path doesn\'t matter.'
    },
    {
      id: 'cf5-curl',
      type: 'text' as const,
      content: `## The Curl Test for Conservative Forces

In 2D, a force $\\vec{F} = F_x(x,y)\\hat{x} + F_y(x,y)\\hat{y}$ is conservative if and only if:

$$\\frac{\\partial F_x}{\\partial y} = \\frac{\\partial F_y}{\\partial x}$$

In 3D, this generalizes to $\\nabla \\times \\vec{F} = \\vec{0}$ (curl is zero).

### Examples

**$\\vec{F} = (2xy)\\hat{x} + (x^2)\\hat{y}$:**
$\\partial F_x/\\partial y = 2x$, $\\partial F_y/\\partial x = 2x$. Equal → **conservative**.

$U(x,y) = -x^2 y + C$

**$\\vec{F} = (y)\\hat{x} + (-x)\\hat{y}$:**
$\\partial F_x/\\partial y = 1$, $\\partial F_y/\\partial x = -1$. Not equal → **non-conservative**.

This force circulates — it does net work around closed loops.

### Finding $U$ from $\\vec{F}$ in 2D

Given conservative $\\vec{F} = F_x\\hat{x} + F_y\\hat{y}$:

1. $U = -\\int F_x\\,dx + g(y)$ (treat $y$ as constant)
2. Take $\\partial U/\\partial y$ and set equal to $-F_y$
3. Solve for $g(y)$

**Example:** $\\vec{F} = (2xy + 3)\\hat{x} + (x^2 - 2y)\\hat{y}$

Step 1: $U = -\\int(2xy+3)dx = -x^2 y - 3x + g(y)$

Step 2: $\\partial U/\\partial y = -x^2 + g'(y) = -F_y = -(x^2 - 2y) = -x^2 + 2y$

Step 3: $g'(y) = 2y \\implies g(y) = y^2$

$$U(x,y) = -x^2 y - 3x + y^2$$`
    },
    {
      id: 'cf5-mcq2',
      type: 'mcq' as const,
      question: 'Which force is non-conservative?',
      options: [
        '$\\vec{F} = y\\hat{x} + 2x\\hat{y}$ ($\\partial F_x/\\partial y \\neq \\partial F_y/\\partial x$)',
        '$\\vec{F} = 2x\\hat{x} + 3y^2\\hat{y}$',
        '$\\vec{F} = y^2\\hat{x} + 2xy\\hat{y}$',
        '$\\vec{F} = (x+y)\\hat{x} + (x+y)\\hat{y}$'
      ],
      correctAnswer: 0,
      explanation: 'Check each: (A) $\\partial(y)/\\partial y = 1$, $\\partial(2x)/\\partial x = 2$. $1 \\neq 2$ — non-conservative. (B) $0 = 0$ ✓. (C) $2y = 2y$ ✓. (D) $1 = 1$ ✓.'
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
        '$20$ J (path independence)',
        'Could be anything — different path means different work',
        '$-20$ J (opposite path)',
        '$0$ J (net displacement is zero along each path)'
      ],
      correctAnswer: 0,
      explanation: 'For a conservative force, the work depends only on the endpoints $A$ and $B$, not the path. Both paths have the same endpoints, so $W_2 = W_1 = 20$ J.'
    },
    {
      id: 'cf5-mcq4',
      type: 'mcq' as const,
      question: 'A particle moves around a closed loop in a force field. The net work done is $-15$ J. This force is:',
      options: [
        'Non-conservative (conservative forces do zero work on closed loops)',
        'Conservative with negative potential energy',
        'Conservative but the particle lost energy',
        'Cannot be determined'
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
| Curl test (2D) | $\\partial F_x/\\partial y = \\partial F_y/\\partial x$ |
| Finding $U$ from $\\vec{F}$ | Integrate $F_x$ w.r.t. $x$, then match $F_y$ |
| Energy conservation | $K + U = \\text{const}$ (when only conservative forces act) |

> **Next up:** Part 6 — Problem-Solving Workshop with AP-style energy and force problems.`
    }
  ]
};
