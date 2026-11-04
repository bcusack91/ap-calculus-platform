import type { LessonData } from './registry'

export const inductionMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-induction-mcat',
  sections: [
    {
      id: 'mag4-strategy',
      type: 'text' as const,
      content: `# Magnetism Part 2: Wires, Spectrometers & Induction

**Part 2 of 2 — MCAT Integration: Induction, MRI & Passage Strategy**

### Magnetic Flux

$$\\Phi = BA\\cos\\theta$$

in webers ($1\\;\\text{Wb} = 1\\;\\text{T}\\cdot\\text{m}^2$), where $\\theta$ is the angle between $\\vec{B}$ and the NORMAL to the loop's area. Flux is maximal when the field threads straight through the loop and ZERO when the field lies in the loop's plane.

### Faraday's Law — Changing Flux Makes EMF

$$|\\varepsilon| = N\\frac{\\Delta\\Phi}{\\Delta t}$$

An EMF (the energy per charge a source supplies, from the *Circuits Part 3: EMF & Capacitance* lesson) appears in a loop of $N$ turns whenever the flux through it CHANGES; a steady flux, however enormous, induces nothing. Three knobs, straight from $\\Phi = BA\\cos\\theta$:

- Change the field strength $B$.
- Change the loop's area $A$. A rod of length $L$ sliding at speed $v$ along rails across a field sweeps out area, giving $\\varepsilon = BLv$.
- Rotate the loop (change $\\theta$): this one is the electric generator.

### Lenz's Law — the Minus Sign

With its sign, Faraday's law reads $\\varepsilon = -N\\,\\Delta\\Phi/\\Delta t$; the minus sign is Lenz's law. The induced current flows in the direction whose OWN magnetic field opposes the change in flux that created it.

- Flux increasing into the loop → induced current circulates to push flux back out.
- Pull a magnet's north pole AWAY → the loop makes a south-facing pole to hold on.

Lenz is conservation of energy in disguise: if the induced current instead reinforced the change, you would get runaway free energy. It is also why you must do work to shove a magnet into a coil.

### Strategy — the MRI Passage

An MRI scanner is a physics anthology the MCAT keeps reusing:

- A superconducting solenoid (zero resistance, persistent current) makes a uniform $1.5$ to $3\\;\\text{T}$ field.
- Protons act as tiny dipoles that align with it; an RF pulse tips them, and as they relax they emit the detected signal.
- Switched gradient coils change the flux fast, inducing eddy currents.
- Safety: ferromagnetic objects become projectiles and implanted wires can pick up induced EMFs; the static field does not harm tissue.

<!-- yield:low -->
- The loud banging during a scan comes from the gradient coils themselves: each time their current switches, the main field shoves on the windings ($F = BIL$).
<!-- /yield -->

### Strategy — Answer Induction Questions with a Checklist

- First: is the flux actually changing? If not, the EMF is zero and you are done.
- Then: which way is it changing (in or out, growing or shrinking)?
- Lenz: the induced current opposes THAT change.
- Magnitude: $N\\,\\Delta\\Phi/\\Delta t$ — watch for turns $N$ quietly given in the stem.`
    },
    {
      id: 'mag4-worked',
      type: 'text' as const,
      content: `### Worked Example — Field Collapse in a Coil

**Problem.** A $50$-turn coil of area $0.2\\;\\text{m}^2$ has its plane perpendicular to a $0.5\\;\\text{T}$ field (field along the normal, $\\cos\\theta = 1$). The field is switched off over $0.1\\;\\text{s}$; the coil's circuit has $25\\;\\Omega$.

- **(a)** What is the initial flux through one turn?
- **(b)** What EMF is induced while the field collapses?
- **(c)** Which way does the induced current circulate?
- **(d)** How large is the induced current?

**(a) Initial flux.** $\\Phi = BA = (0.5)(0.2) = 0.1\\;\\text{Wb}$

**(b) EMF magnitude.** With $\\Delta\\Phi = 0.1\\;\\text{Wb}$ per turn from (a):

$$|\\varepsilon| = N\\frac{\\Delta\\Phi}{\\Delta t} = 50 \\times \\frac{0.1}{0.1} = 50\\;\\text{V}$$

**(c) Direction by Lenz.** The flux is DYING, so the induced current circulates to prop it up: its own field points the same way as the original one. That is counterclockwise viewed with the field pointing at you.

**(d) Induced current.** With $|\\varepsilon| = 50\\;\\text{V}$ from (b): $I = 50/25 = 2\\;\\text{A}$ while the collapse lasts.

### Worked Example — Magnet and Loop (Sign Logic Only)

**Problem.** A bar magnet's north pole is pushed TOWARD a conducting loop.

- **(a)** How does the flux through the loop change, and what pole does the loop present to the magnet?
- **(b)** Where does the energy dissipated in the loop come from, and what changes if the magnet is pulled away?

**(a) Flux and Lenz.** Field lines exit north poles, so as the pole approaches, the flux through the loop increases. The loop opposes the increase: its induced current makes a NORTH pole facing the incoming magnet, repelling it.

**(b) Energy and reversal.** The work you do pushing against that repulsion is exactly the electrical energy dissipated in the loop. Pull the magnet away and everything flips: the flux decreases, so the loop shows a south face and tugs the magnet back.`
    },
    {
      id: 'mag4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Induction & MRI** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $0.02\\;\\text{m}^2$ loop lies with its plane perpendicular to a $0.5\\;\\text{T}$ field. The flux through it is:`,
            options: [`$0.01\\;\\text{Wb}$`, `$0.01\\;\\text{T}$`, `$25\\;\\text{Wb}$`, `$0\\;\\text{Wb}$`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `A plane perpendicular to the field means the field runs along the loop's normal, so $\\cos\\theta = 1$ and $\\Phi = BA = (0.5)(0.02) = 0.01\\;\\text{Wb}$. The value in tesla has the right number but the unit of field strength, not flux ($1\\;\\text{Wb} = 1\\;\\text{T}\\cdot\\text{m}^2$). $25\\;\\text{Wb}$ divides $B$ by $A$ instead of multiplying, and zero flux would need the field to lie IN the loop's plane.`
          },
          {
            question: `The flux through a $100$-turn coil changes by $0.02\\;\\text{Wb}$ over $0.5\\;\\text{s}$. The magnitude of the induced EMF is:`,
            options: [`$0.04\\;\\text{V}$`, `$2\\;\\text{V}$`, `$0.4\\;\\text{V}$`, `$4\\;\\text{V}$`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `$|\\varepsilon| = N\\,\\Delta\\Phi/\\Delta t = 100 \\times 0.02/0.5 = 100 \\times 0.04 = 4\\;\\text{V}$. Dropping the turn count gives the trap answer $0.04\\;\\text{V}$; dropping the time gives $N\\Delta\\Phi = 2\\;\\text{V}$, which is not a rate; $0.4\\;\\text{V}$ is a decimal slip by a factor of 10.`
          },
          {
            question: `Lenz's law — induced currents oppose the change that creates them — is fundamentally a statement of:`,
            options: [`Conservation of energy`, `Conservation of electric charge`, `Newton's third law of motion`, `Conservation of linear momentum`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `If induced currents reinforced the change, flux would grow without limit, generating energy from nothing. Opposition is what makes you pay in mechanical work for the electrical energy you extract. Charge and momentum conservation and Newton's third law all hold, but none of them sets the direction of an induced current.`
          },
          {
            question: `A loop's plane is PARALLEL to a uniform magnetic field. The magnetic flux through the loop is:`,
            options: [`Maximum`, `Equal to $BA$`, `Zero`, `Set by the loop's resistance`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Flux uses the angle with the loop's NORMAL: field in the plane means $\\theta = 90^\\circ$ from the normal, $\\cos\\theta = 0$, so no field lines thread the loop. ($BA$ is the perpendicular-threading maximum.) Resistance never enters $\\Phi = BA\\cos\\theta$; it affects only how much current a CHANGING flux drives.`
          },
          {
            question: `As a magnet's north pole approaches a conducting loop, the loop's induced current creates:`,
            options: [`A north pole facing the magnet; the loop repels it`, `A south pole facing the magnet; the loop attracts it`, `No pole until the magnet stops and the flux is steady`, `No pole, since the loop's net charge stays at zero`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Incoming flux is increasing, so by Lenz the loop opposes it — presenting a like (north) pole that pushes back against the approach. Pulling the magnet AWAY would induce the attracting south face instead. The induced current exists only WHILE the flux changes: the loop has its pole during the approach and loses it once the magnet stops, the reverse of "no pole until it stops". A neutral loop still makes a magnetic field, because a current, not a net charge, is what produces it.`
          }
        ]
      }
    },
    {
      id: 'mag4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Magnetic flux.** $\\Phi = BA\\cos\\theta$ in webers, with $\\theta$ from the loop's normal; zero when $\\vec{B}$ lies in the plane.
- **Faraday's law.** $|\\varepsilon| = N\\,\\Delta\\Phi/\\Delta t$: only CHANGING flux induces an EMF, by changing $B$, $A$ or $\\theta$.
- **Lenz's law.** The induced current opposes the change in flux; that is energy conservation, so pushing a magnet in takes work.
- **The pole rule.** An approaching north pole meets a north face and is repelled; a retreating one meets a south face and is attracted.

**Common traps**

- **Steady flux induces EMF.** A huge but constant flux induces nothing; only its rate of change matters.
- **Angle from the plane.** $\\theta$ is measured from the normal, so a field lying in the loop's plane gives zero flux.
- **Opposing the field itself.** The current opposes the CHANGE: a dying flux is propped up, not reversed.
- **Forgetting the turns.** Multiply by $N$: a $100$-turn coil gives $100$ times the EMF of a single loop.

<!-- yield:low -->
- Low-yield extras: the gradient coils' banging during a scan.
<!-- /yield -->

**Next up:** the *Optics* lesson — light as an electromagnetic wave, reflection and refraction, and image formation by mirrors and lenses.`
    }
  ]
};
