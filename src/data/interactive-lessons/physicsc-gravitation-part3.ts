export const physCGravitationPart3Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p3-intro',
      type: 'text' as const,
      content: `# 🪐 Kepler's Laws

**Part 3 of 7 — Planetary Motion**

---

### Kepler's Three Laws

| Law | Statement |
|-----|-----------|
| **First** | Orbits are ellipses with the Sun at one focus |
| **Second** | Equal areas are swept in equal times (conservation of angular momentum) |
| **Third** | $T^2 \\propto r^3$: $\\quad T^2 = \\frac{4\\pi^2}{GM} r^3$ |

---

### Kepler's Third Law (Detailed)

$\\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}$

**Example:** Earth orbits at 1 AU with $T = 1$ year. For Mars at 1.52 AU:

$T_{\\text{Mars}} = \\left(\\frac{1.52}{1}\\right)^{3/2} \\approx 1.87 \\text{ years}$`
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

**Step 3 — Apply it.** For a geostationary satellite ($T = 86400 \\text{ s}$) around Earth ($GM = 3.99 \\times 10^{14} \\text{ m}^3/\\text{s}^2$):

$r = \\left(\\frac{GM\\,T^2}{4\\pi^2}\\right)^{1/3} = \\left(\\frac{(3.99 \\times 10^{14})(86400)^2}{4\\pi^2}\\right)^{1/3} \\approx 4.2 \\times 10^7 \\text{ m}$

> 🔑 The constant $\\frac{4\\pi^2}{GM}$ is the same for every satellite of the same central body — that is the heart of Kepler's Third Law.`
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
            question: 'Kepler\'s Second Law is a consequence of conservation of:',
            options: ['Energy', 'Momentum', 'Angular momentum', 'Mass'],
            correctAnswer: 2,
            explanation: 'Sweeping equal areas in equal times means constant areal velocity, which is exactly conservation of angular momentum.'
          },
          {
            question: 'A planet moves fastest in its elliptical orbit when it is:',
            options: ['Farthest from the Sun (aphelion)', 'Closest to the Sun (perihelion)', 'At the semi-minor axis', 'Moving at constant speed everywhere'],
            correctAnswer: 1,
            explanation: 'By Kepler\'s Second Law / conservation of angular momentum, the planet must move fastest where $r$ is smallest — at perihelion.'
          },
          {
            question: 'A planet orbits a star at 4 AU. Its orbital period (in Earth years, around a Sun-like star) is about:',
            options: ['4 years', '8 years', '16 years', '64 years'],
            correctAnswer: 1,
            explanation: '$T = r^{3/2} = 4^{3/2} = 8$ years (using $T^2 \\propto r^3$ with the Sun as the central mass).'
          },
          {
            question: 'Kepler\'s Third Law in the form $T^2 = \\frac{4\\pi^2}{GM}r^3$ shows the proportionality constant depends on:',
            options: ['The orbiting object\'s mass', 'The central body\'s mass $M$', 'The orbital speed only', 'The eccentricity'],
            correctAnswer: 1,
            explanation: 'The constant $\\frac{4\\pi^2}{GM}$ depends only on the central mass $M$, so all satellites of that body share the same $T^2/r^3$ ratio.'
          },
          {
            question: 'Kepler\'s First Law states that planetary orbits are:',
            options: ['Perfect circles', 'Ellipses with the Sun at one focus', 'Ellipses with the Sun at the center', 'Parabolas'],
            correctAnswer: 1,
            explanation: 'Orbits are ellipses with the Sun located at one of the two foci (a circle is the special case of zero eccentricity).'
          }
        ]
      }
    }
  ]
};
