import type { LessonData } from './registry'

export const magnetismMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  sections: [
    {
      id: 'mag3-intro',
      type: 'text' as const,
      content: `# Magnetism & Electromagnetic Induction

**Part 3 of 4 — Wires, Velocity Selectors & the Mass Spectrometer**

### Force on a Current-Carrying Wire

A wire is a stream of moving charges, so a field pushes on it:

$$F = BIL\\sin\\theta$$

where $L$ is the length of wire in the field and $\\theta$ the angle between the current direction and $\\vec{B}$.

- Same right-hand rule: fingers along $I$ (conventional current), curl toward $\\vec{B}$, thumb-side push.
- Wire parallel to the field → zero force; perpendicular → maximum $F = BIL$, the working principle of electric motors.

<!-- yield:low -->
- The same push swings the galvanometer needle inside analog meters.
<!-- /yield -->

### Parallel Wires

Each wire sits in the other's circular field:

- Currents in the SAME direction: wires ATTRACT.
- OPPOSITE directions: wires REPEL.

(Memory hook: it is the opposite of charges — "likes attract" for currents.)

### The Velocity Selector

Cross an electric field and a magnetic field at right angles, both perpendicular to a charged particle's velocity, arranged so the electric force ($qE$) and magnetic force ($qvB$) oppose each other. They balance only at one speed:

$$qE = qvB \\quad\\Rightarrow\\quad v = \\frac{E}{B}$$

The combined force $\\vec{F} = q\\vec{E} + q\\vec{v} \\times \\vec{B}$ is the **Lorentz force**; the selector is the special case where its two parts cancel.

- Particles at exactly $v = E/B$ fly straight through — regardless of their mass OR charge (both cancel).
- Faster particles feel excess magnetic force and deflect one way; slower ones deflect the other.

### The Mass Spectrometer

After the selector fixes $v$, the beam enters a region with only a magnetic field and bends in a circle:

$$r = \\frac{mv}{qB}$$

With $v$, $q$, and $B$ known, the radius reads out the MASS: heavier ions sweep a larger radius (harder to turn), and higher charge a smaller one (stronger force).

- Strictly, the machine separates ions by mass-to-charge ratio $m/q$ — an ion twice as heavy with twice the charge lands on the same spot as the lighter, singly charged one. MCAT passages exploit exactly this ambiguity.`
    },
    {
      id: 'mag3-worked',
      type: 'text' as const,
      content: `### Worked Example — Force on a Motor Segment

**Problem.** A $2.0\\;\\text{m}$ segment of wire carries $3.0\\;\\text{A}$ perpendicular to a $0.5\\;\\text{T}$ field.

- **(a)** What magnetic force acts on the segment?
- **(b)** What would the force be if the wire were instead at $30^\\circ$ to the field?

**(a) Apply the wire-force law.** $F = BIL = (0.5)(3.0)(2.0) = 3.0\\;\\text{N}$

**(b) Angle check.** With the full $3.0\\;\\text{N}$ from (a): $F = 3.0\\sin 30^\\circ = 1.5\\;\\text{N}$. Only the perpendicular geometry gives the full force.

### Worked Example — Selector plus Spectrometer (Passage Style)

**Problem.** Ions of mass $3.2 \\times 10^{-26}\\;\\text{kg}$ and charge $+e$ pass a velocity selector with $E = 2000\\;\\text{V/m}$ and $B = 0.4\\;\\text{T}$, then enter an analyzer with the same $0.4\\;\\text{T}$ field.

- **(a)** What speed passes through the selector undeflected?
- **(b)** What is the radius of the ions' path in the analyzer?
- **(c)** Where does an isotope one atomic mass unit heavier, with the same charge, land?

**(a) Selected speed.** $v = \\dfrac{E}{B} = \\dfrac{2000}{0.4} = 5000\\;\\text{m/s}$

**(b) Radius in the analyzer.** With $v = 5000\\;\\text{m/s}$ from (a):

$$r = \\frac{mv}{qB} = \\frac{(3.2 \\times 10^{-26})(5000)}{(1.6 \\times 10^{-19})(0.4)} = \\frac{1.6 \\times 10^{-22}}{6.4 \\times 10^{-20}} = 2.5 \\times 10^{-3}\\;\\text{m}$$

A $2.5\\;\\text{mm}$ radius.

**(c) Isotope logic.** The selector passes it at the same $v$, and with the same charge and field $r \\propto m$, so it lands at a proportionally larger radius. That spatial spread IS the mass spectrum.`
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
            yield: 'HIGH',
            explanation: `$F = BIL = (0.2)(4.0)(0.5) = 0.4\\;\\text{N}$, with $\\sin 90^\\circ = 1$ for perpendicular geometry. $2.0\\;\\text{N}$ is $IL$ with the field dropped, $0.1\\;\\text{N}$ is $BL$ with the current dropped, and $4.0\\;\\text{N}$ is a decimal slip by a factor of 10.`
          },
          {
            question: `Two long parallel wires carry current in the same direction. The magnetic force between them is:`,
            options: [`Attractive, since each current sits in the other wire's circular field`, `Repulsive, just as two like charges repel each other`, `Zero, because both wires are electrically neutral`, `Alternating in direction along the length of the wires`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Each wire sits in the other's circular field; the right-hand rule gives a force pulling them together. Antiparallel currents repel — the reverse of the like-charges rule. Being neutral does not matter: the force acts on the moving charges of the current, and it points the same way all along two straight parallel wires.`
          },
          {
            question: `In a velocity selector with $E = 3000\\;\\text{V/m}$ and $B = 0.6\\;\\text{T}$, the speed that passes through undeflected is:`,
            options: [`$1800\\;\\text{m/s}$`, `$500\\;\\text{m/s}$`, `$50000\\;\\text{m/s}$`, `$5000\\;\\text{m/s}$`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Balance $qE = qvB$: $v = E/B = 3000/0.6 = 5000\\;\\text{m/s}$. Charge and mass cancel — the selector picks a speed, nothing else. Multiplying instead of dividing gives $1800\\;\\text{m/s}$; $500$ and $50000\\;\\text{m/s}$ are decimal-place slips.`
          },
          {
            question: `Two ions with the same charge and the same speed enter a mass spectrometer's field. Compared with the lighter ion, the heavier ion follows a path with:`,
            options: [`A smaller radius`, `A larger radius`, `The same radius`, `No curvature at all`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$r = mv/qB \\propto m$ when $v$, $q$, $B$ match: more mass means more inertia and a wider turn. That radius difference is what spreads the mass spectrum.`
          },
          {
            question: `A current-carrying wire experiences NO magnetic force when the field is:`,
            options: [`Perpendicular to the wire`, `At $45^\\circ$ to the wire`, `Parallel to the wire`, `Stronger than $1\\;\\text{T}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$F = BIL\\sin\\theta$ vanishes at $\\theta = 0$ (or $180^\\circ$): current along the field lines feels nothing. Perpendicular alignment gives the maximum instead. Field strength cannot zero the force: since $F \\propto B$, a field stronger than $1\\;\\text{T}$ only makes it larger.`
          }
        ]
      }
    },
    {
      id: 'mag3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Force on a wire.** $F = BIL\\sin\\theta$: zero when the wire lies along the field, maximum when perpendicular; motors.
- **Parallel currents.** Currents in the same direction attract; currents in opposite directions repel.
- **Velocity selector.** Crossed $E$ and $B$ fields pass only $v = E/B$, whatever the particle's mass or charge.
- **Mass spectrometer.** $r = mv/qB$ turns mass into radius; strictly, it sorts ions by $m/q$.

**Common traps**

- **Like currents repel.** Parallel currents ATTRACT, the reverse of like charges, which repel.
- **Selector sorts by mass.** A velocity selector picks only a speed: mass and charge cancel from $qE = qvB$.
- **Radius reads mass alone.** An ion of twice the mass and twice the charge lands where the lighter, singly charged one does.
- **Full force at any angle.** Only a perpendicular wire feels the full $BIL$; at $30^\\circ$ to the field it feels half.

<!-- yield:low -->
- Low-yield extras: the galvanometer needle in analog meters as an application of the wire force.
<!-- /yield -->`
    }
  ]
};
