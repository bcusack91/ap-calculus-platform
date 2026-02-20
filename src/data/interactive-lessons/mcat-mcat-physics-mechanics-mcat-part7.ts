export const mcatPhysMechPart7Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm7-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 7 of 7 — Waves & Sound**

### Wave Properties

$$v = f\\lambda \\qquad T = \\frac{1}{f}$$

- **Transverse**: oscillation perpendicular to propagation (light, string waves)
- **Longitudinal**: oscillation parallel to propagation (sound)

### Sound

- Speed in air: $\\approx 340\\;\\text{m/s}$ (faster in denser media)
- **Intensity**: $I = \\frac{P}{4\\pi r^2}$ (inverse square law)
- **Decibels**: $\\beta = 10\\log(I/I_0)$ where $I_0 = 10^{-12}\\;\\text{W/m}^2$
- Every 10 dB increase = 10× intensity

### Doppler Effect

$$f' = f\\frac{v \\pm v_{observer}}{v \\mp v_{source}}$$

- Source approaching → higher frequency (pitch)
- Source receding → lower frequency

### Standing Waves

- **Both ends fixed**: $\\lambda_n = \\frac{2L}{n}$, $f_n = n\\frac{v}{2L}$
- **One end open**: $\\lambda_n = \\frac{4L}{n}$ (odd harmonics only: $n = 1, 3, 5...$)`
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
            explanation: `Source approaching: $f' = f \\cdot v/(v - v_s) = 500(340)/(340 - 34) = 500(340/306) \\approx 556$ Hz. Higher frequency = higher pitch.`
          },
          {
            question: `Increasing sound intensity by a factor of 100 increases the decibel level by:`,
            options: [`20 dB`, `10 dB`, `100 dB`, `2 dB`],
            correctAnswer: 0,
            explanation: `$\\Delta\\beta = 10\\log(100) = 10(2) = 20$ dB. Each factor of 10 in intensity = +10 dB.`
          }
        ]
      }
    },
    {
      id: 'pm7-summary',
      type: 'text' as const,
      content: `### Physics Mechanics — Complete! ✅

Key formulas: $v = f\\lambda$, Doppler effect, inverse square law for intensity. Sound travels faster in denser media (opposite of light!). Standing wave harmonics depend on boundary conditions.`
    }
  ]
};
