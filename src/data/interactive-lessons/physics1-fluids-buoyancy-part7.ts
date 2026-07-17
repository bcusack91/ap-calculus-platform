export const physics1FluidsBuoyancyPart7Data = {
  topicSlug: 'fluids-buoyancy',
  sections: [
    {
      id: 'fb7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review — Buoyancy

**Part 7 of 7 — Fluids: Buoyancy**

You now have the full toolkit: density, displaced volume, equilibrium, free-body diagrams. AP buoyancy questions reward students who can quickly identify $V_{disp}$ and write the right force equation.

**Big Ideas Recap:**
- $F_b = \\rho_{fluid}\\, g\\, V_{disp}$ (Archimedes)
- Floating ⇒ $F_b = W$ ⇒ $V_{sub}/V_{obj} = \\rho_{obj}/\\rho_{fluid}$
- Submerged ⇒ apparent weight $= W - F_b$
- Buoyancy depends on FLUID density and DISPLACED volume only
      `
    },
    {
      id: 'fb7-summary',
      type: 'text' as const,
      content: `
## AP Buoyancy Cheat Sheet

| Quantity | Equation |
|---------|----------|
| Buoyant force | $F_b = \\rho_{fluid}\\, g\\, V_{disp}$ |
| Floating (equilibrium) | $\\rho_{fluid} V_{sub} = m_{obj}$ |
| Fraction submerged | $V_{sub}/V_{obj} = \\rho_{obj}/\\rho_{fluid}$ |
| Apparent weight | $W_{app} = W - F_b$ |
| Tension (object held UP) | $T = W - F_b$ |
| Tension (object held DOWN) | $T = F_b - W$ |
| Normal on bottom | $N = W - F_b$ |

### AP-Style Question Patterns

1. **"Will it float?"** → compare $\\rho_{obj}$ vs $\\rho_{fluid}$.
2. **"Spring scale in air vs water"** → $F_b = W_{air} - W_{water}$ (gives volume).
3. **"How much load can a boat carry?"** → $m_{cargo,max} = \\rho_{fluid} V_{hull} - m_{boat}$.
4. **"Submarine neutral buoyancy"** → $\\rho_{sub,avg} = \\rho_{fluid}$.
5. **"Iceberg fraction below water"** → $\\rho_{ice}/\\rho_{water} ≈ 92\\%$.
      `
    },
    {
      id: 'fb7-mc',
      type: 'multiple-choice' as const,
      content: `
**AP Synthesis MC** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 12-kg metal block of volume $1.5\\times10^{-3}$ $m^{3}$ is fully submerged in water. Buoyant force (g = 10):',
            options: [
              '12 N',
              '15 N',
              '120 N',
              '150 N'
            ],
            correctAnswer: 1,
            explanation: '$F_b = 1000(10)(1.5\\times10^{-3}) = 15$ N. (Object weight 120 N → sinks.)'
          },
          {
            question: 'In water, a swimmer floats with 4% of body volume above the surface. Body density:',
            options: [
              '40 $kg/m^{3}$',
              '400 $kg/m^{3}$',
              '960 $kg/m^{3}$',
              '1040 $kg/m^{3}$'
            ],
            correctAnswer: 2,
            explanation: '96% submerged ⇒ $\\rho_{body} = 0.96 \\times 1000 = 960$ $kg/m^{3}$.'
          },
          {
            question: 'A submerged object weighs 27 N in water and 30 N in air. Its density $(kg/m^{3})$?',
            options: [
              '1000',
              '3000',
              '9000',
              '10000'
            ],
            correctAnswer: 3,
            explanation: '$F_b = 30 - 27 = 3$ N → $V = 3/(1000 \\cdot 10) = 3.0\\times10^{-4}$ $m^{3}$. Mass = 3.0 kg → $\\rho = 10{,}000$ $kg/m^{3}$.'
          }
        ]
      }
    },
    {
      id: 'fb7-input',
      type: 'input-boxes' as const,
      content: `
**AP Synthesis Calculations** 🧮 (g = 10, $\\rho_w = 1000$)

1) An iceberg has total volume 800 $m^{3}$ ($\\rho_{ice} = 917$). Volume above water in fresh water ($m^{3}$, 1 decimal)?

2) A 50-kg log floats with 70% submerged. Volume of the log ($m^{3}$, 4 decimals)?

3) A 4 kg ball with $V = 0.0040$ $m^{3}$ is held by a string at the BOTTOM (submerged). Tension (N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['66.4', '0.0714', '0'],
        hint1: 'Above-fraction = 1 − $\\rho_{ice}/\\rho_w$.',
        hint2: '$V_{sub}=m/\\rho_w$, $V_{obj}=V_{sub}/0.70$.',
        hint3: '$\\rho_{ball} = m/V$. Compare to water.',
        explanation: '1) Above fraction = $1 - 917/1000 = 0.083$. $V_{above} = 800 \\times 0.083 = 66.4$ $m^{3}$. 2) $V_{sub} = 50/1000 = 0.05$ $m^{3}$ → $V_{obj} = 0.05/0.70 = 0.0714$ $m^{3}$. 3) $\\rho_{ball} = 4/0.004 = 1000$ $kg/m^{3}$ = $\\rho_w$ → neutrally buoyant → $T = 0$.'
      }
    },
    {
      id: 'fb7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Synthesis Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A diver releases air bubbles. As bubbles rise, the buoyant force on each bubble:',
            options: ['Decreases (bubble shrinks)', 'Stays the same', 'Increases (pressure decreases → bubble expands → larger volume)', 'Becomes zero at the surface'],
            correctIndex: 2,
            explanation: 'Pressure decreases as bubble rises → ideal-gas expansion → larger $V$ → larger $F_b$. Bubbles accelerate upward.'
          },
          {
            label: 'Two cubes — one steel, one balsa — both half submerged at equilibrium when weighted differently. They have:',
            options: ['Same buoyancy', 'Different buoyancy depending on material', 'No buoyancy on balsa', 'Buoyancy proportional to material density'],
            correctIndex: 0,
            explanation: 'Half-submerged at equilibrium ⇒ $F_b = W$ for each AND $V_{sub}$ same. So if same total volume, $F_b$ is the same — total weights also equal.'
          },
          {
            label: 'A boat carries a stone. When stone is thrown overboard and sinks, the boat:',
            options: ['Sinks lower', 'Rises (less weight)', 'Stays the same', 'Tips over'],
            correctIndex: 1,
            explanation: 'Less mass → less $V_{sub}$ → boat rises.'
          },
          {
            label: 'A fully submerged object accelerates downward when:',
            options: ['$F_b > W$', '$F_b = W$', '$F_b < W$', 'Always'],
            correctIndex: 2,
            explanation: 'Net force down = $W - F_b > 0$ when weight exceeds buoyancy.'
          }
        ]
      }
    },
    {
      id: 'fb7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — AP Synthesis** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 10-kg cylinder of volume 0.012 $m^{3}$ is fully submerged in water (g = 10). The acceleration of the cylinder when released is:',
            options: [
              '2 $m/s^{2}$ downward',
              '2 $m/s^{2}$ upward',
              '10 $m/s^{2}$ upward',
              '0 (neutral)'
            ],
            correctAnswer: 1,
            explanation: '$F_b = 1000(10)(0.012) = 120$ N up. $W = 100$ N. Net = 20 N up. $a = 20/10 = 2$ $m/s^{2}$ upward.'
          },
          {
            question: 'A small boat plus crew has total mass 500 kg. To safely operate, max safe submerged depth is 0.40 m. The minimum waterline area $(m^{2})$ needed:',
            options: [
              '0.50',
              '1.25',
              '2.00',
              '12.5'
            ],
            correctAnswer: 1,
            explanation: '$m = \\rho_w A d \\Rightarrow A = m/(\\rho_w d) = 500/(1000 \\cdot 0.40) = 1.25$ $m^{2}$.'
          }
        ]
      }
    }
  ]
}
