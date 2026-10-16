export const physCCircMotionPart2Data = {
  topicSlug: "circular-motion-physics-c",
  sections: [
    {
      id: 'cm2-intro',
      type: 'text' as const,
      content: `# Centripetal Acceleration Derivation

**Part 2 of 7 — Circular Motion**

On the AP Physics C exam, you may need to *derive* the centripetal acceleration formula from first principles. Let's build this up rigorously.

## Method 1: Calculus Derivation

Start with the position vector in Cartesian unit vectors:

$$\\vec{r}(t) = r\\cos(\\omega t)\\,\\hat{x} + r\\sin(\\omega t)\\,\\hat{y}$$

**First derivative (velocity):**

$$\\vec{v} = \\frac{d\\vec{r}}{dt} = -r\\omega\\sin(\\omega t)\\,\\hat{x} + r\\omega\\cos(\\omega t)\\,\\hat{y}$$

**Second derivative (acceleration):**

$$\\vec{a} = \\frac{d\\vec{v}}{dt} = -r\\omega^2\\cos(\\omega t)\\,\\hat{x} - r\\omega^2\\sin(\\omega t)\\,\\hat{y}$$

$$\\boxed{\\vec{a} = -\\omega^2\\vec{r}}$$

The magnitude: $|\\vec{a}| = \\omega^2 r$. Since $v = \\omega r$:

$$a_c = \\omega^2 r = \\frac{v^2}{r}$$

The minus sign in $\\vec{a} = -\\omega^2\\vec{r}$ shows the acceleration is **anti-parallel** to $\\vec{r}$ — it points toward the center.`
    },
    {
      id: 'cm2-mcq1',
      type: 'mcq' as const,
      question: 'For uniform circular motion, $\\vec{a} = -\\omega^2\\vec{r}$. What does the negative sign indicate?',
      options: [
        'The acceleration points opposite $\\vec{r}$, toward the center',
        'The object is slowing down as it goes around',
        'The angular velocity is decreasing over time',
        'The radius of the circle is slowly shrinking'
      ],
      correctAnswer: 0,
      explanation: '$\\vec{r}$ points from the center to the object. $-\\omega^2\\vec{r}$ points from the object toward the center. This is the centripetal ("center-seeking") direction.'
    },
    {
      id: 'cm2-geometric',
      type: 'text' as const,
      content: `## Method 2: Geometric/Limit Derivation

Consider an object moving at constant speed $v$ around a circle of radius $r$. In a small time $\\Delta t$, the velocity vector rotates by angle $\\Delta\\theta = \\omega\\Delta t$.

### Change in Velocity

The velocity vectors at times $t$ and $t + \\Delta t$ both have magnitude $v$ but differ in direction by $\\Delta\\theta$.

Using the isoceles triangle formed by $\\vec{v}(t)$, $\\vec{v}(t+\\Delta t)$, and $\\Delta\\vec{v}$:

$$|\\Delta\\vec{v}| = 2v\\sin\\left(\\frac{\\Delta\\theta}{2}\\right)$$

For small $\\Delta\\theta$: $\\sin(\\Delta\\theta/2) \\approx \\Delta\\theta/2$:

$$|\\Delta\\vec{v}| \\approx v\\Delta\\theta = v\\omega\\Delta t$$

### Average Acceleration

$$|\\vec{a}_{\\text{avg}}| = \\frac{|\\Delta\\vec{v}|}{\\Delta t} = v\\omega = \\frac{v^2}{r}$$

Taking the limit $\\Delta t \\to 0$ gives the instantaneous acceleration:

$$a_c = \\lim_{\\Delta t \\to 0} \\frac{|\\Delta\\vec{v}|}{\\Delta t} = v\\omega = \\frac{v^2}{r}$$

### Direction of $\\Delta\\vec{v}$

As $\\Delta t \\to 0$, the direction of $\\Delta\\vec{v}$ becomes perpendicular to $\\vec{v}$, which means it points **radially inward**. This completes the derivation.`
    },
    {
      id: 'cm2-mcq2',
      type: 'mcq' as const,
      question: 'In the geometric derivation, we use $\\Delta\\vec{v} \\approx v\\Delta\\theta$ for small $\\Delta\\theta$. This comes from:',
      options: [
        'The small-angle approximation $\\sin\\theta \\approx \\theta$',
        'The Pythagorean theorem applied to the $\\Delta\\vec{v}$ triangle',
        'The approximation $\\cos\\theta \\approx 1$ for small angles',
        'The law of cosines with $\\cos\\Delta\\theta = 0$'
      ],
      correctAnswer: 0,
      explanation: '$|\\Delta\\vec{v}| = 2v\\sin(\\Delta\\theta/2)$. For small angles, $\\sin(\\Delta\\theta/2) \\approx \\Delta\\theta/2$, giving $|\\Delta\\vec{v}| \\approx v\\Delta\\theta$.'
    },
    {
      id: 'cm2-polar',
      type: 'text' as const,
      content: `## Method 3: Period and Frequency Form

Problems often give the period $T$ (time per revolution) or frequency $f = 1/T$ instead of the speed. Since $v = 2\\pi r/T$:

$$a_c = \\frac{v^2}{r} = \\frac{(2\\pi r/T)^2}{r} = \\frac{4\\pi^2 r}{T^2} = 4\\pi^2 r f^2$$

### Worked Example

A point on a wheel of radius $0.20$ m makes $5.0$ revolutions per second.

$$a_c = 4\\pi^2 (0.20)(5.0)^2 = 4\\pi^2(5.0) \\approx 197 \\text{ m/s}^2$$

Check with speed: $v = 2\\pi(0.20)(5.0) = 6.28$ m/s, and $v^2/r = 39.5/0.20 \\approx 197$ m/s$^2$ ✓

At a fixed rotation rate, $a_c \\propto r$: points farther from the axle have larger centripetal acceleration.`
    },
    {
      id: 'cm2-mcq3',
      type: 'mcq' as const,
      question: 'A point on a wheel of radius $0.20$ m completes $5.0$ revolutions per second. Its centripetal acceleration is about:',
      options: [
        '$197$ $m/s^{2}$',
        '$39$ $m/s^{2}$',
        '$6.3$ $m/s^{2}$',
        '$987$ $m/s^{2}$'
      ],
      correctAnswer: 0,
      explanation: '$a_c = 4\\pi^2 r f^2 = 4\\pi^2(0.20)(25) \\approx 197$ $m/s^{2}$. Forgetting to square $f$ gives 39, and 6.3 is the speed in m/s, not an acceleration.'
    },
    {
      id: 'cm2-mcq4',
      type: 'mcq' as const,
      question: 'Which expression for centripetal acceleration is not equivalent to the others?',
      options: [
        '$v\\omega^2$',
        '$v^2/r$',
        '$\\omega^2 r$',
        '$4\\pi^2 r/T^2$'
      ],
      correctAnswer: 0,
      explanation: '$v^2/r = (\\omega r)^2/r = \\omega^2 r$. Also $4\\pi^2 r/T^2 = (2\\pi/T)^2 r = \\omega^2 r$. But $v\\omega^2 = \\omega^2(\\omega r) = \\omega^3 r$, which is not the same.'
    },
    {
      id: 'cm2-mcq5',
      type: 'mcq' as const,
      question: 'For an object in uniform circular motion, $\\vec{v} \\cdot \\vec{a}$ equals:',
      options: [
        '$0$, since they are perpendicular',
        '$va_c$, since both are nonzero',
        '$-va_c$, since $\\vec{a}$ points inward',
        '$v^3/r$, from $a_c = v^2/r$'
      ],
      correctAnswer: 0,
      explanation: 'In UCM, $\\vec{v}$ is tangential and $\\vec{a}$ is radial (centripetal). Since tangential $\\perp$ radial: $\\vec{v} \\cdot \\vec{a} = 0$. This also explains why speed is constant: $\\frac{d}{dt}(\\frac{1}{2}v^2) = \\vec{v}\\cdot\\vec{a} = 0$.'
    },
    {
      id: 'cm2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

Three equivalent derivations of $a_c = v^2/r$:

| Method | Key Step |
|:---:|:---:|
| Calculus | Differentiate $\\vec{r}(t)$ twice |
| Geometric | Small-angle limit of $\\Delta\\vec{v}$ triangle |
| Period form | $a_c = 4\\pi^2 r/T^2$ |

**Key Results:**
- $\\vec{a} = -\\omega^2 \\vec{r}$ (always points toward center)
- $\\vec{v} \\perp \\vec{a}$ in UCM (constant speed)
- $\\vec{v} \\cdot \\vec{a} = 0 \\implies |\\vec{v}|$ is constant

> **Next up:** Part 3 — Banked Curves, applying centripetal force analysis to tilted roadways.`
    }
  ]
};
