export const physics1CentripetalForcePart4Data = {
  topicSlug: 'centripetal-force',
  sections: [
    {
      id: 'cf4-intro',
      type: 'text' as const,
      content: `
# 🎡 Vertical Circles

**Part 4 of 7 — Centripetal Force**

Vertical circles are among the most challenging (and most tested!) topics on the AP Physics 1 exam. The key is that gravity's role changes at different positions — sometimes adding to centripetal force, sometimes opposing it.

**In this lesson you will learn:**
- Force analysis at the top and bottom of a vertical circle
- Minimum speed at the top to maintain circular motion
- Normal force vs. weight at different positions
- Tension in a string at various points
      `
    },
    {
      id: 'cf4-top-and-bottom',
      type: 'text' as const,
      content: `
## Forces at Top and Bottom

### At the BOTTOM of the Circle

Forces on the object:
- Weight $mg$ → downward (away from center)
- Normal force $N$ or Tension $T$ → upward (toward center)

Newton's 2nd Law (toward center = positive):

$$N - mg = \\frac{mv^2}{r} \\quad \\Rightarrow \\quad N = mg + \\frac{mv^2}{r}$$

**Key result**: $N > mg$ — you feel **heavier** at the bottom! This is why you feel pressed into your seat on a roller coaster valley.

### At the TOP of the Circle

Forces on the object:
- Weight $mg$ → downward (toward center ✓)
- Normal force $N$ or Tension $T$ → downward (toward center ✓) for inside of loop

Newton's 2nd Law (toward center = positive):

$$mg + N = \\frac{mv^2}{r} \\quad \\Rightarrow \\quad N = \\frac{mv^2}{r} - mg$$

**Key result**: $N < mg$ — you feel **lighter** at the top!

### Summary Table

| Position | Equation | You Feel |
|----------|----------|----------|
| Bottom | $N = mg + mv^2/r$ | Heavier |
| Top | $N = mv^2/r - mg$ | Lighter |
| Side | $N = mv^2/r$ (gravity is tangential) | Normal weight radially |
      `
    },
    {
      id: 'cf4-minimum-speed',
      type: 'text' as const,
      content: `
## Minimum Speed at the Top

At the top of a vertical circle, $N = mv^2/r - mg$.

The minimum speed occurs when $N = 0$ (the object barely maintains contact):

$$0 = \\frac{mv^2_{min}}{r} - mg$$

$$v_{min} = \\sqrt{gr}$$

### What This Means

- If $v > \\sqrt{gr}$: object stays on the circular path, $N > 0$
- If $v = \\sqrt{gr}$: object barely maintains contact, $N = 0$
- If $v < \\sqrt{gr}$: object can\'t maintain circular motion at that radius — it "falls" inside the circle

### For a Ball on a String

At the top, tension plays the role of $N$:

$$T + mg = \\frac{mv^2}{r}$$

Note the sign: at the top of a vertical circle with a string, both tension and gravity point toward the center (down), so solving for the tension gives:

$$T = \\frac{mv^2}{r} - mg$$

Minimum speed (when $T = 0$): $v_{min} = \\sqrt{gr}$ — same result!
      `
    },
    {
      id: 'cf4-vertical-quiz',
      type: 'multiple-choice' as const,
      content: `
**Vertical Circle Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A roller coaster has a loop of radius 10 m. The minimum speed at the top of the loop is ($g = 10$ $m/s^{2}$):',
            options: [
              '14.1 m/s',
              '10 m/s',
              '22.4 m/s',
              '100 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_{min} = \\sqrt{gr} = \\sqrt{10 \\times 10} = \\sqrt{100} = 10$ m/s. Forgetting the square root gives 100 m/s; $\\sqrt{2gr} \\approx 14.1$ m/s and $\\sqrt{5gr} \\approx 22.4$ m/s mix up the top condition with energy results ($\\sqrt{5gr}$ is the minimum speed at the bottom).'
          },
          {
            question: 'A 50 kg person is on a roller coaster at the bottom of a loop ($r = 20$ m, $v = 15$ m/s). The normal force on the person is ($g = 10$ $m/s^{2}$):',
            options: [
              '62.5 N',
              '500 N',
              '1063 N',
              '563 N'
            ],
            correctAnswer: 2,
            explanation: '$N = mg + mv^2/r = 50(10) + 50(225)/20 = 500 + 562.5 = 1062.5 \\approx 1063$ N, about 2.1 times their weight. 563 N is $mv^2/r$ alone, 500 N is the weight alone, and 62.5 N comes from subtracting the weight as if the rider were at the top.'
          },
          {
            question: 'At the top of a vertical loop, a rider feels "weightless." This means:',
            options: [
              'Gravity has been turned off',
              'The normal force equals zero',
              'The rider\'s mass is zero',
              'There are no forces on the rider'
            ],
            correctAnswer: 1,
            explanation: 'Weightlessness means $N = 0$. Gravity still acts! The rider is in free fall — gravity alone provides all the centripetal force. This happens when $v = \\sqrt{gr}$.'
          }
        ]
      }
    },
    {
      id: 'cf4-calculations',
      type: 'input-boxes' as const,
      content: `
**Vertical Circle Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A 0.5 kg ball on a 1 m string is swung in a vertical circle at 5 m/s at the bottom. What is the string tension at the bottom (in N)?

2) On a faster swing, the same ball moves at 4 m/s at the top of the circle. What is the string tension at the top (in N)?

3) A roller coaster loop has radius 15 m. What minimum height must the car start from (released from rest) to safely complete the loop? Assume frictionless. Hint: use energy conservation. (in m)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17.5', '3', '37.5'],
        hint1: '$T = mg + mv^2/r$ at the bottom.',
        hint2: '$T = mv^2/r - mg$ at the top.',
        hint3: 'At top of loop: $v_{min} = \\sqrt{gr}$. Height of top of loop = $2r$. Energy: $mgh = \\frac{1}{2}mv_{top}^2 + mg(2r)$.',
        explanation: '1) At the bottom: $T = mg + mv^2/r = 0.5(10) + 0.5(25)/1 = 5 + 12.5 = 17.5$ N. 2) At the top, tension and gravity both point toward the center: $T = mv^2/r - mg = 0.5(16)/1 - 0.5(10) = 8 - 5 = 3$ N. (Any top speed below $\\sqrt{gr} \\approx 3.16$ m/s would give a negative result, meaning the string goes slack.) 3) $mgh = \\frac{1}{2}m(gr) + mg(2r)$. $h = r/2 + 2r = 5r/2 = 5(15)/2 = 37.5$ m.'
      }
    },
    {
      id: 'cf4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Vertical Circle Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At the bottom of a Ferris wheel, the normal force on a rider is:',
            options: ['Equal to mg', 'Greater than mg', 'Less than mg', 'Zero'],
            correctIndex: 1,
            explanation: 'At the bottom, $N - mg = mv^2/r$, so $N = mg + mv^2/r > mg$. The rider feels heavier.'
          },
          {
            label: 'At the top of a Ferris wheel, the normal force on a rider is:',
            options: ['Equal to mg', 'Greater than mg', 'Less than mg', 'Always zero'],
            correctIndex: 2,
            explanation: 'At the top, $mg - N = mv^2/r$, so $N = mg - mv^2/r < mg$. The rider feels lighter.'
          },
          {
            label: 'Doubling the loop radius while keeping the same speed at the top:',
            options: ['Decreases the normal force at the top', 'Lowers the minimum speed needed at the top', 'Has no effect on the normal force', 'Increases the normal force at the top'],
            correctIndex: 0,
            explanation: 'At the top: $mg + N = mv^2/r$, so $N = mv^2/r - mg$. At the same speed, a larger $r$ makes $mv^2/r$ smaller, so $N$ decreases. The minimum speed $v_{min} = \\sqrt{gr}$ also rises with $r$, so a bigger loop is harder, not easier, to complete at a given speed.'
          },
          {
            label: 'The speed at the bottom of a vertical loop is typically greater than at the top because:',
            options: ['The normal force is greater at the bottom', 'Lower height means less PE and more KE', 'Centripetal force is greater at the bottom', 'The loop\'s radius is larger at the bottom'],
            correctIndex: 1,
            explanation: 'By conservation of energy, the ball trades PE for KE. At the bottom (lower height), PE is less and KE is more, so speed is greater.'
          }
        ]
      }
    },
    {
      id: 'cf4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Vertical Circles** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball on a string moves in a vertical circle of radius 0.5 m. The minimum speed at the top is ($g = 10$ $m/s^{2}$):',
            options: [
              '$\\sqrt{5} \\approx 2.24$ m/s',
              '$\\sqrt{10} \\approx 3.16$ m/s',
              '$\\sqrt{20} \\approx 4.47$ m/s',
              '$\\sqrt{25} = 5$ m/s'
            ],
            correctAnswer: 0,
            explanation: '$v_{min} = \\sqrt{gr} = \\sqrt{10 \\times 0.5} = \\sqrt{5} \\approx 2.24$ m/s. Using the diameter gives $\\sqrt{10}$; $\\sqrt{4gr} = \\sqrt{20}$ and $\\sqrt{5gr} = 5$ m/s are energy results for the bottom of the circle, not the condition at the top.'
          },
          {
            question: 'A 60 kg pilot pulls out of a dive along a circular arc of radius 200 m at 50 m/s. The apparent weight (normal force) at the bottom is ($g = 10$ $m/s^{2}$):',
            options: [
              '600 N',
              '750 N',
              '150 N',
              '1350 N'
            ],
            correctAnswer: 3,
            explanation: '$N = mg + mv^2/r = 60(10) + 60(2500)/200 = 600 + 750 = 1350$ N. That\'s $2.25g$, so the pilot feels 2.25 times their weight. 750 N is $mv^2/r$ alone, 600 N is the weight alone, and 150 N comes from subtracting the weight as if the pilot were at the top of a loop.'
          }
        ]
      }
    }
  ]
}
