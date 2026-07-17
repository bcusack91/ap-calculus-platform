export const physCCircMotionPart1Data = {
  topicSlug: "circular-motion-physics-c",
  sections: [
    {
      id: 'cm1-intro',
      type: 'text' as const,
      content: `# Uniform Circular Motion

**Part 1 of 7 — Circular Motion**

An object moving in a circle at constant speed is undergoing **uniform circular motion**. Despite constant speed, the object is accelerating because the *direction* of velocity is always changing.

## Kinematics of Circular Motion

| Quantity | Symbol | Formula |
|:---:|:---:|:---:|
| Period | $T$ | Time for one revolution |
| Frequency | $f$ | $f = 1/T$ |
| Angular velocity | $\\omega$ | $\\omega = 2\\pi f = 2\\pi/T$ |
| Speed | $v$ | $v = \\omega r$ |
| Arc length | $s$ | $s = r\\theta$ |

### Position Vector

For circular motion of radius $r$ in the $xy$-plane:

$$\\vec{r}(t) = r\\cos(\\omega t)\\,\\hat{x} + r\\sin(\\omega t)\\,\\hat{y}$$

### Velocity Vector

$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = -r\\omega\\sin(\\omega t)\\,\\hat{x} + r\\omega\\cos(\\omega t)\\,\\hat{y}$$

The magnitude: $|\\vec{v}| = r\\omega = v$ (constant). The direction is **tangent** to the circle — perpendicular to $\\vec{r}$ at every instant.`
    },
    {
      id: 'cm1-mcq1',
      type: 'mcq' as const,
      question: 'An object moves in a circle of radius 2 m with period $T = 4$ s. What is its speed?',
      options: [
        '$\\pi$ m/s',
        '$2\\pi$ m/s',
        '$4\\pi$ m/s',
        '$0.5\\pi$ m/s'
      ],
      correctAnswer: 0,
      explanation: '$v = 2\\pi r/T = 2\\pi(2)/4 = \\pi$ m/s $\\approx 3.14$ m/s.'
    },
    {
      id: 'cm1-acceleration',
      type: 'text' as const,
      content: `## Centripetal Acceleration

Differentiating velocity:

$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = -r\\omega^2\\cos(\\omega t)\\,\\hat{x} - r\\omega^2\\sin(\\omega t)\\,\\hat{y}$$

$$\\vec{a}(t) = -\\omega^2\\vec{r}(t)$$

This acceleration points **radially inward** (toward the center) and has magnitude:

$$a_c = \\omega^2 r = \\frac{v^2}{r}$$

### Important: Centripetal Force is NOT a New Force

Centripetal acceleration is *caused by* a real force (or combination of forces) directed toward the center. Common sources:

| Situation | Centripetal Force |
|:---:|:---:|
| Ball on a string | Tension |
| Car on a curve | Static friction |
| Planet orbiting | Gravity |
| Electron in B-field | Magnetic force |
| Banked curve (no friction) | Normal force component |

Newton's second law in the radial direction:

$$\\sum F_r = ma_c = m\\frac{v^2}{r} = m\\omega^2 r$$

> **AP Tip:** Never list "centripetal force" as a force on a free body diagram. It's a *net force requirement*, not a separate force.`
    },
    {
      id: 'cm1-mcq2',
      type: 'mcq' as const,
      question: 'A 0.5 kg ball on a 1.2 m string moves in a horizontal circle at 3 m/s. What is the tension in the string?',
      options: [
        '$3.75$ N',
        '$7.5$ N',
        '$1.25$ N',
        '$4.5$ N'
      ],
      correctAnswer: 0,
      explanation: 'Tension provides centripetal force: $T = mv^2/r = 0.5(9)/1.2 = 3.75$ N.'
    },
    {
      id: 'cm1-applications',
      type: 'text' as const,
      content: `## Flat Curve: Car on a Turn

For a car of mass $m$ on a flat circular turn of radius $r$:

The **static friction** provides the centripetal force:

$$f_s = m\\frac{v^2}{r} \\leq \\mu_s mg$$

Maximum speed before skidding:

$$v_{\\max} = \\sqrt{\\mu_s g r}$$

### Worked Example

A car takes a flat turn of radius 50 m. If $\\mu_s = 0.8$ and $g = 10$ $m/s^{2}$:

$$v_{\\max} = \\sqrt{0.8 \\times 10 \\times 50} = \\sqrt{400} = 20 \\text{ m/s} = 72 \\text{ km/h}$$

### Conical Pendulum

A mass $m$ swings in a horizontal circle on a string of length $L$ at angle $\\theta$ from the vertical:

**Vertical equilibrium:**
$$T\\cos\\theta = mg$$

**Radial (centripetal):**
$$T\\sin\\theta = m\\omega^2 r = m\\omega^2 L\\sin\\theta$$

Dividing: $\\tan\\theta = \\omega^2 r / g = \\omega^2 L\\sin\\theta / g$

$$\\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}$$

$$T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$$

Notice: the period depends on the angle $\\theta$ and string length $L$, but **not** on the mass.`
    },
    {
      id: 'cm1-mcq3',
      type: 'mcq' as const,
      question: 'A conical pendulum with $L = 1$ m makes angle $\\theta = 30°$ with the vertical. What is the speed of the mass? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\sqrt{gL\\sin^2\\theta/\\cos\\theta} \\approx 1.88$ m/s',
        '$\\sqrt{gL\\sin\\theta} \\approx 2.24$ m/s',
        '$\\sqrt{gL} \\approx 3.16$ m/s',
        '$\\sqrt{gL\\tan\\theta} \\approx 2.40$ m/s'
      ],
      correctAnswer: 3,
      explanation: 'From $\\tan\\theta = v^2/(gr)$ and $r = L\\sin\\theta$: $v^2 = gL\\sin\\theta\\tan\\theta$. So $v = \\sqrt{10(1)(0.5)(0.577)} = \\sqrt{2.89} \\approx 1.7$ m/s. Or more directly: $v^2 = grtan\\theta = g L\\sin\\theta\\tan\\theta$.'
    },
    {
      id: 'cm1-mcq4',
      type: 'mcq' as const,
      question: 'If you double the speed of a car on a flat curve while keeping the same radius, the required friction force:',
      options: [
        'Quadruples',
        'Doubles',
        'Stays the same',
        'Increases by $\\sqrt{2}$'
      ],
      correctAnswer: 0,
      explanation: '$f = mv^2/r$. If $v \\to 2v$: $f \\to m(2v)^2/r = 4mv^2/r$. The centripetal force scales as $v^2$.'
    },
    {
      id: 'cm1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Concept | Formula |
|:---:|:---:|
| Speed | $v = \\omega r = 2\\pi r/T$ |
| Centripetal acceleration | $a_c = v^2/r = \\omega^2 r$ |
| Centripetal force | $F_c = mv^2/r$ |
| Max speed (flat curve) | $v_{\\max} = \\sqrt{\\mu_s g r}$ |
| Position vector | $\\vec{r}(t) = r\\cos(\\omega t)\\hat{x} + r\\sin(\\omega t)\\hat{y}$ |

> **Next up:** Part 2 — Centripetal Acceleration Derivation, proving $a_c = v^2/r$ rigorously using calculus.`
    }
  ]
};
