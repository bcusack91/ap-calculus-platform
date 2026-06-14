export const physCMomentumPart7Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p7-intro',
      type: 'text' as const,
      content: `# 📋 Momentum Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Formulas

| Formula | Name |
|---------|------|
| $\\vec{p} = m\\vec{v}$ | Momentum |
| $\\vec{J} = \\int \\vec{F}\\,dt = \\Delta\\vec{p}$ | Impulse-momentum theorem |
| $\\vec{p}_i = \\vec{p}_f$ | Conservation of momentum |
| $x_{\\text{cm}} = \\dfrac{\\sum m_i x_i}{M}$ | Center of mass |
| $v_f - v_i = u\\ln(m_i/m_f)$ | Rocket equation |
| Elastic: $K_i = K_f$ | Kinetic energy conserved |
| Inelastic: $K_i > K_f$ | KE lost to deformation/heat |`
    },
    {
      id: 'physicsc-momentum-impulse-p7-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Impulse–Momentum with Calculus

A $0.40\\,\\text{kg}$ ball traveling in $+x$ at $5\\,\\text{m/s}$ is struck so that a force $F_x(t) = (200 - 4000t)\\,\\text{N}$ acts on it while $t$ runs from $0$ to $0.05\\,\\text{s}$. Find the ball's final velocity.

**Step 1 — Compute the impulse by integration.**

$J_x = \\int_0^{0.05}(200 - 4000t)\\,dt = \\left[\\,200t - 2000t^2\\,\\right]_0^{0.05}$

**Step 2 — Evaluate.**

$J_x = 200(0.05) - 2000(0.05)^2 = 10 - 5 = 5\\,\\text{N}\\cdot\\text{s}$

**Step 3 — Apply the impulse-momentum theorem.**

$J_x = m\\,v_{xf} - m\\,v_{xi}\\;\\Rightarrow\\; v_{xf} = v_{xi} + \\frac{J_x}{m} = 5 + \\frac{5}{0.40} = 5 + 12.5 = 17.5\\,\\text{m/s}$

> 🔑 This single problem ties together the integral definition of impulse and the impulse-momentum theorem — a very common AP Physics C free-response combination.`
    },
    {
      id: 'physicsc-momentum-impulse-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which quantity is ALWAYS conserved in collisions (with no external forces)?',
            options: ['Kinetic energy', 'Momentum', 'Speed', 'Force'],
            correctAnswer: 1,
            explanation: 'Momentum is always conserved in an isolated system. Kinetic energy is conserved only in elastic collisions.'
          },
          {
            question: 'A rocket in space expels gas backward. The rocket:',
            options: ['Violates conservation of momentum', 'Accelerates forward', 'Stays in place', 'Decelerates'],
            correctAnswer: 1,
            explanation: 'The gas carries momentum backward, so the rocket gains equal momentum forward. Total system momentum stays constant.'
          },
          {
            question: 'A 0.40 kg ball at $5\\,\\text{m/s}$ receives an impulse $J_x = \\int_0^{0.05}(200 - 4000t)\\,dt$. Its final velocity is:',
            options: ['$5\\,\\text{m/s}$', '$12.5\\,\\text{m/s}$', '$17.5\\,\\text{m/s}$', '$22.5\\,\\text{m/s}$'],
            correctAnswer: 2,
            explanation: '$J_x = [200t - 2000t^2]_0^{0.05} = 5\\,\\text{N}\\cdot\\text{s}$, so $v_f = 5 + 5/0.40 = 17.5\\,\\text{m/s}$.'
          },
          {
            question: 'The area under a force vs. time graph represents the:',
            options: ['Work done', 'Impulse', 'Power delivered', 'Change in kinetic energy'],
            correctAnswer: 1,
            explanation: 'Impulse $= \\int F\\,dt$ is the area under the $F$–$t$ curve. Work is the area under an $F$–$x$ curve.'
          },
          {
            question: 'In a perfectly inelastic collision, the fraction of kinetic energy lost is greatest when:',
            options: [
              'The two masses are equal and approach with equal speeds',
              'One mass is huge and at rest',
              'Both objects are already at rest',
              'The collision is elastic'
            ],
            correctAnswer: 0,
            explanation: 'Two equal masses approaching at equal and opposite speeds stop entirely after sticking, losing $100\\%$ of the kinetic energy.'
          },
          {
            question: 'A 2 kg object at $+3\\,\\text{m/s}$ and a 1 kg object at $-6\\,\\text{m/s}$ stick together. Their common velocity is:',
            options: ['$0\\,\\text{m/s}$', '$+1\\,\\text{m/s}$', '$-1\\,\\text{m/s}$', '$-2\\,\\text{m/s}$'],
            correctAnswer: 0,
            explanation: '$p = 2(3) + 1(-6) = 0$, so $v_f = 0/(2+1) = 0\\,\\text{m/s}$.'
          }
        ]
      }
    }
  ]
};
