export const physCAngMomPart5Data = {
  topicSlug: "angular-momentum-physics-c",
  sections: [
    {
      id: 'am5-intro',
      type: 'text' as const,
      content: `# Precession and Gyroscopes

**Part 5 of 7**

When $\\vec{\\tau}$ is perpendicular to $\\vec{L}$, the torque doesn't change the magnitude of $L$ — it changes its **direction**. This causes **precession**.

$$\\vec{\\tau} = \\frac{d\\vec{L}}{dt}$$

If $\\vec{\\tau} \\perp \\vec{L}$, then $d\\vec{L} \\perp \\vec{L}$, meaning $\\vec{L}$ rotates without changing magnitude.

### Gyroscope Precession

A spinning gyroscope tilted at angle $\\theta$ from vertical, with spin angular momentum $L = I\\omega$. Gravity creates a torque:

$$\\tau = Mgr\\sin\\theta$$

where $r$ is the distance from the pivot to the center of mass.

The precession angular velocity:

$$\\boxed{\\Omega = \\frac{\\tau}{L\\sin\\theta} = \\frac{Mgr}{I\\omega}}$$

### Key Features
- Precession is **slower** when the spin is **faster** ($\\Omega \\propto 1/\\omega$)
- The spin axis traces a cone around the vertical
- $\\vec{L}$ traces a horizontal circle`
    },
    {
      id: 'am5-mcq1',
      type: 'mcq' as const,
      question: 'A gyroscope spins at $\\omega$. If the spin rate doubles, the precession rate:',
      options: ['Halves', 'Doubles', 'Stays the same', 'Quadruples'],
      correctAnswer: 0,
      explanation: '$\\Omega = Mgr/(I\\omega)$. Doubling $\\omega$ halves $\\Omega$. A faster-spinning gyroscope precesses more slowly because it has more angular momentum to deflect.'
    },
    {
      id: 'am5-vector',
      type: 'text' as const,
      content: `## Vector Analysis of Precession

Consider $\\vec{L}$ making angle $\\theta$ with the vertical. The horizontal component:

$$L_{\\text{horiz}} = L\\sin\\theta$$

In time $dt$, the torque causes $\\vec{L}$ to sweep through angle $d\\phi$:

$$|d\\vec{L}| = L\\sin\\theta \\cdot d\\phi = \\tau \\cdot dt$$

$$\\frac{d\\phi}{dt} = \\Omega = \\frac{\\tau}{L\\sin\\theta}$$

For the gravitational torque $\\tau = Mgr\\sin\\theta$:

$$\\Omega = \\frac{Mgr\\sin\\theta}{I\\omega\\sin\\theta} = \\frac{Mgr}{I\\omega}$$

The $\\sin\\theta$ cancels — the precession rate is **independent** of the tilt angle!

### Nutation

In reality, a released gyroscope also exhibits **nutation** — a rapid bobbing superimposed on the precession. This is a higher-order effect that damps out due to friction, leaving steady precession.`
    },
    {
      id: 'am5-mcq2',
      type: 'mcq' as const,
      question: 'The precession rate $\\Omega = Mgr/(I\\omega)$ of a gyroscope is independent of:',
      options: [
        'The tilt angle $\\theta$',
        'The spin rate $\\omega$',
        'The mass $M$',
        'The distance $r$ to the pivot'
      ],
      correctAnswer: 0,
      explanation: 'Although the torque depends on $\\sin\\theta$, the horizontal component of $\\vec{L}$ that must be rotated also depends on $\\sin\\theta$. These factors cancel, making $\\Omega$ independent of the tilt angle.'
    },
    {
      id: 'am5-examples',
      type: 'text' as const,
      content: `## Applications of Precession

### 1. Bicycle Wheel Gyroscope

Hold a spinning bicycle wheel by one end of its axle. The wheel doesn't fall — it precesses around the vertical axis.

$$\\Omega = \\frac{Mgr}{I\\omega}$$

### 2. Earth's Axial Precession

The Earth's rotation axis precesses due to the gravitational torque from the Sun and Moon on Earth's equatorial bulge.

- Period: ~26,000 years
- Current pole star: Polaris
- In ~13,000 years: Vega will be near the pole

### 3. Spinning Top

A toy top exhibits precession while spinning fast. As $\\omega$ decreases due to friction:
- $\\Omega$ increases (precesses faster)
- Eventually $\\omega$ becomes too small to sustain gyroscopic stability
- The top wobbles and falls over

### Worked Example

A disk of $M = 0.5$ kg, $R = 0.1$ m spins at $\\omega = 100$ rad/s. It's mounted $r = 0.15$ m from the pivot.

$$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(0.5)(0.01) = 0.0025 \\text{ kg}\\cdot\\text{m}^2$$

$$\\Omega = \\frac{(0.5)(9.8)(0.15)}{0.0025 \\times 100} = \\frac{0.735}{0.25} = 2.94 \\text{ rad/s}$$`
    },
    {
      id: 'am5-mcq3',
      type: 'mcq' as const,
      question: 'A spinning wheel ($I = 0.1$ kg·m², $\\omega = 50$ rad/s) is held horizontally at one end of its axle, $r = 0.3$ m from the support. The precession rate is (take $g = 10$ m/s², wheel mass $= 2$ kg):',
      options: ['$1.2$ rad/s', '$0.6$ rad/s', '$6$ rad/s', '$12$ rad/s'],
      correctAnswer: 0,
      explanation: '$\\Omega = Mgr/(I\\omega) = (2)(10)(0.3)/(0.1 \\times 50) = 6/5 = 1.2$ rad/s.'
    },
    {
      id: 'am5-mcq4',
      type: 'mcq' as const,
      question: 'Why does a spinning top stay upright?',
      options: [
        'The large angular momentum $\\vec{L}$ resists changes in direction — torque from gravity causes slow precession rather than toppling',
        'Centrifugal force pushes it upward',
        'The spinning reduces the gravitational force',
        'Air resistance creates a stabilizing force'
      ],
      correctAnswer: 0,
      explanation: 'The spinning top has a large $\\vec{L}$ along its axis. Gravity creates a torque perpendicular to $\\vec{L}$, which changes the direction of $\\vec{L}$ (precession) rather than its magnitude. This keeps the top upright as long as $\\omega$ is large enough.'
    },
    {
      id: 'am5-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Expression |
|:---|:---|
| Precession condition | $\\vec{\\tau} \\perp \\vec{L}$ |
| Precession rate | $\\Omega = Mgr/(I\\omega)$ |
| $\\Omega$ vs $\\omega$ | Inversely proportional |
| $\\Omega$ vs $\\theta$ | Independent |
| Nutation | Rapid bobbing; damps out |
| Gyroscopic stability | Large $L$ resists direction change |

> **Next:** Part 6 — Problem-solving workshop.`
    }
  ]
};
