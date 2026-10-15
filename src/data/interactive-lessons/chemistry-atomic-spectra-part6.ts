export const chemAtomicSpectraPart6Data = {
  topicSlug: 'atomic-spectra',
  sections: [
    {
      id: 'as6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Putting It All Together**

---

### Workshop Goals

| Skill |
|-------|
| Convert between $\\lambda$, $\\nu$, and $E$ fluently |
| Find photon energies from given energy levels and identify transitions |
| Convert photon energies to energy per mole |
| Use $BE = h\\nu - KE$ for PES problems |

> 📋 **Hydrogen energy levels (J):** $E_1 = -2.18 \\times 10^{-18}$, $E_2 = -5.45 \\times 10^{-19}$, $E_3 = -2.42 \\times 10^{-19}$, $E_4 = -1.36 \\times 10^{-19}$, $E_5 = -8.72 \\times 10^{-20}$, $E_6 = -6.06 \\times 10^{-20}$

> 🛠️ **Reference equations:**  
> $c = \\lambda \\nu, \\quad E = h\\nu = hc/\\lambda$  
> $E_{\\text{photon}} = E_{\\text{upper}} - E_{\\text{lower}}$ (levels given)  
> $BE = h\\nu - KE$  
> Constants: $h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s, $N_A = 6.022 \\times 10^{23}$`
    },
    {
      id: 'as6-walkthrough1',
      type: 'text' as const,
      content: `
## 🧪 Worked Walkthrough 1 — Identifying a Transition

> **Problem:** A spectral line at 434 nm is observed in hydrogen\'s emission spectrum. Using the given energy levels, identify the transition.

**Step 1.** Find the photon energy:

$$E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^{8})}{4.34 \\times 10^{-7}} = 4.58 \\times 10^{-19} \; \\text{J}$$

**Step 2.** Look for the pair of levels whose difference matches. Visible photons in hydrogen come from drops to $n = 2$, so try $E_{\\text{upper}} = E_2 + 4.58 \\times 10^{-19}$:

$$E_{\\text{upper}} = (-5.45 \\times 10^{-19}) + (4.58 \\times 10^{-19}) = -8.7 \\times 10^{-20} \; \\text{J}$$

**Step 3.** That matches $E_5 = -8.72 \\times 10^{-20}$ J.

**Answer:** The transition is $n=5 \\to n=2$. ✅
      `
    },
    {
      id: 'as6-walkthrough2',
      type: 'text' as const,
      content: `
## 🧪 Worked Walkthrough 2 — Energy per Mole

> **Problem:** Light of wavelength 350 nm is absorbed by a mole of atoms, each absorbing one photon. How much energy (kJ) is absorbed in total?

**Step 1.** Energy per photon:

$$E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^{8})}{3.50 \\times 10^{-7}} = 5.68 \\times 10^{-19} \\; \\text{J}$$

**Step 2.** Multiply by Avogadro's number:

$$E_{\\text{mole}} = (5.68 \\times 10^{-19})(6.022 \\times 10^{23}) = 3.42 \\times 10^{5} \\; \\text{J/mol} = \\boxed{342 \\; \\text{kJ/mol}}$$

> 💡 This is comparable in magnitude to a typical chemical bond energy — UV light can break bonds!
      `
    },
    {
      id: 'as6-walkthrough3',
      type: 'text' as const,
      content: `
## 🧪 Worked Walkthrough 3 — A PES Peak

> **Problem:** A PES experiment uses 21.2 eV photons. The kinetic energy of ejected electrons from a hydrogen atom is 7.6 eV. Verify that the binding energy matches the ground-state ionization energy of H (13.6 eV).

**Step 1.** Apply $BE = h\\nu - KE$:

$$BE = 21.2 \\; \\text{eV} - 7.6 \\; \\text{eV} = 13.6 \\; \\text{eV} \\;\\;\\checkmark$$

This matches the binding energy of hydrogen\'s 1s electron, 13.6 eV (that is, $2.18 \\times 10^{-18}$ J).
      `
    },
    {
      id: 'as6-mc-set',
      type: 'multiple-choice' as const,
      content: `**Workshop Multiple Choice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A hydrogen atom emits a photon of energy $1.81 \\times 10^{-19}$ J as its electron drops to $n = 3$. Using the given levels, from which level did it start?',
            options: ['5', '6', '4', '7'],
            correctAnswer: 1,
            explanation: '$E_{\\text{upper}} = E_3 + 1.81 \\times 10^{-19} = (-2.42 \\times 10^{-19}) + (1.81 \\times 10^{-19}) = -6.1 \\times 10^{-20}$ J, which matches $E_6 = -6.06 \\times 10^{-20}$ J. Starting at $n = 5$ would give $1.55 \\times 10^{-19}$ J and $n = 4$ would give $1.06 \\times 10^{-19}$ J.'
          },
          {
            question: 'A photon has frequency $7.50 \\times 10^{14}$ Hz. What is its energy?',
            options: [
              '$4.97 \\times 10^{-20}$ J',
              '$8.83 \\times 10^{-49}$ J',
              '$4.97 \\times 10^{-19}$ J',
              '$2.65 \\times 10^{-40}$ J'
            ],
            correctAnswer: 2,
            explanation: '$E = h\\nu = (6.626 \\times 10^{-34})(7.50 \\times 10^{14}) = 49.7 \\times 10^{-20} = 4.97 \\times 10^{-19}$ J. Writing $4.97 \\times 10^{-20}$ forgets to adjust the exponent when moving the decimal, $8.83 \\times 10^{-49}$ divides $h$ by $\\nu$, and $2.65 \\times 10^{-40}$ uses $hc/\\nu$ as if $\\nu$ were a wavelength.'
          },
          {
            question: 'Light of 200 nm wavelength is shone on hydrogen atoms in their ground state. Will the atom absorb this photon?',
            options: [
              'Yes — any photon with enough energy is absorbed',
              'No — its energy matches no allowed jump from $n=1$',
              'Yes — it carries enough energy to ionize the atom',
              'Only if several photons strike at once'
            ],
            correctAnswer: 1,
            explanation: '$E_{200\;\\text{nm}} = 9.94 \\times 10^{-19}$ J. From the given levels, the smallest jump from $n=1$ (to $n=2$) needs $1.64 \\times 10^{-18}$ J. A 200 nm photon has too little energy for any allowed jump or for ionization, so it is not absorbed.'
          }
        ]
      }
    },
    {
      id: 'as6-input-set',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

**1)** A photon ionizes a ground-state hydrogen atom and leaves the ejected electron with KE = $5.45 \\times 10^{-19}$ J. What was the photon's energy in $\\times 10^{-18}$ J? (To 3 sig figs.)

**2)** What was the photon's wavelength in nm? (Nearest whole.)

**3)** A ground-state hydrogen atom absorbs a photon of energy $2.09 \\times 10^{-18}$ J. Using the given levels, which level does the electron reach?

**4)** How much energy, in kJ/mol, is needed to move one mole of hydrogen atoms from $n = 1$ to $n = 2$? (Nearest whole number.)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['2.72', '73', '5', '985'],
        hint1: '$E_{\\text{photon}} = BE + KE$ where $BE = 2.18 \\times 10^{-18}$ J.',
        hint2: '$\\lambda = hc/E$.',
        hint3: '$E_{\\text{final}} = E_1 + 2.09 \\times 10^{-18}$ J. Compare with the table.',
        hint4: '$E_2 - E_1$ per atom, times $6.022 \\times 10^{23}$, divided by 1000.',
        explanation: '1) $E_{\\text{ph}} = 2.18 \\times 10^{-18} + 5.45 \\times 10^{-19} = 2.725 \\times 10^{-18}$ J ≈ $2.72 \\times 10^{-18}$ J. 2) $\\lambda = (6.626 \\times 10^{-34})(3 \\times 10^8)/(2.725 \\times 10^{-18}) = 7.30 \\times 10^{-8}$ m = 73 nm. 3) $E_{\\text{final}} = (-2.18 \\times 10^{-18}) + (2.09 \\times 10^{-18}) = -9 \\times 10^{-20}$ J, which matches $E_5 = -8.72 \\times 10^{-20}$ J, so $n = 5$. 4) $E_2 - E_1 = 1.635 \\times 10^{-18}$ J per atom; $(1.635 \\times 10^{-18})(6.022 \\times 10^{23}) = 9.85 \\times 10^{5}$ J/mol ≈ 985 kJ/mol.'
      }
    },
    {
      id: 'as6-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Workshop Wrap-Up** ✅`,
      exercise: {
        questions: [
          {
            question: 'Using the given hydrogen levels, which transition emits a photon of about 103 nm?',
            options: ['n=3 → n=1', 'n=3 → n=2', 'n=4 → n=3', 'n=2 → n=1'],
            correctAnswer: 0,
            explanation: '$E = hc/\\lambda = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(1.03 \\times 10^{-7}) = 1.93 \\times 10^{-18}$ J. $E_3 - E_1 = (-2.42 \\times 10^{-19}) - (-2.18 \\times 10^{-18}) = 1.94 \\times 10^{-18}$ J, a match. The $n=2 \\to n=1$ gap ($1.64 \\times 10^{-18}$ J) gives 122 nm, and the other two gaps are far smaller.'
          },
          {
            question: 'Doubling a photon\'s wavelength halves its energy. If a 300-nm UV photon has energy $E_0$, what wavelength has energy $E_0/4$?',
            options: ['75 nm', '150 nm', '600 nm', '1200 nm'],
            correctAnswer: 3,
            explanation: 'Energy is inversely proportional to wavelength. $E_0/4$ requires $\\lambda = 4 \\times 300 = 1200$ nm.'
          }
        ]
      }
    }
  ]
}
