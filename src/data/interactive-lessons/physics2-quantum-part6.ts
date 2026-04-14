export const physics2QuantumPart6Data = {
  topicSlug: 'quantum-phenomena',
  sections: [
    {
      id: 'quantumphenomena-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Master Equation Reference

| Topic | Key Equation | When to Use |
|-------|-------------|-------------|
| Photon energy | $E = hf = hc/\\lambda$ | Finding energy of EM radiation |
| Photon momentum | $p = h/\\lambda = E/c$ | Compton scattering, radiation pressure |
| Photoelectric effect | $KE_{max} = hf - \\phi$ | Light hitting a metal surface |
| Stopping potential | $eV_0 = KE_{max}$ | Photoelectric experiment voltage |
| Threshold frequency | $f_0 = \\phi/h$ | Below this, no electrons ejected |
| de Broglie wavelength | $\\lambda = h/(mv) = h/p$ | Matter wave calculations |
| Electron shortcut | $\\lambda = 1.226/\\sqrt{V}$ nm | Electrons through voltage $V$ |
| Uncertainty (position) | $\\Delta x \\cdot \\Delta p \\geq \\hbar/2$ | Confined particles |
| Uncertainty (energy) | $\\Delta E \\cdot \\Delta t \\geq \\hbar/2$ | Short-lived states |
| Particle in box | $E_n = n^2 h^2/(8mL^2)$ | Standing wave energy levels |

---

### Unit Conversion Essentials

| Conversion | Value |
|-----------|-------|
| 1 eV → J | $1.6 \\times 10^{-19}$ J |
| $hc$ shortcut | 1240 eV·nm |
| $h$ | $6.626 \\times 10^{-34}$ J·s |
| $\\hbar$ | $1.055 \\times 10^{-34}$ J·s |
| $m_e$ | $9.11 \\times 10^{-31}$ kg |
| $m_p$ | $1.67 \\times 10^{-27}$ kg |

> 🔑 **Strategy:** Always check whether you need to work in eV or joules. Use the $hc = 1240$ eV·nm shortcut whenever possible — it eliminates many conversion steps.`
    },
    {
      id: 'quantumphenomena-p6-worked',
      type: 'text' as const,
      content: `### Worked Problem 1: Photoelectric Effect

**Problem:** Light of wavelength 200 nm strikes a cesium surface ($\\phi = 2.1$ eV). Find: (a) photon energy, (b) max KE of electrons, (c) stopping potential, (d) max speed of ejected electrons.

---

**Solution:**

**(a)** $E = hc/\\lambda = 1240/200 = 6.2$ eV

**(b)** $KE_{max} = E - \\phi = 6.2 - 2.1 = 4.1$ eV

**(c)** $eV_0 = KE_{max}$, so $V_0 = 4.1$ V

**(d)** Convert KE to joules: $KE = 4.1 \\times 1.6 \\times 10^{-19} = 6.56 \\times 10^{-19}$ J

$v = \\sqrt{2KE/m_e} = \\sqrt{2(6.56 \\times 10^{-19})/(9.11 \\times 10^{-31})} = 1.2 \\times 10^6$ m/s

---

### Worked Problem 2: De Broglie + Particle in Box Connection

**Problem:** An electron is in the $n = 2$ state of a box of length $L = 0.5$ nm. Find: (a) the energy, (b) the de Broglie wavelength of the electron in this state.

---

**Solution:**

**(a)** $E_1 = h^2/(8m_e L^2) = (6.63 \\times 10^{-34})^2/(8 \\times 9.11 \\times 10^{-31} \\times (5 \\times 10^{-10})^2)$

$E_1 = 2.41 \\times 10^{-19}$ J $= 1.51$ eV

$E_2 = 4E_1 = 6.04$ eV

**(b)** In the $n$th state, $\\lambda_n = 2L/n$

$\\lambda_2 = 2(0.5)/2 = 0.5$ nm

**Check with de Broglie:** $KE = E_2 = 6.04$ eV $= 9.66 \\times 10^{-19}$ J

$p = \\sqrt{2m_e KE} = 1.33 \\times 10^{-24}$ kg·m/s

$\\lambda = h/p = 6.63 \\times 10^{-34}/1.33 \\times 10^{-24} = 0.5$ nm ✓

---

### Worked Problem 3: Multi-Concept

**Problem:** An electron microscope accelerates electrons through 100 kV. (a) Find the electron's de Broglie wavelength. (b) Compare to the wavelength of visible light (550 nm). (c) Why does this matter for resolution?

---

**Solution:**

**(a)** $\\lambda = 1.226/\\sqrt{V} = 1.226/\\sqrt{100{,}000} = 0.00388$ nm = 3.88 pm

**(b)** Ratio: $550/0.00388 ≈ 142{,}000$

The electron wavelength is about **140,000× shorter** than visible light!

**(c)** Resolution limit $\\sim \\lambda$. Shorter wavelength → finer detail. This is why electron microscopes can image individual atoms while optical microscopes cannot.

> ⚠️ **AP Trap:** At 100 kV, relativistic effects start to matter (~20% correction). AP Physics 2 uses non-relativistic formulas, but be aware that very high voltages push the limits of classical approximations.`
    },
    {
      id: 'quantumphenomena-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Photon energy is 5 eV. Can it eject an electron from a metal with work function 4.5 eV?',
            options: ['No — insufficient energy', 'Yes — $KE_{max}$ = 0.5 eV', 'Yes — $KE_{max}$ = 5 eV', 'Yes — $KE_{max}$ = 4.5 eV'],
            correctAnswer: 1,
            explanation: '$KE_{max} = E - \\phi = 5 - 4.5 = 0.5$ eV. The photon has MORE energy than the work function, so electrons are ejected.'
          },
          {
            question: 'An electron has KE = 50 eV. Its de Broglie wavelength is closest to:',
            options: ['0.17 nm', '1.7 nm', '17 nm', '0.017 nm'],
            correctAnswer: 0,
            explanation: '$\\lambda = 1.226/\\sqrt{V}$ nm. For $V = 50$: $\\lambda = 1.226/7.07 ≈ 0.173$ nm.'
          },
          {
            question: 'For a particle in a box, the energy gap between $n = 2$ and $n = 1$ is:',
            options: ['$E_1$', '$2E_1$', '$3E_1$', '$4E_1$'],
            correctAnswer: 2,
            explanation: '$E_2 - E_1 = 4E_1 - E_1 = 3E_1$. Energy gaps increase as $n$ increases.'
          },
          {
            question: 'Which graph correctly shows $KE_{max}$ vs. frequency for the photoelectric effect?',
            options: ['Curved line starting from origin', 'Straight line with positive slope, starting from $f_0$ on the $x$-axis', 'Horizontal line', 'Exponential decay'],
            correctAnswer: 1,
            explanation: '$KE_{max} = hf - \\phi$ is linear in $f$ with slope $h$. Below $f_0 = \\phi/h$, no electrons are emitted ($KE_{max} = 0$).'
          }
        ]
      }
    },
    {
      id: 'quantumphenomena-p6-input',
      type: 'input-boxes' as const,
      content: `
**AP-Style Problems** 🧮

A metal has work function $\\phi = 2.3$ eV. UV light of $\\lambda = 250$ nm shines on it.

**1)** Photon energy? (in eV, round to 2 decimal places)

**2)** Maximum KE of ejected electrons? (in eV, round to 2 decimal places)

**3)** Threshold frequency $f_0$? (in Hz, scientific notation)

**4)** If the light intensity is doubled (same $\\lambda$), what happens to $KE_{max}$? (enter: same/doubles)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['4.96', '2.66', '5.56e14', 'same'],
        hint1: '$E = 1240/250$',
        hint2: '$KE_{max} = E - \\phi$',
        hint3: '$f_0 = \\phi/h$ (convert $\\phi$ from eV to J first)',
        hint4: 'Think about what determines $KE_{max}$ — is it photon energy or number of photons?',
        explanation: '1) $E = 1240/250 = 4.96$ eV. 2) $KE = 4.96 - 2.3 = 2.66$ eV. 3) $f_0 = 2.3 \\times 1.6 \\times 10^{-19}/(6.63 \\times 10^{-34}) ≈ 5.56 \\times 10^{14}$ Hz. 4) $KE_{max}$ stays the SAME — it depends only on photon energy ($hf$), not intensity. Doubling intensity doubles the NUMBER of electrons, not their maximum energy.'
      }
    }
  ]
};