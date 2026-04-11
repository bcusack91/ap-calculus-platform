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
      id: 'physicsc-maxwell-equations-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'All EM waves travel at the same speed in vacuum because:',
            options: ['They have the same frequency', 'They have the same wavelength', 'Maxwell’s equations predict a unique speed', 'They are all visible'],
            correctAnswer: 2,
            explanation: '$c = 1/\\sqrt{\\mu_0\\epsilon_0}$ depends only on constants of nature, not on frequency or wavelength.'
          }
        ]
      }
    }
  ]
};
