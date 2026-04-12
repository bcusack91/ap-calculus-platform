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

When source and observer move relative to each other:

**Approaching (blueshift):** frequency increases, wavelength decreases
**Receding (redshift):** frequency decreases, wavelength increases

### For speeds much less than $c$:

$$\\\\frac{\\\\Delta f}{f} \\\\approx \\\\frac{v}{c}$$

$$f_{observed} \\\\approx f_{source}\\\\left(1 \\\\pm \\\\frac{v}{c}\\\\right)$$

- **+** for approaching
- **−** for receding

---

### Applications

| Application | How It Works |
|-------------|-------------|
| **Redshift of galaxies** | Light from distant galaxies shifted to longer wavelengths |
| **Radar guns** | Measure frequency shift of reflected microwaves |
| **Medical Doppler** | Measure blood flow velocity using ultrasound |`
    },    {
      id: 'electromagneticwaves-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A star moving away from Earth shows:',
            options: ['Blueshift', 'Redshift', 'No shift', 'Greenshift'],
            correctAnswer: 1,
            explanation: 'Receding source → lower frequency → longer wavelength → redshift.'
          },
          {
            question: 'The Doppler shift $\\\\Delta f/f \\\\approx v/c$ requires:',
            options: ['$v \\\\gg c$', '$v \\\\ll c$', '$v = c$', 'No restriction'],
            correctAnswer: 1,
            explanation: 'This is the low-speed approximation, valid when $v$ is much less than $c$.'
          },
          {
            question: 'A galaxy shows its hydrogen line at 660 nm instead of 656 nm. It is:',
            options: ['Approaching', 'Receding', 'Stationary', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Wavelength increased (656 → 660 nm) = redshift = moving away.'
          }
        ]
      }
    },    {
      id: 'electromagneticwaves-p5-input',
      type: 'input-boxes' as const,
      content: `
**Doppler Calculations** 🧮

A source emits light at $f = 5 \\\\times 10^{14}$ Hz. It moves toward you at $v = 3 \\\\times 10^6$ m/s.

**1)** $v/c = ?$ (as a decimal)

**2)** $\\\\Delta f \\\\approx ?$ (in Hz, scientific notation like 5e12)

**3)** Is the observed frequency higher or lower than emitted?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.01', '5e12', 'higher'],
        hint1: '$3 \\\\times 10^6 / 3 \\\\times 10^8$',
        hint2: '$\\\\Delta f = f \\\\times v/c$',
        hint3: 'Approaching = blueshift',
        explanation: '1) $0.01$. 2) $5 \\\\times 10^{14} \\\\times 0.01 = 5 \\\\times 10^{12}$ Hz. 3) Higher (blueshift from approaching source).'
      }
    }
  ]
};
