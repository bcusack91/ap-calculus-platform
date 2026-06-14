export const physCMomentumPart3Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p3-intro',
      type: 'text' as const,
      content: `# 💫 Collisions in One Dimension

**Part 3 of 7 — Elastic and Inelastic Collisions**

---

### Types of Collisions

| Type | Momentum Conserved? | KE Conserved? |
|------|---------------------|--------------|
| **Elastic** | ✅ Yes | ✅ Yes |
| **Inelastic** | ✅ Yes | ❌ No |
| **Perfectly Inelastic** | ✅ Yes | ❌ No (maximum KE loss) |

---

### Perfectly Inelastic Collision

Objects stick together after collision:

$m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f$

$v_f = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$

---

### Elastic Collision

Both momentum AND kinetic energy are conserved. For 1D elastic collisions:

$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}\\,v_{1i} + \\frac{2m_2}{m_1 + m_2}\\,v_{2i}$

$v_{2f} = \\frac{2m_1}{m_1 + m_2}\\,v_{1i} + \\frac{m_2 - m_1}{m_1 + m_2}\\,v_{2i}$

> 🔑 In an elastic collision between equal masses with one at rest, the first stops and the second moves off with the original velocity (the velocities swap).`
    },
    {
      id: 'physicsc-momentum-impulse-p3-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Elastic Collision and KE Loss

A $2\\,\\text{kg}$ cart moving at $3\\,\\text{m/s}$ strikes a stationary $4\\,\\text{kg}$ cart head-on. **(a)** Find the final velocities for an **elastic** collision. **(b)** Compare with the kinetic energy lost in a **perfectly inelastic** collision.

**Part (a) — Elastic.** With $m_1 = 2$, $m_2 = 4$, $v_{1i} = 3$, $v_{2i} = 0$:

$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}\\,v_{1i} = \\frac{2 - 4}{6}(3) = -1\\,\\text{m/s}$

$v_{2f} = \\frac{2m_1}{m_1 + m_2}\\,v_{1i} = \\frac{2(2)}{6}(3) = 2\\,\\text{m/s}$

Check momentum: $p_i = 2(3) = 6$; $p_f = 2(-1) + 4(2) = 6\\,\\text{kg}\\cdot\\text{m/s}$. ✅ The lighter cart rebounds.

**Part (b) — Perfectly inelastic.** The carts stick:

$v_f = \\frac{m_1 v_{1i}}{m_1 + m_2} = \\frac{2(3)}{6} = 1\\,\\text{m/s}$

Initial KE: $K_i = \\tfrac{1}{2}(2)(3)^2 = 9\\,\\text{J}$.
Final KE: $K_f = \\tfrac{1}{2}(6)(1)^2 = 3\\,\\text{J}$.

**KE lost** $= 9 - 3 = 6\\,\\text{J}$ — about $67\\%$ of the original kinetic energy converts to heat and deformation.

> 🔑 Momentum is conserved in **both** collisions, but only the elastic case conserves kinetic energy.`
    },
    {
      id: 'physicsc-momentum-impulse-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a perfectly inelastic collision, the objects:',
            options: ['Bounce apart', 'Stick together', 'Exchange velocities', 'Both stop'],
            correctAnswer: 1,
            explanation: 'Perfectly inelastic means the objects stick together and move with a common velocity — the maximum possible KE loss.'
          },
          {
            question: 'A 3 kg ball at 4 m/s collides perfectly inelastically with a 1 kg ball at rest. $v_f =$',
            options: ['$1\\,\\text{m/s}$', '$2\\,\\text{m/s}$', '$3\\,\\text{m/s}$', '$4\\,\\text{m/s}$'],
            correctAnswer: 2,
            explanation: '$v_f = \\dfrac{3(4) + 1(0)}{3+1} = \\dfrac{12}{4} = 3\\,\\text{m/s}$.'
          },
          {
            question: 'A 2 kg cart at 3 m/s elastically hits a stationary 4 kg cart. The 2 kg cart’s final velocity is:',
            options: ['$+2\\,\\text{m/s}$', '$0\\,\\text{m/s}$', '$-1\\,\\text{m/s}$', '$-3\\,\\text{m/s}$'],
            correctAnswer: 2,
            explanation: '$v_{1f} = \\dfrac{m_1 - m_2}{m_1 + m_2}v_{1i} = \\dfrac{2-4}{6}(3) = -1\\,\\text{m/s}$ — it rebounds because it hit a heavier cart.'
          },
          {
            question: 'In an elastic collision between two equal masses, one moving and one at rest, after the collision:',
            options: [
              'They move off together',
              'The moving one stops and the other moves with the original velocity',
              'Both reverse direction',
              'Both keep their original velocities'
            ],
            correctAnswer: 1,
            explanation: 'For equal masses ($m_1 = m_2$) the coefficients give $v_{1f} = 0$ and $v_{2f} = v_{1i}$ — the velocities swap.'
          },
          {
            question: 'Which quantity is conserved in ALL collisions in an isolated system?',
            options: ['Kinetic energy', 'Momentum', 'Speed of each object', 'Mechanical energy'],
            correctAnswer: 1,
            explanation: 'Momentum is always conserved with no external forces. Kinetic energy is conserved only in elastic collisions.'
          },
          {
            question: 'A 2 kg object at 3 m/s sticks to a 4 kg object at rest. The kinetic energy lost is:',
            options: ['$0\\,\\text{J}$', '$3\\,\\text{J}$', '$6\\,\\text{J}$', '$9\\,\\text{J}$'],
            correctAnswer: 2,
            explanation: '$v_f = 1\\,\\text{m/s}$, so $K_i = \\tfrac{1}{2}(2)(9) = 9\\,\\text{J}$ and $K_f = \\tfrac{1}{2}(6)(1) = 3\\,\\text{J}$; lost $= 6\\,\\text{J}$.'
          }
        ]
      }
    }
  ]
};
