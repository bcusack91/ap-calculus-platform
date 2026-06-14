export const physCMomentumPart2Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p2-intro',
      type: 'text' as const,
      content: `# 💥 Impulse

**Part 2 of 7 — Impulse-Momentum Theorem**

---

### Impulse Defined

$\\vec{J} = \\int_{t_1}^{t_2} \\vec{F}\\,dt = \\Delta \\vec{p}$

| Variable | Meaning |
|----------|---------|
| $\\vec{J}$ | Impulse ($\\text{N}\\cdot\\text{s} = \\text{kg}\\cdot\\text{m/s}$) |
| $\\vec{F}$ | Force (may vary with time) |
| $\\Delta\\vec{p}$ | Change in momentum |

For constant force: $\\vec{J} = \\vec{F}\\,\\Delta t$

---

### Impulse-Momentum Theorem

$\\vec{J} = \\vec{p}_f - \\vec{p}_i = m\\vec{v}_f - m\\vec{v}_i$

**Example:** A $0.15\\,\\text{kg}$ baseball at $40\\,\\text{m/s}$ is hit and leaves at $50\\,\\text{m/s}$ in the opposite direction.

$J = m(v_f - v_i) = 0.15\\big(50 - (-40)\\big) = 0.15(90) = 13.5\\,\\text{N}\\cdot\\text{s}$

> 🔑 The area under the $F$ vs. $t$ curve equals the impulse.`
    },
    {
      id: 'physicsc-momentum-impulse-p2-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Impulse from a Time-Varying Force

During a $0.20\\,\\text{s}$ collision a force $F(t) = (600t - 3000t^2)\\,\\text{N}$ acts on a $0.50\\,\\text{kg}$ ball (with $t$ in seconds). The ball is initially at rest. Find the impulse delivered and the final speed.

**Step 1 — Impulse is the time integral of force.**

$J = \\int_{0}^{0.20} F(t)\\,dt = \\int_{0}^{0.20} (600t - 3000t^2)\\,dt$

**Step 2 — Integrate term by term.**

$J = \\left[\\,300t^2 - 1000t^3\\,\\right]_{0}^{0.20}$

**Step 3 — Evaluate the bounds.**

$J = 300(0.20)^2 - 1000(0.20)^3 = 300(0.04) - 1000(0.008) = 12 - 8 = 4\\,\\text{N}\\cdot\\text{s}$

**Step 4 — Apply the impulse-momentum theorem.**

$J = \\Delta p = m\\,v_f$ (since $v_i = 0$), so $v_f = \\dfrac{J}{m} = \\dfrac{4}{0.50} = 8\\,\\text{m/s}$.

> 🔑 When force varies in time, you **integrate** — the area under the $F$–$t$ curve. A constant "average force" of $J/\\Delta t = 4/0.20 = 20\\,\\text{N}$ would give the same impulse.`
    },
    {
      id: 'physicsc-momentum-impulse-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Impulse has the same units as:',
            options: ['Force', 'Energy', 'Momentum', 'Power'],
            correctAnswer: 2,
            explanation: 'Impulse equals change in momentum. Both have units of $\\text{kg}\\cdot\\text{m/s}$ (equivalently $\\text{N}\\cdot\\text{s}$).'
          },
          {
            question: 'A 5 N force acts for 3 seconds. The impulse is:',
            options: ['$1.67\\,\\text{N}\\cdot\\text{s}$', '$5\\,\\text{N}\\cdot\\text{s}$', '$8\\,\\text{N}\\cdot\\text{s}$', '$15\\,\\text{N}\\cdot\\text{s}$'],
            correctAnswer: 3,
            explanation: '$J = F\\,\\Delta t = 5(3) = 15\\,\\text{N}\\cdot\\text{s}$ for a constant force.'
          },
          {
            question: 'A force $F(t) = 600t - 3000t^2$ (N) acts from $t=0$ to $t=0.20\\,\\text{s}$. The impulse is:',
            options: ['$2\\,\\text{N}\\cdot\\text{s}$', '$4\\,\\text{N}\\cdot\\text{s}$', '$12\\,\\text{N}\\cdot\\text{s}$', '$20\\,\\text{N}\\cdot\\text{s}$'],
            correctAnswer: 1,
            explanation: '$J = \\int_0^{0.20}(600t - 3000t^2)\\,dt = [300t^2 - 1000t^3]_0^{0.20} = 12 - 8 = 4\\,\\text{N}\\cdot\\text{s}$.'
          },
          {
            question: 'Why does a longer follow-through (larger $\\Delta t$) reduce the peak force needed for a given impulse?',
            options: [
              'Because impulse decreases with time',
              'Because $J = \\bar{F}\\,\\Delta t$, so a larger $\\Delta t$ allows a smaller average force for the same $J$',
              'Because momentum is not conserved',
              'Because force and time are unrelated'
            ],
            correctAnswer: 1,
            explanation: 'For a fixed change in momentum, $J = \\bar{F}\\,\\Delta t$ is fixed, so increasing $\\Delta t$ lowers $\\bar{F}$. This is why airbags and bending knees reduce injury.'
          },
          {
            question: 'The impulse delivered by a force equals the:',
            options: [
              'Slope of the $F$ vs. $t$ graph',
              'Area under the $F$ vs. $t$ graph',
              'Slope of the $v$ vs. $t$ graph',
              'Area under the $p$ vs. $t$ graph'
            ],
            correctAnswer: 1,
            explanation: 'Since $J = \\int F\\,dt$, the impulse is the area between the force curve and the time axis.'
          },
          {
            question: 'A 0.50 kg ball starting from rest receives an impulse of $4\\,\\text{N}\\cdot\\text{s}$. Its final speed is:',
            options: ['$2\\,\\text{m/s}$', '$4\\,\\text{m/s}$', '$8\\,\\text{m/s}$', '$16\\,\\text{m/s}$'],
            correctAnswer: 2,
            explanation: '$J = \\Delta p = m v_f$ (since $v_i = 0$), so $v_f = J/m = 4/0.50 = 8\\,\\text{m/s}$.'
          }
        ]
      }
    }
  ]
};
