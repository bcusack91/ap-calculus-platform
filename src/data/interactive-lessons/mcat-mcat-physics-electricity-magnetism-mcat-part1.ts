import type { LessonData } from './registry'

export const magnetismMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  sections: [
    {
      id: 'mag1-intro',
      type: 'text' as const,
      content: `# Magnetism

**Part 1 of 4 — Magnetic Fields & Their Sources**

### The Magnetic Field

The magnetic field $\\vec{B}$ is measured in **tesla**: $1\\;\\text{T} = 1\\;\\text{N}/(\\text{A}\\cdot\\text{m})$. A tesla is huge — everyday fields are quoted in **gauss** ($1\\;\\text{G} = 10^{-4}\\;\\text{T}$). Earth's field is about $0.5\\;\\text{G}$; a clinical MRI magnet is $1.5$ to $3\\;\\text{T}$, tens of thousands of times stronger.

### No Magnetic Monopoles

Cut a bar magnet in half and you get two smaller magnets, never an isolated north or south pole. Magnetic field lines therefore have no start or end — every line is a **closed loop** (out of the north pole, around, and back in the south). Contrast electrostatics, where lines begin on $+$ and end on $-$ charges.

### Moving Charge Makes Magnetic Field

All magnetism traces back to moving charge — currents in wires, or electron motion inside atoms.

**Long straight wire** carrying current $I$, at distance $r$:

$B = \\frac{\\mu_0 I}{2\\pi r}$

with $\\mu_0 = 4\\pi \\times 10^{-7}\\;\\text{T}\\cdot\\text{m/A}$, so the handy lump is $\\frac{\\mu_0}{2\\pi} = 2 \\times 10^{-7}$ in SI units.

- Field lines are concentric CIRCLES around the wire.
- **Right-hand curl rule**: thumb along the current, fingers curl the way $\\vec{B}$ circulates.
- Note the $1/r$ falloff — NOT inverse-square. Doubling distance halves the field.

**Loops and solenoids**: a current loop makes a field like a tiny bar magnet (a magnetic dipole) through its center; stacking loops into a solenoid gives a strong, nearly uniform field inside — the architecture of MRI magnets.

### Magnetic Materials

- **Ferromagnetic** (Fe, Ni, Co): atomic dipoles lock into aligned domains — strongly attracted to magnets and can stay magnetized.
- **Paramagnetic** (materials with unpaired electrons, e.g. deoxyhemoglobin): weakly ATTRACTED while a field is applied; alignment vanishes when it is removed.
- **Diamagnetic** (paired electrons only — water, most tissue, oxyhemoglobin): very weakly REPELLED by fields.

The paramagnetic/diamagnetic switch between deoxy- and oxyhemoglobin is the physical basis of the fMRI BOLD signal — a favorite passage hook.`
    },
    {
      id: 'mag1-worked',
      type: 'text' as const,
      content: `### Worked Example — Field Near a Wire

A power cable carries $I = 10\\;\\text{A}$. Find the magnetic field $5\\;\\text{cm}$ away, and compare it to Earth's field.

**Step 1 — Plug into the wire formula, using the lump.**

$B = \\frac{\\mu_0 I}{2\\pi r} = (2 \\times 10^{-7})\\frac{10}{0.05}$

**Step 2 — Clean arithmetic.** $\\frac{10}{0.05} = 200$, so

$B = (2 \\times 10^{-7})(200) = 4 \\times 10^{-5}\\;\\text{T} = 0.4\\;\\text{G}$

**Step 3 — Interpret.** Comparable to Earth's $0.5\\;\\text{G}$ — enough to nudge a compass, far too weak to affect tissue.

### Worked Example — Scaling, Not Plugging

Two long parallel wires, P and Q, each carry current $I$. The field due to P alone at distance $d$ is $B_0$. What is the field due to P at $2d$, and what happens if P's current is also tripled?

**Step 1 — Distance factor.** $B \\propto 1/r$ (single power, unlike Coulomb's $1/r^2$): doubling $r$ gives $\\frac{1}{2}B_0$.

**Step 2 — Current factor.** $B \\propto I$: tripling gives $3 \\times \\frac{1}{2}B_0 = 1.5\\,B_0$.

The MCAT tests exactly this discrimination: wire fields fall off as $1/r$, point-charge forces as $1/r^2$. Keep the exponents straight.`
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
            explanation: `Field strength $B$ is in tesla ($1\\;\\text{T} = 1\\;\\text{N}/(\\text{A}\\cdot\\text{m})$). The weber is magnetic FLUX ($\\text{T}\\cdot\\text{m}^2$); the henry is inductance; V/m is electric field.`
          },
          {
            question: `If the distance from a long current-carrying wire is doubled, the magnetic field there:`,
            options: [`Drops to one quarter`, `Is unchanged`, `Halves`, `Doubles`],
            correctAnswer: 2,
            explanation: `$B = \\mu_0 I/2\\pi r \\propto 1/r$ — a single inverse power, so doubling $r$ halves $B$. One-quarter would be the answer for an inverse-SQUARE law like Coulomb's.`
          },
          {
            question: `Unlike electric field lines, magnetic field lines:`,
            options: [`Always form closed loops, because isolated magnetic poles do not exist`, `Begin on north poles and terminate at infinity`, `Point from low to high potential`, `Cannot cross through conducting materials`],
            correctAnswer: 0,
            explanation: `No monopoles means no place for a field line to start or stop — every line closes on itself. Electric lines can start and end because isolated charges exist.`
          },
          {
            question: `A material that is strongly attracted to a magnet and can remain magnetized after the magnet is removed is classified as:`,
            options: [`Diamagnetic`, `Paramagnetic`, `Electrostatic`, `Ferromagnetic`],
            correctAnswer: 3,
            explanation: `Ferromagnets (Fe, Ni, Co) have domains that lock into alignment and persist. Paramagnets are only weakly attracted and relax when the field is removed; diamagnets are weakly repelled.`
          },
          {
            question: `The magnetic field $0.1\\;\\text{m}$ from a long wire carrying $5\\;\\text{A}$ is:`,
            options: [`$2 \\times 10^{-5}\\;\\text{T}$`, `$1 \\times 10^{-5}\\;\\text{T}$`, `$5 \\times 10^{-6}\\;\\text{T}$`, `$1 \\times 10^{-6}\\;\\text{T}$`],
            correctAnswer: 1,
            explanation: `$B = (2 \\times 10^{-7})(I/r) = (2 \\times 10^{-7})(5/0.1) = (2 \\times 10^{-7})(50) = 1 \\times 10^{-5}\\;\\text{T}$ (about $0.1\\;\\text{G}$).`
          }
        ]
      }
    },
    {
      id: 'mag1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $B$ in tesla; $1\\;\\text{G} = 10^{-4}\\;\\text{T}$; Earth about $0.5\\;\\text{G}$, MRI $1.5$ to $3\\;\\text{T}$
- No monopoles: field lines are closed loops, never starting or ending
- Straight wire: $B = \\mu_0 I/2\\pi r$ — circles around the wire, $1/r$ falloff (not $1/r^2$); right-hand curl rule
- Loops are dipoles; solenoids give uniform interior fields (MRI architecture)
- Ferro = strong and persistent; para = weakly attracted (deoxyhemoglobin); dia = weakly repelled (water, oxyhemoglobin)`
    }
  ]
};
