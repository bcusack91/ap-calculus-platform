export const physCOscillationsPart4Data = {
  topicSlug: 'oscillations-physics-c',
  sections: [
    {
      id: 'physicsc-oscillations-p4-intro',
      type: 'text' as const,
      content: `# 🔍 Identifying SHM

**Part 4 of 7 — Restoring Forces, Spring Combinations, and Vertical Springs**

---

### What Makes Motion "Simple Harmonic"?

SHM is a special case of periodic motion. Two ideas define it:

- An **equilibrium position** is where the net force on the object is zero.
- A **restoring force** points opposite the displacement from that equilibrium.

The motion is simple harmonic when the restoring force is **proportional** to the displacement from equilibrium:

$F_{\\text{net}} = -k_{\\text{eff}}\\,(x - x_{\\text{eq}})$

Newton's second law then gives the SHM differential equation, with the displacement $x - x_{\\text{eq}}$ playing the role of $x$:

$\\frac{d^2x}{dt^2} = -\\frac{k_{\\text{eff}}}{m}(x - x_{\\text{eq}}) \\quad\\Longrightarrow\\quad \\omega = \\sqrt{\\frac{k_{\\text{eff}}}{m}}$

---

### The Three-Step Test

1. **Find equilibrium:** set $F_{\\text{net}}(x) = 0$ and solve for $x_{\\text{eq}}$.
2. **Check proportionality:** is $F_{\\text{net}}$ a constant times $-(x - x_{\\text{eq}})$? If the force grows like $x^3$, or stays constant in size, the motion is periodic at best but **not** SHM.
3. **Read off** $k_{\\text{eff}}$ (the magnitude of the slope of $F$ versus $x$) and compute $\\omega = \\sqrt{k_{\\text{eff}}/m}$.

| Net force | SHM? | Why |
|-----------|------|-----|
| $F = -kx$ | Yes | Proportional, toward $x = 0$ |
| $F = 12 - 3x$ | Yes | $F = -3(x - 4)$: SHM about $x = 4$ |
| $F = -cx^3$ | No | Not proportional to displacement |
| Ball bouncing on a floor | No | Gravity is constant between bounces |

The same test works for rotation: a restoring **torque** $\\tau = -\\kappa\\theta$ gives $I\\,\\dfrac{d^2\\theta}{dt^2} = -\\kappa\\theta$, so $\\omega = \\sqrt{\\kappa/I}$. That is the torsion pendulum from Part 3.

> 🔑 A constant force (such as gravity on a hanging mass) only **shifts** the equilibrium position. It does not change $k_{\\text{eff}}$, so it does not change $\\omega$.`
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
            question: 'A 0.75 kg particle feels a net force $F(x) = 12 - 3x$ (N, with $x$ in m). Released from rest at $x = 6$ m, it oscillates:',
            options: ['About $x = 4$ m, with amplitude 2 m', 'About $x = 0$ with amplitude 6 m', 'About $x = 4$ m with amplitude 6 m', 'About $x = 6$ m with amplitude 2 m'],
            correctAnswer: 0,
            explanation: 'The force is zero at $x = 4$ m, so that is the equilibrium; released from rest 2 m away, the particle swings 2 m to either side of $x = 4$ m.'
          },
          {
            question: 'For the same particle ($m = 0.75$ kg, $F = 12 - 3x$), the angular frequency of the motion is:',
            options: ['$4\\,\\text{rad/s}$', '$\\sqrt{3}\\,\\text{rad/s}$', '$2\\,\\text{rad/s}$', '$16\\,\\text{rad/s}$'],
            correctAnswer: 2,
            explanation: 'Writing $F = -3(x - 4)$ gives $k_{\\text{eff}} = 3$ N/m, so $\\omega = \\sqrt{3/0.75} = \\sqrt{4} = 2\\,\\text{rad/s}$. The constant 12 only sets the equilibrium.'
          },
          {
            question: 'Which net force does NOT produce simple harmonic motion?',
            options: ['$F = -2x^3$', '$F = -5(x - 1)$', '$F = 8 - 4x$', '$F = -9x$'],
            correctAnswer: 0,
            explanation: 'A cubic force is not proportional to displacement, so the motion is periodic but not SHM. The other three are each a constant times the displacement from an equilibrium point.'
          }
        ]
      }
    },
    {
      id: 'physicsc-oscillations-p4-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Two Springs and a Vertical Hang

**(a) A block between two springs.** A $0.50\\,\\text{kg}$ block on a frictionless table is attached to a wall on the left by a spring with $k_1 = 120\\,\\text{N/m}$ and to a wall on the right by a spring with $k_2 = 80\\,\\text{N/m}$. Find the period.

Displace the block by $x$ to the right. The left spring stretches by $x$ and pulls left with $k_1x$; the right spring compresses by $x$ and pushes left with $k_2x$. Both forces point back toward equilibrium, and both springs share the **same** displacement, so they act in **parallel**:

$F_{\\text{net}} = -(k_1 + k_2)x \\;\\Rightarrow\\; k_{\\text{eq}} = 200\\,\\text{N/m}$

$\\omega = \\sqrt{\\frac{200}{0.50}} = 20\\,\\text{rad/s}, \\qquad T = \\frac{2\\pi}{20} \\approx 0.314\\,\\text{s}$

**(b) The same springs joined end to end (series).** Now the two springs carry the **same force** and their stretches add:

$\\frac{1}{k_{\\text{eq}}} = \\frac{1}{120} + \\frac{1}{80} \\;\\Rightarrow\\; k_{\\text{eq}} = \\frac{(120)(80)}{200} = 48\\,\\text{N/m}$

$\\omega = \\sqrt{\\frac{48}{0.50}} = \\sqrt{96} \\approx 9.8\\,\\text{rad/s}, \\qquad T \\approx 0.64\\,\\text{s}$

The series combination is softer than either spring alone, so the period is longer.

**(c) A vertical spring.** A $0.20\\,\\text{kg}$ block hangs from a spring with $k = 50\\,\\text{N/m}$ ($g = 10\\,\\text{m/s}^2$). At equilibrium the spring force balances gravity:

$k\\,\\Delta y = mg \\;\\Rightarrow\\; \\Delta y = \\frac{(0.20)(10)}{50} = 0.040\\,\\text{m}$

Measure $y$ from this hanging position. A further displacement $y$ changes the spring force by $-ky$ while gravity stays $mg$, so $F_{\\text{net}} = -ky$. The block oscillates about the **hanging** position with $\\omega = \\sqrt{50/0.20} \\approx 15.8\\,\\text{rad/s}$, exactly as it would horizontally.

> 🔑 Parallel springs add constants ($k_{\\text{eq}} = k_1 + k_2$); series springs add inverses and give $k_{\\text{eq}}$ smaller than the smallest spring. Gravity moves the center of a vertical oscillation but leaves the period alone.`
    },
    {
      id: 'physicsc-oscillations-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical springs, each of constant $k$, are joined end to end and a mass $m$ hangs from the bottom. Compared with one spring alone, the period is:',
            options: ['Larger by a factor of $\\sqrt{2}$', 'Smaller by a factor of $\\sqrt{2}$', 'Larger by a factor of 2', 'Unchanged, since each $k$ is the same'],
            correctAnswer: 0,
            explanation: 'In series, $1/k_{\\text{eq}} = 2/k$, so $k_{\\text{eq}} = k/2$. Since $T = 2\\pi\\sqrt{m/k_{\\text{eq}}}$, halving the spring constant multiplies the period by $\\sqrt{2}$.'
          },
          {
            question: 'A 0.20 kg block hangs at rest from a spring with $k = 50$ N/m ($g = 10\\,\\text{m/s}^2$). Pulled down and released, it oscillates about:',
            options: ['The relaxed length, where the spring force is zero', 'Its hanging point, 4 cm below relaxed length', 'A point 8 cm below the relaxed length of the spring', 'A point 2 cm below the relaxed length of the spring'],
            correctAnswer: 1,
            explanation: 'The center of the oscillation is where the net force is zero: $k\\,\\Delta y = mg$ gives $\\Delta y = (0.20)(10)/50 = 0.04$ m below the relaxed length.'
          },
          {
            question: 'Turning a horizontal spring–block oscillator so the block hangs vertically changes its period by a factor of:',
            options: ['$1$', '$\\sqrt{2}$', '$1 + mg/k$', '$\\sqrt{1 + mg/k}$'],
            correctAnswer: 0,
            explanation: 'Gravity is constant, so it only shifts the equilibrium; the restoring force about the new equilibrium is still $-ky$, and $T = 2\\pi\\sqrt{m/k}$ is unchanged.'
          }
        ]
      }
    }
  ]
};
