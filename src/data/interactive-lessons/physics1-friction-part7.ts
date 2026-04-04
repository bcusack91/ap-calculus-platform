export const physics1FrictionPart7Data = {
  topicSlug: 'friction',
  sections: [
    {
      id: 'fr7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Friction**

Congratulations on completing the Friction unit! This final lesson reviews every key idea, connects friction to the broader dynamics framework, and tests you with AP-style questions.
      `
    },
    {
      id: 'fr7-concept-map',
      type: 'text' as const,
      content: `
## Concept Map: Friction in Dynamics

$$\\text{Force} \\rightarrow \\text{FBD} \\rightarrow F_{\\text{net}} = ma$$

### Key Friction Equations

| Concept | Equation | When to Use |
|---------|----------|-------------|
| Static friction (max) | $f_s = \\mu_s N$ | Object on the verge of moving |
| Static friction (general) | $f_s \\leq \\mu_s N$ | Object not yet sliding |
| Kinetic friction | $f_k = \\mu_k N$ | Object is sliding |
| Normal force (flat) | $N = mg$ | Horizontal surface, no vertical components |
| Normal force (pulled up) | $N = mg - F\\sin\\theta$ | Pulling at angle above horizontal |
| Normal force (pushed down) | $N = mg + F\\sin\\theta$ | Pushing at angle below horizontal |
| Stopping distance | $d = \\frac{v_0^2}{2\\mu_k g}$ | Sliding to a stop (derived from kinematics) |
| Critical angle | $\\tan\\theta_c = \\mu_s$ | Object on verge of sliding on an incline |

### Key Principles
- $\\mu_s > \\mu_k$ always — it\'s harder to start motion than maintain it
- Friction is **independent of contact area** and **independent of speed**
- Friction **always opposes relative motion** (or tendency of motion)
- The normal force determines friction — anything that changes $N$ changes friction
      `
    },
    {
      id: 'fr7-review-mc',
      type: 'multiple-choice' as const,
      content: `
**Conceptual Review** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A box sits on a table. You push it horizontally with increasing force. The friction force:',
            options: [
              'Stays at $\\mu_s mg$ until the box moves',
              'Equals your push until it reaches $\\mu_s N$, then the box moves',
              'Is zero until the box moves, then equals $\\mu_k N$',
              'Increases proportionally to the push forever'
            ],
            correctAnswer: 1,
            explanation: 'Static friction matches the applied force up to its maximum value $f_{s,\\max} = \\mu_s N$. Once exceeded, the object starts moving and friction drops to $f_k = \\mu_k N$.'
          },
          {
            question: 'Two identical blocks, one flat and one on its side, are slid across the same surface. The friction force is:',
            options: [
              'Greater for the flat one (more area)',
              'Greater for the one on its side (more pressure)',
              'The same for both',
              'Cannot be determined without more information'
            ],
            correctAnswer: 2,
            explanation: 'Friction depends on $\\mu$ and $N$, not on contact area. Same weight means same $N$, so same friction: $f = \\mu N$.'
          },
          {
            question: 'You pull a block at angle $\\theta$ above horizontal. Increasing $\\theta$ (while keeping $F$ constant):',
            options: [
              'Increases both the horizontal pull and friction',
              'Decreases horizontal pull but also decreases friction',
              'Increases horizontal pull and decreases friction',
              'Has no effect on friction'
            ],
            correctAnswer: 1,
            explanation: 'Increasing $\\theta$ reduces $F\\cos\\theta$ (less horizontal pull) and reduces $N = mg - F\\sin\\theta$ (less normal force), which reduces friction.'
          }
        ]
      }
    },
    {
      id: 'fr7-ap-style-input',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculations** 📝

1) A 6 kg block slides with $\\mu_k = 0.30$ on a horizontal surface. What is the magnitude of its deceleration (m/s²)? ($g = 10$ m/s²)

2) A block on a flat surface requires 24 N to start moving and 18 N to keep it moving at constant velocity. The block weighs 60 N. What is $\\mu_s$?

3) A 50 N horizontal force pushes a 10 kg block at constant velocity. What is $\\mu_k$? ($g = 10$ m/s²)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '0.4', '0.5'],
        hint1: 'On a flat surface with only friction, $a = \\mu_k g$.',
        hint2: '$\\mu_s = F_{\\text{start}} / N$. What is the normal force for a block on a flat surface?',
        hint3: 'Constant velocity means net force is zero, so $F_{\\text{applied}} = f_k = \\mu_k N$. Solve for $\\mu_k$.',
        explanation: '1) $a = 0.30 \\times 10 = 3$ m/s². 2) $\\mu_s = 24/60 = 0.4$. 3) $\\mu_k = 50/100 = 0.5$.'
      }
    },
    {
      id: 'fr7-ap-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Reasoning Questions** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A car brakes on a wet road vs. a dry road. The stopping distance on the wet road is _____ because:',
            options: ['Shorter — water lubricates', 'Longer — lower μ gives less friction', 'The same — mass cancels out', 'Shorter — tires grip better when wet'],
            correctIndex: 1,
            explanation: 'Wet surfaces have lower $\\mu_k$. Since $d = v_0^2 / (2\\mu_k g)$, smaller $\\mu_k$ means larger stopping distance.'
          },
          {
            label: 'If you double the mass of a sliding block (same surface, same initial speed), the stopping distance:',
            options: ['Doubles', 'Stays the same', 'Halves', 'Quadruples'],
            correctIndex: 1,
            explanation: '$d = v_0^2/(2\\mu_k g)$. Mass cancels! Doubling $m$ doubles friction but also doubles inertia. The deceleration $\\mu_k g$ is mass-independent.'
          },
          {
            label: 'Static friction is a "reactive" force, meaning it:',
            options: ['Always equals μₛN', 'Adjusts its magnitude to prevent motion', 'Only acts when objects are moving', 'Is always greater than kinetic friction'],
            correctIndex: 1,
            explanation: 'Static friction adjusts from 0 up to $\\mu_s N$ to match the applied force and prevent sliding. It\'s reactive — it only provides as much force as needed.'
          }
        ]
      }
    },
    {
      id: 'fr7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Friction Unit** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg block on a surface ($\\mu_s = 0.60$, $\\mu_k = 0.40$) is pushed with 35 N horizontally ($g = 10$ m/s²). What is the friction force on the block?',
            options: [
              '20 N',
              '30 N',
              '35 N',
              '50 N'
            ],
            correctAnswer: 0,
            explanation: '$f_{s,\\max} = 0.60 \\times 50 = 30$ N. Since $35 > 30$, the block moves! Once moving: $f_k = 0.40 \\times 50 = 20$ N.'
          },
          {
            question: 'A block is pulled at 37° above horizontal at constant velocity on a rough surface. Which equation correctly relates the forces? ($\\cos 37° = 0.80$, $\\sin 37° = 0.60$)',
            options: [
              '$F = \\mu_k mg$',
              '$F(0.80) = \\mu_k(mg - 0.60F)$',
              '$F(0.60) = \\mu_k(mg + 0.80F)$',
              '$F(0.80) = \\mu_k(mg + 0.60F)$'
            ],
            correctAnswer: 1,
            explanation: 'Horizontal: $F\\cos 37° = \\mu_k N$. Vertical: $N = mg - F\\sin 37°$. Combining: $F(0.80) = \\mu_k(mg - 0.60F)$.'
          }
        ]
      }
    }
  ]
}
