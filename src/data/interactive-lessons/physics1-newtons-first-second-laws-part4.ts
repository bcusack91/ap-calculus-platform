export const physics1NewtonsFirstSecondLawsPart4Data = {
  topicSlug: 'newtons-first-second-laws',
  sections: [
    {
      id: 'nf4-intro',
      type: 'text' as const,
      content: `
# 🧮 Applying F = ma — Single Object Problems

**Part 4 of 7 — Newton\'s First and Second Laws**

Now we combine free body diagrams with Newton\'s Second Law to **solve real problems**. The strategy is always the same:

1. Draw the FBD
2. Choose coordinate axes
3. Write $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$
4. Solve for unknowns
      `
    },
    {
      id: 'nf4-problem-strategy',
      type: 'text' as const,
      content: `
## The Problem-Solving Strategy

### Step-by-Step Method

1. **Draw a picture** and identify the object
2. **Draw the FBD** — all forces labeled
3. **Choose axes** — one axis along the direction of acceleration
4. **Decompose forces** into x and y components
5. **Apply Newton\'s Second Law** in each direction:
   - $\\sum F_x = ma_x$
   - $\\sum F_y = ma_y$
6. **Solve** the resulting equations

### Key Insight

If the object doesn\'t accelerate in a particular direction, then $\\sum F = 0$ in that direction. This is the **equilibrium condition** for that axis.

### Example: Horizontal Push

A person pushes a 20 kg box across a frictionless floor with a horizontal force of 60 N.

**FBD forces:** Weight down ($W = 196$ N), normal up ($N$), push right ($F = 60$ N)

**x-direction:** $\\sum F_x = F = ma_x$
$$60 = 20 \\cdot a_x \\Rightarrow a_x = 3 \\text{ m/s}^2$$

**y-direction:** $\\sum F_y = N - W = 0$
$$N = W = 196 \\text{ N}$$
      `
    },
    {
      id: 'nf4-vertical-problems',
      type: 'text' as const,
      content: `
## Vertical Acceleration Problems

### Elevator Problems

An elevator is a classic AP scenario. A person of mass $m$ stands on a scale in an elevator.

The scale reads the **normal force** $N$ — what we call the **apparent weight**.

**Applying Newton\'s Second Law (taking up as positive):**

$$N - mg = ma$$

$$N = m(g + a)$$

| Elevator Motion | Acceleration $a$ | Scale Reading $N$ |
|----------------|-------------------|-------------------|
| At rest or constant velocity | $0$ | $mg$ (true weight) |
| Accelerating upward | $+a$ | $m(g + a) > mg$ (feels heavier) |
| Accelerating downward | $-a$ | $m(g - a) < mg$ (feels lighter) |
| Free fall | $-g$ | $0$ (weightless!) |

### Example

A 70 kg person stands on a scale in an elevator accelerating upward at 2 $m/s^{2}$.

$$N = m(g + a) = 70(9.8 + 2) = 70 \\times 11.8 = 826 \\text{ N}$$

True weight: $W = 70 \\times 9.8 = 686$ N. The scale reads 826 N — the person feels heavier!
      `
    },
    {
      id: 'nf4-angled-force',
      type: 'text' as const,
      content: `
## Applied Force at an Angle

When a force is applied at an angle $\\theta$ to the horizontal, you must decompose it:

$$F_x = F\\cos\\theta, \\quad F_y = F\\sin\\theta$$

### Example: Pulling a Sled

A person pulls a 15 kg sled with a 40 N force at 30° above the horizontal on a frictionless surface.

**x-direction:**
$$\\sum F_x = F\\cos\\theta = ma_x$$
$$40\\cos 30° = 15 \\cdot a_x$$
$$34.6 = 15 \\cdot a_x$$
$$a_x = 2.31 \\text{ m/s}^2$$

**y-direction:**
$$\\sum F_y = N + F\\sin\\theta - mg = 0$$
$$N = mg - F\\sin\\theta = 15(9.8) - 40\\sin 30° = 147 - 20 = 127 \\text{ N}$$

> **Notice:** Pulling upward at an angle **reduces** the normal force! This will matter when we study friction.
      `
    },
    {
      id: 'nf4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Application Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A person in an elevator feels heavier than normal. The elevator must be:',
            options: [
              'Moving upward at constant speed',
              'Accelerating upward',
              'Moving downward at constant speed',
              'Accelerating downward'
            ],
            correctAnswer: 1,
            explanation: 'Feeling heavier means the normal force $N > mg$. From $N = m(g + a)$, we need $a > 0$ (upward acceleration). Constant velocity gives $N = mg$ regardless of direction.'
          },
          {
            question: 'A rope pulls a box at 45° above the horizontal on a frictionless floor. Compared to the box\'s true weight $mg$, the normal force is:',
            options: [
              'Equal to $mg$',
              'Greater than $mg$',
              'Less than $mg$',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: 'The vertical component of tension ($T\\sin 45°$) partially supports the box\'s weight, so $N = mg - T\\sin 45° < mg$. The normal force is reduced.'
          },
          {
            question: 'A 5 kg object hangs from a rope attached to the ceiling. What is the tension in the rope? ($g = 9.8$ $m/s^{2}$)',
            options: [
              '5 N',
              '9.8 N',
              '49 N',
              '50 N'
            ],
            correctAnswer: 2,
            explanation: 'In equilibrium: $T - mg = 0$, so $T = mg = 5 \\times 9.8 = 49$ N.'
          }
        ]
      }
    },
    {
      id: 'nf4-calculations',
      type: 'input-boxes' as const,
      content: `
**F = ma Problem Solving** 🧮

1) A 60 kg person stands on a scale in an elevator accelerating downward at 3 $m/s^{2}$. What does the scale read (in N)? Use $g = 9.8$ $m/s^{2}$.

2) A horizontal force of 50 N pushes a 10 kg box across a frictionless floor. What is the acceleration $(in m/s^{2})$?

3) A person pulls a box with 100 N at 37° above horizontal (frictionless surface). The box has mass 25 kg. What is the horizontal acceleration $(in m/s^{2})$? Use $\\cos 37° = 0.80$.

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['408', '5', '3.2'],
        hint1: '$N = m(g + a)$ where $a = -3$ $m/s^{2}$ (downward). $N = 60(9.8 - 3)$.',
        hint2: '$a = F/m = 50/10$.',
        hint3: '$F_x = 100\\cos 37° = 80$ N. $a = F_x/m = 80/25$.',
        explanation: '1) $N = m(g - 3) = 60(9.8 - 3) = 60 \\times 6.8 = 408$ N. 2) $a = 50/10 = 5$ $m/s^{2}$. 3) $F_x = 100 \\times 0.80 = 80$ N. $a = 80/25 = 3.2$ $m/s^{2}$.'
      }
    },
    {
      id: 'nf4-dropdown-scenarios',
      type: 'dropdown-select' as const,
      content: `
**Scenario Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An elevator moves upward at constant velocity. The apparent weight is:',
            options: ['Greater than mg', 'Equal to mg', 'Less than mg', 'Zero'],
            correctIndex: 1,
            explanation: 'Constant velocity means $a = 0$. So $N = m(g + 0) = mg$. The scale reads the true weight.'
          },
          {
            label: 'Pushing a box downward at an angle increases the:',
            options: ['Weight', 'Normal force', 'Mass', 'Gravitational acceleration'],
            correctIndex: 1,
            explanation: 'Pushing down adds a downward component to the forces. To maintain vertical equilibrium, the normal force must increase: $N = mg + F\\sin\\theta$.'
          },
          {
            label: 'If the only horizontal force on an object is 30 N and the object has mass 6 kg, it accelerates at:',
            options: ['0.2 $m/s^{2}$', '5 $m/s^{2}$', '36 $m/s^{2}$', '180 $m/s^{2}$'],
            correctIndex: 1,
            explanation: '$a = F/m = 30/6 = 5$ $m/s^{2}$.'
          }
        ]
      }
    },
    {
      id: 'nf4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Applying F = ma** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 50 kg box is pushed with a horizontal force $F$ across a frictionless floor, accelerating at 4 $m/s^{2}$. What is $F$?',
            options: [
              '12.5 N',
              '50 N',
              '200 N',
              '490 N'
            ],
            correctAnswer: 2,
            explanation: '$F = ma = 50 \\times 4 = 200$ N.'
          },
          {
            question: 'A person pulls a 10 kg sled with 50 N at 60° above horizontal on a frictionless surface. The horizontal acceleration is closest to: (Use $\\cos 60° = 0.50$)',
            options: [
              '2.5 $m/s^{2}$',
              '4.3 $m/s^{2}$',
              '5.0 $m/s^{2}$',
              '10 $m/s^{2}$'
            ],
            correctAnswer: 0,
            explanation: '$F_x = 50\\cos 60° = 50 \\times 0.50 = 25$ N. $a = F_x/m = 25/10 = 2.5$ $m/s^{2}$.'
          }
        ]
      }
    }
  ]
}
