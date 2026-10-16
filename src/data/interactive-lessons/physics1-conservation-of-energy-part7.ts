export const physics1ConservationOfEnergyPart7Data = {
  topicSlug: 'conservation-of-energy',
  sections: [
    {
      id: 'ce7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Conservation of Energy**

This final lesson brings together every energy concept: kinetic energy, gravitational PE, spring PE, work-energy theorem, friction, and energy bar charts. We'll focus on AP-style questions, common mistakes, and FRQ strategies.

**In this lesson you will:**
- Tackle AP-style multiple choice and free response questions
- Identify and avoid common energy misconceptions
- Master energy bar chart analysis
- Build a strategy toolkit for AP exam energy problems
      `
    },
    {
      id: 'ce7-bar-charts',
      type: 'text' as const,
      content: `
## Energy Bar Charts (LOL Diagrams)

Energy bar charts are a powerful tool for AP Physics. They show energy storage at different points in a process.

### How to Read Them

| Bar | Represents |
|-----|-----------|
| $KE$ | $\\frac{1}{2}mv^2$ — kinetic energy |
| $PE_g$ | $mgh$ — gravitational PE |
| $PE_s$ | $\\frac{1}{2}kx^2$ — spring PE |
| $\\Delta E_{th}$ | $f_k d$ — thermal energy from friction |

### Conservation Rule

$$KE_i + PE_{g,i} + PE_{s,i} = KE_f + PE_{g,f} + PE_{s,f} + \\Delta E_{th}$$

The sum of all initial bars must equal the sum of all final bars (including thermal energy).

### Common AP Scenarios

- **Free fall**: $PE_g \\rightarrow KE$ (bars shift from PE to KE)
- **Spring launch**: $PE_s \\rightarrow KE$ (spring PE becomes KE)
- **Friction stop**: $KE \\rightarrow \\Delta E_{th}$ (KE becomes thermal)
- **Projectile at max height**: $KE_i \\rightarrow KE_f + PE_g$ (some KE remains as horizontal KE)
      `
    },
    {
      id: 'ce7-bar-chart-quiz',
      type: 'multiple-choice' as const,
      content: `
**Energy Bar Chart Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown upward. At the maximum height, the energy bar chart shows:',
            options: [
              'All KE and no PE_g, for any launch angle',
              'All PE_g and no KE, for any launch angle',
              'Equal KE and PE_g, for any launch angle',
              'It depends on the launch angle'
            ],
            correctAnswer: 3,
            explanation: 'If thrown straight up, all KE → PE_g (v = 0 at top). If thrown at an angle, there\'s still horizontal KE at the top. The answer depends on the direction of the throw!'
          },
          {
            question: 'An energy bar chart shows: Initial state has tall KE bar. Final state has medium PE_g bar and small $\\Delta E_{th}$ bar, but no KE bar. This describes:',
            options: [
              'A ball rising to its peak against air drag',
              'A block sliding to a stop on a flat surface',
              'A spring being compressed by a moving block',
              'A ball falling freely from rest to the ground'
            ],
            correctAnswer: 0,
            explanation: 'Initial KE converts to PE_g (height gained) and $\\Delta E_{th}$ (air resistance). No final KE means the object stops — consistent with reaching maximum height with drag.'
          },
          {
            question: 'If initial energy bars sum to 100 J and there\'s 20 J of thermal energy produced, the final mechanical energy bars must sum to:',
            options: [
              '120 J',
              '100 J',
              '80 J',
              '20 J'
            ],
            correctAnswer: 2,
            explanation: '$E_{mech,i} = E_{mech,f} + \\Delta E_{th}$. So $E_{mech,f} = 100 - 20 = 80$ J.'
          }
        ]
      }
    },
    {
      id: 'ce7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid

### Mistake 1: Forgetting that KE depends on $v^2$
- Doubling speed → **4×** the kinetic energy, NOT 2×

### Mistake 2: Using the wrong height
- Height is measured from your chosen reference level
- It\'s the **vertical** height, not the distance along a ramp
- $h = d\\sin\\theta$ on a ramp of length $d$

### Mistake 3: Forgetting friction acts over the ENTIRE path
- If a block slides 3 m on a floor then compresses a spring 0.2 m, friction acts over $3 + 0.2 = 3.2$ m (if the floor is rough under the spring too)

### Mistake 4: Saying "centripetal force does work"
- Centripetal force is always perpendicular to velocity → does **zero work**
- Energy is NOT gained or lost going around a circular loop (ignoring friction)

### Mistake 5: Confusing force and energy
- A large force doesn't mean large energy — work depends on $F \\cdot d \\cdot \\cos\\theta$
- Normal force on a flat surface does zero work ($\\cos 90° = 0$)
      `
    },
    {
      id: 'ce7-mistakes-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Spot the Mistake** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A student says: "Doubling mass doubles KE, and doubling speed doubles KE." The error is:',
            options: ['The mass part is wrong', 'The speed part is wrong', 'Both parts are wrong', 'Neither part is wrong'],
            correctIndex: 1,
            explanation: 'Doubling mass does double KE ($KE = \\frac{1}{2}mv^2$). But doubling speed quadruples KE since $KE \\propto v^2$.'
          },
          {
            label: 'A student writes $mgh = \\frac{1}{2}mv^2$ for a block sliding down a rough ramp. The missing term is:',
            options: ['Spring PE term', 'Friction term $f_k d$', 'Normal force work', 'Centripetal force'],
            correctIndex: 1,
            explanation: 'On a rough ramp, energy is lost to friction: $mgh = \\frac{1}{2}mv^2 + f_k d$. Forgetting this gives a speed that\'s too high.'
          },
          {
            label: 'A student uses $h = 5$ m (ramp length) instead of $h = 5\\sin30° = 2.5$ m. This mistake will:',
            options: ['Underestimate the speed', 'Overestimate the speed', 'Not affect the answer', 'Depend on mass'],
            correctIndex: 1,
            explanation: 'Using a larger $h$ gives a larger PE, which predicts a larger speed at the bottom. The correct height is the vertical component: $h = d\\sin\\theta$.'
          }
        ]
      }
    },
    {
      id: 'ce7-ap-frq-strategy',
      type: 'text' as const,
      content: `
## FRQ Strategy Guide

### Energy Conservation FRQ Template

**Part (a): "Derive an expression for..."**
1. State: "Using conservation of energy between states A and B..."
2. Write the full equation with all terms
3. Cross out zero terms with justification
4. Solve algebraically — keep everything symbolic

**Part (b): "Calculate..."**
1. Substitute numbers into your Part (a) expression
2. Show units cancellation
3. Circle/box your final answer with units

**Part (c): "Explain qualitatively..."**
1. Identify the relevant physics principle
2. Connect cause to effect using energy concepts
3. Use phrases like "because energy is conserved..." or "since friction dissipates energy..."

### Key Phrases for Full Credit
- "By conservation of energy..."
- "Setting the reference level at..."
- "The work done by friction equals $f_k d = \\mu_k N d$"
- "Since only conservative forces act, mechanical energy is conserved"
- "The thermal energy generated equals the loss in mechanical energy"
      `
    },
    {
      id: 'ce7-ap-mc-practice',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is launched by a spring from ground level. It rises to maximum height $h$. If the spring compression is doubled, the new maximum height is:',
            options: [
              '$h$',
              '$2h$',
              '$4h$',
              '$8h$'
            ],
            correctAnswer: 2,
            explanation: '$\\frac{1}{2}kx^2 = mgh_{max}$, so $h_{max} = kx^2/(2mg)$. Doubling $x$ quadruples $x^2$ and therefore quadruples $h_{max}$.'
          },
          {
            question: 'Block A (mass $m$) and Block B (mass $2m$) are released from the same height on identical frictionless ramps. At the bottom, which has greater speed?',
            options: [
              'Block A (lighter one)',
              'Block B (heavier one)',
              'They have the same speed',
              'Not enough information given'
            ],
            correctAnswer: 2,
            explanation: '$mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh}$. Mass cancels! Both blocks reach the same speed.'
          },
          {
            question: 'A 1 kg ball swings on a string from height $h = 0.8$ m. At the bottom of the swing, the speed is measured to be 3 m/s (use $g = 10$ $m/s^{2}$). This means:',
            options: [
              'Mechanical energy was conserved exactly',
              'The ball gained energy from the string',
              'Some mechanical energy was dissipated',
              'The speed measurement must be in error'
            ],
            correctAnswer: 2,
            explanation: 'Expected: $v = \\sqrt{2gh} = \\sqrt{16} = 4$ m/s. Measured: 3 m/s. Since $3 < 4$, some mechanical energy was dissipated, most likely by air resistance. $E_{lost} = mgh - \\frac{1}{2}mv^2 = 8 - 4.5 = 3.5$ J.'
          }
        ]
      }
    },
    {
      id: 'ce7-ap-calculations',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A 0.5 kg ball is dropped from 20 m onto a spring ($k = 500$ N/m). Find the maximum compression of the spring (in m, to 3 significant figures). Hint: the ball falls an extra distance $x$ below the spring\'s natural length.

2) A 4 kg block slides 5 m down a $37°$ ramp ($\\mu_k = 0.25$), then 3 m across a frictionless floor, then up a frictionless $53°$ ramp. What height does it reach on the second ramp (in m, to 3 significant figures)?

3) In an AP FRQ, a 2 kg block is pushed against a spring ($k = 800$ N/m), compressing it 0.3 m. The block is released and slides across a rough surface ($\\mu_k = 0.4$) for 5 m before reaching a frictionless ramp. What maximum height does it reach (in m)?
      `,
      exercise: {
        questions: [{ question: '1)', answer: '0.643', acceptableAnswers: ['0.643', '0.64'] }, { question: '2)', answer: '2.01', acceptableAnswers: ['2.01', '2', '2.0', '2.00'] }, { question: '3)', answer: '0', acceptableAnswers: ['0', '0.0', '0 m'] }],
        hint1: 'Set $mg(20 + x) = \\frac{1}{2}kx^2$ where $x$ is the compression. You\'ll get a quadratic equation.',
        hint2: 'Use energy conservation with friction: $mgh_1 - W_{\\text{friction}} = mgh_2$. Find $h_1$ from the ramp geometry.',
        hint3: 'Compare the spring\'s stored energy $\\frac{1}{2}kx^2$ to the energy lost to friction $\\mu_k mg d$. Does the block have enough energy to reach the ramp?',
        explanation: '1) $mg(20+x) = \\frac{1}{2}kx^2$. $5(20+x) = 250x^2$, so $250x^2 - 5x - 100 = 0$. $x = [5 + \\sqrt{25 + 100000}]/500 = [5 + 316.27]/500 \\approx 0.643$ m. 2) $h_1 = 5\\sin37° = 3.01$ m, so $mgh_1 = 40(3.01) = 120.4$ J. Friction on the first ramp: $\\mu_k mg\\cos37°(5) = 0.25(40)(0.799)(5) = 39.9$ J. The floor and the second ramp are frictionless, so $mgh_2 = 120.4 - 39.9 = 80.4$ J and $h_2 = 80.4/40 \\approx 2.01$ m (exactly 2.00 m with $\\sin37° = 0.6$, $\\cos37° = 0.8$). The angle of the second ramp does not matter. 3) Spring energy $= \\frac{1}{2}(800)(0.09) = 36$ J. Friction over 5 m $= \\mu_k mg \\cdot d = 0.4(20)(5) = 40$ J. Since friction (40 J) exceeds the spring energy (36 J), the block stops before reaching the ramp. $h = 0$.'
      }
    },
    {
      id: 'ce7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Conservation of Energy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is true about conservation of energy?',
            options: [
              'Mechanical energy is always conserved, even when kinetic friction acts',
              'Total energy is always conserved, but mechanical energy only if $W_{nc} = 0$',
              'A compressed spring creates new energy, so total energy rises when it is released',
              'Friction creates new energy as heat, so the total energy of the system rises'
            ],
            correctAnswer: 1,
            explanation: 'Total energy (mechanical + thermal + other) is always conserved. Mechanical energy alone is only conserved when non-conservative forces (friction, air resistance) do no work.'
          },
          {
            question: 'On the AP exam, the most important step in an energy conservation problem is:',
            options: [
              'Drawing a free-body diagram of every force',
              'Choosing two states and listing every energy type',
              'Calculating the net force at each point',
              'Using $F = ma$ to find the acceleration'
            ],
            correctAnswer: 1,
            explanation: 'The key step is identifying your two states and listing all forms of energy present at each. Then write the conservation equation with all relevant terms. Force diagrams and $F = ma$ are tools for force problems, not the starting point of an energy problem.'
          }
        ]
      }
    }
  ]
}
