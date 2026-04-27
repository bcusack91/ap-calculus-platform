export const chemAtomicSpectraPart3Data = {
  topicSlug: 'atomic-spectra',
  sections: [
    {
      id: 'as3-intro',
      type: 'text' as const,
      content: `# 🪐 The Bohr Model & Quantized Energy Levels

**Part 3 of 7 — Why Spectra Have Lines**

---

### Topics in This Part

| Section |
|---------|
| Bohr's Big Idea |
| 📌 Energy Levels of Hydrogen |
| 🔑 Allowed Transitions |
| Excitation vs Ionization |
| Limitations of the Bohr Model |

> 🔑 **Big picture:** In 1913, Niels Bohr proposed that electrons orbit the nucleus in only certain *allowed* energy levels — quantized states. This explains why hydrogen's emission spectrum has a few sharp lines instead of a continuous rainbow.`
    },
    {
      id: 'as3-bohr-model',
      type: 'text' as const,
      content: `
## 🪐 Bohr's Big Idea

The Bohr model has three key postulates:

1. Electrons can only occupy specific orbits (energy levels), labeled $n = 1, 2, 3, \\ldots$
2. While in an allowed orbit, the electron does **not** radiate.
3. Energy is emitted or absorbed only when an electron **jumps** from one orbit to another, in discrete amounts:

$$\\boxed{\\Delta E = E_{\\text{higher}} - E_{\\text{lower}} = h\\nu}$$

> 💡 **Why "$n = 1$" matters:** $n = 1$ is the **ground state** — the lowest, most stable level. All higher levels ($n = 2, 3, \\ldots$) are **excited states**.
      `
    },
    {
      id: 'as3-energy-levels',
      type: 'text' as const,
      content: `
## ⚡ Hydrogen's Energy Levels

For a hydrogen atom (one electron, one proton), the allowed energies are:

$$\\boxed{E_n = -\\frac{2.18 \\times 10^{-18} \\; \\text{J}}{n^2}}$$

(Note the negative sign — bound states have lower energy than a free electron, which has $E = 0$.)

| $n$ | $E_n$ (J) | $E_n$ (eV) |
|-----|-----------|-----------|
| 1 | $-2.18 \\times 10^{-18}$ | −13.6 |
| 2 | $-5.45 \\times 10^{-19}$ | −3.40 |
| 3 | $-2.42 \\times 10^{-19}$ | −1.51 |
| 4 | $-1.36 \\times 10^{-19}$ | −0.85 |
| ∞ | 0 | 0 (ionized) |

> ⚠️ **Watch the signs:** Higher $n$ ⇒ less-negative (more positive) energy. The electron is *more loosely bound* in higher levels.

---

### Energy of a Photon Emitted in a Transition

When an electron drops from $n_i$ → $n_f$ (with $n_f < n_i$), the energy released is:

$$\\Delta E = E_{n_f} - E_{n_i} = -2.18 \\times 10^{-18} \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right) \\; \\text{J}$$

The magnitude $|\\Delta E|$ equals the **energy of the photon emitted**.
      `
    },
    {
      id: 'as3-transitions',
      type: 'text' as const,
      content: `
## 🔑 Excitation vs Ionization

| Process | What happens | Energy |
|---------|--------------|--------|
| **Excitation** | Electron absorbs a photon and jumps to a higher allowed level | Specific values only |
| **De-excitation** | Electron drops to a lower level, emitting a photon | Specific values only |
| **Ionization** | Electron absorbs enough energy to escape ($n \\to \\infty$) | $\\geq |E_n|$ |

---

### Worked Example — Ground-State Ionization Energy of H

> **Problem:** What is the minimum energy needed to ionize a hydrogen atom from its ground state?

**Solution.** From $n = 1$ to $n = \\infty$:

$$\\Delta E = E_\\infty - E_1 = 0 - (-2.18 \\times 10^{-18}) = 2.18 \\times 10^{-18} \\; \\text{J}$$

Per mole: $\\;(2.18 \\times 10^{-18})(6.022 \\times 10^{23}) = 1.31 \\times 10^{6}$ J/mol = **1310 kJ/mol**.

This matches the experimentally measured **first ionization energy of hydrogen** — a striking success of the Bohr model.
      `
    },
    {
      id: 'as3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `**Energy Levels Quick Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the Bohr model, which transition emits the highest-energy photon?',
            options: ['n=2 → n=1', 'n=3 → n=2', 'n=4 → n=3', 'n=5 → n=4'],
            correctAnswer: 0,
            explanation: 'The largest energy gap in hydrogen is between $n=2$ and $n=1$ (the Lyman-α transition, 121.6 nm in the UV).'
          },
          {
            question: 'A hydrogen atom in $n = 3$ relaxes to $n = 2$. What region of the EM spectrum is the emitted photon in?',
            options: ['Radio', 'Infrared', 'Visible (red)', 'Ultraviolet'],
            correctAnswer: 2,
            explanation: 'This is the H-alpha line at 656 nm — the bright red line in hydrogen\'s visible spectrum.'
          },
          {
            question: 'Energy levels closer to ionization (large $n$) are:',
            options: [
              'farther apart in energy',
              'closer together in energy',
              'evenly spaced',
              'only present in heavier atoms'
            ],
            correctAnswer: 1,
            explanation: 'Because $E_n \\propto -1/n^2$, the gap shrinks as $n$ grows; levels bunch up near the ionization limit.'
          }
        ]
      }
    },
    {
      id: 'as3-calculation',
      type: 'input-boxes' as const,
      content: `
**Bohr Model Calculations** 🧮

Use $E_n = -2.18 \\times 10^{-18}/n^2 \\; \\text{J}$.

**1)** Calculate the photon energy emitted when an H electron falls from $n=4$ to $n=2$. Express as $\\times 10^{-19}$ J — enter just the magnitude (3 sig figs).

**2)** What wavelength (nm) does that correspond to? (Nearest whole nm.)

**3)** What energy (in J) is needed to ionize an H atom from $n = 2$? Express as $\\times 10^{-19}$ J — enter just the magnitude (3 sig figs).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.09', '486', '5.45'],
        hint1: '$\\Delta E = -2.18 \\times 10^{-18}(1/4 - 1/16) = -2.18 \\times 10^{-18}(0.1875)$.',
        hint2: '$\\lambda = hc/|\\Delta E|$.',
        hint3: 'From $n=2$, the binding energy is $|E_2| = 2.18 \\times 10^{-18}/4$.',
        explanation: '1) $\\Delta E = -2.18 \\times 10^{-18}(1/4 - 1/16) = -4.0875 \\times 10^{-19}$ J. Magnitude ≈ $4.09 \\times 10^{-19}$ J. 2) $\\lambda = (6.626 \\times 10^{-34})(3 \\times 10^8)/(4.09 \\times 10^{-19}) = 4.86 \\times 10^{-7}$ m = 486 nm (the blue-green H-β line!). 3) $|E_2| = 2.18 \\times 10^{-18}/4 = 5.45 \\times 10^{-19}$ J.'
      }
    },
    {
      id: 'as3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Bohr Model Concepts** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'A hydrogen atom in its ground state has $n =$', options: ['0', '1', '∞', '−13.6'] },
          { label: 'The energy of an electron at $n = \\infty$ is', options: ['$-2.18 \\times 10^{-18}$ J', '$+2.18 \\times 10^{-18}$ J', '$0$', '$-13.6$ J'] },
          { label: 'A photon is **absorbed** when an electron moves from', options: ['$n=1$ to $n=3$', '$n=3$ to $n=1$', '$n=4$ to $n=2$', '$n=2$ to $n=1$'] },
          { label: 'In hydrogen, transitions ending at $n=1$ produce', options: ['IR photons', 'visible photons', 'UV photons (Lyman series)', 'microwaves'] }
        ],
        correctAnswers: ['1', '$0$', '$n=1$ to $n=3$', 'UV photons (Lyman series)'],
        hint1: 'The lowest, most stable level is the ground state.',
        hint2: 'A free electron has zero binding energy.',
        hint3: 'Absorption raises the electron; emission lowers it.',
        explanation: 'Ground state = $n=1$. $E_\\infty = 0$ (free electron). Absorption: low → high (so $1 \\to 3$). Lyman series ends at $n=1$ and lies in the UV; Balmer (ending at $n=2$) is visible; Paschen (ending at $n=3$) is IR.'
      }
    },
    {
      id: 'as3-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Bohr Model** ✅`,
      exercise: {
        questions: [
          {
            question: 'Which is the most important success of the Bohr model?',
            options: [
              'It correctly predicts the spectra of all elements',
              'It correctly predicts the wavelengths of hydrogen\'s line spectrum',
              'It explains chemical bonding',
              'It accounts for the orbital shapes (s, p, d, f)'
            ],
            correctAnswer: 1,
            explanation: 'The Bohr model accurately predicts hydrogen\'s spectral lines but fails for multi-electron atoms — those required the quantum mechanical model.'
          },
          {
            question: 'If a hydrogen atom in $n = 5$ emits a photon and ends up in $n = 2$, the emitted wavelength is in which series?',
            options: ['Lyman (UV)', 'Balmer (visible)', 'Paschen (IR)', 'Brackett (far IR)'],
            correctAnswer: 1,
            explanation: 'Transitions ending at $n = 2$ form the Balmer series — visible light.'
          }
        ]
      }
    }
  ]
}
