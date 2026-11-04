import type { LessonData } from './registry'

export const magnetismMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  sections: [
    {
      id: 'mag2-intro',
      type: 'text' as const,
      content: `# Magnetism & Electromagnetic Induction

**Part 2 of 4 — Forces on Moving Charges**

### The Magnetic Force Law

A charge $q$ moving with speed $v$ in a field $B$ feels

$$F = qvB\\sin\\theta$$

where $\\theta$ is the angle between $\\vec{v}$ and $\\vec{B}$. Read the three switches this builds in:

- $v = 0$ → no force. Magnetic fields ignore stationary charges (electric fields do not).
- $\\vec{v}$ parallel or antiparallel to $\\vec{B}$ ($\\theta = 0$ or $180^\\circ$) → no force; perpendicular ($\\theta = 90^\\circ$) → the maximum, $F = qvB$.

### Direction: the Right-Hand Rule

- **Curl version:** point your fingers along $\\vec{v}$ and curl them toward $\\vec{B}$; your thumb gives the force on a POSITIVE charge.
- **Flat-hand version:** fingers along $\\vec{B}$, thumb along $\\vec{v}$; your palm pushes in the direction of the force on a POSITIVE charge.

Either way the force is perpendicular to both $\\vec{v}$ and $\\vec{B}$. For a NEGATIVE charge, take the right-hand answer and flip it (or use your left hand).

With standard axes, remember one anchor case: $\\hat{x} \\times \\hat{y} = \\hat{z}$. A positive charge moving along $+x$ in a field along $+y$ is pushed along $+z$.

### Magnetic Forces Do No Work

The force is always perpendicular to the velocity, so it never has a component along the displacement:

$W = 0 \\quad\\Rightarrow\\quad$ speed and kinetic energy are CONSTANT.

A magnetic field can steer a charge but never speed it up or slow it down. Only electric fields change a charge's kinetic energy — the single most-tested conceptual point in this chapter.

### Circular Motion in a Uniform Field

A charge moving perpendicular to a uniform $\\vec{B}$ is steered in a circle: the magnetic force IS the centripetal force.

$$qvB = \\frac{mv^2}{r} \\quad\\Rightarrow\\quad r = \\frac{mv}{qB}$$

- Faster or heavier particles sweep LARGER circles; stronger fields or bigger charges force TIGHTER ones.
- The period $T = \\frac{2\\pi m}{qB}$ is independent of speed — fast particles just travel bigger circles in the same time.
- Velocity partly along $\\vec{B}$? That component is untouched, and the path becomes a helix around the field lines.`
    },
    {
      id: 'mag2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Proton in a Clinical-Scale Field

**Problem.** A proton ($m = 1.67 \\times 10^{-27}\\;\\text{kg}$, $q = 1.6 \\times 10^{-19}\\;\\text{C}$) moves at $2 \\times 10^6\\;\\text{m/s}$ perpendicular to a $0.5\\;\\text{T}$ field.

- **(a)** What magnetic force acts on the proton?
- **(b)** What is the radius of its circular path?
- **(c)** How fast is the proton moving after many trips around the circle?

**(a) Force.** $F = qvB = (1.6 \\times 10^{-19})(2 \\times 10^6)(0.5) = 1.6 \\times 10^{-13}\\;\\text{N}$. Tiny in absolute terms, but acting on a proton's tiny mass it bends the path hard.

**(b) Radius of the circle.**

$$r = \\frac{mv}{qB} = \\frac{(1.67 \\times 10^{-27})(2 \\times 10^6)}{(1.6 \\times 10^{-19})(0.5)} = \\frac{3.34 \\times 10^{-21}}{8 \\times 10^{-20}} \\approx 0.04\\;\\text{m}$$

About $4\\;\\text{cm}$. Divide the powers of ten first ($10^{-21}/10^{-20} = 10^{-1}$), then $3.34/8 \\approx 0.4$.

**(c) Energy check.** Still $2 \\times 10^6\\;\\text{m/s}$. The force from (a) is always perpendicular to the velocity, so it does zero work and the speed never changes.

### Worked Example — Electron vs. Proton, Same Field

**Problem.** An electron and a proton enter the same uniform field with the same velocity, perpendicular to the field.

- **(a)** Do the two particles curve the same way?
- **(b)** Which particle moves in the smaller circle, and by what factor?

**(a) Charge sign.** No. Their charges are opposite, so the forces are opposite and they curve in OPPOSITE rotational senses.

**(b) Radius.** In $r = mv/qB$, $v$ and $|q|$ are equal, so the radius scales with mass. The electron's circle is smaller by $m_e/m_p \\approx 1/1836$: the proton makes a wide arc while the electron whips around a tight loop.`
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
            yield: 'HIGH',
            explanation: `$F = qvB\\sin\\theta$ with $v = 0$ gives zero — magnetic force requires motion. (An ELECTRIC field would push it regardless.) "Equal to $qB$" drops the $v$ the force law needs, and a force pointing along or across the field lines would have to be nonzero to have any direction at all.`
          },
          {
            question: `A magnetic field can never change a charged particle's kinetic energy because the magnetic force:`,
            options: [`Is too weak compared with electric forces`, `Points along the magnetic field lines`, `Is always perpendicular to the particle's displacement`, `Decreases as the particle accelerates`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `$\\vec{F} \\perp \\vec{v}$ at every instant, so the work $W = Fd\\cos 90^\\circ = 0$. The field bends the path; the speed never changes. Strength is irrelevant: even a huge magnetic force does no work. The force is perpendicular to the field lines, not along them. And the force does not fade with acceleration; it depends on speed, which stays constant.`
          },
          {
            question: `A particle circles in a uniform magnetic field. If its speed doubles, the radius of its circular path:`,
            options: [`Halves`, `Doubles`, `Is unchanged`, `Quadruples`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$r = mv/qB \\propto v$: double the speed, double the radius. (The PERIOD $T = 2\\pi m/qB$ is what stays unchanged.)`
          },
          {
            question: `A proton moves in the $+x$ direction through a magnetic field pointing in the $+z$ direction. The magnetic force on it points along:`,
            options: [`$-y$`, `$+y$`, `$+z$`, `$-z$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Right-hand rule: $\\hat{x} \\times \\hat{z} = -\\hat{y}$ (cycling $x \\to y \\to z$ gives $\\hat{z} \\times \\hat{x} = +\\hat{y}$, and reversing the order flips the sign), so the force on the positive proton is along $-y$. $+y$ is the electron's answer, or the result of crossing in the wrong order. $\\pm z$ is impossible: the force must be perpendicular to $\\vec{B}$, which points along $z$.`
          },
          {
            question: `The magnetic force on a moving charge is greatest when its velocity is:`,
            options: [`Perpendicular to the magnetic field`, `Parallel to the magnetic field`, `At $45^\\circ$ to the field`, `Antiparallel to the magnetic field`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$F = qvB\\sin\\theta$ peaks at $\\theta = 90^\\circ$ ($\\sin\\theta = 1$). Parallel or antiparallel motion ($\\sin\\theta = 0$) feels no force at all.`
          }
        ]
      }
    },
    {
      id: 'mag2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **The force law.** $F = qvB\\sin\\theta$: zero at rest or along the field, a maximum of $qvB$ when perpendicular.
- **Right-hand rule.** It gives the force on a positive charge ($\\hat{x} \\times \\hat{y} = \\hat{z}$); flip it for a negative one.
- **No work done.** The force is always perpendicular to $\\vec{v}$, so it steers a charge but never changes its speed.
- **Circular orbits.** $r = mv/qB$; the period $2\\pi m/qB$ is speed-independent; oblique entry gives a helix.

**Common traps**

- **Force on a resting charge.** A magnetic field exerts no force on a stationary charge; only an electric field does.
- **Magnetic speed-up.** Magnetic force does zero work; only an electric field changes a charge's kinetic energy.
- **Electrons follow the same rule.** The right-hand rule is for positive charges; an electron feels the opposite force.
- **Period grows with speed.** A faster particle sweeps a larger circle in the same period; only the radius grows.`
    }
  ]
};
