export const physCOscillationsPart2Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p2-intro',
      type: 'text' as const,
      content: `# 📐 SHM Kinematics

**Part 2 of 7 — Position, Velocity, Acceleration**

---

### The Three Equations

$x(t) = A\\cos(\\omega t + \\phi)$

$v(t) = \\frac{dx}{dt} = -A\\omega\\sin(\\omega t + \\phi)$

$a(t) = \\frac{dv}{dt} = -A\\omega^2\\cos(\\omega t + \\phi) = -\\omega^2 x$

---

### Maximum Values

- Position: $\\lvert x \\rvert_{\\max} = A$
- Velocity: $\\lvert v \\rvert_{\\max} = A\\omega$
- Acceleration: $\\lvert a \\rvert_{\\max} = A\\omega^2$

> 🔑 Velocity leads position by $\\pi/2$. Acceleration leads velocity by $\\pi/2$. Acceleration is $\\pi$ out of phase with position (they point opposite ways).`
    },
    {
      id: 'physicsc-oscillations-p2-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — From Position Function to Velocity and Acceleration

A particle moves as $x(t) = 0.10\\cos(8t)\\,\\text{m}$ (SI units, so $\\omega = 8\\,\\text{rad/s}$ and $\\phi = 0$). Find the velocity and acceleration at $t = \\dfrac{\\pi}{16}\\,\\text{s}$.

**Step 1 — Differentiate for velocity.**

$v(t) = \\frac{dx}{dt} = -0.10(8)\\sin(8t) = -0.80\\sin(8t)\\,\\text{m/s}$

**Step 2 — Differentiate again for acceleration.**

$a(t) = \\frac{dv}{dt} = -0.80(8)\\cos(8t) = -6.4\\cos(8t)\\,\\text{m/s}^2$

**Step 3 — Evaluate at $t = \\pi/16$.** Note $8t = 8\\cdot\\dfrac{\\pi}{16} = \\dfrac{\\pi}{2}$, so $\\sin(\\pi/2) = 1$ and $\\cos(\\pi/2) = 0$:

$v = -0.80(1) = -0.80\\,\\text{m/s}, \\qquad a = -6.4(0) = 0\\,\\text{m/s}^2$

**Interpretation:** At this instant the particle is at $x = 0.10\\cos(\\pi/2) = 0$ — the equilibrium point — so it has **maximum speed** ($\\lvert v \\rvert = A\\omega = 0.80\\,\\text{m/s}$) and **zero acceleration**, exactly as predicted.

> 🔑 Each derivative shifts the phase by $\\pi/2$: cosine → $-$sine → $-$cosine.`
    },
    {
      id: 'physicsc-oscillations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Maximum acceleration in SHM occurs when:',
            options: ['$x = 0$', '$x = A$ or $x = -A$', '$v$ is maximum', 'Energy is all kinetic'],
            correctAnswer: 1,
            explanation: '$a = -\\omega^2 x$, so $\\lvert a \\rvert$ is maximum where $\\lvert x \\rvert$ is maximum — at the turning points.'
          },
          {
            question: 'The maximum speed in SHM is:',
            options: ['$A/\\omega$', '$A\\omega$', '$A\\omega^2$', '$\\omega/A$'],
            correctAnswer: 1,
            explanation: '$v_{\\max} = A\\omega$, occurring at the equilibrium position $x = 0$.'
          },
          {
            question: 'For $x(t) = 0.10\\cos(8t)\\,\\text{m}$, the maximum acceleration is:',
            options: ['$0.80\\,\\text{m/s}^2$', '$1.6\\,\\text{m/s}^2$', '$6.4\\,\\text{m/s}^2$', '$64\\,\\text{m/s}^2$'],
            correctAnswer: 2,
            explanation: '$a_{\\max} = A\\omega^2 = 0.10(8)^2 = 0.10(64) = 6.4\\,\\text{m/s}^2$.'
          },
          {
            question: 'Differentiating $x(t) = A\\cos(\\omega t)$ once gives the velocity:',
            options: ['$A\\omega\\cos(\\omega t)$', '$-A\\omega\\sin(\\omega t)$', '$-A\\omega^2\\cos(\\omega t)$', '$A\\sin(\\omega t)$'],
            correctAnswer: 1,
            explanation: '$v = dx/dt = -A\\omega\\sin(\\omega t)$ by the chain rule.'
          },
          {
            question: 'When a SHM oscillator passes through equilibrium ($x = 0$), its acceleration is:',
            options: ['Maximum', 'Zero', 'Equal to $-\\omega^2 A$', 'Undefined'],
            correctAnswer: 1,
            explanation: 'Since $a = -\\omega^2 x$ and $x = 0$ at equilibrium, $a = 0$ there while the speed is greatest.'
          },
          {
            question: 'In SHM, the phase relationship between acceleration and position is:',
            options: ['In phase', '$\\pi/2$ out of phase', '$\\pi$ out of phase', '$\\pi/4$ out of phase'],
            correctAnswer: 2,
            explanation: '$a = -\\omega^2 x$ means acceleration always points opposite to displacement — exactly $\\pi$ (180°) out of phase.'
          }
        ]
      }
    }
  ]
};
