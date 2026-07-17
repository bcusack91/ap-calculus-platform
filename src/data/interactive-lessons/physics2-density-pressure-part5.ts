export const physics2DensityPressurePart5Data = {
  topicSlug: 'density-and-pressure',
  sections: [
    {
      id: 'dp5-intro',
      type: 'text' as const,
      content: `
# 🎈 Forces on Submerged Surfaces

**Part 5 of 7 — Pressure Creates Force**

Pressure acts on surfaces. When those surfaces are submerged in a fluid, the pressure creates real forces — forces that can collapse submarines, burst pipes, or hold back an ocean behind a dam.
      `
    },
    {
      id: 'dp5-force-on-surfaces',
      type: 'text' as const,
      content: `
## Force on a Flat Horizontal Surface

For a **horizontal** surface at depth $h$:

$$F = PA = (P_0 + \\rho g h) \\times A$$

The pressure is uniform across the surface, so it's straightforward.

### Example: Aquarium Floor

An aquarium (0.5 m × 0.3 m) is filled to a depth of 0.4 m. Force on the bottom (gauge only):

$$F = \\rho g h \\times A = (1000)(10)(0.4)(0.5 \\times 0.3) = 600 \\text{ N}$$

Note: This is just the force from the *water pressure* — it equals the weight of the water above ($mg = \\rho V g = 1000 \\times 0.06 \\times 10 = 600$ N). Not a coincidence!
      `
    },
    {
      id: 'dp5-vertical-surfaces',
      type: 'text' as const,
      content: `
## Force on Vertical Surfaces

For a **vertical** surface (like a dam wall), pressure varies with depth. The total force requires integration, but the AP shortcut uses the **average pressure**:

$$F = P_{\\text{avg}} \\times A = \\frac{1}{2}\\rho g h_{\\text{max}} \\times A$$

Where:
- $h_{\\text{max}}$ = depth of the bottom of the wall
- $A$ = area of the submerged wall surface

The force acts at a depth of $\\frac{2}{3}h_{\\text{max}}$ from the surface (center of pressure, not center of area).

### Why Is the Center of Pressure Below the Centroid?

Because pressure increases with depth. The lower part of the wall experiences more pressure than the upper part, pulling the effective "center" of force downward.
      `
    },
    {
      id: 'dp5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Submerged Forces
      `,
      exercise: {
        questions: [
          {
            question: 'A submarine at depth 200 m has a circular window of radius 0.1 m. The force on the window from the water (gauge) is approximately:',
            options: [
              '6,280 N',
              '62,800 N',
              '628,000 N',
              '6,280,000 N'
            ],
            correctAnswer: 1,
            explanation: '$P = \\rho g h = (1000)(10)(200) = 2 \\times 10^6$ Pa. $A = \\pi(0.1)^2 \\approx 0.0314$ $m^{2}$. $F = PA = (2 \\times 10^6)(0.0314) \\approx 62{,}800$ N ≈ 63 kN. That\'s about 14,000 lbs on a tiny window!'
          },
          {
            question: 'Why must dam walls be thicker at the bottom?',
            options: [
              'The water moves faster at the bottom',
              'Gravity pulls the dam down',
              'Water pressure increases with depth, requiring more structural support at the base',
              'The bottom has more surface area'
            ],
            correctAnswer: 2,
            explanation: '$P = \\rho g h$ is greatest at the bottom. The base must withstand this larger force, so it needs more material. Most dams have a triangular cross-section — thin at top, thick at bottom.'
          }
        ]
      }
    },
    {
      id: 'dp5-force-drill',
      type: 'input-boxes' as const,
      content: `
**Force Calculation Drill** (use $g = 10$ $m/s^{2}$)

A rectangular tank (2.0 m wide × 1.0 m long × 1.5 m deep) is filled completely with water.

1) Force on the horizontal bottom (gauge, in N)

2) Average gauge pressure on one of the 2.0 m wide vertical walls (in Pa)

3) Total force on that vertical wall (in N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30000', '7500', '22500'],
        hint1: 'Bottom: $F = \\rho g h \\times A = (1000)(10)(1.5)(2.0 \\times 1.0)$.',
        hint2: 'Average pressure on vertical wall: $P_{\\text{avg}} = \\frac{1}{2}\\rho g h = \\frac{1}{2}(1000)(10)(1.5)$.',
        hint3: 'Wall area = $2.0 \\times 1.5 = 3.0$ $m^{2}$. $F = P_{\\text{avg}} \\times A = 7500 \\times 3.0$.',
        explanation: 'Bottom: $F = (1000)(10)(1.5)(2.0) = 30{,}000$ N. Avg pressure on wall: $(1/2)(1000)(10)(1.5) = 7500$ Pa. Wall force: $7500 \\times (2.0 \\times 1.5) = 22{,}500$ N.'
      }
    },
    {
      id: 'dp5-real-world',
      type: 'text' as const,
      content: `
## Real-World Applications

### Submarine Depth Limits
At 400 m depth, gauge pressure is $\\sim 4 \\times 10^6$ Pa (≈ 40 atm). The hull must withstand enormous compressive forces. Most military subs max out at ~300-500 m; the deepest dive ever (Mariana Trench, 10,994 m) experienced ~1100 atm.

### Blood Pressure
Blood pressure is measured in mmHg. A reading of "120/80" means:
- **Systolic** (heart pumping): 120 mmHg = 16,000 Pa gauge
- **Diastolic** (heart resting): 80 mmHg = 10,700 Pa gauge

This is tiny compared to atmospheric pressure — your blood vessels are under less than 0.16 atm of gauge pressure.

### Deep-Sea Fish
Fish at great depths have no gas-filled cavities that would collapse under pressure. They are adapted to their environment. Bringing them to the surface can be fatal — their internal pressure suddenly exceeds external pressure.
      `
    },
    {
      id: 'dp5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical windows on a submarine — one at 100 m depth, one at 300 m depth. The ratio of force on the deeper window to the shallower window is:',
            options: [
              '1:1 (same force)',
              '3:1',
              '9:1',
              '1:3'
            ],
            correctAnswer: 1,
            explanation: 'Force = $PA = \\rho g h \\times A$. Since $A$ is the same, the ratio is $h_2/h_1 = 300/100 = 3$. The deep window has 3× the force.'
          },
          {
            question: 'A tank is sealed and pressurized to 3 atm (absolute) with no fluid inside. Then it\'s filled with water to 5 m depth. The absolute pressure at the bottom is:',
            options: [
              '1.5 atm',
              '3 atm + ρgh',
              '1 atm + ρgh',
              '4 atm'
            ],
            correctAnswer: 1,
            explanation: 'The surface pressure is 3 atm (not 1 atm). So $P = 3\\ \\text{atm} + \\rho g h = 3 \\times 10^5 + (1000)(10)(5) = 350{,}000$ Pa ≈ 3.5 atm.'
          }
        ]
      }
    }
  ]
}
