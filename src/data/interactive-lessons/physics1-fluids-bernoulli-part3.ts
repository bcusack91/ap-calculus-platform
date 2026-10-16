export const physics1FluidsBernoulliPart3Data = {
  topicSlug: 'fluids-bernoulli',
  sections: [
    {
      id: 'fbe3-intro',
      type: 'text' as const,
      content: `
# 🔄 The Pressure–Speed Trade-off

**Part 3 of 7 — Fluids: Bernoulli's Equation**

The most famous Bernoulli result: **fast-moving fluid has lower pressure**. This is what makes airfoils lift, atomizers spray, and shower curtains pull inward. AP loves to test this counter-intuitive idea.

**In this lesson you will learn:**
- The Bernoulli effect at constant elevation
- Why "lift" and "suction" happen
- Real-world examples: airplane wings, chimneys, shower curtains
- How to predict pressure direction from speed change
      `
    },
    {
      id: 'fbe3-tradeoff',
      type: 'text' as const,
      content: `
## Horizontal Bernoulli

For a horizontal streamline ($y_1 = y_2$):

$$P_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\tfrac{1}{2}\\rho v_2^2$$

So $\\Delta P = \\tfrac{1}{2}\\rho (v_1^2 - v_2^2)$.

**Where the fluid is faster, the pressure is lower.**

### Real-World Examples

| Phenomenon | Why |
|-----------|-----|
| Airplane wing (lift) | Faster air over curved top → lower pressure on top → net upward force |
| Atomizer/perfume spray | Fast air over a tube tip → low $P$ at top → liquid pushed up by atmospheric pressure |
| Shower curtain pulled in | Falling water drags air faster on inside → lower $P$ → curtain pushed in |
| Wind blowing roof off | Fast wind over roof → low $P$ above → high $P$ below pushes roof up |

### A Common Misconception

❌ "Lower pressure pulls things into the fast stream."
✅ Higher pressure on the OTHER side PUSHES things toward the fast stream. Pressure only pushes.

### Linking to Continuity

$A_1 v_1 = A_2 v_2$ tells you HOW the speed changes (geometry).
Bernoulli tells you HOW the pressure responds (energy).
**Both are needed for venturi-style problems.** (Coming in Part 6.)
      `
    },
    {
      id: 'fbe3-mc',
      type: 'multiple-choice' as const,
      content: `
**Pressure-Speed Trade-off** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a horizontal pipe with no height change, where the fluid speed is highest, the pressure is:',
            options: [
              'Highest',
              'Lowest',
              'Zero, since all energy is kinetic',
              'Equal to atmospheric'
            ],
            correctAnswer: 1,
            explanation: 'Bernoulli with $\\Delta y = 0$: faster $v$ ⇒ lower $P$.'
          },
          {
            question: 'Why does an airplane wing generate lift (in the simplified Bernoulli explanation)?',
            options: [
              'Faster air over the top lowers the pressure above the wing',
              'Air friction along the underside drags the wing upward',
              'The wing\'s hollow interior makes it buoyant in air',
              'Engine thrust, tilted upward, supplies all of the lift'
            ],
            correctAnswer: 0,
            explanation: 'Faster top-side flow ⇒ lower top pressure ⇒ net upward pressure force.'
          },
          {
            question: 'A shower curtain is pulled inward when the water is on. The reason is:',
            options: [
              'Water droplets pull it in by adhesion',
              'Moving air inside lowers the pressure there',
              'Rising steam pushes the curtain inward',
              'Surface tension in the spray'
            ],
            correctAnswer: 1,
            explanation: 'Bernoulli effect: the spray drags air into motion, the faster-moving air inside has lower pressure, and the higher pressure of the still air outside pushes the curtain in.'
          }
        ]
      }
    },
    {
      id: 'fbe3-input',
      type: 'input-boxes' as const,
      content: `
**Pressure-Speed Calculations** 🧮 ($\\rho_w = 1000$, $\\rho_{air} = 1.2$)

1) A horizontal pipe carries water at 2 m/s where $P = 150$ kPa. At a constriction it speeds up to 8 m/s. Pressure at the constriction (kPa)?

2) Air flows over a wing at 50 m/s on top and 40 m/s on bottom. Pressure difference (Pa, top vs bottom: $\\Delta P = P_{bottom} - P_{top}$)?

3) A horizontal water pipe widens. At point 1: $v_1 = 6$ m/s, $P_1 = 100$ kPa. At point 2: $v_2 = 2$ m/s. $P_2$ in kPa?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '540', '116'],
        hint1: '$P_2 = P_1 + \\tfrac{1}{2}\\rho(v_1^2 - v_2^2)$.',
        hint2: '$\\Delta P = \\tfrac{1}{2}\\rho_{air}(v_{top}^2 - v_{bot}^2)$.',
        hint3: 'Slowing fluid ⇒ pressure rises.',
        explanation: '1) $\\tfrac{1}{2}(1000)(4 - 64) = -30{,}000$ Pa. $P_2 = 150 - 30 = 120$ kPa. 2) $\\tfrac{1}{2}(1.2)(2500-1600) = 540$ Pa. 3) $P_2 = 100{,}000 + \\tfrac{1}{2}(1000)(36-4) = 116$ kPa.'
      }
    },
    {
      id: 'fbe3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Pressure-Speed Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a horizontal Venturi tube, the pressure is lowest in the:',
            options: ['Wide section', 'Narrow section', 'Reservoir', 'Outside the tube'],
            correctIndex: 1,
            explanation: 'Narrow ⇒ fast (continuity) ⇒ low pressure (Bernoulli).'
          },
          {
            label: 'Two boats moving in parallel on a calm river drift toward each other because:',
            options: ['Surface tension pulls the two hulls together', 'Faster water between them lowers the pressure there', 'Gravitational attraction between the hulls', 'Wind deflected off one hull pushes the other'],
            correctIndex: 1,
            explanation: 'Bernoulli effect: water squeezed between the hulls speeds up, its pressure drops, and the higher pressure of the slower water on the outer sides pushes the boats together.'
          },
          {
            label: 'A strong wind blows across a roof. The roof tends to:',
            options: ['Be pushed down', 'Be lifted up', 'Stay still, held by its weight', 'Be pushed sideways'],
            correctIndex: 1,
            explanation: 'Fast air on top → low pressure above → roof lifted by higher pressure inside.'
          },
          {
            label: 'The Bernoulli effect requires:',
            options: ['Two points on the same streamline of an ideal fluid', 'A pump that keeps the fluid moving', 'A vacuum on one side of the fluid', 'Surface tension at the fluid\'s surface'],
            correctIndex: 0,
            explanation: 'Bernoulli\'s equation applies along a streamline.'
          }
        ]
      }
    },
    {
      id: 'fbe3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Pressure-Speed Trade-off** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A horizontal pipe carries water at 3 m/s where $P = 200$ kPa. The pipe narrows so $v = 9$ m/s. New pressure?',
            options: [
              '$164$ kPa',
              '$200$ kPa',
              '$236$ kPa',
              '$182$ kPa'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta P = \\tfrac{1}{2}(1000)(3^2 - 9^2) = \\tfrac{1}{2}(1000)(9 - 81) = -36$ kPa. $P_2 = 200 - 36 = 164$ kPa. A sign slip gives 236 kPa; using $(v_2 - v_1)^2$ instead of $v_2^2 - v_1^2$ gives a drop of only 18 kPa (182 kPa).'
          },
          {
            question: 'Air ($\\rho = 1.2$ $kg/m^{3}$) streams along one face of a building at 30 m/s; along the opposite face the air is essentially still. The pressure difference (fast-air face minus still-air face) at the same height is approximately:',
            options: [
              '$+540$ Pa',
              '$-540$ Pa',
              '$+1080$ Pa',
              '$-1080$ Pa'
            ],
            correctAnswer: 1,
            explanation: 'The fast-air face has lower $P$. $\\Delta P = -\\tfrac{1}{2}\\rho v^2 = -\\tfrac{1}{2}(1.2)(30^2) = -540$ Pa. Forgetting the ½ gives 1080 Pa; dropping the minus sign gives +540 Pa.'
          }
        ]
      }
    }
  ]
}
