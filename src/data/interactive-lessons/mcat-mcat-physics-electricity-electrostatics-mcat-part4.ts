import type { LessonData } from './registry'

export const electrostaticsMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  sections: [
    {
      id: 'es4-strategy',
      type: 'text' as const,
      content: `# Electrostatics

**Part 4 of 4 — MCAT Integration**

MCAT electrostatics questions rarely test one formula in isolation. They combine energy conservation, scaling, and sign logic — often wrapped in a biological or lab passage. Here is the playbook.

### Strategy 1 — Energy Conservation Beats Kinematics

A charge accelerated from rest through a potential difference $\\Delta V$ gains kinetic energy

$KE = |q\\,\\Delta V|$

no matter the path, the field geometry, or the distance. If the question gives you a voltage and asks for speed or energy, skip the field entirely.

### Strategy 2 — Superposition: Fields Add as Vectors, Potentials as Numbers

- Midway between two EQUAL positive charges: fields cancel ($E = 0$) but potentials ADD ($V = 2kQ/r$, definitely not zero).
- Midway between a $+Q$ and a $-Q$: potentials cancel ($V = 0$) but the fields point the SAME way (from $+$ toward $-$) and add.

$E = 0$ and $V = 0$ are independent facts — the exam loves this asymmetry.

### Strategy 3 — Track What's Held Constant

For a charged parallel-plate capacitor:

- **Battery still connected** ($V$ fixed): pulling plates apart decreases $E = V/d$.
- **Battery disconnected** ($Q$ fixed): the field, set by the charge on the plates, stays the same, so $V = Ed$ INCREASES as plates separate — you did work on the system.

### Strategy 4 — Same Field, Different Particles

In the same field, a proton and an electron feel forces of EQUAL magnitude ($F = eE$) in opposite directions, but the electron's acceleration is about $1836$ times larger because $a = F/m$ and its mass is that much smaller.`
    },
    {
      id: 'es4-worked',
      type: 'text' as const,
      content: `### Worked Example — Electron Gun (Energy Method)

An electron starts from rest and is accelerated through a potential difference of $500\\;\\text{V}$. Find its final kinetic energy and estimate its speed. ($m_e = 9.1 \\times 10^{-31}\\;\\text{kg}$)

**Step 1 — Kinetic energy from the voltage.**

$KE = e\\,\\Delta V = (1.6 \\times 10^{-19})(500) = 8.0 \\times 10^{-17}\\;\\text{J}$

**Step 2 — Speed from $KE = \\frac{1}{2}mv^2$.**

$v = \\sqrt{\\frac{2\\,KE}{m}} = \\sqrt{\\frac{2(8.0 \\times 10^{-17})}{9.1 \\times 10^{-31}}} = \\sqrt{1.76 \\times 10^{14}} \\approx 1.3 \\times 10^{7}\\;\\text{m/s}$

About $4\\%$ of light speed from only $500\\;\\text{V}$ — electrons are that light. Note the electron accelerates from LOW potential toward HIGH potential (negative charge).

### Worked Example — Midpoint Superposition

Two charges of $+4.0\\;\\text{nC}$ each are placed $2.0\\;\\text{m}$ apart. Find $E$ and $V$ at the midpoint.

**Field:** each charge produces a field of magnitude $kQ/r^2$ at the midpoint ($r = 1.0\\;\\text{m}$), but the two fields point in opposite directions and cancel exactly:

$E_{mid} = 0$

**Potential:** scalars add,

$V_{mid} = 2 \\times \\frac{kQ}{r} = 2 \\times \\frac{(9.0 \\times 10^9)(4.0 \\times 10^{-9})}{1.0} = 2 \\times 36 = 72\\;\\text{V}$

A test charge placed exactly at the midpoint feels no force, yet has potential energy $qV = 72q$ joules — a perfect illustration that $E$ and $V$ carry independent information.`
    },
    {
      id: 'es4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Electrostatics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A proton is accelerated from rest through $1000\\;\\text{V}$; an alpha particle (charge $+2e$) is accelerated from rest through $500\\;\\text{V}$. Compare their final kinetic energies.`,
            options: [`The proton has twice the KE`, `The alpha has twice the KE`, `They are equal`, `The alpha has four times the KE`],
            correctAnswer: 2,
            explanation: `$KE = q\\,\\Delta V$. Proton: $e \\times 1000 = 1000e$ (in eV). Alpha: $2e \\times 500 = 1000e$. Equal energies — though NOT equal speeds, since the alpha is about four times more massive.`
          },
          {
            question: `One charge in a pair is doubled and the separation is also doubled. The force between them becomes:`,
            options: [`Half the original`, `Twice the original`, `The same`, `One quarter of the original`],
            correctAnswer: 0,
            explanation: `Factor method: doubling one charge gives $\\times 2$; doubling $r$ gives $\\times 1/4$. Net: $2/4 = 1/2$.`
          },
          {
            question: `At the midpoint between charges $+Q$ and $-Q$:`,
            options: [`$E = 0$ but $V \\neq 0$`, `Both $E$ and $V$ are zero`, `Neither is zero`, `$V = 0$ but $E \\neq 0$`],
            correctAnswer: 3,
            explanation: `Potentials: $+kQ/r + (-kQ/r) = 0$. Fields: both point from the $+$ charge toward the $-$ charge and ADD. (Between two EQUAL positive charges it's the reverse: $E = 0$, $V \\neq 0$.)`
          },
          {
            question: `A charged capacitor is disconnected from its battery, then the plates are pulled farther apart. The voltage across the plates:`,
            options: [`Decreases`, `Increases`, `Stays the same`, `Drops to zero`],
            correctAnswer: 1,
            explanation: `Disconnected means $Q$ is trapped, and the field between the plates (set by the plate charge) stays fixed. $V = Ed$ grows with $d$. The work you do pulling the attracting plates apart becomes stored electrical energy.`
          },
          {
            question: `An electron and a proton are released from rest in the same uniform electric field. Which statement is true?`,
            options: [`The proton feels a larger force because it is heavier`, `The electron feels a larger force because it is lighter`, `They feel equal-magnitude forces but the electron accelerates far more`, `They have equal accelerations in opposite directions`],
            correctAnswer: 2,
            explanation: `$|F| = eE$ is identical for both. But $a = F/m$, and $m_p/m_e \\approx 1836$, so the electron's acceleration is about $1836$ times greater (in the opposite direction).`
          }
        ]
      }
    },
    {
      id: 'es4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Voltage-to-energy shortcut: $KE = |q\\,\\Delta V|$, path-independent — the fastest route to speed questions
- Superposition: fields add as vectors (can cancel), potentials add as signed numbers (can cancel) — but never assume one is zero because the other is
- Capacitor logic: battery connected fixes $V$; disconnected fixes $Q$ (and hence $E$) — decide FIRST what's constant
- Equal charges in equal fields feel equal forces; lighter particles accelerate more
- Negative charges spontaneously run "uphill" in $V$ — always convert to energy language when signs get confusing`
    }
  ]
};
