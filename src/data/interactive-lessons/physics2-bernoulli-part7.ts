export const physics2BernoulliPart7Data = {
  topicSlug: 'bernoullis-equation',
  sections: [
    {
      id: 'be7-intro',
      type: 'text' as const,
      content: `
# 🎯 Bernoulli Synthesis & AP Review

**Part 7 of 7 — Complete Fluids Review**

This final part ties together everything from all four fluid mechanics topics: density & pressure, buoyancy, continuity, and Bernoulli's equation.
      `
    },
    {
      id: 'be7-concept-map',
      type: 'text' as const,
      content: `
## Complete Fluids Concept Map

### The Four Pillars of Fluid Mechanics

| Equation | What It Describes | Conservation Law |
|:---:|:---:|:---:|
| $P = P_0 + \\rho g h$ | Pressure at depth | — (definition) |
| $F_B = \\rho_f V_d g$ | Buoyant force | Newton's laws + pressure |
| $A_1 v_1 = A_2 v_2$ | Continuity | Mass conservation |
| $P + \\frac{1}{2}\\rho v^2 + \\rho g h = C$ | Bernoulli | Energy conservation |

### Decision Tree: Which Equation(s) to Use

1. **Fluid at rest?** → Hydrostatic pressure ($P = P_0 + \\rho g h$), buoyancy ($F_B = \\rho_f V_d g$)
2. **Fluid moving, area changes?** → Continuity ($A_1 v_1 = A_2 v_2$) first, then Bernoulli
3. **Fluid moving, same area?** → Bernoulli only (speed is the same by continuity)
4. **Open surface or hole in tank?** → Torricelli ($v = \\sqrt{2gh}$)
5. **Horizontal flow?** → Simplified Bernoulli ($P + \\frac{1}{2}\\rho v^2 = $ const)

### Top 5 AP Mistakes

| # | Mistake | Correction |
|:---:|:---:|:---:|
| 1 | "Faster = higher pressure" | WRONG! Faster = LOWER pressure (Bernoulli) |
| 2 | Forgetting to use continuity first | Always find $v_2$ from continuity before applying Bernoulli |
| 3 | Wrong signs in height terms | Be consistent: pick a reference level and stick with it |
| 4 | Using Bernoulli for viscous fluids | Bernoulli needs ideal (non-viscous) flow |
| 5 | Not checking boundary conditions | Open surfaces: $P = P_{\\text{atm}}$; large tanks: $v \\approx 0$ |
      `
    },
    {
      id: 'be7-mixed-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A submarine has a small window at depth 200 m. The water pressure on the window is approximately: ($\\rho_w = 1000$ $kg/m^{3}$, $g = 10$ $m/s^{2}$, $P_{\\text{atm}} = 10^5$ Pa)',
            options: [
              '2,000,000 Pa',
              '2,100,000 Pa',
              '200,000 Pa',
              '100,000 Pa'
            ],
            correctAnswer: 1,
            explanation: '$P = P_{\\text{atm}} + \\rho g h = 100000 + (1000)(10)(200) = 100000 + 2000000 = 2{,}100{,}000$ Pa = 2.1 MPa. That\'s 21 atmospheres!'
          },
          {
            question: 'An object with density 800 $kg/m^{3}$ and volume 0.05 $m^{3}$ is fully submerged in water and held by a string from below. The tension in the string is: ($g = 10$ $m/s^{2}$)',
            options: [
              '100 N',
              '400 N',
              '500 N',
              '900 N'
            ],
            correctAnswer: 0,
            explanation: '$F_B = \\rho_w V g = (1000)(0.05)(10) = 500$ N. $W = \\rho_{\\text{obj}} V g = (800)(0.05)(10) = 400$ N. $T = F_B - W = 500 - 400 = 100$ N (string pulls down to keep the light object submerged).'
          },
          {
            question: 'Water flows through a horizontal pipe that narrows. In the narrow section:',
            options: [
              'Speed increases and pressure increases',
              'Speed decreases and pressure increases',
              'Speed increases and pressure decreases',
              'Speed and pressure stay the same'
            ],
            correctAnswer: 2,
            explanation: 'Continuity: narrower → faster. Bernoulli (horizontal): faster → lower pressure. Speed up, pressure down — the Venturi effect.'
          }
        ]
      }
    },
    {
      id: 'be7-comprehensive-drill',
      type: 'input-boxes' as const,
      content: `
**AP Comprehensive Problem** ($\\rho = 1000$ $kg/m^{3}$, $g = 10$ $m/s^{2}$)

A fire hose (diameter 6.0 cm) is connected to a hydrant at ground level with pressure 400,000 Pa. The hose goes up 10 m to a nozzle (diameter 2.0 cm) that is open to the atmosphere ($P_{\\text{atm}} = 100{,}000$ Pa).

1) If the speed in the hose at ground level is $v_1$, find $v_2$ in terms of $v_1$ (ratio $v_2/v_1$)

2) Using Bernoulli (with continuity), find $v_1$ (in m/s) [Hint: $v_2 = 9v_1$]

3) Speed of water exiting the nozzle (in m/s)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '2.24', '20'],
        hint1: '$v_2/v_1 = A_1/A_2 = (d_1/d_2)^2 = (6/2)^2$.',
        hint2: '$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho(9v_1)^2 + \\rho g h$. $400000 + \\frac{1}{2}(1000)v_1^2 = 100000 + \\frac{1}{2}(1000)(81v_1^2) + 100000$.',
        hint3: '$v_2 = 9 v_1$.',
        explanation: 'Ratio = 9. Bernoulli: $400000 + 500v_1^2 = 100000 + 40500v_1^2 + 100000$. $200000 = 40000 v_1^2$. $v_1^2 = 5$. $v_1 = \\sqrt{5} = 2.24$ m/s. $v_2 = 9(2.24) \\approx 20$ m/s.'
      }
    },
    {
      id: 'be7-frq-preview',
      type: 'text' as const,
      content: `
## AP FRQ Practice — Full Problem

### Setup

*A large open tank is filled to height $H = 5.0$ m with water. A small circular hole of radius $r = 0.50$ cm is opened at the bottom.*

**(a)** Find the speed of water exiting the hole.
$$v = \\sqrt{2gH} = \\sqrt{2(10)(5)} = 10 \\text{ m/s}$$

**(b)** Find the volume flow rate.
$$Q = \\pi r^2 v = \\pi(0.005)^2(10) = 7.85 \\times 10^{-4} \\text{ m}^3\\text{/s} \\approx 0.79 \\text{ L/s}$$

**(c)** The tank sits on the ground. A hole is made at height $h = 1.0$ m on the side (not at the very bottom). The stream exits horizontally. How far from the tank does the water land?

Water depth above hole: $H - h = 5.0 - 1.0 = 4.0$ m.
$$v = \\sqrt{2g(H-h)} = \\sqrt{2(10)(4)} = 8.94 \\text{ m/s}$$
$$t = \\sqrt{2h/g} = \\sqrt{2(1)/10} = 0.447 \\text{ s}$$
$$x = v \\cdot t = 8.94(0.447) = 4.0 \\text{ m}$$

**(d)** If the hole is moved to height $h = 2.5$ m (middle of tank), will the range be greater or less?

The range is $x = v \\times t = \\sqrt{2g(H-h)} \\times \\sqrt{2h/g} = 2\\sqrt{h(H-h)}$.

At the middle ($h = H/2 = 2.5$ m), this product is maximized! Range = $2\\sqrt{2.5 \\times 2.5} = 5.0$ m — **greater** than from the 1.0 m hole (4.0 m).
      `
    },
    {
      id: 'be7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of equations would you need to solve a problem about water flowing through a pipe that changes both diameter and height?',
            options: [
              'Only Bernoulli\'s equation',
              'Only the continuity equation',
              'Both continuity and Bernoulli\'s equation',
              'Archimedes\' principle and continuity'
            ],
            correctAnswer: 2,
            explanation: 'Changing diameter → need continuity to relate the two speeds. Changing height + speed → need Bernoulli to relate pressure, speed, and height. You need both equations working together.'
          },
          {
            question: 'Looking back at all four fluid topics, the underlying theme is:',
            options: [
              'All fluids behave the same way',
              'Conservation laws (mass and energy) explain fluid behavior',
              'Pressure is always constant',
              'Only ideal fluids exist in nature'
            ],
            correctAnswer: 1,
            explanation: 'Continuity = mass conservation. Bernoulli = energy conservation. Buoyancy = pressure forces from gravity. Hydrostatics = equilibrium. Everything reduces to fundamental conservation laws and Newton\'s laws applied to fluids. Beautiful physics!'
          }
        ]
      }
    }
  ]
}
