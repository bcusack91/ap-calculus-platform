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

| Concept | Equation |
|---------|----------|
| Wave speed | $c = f\\\\lambda = 3 \\\\times 10^8$ m/s |
| E-B relation | $E = cB$ |
| Intensity | $I = P/(4\\\\pi r^2)$ |
| Malus’s law | $I = I_0\\\\cos^2\\\\theta$ |
| Doppler | $\\\\Delta f/f \\\\approx v/c$ |
| Radiation pressure (absorbed) | $P = I/c$ |
| Radiation pressure (reflected) | $P = 2I/c$ |

### What to Remember for the AP Exam
- All EM waves travel at $c$ in vacuum
- EM waves are transverse
- E and B are perpendicular and in phase
- Intensity follows inverse-square law for point sources`
    },    {
      id: 'electromagneticwaves-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which EM property changes when light enters glass from vacuum?',
            options: ['Frequency', 'Wavelength and speed', 'All of the above', 'None — EM waves are unaffected by medium'],
            correctAnswer: 1,
            explanation: 'Frequency stays constant; speed decreases ($v = c/n$) and wavelength decreases ($\\\\lambda = \\\\lambda_0/n$).'
          },
          {
            question: 'Three polarizers at 0°, 30°, 60°. Unpolarized light enters. What fraction emerges?',
            options: ['$9/32$', '$3/8$', '$3/32$', '$27/128$'],
            correctAnswer: 0,
            explanation: '$I_0/2 \\\\times \\\\cos^2(30°) \\\\times \\\\cos^2(30°) = I_0/2 \\\\times 3/4 \\\\times 3/4 = 9I_0/32$.'
          },
          {
            question: 'A source at 4 m has intensity 100 W/m². At 8 m, intensity is:',
            options: ['50 W/m²', '25 W/m²', '200 W/m²', '12.5 W/m²'],
            correctAnswer: 1,
            explanation: 'Inverse-square: double distance → 1/4 intensity. $100/4 = 25$ W/m².'
          }
        ]
      }
    },    {
      id: 'electromagneticwaves-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

**1)** Wavelength of green light ($f = 5.5 \\\\times 10^{14}$ Hz)? (in nm, round to nearest integer)

**2)** After passing through two polarizers (unpolarized, then at 60° to first), what fraction of original intensity remains? (give as a fraction like 1/8)

**3)** EM wave speed in glass ($n = 1.5$)? (in m/s, like 2e8)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['545', '1/8', '2e8'],
        hint1: '$\\\\lambda = c/f$, then convert to nm',
        hint2: '$I_0/2 \\\\times \\\\cos^2(60°) = I_0/2 \\\\times 1/4$',
        hint3: '$v = c/n$',
        explanation: '1) $3 \\\\times 10^8/5.5 \\\\times 10^{14} \\\\approx 545$ nm. 2) $1/2 \\\\times 1/4 = 1/8$. 3) $3 \\\\times 10^8/1.5 = 2 \\\\times 10^8$ m/s.'
      }
    }
  ]
};
