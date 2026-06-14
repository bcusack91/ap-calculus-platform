export const physCEMMaxwellPart7Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 Maxwell's Equations Review

**Part 7 of 7 — Final Summary**

---

### The Big Picture

Maxwell's four equations describe ALL of classical electromagnetism:

1. **Gauss (E):** Charges → E fields
2. **Gauss (B):** No magnetic monopoles
3. **Faraday:** Changing B → E
4. **Ampere-Maxwell:** Currents + changing E → B

Together they predict EM waves traveling at $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$.

> 🔑 "Maxwell's equations are the most beautiful equations in physics." — Richard Feynman`
    },
    {
      id: 'physicsc-maxwell-equations-em-p7-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Synthesis: From Fields to Power

A laser beam in vacuum has peak electric field $E_0 = 2.0 \\times 10^3 \\text{ N/C}$ and a circular cross-section of radius $r = 1.0 \\text{ mm}$. Find its average intensity and total power.

**Step 1 — Average intensity from $E_0$.** Using the Poynting time-average,

$I = \\frac{1}{2}c\\varepsilon_0 E_0^2 = \\frac{1}{2}(3.0 \\times 10^8)(8.85 \\times 10^{-12})(2.0 \\times 10^3)^2 \\approx 5.3 \\times 10^3 \\text{ W/m}^2$

**Step 2 — Beam cross-sectional area.** A circle of radius $r$:

$A = \\pi r^2 = \\pi (1.0 \\times 10^{-3})^2 \\approx 3.14 \\times 10^{-6} \\text{ m}^2$

**Step 3 — Power = intensity × area.**

$\\mathcal{P} = I A = (5.3 \\times 10^3)(3.14 \\times 10^{-6}) \\approx 1.7 \\times 10^{-2} \\text{ W}$

> 🔑 This single chain — $E_0 \\to I \\to \\mathcal{P}$ — ties together the field, energy-density, and Poynting-vector ideas from the whole unit.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many Maxwell\'s equations are there?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 2,
            explanation: 'There are exactly four Maxwell\'s equations, together covering all of classical electromagnetism.'
          },
          {
            question: 'Which pair of equations together imply that a changing field of one type regenerates the other, sustaining an EM wave?',
            options: ['The two Gauss laws', 'Faraday and Ampere-Maxwell', 'Gauss (E) and Faraday', 'Gauss (B) and Ampere-Maxwell'],
            correctAnswer: 1,
            explanation: 'Faraday (changing $\\vec{B} \\to \\vec{E}$) and Ampere-Maxwell (changing $\\vec{E} \\to \\vec{B}$) feed each other, producing a self-propagating wave.'
          },
          {
            question: 'The quantity $\\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$ evaluates to approximately:',
            options: ['$9 \\times 10^9$', '$3 \\times 10^8$', '$6.67 \\times 10^{-11}$', '$1.6 \\times 10^{-19}$'],
            correctAnswer: 1,
            explanation: 'It equals the speed of light, $c \\approx 3 \\times 10^8$ m/s — Maxwell\'s landmark prediction.'
          },
          {
            question: 'A wave\'s average intensity is $I = \\frac{1}{2}c\\varepsilon_0 E_0^2$. The total power through an area $A$ is:',
            options: ['$I/A$', '$IA$', '$I + A$', '$Ic$'],
            correctAnswer: 1,
            explanation: 'Power equals intensity (power per area) times the area: $\\mathcal{P} = IA$.'
          },
          {
            question: 'Which statement best summarizes Maxwell\'s contribution beyond the earlier laws?',
            options: ['He proved gravity is electromagnetic', 'He added displacement current, unifying the laws and predicting light as an EM wave', 'He discovered the electron', 'He measured $G$'],
            correctAnswer: 1,
            explanation: 'Adding the displacement-current term made the equations self-consistent and revealed that oscillating fields propagate as light at speed $c$.'
          }
        ]
      }
    }
  ]
};
