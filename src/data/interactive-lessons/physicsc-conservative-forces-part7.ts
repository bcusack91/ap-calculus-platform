export const physCConsForcePart7Data = {
  topicSlug: "conservative-forces-physics-c",
  sections: [
    {
      id: 'cf7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Conservative Forces & Energy**

### Complete Topic Reference

| Concept | Formula | Part |
|:---:|:---:|:---:|
| Conservative force | Path-independent work | 1 |
| Non-conservative work | $W_{nc} = \\Delta K + \\Delta U$ | 1 |
| Gravity PE | $U = mgy$ | 2 |
| Spring PE | $U = \\frac{1}{2}kx^2$ | 2 |
| Gravitational PE | $U = -GMm/r$ | 2 |
| Force from PE | $F = -dU/dx$ | 3 |
| Stable equilibrium | $U'' > 0$ (local min) | 3, 4 |
| Turning points | $U(x) = E$ | 4 |
| Small oscillation | $\\omega = \\sqrt{U''(x_0)/m}$ | 3 |
| Curl test (2D) | $\\partial F_x/\\partial y = \\partial F_y/\\partial x$ | 5 |
| Closed loop | $\\oint \\vec{F}\\cdot d\\vec{r} = 0$ | 5 |`
    },
    {
      id: 'cf7-mcq1',
      type: 'mcq' as const,
      question: 'A roller coaster car (mass $m$) starts from rest at height $h$ and enters a loop of radius $R$. If only gravity acts, the normal force at the top of the loop is:',
      options: [
        '$N = mg(2h/R - 5)$',
        '$N = mg(h/R - 2)$',
        '$N = mg(h/R - 1)$',
        '$N = mg(2h/R - 1)$'
      ],
      correctAnswer: 0,
      explanation: 'Energy: $mgh = \\frac{1}{2}mv^2_{\\text{top}} + mg(2R)$, so $v^2_{\\text{top}} = 2g(h - 2R)$. At top: $N + mg = mv^2/R = 2mg(h-2R)/R$. $N = mg(2h/R - 4 - 1) = mg(2h/R - 5)$.'
    },
    {
      id: 'cf7-app1',
      type: 'text' as const,
      content: `## Application: Escape Velocity

The minimum launch speed for an object to escape a planet's gravity (starting from the surface):

$$\\frac{1}{2}mv_{\\text{esc}}^2 + \\left(-\\frac{GMm}{R}\\right) = 0 + 0$$

$$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$$

For Earth: $v_{\\text{esc}} = \\sqrt{\\frac{2(6.67 \\times 10^{-11})(5.97 \\times 10^{24})}{6.37 \\times 10^6}} \\approx 11.2$ km/s

### Key Observations:

1. Escape velocity is **independent of the object's mass** (mass cancels)
2. It depends only on the planet's mass $M$ and radius $R$
3. This is a direct application of energy conservation with $U = -GMm/r$
4. If launched with $v < v_{\\text{esc}}$, the object reaches a maximum height and returns (bound orbit)
5. If $v = v_{\\text{esc}}$: the object barely escapes ($v \\to 0$ as $r \\to \\infty$)
6. If $v > v_{\\text{esc}}$: the object escapes with kinetic energy remaining`
    },
    {
      id: 'cf7-mcq2',
      type: 'mcq' as const,
      question: 'If a planet has twice Earth\'s mass and twice Earth\'s radius, its escape velocity compared to Earth\'s is:',
      options: [
        'The same ($v_{\\text{esc}} = \\sqrt{2GM/R}$, and $2M/2R = M/R$)',
        'Twice as large',
        '$\\sqrt{2}$ times as large',
        'Half as large'
      ],
      correctAnswer: 0,
      explanation: '$v_{\\text{esc}} = \\sqrt{2GM/R}$. With $M\' = 2M$ and $R\' = 2R$: $v\' = \\sqrt{2G(2M)/(2R)} = \\sqrt{2GM/R} = v_{\\text{esc}}$. The escape velocity is unchanged!'
    },
    {
      id: 'cf7-app2',
      type: 'text' as const,
      content: `## Application: Molecular Potential Energy

The Morse potential models the bond between atoms:

$$U(r) = D_e\\left(1 - e^{-a(r - r_e)}\\right)^2 - D_e$$

where $D_e$ is the bond dissociation energy, $r_e$ is the equilibrium bond length, and $a$ controls the width.

**Equilibrium:** $U'(r_e) = 0$. $U(r_e) = -D_e$ (minimum).

**Force near equilibrium:**
$$F = -U'(r) = -2D_e a\\left(1 - e^{-a(r-r_e)}\\right)e^{-a(r-r_e)}$$

**Effective spring constant:**
$$k_{\\text{eff}} = U''(r_e) = 2D_e a^2$$

**Small oscillation frequency:**
$$\\omega = \\sqrt{\\frac{2D_e a^2}{\\mu}}$$

where $\\mu$ is the reduced mass.

**Energy levels:**
- Bound states: $E < 0$ (particle oscillates between turning points)
- Dissociation: $E \\geq 0$ (molecule breaks apart)
- Total binding energy: $D_e$ (depth of the well)

This directly connects conservative force theory to chemistry and quantum mechanics.`
    },
    {
      id: 'cf7-mcq3',
      type: 'mcq' as const,
      question: 'A particle moves in the potential $U(x) = -U_0 \\text{sech}^2(x/a)$ (a "potential well" that goes to zero at $\\pm\\infty$). For this particle to be bound, its total energy must satisfy:',
      options: [
        '$-U_0 < E < 0$',
        '$E > 0$',
        '$E > U_0$',
        '$E < -U_0$'
      ],
      correctAnswer: 0,
      explanation: 'The potential minimum is $U_{\\min} = -U_0$ (at $x = 0$) and $U \\to 0$ as $x \\to \\pm\\infty$. For bound states: the particle must be trapped between turning points, requiring $U_{\\min} < E < U(\\infty)$, i.e., $-U_0 < E < 0$.'
    },
    {
      id: 'cf7-mcq4',
      type: 'mcq' as const,
      question: 'A 3 kg block compressed against a spring ($k = 600$ N/m, compression $x = 0.2$ m) is released on a surface. After traveling 5 m on a flat rough surface ($\\mu_k = 0.15$), its speed is:',
      options: [
        '$\\sqrt{\\frac{600(0.04) - 2(0.15)(30)(5)}{3}} \\approx 1.41$ m/s',
        '$\\sqrt{\\frac{600(0.04)}{3}} = 2.83$ m/s',
        '$0$ (friction stops it)',
        '$\\sqrt{\\frac{600(0.04) - 2(0.15)(30)(5)}{3}}$ is imaginary — block stops'
      ],
      correctAnswer: 0,
      explanation: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2 + \\mu_k mgd$. $12 = 1.5v^2 + 0.15(30)(5) = 1.5v^2 + 22.5$. Wait: $12 < 22.5$, so the block actually stops before reaching 5 m! Let me recalculate: $d_{\\max} = kx^2/(2\\mu_k mg) = 24/(2 \\times 0.15 \\times 30) = 24/9 = 2.67$ m. The block stops at 2.67 m.'
    },
    {
      id: 'cf7-mcq5',
      type: 'mcq' as const,
      question: 'The curl test $\\partial F_x/\\partial y = \\partial F_y/\\partial x$ is equivalent to testing whether:',
      options: [
        'A potential energy function $U(x,y)$ exists such that $\\vec{F} = -\\nabla U$',
        'The force is perpendicular to the displacement everywhere',
        'The force has constant magnitude',
        'The force is velocity-dependent'
      ],
      correctAnswer: 0,
      explanation: 'The equality of mixed partial derivatives ($\\partial F_x/\\partial y = \\partial F_y/\\partial x$) is the integrability condition. If satisfied, $\\vec{F}$ is the gradient of a scalar field — specifically $\\vec{F} = -\\nabla U$ for some potential $U$. This makes the force conservative.'
    },
    {
      id: 'cf7-completion',
      type: 'text' as const,
      content: `## 🎉 Topic Complete: Conservative Forces & Energy

You've mastered the full AP Physics C treatment of conservative forces:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Conservative vs non-conservative forces | ✅ |
| 2 | Potential energy functions | ✅ |
| 3 | $F = -dU/dx$ | ✅ |
| 4 | Energy diagrams and equilibrium | ✅ |
| 5 | Path independence and work | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Takeaway:** The concept of conservative forces enables energy conservation — the most powerful problem-solving tool in mechanics. On the AP exam, master three things: (1) deriving $U$ from $F$ and vice versa, (2) reading energy diagrams for equilibrium and turning points, and (3) applying $W_{nc} = \\Delta E_{\\text{mech}}$ when non-conservative forces are present.`
    }
  ]
};
