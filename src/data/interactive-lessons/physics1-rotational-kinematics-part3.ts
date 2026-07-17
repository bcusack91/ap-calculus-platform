export const physics1RotationalKinematicsPart3Data = {
  topicSlug: 'rotational-kinematics',
  sections: [
    {
      id: 'rk3-intro',
      type: 'text' as const,
      content: `
# 🔗 Connecting Linear and Angular

**Part 3 of 7 — $v = r\\omega$ and $a_t = r\\alpha$**

Points on a rotating object move in circles. Their linear (tangential) quantities are directly connected to the angular quantities through the radius.
      `
    },
    {
      id: 'rk3-tangential-velocity',
      type: 'text' as const,
      content: `
## Tangential Velocity

The **tangential velocity** of a point at distance $r$ from the rotation axis:

$$v = r\\omega$$

### Key Insights

- All points on a rigid body have the **same** $\\omega$
- Points farther from the axis move **faster** (larger $v$)
- The direction of $v$ is always **tangent** to the circular path

### Example

A merry-go-round rotates at $\\omega = 2$ rad/s. A child sits $3$ m from the center and another at $1.5$ m.

- Child at 3 m: $v = (3)(2) = 6$ m/s
- Child at 1.5 m: $v = (1.5)(2) = 3$ m/s

Both have the same $\\omega$ but different tangential speeds!
      `
    },
    {
      id: 'rk3-tangential-acceleration',
      type: 'text' as const,
      content: `
## Tangential Acceleration

The **tangential acceleration** (rate of change of speed along the circular path):

$$a_t = r\\alpha$$

### Centripetal Acceleration

Don't forget — circular motion also has **centripetal acceleration** directed toward the center:

$$a_c = \\frac{v^2}{r} = r\\omega^2$$

### Total Acceleration

The total acceleration is the vector sum of tangential and centripetal:

$$a_{\\text{total}} = \\sqrt{a_t^2 + a_c^2}$$

These components are always perpendicular, so we use the Pythagorean theorem.

| Component | Direction | Cause |
|-----------|-----------|-------|
| $a_t = r\\alpha$ | Tangent to path | Changing speed |
| $a_c = r\\omega^2$ | Toward center | Changing direction |
      `
    },
    {
      id: 'rk3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Linear-Angular Connection Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two points on a spinning disk — one at the rim and one halfway to the center — have:',
            options: [
              'The same tangential velocity',
              'The same angular velocity but different tangential velocities',
              'Different angular velocities but the same tangential velocity',
              'Different angular and tangential velocities'
            ],
            correctAnswer: 1,
            explanation: 'All points on a rigid body share the same $\\omega$. But $v = r\\omega$, so points farther from the center have larger tangential velocity.'
          },
          {
            question: 'A wheel of radius 0.4 m rotates at $10$ rad/s. The tangential speed of a point on the rim is:',
            options: [
              '2 m/s',
              '4 m/s',
              '25 m/s',
              '40 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = r\\omega = (0.4)(10) = 4$ m/s.'
          },
          {
            question: 'A disk rotates at constant angular velocity. The tangential acceleration of any point is:',
            options: [
              'Equal to $r\\omega^2$',
              'Equal to $r\\omega$',
              'Zero',
              'Equal to $v^2/r$'
            ],
            correctAnswer: 2,
            explanation: '$a_t = r\\alpha$. If $\\omega$ is constant, then $\\alpha = 0$, so $a_t = 0$. The centripetal acceleration ($r\\omega^2$) is nonzero but is not tangential.'
          }
        ]
      }
    },
    {
      id: 'rk3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Linear-Angular Calculations** 🧮

1) A wheel of radius 0.3 m rotates at 20 rad/s. What is the tangential speed of a point on the rim? (in m/s)

2) A disk accelerates at $\\alpha = 4$ $rad/s^{2}$. What is the tangential acceleration of a point 0.5 m from the center? $(in m/s^{2})$

3) A point on a spinning wheel has tangential velocity 12 m/s and is 0.6 m from the center. What is the centripetal acceleration? $(in m/s^{2})$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '2', '240'],
        hint1: '$v = r\\omega = (0.3)(20)$',
        hint2: '$a_t = r\\alpha = (0.5)(4)$',
        hint3: '$a_c = v^2/r = (12)^2/0.6$',
        explanation: '1) $v = (0.3)(20) = 6$ m/s. 2) $a_t = (0.5)(4) = 2$ $m/s^{2}$. 3) $a_c = 144/0.6 = 240$ $m/s^{2}$.'
      }
    },
    {
      id: 'rk3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Connection Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The equation relating tangential velocity to angular velocity is:',
            options: ['v = rω', 'v = ω/r', 'v = r/ω', 'v = rα'],
            correctIndex: 0,
            explanation: 'The tangential velocity is $v = r\\omega$. Farther from center → faster speed.'
          },
          {
            label: 'Centripetal acceleration points:',
            options: ['tangent to the path', 'toward the center', 'away from the center', 'along the radius'],
            correctIndex: 1,
            explanation: 'Centripetal acceleration always points toward the center of the circular path.'
          },
          {
            label: 'Tangential acceleration is responsible for:',
            options: ['changing speed', 'changing direction', 'both speed and direction', 'constant velocity'],
            correctIndex: 0,
            explanation: 'Tangential acceleration ($a_t = r\\alpha$) is responsible for changing the speed. Centripetal acceleration changes the direction.'
          }
        ]
      }
    },
    {
      id: 'rk3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Linear-Angular Relations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A bicycle wheel (radius 0.35 m) has $\\omega = 10$ rad/s and $\\alpha = 2$ $rad/s^{2}$. The total acceleration of a point on the rim is closest to:',
            options: [
              '0.7 $m/s^{2}$',
              '35 $m/s^{2}$',
              '35.01 $m/s^{2}$',
              '37 $m/s^{2}$'
            ],
            correctAnswer: 2,
            explanation: '$a_t = r\\alpha = (0.35)(2) = 0.7$ $m/s^{2}$. $a_c = r\\omega^2 = (0.35)(100) = 35$ $m/s^{2}$. $a = \\sqrt{0.7^2 + 35^2} = \\sqrt{0.49 + 1225} = \\sqrt{1225.49} \\approx 35.01$ $m/s^{2}$.'
          },
          {
            question: 'Two gears are meshed together. Gear A (radius 10 cm) drives Gear B (radius 20 cm). If Gear A rotates at 100 rad/s, Gear B rotates at:',
            options: [
              '50 rad/s',
              '100 rad/s',
              '200 rad/s',
              '400 rad/s'
            ],
            correctAnswer: 0,
            explanation: 'Meshed gears have the same tangential speed at the contact point: $r_A \\omega_A = r_B \\omega_B$. $\\omega_B = (10/20)(100) = 50$ rad/s.'
          }
        ]
      }
    }
  ]
}
