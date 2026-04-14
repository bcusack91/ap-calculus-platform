export const physics2MagneticFieldsPart7Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf7-intro',
      type: 'text' as const,
      content: `
# 🏆 Synthesis & AP Review

**Part 7 of 7 — Right-Hand Rule Mastery, Common Mistakes, and AP FRQ Preview**

You've learned the core of magnetism: fields from sources, forces on charges and wires, circular motion, and torque on loops. This final part ties everything together and prepares you for AP-level problems.
      `
    },
    {
      id: 'mf7-formula-summary',
      type: 'text' as const,
      content: `
## 📋 Master Formula Sheet

### Forces

| Situation | Formula |
|-----------|---------|
| Force on moving charge | $\\vec{F} = q\\vec{v} \\times \\vec{B}$, $F = qvB\\sin\\theta$ |
| Force on current-carrying wire | $\\vec{F} = I\\vec{L} \\times \\vec{B}$, $F = BIL\\sin\\theta$ |
| Force between parallel wires | $F/L = \\mu_0 I_1 I_2 / (2\\pi d)$ |

### Fields from Currents

| Source | Formula |
|--------|---------|
| Long straight wire | $B = \\mu_0 I/(2\\pi r)$ |
| Solenoid (inside) | $B = \\mu_0 nI$ |
| Ampère's law | $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$ |

### Circular Motion

| Quantity | Formula |
|----------|---------|
| Radius | $r = mv/(qB)$ |
| Period | $T = 2\\pi m/(qB)$ |
| Cyclotron frequency | $f = qB/(2\\pi m)$ |
| Velocity selector | $v = E/B$ |

### Torque and Dipoles

| Quantity | Formula |
|----------|---------|
| Dipole moment | $\\mu = NIA$ |
| Torque | $\\tau = NIAB\\sin\\phi$ |
| Potential energy | $U = -\\mu B\\cos\\phi$ |

### Constants

$$\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T·m/A}$$
$$e = 1.6 \\times 10^{-19} \\text{ C}$$
$$m_p = 1.67 \\times 10^{-27} \\text{ kg}$$
$$m_e = 9.11 \\times 10^{-31} \\text{ kg}$$
      `
    },
    {
      id: 'mf7-common-mistakes',
      type: 'text' as const,
      content: `
## ⚠️ Common Mistakes on the AP Exam

### Mistake 1: Wrong Hand

Using the **left** hand for the right-hand rule (for positive charges or conventional current). Left hand is only for negative charges.

### Mistake 2: Confusing $1/r$ and $1/r^2$

- **Coulomb/Electric field**: $F \\propto 1/r^2$, $E \\propto 1/r^2$
- **Wire magnetic field**: $B \\propto 1/r$ (NOT $1/r^2$!)

### Mistake 3: Thinking Magnetic Force Does Work

The magnetic force is always perpendicular to velocity: $\\vec{F} \\perp \\vec{v}$. It changes **direction** but not **speed**. It does **no work** and cannot change kinetic energy.

### Mistake 4: Forgetting sinθ

$F = qvB$ only when $\\vec{v} \\perp \\vec{B}$. The general formula is $F = qvB\\sin\\theta$. If $\\vec{v} \\parallel \\vec{B}$, $F = 0$.

### Mistake 5: Period Depends on Speed

The cyclotron period $T = 2\\pi m/(qB)$ is **independent of speed**. Students often think faster particles take less time — they don't. They travel a bigger circle at a proportionally higher speed.

### Mistake 6: Parallel Wires Direction

Same-direction currents **attract** (not repel). This is counterintuitive — think of it as: the wires' fields reinforce between them, creating a pressure that pushes them together.
      `
    },
    {
      id: 'mf7-right-hand-mastery',
      type: 'dropdown-select' as const,
      content: `
**Right-Hand Rule Mastery Challenge** 👋

Mixed scenarios — identify the correct direction or quantity.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Proton moves left, B points out of page: Force is',
            options: ['up', 'down', 'left', 'right', 'zero']
          },
          {
            label: 'Electron moves up, B points to the right: Force is',
            options: ['into page', 'out of page', 'up', 'down', 'zero']
          },
          {
            label: 'Current-carrying wire points into page, B points up: Force on wire is',
            options: ['left', 'right', 'into page', 'out of page', 'zero']
          },
          {
            label: 'Wire field: current flows toward you. Field circles:',
            options: ['clockwise', 'counterclockwise', 'radially outward', 'along the wire']
          },
          {
            label: 'Two parallel wires with currents in the same direction:',
            options: ['attract', 'repel', 'no force', 'twist around each other']
          }
        ],
        correctAnswers: ['up', 'out of page', 'right', 'counterclockwise', 'attract'],
        hint1: 'Proton (positive): $(-\\hat{x}) \\times \\hat{z} = -(\\hat{x} \\times \\hat{z}) = -(-\\hat{y}) = +\\hat{y}$ = up.',
        hint2: 'Electron: find +q direction first, then reverse. +q up × right = $\\hat{y} \\times \\hat{x} = -\\hat{z}$ (into page). Electron: out of page.',
        hint3: 'Current toward you → thumb toward you → fingers curl counterclockwise.',
        explanation: 'Proton left, B out: $(-\\hat{x}) \\times \\hat{z} = +\\hat{y}$ (up). Electron up, B right: +q gives into page, electron reverses to out of page. Wire into page, B up: $(-\\hat{z}) \\times \\hat{y} = -(\\hat{z} \\times \\hat{y}) = -(-\\hat{x}) = +\\hat{x}$ (right). Current toward you: field circles counterclockwise. Same-direction parallel currents attract.'
      }
    },
    {
      id: 'mf7-frq-preview',
      type: 'text' as const,
      content: `
## 📝 AP FRQ Preview

A common AP Physics 2 free-response question type:

### Setup
A proton is launched horizontally into a region of uniform magnetic field pointing into the page.

### Typical Parts

**(a)** Draw the path of the proton. Explain why it curves.

*Answer: The proton follows a circular arc. The magnetic force $F = qvB$ acts perpendicular to the velocity, providing centripetal acceleration.*

**(b)** Determine the radius of the circular path.

*Answer: $r = mv/(qB)$. Substitute given values.*

**(c)** If the proton is replaced by an alpha particle ($q = 2e$, $m = 4m_p$) with the same speed, how does the radius change?

*Answer: $r_{\\alpha}/r_p = (4m_p \\cdot qB)/(2e \\cdot m_p B) \\cdot (v/v) = 4m_p/(2m_p) \\cdot (e/(e)) = 2$. The alpha particle has twice the radius.*

**(d)** Does the magnetic field do work on the proton? Justify.

*Answer: No. The magnetic force is always perpendicular to velocity ($\\vec{F} \\perp \\vec{v}$), so $W = \\vec{F} \\cdot \\Delta\\vec{r} = 0$. Speed and KE remain constant.*

### Pro Tips for FRQs

- Always **state the relevant equation** before plugging in numbers
- **Explain directions** using the right-hand rule explicitly
- **Justify "no work"** by citing $\\vec{F} \\perp \\vec{v}$
- When comparing particles, use **ratios** to avoid numerical errors
      `
    },
    {
      id: 'mf7-calculation-challenge',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculation Challenge** 🎯

An electron ($m = 9.11 \\times 10^{-31}$ kg, $q = 1.6 \\times 10^{-19}$ C) is accelerated from rest through a potential difference of 500 V, then enters a uniform 0.010 T magnetic field perpendicular to its velocity.

1) Speed of the electron after acceleration (in m/s, use scientific notation like 1.3e7)

2) Radius of the circular path in the magnetic field (in m, to 3 significant figures)

3) Cyclotron period (in s, use scientific notation like 3.6e-9)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.3e7', '0.0075', '3.6e-9'],
        hint1: 'Energy conservation: $qV = \\frac{1}{2}mv^2$. Solve for $v = \\sqrt{2qV/m}$.',
        hint2: '$r = mv/(qB) = (9.11 \\times 10^{-31})(1.33 \\times 10^7)/((1.6 \\times 10^{-19})(0.010))$.',
        hint3: '$T = 2\\pi m/(qB) = 2\\pi(9.11 \\times 10^{-31})/((1.6 \\times 10^{-19})(0.010))$.',
        explanation: '(1) $v = \\sqrt{2(1.6 \\times 10^{-19})(500)/(9.11 \\times 10^{-31})} = \\sqrt{1.758 \\times 10^{14}} = 1.326 \\times 10^7$ m/s ≈ $1.3 \\times 10^7$ m/s. (2) $r = (9.11 \\times 10^{-31})(1.326 \\times 10^7)/((1.6 \\times 10^{-19})(0.010)) = 1.208 \\times 10^{-23}/(1.6 \\times 10^{-21}) = 0.00755$ m ≈ 0.0075 m. (3) $T = 2\\pi(9.11 \\times 10^{-31})/((1.6 \\times 10^{-19})(0.010)) = 5.725 \\times 10^{-30}/(1.6 \\times 10^{-21}) = 3.58 \\times 10^{-9}$ s ≈ $3.6 \\times 10^{-9}$ s.'
      }
    },
    {
      id: 'mf7-final-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz — Magnetic Fields and Forces** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A positive charge moves north in a magnetic field pointing west. The magnetic force is directed:',
            options: [
              'Up (out of the ground)',
              'Down (into the ground)',
              'East',
              'South'
            ],
            correctAnswer: 0,
            explanation: 'North × West: $\\hat{y} \\times (-\\hat{x}) = -(\\hat{y} \\times \\hat{x}) = -(-\\hat{z}) = \\hat{z}$ = up. RHR: fingers north, curl west → thumb up.'
          },
          {
            question: 'A proton moves in a circle of radius 5.0 cm in a 0.20 T field. Its speed is approximately:',
            options: [
              '$9.6 \\times 10^5$ m/s',
              '$4.8 \\times 10^5$ m/s',
              '$1.9 \\times 10^6$ m/s',
              '$3.8 \\times 10^6$ m/s'
            ],
            correctAnswer: 0,
            explanation: '$v = qBr/m = (1.6 \\times 10^{-19})(0.20)(0.05)/(1.67 \\times 10^{-27}) = 1.6 \\times 10^{-21}/(1.67 \\times 10^{-27}) = 9.58 \\times 10^5 \\approx 9.6 \\times 10^5$ m/s.'
          },
          {
            question: 'The magnetic field inside a solenoid with 1000 turns/m carrying 3.0 A is:',
            options: [
              '$3.77 \\times 10^{-4}$ T',
              '$3.77 \\times 10^{-3}$ T',
              '$1.88 \\times 10^{-3}$ T',
              '$6.0 \\times 10^{-4}$ T'
            ],
            correctAnswer: 1,
            explanation: '$B = \\mu_0 nI = (4\\pi \\times 10^{-7})(1000)(3.0) = 12\\pi \\times 10^{-4} = 3.77 \\times 10^{-3}$ T.'
          },
          {
            question: 'A velocity selector has $E = 3.0 \\times 10^5$ V/m and $B = 0.060$ T. The selected speed is:',
            options: [
              '$1.8 \\times 10^4$ m/s',
              '$5.0 \\times 10^5$ m/s',
              '$5.0 \\times 10^6$ m/s',
              '$3.0 \\times 10^7$ m/s'
            ],
            correctAnswer: 2,
            explanation: '$v = E/B = (3.0 \\times 10^5)/(0.060) = 5.0 \\times 10^6$ m/s.'
          },
          {
            question: 'Which statement about the magnetic force is FALSE?',
            options: [
              'It is always perpendicular to the velocity',
              'It does no work on the particle',
              'It can change the speed of a particle',
              'It depends on the sine of the angle between v and B'
            ],
            correctAnswer: 2,
            explanation: 'The magnetic force is always perpendicular to velocity, so it does no work and CANNOT change speed — only direction. The false statement is C.'
          }
        ]
      }
    }
  ]
}
