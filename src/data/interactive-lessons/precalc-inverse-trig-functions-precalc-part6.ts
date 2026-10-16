export const precalcInverseTrigPart6Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🌍 Applications of Inverse Trig

**Part 6 of 7**

Inverse trig functions appear everywhere in real-world problems — navigation, physics, engineering, and more.

### Angle of Elevation & Depression

$$\\boxed{\\text{Angle of Elevation/Depression} = \\arctan\\!\\left(\\frac{\\text{vertical distance}}{\\text{horizontal distance}}\\right)}$$

### Example 1: Angle of Elevation

A 6-foot person looks up at the top of a 50-foot building from 80 feet away. What is the angle of elevation?

Vertical distance = $50 - 6 = 44$ ft, horizontal distance = $80$ ft.

$$\\theta = \\arctan\\!\\left(\\frac{44}{80}\\right) = \\arctan(0.55) \\approx 0.503 \\text{ radians}$$

### Example 2: Angle of Depression

A drone at 200 feet altitude spots a target 500 feet away horizontally. The angle of depression is:

$$\\theta = \\arctan\\!\\left(\\frac{200}{500}\\right) = \\arctan(0.4) \\approx 0.381 \\text{ radians}$$
      `
    },
    {
      id: 'p6-periodic',
      type: 'text' as const,
      content: `
## 🎡 Inverse Trig in Periodic Models

A rider's height on a Ferris wheel is $h(t) = 10\\sin\\!\\left(\\frac{\\pi}{20}t\\right) + 12$ meters, $t$ in seconds, for one 40-second turn ($0 \\le t \\le 40$).

### Example 3: A special value

When is the rider first $17$ m high?

$$10\\sin\\!\\left(\\frac{\\pi}{20}t\\right) + 12 = 17 \\implies \\sin\\!\\left(\\frac{\\pi}{20}t\\right) = 0.5$$

$$\\frac{\\pi}{20}t = \\arcsin(0.5) = \\frac{\\pi}{6} \\implies t = \\frac{20}{6} = \\frac{10}{3} \\approx 3.33 \\text{ s}$$

### Example 4: A calculator value, and the second solution

When is the rider $15$ m high?

$$\\sin\\!\\left(\\frac{\\pi}{20}t\\right) = 0.3 \\implies \\frac{\\pi}{20}t = \\arcsin(0.3) \\approx 0.3047 \\implies t \\approx 1.94 \\text{ s}$$

$\\arcsin$ only returns the angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Sine is also $0.3$ at $\\pi - 0.3047$, which gives the second time in the turn:

$$\\frac{\\pi}{20}t = \\pi - 0.3047 \\implies t \\approx 20 - 1.94 = 18.06 \\text{ s}$$

> ⚠️ An inverse trig function gives **one** angle. In a context, check whether the domain allows other solutions, and adjust the calculator's answer to find them.
      `
    },
    {
      id: 'p6-inverse-problems',
      type: 'text' as const,
      content: `
## 🔧 Solving Inverse Trig Equations

### Example 6: Solve $2\\arcsin(x) = \\frac{\\pi}{3}$

$$\\arcsin(x) = \\frac{\\pi}{6}$$
$$x = \\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$$

### Example 7: Solve $\\arctan(2x - 1) = \\frac{\\pi}{4}$

$$2x - 1 = \\tan\\!\\left(\\frac{\\pi}{4}\\right) = 1$$
$$2x = 2 \\implies x = 1$$

### Key Strategy for Solving

$$\\boxed{\\text{Isolate the inverse trig function, then apply the corresponding trig function to both sides}}$$

If $\\arcsin(\\text{expr}) = \\theta$, then $\\text{expr} = \\sin\\theta$.

If $\\arccos(\\text{expr}) = \\theta$, then $\\text{expr} = \\cos\\theta$.

If $\\arctan(\\text{expr}) = \\theta$, then $\\text{expr} = \\tan\\theta$.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Applications Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 15-foot flagpole casts a 20-foot shadow. The angle of elevation of the sun is:',
            options: [
              '$\\arcsin(\\frac{15}{20})$',
              '$\\arctan(\\frac{15}{20})$',
              '$\\arccos(\\frac{15}{20})$',
              '$\\arctan(\\frac{20}{15})$'
            ],
            correctAnswer: 1,
            explanation: 'Opposite = flagpole height = 15, adjacent = shadow = 20. Angle = $\\arctan(\\frac{15}{20}) \\approx 0.644$ radians.'
          },
          {
            question: 'Solve: $\\arccos(x) = \\frac{\\pi}{3}$',
            options: [
              '$x = \\frac{\\sqrt{3}}{2}$',
              '$x = \\frac{1}{2}$',
              '$x = \\frac{\\pi}{3}$',
              '$x = \\frac{\\sqrt{2}}{2}$'
            ],
            correctAnswer: 1,
            explanation: '$x = \\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$.'
          },
          {
            question: 'From a 100-meter cliff, an object on the ground is seen at an angle of depression of $\\frac{\\pi}{6}$. The horizontal distance is approximately:',
            options: [
              '$100\\sqrt{3} \\approx 173$ m',
              '$\\frac{100}{\\sqrt{3}} \\approx 58$ m',
              '$50$ m',
              '$200$ m'
            ],
            correctAnswer: 0,
            explanation: '$\\tan\\frac{\\pi}{6} = \\frac{100}{d}$, so $d = \\frac{100}{\\tan(\\pi/6)} = \\frac{100}{\\frac{1}{\\sqrt{3}}} = 100\\sqrt{3} \\approx 173$ m. Multiplying by $\\tan\\frac{\\pi}{6}$ instead gives $58$ m.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Solve Equations** 🧮

**1)** Solve $\\arcsin(x) = \\frac{\\pi}{6}$. What is $x$? Write as a decimal. (e.g., If $\\arccos(x) = \\frac{\\pi}{3}$, then $x = \\cos(\\frac{\\pi}{3}) = 0.5$)

**2)** Solve $\\arctan(x) = \\frac{\\pi}{4}$. What is $x$? (e.g., If $\\arctan(x) = 0$, then $x = \\tan(0) = 0$)

**3)** A tree casts a 40-foot shadow when the sun's angle of elevation is $0.9$ radians. Tree height = $40\\tan(0.9) \\approx$ ? feet. Round to nearest integer, calculator in radian mode. (e.g., $40\\tan(\\frac{\\pi}{4}) = 40$ since $\\tan \\frac{\\pi}{4} = 1$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.5', '1', '50'],
        hint1: '$x = \\sin(\\frac{\\pi}{6}) = \\frac{1}{2} = 0.5$.',
        hint2: '$x = \\tan(\\frac{\\pi}{4}) = 1$.',
        hint3: '$40 \\times \\tan(0.9) = 40 \\times 1.260 \\approx 50.4$. In degree mode you would get a wrong answer.',
        explanation: '1) $\\sin(\\frac{\\pi}{6}) = 0.5$. 2) $\\tan(\\frac{\\pi}{4}) = 1$. 3) $40\\tan(0.9) \\approx 50.4 \\approx 50$ ft.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Application Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find an angle of elevation, you typically use',
            options: ['$\\arcsin$', '$\\arccos$', '$\\arctan$']
          },
          {
            label: 'If $\\arcsin(2x) = \\frac{\\pi}{6}$, then $x$ equals',
            options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$1$', '$\\frac{\\sqrt{3}}{4}$']
          },
          {
            label: 'A vertical pole and its shadow form a right triangle. The angle of elevation uses which sides?',
            options: ['Hypotenuse and opposite', 'Opposite and adjacent', 'Adjacent and hypotenuse']
          },
          {
            label: 'Solve $\\arccos(3x) = \\frac{\\pi}{2}$: the value of $x$ is',
            options: ['$0$', '$\\frac{1}{3}$', '$\\frac{\\pi}{6}$', '$3$']
          }
        ],
        correctAnswers: ['$\\arctan$', '$\\frac{1}{4}$', 'Opposite and adjacent', '$0$'],
        hint1: 'Elevation angle involves opposite (height) and adjacent (distance) → $\\arctan$.',
        hint2: '$2x = \\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$, so $x = \\frac{1}{4}$.',
        hint3: 'Pole = opposite, shadow = adjacent.',
        explanation: 'Elevation → $\\arctan$. $2x = \\frac{1}{2}$, $x = \\frac{1}{4}$. Pole/shadow = opp/adj. $3x = \\cos(\\frac{\\pi}{2}) = 0$, $x = 0$.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A cable makes an angle of $1$ radian with the ground and attaches to a tower 80 feet up. The cable length is:',
            options: [
              '$\\frac{80}{\\sin 1} \\approx 95.1$ ft',
              '$\\frac{80}{\\cos 1} \\approx 148.1$ ft',
              '$\\frac{80}{\\tan 1} \\approx 51.4$ ft',
              '$80\\sin 1 \\approx 67.3$ ft'
            ],
            correctAnswer: 0,
            explanation: 'The tower height is opposite the angle and the cable is the hypotenuse, so $\\sin 1 = \\frac{80}{\\text{cable}}$. Cable $= \\frac{80}{\\sin 1} \\approx \\frac{80}{0.841} \\approx 95.1$ ft. Cosine would need the ground distance, tangent gives the ground distance, and $80\\sin 1$ multiplies instead of dividing.'
          },
          {
            question: 'Solve: $3\\arctan(x) = \\pi$',
            options: [
              '$x = \\sqrt{3}$',
              '$x = 1$',
              '$x = \\frac{\\pi}{3}$',
              '$x = 0$'
            ],
            correctAnswer: 0,
            explanation: '$\\arctan(x) = \\frac{\\pi}{3}$. $x = \\tan(\\frac{\\pi}{3}) = \\sqrt{3}$.'
          }
        ]
      }
    }
  ]
};
