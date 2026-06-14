export const mcatPhysMechPart7Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm7-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 7 of 7 — Waves & Sound**

### Wave Properties

$v = f\\lambda$ and period $T = \\frac{1}{f}$

- **Transverse**: oscillation perpendicular to propagation (light, waves on a string)
- **Longitudinal**: oscillation parallel to propagation (sound)

### Sound

- Speed in air: $\\approx 340\\;\\text{m/s}$ (faster in denser media such as water and solids)
- Intensity: $I = \\frac{P}{4\\pi r^2}$ (an inverse-square law)
- Decibels: $\\beta = 10\\log(I/I_0)$ where $I_0 = 10^{-12}\\;\\text{W/m}^2$
- Every $10\\;\\text{dB}$ increase corresponds to a $10\\times$ increase in intensity

### Doppler Effect

$f' = f\\frac{v \\pm v_{observer}}{v \\mp v_{source}}$

- Source approaching → higher observed frequency (higher pitch)
- Source receding → lower observed frequency

### Standing Waves

- **Both ends fixed**: $\\lambda_n = \\frac{2L}{n}$, $f_n = n\\frac{v}{2L}$
- **One end open**: $\\lambda_n = \\frac{4L}{n}$, with only odd harmonics ($n = 1, 3, 5, ...$)

For a fixed source frequency, wavelength changes with the medium because $\\lambda = v/f$ and the wave speed depends on the medium.`
    },
    {
      id: 'pm7-worked',
      type: 'text' as const,
      content: `### Worked Example — Decibel Change from Intensity

A sound's intensity increases from $I_1 = 10^{-6}\\;\\text{W/m}^2$ to $I_2 = 10^{-3}\\;\\text{W/m}^2$. By how many decibels does the sound level rise?

**Step 1 — Use the decibel difference formula.**

$\\Delta\\beta = 10\\log\\!\\left(\\frac{I_2}{I_1}\\right)$

**Step 2 — Take the ratio.**

$\\frac{I_2}{I_1} = \\frac{10^{-3}}{10^{-6}} = 10^{3}$

**Step 3 — Evaluate the logarithm.**

$\\Delta\\beta = 10\\log(10^{3}) = 10 \\times 3 = 30\\;\\text{dB}$

Each factor of 10 in intensity adds $10\\;\\text{dB}$, so a $1000\\times$ jump is $+30\\;\\text{dB}$. The decibel scale is logarithmic — a useful reminder that small dB changes hide large intensity changes.`
    },
    {
      id: 'pm7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Waves & Sound** 🎯`,
      exercise: {
        questions: [
          {
            question: `An ambulance siren produces sound at 500 Hz. As it approaches you at 34 m/s (speed of sound = 340 m/s), you hear:`,
            options: [`~556 Hz (higher pitch)`, `~450 Hz`, `500 Hz`, `~600 Hz`],
            correctAnswer: 0,
            explanation: `Source approaching: $f' = f \\cdot v/(v - v_s) = 500(340)/(340 - 34) = 500(340/306) \\approx 556$ Hz. Higher frequency means higher pitch.`
          },
          {
            question: `Increasing sound intensity by a factor of 100 increases the decibel level by:`,
            options: [`20 dB`, `10 dB`, `100 dB`, `2 dB`],
            correctAnswer: 0,
            explanation: `$\\Delta\\beta = 10\\log(100) = 10(2) = 20$ dB. Each factor of 10 in intensity adds 10 dB.`
          },
          {
            question: `A 340 Hz tone travels from air into water. Which statement is correct?`,
            options: [`Frequency changes, wavelength constant`, `Frequency constant, wavelength changes`, `Both frequency and wavelength constant`, `Both frequency and wavelength decrease`],
            correctAnswer: 1,
            explanation: `Frequency is set by the source and stays constant across a boundary; the speed changes with the medium, so the wavelength must change ($\\lambda = v/f$).`
          },
          {
            question: `A wave travels at $340\\;\\text{m/s}$ with a frequency of $170\\;\\text{Hz}$. Its wavelength is:`,
            options: [`2 m`, `0.5 m`, `5 m`, `510 m`],
            correctAnswer: 0,
            explanation: `$\\lambda = v/f = 340/170 = 2\\;\\text{m}$.`
          },
          {
            question: `If you move twice as far from a point sound source, the intensity you receive becomes:`,
            options: [`1/4 as large`, `1/2 as large`, `2 times as large`, `Unchanged`],
            correctAnswer: 0,
            explanation: `Intensity follows the inverse-square law $I \\propto 1/r^2$. Doubling $r$ reduces intensity to $1/2^2 = 1/4$.`
          },
          {
            question: `A string fixed at both ends has length $L$ and wave speed $v$. Its fundamental ($n = 1$) frequency is:`,
            options: [`$v/(2L)$`, `$v/(4L)$`, `$2v/L$`, `$v/L$`],
            correctAnswer: 0,
            explanation: `For a string fixed at both ends, $f_n = n\\,v/(2L)$. The fundamental ($n = 1$) is $f_1 = v/(2L)$.`
          }
        ]
      }
    },
    {
      id: 'pm7-summary',
      type: 'text' as const,
      content: `### Physics Mechanics — Complete! ✅

Key relationships: $v = f\\lambda$, the Doppler effect, and the inverse-square law for intensity. Sound travels FASTER in denser media (the opposite of light). Decibels are logarithmic, so $+10\\;\\text{dB}$ means $10\\times$ the intensity. Standing-wave harmonics depend on the boundary conditions (both ends fixed vs. one end open).`
    }
  ]
};
