export const physCGravitationPart5Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p5-intro',
      type: 'text' as const,
      content: `# 🛰️ Energy of Orbiting Bodies

**Part 5 of 7 — Total Energy in Orbits**

---

### Energy Summary for Circular Orbits

$KE = \\frac{1}{2}mv^2 = \\frac{GMm}{2r}$

$PE = -\\frac{GMm}{r}$

$E_{\\text{total}} = KE + PE = -\\frac{GMm}{2r}$

> 🔑 Total energy is **negative** for bound orbits. $E = 0$ at the boundary (parabolic trajectory = escape).`
    },
    {
      id: 'physicsc-gravitation-p5-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Total Energy and the Virial Relation

Show that a circular orbit has $E_{\\text{total}} = -\\frac{GMm}{2r}$, then find the energy needed to raise a satellite from radius $r_i$ to $r_f$.

**Step 1 — Kinetic energy from the orbit condition.** With $v^2 = \\frac{GM}{r}$,

$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\,\\frac{GM}{r} = \\frac{GMm}{2r}$

**Step 2 — Add potential energy.** Since $PE = -\\frac{GMm}{r}$,

$E_{\\text{total}} = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}$

**Step 3 — Energy to change orbit.** The work needed equals $\\Delta E$:

$\\Delta E = E_f - E_i = -\\frac{GMm}{2r_f} + \\frac{GMm}{2r_i} = \\frac{GMm}{2}\\left(\\frac{1}{r_i} - \\frac{1}{r_f}\\right)$

For $r_f > r_i$ this is positive — you must add energy to climb to a higher orbit.

> 🔑 Notice $E_{\\text{total}} = -KE = \\tfrac{1}{2}PE$: the virial relation for an inverse-square bound orbit.`
    },
    {
      id: 'physicsc-gravitation-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bound orbital system has total energy that is:',
            options: ['Positive', 'Zero', 'Negative', 'Depends on speed'],
            correctAnswer: 2,
            explanation: 'Bound orbits have $E < 0$. Unbound (escape/hyperbolic) trajectories have $E \\geq 0$.'
          },
          {
            question: 'For a circular orbit, the total mechanical energy equals:',
            options: ['$+KE$', '$-KE$', '$+PE$', '$2\\,KE$'],
            correctAnswer: 1,
            explanation: 'Since $E = -\\frac{GMm}{2r}$ and $KE = +\\frac{GMm}{2r}$, the total energy equals $-KE$ (the virial relation).'
          },
          {
            question: 'To move a satellite from a low circular orbit to a higher one, the required energy is:',
            options: ['Negative (energy is released)', 'Zero', 'Positive (energy must be added)', 'Equal to the kinetic energy at the lower orbit'],
            correctAnswer: 2,
            explanation: '$E = -\\frac{GMm}{2r}$ becomes less negative as $r$ increases, so $\\Delta E > 0$: energy must be added.'
          },
          {
            question: 'Surprisingly, when a satellite is boosted to a higher orbit, its orbital speed:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Doubles'],
            correctAnswer: 1,
            explanation: 'Although total energy increases, $v = \\sqrt{GM/r}$ decreases with larger $r$. The added energy goes into potential energy, not speed.'
          },
          {
            question: 'If a satellite\'s circular-orbit radius is halved, its total energy $E = -\\frac{GMm}{2r}$ becomes:',
            options: ['Twice as negative', 'Half as negative', 'Zero', 'Positive'],
            correctAnswer: 0,
            explanation: 'Halving $r$ doubles $\\frac{1}{r}$, so $E$ becomes twice as negative (the system is more tightly bound).'
          },
          {
            question: 'At the threshold between a bound orbit and escape, the total energy equals:',
            options: ['A large negative value', 'Exactly zero', 'A large positive value', 'The kinetic energy'],
            correctAnswer: 1,
            explanation: 'The boundary case (parabolic escape) has $E = 0$: the object just reaches infinity with zero speed.'
          }
        ]
      }
    }
  ]
};
