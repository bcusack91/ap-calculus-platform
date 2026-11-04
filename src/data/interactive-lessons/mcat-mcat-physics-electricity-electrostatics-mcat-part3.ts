import type { LessonData } from './registry'

export const electrostaticsMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  sections: [
    {
      id: 'es3-apps',
      type: 'text' as const,
      content: `# Electrostatics

**Part 3 of 4 — Membranes & Electrophoresis**

### The Membrane as a Parallel-Plate Capacitor

The lipid bilayer is an insulator about $5$–$10\\;\\text{nm}$ thick, with conducting salt solutions on both sides. At rest, the inside of a neuron sits about $-70\\;\\text{mV}$ relative to the outside.

- Excess negative charge lines the inner face; positive charge lines the outer face — just like capacitor plates.
- The field inside the membrane is essentially uniform: $E = V/d$.
- Because $d$ is tiny, this field is HUGE (as you'll compute below) even though the voltage is small.
- Capacitance itself, dielectrics and stored energy are taught in the *Circuits Part 3: EMF & Capacitance* lesson; here the membrane matters as a source of uniform field.

### Depolarization in Field Language

The action potential, read as charges in a field:

- **Depolarization.** When sodium channels open, $\\text{Na}^+$ flows inward — DOWN its electrical gradient (positive charge attracted to the negative interior) and down its concentration gradient. The membrane potential rises toward zero and beyond.
- **Repolarization.** Restoring $-70\\;\\text{mV}$ is driven mainly by $\\text{K}^+$ flowing OUT through voltage-gated channels, down its own gradient.
- **Recovery.** Over the longer run, the $\\text{Na}^+/\\text{K}^+$ pump spends ATP doing work against the gradients to restore the ion concentrations.

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

**Problem.** A neuron's membrane is $7.0\\;\\text{nm}$ thick with a resting potential of $70\\;\\text{mV}$ across it.

- **(a)** What are the voltage and the thickness in SI units?
- **(b)** What is the electric field inside the membrane?
- **(c)** Why does a field that size let voltage-gated channels respond so sharply?

**(a) Convert to SI.** $V = 70\\;\\text{mV} = 7.0 \\times 10^{-2}\\;\\text{V}$ and $d = 7.0\\;\\text{nm} = 7.0 \\times 10^{-9}\\;\\text{m}$.

**(b) Uniform-field formula.** With the SI values from (a): $E = \\frac{V}{d} = \\frac{7.0 \\times 10^{-2}}{7.0 \\times 10^{-9}} = 1.0 \\times 10^{7}\\;\\text{V/m}$

**(c) A giant field.** Ten million volts per metre is one of the strongest steady fields in biology, made from a mere $70\\;\\text{mV}$ because $d$ is so small. The charged gating segments of voltage-gated channels sit inside it, so a small change in $V$ changes the force on them a lot.

### Worked Example — Energy to Move One Ion

**Problem.** One $\\text{Ca}^{2+}$ ion (charge $+2e$) is moved across a membrane against a potential difference of $70\\;\\text{mV}$.

- **(a)** What is the ion's charge in coulombs?
- **(b)** How much energy does the crossing take?
- **(c)** How does that compare with the energy from hydrolyzing one ATP?

**(a) Charge.** $q = 2e = 2(1.6 \\times 10^{-19}) = 3.2 \\times 10^{-19}\\;\\text{C}$

**(b) Energy.** With $q$ from (a): $\\Delta U = q\\,\\Delta V = (3.2 \\times 10^{-19})(7.0 \\times 10^{-2}) = 2.24 \\times 10^{-20} \\approx 2.2 \\times 10^{-20}\\;\\text{J}$

**(c) Compare with ATP.** One ATP releases roughly $5 \\times 10^{-20}\\;\\text{J}$ under standard conditions, and closer to $9 \\times 10^{-20}\\;\\text{J}$ in a cell. That is the same order of magnitude as the $2.2 \\times 10^{-20}\\;\\text{J}$ from (b), which is why one ATP can power the transport of only a few ions.`
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
            yield: 'HIGH',
            explanation: `Field lines run from the positive (outer) face to the negative (inner) face — from outside to inside. A $\\text{Na}^+$ ion in a channel is therefore pushed inward by the field. The field runs ACROSS the membrane, between the two charged faces, not parallel to them, and it is zero only when there is no potential difference across the membrane.`
          },
          {
            question: `A membrane $10\\;\\text{nm}$ thick supports a potential difference of $100\\;\\text{mV}$. The field inside is:`,
            options: [`$1 \\times 10^{4}\\;\\text{V/m}$`, `$1 \\times 10^{-9}\\;\\text{V/m}$`, `$1 \\times 10^{10}\\;\\text{V/m}$`, `$1 \\times 10^{7}\\;\\text{V/m}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$E = V/d = (0.1\\;\\text{V})/(10^{-8}\\;\\text{m}) = 1 \\times 10^{7}\\;\\text{V/m}$. Both unit conversions (mV to V, nm to m) must be done. Skipping the mV-to-V step gives $1 \\times 10^{10}\\;\\text{V/m}$, reading nm as μm gives $1 \\times 10^{4}\\;\\text{V/m}$, and multiplying $V$ by $d$ instead of dividing gives $1 \\times 10^{-9}$.`
          },
          {
            question: `In gel electrophoresis, DNA fragments migrate toward the:`,
            options: [`Positive electrode, because DNA is negatively charged`, `Negative electrode, because DNA is negatively charged`, `Positive electrode, because DNA is positively charged`, `Negative electrode, because DNA is positively charged`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The phosphate backbone gives DNA a uniform negative charge, and negative charges are attracted toward the positive electrode (anode). The gel's drag then sorts fragments by size. DNA is never positively charged at running pH, and a negative molecule is repelled by the negative electrode.`
          },
          {
            question: `The energy required to move a monovalent cation (charge $+e$) across a $70\\;\\text{mV}$ potential difference is closest to:`,
            options: [`$2.2 \\times 10^{-20}\\;\\text{J}$`, `$1.6 \\times 10^{-19}\\;\\text{J}$`, `$1.1 \\times 10^{-20}\\;\\text{J}$`, `$7.0 \\times 10^{-2}\\;\\text{J}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\Delta U = q\\,\\Delta V = (1.6 \\times 10^{-19})(0.070) \\approx 1.1 \\times 10^{-20}\\;\\text{J}$. The $2.2 \\times 10^{-20}$ choice is the answer for a DIVALENT ion; $1.6 \\times 10^{-19}\\;\\text{J}$ is the energy for a full volt, and $7.0 \\times 10^{-2}\\;\\text{J}$ forgets the charge.`
          },
          {
            question: `As depolarization carries the membrane potential from $-70\\;\\text{mV}$ toward $0$, the magnitude of the electric field inside the membrane:`,
            options: [`Increases, because the moving ions add to the field`, `Decreases, because $|V|$ shrinks while $d$ stays fixed`, `Stays constant, because the thickness is constant`, `Becomes infinite as $V$ passes through zero`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$E = V/d$ with fixed $d$: as the membrane potential moves from $-70\\;\\text{mV}$ toward $0$, $|V|$ shrinks and so does $E$. A constant thickness keeps $d$ fixed, not $E$. At exactly $0\\;\\text{mV}$ the field is momentarily zero, not infinite.`
          }
        ]
      }
    },
    {
      id: 'es3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Membrane as plates.** An insulating bilayer between conducting fluids holds $\\pm$ charge on its faces, with $E = V/d$ inside.
- **Tiny voltage, giant field.** $70\\;\\text{mV}$ across $7\\;\\text{nm}$ gives $E = 1 \\times 10^{7}\\;\\text{V/m}$.
- **Energy per ion.** $\\Delta U = q\\,\\Delta V \\approx 10^{-20}\\;\\text{J}$ per ion crossing, the same scale as one ATP.
- **Electrophoresis.** A uniform field gives $F = qE$; negative DNA runs to the anode and the gel sorts by size.

**Common traps**

- **Field pointing outward.** At rest the outer face is positive, so the membrane field points from outside to inside.
- **Forgetting divalent charge.** A $\\text{Ca}^{2+}$ ion carries $2e$, so crossing takes twice the energy of a $\\text{Na}^+$ ion.
- **DNA to the cathode.** Negative DNA is drawn to the positive electrode, the anode, not the negative one.
- **Field rising on depolarization.** As $|V|$ shrinks toward $0$ at fixed $d$, the membrane field shrinks too.`
    }
  ]
};
