export const physics1CentripetalForcePart7Data = {
  topicSlug: 'centripetal-force',
  sections: [
    {
      id: 'cf7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Centripetal Force**

This final lesson puts all centripetal force concepts together for AP exam preparation. We'll review common question types, practice FRQ strategies, and address the trickiest conceptual questions.

**In this lesson you will:**
- Tackle AP-style multiple choice questions
- Practice FRQ structure and scoring
- Review all centripetal force scenarios
- Master the most common exam traps
      `
    },
    {
      id: 'cf7-toolkit',
      type: 'text' as const,
      content: `
## Centripetal Force Toolkit

### Core Equation
$$F_c = \\frac{mv^2}{r} = m\\omega^2 r = \\frac{4\\pi^2 mr}{T^2}$$

### Scenario Quick Reference

| Scenario | Centripetal Force Provider | Equation |
|----------|---------------------------|----------|
| Ball on string (horizontal) | Tension | $T = mv^2/r$ |
| Car on flat curve | Static friction | $f_s = mv^2/r$ |
| Car on banked curve (no friction) | Normal force component | $N\\sin\\theta = mv^2/r$ |
| Vertical loop — bottom | $N - mg$ | $N - mg = mv^2/r$ |
| Vertical loop — top | $N + mg$ | $N + mg = mv^2/r$ |
| Satellite orbit | Gravity | $GMm/r^2 = mv^2/r$ |
| Conical pendulum | Tension component | $T\\sin\\theta = mv^2/r$ |
| Car over hill (top) | $mg - N$ | $mg - N = mv^2/r$ |
| Car in valley (bottom) | $N - mg$ | $N - mg = mv^2/r$ |

### FRQ Key Phrases
- "The net force toward the center provides centripetal acceleration"
- "By Newton\'s 2nd Law in the radial direction..."
- "The centripetal force is provided by [tension/friction/gravity/normal force]"
      `
    },
    {
      id: 'cf7-ap-mc',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball moves in a horizontal circle on a frictionless table, attached to a string through a hole in the center. If the string is slowly pulled through the hole (reducing the radius to half), the ball\'s speed:',
            options: [
              'Halves',
              'Doubles',
              'Stays the same',
              'Quadruples'
            ],
            correctAnswer: 1,
            explanation: 'Angular momentum is conserved (no external torque about the center): $L = mvr = $ constant. If $r \\rightarrow r/2$, then $v \\rightarrow 2v$. Speed doubles.'
          },
          {
            question: 'Two identical cars round curves at the same speed. Curve A has twice the radius of Curve B. The ratio of friction force $f_A/f_B$ is:',
            options: [
              '2',
              '1/2',
              '4',
              '1/4'
            ],
            correctAnswer: 1,
            explanation: '$f = mv^2/r$. Same $m$ and $v$, but $r_A = 2r_B$. $f_A/f_B = r_B/r_A = 1/2$. The tighter curve (B) needs twice the friction.'
          },
          {
            question: 'A car drives at constant speed over a series of hills. The driver feels lightest at the:',
            options: [
              'Bottom of each hill',
              'Top of each hill',
              'Side of each hill',
              'Weight doesn\'t change'
            ],
            correctAnswer: 1,
            explanation: 'At the top: $mg - N = mv^2/r$, so $N = mg - mv^2/r < mg$. The normal force (what you "feel" as weight) is less than your true weight. You feel lightest at the top.'
          }
        ]
      }
    },
    {
      id: 'cf7-frq-practice',
      type: 'text' as const,
      content: `
## FRQ Practice Structure

### Typical AP FRQ: "Loop the Loop"

*A small block of mass $m$ starts from rest at height $h$ on a frictionless ramp and enters a circular loop of radius $R$.*

**(a) Derive an expression for the block's speed at the top of the loop in terms of $m$, $h$, $R$, and $g$.**

Energy conservation: $mgh = \\frac{1}{2}mv_{top}^2 + mg(2R)$

$v_{top} = \\sqrt{2g(h - 2R)}$

**(b) Derive an expression for the normal force on the block at the top of the loop.**

At the top: $mg + N = mv_{top}^2/R$

$N = mv_{top}^2/R - mg = m[2g(h - 2R)]/R - mg = mg(2h/R - 4 - 1) = mg(2h/R - 5)$

**(c) Find the minimum height $h_{min}$ for the block to complete the loop.**

Set $N = 0$: $0 = mg(2h_{min}/R - 5)$

$h_{min} = 5R/2$

**(d) How would the answer to (c) change if the block had twice the mass?**

It wouldn't! Mass cancels from all equations. The minimum height is independent of mass: $h_{min} = 5R/2$ regardless of $m$.
      `
    },
    {
      id: 'cf7-ap-calculations',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculations** 🧮

Use $g = 10$ m/s².

1) A car ($m = 1000$ kg) rounds a flat curve ($r = 50$ m, $\\mu_s = 0.6$). What is the maximum speed (in m/s, round to 1 decimal place)?

2) A block starts from height $h = 3R$ on a frictionless ramp and enters a loop of radius $R = 4$ m. What is the normal force at the top of the loop, expressed as a multiple of $mg$? (Just give the number, e.g., "2" for $2mg$)

3) A 0.2 kg ball on a 0.8 m string moves at 6 m/s at the bottom of a vertical circle. What is the tension at the bottom (in N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17.3', '1', '11'],
        hint1: '$v_{max} = \\sqrt{\\mu_s gr}$.',
        hint2: 'Use $N = mg(2h/R - 5)$.',
        hint3: '$T = mg + mv^2/r$.',
        explanation: '1) $v_{max} = \\sqrt{0.6(10)(50)} = \\sqrt{300} = 17.32 \\approx 17.3$ m/s. 2) $N = mg(2(3R)/R - 5) = mg(6 - 5) = 1 \\cdot mg$. So the answer is 1. 3) $T = 0.2(10) + 0.2(36)/0.8 = 2 + 9 = 11$ N.'
      }
    },
    {
      id: 'cf7-traps-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Common AP Traps** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On an FBD for circular motion, centripetal force should be drawn as:',
            options: ['A separate arrow toward the center', 'A separate arrow away from center', 'It should NOT be drawn — only real forces appear', 'A dashed arrow toward center'],
            correctIndex: 2,
            explanation: 'Centripetal force is not a real force — it\'s the net effect of real forces. Only draw tension, gravity, normal, friction, etc.'
          },
          {
            label: 'At the top of a vertical loop, if $v = \\sqrt{gr}$, the normal force is:',
            options: ['Equal to mg', 'Equal to 2mg', 'Zero', 'Negative'],
            correctIndex: 2,
            explanation: '$N = mv^2/r - mg = m(gr)/r - mg = mg - mg = 0$. This is the "weightless" condition.'
          },
          {
            label: 'A ball on a string moves in a vertical circle. The net force at the top is:',
            options: ['Just tension', 'Just gravity', 'Tension + gravity (both toward center)', 'Tension minus gravity'],
            correctIndex: 2,
            explanation: 'At the top, both tension (along string, toward center) and gravity (downward, toward center) point the same direction. $F_{net} = T + mg = mv^2/r$.'
          }
        ]
      }
    },
    {
      id: 'cf7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Centripetal Force** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following situations does NOT involve centripetal force?',
            options: [
              'A car driving in a straight line at constant speed',
              'A satellite in circular orbit',
              'A ball on a string moving in a circle',
              'A car rounding a highway curve'
            ],
            correctAnswer: 0,
            explanation: 'A car in a straight line at constant speed has zero acceleration — no centripetal force needed. All other options involve circular motion requiring centripetal force.'
          },
          {
            question: 'A roller coaster car of mass $m$ enters a loop of radius $R$ at speed $v$ at the bottom. The normal force at the bottom of the loop is:',
            options: [
              '$mg$',
              '$mv^2/R$',
              '$mg + mv^2/R$',
              '$mv^2/R - mg$'
            ],
            correctAnswer: 2,
            explanation: 'At the bottom: $N - mg = mv^2/R \\Rightarrow N = mg + mv^2/R$. The normal force must support the weight AND provide centripetal force.'
          }
        ]
      }
    }
  ]
}
