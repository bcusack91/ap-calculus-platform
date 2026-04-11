export const physCEMMaxwellPart1Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p1-intro',
      type: 'text' as const,
      content: `# 🌐 Maxwell’s Equations

**Part 1 of 7 — The Four Laws of Electromagnetism**

---

### The Four Equations

| # | Name | Integral Form |
|---|------|--------------|
| 1 | Gauss’s Law (E) | $\\oint \\vec{E} \\cdot d\\vec{A} = Q_{enc}/\\epsilon_0$ |
| 2 | Gauss’s Law (B) | $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ |
| 3 | Faraday’s Law | $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_B/dt$ |
| 4 | Ampere-Maxwell | $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0(I + \\epsilon_0 d\\Phi_E/dt)$ |

---

### Physical Meaning

| Equation | Says... |
|----------|---------|
| Gauss (E) | Electric charges create electric fields |
| Gauss (B) | No magnetic monopoles |
| Faraday | Changing B creates E |
| Ampere-Maxwell | Currents AND changing E create B |

> 🔑 Maxwell’s equations unify electricity and magnetism and predict electromagnetic waves.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which Maxwell equation says there are no magnetic monopoles?',
            options: ['Gauss’s Law for E', 'Gauss’s Law for B', 'Faraday’s Law', 'Ampere-Maxwell'],
            correctAnswer: 1,
            explanation: '$\\oint \\vec{B} \\cdot d\\vec{A} = 0$ — no net magnetic charge exists.'
          },
          {
            question: 'Maxwell’s addition to Ampere’s law was:',
            options: ['Magnetic current', 'Displacement current ($\\epsilon_0 d\\Phi_E/dt$)', 'Gravitational term', 'Quantum correction'],
            correctAnswer: 1,
            explanation: 'Maxwell added the displacement current term $\\epsilon_0 d\\Phi_E/dt$ to account for changing electric flux.'
          }
        ]
      }
    }
  ]
};
