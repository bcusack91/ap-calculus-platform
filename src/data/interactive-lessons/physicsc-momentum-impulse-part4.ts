export const physCMomentumPart4Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p4-intro',
      type: 'text' as const,
      content: `# 🎱 Collisions in Two Dimensions

**Part 4 of 7 — Vector Conservation of Momentum**

---

### 2D Momentum Conservation

Momentum is conserved independently in each direction:

$\\text{x-direction:}\\quad m_1 v_{1xi} + m_2 v_{2xi} = m_1 v_{1xf} + m_2 v_{2xf}$

$\\text{y-direction:}\\quad m_1 v_{1yi} + m_2 v_{2yi} = m_1 v_{1yf} + m_2 v_{2yf}$

---

### Strategy for 2D Collision Problems

1. Choose a coordinate system.
2. Resolve all velocities into $x$ and $y$ components.
3. Apply conservation of momentum in each direction independently.
4. If the collision is elastic, also apply conservation of kinetic energy.

> 🔑 Treat each dimension separately — just like projectile motion.`
    },
    {
      id: 'physicsc-momentum-impulse-p4-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — A Glancing (2D) Collision

A $1\\,\\text{kg}$ disk moves east at $4\\,\\text{m/s}$ and strikes a stationary $1\\,\\text{kg}$ disk. After the collision, the first disk moves at $30^\\circ$ **north** of east with speed $v_1$, and the second moves at $60^\\circ$ **south** of east with speed $v_2$. Find $v_1$ and $v_2$.

**Step 1 — Conserve $x$-momentum.** Initial: $p_x = 1(4) = 4\\,\\text{kg}\\cdot\\text{m/s}$.

$4 = v_1\\cos 30^\\circ + v_2\\cos 60^\\circ = 0.866\\,v_1 + 0.5\\,v_2$

**Step 2 — Conserve $y$-momentum.** Initial $p_y = 0$ (the second disk goes south, so its $y$-component is negative):

$0 = v_1\\sin 30^\\circ - v_2\\sin 60^\\circ = 0.5\\,v_1 - 0.866\\,v_2$

**Step 3 — Solve the system.** From the $y$-equation, $v_1 = \\dfrac{0.866}{0.5}\\,v_2 = 1.732\\,v_2$. Substitute into the $x$-equation:

$4 = 0.866(1.732\\,v_2) + 0.5\\,v_2 = 1.5\\,v_2 + 0.5\\,v_2 = 2\\,v_2$

So $v_2 = 2\\,\\text{m/s}$ and $v_1 = 1.732(2) \\approx 3.46\\,\\text{m/s}$.

> 🔑 The two final paths are $30^\\circ + 60^\\circ = 90^\\circ$ apart. For an **elastic** collision of **equal** masses with one initially at rest, the outgoing velocities are always perpendicular.`
    },
    {
      id: 'physicsc-momentum-impulse-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In 2D collisions, momentum is conserved:',
            options: ['Only in x', 'Only in y', 'In each direction independently', 'Only for elastic collisions'],
            correctAnswer: 2,
            explanation: 'Momentum is a vector; each component ($p_x$ and $p_y$) is conserved independently.'
          },
          {
            question: 'A 1 kg disk moving east at 4 m/s hits a stationary 1 kg disk. If the first leaves at $30^\\circ$ north of east, conserving $y$-momentum requires the second to move:',
            options: ['Due north', 'South of east', 'Due east', 'West'],
            correctAnswer: 1,
            explanation: 'Initial $p_y = 0$. If one disk gains northward ($+y$) momentum, the other must carry equal southward ($-y$) momentum to keep $p_y = 0$.'
          },
          {
            question: 'For an elastic collision of equal masses (one initially at rest), the angle between the two outgoing velocities is:',
            options: ['$0^\\circ$', '$45^\\circ$', '$90^\\circ$', '$180^\\circ$'],
            correctAnswer: 2,
            explanation: 'Combining momentum and KE conservation for equal masses forces $\\vec{v}_{1f}\\cdot\\vec{v}_{2f} = 0$, so the outgoing paths are perpendicular.'
          },
          {
            question: 'An object explodes into two equal pieces. If one piece moves $+x$ at $6\\,\\text{m/s}$ and the object was initially at rest, the other piece moves:',
            options: ['$+x$ at $6\\,\\text{m/s}$', '$-x$ at $6\\,\\text{m/s}$', '$+y$ at $6\\,\\text{m/s}$', 'It stays at rest'],
            correctAnswer: 1,
            explanation: 'Total momentum is zero before and after. Equal masses means the second piece moves opposite at the same speed: $-x$ at $6\\,\\text{m/s}$.'
          },
          {
            question: 'To analyze a 2D collision where an object enters at angle $\\theta$, you should first:',
            options: [
              'Add all the speeds together',
              'Resolve each velocity into $x$ and $y$ components',
              'Assume kinetic energy is always conserved',
              'Ignore the $y$-direction'
            ],
            correctAnswer: 1,
            explanation: 'Resolving into components lets you write a separate conservation equation for each axis, just like projectile motion.'
          }
        ]
      }
    }
  ]
};
