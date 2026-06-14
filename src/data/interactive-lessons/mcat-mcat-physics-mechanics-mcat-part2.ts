export const mcatPhysMechPart2Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm2-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 2 of 7 — Newton's Laws & Forces**

### Newton's Three Laws

1. **Inertia**: an object at rest stays at rest, and an object in motion stays in motion, unless acted on by a net force
2. **$F = ma$**: net force equals mass times acceleration
3. **Action-Reaction**: every force has an equal and opposite force on a DIFFERENT object

### Common MCAT Forces

| Force | Formula | Direction |
|-------|---------|-----------|
| Weight | $W = mg$ | Downward |
| Normal | $N$ (variable) | Perpendicular to the surface |
| Friction (static) | $f_s \\le \\mu_s N$ | Opposes potential motion |
| Friction (kinetic) | $f_k = \\mu_k N$ | Opposes actual motion |
| Tension | $T$ (variable) | Along the string |
| Spring | $F = -kx$ | Restoring (toward equilibrium) |

### Inclined Plane (MCAT FAVORITE)

- Component along the plane: $mg\\sin\\theta$
- Component perpendicular: $mg\\cos\\theta$ (equals the normal force if no other vertical forces)
- Friction on an incline: $f = \\mu mg\\cos\\theta$

### Force-Analysis Workflow

1. Isolate one object.
2. Draw every real force (weight, normal, tension, friction, applied).
3. Choose axes along the likely motion.
4. Write $\\sum F = ma$ per axis.`
    },
    {
      id: 'pm2-worked',
      type: 'text' as const,
      content: `### Worked Example — Block on a Rough Incline

A $4\\;\\text{kg}$ block sits on a $30°$ incline with kinetic friction coefficient $\\mu_k = 0.20$. Using $g = 10\\;\\text{m/s}^2$, find its acceleration down the slope once it is sliding.

**Step 1 — Force pulling it down the plane.**

$F_{\\parallel} = mg\\sin\\theta = (4)(10)\\sin 30° = 40 \\times 0.5 = 20\\;\\text{N}$

**Step 2 — Normal force and friction.**

$N = mg\\cos\\theta = (4)(10)\\cos 30° \\approx 40 \\times 0.87 = 34.6\\;\\text{N}$, so

$f_k = \\mu_k N = (0.20)(34.6) \\approx 6.9\\;\\text{N}$

**Step 3 — Net force along the plane, then Newton's second law.**

$F_{net} = 20 - 6.9 = 13.1\\;\\text{N}$, and $a = \\frac{F_{net}}{m} = \\frac{13.1}{4} \\approx 3.3\\;\\text{m/s}^2$

Notice friction opposes the motion (subtracts), and the mass appears in both terms — when friction is absent it cancels entirely, leaving $a = g\\sin\\theta$.`
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
            explanation: `On a frictionless incline, $a = g\\sin\\theta = 10\\sin 30° = 10(0.5) = 5\\;\\text{m/s}^2$. The mass cancels out.`
          },
          {
            question: `An elevator accelerates upward at $2\\;\\text{m/s}^2$. A 60 kg person inside feels an apparent weight of:`,
            options: [`720 N`, `600 N`, `480 N`, `588 N`],
            correctAnswer: 0,
            explanation: `Apparent weight $= m(g + a) = 60(10 + 2) = 720$ N. Accelerating up increases apparent weight; accelerating down decreases it.`
          },
          {
            question: `A box moves at constant speed on a rough surface. The net force is:`,
            options: [`Zero`, `Equal to $mg$`, `Equal to the normal force`, `Equal to friction only`],
            correctAnswer: 0,
            explanation: `Constant speed means zero acceleration, so by Newton's second law the net force must be zero even though several forces act.`
          },
          {
            question: `Which Newton law explains the recoil of a gun?`,
            options: [`First law`, `Second law`, `Third law`, `Law of gravitation`],
            correctAnswer: 2,
            explanation: `Action-reaction pairs are Newton's third law: the gun pushes the bullet forward, and the bullet pushes the gun backward with equal force.`
          },
          {
            question: `A horizontal force of $12\\;\\text{N}$ accelerates a $3\\;\\text{kg}$ block at $2\\;\\text{m/s}^2$ across a floor. The friction force is:`,
            options: [`$6\\;\\text{N}$`, `$12\\;\\text{N}$`, `$18\\;\\text{N}$`, `$0\\;\\text{N}$`],
            correctAnswer: 0,
            explanation: `Newton's second law along the floor: $F_{applied} - f = ma$, so $f = 12 - (3)(2) = 12 - 6 = 6\\;\\text{N}$.`
          },
          {
            question: `A $2\\;\\text{kg}$ object hangs at rest from a single rope. The tension in the rope is ($g = 10\\;\\text{m/s}^2$):`,
            options: [`20 N`, `2 N`, `10 N`, `0 N`],
            correctAnswer: 0,
            explanation: `At rest the net force is zero, so tension balances weight: $T = mg = (2)(10) = 20\\;\\text{N}$.`
          }
        ]
      }
    },
    {
      id: 'pm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $F_{net} = ma$: always draw a free-body diagram first
- Incline: $mg\\sin\\theta$ along the plane, $mg\\cos\\theta$ perpendicular
- Elevator problems: apparent weight $= m(g \\pm a)$
- Static friction is a maximum ($f_s \\le \\mu_s N$); kinetic friction is exact ($f_k = \\mu_k N$)
- If the speed is constant, the net force is zero even when several forces act`
    }
  ]
};
