import type { LessonData } from './registry'

export const magnetismMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  sections: [
    {
      id: 'mag1-intro',
      type: 'text' as const,
      content: `# Magnetism Part 1: Fields & Forces on Charges

**Part 1 of 2 — Magnetic Fields & Their Sources**

**Where this fits.** The *Electrostatics* lesson treated charges at rest, and the four Circuits lessons, ending with *Circuits Part 4: Capacitor Networks & Bioelectricity*, set them moving as current. Moving charge does something resting charge cannot: it creates and feels magnetic fields. This lesson covers where magnetic fields come from, how materials respond to them, and the force a field exerts on a single moving charge. Next comes the *Magnetism Part 2: Wires, Spectrometers & Induction* lesson, which turns that force on whole wires and ion beams and adds induction.

### The Magnetic Field

All magnetism traces back to moving charge — currents in wires, or electron motion inside atoms. The magnetic field $\\vec{B}$ is measured in **tesla**: $1\\;\\text{T} = 1\\;\\text{N}/(\\text{A}\\cdot\\text{m})$. A tesla is huge — everyday fields are quoted in **gauss** ($1\\;\\text{G} = 10^{-4}\\;\\text{T}$). Earth's field is about $0.5\\;\\text{G}$; a clinical MRI magnet is $1.5$ to $3\\;\\text{T}$, tens of thousands of times stronger.

### No Magnetic Monopoles

Cut a bar magnet in half and you get two smaller magnets, never an isolated north or south pole. Magnetic field lines therefore have no start or end — every line is a **closed loop** (out of the north pole, around, and back in the south). Contrast electrostatics, where lines begin on $+$ and end on $-$ charges.

### Moving Charge Makes Magnetic Field

**Long straight wire** carrying current $I$, at distance $r$:

$$B = \\frac{\\mu_0 I}{2\\pi r}$$

with $\\mu_0 = 4\\pi \\times 10^{-7}\\;\\text{T}\\cdot\\text{m/A}$, so the handy lump is $\\frac{\\mu_0}{2\\pi} = 2 \\times 10^{-7}$ in SI units.

- Field lines are concentric CIRCLES around the wire.
- **Right-hand curl rule**: thumb along the current, fingers curl the way $\\vec{B}$ circulates.
- Note the $1/r$ falloff — NOT inverse-square. Doubling distance halves the field.

**Loops and solenoids**: a current loop makes a field like a tiny bar magnet (a magnetic dipole) through its center; stacking loops into a solenoid gives a strong, nearly uniform field inside — the architecture of MRI magnets.

### Magnetic Materials

- **Ferromagnetic** (Fe, Ni, Co): atomic dipoles lock into aligned domains — strongly attracted to magnets and can stay magnetized. Heated above its **Curie temperature**, a ferromagnet's domains scramble and it behaves as a paramagnet.
- **Paramagnetic** (materials with unpaired electrons, e.g. deoxyhemoglobin): weakly ATTRACTED while a field is applied; alignment vanishes when it is removed.
- **Diamagnetic** (paired electrons only — water, most tissue, oxyhemoglobin): very weakly REPELLED by fields.

The paramagnetic/diamagnetic switch between deoxy- and oxyhemoglobin is the physical basis of the fMRI BOLD signal — a favorite passage hook.`
    },
    {
      id: 'mag1-worked',
      type: 'text' as const,
      content: `### Worked Example — Field Near a Wire

**Problem.** A power cable carries $I = 10\\;\\text{A}$. A compass sits $5\\;\\text{cm}$ from the cable.

- **(a)** What is the magnetic field from the cable at the compass, in tesla?
- **(b)** What is that field in gauss, and how does it compare with Earth's field?

**(a) Wire formula, using the lump.** $\\frac{10}{0.05} = 200$, so

$$B = \\frac{\\mu_0 I}{2\\pi r} = (2 \\times 10^{-7})\\frac{10}{0.05} = (2 \\times 10^{-7})(200) = 4 \\times 10^{-5}\\;\\text{T}$$

**(b) Interpret.** With $B = 4 \\times 10^{-5}\\;\\text{T}$ from (a) and $1\\;\\text{G} = 10^{-4}\\;\\text{T}$, $B = 0.4\\;\\text{G}$. That is comparable to Earth's $0.5\\;\\text{G}$: enough to nudge a compass, far too weak to affect tissue.

### Worked Example — Scaling, Not Plugging

**Problem.** A long straight wire P carries current $I$. Its field at distance $d$ is $B_0$.

- **(a)** What is the field due to P at distance $2d$?
- **(b)** What is the field due to P at $2d$ if P's current is also tripled?
- **(c)** Would the electric field of a point charge scale the same way with distance?

**(a) Distance factor.** $B \\propto 1/r$, a single power: doubling $r$ gives $\\frac{1}{2}B_0$.

**(b) Current factor.** $B \\propto I$, so with $\\frac{1}{2}B_0$ from (a), tripling the current gives $3 \\times \\frac{1}{2}B_0 = 1.5\\,B_0$.

**(c) Keep the exponents straight.** No: a point charge's field falls off as $E \\propto 1/r^2$, so doubling the distance would quarter it. The MCAT tests exactly this discrimination: wire fields fall off as $1/r$, point-charge fields as $1/r^2$.`
    },
    {
      id: 'mag1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Magnetic Fields & Their Sources** 🎯`,
      exercise: {
        questions: [
          {
            question: `The SI unit of magnetic field strength is the:`,
            options: [`Weber`, `Tesla`, `Henry`, `Volt per meter`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Field strength $B$ is in tesla ($1\\;\\text{T} = 1\\;\\text{N}/(\\text{A}\\cdot\\text{m})$). The weber is magnetic FLUX ($\\text{T}\\cdot\\text{m}^2$); the henry is inductance; V/m is electric field.`
          },
          {
            question: `If the distance from a long current-carrying wire is doubled, the magnetic field there:`,
            options: [`Drops to one quarter`, `Is unchanged`, `Halves`, `Doubles`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$B = \\mu_0 I/2\\pi r \\propto 1/r$ — a single inverse power, so doubling $r$ halves $B$. One-quarter would be the answer for an inverse-SQUARE law like Coulomb's.`
          },
          {
            question: `Unlike electric field lines, magnetic field lines:`,
            options: [`Always form closed loops, since isolated magnetic poles do not exist`, `Begin at north poles and stop at south poles, never inside a magnet`, `Point the way a positive charge at rest would accelerate`, `Cannot pass through conducting or ferromagnetic materials`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `No monopoles means no place for a field line to start or stop — every line closes on itself. Outside a magnet the lines run from north to south, but they continue from south back to north INSIDE it. Electric lines can start and end because isolated charges exist, and it is the ELECTRIC field that shows which way a resting positive charge accelerates; a magnetic field exerts no force on a charge at rest. Field lines pass straight through conductors and are concentrated, not blocked, by ferromagnets.`
          },
          {
            question: `A material that is strongly attracted to a magnet and can remain magnetized after the magnet is removed is classified as:`,
            options: [`Diamagnetic`, `Paramagnetic`, `Nonmagnetic`, `Ferromagnetic`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Ferromagnets (Fe, Ni, Co) have domains that lock into alignment and persist. Paramagnets are only weakly attracted and relax when the field is removed; diamagnets are weakly repelled.`
          },
          {
            question: `The magnetic field $0.1\\;\\text{m}$ from a long wire carrying $5\\;\\text{A}$ is:`,
            options: [`$2 \\times 10^{-5}\\;\\text{T}$`, `$1 \\times 10^{-5}\\;\\text{T}$`, `$5 \\times 10^{-6}\\;\\text{T}$`, `$1 \\times 10^{-6}\\;\\text{T}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$B = (2 \\times 10^{-7})(I/r) = (2 \\times 10^{-7})(5/0.1) = (2 \\times 10^{-7})(50) = 1 \\times 10^{-5}\\;\\text{T}$ (about $0.1\\;\\text{G}$). Dropping the 2 from $2\\pi r$ gives $2 \\times 10^{-5}\\;\\text{T}$; using $\\mu_0/4\\pi = 10^{-7}$ as the lump gives $5 \\times 10^{-6}\\;\\text{T}$; and forgetting to divide by $r$ gives $(2 \\times 10^{-7})(5) = 1 \\times 10^{-6}\\;\\text{T}$.`
          }
        ]
      }
    },
    {
      id: 'mag1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Right-hand curl rule.** Thumb along the current, and your fingers curl the way the field circles the wire.
- **Closed field lines.** There are no magnetic monopoles, so every field line is a closed loop with no start or end.
- **Fields from currents.** A wire's $B = \\mu_0 I/2\\pi r$ circles it; loops act as dipoles, and solenoids give uniform interiors.
- **Three kinds of material.** Ferromagnets stay magnetized; paramagnets are weakly attracted; diamagnets are weakly repelled.

**Common traps**

- **Inverse-square wire field.** A wire's field falls off as $1/r$: doubling the distance halves it, not quarters it.
- **Isolating a pole.** Cutting a magnet in half gives two smaller magnets, never a lone north or south pole.
- **Weber for field strength.** Field strength is in tesla; the weber ($\\text{T}\\cdot\\text{m}^2$) is the unit of magnetic flux.
- **Hemoglobin reversed.** Deoxyhemoglobin is paramagnetic (attracted); oxyhemoglobin is diamagnetic (weakly repelled).`
    }
  ]
};
