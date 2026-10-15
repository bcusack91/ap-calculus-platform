export const physics1FluidsBernoulliPart1Data = {
  topicSlug: 'fluids-bernoulli',
  sections: [
    {
      id: 'fbe1-intro',
      type: 'text' as const,
      content: `
# 📜 Bernoulli's Equation — Setup

**Part 1 of 7 — Fluids: Bernoulli's Equation**

Bernoulli's Equation captures conservation of energy for a flowing fluid. It's the second pillar of AP fluids (alongside continuity), and it explains why airplanes fly, why your shower curtain pulls inward, and how a Venturi meter works.

**In this lesson you will learn:**
- The full Bernoulli equation
- The three energy-density terms (pressure, kinetic, gravitational)
- The assumptions (incompressible, non-viscous, steady, along a streamline)
- How to identify "two points" on a streamline for problem solving
      `
    },
    {
      id: 'fbe1-equation',
      type: 'text' as const,
      content: `
## Bernoulli's Equation

For an ideal fluid (incompressible, non-viscous, steady, irrotational) along a streamline:

$$\\boxed{P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g y_2}$$

Equivalently: $P + \\tfrac{1}{2}\\rho v^2 + \\rho g y = \\text{constant}$ along a streamline.

### Each Term Has Units of Pressure (Pa)

| Term | Meaning |
|------|--------|
| $P$ | Static pressure (Pa) |
| $\\tfrac{1}{2}\\rho v^2$ | Dynamic pressure / KE per volume (Pa) |
| $\\rho g y$ | Gravitational PE per volume (Pa) |

It's just **energy conservation per unit volume** of fluid.

### Required Assumptions
1. **Incompressible** — $\\rho$ constant
2. **Non-viscous** — no internal friction
3. **Steady** — flow speed at each point doesn't change in time
4. **Along a streamline** — same fluid parcel from point 1 to point 2

### Choosing Points 1 and 2 (the AP technique)
- Pick where you know the most ($P$, $v$, $y$ all knowable).
- Reservoir surface, pipe outlets, openings to atmosphere → known $P$ ($P_{atm}$) and often $v \\approx 0$.
- Use one point where you have many unknowns? → No. Pick known points!
      `
    },
    {
      id: 'fbe1-mc',
      type: 'multiple-choice' as const,
      content: `
**Bernoulli Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Bernoulli\'s equation is essentially:',
            options: [
              'Conservation of momentum for fluids',
              'Conservation of energy per unit volume',
              'Conservation of mass in a pipe',
              'The definition of pressure'
            ],
            correctAnswer: 1,
            explanation: 'Each term has units of Pa = $J/m^{3}$ = energy per unit volume, and the sum is constant along a streamline. (Conservation of mass in a pipe is the continuity equation.)'
          },
          {
            question: 'Bernoulli\'s equation requires the fluid to be:',
            options: [
              'Compressible and viscous',
              'Viscous but incompressible',
              'Incompressible and non-viscous',
              'Turbulent and compressible'
            ],
            correctAnswer: 2,
            explanation: 'Bernoulli assumes incompressible (constant $\\rho$) and non-viscous (no friction) flow.'
          },
          {
            question: 'In Bernoulli, the term $\\rho g y$ represents:',
            options: [
              'Pressure the fluid exerts on the walls',
              'Gravitational potential energy per unit volume',
              'Kinetic energy per unit volume',
              'Total mechanical energy of the fluid'
            ],
            correctAnswer: 1,
            explanation: '$\\rho g y$ is the analog of $mgy$ but per unit volume.'
          }
        ]
      }
    },
    {
      id: 'fbe1-input',
      type: 'input-boxes' as const,
      content: `
**Bernoulli Setup Calculations** 🧮 (g = 10, $\\rho_w = 1000$, $P_{atm} = 1.0\\times10^{5}$ Pa)

Calculate each TERM of Bernoulli at the given point — answer in pascals.

1) Surface of an open tank ($P = P_{atm}$, $v = 0$, $y = 5.0$ m). The $\\rho g y$ term (Pa)?

2) Same surface — the $\\tfrac{1}{2}\\rho v^2$ term (Pa)?

3) A point inside a pipe with $v = 4.0$ m/s. The dynamic pressure term $\\tfrac{1}{2}\\rho v^2$ (Pa)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50000', '0', '8000'],
        hint1: '$\\rho g y$.',
        hint2: '$v=0 \\Rightarrow$ KE = 0.',
        hint3: '$\\tfrac{1}{2}\\rho v^2$.',
        explanation: '1) $\\rho g y = 1000(10)(5) = 50{,}000$ Pa. 2) $v = 0$ → 0. 3) $\\tfrac{1}{2}(1000)(4.0)^2 = 8000$ Pa.'
      }
    },
    {
      id: 'fbe1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Bernoulli Setup Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In Bernoulli, the units of every term are:',
            options: ['Joules', 'Newtons', 'Pascals', 'Watts'],
            correctIndex: 2,
            explanation: 'Each term is energy per unit volume = $J/m^{3}$ = Pa.'
          },
          {
            label: 'For Bernoulli to apply, the flow must be:',
            options: ['Steady, viscous, and compressible', 'Turbulent, non-viscous, compressible', 'Steady, non-viscous, incompressible', 'Unsteady, viscous, incompressible'],
            correctIndex: 2,
            explanation: 'The standard idealizations of Bernoulli: steady flow of a non-viscous, incompressible fluid along a streamline.'
          },
          {
            label: 'A reservoir surface open to air has $P =$:',
            options: ['0', '$\\tfrac{1}{2}\\rho v^2$', '$P_{atm}$', '$\\rho g h$'],
            correctIndex: 2,
            explanation: 'The free surface of a tank has atmospheric pressure on it.'
          },
          {
            label: 'Bernoulli\'s equation conserves which physical quantity?',
            options: ['Mass per second', 'Momentum per second', 'Energy per unit volume', 'Pressure alone'],
            correctIndex: 2,
            explanation: 'The sum $P + \\tfrac{1}{2}\\rho v^2 + \\rho g y$ (pressure-work + KE/V + PE/V) is constant along a streamline. Pressure alone can rise or fall; mass flow per second is the continuity idea.'
          }
        ]
      }
    },
    {
      id: 'fbe1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Bernoulli Setup** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two points along the same streamline of an ideal fluid have measurements: $P_1 = 100$ kPa, $v_1 = 0$, $y_1 = 5$ m and $P_2 = ?$, $v_2 = 4$ m/s, $y_2 = 0$. Find $P_2$. (g = 10, $\\rho_w = 1000$)',
            options: [
              '$58$ kPa',
              '$92$ kPa',
              '$142$ kPa',
              '$150$ kPa'
            ],
            correctAnswer: 2,
            explanation: '$P_1 + \\rho g y_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2$. $100{,}000 + 50{,}000 = P_2 + 8000$. $P_2 = 142{,}000$ Pa = 142 kPa.'
          },
          {
            question: 'At the surface of a still, 20-m-deep open lake, take $y = 0$ at the surface and $v \\approx 0$. Which term in Bernoulli\'s equation has the largest value there?',
            options: [
              'The pressure term, $P = P_{atm}$',
              'The kinetic term, $\\tfrac{1}{2}\\rho v^2$',
              'The gravitational term, $\\rho g y$',
              'All three terms are equal'
            ],
            correctAnswer: 0,
            explanation: 'With $y = 0$ at the surface, $\\rho g y = 0$, and with $v \\approx 0$, $\\tfrac{1}{2}\\rho v^2 \\approx 0$. The pressure term is $P_{atm} ≈ 1.0\\times10^{5}$ Pa, so it dominates. (If you put $y = 0$ at the lake bottom instead, $\\rho g y = 200$ kPa would be largest; the sum is what matters, not the choice of origin.)'
          }
        ]
      }
    }
  ]
}
