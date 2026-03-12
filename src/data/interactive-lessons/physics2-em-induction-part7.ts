export const physics2EmInductionPart7Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This final part combines Faraday's Law, Lenz's Law, motional EMF, generators, transformers, and inductance into comprehensive problems. We'll also highlight the most common AP mistakes and preview the types of free-response questions you'll encounter.
      `
    },
    {
      id: 'ei7-key-equations',
      type: 'text' as const,
      content: `
## Master Equation Sheet — Electromagnetic Induction

| Concept | Equation | When to Use |
|---------|----------|-------------|
| Magnetic Flux | $\\Phi_B = BA\\cos\\theta$ | Finding flux through a surface |
| Faraday's Law | $\\varepsilon = -N\\frac{d\\Phi_B}{dt}$ | Any induced EMF problem |
| Average EMF | $\\|\\varepsilon\\| = N\\frac{\\|\\Delta\\Phi\\|}{\\Delta t}$ | Flux changes over a time interval |
| Motional EMF | $\\varepsilon = BLv$ | Rod/wire moving in a field |
| Magnetic braking force | $F = \\frac{B^2L^2v}{R}$ | Force on moving conductor |
| Generator EMF | $\\varepsilon = NBA\\omega\\sin(\\omega t)$ | Rotating coil in a field |
| Transformer | $\\frac{V_2}{V_1} = \\frac{N_2}{N_1}$ | Transformer voltage ratio |
| Transformer power | $V_1I_1 = V_2I_2$ | Ideal transformer |
| Self-inductance EMF | $\\varepsilon = -L\\frac{dI}{dt}$ | Inductor opposing current change |
| Inductor energy | $U = \\frac{1}{2}LI^2$ | Energy stored in inductor |
| RL time constant | $\\tau = \\frac{L}{R}$ | RL circuit timing |

### The Big Picture

All of electromagnetic induction flows from one principle: **a changing magnetic flux induces an EMF**. Lenz's Law gives the direction. Everything else (motional EMF, generators, transformers, inductors) is a specific application of this idea.
      `
    },
    {
      id: 'ei7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid ⚠️

### Mistake 1: Confusing flux with field
- $\\vec{B}$ is the **field** (a vector, in Tesla)
- $\\Phi_B$ is the **flux** (a scalar, in Weber)
- A strong field doesn't mean large flux — it depends on area and angle too!

### Mistake 2: Forgetting the angle in flux
- $\\theta$ is between $\\vec{B}$ and the **area normal** $\\hat{n}$, NOT between $\\vec{B}$ and the surface
- If the field is "perpendicular to the loop" → $\\theta = 0°$ (field is parallel to $\\hat{n}$)
- If the field is "parallel to the loop" → $\\theta = 90°$

### Mistake 3: Using Lenz's Law incorrectly
- The induced current opposes the **change** in flux, not the flux itself
- If flux is increasing, the induced field opposes the external field
- If flux is decreasing, the induced field reinforces the external field

### Mistake 4: Confusing EMF with current
- Faraday's Law gives the **EMF** (voltage), not the current
- To find current, you need: $I = \\varepsilon / R$
- An open-circuit loop has induced EMF but zero current

### Mistake 5: Transformers and DC
- Transformers only work with **AC** (need changing flux)
- $V_2/V_1 = N_2/N_1$ applies to **AC amplitudes or RMS values**
- Power is conserved: stepping up voltage steps down current
      `
    },
    {
      id: 'ei7-synthesis-quiz',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz — Connecting the Concepts** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A 500-turn coil of area 0.02 m² is in a field that changes from 0.4 T to 0 T in 0.1 s. A 10 Ω resistor is connected across the coil. The average current through the resistor is:',
            options: [
              '0.4 A',
              '4 A',
              '40 A',
              '400 A'
            ],
            correctAnswer: 1,
            explanation: '$|\\varepsilon| = N|\\Delta\\Phi|/\\Delta t = 500 \\times (0.4)(0.02)/0.1 = 500 \\times 0.08 = 40$ V. $I = \\varepsilon/R = 40/10 = 4$ A.'
          },
          {
            question: 'A rod moves at 3 m/s along rails ($L = 0.4$ m, $B = 0.5$ T, $R = 2\\;\\Omega$). The power dissipated in the resistor is:',
            options: [
              '0.09 W',
              '0.18 W',
              '0.36 W',
              '0.6 W'
            ],
            correctAnswer: 1,
            explanation: '$\\varepsilon = BLv = (0.5)(0.4)(3) = 0.6$ V. $I = 0.6/2 = 0.3$ A. $P = I^2R = (0.3)^2(2) = 0.18$ W. Or: $P = \\varepsilon^2/R = 0.36/2 = 0.18$ W.'
          },
          {
            question: 'A transformer steps 240 V down to 12 V. If the primary has 4000 turns, the secondary has:',
            options: [
              '200 turns',
              '80,000 turns',
              '48 turns',
              '1000 turns'
            ],
            correctAnswer: 0,
            explanation: '$N_2/N_1 = V_2/V_1 \\Rightarrow N_2 = N_1(V_2/V_1) = 4000 \\times (12/240) = 4000 \\times 0.05 = 200$ turns.'
          }
        ]
      }
    },
    {
      id: 'ei7-frq-preview',
      type: 'text' as const,
      content: `
## AP Free-Response Preview 📝

### Typical FRQ Structure

AP Physics 2 electromagnetic induction FRQs often combine multiple concepts in one problem:

**Part (a):** Calculate the magnetic flux at a given instant
> Use $\\Phi = BA\\cos\\theta$ and identify each quantity

**Part (b):** Find the induced EMF
> Use $\\varepsilon = -N\\Delta\\Phi/\\Delta t$ — state Faraday's Law explicitly

**Part (c):** Determine the direction of induced current
> Apply Lenz's Law — explain your reasoning step by step

**Part (d):** Calculate power or force
> Use $P = \\varepsilon^2/R$ or $F = BIL$

### Scoring Tips

1. **State the law** you're using before applying it
2. **Show your work** — partial credit is common
3. **Include units** at every step
4. For Lenz's Law, explain the **reasoning** (flux increasing/decreasing → induced field direction → current direction)
5. **Circle or box** your final answer
      `
    },
    {
      id: 'ei7-direction-drill',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Direction & Concept Drill** 🧭

Test your understanding of the entire electromagnetic induction unit.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A magnetic field into the page through a loop DECREASES. By Lenz\'s Law, the induced current flows:',
            options: ['Clockwise (to support the field)', 'Counterclockwise (to oppose the field)', 'No current flows']
          },
          {
            label: 'A transformer has more turns on the secondary than the primary. It is a:',
            options: ['Step-up transformer', 'Step-down transformer', 'Isolation transformer']
          },
          {
            label: 'An inductor in a DC circuit at steady state acts like:',
            options: ['An open circuit', 'A short circuit (wire)', 'A battery', 'A capacitor']
          },
          {
            label: 'The peak EMF of a generator can be increased by:',
            options: ['Spinning the coil slower', 'Using fewer turns', 'Using a stronger magnetic field', 'Using a smaller coil area']
          },
          {
            label: 'Energy stored in an inductor is proportional to:',
            options: ['$I$', '$I^2$', '$1/I$', '$I^3$']
          }
        ],
        correctAnswers: ['Clockwise (to support the field)', 'Step-up transformer', 'A short circuit (wire)', 'Using a stronger magnetic field', '$I^2$'],
        hint1: 'Flux into page is decreasing → induced field must support (also into page) → clockwise by right-hand rule.',
        hint2: '$N_2 > N_1 \\Rightarrow V_2 > V_1$: step-up. At DC steady state, $dI/dt = 0$, so inductor EMF = 0 → acts like a wire.',
        hint3: '$\\varepsilon_0 = NBA\\omega$: increase $N$, $B$, $A$, or $\\omega$. Energy: $U = \\frac{1}{2}LI^2 \\propto I^2$.',
        explanation: '(1) Decreasing into-page flux → induced $B$ supports → into page → CW. (2) $N_2 > N_1$ → step-up. (3) Steady-state DC: $dI/dt = 0$, so no back-EMF → inductor = wire. (4) $\\varepsilon_0 = NBA\\omega$ → stronger $B$ increases peak EMF. (5) $U = \\frac{1}{2}LI^2 \\propto I^2$.'
      }
    },
    {
      id: 'ei7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz — Electromagnetic Induction** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A circular loop of radius 10 cm is in a field that increases at 0.2 T/s. The loop has resistance 5 Ω. The induced current is approximately:',
            options: [
              '0.25 mA',
              '1.26 mA',
              '6.28 mA',
              '12.6 mA'
            ],
            correctAnswer: 1,
            explanation: '$A = \\pi(0.1)^2 = 0.0314$ m². $|\\varepsilon| = A \\cdot dB/dt = (0.0314)(0.2) = 6.28 \\times 10^{-3}$ V. $I = \\varepsilon/R = 6.28 \\times 10^{-3}/5 = 1.26 \\times 10^{-3}$ A = 1.26 mA.'
          },
          {
            question: 'An RL circuit has $L = 50$ mH and $R = 100\\;\\Omega$. How long does it take the current to reach approximately 63% of its maximum value?',
            options: [
              '0.5 ms',
              '5 ms',
              '50 ms',
              '500 ms'
            ],
            correctAnswer: 0,
            explanation: '$\\tau = L/R = 0.050/100 = 5 \\times 10^{-4}$ s = 0.5 ms. The current reaches 63.2% of its maximum in one time constant.'
          },
          {
            question: 'A 60 Hz generator produces a peak voltage of 170 V. The voltage at $t = 1/240$ s is:',
            options: [
              '0 V',
              '85 V',
              '120 V',
              '170 V'
            ],
            correctAnswer: 3,
            explanation: '$\\varepsilon = 170\\sin(2\\pi \\cdot 60 \\cdot t) = 170\\sin(120\\pi \\cdot 1/240) = 170\\sin(\\pi/2) = 170 \\times 1 = 170$ V. At this instant the voltage is at its peak.'
          },
          {
            question: 'Which of the following is NOT a valid way to induce an EMF in a loop?',
            options: [
              'Move the loop through a uniform magnetic field at constant velocity (loop stays entirely within the field)',
              'Rotate the loop in a uniform magnetic field',
              'Change the magnetic field strength while the loop is stationary',
              'Pull the loop partially out of a magnetic field region'
            ],
            correctAnswer: 0,
            explanation: 'Moving a loop through a uniform field without changing $B$, $A$, or $\\theta$ does NOT change the flux — so no EMF is induced. All other options change at least one factor in $\\Phi = BA\\cos\\theta$.'
          }
        ]
      }
    }
  ]
}
