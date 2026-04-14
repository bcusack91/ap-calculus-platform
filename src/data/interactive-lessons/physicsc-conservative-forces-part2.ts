export const physCConsForcePart2Data = {
  topicSlug: "conservative-forces-physics-c",
  sections: [
    {
      id: 'cf2-intro',
      type: 'text' as const,
      content: `# Potential Energy Functions

**Part 2 of 7 — Conservative Forces & Energy**

For any conservative force, we can define a potential energy function $U(x)$ such that the force is the negative derivative of $U$.

## Defining Potential Energy

$$U(x) - U(x_0) = -\\int_{x_0}^{x} F(x')\\,dx'$$

Or equivalently:
$$\\Delta U = -W_{\\text{conservative}}$$

The reference point $x_0$ (where $U = 0$) is arbitrary — only **differences** in $U$ are physically meaningful.

## Common Potential Energy Functions

### 1. Gravity (Near Earth's Surface)

$$F = -mg \\quad \\text{(downward)}$$
$$U(y) = -\\int_0^y (-mg)\\,dy' = mgy$$

$$\\boxed{U_{\\text{grav}} = mgy}$$

### 2. Spring (Hooke's Law)

$$F = -kx$$
$$U(x) = -\\int_0^x (-kx')\\,dx' = \\frac{1}{2}kx^2$$

$$\\boxed{U_{\\text{spring}} = \\frac{1}{2}kx^2}$$

### 3. Universal Gravitation

$$F = -\\frac{GMm}{r^2} \\quad \\text{(toward center, attractive)}$$
$$U(r) = -\\int_\\infty^r \\left(-\\frac{GMm}{r'^2}\\right)dr' = -\\frac{GMm}{r}$$

$$\\boxed{U_{\\text{grav}} = -\\frac{GMm}{r}}$$

(Reference: $U = 0$ at $r = \\infty$)`
    },
    {
      id: 'cf2-mcq1',
      type: 'mcq' as const,
      question: 'The potential energy for a force $F(x) = -\\alpha x^3$ (where $\\alpha > 0$) with $U(0) = 0$ is:',
      options: [
        '$U(x) = \\frac{\\alpha}{4}x^4$',
        '$U(x) = -\\frac{\\alpha}{4}x^4$',
        '$U(x) = \\alpha x^4$',
        '$U(x) = -3\\alpha x^2$'
      ],
      correctAnswer: 0,
      explanation: '$U(x) = -\\int_0^x (-\\alpha x\'^3)\\,dx\' = \\alpha\\int_0^x x\'^3\\,dx\' = \\frac{\\alpha}{4}x^4$.'
    },
    {
      id: 'cf2-derive',
      type: 'text' as const,
      content: `## Deriving $U$ from $F$: Step-by-Step

### General Procedure

Given $F(x)$, find $U(x)$:

1. Write $U(x) = -\\int_{x_0}^x F(x')\\,dx'$
2. Choose a convenient reference point $x_0$ where $U(x_0) = 0$
3. Evaluate the integral
4. **Check:** $F = -dU/dx$ should recover the original force

### Example: Quartic Force

$$F(x) = -6x^2 + 4x$$

$$U(x) = -\\int_0^x (-6x'^2 + 4x')\\,dx' = -[-2x'^3 + 2x'^2]_0^x$$
$$U(x) = 2x^3 - 2x^2$$

**Check:** $-\\frac{dU}{dx} = -(6x^2 - 4x) = -6x^2 + 4x$ ✓

### Example: Inverse-Square Force (Electrostatic)

$$F(r) = \\frac{kq_1q_2}{r^2} \\quad \\text{(positive = repulsive)}$$

With $U(\\infty) = 0$:

$$U(r) = -\\int_\\infty^r \\frac{kq_1q_2}{r'^2}\\,dr' = -\\left[-\\frac{kq_1q_2}{r'}\\right]_\\infty^r = \\frac{kq_1q_2}{r}$$

For like charges ($q_1 q_2 > 0$): $U > 0$ — energy decreases as charges separate.
For unlike charges ($q_1 q_2 < 0$): $U < 0$ — energy decreases as charges attract.`
    },
    {
      id: 'cf2-mcq2',
      type: 'mcq' as const,
      question: 'For universal gravitation, $U(r) = -GMm/r$. At what radius is the potential energy half of its value at the surface ($r = R$)?',
      options: [
        '$r = 2R$ (since $U(2R) = -GMm/(2R) = U(R)/2$)',
        '$r = R/2$',
        '$r = R\\sqrt{2}$',
        '$r = 4R$'
      ],
      correctAnswer: 0,
      explanation: '$U(R) = -GMm/R$. We want $U(r) = U(R)/2 = -GMm/(2R)$. So $-GMm/r = -GMm/(2R)$, giving $r = 2R$. At double the radius, the (negative) PE is half as negative — half the magnitude.'
    },
    {
      id: 'cf2-custom',
      type: 'text' as const,
      content: `## Custom Potential Energy Functions

On the AP exam, you may encounter a given $U(x)$ and be asked to analyze the system.

### Example: $U(x) = ax^2 - bx^4$

**Force:**
$$F(x) = -\\frac{dU}{dx} = -2ax + 4bx^3$$

**Equilibrium points** ($F = 0$):
$$-2ax + 4bx^3 = 0$$
$$x(-2a + 4bx^2) = 0$$
$$x = 0 \\quad \\text{or} \\quad x = \\pm\\sqrt{\\frac{a}{2b}}$$

**Stability** (check $d^2U/dx^2$):
$$\\frac{d^2U}{dx^2} = 2a - 12bx^2$$

At $x = 0$: $U'' = 2a > 0$ → **stable** (local minimum of $U$)

At $x = \\pm\\sqrt{a/(2b)}$: $U'' = 2a - 12b \\cdot \\frac{a}{2b} = 2a - 6a = -4a < 0$ → **unstable** (local maximum of $U$)

### Key Insight

- **Stable equilibrium:** $U$ has a local minimum ($U'' > 0$)
- **Unstable equilibrium:** $U$ has a local maximum ($U'' < 0$)

We'll explore this further in Part 4 (Energy Diagrams).`
    },
    {
      id: 'cf2-mcq3',
      type: 'mcq' as const,
      question: 'Given $U(x) = 3x^2 - x^3$, the force at $x = 1$ is:',
      options: [
        '$F = -3$ N (force points in $-x$ direction)',
        '$F = 3$ N',
        '$F = 0$ (equilibrium)',
        '$F = -6$ N'
      ],
      correctAnswer: 0,
      explanation: '$F = -dU/dx = -(6x - 3x^2)$. At $x = 1$: $F = -(6 - 3) = -3$ N.'
    },
    {
      id: 'cf2-mcq4',
      type: 'mcq' as const,
      question: 'A force $F(x) = F_0 \\cos(kx)$ is conservative. Its potential energy (with $U(0) = 0$) is:',
      options: [
        '$U(x) = -\\frac{F_0}{k}\\sin(kx)$',
        '$U(x) = \\frac{F_0}{k}\\sin(kx)$',
        '$U(x) = -F_0\\sin(kx)$',
        '$U(x) = F_0 k \\sin(kx)$'
      ],
      correctAnswer: 0,
      explanation: '$U(x) = -\\int_0^x F_0\\cos(kx\')\\,dx\' = -\\frac{F_0}{k}[\\sin(kx\')]_0^x = -\\frac{F_0}{k}\\sin(kx)$.'
    },
    {
      id: 'cf2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Force | Potential Energy | Reference |
|:---:|:---:|:---:|
| Gravity (near surface) | $U = mgy$ | $U = 0$ at $y = 0$ |
| Spring | $U = \\frac{1}{2}kx^2$ | $U = 0$ at $x = 0$ |
| Universal gravitation | $U = -GMm/r$ | $U = 0$ at $r = \\infty$ |
| General $F(x)$ | $U = -\\int F\\,dx$ | Choose $x_0$ |

> **Key Formula:** $F(x) = -\\frac{dU}{dx}$  (force is the negative slope of $U$)

> **Next up:** Part 3 — $F = -dU/dx$, deep-diving into extracting forces from potential energy graphs and functions.`
    }
  ]
};
