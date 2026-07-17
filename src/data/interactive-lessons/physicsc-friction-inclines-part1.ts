export const physCFrictionPart1Data = {
  topicSlug: "friction-inclines-physics-c",
  sections: [
    {
      id: 'fri1-intro',
      type: 'text' as const,
      content: `# Static vs Kinetic Friction

**Part 1 of 7 — Friction & Inclines**

Friction is one of the most common forces you'll encounter on the AP Physics C exam. Understanding the distinction between static and kinetic friction — and when each applies — is essential.

## The Nature of Friction

Friction arises from microscopic interactions between surfaces in contact. At the AP Physics C level, we model friction with two simple laws:

| Type | Symbol | Condition | Formula |
|:---:|:---:|:---:|:---:|
| Static | $f_s$ | Object at rest | $f_s \\leq \\mu_s N$ |
| Kinetic | $f_k$ | Object sliding | $f_k = \\mu_k N$ |

### Key Differences

- **Static friction** is a *variable* force: it adjusts to match the applied force, up to a maximum $f_{s,\\max} = \\mu_s N$.
- **Kinetic friction** is a *constant* force (for a given normal force): $f_k = \\mu_k N$.
- Typically $\\mu_s > \\mu_k$; it takes more force to *start* motion than to *maintain* it.

### The Normal Force

The normal force $N$ is perpendicular to the contact surface. On a flat surface with no vertical acceleration:

$$N = mg - F\\sin\\theta$$

where $F$ is an applied force at angle $\\theta$ above the horizontal. If pushing downward at angle $\\theta$ below horizontal:

$$N = mg + F\\sin\\theta$$`
    },
    {
      id: 'fri1-mcq1',
      type: 'mcq' as const,
      question: 'A 10 kg block sits on a surface with $\\mu_s = 0.4$ and $\\mu_k = 0.3$. A horizontal force of 30 N is applied. What is the friction force on the block? (Use $g = 10$ $m/s^{2}$)',
      options: [
        '$30$ N (static friction matches applied force)',
        '$39.2$ N (maximum static friction)',
        '$29.4$ N (kinetic friction)',
        '$40$ N (maximum static friction)'
      ],
      correctAnswer: 0,
      explanation: '$f_{s,\\max} = \\mu_s N = 0.4 \\times 100 = 40$ N. Since the applied force (30 N) $< f_{s,\\max}$ (40 N), the block doesn\'t move. Static friction matches the applied force: $f_s = 30$ N.'
    },
    {
      id: 'fri1-details',
      type: 'text' as const,
      content: `## Free Body Diagrams with Friction

When drawing FBDs involving friction, always:

1. **Identify the contact surface** — friction acts along it.
2. **Determine the normal force** — perpendicular to the surface.
3. **Check if the object moves** — this determines static vs kinetic.
4. **Direction of friction** — opposes motion (kinetic) or opposes *tendency* of motion (static).

### Worked Example

A 5 kg block is pushed along a floor by a force $F = 40$ N at $30°$ below the horizontal. $\\mu_k = 0.25$.

**Step 1:** Normal force (vertical equilibrium):
$$N = mg + F\\sin 30° = 5(10) + 40(0.5) = 70 \\text{ N}$$

**Step 2:** Kinetic friction:
$$f_k = \\mu_k N = 0.25 \\times 70 = 17.5 \\text{ N}$$

**Step 3:** Horizontal acceleration:
$$F\\cos 30° - f_k = ma$$
$$40(0.866) - 17.5 = 5a$$
$$a = \\frac{34.64 - 17.5}{5} = 3.43 \\text{ m/s}^2$$

> **Key Insight:** Pushing downward *increases* the normal force and thus the friction force. Pulling upward *decreases* it.`
    },
    {
      id: 'fri1-mcq2',
      type: 'mcq' as const,
      question: 'A block is pulled along a surface by a rope at angle $\\theta$ above horizontal with force $F$. Which expression gives the normal force?',
      options: [
        '$N = mg - F\\sin\\theta$',
        '$N = mg + F\\sin\\theta$',
        '$N = mg - F\\cos\\theta$',
        '$N = mg$'
      ],
      correctAnswer: 0,
      explanation: 'The vertical component $F\\sin\\theta$ pulls the block upward, reducing the contact force with the surface. Vertical equilibrium: $N + F\\sin\\theta = mg$, so $N = mg - F\\sin\\theta$.'
    },
    {
      id: 'fri1-threshold',
      type: 'text' as const,
      content: `## The Threshold of Motion

A critical AP Physics C skill is determining whether a block moves under a given force. The procedure:

1. **Assume static:** Calculate the force needed to keep the block stationary.
2. **Compare to $f_{s,\\max}$:** If the required friction $\\leq \\mu_s N$, the block stays at rest.
3. **If exceeded:** The block accelerates. Switch to kinetic friction for the dynamics.

### The Transition: Calculus Perspective

At the instant motion begins, the friction force drops from $f_{s,\\max} = \\mu_s N$ to $f_k = \\mu_k N$. This creates an instantaneous jump in acceleration:

$$a(t = 0^+) = \\frac{F_{\\text{applied}} - \\mu_k N}{m}$$

This discontinuity in friction is why objects often "jerk" when they start sliding.

### Optimal Angle for Pulling

To minimize the pulling force $F$ needed to move a block, differentiate with respect to $\\theta$:

$$F = \\frac{\\mu_s mg}{\\cos\\theta + \\mu_s \\sin\\theta}$$

Setting $\\frac{dF}{d\\theta} = 0$:

$$\\sin\\theta - \\mu_s \\cos\\theta = 0 \\implies \\tan\\theta = \\mu_s$$

$$\\theta_{\\text{opt}} = \\arctan(\\mu_s)$$`
    },
    {
      id: 'fri1-mcq3',
      type: 'mcq' as const,
      question: 'For $\\mu_s = 0.5$, what pulling angle $\\theta$ above horizontal minimizes the force needed to start a block sliding?',
      options: [
        '$\\arctan(0.5) \\approx 26.6°$',
        '$45°$',
        '$0°$ (horizontal)',
        '$30°$'
      ],
      correctAnswer: 0,
      explanation: 'The optimal angle satisfies $\\tan\\theta = \\mu_s = 0.5$, giving $\\theta = \\arctan(0.5) \\approx 26.6°$. This balances reducing the normal force (and thus friction) against losing horizontal pulling force.'
    },
    {
      id: 'fri1-mcq4',
      type: 'mcq' as const,
      question: 'A 20 kg crate on a floor ($\\mu_s = 0.6$, $\\mu_k = 0.4$) has a 150 N horizontal force applied. What is the acceleration? ($g = 10$ $m/s^{2}$)',
      options: [
        '$3.5$ $m/s^{2}$',
        '$0$ $m/s^{2}$ (block does not move)',
        '$2.5$ $m/s^{2}$',
        '$7.5$ $m/s^{2}$'
      ],
      correctAnswer: 0,
      explanation: '$f_{s,\\max} = \\mu_s mg = 0.6 \\times 200 = 120$ N. Since 150 N $> 120$ N, the block moves. Use kinetic friction: $f_k = \\mu_k mg = 0.4 \\times 200 = 80$ N. Then $a = (150 - 80)/20 = 3.5$ $m/s^{2}$.'
    },
    {
      id: 'fri1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Concept | Key Formula |
|:---:|:---:|
| Static friction | $f_s \\leq \\mu_s N$ |
| Kinetic friction | $f_k = \\mu_k N$ |
| Normal force (pull up) | $N = mg - F\\sin\\theta$ |
| Normal force (push down) | $N = mg + F\\sin\\theta$ |
| Optimal pull angle | $\\theta = \\arctan(\\mu_s)$ |

> **Next up:** Part 2 — Inclined Planes (No Friction), where we analyze motion on smooth ramps using calculus.`
    }
  ]
};
