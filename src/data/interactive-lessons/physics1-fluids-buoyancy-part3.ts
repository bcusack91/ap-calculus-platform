export const physics1FluidsBuoyancyPart3Data = {
  topicSlug: 'fluids-buoyancy',
  sections: [
    {
      id: 'fb3-intro',
      type: 'text' as const,
      content: `
# 🚢 Floating vs Sinking

**Part 3 of 7 — Fluids: Buoyancy**

The simplest rule of buoyancy: compare the object's average density to the fluid's density. If $\\rho_{obj} < \\rho_{fluid}$, it floats. AP loves multi-step questions where you must apply this insight before doing math.

**In this lesson you will learn:**
- The density rule for floating
- Why a steel ship floats (effective vs material density)
- The "fraction submerged" formula
- Edge cases (neutral buoyancy)
      `
    },
    {
      id: 'fb3-rule',
      type: 'text' as const,
      content: `
## The Density Rule

Compare object's AVERAGE density to fluid:

| Comparison | Behavior |
|-----------|----------|
| $\\rho_{obj} < \\rho_{fluid}$ | Floats (partially submerged) |
| $\\rho_{obj} = \\rho_{fluid}$ | Neutral buoyancy (hovers anywhere) |
| $\\rho_{obj} > \\rho_{fluid}$ | Sinks |

### Fraction Submerged Formula (floating object)

For a floating object in equilibrium ($F_b = W$):

$$\\rho_{fluid} g V_{sub} = \\rho_{obj} g V_{obj}$$

$$\\boxed{\\frac{V_{sub}}{V_{obj}} = \\frac{\\rho_{obj}}{\\rho_{fluid}}}$$

The fraction submerged equals the density ratio.

### Examples

| Object | $\\rho_{obj}$ $(kg/m^{3})$ | Fraction in fresh water |
|--------|---------------------|-------------------------|
| Cork | 240 | 0.24 (24% submerged) |
| Wood (oak) | 700 | 0.70 (70%) |
| Ice | 917 | 0.92 (92% — "tip of the iceberg") |
| Water | 1000 | 1.00 (just at surface) |

### Why a Steel Ship Floats

Steel itself ($\\rho \\approx 7800$) sinks. But a hollow ship has lots of trapped air inside its hull, lowering its **average** density below water's. As long as $\\rho_{avg} < 1000$, it floats.

A coin (solid steel) has no air → density = 7800 → sinks.
      `
    },
    {
      id: 'fb3-mc',
      type: 'multiple-choice' as const,
      content: `
**Floating vs Sinking Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An object floats in water if and only if its AVERAGE density is:',
            options: [
              'Greater than water\'s density',
              'Equal to water\'s density',
              'Less than water\'s density',
              'Equal to air\'s density'
            ],
            correctAnswer: 2,
            explanation: '$\\rho_{obj} < \\rho_{fluid}$ ⇒ object floats.'
          },
          {
            question: 'Ice has density 917 $kg/m^{3}$. The fraction of an iceberg submerged in fresh water is approximately:',
            options: ['8%', '50%', '92%', '100%'],
            correctAnswer: 2,
            explanation: '$V_{sub}/V_{obj} = 917/1000 ≈ 0.92$ — the famous "92% below the surface."'
          },
          {
            question: 'A hollow sphere weighing 5 N has volume 0.001 $m^{3}$. In water (g = 10):',
            options: [
              'It sinks',
              'It floats half-submerged',
              'It floats fully submerged just below surface',
              'It floats with $V_{sub} = 0.0005$ $m^{3}$'
            ],
            correctAnswer: 3,
            explanation: '$\\rho_{avg} = m/V = 0.5/0.001 = 500$ $kg/m^{3}$ < 1000. Floats. Submerged fraction = 0.5 → $V_{sub} = 0.0005$ $m^{3}$.'
          }
        ]
      }
    },
    {
      id: 'fb3-input',
      type: 'input-boxes' as const,
      content: `
**Floating Calculations** 🧮 (g = 10, $\\rho_w = 1000$, $\\rho_{sw} = 1030$)

1) An object of density 600 $kg/m^{3}$ floats in water. Fraction submerged (decimal)?

2) A 0.20 $m^{3}$ block of density 800 $kg/m^{3}$ floats in water. Volume submerged $(m^{3})$?

3) Same block in seawater. Fraction submerged (decimal, 4 sig figs)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.6', '0.16', '0.7767'],
        hint1: 'Fraction = $\\rho_{obj}/\\rho_{fluid}$.',
        hint2: '$V_{sub} = (\\rho_{obj}/\\rho_{fluid}) V_{obj}$.',
        hint3: '$\\rho_{obj}/\\rho_{sw} = 800/1030$.',
        explanation: '1) $0.600$. 2) $0.80 \\times 0.20 = 0.16$ $m^{3}$. 3) $800/1030 = 0.7767$.'
      }
    },
    {
      id: 'fb3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Density vs Buoyancy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A solid steel cube and a steel ship of equal mass — in water:',
            options: ['Both float', 'Both sink', 'Cube sinks; ship floats (ship has trapped air → lower avg density)', 'Cube floats; ship sinks'],
            correctIndex: 2,
            explanation: 'A ship\'s hull encloses air, dropping its avg density below water. A solid cube has nowhere to lower its density.'
          },
          {
            label: 'When you carry a block from fresh water to denser saltwater, the FRACTION submerged:',
            options: ['Increases', 'Stays the same', 'Decreases', 'Becomes zero'],
            correctIndex: 2,
            explanation: 'Same $\\rho_{obj}$, larger $\\rho_{fluid}$ → fraction submerged decreases. Why ships sit higher in the ocean than in lakes.'
          },
          {
            label: 'A submarine that hovers at constant depth has average density:',
            options: ['Less than water', 'Equal to water', 'Greater than water', 'Zero'],
            correctIndex: 1,
            explanation: 'Neutral buoyancy: $\\rho_{avg} = \\rho_{fluid}$. (Submarines adjust this by flooding/blowing ballast tanks.)'
          },
          {
            label: 'An object\'s fraction submerged is exactly 1.0 when:',
            options: ['It floats with top barely submerged', 'It is barely above the surface', 'It is fully submerged but neutrally buoyant', 'It is hollow'],
            correctIndex: 2,
            explanation: '$V_{sub}/V_{obj} = 1$ means fully submerged. With $F_b = W$, this is neutral buoyancy ($\\rho_{obj} = \\rho_{fluid}$).'
          }
        ]
      }
    },
    {
      id: 'fb3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Floating vs Sinking** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A wooden raft floats with 65% of its volume submerged in fresh water. Its density is approximately:',
            options: [
              '350 $kg/m^{3}$',
              '650 $kg/m^{3}$',
              '1538 $kg/m^{3}$',
              '1000 $kg/m^{3}$'
            ],
            correctAnswer: 1,
            explanation: 'Fraction submerged = $\\rho_{obj}/\\rho_{fluid}$ → $\\rho_{obj} = 0.65 \\times 1000 = 650$ $kg/m^{3}$.'
          },
          {
            question: 'In which fluid will the SAME wooden block $(density 700 kg/m^{3})$ sit highest above the water line?',
            options: [
              'Fresh water $(1000 kg/m^{3})$',
              'Sea water $(1030 kg/m^{3})$',
              'Mercury (13,600 $kg/m^{3}$)',
              'Cooking oil $(920 kg/m^{3})$'
            ],
            correctAnswer: 2,
            explanation: 'Highest above = smallest fraction submerged = largest $\\rho_{fluid}$. Mercury wins by a huge margin (700/13600 ≈ 5%).'
          }
        ]
      }
    }
  ]
}
