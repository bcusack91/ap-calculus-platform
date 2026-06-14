export const mcatPhysElecPart4Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe4-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 4 of 7 — Optics: Reflection & Refraction**

### Law of Reflection

$\\theta_{incident} = \\theta_{reflected}$ (angles measured from the normal)

### Snell's Law (Refraction)

$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$

- $n$ = index of refraction, defined by $n = c/v$ (always $\\ge 1$)
- Light bends TOWARD the normal when entering a denser medium ($n_2 > n_1$)
- Light bends AWAY from the normal when entering a less dense medium

### Total Internal Reflection

$\\sin\\theta_c = \\frac{n_2}{n_1}$ (requires $n_1 > n_2$)

- Only occurs going from a denser to a less dense medium
- The angle of incidence must EXCEED the critical angle $\\theta_c$
- Applications: fiber optics, the sparkle of diamond, endoscopes

A higher refractive index means a lower light speed in that medium, since $n = c/v$.`
    },
    {
      id: 'pe4-worked',
      type: 'text' as const,
      content: `### Worked Example — Snell's Law at a Water Surface

Light travels from air ($n_1 = 1.00$) into water ($n_2 = 1.33$), striking the surface at $\\theta_1 = 30°$ from the normal. Find the refraction angle $\\theta_2$.

**Step 1 — Write Snell's law.**

$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$

**Step 2 — Solve for $\\sin\\theta_2$.**

$\\sin\\theta_2 = \\frac{n_1\\sin\\theta_1}{n_2} = \\frac{(1.00)\\sin 30°}{1.33} = \\frac{(1.00)(0.50)}{1.33} \\approx 0.376$

**Step 3 — Take the inverse sine.**

$\\theta_2 = \\sin^{-1}(0.376) \\approx 22°$

Since $\\theta_2 < \\theta_1$, the ray bent TOWARD the normal — exactly what we expect when light enters a denser medium. On the MCAT, you usually only need this qualitative bending direction, not the exact angle.`
    },
    {
      id: 'pe4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Optics: Refraction** 🎯`,
      exercise: {
        questions: [
          {
            question: `Light passes from water ($n = 1.33$) into air ($n = 1.00$). The critical angle for total internal reflection is approximately:`,
            options: [`49° ($\\sin^{-1}(1/1.33) \\approx 49°$)`, `90°`, `33°`, `75°`],
            correctAnswer: 0,
            explanation: `$\\sin\\theta_c = n_2/n_1 = 1.00/1.33 = 0.75$, so $\\theta_c = \\sin^{-1}(0.75) \\approx 49°$. Any light hitting the water-air surface at more than $49°$ from the normal undergoes total internal reflection.`
          },
          {
            question: `Light enters glass from air. It will:`,
            options: [`Speed up and bend away from the normal`, `Slow down and bend toward the normal`, `Keep the same speed and direction`, `Speed up and bend toward the normal`],
            correctAnswer: 1,
            explanation: `Glass has a higher refractive index than air, so the light's speed decreases and the ray bends toward the normal.`
          },
          {
            question: `The speed of light in a medium with $n = 1.5$ is approximately:`,
            options: [`$2.0 \\times 10^8\\;\\text{m/s}$`, `$3.0 \\times 10^8\\;\\text{m/s}$`, `$4.5 \\times 10^8\\;\\text{m/s}$`, `$1.5 \\times 10^8\\;\\text{m/s}$`],
            correctAnswer: 0,
            explanation: `$n = c/v$, so $v = c/n = (3.0 \\times 10^8)/1.5 = 2.0 \\times 10^8\\;\\text{m/s}$. Light always slows in a medium with $n > 1$.`
          },
          {
            question: `Total internal reflection can occur when light travels from:`,
            options: [`Air into glass`, `Glass into air, beyond the critical angle`, `Any medium into any other`, `Vacuum into water`],
            correctAnswer: 1,
            explanation: `Total internal reflection requires going from a higher-index (denser) medium to a lower-index one AND an incidence angle beyond the critical angle. Glass-to-air qualifies; air-to-glass never does.`
          },
          {
            question: `When light passes from one medium into another, which property never changes?`,
            options: [`Speed`, `Wavelength`, `Frequency`, `Direction`],
            correctAnswer: 2,
            explanation: `Frequency is set by the source and is conserved across a boundary. Speed changes (by $n$), and since $v = f\\lambda$ with $f$ fixed, wavelength changes too.`
          },
          {
            question: `If the angle of incidence increases (but stays below the critical angle), the angle of refraction:`,
            options: [`Increases`, `Decreases`, `Stays constant`, `Becomes zero`],
            correctAnswer: 0,
            explanation: `By Snell's law, $\\sin\\theta_2 \\propto \\sin\\theta_1$ for fixed indices. A larger incidence angle produces a larger refraction angle.`
          }
        ]
      }
    },
    {
      id: 'pe4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Snell's law: $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$
- Entering a denser medium → bend toward the normal (slower speed, $v = c/n$)
- Total internal reflection: only denser → less dense, beyond the critical angle
- Frequency is conserved across a boundary; speed and wavelength change
- All angles are measured from the NORMAL, not the surface`
    }
  ]
};
