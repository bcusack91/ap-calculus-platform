export const physCCircMotionPart7Data = {
  topicSlug: "circular-motion-physics-c",
  sections: [
    {
      id: 'cm7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Circular Motion**

### Complete Topic Reference

| Concept | Formula | Part |
|:---:|:---:|:---:|
| Speed | $v = r\\omega = 2\\pi r/T$ | 1 |
| Centripetal acceleration | $a_c = v^2/r = \\omega^2 r$ | 1, 2 |
| Position vector | $\\vec{r} = r\\cos(\\omega t)\\hat{x} + r\\sin(\\omega t)\\hat{y}$ | 2 |
| acceleration derivation | $\\vec{a} = -\\omega^2\\vec{r}$ | 2 |
| Design speed (banked) | $v = \\sqrt{rg\\tan\\beta}$ | 3 |
| Min speed at top of loop | $v_{\\min} = \\sqrt{gr}$ | 4 |
| Min speed at bottom of loop | $v_{\\min} = \\sqrt{5gr}$ | 4 |
| Tangential acceleration | $a_t = r\\alpha = dv/dt$ | 5 |
| Total acceleration | $|\\vec{a}| = \\sqrt{a_c^2 + a_t^2}$ | 5 |`
    },
    {
      id: 'cm7-mcq1',
      type: 'mcq' as const,
      question: 'A satellite orbits Earth at radius $r$ from the center. Its orbital speed is $v = \\sqrt{GM/r}$. If the radius doubles, the new speed is:',
      options: [
        '$v/\\sqrt{2}$',
        '$v/2$',
        '$2v$',
        '$v\\sqrt{2}$'
      ],
      correctAnswer: 0,
      explanation: '$v \\propto 1/\\sqrt{r}$. If $r \\to 2r$: $v_{\\text{new}} = \\sqrt{GM/(2r)} = v/\\sqrt{2}$.'
    },
    {
      id: 'cm7-app1',
      type: 'text' as const,
      content: `## Application: Centrifuge

A centrifuge of radius $R = 0.15$ m spins at $n = 3000$ RPM.

**Angular velocity:**
$$\\omega = 2\\pi \\times \\frac{3000}{60} = 100\\pi \\approx 314 \\text{ rad/s}$$

**Centripetal acceleration:**
$$a_c = \\omega^2 R = (100\\pi)^2(0.15) = 14,804 \\text{ m/s}^2$$

**In units of $g$:**
$$\\frac{a_c}{g} = \\frac{14,804}{9.8} \\approx 1,511\\,g$$

### Application: Car on a Banked Curve

An engineer designs a highway exit ramp with $r = 200$ m for a design speed of 60 km/h (16.7 m/s).

**Required banking angle:**
$$\\tan\\beta = \\frac{v^2}{rg} = \\frac{278}{2000} = 0.139$$
$$\\beta = \\arctan(0.139) \\approx 7.9°$$

**With $\\mu_s = 0.7$, maximum safe speed:**
$$v_{\\max} = \\sqrt{rg\\frac{\\tan\\beta + \\mu_s}{1 - \\mu_s\\tan\\beta}} = \\sqrt{2000\\frac{0.139 + 0.7}{1 - 0.098}}$$
$$= \\sqrt{2000 \\times 0.931} = \\sqrt{1862} \\approx 43.1 \\text{ m/s} \\approx 155 \\text{ km/h}$$`
    },
    {
      id: 'cm7-mcq2',
      type: 'mcq' as const,
      question: 'A particle moves along a circle. At a certain instant, $|\\vec{a}| = 10$ m/s² and the acceleration makes a $60°$ angle with the radius. What is $a_c$?',
      options: [
        '$10\\cos 60° = 5$ m/s²',
        '$10\\sin 60° \\approx 8.66$ m/s²',
        '$10$ m/s²',
        '$10\\tan 60° \\approx 17.3$ m/s²'
      ],
      correctAnswer: 0,
      explanation: 'The angle between $\\vec{a}$ and the radial direction is $60°$. The radial component: $a_c = |\\vec{a}|\\cos 60° = 5$ m/s². The tangential component: $a_t = |\\vec{a}|\\sin 60° \\approx 8.66$ m/s².'
    },
    {
      id: 'cm7-app2',
      type: 'text' as const,
      content: `## Application: Kepler's Third Law (Preview)

For a planet of mass $m$ orbiting a star of mass $M$ in a circular orbit:

**Gravitational force = centripetal force:**
$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

$$v = \\sqrt{\\frac{GM}{r}}$$

**Period:**
$$T = \\frac{2\\pi r}{v} = 2\\pi r\\sqrt{\\frac{r}{GM}} = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

$$\\boxed{T^2 = \\frac{4\\pi^2}{GM}r^3}$$

This is **Kepler's Third Law**: $T^2 \\propto r^3$.

### Geostationary Orbit

For a satellite orbiting with $T = 24$ hours:

$$r = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3}$$

$$r = \\left(\\frac{6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24} \\times (86400)^2}{4\\pi^2}\\right)^{1/3} \\approx 42,200 \\text{ km}$$

This is about 35,800 km above Earth's surface.`
    },
    {
      id: 'cm7-mcq3',
      type: 'mcq' as const,
      question: 'If Earth\'s orbital radius were doubled (keeping the Sun\'s mass the same), the orbital period would change by a factor of:',
      options: [
        '$2\\sqrt{2} \\approx 2.83$',
        '$2$',
        '$4$',
        '$\\sqrt{2}$'
      ],
      correctAnswer: 0,
      explanation: '$T^2 \\propto r^3$. If $r \\to 2r$: $T^2 \\to 8T^2$, so $T \\to 2\\sqrt{2}\\,T$.'
    },
    {
      id: 'cm7-mcq4',
      type: 'mcq' as const,
      question: 'A mass on a frictionless table is attached to a string through a hole in the table. It orbits with radius $r_1$ and speed $v_1$. The string is pulled from below, reducing the radius to $r_2 = r_1/2$. The new speed is:',
      options: [
        '$2v_1$ (angular momentum conservation: $mv_1r_1 = mv_2r_2$)',
        '$v_1\\sqrt{2}$',
        '$v_1/2$',
        '$4v_1$'
      ],
      correctAnswer: 0,
      explanation: 'No torque about the hole, so angular momentum is conserved: $L = mvr = \\text{const}$. $mv_1 r_1 = mv_2(r_1/2)$, giving $v_2 = 2v_1$.'
    },
    {
      id: 'cm7-mcq5',
      type: 'mcq' as const,
      question: 'A bucket of water swings in a vertical circle of radius 1 m. What is the minimum speed at the top so the water doesn\'t fall out? ($g = 10$ m/s²)',
      options: [
        '$\\sqrt{10} \\approx 3.16$ m/s',
        '$10$ m/s',
        '$\\sqrt{20} \\approx 4.47$ m/s',
        '$5$ m/s'
      ],
      correctAnswer: 0,
      explanation: 'At the top, the water stays in if gravity provides at least the centripetal acceleration: $g \\geq v^2/r$, so $v_{\\min} = \\sqrt{gr} = \\sqrt{10} \\approx 3.16$ m/s.'
    },
    {
      id: 'cm7-completion',
      type: 'text' as const,
      content: `## 🎉 Topic Complete: Circular Motion

You've mastered the full AP Physics C treatment of circular motion:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Uniform circular motion | ✅ |
| 2 | Centripetal acceleration derivation | ✅ |
| 3 | Banked curves | ✅ |
| 4 | Vertical circles | ✅ |
| 5 | Non-uniform circular motion | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Takeaway:** Circular motion problems require (1) identifying the center and radius, (2) applying Newton's second law in the radial direction with $\\sum F_r = mv^2/r$, and (3) using energy conservation for speed relationships. The calculus-level content (derivations, polar coordinates, angular kinematics) is what distinguishes AP Physics C from AP Physics 1.`
    }
  ]
};
