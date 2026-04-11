export const precalcParametricPart4Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🎯 Projectile Motion & Applications

**Part 4 of 7**

### Projectile Motion Equations

An object launched at angle $\\alpha$ with initial speed $v_0$ from height $h_0$:

$$x = (v_0\\cos\\alpha)\\,t, \\quad y = h_0 + (v_0\\sin\\alpha)\\,t - \\frac{1}{2}gt^2$$

where $g \\approx 9.8$ m/s² or $32$ ft/s².

### Key Quantities

| Quantity | Formula |
|:---------|:--------|
| Time of flight | Solve $y = 0$ (quadratic in $t$) |
| Maximum height | At $t = \\frac{v_0\\sin\\alpha}{g}$ (when $\\frac{dy}{dt} = 0$) |
| Range | $x$ at landing time |
| Maximum range | At $\\alpha = 45°$ (on level ground) |
      `
    },
    {
      id: 'p4-example',
      type: 'text' as const,
      content: `
## 📝 Example: Baseball Problem

A ball is hit at $v_0 = 128$ ft/s at angle $\\alpha = 30°$ from $h_0 = 3$ ft.

$$x = 128\\cos 30°\\,t = 64\\sqrt{3}\\,t$$
$$y = 3 + 128\\sin 30°\\,t - 16t^2 = 3 + 64t - 16t^2$$

**Maximum height**: $\\frac{dy}{dt} = 64 - 32t = 0 \\implies t = 2$ s

$y_{\\max} = 3 + 64(2) - 16(4) = 3 + 128 - 64 = 67$ ft

**Time of flight**: $3 + 64t - 16t^2 = 0 \\implies 16t^2 - 64t - 3 = 0$

$t = \\frac{64 + \\sqrt{4096 + 192}}{32} = \\frac{64 + \\sqrt{4288}}{32} \\approx 4.05$ s

**Range**: $x \\approx 64\\sqrt{3}(4.05) \\approx 449$ ft

> ⚾ That is a home run in most ballparks!
      `
    },
    {
      id: 'p4-other',
      type: 'text' as const,
      content: `
## 🔧 Other Applications of Parametric Equations

### Particle on a Ferris Wheel

Center at $(0, h)$, radius $R$, angular speed $\\omega$:

$$x = R\\cos(\\omega t), \\quad y = h + R\\sin(\\omega t)$$

### Spirograph (Epitrochoid)

$$x = (R+r)\\cos t - d\\cos\\left(\\frac{R+r}{r}t\\right)$$
$$y = (R+r)\\sin t - d\\sin\\left(\\frac{R+r}{r}t\\right)$$

### Lissajous Figures

$$x = A\\sin(at + \\delta), \\quad y = B\\sin(bt)$$

The shape depends on the frequency ratio $a:b$ and phase shift $\\delta$.
- $a = b, \\delta = 0$: line
- $a = b, \\delta = \\frac{\\pi}{2}$: ellipse
- $a = 2, b = 1$: figure-eight shapes
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Applications Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For maximum range on level ground ($h_0 = 0$), the launch angle should be:',
            options: ['$30°$', '$45°$', '$60°$', '$90°$'],
            correctAnswer: 1,
            explanation: 'Range $= \\frac{v_0^2\\sin(2\\alpha)}{g}$, maximized when $\\sin(2\\alpha) = 1$, i.e., $\\alpha = 45°$.'
          },
          {
            question: 'A projectile launched at $60°$ and one at $30°$ (same $v_0$, level ground) have:',
            options: ['Same range, same max height', 'Same range, different max heights', 'Different range, same max height', 'Both different'],
            correctAnswer: 1,
            explanation: '$\\sin(2 \\cdot 60°) = \\sin(120°) = \\sin(60°) = \\sin(2 \\cdot 30°)$. Same range, but $60°$ goes higher.'
          },
          {
            question: 'At the highest point of a projectile\'s path:',
            options: ['Both $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$ are zero', 'Only $\\frac{dy}{dt} = 0$', 'Only $\\frac{dx}{dt} = 0$', 'Speed is maximum'],
            correctAnswer: 1,
            explanation: '$\\frac{dy}{dt} = 0$ (vertical velocity = 0), but $\\frac{dx}{dt} = v_0\\cos\\alpha \\neq 0$ (horizontal velocity is constant).'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Projectile Calculations** 🧮

A ball is launched at $v_0 = 80$ ft/s at $\\alpha = 45°$ from ground level ($h_0 = 0$, $g = 32$ ft/s²).

**1)** The horizontal component of velocity $v_0\\cos 45°$ = ? (Enter like "40sqrt2")

**2)** Time to reach max height = $\\frac{v_0\\sin\\alpha}{g}$ = ? (Enter as a fraction like "5/2")

**3)** Maximum height = $\\frac{(v_0\\sin\\alpha)^2}{2g}$ = ? (whole number in ft)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40sqrt2', '5sqrt2/4', '50'],
        hint1: '$80\\cos 45° = 80 \\cdot \\frac{\\sqrt{2}}{2} = 40\\sqrt{2}$.',
        hint2: '$\\frac{80\\sin 45°}{32} = \\frac{40\\sqrt{2}}{32} = \\frac{5\\sqrt{2}}{4}$.',
        hint3: '$\\frac{(40\\sqrt{2})^2}{64} = \\frac{3200}{64} = 50$ ft.',
        explanation: '1) $v_x = 40\\sqrt{2}$ ft/s. 2) $t = \\frac{5\\sqrt{2}}{4}$ s. 3) $h_{\\max} = 50$ ft.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Projectile Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The path of a projectile (ignoring air resistance) is a:',
            options: ['Circle', 'Parabola', 'Ellipse', 'Hyperbola'],
            correctAnswer: 1
          },
          {
            label: 'Horizontal velocity in projectile motion is:',
            options: ['Constant', 'Increasing', 'Decreasing', 'Zero at apex'],
            correctAnswer: 0
          },
          {
            label: 'For $x = A\\sin t, y = B\\sin(2t)$, the Lissajous figure looks like:',
            options: ['A circle', 'An ellipse', 'A figure-eight', 'A line'],
            correctAnswer: 2
          },
          {
            label: 'The range formula $R = \\frac{v_0^2\\sin 2\\alpha}{g}$ assumes:',
            options: ['Any launch height', 'Launch and land at same height', 'No gravity', 'Constant speed'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Parabola', 'Constant', 'A figure-eight', 'Launch and land at same height'],
        hint1: 'Eliminate $t$ from projectile equations → $y = ax^2 + bx + c$.',
        hint2: 'No horizontal force → no horizontal acceleration → constant $v_x$.',
        hint3: 'Frequency ratio $2:1$ creates a figure-eight.',
        explanation: 'Projectile = parabola. $v_x$ = constant. 2:1 Lissajous = figure-eight. Range formula needs level ground.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A projectile at $v_0 = 100$ m/s, $\\alpha = 30°$: horizontal distance per second is:',
            options: ['$50$ m', '$50\\sqrt{3}$ m', '$100$ m', '$25\\sqrt{3}$ m'],
            correctAnswer: 1,
            explanation: '$v_x = 100\\cos 30° = 100 \\cdot \\frac{\\sqrt{3}}{2} = 50\\sqrt{3}$ m/s.'
          },
          {
            question: 'Which pairs of launch angles give equal ranges (level ground)?',
            options: ['$20°$ and $70°$', '$25°$ and $75°$', '$30°$ and $60°$', 'All of the above'],
            correctAnswer: 3,
            explanation: 'Complementary angles ($\\alpha$ and $90° - \\alpha$) give equal range since $\\sin 2\\alpha = \\sin 2(90°-\\alpha)$.'
          }
        ]
      }
    }
  ]
};
