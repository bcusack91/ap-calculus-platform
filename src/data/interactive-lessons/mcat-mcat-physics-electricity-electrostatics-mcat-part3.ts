import type { LessonData } from './registry'

export const electrostaticsMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  sections: [
    {
      id: 'es3-apps',
      type: 'text' as const,
      content: `# Electrostatics

**Part 3 of 4 — Membranes & Electrophoresis**

Electrostatics is the MCAT's favorite bridge between physics and biology. Two applications dominate: the cell membrane as a charged parallel-plate system, and gel electrophoresis.

### The Membrane as a Parallel-Plate Capacitor

The lipid bilayer is an insulator about $5$–$10\\;\\text{nm}$ thick, with conducting salt solutions on both sides. At rest, the inside of a neuron sits about $-70\\;\\text{mV}$ relative to the outside.

- Excess negative charge lines the inner face; positive charge lines the outer face — just like capacitor plates.
- The field inside the membrane is essentially uniform: $E = V/d$.
- Because $d$ is tiny, this field is HUGE (as you'll compute below) even though the voltage is small.

### Depolarization in Field Language

When sodium channels open, $\\text{Na}^+$ flows inward — DOWN its electrical gradient (positive charge attracted to the negative interior) and down its concentration gradient. The membrane potential rises toward zero and beyond: **depolarization**. Restoring $-70\\;\\text{mV}$ (repolarization) requires the $\\text{Na}^+/\\text{K}^+$ pump to do work against the field.

### Gel Electrophoresis

A uniform field $E$ is applied across a gel. A molecule with charge $q$ feels a constant force $F = qE$.

- DNA's phosphate backbone makes it uniformly NEGATIVE, so DNA migrates toward the POSITIVE electrode (the anode).
- Because drag in the gel grows with size, smaller fragments travel farther in the same time — the field supplies the same force per charge, the gel does the size-sorting.
- In SDS-PAGE, the SDS coating gives proteins a roughly uniform negative charge-to-mass ratio, so separation is again by size.`
    },
    {
      id: 'es3-worked',
      type: 'text' as const,
      content: `### Worked Example — Field Inside a Membrane

A neuron's membrane is $7.0\\;\\text{nm}$ thick with a resting potential of $70\\;\\text{mV}$ across it. Estimate the electric field inside the membrane.

**Step 1 — Convert to SI.** $V = 70\\;\\text{mV} = 7.0 \\times 10^{-2}\\;\\text{V}$ and $d = 7.0 \\times 10^{-9}\\;\\text{m}$.

**Step 2 — Uniform-field formula.**

$E = \\frac{V}{d} = \\frac{7.0 \\times 10^{-2}}{7.0 \\times 10^{-9}} = 1.0 \\times 10^{7}\\;\\text{V/m}$

Ten million volts per meter — one of the strongest steady fields anywhere in biology, sustained by a $9\\;\\text{V}$-battery-free cell. This is why voltage-gated channels can respond so sharply: their charged gating segments sit inside an enormous field.

### Worked Example — Energy to Move One Ion

How much energy does it take to move one $\\text{Ca}^{2+}$ ion (charge $+2e$) across a membrane against a potential difference of $70\\;\\text{mV}$?

**Step 1 —** $q = 2e = 2(1.6 \\times 10^{-19}) = 3.2 \\times 10^{-19}\\;\\text{C}$

**Step 2 —**

$\\Delta U = q\\,\\Delta V = (3.2 \\times 10^{-19})(7.0 \\times 10^{-2}) = 2.24 \\times 10^{-20} \\approx 2.2 \\times 10^{-20}\\;\\text{J}$

Compare: hydrolyzing one ATP releases roughly $5 \\times 10^{-20}\\;\\text{J}$ under cellular conditions — the same order of magnitude, which is why one ATP can power the transport of a few ions.`
    },
    {
      id: 'es3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Membranes & Electrophoresis** 🎯`,
      exercise: {
        questions: [
          {
            question: `At rest (inside negative), the electric field within a neuron's membrane points:`,
            options: [`From inside to outside`, `From outside to inside`, `Parallel to the membrane surface`, `It is zero`],
            correctAnswer: 1,
            explanation: `Field lines run from the positive (outer) face to the negative (inner) face — from outside to inside. A $\\text{Na}^+$ ion in a channel is therefore pushed inward by the field.`
          },
          {
            question: `A membrane $10\\;\\text{nm}$ thick supports a potential difference of $100\\;\\text{mV}$. The field inside is:`,
            options: [`$1 \\times 10^{4}\\;\\text{V/m}$`, `$1 \\times 10^{-9}\\;\\text{V/m}$`, `$1 \\times 10^{10}\\;\\text{V/m}$`, `$1 \\times 10^{7}\\;\\text{V/m}$`],
            correctAnswer: 3,
            explanation: `$E = V/d = (0.1\\;\\text{V})/(10^{-8}\\;\\text{m}) = 1 \\times 10^{7}\\;\\text{V/m}$. Both unit conversions (mV to V, nm to m) must be done.`
          },
          {
            question: `In gel electrophoresis, DNA fragments migrate toward the:`,
            options: [`Positive electrode, because DNA is negatively charged`, `Negative electrode, because DNA is negatively charged`, `Positive electrode, because DNA is positively charged`, `Center of the gel, regardless of charge`],
            correctAnswer: 0,
            explanation: `The phosphate backbone gives DNA a uniform negative charge, and negative charges are attracted toward the positive electrode (anode). The gel's drag then sorts fragments by size.`
          },
          {
            question: `The energy required to move a monovalent cation (charge $+e$) across a $70\\;\\text{mV}$ potential difference is closest to:`,
            options: [`$2.2 \\times 10^{-20}\\;\\text{J}$`, `$1.6 \\times 10^{-19}\\;\\text{J}$`, `$1.1 \\times 10^{-20}\\;\\text{J}$`, `$7.0 \\times 10^{-2}\\;\\text{J}$`],
            correctAnswer: 2,
            explanation: `$\\Delta U = q\\,\\Delta V = (1.6 \\times 10^{-19})(0.070) \\approx 1.1 \\times 10^{-20}\\;\\text{J}$. The $2.2 \\times 10^{-20}$ choice is the answer for a DIVALENT ion.`
          },
          {
            question: `During depolarization, the magnitude of the electric field inside the membrane:`,
            options: [`Increases, because ions are moving`, `Decreases, because the voltage across the membrane decreases in magnitude`, `Stays constant, because thickness is constant`, `Becomes infinite as $V$ passes through zero`],
            correctAnswer: 1,
            explanation: `$E = V/d$ with fixed $d$: as the membrane potential moves from $-70\\;\\text{mV}$ toward $0$, $|V|$ shrinks and so does $E$. (At exactly $0\\;\\text{mV}$ the field is momentarily zero, not infinite.)`
          }
        ]
      }
    },
    {
      id: 'es3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Membrane = parallel-plate capacitor: insulating bilayer, conducting fluids, $E = V/d$
- $70\\;\\text{mV}$ over $7\\;\\text{nm}$ gives $E = 1 \\times 10^{7}\\;\\text{V/m}$ — tiny voltage, giant field
- Depolarization shrinks $|V|$ and hence $E$; pumps do work $q\\,\\Delta V$ per ion to restore it
- Energy per ion crossing: $\\Delta U = q\\,\\Delta V \\approx 10^{-20}\\;\\text{J}$, same scale as ATP
- Electrophoresis: uniform field, $F = qE$; DNA (negative) runs to the anode; the gel sorts by size`
    }
  ]
};
