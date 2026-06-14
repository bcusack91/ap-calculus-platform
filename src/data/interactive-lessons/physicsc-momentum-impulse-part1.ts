export const physCMomentumPart1Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p1-intro',
      type: 'text' as const,
      content: `# 🎯 Linear Momentum

**Part 1 of 7 — Momentum and Its Conservation**

---

### What Is Momentum?

$\\vec{p} = m\\vec{v}$

| Quantity | Symbol | Units |
|----------|--------|-------|
| Momentum | $\\vec{p}$ | $\\text{kg}\\cdot\\text{m/s}$ |
| Mass | $m$ | $\\text{kg}$ |
| Velocity | $\\vec{v}$ | $\\text{m/s}$ |

> 🔑 Momentum is a **vector** — it has both magnitude and direction.

---

### Newton's Second Law in Terms of Momentum

$\\vec{F}_{\\text{net}} = \\frac{d\\vec{p}}{dt}$

For constant mass: $\\vec{F} = m\\vec{a} = m\\frac{d\\vec{v}}{dt} = \\frac{d(m\\vec{v})}{dt}$

This more general form handles cases where mass changes (like rockets).

---

### Conservation of Momentum

When no external forces act on a system:

$\\vec{p}_{\\text{initial}} = \\vec{p}_{\\text{final}}$

$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$

> This is valid for **any** collision or interaction within an isolated system.`
    },
    {
      id: 'physicsc-momentum-impulse-p1-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Momentum from a Time-Dependent Velocity

A particle of mass $m = 3\\,\\text{kg}$ moves along the $x$-axis with velocity $v(t) = (4t^2 - 2t)\\,\\text{m/s}$. Find the **net force** on the particle at $t = 2\\,\\text{s}$ using the momentum form of Newton's second law.

**Step 1 — Write momentum as a function of time.**

$p(t) = m\\,v(t) = 3(4t^2 - 2t) = (12t^2 - 6t)\\,\\text{kg}\\cdot\\text{m/s}$

**Step 2 — Differentiate to get the net force.**

Because $F_{\\text{net}} = \\dfrac{dp}{dt}$, we differentiate term by term:

$F_{\\text{net}}(t) = \\frac{d}{dt}\\left(12t^2 - 6t\\right) = 24t - 6$

**Step 3 — Evaluate at $t = 2\\,\\text{s}$.**

$F_{\\text{net}}(2) = 24(2) - 6 = 42\\,\\text{N}$

> 🔑 Even with constant mass, $F = \\dfrac{dp}{dt}$ and $F = ma$ agree: here $a(t) = \\dfrac{dv}{dt} = 8t - 2$, so $ma = 3(8t-2) = 24t - 6$. The momentum form is just the more fundamental statement.`
    },
    {
      id: 'physicsc-momentum-impulse-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg ball moving at 3 m/s has momentum:',
            options: ['$2\\,\\text{kg}\\cdot\\text{m/s}$', '$3\\,\\text{kg}\\cdot\\text{m/s}$', '$5\\,\\text{kg}\\cdot\\text{m/s}$', '$6\\,\\text{kg}\\cdot\\text{m/s}$'],
            correctAnswer: 3,
            explanation: '$p = mv = 2(3) = 6\\,\\text{kg}\\cdot\\text{m/s}$.'
          },
          {
            question: 'Momentum is conserved when:',
            options: ['Energy is conserved', 'No external net force acts', 'Objects are elastic', 'Mass is constant'],
            correctAnswer: 1,
            explanation: 'Conservation of momentum requires zero net external force on the system. Internal forces cancel by Newton’s third law.'
          },
          {
            question: '$\\vec{F} = d\\vec{p}/dt$ is the most general form of:',
            options: ['Newton’s First Law', 'Newton’s Second Law', 'Newton’s Third Law', 'Conservation of energy'],
            correctAnswer: 1,
            explanation: 'Newton’s Second Law in its most general form relates force to the rate of change of momentum, $\\vec{F} = d\\vec{p}/dt$.'
          },
          {
            question: 'A 3 kg particle has velocity $v(t) = (4t^2 - 2t)\\,\\text{m/s}$. The net force at $t = 2\\,\\text{s}$ is:',
            options: ['$18\\,\\text{N}$', '$30\\,\\text{N}$', '$42\\,\\text{N}$', '$48\\,\\text{N}$'],
            correctAnswer: 2,
            explanation: '$p = 3(4t^2 - 2t) = 12t^2 - 6t$, so $F = dp/dt = 24t - 6$. At $t=2$: $F = 24(2) - 6 = 42\\,\\text{N}$.'
          },
          {
            question: 'Two objects have equal kinetic energy. The one with greater mass has:',
            options: ['Smaller momentum', 'Greater momentum', 'Equal momentum', 'Zero momentum'],
            correctAnswer: 1,
            explanation: 'Since $K = \\frac{p^2}{2m}$, equal $K$ gives $p = \\sqrt{2mK}$. Larger $m$ at the same $K$ means larger $p$.'
          },
          {
            question: 'A 0.5 kg cart moving at $+4\\,\\text{m/s}$ reverses to $-2\\,\\text{m/s}$. The change in momentum $\\Delta p$ is:',
            options: ['$+1\\,\\text{kg}\\cdot\\text{m/s}$', '$-1\\,\\text{kg}\\cdot\\text{m/s}$', '$-3\\,\\text{kg}\\cdot\\text{m/s}$', '$+3\\,\\text{kg}\\cdot\\text{m/s}$'],
            correctAnswer: 2,
            explanation: '$\\Delta p = m(v_f - v_i) = 0.5(-2 - 4) = 0.5(-6) = -3\\,\\text{kg}\\cdot\\text{m/s}$. Direction matters for vectors.'
          }
        ]
      }
    }
  ]
};
