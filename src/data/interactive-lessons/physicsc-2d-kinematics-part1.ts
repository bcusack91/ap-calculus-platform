export const physC2dKinPart1Data = {
  topicSlug: '2d-kinematics-physics-c',
  sections: [
    {
      id: '2dkin1-intro',
      type: 'text' as const,
      content: `# 2D Kinematics — Vector Components

**Part 1 of 7**

In two dimensions, motion is described by **vector** quantities. Each vector has independent $x$ and $y$ components.

### Position Vector

$$\\vec{r}(t) = x(t)\\,\\hat{i} + y(t)\\,\\hat{j}$$

### Velocity Vector

$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\frac{dx}{dt}\\,\\hat{i} + \\frac{dy}{dt}\\,\\hat{j} = v_x\\,\\hat{i} + v_y\\,\\hat{j}$$

### Acceleration Vector

$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = a_x\\,\\hat{i} + a_y\\,\\hat{j}$$

### Key Principle

> The $x$- and $y$-components of motion are **independent**. Each component obeys its own 1D kinematic equations.`
    },
    {
      id: '2dkin1-mcq1',
      type: 'mcq' as const,
      question: 'A particle has position $\\vec{r}(t) = (3t^2)\\,\\hat{i} + (4t - t^2)\\,\\hat{j}$. What is the speed at $t = 1$?',
      options: ['$\\sqrt{40}$', '$6$', '$8$', '$\\sqrt{52}$'],
      correctAnswer: 0,
      explanation: '$v_x = 6t \\implies v_x(1) = 6$. $v_y = 4 - 2t \\implies v_y(1) = 2$. Speed $= \\sqrt{v_x^2 + v_y^2} = \\sqrt{36 + 4} = \\sqrt{40}$.'
    },
    {
      id: '2dkin1-magnitude',
      type: 'text' as const,
      content: `## Magnitude and Direction

### Speed (magnitude of velocity)

$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$

### Direction of motion

$$\\theta = \\arctan\\left(\\frac{v_y}{v_x}\\right)$$

(measured from the positive $x$-axis)

### Magnitude of acceleration

$$|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$$

### Worked Example

Given $\\vec{r}(t) = (t^2 + 1)\\,\\hat{i} + (t^3 - 3t)\\,\\hat{j}$:

$$\\vec{v}(t) = 2t\\,\\hat{i} + (3t^2 - 3)\\,\\hat{j}$$

At $t = 2$: $\\vec{v}(2) = 4\\,\\hat{i} + 9\\,\\hat{j}$

Speed: $|\\vec{v}| = \\sqrt{16 + 81} = \\sqrt{97} \\approx 9.85$ m/s

Direction: $\\theta = \\arctan(9/4) \\approx 66°$ above the $x$-axis.`
    },
    {
      id: '2dkin1-mcq2',
      type: 'mcq' as const,
      question: 'If $\\vec{v} = -3\\,\\hat{i} + 4\\,\\hat{j}$ m/s, the speed and direction (measured from positive $x$-axis) are:',
      options: [
        '$5$ m/s, $\\approx 127°$',
        '$5$ m/s, $\\approx 53°$',
        '$7$ m/s, $\\approx 127°$',
        '$5$ m/s, $\\approx 233°$'
      ],
      correctAnswer: 0,
      explanation: 'Speed $= \\sqrt{9+16} = 5$ m/s. $\\theta = \\arctan(4/(-3))$. Since $v_x < 0$ and $v_y > 0$ (second quadrant), $\\theta = 180° - \\arctan(4/3) \\approx 180° - 53° = 127°$.'
    },
    {
      id: '2dkin1-decomposition',
      type: 'text' as const,
      content: `## Decomposing Vectors

Given a vector with magnitude $|\\vec{A}|$ at angle $\\theta$ from the positive $x$-axis:

$$A_x = |\\vec{A}|\\cos\\theta, \\qquad A_y = |\\vec{A}|\\sin\\theta$$

### Common Angles

| $\\theta$ | $\\cos\\theta$ | $\\sin\\theta$ |
|:---:|:---:|:---:|
| $0°$ | $1$ | $0$ |
| $30°$ | $\\sqrt{3}/2$ | $1/2$ |
| $45°$ | $\\sqrt{2}/2$ | $\\sqrt{2}/2$ |
| $60°$ | $1/2$ | $\\sqrt{3}/2$ |
| $90°$ | $0$ | $1$ |

### Unit Vectors

A unit vector in direction $\\theta$:

$$\\hat{u} = \\cos\\theta\\,\\hat{i} + \\sin\\theta\\,\\hat{j}$$

Any vector can be written as: $\\vec{A} = |\\vec{A}|\\,\\hat{u}$.`
    },
    {
      id: '2dkin1-mcq3',
      type: 'mcq' as const,
      question: 'A ball is launched at $20$ m/s at $60°$ above the horizontal. What is the initial vertical component of velocity?',
      options: ['$10\\sqrt{3}$ m/s', '$10$ m/s', '$20$ m/s', '$20\\sqrt{3}$ m/s'],
      correctAnswer: 0,
      explanation: '$v_{0y} = v_0 \\sin 60° = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3} \\approx 17.3$ m/s.'
    },
    {
      id: '2dkin1-dot',
      type: 'text' as const,
      content: `## Dot Product for Angle Between Vectors

The angle between two vectors $\\vec{A}$ and $\\vec{B}$:

$$\\cos\\phi = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}||\\vec{B}|} = \\frac{A_x B_x + A_y B_y}{|\\vec{A}||\\vec{B}|}$$

### Application in Kinematics

The angle between $\\vec{v}$ and $\\vec{a}$ tells us about the motion:
- $\\phi < 90°$: speeding up
- $\\phi = 90°$: constant speed (uniform circular motion)  
- $\\phi > 90°$: slowing down

### Example

$\\vec{v} = 3\\,\\hat{i} + 4\\,\\hat{j}$, $\\vec{a} = -1\\,\\hat{i} + 2\\,\\hat{j}$

$$\\vec{v} \\cdot \\vec{a} = (3)(-1) + (4)(2) = -3 + 8 = 5 > 0$$

Since the dot product is positive, $\\phi < 90°$, so the particle is speeding up.`
    },
    {
      id: '2dkin1-mcq4',
      type: 'mcq' as const,
      question: 'A particle has $\\vec{v} = 2\\,\\hat{i} - 3\\,\\hat{j}$ and $\\vec{a} = -4\\,\\hat{i} + 6\\,\\hat{j}$. Is the particle speeding up, slowing down, or at constant speed?',
      options: [
        'Slowing down',
        'Speeding up',
        'Constant speed',
        'Cannot determine'
      ],
      correctAnswer: 0,
      explanation: '$\\vec{v} \\cdot \\vec{a} = (2)(-4) + (-3)(6) = -8 - 18 = -26 < 0$. Since the dot product is negative, the angle between $\\vec{v}$ and $\\vec{a}$ is greater than $90°$, so the particle is slowing down.'
    }
  ]
};
