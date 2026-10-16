export const physics1UniformCircularMotionPart4Data = {
  topicSlug: 'uniform-circular-motion',
  sections: [
    {
      id: 'uc4-intro',
      type: 'text' as const,
      content: `
# 📐 Describing Circular Motion with Vectors

**Part 4 of 7 — Uniform Circular Motion**

To describe circular motion, track three arrows at every instant: the position (from the center to the object), the velocity, and the acceleration. AP Physics 1 questions ask you to draw or identify these directions and to connect angular and linear quantities.

**In this lesson you will learn:**
- The direction of the velocity and acceleration at any point on the circle
- How those directions change as the object goes around
- The relationship between angular velocity and linear speed
- How to compare points at different radii on a rotating object
      `
    },
    {
      id: 'uc4-position-vector',
      type: 'text' as const,
      content: `
## Three Arrows at Every Instant

For an object moving in a circle of radius $r$ at constant speed $v$:

| Arrow | Direction | Magnitude |
|-------|-----------|-----------|
| Position (center → object) | Outward along the radius | $r$ |
| Velocity | Tangent to the circle, perpendicular to the radius | $v$ (constant) |
| Acceleration | Inward along the radius, toward the center | $a_c = v^2/r$ (constant) |

The acceleration always points **opposite** the position arrow, toward the center, and it is always perpendicular to the velocity. Because it has no component along the velocity, it changes only the **direction** of motion, never the speed.

### Following the Arrows Around the Circle

Picture an object moving **counterclockwise**, with the circle's center at the origin:

| Position on circle | Velocity points | Acceleration points |
|--------------------|-----------------|---------------------|
| Rightmost point (+x axis) | Up (+y) | Left (−x), toward center |
| Top (+y axis) | Left (−x) | Down (−y), toward center |
| Leftmost point (−x axis) | Down (−y) | Right (+x), toward center |
| Bottom (−y axis) | Right (+x) | Up (+y), toward center |

The magnitudes never change, but the directions rotate with the object. That is why uniform circular motion is accelerated motion even though the speed is constant.

### If the String Breaks

The moment the inward force disappears, there is no more centripetal acceleration, so the object moves off in a straight line along the velocity it had at that instant: tangent to the circle, not outward along the radius.
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
            question: 'For an object in uniform circular motion, how does the acceleration compare with the position arrow drawn from the center to the object?',
            options: [
              'It points the same way, away from the center',
              'It is perpendicular to it, tangent to the circle',
              'Opposite to it, pointing inward toward the center',
              'There is none, because the speed is constant'
            ],
            correctAnswer: 2,
            explanation: 'Centripetal acceleration points from the object toward the center, which is opposite the position arrow from the center to the object. The tangent direction belongs to the velocity, and the acceleration is not zero because the direction of the velocity keeps changing.'
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
            options: ['Linear speed at every radius', 'Angular velocity', 'Centripetal acceleration', 'Linear displacement per revolution'],
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
            options: ['m/s', 'rad/s', 'rad/s²', 'N·m'],
            correctIndex: 1,
            explanation: 'Angular velocity is an angle per unit time with SI unit rad/s (degrees/s or rev/s also work); m/s is linear speed, rad/s² is angular acceleration, and N·m is torque. Using rad/s makes $v = r\\omega$ work directly.'
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
            question: 'An object moves counterclockwise around a circle centered at the origin. At the instant it crosses the positive x-axis, its velocity points:',
            options: [
              'In the +x direction (to the right)',
              'In the −x direction (to the left)',
              'In the +y direction (straight up)',
              'In the −y direction (straight down)'
            ],
            correctAnswer: 2,
            explanation: 'For counterclockwise motion, when the object is on the positive x-axis, it moves upward, in the +y direction. The velocity is tangent to the circle, perpendicular to the radius. The −x direction (toward the center) is the acceleration, not the velocity.'
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
