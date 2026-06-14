export const physCEMInductionPart5Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p5-intro',
      type: 'text' as const,
      content: `# 🔁 LC Circuits & Electromagnetic Oscillations

**Part 5 of 7 — Energy Oscillations**

---

### LC Circuit

Energy oscillates between the capacitor (electric field) and inductor (magnetic field):

$$q(t) = Q_0 \\cos(\\omega t + \\phi)$$

$$\\omega = \\frac{1}{\\sqrt{LC}}$$

$$T = 2\\pi\\sqrt{LC}$$

---

### Energy Exchange

$$U_C = \\frac{q^2}{2C}, \\quad U_L = \\frac{1}{2}LI^2$$

$$U_{\\text{total}} = \\frac{Q_0^2}{2C} = \\text{constant}$$

> 🔑 LC oscillation is the electromagnetic analog of SHM in mechanics. Charge ↔ position, current ↔ velocity, $L$ ↔ mass, $1/C$ ↔ spring constant.`
    },
    {
      id: 'physicsc-em-induction-em-p5-analogy',
      type: 'text' as const,
      content: `### The Mechanical Analogy in Detail

The LC loop equation $L\\frac{d^2q}{dt^2} + \\frac{q}{C} = 0$ is *identical in form* to the mass–spring equation $m\\frac{d^2x}{dt^2} + kx = 0$. Match the terms:

| Mechanical (mass–spring) | Electrical (LC) |
|--------------------------|-----------------|
| Position $x$ | Charge $q$ |
| Velocity $v = \\dot{x}$ | Current $I = \\dot{q}$ |
| Mass $m$ (inertia) | Inductance $L$ |
| Spring constant $k$ | Reciprocal capacitance $1/C$ |
| $\\omega = \\sqrt{k/m}$ | $\\omega = 1/\\sqrt{LC}$ |
| KE $= \\frac{1}{2}mv^2$ | $U_L = \\frac{1}{2}LI^2$ |
| PE $= \\frac{1}{2}kx^2$ | $U_C = \\frac{q^2}{2C}$ |

### Energy Timing

The energy sloshes between capacitor and inductor at **twice** the charge frequency (because energy $\\propto q^2$ and $\\propto I^2$). When $q$ is maximum, all energy is electric and $I = 0$; a quarter-period later $q = 0$, $I$ is maximum, and all energy is magnetic. With no resistance the total $U = \\frac{Q_0^2}{2C}$ never changes — a real circuit's resistance slowly damps the oscillation (an RLC circuit).`
    },
    {
      id: 'physicsc-em-induction-em-p5-worked',
      type: 'text' as const,
      content: `### Worked Example — Deriving the LC Differential Equation

An LC circuit has $L = 2.0\\text{ mH}$ and $C = 8.0\\,\\mu\\text{F}$. The capacitor starts fully charged with $Q_0 = 5.0\\,\\mu\\text{C}$. (a) Show the charge obeys SHM. (b) Find the oscillation period. (c) Find the maximum current.

**Part (a) — Kirchhoff's loop rule.** The capacitor voltage equals the inductor back-EMF: $\\frac{q}{C} = -L\\frac{dI}{dt}$. With $I = \\frac{dq}{dt}$, this becomes

$L\\frac{d^2q}{dt^2} + \\frac{q}{C} = 0 \\quad\\Longrightarrow\\quad \\frac{d^2q}{dt^2} = -\\frac{1}{LC}\\,q.$

This is the simple-harmonic equation $\\frac{d^2q}{dt^2} = -\\omega^2 q$ with $\\omega = \\frac{1}{\\sqrt{LC}}$, so $q(t) = Q_0\\cos(\\omega t)$.

**Part (b) — Period.** $\\omega = \\frac{1}{\\sqrt{(2.0\\times10^{-3})(8.0\\times10^{-6})}} = \\frac{1}{\\sqrt{1.6\\times10^{-8}}} = \\frac{1}{1.26\\times10^{-4}} = 7.9\\times10^{3}\\text{ rad/s}$. Then $T = \\frac{2\\pi}{\\omega} = 7.9\\times10^{-4}\\text{ s}$.

**Part (c) — Maximum current.** Differentiating, $I = \\frac{dq}{dt} = -Q_0\\omega\\sin(\\omega t)$, so $I_{\\max} = Q_0\\omega = (5.0\\times10^{-6})(7.9\\times10^{3}) = 4.0\\times10^{-2}\\text{ A} = 40\\text{ mA}$. Check via energy: $\\frac{1}{2}LI_{\\max}^2 = \\frac{Q_0^2}{2C}$ gives the same value.`
    },
    {
      id: 'physicsc-em-induction-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The resonant frequency of an LC circuit is:',
            options: ['$\\omega = LC$', '$\\omega = 1/\\sqrt{LC}$', '$\\omega = \\sqrt{L/C}$', '$\\omega = 1/(LC)$'],
            correctAnswer: 1,
            explanation: '$\\omega = 1/\\sqrt{LC}$ — the natural frequency of LC oscillation.'
          },
          {
            question: 'In the mechanical analogy for an LC circuit, the inductance $L$ plays the role of:',
            options: ['The spring constant', 'The mass', 'The damping coefficient', 'The displacement'],
            correctAnswer: 1,
            explanation: 'Comparing $L\\ddot{q} + q/C = 0$ with $m\\ddot{x} + kx = 0$: $L \\leftrightarrow m$, $1/C \\leftrightarrow k$, $q \\leftrightarrow x$, $I \\leftrightarrow v$.'
          },
          {
            question: 'At the instant the capacitor is fully charged in an ideal LC circuit, the current is:',
            options: ['Maximum', 'Zero', 'Half its maximum', 'Negative maximum'],
            correctAnswer: 1,
            explanation: 'When $q = Q_0$ (all energy in the capacitor), $I = -Q_0\\omega\\sin(\\omega t) = 0$. Current is maximum a quarter period later when $q = 0$.'
          },
          {
            question: 'The total energy in an ideal (lossless) LC circuit:',
            options: ['Oscillates between zero and a maximum', 'Decreases exponentially', 'Stays constant, swapping between capacitor and inductor', 'Increases linearly'],
            correctAnswer: 2,
            explanation: '$U_{\\text{total}} = U_C + U_L = \\frac{Q_0^2}{2C}$ is constant; energy shuttles between electric and magnetic forms.'
          },
          {
            question: 'If $C$ is quadrupled in an LC circuit (L fixed), the oscillation frequency $\\omega$ changes by a factor of:',
            options: ['$2$', '$1/2$', '$4$', '$1/4$'],
            correctAnswer: 1,
            explanation: '$\\omega = 1/\\sqrt{LC} \\propto 1/\\sqrt{C}$. Quadrupling $C$ multiplies $\\omega$ by $1/\\sqrt{4} = 1/2$.'
          }
        ]
      }
    }
  ]
};
