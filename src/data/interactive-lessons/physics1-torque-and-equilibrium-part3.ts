export const physics1TorqueAndEquilibriumPart3Data = {
  topicSlug: 'torque-and-equilibrium',
  sections: [
    {
      id: 'te3-intro',
      type: 'text' as const,
      content: `
# ⚖️ Rotational Equilibrium

**Part 3 of 7 — $\\sum \\tau = 0$**

An object is in **rotational equilibrium** when it has no net torque acting on it. This means it is either not rotating at all, or rotating at a constant angular velocity (no angular acceleration).
      `
    },
    {
      id: 'te3-condition',
      type: 'text' as const,
      content: `
## The Condition for Rotational Equilibrium

$$\\sum \\tau = 0$$

This means the total clockwise torque equals the total counterclockwise torque:

$$\\sum \\tau_{\\text{CCW}} = \\sum \\tau_{\\text{CW}}$$

### Choosing a Pivot Point

You can choose **any** point as your axis of rotation when applying $\\sum \\tau = 0$. The physics is the same regardless of your choice!

**Pro tip:** Choose a pivot point where an unknown force acts. That force will produce zero torque (since $r = 0$), simplifying your equation.

### Example: Simple Balance

A 4 m uniform beam is balanced on a fulcrum at its center. A 20 N weight sits at the left end. Where should a 40 N weight be placed to balance the beam?

Taking torques about the fulcrum:
- 20 N weight: $\\tau = +(20)(2) = +40$ N·m (CCW)
- 40 N weight at distance $d$ to the right: $\\tau = -(40)(d)$ (CW)

Setting $\\sum \\tau = 0$:
$$40 - 40d = 0 \\Rightarrow d = 1 \\text{ m from center}$$
      `
    },
    {
      id: 'te3-multiple-forces',
      type: 'text' as const,
      content: `
## Multiple Torques

When multiple forces act on an object, calculate the torque from each one about the **same pivot**, then add them with proper signs.

### Strategy
1. Draw a clear diagram
2. Choose a convenient pivot point
3. Calculate each torque (with sign)
4. Set $\\sum \\tau = 0$ and solve

### Weight of the Beam

For a **uniform** beam, the weight acts at the **center of mass** (geometric center). Don't forget to include the beam's own weight when it matters!
      `
    },
    {
      id: 'te3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rotational Equilibrium Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An object is in rotational equilibrium when:',
            options: [
              'No forces act on it',
              'The net torque about any axis is zero',
              'It is not moving',
              'All forces are equal in magnitude'
            ],
            correctAnswer: 1,
            explanation: 'Rotational equilibrium requires $\\sum \\tau = 0$. Forces can still act on the object — they just produce no net torque.'
          },
          {
            question: 'When solving a rotational equilibrium problem, you should choose the pivot at:',
            options: [
              'The center of the object only',
              'The point where the heaviest weight acts',
              'Any convenient point — often where an unknown force acts',
              'The leftmost point only'
            ],
            correctAnswer: 2,
            explanation: 'You can choose any point as the pivot. Choosing a point where an unknown force acts eliminates that force from the torque equation (since $r = 0$).'
          },
          {
            question: 'A uniform beam balanced at its center has a 30 N weight at one end. To balance it, a 15 N weight must be placed:',
            options: [
              'At the opposite end',
              'Twice as far from center as the 30 N weight',
              'At the center',
              'At the same position as the 30 N weight'
            ],
            correctAnswer: 1,
            explanation: 'For balance: $(30)(L/2) = (15)(d)$, giving $d = L$ from the center. The 30 N weight is at $L/2$ from center (at the end), so the 15 N weight must be at $L$ from center — that is, **twice as far** as the 30 N weight. A lighter weight must sit farther from the fulcrum to create the same torque.'
          }
        ]
      }
    },
    {
      id: 'te3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Rotational Equilibrium Problems** 🧮

1) A 6 m beam is balanced on a fulcrum at its center. A 50 N weight is 2 m to the left of the fulcrum. Where (in m from the fulcrum) should a 25 N weight be placed to the right for balance?

2) A see-saw has a fulcrum at its center. Child A (400 N) sits 2.5 m from the fulcrum. How far from the fulcrum (in m) must Child B (500 N) sit to balance?

3) A 10 m beam has a fulcrum 4 m from the left end. A 60 N force pushes down at the left end. What downward force (in N) at the right end balances the beam? (Ignore beam weight)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '40'],
        hint1: '$(50)(2) = (25)(d) \\Rightarrow d = ?$',
        hint2: '$(400)(2.5) = (500)(d) \\Rightarrow d = ?$',
        hint3: '$(60)(4) = F(6) \\Rightarrow F = ?$ (right end is 6 m from fulcrum)',
        explanation: '1) $(50)(2) = (25)(d) \\Rightarrow d = 100/25 = 4$ m. 2) $(400)(2.5) = (500)(d) \\Rightarrow d = 1000/500 = 2$ m. 3) $(60)(4) = F(6) \\Rightarrow F = 240/6 = 40$ N.'
      }
    },
    {
      id: 'te3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Equilibrium Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rotational equilibrium requires that:',
            options: ['net force is zero', 'net torque is zero', 'the object is stationary', 'all forces are balanced'],
            correctIndex: 1,
            explanation: 'Rotational equilibrium specifically requires $\\sum \\tau = 0$. Net force being zero is translational equilibrium.'
          },
          {
            label: 'The best place to choose a pivot for torque calculations is:',
            options: ['at the center of mass', 'at one end', 'at a point where an unknown force acts', 'any of these — it does not matter'],
            correctIndex: 3,
            explanation: 'The pivot can be chosen anywhere. All choices give the same physical result, though some make the algebra easier.'
          },
          {
            label: 'To balance a lighter person on a see-saw, a heavier person must sit:',
            options: ['closer to the fulcrum', 'farther from the fulcrum', 'at the same distance', 'it cannot balance'],
            correctIndex: 0,
            explanation: 'A heavier person must sit closer to the fulcrum to balance a lighter person: $m_1 r_1 = m_2 r_2$.'
          }
        ]
      }
    },
    {
      id: 'te3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rotational Equilibrium** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 m uniform beam weighing 200 N is supported at one end (A) and at a point 3 m from A. The beam is in equilibrium. The support force at the 3 m point is closest to:',
            options: [
              '100 N',
              '167 N',
              '200 N',
              '333 N'
            ],
            correctAnswer: 1,
            explanation: 'Take torques about point A. The beam\'s weight acts at its center (2.5 m from A). Let $N$ be the force at 3 m. $\\sum \\tau_A = 0$: $N(3) - 200(2.5) = 0 \\Rightarrow N = 500/3 \\approx 167$ N.'
          },
          {
            question: 'Doubling the distance of a force from the pivot while halving the force magnitude results in:',
            options: [
              'Double the torque',
              'Half the torque',
              'The same torque',
              'Zero torque'
            ],
            correctAnswer: 2,
            explanation: '$\\tau = rF$. If $r \\to 2r$ and $F \\to F/2$, then $\\tau = (2r)(F/2) = rF$, which is unchanged.'
          }
        ]
      }
    }
  ]
}
