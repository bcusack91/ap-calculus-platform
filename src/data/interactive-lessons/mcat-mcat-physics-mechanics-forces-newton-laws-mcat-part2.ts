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

### Inclined Planes

Tilt the axes so $x$ runs along the incline. Weight $mg$ splits into:

- Along the incline (pulling downhill): $mg\\sin\\theta$
- Perpendicular (into the surface): $mg\\cos\\theta$

With no other vertical-direction forces, $N = mg\\cos\\theta$ — **less** than $mg$. Two limiting checks: at $\\theta = 0$, the downhill pull is $0$ and $N = mg$; at $\\theta = 90^\\circ$, the pull is the full $mg$ and $N = 0$.

**Angle-of-slip trick:** a block on the verge of sliding at angle $\\theta$ gives $\\mu_s = \\tan\\theta$; a block sliding down at *constant velocity* gives $\\mu_k = \\tan\\theta$. Both follow from setting the downhill pull equal to friction.`
    },
    {
      id: 'frc2-worked',
      type: 'text' as const,
      content: `### Worked Example — Sliding Down a 37-Degree Ramp

A $10\\;\\text{kg}$ crate slides down a $37^\\circ$ loading ramp with $\\mu_k = 0.25$. Find its acceleration. ($g = 10\\;\\text{m/s}^2$, $\\sin 37^\\circ \\approx 0.6$, $\\cos 37^\\circ \\approx 0.8$)

**Step 1 — Resolve the weight.** $mg = 100\\;\\text{N}$:

$mg\\sin\\theta = 100(0.6) = 60\\;\\text{N} \\quad \\text{(downhill)}$

$mg\\cos\\theta = 100(0.8) = 80\\;\\text{N} \\quad \\text{(into the ramp)}$

**Step 2 — Normal force and friction.**

$N = 80\\;\\text{N} \\Rightarrow f_k = \\mu_k N = (0.25)(80) = 20\\;\\text{N} \\quad \\text{(uphill, opposing the slide)}$

**Step 3 — Newton's second law along the incline.**

$F_{net} = 60 - 20 = 40\\;\\text{N} \\Rightarrow a = \\frac{40}{10} = 4\\;\\text{m/s}^2$

Note the mass cancels if you keep it symbolic: $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$ — a heavier crate slides with the **same** acceleration.

### Worked Example — Will It Move at All?

A $10\\;\\text{kg}$ crate sits on a horizontal floor with $\\mu_s = 0.4$. You push horizontally with $30\\;\\text{N}$.

Maximum static friction: $f_{s,max} = \\mu_s N = (0.4)(100) = 40\\;\\text{N}$.

Your $30\\;\\text{N}$ push is below the $40\\;\\text{N}$ ceiling, so the crate does not budge — and the friction force is $30\\;\\text{N}$, exactly matching your push. Writing $40\\;\\text{N}$ here is the single most common friction error on the exam: the maximum is only reached at the verge of slipping.`
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
            explanation: `Vertical equilibrium: $N = mg + 30 = 50 + 30 = 80$ N. The normal force is whatever the surface must supply — not automatically $mg$. This also raises the available friction.`
          },
          {
            question: `A $10\\;\\text{kg}$ crate sits on a floor with $\\mu_s = 0.4$ ($g = 10\\;\\text{m/s}^2$). A $30\\;\\text{N}$ horizontal force is applied and the crate stays put. The friction force on the crate is:`,
            options: [`$40\\;\\text{N}$`, `$30\\;\\text{N}$`, `$0\\;\\text{N}$`, `$70\\;\\text{N}$`],
            correctAnswer: 1,
            explanation: `Static friction matches the applied force — here $30$ N — up to its ceiling of $\\mu_s N = 40$ N. It only equals the maximum at the verge of slipping.`
          },
          {
            question: `A block rests on a frictionless incline at angle $\\theta$. The normal force on the block is:`,
            options: [`$mg\\cos\\theta$`, `$mg$`, `$mg\\sin\\theta$`, `$mg\\tan\\theta$`],
            correctAnswer: 0,
            explanation: `Perpendicular to the incline: $N = mg\\cos\\theta$, which is less than $mg$ for any tilted surface. $mg\\sin\\theta$ is the component pulling the block downhill.`
          },
          {
            question: `A crate slides down a $37^\\circ$ incline at constant velocity. The coefficient of kinetic friction is approximately:`,
            options: [`$0.6$`, `$0.8$`, `$0.75$`, `$1.33$`],
            correctAnswer: 2,
            explanation: `Constant velocity means $mg\\sin\\theta = \\mu_k mg\\cos\\theta$, so $\\mu_k = \\tan 37^\\circ = 0.6/0.8 = 0.75$. Choosing $0.6$ or $0.8$ grabs the sine or cosine alone; $1.33$ inverts the ratio.`
          },
          {
            question: `A block slides across a floor at $2\\;\\text{m/s}$. If it instead slides across the same floor at $4\\;\\text{m/s}$, the kinetic friction force is:`,
            options: [`Twice as large`, `Unchanged`, `Half as large`, `Four times as large`],
            correctAnswer: 1,
            explanation: `Kinetic friction is $\\mu_k N$ — independent of sliding speed (and of contact area). Only the normal force or the surfaces themselves change it.`
          }
        ]
      }
    },
    {
      id: 'frc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Static friction adjusts up to a ceiling ($f_s \\leq \\mu_s N$); kinetic friction is fixed at $f_k = \\mu_k N$; $\\mu_s > \\mu_k$
- Friction tracks the NORMAL force — pressing down or pulling up on an object changes its friction
- Kinetic friction ignores sliding speed and contact area
- Inclines: downhill pull $mg\\sin\\theta$, normal force $mg\\cos\\theta$ — check the $0^\\circ$ and $90^\\circ$ limits
- Constant-velocity slide down an incline: $\\mu_k = \\tan\\theta$; verge of slipping: $\\mu_s = \\tan\\theta$
- Acceleration on an incline is mass-independent: $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$`
    }
  ]
};
