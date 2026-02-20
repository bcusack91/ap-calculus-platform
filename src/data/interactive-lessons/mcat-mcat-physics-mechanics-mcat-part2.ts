export const mcatPhysMechPart2Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm2-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 2 of 7 — Newton's Laws & Forces**

### Newton's Three Laws

1. **Inertia**: An object at rest stays at rest; an object in motion stays in motion (unless acted on by a net force)
2. **$F = ma$**: Net force equals mass times acceleration
3. **Action-Reaction**: Every force has an equal and opposite force (on a DIFFERENT object!)

### Common MCAT Forces

| Force | Formula | Direction |
|-------|---------|-----------|
| Weight | $W = mg$ | Downward |
| Normal | $N$ (variable) | Perpendicular to surface |
| Friction (static) | $f_s \\le \\mu_s N$ | Opposes potential motion |
| Friction (kinetic) | $f_k = \\mu_k N$ | Opposes actual motion |
| Tension | $T$ (variable) | Along the string |
| Spring | $F = -kx$ | Restoring (toward equilibrium) |

### Inclined Plane (MCAT FAVORITE)

- Component along plane: $mg\\sin\\theta$
- Component perpendicular: $mg\\cos\\theta$ (= Normal force if no other vertical forces)
- Friction on incline: $f = \\mu mg\\cos\\theta$`
    },
    {
      id: 'pm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Forces & Newton's Laws** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 5 kg block sits on a frictionless 30° incline. The acceleration down the plane is ($g = 10\\;\\text{m/s}^2$):`,
            options: [`$5\\;\\text{m/s}^2$ ($g\\sin 30° = 10 \\times 0.5$)`, `$10\\;\\text{m/s}^2$`, `$8.66\\;\\text{m/s}^2$`, `$2.5\\;\\text{m/s}^2$`],
            correctAnswer: 0,
            explanation: `On a frictionless incline: $a = g\\sin\\theta = 10\\sin 30° = 10(0.5) = 5\\;\\text{m/s}^2$. Note: mass cancels out!`
          },
          {
            question: `An elevator accelerates upward at $2\\;\\text{m/s}^2$. A 60 kg person inside feels an apparent weight of:`,
            options: [`720 N`, `600 N`, `480 N`, `588 N`],
            correctAnswer: 0,
            explanation: `Apparent weight = $m(g + a) = 60(10 + 2) = 720$ N. Accelerating up increases apparent weight; accelerating down decreases it.`
          }
        ]
      }
    },
    {
      id: 'pm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $F_{net} = ma$: always draw a free body diagram first!
- Incline: $mg\\sin\\theta$ along the plane, $mg\\cos\\theta$ perpendicular
- Elevator problems: apparent weight = $m(g \\pm a)$
- Static friction is a maximum ($f_s \\le \\mu_s N$); kinetic friction is exact ($f_k = \\mu_k N$)`
    }
  ]
};
