import type { LessonData } from './registry'

export const magnetismMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  sections: [
    {
      id: 'mag2-intro',
      type: 'text' as const,
      content: `# Magnetism

**Part 2 of 4 — Forces on Moving Charges**

### The Magnetic Force Law

A charge $q$ moving with speed $v$ in a field $B$ feels

$F = qvB\\sin\\theta$

where $\\theta$ is the angle between $\\vec{v}$ and $\\vec{B}$. Read the three switches this builds in:

- $v = 0$ → no force. Magnetic fields ignore stationary charges (electric fields do not).
- $\\vec{v}$ parallel or antiparallel to $\\vec{B}$ ($\\theta = 0$ or $180^\\circ$) → no force.
- Maximum force at $\\theta = 90^\\circ$: $F = qvB$.

### Direction: the Right-Hand Rule

Point fingers along $\\vec{v}$, curl toward $\\vec{B}$ (or: fingers along $\\vec{B}$, thumb along $\\vec{v}$, palm pushes) — the force on a POSITIVE charge pops out perpendicular to both. For a NEGATIVE charge, take the right-hand answer and flip it (or use your left hand).

With standard axes, remember one anchor case: $\\hat{x} \\times \\hat{y} = \\hat{z}$. A positive charge moving along $+x$ in a field along $+y$ is pushed along $+z$.

### Magnetic Forces Do No Work

The force is always perpendicular to the velocity, so it never has a component along the displacement:

$W = 0 \\quad\\Rightarrow\\quad$ speed and kinetic energy are CONSTANT.

A magnetic field can steer a charge but never speed it up or slow it down. Only electric fields change a charge's kinetic energy — the single most-tested conceptual point in this chapter.

### Circular Motion in a Uniform Field

A charge moving perpendicular to a uniform $\\vec{B}$ is steered in a circle: the magnetic force IS the centripetal force.

$qvB = \\frac{mv^2}{r} \\quad\\Rightarrow\\quad r = \\frac{mv}{qB}$

- Faster or heavier particles sweep LARGER circles; stronger fields or bigger charges force TIGHTER ones.
- The period $T = \\frac{2\\pi m}{qB}$ is independent of speed — fast particles just travel bigger circles in the same time.
- Velocity partly along $\\vec{B}$? That component is untouched, and the path becomes a helix around the field lines.`
    },
    {
      id: 'mag2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Proton in a Clinical-Scale Field

A proton ($m = 1.67 \\times 10^{-27}\\;\\text{kg}$, $q = 1.6 \\times 10^{-19}\\;\\text{C}$) moves at $2 \\times 10^6\\;\\text{m/s}$ perpendicular to a $0.5\\;\\text{T}$ field.

**Step 1 — Force.**

$F = qvB = (1.6 \\times 10^{-19})(2 \\times 10^6)(0.5) = 1.6 \\times 10^{-13}\\;\\text{N}$

Tiny in absolute terms, but acting on a proton's tiny mass it bends the path hard.

**Step 2 — Radius of the circle.**

$r = \\frac{mv}{qB} = \\frac{(1.67 \\times 10^{-27})(2 \\times 10^6)}{(1.6 \\times 10^{-19})(0.5)} = \\frac{3.34 \\times 10^{-21}}{8 \\times 10^{-20}} \\approx 0.04\\;\\text{m}$

About $4\\;\\text{cm}$. MCAT arithmetic style: divide the powers of ten first ($10^{-21}/10^{-20} = 10^{-1}$), then $3.34/8 \\approx 0.4$.

**Step 3 — Energy check.** The proton's speed after any amount of circling: still $2 \\times 10^6\\;\\text{m/s}$. Zero work done.

### Worked Example — Electron vs. Proton, Same Field

An electron and a proton enter the same field with the same velocity. Compare their paths.

**Charge sign:** opposite forces → they curve in OPPOSITE rotational senses.

**Radius:** $r = mv/qB$ with equal $v$, equal $|q|$ — the radius scales with mass. The electron's circle is smaller by $m_e/m_p \\approx 1/1836$: the proton makes a wide arc while the electron whips around a tight loop.`
    },
    {
      id: 'mag2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Forces on Moving Charges** 🎯`,
      exercise: {
        questions: [
          {
            question: `A charged particle sitting at rest in a strong, uniform magnetic field experiences a magnetic force that is:`,
            options: [`Zero`, `Equal to $qB$`, `Directed along the field lines`, `Perpendicular to the field lines`],
            correctAnswer: 0,
            explanation: `$F = qvB\\sin\\theta$ with $v = 0$ gives zero — magnetic force requires motion. (An ELECTRIC field would push it regardless.)`
          },
          {
            question: `A magnetic field can never change a charged particle's kinetic energy because the magnetic force:`,
            options: [`Is too weak compared with electric forces`, `Acts only on negative charges`, `Is always perpendicular to the particle's displacement`, `Decreases as the particle accelerates`],
            correctAnswer: 2,
            explanation: `$\\vec{F} \\perp \\vec{v}$ at every instant, so the work $W = Fd\\cos 90^\\circ = 0$. The field bends the path; the speed never changes.`
          },
          {
            question: `A particle circles in a uniform magnetic field. If its speed doubles, the radius of its circular path:`,
            options: [`Halves`, `Doubles`, `Is unchanged`, `Quadruples`],
            correctAnswer: 1,
            explanation: `$r = mv/qB \\propto v$: double the speed, double the radius. (The PERIOD $T = 2\\pi m/qB$ is what stays unchanged.)`
          },
          {
            question: `A proton moves in the $+x$ direction through a magnetic field pointing in the $+y$ direction. The magnetic force on it points along:`,
            options: [`$-z$`, `$+y$`, `$-x$`, `$+z$`],
            correctAnswer: 3,
            explanation: `Right-hand rule with the anchor case $\\hat{x} \\times \\hat{y} = \\hat{z}$: force along $+z$ for a positive charge. (An electron here would feel $-z$.)`
          },
          {
            question: `The magnetic force on a moving charge is greatest when its velocity is:`,
            options: [`Perpendicular to the magnetic field`, `Parallel to the magnetic field`, `At $45^\\circ$ to the magnetic field`, `Antiparallel to the magnetic field`],
            correctAnswer: 0,
            explanation: `$F = qvB\\sin\\theta$ peaks at $\\theta = 90^\\circ$ ($\\sin\\theta = 1$). Parallel or antiparallel motion ($\\sin\\theta = 0$) feels no force at all.`
          }
        ]
      }
    },
    {
      id: 'mag2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $F = qvB\\sin\\theta$: zero for stationary charges and for motion along the field; max when perpendicular
- Right-hand rule for positive charges; flip the answer for negative ones ($\\hat{x} \\times \\hat{y} = \\hat{z}$ anchor)
- Magnetic force does NO work — it steers, never speeds up or slows down; only $E$ fields change KE
- Perpendicular entry → circle with $r = mv/qB$; period $2\\pi m/qB$ is speed-independent; oblique entry → helix
- Same speed, same field: electron and proton curve opposite ways, electron's circle about 1836 times tighter`
    }
  ]
};
