export const physics1FrictionPart4Data = {
  topicSlug: 'friction',
  sections: [
    {
      id: 'fr4-intro',
      type: 'text' as const,
      content: `
# 📐 Friction with Angled Forces

**Part 4 of 7 — Friction**

When you pull or push an object at an angle, the vertical component of your force changes the **normal force**, which in turn changes the **friction force**. This is a very common AP Physics 1 scenario.
      `
    },
    {
      id: 'fr4-pulling-at-angle',
      type: 'text' as const,
      content: `
## Pulling at an Angle Above Horizontal

A force $F$ is applied at angle $\\theta$ above horizontal to a block on a rough surface.

### Force Components

- $F_x = F\\cos\\theta$ (horizontal, in direction of motion)
- $F_y = F\\sin\\theta$ (vertical, upward)

### y-direction (no vertical acceleration):
$$N + F\\sin\\theta - mg = 0$$
$$N = mg - F\\sin\\theta$$

### Friction Force
$$f_k = \\mu_k N = \\mu_k(mg - F\\sin\\theta)$$

> **Pulling up reduces the normal force**, which **reduces friction**. This is why it\'s easier to pull a suitcase at an angle than to push it!

### x-direction:
$$F\\cos\\theta - f_k = ma$$
$$F\\cos\\theta - \\mu_k(mg - F\\sin\\theta) = ma$$

### Example

Pull a 20 kg box with 80 N at 30° ($\\mu_k = 0.25$, $g = 10$ m/s²):

$N = 200 - 80\\sin 30° = 200 - 40 = 160$ N

$f_k = 0.25 \\times 160 = 40$ N

$F_x = 80\\cos 30° = 69.3$ N

$a = (69.3 - 40)/20 = 29.3/20 = 1.47$ m/s²
      `
    },
    {
      id: 'fr4-pushing-at-angle',
      type: 'text' as const,
      content: `
## Pushing at an Angle Below Horizontal

A force $F$ is applied at angle $\\theta$ below horizontal (pushing downward and forward).

### Force Components

- $F_x = F\\cos\\theta$ (horizontal, forward)
- $F_y = -F\\sin\\theta$ (vertical, downward)

### y-direction:
$$N - mg - F\\sin\\theta = 0$$
$$N = mg + F\\sin\\theta$$

### Friction Force
$$f_k = \\mu_k N = \\mu_k(mg + F\\sin\\theta)$$

> **Pushing down increases the normal force**, which **increases friction**. More effort wasted fighting friction!

### Comparing Pull vs. Push

For the same force magnitude and angle, pulling upward is always more efficient:

| Method | Normal Force | Friction | Horizontal Acceleration |
|--------|-------------|---------|------------------------|
| Pull up at $\\theta$ | $mg - F\\sin\\theta$ | Lower | Higher |
| Push down at $\\theta$ | $mg + F\\sin\\theta$ | Higher | Lower |
| Horizontal push | $mg$ | Middle | Middle |
      `
    },
    {
      id: 'fr4-optimal-angle',
      type: 'text' as const,
      content: `
## The Optimal Pulling Angle

There\'s actually an **optimal angle** that maximizes acceleration (or minimizes the force needed to move at constant velocity).

### For Constant Velocity ($a = 0$):

$$F\\cos\\theta = \\mu_k(mg - F\\sin\\theta)$$

Solving for $F$:
$$F = \\frac{\\mu_k mg}{\\cos\\theta + \\mu_k \\sin\\theta}$$

To minimize $F$, take $dF/d\\theta = 0$:

$$\\theta_{\\text{optimal}} = \\tan^{-1}(\\mu_k)$$

### Example

For $\\mu_k = 0.40$: $\\theta_{\\text{opt}} = \\tan^{-1}(0.40) = 21.8°$

This means pulling at about 22° above horizontal requires the **least force** to keep the object moving at constant velocity.

> This explains why suitcase handles are angled — it\'s not just for comfort; it\'s physics!
      `
    },
    {
      id: 'fr4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Angled Force with Friction** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You pull a sled with a rope at 45° above horizontal. Compared to pulling horizontally, the friction force is:',
            options: [
              'Greater',
              'The same',
              'Less',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: 'Pulling upward at 45° reduces the normal force ($N = mg - F\\sin 45°$), which reduces friction ($f = \\mu N$).'
          },
          {
            question: 'You push a box at 30° below horizontal with force $F$. The normal force is:',
            options: [
              '$mg$',
              '$mg - F\\\\sin 30°$',
              '$mg + F\\\\sin 30°$',
              '$mg + F\\\\cos 30°$'
            ],
            correctAnswer: 2,
            explanation: 'Pushing downward adds a vertical component: $N = mg + F\\sin 30°$. The normal force increases.'
          },
          {
            question: 'A box is pulled at angle $\\theta$ above horizontal on a rough surface. If $\\theta$ increases (toward 90°), the friction:',
            options: [
              'Increases steadily',
              'Decreases steadily',
              'Stays constant',
              'First decreases then increases'
            ],
            correctAnswer: 1,
            explanation: 'As $\\theta$ increases, $F\\sin\\theta$ increases, so $N = mg - F\\sin\\theta$ decreases, and friction $\\mu N$ decreases. (Until the block lifts off the surface when $N = 0$.)'
          }
        ]
      }
    },
    {
      id: 'fr4-angle-calculations',
      type: 'input-boxes' as const,
      content: `
**Angled Force Calculations** 🧮

A 10 kg block on a rough surface ($\\mu_k = 0.40$) is pulled with 50 N. Use $g = 10$ m/s².

1) If pulled horizontally, what is the friction force (in N)?

2) If pulled at 37° above horizontal ($\\sin 37° = 0.60$, $\\cos 37° = 0.80$), what is the normal force (in N)?

3) For the 37° pull, what is the acceleration (in m/s²)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '70', '1.2'],
        hint1: '$f_k = \\mu_k mg = 0.40 \\times 100$.',
        hint2: '$N = mg - F\\sin 37° = 100 - 50(0.60)$.',
        hint3: '$f_k = \\mu_k N = 0.40 \\times 70 = 28$ N. $F_x = 50(0.80) = 40$ N. $a = (40 - 28)/10$.',
        explanation: '1) $f_k = 0.40 \\times 100 = 40$ N. 2) $N = 100 - 30 = 70$ N. 3) $f_k = 0.40 \\times 70 = 28$ N. $F_x = 40$ N. $a = (40 - 28)/10 = 12/10 = 1.2$ m/s².'
      }
    },
    {
      id: 'fr4-dropdown-comparison',
      type: 'dropdown-select' as const,
      content: `
**Pull vs. Push Comparison** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pulling upward at an angle _____ the friction force compared to pushing horizontally.',
            options: ['Increases', 'Decreases', 'Doesn\'t change', 'Eliminates'],
            correctIndex: 1,
            explanation: 'Pulling up reduces the normal force, which reduces the friction force.'
          },
          {
            label: 'Pushing downward at an angle _____ the normal force.',
            options: ['Increases', 'Decreases', 'Doesn\'t change', 'Eliminates'],
            correctIndex: 0,
            explanation: 'The downward component of the push adds to the weight, increasing the normal force.'
          },
          {
            label: 'To minimize the force needed to pull a box at constant velocity, pull at:',
            options: ['0° (horizontal)', '$\\\\tan^{-1}(\\\\mu_k)$ above horizontal', '45° above horizontal', '90° (straight up)'],
            correctIndex: 1,
            explanation: 'The optimal angle is $\\theta = \\tan^{-1}(\\mu_k)$, which balances the benefit of reduced normal force against the cost of reduced horizontal force component.'
          }
        ]
      }
    },
    {
      id: 'fr4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Friction with Angled Forces** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 20 kg box is pushed at 53° below horizontal with 100 N across a rough floor ($\\mu_k = 0.30$, $g = 10$ m/s²). The normal force is ($\\sin 53° = 0.80$):',
            options: [
              '120 N',
              '200 N',
              '280 N',
              '380 N'
            ],
            correctAnswer: 2,
            explanation: '$N = mg + F\\sin 53° = 200 + 100(0.80) = 200 + 80 = 280$ N.'
          },
          {
            question: 'A 15 kg box is pulled at 37° above horizontal with 60 N across a rough floor ($\\mu_k = 0.25$, $g = 10$ m/s², $\\sin 37° = 0.60$, $\\cos 37° = 0.80$). The acceleration is:',
            options: [
              '0.5 m/s²',
              '1.4 m/s²',
              '2.0 m/s²',
              '3.2 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$N = mg - F\\sin 37° = 150 - 36 = 114$ N. $f_k = 0.25 \\times 114 = 28.5$ N. $F_x = 60\\cos 37° = 48$ N. $a = (48 - 28.5)/15 = 19.5/15 = 1.3$ m/s² $\\approx 1.4$ m/s².'
          }
        ]
      }
    }
  ]
}
