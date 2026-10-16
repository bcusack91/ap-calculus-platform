export const physCConsForcePart3Data = {
  topicSlug: "conservative-forces-physics-c",
  sections: [
    {
      id: 'cf3-intro',
      type: 'text' as const,
      content: `# $F = -dU/dx$

**Part 3 of 7 — Conservative Forces & Energy**

The relationship $F = -dU/dx$ is arguably the most important equation in AP Physics C energy problems. It connects the force to the slope of the potential energy function.

## Graphical Interpretation

Given a graph of $U(x)$:

| Feature of $U(x)$ | Meaning for $F$ |
|:---:|:---:|
| $U$ decreasing (negative slope) | $F > 0$ (force in $+x$) |
| $U$ increasing (positive slope) | $F < 0$ (force in $-x$) |
| $U$ at a minimum | $F = 0$ (stable equilibrium) |
| $U$ at a maximum | $F = 0$ (unstable equilibrium) |
| Steep slope | Large force |
| Flat slope | Small force |

### The Force Points "Downhill" on the $U$ Curve

The negative sign means the force always pushes objects toward **lower potential energy**. This is a universal principle:

$$\\text{Force} = -\\text{(slope of } U\\text{)}$$`
    },
    {
      id: 'cf3-mcq1',
      type: 'mcq' as const,
      question: 'At a point where the potential energy graph $U(x)$ has a positive slope and is concave down, the force is:',
      options: [
        'Negative and increasing in magnitude',
        'Positive and decreasing in magnitude',
        'Zero, since the curve is at a peak',
        'Negative and decreasing in magnitude'
      ],
      correctAnswer: 3,
      explanation: 'A positive slope means $dU/dx > 0$, so $F = -dU/dx < 0$. Concave down means the slope is decreasing as $x$ increases, so $|dU/dx|$, and with it $|F|$, is getting smaller.'
    },
    {
      id: 'cf3-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: Harmonic Oscillator

$$U(x) = \\frac{1}{2}kx^2$$

$$F = -\\frac{dU}{dx} = -kx$$

This is Hooke's law — a restoring force proportional to displacement.

### Example 2: Lennard-Jones Potential

A model for the force between two neutral molecules. An exam would give you a function like this; you are not expected to know it, only to work with it:

$$U(r) = \\epsilon\\left[\\left(\\frac{r_0}{r}\\right)^{12} - 2\\left(\\frac{r_0}{r}\\right)^6\\right]$$

$$F(r) = -\\frac{dU}{dr} = \\epsilon\\left[\\frac{12r_0^{12}}{r^{13}} - \\frac{12r_0^6}{r^7}\\right]$$

**Equilibrium:** $F = 0$ at $r = r_0$. Check: $\\frac{r_0^{12}}{r_0^{13}} = \\frac{r_0^6}{r_0^7}$ ✓

**Stability:** for $r < r_0$ the $r^{-13}$ term wins and $F > 0$ (pushed outward, back toward $r_0$); for $r > r_0$, $F < 0$ (pulled inward, back toward $r_0$). Either small displacement is opposed, so $r = r_0$ is a stable equilibrium, the minimum of $U$.

### Example 3: Gravitational Potential

$$U(r) = -\\frac{GMm}{r}$$

$$F(r) = -\\frac{dU}{dr} = -\\frac{GMm}{r^2}$$

This is the *radial* force component, and it points inward (attractive). The negative sign means the force points toward decreasing $r$ (toward the center), which is correct for gravity.

### Example 4: Piecewise Potential

$$U(x) = \\begin{cases} \\frac{1}{2}k_1 x^2 & x < 0 \\\\ \\frac{1}{2}k_2 x^2 & x \\geq 0 \\end{cases}$$

$$F(x) = \\begin{cases} -k_1 x & x < 0 \\\\ -k_2 x & x \\geq 0 \\end{cases}$$

This describes an asymmetric spring — stiffer on one side than the other.`
    },
    {
      id: 'cf3-mcq2',
      type: 'mcq' as const,
      question: 'Given $U(x) = A e^{-x/\\lambda}$ where $A, \\lambda > 0$, the force is:',
      options: [
        '$F = \\frac{A}{\\lambda}e^{-x/\\lambda}$',
        '$F = -\\frac{A}{\\lambda}e^{-x/\\lambda}$',
        '$F = A\\lambda e^{-x/\\lambda}$',
        '$F = -Ae^{-x/\\lambda}$'
      ],
      correctAnswer: 0,
      explanation: '$F = -dU/dx = -A \\cdot (-1/\\lambda)e^{-x/\\lambda} = \\frac{A}{\\lambda}e^{-x/\\lambda} > 0$. The force points in the $+x$ direction, pushing away from the origin. This is a repulsive exponential force.'
    },
    {
      id: 'cf3-higher',
      type: 'text' as const,
      content: `## Equilibrium, Stability and Strongest Force

### Classifying an Equilibrium

At an equilibrium $x_0$, $dU/dx = 0$. To decide whether it is stable, use either test:

- **Force test:** displace slightly to each side. If the force points back toward $x_0$ on both sides, the equilibrium is stable; if it points away, unstable.
- **Shape test:** a local minimum of $U$ ($d^2U/dx^2 > 0$) is stable; a local maximum ($d^2U/dx^2 < 0$) is unstable.

### Where Is the Force Strongest?

Because $|F| = |dU/dx|$, the force is largest where the $U(x)$ curve is steepest. Between a minimum and a maximum, that is where the slope stops increasing and starts decreasing (an inflection point, where $d^2U/dx^2 = 0$).

### Worked Example

For $x > 0$, a particle has

$$U(x) = U_0\\left(\\frac{a^2}{x^2} - \\frac{a}{x}\\right)$$

**Force:** $F = -\\dfrac{dU}{dx} = U_0\\left(\\dfrac{2a^2}{x^3} - \\dfrac{a}{x^2}\\right)$

**Equilibrium:** $F = 0 \\implies 2a^2 = ax \\implies x_0 = 2a$

**Force test:**
- At $x = a$: $F = U_0\\left(\\dfrac{2}{a} - \\dfrac{1}{a}\\right) = +\\dfrac{U_0}{a}$, pushing toward larger $x$, back toward $2a$.
- At $x = 4a$: $F = U_0\\left(\\dfrac{2}{64a} - \\dfrac{1}{16a}\\right) = -\\dfrac{U_0}{32a}$, pulling back toward $2a$.

So $x_0 = 2a$ is **stable**, and $U(2a) = U_0\\left(\\frac{1}{4} - \\frac{1}{2}\\right) = -\\frac{U_0}{4}$ is the bottom of the well.

**Bound or free?** As $x \\to \\infty$, $U \\to 0$. A particle with total energy between $-U_0/4$ and $0$ is trapped between two turning points; with $E \\geq 0$ it can escape to large $x$.`
    },
    {
      id: 'cf3-mcq3',
      type: 'mcq' as const,
      question: 'In the worked example, $U(x) = U_0(a^2/x^2 - a/x)$. A particle is momentarily at $x = a$. The force on it:',
      options: [
        'Points toward $+x$, toward the equilibrium at $x = 2a$',
        'Points toward $-x$, away from the equilibrium',
        'Is zero, because $U = 0$ at $x = a$',
        'Points toward $-x$, because $U$ is rising'
      ],
      correctAnswer: 0,
      explanation: 'The force depends on the slope of $U$, not its value: $F = U_0(2a^2/x^3 - a/x^2)$ gives $F = +U_0/a$ at $x = a$. $U$ is falling there (from large positive values toward the well at $2a$), so the force points toward $+x$. $U = 0$ at $x = a$ says nothing about the force.'
    },
    {
      id: 'cf3-mcq4',
      type: 'mcq' as const,
      question: 'For $U(x) = \\beta x^4$ (with $\\beta > 0$), the equilibrium at $x = 0$ is:',
      options: [
        'Stable, but the oscillations are not SHM',
        'Unstable, since $U\'\'(0) = 0$',
        'Stable and simple harmonic',
        'Neutral, since $U$ is flat at $x = 0$'
      ],
      correctAnswer: 0,
      explanation: '$U\'(0) = 0$ and $U(x) > 0$ for all $x \\neq 0$, so $x = 0$ is a minimum and the equilibrium is stable. The force $F = -4\\beta x^3$ always points back toward $x = 0$, so the particle oscillates, but SHM requires a restoring force proportional to the displacement, and $x^3$ is not. The motion is periodic but not simple harmonic. A zero second derivative does not make the equilibrium unstable; the force test settles it.'
    },
    {
      id: 'cf3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Concept | Formula |
|:---:|:---:|
| Force from $U$ | $F = -dU/dx$ |
| Force = negative slope of $U$ | Points toward lower $U$ |
| Equilibrium | $F = 0 \\iff dU/dx = 0$ |
| Stable equilibrium | Minimum of $U$; force points back toward $x_0$ |
| Unstable equilibrium | Maximum of $U$; force points away from $x_0$ |
| Strongest force | Where the $U(x)$ curve is steepest |

> **Next up:** Part 4 — Energy Diagrams and Equilibrium, using graphs of $U(x)$ to understand motion qualitatively.`
    }
  ]
};
