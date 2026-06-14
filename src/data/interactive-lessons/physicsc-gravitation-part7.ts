export const physCGravitationPart7Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p7-intro',
      type: 'text' as const,
      content: `# 📋 Gravitation Review

**Part 7 of 7 — Master Summary**

---

### Essential Formulas

| Formula | Use |
|---------|-----|
| $F = \\frac{GMm}{r^2}$ | Force between two masses |
| $U = -\\frac{GMm}{r}$ | Gravitational PE |
| $v = \\sqrt{\\frac{GM}{r}}$ | Orbital speed |
| $v_{esc} = \\sqrt{\\frac{2GM}{r}}$ | Escape velocity |
| $T^2 = \\frac{4\\pi^2}{GM}r^3$ | Orbital period |
| Shell theorem | Field inside a shell $= 0$ |`
    },
    {
      id: 'physicsc-gravitation-p7-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Synthesis: Speed, Energy, and "Weighing" a Planet

A satellite orbits a planet in a circular orbit of radius $r = 8.0 \\times 10^6 \\text{ m}$ with period $T = 7200 \\text{ s}$. Find the orbital speed, the planet's mass, and the satellite's total-energy sign.

**Step 1 — Orbital speed from geometry.** The satellite covers one circumference per period:

$v = \\frac{2\\pi r}{T} = \\frac{2\\pi (8.0 \\times 10^6)}{7200} \\approx 6.98 \\times 10^3 \\text{ m/s}$

**Step 2 — "Weigh" the planet with Kepler's Third Law.** Solving $T^2 = \\frac{4\\pi^2 r^3}{GM}$ for $M$:

$M = \\frac{4\\pi^2 r^3}{G\\,T^2} = \\frac{4\\pi^2 (8.0 \\times 10^6)^3}{(6.674 \\times 10^{-11})(7200)^2} \\approx 5.8 \\times 10^{24} \\text{ kg}$

**Step 3 — Energy sign.** Because $E_{\\text{total}} = -\\frac{GMm}{2r} < 0$, the orbit is bound — consistent with a closed circular path.

> 🔑 Measuring a satellite's $r$ and $T$ lets you compute the central body's mass — the same method used to weigh the Sun, Jupiter, and black holes.`
    },
    {
      id: 'physicsc-gravitation-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At what fraction of escape velocity is the orbital velocity (at the same radius)?',
            options: ['$\\frac{1}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$\\sqrt{2}$', '$2$'],
            correctAnswer: 1,
            explanation: '$v_{orbit} = \\sqrt{\\frac{GM}{r}}$ and $v_{esc} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2}\\,v_{orbit}$, so $\\frac{v_{orbit}}{v_{esc}} = \\frac{1}{\\sqrt{2}}$.'
          },
          {
            question: 'Knowing a satellite\'s orbital radius $r$ and period $T$, you can directly compute the central body\'s:',
            options: ['Radius', 'Mass', 'Temperature', 'Charge'],
            correctAnswer: 1,
            explanation: 'Rearranging $T^2 = \\frac{4\\pi^2 r^3}{GM}$ gives $M = \\frac{4\\pi^2 r^3}{G T^2}$ — this is how astronomers "weigh" planets and stars.'
          },
          {
            question: 'The gravitational potential energy $U = -\\frac{GMm}{r}$ is negative because:',
            options: ['Gravity repels', 'The reference $U = 0$ is taken at $r = \\infty$ and work is released as masses approach', 'Mass is negative', 'It is a typo'],
            correctAnswer: 1,
            explanation: 'With $U = 0$ at infinity, bringing masses together releases energy, making bound configurations have negative potential energy.'
          },
          {
            question: 'For a uniform solid sphere, the gravitational field is greatest at:',
            options: ['The center', 'The surface', 'Infinity', 'Halfway to the center'],
            correctAnswer: 1,
            explanation: 'Inside, $g \\propto r$ (rising to the surface); outside, $g \\propto 1/r^2$ (falling). The maximum occurs right at the surface, $r = R$.'
          },
          {
            question: 'Which quantity is conserved throughout an elliptical orbit (no thrust)?',
            options: ['Orbital speed', 'Kinetic energy', 'Total mechanical energy and angular momentum', 'Distance from the focus'],
            correctAnswer: 2,
            explanation: 'Speed, KE, and $r$ all change around an ellipse, but total mechanical energy and angular momentum are both conserved.'
          },
          {
            question: 'A planet at 9 AU from a Sun-like star has an orbital period of about:',
            options: ['9 years', '18 years', '27 years', '81 years'],
            correctAnswer: 2,
            explanation: '$T = r^{3/2} = 9^{3/2} = 27$ years, using Kepler\'s Third Law with the Sun as the central mass.'
          }
        ]
      }
    }
  ]
};
