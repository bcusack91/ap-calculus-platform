export const physC2dKinPart4Data = {
  topicSlug: '2d-kinematics-physics-c',
  sections: [
    {
      id: '2dkin4-intro',
      type: 'text' as const,
      content: `# 2D Kinematics — Position and Velocity Vectors

**Part 4 of 7**

In this section, we use vector calculus to fully describe 2D motion through differentiation and integration of vector functions.

### The Vector Derivative

Given $\\vec{r}(t) = x(t)\\,\\hat{i} + y(t)\\,\\hat{j}$:

$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\dot{x}\\,\\hat{i} + \\dot{y}\\,\\hat{j}$$

$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\ddot{x}\\,\\hat{i} + \\ddot{y}\\,\\hat{j}$$

where the dot notation $\\dot{x} = dx/dt$, $\\ddot{x} = d^2x/dt^2$ is common in physics.

### Integration (reverse)

$$\\vec{v}(t) = \\vec{v}_0 + \\int_0^t \\vec{a}(t')\\,dt'$$

$$\\vec{r}(t) = \\vec{r}_0 + \\int_0^t \\vec{v}(t')\\,dt'$$

Each component integrates independently.`
    },
    {
      id: '2dkin4-mcq1',
      type: 'mcq' as const,
      question: 'A particle has $\\vec{a}(t) = 2\\,\\hat{i} + 6t\\,\\hat{j}$ with $\\vec{v}(0) = 3\\,\\hat{i} - \\hat{j}$. Find $\\vec{v}(2)$.',
      options: [
        '$7\\,\\hat{i} + 11\\,\\hat{j}$',
        '$4\\,\\hat{i} + 12\\,\\hat{j}$',
        '$7\\,\\hat{i} + 12\\,\\hat{j}$',
        '$7\\,\\hat{i} - 11\\,\\hat{j}$'
      ],
      correctAnswer: 0,
      explanation: '$v_x(t) = 3 + 2t \\implies v_x(2) = 7$. $v_y(t) = -1 + 3t^2 \\implies v_y(2) = -1 + 12 = 11$. So $\\vec{v}(2) = 7\\,\\hat{i} + 11\\,\\hat{j}$.'
    },
    {
      id: '2dkin4-tangent',
      type: 'text' as const,
      content: `## Tangent and Normal Directions

The velocity vector $\\vec{v}$ is always **tangent** to the path.

### Unit Tangent Vector

$$\\hat{T} = \\frac{\\vec{v}}{|\\vec{v}|}$$

### Tangential and Normal Components of Acceleration

Acceleration can be decomposed into:

$$\\vec{a} = a_T\\,\\hat{T} + a_N\\,\\hat{N}$$

where:

$$a_T = \\frac{d|\\vec{v}|}{dt} = \\frac{\\vec{v} \\cdot \\vec{a}}{|\\vec{v}|}$$

(tangential: changes the speed)

$$a_N = \\frac{|\\vec{v} \\times \\vec{a}|}{|\\vec{v}|} = \\frac{v^2}{\\rho}$$

(normal: changes the direction, where $\\rho$ is the radius of curvature)

### Key Insight

- If $a_T = 0$: uniform speed (e.g., uniform circular motion)
- If $a_N = 0$: straight-line motion
- In general: both speed and direction change.`
    },
    {
      id: '2dkin4-mcq2',
      type: 'mcq' as const,
      question: 'A particle moves with $\\vec{v} = 3\\,\\hat{i} + 4\\,\\hat{j}$ and $\\vec{a} = -4\\,\\hat{i} + 3\\,\\hat{j}$. What is the tangential acceleration $a_T$?',
      options: ['$0$', '$5$', '$-5$', '$7$'],
      correctAnswer: 0,
      explanation: '$a_T = \\frac{\\vec{v} \\cdot \\vec{a}}{|\\vec{v}|} = \\frac{(3)(-4) + (4)(3)}{\\sqrt{9+16}} = \\frac{-12 + 12}{5} = 0$. The speed is not changing — this is pure directional change.'
    },
    {
      id: '2dkin4-path',
      type: 'text' as const,
      content: `## Path Equations and Eliminating Time

Given parametric equations $x(t)$ and $y(t)$, we can often eliminate $t$ to find $y$ as a function of $x$.

### Example 1: Linear Path

$x = 2 + 3t$, $y = 1 - t$

From the first: $t = (x-2)/3$. Substituting:

$$y = 1 - \\frac{x-2}{3} = \\frac{5-x}{3}$$

This is a straight line.

### Example 2: Circular Path

$x = R\\cos(\\omega t)$, $y = R\\sin(\\omega t)$

$$x^2 + y^2 = R^2\\cos^2(\\omega t) + R^2\\sin^2(\\omega t) = R^2$$

This is a circle of radius $R$.

### Example 3: Parabolic Path

$x = v_0 t$, $y = v_0 t - \\frac{1}{2}gt^2$

$$t = x/v_0 \\implies y = x - \\frac{g}{2v_0^2}x^2$$

A downward-opening parabola.`
    },
    {
      id: '2dkin4-mcq3',
      type: 'mcq' as const,
      question: 'A particle has $x(t) = 2\\cos t$, $y(t) = 3\\sin t$. The path is a(n):',
      options: ['Ellipse', 'Circle', 'Parabola', 'Hyperbola'],
      correctAnswer: 0,
      explanation: '$x/2 = \\cos t$, $y/3 = \\sin t$. So $(x/2)^2 + (y/3)^2 = \\cos^2 t + \\sin^2 t = 1$, which is the equation of an ellipse with semi-axes $2$ and $3$.'
    },
    {
      id: '2dkin4-displacement',
      type: 'text' as const,
      content: `## Displacement and Distance in 2D

### Displacement Vector

$$\\Delta\\vec{r} = \\vec{r}(t_2) - \\vec{r}(t_1)$$

Magnitude: $|\\Delta\\vec{r}| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$

### Arc Length (Total Distance)

$$s = \\int_{t_1}^{t_2} |\\vec{v}|\\,dt = \\int_{t_1}^{t_2} \\sqrt{\\dot{x}^2 + \\dot{y}^2}\\,dt$$

### Example

$\\vec{r}(t) = (\\cos t)\\,\\hat{i} + (\\sin t)\\,\\hat{j}$ for $0 \\le t \\le \\pi$:

Displacement: $\\Delta\\vec{r} = (-1-1)\\hat{i} + (0-0)\\hat{j} = -2\\hat{i}$, magnitude $= 2$.

Distance: $|\\vec{v}| = \\sqrt{\\sin^2 t + \\cos^2 t} = 1$, so $s = \\int_0^\\pi 1\\,dt = \\pi \\approx 3.14$.

The distance (arc length) exceeds the displacement because the path is curved.`
    },
    {
      id: '2dkin4-mcq4',
      type: 'mcq' as const,
      question: 'A particle moves with $\\vec{r}(t) = (t^2)\\,\\hat{i} + (t^3)\\,\\hat{j}$. The displacement from $t = 0$ to $t = 1$ has magnitude:',
      options: ['$\\sqrt{2}$', '$1$', '$2$', '$\\sqrt{5}$'],
      correctAnswer: 0,
      explanation: '$\\vec{r}(1) = \\hat{i} + \\hat{j}$, $\\vec{r}(0) = \\vec{0}$. Displacement $= \\hat{i} + \\hat{j}$, magnitude $= \\sqrt{1^2 + 1^2} = \\sqrt{2}$.'
    }
  ]
};
