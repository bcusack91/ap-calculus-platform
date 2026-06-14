export const physCOscillationsPart3Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p3-intro',
      type: 'text' as const,
      content: `# 🕐 Pendulums

**Part 3 of 7 — Simple and Physical Pendulums**

---

### Simple Pendulum (small angle)

For small angles ($\\theta < 15^\\circ$):

$T = 2\\pi\\sqrt{\\frac{L}{g}}$

Note: the period is **independent of mass** and **independent of amplitude** (for small angles).

---

### Physical Pendulum

Any rigid body oscillating about a pivot:

$T = 2\\pi\\sqrt{\\frac{I}{mgd}}$

where $I$ is the moment of inertia about the pivot and $d$ is the distance from the pivot to the center of mass.

---

### Torsional Oscillator

$T = 2\\pi\\sqrt{\\frac{I}{\\kappa}}$

where $\\kappa$ is the torsional constant (restoring torque $= -\\kappa\\theta$).`
    },
    {
      id: 'physicsc-oscillations-p3-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Deriving the Pendulum Period from Torque

Start from the rotational form of Newton's second law, $\\tau = I\\alpha$, to show a simple pendulum undergoes SHM and find its period.

**Step 1 — Write the restoring torque.** For a bob of mass $m$ at length $L$, gravity supplies a torque about the pivot:

$\\tau = -mgL\\sin\\theta$

**Step 2 — Apply $\\tau = I\\alpha$ with $I = mL^2$ and $\\alpha = \\dfrac{d^2\\theta}{dt^2}$.**

$mL^2\\frac{d^2\\theta}{dt^2} = -mgL\\sin\\theta$

**Step 3 — Use the small-angle approximation $\\sin\\theta \\approx \\theta$.**

$\\frac{d^2\\theta}{dt^2} = -\\frac{g}{L}\\theta$

This has the SHM form $\\dfrac{d^2\\theta}{dt^2} = -\\omega^2\\theta$ with $\\omega = \\sqrt{g/L}$.

**Step 4 — Convert to a period.**

$T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L}{g}}$

**Numeric check:** a $1.0\\,\\text{m}$ pendulum on Earth has $T = 2\\pi\\sqrt{1.0/9.8} \\approx 2.0\\,\\text{s}$.

> 🔑 SHM emerges only **because** of the small-angle approximation $\\sin\\theta \\approx \\theta$. For large swings the motion is periodic but no longer simple harmonic.`
    },
    {
      id: 'physicsc-oscillations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the length of a simple pendulum changes the period by:',
            options: ['$2$', '$\\sqrt{2}$', '$4$', '$1/2$'],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{L/g}$. Doubling $L$ multiplies $T$ by $\\sqrt{2}$.'
          },
          {
            question: 'A simple pendulum’s period does NOT depend on:',
            options: ['Length', 'Gravity', 'Mass', 'All of these'],
            correctAnswer: 2,
            explanation: '$T = 2\\pi\\sqrt{L/g}$ contains no mass term — the period depends only on $L$ and $g$.'
          },
          {
            question: 'The simple-pendulum equation $d^2\\theta/dt^2 = -(g/L)\\theta$ relies on the approximation:',
            options: ['$\\cos\\theta \\approx 1$', '$\\sin\\theta \\approx \\theta$', '$\\tan\\theta \\approx 0$', '$\\theta \\approx \\pi$'],
            correctAnswer: 1,
            explanation: 'Replacing $\\sin\\theta$ with $\\theta$ (valid for small angles) turns the equation of motion into the SHM form.'
          },
          {
            question: 'A 1.0 m simple pendulum on Earth ($g = 9.8\\,\\text{m/s}^2$) has a period of about:',
            options: ['$0.5\\,\\text{s}$', '$1.0\\,\\text{s}$', '$2.0\\,\\text{s}$', '$4.0\\,\\text{s}$'],
            correctAnswer: 2,
            explanation: '$T = 2\\pi\\sqrt{1.0/9.8} \\approx 2.0\\,\\text{s}$.'
          },
          {
            question: 'For a physical pendulum, the period is $T = 2\\pi\\sqrt{I/(mgd)}$. Increasing the moment of inertia $I$ (with $d$ fixed):',
            options: ['Decreases the period', 'Increases the period', 'Leaves the period unchanged', 'Makes it stop oscillating'],
            correctAnswer: 1,
            explanation: 'Period grows as $\\sqrt{I}$. A larger rotational inertia means a slower swing, so $T$ increases.'
          },
          {
            question: 'A torsional oscillator has restoring torque $\\tau = -\\kappa\\theta$. Its angular frequency is:',
            options: ['$\\omega = \\sqrt{\\kappa I}$', '$\\omega = \\sqrt{\\kappa/I}$', '$\\omega = \\sqrt{I/\\kappa}$', '$\\omega = \\kappa/I$'],
            correctAnswer: 1,
            explanation: 'With $I\\,d^2\\theta/dt^2 = -\\kappa\\theta$, we get $\\omega = \\sqrt{\\kappa/I}$ and $T = 2\\pi\\sqrt{I/\\kappa}$.'
          }
        ]
      }
    }
  ]
};
