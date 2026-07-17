export const physics2EmWavesPart6Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Strategy for EM Wave Problems

| Step | Action | Key Formula |
|------|--------|-------------|
| 1 | Identify wave properties | $c = f\\lambda$, $E/B = c$ |
| 2 | Intensity from source | $I = P/(4\\pi r^2)$ — inverse-square law |
| 3 | Polarization | Unpolarized → $I_0/2$, then $I = I_0\\cos^2\\theta$ |
| 4 | Doppler shifts | $\\Delta f/f = v/c$ (approaching: +, receding: −) |
| 5 | Radiation pressure | Absorbed: $I/c$, Reflected: $2I/c$ |
| 6 | Wave in medium | $v = c/n$, $\\lambda_n = \\lambda_0/n$, frequency unchanged |

### Common AP Mistakes to Avoid

| Mistake | Correction |
|---------|-----------|
| Forgetting first polarizer halves intensity | Unpolarized → first polarizer ALWAYS gives $I_0/2$ |
| Using $\\cos\\theta$ instead of $\\cos^2\\theta$ | Malus's law has a SQUARED cosine |
| Using $\\pi r^2$ for intensity | Point source → sphere: $A = 4\\pi r^2$ |
| Saying frequency changes in a medium | ONLY speed and wavelength change; frequency stays the same |
| Confusing E and B amplitudes | $E_0$ is much larger numerically than $B_0$ (by factor of $c$) |
      `
    },
    {
      id: 'electromagneticwaves-p6-multipart',
      type: 'text' as const,
      content: `
## Worked Example: Multi-Step Problem

> A 50 W radio transmitter broadcasts at 100 MHz. A receiving antenna is 1 km away.

**Step 1 — Wavelength:**
$\\lambda = c/f = 3 \\times 10^8 / 10^8 = 3$ m

**Step 2 — Intensity at receiver:**
$I = P/(4\\pi r^2) = 50 / (4\\pi \\times (10^3)^2) = 50/(4\\pi \\times 10^6) \\approx 4.0 \\times 10^{-6}$ $W/m^{2}$

**Step 3 — E field amplitude:**
$E_0 = \\sqrt{2I/(c\\epsilon_0)} = \\sqrt{2(4.0 \\times 10^{-6})/(3 \\times 10^8 \\times 8.85 \\times 10^{-12})} \\approx 0.055$ V/m

**Step 4 — B field amplitude:**
$B_0 = E_0/c = 0.055/(3 \\times 10^8) \\approx 1.8 \\times 10^{-10}$ T

> Notice: $E_0$ is in V/m and $B_0$ is in Tesla — vastly different magnitudes but they carry equal energy!
      `
    },
    {
      id: 'electromagneticwaves-p6-check1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Light passes through 3 polarizers: unpolarized → vertical → 45° → 90°. Final intensity as a fraction of original?',
            options: ['0', '$I_0/8$', '$I_0/4$', '$I_0/16$'],
            correctAnswer: 1,
            explanation: 'Step by step: $I_0/2$ (unpolarized → P1) × $\\cos^2(45°) = 1/2$ (P1→P2, angle = 45°) × $\\cos^2(45°) = 1/2$ (P2→P3, angle = 90°−45° = 45°). Total: $I_0/2 \\times 1/2 \\times 1/2 = I_0/8$. Note: the angle at each step is the angle between ADJACENT polarizers, not from the first one!'
          },
          {
            question: 'An EM wave in vacuum has $\\lambda = 0.1$ m. Its frequency and spectrum region are:',
            options: ['$3 \\times 10^7$ Hz — radio', '$3 \\times 10^9$ Hz — microwave', '$3 \\times 10^{10}$ Hz — infrared', '$3 \\times 10^6$ Hz — radio'],
            correctAnswer: 1,
            explanation: '$f = c/\\lambda = 3 \\times 10^8/0.1 = 3 \\times 10^9$ Hz = 3 GHz. This is in the microwave region (used in radar and microwave ovens).'
          },
          {
            question: 'The Poynting vector $\\vec{S}$ gives:',
            options: ['The direction of the electric field', 'The direction of the magnetic field', 'The direction and rate of energy flow per unit area', 'The polarization direction'],
            correctAnswer: 2,
            explanation: '$\\vec{S} = \\vec{E} \\times \\vec{B}/\\mu_0$ points in the direction of energy propagation. Its magnitude $|S| = EB/\\mu_0$ gives the instantaneous power per unit area (intensity when time-averaged).'
          },
          {
            question: 'Sunlight ($I \\approx 1400$ $W/m^{2}$) hits a perfect mirror. The radiation pressure is:',
            options: ['$4.7 \\times 10^{-6}$ Pa', '$9.3 \\times 10^{-6}$ Pa', '$1400$ Pa', '$2.8 \\times 10^3$ Pa'],
            correctAnswer: 1,
            explanation: 'Perfect mirror → $P = 2I/c = 2(1400)/(3 \\times 10^8) \\approx 9.3 \\times 10^{-6}$ Pa. Tiny pressure, but over large areas (solar sails) it adds up to measurable force.'
          }
        ]
      }
    },
    {
      id: 'electromagneticwaves-p6-input',
      type: 'input-boxes' as const,
      content: `
**AP Practice** 🧮

A laser has power 5 mW and beam diameter 2 mm.

**1)** Beam cross-sectional area in $m^{2}$? (use scientific notation like 3.14e-6)

**2)** Intensity of beam? (in $W/m^{2}$, round to nearest integer)

**3)** If this light is fully absorbed by a surface, what is the radiation pressure in Pa? (scientific notation like 5.3e-6)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.14e-6', '1592', '5.3e-6'],
        hint1: '$A = \\pi r^2 = \\pi(0.001)^2$',
        hint2: '$I = P/A = 0.005/A$',
        hint3: '$P_{rad} = I/c$ for absorbed light',
        explanation: '1) $\\pi(10^{-3})^2 \\approx 3.14 \\times 10^{-6}$ $m^{2}$. 2) $0.005/3.14 \\times 10^{-6} \\approx 1592$ $W/m^{2}$. 3) $1592/(3 \\times 10^8) \\approx 5.3 \\times 10^{-6}$ Pa.'
      }
    },
    {
      id: 'electromagneticwaves-p6-tricky',
      type: 'multiple-choice' as const,
      content: `
**Tricky Conceptual Questions** ⚠️
      `,
      exercise: {
        questions: [
          {
            question: 'An EM wave enters glass ($n = 1.5$) from vacuum. Which statement is correct?',
            options: [
              'Frequency, wavelength, and speed all decrease',
              'Speed and wavelength decrease; frequency stays the same',
              'Only speed decreases; frequency and wavelength stay the same',
              'Frequency increases; speed and wavelength decrease'
            ],
            correctAnswer: 1,
            explanation: 'Frequency is set by the source and NEVER changes. In a medium: $v = c/n$ (speed decreases) and $\\lambda = \\lambda_0/n$ (wavelength decreases). The product $f\\lambda = v$ remains consistent.'
          },
          {
            question: 'Two identical light sources are at distances 2 m and 6 m. The ratio of their intensities ($I_{near}/I_{far}$) is:',
            options: ['3', '9', '1/3', '1/9'],
            correctAnswer: 1,
            explanation: 'Inverse-square law: $I \\propto 1/r^2$. Ratio: $I_{near}/I_{far} = r_{far}^2/r_{near}^2 = 36/4 = 9$. The closer source is 9 times more intense.'
          }
        ]
      }
    }
  ]
};
