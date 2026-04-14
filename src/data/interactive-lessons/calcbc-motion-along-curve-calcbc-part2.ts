export const calcbcMotionPart2Data = {
  topicSlug: 'motion-along-curve-calcbc',
  sections: [
    {
      id: 'mc2-intro',
      type: 'text' as const,
      content: `# Speed, Distance, and Arc Length

**Part 2 of 7 — From Velocity to Distance**

### Total Distance Traveled

For a particle moving along a curve from $t = a$ to $t = b$:

$$\\boxed{\\text{Distance} = \\int_a^b |\\vec{v}(t)|\\, dt = \\int_a^b \\sqrt{[x'(t)]^2 + [y'(t)]^2}\\, dt}$$

This is also the **arc length** of the parametric curve.

> **Key Fact:** Distance is always ≥ 0. Unlike displacement, distance does not "cancel" when the particle reverses direction.`
    },
    {
      id: 'mc2-displacement',
      type: 'text' as const,
      content: `### Displacement vs. Distance

| Quantity | Formula | Meaning |
|----------|---------|---------|
| Displacement (vector) | $\\vec{r}(b) - \\vec{r}(a) = \\langle x(b)-x(a),\\; y(b)-y(a) \\rangle$ | Net change in position |
| Displacement magnitude | $|\\vec{r}(b) - \\vec{r}(a)|$ | Straight-line distance start→end |
| Distance traveled | $\\int_a^b |\\vec{v}(t)|\\,dt$ | Total path length |

> **AP Tip:** The AP exam often asks: *"Find the total distance traveled."* This ALWAYS means integrate speed. It does NOT mean displacement.

### Position at a Later Time

$$\\boxed{x(b) = x(a) + \\int_a^b x'(t)\\,dt \\quad\\text{and}\\quad y(b) = y(a) + \\int_a^b y'(t)\\,dt}$$

This is the FTC applied component-wise.`
    },
    {
      id: 'mc2-example',
      type: 'text' as const,
      content: `### Worked Example

A particle moves with $x'(t) = 3\\cos t$, $y'(t) = 3\\sin t$ for $0 \\le t \\le \\pi$.

**Speed:** $|\\vec{v}(t)| = \\sqrt{9\\cos^2 t + 9\\sin^2 t} = 3$

**Distance:** $\\int_0^\\pi 3\\,dt = 3\\pi$

**Displacement:** Starting at $(0, 0)$:
- $x(\\pi) = 0 + \\int_0^\\pi 3\\cos t\\,dt = 3\\sin t\\Big|_0^\\pi = 0$
- $y(\\pi) = 0 + \\int_0^\\pi 3\\sin t\\,dt = -3\\cos t\\Big|_0^\\pi = 6$
- Displacement $= \\langle 0, 6 \\rangle$, magnitude $= 6$

The particle travels distance $3\\pi \\approx 9.42$ along a semicircle but ends only 6 units from start.`
    },
    {
      id: 'mc2-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'A particle has $x\'(t) = 4$ and $y\'(t) = 3$ for $0 \\le t \\le 2$. The total distance traveled is:',
            options: ['$10$', '$14$', '$5$', '$7$'],
            correctAnswer: 0,
            explanation: 'Speed $= \\sqrt{16+9} = 5$. Distance $= \\int_0^2 5\\,dt = 10$.'
          },
          {
            question: 'For the same particle, the displacement magnitude is:',
            options: ['$10$ (same as distance since path is a straight line)', '$14$', '$5$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Displacement $= \\langle 8, 6 \\rangle$, $|\\langle 8,6 \\rangle| = \\sqrt{64+36} = 10$. Straight-line motion: distance = displacement magnitude.'
          },
          {
            question: 'Distance traveled is always ≥ displacement magnitude because:',
            options: ['The straight-line path is the shortest between two points', 'Speed is always positive', 'Velocity components can be negative', 'The integral of speed is monotonic'],
            correctAnswer: 0,
            explanation: 'The shortest path between two points is a straight line. The actual path is at least as long.'
          }
        ]
      }
    },
    {
      id: 'mc2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Distance Computation**',
      exercise: {
        dropdowns: [
          {
            label: 'Given $x\'(t) = 2t$ and $y\'(t) = 3$, the speed $|\\vec{v}(t)|$ is:',
            options: ['$\\sqrt{4t^2 + 9}$', '$2t + 3$', '$\\sqrt{4t^2 - 9}$', '$\\sqrt{2t + 3}$'],
            correctAnswers: ['$\\sqrt{4t^2 + 9}$'],
            hints: ['Speed $= \\sqrt{(x\')^2 + (y\')^2}$.'],
            explanation: '$\\sqrt{(2t)^2 + 3^2} = \\sqrt{4t^2 + 9}$.'
          },
          {
            label: 'To find $x(3)$ given $x(0) = 5$ and $x\'(t) = 2t$:',
            options: ['$x(3) = 5 + \\int_0^3 2t\\,dt = 5 + 9 = 14$', '$x(3) = \\int_0^3 2t\\,dt = 9$', '$x(3) = 5 + 2(3) = 11$', '$x(3) = 5 \\cdot 3 = 15$'],
            correctAnswers: ['$x(3) = 5 + \\int_0^3 2t\\,dt = 5 + 9 = 14$'],
            hints: ['$x(b) = x(a) + \\int_a^b x\'(t)\\,dt$.'],
            explanation: '$x(3) = 5 + [t^2]_0^3 = 5 + 9 = 14$.'
          }
        ]
      }
    },
    {
      id: 'mc2-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'A particle has speed $|\\vec{v}(t)| = 6$ for all $t$. What is the total distance traveled from $t = 0$ to $t = 5$?',
        correctAnswer: '30',
        acceptableAnswers: ['30', '30.0'],
        hints: ['Distance $= \\int_0^5 6\\,dt$.'],
        explanation: '$\\int_0^5 6\\,dt = 30$. Constant speed × time = distance.'
      }
    },
    {
      id: 'mc2-summary',
      type: 'text' as const,
      content: `### Key Formulas

$$\\boxed{\\text{Distance} = \\int_a^b \\sqrt{(x')^2 + (y')^2}\\,dt}$$

$$\\boxed{\\vec{r}(b) = \\vec{r}(a) + \\int_a^b \\vec{v}(t)\\,dt}$$

| Need | Use |
|------|-----|
| Total distance | $\\int |\\vec{v}|\\,dt$ |
| Net displacement | $\\vec{r}(b) - \\vec{r}(a)$ |
| Position at time $b$ | $\\vec{r}(a) + \\int_a^b \\vec{v}\\,dt$ |

**Next: Part 3 — Particle at Rest, Direction Changes**`
    }
  ]
};
