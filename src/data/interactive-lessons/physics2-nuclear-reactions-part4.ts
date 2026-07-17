export const physics2NuclearPart4Data = {
  topicSlug: 'nuclear-reactions',
  sections: [
    {
      id: 'nuclearreactions-p4-intro',
      type: 'text' as const,
      content: `# ⚡ Mass-Energy Equivalence

**Part 4 of 7 — $E = mc^2$**

---

### Einstein's Mass-Energy Equivalence

$$\\boxed{E = mc^2}$$

Mass and energy are two forms of the same thing. A small amount of mass corresponds to an enormous amount of energy because $c^2 = (3 \\times 10^8)^2 = 9 \\times 10^{16}$ $m^{2}/s^{2}$.

### Useful Conversions

| Quantity | Value |
|----------|-------|
| $1$ u (atomic mass unit) | $1.6605 \\times 10^{-27}$ kg |
| $1$ u | $931.5$ MeV/$c^2$ |
| $1$ MeV | $1.602 \\times 10^{-13}$ J |
| $m_p$ | $1.00728$ u = $938.3$ MeV/$c^2$ |
| $m_n$ | $1.00866$ u = $939.6$ MeV/$c^2$ |
| $m_e$ | $0.000549$ u = $0.511$ MeV/$c^2$ |

### Mass Defect

The mass of a nucleus is **LESS** than the sum of its individual nucleons:

$$\\boxed{\\Delta m = \\left(Zm_p + Nm_n\\right) - m_{\\text{nucleus}}}$$

This "missing mass" has been converted to **binding energy** — the energy that holds the nucleus together.

### Q-Value of a Reaction

$$Q = (m_{\\text{reactants}} - m_{\\text{products}}) \\times c^2$$

| $Q$ value | Meaning | Energy |
|-----------|---------|--------|
| $Q > 0$ | Exothermic (releases energy) | Products have less mass |
| $Q < 0$ | Endothermic (absorbs energy) | Products have more mass |
      `
    },
    {
      id: 'nuclearreactions-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example: Mass Defect of Helium-4

**Given masses:** $m_p = 1.00728$ u, $m_n = 1.00866$ u, $m_{\\text{He-4}} = 4.00260$ u

**Step 1: Sum of individual nucleons**
$$M_{\\text{parts}} = 2(1.00728) + 2(1.00866) = 2.01456 + 2.01732 = 4.03188 \\text{ u}$$

**Step 2: Mass defect**
$$\\Delta m = 4.03188 - 4.00260 = 0.02928 \\text{ u}$$

**Step 3: Binding energy**
$$BE = 0.02928 \\times 931.5 = 27.28 \\text{ MeV}$$

**Step 4: Binding energy per nucleon**
$$BE/A = 27.28/4 = 6.82 \\text{ MeV/nucleon}$$

This is why helium-4 is so stable — you'd need 27.28 MeV to break it apart into individual protons and neutrons.

---

### Perspective: How Much Energy is in Mass?

If you could convert 1 kg of matter entirely to energy:
$$E = mc^2 = 1 \\times (3 \\times 10^8)^2 = 9 \\times 10^{16} \\text{ J}$$

That's equivalent to about 21 megatons of TNT — roughly 1,000 Hiroshima bombs from just 1 kg! In practice, nuclear reactions convert only a tiny fraction (~0.1%) of mass to energy, but that's still millions of times more than chemical reactions.
      `
    },
    {
      id: 'nuclearreactions-p4-check1',
      type: 'multiple-choice' as const,
      content: `
**Mass-Energy Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A nucleus has a mass defect of 0.1 u. Its binding energy is:',
            options: ['0.1 MeV', '9.315 MeV', '93.15 MeV', '931.5 MeV'],
            correctAnswer: 2,
            explanation: '$BE = \\Delta m \\times 931.5$ MeV/u = $0.1 \\times 931.5 = 93.15$ MeV. Each atomic mass unit of "missing mass" corresponds to 931.5 MeV of binding energy.'
          },
          {
            question: 'The mass of a carbon-12 nucleus is exactly 12 u. True or false?',
            options: [
              'True — that\'s the definition of the atomic mass unit',
              'False — the nuclear mass is LESS than 12 u due to mass defect',
              'False — the nuclear mass is MORE than 12 u',
              'True — but only for carbon-12'
            ],
            correctAnswer: 1,
            explanation: 'The ATOMIC mass of C-12 is exactly 12 u (by definition). But the NUCLEAR mass is less because binding energy has been "released" as mass defect. The atomic mass includes electron masses. The nuclear mass = atomic mass - $Z \\times m_e$.'
          },
          {
            question: 'A reaction has $Q = -5$ MeV. This means:',
            options: [
              'Products are lighter than reactants',
              'Energy is released',
              'At least 5 MeV of kinetic energy input is needed to make the reaction occur',
              'The reaction is impossible'
            ],
            correctAnswer: 2,
            explanation: '$Q < 0$ means the reaction is endothermic — products have more mass than reactants. You need to supply at least $|Q| = 5$ MeV of kinetic energy. (Actually, slightly more due to conservation of momentum — the "threshold energy" is slightly above $|Q|$.)'
          },
          {
            question: 'When you weigh a helium-4 atom, it is lighter than 2 hydrogen atoms + 2 neutrons. Where did the mass go?',
            options: [
              'It was destroyed — mass isn\'t always conserved',
              'It was converted to binding energy via $E = mc^2$',
              'It escaped as neutrinos',
              'It\'s still there but hidden inside the nucleus'
            ],
            correctAnswer: 1,
            explanation: 'The "missing mass" (mass defect) was converted to binding energy when the nucleus formed. This energy was radiated away as kinetic energy of the products and gamma rays. Mass-energy IS conserved; mass alone is not.'
          }
        ]
      }
    },
    {
      id: 'nuclearreactions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Mass-Energy Calculations** 🧮

A nuclear reaction has a mass defect of 0.025 u.

**1)** Energy released in MeV? (to 2 decimal places)

**2)** Energy in joules? ($1\\text{ MeV} = 1.6 \\times 10^{-13}$ J, answer like "3.73e-12")

**3)** Mass defect in kg? ($1\\text{ u} = 1.66 \\times 10^{-27}$ kg, answer like "4.15e-29")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['23.29', '3.73e-12', '4.15e-29'],
        hint1: '$E = \\Delta m \\times 931.5$ MeV/u',
        hint2: 'Convert MeV to J',
        hint3: 'Convert u to kg',
        explanation: '1) $E = 0.025 \\times 931.5 = 23.29$ MeV. 2) $E = 23.29 \\times 1.6 \\times 10^{-13} = 3.73 \\times 10^{-12}$ J. 3) $\\Delta m = 0.025 \\times 1.66 \\times 10^{-27} = 4.15 \\times 10^{-29}$ kg.'
      }
    }
  ]
};
