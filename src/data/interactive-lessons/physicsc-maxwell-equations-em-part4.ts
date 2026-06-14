export const physCEMMaxwellPart4Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p4-intro',
      type: 'text' as const,
      content: `# 🌈 The Electromagnetic Spectrum

**Part 4 of 7 — Types of EM Radiation**

---

### The Spectrum

| Type | Wavelength | Frequency |
|------|-----------|-----------|
| Radio | > 1 m | < 300 MHz |
| Microwave | 1 mm – 1 m | 300 MHz – 300 GHz |
| Infrared | 700 nm – 1 mm | |
| Visible | 400 – 700 nm | |
| Ultraviolet | 10 – 400 nm | |
| X-ray | 0.01 – 10 nm | |
| Gamma | < 0.01 nm | > $10^{19}$ Hz |

All travel at $c = f\\lambda$ in vacuum.

> 🔑 All electromagnetic waves are the same phenomenon — oscillating $\\vec{E}$ and $\\vec{B}$ fields. They differ only in frequency.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p4-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Wavelength, Frequency, and Photon Energy

A green laser emits light of wavelength $\\lambda = 532 \\text{ nm}$. Find its frequency and the energy of one photon.

**Step 1 — Use $c = f\\lambda$.** Solve for frequency:

$f = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8}{532 \\times 10^{-9}} \\approx 5.6 \\times 10^{14} \\text{ Hz}$

**Step 2 — Apply the Planck relation.** Photon energy is $E = hf$ with $h = 6.63 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$:

$E = hf = (6.63 \\times 10^{-34})(5.6 \\times 10^{14}) \\approx 3.7 \\times 10^{-19} \\text{ J}$

**Step 3 — Convert to electron-volts.** Dividing by $1.6 \\times 10^{-19} \\text{ J/eV}$:

$E \\approx \\frac{3.7 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 2.3 \\text{ eV}$

> 🔑 Shorter wavelength means higher frequency and higher photon energy — that is why gamma rays are far more energetic than radio waves.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'All EM waves travel at the same speed in vacuum because:',
            options: ['They have the same frequency', 'They have the same wavelength', 'Maxwell\'s equations predict a unique speed', 'They are all visible'],
            correctAnswer: 2,
            explanation: '$c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$ depends only on constants of nature, not on frequency or wavelength.'
          },
          {
            question: 'A radio station broadcasts at $f = 100 \\text{ MHz}$. The wavelength of this wave in vacuum is:',
            options: ['$3.0$ m', '$0.30$ m', '$30$ m', '$3.0 \\times 10^8$ m'],
            correctAnswer: 0,
            explanation: '$\\lambda = c/f = (3.0 \\times 10^8)/(1.0 \\times 10^8) = 3.0$ m.'
          },
          {
            question: 'Ranked from longest to shortest wavelength, the correct order is:',
            options: ['Gamma, X-ray, visible, radio', 'Radio, infrared, visible, X-ray', 'X-ray, radio, visible, infrared', 'Visible, radio, gamma, infrared'],
            correctAnswer: 1,
            explanation: 'Wavelength decreases (and frequency increases) from radio → microwave → infrared → visible → ultraviolet → X-ray → gamma.'
          },
          {
            question: 'Compared to a microwave photon, an X-ray photon has:',
            options: ['Lower frequency and lower energy', 'Higher frequency and higher energy', 'The same energy', 'A longer wavelength'],
            correctAnswer: 1,
            explanation: 'X-rays have much higher frequency, so by $E = hf$ they carry much more energy per photon than microwaves.'
          },
          {
            question: 'If the frequency of an EM wave doubles (in vacuum), its wavelength:',
            options: ['Doubles', 'Halves', 'Stays the same', 'Quadruples'],
            correctAnswer: 1,
            explanation: 'Since $c = f\\lambda$ is fixed, $\\lambda = c/f$. Doubling $f$ halves $\\lambda$.'
          }
        ]
      }
    }
  ]
};
