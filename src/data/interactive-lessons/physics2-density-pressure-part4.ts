export const physics2DensityPressurePart4Data = {
  topicSlug: 'density-and-pressure',
  sections: [
    {
      id: 'dp4-intro',
      type: 'text' as const,
      content: `
# 🔧 Pressure Problem-Solving Workshop

**Part 4 of 7 — Building Calculation Confidence**

You know the formulas. Now let's drill the problem types that appear most often on the AP exam — multi-step depth problems, hydraulics, and unit conversions under time pressure.
      `
    },
    {
      id: 'dp4-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Framework

Every fluid statics problem follows this pattern:

**Step 1 — Identify the fluid(s)** and their densities

**Step 2 — Identify the two points** you're comparing pressure between

**Step 3 — Apply** $P_2 = P_1 + \\rho g \\Delta h$ moving downward (pressure increases with depth)

**Step 4 — Watch units!** Convert cm → m, $g/cm^{3}$ → $kg/m^{3}$ before plugging in

### Common Traps

- Forgetting to add $P_{\\text{atm}}$ when absolute pressure is needed
- Using depth from the bottom instead of from the surface
- Mixing up gauge vs. absolute pressure
- Using wrong density when there are multiple fluid layers
      `
    },
    {
      id: 'dp4-layered-fluids',
      type: 'text' as const,
      content: `
## Layered Fluids

When two or more immiscible fluids are layered (e.g., oil floating on water), add each layer's contribution separately:

$$P_{\\text{bottom}} = P_{\\text{atm}} + \\rho_1 g h_1 + \\rho_2 g h_2$$

### Worked Example

A tank has 0.5 m of oil ($\\rho = 800$ $kg/m^{3}$) floating on 2.0 m of water ($\\rho = 1000$ $kg/m^{3}$). Find the absolute pressure at the bottom.

$$P = P_{\\text{atm}} + \\rho_{\\text{oil}} g h_{\\text{oil}} + \\rho_{\\text{water}} g h_{\\text{water}}$$

$$P = 10^5 + (800)(10)(0.5) + (1000)(10)(2.0)$$

$$P = 100{,}000 + 4{,}000 + 20{,}000 = 124{,}000 \\text{ Pa}$$

$$P = 1.24 \\text{ atm}$$
      `
    },
    {
      id: 'dp4-multi-layer-drill',
      type: 'input-boxes' as const,
      content: `
**Layered Fluid Drill** (use $g = 10$ $m/s^{2}$, $P_{\\text{atm}} = 10^5$ Pa)

A container has three layers:
- Top: 0.3 m of gasoline ($\\rho = 680$ $kg/m^{3}$)
- Middle: 1.0 m of water ($\\rho = 1000$ $kg/m^{3}$)
- Bottom: 0.1 m of mercury ($\\rho = 13{,}600$ $kg/m^{3}$)

1) Gauge pressure at the bottom of the gasoline layer (in Pa)

2) Gauge pressure at the bottom of the water layer (in Pa)

3) Absolute pressure at the very bottom (in Pa)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2040', '12040', '125640'],
        hint1: '$P_{\\text{gas}} = \\rho_{\\text{gas}} g h = (680)(10)(0.3)$.',
        hint2: 'Add water contribution: $2040 + (1000)(10)(1.0)$.',
        hint3: 'Add mercury + atmospheric: $P_{\\text{atm}} + 12{,}040 + (13{,}600)(10)(0.1)$.',
        explanation: 'Gasoline: $(680)(10)(0.3) = 2040$ Pa. Through water: $2040 + 10{,}000 = 12{,}040$ Pa gauge. Through mercury: $12{,}040 + 13{,}600 = 25{,}640$ Pa gauge. Absolute: $10^5 + 25{,}640 = 125{,}640$ Pa.'
      }
    },
    {
      id: 'dp4-tricky-quiz',
      type: 'multiple-choice' as const,
      content: `
**Tricky Conceptual Questions** — AP exam favorites
      `,
      exercise: {
        questions: [
          {
            question: 'A straw works by:',
            options: [
              'Sucking the liquid up',
              'Reducing pressure inside the straw so atmospheric pressure pushes the liquid up',
              'Creating a vacuum that lifts the liquid',
              'Capillary action'
            ],
            correctAnswer: 1,
            explanation: 'You lower the pressure inside the straw by expanding your lungs. The higher atmospheric pressure on the liquid surface outside the straw then pushes the liquid up. Atmospheric pressure does the work!'
          },
          {
            question: 'If you could create a perfect vacuum in a straw, what is the maximum height water could rise? (Use $P_{\\text{atm}} = 10^5$ Pa)',
            options: [
              'About 1 m',
              'About 5 m',
              'About 10 m',
              'Unlimited height'
            ],
            correctAnswer: 2,
            explanation: '$h_{\\text{max}} = P_{\\text{atm}}/(\\rho g) = 10^5/(1000 \\times 10) = 10$ m. This is why suction pumps can\'t lift water more than ~10 m!'
          },
          {
            question: 'Three containers of different shapes (narrow cylinder, wide cylinder, cone) are all filled with water to the same depth. The pressure at the bottom of each is:',
            options: [
              'Greatest in the widest container (more water)',
              'Greatest in the narrowest container (more weight per area)',
              'The same in all three (pressure depends only on depth)',
              'Greatest in the cone'
            ],
            correctAnswer: 2,
            explanation: '$P = P_0 + \\rho g h$. Pressure depends on depth, density, and $g$ — NOT on the shape or total volume of the container. This is the "hydrostatic paradox."'
          }
        ]
      }
    },
    {
      id: 'dp4-ap-problem',
      type: 'text' as const,
      content: `
## AP-Style Problem: The U-Tube

A U-tube contains mercury ($\\rho = 13{,}600$ $kg/m^{3}$). Water ($\\rho = 1000$ $kg/m^{3}$) is poured into the left side to a height of 27.2 cm above the mercury surface.

**Question:** How far does the mercury level on the right side rise above the mercury level on the left?

### Solution

At the mercury-water interface on the left, the pressure from the water column must equal the pressure from the extra mercury column on the right:

$$\\rho_w g h_w = \\rho_{\\text{Hg}} g \\Delta h$$

$$h_w \\cdot \\frac{\\rho_w}{\\rho_{\\text{Hg}}} = \\Delta h$$

$$\\Delta h = 0.272 \\times \\frac{1000}{13{,}600} = 0.020 \\text{ m} = 2.0 \\text{ cm}$$

The mercury on the right rises **2.0 cm** above the mercury on the left. The total difference in mercury levels is 2.0 cm (but the left side went down and the right went up, so each moved 1.0 cm from the original level).
      `
    },
    {
      id: 'dp4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A hydraulic brake system has a master cylinder with area 2 $cm^{2}$ and a wheel cylinder with area 20 $cm^{2}$. If you push with 50 N on the brake pedal:',
            options: [
              'The wheel gets 5 N of force',
              'The wheel gets 50 N of force',
              'The wheel gets 500 N of force',
              'The wheel gets 5000 N of force'
            ],
            correctAnswer: 2,
            explanation: '$F_2 = F_1(A_2/A_1) = 50(20/2) = 500$ N. The area ratio is 10:1, so force is multiplied by 10.'
          },
          {
            question: 'At the bottom of the ocean (depth ~11 km), the gauge pressure is approximately:',
            options: [
              '$1.1 \\times 10^{5}$ Pa (about 1 atm)',
              '$1.1 \\times 10^{7}$ Pa (about 100 atm)',
              '$1.1 \\times 10^{8}$ Pa (about 1100 atm)',
              '$1.1 \\times 10^{10}$ Pa'
            ],
            correctAnswer: 2,
            explanation: '$P = \\rho g h = (1000)(10)(11{,}000) = 1.1 \\times 10^8$ Pa ≈ 1100 atm. The pressure is enormous — about 1100 times atmospheric!'
          }
        ]
      }
    }
  ]
}
