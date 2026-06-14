export const physCOscillationsPart4Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p4-intro',
      type: 'text' as const,
      content: `# 📉 Damped Oscillations

**Part 4 of 7 — Friction and Decay**

---

### Damping Force

$F_{\\text{damp}} = -b\\frac{dx}{dt}$

The equation of motion becomes:

$m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = 0$

---

### Solution: Underdamped Case

$x(t) = Ae^{-\\gamma t}\\cos(\\omega' t + \\phi)$

where $\\gamma = \\dfrac{b}{2m}$ and $\\omega' = \\sqrt{\\omega_0^2 - \\gamma^2}$.

---

### Three Damping Regimes

| Regime | Condition | Behavior |
|--------|-----------|----------|
| **Underdamped** | $\\gamma < \\omega_0$ | Oscillates with decaying amplitude |
| **Critically damped** | $\\gamma = \\omega_0$ | Returns to equilibrium fastest, no oscillation |
| **Overdamped** | $\\gamma > \\omega_0$ | Slow return, no oscillation |

> 🔑 Critical damping is used in car suspensions — the fastest return to equilibrium without overshooting.`
    },
    {
      id: 'physicsc-oscillations-p4-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Amplitude Decay of an Underdamped Oscillator

A damped oscillator has $m = 0.50\\,\\text{kg}$, $k = 200\\,\\text{N/m}$, and damping constant $b = 0.50\\,\\text{kg/s}$. Find the decay constant $\\gamma$, the damped frequency $\\omega'$, and how long until the amplitude falls to half its initial value.

**Step 1 — Natural frequency and decay constant.**

$\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{200}{0.50}} = 20\\,\\text{rad/s}, \\qquad \\gamma = \\frac{b}{2m} = \\frac{0.50}{2(0.50)} = 0.50\\,\\text{s}^{-1}$

**Step 2 — Damped angular frequency.** Since $\\gamma \\ll \\omega_0$, the system is underdamped:

$\\omega' = \\sqrt{\\omega_0^2 - \\gamma^2} = \\sqrt{20^2 - 0.5^2} = \\sqrt{400 - 0.25} \\approx 19.99\\,\\text{rad/s}$

**Step 3 — Amplitude envelope.** The amplitude is $A(t) = A_0 e^{-\\gamma t}$. Set it to $A_0/2$ and solve:

$e^{-\\gamma t} = \\tfrac{1}{2} \\;\\Rightarrow\\; -\\gamma t = \\ln\\tfrac{1}{2} \\;\\Rightarrow\\; t = \\frac{\\ln 2}{\\gamma} = \\frac{0.693}{0.50} \\approx 1.39\\,\\text{s}$

> 🔑 The cosine keeps oscillating at nearly $\\omega_0$, but the $e^{-\\gamma t}$ envelope shrinks the amplitude. Light damping barely shifts the frequency.`
    },
    {
      id: 'physicsc-oscillations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In underdamped oscillation, the amplitude:',
            options: ['Stays constant', 'Decreases exponentially', 'Increases', 'Drops to zero instantly'],
            correctAnswer: 1,
            explanation: 'The $e^{-\\gamma t}$ factor causes the amplitude to decay exponentially.'
          },
          {
            question: 'The damping force in $m\\ddot{x} + b\\dot{x} + kx = 0$ is proportional to:',
            options: ['Displacement', 'Velocity', 'Acceleration', 'The square of velocity'],
            correctAnswer: 1,
            explanation: '$F_{\\text{damp}} = -b\\,dx/dt$ is proportional to velocity and opposes the motion.'
          },
          {
            question: 'For $m = 0.50\\,\\text{kg}$ and $b = 0.50\\,\\text{kg/s}$, the decay constant $\\gamma = b/(2m)$ equals:',
            options: ['$0.25\\,\\text{s}^{-1}$', '$0.50\\,\\text{s}^{-1}$', '$1.0\\,\\text{s}^{-1}$', '$2.0\\,\\text{s}^{-1}$'],
            correctAnswer: 1,
            explanation: '$\\gamma = b/(2m) = 0.50/(2\\cdot 0.50) = 0.50\\,\\text{s}^{-1}$.'
          },
          {
            question: 'With $\\gamma = 0.50\\,\\text{s}^{-1}$, the amplitude drops to half its initial value after about:',
            options: ['$0.35\\,\\text{s}$', '$0.69\\,\\text{s}$', '$1.39\\,\\text{s}$', '$2.0\\,\\text{s}$'],
            correctAnswer: 2,
            explanation: '$t = \\ln 2/\\gamma = 0.693/0.50 \\approx 1.39\\,\\text{s}$.'
          },
          {
            question: 'Which condition gives the fastest return to equilibrium WITHOUT oscillating?',
            options: ['Underdamped ($\\gamma < \\omega_0$)', 'Critically damped ($\\gamma = \\omega_0$)', 'Overdamped ($\\gamma > \\omega_0$)', 'Undamped ($\\gamma = 0$)'],
            correctAnswer: 1,
            explanation: 'Critical damping returns the system to equilibrium in the shortest time with no overshoot — used in shock absorbers.'
          },
          {
            question: 'The damped angular frequency $\\omega^{\\prime} = \\sqrt{\\omega_0^2 - \\gamma^2}$ compared to $\\omega_0$ is:',
            options: ['Always larger', 'Always smaller', 'Equal', 'Sometimes imaginary for underdamping'],
            correctAnswer: 1,
            explanation: 'Subtracting $\\gamma^2$ makes $\\omega^{\\prime}$ slightly smaller than $\\omega_0$; for light damping the difference is tiny.'
          }
        ]
      }
    }
  ]
};
