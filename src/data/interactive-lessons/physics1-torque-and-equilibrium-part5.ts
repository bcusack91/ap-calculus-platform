export const physics1TorqueAndEquilibriumPart5Data = {
  topicSlug: 'torque-and-equilibrium',
  sections: [
    {
      id: 'te5-intro',
      type: 'text' as const,
      content: `
# 🎢 Balancing Beams and See-Saw Problems

**Part 5 of 7 — Classic Equilibrium Scenarios**

See-saws, balance beams, and supported structures are the bread and butter of torque problems on the AP exam. Let's master the patterns!
      `
    },
    {
      id: 'te5-seesaw',
      type: 'text' as const,
      content: `
## The See-Saw Principle

For a see-saw balanced on a fulcrum:

$$m_1 g \\cdot d_1 = m_2 g \\cdot d_2$$

Since $g$ cancels:

$$m_1 d_1 = m_2 d_2$$

### Key Insight

The heavier person must sit **closer** to the fulcrum. The ratio of distances is inversely proportional to the ratio of weights:

$$\\frac{d_1}{d_2} = \\frac{m_2}{m_1}$$

### Multiple Weights

With multiple weights on each side, sum the torques:

$$\\sum m_i g \\cdot d_i \\text{ (left)} = \\sum m_j g \\cdot d_j \\text{ (right)}$$
      `
    },
    {
      id: 'te5-beam-weight',
      type: 'text' as const,
      content: `
## Including the Beam's Weight

For a **uniform beam**, its weight acts at the geometric center (center of mass).

### Example

A 6 m uniform beam weighs 120 N and rests on a fulcrum 2 m from the left end. A 300 N weight hangs from the left end. Find the force needed at the right end to balance.

Taking torques about the fulcrum:
- 300 N weight: $\\tau = +(300)(2) = +600$ N·m (CCW)
- Beam weight at center (3 m from left end = 1 m to right of fulcrum): $\\tau = -(120)(1) = -120$ N·m (CW)
- Force $F$ at right end (4 m from fulcrum): $\\tau = -(F)(4)$ (CW)

$$600 - 120 - 4F = 0 \\Rightarrow F = 120 \\text{ N}$$
      `
    },
    {
      id: 'te5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Balancing Problems Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 40 kg child sits 3 m from the fulcrum of a see-saw. A 60 kg child must sit at what distance to balance?',
            options: [
              '1 m',
              '2 m',
              '3 m',
              '4.5 m'
            ],
            correctAnswer: 1,
            explanation: '$m_1 d_1 = m_2 d_2$: $(40)(3) = (60)(d)$, $d = 120/60 = 2$ m.'
          },
          {
            question: 'Where does the weight of a uniform beam act?',
            options: [
              'At the heavier end',
              'At the point of support',
              'At the geometric center',
              'Distributed evenly with no single point'
            ],
            correctAnswer: 2,
            explanation: 'For a uniform beam, the weight acts at the center of mass, which is the geometric center.'
          },
          {
            question: 'A see-saw is balanced with a 50 N child on the left at 2 m and a 25 N child on the right at 4 m. If both children move 1 m closer to the fulcrum, what happens?',
            options: [
              'Still balanced',
              'Left side tips down',
              'Right side tips down',
              'Cannot determine'
            ],
            correctAnswer: 2,
            explanation: 'Before: $(50)(2) = (25)(4) = 100$. After: $(50)(1) = 50$ and $(25)(3) = 75$. Right side has more torque, so right side tips down.'
          }
        ]
      }
    },
    {
      id: 'te5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Balance Beam Calculations** 🧮

1) A see-saw is 8 m long with the fulcrum at the center. A 70 kg person sits at the left end. How far from the center (in m) should an 80 kg person sit on the right to balance?

2) A 10 m uniform beam (weight 200 N) has its fulcrum 3 m from the left end. A 500 N weight hangs at the left end. What downward force (in N) is needed at the right end to balance? (Round to nearest whole number)

3) Two children sit on a see-saw: 30 kg at 2 m left and 20 kg at 3 m right. What is the net torque about the fulcrum? (in N·m, use $g = 10$ $m/s^{2}$, positive = CCW)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.5', '157', '0'],
        hint1: '$(70)(4) = (80)(d)$',
        hint2: 'Torques about fulcrum: $500(3) = 200(2) + F(7)$. Beam center is 5 m from left = 2 m right of fulcrum.',
        hint3: 'Left: $(30)(10)(2) = 600$ N·m CCW. Right: $(20)(10)(3) = 600$ N·m CW.',
        explanation: '1) $(70)(4) = (80)(d) \\Rightarrow d = 280/80 = 3.5$ m. 2) The fulcrum is 3 m from the left end, so the 500 N weight is 3 m to its left, the beam\'s center (5 m from the left end) is 2 m to its right, and the right end is 7 m to its right. The 500 N weight\'s torque ($500 \\times 3 = 1500$ N·m) is larger than the beam\'s ($200 \\times 2 = 400$ N·m), so the force at the right end must push down: $1500 = 400 + 7F$, $F = 1100/7 \\approx 157$ N. 3) $(300)(2) - (200)(3) = 600 - 600 = 0$ N·m, so the see-saw is balanced.'
      }
    },
    {
      id: 'te5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**See-Saw Physics** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To balance a see-saw, a heavier person must sit:',
            options: ['closer to the fulcrum', 'farther away', 'at the same distance', 'it cannot balance'],
            correctIndex: 0,
            explanation: 'A heavier person must sit closer: $m_1 d_1 = m_2 d_2 \\Rightarrow d \\propto 1/m$.'
          },
          {
            label: 'The weight of a uniform beam acts:',
            options: ['at the fulcrum', 'at the geometric center', 'at the heavier end', 'nowhere in particular'],
            correctIndex: 1,
            explanation: 'A uniform beam\'s weight acts at its geometric center (center of mass).'
          },
          {
            label: 'If a person moves twice as far from the fulcrum, what happens to the torque?',
            options: ['the torque doubles', 'it halves', 'it stays the same', 'it drops to zero'],
            correctIndex: 0,
            explanation: 'Moving twice as far from the fulcrum doubles the lever arm and thus doubles the torque.'
          }
        ]
      }
    },
    {
      id: 'te5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Beam and See-Saw Problems** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 12 m uniform plank (weight 300 N) extends 4 m beyond a cliff edge. How far beyond the edge can a 600 N person walk out on the plank before it tips?',
            options: [
              '2.0 m',
              '1.0 m',
              '3.0 m',
              '4.0 m'
            ],
            correctAnswer: 1,
            explanation: 'Take the cliff edge as the pivot. The plank\'s center is 6 m from either end, so it sits 2 m back from the edge on the cliff side and gives a torque of $300 \\times 2 = 600$ N·m holding the plank down. A person $d$ beyond the edge gives $600d$ the other way. Tipping starts when $600d = 600$, so $d = 1.0$ m. (Placing the center at the middle of the 8 m on-cliff part gives 2.0 m; measuring 6 m from the far end gives 3.0 m; 4.0 m assumes the person can reach the tip.)'
          },
          {
            question: 'Three weights hang from a horizontal rod: 10 N at 1 m, 20 N at 3 m, and 30 N at 5 m from the left end. Where should a single support be placed for balance? (measured from the left end)',
            options: [
              '2.5 m',
              '3.0 m',
              '3.7 m',
              '4.0 m'
            ],
            correctAnswer: 2,
            explanation: 'The support goes under the center of mass: $x = \\frac{(10)(1) + (20)(3) + (30)(5)}{10 + 20 + 30} = \\frac{220}{60} = 3.67 \\approx 3.7$ m. The unweighted average of the positions gives 3.0 m, and the middle of the 5 m span gives 2.5 m.'
          }
        ]
      }
    }
  ]
}
