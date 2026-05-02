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
              'Newton\'s 2nd law for fluids',
              'Conservation of energy per unit volume',
              'Conservation of mass',
              'Definition of pressure'
            ],
            correctAnswer: 1,
            explanation: 'Each term has units of Pa = J/m³ = energy per unit volume. Sum is constant along a streamline.'
          },
          {
            question: 'Bernoulli\'s equation requires the fluid to be:',
            options: [
              'Compressible',
              'Viscous',
              'Incompressible and non-viscous',
              'Turbulent'
            ],
            correctAnswer: 2,
            explanation: 'Bernoulli assumes incompressible (constant $\\rho$) and non-viscous (no friction) flow.'
          },
          {
            question: 'In Bernoulli, the term $\\rho g y$ represents:',
            options: [
              'Pressure inside the fluid',
              'Gravitational potential energy per unit volume',
              'Kinetic energy per unit volume',
              'Total energy'
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
            explanation: 'Each term is energy per unit volume = J/m³ = Pa.'
          },
          {
            label: 'For Bernoulli to apply, the flow must be:',
            options: ['Highly viscous', 'Compressible', 'Steady, non-viscous, incompressible', 'Turbulent'],
            correctIndex: 2,
            explanation: 'Standard idealizations of Bernoulli.'
          },
          {
            label: 'A reservoir surface open to air has $P =$:',
            options: ['0', '$\\tfrac{1}{2}\\rho v^2$', '$P_{atm}$', '$\\rho g h$'],
            correctIndex: 2,
            explanation: 'The free surface of a tank has atmospheric pressure on it.'
          },
          {
            label: 'Bernoulli\'s equation conserves which physical quantity?',
            options: ['Mass', 'Momentum', 'Energy per unit volume', 'Charge'],
            correctIndex: 2,
            explanation: 'Sum of pressure + KE/V + PE/V = constant along a streamline.'
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
            question: 'Which term in Bernoulli\'s equation has the largest value for water at the surface of a 20-m-deep open lake (with $v$ ≈ 0 at surface)?',
            options: [
              'Static pressure $P_{atm}$',
              'Dynamic $\\tfrac{1}{2}\\rho v^2$',
              'Gravitational $\\rho g y$ (depending on reference frame)',
              'They are equal'
            ],
            correctAnswer: 0,
            explanation: 'At the surface of a still lake $v ≈ 0$, $y$ measures from the chosen origin, but $P_{atm}$ ≈ 100 kPa is dominant for the typical chosen origin at the surface.'
          }
        ]
      }
    }
  ]
}
