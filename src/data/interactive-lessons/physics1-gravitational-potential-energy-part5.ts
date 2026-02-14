export const physics1GravitationalPotentialEnergyPart5Data = {
  topicSlug: 'gravitational-potential-energy',
  sections: [
    {
      id: 'gp5-intro',
      type: 'text' as const,
      content: `
# 📊 Energy Bar Charts

**Part 5 of 7 — Gravitational Potential Energy**

Energy bar charts (also called LOL diagrams) are a powerful visual tool for tracking energy transformations. They show how energy is distributed among different forms at each stage of a process. The AP exam frequently uses and asks about these diagrams.
      `
    },
    {
      id: 'gp5-how-to-read',
      type: 'text' as const,
      content: `
## Reading Energy Bar Charts

An energy bar chart has:
- **Bars** representing each form of energy (KE, PE$_g$, PE$_s$, thermal, etc.)
- **Height** of each bar = amount of energy in that form
- **Multiple columns** = different moments in time (initial, final, etc.)
- **Total height** stays constant (if no non-conservative forces)

### Example: Dropped Ball

| Energy | Initial (top) | Final (ground) |
|--------|--------------|----------------|
| KE | 0 | ████████ |
| PE$_g$ | ████████ | 0 |
| Total | ████████ | ████████ |

The PE bar shrinks to zero while the KE bar grows to the same height. Total energy is conserved!
      `
    },
    {
      id: 'gp5-drawing-charts',
      type: 'text' as const,
      content: `
## Drawing Energy Bar Charts

### Steps

1. **Identify** the initial and final states
2. **Choose** a reference level for PE$_g = 0$
3. **Calculate** each form of energy at each state
4. **Draw** bars proportional to energy values
5. **Check** that total energy is conserved (or account for non-conservative work)

### Example: Ball Thrown Upward (1 kg, $v_i = 20$ m/s, $g = 10$ m/s²)

**Initial state** (ground level, $h = 0$):
- KE$_i = \\frac{1}{2}(1)(20)^2 = 200$ J
- PE$_i = 0$ J

**At maximum height** ($h_{\\max} = 20$ m):
- KE$_f = 0$ J
- PE$_f = 1(10)(20) = 200$ J

**Energy accounting:**
| Form | Initial | At Peak |
|------|---------|---------|
| KE | 200 J | 0 J |
| PE$_g$ | 0 J | 200 J |
| Total | 200 J | 200 J ✓ |

**At half the max height** ($h = 10$ m):
- PE = $1(10)(10) = 100$ J
- KE = $200 - 100 = 100$ J
- Both bars are equal!
      `
    },
    {
      id: 'gp5-with-friction',
      type: 'text' as const,
      content: `
## Bar Charts with Friction

When friction is present, some energy is converted to **thermal energy** ($E_{\\text{thermal}}$). The total energy is still conserved, but now includes a thermal bar:

### Example: Block Sliding Down a Rough Ramp

A 2 kg block slides 5 m down a $30°$ rough ramp ($\\mu_k = 0.2$, $g = 10$ m/s²):

- $\\Delta h = 5\\sin(30°) = 2.5$ m
- Initial PE = $2(10)(2.5) = 50$ J
- $N = mg\\cos(30°) = 2(10)(0.866) = 17.3$ N
- $f_k = 0.2(17.3) = 3.46$ N
- $W_f = -3.46(5) = -17.3$ J → $E_{\\text{thermal}} = 17.3$ J

| Form | Top | Bottom |
|------|-----|--------|
| KE | 0 J | 32.7 J |
| PE$_g$ | 50 J | 0 J |
| $E_{\\text{thermal}}$ | 0 J | 17.3 J |
| Total | 50 J | 50 J ✓ |
      `
    },
    {
      id: 'gp5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Energy Bar Chart Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an energy bar chart for a ball in free fall (no friction), what must be true about the initial and final total bar heights?',
            options: [
              'Final total is greater (gravity adds energy)',
              'Final total is less (energy is used up)',
              'Final total equals initial total (energy is conserved)',
              'They can be different depending on the height'
            ],
            correctAnswer: 2,
            explanation: 'With no non-conservative forces, total mechanical energy is conserved. The total bar heights must be equal.'
          },
          {
            question: 'A block slides across a rough surface and stops. In the bar chart, the initial KE bar becomes:',
            options: [
              'A PE bar of equal height',
              'A thermal energy bar of equal height',
              'Zero with no other bars',
              'Split between PE and thermal bars'
            ],
            correctAnswer: 1,
            explanation: 'On a flat surface, no PE change. All KE converts to thermal energy via friction. The thermal bar equals the initial KE bar.'
          },
          {
            question: 'If a bar chart shows the PE bar decreasing by 40 J and no thermal energy, the KE bar must:',
            options: [
              'Decrease by 40 J',
              'Increase by 40 J',
              'Stay the same',
              'Increase by 20 J'
            ],
            correctAnswer: 1,
            explanation: 'Total energy is conserved. If PE decreases by 40 J and no energy goes to thermal, all 40 J must go to KE.'
          }
        ]
      }
    },
    {
      id: 'gp5-calculations',
      type: 'input-boxes' as const,
      content: `
**Bar Chart Calculations** 🧮

A 4 kg ball is thrown upward at 15 m/s from ground level. Use $g = 10$ m/s².

1) What is the initial KE (in J)?

2) What is the PE at maximum height (in J)?

3) At what height is KE = PE (in m)?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['450', '450', '5.625', '5.6250'],
        hint1: '$KE_i = \\frac{1}{2}mv^2 = \\frac{1}{2}(4)(15)^2$.',
        hint2: 'At the top, all KE has converted to PE. So $PE_{\\max} = KE_i$.',
        hint3: 'When KE = PE, each is half the total. $mgh = E_{\\text{total}}/2 \\Rightarrow h = E/(2mg) = 450/(2 \\times 4 \\times 10)$.',
        explanation: '1) $KE = \\frac{1}{2}(4)(225) = 450$ J. 2) $PE = 450$ J (all KE converts to PE). 3) $4(10)h = 225 \\Rightarrow h = 225/40 = 5.625$ m.'
      }
    },
    {
      id: 'gp5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Bar Chart Interpretation** 🔍

A ball is dropped from a height and bounces back to a lower height.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Just before hitting the ground, the energy is mostly:',
            options: ['KE', 'PE', 'Thermal', 'Split equally'],
            correctIndex: 0,
            explanation: 'Just above the ground, nearly all PE has converted to KE (if reference is ground).'
          },
          {
            label: 'Just after the bounce, compared to just before:',
            options: ['KE is the same', 'KE is less', 'KE is more', 'PE is more'],
            correctIndex: 1,
            explanation: 'Some energy is lost in the bounce (to thermal/sound). The ball leaves with less KE than it arrived with.'
          },
          {
            label: 'The ball reaches a lower max height because:',
            options: ['Gravity increased', 'Mass changed', 'Energy was lost to thermal/sound in bounce', 'PE changed'],
            correctIndex: 2,
            explanation: 'Energy is lost during the inelastic collision with the ground. Less total energy → lower maximum height.'
          },
          {
            label: 'The thermal energy bar in the final state is:',
            options: ['Zero', 'Equal to the lost PE', 'Equal to the height difference times mg', 'Negative'],
            correctIndex: 2,
            explanation: '$E_{\\text{thermal}} = mg(h_i - h_f)$, which is the difference between initial PE and final PE (the "missing" energy).'
          }
        ]
      }
    },
    {
      id: 'gp5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Energy Bar Charts** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg ball is dropped from 10 m. It hits the ground and bounces back to 6 m. How much energy was lost to thermal energy ($g = 10$ m/s²)?',
            options: [
              '100 J',
              '200 J',
              '300 J',
              '500 J'
            ],
            correctAnswer: 1,
            explanation: 'Initial $E = mgh_i = 5(10)(10) = 500$ J. Final $E = mgh_f = 5(10)(6) = 300$ J. $E_{\\text{thermal}} = 500 - 300 = 200$ J.'
          },
          {
            question: 'A bar chart shows KE = 80 J and PE = 120 J at one instant. Later, PE = 50 J and thermal energy = 30 J. The final KE is:',
            options: [
              '80 J',
              '100 J',
              '120 J',
              '150 J'
            ],
            correctAnswer: 2,
            explanation: 'Total initial = $80 + 120 = 200$ J. Total final = $KE_f + 50 + 30 = 200$ J. $KE_f = 120$ J.'
          }
        ]
      }
    }
  ]
}
