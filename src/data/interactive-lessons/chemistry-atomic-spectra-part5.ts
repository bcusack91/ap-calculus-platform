export const chemAtomicSpectraPart5Data = {
  topicSlug: 'atomic-spectra',
  sections: [
    {
      id: 'as5-intro',
      type: 'text' as const,
      content: `# 🌌 Beyond Hydrogen — Multi-Electron Atoms & PES

**Part 5 of 7 — Why Real Spectra Are More Complex**

---

### Topics in This Part

| Section |
|---------|
| Multi-Electron Complications |
| 📌 Effective Nuclear Charge |
| Subshell Splitting |
| 🔑 Connection to PES |
| What the Bohr Model Misses |

> 🔑 **Big idea:** The Bohr model handles hydrogen perfectly but breaks down for atoms with more than one electron. The energies depend not only on $n$ but also on the subshell ($s, p, d, f$). **Photoelectron spectroscopy (PES)** measures these energies directly.`
    },
    {
      id: 'as5-multi-electron',
      type: 'text' as const,
      content: `
## ⚛️ Multi-Electron Atoms

For atoms with more than one electron, three new effects break Bohr's simple picture:

1. **Electron–electron repulsion** raises the energy of every level.
2. **Shielding** — inner electrons partially screen outer electrons from the full nuclear charge.
3. **Penetration** — $s$ orbitals dip closer to the nucleus than $p$ or $d$ orbitals at the same $n$, so $s$ feels a larger effective charge.

The result: within a given shell $n$, the subshells split:

$$E_{ns} < E_{np} < E_{nd} < E_{nf}$$

That is why the emission spectrum of, say, sodium has many more lines than hydrogen — and why those lines do **not** match the Rydberg formula exactly.
      `
    },
    {
      id: 'as5-zeff',
      type: 'text' as const,
      content: `
## 📌 Effective Nuclear Charge ($Z_{\\text{eff}}$)

Each electron experiences not the full nuclear charge $Z$, but a smaller **effective** charge:

$$\\boxed{Z_{\\text{eff}} = Z - S}$$

where $S$ is the **shielding constant** from inner electrons.

| Effect | Result on $Z_{\\text{eff}}$ |
|--------|---------------------------|
| Move **right** across a period (more protons, same shell) | $Z_{\\text{eff}}$ ↑ |
| Move **down** a group (more inner shells shield) | $Z_{\\text{eff}}$ on valence ≈ constant |
| **Penetrating** orbital ($s > p > d > f$) | $Z_{\\text{eff}}$ ↑ |

> 💡 Higher $Z_{\\text{eff}}$ ⇒ deeper (more negative) orbital energy ⇒ photon released when an electron falls into that orbital has higher energy.
      `
    },
    {
      id: 'as5-pes',
      type: 'text' as const,
      content: `
## 🔬 Connecting Spectra to PES

**Photoelectron spectroscopy (PES)** is the modern technique that *directly* measures the binding energy of every occupied orbital in an atom.

A high-energy UV or X-ray photon (energy $h\\nu$) ejects an electron with kinetic energy $KE$. Conservation of energy gives the **binding energy** (BE):

$$\\boxed{BE = h\\nu - KE}$$

Each orbital contributes a peak in the PES spectrum. The peak's position = orbital binding energy. The peak's height = number of electrons in that orbital.

| Atomic spectrum (emission) | PES spectrum |
|----------------------------|--------------|
| Photon **emitted** when electron drops between levels | Photon **absorbed**; electron ejected |
| Energy = level **gap** | Energy = level **binding energy** |
| Reveals allowed transitions | Reveals every occupied orbital directly |

Together, emission spectra and PES give a complete picture of the electronic structure of the atom.
      `
    },
    {
      id: 'as5-bohr-limits',
      type: 'text' as const,
      content: `
## ⚠️ What the Bohr Model Doesn't Explain

The Bohr model is a brilliant first step, but it cannot account for:

| Phenomenon | Why Bohr fails |
|------------|---------------|
| Spectra of multi-electron atoms | Ignores electron–electron interactions |
| Splitting of lines into close pairs (e.g., Na D-doublet) | No spin-orbit coupling |
| Different intensities of different lines | No probability/wavefunction concept |
| Bonding & molecular spectra | Treats electrons as planets, not waves |
| The Heisenberg uncertainty principle | Defines exact orbits |

The full **quantum-mechanical model** (Schrödinger, 1926) replaces orbits with **orbitals** (probability clouds), introduces four quantum numbers ($n, \\ell, m_\\ell, m_s$), and explains all of the above.
      `
    },
    {
      id: 'as5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `**Beyond Bohr — Quick Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why does sodium\'s emission spectrum show many more lines than hydrogen\'s?',
            options: [
              'Sodium has more isotopes',
              'Sodium has multiple electrons and split subshells, allowing many more transitions',
              'Sodium emits only visible light',
              'Sodium\'s nucleus is unstable'
            ],
            correctAnswer: 1,
            explanation: 'Multi-electron atoms have subshell splitting and many possible transitions, giving rich line spectra.'
          },
          {
            question: 'In a PES spectrum, the peak corresponding to a 1s electron in carbon is at much higher binding energy than the 2s peak. Why?',
            options: [
              'The 1s electron is farther from the nucleus',
              'The 1s electron experiences a much larger $Z_{\\text{eff}}$ (no shielding)',
              'The 1s electron has more orbital angular momentum',
              'The 1s shell has more electrons'
            ],
            correctAnswer: 1,
            explanation: '1s electrons are closest to the nucleus and experience nearly the full nuclear charge — the largest binding energy.'
          },
          {
            question: 'Which is a major limitation of the Bohr model?',
            options: [
              'It treats the electron as a wave',
              'It cannot predict hydrogen\'s spectrum',
              'It cannot accurately describe multi-electron atoms',
              'It violates conservation of energy'
            ],
            correctAnswer: 2,
            explanation: 'The Bohr model only works well for hydrogen and other one-electron systems ($He^{+}$, $Li^{2+}$, etc.).'
          }
        ]
      }
    },
    {
      id: 'as5-calculation',
      type: 'input-boxes' as const,
      content: `
**PES & Binding Energy** 🧮

**1)** A PES experiment uses photons of energy $1.00 \\times 10^{-15}$ J. An ejected electron has kinetic energy $7.50 \\times 10^{-16}$ J. What is the binding energy of that electron, in $\\times 10^{-16}$ J? (To 2 decimals.)

**2)** In hydrogen, the binding energy of the 1s electron is $2.18 \\times 10^{-18}$ J. What minimum photon wavelength (in nm, nearest whole) is needed to ionize hydrogen from the ground state?

**3)** For a one-electron ion, energies scale as $Z^2$. The ionization energy of $\\text{Li}^{2+}$ ($Z = 3$) is how many times larger than that of H ($Z = 1$)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.50', '91', '9'],
        hint1: '$BE = h\\nu - KE = 1.00 \\times 10^{-15} - 7.50 \\times 10^{-16}$.',
        hint2: '$\\lambda = hc/E$ where $E$ = ionization energy.',
        hint3: 'Energy scales with $Z^2$, so $3^2$.',
        explanation: '1) $BE = 10.0 \\times 10^{-16} - 7.50 \\times 10^{-16} = 2.50 \\times 10^{-16}$ J. 2) $\\lambda = (6.626 \\times 10^{-34})(3 \\times 10^8)/(2.18 \\times 10^{-18}) = 9.12 \\times 10^{-8}$ m ≈ 91 nm (extreme UV). 3) IE scales as $Z^2$, so $\\text{Li}^{2+}$ requires $9 \\times$ the energy of H.'
      }
    },
    {
      id: 'as5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Multi-Electron Concepts** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Within a given shell, the subshell with the LOWEST energy is', options: ['$f$', '$d$', '$p$', '$s$'] },
          { label: 'Effective nuclear charge $Z_{\\text{eff}}$ on a valence electron generally ______ across a period', options: ['decreases', 'stays constant', 'increases', 'changes randomly'] },
          { label: 'The number of peaks in a PES spectrum equals the number of', options: ['electrons', 'occupied subshells', 'protons', 'shells'] },
          { label: 'PES peak height is proportional to the number of', options: ['protons', 'neutrons', 'electrons in that subshell', 'allowed transitions'] }
        ],
        correctAnswers: ['$s$', 'increases', 'occupied subshells', 'electrons in that subshell'],
        hint1: '$s$ orbitals penetrate closest to the nucleus.',
        hint2: 'More protons + same shielding = stronger pull.',
        hint3: 'PES distinguishes subshells, not individual electrons.',
        explanation: 's-orbitals are the lowest-energy subshell within a given $n$. $Z_{\\text{eff}}$ rises across a period because protons increase but inner shielding stays the same. Each occupied subshell gives one PES peak whose height ∝ number of electrons it contains.'
      }
    },
    {
      id: 'as5-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Beyond Bohr** ✅`,
      exercise: {
        questions: [
          {
            question: 'In a PES spectrum of nitrogen (Z = 7), how many distinct peaks would you expect?',
            options: ['1 (one for the atom)', '3 (1s, 2s, 2p)', '7 (one per electron)', '4 (1s, 2s, 2p, 3s)'],
            correctAnswer: 1,
            explanation: 'N has electron configuration $1s^{2}$ $2s^{2}$ $2p^{3}$ — three occupied subshells, three PES peaks. Heights: 2 : 2 : 3.'
          },
          {
            question: 'Why doesn\'t the Rydberg formula predict the wavelengths of sodium\'s emission lines?',
            options: [
              'Sodium has the wrong charge',
              'The Rydberg formula assumes a one-electron system; sodium has 11 electrons with shielding and subshell splitting',
              'Sodium emits only continuous radiation',
              'Sodium does not absorb light'
            ],
            correctAnswer: 1,
            explanation: 'The Rydberg formula is exact only for one-electron systems. Real multi-electron atoms have shielding, penetration, and subshell splitting that change the energies.'
          }
        ]
      }
    }
  ]
}
