export const physCOscillationsPart6Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Oscillations Workshop

**Part 6 of 7 — AP Physics C Strategies**

---

### Oscillation Problem Types

| Type | Key Formula |
|------|------------|
| Mass-spring period | $T = 2\\pi\\sqrt{m/k}$ |
| Simple pendulum | $T = 2\\pi\\sqrt{L/g}$ |
| Physical pendulum | $T = 2\\pi\\sqrt{I/(mgd)}$ |
| Energy in SHM | $E = \\tfrac{1}{2}kA^2$ |
| Max speed | $v_{\\max} = A\\omega$ |
| Max acceleration | $a_{\\max} = A\\omega^2$ |

---

### Worked Example

A $0.5\\,\\text{kg}$ mass on a spring ($k = 200\\,\\text{N/m}$) is pulled $0.1\\,\\text{m}$ and released.

$\\omega = \\sqrt{200/0.5} = 20\\,\\text{rad/s}$

$T = 2\\pi/20 = 0.314\\,\\text{s}$

$v_{\\max} = 0.1 \\times 20 = 2\\,\\text{m/s}$

$E = \\tfrac{1}{2}(200)(0.1)^2 = 1\\,\\text{J}$`
    },
    {
      id: 'physicsc-oscillations-p6-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Maximum Speed by Differentiation

For the same oscillator, $x(t) = 0.1\\cos(20t)\\,\\text{m}$. Confirm the maximum speed using calculus and find the **first time** the mass reaches it.

**Step 1 — Velocity from the derivative.**

$v(t) = \\frac{dx}{dt} = -0.1(20)\\sin(20t) = -2\\sin(20t)\\,\\text{m/s}$

**Step 2 — Locate the maximum speed.** Speed is greatest where $\\lvert\\sin(20t)\\rvert = 1$. The acceleration is the next derivative:

$a(t) = \\frac{dv}{dt} = -40\\cos(20t)$

Setting $a = 0$ gives $\\cos(20t) = 0$, i.e. $20t = \\dfrac{\\pi}{2}$, so the first time is $t = \\dfrac{\\pi}{40} \\approx 0.0785\\,\\text{s}$.

**Step 3 — Evaluate.** At that instant $\\sin(20t) = \\sin(\\pi/2) = 1$, so $\\lvert v \\rvert = 2\\,\\text{m/s}$, matching $v_{\\max} = A\\omega = 0.1(20) = 2\\,\\text{m/s}$. ✅

**Energy cross-check:** $\\tfrac{1}{2}mv_{\\max}^2 = \\tfrac{1}{2}(0.5)(2)^2 = 1\\,\\text{J} = E$ — all energy is kinetic at $x = 0$.

> 🔑 Maximizing speed means setting $a = dv/dt = 0$, which happens exactly at the equilibrium crossing.`
    },
    {
      id: 'physicsc-oscillations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A spring ($k = 50\\,\\text{N/m}$) with a 0.2 kg mass has $\\omega =$',
            options: ['$5\\,\\text{rad/s}$', '$\\sqrt{250}\\,\\text{rad/s}$', '$10\\,\\text{rad/s}$', '$250\\,\\text{rad/s}$'],
            correctAnswer: 1,
            explanation: '$\\omega = \\sqrt{k/m} = \\sqrt{50/0.2} = \\sqrt{250} \\approx 15.8\\,\\text{rad/s}$.'
          },
          {
            question: 'For $x(t) = 0.1\\cos(20t)\\,\\text{m}$, the maximum speed is:',
            options: ['$0.5\\,\\text{m/s}$', '$1\\,\\text{m/s}$', '$2\\,\\text{m/s}$', '$4\\,\\text{m/s}$'],
            correctAnswer: 2,
            explanation: '$v(t) = -2\\sin(20t)$, so $v_{\\max} = A\\omega = 0.1(20) = 2\\,\\text{m/s}$.'
          },
          {
            question: 'To find where speed is maximum in SHM, you set which quantity to zero?',
            options: ['Position $x$', 'Acceleration $a = dv/dt$', 'Total energy $E$', 'Amplitude $A$'],
            correctAnswer: 1,
            explanation: 'Maximum speed occurs where $dv/dt = a = 0$, i.e. at the equilibrium position $x = 0$.'
          },
          {
            question: 'A 0.5 kg mass on a $k = 200\\,\\text{N/m}$ spring with amplitude 0.1 m has total energy:',
            options: ['$0.5\\,\\text{J}$', '$1\\,\\text{J}$', '$2\\,\\text{J}$', '$4\\,\\text{J}$'],
            correctAnswer: 1,
            explanation: '$E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}(200)(0.1)^2 = 1\\,\\text{J}$.'
          },
          {
            question: 'If the amplitude of an oscillator triples, its maximum speed $v_{\\max} = A\\omega$:',
            options: ['Stays the same', 'Triples', 'Increases by a factor of 9', 'Halves'],
            correctAnswer: 1,
            explanation: '$v_{\\max} = A\\omega \\propto A$ (since $\\omega$ depends only on $k$ and $m$), so tripling $A$ triples $v_{\\max}$.'
          },
          {
            question: 'A mass-spring system has $T = 0.314\\,\\text{s}$. Its angular frequency $\\omega$ is about:',
            options: ['$2\\,\\text{rad/s}$', '$10\\,\\text{rad/s}$', '$20\\,\\text{rad/s}$', '$63\\,\\text{rad/s}$'],
            correctAnswer: 2,
            explanation: '$\\omega = 2\\pi/T = 2\\pi/0.314 \\approx 20\\,\\text{rad/s}$.'
          }
        ]
      }
    }
  ]
};
