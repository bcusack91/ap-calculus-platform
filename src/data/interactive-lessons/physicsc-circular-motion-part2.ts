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

Start with position in polar-like Cartesian form:

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
        'The acceleration points opposite to the position vector (toward the center)',
        'The object is decelerating',
        'The angular velocity is decreasing',
        'The radius is shrinking'
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
        'The Pythagorean theorem',
        'Taylor expansion of $\\cos\\theta$',
        'The law of cosines'
      ],
      correctAnswer: 0,
      explanation: '$|\\Delta\\vec{v}| = 2v\\sin(\\Delta\\theta/2)$. For small angles, $\\sin(\\Delta\\theta/2) \\approx \\Delta\\theta/2$, giving $|\\Delta\\vec{v}| \\approx v\\Delta\\theta$.'
    },
    {
      id: 'cm2-polar',
      type: 'text' as const,
      content: `## Method 3: Polar Coordinates (Advanced)

In polar coordinates, the unit vectors $\\hat{r}$ and $\\hat{\\theta}$ rotate with the object:

$$\\hat{r} = \\cos\\theta\\,\\hat{x} + \\sin\\theta\\,\\hat{y}$$
$$\\hat{\\theta} = -\\sin\\theta\\,\\hat{x} + \\cos\\theta\\,\\hat{y}$$

Key derivatives:
$$\\frac{d\\hat{r}}{dt} = \\dot{\\theta}\\hat{\\theta} = \\omega\\hat{\\theta}$$
$$\\frac{d\\hat{\\theta}}{dt} = -\\dot{\\theta}\\hat{r} = -\\omega\\hat{r}$$

### General Acceleration in Polar Coordinates

$$\\vec{r} = r\\hat{r}$$
$$\\vec{v} = \\dot{r}\\hat{r} + r\\dot{\\theta}\\hat{\\theta}$$
$$\\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$$

For **uniform** circular motion: $\\dot{r} = 0$, $\\ddot{r} = 0$, $\\dot{\\theta} = \\omega$ (constant), $\\ddot{\\theta} = 0$:

$$\\vec{a} = -r\\omega^2\\hat{r}$$

This is purely radial (centripetal), confirming $a_c = r\\omega^2 = v^2/r$.

### Why This Matters

The full polar coordinate acceleration formula is essential for non-uniform circular motion and orbital mechanics (Part 5 and beyond). The terms have physical meaning:

| Term | Name | Direction |
|:---:|:---:|:---:|
| $\\ddot{r} - r\\dot{\\theta}^2$ | Radial acceleration | $\\hat{r}$ |
| $-r\\dot{\\theta}^2$ | Centripetal acceleration | $-\\hat{r}$ |
| $r\\ddot{\\theta}$ | Tangential (angular) acceleration | $\\hat{\\theta}$ |
| $2\\dot{r}\\dot{\\theta}$ | Coriolis term | $\\hat{\\theta}$ |`
    },
    {
      id: 'cm2-mcq3',
      type: 'mcq' as const,
      question: 'In polar coordinates, the velocity of an object in uniform circular motion is:',
      options: [
        '$\\vec{v} = r\\omega\\hat{\\theta}$ (purely tangential)',
        '$\\vec{v} = r\\omega\\hat{r}$ (purely radial)',
        '$\\vec{v} = r\\omega(\\hat{r} + \\hat{\\theta})$',
        '$\\vec{v} = \\omega\\hat{\\theta}$'
      ],
      correctAnswer: 0,
      explanation: 'For uniform circular motion, $\\dot{r} = 0$ so $\\vec{v} = r\\dot{\\theta}\\hat{\\theta} = r\\omega\\hat{\\theta}$. The velocity is entirely in the tangential direction.'
    },
    {
      id: 'cm2-mcq4',
      type: 'mcq' as const,
      question: 'Which expression for centripetal acceleration is NOT equivalent to the others?',
      options: [
        '$v\\omega^2$',
        '$v^2/r$',
        '$\\omega^2 r$',
        '$4\\pi^2 r/T^2$'
      ],
      correctAnswer: 0,
      explanation: '$v^2/r = (\\omega r)^2/r = \\omega^2 r$. Also $4\\pi^2 r/T^2 = (2\\pi/T)^2 r = \\omega^2 r$. But $v\\omega^2 = \\omega^2(\\omega r) = \\omega^3 r$, which is NOT the same.'
    },
    {
      id: 'cm2-mcq5',
      type: 'mcq' as const,
      question: 'For an object in uniform circular motion, $\\vec{v} \\cdot \\vec{a}$ equals:',
      options: [
        '$0$ (they are perpendicular)',
        '$v \\cdot a_c$',
        '$-va_c$',
        '$v^3/r$'
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
| Polar coordinates | Use rotating unit vectors $\\hat{r}$, $\\hat{\\theta}$ |

**Key Results:**
- $\\vec{a} = -\\omega^2 \\vec{r}$ (always points toward center)
- $\\vec{v} \\perp \\vec{a}$ in UCM (constant speed)
- $\\vec{v} \\cdot \\vec{a} = 0 \\implies |\\vec{v}|$ is constant

> **Next up:** Part 3 — Banked Curves, applying centripetal force analysis to tilted roadways.`
    }
  ]
};
