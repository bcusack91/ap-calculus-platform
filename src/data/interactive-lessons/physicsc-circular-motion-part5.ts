export const physCCircMotionPart5Data = {
  topicSlug: "circular-motion-physics-c",
  sections: [
    {
      id: 'cm5-intro',
      type: 'text' as const,
      content: `# Non-Uniform Circular Motion

**Part 5 of 7 — Circular Motion**

When an object moves in a circle with changing speed, it has both **centripetal** (radial) and **tangential** components of acceleration.

## Decomposing Acceleration

$$\\vec{a} = a_c\\hat{r} + a_t\\hat{\\theta}$$

| Component | Direction | Formula | Cause |
|:---:|:---:|:---:|:---:|
| Centripetal $a_c$ | Toward center | $v^2/r$ | Changes direction |
| Tangential $a_t$ | Along velocity | $dv/dt$ | Changes speed |

The total acceleration magnitude:

$$|\\vec{a}| = \\sqrt{a_c^2 + a_t^2} = \\sqrt{\\left(\\frac{v^2}{r}\\right)^2 + \\left(\\frac{dv}{dt}\\right)^2}$$

### Angular Quantities

| Linear | Angular | Relation |
|:---:|:---:|:---:|
| $s$ (arc length) | $\\theta$ (angle) | $s = r\\theta$ |
| $v$ (speed) | $\\omega$ (angular velocity) | $v = r\\omega$ |
| $a_t$ (tangential) | $\\alpha$ (angular acceleration) | $a_t = r\\alpha$ |

$$\\alpha = \\frac{d\\omega}{dt} = \\frac{d^2\\theta}{dt^2}$$`
    },
    {
      id: 'cm5-mcq1',
      type: 'mcq' as const,
      question: 'A car moves around a circular track of radius 50 m. At one instant, its speed is 20 m/s and it is accelerating at 3 $m/s^{2}$ tangentially. What is the magnitude of its total acceleration?',
      options: [
        '$\\sqrt{(v^2/r)^2 + a_t^2} = \\sqrt{64 + 9} \\approx 8.54$ $m/s^{2}$',
        '$v^2/r = 8$ $m/s^{2}$',
        '$3$ $m/s^{2}$',
        '$11$ $m/s^{2}$'
      ],
      correctAnswer: 0,
      explanation: '$a_c = v^2/r = 400/50 = 8$ $m/s^{2}$. $|\\vec{a}| = \\sqrt{8^2 + 3^2} = \\sqrt{73} \\approx 8.54$ $m/s^{2}$.'
    },
    {
      id: 'cm5-polar',
      type: 'text' as const,
      content: `## Full Polar Coordinate Analysis

Recall from Part 2, the general acceleration in polar coordinates:

$$\\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$$

For circular motion ($r$ = constant, $\\dot{r} = 0$, $\\ddot{r} = 0$):

$$\\vec{a} = -r\\omega^2\\hat{r} + r\\alpha\\hat{\\theta}$$

where $\\omega = \\dot{\\theta}$ and $\\alpha = \\ddot{\\theta}$.

### Example: Constant Angular Acceleration

A disk starts from rest and accelerates at $\\alpha = 2$ $rad/s^{2}$. At $t = 3$ s, a point at $r = 0.5$ m from the center has:

$$\\omega = \\alpha t = 6 \\text{ rad/s}$$
$$v = r\\omega = 3 \\text{ m/s}$$

$$a_c = r\\omega^2 = 0.5(36) = 18 \\text{ m/s}^2$$
$$a_t = r\\alpha = 0.5(2) = 1 \\text{ m/s}^2$$

$$|\\vec{a}| = \\sqrt{18^2 + 1^2} = \\sqrt{325} = 18.03 \\text{ m/s}^2$$

**Angle of net acceleration from radial direction:**
$$\\phi = \\arctan\\left(\\frac{a_t}{a_c}\\right) = \\arctan\\left(\\frac{1}{18}\\right) \\approx 3.2°$$

The acceleration is almost purely centripetal because $\\omega$ has built up substantially.`
    },
    {
      id: 'cm5-mcq2',
      type: 'mcq' as const,
      question: 'For a particle in circular motion with constant angular acceleration $\\alpha$, starting from rest, the ratio $a_t/a_c$ at time $t$ is:',
      options: [
        '$1/(\\alpha t^2)$, which decreases with time',
        '$\\alpha t$, which increases with time',
        'Constant',
        '$1/(\\alpha t)$'
      ],
      correctAnswer: 0,
      explanation: '$a_t = r\\alpha$ (constant). $a_c = r\\omega^2 = r(\\alpha t)^2 = r\\alpha^2 t^2$. So $a_t/a_c = r\\alpha/(r\\alpha^2 t^2) = 1/(\\alpha t^2)$. As time increases, the centripetal component dominates.'
    },
    {
      id: 'cm5-energy',
      type: 'text' as const,
      content: `## Energy and Work in Non-Uniform Circular Motion

The work-energy theorem applies component-by-component:

- **Centripetal force does no work** (perpendicular to displacement).
- **Tangential force does work:** $W_t = \\int F_t \\, ds = \\int F_t \\, r\\,d\\theta$

$$\\frac{dK}{dt} = \\vec{F} \\cdot \\vec{v} = F_t v$$

Since centripetal force $\\perp$ velocity, only the tangential component changes the kinetic energy.

### Power in Circular Motion

$$P = F_t v = F_t r\\omega = \\tau\\omega$$

where $\\tau = F_t r$ is the torque.

### Worked Example: Vertical Circle with Gravity

A ball on a string swings in a vertical circle. At angle $\\theta$ from the bottom:

**Tangential acceleration** (due to gravity):
$$a_t = -g\\sin\\theta$$

(negative because gravity decelerates the ball as it rises)

**Speed as a function of angle** (using energy conservation):
$$\\frac{1}{2}mv^2 = \\frac{1}{2}mv_0^2 - mgr(1 - \\cos\\theta)$$
$$v^2 = v_0^2 - 2gr(1 - \\cos\\theta)$$

**Centripetal acceleration at angle $\\theta$:**
$$a_c = \\frac{v^2}{r} = \\frac{v_0^2}{r} - 2g(1 - \\cos\\theta)$$

**Tension at angle $\\theta$:**
$$T = \\frac{mv^2}{r} + mg\\cos\\theta = \\frac{mv_0^2}{r} - 2mg(1-\\cos\\theta) + mg\\cos\\theta$$
$$T = \\frac{mv_0^2}{r} - mg(2 - 3\\cos\\theta)$$`
    },
    {
      id: 'cm5-mcq3',
      type: 'mcq' as const,
      question: 'In a vertical circle, the tangential acceleration at the top ($\\theta = 180°$) is:',
      options: [
        '$0$ (gravity is purely radial at the top)',
        '$g$ (tangential)',
        '$-g$ (tangential)',
        '$g\\sin(180°) = 0$'
      ],
      correctAnswer: 0,
      explanation: 'At the top, $\\theta = 180°$ (measured from bottom). $a_t = -g\\sin\\theta = -g\\sin(180°) = 0$. At the top, gravity points entirely toward the center (radially), with no tangential component.'
    },
    {
      id: 'cm5-mcq4',
      type: 'mcq' as const,
      question: 'For a ball on a string in a vertical circle, at what angle $\\theta$ from the bottom is the tangential acceleration maximum?',
      options: [
        '$\\theta = 90°$ (3 o\'clock position)',
        '$\\theta = 0°$ (bottom)',
        '$\\theta = 180°$ (top)',
        '$\\theta = 45°$'
      ],
      correctAnswer: 0,
      explanation: '$a_t = -g\\sin\\theta$. Maximum magnitude at $\\sin\\theta = 1$, i.e., $\\theta = 90°$, where gravity is entirely tangential.'
    },
    {
      id: 'cm5-mcq5',
      type: 'mcq' as const,
      question: 'The centripetal force acting on an object in non-uniform circular motion:',
      options: [
        'Does no work because it is always perpendicular to the velocity',
        'Does positive work when the object speeds up',
        'Does negative work when the object speeds up',
        'Does work proportional to $a_c \\cdot v$'
      ],
      correctAnswer: 0,
      explanation: 'The centripetal force always points toward the center while the velocity is tangential. Since they are perpendicular: $W = \\vec{F}_c \\cdot \\vec{v} = 0$. Only tangential forces change the kinetic energy.'
    },
    {
      id: 'cm5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Concept | Formula |
|:---:|:---:|
| Tangential acceleration | $a_t = r\\alpha = dv/dt$ |
| Centripetal acceleration | $a_c = v^2/r = r\\omega^2$ |
| Total acceleration | $|a| = \\sqrt{a_c^2 + a_t^2}$ |
| Only $F_t$ does work | $P = F_t v = \\tau\\omega$ |
| Vertical circle: $v^2(\\theta)$ | $v_0^2 - 2gr(1-\\cos\\theta)$ |

> **Next up:** Part 6 — Problem-Solving Workshop with challenging circular motion problems.`
    }
  ]
};
