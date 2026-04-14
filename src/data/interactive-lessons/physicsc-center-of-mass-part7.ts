export const physCCOMPart7Data = {
  topicSlug: "center-of-mass-physics-c",
  sections: [
    {
      id: 'com7-intro',
      type: 'text' as const,
      content: `# Center of Mass — Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Formula Reference

| Formula | Expression |
|:---|:---|
| Discrete COM | $\\vec{r}_{\\text{cm}} = \\frac{\\sum m_i \\vec{r}_i}{M}$ |
| Continuous COM | $\\vec{r}_{\\text{cm}} = \\frac{1}{M}\\int \\vec{r}\\,dm$ |
| COM velocity | $\\vec{v}_{\\text{cm}} = \\frac{\\vec{p}_{\\text{total}}}{M}$ |
| Newton's 2nd (system) | $\\vec{F}_{\\text{ext}} = M\\vec{a}_{\\text{cm}}$ |
| KE decomposition | $K = \\frac{1}{2}Mv_{\\text{cm}}^2 + K_{\\text{int}}$ |
| Reduced mass | $\\mu = \\frac{m_1 m_2}{m_1+m_2}$ |

### Key COM Positions

| Shape | COM |
|:---|:---|
| Uniform rod | $L/2$ from end |
| Solid cone | $h/4$ from base |
| Semicircle wire | $2R/\\pi$ from center |
| Solid hemisphere | $3R/8$ from base |`
    },
    {
      id: 'com7-mcq1',
      type: 'mcq' as const,
      question: 'A rod of length $L$ has density $\\lambda(x) = \\lambda_0 e^{x/L}$. Which expression gives $x_{\\text{cm}}$?',
      options: [
        '$\\frac{\\int_0^L x e^{x/L}dx}{\\int_0^L e^{x/L}dx}$',
        '$\\frac{\\int_0^L e^{x/L}dx}{\\int_0^L x e^{x/L}dx}$',
        '$\\frac{L}{2}$',
        '$\\frac{\\int_0^L x^2 e^{x/L}dx}{\\int_0^L x e^{x/L}dx}$'
      ],
      correctAnswer: 0,
      explanation: '$x_{\\text{cm}} = \\frac{\\int x\\,dm}{\\int dm} = \\frac{\\int_0^L x \\lambda_0 e^{x/L}dx}{\\int_0^L \\lambda_0 e^{x/L}dx}$. The $\\lambda_0$ cancels.'
    },
    {
      id: 'com7-mcq2',
      type: 'mcq' as const,
      question: 'Two particles ($m$ at origin, $3m$ at position $d$) are connected by a spring and released. When they collide, they meet at:',
      options: ['$3d/4$ from the origin', '$d/2$', '$d/4$', '$d/3$'],
      correctAnswer: 0,
      explanation: 'The COM is at $x_{\\text{cm}} = \\frac{m(0)+3m(d)}{4m} = 3d/4$. With no external forces, the COM doesn\'t move, so they meet at $x = 3d/4$.'
    },
    {
      id: 'com7-worked',
      type: 'text' as const,
      content: `### AP-Style Free Response

A uniform solid disk of mass $M$ and radius $R$ has a hole of radius $R/3$ drilled through it. The hole is centered at distance $R/3$ from the disk's center. Find the COM of the remaining piece.

**Solution:**

Let the disk center be at the origin and the hole center at $x = R/3$.

Area of full disk: $\\pi R^2$. Area of hole: $\\pi(R/3)^2 = \\pi R^2/9$.

Mass of full disk: $M_{\\text{full}} = M \\cdot \\frac{\\pi R^2}{\\pi R^2 - \\pi R^2/9} = M \\cdot \\frac{9}{8}$

Mass of hole: $M_{\\text{hole}} = \\frac{M}{8} \\cdot \\frac{9}{8}$... Let me redo this more carefully.

Let $\\sigma = M/(\\pi R^2 - \\pi R^2/9) = M/(8\\pi R^2/9) = 9M/(8\\pi R^2)$

$M_{\\text{full}} = \\sigma \\pi R^2 = 9M/8$

$M_{\\text{hole}} = \\sigma \\pi R^2/9 = M/8$

$$x_{\\text{cm}} = \\frac{M_{\\text{full}}(0) - M_{\\text{hole}}(R/3)}{M_{\\text{full}} - M_{\\text{hole}}} = \\frac{-(M/8)(R/3)}{9M/8 - M/8} = \\frac{-MR/24}{M} = -\\frac{R}{24}$$

The COM shifts $R/24$ **away** from the hole.`
    },
    {
      id: 'com7-mcq3',
      type: 'mcq' as const,
      question: 'A $60$ kg astronaut and a $15$ kg toolbox float 5 m apart in space. The astronaut pulls the toolbox toward herself using a rope. When they meet, how far has the astronaut moved?',
      options: ['$1$ m', '$4$ m', '$2.5$ m', '$3$ m'],
      correctAnswer: 0,
      explanation: 'COM is fixed. $x_{\\text{cm}} = \\frac{60(0) + 15(5)}{75} = 1$ m from astronaut. They meet at the COM, so astronaut moves $1$ m and toolbox moves $4$ m.'
    },
    {
      id: 'com7-mcq4',
      type: 'mcq' as const,
      question: 'A projectile follows a parabolic path and explodes at its peak into $n$ fragments. Ignoring air resistance, the center of mass of the fragments:',
      options: [
        'Continues on the original parabolic path',
        'Stops at the peak',
        'Follows a new path determined by the explosion',
        'Falls straight down from the peak'
      ],
      correctAnswer: 0,
      explanation: 'The explosion is an internal force. The only external force is gravity ($\\vec{F}_{\\text{ext}} = Mg$ downward), so the COM continues on the same parabolic path as if no explosion occurred.'
    },
    {
      id: 'com7-mcq5',
      type: 'mcq' as const,
      question: 'For a two-body elastic collision with target at rest, the maximum energy transfer occurs when:',
      options: ['$m_1 = m_2$', '$m_1 \\gg m_2$', '$m_1 \\ll m_2$', 'Energy transfer is independent of mass ratio'],
      correctAnswer: 0,
      explanation: 'Fraction transferred $= \\frac{4m_1m_2}{(m_1+m_2)^2}$. This is maximized when $m_1 = m_2$, giving 100% energy transfer (the projectile stops, target moves with the initial speed).'
    },
    {
      id: 'com7-summary',
      type: 'text' as const,
      content: `## 🎉 Topic Complete — Center of Mass

You've mastered:

| Part | Topic | Status |
|:---|:---|:---|
| 1 | Discrete COM definition | ✅ |
| 2 | Continuous bodies (integration) | ✅ |
| 3 | COM velocity & momentum | ✅ |
| 4 | COM reference frame | ✅ |
| 5 | COM motion under external forces | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Insight:** The center of mass reduces complex multi-body problems to single-particle dynamics. Master the COM frame and you'll cut through collision and explosion problems with ease.`
    }
  ]
};
