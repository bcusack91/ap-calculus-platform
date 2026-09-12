import type { LessonData } from './registry'

export const magnetismMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  sections: [
    {
      id: 'mag3-intro',
      type: 'text' as const,
      content: `# Magnetism

**Part 3 of 4 — Wires, Velocity Selectors & the Mass Spectrometer**

### Force on a Current-Carrying Wire

A wire is a stream of moving charges, so a field pushes on it:

$F = BIL\\sin\\theta$

where $L$ is the length of wire in the field and $\\theta$ the angle between the current direction and $\\vec{B}$.

- Same right-hand rule: fingers along $I$ (conventional current), curl toward $\\vec{B}$, thumb-side push.
- Wire parallel to the field → zero force; perpendicular → maximum $F = BIL$.
- This is the working principle of electric motors and of the galvanometer needle inside analog meters.

### Parallel Wires

Each wire sits in the other's circular field:

- Currents in the SAME direction: wires ATTRACT.
- OPPOSITE directions: wires REPEL.

(Memory hook: it is the opposite of charges — "likes attract" for currents.)

### The Velocity Selector

Cross an electric field and a magnetic field at right angles, both perpendicular to a charged particle's velocity, arranged so the electric force ($qE$) and magnetic force ($qvB$) oppose each other. They balance only at one speed:

$qE = qvB \\quad\\Rightarrow\\quad v = \\frac{E}{B}$

- Particles at exactly $v = E/B$ fly straight through — regardless of their mass OR charge (both cancel).
- Faster particles feel excess magnetic force and deflect one way; slower ones deflect the other.

### The Mass Spectrometer

After the selector fixes $v$, the beam enters a region with only a magnetic field and bends in a circle:

$r = \\frac{mv}{qB}$

With $v$, $q$, and $B$ known, the radius reads out the MASS:

- Heavier ions → larger radius (harder to turn).
- Higher charge → smaller radius (stronger force).
- Strictly, the machine separates ions by mass-to-charge ratio $m/q$ — a doubly charged heavy ion can land on the same spot as a singly charged light one. MCAT passages exploit exactly this ambiguity.`
    },
    {
      id: 'mag3-worked',
      type: 'text' as const,
      content: `### Worked Example — Force on a Motor Segment

A $2.0\\;\\text{m}$ segment of wire carries $3.0\\;\\text{A}$ perpendicular to a $0.5\\;\\text{T}$ field.

**Step 1 — Apply the wire-force law.**

$F = BIL = (0.5)(3.0)(2.0) = 3.0\\;\\text{N}$

**Step 2 — Angle check.** If the wire were instead at $30^\\circ$ to the field: $F = 3.0\\sin 30^\\circ = 1.5\\;\\text{N}$. Only the perpendicular geometry gives the full force.

### Worked Example — Selector plus Spectrometer (Passage Style)

Ions of mass $3.2 \\times 10^{-26}\\;\\text{kg}$ and charge $+e$ pass through a velocity selector with $E = 2000\\;\\text{V/m}$ and $B = 0.4\\;\\text{T}$, then enter an analyzing region with the same $0.4\\;\\text{T}$ field.

**Step 1 — Selected speed.**

$v = \\frac{E}{B} = \\frac{2000}{0.4} = 5000\\;\\text{m/s}$

**Step 2 — Radius in the analyzer.**

$r = \\frac{mv}{qB} = \\frac{(3.2 \\times 10^{-26})(5000)}{(1.6 \\times 10^{-19})(0.4)} = \\frac{1.6 \\times 10^{-22}}{6.4 \\times 10^{-20}} = 2.5 \\times 10^{-3}\\;\\text{m}$

A $2.5\\;\\text{mm}$ radius. Powers of ten first: $10^{-22}/10^{-20} = 10^{-2}$; then $1.6/6.4 = 0.25$.

**Step 3 — Isotope logic.** An isotope one atomic mass unit heavier, same charge and same selected $v$, lands at a proportionally larger radius — that spatial spread IS the mass spectrum.`
    },
    {
      id: 'mag3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Wires, Selectors & Spectrometers** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $0.5\\;\\text{m}$ wire carrying $4.0\\;\\text{A}$ lies perpendicular to a $0.2\\;\\text{T}$ field. The force on it is:`,
            options: [`$4.0\\;\\text{N}$`, `$0.1\\;\\text{N}$`, `$0.4\\;\\text{N}$`, `$2.0\\;\\text{N}$`],
            correctAnswer: 2,
            explanation: `$F = BIL = (0.2)(4.0)(0.5) = 0.4\\;\\text{N}$, with $\\sin 90^\\circ = 1$ for perpendicular geometry.`
          },
          {
            question: `Two long parallel wires carry current in the same direction. The magnetic force between them is:`,
            options: [`Attractive`, `Repulsive`, `Zero`, `Alternating in direction`],
            correctAnswer: 0,
            explanation: `Each wire sits in the other's circular field; the right-hand rule gives a force pulling them together. Antiparallel currents repel — the reverse of the like-charges rule.`
          },
          {
            question: `In a velocity selector with $E = 3000\\;\\text{V/m}$ and $B = 0.6\\;\\text{T}$, the speed that passes through undeflected is:`,
            options: [`$1800\\;\\text{m/s}$`, `$500\\;\\text{m/s}$`, `$2.0 \\times 10^{-4}\\;\\text{m/s}$`, `$5000\\;\\text{m/s}$`],
            correctAnswer: 3,
            explanation: `Balance $qE = qvB$: $v = E/B = 3000/0.6 = 5000\\;\\text{m/s}$. Charge and mass cancel — the selector picks a speed, nothing else.`
          },
          {
            question: `Two ions with the same charge and the same speed enter a mass spectrometer's field. Compared with the lighter ion, the heavier ion follows a path with:`,
            options: [`A smaller radius`, `A larger radius`, `The same radius`, `No curvature at all`],
            correctAnswer: 1,
            explanation: `$r = mv/qB \\propto m$ when $v$, $q$, $B$ match: more mass means more inertia and a wider turn. That radius difference is what spreads the mass spectrum.`
          },
          {
            question: `A current-carrying wire experiences NO magnetic force when the field is:`,
            options: [`Perpendicular to the wire`, `At $45^\\circ$ to the wire`, `Parallel to the wire`, `Stronger than $1\\;\\text{T}$`],
            correctAnswer: 2,
            explanation: `$F = BIL\\sin\\theta$ vanishes at $\\theta = 0$ (or $180^\\circ$): current along the field lines feels nothing. Perpendicular alignment gives the maximum instead.`
          }
        ]
      }
    },
    {
      id: 'mag3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Wire in a field: $F = BIL\\sin\\theta$ — zero when parallel, max when perpendicular; basis of motors
- Parallel currents attract, antiparallel repel
- Velocity selector: crossed $E$ and $B$ pass only $v = E/B$, independent of mass and charge
- Mass spectrometer: $r = mv/qB$ converts mass to radius; really sorts by $m/q$
- MCAT arithmetic: strip powers of ten first, then do one clean small-number division`
    }
  ]
};
