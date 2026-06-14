export const physCEMMaxwellPart3Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p3-intro',
      type: 'text' as const,
      content: `# 🌊 Electromagnetic Waves

**Part 3 of 7 — Light as an EM Wave**

---

### EM Wave Properties

$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3.0 \\times 10^8 \\text{ m/s}$

| Property | Value |
|----------|-------|
| Speed | $c = 3 \\times 10^8$ m/s (in vacuum) |
| $\\vec{E} \\perp \\vec{B}$ | E and B are perpendicular |
| $\\vec{E} \\perp \\vec{v}$ | Transverse wave |
| $E/B = c$ | Ratio of field amplitudes |

---

### Energy in EM Waves

Energy density: $u = \\varepsilon_0 E^2 = \\frac{B^2}{\\mu_0}$

Intensity: $I = \\frac{1}{2}c\\varepsilon_0 E_0^2$

Poynting vector: $\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$

> 🔑 Light is an electromagnetic wave — predicted by Maxwell's equations before being experimentally confirmed by Hertz.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p3-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Speed from $\\mu_0$ and $\\varepsilon_0$

Maxwell's equations predict that a plane wave $E(x,t) = E_0 \\sin(kx - \\omega t)$ must satisfy the wave equation $\\frac{\\partial^2 E}{\\partial x^2} = \\mu_0\\varepsilon_0 \\frac{\\partial^2 E}{\\partial t^2}$. Show the propagation speed and evaluate it.

**Step 1 — Take the spatial derivatives.** Differentiating twice in $x$ pulls down $k^2$:

$\\frac{\\partial^2 E}{\\partial x^2} = -k^2 E_0 \\sin(kx - \\omega t)$

**Step 2 — Take the time derivatives.** Differentiating twice in $t$ pulls down $\\omega^2$:

$\\frac{\\partial^2 E}{\\partial t^2} = -\\omega^2 E_0 \\sin(kx - \\omega t)$

**Step 3 — Match coefficients.** Substituting into the wave equation gives $k^2 = \\mu_0\\varepsilon_0\\,\\omega^2$, so the speed is

$v = \\frac{\\omega}{k} = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} = \\frac{1}{\\sqrt{(4\\pi \\times 10^{-7})(8.85 \\times 10^{-12})}} \\approx 3.0 \\times 10^8 \\text{ m/s}$

> 🔑 The wave speed contains only the universal constants $\\mu_0$ and $\\varepsilon_0$ — so every EM wave in vacuum travels at $c$, independent of frequency.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The speed of light in vacuum equals:',
            options: ['$\\sqrt{\\mu_0 \\varepsilon_0}$', '$\\frac{\\mu_0}{\\varepsilon_0}$', '$\\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$', '$\\frac{\\varepsilon_0}{\\mu_0}$'],
            correctAnswer: 2,
            explanation: '$c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$. This was Maxwell\'s great prediction, matching the measured speed of light.'
          },
          {
            question: 'In a vacuum EM wave, the ratio of the field amplitudes $E_0/B_0$ equals:',
            options: ['$1$', '$c$', '$c^2$', '$1/c$'],
            correctAnswer: 1,
            explanation: 'At every instant $E = cB$, so the amplitude ratio is $E_0/B_0 = c \\approx 3 \\times 10^8$ m/s.'
          },
          {
            question: 'An EM wave has $E_0 = 600 \\text{ N/C}$. Its magnetic field amplitude $B_0$ is approximately:',
            options: ['$2.0 \\times 10^{-6}$ T', '$1.8 \\times 10^{11}$ T', '$600$ T', '$5.0 \\times 10^{-3}$ T'],
            correctAnswer: 0,
            explanation: '$B_0 = E_0/c = 600 / (3.0 \\times 10^8) = 2.0 \\times 10^{-6}$ T.'
          },
          {
            question: 'The two equal expressions for the energy density of an EM wave are:',
            options: ['$u = \\varepsilon_0 E^2$ and $u = \\frac{B^2}{\\mu_0}$', '$u = E^2$ and $u = B^2$', '$u = \\frac{1}{2}\\mu_0 E$ and $u = \\varepsilon_0 B$', '$u = c E$ and $u = c B$'],
            correctAnswer: 0,
            explanation: 'The instantaneous energy is shared equally between fields; using $E = cB$ and $c^2 = 1/(\\mu_0\\varepsilon_0)$ shows $\\varepsilon_0 E^2 = B^2/\\mu_0$.'
          },
          {
            question: 'In a plane EM wave traveling in the $+x$ direction, $\\vec{E}$ and $\\vec{B}$ are oriented so that:',
            options: ['Both point along $+x$', '$\\vec{E} \\times \\vec{B}$ points along $+x$', '$\\vec{E} \\times \\vec{B}$ points along $-x$', 'They are parallel to each other'],
            correctAnswer: 1,
            explanation: 'The Poynting vector $\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$ gives the propagation direction, so $\\vec{E} \\times \\vec{B}$ points along $+x$ for a wave moving in $+x$.'
          },
          {
            question: 'A red light wave and a gamma ray both travel through vacuum. Which travels faster?',
            options: ['Red light', 'The gamma ray', 'They travel at the same speed $c$', 'It depends on intensity'],
            correctAnswer: 2,
            explanation: 'All EM waves in vacuum travel at $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ regardless of frequency or wavelength.'
          }
        ]
      }
    }
  ]
};
