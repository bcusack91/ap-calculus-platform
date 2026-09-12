import type { LessonData } from './registry'

export const magnetismMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  sections: [
    {
      id: 'mag4-strategy',
      type: 'text' as const,
      content: `# Magnetism

**Part 4 of 4 — MCAT Integration: Induction, MRI & Passage Strategy**

### Magnetic Flux

$\\Phi = BA\\cos\\theta$

in webers ($1\\;\\text{Wb} = 1\\;\\text{T}\\cdot\\text{m}^2$), where $\\theta$ is the angle between $\\vec{B}$ and the NORMAL to the loop's area. Flux is maximal when the field threads straight through the loop and ZERO when the field lies in the loop's plane.

### Faraday's Law — Changing Flux Makes EMF

$|\\varepsilon| = N\\frac{\\Delta\\Phi}{\\Delta t}$

An EMF appears in a loop of $N$ turns whenever the flux through it CHANGES. Three knobs, straight from $\\Phi = BA\\cos\\theta$:

1. change the field strength $B$,
2. change the loop's area $A$,
3. rotate the loop (change $\\theta$) — this one is the electric generator.

A steady flux — however enormous — induces nothing. Rate of change is everything.

### Lenz's Law — the Minus Sign

The induced current flows in the direction whose OWN magnetic field opposes the change in flux that created it.

- Flux increasing into the loop → induced current circulates to push flux back out.
- Pull a magnet's north pole AWAY → the loop makes a south-facing pole to hold on.

Lenz is conservation of energy in disguise: if the induced current instead reinforced the change, you would get runaway free energy. It is also why you must do work to shove a magnet into a coil.

### Strategy — the MRI Passage

An MRI scanner is a physics anthology the MCAT keeps reusing:

- The main solenoid produces a uniform $1.5$ to $3\\;\\text{T}$ field; superconducting wire carries huge persistent current with zero resistance.
- Hydrogen nuclei (protons) act as tiny magnetic dipoles that align with the field and precess; a radio-frequency pulse tips them, and their relaxation emits the detected RF signal.
- Rapidly switched gradient coils change flux fast — inducing eddy currents (and the loud banging).
- Safety: ferromagnetic objects become projectiles; implanted wires can develop induced EMFs. Nothing about the STATIC field harms diamagnetic tissue.

### Strategy — Answer Induction Questions with a Checklist

1. Is flux actually changing? If not, EMF is zero — done.
2. Which way is it changing (in/out, growing/shrinking)?
3. Lenz: the induced current opposes THAT change.
4. Magnitude: $N\\,\\Delta\\Phi/\\Delta t$ — watch for turns $N$ quietly given in the stem.`
    },
    {
      id: 'mag4-worked',
      type: 'text' as const,
      content: `### Worked Example — Field Collapse in a Coil

A circular coil of $50$ turns and area $0.2\\;\\text{m}^2$ sits with its plane perpendicular to a $0.5\\;\\text{T}$ field (so the field is along the normal, $\\cos\\theta = 1$). The field is switched off over $0.1\\;\\text{s}$.

**Step 1 — Initial flux through one turn.**

$\\Phi = BA = (0.5)(0.2) = 0.1\\;\\text{Wb}$

**Step 2 — EMF magnitude.**

$|\\varepsilon| = N\\frac{\\Delta\\Phi}{\\Delta t} = 50 \\times \\frac{0.1}{0.1} = 50\\;\\text{V}$

**Step 3 — Direction by Lenz.** Outward-through-the-coil flux is DYING, so the induced current circulates to prop it up — counterclockwise as seen from the side the field pointed toward. If the coil's circuit resistance is $25\\;\\Omega$, the induced current is $I = 50/25 = 2\\;\\text{A}$ while the collapse lasts.

### Worked Example — Magnet and Loop (Sign Logic Only)

A bar magnet's north pole is pushed TOWARD a conducting loop.

**Step 1 — Flux change.** Field lines exit north poles, so flux through the loop (toward it) is increasing.

**Step 2 — Lenz.** The loop opposes the increase: its induced current makes a NORTH pole facing the incoming magnet, repelling it.

**Step 3 — Energy audit.** You feel that repulsion as resistance to your push; the work you do against it is exactly the electrical energy dissipated in the loop. Reverse the motion (pull away) and everything flips: the loop shows a south face and tugs the magnet back.`
    },
    {
      id: 'mag4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Induction & MRI** 🎯`,
      exercise: {
        questions: [
          {
            question: `The SI unit of magnetic flux is the:`,
            options: [`Tesla`, `Weber`, `Henry`, `Ampere-turn`],
            correctAnswer: 1,
            explanation: `Flux $\\Phi = BA\\cos\\theta$ is in webers ($\\text{T}\\cdot\\text{m}^2$). The tesla is flux DENSITY — field per unit area.`
          },
          {
            question: `The flux through a $100$-turn coil changes by $0.02\\;\\text{Wb}$ over $0.5\\;\\text{s}$. The magnitude of the induced EMF is:`,
            options: [`$0.04\\;\\text{V}$`, `$2\\;\\text{V}$`, `$0.4\\;\\text{V}$`, `$4\\;\\text{V}$`],
            correctAnswer: 3,
            explanation: `$|\\varepsilon| = N\\,\\Delta\\Phi/\\Delta t = 100 \\times 0.02/0.5 = 100 \\times 0.04 = 4\\;\\text{V}$. Dropping the turn count gives the trap answer $0.04\\;\\text{V}$.`
          },
          {
            question: `Lenz's law — induced currents oppose the change that creates them — is fundamentally a statement of:`,
            options: [`Conservation of energy`, `Conservation of charge`, `Newton's third law`, `The inverse-square law`],
            correctAnswer: 0,
            explanation: `If induced currents reinforced the change, flux would grow without limit, generating energy from nothing. Opposition is what makes you pay in mechanical work for the electrical energy you extract.`
          },
          {
            question: `A loop's plane is PARALLEL to a uniform magnetic field. The magnetic flux through the loop is:`,
            options: [`Maximum`, `Equal to $BA$`, `Zero`, `Dependent on the loop's resistance`],
            correctAnswer: 2,
            explanation: `Flux uses the angle with the loop's NORMAL: field in the plane means $\\theta = 90^\\circ$ from the normal, $\\cos\\theta = 0$, so no field lines thread the loop. ($BA$ is the perpendicular-threading maximum.)`
          },
          {
            question: `As a magnet's north pole approaches a conducting loop, the loop's induced current creates:`,
            options: [`A north pole facing the magnet, repelling it`, `A south pole facing the magnet, attracting it`, `No magnetic field, since the loop is neutral`, `A field parallel to the magnet's motion`],
            correctAnswer: 0,
            explanation: `Incoming flux is increasing, so by Lenz the loop opposes it — presenting a like (north) pole that pushes back against the approach. Pulling the magnet AWAY would induce the attracting south face instead.`
          }
        ]
      }
    },
    {
      id: 'mag4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- $\\Phi = BA\\cos\\theta$ (webers); angle measured from the loop's normal, zero flux when field lies in the plane
- Faraday: $|\\varepsilon| = N\\,\\Delta\\Phi/\\Delta t$ — only CHANGING flux induces; change $B$, $A$, or orientation
- Lenz: induced current opposes the change; it is conservation of energy, and why generators resist being turned
- MRI: superconducting solenoid, precessing proton dipoles, RF pulses, switching gradients inducing eddy currents
- Checklist: flux changing? which way? oppose it; then $N\\,\\Delta\\Phi/\\Delta t$ for size`
    }
  ]
};
