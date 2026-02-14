export const physics1CentripetalForcePart3Data = {
  topicSlug: 'centripetal-force',
  sections: [
    {
      id: 'cf3-intro',
      type: 'text' as const,
      content: `
# 🚗 Horizontal Circles

**Part 3 of 7 — Centripetal Force**

Horizontal circles are the most common circular motion scenarios on the AP exam. We'll analyze cars on curves, balls on strings, and objects on turntables.

**In this lesson you will learn:**
- Cars on flat curves — friction as centripetal force
- Ball on a horizontal string — tension as centripetal force
- Conical pendulums — component analysis
- Maximum speed problems
      `
    },
    {
      id: 'cf3-car-on-curve',
      type: 'text' as const,
      content: `
## Car on a Flat Curve

### Setup
A car moves at speed $v$ around a flat (unbanked) curve of radius $r$.

### Free Body Diagram
- Weight: $mg$ (down)
- Normal force: $N = mg$ (up, since flat road)
- Static friction: $f_s$ (toward center — this is the centripetal force!)

### Newton's 2nd Law

**Vertical**: $N - mg = 0 \\Rightarrow N = mg$

**Radial**: $f_s = \\frac{mv^2}{r}$

### Maximum Speed

The car skids when friction reaches its maximum: $f_{s,max} = \\mu_s N = \\mu_s mg$

$$\\mu_s mg = \\frac{mv^2_{max}}{r}$$

$$v_{max} = \\sqrt{\\mu_s g r}$$

### Key Insights
- $v_{max}$ doesn't depend on mass! A truck and a sports car have the same $v_{max}$ (same $\\mu_s$, same curve)
- Wet roads reduce $\\mu_s$ → lower $v_{max}$
- Tighter curves (smaller $r$) → lower $v_{max}$
- On ice ($\\mu_s \\approx 0.1$), $v_{max}$ drops dramatically
      `
    },
    {
      id: 'cf3-car-quiz',
      type: 'multiple-choice' as const,
      content: `
**Cars on Curves** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A car rounds a curve on a dry road ($\\mu_s = 0.8$). On a rainy day ($\\mu_s = 0.4$), the maximum safe speed is:',
            options: [
              'The same',
              'Half the dry speed',
              'About 71% of the dry speed',
              'One quarter of the dry speed'
            ],
            correctAnswer: 2,
            explanation: '$v_{max} \\propto \\sqrt{\\mu_s}$. $v_{wet}/v_{dry} = \\sqrt{0.4/0.8} = \\sqrt{0.5} = 0.707 \\approx 71\\%$.'
          },
          {
            question: 'Why is it "static" friction (not kinetic) that provides centripetal force for a car on a curve?',
            options: [
              'The tires are not spinning',
              'The tires are not sliding sideways — they roll without slipping',
              'Kinetic friction doesn\'t exist on roads',
              'Static friction is always stronger'
            ],
            correctAnswer: 1,
            explanation: 'The tires don\'t slide sideways across the road — the contact point is stationary. This is static friction. If you skid (tires sliding), kinetic friction takes over and provides less force.'
          },
          {
            question: 'A heavier truck ($2000$ kg) and a lighter car ($1000$ kg) both have the same tires ($\\mu_s$). On the same curve, the truck\'s maximum speed is:',
            options: [
              'Half the car\'s',
              'The same as the car\'s',
              'Twice the car\'s',
              '$\\sqrt{2}$ times the car\'s'
            ],
            correctAnswer: 1,
            explanation: '$v_{max} = \\sqrt{\\mu_s gr}$. Mass doesn\'t appear! Both have the same maximum speed. The truck needs more friction force, but it also has more weight → more normal force → more friction available.'
          }
        ]
      }
    },
    {
      id: 'cf3-conical-pendulum',
      type: 'text' as const,
      content: `
## The Conical Pendulum

A ball on a string swings in a horizontal circle, with the string making angle $\\theta$ with the vertical.

### Free Body Diagram
- Weight: $mg$ (down)
- Tension: $T$ along the string (up and toward center)

### Component Analysis

**Vertical**: $T\\cos\\theta = mg \\Rightarrow T = \\frac{mg}{\\cos\\theta}$

**Radial**: $T\\sin\\theta = \\frac{mv^2}{r}$

where $r = L\\sin\\theta$ (the radius of the circle, $L$ = string length).

### Solving for Speed

Dividing the radial equation by the vertical equation:

$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{v^2}{gL\\sin\\theta}$$

$$v = \\sqrt{gL\\sin\\theta\\tan\\theta}$$

### Solving for Period

$$T_{period} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$$

### Key Insight
The period depends on $\\cos\\theta$ and $L$, but NOT on the mass. Faster spinning → larger $\\theta$ → shorter period.
      `
    },
    {
      id: 'cf3-calculations',
      type: 'input-boxes' as const,
      content: `
**Horizontal Circle Problems** 🧮

Use $g = 10$ m/s².

1) A car rounds a flat curve of radius 40 m. If $\\mu_s = 0.5$, what is the maximum speed (in m/s, round to 1 decimal place)?

2) A conical pendulum has string length $L = 0.8$ m and makes angle $\\theta = 30°$ with the vertical. What is the period of revolution (in s, round to 2 decimal places)?

3) A 0.3 kg ball on a 1.2 m string swings as a conical pendulum at $\\theta = 45°$. What is the tension in the string (in N, round to 1 decimal place)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14.1', '1.66', '4.2'],
        hint1: '$v_{max} = \\sqrt{\\mu_s gr}$.',
        hint2: '$T_{period} = 2\\pi\\sqrt{L\\cos\\theta/g}$.',
        hint3: '$T = mg/\\cos\\theta$.',
        explanation: '1) $v_{max} = \\sqrt{0.5 \\times 10 \\times 40} = \\sqrt{200} = 14.14 \\approx 14.1$ m/s. 2) $T_{period} = 2\\pi\\sqrt{0.8 \\times \\cos30°/10} = 2\\pi\\sqrt{0.8 \\times 0.866/10} = 2\\pi\\sqrt{0.0693} = 2\\pi(0.263) = 1.653 \\approx 1.66$ s. 3) $T = mg/\\cos45° = 0.3(10)/0.707 = 3/0.707 = 4.24 \\approx 4.2$ N.'
      }
    },
    {
      id: 'cf3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Horizontal Circle Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On a flat curve, if you drive faster than $v_{max}$, the car will:',
            options: ['Roll over', 'Slide toward the outside of the curve', 'Slide toward the inside', 'Stop suddenly'],
            correctIndex: 1,
            explanation: 'When $mv^2/r > \\mu_s mg$, friction can\'t provide enough centripetal force. The car continues in a straighter path — sliding toward the outside of the curve.'
          },
          {
            label: 'In a conical pendulum, as the ball speeds up, the string angle $\\theta$:',
            options: ['Decreases (closer to vertical)', 'Increases (closer to horizontal)', 'Stays the same', 'Oscillates'],
            correctIndex: 1,
            explanation: 'Faster speed requires more centripetal force, which requires a larger horizontal component of tension. The string swings out to a larger angle.'
          },
          {
            label: 'Why can\'t a conical pendulum have $\\theta = 90°$ (perfectly horizontal)?',
            options: ['The string would break', 'There would be no vertical component of tension to balance gravity', 'The ball would stop', 'It would require infinite string length'],
            correctIndex: 1,
            explanation: 'At $\\theta = 90°$, $T\\cos90° = 0$, so there\'s no vertical force to balance $mg$. The ball would fall. $\\theta = 90°$ requires infinite speed.'
          }
        ]
      }
    },
    {
      id: 'cf3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Horizontal Circles** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two curves have the same radius. Curve A has $\\mu_s = 0.4$ and Curve B has $\\mu_s = 0.9$. The ratio $v_{max,B}/v_{max,A}$ is:',
            options: [
              '2.25',
              '1.5',
              '0.67',
              '0.44'
            ],
            correctAnswer: 1,
            explanation: '$v_{max} \\propto \\sqrt{\\mu_s}$. $v_B/v_A = \\sqrt{0.9/0.4} = \\sqrt{2.25} = 1.5$.'
          },
          {
            question: 'A conical pendulum with $L = 1$ m has period $T = 1.5$ s. The angle $\\theta$ the string makes with the vertical is closest to:',
            options: [
              '$25°$',
              '$45°$',
              '$56°$',
              '$70°$'
            ],
            correctAnswer: 2,
            explanation: '$T = 2\\pi\\sqrt{L\\cos\\theta/g}$. $\\cos\\theta = gT^2/(4\\pi^2 L) = 10(2.25)/(4 \\times 9.87 \\times 1) = 22.5/39.48 = 0.570$. $\\theta = \\cos^{-1}(0.570) \\approx 55.2° \\approx 56°$.'
          }
        ]
      }
    }
  ]
}
