export const physCFrictionPart7Data = {
  topicSlug: "friction-inclines-physics-c",
  sections: [
    {
      id: 'fri7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Friction & Inclines**

### Complete Topic Reference

| Concept | Formula | Part |
|:---:|:---:|:---:|
| Static friction | $f_s \\leq \\mu_s N$ | 1 |
| Kinetic friction | $f_k = \\mu_k N$ | 1 |
| Incline acceleration (no friction) | $a = g\\sin\\theta$ | 2 |
| Incline acceleration (friction, down) | $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$ | 3 |
| Critical angle | $\\theta_c = \\arctan(\\mu_s)$ | 3 |
| Linear drag terminal velocity | $v_T = mg/b$ | 4 |
| Quadratic drag terminal velocity | $v_T = \\sqrt{mg/c}$ | 4 |
| Falling with linear drag | $v = v_T(1-e^{-bt/m})$ | 4 |
| Atwood system on incline | $a = \\frac{m_2 g - m_1 g(\\sin\\theta + \\mu_k\\cos\\theta)}{m_1+m_2}$ | 5 |`
    },
    {
      id: 'fri7-mcq1',
      type: 'mcq' as const,
      question: 'A box is pushed at constant velocity across a floor by a force $F$ at $20°$ below horizontal. If $\\mu_k = 0.3$ and $m = 10$ kg, what is $F$? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\approx 35.8$ N',
        '$30$ N',
        '$\\approx 28.2$ N',
        '$\\approx 40$ N'
      ],
      correctAnswer: 0,
      explanation: 'Constant velocity: $a = 0$. Horizontal: $F\\cos 20° = \\mu_k N$. Vertical: $N = mg + F\\sin 20°$. Substituting: $F\\cos 20° = 0.3(100 + F\\sin 20°) = 30 + 0.3F\\sin 20°$. $F(\\cos 20° - 0.3\\sin 20°) = 30$. $F(0.940 - 0.103) = 30$. $F = 30/0.837 \\approx 35.8$ N.'
    },
    {
      id: 'fri7-application1',
      type: 'text' as const,
      content: `## Application: Braking on a Hill

A car of mass $m$ is traveling at speed $v_0$ down a hill of angle $\\theta$. The brakes provide a constant friction force $F_b$.

**Equation of motion:**
$$ma = mg\\sin\\theta - F_b$$

**Stopping distance:**
$$d = \\frac{mv_0^2}{2(F_b - mg\\sin\\theta)}$$

This is valid only if $F_b > mg\\sin\\theta$ (brakes can actually slow the car).

### Critical Braking Condition

The minimum braking force to stop on a hill:
$$F_b > mg\\sin\\theta$$

If the tires provide braking through friction: $F_b = \\mu_k N = \\mu_k mg\\cos\\theta$

The car can stop only if:
$$\\mu_k mg\\cos\\theta > mg\\sin\\theta \\implies \\mu_k > \\tan\\theta$$

This is why steep icy hills ($\\mu_k$ small, $\\theta$ large) are so dangerous.

### With ABS (Maintaining Static Friction)

Modern ABS brakes prevent wheel lock, using $\\mu_s$ instead of $\\mu_k$:

$$d_{\\text{ABS}} = \\frac{v_0^2}{2g(\\mu_s\\cos\\theta - \\sin\\theta)}$$

Since $\\mu_s > \\mu_k$, ABS gives shorter stopping distances.`
    },
    {
      id: 'fri7-mcq2',
      type: 'mcq' as const,
      question: 'A car traveling 30 m/s brakes on a $10°$ downhill with $\\mu_k = 0.7$. Stopping distance? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\approx 87.3$ m',
        '$\\approx 64.3$ m',
        '$\\approx 52.1$ m',
        '$\\approx 85.5$ m'
      ],
      correctAnswer: 0,
      explanation: '$d = \\frac{v_0^2}{2g(\\mu_k\\cos\\theta - \\sin\\theta)} = \\frac{900}{20(0.689 - 0.174)} = \\frac{900}{10.31} \\approx 87.3$ m. Ignoring the slope gives 64.3 m, treating it as uphill gives 52.1 m, and using $N = mg$ gives 85.5 m.'
    },
    {
      id: 'fri7-application2',
      type: 'text' as const,
      content: `## Application: Drag on a Falling Object

A skydiver ($m = 80$ kg) falls with a drag force of magnitude $f = 0.25v^2$ (SI units).

**Terminal velocity** (net force zero):
$$mg = cv_T^2 \\implies v_T = \\sqrt{\\frac{mg}{c}} = \\sqrt{\\frac{800}{0.25}} = \\sqrt{3200} \\approx 56.6 \\text{ m/s}$$

**Acceleration at $v = 40$ m/s** (Newton's second law at that instant):
$$f = 0.25(40)^2 = 400 \\text{ N}, \\qquad a = \\frac{mg - f}{m} = \\frac{800 - 400}{80} = 5.0 \\text{ m/s}^2$$

As the speed rises toward $v_T$, the drag approaches the weight and the acceleration falls toward zero.`
    },
    {
      id: 'fri7-mcq3',
      type: 'mcq' as const,
      question: 'A projectile is launched horizontally with speed $v_0$ and experiences linear air resistance $f = bv$ in the horizontal direction only. Its horizontal position as a function of time is:',
      options: [
        '$x(t) = \\frac{mv_0}{b}(1 - e^{-bt/m})$',
        '$x(t) = v_0 t$',
        '$x(t) = v_0 t - \\frac{b}{2m}t^2$',
        '$x(t) = v_0 e^{-bt/m}$'
      ],
      correctAnswer: 0,
      explanation: 'Horizontal: $m\\dot{v}_x = -bv_x$ gives $v_x = v_0 e^{-bt/m}$. Integrating: $x = \\int_0^t v_0 e^{-bt\'/m}dt\' = \\frac{mv_0}{b}(1 - e^{-bt/m})$.'
    },
    {
      id: 'fri7-mcq4',
      type: 'mcq' as const,
      question: 'In the previous problem, as $t \\to \\infty$, the total horizontal distance the projectile travels is:',
      options: [
        '$mv_0/b$',
        '$\\infty$',
        '$v_0/b$',
        '$v_0 b/m$'
      ],
      correctAnswer: 0,
      explanation: 'As $t \\to \\infty$: $x \\to \\frac{mv_0}{b}(1 - 0) = \\frac{mv_0}{b}$. Despite the infinite time, the exponentially decaying velocity leads to a finite range.'
    },
    {
      id: 'fri7-mcq5',
      type: 'mcq' as const,
      question: 'A block on a $30°$ rough incline ($\\mu_k = 0.2$) is attached to a spring ($k = 100$ N/m) parallel to the incline. If the block (2 kg) is displaced 0.3 m down from equilibrium and released, what is its speed as it passes through equilibrium?',
      options: [
        '$\\approx 1.86$ m/s',
        '$\\approx 2.12$ m/s',
        '$\\approx 0.68$ m/s',
        '$\\approx 1.56$ m/s'
      ],
      correctAnswer: 0,
      explanation: 'Measured from the spring–gravity equilibrium, the spring and gravitational energies together act like $\\frac{1}{2}kx^2 = \\frac{1}{2}(100)(0.3)^2 = 4.5$ J. Friction removes $\\mu_k mg\\cos 30°(0.3) = 0.2(20)(0.866)(0.3) = 1.04$ J, so $\\frac{1}{2}(2)v^2 = 3.46$ J and $v \\approx 1.86$ m/s. Ignoring friction gives 2.12 m/s; adding a separate $mg\\sin\\theta(0.3)$ term counts gravity twice and gives 0.68 m/s.'
    },
    {
      id: 'fri7-completion',
      type: 'text' as const,
      content: `## 🎉 Topic Complete: Friction & Inclines

You've mastered the full AP Physics C treatment of friction and inclines:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Static vs kinetic friction | ✅ |
| 2 | Inclined planes (no friction) | ✅ |
| 3 | Inclined planes with friction | ✅ |
| 4 | Velocity-dependent friction (calculus) | ✅ |
| 5 | Systems on inclines | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Takeaway:** On the AP exam, friction problems test your ability to (1) set up correct FBDs, (2) handle the static/kinetic transition, and (3) solve differential equations for velocity-dependent forces.`
    }
  ]
};
