export const physics1UniformCircularMotionPart4Data = {
  topicSlug: 'uniform-circular-motion',
  sections: [
    {
      id: 'uc4-intro',
      type: 'text' as const,
      content: `
# 📐 Describing Circular Motion with Vectors

**Part 4 of 7 — Uniform Circular Motion**

To fully describe circular motion, we need to track how the position, velocity, and acceleration vectors change over time. This vector description is essential for AP Physics problems involving circular motion in two dimensions.

**In this lesson you will learn:**
- Position vectors for circular motion
- Velocity and acceleration vector components
- How to decompose circular motion into x and y components
- The relationship between angular position and linear quantities
      `
    },
    {
      id: 'uc4-position-vector',
      type: 'text' as const,
      content: `
## Position Vector

For an object moving counterclockwise starting from the positive x-axis:

$$\\vec{r}(t) = r\\cos\\theta \\hat{x} + r\\sin\\theta \\hat{y}$$

where $\\theta = \\omega t$ and $\\omega = 2\\pi/T = 2\\pi f$ is the **angular velocity** (rad/s).

$$\\vec{r}(t) = r\\cos(\\omega t) \\hat{x} + r\\sin(\\omega t) \\hat{y}$$

## Velocity Vector

Taking the derivative:

$$\\vec{v}(t) = -r\\omega\\sin(\\omega t) \\hat{x} + r\\omega\\cos(\\omega t) \\hat{y}$$

The magnitude: $|\\vec{v}| = r\\omega = v$ ✓

## Acceleration Vector

Taking another derivative:

$$\\vec{a}(t) = -r\\omega^2\\cos(\\omega t) \\hat{x} - r\\omega^2\\sin(\\omega t) \\hat{y}$$

This can be rewritten as:

$$\\vec{a}(t) = -\\omega^2 \\vec{r}(t)$$

### Key Insight
$\\vec{a} = -\\omega^2 \\vec{r}$ means the acceleration is **opposite** to the position vector — it points **toward the center** (since $\\vec{r}$ points from center to object).

The magnitude: $|\\vec{a}| = r\\omega^2 = v^2/r$ ✓
      `
    },
    {
      id: 'uc4-angular-velocity',
      type: 'text' as const,
      content: `
## Angular Velocity ($\\omega$)

Angular velocity measures how fast the angle changes:

$$\\omega = \\frac{\\Delta\\theta}{\\Delta t} = \\frac{2\\pi}{T} = 2\\pi f$$

| Quantity | Symbol | Units | Relationship |
|----------|--------|-------|-------------|
| Angular velocity | $\\omega$ | rad/s | $\\omega = 2\\pi f = 2\\pi/T$ |
| Linear speed | $v$ | m/s | $v = r\\omega$ |
| Centripetal acceleration | $a_c$ | $m/s^{2}$ | $a_c = r\\omega^2 = v\\omega$ |

### Converting Between Linear and Angular

$$v = r\\omega \\quad \\quad a_c = r\\omega^2 = \\frac{v^2}{r}$$

### All Points on a Rigid Body

For a rotating solid object (like a wheel):
- All points have the **same $\\omega$** (same angular velocity)
- Points farther from center have **greater $v$** (since $v = r\\omega$)
- Points farther from center have **greater $a_c$** (since $a_c = r\\omega^2$)
      `
    },
    {
      id: 'uc4-quiz',
      type: 'multiple-choice' as const,
      content: `
**Vector Description Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The fact that $\\vec{a} = -\\omega^2 \\vec{r}$ tells us that acceleration:',
            options: [
              'Points in the same direction as the position vector',
              'Is perpendicular to the position vector',
              'Points opposite to the position vector (toward center)',
              'Has zero magnitude'
            ],
            correctAnswer: 2,
            explanation: 'The negative sign means $\\vec{a}$ is anti-parallel to $\\vec{r}$. Since $\\vec{r}$ points from center to object, $\\vec{a}$ points from object to center — centripetal!'
          },
          {
            question: 'A wheel rotates at $\\omega = 10$ rad/s. A point 0.3 m from the center has speed:',
            options: [
              '0.03 m/s',
              '3 m/s',
              '30 m/s',
              '33.3 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = r\\omega = 0.3 \\times 10 = 3$ m/s.'
          },
          {
            question: 'Two gears are meshed (same linear speed at contact). Gear A has radius $2r$ and gear B has radius $r$. The ratio $\\omega_B/\\omega_A$ is:',
            options: [
              '1/2',
              '1',
              '2',
              '4'
            ],
            correctAnswer: 2,
            explanation: 'Same linear speed at contact: $v_A = v_B$. $r_A \\omega_A = r_B \\omega_B$. $2r \\omega_A = r \\omega_B$. $\\omega_B/\\omega_A = 2$. The smaller gear spins twice as fast.'
          }
        ]
      }
    },
    {
      id: 'uc4-calculations',
      type: 'input-boxes' as const,
      content: `
**Angular Velocity Calculations** 🧮

1) A bicycle wheel has radius 0.35 m and rotates at 3 rev/s. What is the angular velocity $\\omega$ (in rad/s, round to 3 significant figures)?

2) A point on the rim of the wheel in problem 1 has what linear speed (in m/s, round to 3 significant figures)?

3) What is the centripetal acceleration of that point (in $m/s^{2}$, round to nearest whole number)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18.8', '6.6', '124'],
        hint1: '$\\omega = 2\\pi f = 2\\pi(3)$.',
        hint2: '$v = r\\omega$.',
        hint3: '$a_c = r\\omega^2$ or $v^2/r$.',
        explanation: '1) $\\omega = 2\\pi(3) = 6\\pi = 18.85 \\approx 18.8$ rad/s. 2) $v = 0.35 \\times 18.85 = 6.60 \\approx 6.6$ m/s. 3) $a_c = 0.35 \\times 18.85^2 = 0.35 \\times 355.3 = 124.4 \\approx 124$ $m/s^{2}$.'
      }
    },
    {
      id: 'uc4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rotational Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On a spinning disc, all points have the same:',
            options: ['Linear speed', 'Angular velocity', 'Centripetal acceleration', 'Linear displacement per revolution'],
            correctIndex: 1,
            explanation: 'A rigid body rotates as one piece — all points sweep the same angle in the same time, so $\\omega$ is the same everywhere.'
          },
          {
            label: 'If $\\omega$ doubles while $r$ stays the same, centripetal acceleration:',
            options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'],
            correctIndex: 1,
            explanation: '$a_c = r\\omega^2$. Doubling $\\omega$ gives $a_c = r(2\\omega)^2 = 4r\\omega^2$. It quadruples.'
          },
          {
            label: 'The units of angular velocity are:',
            options: ['degrees/s', 'rad/s', 'rev/s', 'All of these can express angular velocity, but rad/s is the SI unit'],
            correctIndex: 3,
            explanation: 'Angular velocity can be expressed in any angular unit per time, but the SI unit is rad/s. Using rad/s makes $v = r\\omega$ work directly.'
          }
        ]
      }
    },
    {
      id: 'uc4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Vectors in Circular Motion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'At time $t$, an object at position $\\vec{r} = r\\hat{x}$ (on the positive x-axis) moves counterclockwise. Its velocity is:',
            options: [
              '$v\\hat{x}$ (positive x-direction)',
              '$-v\\hat{x}$ (negative x-direction)',
              '$v\\hat{y}$ (positive y-direction)',
              '$-v\\hat{y}$ (negative y-direction)'
            ],
            correctAnswer: 2,
            explanation: 'For counterclockwise motion, when the object is on the positive x-axis, it moves upward — in the $+\\hat{y}$ direction. The velocity is tangent to the circle, perpendicular to the radius.'
          },
          {
            question: 'A flywheel spins at 600 RPM. Its angular velocity is:',
            options: [
              '$10\\pi$ rad/s',
              '$20\\pi$ rad/s',
              '$600\\pi$ rad/s',
              '$1200\\pi$ rad/s'
            ],
            correctAnswer: 1,
            explanation: '$f = 600/60 = 10$ rev/s. $\\omega = 2\\pi f = 2\\pi(10) = 20\\pi$ rad/s $\\approx 62.8$ rad/s.'
          }
        ]
      }
    }
  ]
}
