export const physCEMMagFieldsPart1Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p1-intro',
      type: 'text' as const,
      content: `# 🧲 Magnetic Force on Moving Charges

**Part 1 of 7 — The Lorentz Force**

---

### Magnetic Force

$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$

Magnitude: $F = qvB\\sin\\theta$

| Fact | Detail |
|------|--------|
| Direction | Right-hand rule (cross product) |
| Perpendicular | Force ⊥ velocity AND ⊥ B |
| No work | Magnetic force does NO work ($\\vec{F} \\perp \\vec{v}$) |

---

### Circular Motion in B Field

$$qvB = \\frac{mv^2}{r}$$

$$r = \\frac{mv}{qB}$$

$$\\omega = \\frac{qB}{m}$$ (cyclotron frequency)

> 🔑 A charged particle in a uniform $\\vec{B}$ moves in a circle (or helix). The magnetic force provides centripetal acceleration.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p1-helix-selector',
      type: 'text' as const,
      content: `### Helical Motion and Crossed Fields

**Why a helix?** Split the velocity into components parallel and perpendicular to $\\vec{B}$. The perpendicular part $v_\\perp$ feels the force and circles with radius $r = \\frac{mv_\\perp}{qB}$; the parallel part $v_\\parallel$ feels no force ($\\sin\\theta = 0$) and drifts at constant speed. Together they trace a helix whose **pitch** (advance per turn) is $p = v_\\parallel T = v_\\parallel\\frac{2\\pi m}{qB}$.

**The velocity selector.** Cross an electric field with a magnetic field so their forces oppose. A charge goes straight only when they cancel:

$qE = qvB \\quad\\Longrightarrow\\quad v = \\frac{E}{B}.$

This selects a single speed regardless of charge or mass — the front end of a mass spectrometer.

**Speed never changes.** Because $\\vec{F}\\perp\\vec{v}$, the magnetic force does zero work, so $|\\vec{v}|$ is constant; only the *direction* turns. Kinetic energy is conserved in any purely magnetic field.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p1-worked',
      type: 'text' as const,
      content: `### Worked Example — Radius and Period of Circular Motion

A proton ($m = 1.67\\times10^{-27}\\text{ kg}$, $q = 1.6\\times10^{-19}\\text{ C}$) enters a uniform field $B = 0.50\\text{ T}$ perpendicular to its velocity $v = 2.0\\times10^{6}\\text{ m/s}$. Find (a) the radius of its path and (b) the period of revolution.

**Step 1 — Force provides centripetal acceleration.** The magnetic force is the only force, so $qvB = \\frac{mv^2}{r}$.

**Step 2 — Solve for radius.** Cancel one $v$: $r = \\frac{mv}{qB} = \\frac{(1.67\\times10^{-27})(2.0\\times10^{6})}{(1.6\\times10^{-19})(0.50)}$. Numerator $= 3.34\\times10^{-21}$; denominator $= 8.0\\times10^{-20}$. So $r = 4.2\\times10^{-2}\\text{ m} = 4.2\\text{ cm}$.

**Step 3 — Period.** The cyclotron period is $T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$. Note that $v$ cancels:

$T = \\frac{2\\pi (1.67\\times10^{-27})}{(1.6\\times10^{-19})(0.50)} = 1.3\\times10^{-7}\\text{ s}.$

**Key insight:** the cyclotron period (and frequency $\\omega = qB/m$) is **independent of speed and radius** — faster particles trace bigger circles in exactly the same time. This is the principle that makes the cyclotron work.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A magnetic force does _____ work on a charged particle.',
            options: ['Positive', 'Negative', 'Zero', 'Variable'],
            correctAnswer: 2,
            explanation: '$\\vec{F} \\perp \\vec{v}$ always, so $W = \\vec{F} \\cdot \\vec{v}\\,dt = 0$. No work done.'
          },
          {
            question: 'Doubling the speed of a charged particle in a magnetic field:',
            options: ['Doubles the radius', 'Halves the radius', 'No effect on radius', 'Quadruples the radius'],
            correctAnswer: 0,
            explanation: '$r = mv/(qB)$. Doubling $v$ doubles $r$.'
          },
          {
            question: 'The cyclotron angular frequency $\\omega = qB/m$ for a charged particle in a uniform field depends on:',
            options: ['The speed of the particle', 'The radius of the orbit', 'Neither speed nor radius', 'Both speed and radius'],
            correctAnswer: 2,
            explanation: '$\\omega = qB/m$ contains no $v$ or $r$ — the period is the same for all speeds, which is why a cyclotron uses a fixed-frequency driving voltage.'
          },
          {
            question: 'An electron and a proton move with the same speed perpendicular to the same field. Compared with the proton, the electron’s orbital radius is:',
            options: ['Much larger', 'Much smaller', 'The same', 'Exactly double'],
            correctAnswer: 1,
            explanation: '$r = mv/(qB)$. The electron’s mass is about 1836 times smaller (and charge magnitude equal), so its radius is far smaller.'
          },
          {
            question: 'A charge $q$ moving with velocity $\\vec{v}$ parallel to $\\vec{B}$ experiences a magnetic force of magnitude:',
            options: ['$qvB$', '$qvB/2$', 'Zero', '$qv^2B$'],
            correctAnswer: 2,
            explanation: '$F = qvB\\sin\\theta$ with $\\theta = 0$, so $\\sin\\theta = 0$ and $F = 0$. A velocity component along $\\vec{B}$ is unaffected (giving helical motion in general).'
          },
          {
            question: 'A particle moving in a uniform $\\vec{B}$ has velocity components both parallel and perpendicular to the field. Its trajectory is:',
            options: ['A straight line', 'A circle', 'A helix', 'A parabola'],
            correctAnswer: 2,
            explanation: 'The perpendicular component gives circular motion while the parallel component is constant, combining into a helix.'
          }
        ]
      }
    }
  ]
};
