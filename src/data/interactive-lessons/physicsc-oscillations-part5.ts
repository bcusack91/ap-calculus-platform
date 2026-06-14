export const physCOscillationsPart5Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p5-intro',
      type: 'text' as const,
      content: `# 🔊 Driven Oscillations & Resonance

**Part 5 of 7 — Forced Vibrations**

---

### Driven Oscillation

Apply a periodic driving force $F(t) = F_0\\cos(\\omega_d t)$:

$m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = F_0\\cos(\\omega_d t)$

Steady-state solution: $x(t) = A(\\omega_d)\\cos(\\omega_d t - \\delta)$

---

### Resonance

$A(\\omega_d) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2}}$

The amplitude is maximum near $\\omega_d = \\omega_0$ (the natural frequency).

> 🔑 **Resonance** = the driving frequency matches the natural frequency, producing maximum energy transfer and the largest amplitude.`
    },
    {
      id: 'physicsc-oscillations-p5-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Amplitude On and Off Resonance

A driven oscillator has $m = 1.0\\,\\text{kg}$, $k = 100\\,\\text{N/m}$, $b = 2.0\\,\\text{kg/s}$, and a driving force amplitude $F_0 = 5.0\\,\\text{N}$. Compare the steady-state amplitude **at resonance** ($\\omega_d = \\omega_0$) with a low-frequency drive ($\\omega_d \\to 0$).

**Step 1 — Natural frequency.**

$\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{100}{1.0}} = 10\\,\\text{rad/s}$

**Step 2 — Amplitude at resonance.** At $\\omega_d = \\omega_0$ the $(\\omega_0^2 - \\omega_d^2)$ term vanishes, leaving:

$A_{\\text{res}} = \\frac{F_0/m}{b\\omega_0/m} = \\frac{F_0}{b\\omega_0} = \\frac{5.0}{(2.0)(10)} = 0.25\\,\\text{m}$

**Step 3 — Amplitude at very low frequency.** As $\\omega_d \\to 0$, the denominator approaches $\\omega_0^2$:

$A_{0} = \\frac{F_0/m}{\\omega_0^2} = \\frac{F_0}{k} = \\frac{5.0}{100} = 0.050\\,\\text{m}$

**Result:** Driving at resonance gives an amplitude $0.25/0.050 = 5\\times$ larger than the slow ("static") response — and smaller damping $b$ would make the peak even sharper.

> 🔑 The resonance peak height is set by the **damping**: smaller $b$ → taller, narrower peak (higher quality factor $Q = \\omega_0 m / b$).`
    },
    {
      id: 'physicsc-oscillations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Resonance occurs when the driving frequency:',
            options: ['Is zero', 'Equals the natural frequency', 'Is twice the natural frequency', 'Is very high'],
            correctAnswer: 1,
            explanation: 'The amplitude peaks when $\\omega_d \\approx \\omega_0$, the natural frequency of the oscillator.'
          },
          {
            question: 'For $m = 1.0\\,\\text{kg}$ and $k = 100\\,\\text{N/m}$, the resonant (natural) frequency is:',
            options: ['$1\\,\\text{rad/s}$', '$10\\,\\text{rad/s}$', '$50\\,\\text{rad/s}$', '$100\\,\\text{rad/s}$'],
            correctAnswer: 1,
            explanation: '$\\omega_0 = \\sqrt{k/m} = \\sqrt{100/1.0} = 10\\,\\text{rad/s}$.'
          },
          {
            question: 'At exact resonance, the steady-state amplitude is:',
            options: ['$F_0/k$', '$F_0/(b\\omega_0)$', '$F_0 m$', 'Infinite for any damping'],
            correctAnswer: 1,
            explanation: 'At $\\omega_d = \\omega_0$ the $(\\omega_0^2 - \\omega_d^2)$ term is zero, so $A = (F_0/m)/(b\\omega_0/m) = F_0/(b\\omega_0)$.'
          },
          {
            question: 'Reducing the damping constant $b$ in a driven oscillator makes the resonance peak:',
            options: ['Shorter and wider', 'Taller and narrower', 'Shift to higher frequency', 'Disappear'],
            correctAnswer: 1,
            explanation: 'Smaller $b$ gives a larger peak amplitude $F_0/(b\\omega_0)$ and a sharper (higher-$Q$) resonance curve.'
          },
          {
            question: 'In the steady state, a driven oscillator vibrates at:',
            options: ['Its natural frequency $\\omega_0$', 'The driving frequency $\\omega_d$', 'The average of $\\omega_0$ and $\\omega_d$', 'Zero frequency'],
            correctAnswer: 1,
            explanation: 'Once transients die out, the oscillator follows the driving force at $\\omega_d$, generally with a phase lag $\\delta$.'
          },
          {
            question: 'As the driving frequency approaches zero ($\\omega_d \\to 0$), the amplitude approaches:',
            options: ['$0$', '$F_0/k$', '$F_0/(b\\omega_0)$', 'Infinity'],
            correctAnswer: 1,
            explanation: 'The denominator tends to $\\omega_0^2$, giving $A \\to (F_0/m)/\\omega_0^2 = F_0/k$ — the static spring displacement.'
          }
        ]
      }
    }
  ]
};
