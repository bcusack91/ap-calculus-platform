export const physics2EmInductionPart7Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This final part combines flux, Faraday's Law, Lenz's Law, motional EMF, loops crossing field boundaries, changing fields, and magnetic braking into comprehensive problems. We'll also highlight the most common AP mistakes and preview the types of free-response questions you'll encounter.
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
| Loop entering or leaving a field | $\\varepsilon = Bsv$ | Leading or trailing edge crossing the boundary |
| Stationary loop, changing field | $\\varepsilon = A\\frac{\\Delta B}{\\Delta t}$ (magnitude) | Slope of a $B$–$t$ graph |
| Power dissipated | $P = I^2R = \\frac{\\varepsilon^2}{R}$ | Energy per second turned into heat |

### The Big Picture

All of electromagnetic induction flows from one principle: **a changing magnetic flux induces an EMF**. Lenz's Law gives the direction. Everything else (motional EMF, loops entering fields, induction graphs, magnetic braking) is a specific application of this idea.
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

### Mistake 5: Reading the flux graph instead of its slope
- The EMF depends on the **slope** of the flux–time graph, not its height
- A large, steady flux gives **zero** EMF
- At an instant when the flux passes through zero while still changing, the EMF is **not** zero
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
            question: 'A 500-turn coil of area 0.02 $m^{2}$ is in a field that changes from 0.4 T to 0 T in 0.1 s. A 10 Ω resistor is connected across the coil. The average current through the resistor is:',
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
            question: 'A square loop 0.10 m on a side moves at 4.0 m/s into a region where a uniform 0.50 T field is perpendicular to the loop. While the loop is entering, the induced EMF is:',
            options: [
              '0.020 V',
              '0.80 V',
              '0.20 V',
              '0 V'
            ],
            correctAnswer: 2,
            explanation: 'Only the leading edge crosses into the field, so $\\varepsilon = Bsv = (0.50)(0.10)(4.0) = 0.20$ V. 0.020 V uses the loop\'s area in place of its side length, 0.80 V uses its perimeter, and 0 V treats the field as unchanging even though the flux through the loop is growing.'
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
            label: 'A magnetic field into the page through a loop decreases. By Lenz\'s Law, the induced current flows:',
            options: ['Clockwise (to support the field)', 'Counterclockwise (to oppose the field)', 'No current flows']
          },
          {
            label: 'A loop moves at constant velocity while entirely inside a uniform field. The induced EMF is:',
            options: ['Zero', 'Constant and nonzero', 'Steadily increasing']
          },
          {
            label: 'On a graph of flux versus time, the induced EMF is given by the graph\'s:',
            options: ['Slope', 'Height', 'Area under the curve']
          },
          {
            label: 'A magnet falls through a vertical copper pipe. Its acceleration is:',
            options: ['Less than g', 'Equal to g', 'Greater than g']
          },
          {
            label: 'A loop is pulled out of a field region. The magnetic force on the loop points:',
            options: ['Opposite its velocity', 'Along its velocity', 'Nowhere (F = 0)']
          }
        ],
        correctAnswers: ['Clockwise (to support the field)', 'Zero', 'Slope', 'Less than g', 'Opposite its velocity'],
        hint1: 'Flux into page is decreasing → induced field must support (also into page) → clockwise by right-hand rule.',
        hint2: 'No change in $B$, $A$, or angle means no change in flux. EMF is the rate of change of flux.',
        hint3: 'Lenz\'s law: induced currents push back against whatever motion changes the flux.',
        explanation: '(1) Decreasing into-page flux → induced $B$ supports → into page → CW. (2) Inside a uniform field the flux is constant, so the EMF is zero. (3) EMF equals the slope of the flux–time graph (with a minus sign). (4) Induced currents in the pipe push up on the falling magnet, so its acceleration is less than g. (5) The force on a loop leaving a field opposes its motion.'
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
            explanation: '$A = \\pi(0.1)^2 = 0.0314$ $m^{2}$. $|\\varepsilon| = A \\cdot dB/dt = (0.0314)(0.2) = 6.28 \\times 10^{-3}$ V. $I = \\varepsilon/R = 6.28 \\times 10^{-3}/5 = 1.26 \\times 10^{-3}$ A = 1.26 mA.'
          },
          {
            question: 'A long straight wire carries a steady current up the page. A conducting loop to the right of the wire is moved directly away from it. The induced current in the loop is:',
            options: [
              'Counterclockwise',
              'Clockwise',
              'Zero, since the current is steady',
              'Clockwise, then counterclockwise'
            ],
            correctAnswer: 1,
            explanation: 'The wire\'s field points into the page at the loop and weakens with distance, so the into-page flux decreases; the induced current adds into-page field, which is clockwise. A steady current still gives a changing flux when the loop moves through the nonuniform field.'
          },
          {
            question: 'The field through a stationary loop of area 0.040 $m^{2}$ changes steadily from 0.50 T in one direction to 0.50 T in the opposite direction in 0.20 s. The magnitude of the average induced EMF is:',
            options: [
              '0 V',
              '0.10 V',
              '0.20 V',
              '0.0080 V'
            ],
            correctAnswer: 2,
            explanation: 'The flux goes from $+0.020$ Wb to $-0.020$ Wb, a change of 0.040 Wb, so $|\\varepsilon| = 0.040/0.20 = 0.20$ V. 0.10 V counts only a 0.50 T change, 0 V compares the equal magnitudes and ignores the reversal, and 0.0080 V multiplies by the time instead of dividing.'
          },
          {
            question: 'Which of the following is not a valid way to induce an EMF in a loop?',
            options: [
              'Moving the loop at constant velocity entirely within a uniform field',
              'Rotating the loop about an axis perpendicular to a uniform field',
              'Changing the magnetic field strength while the loop is held stationary',
              'Pulling the loop partway out of the region where the field exists'
            ],
            correctAnswer: 0,
            explanation: 'Moving a loop through a uniform field without changing $B$, $A$, or $\\theta$ does not change the flux — so no EMF is induced. All other options change at least one factor in $\\Phi = BA\\cos\\theta$.'
          }
        ]
      }
    }
  ]
}
