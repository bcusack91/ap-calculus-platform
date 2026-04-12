export const physics2EmWavesPart2Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p2-intro',
      type: 'text' as const,
      content: `# ⚡ Energy & Intensity of EM Waves

**Part 2 of 7 — Power and Intensity**

---

### Intensity

Intensity is the power per unit area carried by the wave:

$$I = \\\\frac{P}{A} = \\\\frac{P}{4\\\\pi r^2}$$

For a point source radiating uniformly, intensity follows the **inverse-square law**.

### Energy Density

$$u = \\\\frac{1}{2}\\\\epsilon_0 E^2 + \\\\frac{1}{2\\\\mu_0}B^2 = \\\\epsilon_0 E^2$$

The electric and magnetic field energies are equal!

### Intensity and Field Amplitudes

$$I = \\\\frac{c\\\\epsilon_0 E_0^2}{2} = \\\\frac{E_0 B_0}{2\\\\mu_0}$$

---

### Radiation Pressure

Light exerts pressure on surfaces:
- **Absorbed:** $P_{rad} = I/c$
- **Reflected:** $P_{rad} = 2I/c$`
    },    {
      id: 'electromagneticwaves-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'If you double the distance from a point source, intensity:',
            options: ['Doubles', 'Halves', 'Quarters', 'Stays the same'],
            correctAnswer: 2,
            explanation: 'Inverse-square law: $I \\\\propto 1/r^2$. Double $r$ → $I/4$.'
          },
          {
            question: 'Radiation pressure is greater for:',
            options: ['Absorbed light', 'Reflected light', 'Both are equal', 'Neither exerts pressure'],
            correctAnswer: 1,
            explanation: 'Reflected light: $P = 2I/c$ (double momentum change). Absorbed: $P = I/c$.'
          },
          {
            question: 'The energy in an EM wave is carried:',
            options: ['Only by the electric field', 'Only by the magnetic field', 'Equally by both E and B fields', 'By neither — it travels separately'],
            correctAnswer: 2,
            explanation: 'Electric and magnetic field energies are equal: $u_E = u_B$.'
          }
        ]
      }
    },    {
      id: 'electromagneticwaves-p2-input',
      type: 'input-boxes' as const,
      content: `
**Intensity Calculations** 🧮

A 100 W light bulb radiates uniformly.

**1)** Intensity at 2 m distance? (in W/m², round to 1 decimal)

**2)** At what distance is intensity 1 W/m²? (in meters, round to 1 decimal)

**3)** If intensity is 500 W/m² and light is absorbed, radiation pressure? (answer in scientific notation like 1.67e-6)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.99', '2.8', '1.67e-6'],
        hint1: '$I = P/(4\\\\pi r^2) = 100/(4\\\\pi \\\\cdot 4)$',
        hint2: '$r = \\\\sqrt{P/(4\\\\pi I)}$',
        hint3: '$P_{rad} = I/c$',
        explanation: '1) $100/(16\\\\pi) \\\\approx 1.99$ W/m². 2) $\\\\sqrt{100/(4\\\\pi)} \\\\approx 2.8$ m. 3) $500/(3 \\\\times 10^8) \\\\approx 1.67 \\\\times 10^{-6}$ Pa.'
      }
    }
  ]
};
