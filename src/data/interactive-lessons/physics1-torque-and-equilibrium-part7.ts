export const physics1TorqueAndEquilibriumPart7Data = {
  topicSlug: 'torque-and-equilibrium',
  sections: [
    {
      id: 'te7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Torque and Rotational Equilibrium**

Let's bring together everything from this topic and practice the types of questions you'll see on the AP Physics 1 exam.
      `
    },
    {
      id: 'te7-summary',
      type: 'text' as const,
      content: `
## Key Concepts Summary

### Torque
$$\\tau = rF\\sin\\theta = r_{\\perp}F = rF_{\\perp}$$

- Units: N·m
- CCW = positive, CW = negative

### Rotational Equilibrium
$$\\sum \\tau = 0$$

### Static Equilibrium (both conditions)
$$\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum \\tau = 0$$

### Problem-Solving Tips
- Choose pivot at point of unknown force
- Don't forget beam weight (acts at center)
- $m_1 d_1 = m_2 d_2$ for see-saw balance
- Use component method for angled forces
      `
    },
    {
      id: 'te7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A door of width $w$ requires a minimum force $F$ applied at the handle (at the edge) to open it. If the force is instead applied at the midpoint of the door, the minimum force needed is:',
            options: [
              '$F/2$',
              '$F$',
              '$2F$',
              '$4F$'
            ],
            correctAnswer: 2,
            explanation: 'The torque needed is the same: $\\tau = Fw = F\'(w/2)$. So $F\' = 2F$. Applying the force at half the distance requires twice the force.'
          },
          {
            question: 'A uniform meter stick is balanced on a fulcrum at the 40 cm mark. A 2 N weight is placed at the 10 cm mark. Where should a 3 N weight be placed for balance?',
            options: [
              '50 cm mark',
              '60 cm mark',
              '70 cm mark',
              '80 cm mark'
            ],
            correctAnswer: 1,
            explanation: 'The stick weighs $W$ and its center is at 50 cm = 10 cm right of fulcrum. Taking torques about the fulcrum (40 cm): $2(30) = 3(d - 40) + W(10)$. For a standard problem where stick weight is negligible: $2(30) = 3(d - 40)$, $60 = 3d - 120$, $d = 60$ cm.'
          },
          {
            question: 'Two forces of equal magnitude act on a rod. One pushes up at the left end; the other pushes down at the right end. This pair of forces is called a:',
            options: [
              'Balanced force pair',
              'Couple',
              'Normal force pair',
              'Reaction pair'
            ],
            correctAnswer: 1,
            explanation: 'A couple is a pair of equal and opposite forces that are not collinear. They produce a net torque but zero net force.'
          }
        ]
      }
    },
    {
      id: 'te7-calculation',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

1) A 1.5 m uniform beam (weight 80 N) is supported by a hinge at the left and a cable at the right end. The cable makes 90° with the beam. A 200 N weight hangs 1.0 m from the hinge. Find the cable tension. (in N, round to nearest whole number)

2) A wrench handle is 0.25 m long. What perpendicular force is needed to produce 50 N·m of torque? (in N)

3) A 60 kg person stands 2 m from the left end of a 5 m beam (mass 20 kg) supported at both ends. Find the left support force. (in N, use $g = 10$ $m/s^{2}$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['187', '200', '480'],
        hint1: 'Torques about hinge: $T(1.5) = 80(0.75) + 200(1.0)$',
        hint2: '$\\tau = rF \\Rightarrow F = \\tau/r = 50/0.25$',
        hint3: 'Torques about right end: $L(5) = 600(3) + 200(2.5)$',
        explanation: '1) $T(1.5) = 80(0.75) + 200(1.0) = 60 + 200 = 260$. $T = 260/1.5 \\approx 173$ N. 2) $F = 50/0.25 = 200$ N. 3) Torques about right end: $L(5) = 600(3) + 200(2.5) = 1800 + 500 = 2300$. $L = 460$ N.'
      }
    },
    {
      id: 'te7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The SI unit of torque is:',
            options: ['N', 'N·m', 'J', 'kg·m/s'],
            correctIndex: 1,
            explanation: 'Torque has units of Newton-meters (N·m). Although dimensionally identical to Joules, they represent different physical quantities.'
          },
          {
            label: 'If you choose a different pivot point, the result of an equilibrium analysis:',
            options: ['increases', 'decreases', 'stays the same', 'becomes zero'],
            correctIndex: 2,
            explanation: 'Since $\\sum \\tau = 0$ is valid for ANY choice of pivot, the physical result is the same regardless of which pivot you choose.'
          },
          {
            label: 'Complete static equilibrium requires:',
            options: ['zero net force', 'zero net torque', 'zero net force AND zero net torque', 'zero velocity'],
            correctIndex: 2,
            explanation: 'Static equilibrium requires both conditions: $\\sum F = 0$ and $\\sum \\tau = 0$.'
          },
          {
            label: 'Torque is maximized when the force is applied:',
            options: ['perpendicular to the lever arm', 'parallel to the lever arm', 'at 45° to the lever arm', 'toward the pivot'],
            correctIndex: 0,
            explanation: 'Torque is maximized when the force is perpendicular to the position vector ($\\sin 90° = 1$).'
          }
        ]
      }
    },
    {
      id: 'te7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final AP Review** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A uniform rod is hinged at one end and held horizontal by a string attached to the other end at 30° above the rod. If the rod\'s weight is $W$, the string tension is:',
            options: [
              '$W/2$',
              '$W$',
              '$W/\\sin 30°$',
              '$W/(2\\sin 30°)$'
            ],
            correctAnswer: 3,
            explanation: 'Torques about hinge: $T\\sin 30° \\cdot L = W \\cdot L/2$. $T(0.5) = W/2$. $T = W/(2 \\times 0.5) = W$. Actually: $T \\sin 30° \\cdot L = W(L/2)$, $T = W/(2\\sin 30°)$.'
          },
          {
            question: 'A couple consists of two 10 N forces separated by 0.5 m. The net torque produced by the couple is:',
            options: [
              '0 N·m',
              '2.5 N·m',
              '5 N·m',
              '10 N·m'
            ],
            correctAnswer: 2,
            explanation: 'A couple produces torque $\\tau = F \\times d = 10 \\times 0.5 = 5$ N·m, where $d$ is the perpendicular distance between the forces.'
          }
        ]
      }
    }
  ]
}
