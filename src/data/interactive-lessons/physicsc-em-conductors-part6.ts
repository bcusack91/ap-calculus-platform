export const physCEMCondPart6Data = {
  topicSlug: "conductors-equilibrium-physics-c-em",
  sections: [
    {
      id: 'ce6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop: Conductors

**Part 6 of 7 — AP-Style Practice**

### Summary of Key Results

| Property | Result |
|:---:|:---:|
| $\\vec{E}$ inside conductor | $0$ |
| Surface field | $\\sigma/\\epsilon_0$ (outward normal) |
| Cavity with charge $q$ | Inner wall: $-q$; Outer surface adjusts |
| Image charge (plane) | $-q$ at mirror point |
| Image charge (sphere) | $-qR/d$ at $R^2/d$ |
| Connected spheres | $\\sigma \\propto 1/R$ |`
    },
    {
      id: 'ce6-mcq1',
      type: 'mcq' as const,
      question: 'A solid conducting sphere of radius $R$ has charge $+Q$. A thick conducting shell (inner radius $2R$, outer radius $3R$) with charge $+2Q$ surrounds it. The electric field at $r = 2.5R$ is:',
      options: [
        '$0$',
        '$kQ/(2.5R)^2$',
        '$3kQ/(2.5R)^2$',
        '$k(3Q)/(2.5R)^2$'
      ],
      correctAnswer: 0,
      explanation: 'At $r = 2.5R$, we are inside the conducting shell ($2R < r < 3R$). The field inside a conductor is always zero.'
    },
    {
      id: 'ce6-problem1',
      type: 'text' as const,
      content: `## Problem 1: Nested Shells

A point charge $+q$ at the center of a conducting shell (inner radius $a$, outer radius $b$) that carries net charge $+2q$.

### Find $\\vec{E}$ in All Regions

**Region 1: $r < a$**
Gaussian sphere encloses only $+q$:
$$E = \\frac{kq}{r^2}$$

**Region 2: $a < r < b$ (inside conductor)**
$$E = 0$$

**Region 3: $r > b$**
Gaussian sphere encloses total charge. Inner wall: $-q$ (induced). Outer wall: $+2q - (-q) = +3q$.
$$E = \\frac{k(3q)}{r^2}$$

### Potential at Center

$$V(0) = V_{\\text{outer}} + \\int_b^a \\frac{kq}{r^2}(-dr) + 0$$

$$V(0) = \\frac{k(3q)}{b} + kq\\left(\\frac{1}{a} - \\frac{1}{b}\\right) = \\frac{kq}{a} + \\frac{2kq}{b}$$`
    },
    {
      id: 'ce6-mcq2',
      type: 'mcq' as const,
      question: 'In Problem 1, the charge on the outer surface of the shell is:',
      options: ['$+3q$', '$+2q$', '$+q$', '$-q$'],
      correctAnswer: 0,
      explanation: 'Inner surface: $-q$ (induced). Shell total: $+2q$. Outer surface: $+2q - (-q) = +3q$.'
    },
    {
      id: 'ce6-problem2',
      type: 'text' as const,
      content: `## Problem 2: Force Between Induced Charges

A point charge $+q$ is placed at distance $d$ from the center of an isolated, neutral conducting sphere of radius $R$.

### Approach

For an isolated neutral sphere (not grounded!), the image solution requires **two** image charges:
1. $q_1' = -qR/d$ at $d_1' = R^2/d$ (to make $V = 0$ on sphere).
2. $q_2' = +qR/d$ at the center (to keep total induced charge $= 0$).

### Force Calculation

$$F = kq\\left[\\frac{q_1'}{(d - R^2/d)^2} + \\frac{q_2'}{d^2}\\right]$$

$$= kq\\left[\\frac{-qR/d}{(d^2-R^2)^2/d^2} + \\frac{qR/d}{d^2}\\right]$$

$$= \\frac{kq^2R}{d}\\left[-\\frac{d^2}{(d^2-R^2)^2} + \\frac{1}{d^2}\\right]$$

For $d \\gg R$, the force is **attractive** (the $q_1'$ term dominates), proportional to $1/d^3$ at leading order — this is the force of a charge on an induced dipole.`
    },
    {
      id: 'ce6-mcq3',
      type: 'mcq' as const,
      question: 'A charge $+q$ near a neutral conducting sphere. The force between them is:',
      options: [
        'Attractive, falling off faster than $1/d^2$',
        'Repulsive',
        'Zero (the sphere is neutral)',
        'Attractive, falling off as $1/d^2$'
      ],
      correctAnswer: 0,
      explanation: 'The induced dipole in the neutral sphere creates an attractive image force. Since the induced dipole moment $\\propto 1/d^2$, the force $\\propto 1/d^4$ or $1/d^3$ depending on the multipole analysis — in any case, faster than $1/d^2$.'
    },
    {
      id: 'ce6-problem3',
      type: 'text' as const,
      content: `## Problem 3: Capacitance from Conductor Properties

A single isolated conducting sphere of radius $R$ — what is its capacitance?

Charge $Q$ on the sphere produces potential:

$$V = \\frac{kQ}{R} = \\frac{Q}{4\\pi\\epsilon_0 R}$$

By definition, $C = Q/V$:

$$\\boxed{C = 4\\pi\\epsilon_0 R}$$

### Numerical Example

For $R = 10\\;\\text{cm}$:

$$C = 4\\pi(8.85\\times10^{-12})(0.10) = 1.11\\times10^{-11}\\;\\text{F} \\approx 11\\;\\text{pF}$$

Even a sphere the size of Earth ($R = 6.4\\times10^6\\;\\text{m}$) has only $C \\approx 710\\;\\mu\\text{F}$.`
    },
    {
      id: 'ce6-mcq4',
      type: 'mcq' as const,
      question: 'Doubling the radius of an isolated conducting sphere changes its capacitance by a factor of:',
      options: ['$2$', '$4$', '$1/2$', '$\\sqrt{2}$'],
      correctAnswer: 0,
      explanation: '$C = 4\\pi\\epsilon_0 R$. Since $C \\propto R$, doubling $R$ doubles $C$.'
    }
  ]
};
