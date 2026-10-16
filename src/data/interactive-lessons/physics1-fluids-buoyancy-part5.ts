export const physics1FluidsBuoyancyPart5Data = {
  topicSlug: 'fluids-buoyancy',
  sections: [
    {
      id: 'fb5-intro',
      type: 'text' as const,
      content: `
# 🛶 Floating Object Calculations

**Part 5 of 7 — Fluids: Buoyancy**

When an object floats in equilibrium, the buoyant force equals the object's weight. From this single equation we can solve for unknowns: density, volume submerged, draft depth, or the load a boat can carry.

**In this lesson you will learn:**
- The floating-equilibrium equation $F_b = W$
- "Draft" depth and waterline calculations
- How extra cargo changes submerged volume
- The maximum load a vessel can carry before sinking
      `
    },
    {
      id: 'fb5-equation',
      type: 'text' as const,
      content: `
## Equilibrium Equation for Floating

$$\\rho_{fluid}\\, g\\, V_{sub} = m_{total}\\, g$$

Cancelling $g$:

$$\\rho_{fluid}\\, V_{sub} = m_{total}$$

### Draft Depth (rectangular hull)

For a rectangular bottom of area $A$ and submerged depth $d$:

$$V_{sub} = A \\cdot d \\quad \\Rightarrow \\quad d = \\frac{m_{total}}{\\rho_{fluid}\\, A}$$

### Adding Cargo

When cargo is added, the boat sinks lower. The CHANGE in submerged depth:

$$\\Delta d = \\frac{m_{cargo}}{\\rho_{fluid}\\, A_{waterline}}$$

### Maximum Load

A boat sinks when its hull edge reaches the waterline. The max cargo before sinking:

$$m_{max\\ cargo} = \\rho_{fluid}\\, V_{hull} - m_{boat}$$

where $V_{hull}$ is the hull's displaceable internal volume.
      `
    },
    {
      id: 'fb5-mc',
      type: 'multiple-choice' as const,
      content: `
**Floating Equilibrium Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For an object floating in equilibrium:',
            options: [
              '$F_b = W_{disp\\ fluid} = W_{object}$',
              '$F_b > W_{object}$, to keep it up',
              '$F_b < W_{object}$, as part sticks out',
              '$F_b = 0$ above the waterline'
            ],
            correctAnswer: 0,
            explanation: 'Equilibrium ⇒ buoyant force balances weight ⇒ weight of displaced fluid = weight of object.'
          },
          {
            question: 'Adding cargo to a floating boat causes it to:',
            options: [
              'Float higher, since its average density falls',
              'Sink lower, since it must push aside more water',
              'Stay at the same depth as before',
              'Become neutrally buoyant and hover'
            ],
            correctAnswer: 1,
            explanation: 'Heavier total weight requires more buoyancy → more displaced volume ($V_{sub}$ grows) → the boat sinks deeper.'
          },
          {
            question: 'A flat-bottomed barge floats with submerged depth 0.5 m in fresh water. Moved to seawater (denser), the depth becomes:',
            options: [
              'Greater than 0.5 m',
              'Less than 0.5 m',
              'Exactly 0.5 m',
              'Cannot tell'
            ],
            correctAnswer: 1,
            explanation: '$d = m/(\\rho_{fluid} A)$ — denser fluid → smaller depth. Boats sit higher in salt water.'
          }
        ]
      }
    },
    {
      id: 'fb5-input',
      type: 'input-boxes' as const,
      content: `
**Floating Calculations** 🧮 (g = 10, $\\rho_w = 1000$, $\\rho_{sw} = 1030$)

1) A barge has a flat bottom of area $50$ $m^{2}$ and total mass $30{,}000$ kg. Draft depth in fresh water (m)?

2) Same barge in seawater. Draft depth (m, 4 decimal places)?

3) A wooden raft (density 600 $kg/m^{3}$) is shaped as a $2\\text{ m} \\times 2\\text{ m} \\times 0.30\\text{ m}$ slab. Submerged depth in water (m)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.6', '0.5825', '0.18'],
        hint1: '$d = m/(\\rho_w A)$.',
        hint2: '$d = m/(\\rho_{sw} A)$.',
        hint3: 'Fraction submerged = $\\rho_{obj}/\\rho_w$ × thickness.',
        explanation: '1) $d = 30000 / (1000 \\cdot 50) = 0.6$ m. 2) $d = 30000/(1030 \\cdot 50) = 0.5825$ m. 3) Fraction = 600/1000 = 0.6. Submerged depth = $0.6 \\times 0.30 = 0.18$ m.'
      }
    },
    {
      id: 'fb5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Floating Object Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A floating ice cube melts. The water level in its glass:',
            options: ['Rises, since the melted ice adds water to the glass', 'Falls, since ice shrinks as it melts into water', 'Stays the same, as the meltwater fills the displaced volume', 'Depends on the size of the ice cube'],
            correctIndex: 2,
            explanation: 'The ice was displacing exactly its mass of water. When melted, that same mass occupies the same volume → no change in level.'
          },
          {
            label: 'A boat with cargo on top sinks lower. If cargo is then thrown overboard into the water:',
            options: ['The boat sinks lower, since the water rises', 'The boat rises, since it now carries less mass', 'The boat stays at the same level', 'The boat tips toward the thrown side'],
            correctIndex: 1,
            explanation: 'The boat now has less mass to support, so it needs less $V_{sub}$ and floats higher. (Whether the pond\'s water level rises or falls depends on whether the cargo floats or sinks.)'
          },
          {
            label: 'A boat barely floats with the waterline at the gunwale (top edge). One more passenger steps on. The boat:',
            options: ['Floats higher than before', 'Stays level with the gunwale', 'Takes on water over the gunwale and sinks', 'Floats lower but stays afloat'],
            correctIndex: 2,
            explanation: 'It is already at maximum displacement; the extra weight cannot be balanced by more buoyancy → water spills over the gunwale → it sinks.'
          },
          {
            label: 'A floating buoy of mass 5 kg in water (g = 10) — buoyant force on it is:',
            options: ['0.5 N', '5 N', '50 N', '0 N'],
            correctIndex: 2,
            explanation: 'Floating ⇒ $F_b = mg = 5(10) = 50$ N. 5 N is the mass with $g$ left out, 0.5 N divides by $g$ instead of multiplying, and 0 N wrongly assumes floating objects feel no buoyancy.'
          }
        ]
      }
    },
    {
      id: 'fb5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Floating Calculations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 80-kg boat has a flat hull of area 4.0 $m^{2}$. Cargo of 1200 kg is loaded. Submerged depth in fresh water (g = 10)?',
            options: [
              '0.020 m',
              '0.30 m',
              '0.32 m',
              '1.28 m'
            ],
            correctAnswer: 2,
            explanation: 'Total mass = 1280 kg. $d = m/(\\rho A) = 1280/(1000 \\cdot 4.0) = 0.32$ m. Leaving out the boat\'s 80 kg gives 0.30 m, using only the boat gives 0.020 m, and forgetting the hull area gives 1.28 m.'
          },
          {
            question: 'A wooden raft of volume 1.0 $m^{3}$ and density 700 $kg/m^{3}$ floats in fresh water. How much additional cargo (in kg) can be loaded before the raft is fully submerged?',
            options: [
              '1700 kg',
              '300 kg',
              '700 kg',
              '1000 kg'
            ],
            correctAnswer: 1,
            explanation: 'Max $V_{sub} = 1.0$ $m^{3}$ ⇒ max total mass = $\\rho_w V = 1000$ kg. Raft mass = 700 kg. Cargo allowance = 1000 − 700 = 300 kg. (1000 kg forgets to subtract the raft; 1700 kg adds instead of subtracting.)'
          }
        ]
      }
    }
  ]
}
