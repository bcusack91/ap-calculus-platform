export const physics2QuantumPart2Data = {
  topicSlug: 'quantum-phenomena',
  sections: [
    {
      id: 'quantumphenomena-p2-intro',
      type: 'text' as const,
      content: `# 🌀 De Broglie Wavelength

**Part 2 of 7 — Matter Waves**

---

### De Broglie Hypothesis (1924)

Louis de Broglie proposed that ALL matter has wave-like properties — not just light. If photons (waves) have particle properties, then perhaps particles have wave properties:

$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

This was a revolutionary idea: **every moving object has an associated wavelength.**

---

### Why We Don't See Quantum Effects in Daily Life

| Object | Mass (kg) | Speed (m/s) | $\\lambda$ (m) | Observable? |
|--------|-----------|-------------|--------------|-------------|
| Electron (100 eV) | $9.11 \\times 10^{-31}$ | $5.9 \\times 10^6$ | $1.2 \\times 10^{-10}$ (0.12 nm) | ✅ Yes — atomic scale |
| Proton (100 eV) | $1.67 \\times 10^{-27}$ | $1.4 \\times 10^5$ | $2.9 \\times 10^{-12}$ (2.9 pm) | ✅ Yes — nuclear scale |
| Bullet (10 g) | $0.01$ | $300$ | $2.2 \\times 10^{-34}$ | ❌ Way too small |
| Baseball (0.15 kg) | $0.15$ | $40$ | $1.1 \\times 10^{-34}$ | ❌ Way too small |
| Car (1000 kg) | $1000$ | $30$ | $2.2 \\times 10^{-38}$ | ❌ Absurdly small |

> 🔑 **Key Insight:** Quantum wave effects are observable only when $\\lambda$ is comparable to the size of structures the particle interacts with (atoms, crystal lattices). For macroscopic objects, $\\lambda$ is so tiny that wave behavior is undetectable.

---

### Useful Shortcut for Electrons

For an electron accelerated through potential $V$:

$$\\lambda = \\frac{h}{\\sqrt{2m_e eV}} = \\frac{1.226}{\\sqrt{V}} \\text{ nm}$$

| Accelerating Voltage | $\\lambda$ | Comparable to |
|---------------------|-----------|---------------|
| 100 V | 0.123 nm | Atomic spacing |
| 10 kV | 0.0123 nm | Nuclear size |
| 50 kV | 0.0055 nm | Sub-nuclear |

This is why **electron microscopes** have far better resolution than optical microscopes — electrons can have wavelengths 1000× shorter than visible light!`
    },
    {
      id: 'quantumphenomena-p2-evidence',
      type: 'text' as const,
      content: `### Experimental Confirmation — Davisson-Germer (1927)

Clinton Davisson and Lester Germer scattered an electron beam from a nickel crystal surface and observed a **diffraction pattern** — exactly as predicted for waves with $\\lambda = h/p$.

---

### How the Experiment Worked

1. Electron beam aimed at nickel crystal surface
2. Electrons reflected/scattered at various angles
3. Strong intensity peak at $\\theta = 50°$ with $V = 54$ V
4. This matched Bragg's law: $n\\lambda = d\\sin\\theta$, confirming $\\lambda = h/p$

> This was the definitive proof that **particles have wave properties**, earning Davisson the 1937 Nobel Prize.

---

### Connection to the Bohr Model

De Broglie's hypothesis beautifully explains Bohr's quantization postulate:

An electron orbiting the nucleus must form a **standing wave** — the circumference must be an integer number of wavelengths:

$$n\\lambda = 2\\pi r \\quad \\Rightarrow \\quad n\\frac{h}{mv} = 2\\pi r$$

$$\\Rightarrow \\quad mvr = n\\hbar$$

This is exactly Bohr's angular momentum quantization condition! The allowed orbits are those where the electron wave "fits" without destructive interference.

| Level $n$ | Wavelengths in orbit | Radius | Example |
|-----------|---------------------|--------|---------|
| 1 | 1 full wavelength | $r_1 = a_0$ | Ground state |
| 2 | 2 full wavelengths | $r_2 = 4a_0$ | First excited |
| 3 | 3 full wavelengths | $r_3 = 9a_0$ | Second excited |

> 🔑 **AP Insight:** The quantized orbits aren't arbitrary — they're the only orbits where the electron's matter wave constructively interferes with itself. Non-integer wavelengths would destructively interfere and "cancel out."`
    },
    {
      id: 'quantumphenomena-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An electron accelerated through 100 V has $\\lambda ≈ 0.12$ nm. This is comparable to:',
            options: ['A baseball', 'A virus (~200 nm)', 'Atomic spacing in crystals (~0.1 nm)', 'A red blood cell (~8 μm)'],
            correctAnswer: 2,
            explanation: '0.12 nm ≈ 1.2 Å, which matches the spacing between atoms in crystals — enabling electron diffraction.'
          },
          {
            question: 'If an electron\'s kinetic energy is quadrupled, its de Broglie wavelength:',
            options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'],
            correctAnswer: 1,
            explanation: '$\\lambda = h/p = h/\\sqrt{2mKE}$. If $KE \\to 4KE$, then $\\lambda \\to \\lambda/2$. Wavelength is inversely proportional to the square root of KE.'
          },
          {
            question: 'The Davisson-Germer experiment confirmed:',
            options: ['Light is a wave', 'Energy is quantized', 'Electrons exhibit wave-like diffraction', 'The uncertainty principle'],
            correctAnswer: 2,
            explanation: 'They observed electron diffraction from a crystal, confirming de Broglie\'s matter wave hypothesis.'
          },
          {
            question: 'Bohr\'s quantization $mvr = n\\hbar$ follows from requiring the electron wave to:',
            options: ['Have maximum amplitude', 'Form a standing wave around the orbit', 'Travel at the speed of light', 'Have zero momentum'],
            correctAnswer: 1,
            explanation: '$n\\lambda = 2\\pi r$ (standing wave condition) combined with $\\lambda = h/(mv)$ gives $mvr = n\\hbar$.'
          }
        ]
      }
    },
    {
      id: 'quantumphenomena-p2-input',
      type: 'input-boxes' as const,
      content: `
**De Broglie Wavelength Calculations** 🧮

**1)** $\\lambda$ for an electron ($m = 9.11 \\times 10^{-31}$ kg) at $v = 2 \\times 10^6$ m/s? (in nm, round to 3 decimal places)

**2)** $\\lambda$ for a proton ($m = 1.67 \\times 10^{-27}$ kg) at the same speed? (in pm, round to 1 decimal place)

**3)** Ratio $\\lambda_e / \\lambda_p$ at the same speed?

**4)** Accelerating voltage needed to give an electron $\\lambda = 0.05$ nm? (in V, round to nearest integer)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['0.364', '0.2', '1833', '601'],
        hint1: '$\\lambda = h/(mv)$',
        hint2: 'Same formula, different mass. Convert to pm (1 nm = 1000 pm)',
        hint3: 'At the same speed, $\\lambda_e/\\lambda_p = m_p/m_e$',
        hint4: '$V = (1.226/\\lambda)^2$ where $\\lambda$ is in nm',
        explanation: '1) $\\lambda_e = 6.63 \\times 10^{-34}/(9.11 \\times 10^{-31} \\times 2 \\times 10^6) ≈ 0.364$ nm. 2) $\\lambda_p ≈ 0.199$ pm ≈ 0.2 pm. 3) $m_p/m_e = 1.67 \\times 10^{-27}/9.11 \\times 10^{-31} ≈ 1833$. 4) $V = (1.226/0.05)^2 ≈ 601$ V.'
      }
    }
  ]
};