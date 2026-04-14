export const physics2QuantumPart7Data = {
  topicSlug: 'quantum-phenomena',
  sections: [
    {
      id: 'quantumphenomena-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Master Equation Reference

| Topic | Key Equation | What It Tells You |
|-------|-------------|-------------------|
| Photon energy | $E = hf = hc/\\lambda$ | Energy of a single photon |
| Photon momentum | $p = h/\\lambda$ | Momentum despite zero rest mass |
| Photoelectric | $KE_{max} = hf - \\phi$ | Max electron KE from light on metal |
| Stopping potential | $eV_0 = KE_{max}$ | Voltage to stop fastest photoelectrons |
| Threshold values | $f_0 = \\phi/h$, $\\lambda_0 = hc/\\phi$ | Cutoff for photoelectric emission |
| de Broglie | $\\lambda = h/(mv)$ | Wavelength of any moving particle |
| Electron shortcut | $\\lambda = 1.226/\\sqrt{V}$ nm | Quick formula for accelerated electrons |
| Uncertainty (x-p) | $\\Delta x \\cdot \\Delta p \\geq \\hbar/2$ | Fundamental limit on simultaneous knowledge |
| Uncertainty (E-t) | $\\Delta E \\cdot \\Delta t \\geq \\hbar/2$ | Energy uncertainty of short-lived states |
| Particle in box | $E_n = n^2 h^2/(8mL^2)$ | Quantized energies from confinement |
| Tunneling | $T \\propto e^{-2\\kappa d}$ | Probability exponentially decreases with barrier width |
| LED/band gap | $E_{gap} = hc/\\lambda$ | Photon wavelength from semiconductor device |

---

### Constants You Must Know

| Constant | Value | Shortcut |
|----------|-------|---------|
| $h$ | $6.626 \\times 10^{-34}$ J·s | — |
| $hc$ | $1.99 \\times 10^{-25}$ J·m | **1240 eV·nm** |
| $\\hbar$ | $1.055 \\times 10^{-34}$ J·s | — |
| $m_e$ | $9.11 \\times 10^{-31}$ kg | — |
| 1 eV | $1.6 \\times 10^{-19}$ J | — |
| $c$ | $3 \\times 10^8$ m/s | — |`
    },
    {
      id: 'quantumphenomena-p7-connections',
      type: 'text' as const,
      content: `### Cross-Topic Connections

Quantum phenomena don't exist in isolation — they connect to nearly every other topic in AP Physics 2:

| Connection | Detail |
|-----------|--------|
| **EM Waves** | Photons are quanta of EM radiation; $E = hf$ bridges wave and particle descriptions |
| **Atomic Physics** | Energy levels, emission/absorption spectra, Bohr model — all explained by quantum mechanics |
| **Nuclear Physics** | Alpha decay via quantum tunneling; nuclear energy levels |
| **Optics** | Diffraction and interference of electrons confirm matter waves |
| **Electric Circuits** | Band theory explains conductors/semiconductors/insulators; LEDs, transistors |
| **Thermodynamics** | Blackbody radiation launched quantum theory (Planck 1900) |

---

### Common AP Exam Mistakes

| Mistake | Correction |
|---------|-----------|
| "Brighter light → faster electrons" | Brighter = more photons → more electrons, same $KE_{max}$ |
| "Uncertainty is from clumsy measurement" | It's fundamental — nature itself has this limit |
| "$E_1 = 0$ for particle in box" | $E_1 = h^2/(8mL^2) > 0$ (zero-point energy) |
| "Electrons orbit like planets" | Electrons have probability clouds, not trajectories |
| "Tunneling violates energy conservation" | No — it's allowed by uncertainty principle; energy IS conserved |
| Forgetting $E_n = n^2 E_1$ (not $nE_1$) | Energy goes as $n^2$, not $n$! |
| Using wrong units (eV vs J, nm vs m) | Be consistent! Use $hc = 1240$ eV·nm to avoid conversions |

---

### The Big Picture: Classical vs. Quantum

| Feature | Classical Mechanics | Quantum Mechanics |
|---------|-------------------|-------------------|
| State description | Position $x(t)$, velocity $v(t)$ | Wave function $\\Psi(x,t)$ |
| Prediction type | Deterministic trajectories | Probabilistic outcomes |
| Energy | Continuous | Quantized (in bound systems) |
| Measurement | Doesn't change system | Collapses wave function |
| Tunneling | Impossible ($E < V_0$) | Possible with exponential decay |
| Uncertainty | Limited by instruments | Fundamental ($\\Delta x \\Delta p \\geq \\hbar/2$) |
| When it applies | Large ($m$, $L$) objects | Atomic/subatomic scale |

> 🔑 **Final Insight:** Classical mechanics is a limiting case of quantum mechanics. As objects get larger, $\\lambda \\to 0$, energy levels merge into a continuum, and quantum behavior becomes indistinguishable from classical. This is called the **correspondence principle**.`
    },
    {
      id: 'quantumphenomena-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The photoelectric effect was revolutionary because it showed:',
            options: ['Light is just a wave', 'Energy arrives in discrete packets (photons) with $E = hf$', 'Electrons are particles', 'Light travels at constant speed'],
            correctAnswer: 1,
            explanation: 'Einstein explained the photoelectric effect using Planck\'s quantum hypothesis — light energy comes in quanta $E = hf$. This earned him the 1921 Nobel Prize.'
          },
          {
            question: '$E_3$ for a particle in a box is how many times $E_1$?',
            options: ['3×', '6×', '9×', '27×'],
            correctAnswer: 2,
            explanation: '$E_n = n^2 E_1$. For $n = 3$: $E_3 = 9E_1$. Don\'t confuse $n^2$ with $n$!'
          },
          {
            question: 'Which phenomenon can ONLY be explained by the particle nature of light?',
            options: ['Double-slit interference', 'Thin-film colors', 'Photoelectric effect', 'Diffraction around edges'],
            correctAnswer: 2,
            explanation: 'Interference, thin-film, and diffraction are wave phenomena. The photoelectric effect requires the photon (particle) model — classical wave theory fails to explain the threshold frequency or instantaneous emission.'
          },
          {
            question: 'The correspondence principle states that:',
            options: ['Quantum and classical physics always agree', 'Quantum mechanics reduces to classical mechanics for large objects', 'Classical physics is wrong', 'All particles are waves'],
            correctAnswer: 1,
            explanation: 'As systems get larger (large mass, large quantum numbers), quantum predictions match classical ones. $\\lambda \\to 0$ and energy levels become effectively continuous.'
          }
        ]
      }
    },
    {
      id: 'quantumphenomena-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

**1)** Minimum wavelength of X-rays from a 50 kV tube? ($\\lambda_{min} = hc/(eV)$, answer in pm)

**2)** De Broglie wavelength of an electron accelerated through 50 kV? (in pm, round to 1 decimal place)

**3)** Which has shorter wavelength: the X-ray photon or the electron? (enter: photon/electron)

**4)** An electron is in state $n = 4$ of a box. How many nodes does $|\\Psi|^2$ have inside the box?
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['24.8', '5.5', 'electron', '3'],
        hint1: '$\\lambda_{min} = 1240 \\text{ eV·nm}/50000 \\text{ eV}$, convert nm to pm',
        hint2: '$\\lambda = 1.226/\\sqrt{50000}$ nm, convert to pm',
        hint3: 'Compare 24.8 pm to 5.5 pm',
        hint4: 'State $n$ has $n - 1$ nodes inside the box',
        explanation: '1) $\\lambda = 1240/50000 = 0.0248$ nm = 24.8 pm. 2) $\\lambda = 1.226/\\sqrt{50000} ≈ 0.00549$ nm = 5.5 pm. 3) The ELECTRON has a shorter wavelength (5.5 pm < 24.8 pm) — this is why electron microscopes beat X-ray resolution! 4) $\\Psi_4 = \\sqrt{2/L}\\sin(4\\pi x/L)$ has $n - 1 = 3$ nodes inside the box.'
      }
    }
  ]
};