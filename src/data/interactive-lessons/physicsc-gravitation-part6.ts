export const physCGravitationPart6Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Gravitation Workshop

**Part 6 of 7 — Strategies and Practice**

---

### Common Problem Types

| Type | Key Approach |
|------|-------------|
| Force between objects | $F = \\frac{GMm}{r^2}$ |
| Orbital speed | $v = \\sqrt{\\frac{GM}{r}}$ |
| Orbital period | $T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$ |
| Escape velocity | $v_{esc} = \\sqrt{\\frac{2GM}{r}}$ |
| Energy to change orbit | $\\Delta E = -\\frac{GMm}{2r_f} + \\frac{GMm}{2r_i}$ |
| Kepler's Third Law | $\\frac{T^2}{r^3} = \\text{const}$ |`
    },
    {
      id: 'physicsc-gravitation-p6-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Escape Speed via Energy Conservation

A projectile is launched straight up from a planet's surface (radius $R$, mass $M$) and just barely escapes. Derive the escape speed from energy conservation, then evaluate for Earth.

**Step 1 — Set up energy conservation.** "Just barely escapes" means $KE = 0$ and $U = 0$ at $r = \\infty$:

$\\frac{1}{2}mv_{esc}^2 + \\left(-\\frac{GMm}{R}\\right) = 0 + 0$

**Step 2 — Solve for $v_{esc}$.** The mass $m$ cancels:

$\\frac{1}{2}v_{esc}^2 = \\frac{GM}{R} \\quad\\Rightarrow\\quad v_{esc} = \\sqrt{\\frac{2GM}{R}}$

**Step 3 — Evaluate for Earth.** With $GM = 3.99 \\times 10^{14} \\text{ m}^3/\\text{s}^2$ and $R = 6.37 \\times 10^6 \\text{ m}$:

$v_{esc} = \\sqrt{\\frac{2(3.99 \\times 10^{14})}{6.37 \\times 10^6}} \\approx 1.12 \\times 10^4 \\text{ m/s} = 11.2 \\text{ km/s}$

> 🔑 Escape speed comes straight from "total energy = 0"; it is independent of launch direction (ignoring air drag and rotation).`
    },
    {
      id: 'physicsc-gravitation-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To move a satellite to a higher orbit, you must:',
            options: ['Remove energy', 'Add energy', 'Add no energy (it moves naturally)', 'Reduce mass'],
            correctAnswer: 1,
            explanation: '$E = -\\frac{GMm}{2r}$. A higher $r$ means a less negative $E$, so energy must be added (positive work done on the satellite).'
          },
          {
            question: 'Which approach best finds the speed of a satellite in a known circular orbit?',
            options: ['$v = \\frac{GM}{r}$', '$v = \\sqrt{\\frac{GM}{r}}$', '$v = \\sqrt{\\frac{2GM}{r}}$', '$v = 2\\pi r$'],
            correctAnswer: 1,
            explanation: 'Setting gravity equal to the centripetal force gives $v = \\sqrt{GM/r}$ for a circular orbit.'
          },
          {
            question: 'A satellite\'s escape speed from a given radius compared with its circular-orbit speed at that radius is larger by a factor of:',
            options: ['$2$', '$\\sqrt{2}$', '$\\frac{1}{\\sqrt{2}}$', '$4$'],
            correctAnswer: 1,
            explanation: '$v_{esc} = \\sqrt{2GM/r} = \\sqrt{2}\\,v_{orbit}$, so escape speed is $\\sqrt{2}$ times the orbital speed.'
          },
          {
            question: 'For a problem asking for the energy to raise an orbit, the most direct relation is:',
            options: ['$\\Delta E = \\frac{GMm}{2}\\left(\\frac{1}{r_i} - \\frac{1}{r_f}\\right)$', '$\\Delta E = GMm(r_f - r_i)$', '$\\Delta E = \\frac{1}{2}mv^2$ only', '$\\Delta E = 0$'],
            correctAnswer: 0,
            explanation: 'Since $E = -\\frac{GMm}{2r}$, the required energy is $\\Delta E = \\frac{GMm}{2}\\left(\\frac{1}{r_i} - \\frac{1}{r_f}\\right)$, positive when $r_f > r_i$.'
          },
          {
            question: 'Two satellites orbit the same planet. Satellite B has 8 times the period of A. Its orbital radius is larger by a factor of:',
            options: ['2', '4', '8', '64'],
            correctAnswer: 1,
            explanation: '$T \\propto r^{3/2}$, so $r \\propto T^{2/3}$. With $T \\to 8T$: $8^{2/3} = 4$.'
          }
        ]
      }
    }
  ]
};
