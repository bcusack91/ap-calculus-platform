export const physCFrictionPart2Data = {
  topicSlug: "friction-inclines-physics-c",
  sections: [
    {
      id: 'fri2-intro',
      type: 'text' as const,
      content: `# Inclined Planes (No Friction)

**Part 2 of 7 — Friction & Inclines**

Before adding friction, let's master the frictionless incline — the foundation for all ramp problems.

## Setting Up Coordinates

For an incline at angle $\\theta$:

| Direction | Axis | Forces |
|:---:|:---:|:---:|
| Along the incline | $x$-axis | $mg\\sin\\theta$ (down the ramp) |
| Perpendicular to incline | $y$-axis | $N - mg\\cos\\theta = 0$ |

### Newton's Second Law on an Incline

Along the incline (taking down-the-ramp as positive):

$$ma = mg\\sin\\theta$$
$$a = g\\sin\\theta$$

This is **constant acceleration**, so all kinematics equations apply:

$$v(t) = v_0 + (g\\sin\\theta)\\,t$$
$$x(t) = x_0 + v_0 t + \\frac{1}{2}(g\\sin\\theta)\\,t^2$$
$$v^2 = v_0^2 + 2(g\\sin\\theta)\\Delta x$$`
    },
    {
      id: 'fri2-mcq1',
      type: 'mcq' as const,
      question: 'A block slides from rest down a frictionless $30°$ incline. How far does it travel in 2 seconds? ($g = 10$ m/s²)',
      options: [
        '$10$ m',
        '$5$ m',
        '$20$ m',
        '$17.3$ m'
      ],
      correctAnswer: 0,
      explanation: '$a = g\\sin 30° = 10 \\times 0.5 = 5$ m/s². Distance $= \\frac{1}{2}at^2 = \\frac{1}{2}(5)(4) = 10$ m.'
    },
    {
      id: 'fri2-energy',
      type: 'text' as const,
      content: `## Energy Methods on Inclines

For a frictionless incline, mechanical energy is conserved:

$$\\frac{1}{2}mv_0^2 + mgh_0 = \\frac{1}{2}mv^2 + mgh$$

The height change on a ramp of length $L$ at angle $\\theta$:

$$\\Delta h = L\\sin\\theta$$

### Worked Example: Launched Up a Ramp

A block is launched up a frictionless $45°$ ramp with initial speed $v_0 = 10$ m/s.

**How far up the ramp does it travel?**

Using energy conservation:
$$\\frac{1}{2}mv_0^2 = mg(L\\sin\\theta)$$
$$L = \\frac{v_0^2}{2g\\sin\\theta} = \\frac{100}{2(10)(\\sin 45°)} = \\frac{100}{14.14} = 7.07 \\text{ m}$$

**Time to reach the top:**

Decelerating at $a = -g\\sin 45° = -7.07$ m/s²:
$$v = v_0 - (g\\sin\\theta)t = 0$$
$$t = \\frac{v_0}{g\\sin\\theta} = \\frac{10}{7.07} = 1.41 \\text{ s}$$

### Velocity as a Function of Position

Using $v^2 = v_0^2 - 2g\\sin\\theta \\cdot x$:

$$v(x) = \\sqrt{v_0^2 - 2gx\\sin\\theta}$$

This is valid until $v = 0$ at $x_{\\max} = \\frac{v_0^2}{2g\\sin\\theta}$.`
    },
    {
      id: 'fri2-mcq2',
      type: 'mcq' as const,
      question: 'A ball rolls up a frictionless $60°$ ramp with $v_0 = 8$ m/s. What maximum height does it reach? ($g = 10$ m/s²)',
      options: [
        '$3.2$ m',
        '$3.7$ m',
        '$6.4$ m',
        '$2.77$ m'
      ],
      correctAnswer: 0,
      explanation: 'Energy conservation: $h = \\frac{v_0^2}{2g} = \\frac{64}{20} = 3.2$ m. Notice that the height is independent of the angle — it only depends on the initial speed!'
    },
    {
      id: 'fri2-calculus',
      type: 'text' as const,
      content: `## Calculus Approach: Variable Angle Ramps

What if the ramp angle changes? Consider a curved ramp where $\\theta = \\theta(x)$.

For a small displacement $dx$ along the ramp, the height change is $dh = \\sin\\theta(x)\\,dx$.

The equation of motion becomes:
$$m\\frac{dv}{dt} = mg\\sin\\theta(x)$$

Using the chain rule: $\\frac{dv}{dt} = v\\frac{dv}{dx}$:

$$mv\\frac{dv}{dx} = mg\\sin\\theta(x)$$

$$\\int_{v_0}^{v} v'\\,dv' = g\\int_0^x \\sin\\theta(x')\\,dx'$$

$$\\frac{v^2 - v_0^2}{2} = g\\int_0^x \\sin\\theta(x')\\,dx'$$

### Example: Parabolic Ramp

For a ramp shaped like $y = \\frac{x^2}{2L}$, the slope at position $x$ is:

$$\\tan\\theta = \\frac{dy}{dx} = \\frac{x}{L}$$

For small angles: $\\sin\\theta \\approx \\tan\\theta = x/L$.

$$\\frac{v^2}{2} = g\\int_0^x \\frac{x'}{L}\\,dx' = \\frac{gx^2}{2L}$$

$$v(x) = x\\sqrt{\\frac{g}{L}}$$

The speed increases linearly with position — a result unique to this geometry.`
    },
    {
      id: 'fri2-mcq3',
      type: 'mcq' as const,
      question: 'A block slides from rest down a frictionless ramp of length $L$ at angle $\\theta$. Which gives the speed at the bottom?',
      options: [
        '$v = \\sqrt{2gL\\sin\\theta}$',
        '$v = \\sqrt{2gL\\cos\\theta}$',
        '$v = \\sqrt{2gL}$',
        '$v = gL\\sin\\theta$'
      ],
      correctAnswer: 0,
      explanation: 'Energy conservation: $\\frac{1}{2}mv^2 = mg(L\\sin\\theta)$, so $v = \\sqrt{2gL\\sin\\theta}$. The height dropped is $h = L\\sin\\theta$.'
    },
    {
      id: 'fri2-mcq4',
      type: 'mcq' as const,
      question: 'Two frictionless ramps have the same height $h$ but different angles ($30°$ and $60°$). A block slides from rest down each. Which statement is correct?',
      options: [
        'Both reach the same speed at the bottom, but the $60°$ ramp takes less time',
        'The $60°$ ramp gives a greater final speed',
        'The $30°$ ramp gives a greater final speed',
        'Both reach the same speed and take the same time'
      ],
      correctAnswer: 0,
      explanation: 'Final speed depends only on height: $v = \\sqrt{2gh}$, so both are the same. But the steeper ramp is shorter ($L = h/\\sin\\theta$) and has greater acceleration ($g\\sin\\theta$), so it takes less time.'
    },
    {
      id: 'fri2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Concept | Formula |
|:---:|:---:|
| Acceleration on incline | $a = g\\sin\\theta$ |
| Normal force | $N = mg\\cos\\theta$ |
| Speed at bottom | $v = \\sqrt{2gL\\sin\\theta} = \\sqrt{2gh}$ |
| Height change | $\\Delta h = L\\sin\\theta$ |
| Chain rule substitution | $a = v\\frac{dv}{dx}$ |

> **Next up:** Part 3 — Inclined Planes with Friction, combining everything from Parts 1 and 2.`
    }
  ]
};
