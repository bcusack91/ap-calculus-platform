export const physCOscillationsPart5Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p5-intro',
      type: 'text' as const,
      content: `# 🔊 Natural Frequency, Resonance, and SHM Graphs

**Part 5 of 7 — Natural Frequency, Resonance, and SHM Graphs**

---

### Natural Frequency

The **natural frequency** of a system is the frequency at which it oscillates on its own after being displaced from equilibrium and released:

| System | Natural angular frequency |
|--------|---------------------------|
| Mass on a spring | $\\omega_0 = \\sqrt{k/m}$ |
| Simple pendulum | $\\omega_0 = \\sqrt{g/L}$ |
| Physical pendulum | $\\omega_0 = \\sqrt{mgd/I}$ |
| Torsion pendulum | $\\omega_0 = \\sqrt{\\kappa/I}$ |

Convert with $f_0 = \\dfrac{\\omega_0}{2\\pi}$ and $T = \\dfrac{1}{f_0}$.

---

### Resonance

Now push the system with a **sinusoidal external force**. If the push repeats at the natural frequency, each push arrives in step with the motion and adds energy every cycle, so the amplitude grows. This is **resonance**:

- Resonance occurs when the external force is exerted **at the natural frequency** of the system.
- Resonance **increases the amplitude** of the oscillation.

Everyday examples: pushing a child on a swing once per swing, a singer's note shattering a glass, a washing machine shaking hardest at one spin speed.

The AP Physics C exam treats resonance qualitatively; formulas for the driven amplitude are not tested.

---

### Amplitude Does Not Change the Period

For SHM, $T = 2\\pi\\sqrt{m/k}$ (or $2\\pi\\sqrt{L/g}$) contains no amplitude. Pulling a spring farther before release raises the energy $\\tfrac{1}{2}kA^2$ and the maximum speed $A\\omega$, but the period stays the same.`
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
            question: 'Resonance occurs when a periodic external force is exerted:',
            options: ['At the natural frequency', 'At twice the natural frequency', 'At any frequency, as long as the force is large', 'At a frequency much higher than the natural one'],
            correctAnswer: 0,
            explanation: 'Pushes that repeat at the natural frequency stay in step with the motion and add energy every cycle, so the amplitude grows.'
          },
          {
            question: 'A 1.0 kg cart on a spring ($k = 100$ N/m) is shaken by a motor. The amplitude is largest when the motor runs at about:',
            options: ['$1.6\\,\\text{Hz}$', '$10\\,\\text{Hz}$', '$0.63\\,\\text{Hz}$', '$100\\,\\text{Hz}$'],
            correctAnswer: 0,
            explanation: '$\\omega_0 = \\sqrt{100/1.0} = 10\\,\\text{rad/s}$, so $f_0 = 10/(2\\pi) \\approx 1.6\\,\\text{Hz}$. Using 10 Hz confuses angular frequency with frequency.'
          },
          {
            question: 'A spring–block oscillator is released from twice its earlier starting displacement. Its period:',
            options: ['Doubles', 'Is unchanged', 'Increases by a factor of $\\sqrt{2}$', 'Halves'],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{m/k}$ has no amplitude dependence. The larger amplitude raises the energy and the maximum speed, not the period.'
          }
        ]
      }
    },
    {
      id: 'physicsc-oscillations-p5-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Reading an SHM Graph

A graph of position versus time for a block on a spring shows: $x = 0$ at $t = 0$ with a **positive** slope, a first maximum of $x = 0.05\\,\\text{m}$ at $t = 0.25\\,\\text{s}$, and a return to $x = 0$ at $t = 0.50\\,\\text{s}$. Write $x(t)$ and find $v_{\\max}$.

**Step 1 — Amplitude.** The largest displacement is $A = 0.05\\,\\text{m}$.

**Step 2 — Period.** Going from equilibrium to the maximum is one quarter of a cycle, so $T = 4(0.25) = 1.0\\,\\text{s}$ and

$\\omega = \\frac{2\\pi}{T} = 2\\pi\\,\\text{rad/s}$

**Step 3 — Phase.** The block starts at equilibrium moving in the $+x$ direction. A sine starts that way:

$x(t) = 0.05\\sin(2\\pi t) = 0.05\\cos\\!\\left(2\\pi t - \\tfrac{\\pi}{2}\\right)\\,\\text{m}$

so in the form $A\\cos(\\omega t + \\phi)$, the phase constant is $\\phi = -\\pi/2$.

**Step 4 — Maximum speed.** The slope of the graph is the velocity, and it is steepest at the equilibrium crossings:

$v_{\\max} = A\\omega = 0.05(2\\pi) \\approx 0.31\\,\\text{m/s}$

**Reading other features from the graph:**

| Feature on the $x$–$t$ graph | Meaning |
|------------------------------|---------|
| Peaks and troughs | $v = 0$ and $\\lvert a \\rvert = A\\omega^2$ (turning points) |
| Zero crossings | $\\lvert v \\rvert = A\\omega$ and $a = 0$ |
| Slope sign | Direction of motion |
| Concave down | $a < 0$, which happens where $x > 0$ |

> 🔑 Read $A$ from the peak height, $T$ from the time between matching points, and $\\phi$ from where the graph starts and which way it is heading.`
    },
    {
      id: 'physicsc-oscillations-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An $x$–$t$ graph for an oscillator shows a maximum at $t = 0$ and the next maximum at $t = 0.8$ s, with peaks at $x = 3$ cm. Its position is:',
            options: ['$x = 3\\cos(2.5\\pi t)$ cm', '$x = 3\\sin(2.5\\pi t)$ cm', '$x = 3\\cos(0.8\\pi t)$ cm', '$x = 6\\cos(2.5\\pi t)$ cm'],
            correctAnswer: 0,
            explanation: 'Starting at a maximum means a cosine with $\\phi = 0$. Maximum to maximum is one period, $T = 0.8$ s, so $\\omega = 2\\pi/0.8 = 2.5\\pi\\,\\text{rad/s}$, and the amplitude is the peak height, 3 cm.'
          },
          {
            question: 'At an instant when the $x$–$t$ graph of an oscillator crosses $x = 0$ with negative slope, the object has:',
            options: ['Maximum speed in the $-x$ direction and zero acceleration', 'Zero speed and maximum acceleration in the $+x$ direction', 'Maximum speed in the $+x$ direction and zero acceleration', 'Zero speed and maximum acceleration in the $-x$ direction'],
            correctAnswer: 0,
            explanation: 'The slope is the velocity, so a negative slope at the equilibrium crossing means maximum speed moving in $-x$; since $a = -\\omega^2 x$, the acceleration there is zero.'
          },
          {
            question: 'A 2.5 m simple pendulum ($g = 10\\,\\text{m/s}^2$) is pushed gently once per cycle. Its amplitude grows fastest if the pushes come every:',
            options: ['$3.1\\,\\text{s}$', '$1.6\\,\\text{s}$', '$0.5\\,\\text{s}$', '$6.3\\,\\text{s}$'],
            correctAnswer: 0,
            explanation: '$\\omega_0 = \\sqrt{10/2.5} = 2\\,\\text{rad/s}$, so $T = 2\\pi/2 \\approx 3.1$ s. Pushing once per natural period keeps every push in step with the swing.'
          }
        ]
      }
    }
  ]
};
