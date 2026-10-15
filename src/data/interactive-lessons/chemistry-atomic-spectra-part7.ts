export const chemAtomicSpectraPart7Data = {
  topicSlug: 'atomic-spectra',
  sections: [
    {
      id: 'as7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — Tying Atomic Spectra to the AP Curriculum**

---

### What You'll Master

| Section |
|---------|
| Big-picture summary |
| Connections to other AP units |
| 📌 AP-style key skills |
| 🔑 Common pitfalls |
| Final mastery quiz |

> 🎯 **AP CED alignment:** This topic draws on **AP Chemistry Topics 1.5 (Atomic Structure & Electron Configuration), 1.6 (Photoelectron Spectroscopy), and 3.11 (Spectroscopy & the Electromagnetic Spectrum)**. Expect FRQs that ask you to:
> • Calculate photon energy or wavelength from a transition
> • Sketch or interpret an emission/PES spectrum
> • Justify the magnitude of $Z_{\\text{eff}}$ for a labeled peak
> • Compare line spectra of H to multi-electron atoms`
    },
    {
      id: 'as7-bigpicture',
      type: 'text' as const,
      content: `
## 🌟 Big-Picture Summary

| Concept | Key idea |
|---------|---------|
| Light is quantized | $E = h\\nu = hc/\\lambda$ |
| Atomic energy levels are quantized | Line spectra, not continuous ones |
| Emission line ↔ transition between given levels | $E_{\\text{photon}} = E_{\\text{upper}} - E_{\\text{lower}}$ |
| Spectral region ↔ type of transition | Microwave: rotation; IR: vibration; UV/vis: electronic |
| Multi-electron atoms have subshell splitting | Bohr fails; need quantum mechanics |
| PES measures binding energies directly | $BE = h\\nu - KE$ |

---

### Cross-Topic Connections

- **Electron configuration (Topic 1.5):** Order of subshell filling reflects the same energy ordering seen in PES peaks.
- **Periodic trends (Topic 1.7):** $Z_{\\text{eff}}$ explains both trends and PES binding-energy shifts.
- **Properties of photons (Topic 3.12):** $E = h\\nu$ and $c = \\lambda\\nu$ connect every line to a photon energy.
- **Spectroscopy regions (Topic 3.11):** Molecules absorb microwave, infrared, and UV/visible light for different reasons.
      `
    },
    {
      id: 'as7-pitfalls',
      type: 'text' as const,
      content: `
## ⚠️ Common Pitfalls to Avoid

1. **Sign errors in $\\Delta E$.** $E_n$ is *negative*. The energy of the **emitted photon** is the *positive* magnitude $|E_{n_f} - E_{n_i}|$.
2. **Forgetting unit conversions.** Always convert nm → m before plugging into $E = hc/\\lambda$.
3. **Mixing up "shorter wavelength" with "less energy."** Shorter $\\lambda$ ⇒ HIGHER energy.
4. **Mismatching region and transition.** Microwaves change rotation, infrared changes vibration, and only UV/visible light moves electrons between levels.
5. **Confusing emission and absorption.** They occur at the *same* wavelengths, but the direction of the transition is opposite.
6. **Reading PES wrong.** Higher binding energy = closer to nucleus = lower $n$ orbital.
      `
    },
    {
      id: 'as7-mc-set',
      type: 'multiple-choice' as const,
      content: `**AP-Style Multiple Choice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which observation provided the clearest experimental support for the **quantization** of electron energy levels in atoms?',
            options: [
              'The continuous spectrum glowing from a hot solid',
              'The discrete bright lines in hydrogen\'s emission spectrum',
              'The bending of white light into colors by a prism',
              'The emission of X-rays by a cathode-ray tube'
            ],
            correctAnswer: 1,
            explanation: 'A continuous spectrum would imply any energy is possible. The discrete *line* pattern of H proves that only specific energy gaps exist — quantization.'
          },
          {
            question: 'In a photoelectron spectrum of an unknown atom, the highest binding-energy peak is at 696 eV with relative height 2. The next peak is at 40 eV (height 2), then 17 eV (height 5). The atom is most likely:',
            options: ['Oxygen (Z=8)', 'Neon (Z=10)', 'Fluorine (Z=9)', 'Chlorine (Z=17)'],
            correctAnswer: 2,
            explanation: 'Heights 2 : 2 : 5 give 9 electrons in three subshells: $1s^{2}$ $2s^{2}$ $2p^{5}$, which is fluorine (Z = 9). The very large 1s binding energy marks the core peak. Neon would show $2p^{6}$ (height 6) and oxygen $2p^{4}$ (height 4); chlorine ends in $3s^{2}$ $3p^{5}$ but would show five peaks, including $2p^{6}$.'
          },
          {
            question: 'A model that works perfectly for hydrogen\'s line spectrum FAILS to predict the spectrum of helium. The most fundamental reason is:',
            options: [
              'Helium\'s nucleus has two protons instead of one',
              'Helium\'s two electrons repel and shield each other',
              'Helium atoms are too heavy to emit visible light',
              'Helium is a noble gas, so it emits no light'
            ],
            correctAnswer: 1,
            explanation: 'A one-electron model handles a larger nuclear charge fine (it works for the one-electron ion $He^{+}$). Once a second electron is present, electron–electron repulsion and shielding change every energy level. Helium does emit visible light; its lines are simply different from hydrogen\'s.'
          }
        ]
      }
    },
    {
      id: 'as7-input-set',
      type: 'input-boxes' as const,
      content: `
**Final Mastery Drill** 🧮

Hydrogen levels (J): $E_1 = -2.18 \\times 10^{-18}$, $E_2 = -5.45 \\times 10^{-19}$, $E_3 = -2.42 \\times 10^{-19}$, $E_4 = -1.36 \\times 10^{-19}$.

**1)** What energy (in J, $\\times 10^{-19}$, 3 sig figs) does it take to ionize an H atom that is in $n = 3$?

**2)** A photon of energy $2.04 \\times 10^{-18}$ J is absorbed by a ground-state H atom. What level does the electron end up in?

**3)** A PES experiment uses photons with $h\\nu = 200$ eV. An ejected electron has KE = 50 eV. Express the binding energy in eV.

**4)** Convert 91 nm into the corresponding photon energy in $\\times 10^{-18}$ J. (3 sig figs.)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['2.42', '4', '150', '2.18'],
        hint1: 'Ionizing means going from $E_3$ to $E_\\infty = 0$.',
        hint2: '$E_{\\text{final}} = E_1 + 2.04 \\times 10^{-18}$ J. Which level matches?',
        hint3: '$BE = h\\nu - KE = 200 - 50$.',
        hint4: '$E = hc/\\lambda$.',
        explanation: '1) $0 - E_3 = 2.42 \\times 10^{-19}$ J. 2) $E_{\\text{final}} = (-2.18 \\times 10^{-18}) + (2.04 \\times 10^{-18}) = -1.4 \\times 10^{-19}$ J, which matches $E_4$, so the electron reaches $n = 4$. 3) $BE = 200 - 50 = 150$ eV. 4) $E = (6.626\\times 10^{-34})(3\\times 10^8)/(9.1\\times 10^{-8}) = 2.18 \\times 10^{-18}$ J — the ground-state ionization energy of hydrogen!'
      }
    },
    {
      id: 'as7-dropdown',
      type: 'dropdown-select' as const,
      content: `**AP-Style Conceptual Connections** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Within the same shell, the orbital with the highest $Z_{\\text{eff}}$ is', options: ['$f$', '$d$', '$p$', '$s$'] },
          { label: 'A molecule that absorbs microwave radiation is undergoing a change in its', options: ['electronic energy', 'vibrational energy', 'rotational energy', 'nuclear energy'] },
          { label: 'Doubling the photon frequency ______ the photon energy', options: ['halves', 'doubles', 'quadruples', 'leaves unchanged'] },
          { label: 'In a PES spectrum, peaks at higher binding energy correspond to electrons that are', options: ['farther from the nucleus', 'closer to the nucleus', 'in higher $n$ shells', 'less stable'] }
        ],
        correctAnswers: ['$s$', 'rotational energy', 'doubles', 'closer to the nucleus'],
        hint1: '$s$ orbitals penetrate to the nucleus most.',
        hint2: 'Microwaves carry the least energy of the three spectroscopy regions.',
        hint3: '$E = h\\nu$.',
        hint4: 'Closer to nucleus → larger $Z_{\\text{eff}}$ → larger $|E|$.',
        explanation: '$s$ has highest $Z_{\\text{eff}}$ in any shell. Microwave photons change rotational energy levels. $E \\propto \\nu$. Higher binding energy = electron more tightly bound = closer to nucleus.'
      }
    },
    {
      id: 'as7-final-exit',
      type: 'multiple-choice' as const,
      content: `**Final Exit Quiz — You've Mastered Atomic Spectra!** 🎓`,
      exercise: {
        questions: [
          {
            question: 'On an exam, you see a question: "Why do hydrogen and helium produce different emission spectra?" The BEST answer is:',
            options: [
              'Helium\'s extra neutrons shift every energy level',
              'Each has its own set of quantized energy levels',
              'Helium is heavier, so its photons travel more slowly',
              'Only hydrogen\'s energy levels are quantized'
            ],
            correctAnswer: 1,
            explanation: 'Each atom has its own unique set of allowed energy levels — set by the nuclear charge and (for ≥2 electrons) electron–electron interactions. Hence each element has a unique spectral fingerprint. Neutrons have almost no effect on the levels, and all photons travel at $c$.'
          },
          {
            question: 'Hydrogen has $E_2 = -5.45 \\times 10^{-19}$ J and $E_3 = -2.42 \\times 10^{-19}$ J. Which combination correctly describes the photon EMITTED when an electron moves between these levels?',
            options: [
              '$n=2 \\to n=3$, $3.03 \\times 10^{-19}$ J, ~656 nm',
              '$n=3 \\to n=2$, $3.03 \\times 10^{-19}$ J, ~656 nm',
              '$n=3 \\to n=2$, $7.87 \\times 10^{-19}$ J, ~253 nm',
              '$n=3 \\to n=2$, $3.03 \\times 10^{-19}$ J, ~1875 nm'
            ],
            correctAnswer: 1,
            explanation: 'Emission means the electron drops, so the transition is $n=3 \\to n=2$. $E = (-2.42 \\times 10^{-19}) - (-5.45 \\times 10^{-19}) = 3.03 \\times 10^{-19}$ J, and $\\lambda = hc/E = 656$ nm (red). The $n=2 \\to n=3$ direction is absorption, and $7.87 \\times 10^{-19}$ J comes from adding the magnitudes.'
          }
        ]
      }
    }
  ]
}
