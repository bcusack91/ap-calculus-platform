export const physCConsForcePart4Data = {
  topicSlug: "conservative-forces-physics-c",
  sections: [
    {
      id: 'cf4-intro',
      type: 'text' as const,
      content: `# Energy Diagrams and Equilibrium

**Part 4 of 7 — Conservative Forces & Energy**

Energy diagrams are one of the most powerful visual tools in physics. By plotting $U(x)$, we can determine equilibrium positions, stability, turning points, and qualitative motion — all without solving differential equations.

## Reading an Energy Diagram

Given a plot of $U(x)$ and a total mechanical energy $E$:

$$E = K + U = \\frac{1}{2}mv^2 + U(x)$$

Since $K = \\frac{1}{2}mv^2 \\geq 0$:

$$K(x) = E - U(x) \\geq 0$$

$$\\boxed{U(x) \\leq E}$$

### Turning Points

The object can only exist where $U(x) \\leq E$. Points where $U(x) = E$ are **turning points** — the object momentarily stops ($v = 0$) and reverses direction.

### Forbidden Regions

Where $U(x) > E$, the kinetic energy would be negative — this is **classically forbidden**. The object cannot reach these regions.

### Speed at Any Point

$$v(x) = \\sqrt{\\frac{2(E - U(x))}{m}}$$

Maximum speed occurs where $U(x)$ is minimum.`
    },
    {
      id: 'cf4-mcq1',
      type: 'mcq' as const,
      question: 'On an energy diagram, the kinetic energy at position $x$ is represented by:',
      options: [
        'The vertical gap between the $E$ line and the $U(x)$ curve',
        'The slope of the $U(x)$ curve',
        'The value of $U(x)$',
        'The area under the $U(x)$ curve'
      ],
      correctAnswer: 0,
      explanation: '$K = E - U(x)$. On the diagram, this is the vertical distance from the $U(x)$ curve up to the constant $E$ line. Where they meet ($K = 0$), the object has zero speed — a turning point.'
    },
    {
      id: 'cf4-types',
      type: 'text' as const,
      content: `## Types of Equilibrium

At any point where $F = 0$ (equivalently $dU/dx = 0$), we have equilibrium. The type depends on the curvature:

### Stable Equilibrium ($U'' > 0$, local minimum)

If displaced slightly, the force is **restoring** — the object oscillates around the equilibrium.

Think: a ball at the bottom of a bowl.

### Unstable Equilibrium ($U'' < 0$, local maximum)

If displaced slightly, the force pushes the object **away** from equilibrium.

Think: a ball balanced on top of a hill.

### Neutral Equilibrium ($U'' = 0$, flat)

If displaced slightly, there is **no restoring force** — the object stays in its new position.

Think: a ball on a flat table.

### Summary Table

| Type | $U$ shape | $U''$ | If displaced... |
|:---:|:---:|:---:|:---:|
| Stable | Valley/minimum | $> 0$ | Returns (oscillates) |
| Unstable | Hill/maximum | $< 0$ | Runs away |
| Neutral | Flat | $= 0$ | Stays put |`
    },
    {
      id: 'cf4-mcq2',
      type: 'mcq' as const,
      question: 'Consider $U(x) = x^3 - 3x$. The equilibrium points and their stability are:',
      options: [
        '$x = -1$ (stable, local min) and $x = 1$ (unstable, local max)',
        '$x = -1$ (unstable) and $x = 1$ (stable)',
        '$x = 0$ (stable) only',
        '$x = \\pm\\sqrt{3}$ (both stable)'
      ],
      correctAnswer: 0,
      explanation: '$U\'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$. $U\'\'(x) = 6x$. At $x = -1$: $U\'\' = -6 < 0$ — wait, that\'s unstable. At $x = 1$: $U\'\' = 6 > 0$ — stable. Actually: $U(-1) = -1 + 3 = 2$ (local max), $U(1) = 1 - 3 = -2$ (local min). So $x = 1$ is stable and $x = -1$ is unstable.'
    },
    {
      id: 'cf4-bounded',
      type: 'text' as const,
      content: `## Bounded vs Unbounded Motion

By examining where $E$ intersects $U(x)$, we can classify the motion:

### Bounded Motion (Trapped)

If the object is between two turning points with $U > E$ on both sides, the motion is **bounded** — the object oscillates back and forth.

Example: A mass on a spring with $U = \\frac{1}{2}kx^2$. For any $E > 0$, the turning points are at $x = \\pm\\sqrt{2E/k}$.

### Unbounded Motion (Escaping)

If $U(x) < E$ extends to infinity in at least one direction, the object can escape — it never returns.

Example: A particle near $U(r) = -GMm/r$. If $E > 0$, the particle escapes to infinity (hyperbolic orbit). If $E < 0$, the particle is bound.

### Escape Energy

The minimum energy for a particle to escape from a potential well of depth $U_0$ is:

$$E_{\\text{escape}} = 0 \\quad \\text{(if } U(\\infty) = 0\\text{)}$$

This means the particle needs $K \\geq |U|$ to escape.

### Worked Example

For $U(x) = U_0\\left(\\frac{x_0^2}{x^2} - \\frac{2x_0}{x}\\right)$ with total energy $E$:

Setting $U(x) = E$ gives the turning points. The motion is bounded if $E < 0$ (since $U(\\infty) = 0$).

The minimum of $U$ is at $x = x_0$: $U(x_0) = U_0(1 - 2) = -U_0$.

So bounded motion occurs for $-U_0 < E < 0$.`
    },
    {
      id: 'cf4-mcq3',
      type: 'mcq' as const,
      question: 'A particle has total energy $E$ in the potential $U(x) = \\frac{1}{2}kx^2$. The turning points are located at:',
      options: [
        '$x = \\pm\\sqrt{2E/k}$',
        '$x = \\pm E/k$',
        '$x = \\pm\\sqrt{E/k}$',
        '$x = \\pm 2E/k$'
      ],
      correctAnswer: 0,
      explanation: 'Turning points: $U(x) = E$, so $\\frac{1}{2}kx^2 = E$, giving $x = \\pm\\sqrt{2E/k}$. These are the amplitude of the oscillation.'
    },
    {
      id: 'cf4-mcq4',
      type: 'mcq' as const,
      question: 'For the gravitational potential $U(r) = -GMm/r$, a particle with $E = -GMm/(2r_0)$ has its motion:',
      options: [
        'Bounded between $r_{\\min}$ and $r_{\\max}$ (elliptical orbit)',
        'Unbounded (escapes to infinity)',
        'Circular at $r = r_0$',
        'Straight-line fall into center'
      ],
      correctAnswer: 0,
      explanation: 'Since $E < 0$ and $U(\\infty) = 0$, the particle cannot reach infinity. It oscillates between two turning points — for gravity with angular momentum, this gives an elliptical orbit.'
    },
    {
      id: 'cf4-mcq5',
      type: 'mcq' as const,
      question: 'On an energy diagram, the magnitude of the force at a position $x$ is proportional to:',
      options: [
        'The steepness (slope) of the $U(x)$ curve at that point',
        'The value of $U(x)$',
        'The gap between $E$ and $U(x)$',
        'The curvature of the $U(x)$ curve'
      ],
      correctAnswer: 0,
      explanation: '$F = -dU/dx$, so $|F| = |dU/dx|$ — the magnitude of the force is the absolute value of the slope of the potential energy curve. Steep slope = large force; flat = small or zero force.'
    },
    {
      id: 'cf4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Concept | How to Read from $U(x)$ Diagram |
|:---:|:---:|
| Kinetic energy | Gap between $E$ and $U(x)$ |
| Turning points | Where $U(x) = E$ |
| Forbidden regions | Where $U(x) > E$ |
| Max speed | Where $U(x)$ is minimum |
| Force magnitude | Slope of $U(x)$ |
| Force direction | Toward decreasing $U$ |
| Stable equilibrium | Local minimum of $U$ |
| Unstable equilibrium | Local maximum of $U$ |
| Bounded motion | Trapped between two turning points |

> **Next up:** Part 5 — Path Independence and Work, proving path independence rigorously with line integrals.`
    }
  ]
};
