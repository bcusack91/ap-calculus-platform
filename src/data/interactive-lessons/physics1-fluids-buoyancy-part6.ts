export const physics1FluidsBuoyancyPart6Data = {
  topicSlug: 'fluids-buoyancy',
  sections: [
    {
      id: 'fb6-intro',
      type: 'text' as const,
      content: `
# 🛠 Buoyancy Problem-Solving Workshop

**Part 6 of 7 — Fluids: Buoyancy**

This workshop combines submerged- and floating-object problems with multiple forces (tension, normal, applied). AP loves to mix these so you must construct careful free-body diagrams.

**Workshop Strategy:**
1. Sketch the FBD: weight (down), buoyancy (up), other forces.
2. Identify $V_{disp}$: full $V_{obj}$ if fully submerged, or only the part below the waterline.
3. Apply $\\sum F_y = ma$.
4. Watch SIGN of tension — does the rope pull up or down?
      `
    },
    {
      id: 'fb6-types',
      type: 'text' as const,
      content: `
## Six Standard Problem Patterns

| Pattern | Setup | Key Equation |
|---------|-------|--------------|
| Spring scale (in air) | Object hanging | $F_{scale} = W$ |
| Spring scale (submerged) | Object hanging in water | $F_{scale} = W - F_b$ |
| Floating | Object on surface | $F_b = W$ ⇒ $V_{sub} = (\\rho_{obj}/\\rho_f)V_{obj}$ |
| Tied UP (sink-prone) | Rope holds heavy object | $T = W - F_b$ |
| Tied DOWN (float-prone) | Rope holds light object under | $T = F_b - W$ |
| Resting on bottom | Heavy object on pool floor | $N = W - F_b$ |

### Tip: Three Force Equations Are All Variants Of...

$$\\sum F_y = F_b - W + T_{net} = ma$$

Where $T_{net}$ is positive if the extra force pushes UP, negative if DOWN. In static problems, set $a = 0$ and solve.
      `
    },
    {
      id: 'fb6-mc',
      type: 'multiple-choice' as const,
      content: `
**Workshop MC** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A boat plus crew of total weight 9000 N floats in seawater ($\\rho = 1030$). The volume of seawater displaced (g = 10) is approximately:',
            options: [
              '0.87 $m^{3}$',
              '0.90 $m^{3}$',
              '8.7 $m^{3}$',
              '90 $m^{3}$'
            ],
            correctAnswer: 0,
            explanation: '$V_{disp} = W/(\\rho_{sw} g) = 9000/(1030 \\cdot 10) ≈ 0.874$ $m^{3}$. Using fresh-water density gives 0.90 $m^{3}$; leaving out $g$ gives 8.7 $m^{3}$; multiplying by $g$ gives about 90 $m^{3}$.'
          },
          {
            question: 'A 200 N stone is fully submerged in water and rests on a scale at the pool bottom. Buoyancy on it is 25 N. Scale reading?',
            options: [
              '25 N',
              '175 N',
              '200 N',
              '225 N'
            ],
            correctAnswer: 1,
            explanation: '$N = W - F_b = 200 - 25 = 175$ N.'
          }
        ]
      }
    },
    {
      id: 'fb6-input',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮 (g = 10, $\\rho_w = 1000$)

1) A 12 kg block of volume $5.0\\times10^{-3}$ $m^{3}$ is fully submerged. Apparent weight on a scale (N)?

2) A 2.0 kg piece of foam (volume 0.020 $m^{3}$) is held under water by a string. String tension (N)?

3) A 1.5 kg wooden block (density 750 $kg/m^{3}$) floats. Volume submerged $(m^{3})$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70', '180', '0.0015'],
        hint1: '$W_{app} = mg - \\rho g V$.',
        hint2: '$T = F_b - W$.',
        hint3: 'Floating ⇒ $V_{sub} = m/\\rho_w$.',
        explanation: '1) $W_{app} = 12(10) - 1000(10)(5.0\\times10^{-3}) = 120 - 50 = 70$ N. 2) $F_b = 200$ N, $W = 20$ N → $T = 180$ N. 3) $V_{sub} = 1.5/1000 = 0.0015$ $m^{3}$.'
      }
    },
    {
      id: 'fb6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Workshop Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A submerged scale shows the apparent weight of a brick is 80% of its true weight. The brick\'s density is approximately:',
            options: ['1250 $kg/m^{3}$', '200 $kg/m^{3}$', '5000 $kg/m^{3}$', '800 $kg/m^{3}$'],
            correctIndex: 2,
            explanation: '$W_{app}/W = 1 - \\rho_w/\\rho_{obj} = 0.80 \\Rightarrow \\rho_w/\\rho_{obj} = 0.20 \\Rightarrow \\rho_{obj} = 5000$ $kg/m^{3}$. 800 treats 80% like a floating fraction, 1250 is 1000/0.80, and 200 inverts the final ratio.'
          },
          {
            label: 'A balloon at the bottom of a pool, released, accelerates upward. As it rises, the buoyant force on it (assume rigid balloon, constant volume):',
            options: ['Increases, since the pressure drops as it rises', 'Stays the same, since $\\rho_w$ and $V$ don\'t change', 'Decreases, since less water is above it', 'Increases, since it speeds up as it rises'],
            correctIndex: 1,
            explanation: 'Constant fluid density and constant volume → constant $F_b = \\rho_w g V$; depth and speed do not enter. A real, flexible balloon would expand as the pressure drops, and then its $F_b$ would grow.'
          },
          {
            label: 'A swimmer holds her breath fully underwater, first in fresh water and then in salt water. The buoyant force on her is greater in:',
            options: ['Fresh water', 'Salt water', 'Same in both', 'Depends on how deep she is'],
            correctIndex: 1,
            explanation: 'Fully submerged, she displaces the same volume either way; salt water is denser, so $F_b = \\rho_{fluid} g V$ is larger. (If she were floating at the surface instead, $F_b$ would equal her weight in both.)'
          },
          {
            label: 'A boat carrying a stone is floating in a pond. If the stone is dropped overboard and sinks, the pond level:',
            options: ['Rises, since the stone now adds its volume to the pond', 'Falls', 'Stays the same, since the total mass is unchanged', 'Rises, as the sinking stone pushes water upward'],
            correctIndex: 1,
            explanation: 'In the boat the stone displaced water equal to its weight. Once sunk it displaces only its own volume (much less since stone is denser than water) → level falls.'
          }
        ]
      }
    },
    {
      id: 'fb6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A fully submerged crown weighs 200 N in air and 180 N when hung in water (g = 10). Its volume and density are:',
            options: [
              '$2.0\\times10^{-3}$ $m^{3}$, 10000 $kg/m^{3}$',
              '$2.0\\times10^{-2}$ $m^{3}$, 1000 $kg/m^{3}$',
              '$2.0\\times10^{-3}$ $m^{3}$, 1000 $kg/m^{3}$',
              '$2.0\\times10^{-4}$ $m^{3}$, 100000 $kg/m^{3}$'
            ],
            correctAnswer: 0,
            explanation: '$F_b = 20$ N → $V = 20/(1000 \\cdot 10) = 2.0\\times10^{-3}$ $m^{3}$. Mass = 20 kg → density = 20/0.002 = 10000 $kg/m^{3}$.'
          },
          {
            question: 'A buoy floats with 40% above water in fresh water. The mass of buoy per cubic meter (its avg density) is:',
            options: [
              '400 $kg/m^{3}$',
              '600 $kg/m^{3}$',
              '1000 $kg/m^{3}$',
              '1667 $kg/m^{3}$'
            ],
            correctAnswer: 1,
            explanation: '40% above ⇒ 60% submerged. Density = $0.60 \\times 1000 = 600$ $kg/m^{3}$. (400 uses the fraction above water; 1667 is 1000/0.60, the ratio inverted.)'
          }
        ]
      }
    }
  ]
}
