export const physics2EmWavesPart5Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p5-intro',
      type: 'text' as const,
      content: `# 🚀 Doppler Effect for EM Waves

**Part 5 of 7 — Frequency Shifts**

---

### Doppler Effect for Light

When a source and observer move **relative to each other**, the observed frequency shifts:

**Approaching (blueshift):** frequency increases, wavelength decreases
**Receding (redshift):** frequency decreases, wavelength increases

### For speeds much less than $c$ ($v \\ll c$):

$$\\frac{\\Delta f}{f} \\approx \\frac{v}{c}$$

$$f_{observed} \\approx f_{source}\\left(1 \\pm \\frac{v}{c}\\right)$$

- **+** for approaching (blueshift)
- **−** for receding (redshift)

> 🔑 **Key difference from sound:** For EM waves, only the **relative** velocity matters. For sound, it matters whether the source or observer is moving. EM waves have no medium, so there's no preferred reference frame.
      `
    },
    {
      id: 'electromagneticwaves-p5-applications',
      type: 'text' as const,
      content: `
## Applications of the EM Doppler Effect

### Astronomical Redshift

Edwin Hubble (1929) discovered that distant galaxies show **redshifted** spectral lines — their light has shifted to longer wavelengths. The farther the galaxy, the greater the redshift. This was the first evidence that the universe is **expanding**.

$$z = \\frac{\\Delta\\lambda}{\\lambda_0} = \\frac{\\lambda_{observed} - \\lambda_{emitted}}{\\lambda_{emitted}} \\approx \\frac{v}{c}$$

### Radar Speed Guns

Police radar sends microwaves at a car and measures the **frequency shift** of the reflected beam. A car approaching causes a blueshift; receding causes a redshift. The shift is doubled because the wave travels to the car AND back.

### Medical Doppler Ultrasound

Measures blood flow velocity by bouncing ultrasound off red blood cells and detecting the frequency shift. Can identify blockages, measure heart function, and monitor fetal blood flow.

| Application | Wave Type | What's Moving |
|------------|-----------|---------------|
| Hubble's law | Visible/IR light | Distant galaxies |
| Radar gun | Microwaves | Vehicles |
| Doppler ultrasound | Ultrasound | Red blood cells |
| Weather radar | Microwaves | Rain/hail/wind |
| GPS corrections | Radio waves | Satellites (relativistic Doppler) |
      `
    },
    {
      id: 'electromagneticwaves-p5-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A star moving away from Earth shows:',
            options: ['Blueshift (shorter wavelength)', 'Redshift (longer wavelength)', 'No shift', 'The same spectrum but dimmer'],
            correctAnswer: 1,
            explanation: 'Receding source → lower frequency → longer wavelength → redshift. The spectral lines are shifted toward the red (longer wavelength) end of the spectrum.'
          },
          {
            question: 'The approximation $\\Delta f/f \\approx v/c$ requires:',
            options: ['$v \\gg c$', '$v \\ll c$', '$v = c$', 'No restriction — it is always exact'],
            correctAnswer: 1,
            explanation: 'This is the non-relativistic (low-speed) approximation, valid when $v$ is much less than $c$. For speeds approaching $c$, the full relativistic Doppler formula is needed.'
          },
          {
            question: 'A galaxy shows its hydrogen line at 660 nm instead of the laboratory value of 656 nm. The galaxy is:',
            options: ['Approaching Earth', 'Moving away from Earth', 'Stationary relative to Earth', 'Cannot determine direction'],
            correctAnswer: 1,
            explanation: 'Wavelength increased (656 → 660 nm) = redshift = moving away. $z = (660-656)/656 \\approx 0.006$, so $v \\approx 0.006c \\approx 1.8 \\times 10^6$ m/s.'
          },
          {
            question: 'Unlike the Doppler effect for sound, the EM Doppler effect:',
            options: [
              'Only works for visible light',
              'Depends only on relative velocity between source and observer, not on which one moves',
              'Only occurs at very high speeds',
              'Produces frequency shifts in only one direction'
            ],
            correctAnswer: 1,
            explanation: 'Sound waves travel through air (a medium), so it matters whether the source or observer moves relative to the air. EM waves have no medium — only relative velocity matters. This is a consequence of special relativity.'
          }
        ]
      }
    },
    {
      id: 'electromagneticwaves-p5-input',
      type: 'input-boxes' as const,
      content: `
**Doppler Calculations** 🧮

A source emits light at $f = 5 \\times 10^{14}$ Hz. It moves toward you at $v = 3 \\times 10^6$ m/s.

**1)** $v/c = ?$ (as a decimal)

**2)** $\\Delta f \\approx ?$ (in Hz, scientific notation like 5e12)

**3)** Is the observed frequency higher or lower than emitted?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.01', '5e12', 'higher'],
        hint1: '$3 \\times 10^6 / 3 \\times 10^8 = ?$',
        hint2: '$\\Delta f = f \\times v/c = 5 \\times 10^{14} \\times 0.01$',
        hint3: 'Approaching = blueshift = higher frequency',
        explanation: '1) $0.01$ (1% of speed of light). 2) $5 \\times 10^{14} \\times 0.01 = 5 \\times 10^{12}$ Hz. 3) Higher — approaching source produces blueshift (increased frequency).'
      }
    },
    {
      id: 'electromagneticwaves-p5-advanced',
      type: 'multiple-choice' as const,
      content: `
**Advanced Applications** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A police radar gun measures a DOUBLED Doppler shift because:',
            options: [
              'The car reflects the signal at double frequency',
              'The signal undergoes a Doppler shift traveling TO the car AND another shift traveling BACK',
              'Radar uses two frequencies simultaneously',
              'The car is a moving mirror that doubles the wavelength'
            ],
            correctAnswer: 1,
            explanation: 'The outgoing radar wave is Doppler-shifted when it hits the moving car. The reflected wave then undergoes ANOTHER Doppler shift as it returns to the stationary gun. Total shift: $2\\Delta f/f \\approx 2v/c$.'
          },
          {
            question: 'A galaxy has redshift $z = 0.1$. Its recession velocity is approximately:',
            options: [
              '$3 \\times 10^7$ m/s (0.1c)',
              '$3 \\times 10^6$ m/s',
              '$3 \\times 10^8$ m/s',
              '$1.5 \\times 10^7$ m/s'
            ],
            correctAnswer: 0,
            explanation: 'For $v \\ll c$: $z \\approx v/c$, so $v \\approx zc = 0.1 \\times 3 \\times 10^8 = 3 \\times 10^7$ m/s. This galaxy is receding at 10% the speed of light.'
          }
        ]
      }
    }
  ]
};
