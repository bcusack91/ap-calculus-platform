export const physics1CentripetalForcePart2Data = {
  topicSlug: 'centripetal-force',
  sections: [
    {
      id: 'cf2-intro',
      type: 'text' as const,
      content: `
# 🔍 Identifying the Real Force

**Part 2 of 7 — Centripetal Force**

The heart of circular motion problems is identifying which real force provides the centripetal acceleration. In this lesson, you'll learn to analyze different scenarios and recognize the source of centripetal force.

**In this lesson you will learn:**
- How to identify centripetal force in various scenarios
- Tension, gravity, friction, and normal force as centripetal forces
- How to set up Newton's 2nd Law equations for circular motion
- When multiple forces contribute to centripetal force
      `
    },
    {
      id: 'cf2-analysis',
      type: 'text' as const,
      content: `
## Force Analysis for Circular Motion

### The Recipe
1. Draw a **free body diagram** with only real forces
2. Choose a coordinate system: **radial** (toward center = positive) and **tangential**
3. Apply Newton's 2nd Law in the radial direction:

$$\\sum F_{\\text{radial}} = \\frac{mv^2}{r}$$

### Key Scenarios

#### Ball on a String (Horizontal Circle)
- Tension provides centripetal force
- $T = mv^2/r$

#### Car on a Flat Curve
- Static friction provides centripetal force
- $f_s = mv^2/r$
- Maximum speed before skidding: $\\mu_s mg = mv^2/r \\Rightarrow v_{max} = \\sqrt{\\mu_s g r}$

#### Satellite in Orbit
- Gravity provides centripetal force
- $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$

#### Object on a Rotating Platform
- Static friction provides centripetal force
- $f_s = mv^2/r$ (inward toward center)
- Object slides off when $f_s > \\mu_s N$

### Multiple Forces Acting Together
Sometimes **two or more forces** combine to provide centripetal force:
- Vertical circle at the top: gravity + normal force both point toward center
- Conical pendulum: horizontal component of tension provides centripetal force
      `
    },
    {
      id: 'cf2-scenarios-quiz',
      type: 'multiple-choice' as const,
      content: `
**Identify the Force** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A roller coaster car goes around the inside of a vertical loop. At the TOP of the loop, which force(s) point toward the center?',
            options: [
              'Normal force only',
              'Gravity only',
              'Both gravity and normal force',
              'Neither — centripetal force is separate'
            ],
            correctAnswer: 2,
            explanation: 'At the top, the center is below the car. Both gravity (always down) and normal force (from track above, pushing down) point toward the center. $mg + N = mv^2/r$.'
          },
          {
            question: 'A coin sits on a spinning turntable. As the turntable speeds up, the coin eventually flies off because:',
            options: [
              'Centrifugal force overcomes friction',
              'The required centripetal force exceeds the maximum static friction',
              'The coin gains too much kinetic energy',
              'Normal force decreases'
            ],
            correctAnswer: 1,
            explanation: 'The required centripetal force $mv^2/r$ increases with speed. When it exceeds $\\mu_s mg$ (maximum static friction), friction can no longer provide enough centripetal force.'
          },
          {
            question: 'In a conical pendulum (ball on a string making a cone), the centripetal force is provided by:',
            options: [
              'The full tension in the string',
              'The horizontal component of tension',
              'Gravity',
              'The vertical component of tension'
            ],
            correctAnswer: 1,
            explanation: 'The ball moves in a horizontal circle. The horizontal component of tension ($T\\sin\\theta$) points toward the center of the circle, providing centripetal force. The vertical component ($T\\cos\\theta$) balances gravity.'
          }
        ]
      }
    },
    {
      id: 'cf2-calculations',
      type: 'input-boxes' as const,
      content: `
**Force Analysis Calculations** 🧮

Use $g = 10$ m/s².

1) A 1200 kg car rounds a flat curve of radius 80 m. If $\\mu_s = 0.6$, what is the maximum speed before the car skids (in m/s, round to 3 significant figures)?

2) A 0.2 kg ball on a 0.5 m string moves in a horizontal circle. If the tension in the string is 10 N, what is the ball's speed (in m/s)?

3) A coin on a turntable sits 0.15 m from the center. If $\\mu_s = 0.4$, what is the maximum rotation frequency before the coin slides (in Hz, round to 3 significant figures)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['21.9', '5', '0.82'],
        hint1: '$\\mu_s mg = mv^2/r \\Rightarrow v = \\sqrt{\\mu_s g r}$.',
        hint2: '$T = mv^2/r \\Rightarrow v = \\sqrt{Tr/m}$.',
        hint3: '$\\mu_s mg = m(4\\pi^2 rf^2) \\Rightarrow f = \\sqrt{\\mu_s g/(4\\pi^2 r)}$.',
        explanation: '1) $v = \\sqrt{0.6 \\times 10 \\times 80} = \\sqrt{480} = 21.9$ m/s. 2) $v = \\sqrt{10 \\times 0.5/0.2} = \\sqrt{25} = 5$ m/s. 3) $f = \\sqrt{0.4 \\times 10/(4\\pi^2 \\times 0.15)} = \\sqrt{4/(5.92)} = \\sqrt{0.676} = 0.822 \\approx 0.82$ Hz.'
      }
    },
    {
      id: 'cf2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Scenario Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A bucket of water swung in a vertical circle at the TOP: the water stays in because:',
            options: ['Centrifugal force pushes it in', 'The bucket accelerates inward faster than free-fall', 'Surface tension', 'Atmospheric pressure'],
            correctIndex: 1,
            explanation: 'If $v^2/r \\geq g$, the bucket "falls" toward the center faster than the water falls due to gravity. The bucket stays under the water, keeping it in.'
          },
          {
            label: 'A car goes over a hill (circular arc). At the top, the normal force is:',
            options: ['Greater than mg', 'Equal to mg', 'Less than mg', 'Zero always'],
            correctIndex: 2,
            explanation: 'At the top: $mg - N = mv^2/r$, so $N = mg - mv^2/r < mg$. The faster you go, the lighter you feel!'
          },
          {
            label: 'The maximum speed for a car on a flat curve depends on:',
            options: ['Mass and radius only', 'Friction coefficient and radius only', 'Mass, friction, and radius', 'Friction, radius, and gravity'],
            correctIndex: 3,
            explanation: '$v_{max} = \\sqrt{\\mu_s g r}$. It depends on $\\mu_s$, $g$, and $r$ — but NOT mass! Mass cancels out.'
          }
        ]
      }
    },
    {
      id: 'cf2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Identifying Forces** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball attached to two strings moves in a horizontal circle. The upper string makes angle $\\theta$ with the vertical. Which forces have a component toward the center?',
            options: [
              'Only the upper string tension',
              'Both string tensions',
              'Upper string tension and gravity',
              'All three: both tensions and gravity'
            ],
            correctAnswer: 1,
            explanation: 'Both strings pull on the ball, and the horizontal components of both tensions point toward the center of the circle. Gravity acts vertically and has no horizontal component.'
          },
          {
            question: 'A 1000 kg car travels at 20 m/s over a circular hill of radius 50 m. The normal force at the top is ($g = 10$ m/s²):',
            options: [
              '2000 N',
              '4000 N',
              '8000 N',
              '10000 N'
            ],
            correctAnswer: 0,
            explanation: '$mg - N = mv^2/r$. $N = mg - mv^2/r = 1000(10) - 1000(400)/50 = 10000 - 8000 = 2000$ N.'
          }
        ]
      }
    }
  ]
}
