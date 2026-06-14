export const physCGravitationPart4Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p4-intro',
      type: 'text' as const,
      content: `# ⚡ Gravitational Potential

**Part 4 of 7 — Potential and Field**

---

### Gravitational Potential (per unit mass)

$V = -\\frac{GM}{r}$

Relationship to field:

$\\vec{g} = -\\nabla V = -\\frac{dV}{dr}\\hat{r}$

---

### Shell Theorem

| Location | Result |
|----------|--------|
| Outside a uniform sphere | Behaves as if all mass is at the center |
| Inside a uniform shell | Zero gravitational field |

> 🔑 Only the mass at radii smaller than your position matters (for spherical symmetry).`
    },
    {
      id: 'physicsc-gravitation-p4-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Field from the Gradient of Potential

Given the gravitational potential $V(r) = -\\frac{GM}{r}$, recover the field $\\vec{g}$ by differentiation, and find $g$ at $r = 2R_E$ above Earth's center.

**Step 1 — Differentiate the potential.** The radial field is the negative gradient:

$g = -\\frac{dV}{dr} = -\\frac{d}{dr}\\left(-\\frac{GM}{r}\\right)$

**Step 2 — Carry out the derivative.** Since $\\frac{d}{dr}(r^{-1}) = -r^{-2}$:

$g = -\\left(\\frac{GM}{r^2}\\right) \\quad\\text{(magnitude } \\frac{GM}{r^2}, \\text{ directed inward)}$

**Step 3 — Evaluate at $r = 2R_E$.** Because $g_{\\text{surface}} = \\frac{GM}{R_E^2}$,

$g(2R_E) = \\frac{GM}{(2R_E)^2} = \\frac{1}{4}\\,g_{\\text{surface}} \\approx \\frac{9.8}{4} \\approx 2.5 \\text{ m/s}^2$

> 🔑 The field is the slope of the potential curve; potential is a scalar, which often makes energy problems easier than vector force problems.`
    },
    {
      id: 'physicsc-gravitation-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Inside a uniform spherical shell of mass $M$:',
            options: ['$g = \\frac{GM}{r^2}$', '$g = 0$', '$g = \\frac{GM}{R^2}$', '$g$ depends on position'],
            correctAnswer: 1,
            explanation: 'By the Shell Theorem, the gravitational field everywhere inside a uniform spherical shell is exactly zero.'
          },
          {
            question: 'The relationship between gravitational field and potential is:',
            options: ['$g = V r$', '$\\vec{g} = -\\frac{dV}{dr}\\hat{r}$', '$g = \\frac{dV}{dt}$', '$\\vec{g} = +\\nabla V$'],
            correctAnswer: 1,
            explanation: 'The field is the negative gradient of the potential: $\\vec{g} = -\\nabla V = -\\frac{dV}{dr}\\hat{r}$ for spherical symmetry.'
          },
          {
            question: 'Gravitational potential $V = -\\frac{GM}{r}$ is a scalar. Its value at a point is most useful for finding:',
            options: ['The direction of the force', 'The potential energy $U = mV$ of a mass placed there', 'The orbital period', 'The planet\'s radius'],
            correctAnswer: 1,
            explanation: 'Multiplying the potential (energy per unit mass) by a mass $m$ gives that mass\'s potential energy: $U = mV = -\\frac{GMm}{r}$.'
          },
          {
            question: 'Outside a uniform solid sphere, the gravitational field is identical to that of:',
            options: ['Zero field', 'A point mass $M$ at the center', 'A ring of mass', 'An infinite plane'],
            correctAnswer: 1,
            explanation: 'The Shell Theorem shows a spherically symmetric mass acts, from outside, exactly like a point mass $M$ located at its center.'
          },
          {
            question: 'For a uniform-density solid sphere, the field magnitude at radius $r < R$ (inside) varies as:',
            options: ['$g \\propto \\frac{1}{r^2}$', '$g \\propto r$', '$g$ is constant', '$g \\propto r^2$'],
            correctAnswer: 1,
            explanation: 'Only enclosed mass $\\propto r^3$ contributes, so $g = \\frac{G(M r^3/R^3)}{r^2} = \\frac{GM}{R^3}r \\propto r$ inside a uniform sphere.'
          }
        ]
      }
    }
  ]
};
