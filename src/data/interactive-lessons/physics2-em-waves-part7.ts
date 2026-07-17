export const physics2EmWavesPart7Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p7-intro',
      type: 'text' as const,
      content: `# 📝 Synthesis & AP Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Equations Summary

| Concept | Equation | When to Use |
|---------|----------|-------------|
| Wave speed | $c = f\\lambda = 3 \\times 10^8$ m/s | All EM wave problems |
| E-B relation | $E = cB$ | Connecting field amplitudes |
| Speed in medium | $v = c/n$, $\\lambda_n = \\lambda_0/n$ | Light in glass, water, etc. |
| Intensity (point source) | $I = P/(4\\pi r^2)$ | Distance from a source |
| Intensity ratio | $I_1 r_1^2 = I_2 r_2^2$ | Comparing two distances |
| Intensity & fields | $I = c\\epsilon_0 E_0^2/2$ | Finding E from intensity |
| Malus's law | $I = I_0\\cos^2\\theta$ | Polarized light through analyzer |
| Unpolarized → polarizer | $I = I_0/2$ | First polarizer only |
| Doppler (low speed) | $\\Delta f/f \\approx v/c$ | Source-observer relative motion |
| Radiation pressure (absorbed) | $P = I/c$ | Light hitting absorbing surface |
| Radiation pressure (reflected) | $P = 2I/c$ | Light hitting perfect mirror |
| Poynting vector | $\\vec{S} = \\vec{E} \\times \\vec{B}/\\mu_0$ | Direction of energy flow |
| Displacement current | $I_d = \\epsilon_0 \\, d\\Phi_E/dt$ | Changing E acts like current |

### Big Ideas to Remember

1. **All EM waves travel at $c$ in vacuum** — radio to gamma, all the same speed
2. **EM waves are transverse** — E ⊥ B ⊥ direction of propagation
3. **E and B are in phase** — they reach maxima simultaneously
4. **Only accelerating charges radiate** — constant velocity = no radiation
5. **Frequency never changes** in a medium — only speed and wavelength change
6. **Intensity follows inverse-square law** for point sources
      `
    },
    {
      id: 'electromagneticwaves-p7-connections',
      type: 'text' as const,
      content: `
## Cross-Topic Connections

| EM Waves Concept | Connects To | How |
|-----------------|-------------|-----|
| $c = f\\lambda$ | Waves unit | Same wave equation, just at speed $c$ |
| Inverse-square law | Gravity, electric force | All $1/r^2$ laws share the same geometry |
| Polarization | Superposition | Polarizer decomposes E into components |
| Doppler effect | Sound Doppler | Same idea, but only relative velocity matters |
| $E = cB$ | E&M fields | E and B always linked in EM waves |
| Radiation pressure | Momentum | Photons carry momentum $p = E/c$ |
| Maxwell's equations | Faraday's & Ampere's law | EM waves predicted from combining them |
| Speed in medium | Refraction (Snell's law) | $n = c/v$ connects to bending of light |

### Historical Timeline

| Year | Event | Significance |
|------|-------|-------------|
| 1865 | Maxwell's theory | Predicted EM waves from equations |
| 1887 | Hertz's experiment | First detection of radio waves |
| 1887 | Michelson-Morley | No ether — light needs no medium |
| 1905 | Einstein's relativity | $c$ is constant in all frames |
| 1929 | Hubble's redshift | Universe is expanding |
      `
    },
    {
      id: 'electromagneticwaves-p7-check1',
      type: 'multiple-choice' as const,
      content: `
**Final Review Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which EM property changes when light enters glass from vacuum?',
            options: ['Frequency only', 'Wavelength and speed, but NOT frequency', 'All three: frequency, wavelength, and speed', 'None — EM waves are unaffected by medium'],
            correctAnswer: 1,
            explanation: 'Frequency stays constant (determined by source). Speed decreases: $v = c/n$. Wavelength decreases: $\\lambda = \\lambda_0/n$. The relationship $v = f\\lambda$ still holds.'
          },
          {
            question: 'Three polarizers at 0°, 30°, 60°. Unpolarized light enters. What fraction emerges?',
            options: ['$9/32$', '$3/8$', '$3/32$', '$27/128$'],
            correctAnswer: 0,
            explanation: 'P1: $I_0/2$ (unpolarized). P2: $(I_0/2)\\cos^2(30°) = (I_0/2)(3/4)$. P3: result $\\times \\cos^2(30°) = (I_0/2)(3/4)(3/4) = 9I_0/32$. Note: angle between P2 and P3 is $60°-30° = 30°$, NOT 60°!'
          },
          {
            question: 'A source at 4 m has intensity 100 $W/m^{2}$. At 8 m, intensity is:',
            options: ['50 $W/m^{2}$', '25 $W/m^{2}$', '200 $W/m^{2}$', '12.5 $W/m^{2}$'],
            correctAnswer: 1,
            explanation: 'Quick ratio: $I_1 r_1^2 = I_2 r_2^2$. $100(16) = I_2(64)$. $I_2 = 1600/64 = 25$ $W/m^{2}$. Or: double the distance → $1/4$ the intensity.'
          },
          {
            question: 'A satellite uses a solar sail (perfect reflector, area 1000 $m^{2}$). Sunlight intensity is 1400 $W/m^{2}$. The force on the sail is:',
            options: ['$4.7 \\times 10^{-3}$ N', '$9.3 \\times 10^{-3}$ N', '$1.4 \\times 10^6$ N', '$4.7 \\times 10^{-6}$ N'],
            correctAnswer: 1,
            explanation: 'Radiation pressure (reflected): $P = 2I/c = 2(1400)/(3 \\times 10^8) = 9.3 \\times 10^{-6}$ Pa. Force: $F = PA = 9.3 \\times 10^{-6} \\times 1000 = 9.3 \\times 10^{-3}$ N. Small but constant — adds up over time in space!'
          }
        ]
      }
    },
    {
      id: 'electromagneticwaves-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

**1)** Wavelength of green light ($f = 5.5 \\times 10^{14}$ Hz) in nm? (round to nearest integer)

**2)** After passing through two polarizers (unpolarized, second at 60° to first), what fraction of original intensity remains? (give as a fraction like 1/8)

**3)** EM wave speed in glass ($n = 1.5$) in m/s? (scientific notation like 2e8)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['545', '1/8', '2e8'],
        hint1: '$\\lambda = c/f$, then convert m to nm ($\\times 10^9$)',
        hint2: 'Unpolarized → $I_0/2$, then $\\times \\cos^2(60°) = \\times 1/4$',
        hint3: '$v = c/n = 3 \\times 10^8 / 1.5$',
        explanation: '1) $3 \\times 10^8/5.5 \\times 10^{14} \\approx 5.45 \\times 10^{-7}$ m = 545 nm. 2) $1/2 \\times 1/4 = 1/8$. 3) $3 \\times 10^8/1.5 = 2 \\times 10^8$ m/s.'
      }
    },
    {
      id: 'electromagneticwaves-p7-conceptual',
      type: 'multiple-choice' as const,
      content: `
**Conceptual Mastery** ⚠️
      `,
      exercise: {
        questions: [
          {
            question: 'Why did Maxwell predict EM waves would travel at the speed of light?',
            options: [
              'He assumed light was an EM wave',
              'His equations gave $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$, which numerically matched the measured speed of light',
              'He measured the speed experimentally',
              'Einstein told him'
            ],
            correctAnswer: 1,
            explanation: 'When Maxwell calculated the propagation speed from his equations using only electrical ($\\epsilon_0$) and magnetic ($\\mu_0$) constants, he got $1/\\sqrt{\\mu_0 \\epsilon_0} = 3 \\times 10^8$ m/s — exactly the speed of light! This was strong evidence that light IS an electromagnetic wave.'
          },
          {
            question: 'If you could somehow make a polarizer that only transmits the component of light at 45° to horizontal, and you shine vertically-polarized light through it, the transmitted intensity would be:',
            options: [
              'Zero',
              '$I_0/2$',
              '$I_0/4$',
              '$I_0$'
            ],
            correctAnswer: 1,
            explanation: 'Malus\'s law: $I = I_0\\cos^2(45°) = I_0(\\sqrt{2}/2)^2 = I_0/2$. The angle between vertical polarization and a 45° transmission axis is 45°.'
          }
        ]
      }
    }
  ]
};
