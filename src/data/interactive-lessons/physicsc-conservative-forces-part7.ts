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
        '$N = mg(2h/R)$'
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
        'The same as Earth\'s',
        'Twice Earth\'s',
        '$\\sqrt{2}$ times Earth\'s',
        'Half of Earth\'s'
      ],
      correctAnswer: 0,
      explanation: '$v_{\\text{esc}} = \\sqrt{2GM/R}$. With $M\' = 2M$ and $R\' = 2R$: $v\' = \\sqrt{2G(2M)/(2R)} = \\sqrt{2GM/R} = v_{\\text{esc}}$. The escape velocity is unchanged!'
    },
    {
      id: 'cf7-app2',
      type: 'text' as const,
      content: `## Application: Bungee Jump (Gravity + Spring)

A $60$ kg jumper steps off a bridge with a bungee cord of natural length $20$ m that acts like a spring with $k = 300$ N/m once taut ($g = 10$ m/s²). Air resistance is negligible.

**Lowest point.** Let $x$ be the maximum stretch. The jumper starts and ends at rest, so all the gravitational energy lost goes into the cord:

$$mg(20 + x) = \\tfrac{1}{2}kx^2 \\implies 600(20 + x) = 150x^2 \\implies x^2 - 4x - 80 = 0$$

$$x = \\frac{4 + \\sqrt{16 + 320}}{2} \\approx 11.2 \\text{ m}$$

so the jumper falls about $31.2$ m in total.

**Maximum speed.** Speed is greatest where the net force is zero, at a stretch of $mg/k = 2.0$ m (22 m below the bridge):

$$\\tfrac{1}{2}mv^2 = mg(22) - \\tfrac{1}{2}k(2.0)^2 \\implies v^2 = 440 - 20 = 420 \\implies v \\approx 20.5 \\text{ m/s}$$

Both answers come from $K + U_{\\text{grav}} + U_{\\text{spring}} = \\text{constant}$, without ever solving for the motion in time.`
    },
    {
      id: 'cf7-mcq3',
      type: 'mcq' as const,
      question: 'A particle moves in the potential $U(x) = -\\frac{U_0}{1 + x^2/a^2}$ (a well that goes to zero at $\\pm\\infty$). For this particle to be bound, its total energy must satisfy:',
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
        'It stops after about 2.67 m',
        '$\\approx 2.83$ m/s at 5 m',
        '$\\approx 1.00$ m/s at 5 m',
        'It stops exactly at 5 m'
      ],
      correctAnswer: 0,
      explanation: 'The spring stores $\\frac{1}{2}kx^2 = \\frac{1}{2}(600)(0.2)^2 = 12$ J, but friction over 5 m would remove $\\mu_k mgd = 0.15(30)(5) = 22.5$ J. The block runs out of energy first, after $d = 12/(0.15 \\times 30) \\approx 2.67$ m. Ignoring friction gives 2.83 m/s; using $kx^2$ instead of $\\frac{1}{2}kx^2$ gives 1.00 m/s.'
    },
    {
      id: 'cf7-mcq5',
      type: 'mcq' as const,
      question: 'A force does zero total work on an object carried around any closed path. This tells you the force:',
      options: [
        'Is conservative, so a $U$ function exists',
        'Is perpendicular to the motion',
        'Has constant magnitude and direction',
        'Does no work on any open path either'
      ],
      correctAnswer: 0,
      explanation: 'Zero work around every closed path is equivalent to path-independent work, which is the definition of a conservative force, so a potential energy can be defined for it. It can still do work on an open path (gravity does).'
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
