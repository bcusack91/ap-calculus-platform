export const physics1ConservationOfEnergyPart5Data = {
  topicSlug: 'conservation-of-energy',
  sections: [
    {
      id: 'ce5-intro',
      type: 'text' as const,
      content: `
# 🔥 Energy Dissipation by Friction

**Part 5 of 7 — Conservation of Energy**

Friction is the most common non-conservative force on AP exams. Understanding how friction dissipates mechanical energy is crucial for solving real-world energy problems.

**In this lesson you will learn:**
- How to calculate energy lost to friction
- Friction on flat surfaces, ramps, and curves
- Where the "lost" energy goes
- Multi-step problems with friction
      `
    },
    {
      id: 'ce5-theory',
      type: 'text' as const,
      content: `
## Energy Dissipation by Friction

### The Energy Lost to Friction

$$E_{\\text{thermal}} = f_k \\cdot d = \\mu_k N \\cdot d$$

This energy becomes **thermal energy** — it heats up the surfaces.

### On a Horizontal Surface

$$f_k = \\mu_k mg$$

$$E_{\\text{thermal}} = \\mu_k mg d$$

### On a Ramp (angle $\\theta$)

$$N = mg\\cos\\theta$$

$$f_k = \\mu_k mg\\cos\\theta$$

$$E_{\\text{thermal}} = \\mu_k mg\\cos\\theta \\cdot d$$

where $d$ is the distance along the ramp.

### The Modified Energy Equation

$$KE_i + PE_i = KE_f + PE_f + E_{\\text{thermal}}$$

$$\\frac{1}{2}mv_i^2 + mgh_i = \\frac{1}{2}mv_f^2 + mgh_f + \\mu_k N d$$

### Stopping Distance

If an object slides to a stop ($KE_f = 0$):

$$d = \\frac{KE_i}{f_k} = \\frac{\\frac{1}{2}mv^2}{\\mu_k mg} = \\frac{v^2}{2\\mu_k g}$$
      `
    },
    {
      id: 'ce5-quiz',
      type: 'multiple-choice' as const,
      content: `
**Friction & Energy Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg block sliding at 10 m/s on a rough surface ($\\mu_k = 0.5$) slides to a stop. How far does it travel ($g = 10$ m/s²)?',
            options: [
              '5 m',
              '10 m',
              '15 m',
              '20 m'
            ],
            correctAnswer: 1,
            explanation: '$d = v^2/(2\\mu_k g) = 100/(2 \\times 0.5 \\times 10) = 100/10 = 10$ m.'
          },
          {
            question: 'If the same block (10 m/s, $\\mu_k = 0.5$) had twice the mass, the stopping distance would be:',
            options: [
              'Halved (5 m)',
              'The same (10 m)',
              'Doubled (20 m)',
              'Quadrupled (40 m)'
            ],
            correctAnswer: 1,
            explanation: '$d = v^2/(2\\mu_k g)$. Mass cancels! Stopping distance is independent of mass.'
          },
          {
            question: 'A 2 kg block slides down a rough ramp (height 3 m, ramp length 5 m, $\\mu_k = 0.3$). The energy dissipated by friction is ($g = 10$ m/s²):',
            options: [
              '12 J',
              '24 J',
              '48 J',
              '60 J'
            ],
            correctAnswer: 1,
            explanation: '$\\cos\\theta = 4/5 = 0.8$ (3-4-5 triangle). $E_{\\text{thermal}} = \\mu_k mg\\cos\\theta \\cdot d = 0.3(2)(10)(0.8)(5) = 24$ J.'
          }
        ]
      }
    },
    {
      id: 'ce5-calculations',
      type: 'input-boxes' as const,
      content: `
**Friction Calculations** 🧮

Use $g = 10$ m/s².

1) A car ($m = 1000$ kg) moving at 20 m/s brakes on a road ($\\mu_k = 0.5$). What is the stopping distance (in m)?

2) A 3 kg block slides down a frictionless ramp from 4 m, then across 5 m of rough floor ($\\mu_k = 0.4$). What is its final speed (in m/s)? (Round to nearest tenth.)

3) A 2 kg block sliding at 8 m/s reaches a frictionless ramp. How high does it go (in m)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '6.3', '3.2', '6.30', '3.20'],
        hint1: '$d = v^2/(2\\mu_k g) = 400/(2 \\times 0.5 \\times 10)$.',
        hint2: '$mgh = \\frac{1}{2}mv^2 + \\mu_k mgd$. $v^2 = 2g(h - \\mu_k d)$.',
        hint3: 'All KE converts to PE on a frictionless ramp: $\\frac{1}{2}mv^2 = mgh$.',
        explanation: '1) $d = 400/10 = 40$ m. 2) $v^2 = 2g(h - \\mu_k d) = 2(10)(4 - 0.4 \\times 5) = 2(10)(2) = 40$. $v = \\sqrt{40} \\approx 6.3$ m/s. 3) $h = v^2/(2g) = 64/20 = 3.2$ m.'
      }
    },
    {
      id: 'ce5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Energy Dissipation Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A block slides across a rough surface. The total energy of the system (block + surface):',
            options: ['Decreases', 'Increases', 'Stays the same', 'Depends on speed'],
            correctIndex: 2,
            explanation: 'Total energy (mechanical + thermal) is always conserved. Mechanical energy decreases, but thermal energy increases by the same amount.'
          },
          {
            label: 'Doubling the speed of a sliding block (same $\\mu_k$) changes the stopping distance by:',
            options: ['2×', '4×', '$\\sqrt{2}$×', 'No change'],
            correctIndex: 1,
            explanation: '$d = v^2/(2\\mu_k g)$. Doubling $v$ quadruples $v^2$ and therefore quadruples $d$.'
          },
          {
            label: 'A block slides down a rough ramp and across a rough floor. The total thermal energy produced equals:',
            options: ['The initial KE', 'The initial PE minus final KE', 'The friction force times time', 'The normal force times distance'],
            correctIndex: 1,
            explanation: '$E_{\\text{thermal}} = E_{\\text{mech},i} - E_{\\text{mech},f} = (KE_i + PE_i) - (KE_f + PE_f)$. If it starts from rest at height $h$: $E_{\\text{thermal}} = mgh - \\frac{1}{2}mv_f^2$.'
          }
        ]
      }
    },
    {
      id: 'ce5-multi-step',
      type: 'text' as const,
      content: `
## Multi-Step Friction Problems

### Strategy

For problems with multiple segments (ramp → flat → ramp):

1. **Don\'t solve each segment separately** — use energy conservation over the whole path
2. Calculate total friction work: $W_f = -\\sum f_k \\cdot d_i$ for each segment
3. Apply: $E_{\\text{mech},i} + W_f = E_{\\text{mech},f}$

### Example

A 2 kg block starts at rest atop a 3 m ramp ($\\mu_k = 0.25$, ramp length 5 m), slides across 4 m of rough floor ($\\mu_k = 0.4$), then up a frictionless ramp.

**Friction on ramp**: $\\mu_k mg\\cos\\theta \\cdot d = 0.25(20)(4/5)(5) = 20$ J

**Friction on floor**: $\\mu_k mgd = 0.4(20)(4) = 32$ J

**Total friction**: $52$ J

**Energy equation**: $mgh = mgh_f + 52$

$$20(3) = 20 h_f + 52$$

$$h_f = (60 - 52)/20 = 0.4 \\text{ m}$$
      `
    },
    {
      id: 'ce5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A hockey puck sliding at 20 m/s on ice ($\\mu_k = 0.1$) comes to a stop. The stopping distance is ($g = 10$ m/s²):',
            options: [
              '20 m',
              '100 m',
              '200 m',
              '400 m'
            ],
            correctAnswer: 2,
            explanation: '$d = v^2/(2\\mu_k g) = 400/(2 \\times 0.1 \\times 10) = 400/2 = 200$ m.'
          },
          {
            question: 'A 4 kg block slides down from 5 m on a rough ramp ($\\mu_k = 0.3$, ramp length 10 m, $\\cos\\theta = 0.866$). Its KE at the bottom is ($g = 10$ m/s²):',
            options: [
              '200 J',
              '104 J',
              '96.2 J',
              '0 J'
            ],
            correctAnswer: 2,
            explanation: '$KE = mgh - \\mu_k mg\\cos\\theta \\cdot d = 4(10)(5) - 0.3(4)(10)(0.866)(10) = 200 - 103.9 \\approx 96.1$ J, closest to 96.2 J.'
          }
        ]
      }
    }
  ]
}
