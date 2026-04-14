export const physC2dKinPart5Data = {
  topicSlug: '2d-kinematics-physics-c',
  sections: [
    {
      id: '2dkin5-intro',
      type: 'text' as const,
      content: `# 2D Kinematics — Parametric Equations of Motion

**Part 5 of 7**

Parametric equations express position coordinates as separate functions of time: $x(t)$ and $y(t)$. This is the natural language for calculus-based kinematics.

### General Form

$$x(t) = x_0 + \\int_0^t v_x(t')\\,dt'$$

$$y(t) = y_0 + \\int_0^t v_y(t')\\,dt'$$

### Why Parametric?

- Each coordinate evolves independently.
- Time is the natural parameter for physics.
- Calculus operations (derivatives, integrals) apply to each component separately.
- The path $y(x)$ may be multivalued, but $(x(t), y(t))$ is always single-valued.`
    },
    {
      id: '2dkin5-mcq1',
      type: 'mcq' as const,
      question: 'A particle has $x(t) = 3t - t^2$ and $y(t) = 4t - 2t^2$. At what time is the speed zero?',
      options: [
        'Never — the speed is never zero since $v_x = 0$ and $v_y = 0$ occur at different times',
        '$t = 1$ s',
        '$t = 1.5$ s',
        '$t = 2$ s'
      ],
      correctAnswer: 0,
      explanation: '$v_x = 3 - 2t = 0$ at $t = 3/2$. $v_y = 4 - 4t = 0$ at $t = 1$. Since both components must be zero simultaneously for $|\\vec{v}| = 0$, and they vanish at different times, the speed is never zero.'
    },
    {
      id: '2dkin5-slope',
      type: 'text' as const,
      content: `## Slope of the Path

The slope of the trajectory $dy/dx$ is found using the chain rule:

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{v_y}{v_x}$$

This gives the tangent direction of the path at any point.

### Worked Example

$x(t) = t^2$, $y(t) = t^3 - 3t$

$$\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t}$$

At $t = 1$: $dy/dx = 0/2 = 0$ → horizontal tangent.

At $t = \\sqrt{3}$: $dy/dx = (9-3)/(2\\sqrt{3}) = 6/(2\\sqrt{3}) = \\sqrt{3}$ → slope at $45°\\cdot\\sqrt{3}/1$.

### Second Derivative

$$\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}$$

This tells us about the curvature of the path.`
    },
    {
      id: '2dkin5-mcq2',
      type: 'mcq' as const,
      question: 'For parametric motion $x = \\cos t$, $y = \\sin t$, the slope $dy/dx$ at $t = \\pi/4$ is:',
      options: ['$-1$', '$1$', '$0$', 'Undefined'],
      correctAnswer: 0,
      explanation: '$dy/dx = \\frac{\\cos t}{-\\sin t} = -\\cot t$. At $t = \\pi/4$: $dy/dx = -\\cot(\\pi/4) = -1$. (Or: the circle at $45°$ has slope $-1$.)'
    },
    {
      id: '2dkin5-examples',
      type: 'text' as const,
      content: `## Classic Parametric Motions

### Cycloid

A point on a rolling wheel of radius $R$:

$$x(t) = R(\\omega t - \\sin\\omega t), \\quad y(t) = R(1 - \\cos\\omega t)$$

Velocity:
$$v_x = R\\omega(1 - \\cos\\omega t), \\quad v_y = R\\omega\\sin\\omega t$$

At the bottom of each arch ($\\omega t = 2n\\pi$): $v_x = 0$, $v_y = 0$ — the point is momentarily at rest!

At the top ($\\omega t = (2n+1)\\pi$): $v_x = 2R\\omega$, $v_y = 0$ — moving at twice the wheel's center speed.

### Spiral Motion

$$x(t) = bt\\cos(\\omega t), \\quad y(t) = bt\\sin(\\omega t)$$

Distance from origin: $r(t) = bt$ (linearly increasing). The particle spirals outward.

### Lissajous Figures

$$x(t) = A\\sin(\\omega_1 t), \\quad y(t) = B\\sin(\\omega_2 t + \\phi)$$

The shape depends on the frequency ratio $\\omega_1/\\omega_2$.`
    },
    {
      id: '2dkin5-mcq3',
      type: 'mcq' as const,
      question: 'A particle moves with $x(t) = 4\\cos(2t)$ and $y(t) = 3\\sin(2t)$. The maximum speed is:',
      options: ['$8$ m/s', '$6$ m/s', '$10$ m/s', '$\\sqrt{52}$ m/s'],
      correctAnswer: 0,
      explanation: '$v_x = -8\\sin(2t)$, $v_y = 6\\cos(2t)$. Speed $= \\sqrt{64\\sin^2(2t) + 36\\cos^2(2t)} = \\sqrt{36 + 28\\sin^2(2t)}$. Maximum when $\\sin^2(2t) = 1$: speed $= \\sqrt{64} = 8$ m/s.'
    },
    {
      id: '2dkin5-arclength',
      type: 'text' as const,
      content: `## Arc Length from Parametric Equations

The distance traveled along the path from $t = a$ to $t = b$:

$$s = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt = \\int_a^b |\\vec{v}|\\,dt$$

### Example: Quarter Circle

$x = R\\cos t$, $y = R\\sin t$ for $0 \\le t \\le \\pi/2$:

$$|\\vec{v}| = \\sqrt{R^2\\sin^2 t + R^2\\cos^2 t} = R$$

$$s = \\int_0^{\\pi/2} R\\,dt = \\frac{\\pi R}{2}$$

This confirms: the arc length of a quarter circle is $\\pi R/2$, as expected.

### Speed vs. Velocity

| Quantity | Meaning | Formula |
|:---|:---|:---:|
| Velocity | Vector (direction + magnitude) | $\\vec{v} = \\dot{x}\\hat{i} + \\dot{y}\\hat{j}$ |
| Speed | Scalar (magnitude only) | $|\\vec{v}| = \\sqrt{\\dot{x}^2 + \\dot{y}^2}$ |
| Arc length rate | Same as speed | $ds/dt = |\\vec{v}|$ |`
    },
    {
      id: '2dkin5-mcq4',
      type: 'mcq' as const,
      question: 'A particle travels along $x(t) = t$, $y(t) = t^2$ for $0 \\le t \\le 1$. Which expression gives the total distance traveled?',
      options: [
        '$\\int_0^1 \\sqrt{1 + 4t^2}\\,dt$',
        '$\\sqrt{1 + 1} = \\sqrt{2}$',
        '$\\int_0^1 (1 + 2t)\\,dt$',
        '$\\int_0^1 \\sqrt{1 + 2t}\\,dt$'
      ],
      correctAnswer: 0,
      explanation: '$v_x = 1$, $v_y = 2t$. Speed $= \\sqrt{1 + 4t^2}$. Distance $= \\int_0^1 \\sqrt{1 + 4t^2}\\,dt$. The second option gives displacement magnitude, not arc length.'
    }
  ]
};
