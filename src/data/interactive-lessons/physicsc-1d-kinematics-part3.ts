export const physC1dKinPart3Data = {
  topicSlug: '1d-kinematics-physics-c',
  sections: [
    {
      id: '1dkin3-intro',
      type: 'text' as const,
      content: `# 1D Kinematics — Free Fall

**Part 3 of 7**

Free fall is constant-acceleration motion with $a = -g$ (taking upward as positive), where $g \\approx 9.8\\text{ m/s}^2$ near Earth's surface.

### Equations for Free Fall

| General Form | Free-Fall Form |
|:---|:---|
| $v = v_0 + at$ | $v = v_0 - gt$ |
| $y = y_0 + v_0 t + \\frac{1}{2}at^2$ | $y = y_0 + v_0 t - \\frac{1}{2}gt^2$ |
| $v^2 = v_0^2 + 2a\\Delta y$ | $v^2 = v_0^2 - 2g\\Delta y$ |

### Key Assumptions

- Air resistance is negligible.
- $g$ is constant (valid near Earth's surface).
- The only force is gravity.`
    },
    {
      id: '1dkin3-mcq1',
      type: 'mcq' as const,
      question: 'A ball is dropped from a $45$ m cliff. How long does it take to hit the ground? (Use $g = 10\\text{ m/s}^2$.)',
      options: ['$3$ s', '$4.5$ s', '$9$ s', '$2.1$ s'],
      correctAnswer: 0,
      explanation: '$y = y_0 + v_0 t - \\frac{1}{2}gt^2$. Taking down as positive: $45 = \\frac{1}{2}(10)t^2 \\implies t^2 = 9 \\implies t = 3$ s.'
    },
    {
      id: '1dkin3-thrown',
      type: 'text' as const,
      content: `## Objects Thrown Upward

When a ball is thrown upward with speed $v_0$:

### Maximum Height

At the peak, $v = 0$:

$$0 = v_0^2 - 2g\\Delta y \\implies \\Delta y_{\\max} = \\frac{v_0^2}{2g}$$

### Time to Peak

$$0 = v_0 - gt_{\\text{peak}} \\implies t_{\\text{peak}} = \\frac{v_0}{g}$$

### Total Flight Time (returning to launch height)

By symmetry: $t_{\\text{total}} = 2t_{\\text{peak}} = \\frac{2v_0}{g}$

### Worked Example

A ball is thrown upward at $30$ m/s from the ground ($g = 10$ m/s$^2$):

- Max height: $\\frac{30^2}{2(10)} = 45$ m
- Time to top: $\\frac{30}{10} = 3$ s
- Total flight time: $6$ s
- Speed at landing: $30$ m/s (same as launch speed)`
    },
    {
      id: '1dkin3-mcq2',
      type: 'mcq' as const,
      question: 'A stone is thrown upward at $20$ m/s from a $15$ m ledge. What is its speed just before hitting the ground? (Use $g = 10\\text{ m/s}^2$.)',
      options: ['$\\sqrt{700}$ m/s $\\approx 26.5$ m/s', '$20$ m/s', '$25$ m/s', '$30$ m/s'],
      correctAnswer: 0,
      explanation: '$\\Delta y = -15$ m (below launch point). $v^2 = 20^2 + 2(10)(15) = 400 + 300 = 700$. So $v = \\sqrt{700} \\approx 26.5$ m/s.'
    },
    {
      id: '1dkin3-symmetry',
      type: 'text' as const,
      content: `## Symmetry of Free Fall

Free-fall trajectories exhibit beautiful symmetry:

| Property | Going Up | Coming Down |
|:---|:---:|:---:|
| Speed at height $h$ | $\\sqrt{v_0^2 - 2gh}$ | $\\sqrt{v_0^2 - 2gh}$ (same!) |
| Time to reach height $h$ | $t_1$ | $t_{\\text{total}} - t_1$ |
| Acceleration | $-g$ (always) | $-g$ (always) |

### Calculus Proof of Symmetry

Position: $y(t) = v_0 t - \\frac{1}{2}gt^2$

Setting $y(t) = y(t')$ for $t \\neq t'$:

$$v_0 t - \\frac{1}{2}gt^2 = v_0 t' - \\frac{1}{2}gt'^2$$

$$v_0(t - t') = \\frac{1}{2}g(t^2 - t'^2) = \\frac{1}{2}g(t-t')(t+t')$$

Dividing by $(t - t')$: $t + t' = \\frac{2v_0}{g}$

So the two times when the object is at the same height are **symmetric about the midpoint** $t = v_0/g$.`
    },
    {
      id: '1dkin3-mcq3',
      type: 'mcq' as const,
      question: 'An object is thrown upward. At time $t_1 = 1$ s it is at height $h$. It returns to height $h$ at $t_2 = 5$ s. What is the time at which it reaches maximum height?',
      options: ['$3$ s', '$2.5$ s', '$4$ s', '$3.5$ s'],
      correctAnswer: 0,
      explanation: 'By symmetry, the peak occurs at the midpoint: $t_{\\text{peak}} = \\frac{t_1 + t_2}{2} = \\frac{1+5}{2} = 3$ s.'
    },
    {
      id: '1dkin3-calculus',
      type: 'text' as const,
      content: `## Calculus Approach to Free Fall

Starting from Newton's second law for free fall:

$$\\frac{d^2y}{dt^2} = -g$$

Integrate once (with initial condition $v(0) = v_0$):

$$\\frac{dy}{dt} = -gt + v_0$$

Integrate again (with $y(0) = y_0$):

$$y(t) = -\\frac{1}{2}gt^2 + v_0 t + y_0$$

### When does $v = 0$?

$$\\frac{dy}{dt} = 0 \\implies -gt + v_0 = 0 \\implies t = \\frac{v_0}{g}$$

### Checking with the second derivative test:

$$\\frac{d^2y}{dt^2} = -g < 0$$

Since the second derivative is negative, $y$ has a **maximum** at $t = v_0/g$. This confirms it's the peak height, not a minimum.`
    },
    {
      id: '1dkin3-mcq4',
      type: 'mcq' as const,
      question: 'A ball is thrown downward at $5$ m/s from a height of $80$ m. Using $g = 10\\text{ m/s}^2$, how long until it hits the ground?',
      options: ['$3.5$ s', '$4$ s', '$3$ s', '$5$ s'],
      correctAnswer: 0,
      explanation: 'Taking downward positive: $80 = 5t + \\frac{1}{2}(10)t^2 \\implies 5t^2 + 5t - 80 = 0 \\implies t^2 + t - 16 = 0 \\implies t = \\frac{-1 + \\sqrt{65}}{2} \\approx \\frac{-1+8.06}{2} \\approx 3.5$ s.'
    }
  ]
};
