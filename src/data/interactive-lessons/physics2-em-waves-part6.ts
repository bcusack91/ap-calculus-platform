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

1. **Identify** wave properties: $c = f\\\\lambda$, $E/B = c$
2. **Apply** Malus’s law for polarization: $I = I_0\\\\cos^2\\\\theta$
3. **Use** inverse-square law for intensity: $I = P/(4\\\\pi r^2)$
4. **Calculate** Doppler shifts: $\\\\Delta f/f = v/c$

### Common AP Mistakes
- Forgetting unpolarized light is halved by first polarizer
- Using $\\\\cos\\\\theta$ instead of $\\\\cos^2\\\\theta$ in Malus’s law
- Not using inverse-square for intensity vs distance`
    },    {
      id: 'electromagneticwaves-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Light passes through 3 polarizers: unpolarized → vertical → 45° → 90°. Final intensity (fraction of original)?',
            options: ['0', '$I_0/8$', '$I_0/4$', '$I_0/16$'],
            correctAnswer: 1,
            explanation: '$I_0/2 \\\\times \\\\cos^2(45°) \\\\times \\\\cos^2(45°) = I_0/2 \\\\times 1/2 \\\\times 1/2 = I_0/8$.'
          },
          {
            question: 'An EM wave in vacuum has $\\\\lambda = 0.1$ m. Its frequency is:',
            options: ['$3 \\\\times 10^7$ Hz', '$3 \\\\times 10^9$ Hz', '$3 \\\\times 10^{10}$ Hz', '$3 \\\\times 10^6$ Hz'],
            correctAnswer: 1,
            explanation: '$f = c/\\\\lambda = 3 \\\\times 10^8/0.1 = 3 \\\\times 10^9$ Hz (microwave).'
          },
          {
            question: 'The Poynting vector $\\\\vec{S}$ points in the direction of:',
            options: ['The electric field', 'The magnetic field', 'Energy propagation', 'The source'],
            correctAnswer: 2,
            explanation: '$\\\\vec{S} = \\\\vec{E} \\\\times \\\\vec{B}/\\\\mu_0$ points in the direction of energy flow.'
          }
        ]
      }
    },    {
      id: 'electromagneticwaves-p6-input',
      type: 'input-boxes' as const,
      content: `
**AP Practice** 🧮

A laser has power 5 mW and beam diameter 2 mm.

**1)** Beam area in m²? (use scientific notation like 3.14e-6)

**2)** Intensity of beam? (in W/m², round to nearest integer)

**3)** $E_{max}$ if $I = c\\\\epsilon_0 E_0^2/2$? (in V/m, round to nearest integer. $\\\\epsilon_0 = 8.85 \\\\times 10^{-12}$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.14e-6', '1592', '1095'],
        hint1: '$A = \\\\pi r^2 = \\\\pi(0.001)^2$',
        hint2: '$I = P/A$',
        hint3: '$E_0 = \\\\sqrt{2I/(c\\\\epsilon_0)}$',
        explanation: '1) $\\\\pi(10^{-3})^2 \\\\approx 3.14 \\\\times 10^{-6}$ m². 2) $0.005/3.14 \\\\times 10^{-6} \\\\approx 1592$ W/m². 3) $\\\\sqrt{2(1592)/(3 \\\\times 10^8 \\\\times 8.85 \\\\times 10^{-12})} \\\\approx 1095$ V/m.'
      }
    }
  ]
};
