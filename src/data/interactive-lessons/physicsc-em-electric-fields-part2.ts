export const physCEMElecFieldPart2Data = {
  topicSlug: "electric-fields-physics-c-em",
  sections: [
    {
      id: 'ef2-intro',
      type: 'text' as const,
      content: `# Electric Fields from Point Charges & Superposition

**Part 2 of 7 — Superposition Principle**

The electric field obeys the **principle of superposition**: the net field at any point is the vector sum of the individual fields from each source charge.

$$\\vec{E}_{\\text{net}} = \\sum_{i=1}^{N} \\vec{E}_i = \\sum_{i=1}^{N} \\frac{kq_i}{|\\vec{r}-\\vec{r}_i|^2}\\hat{r}_i$$

### Strategy
1. Identify all source charges and the field point $P$.
2. Compute each $\\vec{E}_i$ (magnitude and direction).
3. Resolve into components ($E_x$, $E_y$).
4. Sum components: $E_{\\text{net},x} = \\sum E_{i,x}$, etc.
5. Find $|\\vec{E}_{\\text{net}}|$ and direction from components.`
    },
    {
      id: 'ef2-mcq1',
      type: 'mcq' as const,
      question: 'Two charges $+Q$ and $+Q$ are separated by distance $d$. The electric field at the midpoint is:',
      options: ['$0$', '$kQ/(d/2)^2$ to the right', '$2kQ/(d/2)^2$ to the right', '$kQ/d^2$ to the right'],
      correctAnswer: 0,
      explanation: 'By symmetry, the two fields at the midpoint are equal in magnitude but opposite in direction, so they cancel. $\\vec{E}_{\\text{net}} = 0$.'
    },
    {
      id: 'ef2-worked1',
      type: 'text' as const,
      content: `## Worked Example: Two Charges on the x-Axis

Charge $q_1 = +4.0\\;\\mu\\text{C}$ at $x = 0$ and $q_2 = -2.0\\;\\mu\\text{C}$ at $x = 0.30\\;\\text{m}$. Find $\\vec{E}$ at $P = (0.15, 0)\\;\\text{m}$.

**From $q_1$:**
$$E_1 = \\frac{k|q_1|}{r_1^2} = \\frac{(8.99\\times10^9)(4\\times10^{-6})}{(0.15)^2} = 1.60\\times10^6\\;\\text{N/C}$$
Direction: $+x$ (away from positive charge).

**From $q_2$:**
$$E_2 = \\frac{k|q_2|}{r_2^2} = \\frac{(8.99\\times10^9)(2\\times10^{-6})}{(0.15)^2} = 7.99\\times10^5\\;\\text{N/C}$$
Direction: $+x$ (toward negative charge, which is to the right of $P$).

**Net field:**
$$E_{\\text{net}} = E_1 + E_2 = 1.60\\times10^6 + 7.99\\times10^5 = 2.40\\times10^6\\;\\text{N/C}\\;(+x)$$

Both fields point in $+x$, so they reinforce.`
    },
    {
      id: 'ef2-mcq2',
      type: 'mcq' as const,
      question: 'Charges $+Q$ at $(0,0)$ and $-Q$ at $(d,0)$. At point $(d/2, 0)$, both individual fields point in which direction?',
      options: ['Both in $+x$', 'Both in $-x$', '$+x$ and $-x$ respectively', 'It depends on the magnitude of $Q$'],
      correctAnswer: 0,
      explanation: 'The field from $+Q$ points away from it (in $+x$ toward the midpoint\'s right). The field from $-Q$ points toward it (also in $+x$ from the midpoint). Both reinforce in $+x$.'
    },
    {
      id: 'ef2-offaxis',
      type: 'text' as const,
      content: `## Off-Axis Superposition

When the field point is not on the line joining the charges, you must resolve into components.

### Worked Example

Equal charges $+Q$ at $(0, +a)$ and $(0, -a)$. Find $\\vec{E}$ at $(d, 0)$.

Let $r = \\sqrt{d^2 + a^2}$.

Each charge produces a field of magnitude $E_0 = kQ/r^2$ at point $P$.

By symmetry, the $y$-components cancel. The $x$-components add:

$$E_x = 2E_0\\cos\\theta = 2\\frac{kQ}{r^2}\\cdot\\frac{d}{r} = \\frac{2kQd}{(d^2+a^2)^{3/2}}$$

This is a result you should recognize — the on-axis field of two symmetric charges.

### Limiting Behavior

As $d \\gg a$:
$$E_x \\approx \\frac{2kQ}{d^2}$$

which is just the field of a point charge $2Q$ — the two charges look like one from far away.`
    },
    {
      id: 'ef2-mcq3',
      type: 'mcq' as const,
      question: 'Two charges $+Q$ are at $(0, \\pm a)$. At point $(d, 0)$ with $d \\gg a$, the net field behaves like that of:',
      options: ['A single charge $2Q$', 'A dipole', 'A quadrupole', 'Zero field'],
      correctAnswer: 0,
      explanation: 'When $d \\gg a$, the two same-sign charges appear as one charge $2Q$. The field falls off as $1/d^2$.'
    },
    {
      id: 'ef2-null',
      type: 'text' as const,
      content: `## Finding the Null Point

For two charges of the same sign but different magnitudes, there is a point between them (or beyond the smaller charge) where $\\vec{E} = 0$.

### Example

$q_1 = +4Q$ at $x = 0$, $q_2 = +Q$ at $x = L$. Find where $E = 0$.

The null point must be between them (same-sign charges). Let the null point be at $x = d$ from $q_1$.

$$\\frac{k(4Q)}{d^2} = \\frac{kQ}{(L-d)^2}$$

$$\\frac{4}{d^2} = \\frac{1}{(L-d)^2} \\implies \\frac{2}{d} = \\frac{1}{L-d}$$

$$2(L-d) = d \\implies 2L = 3d \\implies d = \\frac{2L}{3}$$

The null point is at $x = 2L/3$, closer to the smaller charge $q_2$.`
    },
    {
      id: 'ef2-mcq4',
      type: 'mcq' as const,
      question: 'Charges $+9Q$ at $x=0$ and $+Q$ at $x=L$. The null point is at:',
      options: ['$x = 3L/4$', '$x = L/2$', '$x = 2L/3$', '$x = L/4$'],
      correctAnswer: 0,
      explanation: '$9Q/d^2 = Q/(L-d)^2 \\implies 3/d = 1/(L-d) \\implies 3L - 3d = d \\implies d = 3L/4$. The null point is closer to the smaller charge.'
    }
  ]
};
