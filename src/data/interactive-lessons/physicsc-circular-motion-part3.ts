export const physCCircMotionPart3Data = {
  topicSlug: "circular-motion-physics-c",
  sections: [
    {
      id: 'cm3-intro',
      type: 'text' as const,
      content: `# Banked Curves

**Part 3 of 7 — Circular Motion**

Banked curves are inclined roadways designed so that the normal force provides some (or all) of the centripetal force needed for turning.

## Frictionless Banked Curve

For a car on a banked curve (angle $\\beta$) with no friction, the only forces are gravity and the normal force.

**Vertical equilibrium:**
$$N\\cos\\beta = mg$$

**Radial (horizontal, toward center):**
$$N\\sin\\beta = \\frac{mv^2}{r}$$

Dividing these equations:

$$\\tan\\beta = \\frac{v^2}{rg}$$

$$\\boxed{v_{\\text{design}} = \\sqrt{rg\\tan\\beta}}$$

This is the **design speed** — the one speed at which friction is unnecessary.

### Worked Example

A highway curve has $r = 200$ m and is banked at $\\beta = 15°$.

$$v_{\\text{design}} = \\sqrt{200(10)\\tan 15°} = \\sqrt{2000(0.268)} = \\sqrt{536} = 23.2 \\text{ m/s} \\approx 83 \\text{ km/h}$$`
    },
    {
      id: 'cm3-mcq1',
      type: 'mcq' as const,
      question: 'A frictionless banked curve has $r = 100$ m and $\\beta = 30°$. What speed allows a car to navigate without sliding? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\sqrt{1000\\tan 30°} \\approx 24.0$ m/s',
        '$\\sqrt{1000\\sin 30°} \\approx 22.4$ m/s',
        '$\\sqrt{1000\\cos 30°} \\approx 29.4$ m/s',
        '$\\sqrt{1000} \\approx 31.6$ m/s'
      ],
      correctAnswer: 0,
      explanation: '$v = \\sqrt{rg\\tan\\beta} = \\sqrt{100(10)\\tan 30°} = \\sqrt{1000 \\times 0.577} = \\sqrt{577} \\approx 24.0$ m/s.'
    },
    {
      id: 'cm3-friction',
      type: 'text' as const,
      content: `## Banked Curve with Friction

When the car's speed differs from the design speed, friction is needed.

### Case 1: $v > v_{\\text{design}}$ (Too Fast)

The car tends to slide **up** the bank. Friction acts **down** the incline (inward component helps centripetal force).

**Vertical:** $N\\cos\\beta - f\\sin\\beta = mg$

**Radial:** $N\\sin\\beta + f\\cos\\beta = mv^2/r$

With $f = \\mu_s N$ at the maximum speed:

$$v_{\\max} = \\sqrt{rg\\cdot\\frac{\\tan\\beta + \\mu_s}{1 - \\mu_s\\tan\\beta}}$$

### Case 2: $v < v_{\\text{design}}$ (Too Slow)

The car tends to slide **down** the bank. Friction acts **up** the incline.

$$v_{\\min} = \\sqrt{rg\\cdot\\frac{\\tan\\beta - \\mu_s}{1 + \\mu_s\\tan\\beta}}$$

If $\\mu_s > \\tan\\beta$, then $v_{\\min} = 0$ (friction is strong enough to hold the car stationary on the bank).

### Speed Range

$$v_{\\min} \\leq v \\leq v_{\\max}$$

This range widens with more friction and narrows to a single value ($v_{\\text{design}}$) as $\\mu_s \\to 0$.`
    },
    {
      id: 'cm3-mcq2',
      type: 'mcq' as const,
      question: 'A banked curve with $\\beta = 20°$, $r = 150$ m, $\\mu_s = 0.3$. What is $v_{\\max}$? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\sqrt{1500 \\cdot \\frac{\\tan 20° + 0.3}{1 - 0.3\\tan 20°}} \\approx 33.0$ m/s',
        '$\\sqrt{1500\\tan 20°} \\approx 23.4$ m/s',
        '$\\sqrt{1500 \\cdot 0.3} \\approx 21.2$ m/s',
        '$\\sqrt{1500(\\tan 20° + 0.3)} \\approx 28.3$ m/s'
      ],
      correctAnswer: 0,
      explanation: '$v_{\\max} = \\sqrt{rg \\cdot \\frac{\\tan\\beta + \\mu_s}{1 - \\mu_s\\tan\\beta}} = \\sqrt{1500 \\cdot \\frac{0.364 + 0.3}{1 - 0.109}} = \\sqrt{1500 \\cdot 0.745} \\approx 33.4$ m/s.'
    },
    {
      id: 'cm3-derivation',
      type: 'text' as const,
      content: `## Detailed Derivation: $v_{\\max}$

Let's carefully derive the maximum speed formula. Forces on the car when going too fast (friction points down the bank):

**Decompose forces along vertical and horizontal (centripetal):**

Normal force: magnitude $N$, tilted at angle $\\beta$ from vertical.
Friction: magnitude $f = \\mu_s N$, along the bank surface (perpendicular to $N$), pointing down and inward.

**Vertical equilibrium ($a_y = 0$):**
$$N\\cos\\beta - \\mu_s N\\sin\\beta = mg$$
$$N(\\cos\\beta - \\mu_s\\sin\\beta) = mg$$
$$N = \\frac{mg}{\\cos\\beta - \\mu_s\\sin\\beta}$$

**Horizontal (centripetal, $a_r = v^2/r$):**
$$N\\sin\\beta + \\mu_s N\\cos\\beta = \\frac{mv^2}{r}$$
$$N(\\sin\\beta + \\mu_s\\cos\\beta) = \\frac{mv^2}{r}$$

**Dividing:**
$$\\frac{v^2}{rg} = \\frac{\\sin\\beta + \\mu_s\\cos\\beta}{\\cos\\beta - \\mu_s\\sin\\beta}$$

Dividing numerator and denominator by $\\cos\\beta$:

$$\\frac{v^2}{rg} = \\frac{\\tan\\beta + \\mu_s}{1 - \\mu_s\\tan\\beta}$$

$$\\boxed{v_{\\max} = \\sqrt{rg\\cdot\\frac{\\tan\\beta + \\mu_s}{1 - \\mu_s\\tan\\beta}}}$$

> **Note:** The formula resembles the tangent addition formula: $\\tan(\\beta + \\phi) = \\frac{\\tan\\beta + \\tan\\phi}{1 - \\tan\\beta\\tan\\phi}$ where $\\tan\\phi = \\mu_s$. So $v_{\\max}^2 = rg\\tan(\\beta + \\phi)$ where $\\phi = \\arctan(\\mu_s)$.`
    },
    {
      id: 'cm3-mcq3',
      type: 'mcq' as const,
      question: 'On a frictionless banked curve, if a car goes faster than the design speed, it will:',
      options: [
        'Slide up the bank (outward)',
        'Slide down the bank (inward)',
        'Maintain its position on the bank',
        'Slow down naturally'
      ],
      correctAnswer: 0,
      explanation: 'At $v > v_{\\text{design}}$, the centripetal force needed ($mv^2/r$) exceeds what the normal force can provide. The car slides outward (up the bank), which is why friction must point down the bank to help.'
    },
    {
      id: 'cm3-mcq4',
      type: 'mcq' as const,
      question: 'The formula $v_{\\max}^2 = rg\\tan(\\beta + \\phi)$ where $\\phi = \\arctan(\\mu_s)$ shows that $v_{\\max}$ becomes infinite when:',
      options: [
        '$\\beta + \\phi = 90°$, i.e., $\\beta = 90° - \\arctan(\\mu_s)$',
        '$\\beta = 90°$',
        '$\\mu_s = 1$',
        '$\\beta + \\phi = 180°$'
      ],
      correctAnswer: 0,
      explanation: '$\\tan(90°) = \\infty$, so $v_{\\max} \\to \\infty$ when $\\beta + \\arctan(\\mu_s) = 90°$. Physically, at this angle the combined normal force and friction can provide unlimited centripetal force.'
    },
    {
      id: 'cm3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Concept | Formula |
|:---:|:---:|
| Design speed (no friction) | $v = \\sqrt{rg\\tan\\beta}$ |
| Max speed (with friction) | $v_{\\max} = \\sqrt{rg\\frac{\\tan\\beta + \\mu_s}{1 - \\mu_s\\tan\\beta}}$ |
| Min speed (with friction) | $v_{\\min} = \\sqrt{rg\\frac{\\tan\\beta - \\mu_s}{1 + \\mu_s\\tan\\beta}}$ |
| Compact form | $v^2 = rg\\tan(\\beta \\pm \\phi)$, $\\phi = \\arctan\\mu_s$ |

> **Next up:** Part 4 — Vertical Circles, where the centripetal force requirement changes with position.`
    }
  ]
};
