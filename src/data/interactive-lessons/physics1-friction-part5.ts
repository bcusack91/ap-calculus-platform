export const physics1FrictionPart5Data = {
  topicSlug: 'friction',
  sections: [
    {
      id: 'fr5-intro',
      type: 'text' as const,
      content: `
# 🔬 Finding $\\mu$ Experimentally

**Part 5 of 7 — Friction**

How do physicists and engineers actually *measure* the coefficient of friction? This part covers the classic experimental methods — which are also common AP lab questions.
      `
    },
    {
      id: 'fr5-horizontal-method',
      type: 'text' as const,
      content: `
## Method 1: Horizontal Pull

### Setup
Place a block on a horizontal surface. Attach a spring scale and pull horizontally, gradually increasing the force.

### Finding $\\mu_s$
Record the force when the block **just starts to move**. That\'s $f_{s,\\max}$.

$$\\mu_s = \\frac{f_{s,\\max}}{N} = \\frac{f_{s,\\max}}{mg}$$

### Finding $\\mu_k$
Pull the block at **constant velocity**. The applied force equals kinetic friction.

$$\\mu_k = \\frac{f_k}{N} = \\frac{F_{\\text{constant velocity}}}{mg}$$

### Example
A 2 kg block requires 9.8 N to just start moving and 7.8 N to slide at constant speed.

$$\\mu_s = \\frac{9.8}{2(9.8)} = \\frac{9.8}{19.6} = 0.50$$

$$\\mu_k = \\frac{7.8}{19.6} = 0.40$$
      `
    },
    {
      id: 'fr5-incline-method',
      type: 'text' as const,
      content: `
## Method 2: The Incline Method

### Finding $\\mu_s$ with a Ramp

Place a block on a ramp. Slowly increase the angle until the block **just begins to slide**. Record this **critical angle** $\\theta_c$.

At the critical angle, the block is on the verge of sliding:

$$f_{s,\\max} = mg\\sin\\theta_c$$
$$N = mg\\cos\\theta_c$$

$$\\mu_s = \\frac{f_{s,\\max}}{N} = \\frac{mg\\sin\\theta_c}{mg\\cos\\theta_c} = \\tan\\theta_c$$

$$\\boxed{\\mu_s = \\tan\\theta_c}$$

> **Beautiful result:** $\\mu_s$ equals the tangent of the critical angle. No need to know the mass!

### Finding $\\mu_k$ with a Ramp

Give the block a push and find the angle where it slides at **constant velocity**:

$$\\mu_k = \\tan\\theta_{\\text{constant velocity}}$$

### Why This Method Is Elegant

- Mass cancels out — you don\'t need to measure it
- Simple equipment: just a ramp and a protractor
- Highly reproducible
      `
    },
    {
      id: 'fr5-graphical-method',
      type: 'text' as const,
      content: `
## Method 3: Graphical Analysis

### Using an $f$ vs. $N$ Graph

Vary the normal force (by stacking masses) and measure friction at each value. Plot $f$ vs. $N$.

$$f = \\mu N$$

This is a **linear relationship** passing through the origin:
- Slope = $\\mu$
- No y-intercept (friction is zero when $N = 0$)

### Using an Acceleration Method

Push a block with known force $F$ and measure acceleration $a$:

$$F - \\mu_k mg = ma$$
$$a = \\frac{F}{m} - \\mu_k g$$

Plot $a$ vs. $F/m$:
- Slope = 1
- y-intercept = $-\\mu_k g$
- So $\\mu_k = -\\text{(y-intercept)}/g$

### Sources of Error

| Source | Effect |
|--------|--------|
| Surface not perfectly flat | Inconsistent results |
| Measuring force while accelerating | Overestimates static friction |
| Surface wears down during experiment | $\\mu$ changes over time |
| Vibration during measurement | Premature sliding |
      `
    },
    {
      id: 'fr5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Experimental Methods Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A block just begins to slide on a ramp at 31°. What is $\\mu_s$? ($\\tan 31° = 0.60$)',
            options: [
              '0.31',
              '0.52',
              '0.60',
              '0.85'
            ],
            correctAnswer: 2,
            explanation: '$\\mu_s = \\tan\\theta_c = \\tan 31° = 0.60$. The mass doesn\'t matter!'
          },
          {
            question: 'In a friction experiment, you plot $f_k$ vs. $N$ and get a straight line through the origin with slope 0.35. What is $\\mu_k$?',
            options: [
              '0.175',
              '0.35',
              '0.70',
              '3.5'
            ],
            correctAnswer: 1,
            explanation: 'Since $f_k = \\mu_k N$, the slope of the $f$ vs. $N$ graph is $\\mu_k = 0.35$.'
          },
          {
            question: 'Which method of measuring $\\mu_s$ does NOT require knowing the mass of the object?',
            options: [
              'Horizontal pull with spring scale',
              'Incline method (critical angle)',
              'Graphical analysis ($f$ vs. $N$)',
              'All methods require knowing the mass'
            ],
            correctAnswer: 1,
            explanation: 'The incline method gives $\\mu_s = \\tan\\theta_c$ — mass cancels completely. The horizontal pull requires knowing $mg$ (to calculate $N$).'
          }
        ]
      }
    },
    {
      id: 'fr5-calculations',
      type: 'input-boxes' as const,
      content: `
**Experimental Calculations** 🧮

1) A 3 kg block on a horizontal surface requires 12 N to just start sliding. What is $\\mu_s$? ($g = 10$ m/s²)

2) A block slides at constant velocity down a ramp inclined at 20°. What is $\\mu_k$? ($\\tan 20° = 0.364$, round to 3 significant figures)

3) In an experiment, doubling the mass of a block doubles the measured friction force. This confirms that friction is proportional to what variable?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.4', '0.36', 'normal force', '0.40', '0.360'],
        hint1: '$\\mu_s = f_{s,\\max}/N = 12/(3 \\times 10) = 12/30$.',
        hint2: '$\\mu_k = \\tan\\theta = \\tan 20°$.',
        hint3: 'Doubling mass doubles the normal force. Since friction doubled too, $f \\propto N$.',
        explanation: '1) $\\mu_s = 12/30 = 0.40$. 2) $\\mu_k = \\tan 20° = 0.364 \\approx 0.36$. 3) Normal force. Doubling mass doubles $N = mg$, and if friction doubles too, this confirms $f = \\mu N$.'
      }
    },
    {
      id: 'fr5-dropdown-lab',
      type: 'dropdown-select' as const,
      content: `
**Lab Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The critical angle for sliding is independent of:',
            options: ['The surface material', 'The mass of the block', 'The angle of the ramp', 'The coefficient of friction'],
            correctIndex: 1,
            explanation: '$\\mu_s = \\tan\\theta_c$ — mass cancels out. The critical angle depends only on the surface materials (which determine $\\mu_s$).'
          },
          {
            label: 'A graph of $f_k$ vs. $N$ should pass through:',
            options: ['A positive y-intercept', 'A negative y-intercept', 'The origin', 'No specific point'],
            correctIndex: 2,
            explanation: '$f_k = \\mu_k N + 0$. When $N = 0$ (no contact), friction is zero. The line passes through the origin.'
          },
          {
            label: 'To get the most accurate value of $\\mu_k$, you should:',
            options: ['Make one careful measurement', 'Take multiple measurements and find the slope of $f$ vs. $N$', 'Use the largest mass possible', 'Pull as fast as possible'],
            correctIndex: 1,
            explanation: 'Multiple measurements with varying $N$ and a best-fit line give the most reliable $\\mu_k$.'
          }
        ]
      }
    },
    {
      id: 'fr5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Measuring Friction** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two students measure the critical angle for the same block and surface. Student A uses a 1 kg block, Student B uses a 3 kg block. Their critical angles should be:',
            options: [
              'A\'s angle is larger (lighter block slides easier)',
              'B\'s angle is larger (heavier block needs steeper ramp)',
              'The same (mass doesn\'t affect the critical angle)',
              'Cannot determine without more information'
            ],
            correctAnswer: 2,
            explanation: '$\\mu_s = \\tan\\theta_c$ depends only on the surfaces, not the mass. Both students should get the same critical angle.'
          },
          {
            question: 'A block slides down a ramp at constant velocity when $\\theta = 27°$. What is $\\mu_k$? ($\\tan 27° \\approx 0.51$)',
            options: [
              '0.27',
              '0.45',
              '0.51',
              '0.85'
            ],
            correctAnswer: 2,
            explanation: 'At constant velocity on the ramp: $mg\\sin\\theta = \\mu_k mg\\cos\\theta$, giving $\\mu_k = \\tan\\theta = \\tan 27° \\approx 0.51$.'
          }
        ]
      }
    }
  ]
}
