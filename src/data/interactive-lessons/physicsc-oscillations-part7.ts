export const physCOscillationsPart7Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p7-intro',
      type: 'text' as const,
      content: `# 📋 Oscillations Review

**Part 7 of 7 — Comprehensive Summary**

---

### Master Formula Sheet

| Concept | Formula |
|---------|---------|
| SHM position | $x(t) = A\\cos(\\omega t + \\phi)$ |
| Defining equation | $\\dfrac{d^2x}{dt^2} = -\\omega^2 x$ |
| Angular frequency | $\\omega = \\sqrt{k/m}$ (spring), $\\omega = \\sqrt{g/L}$ (pendulum) |
| Total energy | $E = \\tfrac{1}{2}kA^2$ |
| Damped SHM | $x(t) = Ae^{-\\gamma t}\\cos(\\omega^{\\prime} t)$ |
| Resonance | Max amplitude at $\\omega_d \\approx \\omega_0$ |

> 🔑 SHM = any system with $F \\propto -x$. Recognize the pattern, then apply the formulas.`
    },
    {
      id: 'physicsc-oscillations-p7-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Building Energy from the Equation of Motion

Starting from $m\\dfrac{d^2x}{dt^2} = -kx$, derive the conserved energy of an undamped oscillator.

**Step 1 — Multiply both sides by $v = \\dfrac{dx}{dt}$.**

$m\\frac{dv}{dt}\\,v = -kx\\frac{dx}{dt}$

**Step 2 — Recognize each side as a derivative.** Using $\\dfrac{d}{dt}\\big(\\tfrac{1}{2}v^2\\big) = v\\dfrac{dv}{dt}$ and $\\dfrac{d}{dt}\\big(\\tfrac{1}{2}x^2\\big) = x\\dfrac{dx}{dt}$:

$\\frac{d}{dt}\\left(\\tfrac{1}{2}mv^2\\right) = -\\frac{d}{dt}\\left(\\tfrac{1}{2}kx^2\\right)$

**Step 3 — Combine and integrate.**

$\\frac{d}{dt}\\left(\\tfrac{1}{2}mv^2 + \\tfrac{1}{2}kx^2\\right) = 0 \\;\\Rightarrow\\; \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}kx^2 = E = \\text{constant}$

**Step 4 — Identify the constant.** At the turning point $x = A$, $v = 0$, so $E = \\tfrac{1}{2}kA^2$. This also yields $v = \\omega\\sqrt{A^2 - x^2}$.

> 🔑 The "multiply by velocity and integrate" trick converts an equation of motion into an energy-conservation statement — a recurring AP Physics C calculus technique.`
    },
    {
      id: 'physicsc-oscillations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is NOT an example of SHM?',
            options: ['Mass on spring', 'Simple pendulum (small angle)', 'Bouncing ball', 'Torsional oscillator'],
            correctAnswer: 2,
            explanation: 'A bouncing ball lacks a restoring force proportional to displacement, so it is periodic but not simple harmonic.'
          },
          {
            question: 'If you take a pendulum to the Moon (gravity $g/6$), the period:',
            options: ['Decreases by 6', 'Increases by $\\sqrt{6}$', 'Stays the same', 'Doubles'],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{L/g}$. Reducing $g$ by a factor of 6 multiplies $T$ by $\\sqrt{6}$.'
          },
          {
            question: 'Multiplying $m\\,d^2x/dt^2 = -kx$ by $v$ and integrating yields:',
            options: [
              '$\\tfrac{1}{2}mv^2 + \\tfrac{1}{2}kx^2 = \\text{const}$',
              '$mv = -kx$',
              '$v = -\\omega^2 x$',
              '$x = A\\omega t$'
            ],
            correctAnswer: 0,
            explanation: 'The two sides become total time derivatives, giving conservation of $\\tfrac{1}{2}mv^2 + \\tfrac{1}{2}kx^2$.'
          },
          {
            question: 'The defining differential equation of SHM is:',
            options: ['$dx/dt = -\\omega x$', '$d^2x/dt^2 = -\\omega^2 x$', '$d^2x/dt^2 = +\\omega^2 x$', '$d^2x/dt^2 = -\\omega x$'],
            correctAnswer: 1,
            explanation: '$d^2x/dt^2 = -\\omega^2 x$ — acceleration proportional to and opposite the displacement.'
          },
          {
            question: 'A mass-spring oscillator and a simple pendulum both have period $T$. If both are scaled so $T$ doubles, the spring needs $m \\to 4m$ and the pendulum needs:',
            options: ['$L \\to 2L$', '$L \\to 4L$', '$L \\to L/2$', '$g \\to 2g$'],
            correctAnswer: 1,
            explanation: 'Both periods go as $\\sqrt{(\\text{length-like quantity})}$; doubling $T$ needs a factor of 4 in $m$ for the spring and in $L$ for the pendulum.'
          },
          {
            question: 'In SHM, the speed at displacement $x$ is given by:',
            options: ['$v = \\omega(A - x)$', '$v = \\omega\\sqrt{A^2 - x^2}$', '$v = \\omega A x$', '$v = \\omega\\sqrt{A^2 + x^2}$'],
            correctAnswer: 1,
            explanation: 'From energy conservation $\\tfrac{1}{2}kA^2 = \\tfrac{1}{2}kx^2 + \\tfrac{1}{2}mv^2$, solving gives $v = \\omega\\sqrt{A^2 - x^2}$.'
          }
        ]
      }
    }
  ]
};
