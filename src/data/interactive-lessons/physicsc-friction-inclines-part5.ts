export const physCFrictionPart5Data = {
  topicSlug: "friction-inclines-physics-c",
  sections: [
    {
      id: 'fri5-intro',
      type: 'text' as const,
      content: `# Systems on Inclines

**Part 5 of 7 — Friction & Inclines**

Many AP Physics C problems involve multiple objects connected by strings, often on inclines. The key: apply Newton's second law to **each object separately**, then combine.

## Atwood Machine on an Incline

A classic setup: mass $m_1$ on a rough incline (angle $\\theta$, coefficient $\\mu_k$) connected by a massless string over a frictionless pulley to a hanging mass $m_2$.

### Free Body Diagrams

**Block on incline ($m_1$):**
$$T - m_1 g\\sin\\theta - \\mu_k m_1 g\\cos\\theta = m_1 a$$

**Hanging block ($m_2$, assuming it descends):**
$$m_2 g - T = m_2 a$$

### Solving for $a$ and $T$

Adding the equations:
$$m_2 g - m_1 g\\sin\\theta - \\mu_k m_1 g\\cos\\theta = (m_1 + m_2)a$$

$$a = \\frac{m_2 g - m_1 g(\\sin\\theta + \\mu_k\\cos\\theta)}{m_1 + m_2}$$

$$T = m_2(g - a) = \\frac{m_1 m_2 g(1 + \\sin\\theta + \\mu_k\\cos\\theta)}{m_1 + m_2}$$`
    },
    {
      id: 'fri5-mcq1',
      type: 'mcq' as const,
      question: 'In an Atwood-incline system: $m_1 = 4$ kg on a $30°$ rough incline ($\\mu_k = 0.2$), $m_2 = 3$ kg hanging. What is the acceleration? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\approx 0.88$ $m/s^{2}$ (hanging mass descends)',
        '$\\approx 1.43$ $m/s^{2}$ (block slides up)',
        '$0$ $m/s^{2}$ (system is in equilibrium)',
        '$\\approx 2.14$ $m/s^{2}$ (block slides down)'
      ],
      correctAnswer: 0,
      explanation: '$a = \\frac{m_2 g - m_1 g(\\sin 30° + 0.2\\cos 30°)}{m_1 + m_2} = \\frac{30 - 4(10)(0.5 + 0.173)}{7} = \\frac{30 - 26.93}{7} \\approx 0.44$ $m/s^{2}$. Wait — let me recalculate: $a = \\frac{30 - 40(0.673)}{7} = \\frac{30 - 26.93}{7} = 0.438$ $m/s^{2}$. The direction: since $a > 0$, the hanging mass descends.'
    },
    {
      id: 'fri5-two-inclines',
      type: 'text' as const,
      content: `## Two Blocks on Different Inclines

Consider masses $m_1$ and $m_2$ connected by a string over a pulley, each on different inclines at angles $\\theta_1$ and $\\theta_2$.

Assuming $m_1$ moves up its incline and $m_2$ moves down its incline:

**For $m_1$ (moves up, friction opposes):**
$$T - m_1 g\\sin\\theta_1 - \\mu_1 m_1 g\\cos\\theta_1 = m_1 a$$

**For $m_2$ (moves down, friction opposes):**
$$m_2 g\\sin\\theta_2 - T - \\mu_2 m_2 g\\cos\\theta_2 = m_2 a$$

Adding:
$$a = \\frac{m_2 g(\\sin\\theta_2 - \\mu_2\\cos\\theta_2) - m_1 g(\\sin\\theta_1 + \\mu_1\\cos\\theta_1)}{m_1 + m_2}$$

### Checking Direction

Before solving, determine which way the system tends to move:

1. Compare $m_1 g\\sin\\theta_1$ vs $m_2 g\\sin\\theta_2$ (gravitational components).
2. The side with greater gravitational component tends to slide down.
3. If $a < 0$ from your assumption, the system moves the other way (flip the friction directions and resolve).

### Stacked Blocks on an Incline

For a block of mass $m_1$ on top of a block $m_2$ on a ramp:
- The friction between blocks is what accelerates/decelerates $m_1$.
- If the blocks move together: treat as one system to find $a$, then isolate one block to find the friction between them.
- If they slide relative to each other: apply kinetic friction at the interface.`
    },
    {
      id: 'fri5-mcq2',
      type: 'mcq' as const,
      question: 'Two blocks (3 kg and 5 kg) are stacked on a frictionless $30°$ incline. The coefficient of static friction between the blocks is $\\mu_s = 0.4$. Do they slide together or separately?',
      options: [
        'Together — the required friction ($m_1 g\\sin\\theta$) is less than $\\mu_s m_1 g\\cos\\theta$',
        'Separately — the top block slides off',
        'Together only if the incline angle is less than $\\arctan(0.4) \\approx 21.8°$',
        'It depends on which block is on top'
      ],
      correctAnswer: 2,
      explanation: 'The top block needs friction $f = m_1 g\\sin\\theta$ to keep it from sliding. The maximum static friction between blocks is $\\mu_s m_1 g\\cos\\theta$. They slide together when $\\tan\\theta \\leq \\mu_s$, i.e., $\\theta \\leq \\arctan(0.4) \\approx 21.8°$. Since $30° > 21.8°$, they actually slide separately.'
    },
    {
      id: 'fri5-constraint',
      type: 'text' as const,
      content: `## Constraint Equations

When blocks are connected by strings through pulleys, the constraint equation relates their accelerations.

### Simple Constraint (Single String)

If a single string connects two blocks, their speeds are equal:
$$v_1 = v_2 \\implies a_1 = a_2 = a$$

### Pulley Ratio Constraint

If a string wraps around a movable pulley attached to block 2:
$$\\Delta x_2 = \\frac{\\Delta x_1}{2} \\implies a_2 = \\frac{a_1}{2}$$

And the tensions relate as:
$$T_2 = 2T_1$$

### Worked Example: Pulley System

A 5 kg block on a $37°$ rough incline ($\\mu_k = 0.25$) is connected to a 3 kg hanging mass through a pulley attached to the incline block.

With constraint $a_{\\text{hang}} = 2a_{\\text{incline}}$:

Let $a$ be the incline block's acceleration (up the incline).

**Incline block:** $2T - m_1 g\\sin\\theta - \\mu_k m_1 g\\cos\\theta = m_1 a$

**Hanging block:** $m_2 g - T = m_2(2a)$

From the hanging block: $T = m_2 g - 2m_2 a = 3(10) - 6a = 30 - 6a$

Substituting: $2(30 - 6a) - 50\\sin 37° - 0.25(50)\\cos 37° = 5a$

$$60 - 12a - 30 - 10 = 5a$$
$$20 = 17a \\implies a = 1.18 \\text{ m/s}^2$$`
    },
    {
      id: 'fri5-mcq3',
      type: 'mcq' as const,
      question: 'In an Atwood machine (two masses over a pulley, no incline), mass $m_1 > m_2$. If friction in the pulley axle provides a constant torque that effectively reduces the net force by $f$, the acceleration is:',
      options: [
        '$a = \\frac{(m_1 - m_2)g - f}{m_1 + m_2}$',
        '$a = \\frac{(m_1 - m_2)g}{m_1 + m_2} - f$',
        '$a = \\frac{m_1 g - m_2 g}{m_1 + m_2 + f/g}$',
        '$a = \\frac{(m_1 - m_2)(g - f)}{m_1 + m_2}$'
      ],
      correctAnswer: 0,
      explanation: 'The friction force $f$ opposes the net force $(m_1 - m_2)g$, reducing the numerator. The total inertia of the system is still $m_1 + m_2$.'
    },
    {
      id: 'fri5-mcq4',
      type: 'mcq' as const,
      question: 'For two blocks connected by a string on a frictionless surface (block $m_1$ pulled by force $F$, string connects to $m_2$ behind it), the tension in the string is:',
      options: [
        '$T = \\frac{m_2 F}{m_1 + m_2}$',
        '$T = F$',
        '$T = \\frac{m_1 F}{m_1 + m_2}$',
        '$T = \\frac{F}{2}$'
      ],
      correctAnswer: 0,
      explanation: 'System acceleration: $a = F/(m_1 + m_2)$. For block $m_2$ alone: $T = m_2 a = \\frac{m_2 F}{m_1 + m_2}$.'
    },
    {
      id: 'fri5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| System Type | Key Approach |
|:---:|:---:|
| Atwood on incline | Separate FBDs, same $a$ and $T$ |
| Two inclines | Compare gravitational components to find direction |
| Stacked blocks | Check if friction is sufficient; if not, blocks separate |
| Pulley constraints | Relate $a_1$ and $a_2$ via string length |

> **Next up:** Part 6 — Problem-Solving Workshop with multi-step AP-style problems.`
    }
  ]
};
