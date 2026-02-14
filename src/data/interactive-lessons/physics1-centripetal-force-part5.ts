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
- Banked curves with friction
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
              'Double',
              'Quadruple',
              'Increase (but not simply double)',
              'Stay the same'
            ],
            correctAnswer: 2,
            explanation: '$\\tan\\theta = v^2/(rg)$. Doubling $v$ quadruples $v^2$, so $\\tan\\theta$ quadruples. But $\\theta$ doesn\'t simply quadruple — it increases via the arctangent function.'
          },
          {
            question: 'A NASCAR track is banked at $24°$. On a rainy day (no friction), a car can safely turn at the design speed because:',
            options: [
              'Rain reduces the need for centripetal force',
              'The normal force component provides all centripetal force needed',
              'The car weighs less in rain',
              'The driver goes slower'
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
## Banked Curves with Friction

### Going Faster Than Design Speed

If $v > v_{design}$, the car tends to slide **up** the bank. Friction acts **down the bank** (and inward).

Both $N\\sin\\theta$ and $f\\cos\\theta$ point toward the center:

$$N\\sin\\theta + f\\cos\\theta = \\frac{mv^2}{r}$$

$$N\\cos\\theta + f\\sin\\theta = mg + \\text{...wait}$$

Actually, let's be careful:

**Radial**: $N\\sin\\theta + f_s\\cos\\theta = mv^2/r$

**Vertical**: $N\\cos\\theta - f_s\\sin\\theta = mg$

### Going Slower Than Design Speed

If $v < v_{design}$, the car tends to slide **down** the bank. Friction acts **up the bank**.

**Radial**: $N\\sin\\theta - f_s\\cos\\theta = mv^2/r$

**Vertical**: $N\\cos\\theta + f_s\\sin\\theta = mg$

### Maximum Speed on a Banked Curve

Set $f_s = \\mu_s N$ (friction at maximum) in the "going fast" equations:

$$v_{max} = \\sqrt{rg\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}}$$

### Minimum Speed on a Banked Curve

Set $f_s = \\mu_s N$ in the "going slow" equations:

$$v_{min} = \\sqrt{rg\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}}$$
      `
    },
    {
      id: 'cf5-calculations',
      type: 'input-boxes' as const,
      content: `
**Banking Angle Calculations** 🧮

Use $g = 10$ m/s².

1) A highway curve has radius 200 m. What banking angle is needed for a design speed of 30 m/s (in degrees, round to 1 decimal place)?

2) A track is banked at $30°$ with radius 100 m. What is the design speed — the speed requiring no friction (in m/s, round to 1 decimal place)?

3) A curve is banked at $20°$ with radius 150 m. What is the maximum speed if $\\mu_s = 0.3$ (in m/s, round to nearest whole number)? Use $v_{max} = \\sqrt{rg(\\tan\\theta + \\mu_s)/(1 - \\mu_s\\tan\\theta)}$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24.2', '24.0', '33'],
        hint1: '$\\theta = \\tan^{-1}(v^2/(rg))$.',
        hint2: '$v = \\sqrt{rg\\tan\\theta}$.',
        hint3: 'Plug in: $\\theta = 20°$, $r = 150$, $\\mu_s = 0.3$, $g = 10$.',
        explanation: '1) $\\tan\\theta = 900/2000 = 0.45$. $\\theta = \\tan^{-1}(0.45) = 24.2°$. 2) $v = \\sqrt{100 \\times 10 \\times \\tan30°} = \\sqrt{1000 \\times 0.577} = \\sqrt{577} = 24.02 \\approx 24.0$ m/s. 3) $\\tan20° = 0.364$. $v_{max} = \\sqrt{150(10)(0.364 + 0.3)/(1 - 0.3 \\times 0.364)} = \\sqrt{1500(0.664)/(1 - 0.109)} = \\sqrt{996/0.891} = \\sqrt{1118} \\approx 33.4 \\approx 33$ m/s.'
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
            options: ['The design speed is low', 'Cars must rely heavily on friction at race speeds', 'The radius must be very small', 'No friction is needed at any speed'],
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
            question: 'A frictionless banked curve has $\\theta = 45°$ and $r = 50$ m. The design speed is ($g = 10$ m/s²):',
            options: [
              '$\\sqrt{250} \\approx 15.8$ m/s',
              '$\\sqrt{500} \\approx 22.4$ m/s',
              '$\\sqrt{1000} \\approx 31.6$ m/s',
              '$50$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{rg\\tan\\theta} = \\sqrt{50 \\times 10 \\times \\tan45°} = \\sqrt{50 \\times 10 \\times 1} = \\sqrt{500} \\approx 22.4$ m/s.'
          },
          {
            question: 'Compared to a flat curve of the same radius, a banked curve allows a higher maximum speed because:',
            options: [
              'The normal force is larger on a banked curve',
              'The normal force has a horizontal component that adds to friction in providing centripetal force',
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
