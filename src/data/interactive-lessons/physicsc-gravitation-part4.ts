export const physCGravitationPart4Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p4-intro',
      type: 'text' as const,
      content: `# ⚡ The Shell Theorem and Gravity Inside a Sphere

**Part 4 of 7 — The Shell Theorem and Gravity Inside a Sphere**

---

### Newton's Shell Theorem (results only)

A uniform sphere can be built from thin spherical shells. The net force from a shell is the sum of the forces from all its small pieces, and the results are:

| Location of object | Net gravitational force from a uniform shell |
|--------------------|--------------------------------------------|
| Outside the shell | As if all the shell's mass sat at its center |
| Inside the shell | Exactly zero |

You need the results, not the proof — the AP exam does not ask you to derive the shell theorem.

---

### Inside a Uniform Solid Sphere

At radius $r < R$, split the sphere into the part **inside** radius $r$ and the shells **outside** it. The outer shells pull with zero net force, so only the partial mass counts:

$M_{\\text{partial}} = \\rho \\cdot \\tfrac{4}{3}\\pi r^3 = M\\frac{r^3}{R^3}$

$F = \\frac{GM_{\\text{partial}}\\,m}{r^2} = \\frac{GMm}{R^3}\\,r$

So **inside** a uniform sphere the force grows in proportion to $r$, and **outside** it falls as $1/r^2$. The two formulas agree at the surface, where the force is largest.

---

### Force from Potential Energy

For $U(r) = -\\dfrac{GMm}{r}$ (valid outside the sphere), the radial force is

$F_r = -\\frac{dU}{dr} = -\\frac{GMm}{r^2}$

The minus sign means the force points toward smaller $r$: gravity is attractive.

> 🔑 Only the mass closer to the center than you are pulls on you (for a spherically symmetric body).`
    },
    {
      id: 'physicsc-gravitation-p4-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — A Tunnel Through a Uniform Earth

Model Earth as a uniform sphere ($R = 6.37 \\times 10^6$ m, surface gravity $g = 9.8 \\text{ m/s}^2$). A frictionless straight tunnel runs through the center. Find the gravitational field at $r = R/2$, then show that a dropped object undergoes SHM and find the period.

**Step 1 — Field at half the radius.** Inside, $g(r) \\propto r$, and $g(R) = 9.8 \\text{ m/s}^2$:

$g(R/2) = \\tfrac{1}{2}(9.8) = 4.9 \\text{ m/s}^2$

**Step 2 — Force law along the tunnel.** Using $GM/R^2 = g$, the inside force becomes

$F = -\\frac{GMm}{R^3}\\,r = -\\frac{mg}{R}\\,r$

This is a restoring force proportional to displacement from the center: simple harmonic motion with $k_{\\text{eff}} = mg/R$.

**Step 3 — Period.**

$\\omega = \\sqrt{\\frac{k_{\\text{eff}}}{m}} = \\sqrt{\\frac{g}{R}}, \\qquad T = 2\\pi\\sqrt{\\frac{R}{g}} = 2\\pi\\sqrt{\\frac{6.37 \\times 10^6}{9.8}} \\approx 5.1 \\times 10^3 \\text{ s} \\approx 84 \\text{ min}$

> 🔑 The force inside a uniform sphere obeys $F \\propto -r$, so any object moving through the center along a diameter oscillates in SHM.`
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
            question: 'For $U(r) = -\\frac{GMm}{r}$, the radial gravitational force $F_r = -\\frac{dU}{dr}$ is:',
            options: ['$+\\frac{GMm}{r^2}$', '$-\\frac{GMm}{r^2}$', '$-\\frac{GMm}{r}$', '$+\\frac{2GMm}{r^3}$'],
            correctAnswer: 1,
            explanation: '$\\frac{dU}{dr} = +\\frac{GMm}{r^2}$, so $F_r = -\\frac{GMm}{r^2}$. The negative radial component means the force points inward, toward the attracting mass.'
          },
          {
            question: 'Treating Earth as a uniform sphere with surface gravity $9.8 \\text{ m/s}^2$, the gravitational field halfway to the center is:',
            options: ['$4.9 \\text{ m/s}^2$', '$2.5 \\text{ m/s}^2$', '$39 \\text{ m/s}^2$', '$9.8 \\text{ m/s}^2$'],
            correctAnswer: 0,
            explanation: 'Inside a uniform sphere $g \\propto r$, so at $r = R/2$ the field is half the surface value. Using the outside formula $GM/r^2$ there would wrongly give $4 \\times 9.8 \\approx 39 \\text{ m/s}^2$.'
          },
          {
            question: 'Outside a uniform solid sphere, the gravitational field is identical to that of:',
            options: ['A point mass $M$ at its center', 'A point mass $M$ on its near surface', 'A uniform field of strength $GM/R^2$', 'Zero, since the mass pulls in all directions'],
            correctAnswer: 0,
            explanation: 'The Shell Theorem shows a spherically symmetric mass acts, from outside, exactly like a point mass $M$ located at its center.'
          },
          {
            question: 'For a uniform-density solid sphere, the field magnitude at radius $r < R$ (inside) varies as:',
            options: ['$g \\propto \\frac{1}{r^2}$', '$g \\propto r$', '$g$ is constant', '$g \\propto r^2$'],
            correctAnswer: 1,
            explanation: 'Only enclosed mass $\\propto r^3$ contributes, so $g = \\frac{G(M r^3/R^3)}{r^2} = \\frac{GM}{R^3}r \\propto r$ inside a uniform sphere.'
          },
          {
            question: 'An object dropped into a frictionless tunnel through the center of a uniform planet moves:',
            options: ['In SHM, since the force is proportional to $-r$', 'Through the center and out into space', 'To the center, then stops there', 'At constant speed, since $g = 0$ inside'],
            correctAnswer: 0,
            explanation: 'Inside a uniform sphere $F = -(GMm/R^3)\\,r$, a restoring force proportional to displacement, so the object oscillates between the two ends of the tunnel.'
          }
        ]
      }
    }
  ]
};
