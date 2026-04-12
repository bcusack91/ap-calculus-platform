export const physics2QuantumPart1Data = {
  topicSlug: 'quantum-phenomena',
  sections: [
    {
      id: 'quantumphenomena-p1-intro',
      type: 'text' as const,
      content: `# ✨ Quantum Phenomena

**Part 1 of 7 — Photoelectric Effect**

---

### The Photoelectric Effect

When light shines on a metal surface, electrons may be ejected.

### Key Equation

$$E_{photon} = hf = \\\\phi + KE_{max}$$

$$KE_{max} = hf - \\\\phi$$

| Symbol | Meaning |
|--------|---------|
| $h$ | Planck’s constant = $6.63 \\\\times 10^{-34}$ J·s |
| $f$ | Frequency of light |
| $\\\\phi$ | Work function (minimum energy to eject electron) |
| $KE_{max}$ | Maximum kinetic energy of ejected electron |

---

### Threshold Frequency

$$f_0 = \\\\frac{\\\\phi}{h}$$

Below this frequency, **no electrons are ejected** regardless of intensity.

### Key Observations
- Increasing intensity → more electrons (higher current), NOT more KE
- Increasing frequency → higher $KE_{max}$
- Below threshold: no emission at any intensity

> 🔑 The photoelectric effect proved light has particle properties (photons).`
    },
    {
      id: 'quantumphenomena-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes photoelectric effect?',
            options: ['A core AP Physics 2 concept', 'Not tested on the AP exam', 'Only relevant for Physics C', 'A concept from chemistry'],
            correctAnswer: 0,
            explanation: 'Photoelectric Effect is a fundamental concept tested on the AP Physics 2 exam.'
          }
        ]
      }
    }
  ]
};
