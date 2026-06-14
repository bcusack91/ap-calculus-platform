export const physCEMMaxwellPart5Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p5-intro',
      type: 'text' as const,
      content: `# 💡 Energy and Momentum of EM Waves

**Part 5 of 7 — Poynting Vector and Radiation Pressure**

---

### Poynting Vector

$\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$

$|\\vec{S}|$ = power per unit area (W/m²)

Average intensity: $I = \\frac{1}{2}c\\varepsilon_0 E_0^2 = \\frac{E_0 B_0}{2\\mu_0}$

---

### Radiation Pressure

| Surface | Pressure |
|---------|----------|
| Perfect absorber | $P = \\frac{I}{c}$ |
| Perfect reflector | $P = \\frac{2I}{c}$ |

EM waves carry momentum: $p = \\frac{U}{c}$ (for absorbed radiation)

> 🔑 Light exerts pressure — this is the basis of solar sails and laser propulsion.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p5-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Intensity and Radiation Force on a Solar Sail

Sunlight near Earth has intensity $I = 1.36 \\times 10^3 \\text{ W/m}^2$. A reflective solar sail of area $A = 100 \\text{ m}^2$ faces the Sun. Find the force on it and the peak electric field of the sunlight.

**Step 1 — Radiation pressure on a reflector.** A perfect reflector reverses the photon momentum, so

$P = \\frac{2I}{c} = \\frac{2(1.36 \\times 10^3)}{3.0 \\times 10^8} \\approx 9.1 \\times 10^{-6} \\text{ Pa}$

**Step 2 — Force from pressure.** Multiply by the sail area:

$F = P A = (9.1 \\times 10^{-6})(100) \\approx 9.1 \\times 10^{-4} \\text{ N}$

**Step 3 — Peak field from intensity.** Invert $I = \\frac{1}{2}c\\varepsilon_0 E_0^2$:

$E_0 = \\sqrt{\\frac{2I}{c\\varepsilon_0}} = \\sqrt{\\frac{2(1.36 \\times 10^3)}{(3.0 \\times 10^8)(8.85 \\times 10^{-12})}} \\approx 1.0 \\times 10^3 \\text{ N/C}$

> 🔑 Radiation force is tiny but continuous; over months it can meaningfully accelerate a low-mass spacecraft.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'EM radiation pressure on a perfect reflector is:',
            options: ['$\\frac{I}{c}$', '$\\frac{2I}{c}$', '$\\frac{I}{c^2}$', 'Zero'],
            correctAnswer: 1,
            explanation: 'Reflected light reverses its momentum, transferring twice as much to the surface → pressure $= \\frac{2I}{c}$.'
          },
          {
            question: 'The Poynting vector $\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$ physically represents:',
            options: ['Energy stored per volume', 'Power transported per unit area', 'Force per unit charge', 'Magnetic flux'],
            correctAnswer: 1,
            explanation: '$|\\vec{S}|$ is the instantaneous power per unit area (W/m²), and its direction is the direction of energy flow.'
          },
          {
            question: 'If the amplitude $E_0$ of an EM wave is doubled, its intensity $I = \\frac{1}{2}c\\varepsilon_0 E_0^2$ becomes:',
            options: ['Doubled', 'Halved', 'Four times larger', 'Unchanged'],
            correctAnswer: 2,
            explanation: 'Intensity is proportional to $E_0^2$, so doubling the field amplitude multiplies the intensity by $2^2 = 4$.'
          },
          {
            question: 'A perfectly absorbing black panel and a perfectly reflecting mirror receive the same intensity. The mirror feels:',
            options: ['Half the force', 'The same force', 'Twice the force', 'No force'],
            correctAnswer: 2,
            explanation: 'An absorber feels $P = I/c$; a reflector feels $P = 2I/c$. The mirror feels twice the radiation force.'
          },
          {
            question: 'EM waves carry momentum. For energy $U$ absorbed by a surface, the momentum delivered is:',
            options: ['$p = Uc$', '$p = \\frac{U}{c}$', '$p = \\frac{U}{c^2}$', '$p = U$'],
            correctAnswer: 1,
            explanation: 'For absorbed radiation, $p = U/c$. This relation underlies radiation pressure and solar-sail propulsion.'
          },
          {
            question: 'The average intensity can be written as $I = \\frac{E_0 B_0}{2\\mu_0}$. This follows from time-averaging $\\vec{S}$, which introduces a factor of:',
            options: ['$1$', '$\\frac{1}{2}$', '$2$', '$\\pi$'],
            correctAnswer: 1,
            explanation: 'Averaging $\\sin^2$ over a cycle gives $\\tfrac{1}{2}$, so the time-averaged Poynting magnitude is $\\frac{E_0 B_0}{2\\mu_0}$.'
          }
        ]
      }
    }
  ]
};
