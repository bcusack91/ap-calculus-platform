export const physC2dKinPart2Data = {
  topicSlug: '2d-kinematics-physics-c',
  sections: [
    {
      id: '2dkin2-intro',
      type: 'text' as const,
      content: `# 2D Kinematics — Projectile Motion

**Part 2 of 7**

Projectile motion is 2D motion under gravity alone. The key insight: **horizontal and vertical motions are independent.**

### Setup

| Component | Acceleration | Equations |
|:---:|:---:|:---|
| $x$ | $a_x = 0$ | $x = x_0 + v_{0x}t$ |
| $y$ | $a_y = -g$ | $y = y_0 + v_{0y}t - \\frac{1}{2}gt^2$ |

With launch speed $v_0$ at angle $\\theta$:

$$v_{0x} = v_0\\cos\\theta, \\qquad v_{0y} = v_0\\sin\\theta$$

### Trajectory Equation

Eliminating $t$ from $x = v_{0x}t$, we get $t = x/v_{0x}$:

$$y = x\\tan\\theta - \\frac{g}{2v_0^2\\cos^2\\theta}x^2$$

This is a **parabola** opening downward.`
    },
    {
      id: '2dkin2-mcq1',
      type: 'mcq' as const,
      question: 'A projectile is launched at $50$ m/s at $37°$ above horizontal ($\\cos 37° \\approx 0.8$, $\\sin 37° \\approx 0.6$). What is the maximum height? (Use $g = 10$ $m/s^{2}$.)',
      options: ['$45$ m', '$90$ m', '$125$ m', '$30$ m'],
      correctAnswer: 0,
      explanation: '$v_{0y} = 50(0.6) = 30$ m/s. At max height, $v_y = 0$: $0 = 30^2 - 2(10)h \\implies h = 900/20 = 45$ m.'
    },
    {
      id: '2dkin2-range',
      type: 'text' as const,
      content: `## Range and Time of Flight

### Time of Flight (returning to launch height)

Setting $y = 0$ in $y = v_{0y}t - \\frac{1}{2}gt^2$:

$$t(v_{0y} - \\frac{1}{2}gt) = 0 \\implies T = \\frac{2v_0\\sin\\theta}{g}$$

### Range

$$R = v_{0x} \\cdot T = \\frac{v_0^2 \\sin(2\\theta)}{g}$$

### Maximum Range

$R$ is maximized when $\\sin(2\\theta) = 1$, i.e., $\\theta = 45°$:

$$R_{\\max} = \\frac{v_0^2}{g}$$

### Complementary Angles

Angles $\\theta$ and $(90° - \\theta)$ give the **same range** (since $\\sin 2\\theta = \\sin(180° - 2\\theta)$), but different maximum heights and flight times.

| Angle | Range | Height | Flight Time |
|:---:|:---:|:---:|:---:|
| $30°$ | $R$ | Lower | Shorter |
| $45°$ | $R_{\\max}$ | Medium | Medium |
| $60°$ | $R$ (same as $30°$) | Higher | Longer |`
    },
    {
      id: '2dkin2-mcq2',
      type: 'mcq' as const,
      question: 'A projectile launched at $45°$ has range $R$. At what other angle (with the same speed) will the range also be $R$?',
      options: [
        'No other angle gives the same range',
        '$30°$',
        '$60°$',
        '$135°$'
      ],
      correctAnswer: 0,
      explanation: 'For $\\theta = 45°$, $\\sin(2\\theta) = \\sin(90°) = 1$, which is the maximum. No other angle gives $\\sin(2\\theta) = 1$, so $45°$ uniquely gives the maximum range. Only non-$45°$ angles come in pairs: e.g. $30°$ and $60°$ pair together.'
    },
    {
      id: '2dkin2-cliff',
      type: 'text' as const,
      content: `## Projectiles from a Height

When launched from height $h$ above the ground, the ball doesn't return to launch height.

### Landing Condition

Set $y = 0$ (ground level) with $y_0 = h$:

$$0 = h + v_{0y}t - \\frac{1}{2}gt^2$$

This is a quadratic in $t$. Use the quadratic formula:

$$t = \\frac{v_{0y} + \\sqrt{v_{0y}^2 + 2gh}}{g}$$

(taking the positive root)

### Worked Example

A ball is thrown horizontally at $15$ m/s from a $20$ m cliff ($g = 10$ $m/s^{2}$).

- $v_{0x} = 15$ m/s, $v_{0y} = 0$

$$0 = 20 - \\frac{1}{2}(10)t^2 \\implies t = 2 \\text{ s}$$

- Range: $x = 15 \\times 2 = 30$ m

- Final velocity: $v_x = 15$, $v_y = -10(2) = -20$
- Speed at impact: $\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25$ m/s
- Angle: $\\arctan(20/15) \\approx 53°$ below horizontal`
    },
    {
      id: '2dkin2-mcq3',
      type: 'mcq' as const,
      question: 'A ball is thrown horizontally from a cliff. Ignoring air resistance, what is the horizontal acceleration during flight?',
      options: ['$0$', '$g$', '$g\\cos\\theta$', 'It depends on the speed'],
      correctAnswer: 0,
      explanation: 'There is no horizontal force (ignoring air resistance), so $a_x = 0$. The horizontal velocity remains constant throughout the flight. Only the vertical component is affected by gravity.'
    },
    {
      id: '2dkin2-calculus',
      type: 'text' as const,
      content: `## Calculus of the Trajectory

### Speed as a Function of Time

$$|\\vec{v}(t)| = \\sqrt{v_{0x}^2 + (v_{0y} - gt)^2}$$

Taking the derivative to find when speed is minimum:

$$\\frac{d}{dt}|\\vec{v}|^2 = 2(v_{0y} - gt)(-g) = 0 \\implies t = \\frac{v_{0y}}{g}$$

This is the time at the **peak** — speed is minimized when $v_y = 0$.

### Radius of Curvature

At any point on the trajectory, the radius of curvature is:

$$\\rho = \\frac{|\\vec{v}|^3}{|\\vec{v} \\times \\vec{a}|}$$

At the top of the trajectory ($v_y = 0$):

$$\\rho_{\\text{top}} = \\frac{v_{0x}^2}{g} = \\frac{v_0^2\\cos^2\\theta}{g}$$

This concept connects projectile motion to circular motion.`
    },
    {
      id: '2dkin2-mcq4',
      type: 'mcq' as const,
      question: 'At the top of a projectile\'s trajectory ($v_y = 0$, $v_x = v_0\\cos\\theta$), the acceleration is:',
      options: [
        '$g$ downward',
        '$0$',
        '$g\\cos\\theta$ downward',
        '$g\\sin\\theta$ downward'
      ],
      correctAnswer: 0,
      explanation: 'The acceleration is **always** $g$ downward throughout the flight, including at the top. Many students mistakenly think $a = 0$ at the peak because $v_y = 0$ there, but velocity being zero does not mean acceleration is zero.'
    }
  ]
};
