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
        'Negative (pointing in $-x$ direction) and increasing in magnitude',
        'Positive and decreasing',
        'Zero',
        'Negative and decreasing in magnitude'
      ],
      correctAnswer: 0,
      explanation: 'Positive slope of $U$ means $dU/dx > 0$, so $F = -dU/dx < 0$ (force points in $-x$). Concave down means the slope is increasing, so $|dU/dx|$ is getting larger, meaning $|F|$ is increasing.'
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

A model for intermolecular forces:

$$U(r) = \\epsilon\\left[\\left(\\frac{r_0}{r}\\right)^{12} - 2\\left(\\frac{r_0}{r}\\right)^6\\right]$$

$$F(r) = -\\frac{dU}{dr} = \\epsilon\\left[\\frac{12r_0^{12}}{r^{13}} - \\frac{12r_0^6}{r^7}\\right]$$

**Equilibrium:** $F = 0$ at $r = r_0$. Check: $\\frac{r_0^{12}}{r_0^{13}} = \\frac{r_0^6}{r_0^7}$ ✓

**Stability:** $U''(r_0) > 0$ (minimum of $U$) → stable equilibrium at $r = r_0$.

### Example 3: Gravitational Potential

$$U(r) = -\\frac{GMm}{r}$$

$$F(r) = -\\frac{dU}{dr} = -\\frac{GMm}{r^2}$$

But wait — this is the *radial* force, pointing inward (attractive). The negative sign means the force points toward decreasing $r$ (toward the center), which is correct for gravity.

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
        '$F = \\frac{A}{\\lambda}e^{-x/\\lambda}$ (positive, repulsive)',
        '$F = -\\frac{A}{\\lambda}e^{-x/\\lambda}$ (negative, attractive)',
        '$F = A\\lambda e^{-x/\\lambda}$',
        '$F = -Ae^{-x/\\lambda}$'
      ],
      correctAnswer: 0,
      explanation: '$F = -dU/dx = -A \\cdot (-1/\\lambda)e^{-x/\\lambda} = \\frac{A}{\\lambda}e^{-x/\\lambda} > 0$. The force points in the $+x$ direction, pushing away from the origin. This is a repulsive exponential force.'
    },
    {
      id: 'cf3-higher',
      type: 'text' as const,
      content: `## Higher-Order Analysis

### Finding Force Extrema

The force has maximum magnitude where $dF/dx = 0$, or equivalently $d^2U/dx^2 = 0$ (inflection point of $U$).

### Taylor Expansion Near Equilibrium

Near a stable equilibrium at $x_0$ (where $U'(x_0) = 0$):

$$U(x) \\approx U(x_0) + \\frac{1}{2}U''(x_0)(x - x_0)^2 + \\frac{1}{6}U'''(x_0)(x - x_0)^3 + \\cdots$$

The leading term gives:
$$F \\approx -U''(x_0)(x - x_0)$$

This is a **harmonic restoring force** with effective spring constant:

$$k_{\\text{eff}} = U''(x_0) = \\frac{d^2U}{dx^2}\\bigg|_{x_0}$$

### Angular Frequency of Small Oscillations

$$\\omega = \\sqrt{\\frac{k_{\\text{eff}}}{m}} = \\sqrt{\\frac{U''(x_0)}{m}}$$

### Worked Example

$$U(x) = U_0\\left(\\frac{a^2}{x^2} - \\frac{a}{x}\\right)$$

**Equilibrium:** $F = -U' = 0$ → $U_0\\left(-\\frac{2a^2}{x^3} + \\frac{a}{x^2}\\right) = 0$ → $x_0 = 2a$

**Small oscillation frequency:**
$$U''(x) = U_0\\left(\\frac{6a^2}{x^4} - \\frac{2a}{x^3}\\right)$$
$$U''(2a) = U_0\\left(\\frac{6a^2}{16a^4} - \\frac{2a}{8a^3}\\right) = U_0\\left(\\frac{6}{16a^2} - \\frac{2}{8a^2}\\right) = \\frac{U_0}{8a^2}$$

$$\\omega = \\sqrt{\\frac{U_0}{8ma^2}}$$`
    },
    {
      id: 'cf3-mcq3',
      type: 'mcq' as const,
      question: 'Near a stable equilibrium, any potential energy looks approximately like:',
      options: [
        'A parabola ($U \\approx \\frac{1}{2}k_{\\text{eff}}x^2$), giving simple harmonic motion',
        'A linear function',
        'A cubic',
        'An exponential'
      ],
      correctAnswer: 0,
      explanation: 'Taylor expanding around a minimum ($U\' = 0$): the leading nonzero term is $\\frac{1}{2}U\'\'(x_0)(x-x_0)^2$, which is parabolic. This means all small oscillations are simple harmonic.'
    },
    {
      id: 'cf3-mcq4',
      type: 'mcq' as const,
      question: 'For $U(x) = \\beta x^4$ (with $\\beta > 0$), the equilibrium at $x = 0$ is:',
      options: [
        'Stable, but NOT simple harmonic (since $U\'\'(0) = 0$, the restoring force is not linear)',
        'Unstable',
        'Stable and simple harmonic',
        'Neutral (indifferent equilibrium)'
      ],
      correctAnswer: 0,
      explanation: '$U\'(0) = 0$ and $U(x) > 0$ for all $x \\neq 0$ — this is a minimum, hence stable. However, $U\'\'(0) = 12\\beta(0)^2 = 0$, so the harmonic approximation fails. The force $F = -4\\beta x^3$ is restoring but not proportional to $x$ — the oscillation is anharmonic.'
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
| Stable equilibrium | $d^2U/dx^2 > 0$ (minimum of $U$) |
| Effective spring constant | $k_{\\text{eff}} = U''(x_0)$ |
| Small oscillation frequency | $\\omega = \\sqrt{U''(x_0)/m}$ |

> **Next up:** Part 4 — Energy Diagrams and Equilibrium, using graphs of $U(x)$ to understand motion qualitatively.`
    }
  ]
};
