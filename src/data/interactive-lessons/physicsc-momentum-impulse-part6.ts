export const physCMomentumPart6Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Momentum Workshop

**Part 6 of 7 — AP Physics C Problem Strategies**

---

### Types of Momentum Problems on AP Physics C

| Problem Type | Key Approach |
|-------------|-------------|
| Impulse calculation | $J = \\int F\\,dt$ or $J = \\Delta p$ |
| Collision (1D) | Conservation of $p$; check if elastic |
| Collision (2D) | Separate $x$ and $y$ components |
| Explosion | Reverse collision — one object splits |
| Variable mass | $F = dp/dt$ with changing $m$ |
| Center of mass | $x_{\\text{cm}} = \\sum m_i x_i / M$ |

---

### Worked Example: Ballistic Pendulum

A bullet (mass $m = 0.01\\,\\text{kg}$, speed $v_0 = 400\\,\\text{m/s}$) embeds in a block (mass $M = 2\\,\\text{kg}$) hanging from strings. How high does the block + bullet swing?

**Step 1 (conservation of momentum during the collision):**

$mv_0 = (m + M)V$

$V = \\frac{0.01 \\times 400}{2.01} \\approx 1.99\\,\\text{m/s}$

**Step 2 (conservation of energy during the swing):**

$\\tfrac{1}{2}(m+M)V^2 = (m+M)gh$

$h = \\frac{V^2}{2g} = \\frac{(1.99)^2}{2(9.8)} \\approx 0.20\\,\\text{m}$`
    },
    {
      id: 'physicsc-momentum-impulse-p6-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Variable Mass (the Rocket Equation)

A rocket ejects fuel at constant exhaust speed $u$ relative to itself. Starting from $\\vec{F} = \\dfrac{d\\vec{p}}{dt}$ applied to the rocket-plus-fuel system in free space, we can derive how the rocket's speed grows.

**Step 1 — Set up momentum conservation over a small time $dt$.** In $dt$ the rocket of mass $m$ expels $-dm$ of fuel (mass decreases, so $dm < 0$) at speed $u$ backward relative to the rocket. With no external force, total momentum is unchanged, which leads to:

$m\\,dv = -u\\,dm$

**Step 2 — Separate variables and integrate.**

$\\int_{v_i}^{v_f} dv = -u\\int_{m_i}^{m_f}\\frac{dm}{m}$

**Step 3 — Evaluate the integral.**

$v_f - v_i = -u\\big[\\ln m\\big]_{m_i}^{m_f} = u\\,\\ln\\!\\left(\\frac{m_i}{m_f}\\right)$

This is the **Tsiolkovsky rocket equation**. The thrust is $F_{\\text{thrust}} = u\\left|\\dfrac{dm}{dt}\\right|$.

**Numeric check:** If $u = 2500\\,\\text{m/s}$ and the rocket burns from $m_i = 3000\\,\\text{kg}$ to $m_f = 1000\\,\\text{kg}$, then $\\Delta v = 2500\\,\\ln(3) \\approx 2747\\,\\text{m/s}$.

> 🔑 Variable-mass problems require the general law $F = dp/dt$ — you cannot just use $F = ma$ with constant $m$.`
    },
    {
      id: 'physicsc-momentum-impulse-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a ballistic pendulum, which is conserved during the collision?',
            options: ['Kinetic energy', 'Momentum', 'Both KE and momentum', 'Neither'],
            correctAnswer: 1,
            explanation: 'The collision is perfectly inelastic (the bullet embeds), so only momentum is conserved. KE is lost; energy conservation is then used for the swing.'
          },
          {
            question: 'For the ballistic pendulum above, the block + bullet rise to a height of about:',
            options: ['$0.05\\,\\text{m}$', '$0.10\\,\\text{m}$', '$0.20\\,\\text{m}$', '$0.40\\,\\text{m}$'],
            correctAnswer: 2,
            explanation: 'After the collision $V \\approx 1.99\\,\\text{m/s}$, then $h = V^2/(2g) = (1.99)^2/(2\\cdot 9.8) \\approx 0.20\\,\\text{m}$.'
          },
          {
            question: 'The rocket equation $\\Delta v = u\\,\\ln(m_i/m_f)$ comes from integrating:',
            options: ['$F = ma$ with constant mass', '$m\\,dv = -u\\,dm$', '$J = F\\,\\Delta t$', '$E = \\tfrac{1}{2}mv^2$'],
            correctAnswer: 1,
            explanation: 'Separating variables in $m\\,dv = -u\\,dm$ and integrating gives $\\Delta v = u\\ln(m_i/m_f)$.'
          },
          {
            question: 'A rocket with exhaust speed $u = 2500\\,\\text{m/s}$ burns from 3000 kg to 1000 kg. Its speed gain is closest to:',
            options: ['$1250\\,\\text{m/s}$', '$2747\\,\\text{m/s}$', '$5000\\,\\text{m/s}$', '$7500\\,\\text{m/s}$'],
            correctAnswer: 1,
            explanation: '$\\Delta v = 2500\\,\\ln(3000/1000) = 2500\\,\\ln 3 \\approx 2500(1.099) \\approx 2747\\,\\text{m/s}$.'
          },
          {
            question: 'Why must $F = dp/dt$ (not $F = ma$ with constant $m$) be used for rockets?',
            options: [
              'Because rockets travel in vacuum',
              'Because the system’s mass changes as fuel is ejected',
              'Because momentum is not conserved for rockets',
              'Because gravity is negligible'
            ],
            correctAnswer: 1,
            explanation: 'The rocket continuously loses mass, so $dp/dt = m\\,dv/dt + v\\,dm/dt$. Only the general form captures the $v\\,dm/dt$ thrust term.'
          },
          {
            question: 'An explosion splits a stationary 4 kg object into a 1 kg piece moving at $+9\\,\\text{m/s}$ and a 3 kg piece. The 3 kg piece moves at:',
            options: ['$+3\\,\\text{m/s}$', '$-3\\,\\text{m/s}$', '$-9\\,\\text{m/s}$', '$+9\\,\\text{m/s}$'],
            correctAnswer: 1,
            explanation: 'Total momentum stays zero: $1(9) + 3v = 0 \\Rightarrow v = -3\\,\\text{m/s}$ (opposite direction).'
          }
        ]
      }
    }
  ]
};
