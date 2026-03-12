export const physics1ProjectileMotionPart7Data = {
  topicSlug: 'projectile-motion',
  sections: [
    {
      id: 'pm7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Projectile Motion**

This is the final lesson of the Projectile Motion unit. We'll review **everything** — horizontal launches, angled launches, time of flight, range, maximum height, and symmetry — with AP-level questions.
      `
    },
    {
      id: 'pm7-summary',
      type: 'text' as const,
      content: `
## Complete Projectile Motion Summary

### Setup
- $v_{0x} = v_0\\cos\\theta$, $v_{0y} = v_0\\sin\\theta$
- $a_x = 0$, $a_y = -g$

### Key Formulas (Ground-to-Ground)

| Quantity | Formula |
|----------|---------|
| Time of flight | $t = \\frac{2v_0\\sin\\theta}{g}$ |
| Maximum height | $h = \\frac{v_0^2\\sin^2\\theta}{2g}$ |
| Range | $R = \\frac{v_0^2\\sin 2\\theta}{g}$ |
| Max range angle | $\\theta = 45°$ |
| Max range | $R_{max} = \\frac{v_0^2}{g}$ |

### Symmetry (Ground-to-Ground Only)

- $t_{up} = t_{down}$
- Landing speed = launch speed
- Complementary angles give equal range
- Peak occurs at $t_{flight}/2$ and $R/2$
      `
    },
    {
      id: 'pm7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two balls are launched from the same point at the same speed: Ball A at 20° and Ball B at 70°. Which statement is correct?',
            options: [
              'Ball A has greater range',
              'Ball B has greater range',
              'They have equal range',
              'Ball A has greater max height'
            ],
            correctAnswer: 2,
            explanation: '20° and 70° are complementary angles ($20 + 70 = 90$). Complementary angles launched at the same speed produce equal range.'
          },
          {
            question: 'A projectile is at the top of its arc. Its velocity and acceleration are:',
            options: [
              'Both zero',
              'Velocity is zero, acceleration is $g$ down',
              'Velocity is horizontal, acceleration is $g$ down',
              'Velocity is horizontal, acceleration is zero'
            ],
            correctAnswer: 2,
            explanation: 'At the top: $v_y = 0$ but $v_x \\neq 0$, so velocity is horizontal. Acceleration is always $g$ downward throughout the flight.'
          },
          {
            question: 'A ball rolls off a table at 3 m/s. A second ball is simultaneously dropped from the same height. Ignoring air resistance:',
            options: [
              'The rolled ball hits the ground first',
              'The dropped ball hits the ground first',
              'They hit the ground at the same time',
              'The rolled ball hits later because it travels farther'
            ],
            correctAnswer: 2,
            explanation: 'Both have $v_{0y} = 0$ and fall the same height. Horizontal velocity doesn\'t affect the vertical fall time — independence of motion!'
          }
        ]
      }
    },
    {
      id: 'pm7-calculations1',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Problem 1** 🧮

A projectile is launched from ground level at 100 m/s at 53° above horizontal. Use $g = 10$ m/s², $\\cos 53° = 0.6$, $\\sin 53° = 0.8$.

1) $v_{0x}$ (in m/s)

2) $v_{0y}$ (in m/s)

3) Time of flight (in seconds)

4) Maximum height (in meters)

5) Range (in meters)
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['60', '80', '16', '320', '960'],
        hint1: '$v_{0x} = 100(0.6)$, $v_{0y} = 100(0.8)$',
        hint2: '$t = 2v_{0y}/g = 2(80)/10$. $h = v_{0y}^2/(2g) = 6400/20$',
        hint3: 'Range $= v_{0x} \\cdot t = 60(16)$',
        explanation: '1) $v_{0x} = 60$ m/s. 2) $v_{0y} = 80$ m/s. 3) $t = 160/10 = 16$ s. 4) $h = 6400/20 = 320$ m. 5) $R = 60(16) = 960$ m.'
      }
    },
    {
      id: 'pm7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Mastery** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Doubling the launch speed while keeping the angle the same multiplies the range by:',
            options: ['2', '4', '8', '16'],
            correctIndex: 1,
            explanation: '$R \\propto v_0^2$. Doubling $v_0$: $R\' = (2v_0)^2 \\sin 2\\theta / g = 4R$.'
          },
          {
            label: 'Doubling the launch speed multiplies the maximum height by:',
            options: ['2', '4', '8', '16'],
            correctIndex: 1,
            explanation: '$h \\propto v_0^2\\sin^2\\theta$. Doubling $v_0$: $h\' = (2v_0)^2\\sin^2\\theta/(2g) = 4h$.'
          },
          {
            label: 'Doubling the launch speed multiplies the time of flight by:',
            options: ['2', '4', '8', '$\\sqrt{2}$'],
            correctIndex: 0,
            explanation: '$t \\propto v_0\\sin\\theta$. Doubling $v_0$: $t\' = 2v_0\\sin\\theta/g = 2t$. Time scales linearly.'
          }
        ]
      }
    },
    {
      id: 'pm7-ap-mc2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A monkey hangs from a tree branch. A hunter aims directly at the monkey and fires. The monkey sees the flash and drops at the instant the bullet is fired. What happens?',
            options: [
              'The bullet passes above the monkey',
              'The bullet passes below the monkey',
              'The bullet hits the monkey',
              'It depends on the distance'
            ],
            correctAnswer: 2,
            explanation: 'Both the bullet and monkey experience the same gravitational acceleration. The bullet falls below its straight-line path by the same amount the monkey falls. They meet! This is the famous "monkey and hunter" problem demonstrating independence of motion.'
          },
          {
            question: 'On the Moon ($g_{Moon} = 1.6$ m/s²), a ball launched at the same speed and angle as on Earth ($g = 10$ m/s²) would have a range that is:',
            options: [
              '1.6 times Earth\'s range',
              '6.25 times Earth\'s range',
              'Equal to Earth\'s range',
              '10 times Earth\'s range'
            ],
            correctAnswer: 1,
            explanation: '$R = v_0^2\\sin 2\\theta / g$. $R_{Moon}/R_{Earth} = g_{Earth}/g_{Moon} = 10/1.6 = 6.25$. Less gravity means much greater range!'
          }
        ]
      }
    },
    {
      id: 'pm7-frq',
      type: 'input-boxes' as const,
      content: `
**AP Free-Response Style** 📝

A stunt driver launches a car horizontally off a 20 m high ramp at 25 m/s, aiming to clear a 50 m wide canyon. Use $g = 10$ m/s².

1) Time to fall 20 m (in seconds)

2) Horizontal distance traveled in that time (in meters)

3) Does the car clear the canyon? (enter yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '50', 'yes'],
        hint1: '$20 = \\frac{1}{2}(10)t^2 = 5t^2$',
        hint2: '$t = 2$ s. $\\Delta x = 25(2)$',
        hint3: 'Compare $\\Delta x$ with 50 m.',
        explanation: '1) $t = 2$ s. 2) $\\Delta x = 25(2) = 50$ m. 3) The car travels exactly 50 m — it just barely clears the canyon! (In reality, you\'d want a safety margin.)'
      }
    },
    {
      id: 'pm7-final',
      type: 'multiple-choice' as const,
      content: `
**Final Assessment** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A football is kicked at 20 m/s at 45° from ground level. Using $g = 10$ m/s² and $\\sin 90° = 1$, the range is:',
            options: [
              '20 m',
              '40 m',
              '80 m',
              '200 m'
            ],
            correctAnswer: 1,
            explanation: '$R = \\frac{v_0^2\\sin 2\\theta}{g} = \\frac{400 \\cdot \\sin 90°}{10} = \\frac{400}{10} = 40$ m.'
          },
          {
            question: 'A projectile launched at 60 m/s at 37° ($\\sin 37° = 0.6$) has a max height of (use $g = 10$ m/s²):',
            options: [
              '32.4 m',
              '64.8 m',
              '108 m',
              '180 m'
            ],
            correctAnswer: 1,
            explanation: '$v_{0y} = 60(0.6) = 36$ m/s. $h = \\frac{36^2}{2(10)} = \\frac{1296}{20} = 64.8$ m.'
          },
          {
            question: 'The total kinetic energy of a projectile at the peak compared to the launch is:',
            options: [
              'Zero',
              'Less than at launch',
              'Equal to launch',
              'Greater than at launch'
            ],
            correctAnswer: 1,
            explanation: 'At the peak, $v_y = 0$ but $v_x$ remains. Speed at peak ($v_{0x}$) is less than launch speed ($v_0$), so KE is less (but not zero!).'
          }
        ]
      }
    }
  ]
}
