export const physics1FluidsBernoulliPart5Data = {
  topicSlug: 'fluids-bernoulli',
  sections: [
    {
      id: 'fbe5-intro',
      type: 'text' as const,
      content: `
# 🌍 Real-World Applications

**Part 5 of 7 — Fluids: Bernoulli's Equation**

Bernoulli isn't just an exam formula — it explains lift, plumbing, weather, sports, and your shower curtain. AP often presents qualitative scenarios where you must identify the Bernoulli effect at work.

**In this lesson you will explore:**
- Airfoil lift (qualitative + estimate)
- Venturi meters and flow measurement
- Pitot tubes (airplane airspeed)
- Atomizers, chimneys, and Magnus effect
      `
    },
    {
      id: 'fbe5-applications',
      type: 'text' as const,
      content: `
## Application Catalog

### 1. Airfoil / Lift
- Curved upper surface forces air to travel a longer path → faster speed (in the simple model).
- Faster speed on top ⇒ lower $P$ on top by Bernoulli.
- Pressure difference × wing area = lift force.

$F_{lift} \\approx \\Delta P \\cdot A = \\tfrac{1}{2}\\rho_{air}(v_{top}^2 - v_{bot}^2)\\, A$

### 2. Venturi Meter (flow measurement)
- A pipe with a narrow throat and a U-tube manometer between wide and narrow.
- Difference in heights of the manometer fluid → $\\Delta P$ → using continuity + Bernoulli, solve for $v$ and hence $Q$.

### 3. Pitot Tube (airspeed)
- Has a forward-facing port (stagnation point, $v = 0$, $P = P_{stag}$) and a side port (flow speed $v$, $P = P_{static}$).
- Bernoulli at constant height: $P_{stag} = P_{static} + \\tfrac{1}{2}\\rho v^2$.
- $v = \\sqrt{2(P_{stag} - P_{static})/\\rho}$.

### 4. Atomizer / Spray Bottle
- Squeezing air across a vertical tube creates fast horizontal flow → low $P$ at top.
- Atmospheric pressure pushes liquid up the tube and into the air stream.

### 5. Chimney Effect
- Wind across a chimney top → low $P$ at top → draws smoke up.

### 6. Magnus Force (curveballs)
- Spinning ball drags air around it; one side speeds up, the other slows down → pressure differential → side force.
      `
    },
    {
      id: 'fbe5-mc',
      type: 'multiple-choice' as const,
      content: `
**Application Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A Pitot tube measures airspeed. The principle relies on:',
            options: [
              'Pressure difference between a stagnation port and a static port',
              'Magnetic induction',
              'Sound waves',
              'Doppler effect on light'
            ],
            correctAnswer: 0,
            explanation: '$P_{stag} - P_{static} = \\tfrac{1}{2}\\rho v^2$.'
          },
          {
            question: 'A perfume atomizer works because:',
            options: [
              'Surface tension lifts the liquid',
              'Fast air over the tube top creates low pressure; atmospheric pressure pushes liquid up',
              'Heat vaporizes the perfume',
              'Capillary action'
            ],
            correctAnswer: 1,
            explanation: 'Bernoulli effect at the tube tip + atmospheric push from the bottle.'
          },
          {
            question: 'In a Venturi meter, the location of LOWEST pressure is:',
            options: [
              'In the wide upstream section',
              'In the narrow throat',
              'In the wide downstream section',
              'Outside the pipe'
            ],
            correctAnswer: 1,
            explanation: 'Continuity: throat has highest $v$. Bernoulli: highest $v$ ⇒ lowest $P$.'
          }
        ]
      }
    },
    {
      id: 'fbe5-input',
      type: 'input-boxes' as const,
      content: `
**Application Calculations** 🧮 ($\\rho_{air} = 1.2$, $\\rho_w = 1000$, g = 10)

1) A Pitot tube on an airplane reads $P_{stag} - P_{static} = 600$ Pa. Airspeed (m/s)?

2) An airfoil has $v_{top} = 80$ m/s, $v_{bot} = 60$ m/s. Pressure difference $\\Delta P = P_{bot} - P_{top}$ (Pa)?

3) Wing area = 12 $m^{2}$. Lift force using the $\\Delta P$ from Q2 (N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['31.62', '1680', '20160'],
        hint1: '$v = \\sqrt{2 \\Delta P / \\rho}$.',
        hint2: '$\\Delta P = \\tfrac{1}{2}\\rho_{air}(v_t^2 - v_b^2)$.',
        hint3: '$F = \\Delta P \\cdot A$.',
        explanation: '1) $v = \\sqrt{2(600)/1.2} = \\sqrt{1000} ≈ 31.62$ m/s. 2) $\\Delta P = \\tfrac{1}{2}(1.2)(6400 - 3600) = 0.6 \\times 2800 = 1680$ Pa. 3) $F = 1680 \\times 12 = 20{,}160$ N.'
      }
    },
    {
      id: 'fbe5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Application Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A house in a hurricane has a closed door. The wind blows past the windward wall fast and the leeward wall is in still air. The door tends to be:',
            options: ['Pushed inward (toward the leeward side)', 'Pulled toward the windward side', 'Unaffected', 'Pulled upward'],
            correctIndex: 0,
            explanation: 'Higher pressure on the leeward side (still air) pushes the door toward the low-pressure windward side. Wait — actually the WINDWARD side is FACING the wind. The wind on the WINDWARD WALL\'S OUTSIDE moves FAST → low pressure outside → indoor pressure pushes the wall outward. The DOOR (on, say, the leeward side) sees still air outside and indoor pressure inside; if indoor air slowed, then the OUTSIDE high pressure pushes the door INWARD.'
          },
          {
            label: 'A spinning baseball curves because of:',
            options: ['Gravity', 'Coriolis force', 'Magnus effect (Bernoulli)', 'Friction with the catcher'],
            correctIndex: 2,
            explanation: 'Spin creates asymmetric speed → asymmetric $P$ → side force.'
          },
          {
            label: 'A chimney pulls smoke upward more strongly on a windy day because:',
            options: ['Wind directly carries smoke', 'Wind across the top lowers pressure there → draws smoke up', 'Air gets denser', 'Cold air sinks faster'],
            correctIndex: 1,
            explanation: 'Bernoulli effect at the chimney top.'
          },
          {
            label: 'Which application does NOT depend on the Bernoulli effect?',
            options: ['Pitot tube', 'Atomizer', 'Hydraulic press', 'Venturi meter'],
            correctIndex: 2,
            explanation: 'Hydraulic press uses Pascal\'s Principle (static fluid).'
          }
        ]
      }
    },
    {
      id: 'fbe5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Real-World Applications** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An airfoil with surface area $A = 10$ $m^{2}$ has air speeds $v_{top} = 100$ m/s and $v_{bot} = 90$ m/s ($\\rho_{air} = 1.2$). Approximate lift force?',
            options: [
              '$570$ N',
              '$1140$ N',
              '$11400$ N',
              '$57000$ N'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta P = \\tfrac{1}{2}(1.2)(10000 - 8100) = 0.6(1900) = 1140$ Pa. $F = 1140 \\times 10 = 11{,}400$ N.'
          },
          {
            question: 'A Pitot tube on a small plane shows $P_{stag} - P_{static} = 1500$ Pa. The airspeed ($\\rho_{air} = 1.2$ $kg/m^{3}$)?',
            options: [
              '$25$ m/s',
              '$50$ m/s',
              '$1250$ m/s',
              '$2500$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{2(1500)/1.2} = \\sqrt{2500} = 50$ m/s.'
          }
        ]
      }
    }
  ]
}
