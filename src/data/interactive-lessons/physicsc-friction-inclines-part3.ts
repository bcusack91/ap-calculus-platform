export const physCFrictionPart3Data = {
  topicSlug: "friction-inclines-physics-c",
  sections: [
    {
      id: 'fri3-intro',
      type: 'text' as const,
      content: `# Inclined Planes with Friction

**Part 3 of 7 — Friction & Inclines**

Now we combine friction with inclined planes — the bread and butter of AP Physics C mechanics problems.

## Forces on a Rough Incline

For a block on an incline of angle $\\theta$ with friction:

**Perpendicular to incline ($y$-direction):**
$$N = mg\\cos\\theta$$

**Along the incline ($x$-direction):**

| Scenario | Net Force (down ramp +) |
|:---:|:---:|
| Sliding down | $mg\\sin\\theta - \\mu_k mg\\cos\\theta = ma$ |
| Sliding up | $-mg\\sin\\theta - \\mu_k mg\\cos\\theta = ma$ |
| At rest (checking) | $mg\\sin\\theta \\leq \\mu_s mg\\cos\\theta$? |

### Critical Angle

A block starts sliding when the component of gravity along the ramp exceeds maximum static friction:

$$mg\\sin\\theta_c = \\mu_s mg\\cos\\theta_c$$
$$\\tan\\theta_c = \\mu_s$$
$$\\theta_c = \\arctan(\\mu_s)$$

This gives a clean way to *measure* $\\mu_s$ experimentally.`
    },
    {
      id: 'fri3-mcq1',
      type: 'mcq' as const,
      question: 'A ramp is slowly tilted. A block starts sliding when $\\theta = 35°$. What is $\\mu_s$?',
      options: [
        '$\\tan 35° \\approx 0.70$',
        '$\\sin 35° \\approx 0.57$',
        '$\\cos 35° \\approx 0.82$',
        '$35/90 \\approx 0.39$'
      ],
      correctAnswer: 0,
      explanation: 'At the critical angle: $\\mu_s = \\tan\\theta_c = \\tan 35° \\approx 0.700$.'
    },
    {
      id: 'fri3-dynamics',
      type: 'text' as const,
      content: `## Dynamics on Rough Inclines

### Sliding Down

Acceleration (taking down-ramp as positive):
$$a_{\\text{down}} = g(\\sin\\theta - \\mu_k \\cos\\theta)$$

The block slides down only if $\\tan\\theta > \\mu_s$ (i.e., $\\theta > \\theta_c$).

### Sliding Up (Launched Upward)

When a block is launched *up* a rough incline, both gravity and friction decelerate it:

$$a_{\\text{up}} = -g(\\sin\\theta + \\mu_k \\cos\\theta)$$

**Caution:** After the block stops, it may or may not slide back down. It stays at rest if $\\tan\\theta \\leq \\mu_s$.

### Worked Example

A block is launched up a $37°$ rough incline ($\\mu_k = 0.3$) with $v_0 = 12$ m/s.

**Deceleration going up:**
$$a_{\\text{up}} = -g(\\sin 37° + 0.3\\cos 37°) = -10(0.6 + 0.24) = -8.4 \\text{ m/s}^2$$

**Distance traveled up:**
$$v^2 = v_0^2 + 2a\\Delta x = 0$$
$$\\Delta x = \\frac{v_0^2}{2|a|} = \\frac{144}{16.8} = 8.57 \\text{ m}$$

**Does it slide back?** $\\tan 37° = 0.75 > \\mu_s$ (assuming $\\mu_s \\approx 0.35$), so yes.

**Acceleration sliding back down:**
$$a_{\\text{down}} = g(\\sin 37° - 0.3\\cos 37°) = 10(0.6 - 0.24) = 3.6 \\text{ m/s}^2$$

**Speed at the bottom (returning):**
$$v = \\sqrt{2(3.6)(8.57)} = \\sqrt{61.7} = 7.85 \\text{ m/s}$$

Notice: $v_{\\text{return}} < v_0$ because friction dissipated energy.`
    },
    {
      id: 'fri3-mcq2',
      type: 'mcq' as const,
      question: 'A block slides down a rough $45°$ incline with $\\mu_k = 0.3$. What is its acceleration?',
      options: [
        '$g(\\sin 45° - 0.3\\cos 45°) \\approx 4.95$ $m/s^{2}$',
        '$g\\sin 45° \\approx 7.07$ $m/s^{2}$',
        '$g(\\sin 45° + 0.3\\cos 45°) \\approx 9.19$ $m/s^{2}$',
        '$g\\cos 45° \\approx 7.07$ $m/s^{2}$'
      ],
      correctAnswer: 0,
      explanation: 'Sliding down: gravity pulls down ramp, friction opposes motion (up ramp). $a = g(\\sin\\theta - \\mu_k\\cos\\theta) = 10(0.707 - 0.212) = 4.95$ $m/s^{2}$.'
    },
    {
      id: 'fri3-energy',
      type: 'text' as const,
      content: `## Energy Methods with Friction

When friction is present, mechanical energy is **not** conserved. The work-energy theorem gives:

$$\\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2 = W_{\\text{net}} = -mgh - \\mu_k N \\cdot d$$

For a ramp of length $d$ at angle $\\theta$:

$$\\frac{1}{2}mv^2 = \\frac{1}{2}mv_0^2 + mgd\\sin\\theta - \\mu_k mgd\\cos\\theta$$

The energy dissipated by friction:

$$\\Delta E_{\\text{thermal}} = \\mu_k mgd\\cos\\theta = f_k \\cdot d$$

### Round Trip Energy Loss

For a block launched up and sliding back to the start:

$$\\Delta E_{\\text{total}} = 2\\mu_k mgd\\cos\\theta$$

Since $\\frac{1}{2}mv_{\\text{return}}^2 = \\frac{1}{2}mv_0^2 - 2\\mu_k mgd\\cos\\theta$:

$$v_{\\text{return}} = \\sqrt{v_0^2 - 4\\mu_k gd\\cos\\theta}$$

where $d = \\frac{v_0^2}{2g(\\sin\\theta + \\mu_k\\cos\\theta)}$ is the distance traveled up.`
    },
    {
      id: 'fri3-mcq3',
      type: 'mcq' as const,
      question: 'A 2 kg block slides 5 m down a rough $30°$ ramp ($\\mu_k = 0.2$) from rest. What is its final speed? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\sqrt{2(10)(5)(\\sin 30° - 0.2\\cos 30°)} \\approx 5.66$ m/s',
        '$\\sqrt{2(10)(5)\\sin 30°} \\approx 7.07$ m/s',
        '$\\sqrt{2(10)(5)(0.5 + 0.173)} \\approx 8.2$ m/s',
        '$\\sqrt{2(10)(5)\\cos 30°} \\approx 9.3$ m/s'
      ],
      correctAnswer: 0,
      explanation: '$v = \\sqrt{2gd(\\sin\\theta - \\mu_k\\cos\\theta)} = \\sqrt{2(10)(5)(0.5 - 0.173)} = \\sqrt{32.7} \\approx 5.66$ m/s. Friction reduces the speed compared to the frictionless case.'
    },
    {
      id: 'fri3-mcq4',
      type: 'mcq' as const,
      question: 'A block is launched up a rough incline and returns to the start. Compared to its initial speed $v_0$, its return speed $v_f$ is:',
      options: [
        '$v_f < v_0$ because friction dissipates energy both going up and coming down',
        '$v_f = v_0$ because the height change is zero for a round trip',
        '$v_f > v_0$ because gravity accelerates it coming back',
        '$v_f = v_0$ only if the incline is $45°$'
      ],
      correctAnswer: 0,
      explanation: 'Friction does negative work on the block in both directions (up and down), dissipating energy as thermal energy. The total energy loss is $2\\mu_k Nd$, so $v_f < v_0$ always.'
    },
    {
      id: 'fri3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Concept | Formula |
|:---:|:---:|
| Critical angle | $\\theta_c = \\arctan(\\mu_s)$ |
| Accel. sliding down | $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$ |
| Decel. sliding up | $a = -g(\\sin\\theta + \\mu_k\\cos\\theta)$ |
| Energy loss (one way) | $\\Delta E = \\mu_k mgd\\cos\\theta$ |

> **Next up:** Part 4 — Velocity-Dependent Friction, where we use differential equations to handle drag and other calculus-based friction models.`
    }
  ]
};
