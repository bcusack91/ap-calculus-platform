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
| ⚡ Hydrogen's Energy Levels |
| Energy of a Photon Emitted in a Transition |
| 🔑 Excitation vs Ionization |

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

Experiments on hydrogen give the following allowed energies. On the AP exam, energy-level values like these are always **given** to you; you use them, you do not derive them.

| $n$ | $E_n$ (J) |
|-----|-----------|
| 1 | $-2.18 \\times 10^{-18}$ |
| 2 | $-5.45 \\times 10^{-19}$ |
| 3 | $-2.42 \\times 10^{-19}$ |
| 4 | $-1.36 \\times 10^{-19}$ |
| 5 | $-8.72 \\times 10^{-20}$ |
| 6 | $-6.06 \\times 10^{-20}$ |
| ∞ | 0 (ionized) |

(Note the negative signs — a bound electron has lower energy than a free electron, which has $E = 0$.)

> ⚠️ **Watch the signs:** Higher $n$ ⇒ less-negative (more positive) energy. The electron is *more loosely bound* in higher levels. Notice also that the gaps between levels shrink as $n$ increases.

---

### Energy of a Photon Emitted in a Transition

When an electron drops from a higher level to a lower level, the photon carries away exactly the energy difference:

$$\\boxed{E_{\\text{photon}} = E_{\\text{upper}} - E_{\\text{lower}}}$$

**Example:** $n = 3 \\to n = 2$: $E_{\\text{photon}} = (-2.42 \\times 10^{-19}) - (-5.45 \\times 10^{-19}) = 3.03 \\times 10^{-19}$ J, which corresponds to $\\lambda = hc/E = 656$ nm (red light).

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

This matches the measured **first ionization energy of hydrogen**, about 1312 kJ/mol.
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
            explanation: 'The largest energy gap of these four is between $n=2$ and $n=1$: $(-5.45 \\times 10^{-19}) - (-2.18 \\times 10^{-18}) = 1.64 \\times 10^{-18}$ J, a 122 nm ultraviolet photon. The gaps between higher levels are much smaller.'
          },
          {
            question: 'A hydrogen atom in $n = 3$ relaxes to $n = 2$, emitting a photon of energy $3.03 \\times 10^{-19}$ J. What region of the EM spectrum is the emitted photon in?',
            options: ['Infrared', 'Ultraviolet', 'Visible', 'Microwave'],
            correctAnswer: 2,
            explanation: '$\\lambda = hc/E = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(3.03 \\times 10^{-19}) = 6.56 \\times 10^{-7}$ m = 656 nm, which is red visible light. UV photons are shorter than about 400 nm, and infrared and microwave photons are longer than about 700 nm.'
          },
          {
            question: 'Energy levels closer to ionization (large $n$) are:',
            options: [
              'spaced farther apart in energy',
              'closer together in energy',
              'spaced evenly, like rungs on a ladder',
              'only present in heavier atoms'
            ],
            correctAnswer: 1,
            explanation: 'In the table of hydrogen energies, the gap from $n = 1$ to $n = 2$ is $1.64 \\times 10^{-18}$ J, but the gap from $n = 5$ to $n = 6$ is only $2.66 \\times 10^{-20}$ J. The levels bunch up near the ionization limit.'
          }
        ]
      }
    },
    {
      id: 'as3-calculation',
      type: 'input-boxes' as const,
      content: `
**Energy-Level Calculations** 🧮

Use the hydrogen energy levels given in the table above.

**1)** Calculate the photon energy emitted when an H electron falls from $n=4$ to $n=2$. Express as $\\times 10^{-19}$ J — enter just the magnitude (3 sig figs).

**2)** What wavelength (nm) does that correspond to? (Nearest whole nm.)

**3)** What energy (in J) is needed to ionize an H atom from $n = 2$? Express as $\\times 10^{-19}$ J — enter just the magnitude (3 sig figs).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.09', '486', '5.45'],
        hint1: '$E_{\\text{photon}} = E_4 - E_2 = (-1.36 \\times 10^{-19}) - (-5.45 \\times 10^{-19})$.',
        hint2: '$\\lambda = hc/|\\Delta E|$.',
        hint3: 'Ionizing from $n=2$ means going to $E_\\infty = 0$: energy needed $= 0 - E_2$.',
        explanation: '1) $E_{\\text{photon}} = (-1.36 \\times 10^{-19}) - (-5.45 \\times 10^{-19}) = 4.09 \\times 10^{-19}$ J. 2) $\\lambda = (6.626 \\times 10^{-34})(3 \\times 10^8)/(4.09 \\times 10^{-19}) = 4.86 \\times 10^{-7}$ m = 486 nm (blue-green visible light). 3) $0 - (-5.45 \\times 10^{-19}) = 5.45 \\times 10^{-19}$ J.'
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
          { label: 'In hydrogen, transitions ending at $n=1$ release the largest energies and produce', options: ['infrared photons', 'visible photons', 'ultraviolet photons', 'microwave photons'] }
        ],
        correctAnswers: ['1', '$0$', '$n=1$ to $n=3$', 'ultraviolet photons'],
        hint1: 'The lowest, most stable level is the ground state.',
        hint2: 'A free electron has zero binding energy.',
        hint3: 'Absorption raises the electron; emission lowers it.',
        explanation: 'Ground state = $n=1$. $E_\\infty = 0$ (free electron). Absorption: low → high (so $1 \\to 3$). Every drop to $n = 1$ releases at least $1.64 \\times 10^{-18}$ J, which corresponds to wavelengths of about 122 nm or shorter, in the ultraviolet.'
      }
    },
    {
      id: 'as3-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Bohr Model** ✅`,
      exercise: {
        questions: [
          {
            question: 'What does the existence of sharp lines in an atom\'s emission spectrum tell us?',
            options: [
              'Any electron energy is allowed inside an atom',
              'Electrons can occupy only certain energy levels',
              'The atom gives off light only when it is cold',
              'Every element emits the same set of wavelengths'
            ],
            correctAnswer: 1,
            explanation: 'Each line corresponds to one specific energy gap. If any energy were allowed, the atom would emit a continuous rainbow instead. Each element has its own set of levels, so each has its own line pattern.'
          },
          {
            question: 'A hydrogen atom in $n = 5$ emits a photon and ends up in $n = 2$. Using the table, what is the photon energy?',
            options: ['$4.58 \\times 10^{-19}$ J', '$6.32 \\times 10^{-19}$ J', '$2.09 \\times 10^{-18}$ J', '$8.72 \\times 10^{-20}$ J'],
            correctAnswer: 0,
            explanation: '$E_{\\text{photon}} = E_5 - E_2 = (-8.72 \\times 10^{-20}) - (-5.45 \\times 10^{-19}) = 4.58 \\times 10^{-19}$ J (434 nm, violet light). Adding the magnitudes gives $6.32 \\times 10^{-19}$ J, using $n = 1$ instead of $n = 2$ gives $2.09 \\times 10^{-18}$ J, and $8.72 \\times 10^{-20}$ J is just $|E_5|$.'
          }
        ]
      }
    }
  ]
}
