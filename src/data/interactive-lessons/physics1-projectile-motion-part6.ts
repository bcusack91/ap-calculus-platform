export const physics1ProjectileMotionPart6Data = {
  topicSlug: 'projectile-motion',
  sections: [
    {
      id: 'pm6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Projectile Motion**

This workshop takes you through **complete projectile motion problems** from start to finish. We'll practice both horizontal and angled launches, including problems from elevated positions.
      `
    },
    {
      id: 'pm6-method',
      type: 'text' as const,
      content: `
## The Complete Method

### Step 1: Identify the Launch Type
- Horizontal launch: $v_{0y} = 0$, $v_{0x} = v_0$
- Angled launch: $v_{0x} = v_0\\cos\\theta$, $v_{0y} = v_0\\sin\\theta$

### Step 2: Set Up Two DVAT Tables

| | Horizontal | Vertical |
|---|---|---|
| $\\Delta$ | $\\Delta x = ?$ | $\\Delta y = ?$ |
| $v_0$ | $v_{0x}$ | $v_{0y}$ |
| $a$ | $0$ | $-g$ |
| $t$ | $t$ | $t$ |

### Step 3: Solve Vertical First (Usually)
- Find time of flight from vertical equation
- Use time in horizontal equation for range

### Step 4: Find Final Velocities If Needed
- $v_x = v_{0x}$ (always)
- $v_y = v_{0y} - gt$
- $v = \\sqrt{v_x^2 + v_y^2}$
      `
    },
    {
      id: 'pm6-problem1',
      type: 'input-boxes' as const,
      content: `
**Problem 1 — Horizontal Launch from a Building** 🏢

A stone is thrown horizontally at 15 m/s from the roof of a 45 m tall building. Use $g = 10$ m/s².

1) Time to hit the ground (in seconds)

2) Horizontal distance from the building (in meters)

3) Final speed at impact (in m/s, round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '45', '34'],
        hint1: '$45 = \\frac{1}{2}(10)t^2 = 5t^2$',
        hint2: '$t = 3$ s. $\\Delta x = 15(3) = 45$ m. $v_y = 10(3) = 30$ m/s.',
        hint3: '$v = \\sqrt{15^2 + 30^2} = \\sqrt{225 + 900} = \\sqrt{1125}$',
        explanation: '1) $t = 3$ s. 2) $\\Delta x = 45$ m. 3) $v = \\sqrt{225 + 900} = \\sqrt{1125} \\approx 33.5 \\approx 34$ m/s.'
      }
    },
    {
      id: 'pm6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2 — Ground-to-Ground Angled Launch** ⚽

A soccer ball is kicked from ground level at 40 m/s at 53° above horizontal. Use $g = 10$ m/s², $\\cos 53° = 0.6$, $\\sin 53° = 0.8$.

1) Maximum height (in meters)

2) Total time of flight (in seconds)

3) Range (in meters)

4) Speed at maximum height (in m/s)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['51.2', '6.4', '153.6', '24'],
        hint1: '$v_{0y} = 40(0.8) = 32$ m/s. $h = v_{0y}^2/(2g) = 1024/20$',
        hint2: '$t = 2v_{0y}/g = 64/10$',
        hint3: '$v_{0x} = 40(0.6) = 24$ m/s. Range $= v_{0x} \\cdot t$. Speed at max height $= v_{0x}$.',
        explanation: '1) $h = 32^2/20 = 1024/20 = 51.2$ m. 2) $t = 2(32)/10 = 6.4$ s. 3) $R = 24(6.4) = 153.6$ m. 4) At max height, $v = v_{0x} = 24$ m/s.'
      }
    },
    {
      id: 'pm6-problem3',
      type: 'multiple-choice' as const,
      content: `
**Problem 3 — Conceptual Challenges** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A cannon fires a shell at 45° for maximum range $R$. To hit a target at $R/2$, it could fire at:',
            options: [
              '22.5° only',
              '15° or 75°',
              '30° or 60°',
              'Any angle less than 45°'
            ],
            correctAnswer: 1,
            explanation: '$R/2 = \\frac{v_0^2\\sin 2\\theta}{2g}$. We need $\\sin 2\\theta = 0.5$, so $2\\theta = 30°$ or $150°$, giving $\\theta = 15°$ or $75°$.'
          },
          {
            question: 'A ball launched from a 100 m cliff at 37° ($v_{0y} = 30$ m/s, $v_{0x} = 40$ m/s) takes longer to land than a ball launched at the same speed from flat ground because:',
            options: [
              'It has more horizontal velocity',
              'Gravity is weaker at higher altitudes',
              'It must fall an extra 100 m after returning to launch height',
              'The launch angle is different'
            ],
            correctAnswer: 2,
            explanation: 'After the symmetric part (returning to launch height), the ball must still fall the extra 100 m of the cliff, adding more time to the flight.'
          }
        ]
      }
    },
    {
      id: 'pm6-problem4',
      type: 'dropdown-select' as const,
      content: `
**Problem 4 — Quick Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ball is thrown at 20 m/s at 53° ($v_{0y} = 16$ m/s). At $t = 1$ s, $v_y$ is (use $g = 10$ m/s²):',
            options: ['16 m/s', '6 m/s', '0 m/s', '-4 m/s'],
            correctIndex: 1,
            explanation: '$v_y = v_{0y} - gt = 16 - 10(1) = 6$ m/s. Still moving upward.'
          },
          {
            label: 'At $t = 1.6$ s, $v_y$ is:',
            options: ['6 m/s', '1.6 m/s', '0 m/s', '-6 m/s'],
            correctIndex: 2,
            explanation: '$v_y = 16 - 10(1.6) = 16 - 16 = 0$ m/s. This is the maximum height!'
          },
          {
            label: 'At $t = 2.2$ s, $v_y$ is:',
            options: ['6 m/s', '0 m/s', '-6 m/s', '-22 m/s'],
            correctIndex: 2,
            explanation: '$v_y = 16 - 10(2.2) = 16 - 22 = -6$ m/s. Now falling — and by symmetry, this has the same magnitude as at $t = 1$ s.'
          }
        ]
      }
    },
    {
      id: 'pm6-problem5',
      type: 'input-boxes' as const,
      content: `
**Problem 5 — Cliff Drop** 🪂

A ball is thrown at 30 m/s horizontally from the top of a 125 m cliff. Use $g = 10$ m/s².

1) Time to hit the ground (in seconds)

2) Range (in meters)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['5', '150'],
        hint1: '$125 = \\frac{1}{2}(10)t^2 = 5t^2$',
        hint2: '$t^2 = 25$, $t = 5$ s. Range $= 30 \\times 5$',
        hint3: 'The horizontal velocity is constant at 30 m/s.',
        explanation: '1) $125 = 5t^2$, $t = 5$ s. 2) $R = 30(5) = 150$ m.'
      }
    },
    {
      id: 'pm6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is launched at 50 m/s at 37° ($\\cos 37° = 0.8$, $\\sin 37° = 0.6$). At $t = 3$ s (the max height), the speed is:',
            options: [
              '0 m/s',
              '30 m/s',
              '40 m/s',
              '50 m/s'
            ],
            correctAnswer: 2,
            explanation: 'At max height, $v_y = 0$, so $v = v_x = v_{0x} = 50\\cos 37° = 50(0.8) = 40$ m/s.'
          },
          {
            question: 'For the same launch, the ball\'s speed at $t = 6$ s (landing) is:',
            options: [
              '30 m/s',
              '40 m/s',
              '50 m/s',
              '60 m/s'
            ],
            correctAnswer: 2,
            explanation: 'By symmetry, the landing speed equals the launch speed: $v = v_0 = 50$ m/s.'
          }
        ]
      }
    }
  ]
}
