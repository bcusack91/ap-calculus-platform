export const physCEMElecFieldPart6Data = {
  topicSlug: "electric-fields-physics-c-em",
  sections: [
    {
      id: 'ef6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop: Electric Fields

**Part 6 of 7 — AP-Style Practice**

### Key Formulas

| Formula | Expression |
|:---:|:---:|
| Point charge | $E = kQ/r^2$ |
| Superposition | $\\vec{E}_{\\text{net}} = \\sum \\vec{E}_i$ |
| Ring (on axis) | $E = kQz/(R^2+z^2)^{3/2}$ |
| Disk (on axis) | $E = \\frac{\\sigma}{2\\epsilon_0}\\left(1 - \\frac{z}{\\sqrt{R^2+z^2}}\\right)$ |
| Infinite plane | $E = \\sigma/(2\\epsilon_0)$ |
| Dipole (axial) | $E = 2kp/r^3$ |
| Dipole (equatorial) | $E = kp/r^3$ |`
    },
    {
      id: 'ef6-mcq1',
      type: 'mcq' as const,
      question: 'Three charges are placed along the $x$-axis: $+Q$ at $x = 0$, $-2Q$ at $x = a$, $+Q$ at $x = 2a$. For $r \\gg a$, the field falls off as:',
      options: ['$1/r^4$ (quadrupole)', '$1/r^3$ (dipole)', '$1/r^2$ (monopole)', '$1/r^5$'],
      correctAnswer: 0,
      explanation: 'The net charge is $Q - 2Q + Q = 0$ (not monopole). The dipole moment is also zero by symmetry ($+Q$ at equal distances on either side of $-2Q$). The leading term is quadrupole: $E \\propto 1/r^4$.'
    },
    {
      id: 'ef6-problem1',
      type: 'text' as const,
      content: `## Problem 1: Semicircular Arc of Charge

A thin semicircular arc of radius $R$ carries uniform linear charge density $\\lambda$. Find $\\vec{E}$ at the center.

### Solution

Place the arc in the $xy$-plane, centered at the origin, spanning from $\\theta = -\\pi/2$ to $\\theta = +\\pi/2$ on the right.

An element at angle $\\theta$: $dq = \\lambda R\\,d\\theta$.

Distance to center: $R$. The field from $dq$ points radially inward (toward center):

$$dE = \\frac{k\\lambda R\\,d\\theta}{R^2} = \\frac{k\\lambda}{R}d\\theta$$

By symmetry, the $y$-components cancel. The $x$-component:

$$dE_x = -\\frac{k\\lambda}{R}\\cos\\theta\\,d\\theta$$

$$E_x = -\\frac{k\\lambda}{R}\\int_{-\\pi/2}^{\\pi/2}\\cos\\theta\\,d\\theta = -\\frac{k\\lambda}{R}[\\sin\\theta]_{-\\pi/2}^{\\pi/2} = -\\frac{k\\lambda}{R}(2) = -\\frac{2k\\lambda}{R}$$

$$\\boxed{\\vec{E} = -\\frac{2k\\lambda}{R}\\hat{x} = -\\frac{\\lambda}{2\\pi\\epsilon_0 R}\\hat{x}}$$

The field points toward the arc (in $-x$ for positive $\\lambda$).`
    },
    {
      id: 'ef6-mcq2',
      type: 'mcq' as const,
      question: 'A quarter-circle arc of radius $R$ with charge density $\\lambda$ subtends $\\pi/2$. By how much does $E$ at the center differ from the semicircle result?',
      options: [
        'The components along one axis give $E = k\\lambda/(R\\sqrt{2})$ per component',
        'It is exactly half the semicircle result',
        'It equals the semicircle result',
        'It is zero by symmetry'
      ],
      correctAnswer: 0,
      explanation: 'For a quarter-circle from $\\theta = 0$ to $\\pi/2$: $E_x = -(k\\lambda/R)\\int_0^{\\pi/2}\\cos\\theta\\,d\\theta = -k\\lambda/R$ and similarly $E_y = -k\\lambda/R$. So $|E| = k\\lambda\\sqrt{2}/R$, and each component is $k\\lambda/R$.'
    },
    {
      id: 'ef6-problem2',
      type: 'text' as const,
      content: `## Problem 2: Charged Particle Motion

An electron enters a region of uniform field $E = 2.0 \\times 10^4\\;\\text{N/C}$ (downward) with horizontal velocity $v_0 = 3.0 \\times 10^6\\;\\text{m/s}$. The plates are $L = 0.10\\;\\text{m}$ long.

**Find the vertical deflection as the electron exits.**

### Solution

The electron has charge $q = -e$, so the force is $F = eE$ upward.

$$a_y = \\frac{eE}{m_e} = \\frac{(1.6\\times10^{-19})(2.0\\times10^4)}{9.11\\times10^{-31}} = 3.51 \\times 10^{15}\\;\\text{m/s}^2$$

Time in the field:
$$t = \\frac{L}{v_0} = \\frac{0.10}{3.0\\times10^6} = 3.33 \\times 10^{-8}\\;\\text{s}$$

Vertical deflection:
$$y = \\frac{1}{2}a_y t^2 = \\frac{1}{2}(3.51\\times10^{15})(3.33\\times10^{-8})^2 = 1.95 \\times 10^{-3}\\;\\text{m} \\approx 1.9\\;\\text{mm}$$`
    },
    {
      id: 'ef6-mcq3',
      type: 'mcq' as const,
      question: 'In the electron deflection problem above, if the field strength is doubled, the deflection:',
      options: ['Doubles', 'Quadruples', 'Stays the same', 'Halves'],
      correctAnswer: 0,
      explanation: '$y = eEL^2/(2m_ev_0^2)$. Since $y \\propto E$, doubling $E$ doubles the deflection.'
    },
    {
      id: 'ef6-problem3',
      type: 'text' as const,
      content: `## Problem 3: Non-Uniform Charge Distribution

A rod of length $L$ along the $x$-axis from $0$ to $L$ has charge density $\\lambda(x) = \\lambda_0 x/L$. Find the total charge and $\\vec{E}$ at the origin.

### Total Charge

$$Q = \\int_0^L \\lambda_0 \\frac{x}{L}dx = \\frac{\\lambda_0}{L}\\cdot\\frac{L^2}{2} = \\frac{\\lambda_0 L}{2}$$

### Field at Origin

An element $dq = \\lambda_0(x/L)dx$ at position $x$ produces a field at the origin pointing in $-x$:

$$dE = -\\frac{k\\lambda_0 x\\,dx}{Lx^2}\\hat{x} = -\\frac{k\\lambda_0}{Lx}dx\\,\\hat{x}$$

$$E = -\\frac{k\\lambda_0}{L}\\int_0^L \\frac{dx}{x}$$

This integral **diverges** logarithmically! The charge density goes to zero at $x = 0$, but $dE \\propto 1/x$ diverges.

**Physical insight:** In practice, $\\lambda \\to 0$ faster near the origin would fix this, or a finite-width rod would regularize the integral. This is a good AP discussion point about the limits of idealized models.`
    },
    {
      id: 'ef6-mcq4',
      type: 'mcq' as const,
      question: 'A uniformly charged rod of length $L$ and charge $Q$ has its midpoint at the origin. The field at the origin is:',
      options: [
        '$0$ by symmetry',
        '$kQ/L^2$',
        '$4kQ/L^2$',
        '$2kQ/L^2$'
      ],
      correctAnswer: 0,
      explanation: 'By symmetry, the contributions from the left half and right half of the rod cancel at the midpoint. $\\vec{E} = 0$.'
    }
  ]
};
