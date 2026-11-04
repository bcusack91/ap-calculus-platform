export const mcatMechForcesPart2Data = {
  topicSlug: 'mcat-physics-mechanics-forces-newton-laws-mcat',
  sections: [
    {
      id: 'frc2-intro',
      type: 'text' as const,
      content: `# Forces & Newton's Laws

**Part 2 of 4 — Friction & Inclined Planes**

### Two Kinds of Friction

| | Static friction $f_s$ | Kinetic friction $f_k$ |
|---|---|---|
| When | Surfaces NOT sliding | Surfaces sliding |
| Law | $f_s \\leq \\mu_s N$ (adjusts as needed) | $f_k = \\mu_k N$ (fixed value) |
| Magnitude | Whatever balances the applied force, up to a maximum | Constant while sliding |

Key facts the MCAT tests:

- $\\mu_s > \\mu_k$ for a given pair of surfaces — it takes more force to *start* sliding than to *keep* sliding.
- Static friction is an **inequality**: push a heavy crate gently and friction matches your push exactly. Only at the verge of slipping does $f_s = \\mu_s N$.
- Kinetic friction is independent of sliding **speed** and of contact **area** — it depends only on $\\mu_k$ and the normal force.
- Friction depends on $N$, not directly on weight. Press down on a block and $N$ (hence friction) grows; lift up on it and both shrink.
- An angled pull changes $N$ too. Pull with force $F$ at angle $\\theta$ above the horizontal and the rope's upward component $F\\sin\\theta$ lifts part of the weight: $N = mg - F\\sin\\theta$.

### Inclined Planes

Tilt the axes so $x$ runs along the incline. Weight $mg$ splits into:

- Along the incline (pulling downhill): $mg\\sin\\theta$
- Perpendicular (into the surface): $mg\\cos\\theta$

With no other forces perpendicular to the incline, $N = mg\\cos\\theta$ — **less** than $mg$. Two limiting checks: at $\\theta = 0$, the downhill pull is $0$ and $N = mg$; at $\\theta = 90^\\circ$, the pull is the full $mg$ and $N = 0$.

**Angle-of-slip trick:** a block on the verge of sliding at angle $\\theta$ gives $\\mu_s = \\tan\\theta$; a block sliding down at *constant velocity* gives $\\mu_k = \\tan\\theta$. Both follow from setting the downhill pull equal to friction.`
    },
    {
      id: 'frc2-worked',
      type: 'text' as const,
      content: `### Worked Example — Sliding Down a 37-Degree Ramp

**Problem.** A $10\\;\\text{kg}$ crate slides down a $37^\\circ$ loading ramp with $\\mu_k = 0.25$. ($g = 10\\;\\text{m/s}^2$, $\\sin 37^\\circ \\approx 0.6$, $\\cos 37^\\circ \\approx 0.8$)

- **(a)** What are the components of the crate's weight along and into the ramp?
- **(b)** What are the normal force and the kinetic friction force?
- **(c)** What is the crate's acceleration down the ramp?
- **(d)** Would a heavier crate on the same ramp slide with a larger acceleration?

**(a) Resolve the weight.** $mg = 100\\;\\text{N}$:

Downhill: $mg\\sin\\theta = 100(0.6) = 60\\;\\text{N}$

Into the ramp: $mg\\cos\\theta = 100(0.8) = 80\\;\\text{N}$

**(b) Normal force and friction.** The normal force balances the $80\\;\\text{N}$ component from (a):

$N = 80\\;\\text{N} \\Rightarrow f_k = \\mu_k N = (0.25)(80) = 20\\;\\text{N}$, pointing uphill to oppose the slide.

**(c) Newton's second law along the incline.** With $60\\;\\text{N}$ downhill from (a) and $20\\;\\text{N}$ of friction from (b):

$F_{net} = 60 - 20 = 40\\;\\text{N} \\Rightarrow a = \\frac{40}{10} = 4\\;\\text{m/s}^2$

**(d) Mass cancels.** No. Keep the mass symbolic and it cancels: $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$, so a heavier crate slides with the **same** acceleration.

### Worked Example — Will It Move at All?

**Problem.** A $10\\;\\text{kg}$ crate sits on a horizontal floor with $\\mu_s = 0.4$. You push horizontally with $30\\;\\text{N}$. ($g = 10\\;\\text{m/s}^2$)

- **(a)** What is the maximum static friction the floor can supply?
- **(b)** Does the crate move?
- **(c)** How large is the friction force on the crate?

**(a) The ceiling.** $N = mg = 100\\;\\text{N}$, so $f_{s,max} = \\mu_s N = (0.4)(100) = 40\\;\\text{N}$.

**(b) Compare.** Your $30\\;\\text{N}$ push is below the $40\\;\\text{N}$ ceiling from (a), so the crate does not budge.

**(c) Friction matches the push.** The friction force is $30\\;\\text{N}$, exactly matching your push. Writing $40\\;\\text{N}$ here is the single most common friction error on the exam: the maximum is only reached at the verge of slipping.`
    },
    {
      id: 'frc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Friction & Inclined Planes** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $5\\;\\text{kg}$ block rests on a horizontal table while someone presses straight down on it with $30\\;\\text{N}$ ($g = 10\\;\\text{m/s}^2$). The normal force on the block from the table is:`,
            options: [`$50\\;\\text{N}$`, `$30\\;\\text{N}$`, `$20\\;\\text{N}$`, `$80\\;\\text{N}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Vertical equilibrium: $N = mg + 30 = 50 + 30 = 80$ N. The normal force is whatever the surface must supply — not automatically $mg$, so $50$ N ignores the press. $30$ N counts only the press, and $20$ N subtracts it as if it pulled upward. The larger $N$ also raises the available friction.`
          },
          {
            question: `An $8\\;\\text{kg}$ crate sits on a floor with $\\mu_s = 0.5$ ($g = 10\\;\\text{m/s}^2$). A $25\\;\\text{N}$ horizontal force is applied and the crate stays put. The friction force on the crate is:`,
            options: [`$40\\;\\text{N}$`, `$25\\;\\text{N}$`, `$0\\;\\text{N}$`, `$65\\;\\text{N}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Static friction matches the applied force — here $25$ N — up to its ceiling of $\\mu_s N = (0.5)(80) = 40$ N. It only equals that $40$ N maximum at the verge of slipping. With $0$ N of friction the unbalanced push would accelerate the crate, and $65$ N adds the push to the ceiling.`
          },
          {
            question: `A block rests on a frictionless incline at angle $\\theta$. The normal force on the block is:`,
            options: [`$mg\\cos\\theta$`, `$mg$`, `$mg\\sin\\theta$`, `$mg\\tan\\theta$`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Perpendicular to the incline: $N = mg\\cos\\theta$, which is less than $mg$ for any tilted surface. $mg\\sin\\theta$ is the component pulling the block downhill.`
          },
          {
            question: `A crate slides down a $37^\\circ$ incline at constant velocity. The coefficient of kinetic friction is approximately:`,
            options: [`$0.6$`, `$0.8$`, `$0.75$`, `$1.33$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Constant velocity means $mg\\sin\\theta = \\mu_k mg\\cos\\theta$, so $\\mu_k = \\tan 37^\\circ = 0.6/0.8 = 0.75$. Choosing $0.6$ or $0.8$ grabs the sine or cosine alone; $1.33$ inverts the ratio.`
          },
          {
            question: `A block slides across a floor at $2\\;\\text{m/s}$. If it instead slides across the same floor at $4\\;\\text{m/s}$, the kinetic friction force is:`,
            options: [`Twice as large`, `Unchanged`, `Half as large`, `Four times as large`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Kinetic friction is $\\mu_k N$ — independent of sliding speed (and of contact area). Only the normal force or the surfaces themselves change it.`
          },
          {
            question: `A $10\\;\\text{kg}$ sled on level snow is pulled with $50\\;\\text{N}$ by a rope at $37^\\circ$ above the horizontal ($g = 10\\;\\text{m/s}^2$, $\\sin 37^\\circ \\approx 0.6$, $\\cos 37^\\circ \\approx 0.8$). The normal force on the sled is:`,
            options: [`$100\\;\\text{N}$`, `$130\\;\\text{N}$`, `$70\\;\\text{N}$`, `$60\\;\\text{N}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The rope's upward component, $F\\sin\\theta = (50)(0.6) = 30$ N, carries part of the weight, so $N = mg - F\\sin\\theta = 100 - 30 = 70$ N. $100$ N ignores the rope's lift, $130$ N adds the lift as if the rope pushed down, and $60$ N subtracts the horizontal component $F\\cos\\theta = 40$ N instead.`
          }
        ]
      }
    },
    {
      id: 'frc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Static friction adjusts.** $f_s \\leq \\mu_s N$: it matches the push up to a ceiling reached only at the verge of slipping.
- **Kinetic friction is fixed.** $f_k = \\mu_k N$ stays constant while sliding, and $\\mu_k < \\mu_s$ for the same surfaces.
- **Incline components.** Downhill pull $mg\\sin\\theta$, normal force $mg\\cos\\theta$; check the $0^\\circ$ and $90^\\circ$ limits.
- **Angle-of-slip trick.** Verge of slipping gives $\\mu_s = \\tan\\theta$; a constant-velocity slide gives $\\mu_k = \\tan\\theta$.

**Common traps**

- **Friction at its maximum.** A crate that stays put has friction equal to the push, not automatically $\\mu_s N$.
- **Normal force as weight.** $N$ is not automatically $mg$: pressing down, pulling up or tilting changes it, and friction too.
- **Faster means more friction.** Kinetic friction does not depend on sliding speed or on contact area.
- **Heavier slides faster.** $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$ contains no mass, so every crate accelerates alike.`
    }
  ]
};
