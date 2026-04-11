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

$$\\theta = \\arctan\\!\\left(\\frac{44}{80}\\right) = \\arctan(0.55) \\approx 28.8°$$

### Example 2: Angle of Depression

A drone at 200 feet altitude spots a target 500 feet away horizontally. The angle of depression is:

$$\\theta = \\arctan\\!\\left(\\frac{200}{500}\\right) = \\arctan(0.4) \\approx 21.8°$$
      `
    },
    {
      id: 'p6-bearings',
      type: 'text' as const,
      content: `
## 🧭 Navigation & Bearings

### Example 3: Finding Direction

A ship sails 15 km east and 8 km north. What bearing has it traveled?

$$\\theta = \\arctan\\!\\left(\\frac{15}{8}\\right) \\approx 61.9°$$

Bearing: approximately $\\text{N } 62° \\text{ E}$ (or $062°$ in compass notation).

### Example 4: Surveying

A surveyor stands at point A and measures:
- Distance to point B: 120 meters
- Height difference: 35 meters

Angle: $\\theta = \\arcsin\\!\\left(\\frac{35}{120}\\right) \\approx 17.0°$

### Example 5: Physics — Launch Angle

A projectile needs to reach a target at the same height, 200 m away, with initial speed 50 m/s.

The range formula gives: $R = \\frac{v^2 \\sin(2\\theta)}{g}$

$$200 = \\frac{2500 \\sin(2\\theta)}{9.8} \\implies \\sin(2\\theta) = 0.784$$

$$2\\theta = \\arcsin(0.784) \\approx 51.6° \\implies \\theta \\approx 25.8°$$
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
            explanation: 'Opposite = flagpole height = 15, adjacent = shadow = 20. Angle = $\\arctan(\\frac{15}{20}) \\approx 36.9°$.'
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
            question: 'From a 100-meter cliff, an object on the ground is seen at a 30° angle of depression. The horizontal distance is approximately:',
            options: [
              '$100\\sqrt{3} \\approx 173$ m',
              '$\\frac{100}{\\sqrt{3}} \\approx 58$ m',
              '$50$ m',
              '$200$ m'
            ],
            correctAnswer: 0,
            explanation: '$\\tan(30°) = \\frac{100}{d}$, so $d = \\frac{100}{\\tan 30°} = \\frac{100}{\\frac{1}{\\sqrt{3}}} = 100\\sqrt{3} \\approx 173$ m.'
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

**3)** A tree casts a 40-foot shadow when the sun's elevation is 50°. Tree height = $40\\tan(50°) \\approx$ ? feet. Round to nearest integer. (e.g., $40\\tan(45°) = 40$ since $\\tan 45° = 1$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.5', '1', '48'],
        hint1: '$x = \\sin(\\frac{\\pi}{6}) = \\frac{1}{2} = 0.5$.',
        hint2: '$x = \\tan(\\frac{\\pi}{4}) = 1$.',
        hint3: '$40 \\times \\tan(50°) = 40 \\times 1.19 \\approx 47.7 \\approx 48$.',
        explanation: '1) $\\sin(\\frac{\\pi}{6}) = 0.5$. 2) $\\tan(\\frac{\\pi}{4}) = 1$. 3) $40\\tan(50°) \\approx 47.7 \\approx 48$ ft.'
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
            question: 'A cable makes a 55° angle with the ground and attaches to a tower 80 feet up. The cable length is:',
            options: [
              '$\\frac{80}{\\sin 55°} \\approx 97.6$ ft',
              '$\\frac{80}{\\cos 55°} \\approx 139.5$ ft',
              '$\\frac{80}{\\tan 55°} \\approx 56.0$ ft',
              '$80\\sin 55° \\approx 65.5$ ft'
            ],
            correctAnswer: 0,
            explanation: '$\\sin 55° = \\frac{80}{\\text{cable}}$. Cable $= \\frac{80}{\\sin 55°} \\approx \\frac{80}{0.819} \\approx 97.6$ ft.'
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
