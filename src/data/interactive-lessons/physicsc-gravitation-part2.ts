export const physCGravitationPart2Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p2-intro',
      type: 'text' as const,
      content: `# 🛸 Gravitational Potential Energy & Orbits

**Part 2 of 7 — Energy in Gravitational Systems**

---

### Gravitational Potential Energy

$U = -\\frac{GMm}{r}$

Note the negative sign — $U = 0$ at $r = \\infty$.

---

### Circular Orbits

For a satellite in circular orbit:

$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$

$v_{\\text{orbit}} = \\sqrt{\\frac{GM}{r}}$

$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$ (Kepler's Third Law)

---

### Escape Velocity

$v_{\\text{escape}} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} \\cdot v_{\\text{orbit}}$

> 🔑 Escape velocity is $\\sqrt{2}$ times orbital velocity at the same radius.`
    },
    {
      id: 'physicsc-gravitation-p2-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Where Does $U = -\\frac{GMm}{r}$ Come From?

The potential energy is defined as the work done against gravity to bring a mass from infinity to radius $r$. Derive it by integrating the force.

**Step 1 — Set up the work integral.** Potential energy equals minus the work done by gravity moving the mass in from $\\infty$ to $r$:

$U(r) = -\\int_{\\infty}^{r} \\vec{F}\\cdot d\\vec{r} = -\\int_{\\infty}^{r} \\left(-\\frac{GMm}{r'^2}\\right) dr'$

**Step 2 — Evaluate the integral.** The antiderivative of $r'^{-2}$ is $-r'^{-1}$:

$U(r) = GMm \\int_{\\infty}^{r} \\frac{dr'}{r'^2} = GMm\\left[-\\frac{1}{r'}\\right]_{\\infty}^{r} = GMm\\left(-\\frac{1}{r} + 0\\right)$

**Step 3 — Result.**

$U(r) = -\\frac{GMm}{r}$

> 🔑 The negative sign and the $r = \\infty$ reference both fall directly out of the integration — bound systems have negative potential energy.`
    },
    {
      id: 'physicsc-gravitation-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'As a satellite moves to a higher orbit:',
            options: ['Speed increases', 'Speed decreases', 'Speed stays constant', 'Period decreases'],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{\\frac{GM}{r}}$. A larger orbital radius $r$ gives a smaller orbital speed $v$.'
          },
          {
            question: 'Escape velocity from Earth\'s surface is approximately:',
            options: ['$7.9$ km/s', '$11.2$ km/s', '$3.0 \\times 10^8$ m/s', '$299$ m/s'],
            correctAnswer: 1,
            explanation: '$v_{esc} = \\sqrt{\\frac{2GM}{R}} \\approx 11.2$ km/s for Earth.'
          },
          {
            question: 'The escape velocity from a planet does not depend on:',
            options: ['The planet\'s mass', 'The planet\'s radius', 'The mass of the escaping object', 'The gravitational constant $G$'],
            correctAnswer: 2,
            explanation: '$v_{esc} = \\sqrt{\\frac{2GM}{r}}$ contains no factor of the escaping object\'s mass — it cancels out of the energy equation.'
          },
          {
            question: 'For a circular orbit, setting gravity equal to the centripetal requirement gives $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$. Solving for $v$ yields:',
            options: ['$v = \\frac{GM}{r}$', '$v = \\sqrt{\\frac{GM}{r}}$', '$v = \\sqrt{\\frac{2GM}{r}}$', '$v = GMr$'],
            correctAnswer: 1,
            explanation: 'The mass $m$ cancels and one factor of $r$ cancels, leaving $v^2 = GM/r$, so $v = \\sqrt{GM/r}$.'
          },
          {
            question: 'If a satellite\'s orbital radius is quadrupled, its orbital period changes by a factor of:',
            options: ['4', '8', '2', '16'],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{r^3/(GM)} \\propto r^{3/2}$. With $r \\to 4r$: $4^{3/2} = 8$.'
          },
          {
            question: 'At escape speed, the total mechanical energy of the projectile (taking $U = 0$ at infinity) is:',
            options: ['Negative', 'Exactly zero', 'Positive', 'Equal to its rest energy'],
            correctAnswer: 1,
            explanation: 'Escape speed is the minimum speed for which $KE + U = 0$, so the object just barely reaches infinity with zero kinetic energy.'
          }
        ]
      }
    }
  ]
};
