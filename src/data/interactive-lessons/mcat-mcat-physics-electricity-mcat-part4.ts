export const mcatPhysElecPart4Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe4-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 4 of 7 — Optics: Reflection & Refraction**

### Law of Reflection

$$\\theta_{incident} = \\theta_{reflected}$$

(Angles measured from the normal!)

### Snell's Law (Refraction)

$$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$$

- $n$ = index of refraction ($n = c/v$, always $\\ge 1$)
- Light bends TOWARD normal when entering denser medium ($n_2 > n_1$)
- Light bends AWAY from normal when entering less dense medium

### Total Internal Reflection

$$\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_1 > n_2)$$

- Only occurs when going from denser to less dense medium
- Angle of incidence must exceed the critical angle
- Applications: fiber optics, diamond sparkle`
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
            explanation: `$\\sin\\theta_c = n_2/n_1 = 1.00/1.33 = 0.75$. $\\theta_c = \\sin^{-1}(0.75) \\approx 49°$. Any light hitting the water-air surface at $> 49°$ from normal undergoes total internal reflection.`
          }
        ]
      }
    },
    {
      id: 'pe4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Snell's law: $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$
- Entering denser medium → bend toward normal (slower speed)
- Total internal reflection: only denser → less dense, beyond critical angle
- All angles measured from the NORMAL, not the surface!`
    }
  ]
};
