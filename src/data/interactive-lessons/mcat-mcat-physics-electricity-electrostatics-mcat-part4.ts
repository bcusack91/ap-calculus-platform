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

- The natural unit here is the **electron-volt**: $1\\;\\text{eV} = 1.6 \\times 10^{-19}\\;\\text{J}$, the energy one elementary charge $e$ gains crossing $1\\;\\text{V}$.

### Strategy 2 — Superposition: Fields Add as Vectors, Potentials as Numbers

- Midway between two EQUAL positive charges: fields cancel ($E = 0$) but potentials ADD ($V = 2kQ/r$, definitely not zero), where $r$ is the distance from each charge to the midpoint, half the separation.
- Midway between a $+Q$ and a $-Q$: potentials cancel ($V = 0$) but the fields point the SAME way (from $+$ toward $-$) and add.

$E = 0$ and $V = 0$ are independent facts — the exam loves this asymmetry.

### Strategy 3 — Track What's Held Constant

For a charged parallel-plate capacitor:

- **Battery still connected** ($V$ fixed): pulling plates apart decreases $E = V/d$.
- **Battery disconnected** ($Q$ fixed): the field, set by the charge on the plates, stays the same, so $V = Ed$ INCREASES as plates separate — you did work on the system.
- Capacitance, dielectrics and the energy a capacitor stores are taught in the *Circuits Part 3: EMF & Capacitance* lesson; here only the field and the voltage matter.

### Strategy 4 — Same Field, Different Particles

In the same field, a proton and an electron feel forces of EQUAL magnitude ($F = eE$) in opposite directions, but the electron's acceleration is about $1836$ times larger because $a = F/m$ and its mass is that much smaller.`
    },
    {
      id: 'es4-worked',
      type: 'text' as const,
      content: `### Worked Example — Electron Gun (Energy Method)

**Problem.** An electron ($m_e = 9.1 \\times 10^{-31}\\;\\text{kg}$) starts from rest and is accelerated through a potential difference of $500\\;\\text{V}$.

- **(a)** What is its final kinetic energy?
- **(b)** About how fast is it moving?
- **(c)** Which way through the potential did it travel, and how does its speed compare with light's?

**(a) Kinetic energy from the voltage.** $KE = e\\,\\Delta V = (1.6 \\times 10^{-19})(500) = 8.0 \\times 10^{-17}\\;\\text{J}$, whatever the path or field shape.

**(b) Speed from $KE = \\frac{1}{2}mv^2$.** With $KE$ from (a): $v = \\sqrt{\\frac{2\\,KE}{m}} = \\sqrt{\\frac{2(8.0 \\times 10^{-17})}{9.1 \\times 10^{-31}}} = \\sqrt{1.76 \\times 10^{14}} \\approx 1.3 \\times 10^{7}\\;\\text{m/s}$

**(c) Direction and scale.** Being negative, the electron accelerates from LOW potential toward HIGH potential. Its $1.3 \\times 10^{7}\\;\\text{m/s}$ is about $4\\%$ of light speed from only $500\\;\\text{V}$; electrons are that light.

### Worked Example — Midpoint Superposition

**Problem.** Two charges of $+4.0\\;\\text{nC}$ each are placed $2.0\\;\\text{m}$ apart. Use $k \\approx 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

- **(a)** What is the electric field at the midpoint?
- **(b)** What is the potential at the midpoint?
- **(c)** What does a test charge placed exactly at the midpoint feel, and what energy does it have?

**(a) Field.** Each charge produces a field of magnitude $kQ/r^2$ at the midpoint ($r = 1.0\\;\\text{m}$), but the two fields point in opposite directions and cancel exactly: $E_{mid} = 0$.

**(b) Potential.** Scalars add: $V_{mid} = 2 \\times \\frac{kQ}{r} = 2 \\times \\frac{(9.0 \\times 10^9)(4.0 \\times 10^{-9})}{1.0} = 2 \\times 36 = 72\\;\\text{V}$

**(c) No force, real energy.** With $E = 0$ from (a), the test charge feels no force, yet with $V = 72\\;\\text{V}$ from (b) it has potential energy $qV = 72q$ joules. $E$ and $V$ carry independent information.`
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
            yield: 'HIGH',
            explanation: `$KE = q\\,\\Delta V$. Proton: $(e)(1000\\;\\text{V}) = 1000\\;\\text{eV}$. Alpha: $(2e)(500\\;\\text{V}) = 1000\\;\\text{eV}$. Equal energies — though NOT equal speeds, since the alpha is about four times more massive. Either "twice" answer counts only the voltage or only the charge, and "four times" borrows the alpha's mass ratio, which affects speed, not energy.`
          },
          {
            question: `One charge in a pair is doubled and the separation is also doubled. The force between them becomes:`,
            options: [`Half the original`, `Twice the original`, `Unchanged from the original`, `One quarter of the original`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Factor method: doubling one charge gives $\\times 2$; doubling $r$ gives $\\times 1/4$. Net: $2/4 = 1/2$. Calling it unchanged treats $r$ as if it entered to the first power.`
          },
          {
            question: `At the midpoint between charges $+Q$ and $-Q$:`,
            options: [`$E = 0$ but $V \\neq 0$`, `Both $E$ and $V$ are zero`, `Neither is zero`, `$V = 0$ but $E \\neq 0$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Potentials: $+kQ/r + (-kQ/r) = 0$. Fields: both point from the $+$ charge toward the $-$ charge and ADD. (Between two EQUAL positive charges it's the reverse: $E = 0$, $V \\neq 0$.)`
          },
          {
            question: `A charged capacitor is disconnected from its battery, then the plates are pulled farther apart. The voltage across the plates:`,
            options: [`Decreases, as the field weakens with the gap`, `Increases, as $E$ stays fixed while $d$ grows`, `Stays the same, since $Q$ cannot change`, `Drops to zero once the battery is gone`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Disconnected means $Q$ is trapped, and the field between the plates (set by the plate charge) stays fixed rather than weakening. $V = Ed$ therefore grows with $d$: a fixed charge does not mean a fixed voltage. The work you do pulling the attracting plates apart becomes stored electrical energy, and the charge stays on the plates, so the voltage cannot drop to zero.`
          },
          {
            question: `An electron and a proton are released from rest in the same uniform electric field. Which statement is true?`,
            options: [`The proton feels a larger force because it is heavier`, `The electron feels a larger force because it is lighter`, `They feel equal forces, but the electron accelerates far more`, `They have equal accelerations in opposite directions`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$|F| = eE$ is identical for both, since the force depends on charge, not mass. But $a = F/m$, and $m_p/m_e \\approx 1836$, so the electron's acceleration is about $1836$ times greater (in the opposite direction).`
          }
        ]
      }
    },
    {
      id: 'es4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Energy beats kinematics.** From rest, $KE = |q\\,\\Delta V|$ whatever the path or field shape: the fastest route to speed.
- **Superposition.** Fields add as vectors and can cancel; potentials add as signed numbers and can cancel too.
- **Decide what is constant.** Battery connected fixes $V$; disconnected fixes $Q$, and with it $E$.
- **Same field, different particles.** Equal charges feel equal forces; the lighter particle accelerates more.

**Common traps**

- **$E = 0$ means $V = 0$.** Midway between equal positive charges $E = 0$ but $V = 2kQ/r$, with $r$ half the separation.
- **Heavier means more force.** Force depends on charge, not mass: a proton and an electron both feel $|F| = eE$.
- **Fixed $V$ after disconnecting.** A disconnected capacitor keeps its $Q$, so pulling the plates apart raises $V = Ed$.
- **Equal energy, equal speed.** Equal kinetic energies do not mean equal speeds; the lighter particle moves faster.`
    }
  ]
};
