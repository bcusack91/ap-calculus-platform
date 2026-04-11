export const physCOscillationsPart7Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p7-intro',
      type: 'text' as const,
      content: `# 📋 Oscillations Review

**Part 7 of 7 — Comprehensive Summary**

---

### Master Formula Sheet

| Concept | Formula |
|---------|---------|
| SHM position | $x(t) = A\\cos(\\omega t + \\phi)$ |
| Angular frequency | $\\omega = \\sqrt{k/m}$ (spring), $\\omega = \\sqrt{g/L}$ (pendulum) |
| Total energy | $E = \\frac{1}{2}kA^2$ |
| Damped SHM | $x(t) = Ae^{-\\gamma t}\\cos(\\omega' t)$ |
| Resonance | Max amplitude at $\\omega_d \\approx \\omega_0$ |

> 🔑 SHM = any system with $F \\propto -x$. Recognize the pattern, then apply the formulas.`
    },
    {
      id: 'physicsc-oscillations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is NOT an example of SHM?',
            options: ['Mass on spring', 'Simple pendulum (small angle)', 'Bouncing ball', 'Torsional oscillator'],
            correctAnswer: 2,
            explanation: 'A bouncing ball does not have a restoring force proportional to displacement — it is not SHM.'
          },
          {
            question: 'If you take a pendulum to the Moon (gravity $g/6$), the period:',
            options: ['Decreases by 6', 'Increases by $\\sqrt{6}$', 'Stays the same', 'Doubles'],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{L/g}$. Reducing $g$ by 6 multiplies $T$ by $\\sqrt{6}$.'
          }
        ]
      }
    }
  ]
};
