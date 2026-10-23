export const precalcPolarPart7Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🧩 Polar Coordinates — Full Synthesis

**Part 7 of 7**

### Everything Together

This final part combines all polar coordinate skills:

| Skill | Key Formula / Concept |
|:------|:---------------------|
| Converting points | $x = r\\cos\\theta, \\; y = r\\sin\\theta, \\; r = \\sqrt{x^2+y^2}$ |
| Complex numbers | $a + bi = (r\\cos\\theta) + i(r\\sin\\theta)$ |
| Polar curves | Circles, roses, cardioids, limaçons |
| Symmetry | Test $-\\theta$ (polar axis), $\\pi-\\theta$ (vertical), $-r$ or $\\theta+\\pi$ (origin); a failed test is inconclusive |
| Reading $r = f(\\theta)$ | $r > 0$: on the ray of $\\theta$; $r < 0$: on the opposite ray; $r = 0$: at the pole |
| Domain restriction | Choose $\\alpha \\le \\theta \\le \\beta$ so the curve starts and ends where you want |
| Distance from origin | $\\lvert r \\rvert$; increasing when $r$ is positive and increasing or negative and decreasing |
| Average rate of change | $\\frac{f(\\theta_2) - f(\\theta_1)}{\\theta_2 - \\theta_1}$, in radius units per radian |
      `
    },
    {
      id: 'p7-strategy',
      type: 'text' as const,
      content: `
## 🎓 Problem-Solving Strategies

### Identifying a Polar Curve

Flowchart:
1. **$r = a$** → Circle centered at origin, radius $\\lvert a \\rvert$
2. **$r = a\\cos\\theta$ or $r = a\\sin\\theta$** → Circle, diameter $\\lvert a \\rvert$
3. **$r = a + b\\cos\\theta$ or $r = a + b\\sin\\theta$** → Limaçon; find the smallest and largest $r$
   - $r$ goes negative: inner loop
   - $r$ reaches $0$ but never goes negative: cardioid (touches the pole once)
   - $r$ stays positive: never reaches the pole
4. **$r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$** → Rose
   - $n$ odd: $n$ petals
   - $n$ even: $2n$ petals

### Describing How a Polar Graph Behaves

1. **Sign of $r$**: tells you which ray each point sits on
2. **$r$ increasing or decreasing**: combine with the sign to decide whether the curve moves away from or toward the origin
3. **Relative extrema of $r$**: points relatively closest to or farthest from the origin
4. **Average rate of change of $r$**: change in signed radius per radian, which also gives estimates of $r$ inside an interval

### Common Errors to Avoid

- **Ignoring the sign of $r$**: a decreasing $r$ moves the curve away from the origin when $r$ is negative
- **Wrong domain restriction**: find where $r = 0$ so a petal or loop starts and ends at the pole
- **Negative $r$**: polar curves can overlap themselves when $r < 0$
- **Converting a point or complex number**: $\\theta = \\arctan\\frac{y}{x}$ needs $+\\pi$ when $x < 0$
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Mixed Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The polar point $(4, \\frac{5\\pi}{3})$ in rectangular coordinates is:',
            options: ['$(2, -2\\sqrt{3})$', '$(2\\sqrt{3}, -2)$', '$(2, 2\\sqrt{3})$', '$(-2, 2\\sqrt{3})$'],
            correctAnswer: 0,
            explanation: '$x = 4\\cos\\frac{5\\pi}{3} = 4 \\cdot \\frac{1}{2} = 2$, $y = 4\\sin\\frac{5\\pi}{3} = 4(-\\frac{\\sqrt{3}}{2}) = -2\\sqrt{3}$.'
          },
          {
            question: 'Which describes the graph of $r = 3 + 2\\sin\\theta$?',
            options: ['A cardioid that touches the pole once', 'A limaçon with an inner loop', 'A limaçon that never reaches the pole', 'A rose with three petals'],
            correctAnswer: 2,
            explanation: 'Since $-1 \\le \\sin\\theta \\le 1$, $r$ runs from $3 - 2 = 1$ to $5$ and is always positive, so the curve never reaches the pole and has no inner loop. A cardioid needs a minimum of exactly $0$, and a rose has the form $a\\sin(n\\theta)$.'
          },
          {
            question: 'For $r = 2 - 4\\cos\\theta$, on which interval is the distance from the origin increasing?',
            options: ['$0 < \\theta < \\frac{\\pi}{3}$', '$\\frac{\\pi}{3} < \\theta < \\pi$', '$\\pi < \\theta < \\frac{5\\pi}{3}$', '$\\pi < \\theta < 2\\pi$'],
            correctAnswer: 1,
            explanation: 'On $\\left(\\frac{\\pi}{3}, \\pi\\right)$, $r$ is positive and increasing from $0$ to $6$. On $\\left(0, \\frac{\\pi}{3}\\right)$, $r$ is negative and increasing from $-2$ to $0$, so the distance there is decreasing. On $(\\pi, 2\\pi)$, $r$ falls from $6$ to $-2$, so the distance first shrinks to $0$ and then grows.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

**1)** Convert $(x, y) = (-3, 3)$ to polar. What is $r$? (Enter an exact value like "2sqrt5")

**2)** For $r = 4 + 2\\sin\\theta$, what is the average rate of change of $r$ on $\\left[0, \\frac{\\pi}{2}\\right]$? (Enter in terms of pi, like "6/pi")

**3)** How many petals does $r = 4\\sin(5\\theta)$ have?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3sqrt2', '4/pi', '5'],
        hint1: '$r = \\sqrt{(-3)^2+3^2} = \\sqrt{18} = 3\\sqrt{2}$.',
        hint2: '$r(0) = 4$ and $r\\left(\\frac{\\pi}{2}\\right) = 6$. Divide the change in $r$ by $\\frac{\\pi}{2}$.',
        hint3: '$r = a\\sin(n\\theta)$ with odd $n$ has exactly $n$ petals.',
        explanation: '1) $r = 3\\sqrt{2}$. 2) $\\frac{6 - 4}{\\pi/2} = \\frac{4}{\\pi}$ per radian. 3) $n = 5$ (odd) gives 5 petals.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Synthesis** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$r = 2 - 4\\cos\\theta$: this is a',
            options: ['Cardioid through the pole', 'Limaçon with inner loop', 'Limaçon that never reaches the pole', 'Rose with two petals'],
            correctAnswer: 1
          },
          {
            label: 'In polar form with $r > 0$, the complex number $-5$ has',
            options: ['$r = 5,\\ \\theta = \\pi$', '$r = 5,\\ \\theta = 0$', '$r = 5,\\ \\theta = \\frac{\\pi}{2}$', '$r = 25,\\ \\theta = \\pi$'],
            correctAnswer: 0
          },
          {
            label: 'If $r = f(\\theta)$ is negative and decreasing, the distance from the origin is',
            options: ['Increasing', 'Decreasing', 'Constant', 'Zero'],
            correctAnswer: 0
          },
          {
            label: 'The domain restriction that draws one petal of $r = 5\\sin(3\\theta)$ is',
            options: ['$0 \\le \\theta \\le \\frac{\\pi}{3}$', '$0 \\le \\theta \\le \\frac{\\pi}{6}$', '$0 \\le \\theta \\le \\frac{2\\pi}{3}$', '$0 \\le \\theta \\le \\pi$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Limaçon with inner loop', '$r = 5,\\ \\theta = \\pi$', 'Increasing', '$0 \\le \\theta \\le \\frac{\\pi}{3}$'],
        hint1: '$r$ runs from $2 - 4 = -2$ to $6$; negative values of $r$ trace an inner loop.',
        hint2: '$-5$ is the point $(-5, 0)$ on the negative real axis, $5$ units from the origin.',
        hint3: 'A negative $r$ that keeps decreasing gets larger in absolute value. For the petal, find the first positive $\\theta$ where $\\sin(3\\theta) = 0$.',
        explanation: '$r$ goes negative, so there is an inner loop. $-5$ is $5$ units from the origin on the negative real axis, so $r = 5$ and $\\theta = \\pi$. Negative and decreasing means $|r|$ grows, so the distance increases. $r = 0$ at $\\theta = 0$ and $\\theta = \\frac{\\pi}{3}$ with $r > 0$ between, so that interval draws one petal.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Final** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The intersection(s) of $r = 2$ and $r = 4\\cos\\theta$ occur at:',
            options: ['$\\theta = \\frac{\\pi}{6}$ and $\\theta = \\frac{5\\pi}{6}$', '$\\theta = \\frac{2\\pi}{3}$ and $\\theta = \\frac{4\\pi}{3}$', '$\\theta = \\frac{\\pi}{4}$ and $\\theta = \\frac{7\\pi}{4}$', '$\\theta = \\frac{\\pi}{3}$ and $\\theta = -\\frac{\\pi}{3}$'],
            correctAnswer: 3,
            explanation: '$2 = 4\\cos\\theta \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = \\pm\\frac{\\pi}{3}$. The angles $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$ solve $\\cos\\theta = -\\frac{1}{2}$, and $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ solve $\\sin\\theta = \\frac{1}{2}$ instead.'
          },
          {
            question: 'A polar function has $f(0) = 1$ and $f\\left(\\frac{\\pi}{2}\\right) = 4$. Using the average rate of change on $\\left[0, \\frac{\\pi}{2}\\right]$, what is the estimate of $f\\left(\\frac{\\pi}{6}\\right)$?',
            options: ['$1.5$', '$2$', '$2.5$', '$3.5$'],
            correctAnswer: 1,
            explanation: 'The average rate of change is $\\frac{4 - 1}{\\pi/2} = \\frac{6}{\\pi}$ per radian, so $f\\left(\\frac{\\pi}{6}\\right) \\approx 1 + \\frac{6}{\\pi}\\cdot\\frac{\\pi}{6} = 2$.'
          }
        ]
      }
    }
  ]
};
