export const physics2BernoulliPart1Data = {
  topicSlug: 'bernoullis-equation',
  sections: [
    {
      id: 'be1-intro',
      type: 'text' as const,
      content: `
# ✈️ Bernoulli's Equation

**Part 1 of 7 — Energy Conservation for Fluids**

Bernoulli's equation is one of the most powerful and beautiful results in fluid dynamics. It connects pressure, speed, and height in a single elegant equation — and explains everything from airplane lift to why shower curtains billow inward.
      `
    },
    {
      id: 'be1-derivation',
      type: 'text' as const,
      content: `
## Deriving Bernoulli's Equation

Bernoulli's equation is really just **conservation of energy** applied to a flowing fluid.

Consider a small parcel of fluid moving through a pipe:

- **Kinetic energy:** $\\frac{1}{2}\\rho v^2$ per unit volume
- **Gravitational PE:** $\\rho g h$ per unit volume
- **Pressure energy:** $P$ (pressure acts like energy per unit volume — it does work on the fluid)

Energy conservation says the total energy per unit volume is constant along a streamline:

$$\\boxed{P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}}$$

Or between two points on the same streamline:

$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$

### Each Term's Role

| Term | Physical Meaning | Units |
|:---:|:---:|:---:|
| $P$ | Static pressure | Pa |
| $\\frac{1}{2}\\rho v^2$ | Dynamic pressure (kinetic energy density) | Pa |
| $\\rho g h$ | Hydrostatic pressure (potential energy density) | Pa |

All three terms have units of pressure (Pa = $N/m^{2}$ = $J/m^{3}$).
      `
    },
    {
      id: 'be1-conditions',
      type: 'text' as const,
      content: `
## When Does Bernoulli Apply?

Bernoulli's equation requires the **same ideal fluid conditions** as continuity:

- ✅ Incompressible fluid
- ✅ Non-viscous (no friction losses)
- ✅ Steady flow
- ✅ Along a streamline (you can't compare random points!)

### Common Special Cases

**Case 1: Horizontal flow ($h_1 = h_2$):**

$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$

*Faster flow → lower pressure* (the Bernoulli effect!)

**Case 2: Static fluid ($v = 0$):**

$$P_1 + \\rho g h_1 = P_2 + \\rho g h_2$$

This reduces to our hydrostatic equation $\\Delta P = \\rho g \\Delta h$!

**Case 3: Open to atmosphere:**

At any point open to air, $P = P_{\\text{atm}}$ (atmospheric pressure).
      `
    },
    {
      id: 'be1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Bernoulli Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Bernoulli\'s equation is fundamentally a statement of:',
            options: [
              'Conservation of mass',
              'Conservation of energy',
              'Newton\'s second law',
              'Conservation of momentum'
            ],
            correctAnswer: 1,
            explanation: 'Bernoulli\'s equation is energy conservation per unit volume along a streamline. The continuity equation handles mass conservation. Together they solve most ideal fluid problems.'
          },
          {
            question: 'In a horizontal pipe, where the fluid moves fastest, the pressure is:',
            options: [
              'Highest',
              'Lowest',
              'The same everywhere',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'With $h$ constant: $P + \\frac{1}{2}\\rho v^2 = $ const. If $v$ increases, $P$ must decrease. This is the famous Bernoulli effect: fast flow → low pressure.'
          },
          {
            question: 'Bernoulli\'s equation can be applied between:',
            options: [
              'Any two points in a fluid',
              'Two points on the same streamline',
              'Only points at the same height',
              'Only points in the same pipe'
            ],
            correctAnswer: 1,
            explanation: 'Bernoulli\'s equation is derived along a streamline. You can only compare points that are connected by the same streamline path. In many pipe problems, all points are on the same streamline.'
          }
        ]
      }
    },
    {
      id: 'be1-basic-drill',
      type: 'input-boxes' as const,
      content: `
**Bernoulli Basics** ($\\rho_w = 1000$ $kg/m^{3}$, $g = 10$ $m/s^{2}$)

Water flows horizontally through a pipe. At point 1: $P_1 = 200{,}000$ Pa, $v_1 = 3.0$ m/s. At point 2 (same height): $v_2 = 5.0$ m/s.

1) Dynamic pressure at point 1: $\\frac{1}{2}\\rho v_1^2$ (in Pa)

2) Dynamic pressure at point 2 (in Pa)

3) Pressure at point 2 (in Pa)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4500', '12500', '192000'],
        hint1: '$\\frac{1}{2}(1000)(3.0)^2$.',
        hint2: '$\\frac{1}{2}(1000)(5.0)^2$.',
        hint3: '$P_2 = P_1 + \\frac{1}{2}\\rho v_1^2 - \\frac{1}{2}\\rho v_2^2 = 200000 + 4500 - 12500$.',
        explanation: '$\\frac{1}{2}\\rho v_1^2 = 4500$ Pa. $\\frac{1}{2}\\rho v_2^2 = 12500$ Pa. $P_2 = 200000 + 4500 - 12500 = 192000$ Pa. Faster flow → lower pressure!'
      }
    },
    {
      id: 'be1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'If Bernoulli\'s equation for a static fluid ($v = 0$) gives $P + \\rho g h = $ constant, this is equivalent to:',
            options: [
              'Pascal\'s Law',
              'The hydrostatic pressure equation $P = P_0 + \\rho g d$',
              'The continuity equation',
              'Archimedes\' Principle'
            ],
            correctAnswer: 1,
            explanation: 'Setting $v = 0$ in Bernoulli\'s equation gives $P + \\rho g h = $ const, which rearranges to $P_2 - P_1 = \\rho g(h_1 - h_2) = \\rho g d$. This is exactly the hydrostatic pressure equation from our earlier study!'
          }
        ]
      }
    }
  ]
}
