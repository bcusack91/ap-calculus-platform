export const physCGravitationPart3Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p3-intro',
      type: 'text' as const,
      content: `# 🪐 Kepler's Third Law and Elliptical Orbits

**Part 3 of 7 — Kepler's Third Law and Elliptical Orbits**

---

### Kepler's Third Law (Circular Orbits)

For a satellite in a circular orbit, gravity alone supplies the centripetal acceleration, which ties the period to the orbital radius and the central mass:

$T^2 = \\frac{4\\pi^2}{GM} r^3$

For two satellites of the **same** central body, the constant cancels:

$\\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}$

**Example:** Earth orbits at 1 AU with $T = 1$ year. For Mars at 1.52 AU:

$T_{\\text{Mars}} = \\left(\\frac{1.52}{1}\\right)^{3/2} \\approx 1.87 \\text{ years}$

Kepler's first and second laws are not on the AP Physics C exam; for non-circular orbits you use conservation of angular momentum and energy instead (below).`
    },
    {
      id: 'physicsc-gravitation-p3-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Deriving Kepler's Third Law

Derive $T^2 = \\frac{4\\pi^2}{GM}r^3$ for a circular orbit from Newton's law of gravitation.

**Step 1 — Balance gravity and centripetal force.** Using $a_c = \\frac{4\\pi^2 r}{T^2}$ for uniform circular motion,

$\\frac{GMm}{r^2} = m\\,\\frac{4\\pi^2 r}{T^2}$

**Step 2 — Cancel $m$ and isolate $T^2$.** Cross-multiplying,

$T^2 = \\frac{4\\pi^2 r^3}{GM}$

**Step 3 — Apply it.** For a geostationary satellite ($T = 86\\,400 \\text{ s}$) around Earth ($GM = 3.99 \\times 10^{14} \\text{ m}^3/\\text{s}^2$):

$r = \\left(\\frac{GM\\,T^2}{4\\pi^2}\\right)^{1/3} = \\left(\\frac{(3.99 \\times 10^{14})(86\\,400)^2}{4\\pi^2}\\right)^{1/3} \\approx 4.2 \\times 10^7 \\text{ m}$

> 🔑 The constant $\\frac{4\\pi^2}{GM}$ is the same for every satellite of the same central body — that is the heart of Kepler's Third Law.`
    },
    {
      id: 'physicsc-gravitation-p3-ellipse',
      type: 'text' as const,
      content: `### Elliptical Orbits: Two Conservation Laws

When a satellite's distance from the central body changes, two quantities stay constant:

| Quantity | Why it is constant | Use |
|----------|-------------------|-----|
| Angular momentum $L = mrv_{\\perp}$ | Gravity points at the center, so its torque is zero | $r_{\\min}v_{\\max} = r_{\\max}v_{\\min}$ |
| Total energy $E = \\tfrac{1}{2}mv^2 - \\frac{GMm}{r}$ | Gravity is the only force and it is conservative | Trade $K$ for $U$ |

The potential energy and the kinetic energy each change around the orbit: the satellite slows as it climbs away and speeds up as it falls back in.

**Worked example.** A satellite's distance from a planet's center ranges from $r_1 = 7.0 \\times 10^6$ m to $r_2 = 2.1 \\times 10^7$ m. Its speed at closest approach is $v_1 = 9.0$ km/s.

*Speed at the farthest point (angular momentum):* at both extremes $\\vec{v} \\perp \\vec{r}$, so

$v_2 = \\frac{r_1 v_1}{r_2} = \\frac{(7.0 \\times 10^6)(9.0)}{2.1 \\times 10^7} = 3.0 \\text{ km/s}$

*Mass of the planet (energy):* $\\tfrac{1}{2}v_1^2 - \\frac{GM}{r_1} = \\tfrac{1}{2}v_2^2 - \\frac{GM}{r_2}$, so

$GM = \\frac{\\tfrac{1}{2}(v_1^2 - v_2^2)}{1/r_1 - 1/r_2} = \\frac{\\tfrac{1}{2}(8.1 \\times 10^7 - 9.0 \\times 10^6)}{9.52 \\times 10^{-8}} \\approx 3.78 \\times 10^{14} \\text{ m}^3/\\text{s}^2$

which gives $M \\approx 5.7 \\times 10^{24}$ kg.`
    },
    {
      id: 'physicsc-gravitation-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A satellite\'s distance from a planet\'s center ranges from 7000 km to 21 000 km. If its speed at closest approach is 9.0 km/s, its speed at the farthest point is:',
            options: ['$27$ km/s', '$3.0$ km/s', '$1.0$ km/s', '$5.2$ km/s'],
            correctAnswer: 1,
            explanation: 'Angular momentum is conserved and $\\vec{v} \\perp \\vec{r}$ at both extremes, so $v_2 = r_1v_1/r_2 = 9.0/3 = 3.0$ km/s. Dividing by $3^2$ treats speed like an inverse-square force.'
          },
          {
            question: 'A planet moves fastest in its elliptical orbit when it is:',
            options: ['Farthest from the Sun', 'Closest to the Sun', 'Halfway between those points', 'Moving at the same speed everywhere'],
            correctAnswer: 1,
            explanation: 'Angular momentum $mrv_{\\perp}$ is constant, so the speed must be greatest where $r$ is smallest, at the closest point.'
          },
          {
            question: 'A planet orbits a star at 4 AU. Its orbital period (in Earth years, around a Sun-like star) is about:',
            options: ['4 years', '8 years', '16 years', '64 years'],
            correctAnswer: 1,
            explanation: '$T = r^{3/2} = 4^{3/2} = 8$ years (using $T^2 \\propto r^3$ with the Sun as the central mass).'
          },
          {
            question: 'Kepler\'s Third Law in the form $T^2 = \\frac{4\\pi^2}{GM}r^3$ shows the proportionality constant depends on:',
            options: ['The orbiting object\'s mass', 'The central body\'s mass $M$', 'The orbital speed only', 'The orbiting object\'s size'],
            correctAnswer: 1,
            explanation: 'The constant $\\frac{4\\pi^2}{GM}$ depends only on the central mass $M$, so all satellites of that body share the same $T^2/r^3$ ratio.'
          },
          {
            question: 'As a satellite moves from its closest point to its farthest point on an elliptical orbit, its kinetic energy:',
            options: ['Stays constant, because the total energy is constant', 'Decreases, while $U$ rises by the same amount', 'Decreases, while $U$ stays the same', 'Increases, while $U$ falls by the same amount'],
            correctAnswer: 1,
            explanation: 'Total mechanical energy is constant, but $U = -GMm/r$ becomes less negative as $r$ grows, so kinetic energy must fall by exactly the amount $U$ rises.'
          }
        ]
      }
    }
  ]
};
