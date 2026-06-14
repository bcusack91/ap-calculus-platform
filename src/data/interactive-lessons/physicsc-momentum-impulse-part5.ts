export const physCMomentumPart5Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p5-intro',
      type: 'text' as const,
      content: `# ⚖️ Center of Mass

**Part 5 of 7 — Center of Mass Motion**

---

### Center of Mass Position

For discrete masses:

$x_{\\text{cm}} = \\frac{\\sum m_i x_i}{\\sum m_i} = \\frac{m_1 x_1 + m_2 x_2 + \\cdots}{m_1 + m_2 + \\cdots}$

For continuous mass distributions:

$x_{\\text{cm}} = \\frac{1}{M} \\int x\\,dm$

---

### Center of Mass Velocity

$v_{\\text{cm}} = \\frac{\\sum m_i v_i}{M} = \\frac{p_{\\text{total}}}{M}$

> 🔑 The center of mass of an isolated system moves at constant velocity (even during collisions), because $\\vec{F}_{\\text{ext}} = M\\vec{a}_{\\text{cm}}$.`
    },
    {
      id: 'physicsc-momentum-impulse-p5-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Center of Mass of a Non-Uniform Rod

A thin rod of length $L$ lies along the $x$-axis from $x = 0$ to $x = L$. Its linear mass density increases as $\\lambda(x) = \\lambda_0\\dfrac{x}{L}$. Find the center of mass.

**Step 1 — Set up the mass element.** A slice of width $dx$ has mass $dm = \\lambda(x)\\,dx = \\lambda_0\\dfrac{x}{L}\\,dx$.

**Step 2 — Total mass.**

$M = \\int_0^L \\lambda_0\\frac{x}{L}\\,dx = \\frac{\\lambda_0}{L}\\left[\\frac{x^2}{2}\\right]_0^L = \\frac{\\lambda_0 L}{2}$

**Step 3 — Apply the center-of-mass integral.**

$x_{\\text{cm}} = \\frac{1}{M}\\int_0^L x\\,dm = \\frac{1}{M}\\int_0^L x\\left(\\lambda_0\\frac{x}{L}\\right)dx = \\frac{\\lambda_0}{ML}\\int_0^L x^2\\,dx$

**Step 4 — Evaluate.**

$x_{\\text{cm}} = \\frac{\\lambda_0}{ML}\\cdot\\frac{L^3}{3} = \\frac{\\lambda_0 L^2}{3M} = \\frac{\\lambda_0 L^2}{3}\\cdot\\frac{2}{\\lambda_0 L} = \\frac{2L}{3}$

> 🔑 The center of mass sits at $\\dfrac{2L}{3}$, shifted toward the dense end — exactly what intuition predicts when more mass is concentrated near $x = L$.`
    },
    {
      id: 'physicsc-momentum-impulse-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two masses: 2 kg at $x=0$ and 4 kg at $x=6\\,\\text{m}$. $x_{\\text{cm}} =$',
            options: ['$2\\,\\text{m}$', '$3\\,\\text{m}$', '$4\\,\\text{m}$', '$5\\,\\text{m}$'],
            correctAnswer: 2,
            explanation: '$x_{\\text{cm}} = \\dfrac{2(0) + 4(6)}{2+4} = \\dfrac{24}{6} = 4\\,\\text{m}$, closer to the heavier mass.'
          },
          {
            question: 'The center of mass of an isolated system:',
            options: ['Accelerates', 'Moves at constant velocity', 'Is always at rest', 'Changes direction'],
            correctAnswer: 1,
            explanation: 'With no net external force, $\\vec{a}_{\\text{cm}} = 0$, so $\\vec{v}_{\\text{cm}}$ is constant — even during internal collisions or explosions.'
          },
          {
            question: 'A rod from $x=0$ to $x=L$ has density $\\lambda(x) = \\lambda_0\\,x/L$. Its center of mass is at:',
            options: ['$L/3$', '$L/2$', '$2L/3$', '$3L/4$'],
            correctAnswer: 2,
            explanation: 'Integrating gives $x_{\\text{cm}} = 2L/3$ — the density grows toward $x=L$, so the CM shifts toward that end.'
          },
          {
            question: 'A uniform rod of length $L$ has its center of mass at:',
            options: ['$x = 0$', '$x = L/4$', '$x = L/2$', '$x = L$'],
            correctAnswer: 2,
            explanation: 'For uniform $\\lambda$, symmetry places the center of mass at the geometric center, $x = L/2$.'
          },
          {
            question: 'A 60 kg person stands at one end of a 40 kg boat (frictionless water) and walks to the other end. The center of mass of the person–boat system:',
            options: ['Moves with the person', 'Moves with the boat', 'Stays fixed', 'Accelerates forward'],
            correctAnswer: 2,
            explanation: 'No external horizontal force acts, so the system’s center of mass does not move. The boat slides backward as the person walks forward.'
          },
          {
            question: 'For a continuous mass distribution, the center of mass is computed using:',
            options: ['$x_{\\text{cm}} = M\\int x\\,dm$', '$x_{\\text{cm}} = \\dfrac{1}{M}\\int x\\,dm$', '$x_{\\text{cm}} = \\int \\dfrac{dm}{x}$', '$x_{\\text{cm}} = \\dfrac{M}{\\int x\\,dm}$'],
            correctAnswer: 1,
            explanation: '$x_{\\text{cm}} = \\dfrac{1}{M}\\int x\\,dm$, the mass-weighted average position with $M = \\int dm$.'
          }
        ]
      }
    }
  ]
};
