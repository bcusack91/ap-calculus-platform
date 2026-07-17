export const physics1NewtonsFirstSecondLawsPart7Data = {
  topicSlug: 'newtons-first-second-laws',
  sections: [
    {
      id: 'nf7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Newton\'s First and Second Laws**

This final part brings together every concept from the topic. You\'ll face AP-style questions that require combining multiple ideas: inertia, $F_{\\text{net}} = ma$, FBDs, weight, normal force, and multi-step problem solving.
      `
    },
    {
      id: 'nf7-concept-map',
      type: 'text' as const,
      content: `
## Concept Summary

### Newton\'s First Law (Inertia)
- No net force → no change in velocity
- Inertia is quantified by **mass**
- Valid in **inertial reference frames**

### Newton\'s Second Law
$$\\vec{F}_{\\text{net}} = m\\vec{a}$$
- Net force = vector sum of all forces
- Acceleration is in the direction of the net force
- $a \\propto F$, $a \\propto 1/m$

### Free Body Diagrams
- Show ALL forces ON a single object
- Common forces: $W$, $N$, $T$, $f$, $F_{\\text{app}}$
- Normal force ⊥ surface, weight always down

### Weight and Normal Force
- $W = mg$ (always downward)
- $N$ depends on situation — NOT always $mg$
- Apparent weight = normal force (what a scale reads)

### Key Equations

| Equation | When to Use |
|----------|-------------|
| $F_{\\text{net}} = ma$ | Finding acceleration, force, or mass |
| $W = mg$ | Calculating weight |
| $N = m(g + a)$ | Elevator/vertical acceleration problems |
| $F_x = F\\cos\\theta$ | Horizontal component of angled force |
| $F_y = F\\sin\\theta$ | Vertical component of angled force |
      `
    },
    {
      id: 'nf7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A constant net force acts on an object. The object can NOT:',
            options: [
              'Speed up',
              'Slow down',
              'Change direction',
              'Move at constant velocity'
            ],
            correctAnswer: 3,
            explanation: 'A constant net force means constant acceleration ($a = F/m$). Constant velocity means $a = 0$, which contradicts having a net force.'
          },
          {
            question: 'Object X has twice the mass of object Y. The same net force is applied to each. After 5 seconds from rest, the ratio of their speeds $v_X/v_Y$ is:',
            options: [
              '2',
              '1',
              '1/2',
              '1/4'
            ],
            correctAnswer: 2,
            explanation: '$a_X = F/(2m)$ and $a_Y = F/m$, so $a_X = a_Y/2$. After the same time: $v_X = a_X t = (a_Y/2)t$ and $v_Y = a_Y t$. Ratio: $v_X/v_Y = 1/2$.'
          },
          {
            question: 'A block is on a horizontal surface. A rope attached at 30° above horizontal pulls with tension $T$. Compared to having no rope, the normal force:',
            options: [
              'Increases by $T$',
              'Decreases by $T\\\\sin 30°$',
              'Stays the same',
              'Decreases by $T\\\\cos 30°$'
            ],
            correctAnswer: 1,
            explanation: 'The vertical component of tension is $T\\sin 30°$ upward, which partially supports the block: $N = mg - T\\sin 30°$. The normal force decreases by $T\\sin 30°$.'
          }
        ]
      }
    },
    {
      id: 'nf7-ap-frq',
      type: 'input-boxes' as const,
      content: `
**AP-Style Free Response** 🧮

A 3 kg block sits on a frictionless table. A string runs horizontally from the block, over a frictionless pulley at the table\'s edge, and down to a hanging 2 kg block.

1) What is the acceleration of the system $(in m/s^{2})$? Round to 3 significant figures. Use $g = 9.8$ $m/s^{2}$.

2) What is the tension in the string (in N)? Round to 3 significant figures.

3) How far does the 2 kg block fall from rest in 2 seconds (in m)? Round to 3 significant figures.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.9', '11.8', '7.8'],
        hint1: 'System: $F_{\\text{net}} = m_2 g$, total mass $= m_1 + m_2 = 5$ kg.',
        hint2: 'For the hanging block: $m_2 g - T = m_2 a$, so $T = m_2(g - a)$.',
        hint3: '$d = \\frac{1}{2}at^2 = \\frac{1}{2}(3.92)(4)$.',
        explanation: '1) $a = m_2 g/(m_1 + m_2) = 2(9.8)/5 = 19.6/5 = 3.9$ $m/s^{2}$. 2) $T = m_2(g - a) = 2(9.8 - 3.92) = 2(5.88) = 11.8$ N. 3) $d = \\frac{1}{2}(3.92)(4) = 7.84 \\approx 7.8$ m.'
      }
    },
    {
      id: 'nf7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Synthesis Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Newton\'s First Law is a special case of the Second Law when:',
            options: ['$m = 0$', '$a = 0$', '$F = ma$', '$m = \\\\infty$'],
            correctIndex: 1,
            explanation: 'When $a = 0$: $F_{\\text{net}} = m(0) = 0$. This recovers the First Law — zero net force means no acceleration.'
          },
          {
            label: 'A heavy truck and a small car collide. The acceleration of the car is _____ the truck\'s acceleration.',
            options: ['Less than', 'Equal to', 'Greater than', 'Unrelated to'],
            correctIndex: 2,
            explanation: 'By Newton\'s Third Law (preview!), both experience equal forces. Since $a = F/m$ and the car has less mass, its acceleration is greater.'
          },
          {
            label: 'An object in free fall near Earth\'s surface has acceleration:',
            options: ['0', '$g$ upward', '$g$ downward', 'Depends on mass'],
            correctIndex: 2,
            explanation: 'In free fall, the only force is gravity: $a = F/m = mg/m = g$ downward. It doesn\'t depend on mass!'
          }
        ]
      }
    },
    {
      id: 'nf7-ap-mc2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A box slides across a rough floor and comes to rest. While sliding, the net force on the box is:',
            options: [
              'Zero — it\'s moving at roughly constant velocity',
              'In the direction of motion',
              'Opposite to the direction of motion',
              'Upward'
            ],
            correctAnswer: 2,
            explanation: 'The box is decelerating (slowing down), so the net force must be opposite to the direction of motion. This net force is friction.'
          },
          {
            question: 'A force $F$ gives a 4 kg object an acceleration of 3 $m/s^{2}$. The same force acts on a 12 kg object. What is the acceleration of the 12 kg object?',
            options: [
              '1 $m/s^{2}$',
              '3 $m/s^{2}$',
              '9 $m/s^{2}$',
              '36 $m/s^{2}$'
            ],
            correctAnswer: 0,
            explanation: 'First find $F = ma = 4 \\times 3 = 12$ N. Then for the 12 kg object: $a = F/m = 12/12 = 1$ $m/s^{2}$.'
          }
        ]
      }
    },
    {
      id: 'nf7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Newton\'s 1st & 2nd Laws** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An astronaut of mass 80 kg stands on a scale on a planet where $g = 5$ $m/s^{2}$. The elevator she\'s in accelerates upward at 3 $m/s^{2}$. What does the scale read?',
            options: [
              '160 N',
              '400 N',
              '640 N',
              '784 N'
            ],
            correctAnswer: 2,
            explanation: '$N = m(g_{\\text{planet}} + a) = 80(5 + 3) = 80 \\times 8 = 640$ N.'
          },
          {
            question: 'A 2000 kg car brakes from 20 m/s to rest in 5 seconds. What is the magnitude of the braking force?',
            options: [
              '2000 N',
              '4000 N',
              '8000 N',
              '10000 N'
            ],
            correctAnswer: 2,
            explanation: '$a = \\Delta v/\\Delta t = (0 - 20)/5 = -4$ $m/s^{2}$. $F = ma = 2000 \\times 4 = 8000$ N.'
          }
        ]
      }
    }
  ]
}
