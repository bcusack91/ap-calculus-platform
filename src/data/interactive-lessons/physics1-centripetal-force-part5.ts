export const physics1CentripetalForcePart5Data = {
  topicSlug: 'centripetal-force',
  sections: [
    {
      id: 'cf5-intro',
      type: 'text' as const,
      content: `
# 🏗️ Banked Curves

**Part 5 of 7 — Centripetal Force**

On a **banked curve**, the road is tilted at an angle so that a component of the normal force provides centripetal force — even without friction! This is a classic AP Physics 1 topic.

**In this lesson you will learn:**
- Why we bank curves
- The ideal banking angle (no friction needed)
- Which way friction acts above and below the design speed
- Engineering applications
      `
    },
    {
      id: 'cf5-ideal-bank',
      type: 'text' as const,
      content: `
## The Ideal Banking Angle

### Setup
A road is banked at angle $\\theta$. We want to find the angle where a car can turn **without any friction**.

### Free Body Diagram
- Weight: $mg$ (down)
- Normal force: $N$ (perpendicular to road surface — tilted inward)

### Component Analysis

**Vertical**: $N\\cos\\theta = mg$ → $N = mg/\\cos\\theta$

**Radial (horizontal, toward center)**: $N\\sin\\theta = mv^2/r$

### Solving for the Banking Angle

Dividing radial by vertical:

$$\\frac{N\\sin\\theta}{N\\cos\\theta} = \\frac{mv^2/r}{mg}$$

$$\\tan\\theta = \\frac{v^2}{rg}$$

$$\\theta = \\tan^{-1}\\left(\\frac{v^2}{rg}\\right)$$

### Key Insights
- The ideal angle depends on **speed** and **radius**, not mass
- Each speed has its own ideal angle — there's only one "design speed"
- At the design speed: no friction needed, safe even on ice
- Below design speed: car tends to slide down the bank
- Above design speed: car tends to slide up the bank
      `
    },
    {
      id: 'cf5-ideal-quiz',
      type: 'multiple-choice' as const,
      content: `
**Ideal Banking Angle** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A curve is banked for a design speed of 25 m/s. If you drive at exactly 25 m/s, the friction force is:',
            options: [
              'Directed toward the center',
              'Directed away from the center',
              'Zero',
              'Directed up the bank'
            ],
            correctAnswer: 2,
            explanation: 'At the design speed, the normal force component alone provides all the centripetal force needed. Friction is zero — this is the "ideal" condition.'
          },
          {
            question: 'If the design speed is doubled (same radius), the banking angle must:',
            options: [
              'Double, because $\\theta$ is proportional to $v$',
              'Quadruple, because $\\theta$ grows as $v^2$',
              'Increase, but not simply double',
              'Stay the same, since only $r$ sets it'
            ],
            correctAnswer: 2,
            explanation: '$\\tan\\theta = v^2/(rg)$. Doubling $v$ quadruples $v^2$, so $\\tan\\theta$ quadruples. The angle itself does not quadruple (or double) — it increases by whatever the arctangent gives, and it can never reach $90°$.'
          },
          {
            question: 'A NASCAR track is banked at $24°$. On a rainy day (no friction), a car can safely turn at the design speed because:',
            options: [
              'Rain reduces the need for centripetal force',
              'The normal force alone supplies the centripetal force',
              'The car weighs less on a wet track',
              'The driver instinctively slows down'
            ],
            correctAnswer: 1,
            explanation: 'That\'s the beauty of banking! At the design speed, the component $N\\sin\\theta$ provides exactly the right centripetal force, no friction needed.'
          }
        ]
      }
    },
    {
      id: 'cf5-with-friction',
      type: 'text' as const,
      content: `
## Banked Curves with Friction (Qualitative)

### Going Faster Than Design Speed

If $v > v_{design}$, $N\\sin\\theta$ alone is too small to supply $mv^2/r$, so the car tends to slide **up** the bank. Static friction acts **down the slope**, and its horizontal component adds to the inward force.

### Going Slower Than Design Speed

If $v < v_{design}$, $N\\sin\\theta$ supplies more inward force than the turn needs, so the car tends to slide **down** the bank. Static friction acts **up the slope**, and its horizontal component points outward, reducing the net inward force.

### A Range of Safe Speeds

Because static friction can point either way along the slope (up to its maximum), a banked curve with friction is safe over a **range** of speeds around the design speed. A steeper bank or grippier tires widen that range; ice shrinks it to the design speed alone.

On the AP Physics 1 exam, banked curves that need friction are analyzed qualitatively only (direction of friction, which forces supply the centripetal force); calculations are limited to the frictionless design speed $\\tan\\theta = v^2/(rg)$.
      `
    },
    {
      id: 'cf5-calculations',
      type: 'input-boxes' as const,
      content: `
**Banking Angle Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A highway curve has radius 200 m. What banking angle is needed for a design speed of 30 m/s (in degrees, round to 3 significant figures)?

2) A track is banked at $30°$ with radius 100 m. What is the design speed — the speed requiring no friction (in m/s, round to 3 significant figures)?

3) A 1000 kg car rounds the track in (2) at its design speed. What is the magnitude of the normal force on the car (in N, round to 3 significant figures)?
      `,
      exercise: {
        questions: [{ question: '1)', answer: '24.2', acceptableAnswers: ['24.2'] }, { question: '2)', answer: '24.0', acceptableAnswers: ['24.0', '24'] }, { question: '3)', answer: '11500', acceptableAnswers: ['11500', '11547', '11550', '1.15e4'] }],
        hint1: '$\\theta = \\tan^{-1}(v^2/(rg))$.',
        hint2: '$v = \\sqrt{rg\\tan\\theta}$.',
        hint3: 'With no friction, the vertical balance is $N\\cos\\theta = mg$.',
        explanation: '1) $\\tan\\theta = 900/2000 = 0.45$. $\\theta = \\tan^{-1}(0.45) = 24.2°$. 2) $v = \\sqrt{100 \\times 10 \\times \\tan30°} = \\sqrt{1000 \\times 0.577} = \\sqrt{577} = 24.02 \\approx 24.0$ m/s. 3) $N = mg/\\cos30° = 10\\,000/0.866 \\approx 11\\,500$ N, larger than the car\'s weight because only the vertical component of $N$ balances gravity.'
      }
    },
    {
      id: 'cf5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Banking Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If you drive SLOWER than the design speed on a banked curve with no friction, you will:',
            options: ['Slide up the bank', 'Slide down the bank', 'Stay perfectly in lane', 'Flip over'],
            correctIndex: 1,
            explanation: 'Below design speed, the centripetal force needed is less than $N\\sin\\theta$ provides. The excess inward force pushes you down the slope — you slide toward the inside of the curve.'
          },
          {
            label: 'The ideal banking angle for a given curve depends on:',
            options: ['Mass and speed only', 'Speed and radius only', 'Mass, speed, and radius', 'Speed, radius, and friction'],
            correctIndex: 1,
            explanation: '$\\tan\\theta = v^2/(rg)$. Only speed $v$ and radius $r$ matter (plus $g$). Mass does not affect the ideal angle.'
          },
          {
            label: 'Indianapolis Motor Speedway\'s turns are banked at $9.2°$. This relatively small angle means:',
            options: ['The design speed is higher than race speeds', 'Cars need tire friction at race speeds', 'The turn radius must be extremely small', 'The cars stay on the track with no friction'],
            correctIndex: 1,
            explanation: 'Race cars go much faster than the design speed of a $9.2°$ bank. They rely on high-friction tires and aerodynamic downforce to provide the extra centripetal force.'
          }
        ]
      }
    },
    {
      id: 'cf5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Banked Curves** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A frictionless banked curve has $\\theta = 45°$ and $r = 50$ m. The design speed is ($g = 10$ $m/s^{2}$):',
            options: [
              '$\\sqrt{354} \\approx 18.8$ m/s',
              '$\\sqrt{500} \\approx 22.4$ m/s',
              '$\\sqrt{1000} \\approx 31.6$ m/s',
              '$\\sqrt{50} \\approx 7.1$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{rg\\tan\\theta} = \\sqrt{50 \\times 10 \\times \\tan45°} = \\sqrt{50 \\times 10 \\times 1} = \\sqrt{500} \\approx 22.4$ m/s. Using $\\sin45°$ instead of $\\tan45°$ gives $\\sqrt{354}$, leaving out $g$ gives $\\sqrt{50}$, and using the diameter (100 m) as $r$ gives $\\sqrt{1000}$.'
          },
          {
            question: 'Compared to a flat curve of the same radius, a banked curve allows a higher maximum speed because:',
            options: [
              'The curve\'s effective radius is larger when banked',
              'Part of the normal force also points toward the center',
              'Gravity is stronger on a banked curve',
              'The car weighs less on a banked curve'
            ],
            correctAnswer: 1,
            explanation: 'On a banked curve, both $N\\sin\\theta$ and friction contribute centripetal force. On a flat curve, only friction does. The added contribution from the normal force allows higher speeds.'
          }
        ]
      }
    }
  ]
}
