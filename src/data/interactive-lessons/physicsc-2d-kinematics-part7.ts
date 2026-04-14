export const physC2dKinPart7Data = {
  topicSlug: '2d-kinematics-physics-c',
  sections: [
    {
      id: '2dkin7-intro',
      type: 'text' as const,
      content: `# 2D Kinematics — Review & Applications

**Part 7 of 7 — Comprehensive Review**

### Formula Sheet

| Quantity | Formula |
|:---|:---:|
| Position vector | $\\vec{r} = x\\,\\hat{i} + y\\,\\hat{j}$ |
| Velocity vector | $\\vec{v} = \\frac{d\\vec{r}}{dt}$ |
| Acceleration vector | $\\vec{a} = \\frac{d\\vec{v}}{dt}$ |
| Speed | $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$ |
| Direction | $\\theta = \\arctan(v_y/v_x)$ |
| Path slope | $dy/dx = v_y/v_x$ |
| Arc length | $s = \\int |\\vec{v}|\\,dt$ |
| Relative velocity | $\\vec{v}_{A/C} = \\vec{v}_{A/B} + \\vec{v}_{B/C}$ |
| Range (flat) | $R = v_0^2\\sin(2\\theta)/g$ |
| Max height | $H = v_0^2\\sin^2\\theta/(2g)$ |
| Flight time | $T = 2v_0\\sin\\theta/g$ |`
    },
    {
      id: '2dkin7-mcq1',
      type: 'mcq' as const,
      question: 'A particle moves with $\\vec{r}(t) = (e^t)\\,\\hat{i} + (e^{-t})\\,\\hat{j}$. The path equation $y(x)$ is:',
      options: ['$y = 1/x$', '$y = x$', '$y = x^2$', '$y = \\ln x$'],
      correctAnswer: 0,
      explanation: '$x = e^t \\implies t = \\ln x$. $y = e^{-t} = e^{-\\ln x} = 1/x$. The path is a hyperbola.'
    },
    {
      id: '2dkin7-application',
      type: 'text' as const,
      content: `## Application: Circular Motion Preview

When a particle moves in a circle of radius $R$ at constant speed $v$:

$$x(t) = R\\cos(\\omega t), \\quad y(t) = R\\sin(\\omega t)$$

where $\\omega = v/R$ is the angular velocity.

**Velocity:**
$$\\vec{v} = -R\\omega\\sin(\\omega t)\\,\\hat{i} + R\\omega\\cos(\\omega t)\\,\\hat{j}$$

Speed: $|\\vec{v}| = R\\omega = v$ ✓ (constant)

**Acceleration:**
$$\\vec{a} = -R\\omega^2\\cos(\\omega t)\\,\\hat{i} - R\\omega^2\\sin(\\omega t)\\,\\hat{j} = -\\omega^2\\vec{r}$$

The acceleration points **toward the center** (centripetal) with magnitude:

$$|\\vec{a}| = R\\omega^2 = \\frac{v^2}{R}$$

### Key Observations

- $\\vec{v} \\cdot \\vec{a} = 0$ → velocity and acceleration are perpendicular.
- $|\\vec{v}|$ is constant → $a_T = 0$.
- All acceleration is centripetal: $a_N = v^2/R$.`
    },
    {
      id: '2dkin7-mcq2',
      type: 'mcq' as const,
      question: 'A car moves around a circular track of radius $50$ m at $10$ m/s. The magnitude of the centripetal acceleration is:',
      options: ['$2$ m/s²', '$5$ m/s²', '$0.2$ m/s²', '$200$ m/s²'],
      correctAnswer: 0,
      explanation: '$a_c = v^2/R = 100/50 = 2$ m/s².'
    },
    {
      id: '2dkin7-ap-style',
      type: 'text' as const,
      content: `## AP-Style Free Response

**Problem:** A particle moves in the $xy$-plane with acceleration $\\vec{a} = -2\\,\\hat{j}$ m/s². At $t = 0$, the position is $\\vec{r}_0 = 3\\,\\hat{i}$ m and velocity is $\\vec{v}_0 = 4\\,\\hat{i} + 6\\,\\hat{j}$ m/s.

**(a)** Find $\\vec{v}(t)$ and $\\vec{r}(t)$.

$$\\vec{v}(t) = 4\\,\\hat{i} + (6-2t)\\,\\hat{j}$$

$$\\vec{r}(t) = (3+4t)\\,\\hat{i} + (6t - t^2)\\,\\hat{j}$$

**(b)** When is the speed minimum?

$|\\vec{v}|^2 = 16 + (6-2t)^2$. Minimum when $(6-2t) = 0 \\implies t = 3$ s.

Min speed $= \\sqrt{16} = 4$ m/s (horizontal component only).

**(c)** Find the equation of the path.

$x = 3 + 4t \\implies t = (x-3)/4$

$y = 6 \\cdot \\frac{x-3}{4} - \\left(\\frac{x-3}{4}\\right)^2 = \\frac{3(x-3)}{2} - \\frac{(x-3)^2}{16}$

This is a downward parabola.`
    },
    {
      id: '2dkin7-mcq3',
      type: 'mcq' as const,
      question: 'In the problem above, at what time does the velocity make a $45°$ angle below the horizontal?',
      options: ['$t = 5$ s', '$t = 3$ s', '$t = 7$ s', '$t = 4$ s'],
      correctAnswer: 0,
      explanation: '$v_y/v_x = \\tan(-45°) = -1$, so $(6-2t)/4 = -1 \\implies 6-2t = -4 \\implies t = 5$ s.'
    },
    {
      id: '2dkin7-mcq4',
      type: 'mcq' as const,
      question: 'Two projectiles are launched from the same point at the same speed. One at $30°$ and one at $60°$. Which has greater speed at maximum height?',
      options: [
        'The one launched at $30°$',
        'The one launched at $60°$',
        'They have the same speed at max height',
        'Cannot determine without knowing $v_0$'
      ],
      correctAnswer: 0,
      explanation: 'At max height, $v_y = 0$, so speed $= v_x = v_0\\cos\\theta$. For $30°$: $v_0\\cos 30° = v_0\\sqrt{3}/2 \\approx 0.87v_0$. For $60°$: $v_0\\cos 60° = v_0/2 = 0.5v_0$. The $30°$ projectile retains more horizontal speed.'
    },
    {
      id: '2dkin7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered **2D Kinematics for AP Physics C**:

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Vector components | ✅ |
| 2 | Projectile motion | ✅ |
| 3 | Relative motion | ✅ |
| 4 | Position/velocity vectors | ✅ |
| 5 | Parametric equations of motion | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **AP Exam Tip:** On 2D problems, always decompose into components first. Write separate equations for $x$ and $y$, then use shared variables (usually time $t$) to connect them. Show your component decomposition explicitly for full credit.`
    }
  ]
};
