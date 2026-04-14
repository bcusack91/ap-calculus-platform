export const physics2QuantumPart3Data = {
  topicSlug: 'quantum-phenomena',
  sections: [
    {
      id: 'quantumphenomena-p3-intro',
      type: 'text' as const,
      content: `# 🎯 Uncertainty Principle

**Part 3 of 7 — Fundamental Limits**

---

### Heisenberg's Uncertainty Principle (1927)

There is a **fundamental limit** to how precisely certain pairs of physical properties can be known simultaneously:

$$\\boxed{\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}}$$

$$\\boxed{\\Delta E \\cdot \\Delta t \\geq \\frac{\\hbar}{2}}$$

where $\\hbar = h/(2\\pi) = 1.055 \\times 10^{-34}$ J·s

---

### What the Uncertainty Principle IS and IS NOT

| It IS | It is NOT |
|-------|-----------|
| A fundamental property of nature | A limitation of our measuring equipment |
| Built into the wave-like nature of matter | Something that better technology can overcome |
| Applies to ALL objects (though only significant at quantum scale) | Caused by the observer "disturbing" the particle |
| A limit on *simultaneous* knowledge of conjugate pairs | A statement that we can't know anything |

> ⚠️ **Common Misconception:** The uncertainty principle is NOT about "disturbing the system by measurement." It's intrinsic to quantum mechanics — even with perfect instruments, these limits hold because particles ARE waves, and a wave cannot have both a perfectly defined position and a perfectly defined wavelength simultaneously.

---

### Conjugate Variable Pairs

| Pair | Relationship | Physical Meaning |
|------|-------------|-----------------|
| Position–Momentum | $\\Delta x \\cdot \\Delta p \\geq \\hbar/2$ | Localizing a particle increases its momentum spread |
| Energy–Time | $\\Delta E \\cdot \\Delta t \\geq \\hbar/2$ | Short-lived states have uncertain energy |
| Angle–Angular momentum | $\\Delta\\theta \\cdot \\Delta L \\geq \\hbar/2$ | (Less common on AP exam) |

---

### Intuitive Understanding: Wave Packets

Think of a matter wave. A pure sine wave has a **perfectly defined wavelength** (thus momentum $p = h/\\lambda$) but extends infinitely — its position is completely undefined.

To *localize* the particle, you must superpose many wavelengths to create a wave packet. But now the wavelength (momentum) is spread out:

| Scenario | $\\Delta x$ | $\\Delta p$ |
|----------|-----------|-----------|
| Pure sine wave (definite $\\lambda$) | $\\infty$ | 0 |
| Moderately localized packet | Medium | Medium |
| Very localized spike | Very small | Very large |

> 🔑 **Key Insight:** Position and momentum are connected through the wave nature of matter. You can't have a wave that is both perfectly localized AND has a single frequency.`
    },
    {
      id: 'quantumphenomena-p3-applications',
      type: 'text' as const,
      content: `### Why Electrons Can't Exist Inside the Nucleus

An atom's nucleus has radius $r \\sim 10^{-15}$ m. If an electron were confined there:

$$\\Delta p \\geq \\frac{\\hbar}{2\\Delta x} = \\frac{1.055 \\times 10^{-34}}{2 \\times 10^{-15}} \\approx 5 \\times 10^{-20} \\text{ kg·m/s}$$

The corresponding kinetic energy:

$$KE \\approx \\frac{(\\Delta p)^2}{2m_e} \\approx \\frac{(5 \\times 10^{-20})^2}{2(9.11 \\times 10^{-31})} \\approx 1.5 \\times 10^{-9} \\text{ J} \\approx 10 \\text{ GeV}$$

This is **millions of times** larger than the ~MeV energy scale of nuclear binding. The electron would immediately escape! This is why electrons orbit *outside* the nucleus.

---

### Energy-Time Uncertainty and Virtual Particles

$$\\Delta E \\cdot \\Delta t \\geq \\frac{\\hbar}{2}$$

| Application | Detail |
|------------|--------|
| **Spectral line widths** | Short-lived excited states ($\\Delta t$ small) → broad energy/frequency spread |
| **Virtual particles** | Particles can "borrow" energy $\\Delta E$ for a time $\\Delta t \\leq \\hbar/(2\\Delta E)$ |
| **Quantum tunneling** | Related to energy uncertainty — particle can briefly have "enough" energy |

---

### Uncertainty for Atoms vs. Macroscopic Objects

| System | $\\Delta x$ | Minimum $\\Delta v = \\Delta p/m$ |
|--------|-----------|-------------------------------|
| Electron in atom ($10^{-10}$ m) | $10^{-10}$ m | $\\sim 10^6$ m/s — significant! |
| Proton in nucleus ($10^{-15}$ m) | $10^{-15}$ m | $\\sim 10^7$ m/s — very significant! |
| Baseball ($10^{-3}$ m precision) | $10^{-3}$ m | $\\sim 10^{-31}$ m/s — negligible! |

> 🔑 **AP Insight:** The uncertainty principle explains zero-point energy — even at absolute zero, a confined particle must have some minimum kinetic energy because $\\Delta p > 0$ requires $p > 0$ on average.`
    },
    {
      id: 'quantumphenomena-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The uncertainty principle states that:',
            options: ['All measurements have random errors', 'Position and momentum cannot both be known exactly simultaneously', 'Energy isn\'t conserved at quantum scales', 'Particles don\'t have definite properties'],
            correctAnswer: 1,
            explanation: '$\\Delta x \\cdot \\Delta p \\geq \\hbar/2$. There is a fundamental limit on simultaneous precision of conjugate variables — this is a property of nature, not measurement.'
          },
          {
            question: 'An electron is confined to a region of $10^{-10}$ m. Its minimum momentum uncertainty is approximately:',
            options: ['$5 \\times 10^{-25}$ kg·m/s', '$5 \\times 10^{-34}$ kg·m/s', '$10^{-10}$ kg·m/s', '0'],
            correctAnswer: 0,
            explanation: '$\\Delta p \\geq \\hbar/(2\\Delta x) = 1.055 \\times 10^{-34}/(2 \\times 10^{-10}) ≈ 5.3 \\times 10^{-25}$ kg·m/s.'
          },
          {
            question: 'Why don\'t electrons exist inside the nucleus?',
            options: ['They are repelled by protons', 'Confining them to $10^{-15}$ m would require impossibly high kinetic energy', 'They are too large', 'Gravity pulls them out'],
            correctAnswer: 1,
            explanation: '$\\Delta x \\sim 10^{-15}$ m → $\\Delta p$ so large that $KE \\sim$ GeV, far exceeding nuclear binding energies.'
          },
          {
            question: 'A short-lived excited state ($\\Delta t = 10^{-10}$ s) has energy uncertainty:',
            options: ['$\\Delta E \\sim 10^{-24}$ J', '$\\Delta E = 0$', '$\\Delta E \\sim 10^{-10}$ J', '$\\Delta E \\sim 10^{-34}$ J'],
            correctAnswer: 0,
            explanation: '$\\Delta E \\geq \\hbar/(2\\Delta t) = 1.055 \\times 10^{-34}/(2 \\times 10^{-10}) ≈ 5 \\times 10^{-25}$ J. This causes natural spectral line broadening.'
          }
        ]
      }
    },
    {
      id: 'quantumphenomena-p3-input',
      type: 'input-boxes' as const,
      content: `
**Uncertainty Principle Problems** 🧮

An electron is confined to a region $\\Delta x = 5 \\times 10^{-11}$ m (about the size of a hydrogen atom ground-state orbit).

**1)** Minimum $\\Delta p$? (in kg·m/s, scientific notation)

**2)** Minimum kinetic energy $KE = (\\Delta p)^2/(2m_e)$? (in eV, round to 1 decimal place)

**3)** Is this energy comparable to hydrogen's ground state (13.6 eV)? (yes/no)

**4)** If the electron were confined to a nucleus ($\\Delta x = 10^{-15}$ m), what would $KE$ be? (in MeV, round to nearest integer)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['1.05e-24', '3.8', 'yes', '9645'],
        hint1: '$\\Delta p = \\hbar/(2\\Delta x)$',
        hint2: '$KE = (\\Delta p)^2/(2m_e)$, convert J to eV by dividing by $1.6 \\times 10^{-19}$',
        hint3: 'Compare 3.8 eV to 13.6 eV — same order of magnitude',
        hint4: 'Same calculation with $\\Delta x = 10^{-15}$ m. Convert to MeV ($1$ MeV $= 10^6$ eV)',
        explanation: '1) $\\Delta p = 1.055 \\times 10^{-34}/(2 \\times 5 \\times 10^{-11}) ≈ 1.055 \\times 10^{-24}$ kg·m/s. 2) $KE = (1.055 \\times 10^{-24})^2/(2 \\times 9.11 \\times 10^{-31}) ≈ 6.1 \\times 10^{-19}$ J ≈ 3.8 eV. 3) Yes — same order of magnitude, confirming the uncertainty principle governs atomic-scale physics. 4) With $\\Delta x = 10^{-15}$ m, $KE \\sim 10$ GeV — electrons cannot be confined to nuclear dimensions.'
      }
    }
  ]
};