export const physics2QuantumPart1Data = {
  topicSlug: 'quantum-phenomena',
  sections: [
    {
      id: 'quantumphenomena-p1-intro',
      type: 'text' as const,
      content: `# 🌊 Quantum Phenomena

**Part 1 of 7 — Wave-Particle Duality**

---

### The Dual Nature of Light

Light behaves as both a **wave** and a **particle** (photon). This is one of the most profound discoveries of 20th-century physics:

| Evidence for Waves | Evidence for Particles |
|-------------------|----------------------|
| Double-slit interference fringes | Photoelectric effect (instantaneous ejection) |
| Single-slit diffraction patterns | Compton scattering (photon–electron collision) |
| Polarization phenomena | Photon counting (discrete detector clicks) |
| Thin-film interference colors | Blackbody radiation (Planck's quantization) |

> ⚠️ **AP Trap:** "Is light a wave or a particle?" — it's *both*. The behavior you observe depends on the experiment you perform. This is called **complementarity** (Bohr).

---

### Photon Energy & Momentum

A photon is a quantum of electromagnetic radiation. It has **zero rest mass** but carries both energy and momentum:

$$E = hf = \\frac{hc}{\\lambda}$$

$$p = \\frac{h}{\\lambda} = \\frac{E}{c}$$

| Quantity | Formula | Units |
|----------|---------|-------|
| Energy | $E = hf$ | J or eV |
| Frequency relation | $E = hc/\\lambda$ | — |
| Momentum | $p = h/\\lambda$ | kg·m/s |
| Momentum (energy form) | $p = E/c$ | kg·m/s |

---

### Fundamental Constants

| Constant | Symbol | Value |
|----------|--------|-------|
| Planck's constant | $h$ | $6.626 \\times 10^{-34}$ J·s |
| Reduced Planck's | $\\hbar = h/(2\\pi)$ | $1.055 \\times 10^{-34}$ J·s |
| Speed of light | $c$ | $3.00 \\times 10^8$ m/s |
| $hc$ shortcut | $hc$ | $1240$ eV·nm |
| Electron charge | $e$ | $1.6 \\times 10^{-19}$ C |

The $hc = 1240$ eV·nm shortcut is extremely powerful:

$$E(\\text{eV}) = \\frac{1240}{\\lambda(\\text{nm})}$$

---

### The Electromagnetic Spectrum and Photon Energies

| Region | Wavelength Range | Photon Energy |
|--------|-----------------|---------------|
| Radio | > 1 mm | < 0.001 eV |
| Infrared | 700 nm – 1 mm | 0.001 – 1.8 eV |
| Visible | 400 – 700 nm | 1.8 – 3.1 eV |
| Ultraviolet | 10 – 400 nm | 3.1 – 124 eV |
| X-ray | 0.01 – 10 nm | 124 eV – 124 keV |
| Gamma | < 0.01 nm | > 124 keV |

> 🔑 **Key Insight:** Shorter wavelength = higher frequency = higher energy. UV photons carry more energy than visible, which carry more than infrared. This explains why UV causes sunburn but visible light does not.`
    },
    {
      id: 'quantumphenomena-p1-photoelectric',
      type: 'text' as const,
      content: `### The Photoelectric Effect — Einstein's Revolution

When light shines on a metal surface, electrons may be ejected. Classical wave theory predicted that brighter light (any color) should eject electrons given enough time. **This prediction failed.**

---

### Experimental Observations vs. Classical Predictions

| Observation | Classical Prediction | Quantum Explanation |
|------------|---------------------|-------------------|
| Minimum $f$ required (threshold) | No threshold — any $f$ with enough intensity | Photon needs $E \\geq \\phi$ (work function) |
| Ejection is instantaneous | Delay expected (energy accumulates) | Single photon delivers ALL its energy at once |
| $KE_{max}$ depends on $f$, not intensity | $KE$ depends on intensity | $KE_{max} = hf - \\phi$ |
| More intensity → more electrons, not faster | More intensity → faster electrons | More photons → more electrons |

---

### Einstein's Photoelectric Equation

$$KE_{max} = hf - \\phi = \\frac{hc}{\\lambda} - \\phi$$

$$eV_0 = hf - \\phi$$

| Symbol | Meaning |
|--------|---------|
| $KE_{max}$ | Maximum kinetic energy of ejected electrons |
| $\\phi$ | Work function — minimum energy to free an electron |
| $V_0$ | Stopping potential — voltage to stop fastest electrons |
| $f_0 = \\phi/h$ | Threshold frequency — minimum frequency for emission |
| $\\lambda_0 = hc/\\phi$ | Threshold wavelength — maximum wavelength for emission |

---

### Work Functions of Common Metals

| Metal | $\\phi$ (eV) | $\\lambda_0$ (nm) |
|-------|------------|---------------|
| Cesium | 2.1 | 590 (visible) |
| Sodium | 2.3 | 539 (visible) |
| Zinc | 4.3 | 288 (UV) |
| Platinum | 6.4 | 194 (UV) |

> 🔑 **Graph Interpretation:** A plot of $KE_{max}$ vs. $f$ is a straight line with slope $h$ and $y$-intercept $-\\phi$. The $x$-intercept gives $f_0$. ALL metals give the SAME slope — this proved photon energy is $hf$.`
    },
    {
      id: 'quantumphenomena-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A photon with $\\lambda = 400$ nm has energy:',
            options: ['1.6 eV', '3.1 eV', '6.2 eV', '0.8 eV'],
            correctAnswer: 1,
            explanation: '$E = hc/\\lambda = 1240/400 = 3.1$ eV.'
          },
          {
            question: 'In the photoelectric effect, increasing light intensity (above threshold) causes:',
            options: ['Faster electrons', 'More electrons ejected per second', 'Higher $KE_{max}$', 'Lower threshold frequency'],
            correctAnswer: 1,
            explanation: 'More intensity = more photons per second = more electrons. Each photon still has the same energy $hf$, so $KE_{max}$ is unchanged.'
          },
          {
            question: 'The slope of a $KE_{max}$ vs. frequency graph equals:',
            options: ['The work function $\\phi$', 'Planck\'s constant $h$', 'The threshold frequency $f_0$', 'The stopping potential $V_0$'],
            correctAnswer: 1,
            explanation: '$KE_{max} = hf - \\phi$ is linear in $f$ with slope $h$. This is the same for ALL metals.'
          },
          {
            question: 'A metal with $\\phi = 4.0$ eV is illuminated by 200 nm light. The maximum KE of ejected electrons is:',
            options: ['2.2 eV', '4.0 eV', '6.2 eV', '10.2 eV'],
            correctAnswer: 0,
            explanation: '$E = 1240/200 = 6.2$ eV. $KE_{max} = 6.2 - 4.0 = 2.2$ eV.'
          }
        ]
      }
    },
    {
      id: 'quantumphenomena-p1-input',
      type: 'input-boxes' as const,
      content: `
**Photoelectric Effect Problems** 🧮

A sodium surface ($\\phi = 2.3$ eV) is illuminated by a 400 nm laser.

**1)** Photon energy? (in eV, round to 1 decimal place)

**2)** Maximum KE of ejected electrons? (in eV, round to 1 decimal place)

**3)** Stopping potential $V_0$? (in V, round to 1 decimal place)

**4)** Threshold wavelength for sodium? (in nm, round to nearest integer)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3.1', '0.8', '0.8', '539'],
        hint1: '$E = 1240/400$',
        hint2: '$KE_{max} = E - \\phi$',
        hint3: '$eV_0 = KE_{max}$, so $V_0 = KE_{max}$ (in volts when KE is in eV)',
        hint4: '$\\lambda_0 = 1240/\\phi$',
        explanation: '1) $E = 1240/400 = 3.1$ eV. 2) $KE = 3.1 - 2.3 = 0.8$ eV. 3) $V_0 = 0.8$ V (stopping potential in volts = max KE in eV). 4) $\\lambda_0 = 1240/2.3 ≈ 539$ nm (visible — sodium is photosensitive to visible light).'
      }
    }
  ]
};