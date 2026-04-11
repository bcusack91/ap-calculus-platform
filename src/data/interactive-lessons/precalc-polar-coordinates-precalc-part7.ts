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
| Conversions | $x = r\\cos\\theta, \\; y = r\\sin\\theta, \\; r^2 = x^2+y^2$ |
| Polar curves | Roses, cardioids, limaçons, lemniscates, spirals |
| Symmetry | Test $-\\theta$ (polar axis), $\\pi-\\theta$ (vertical), $-r$ (origin) |
| Area | $A = \\frac{1}{2}\\int r^2\\,d\\theta$ |
| Conics | $r = \\frac{ed}{1 \\pm e\\cos\\theta}$ or $\\frac{ed}{1 \\pm e\\sin\\theta}$ |
| Between curves | $A = \\frac{1}{2}\\int(r_1^2 - r_2^2)\\,d\\theta$ |
      `
    },
    {
      id: 'p7-strategy',
      type: 'text' as const,
      content: `
## 🎓 Problem-Solving Strategies

### Identifying a Polar Curve

Flowchart:
1. **$r = a$** → Circle centered at origin, radius $a$
2. **$r = a\\cos\\theta$ or $r = a\\sin\\theta$** → Circle, diameter $|a|$
3. **$r = a \\pm b\\cos\\theta$ or $r = a \\pm b\\sin\\theta$** → Limaçon
   - $a = b$: cardioid (passes through origin)
   - $a > b$: dimpled or convex limaçon (no inner loop)
   - $a < b$: limaçon with inner loop
4. **$r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$** → Rose
   - $n$ odd: $n$ petals
   - $n$ even: $2n$ petals
5. **$r^2 = a^2\\cos(2\\theta)$ or $r^2 = a^2\\sin(2\\theta)$** → Lemniscate (figure-8)
6. **$r = \\frac{ed}{1 \\pm e\\cos\\theta}$** → Conic

### Common Errors to Avoid

- **Forgetting squaring** in area formula: it's $r^2$, not $r$
- **Wrong limits**: always find where $r = 0$ or where curves intersect
- **Negative $r$**: polar curves can overlap themselves when $r < 0$
- **Rectangular conversion**: $\\tan\\theta = \\frac{y}{x}$ only in the correct quadrant
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
            question: '$r = 3 + 2\\sin\\theta$ is classified as a:',
            options: ['Cardioid', 'Limaçon with inner loop', 'Dimpled limaçon', 'Rose'],
            correctAnswer: 2,
            explanation: '$a = 3 > b = 2$ (but $a < 2b$), so it is a dimpled limaçon. Since $a > b$, it has no inner loop.'
          },
          {
            question: 'The area inside the lemniscate $r^2 = 8\\cos(2\\theta)$ (entire curve) is:',
            options: ['$4$', '$8$', '$4\\pi$', '$8\\pi$'],
            correctAnswer: 1,
            explanation: 'The right half: $\\theta \\in [-\\frac{\\pi}{4}, \\frac{\\pi}{4}]$. $A = 2 \\cdot \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}8\\cos(2\\theta)\\,d\\theta = 8[\\frac{\\sin(2\\theta)}{2}]_{-\\pi/4}^{\\pi/4} = 8$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

**1)** Convert $(x, y) = (-3, 3)$ to polar. What is $r$? (Enter exact value like "3sqrt2")

**2)** For $r = \\frac{10}{5-3\\cos\\theta}$, what is the eccentricity? (Enter as a fraction)

**3)** How many petals does $r = 4\\sin(5\\theta)$ have?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3sqrt2', '3/5', '5'],
        hint1: '$r = \\sqrt{(-3)^2+3^2} = \\sqrt{18} = 3\\sqrt{2}$.',
        hint2: 'Standard form: $r = \\frac{10/5}{1-\\frac{3}{5}\\cos\\theta} = \\frac{2}{1-\\frac{3}{5}\\cos\\theta}$. So $e = \\frac{3}{5}$.',
        hint3: '$r = a\\sin(n\\theta)$ with odd $n$ has exactly $n$ petals.',
        explanation: '1) $r = 3\\sqrt{2}$. 2) $e = \\frac{3}{5}$ (ellipse). 3) $n = 5$ (odd) gives 5 petals.'
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
            options: ['Cardioid', 'Limaçon with inner loop', 'Dimpled limaçon', 'Convex limaçon'],
            correctAnswer: 1
          },
          {
            label: 'The equation $x^2 + y^2 = 5y$ in polar form is:',
            options: ['$r = 5\\sin\\theta$', '$r = 5\\cos\\theta$', '$r^2 = 5r\\sin\\theta$', '$r = 5$'],
            correctAnswer: 0
          },
          {
            label: 'A conic with $e = 1.5$ is a:',
            options: ['Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 2
          },
          {
            label: 'The area of the cardioid $r = a(1+\\cos\\theta)$ is:',
            options: ['$\\pi a^2$', '$\\frac{3\\pi a^2}{2}$', '$2\\pi a^2$', '$\\frac{\\pi a^2}{2}$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Limaçon with inner loop', '$r = 5\\sin\\theta$', 'Hyperbola', '$\\frac{3\\pi a^2}{2}$'],
        hint1: '$a = 2 < b = 4$, so inner loop.',
        hint2: '$x^2+y^2 = 5y \\implies r^2 = 5r\\sin\\theta \\implies r = 5\\sin\\theta$.',
        hint3: '$e = 1.5 > 1$ means hyperbola.',
        explanation: '$a < b$: inner loop. $r^2 = 5r\\sin\\theta \\implies r = 5\\sin\\theta$. $e > 1$: hyperbola. Cardioid area: $\\frac{3\\pi a^2}{2}$.'
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
            options: ['$\\theta = \\frac{\\pi}{6}$ and $\\theta = \\frac{5\\pi}{6}$', '$\\theta = \\frac{\\pi}{3}$ and $\\theta = \\frac{5\\pi}{3}$', '$\\theta = \\frac{\\pi}{4}$ and $\\theta = \\frac{7\\pi}{4}$', '$\\theta = \\frac{\\pi}{3}$ and $\\theta = -\\frac{\\pi}{3}$'],
            correctAnswer: 3,
            explanation: '$2 = 4\\cos\\theta \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = \\pm\\frac{\\pi}{3}$.'
          },
          {
            question: 'To find the area inside both $r = 1$ and $r = 2\\sin\\theta$, you need to:',
            options: ['Integrate $\\frac{1}{2}\\int r^2\\,d\\theta$ with $r = \\min(1, 2\\sin\\theta)$', 'Find intersections, split the integral into regions using the inner curve in each', 'Subtract the two areas', 'Multiply the two areas'],
            correctAnswer: 1,
            explanation: 'For area inside both curves, find where they intersect, then integrate using whichever curve is closer to the origin on each sub-interval.'
          }
        ]
      }
    }
  ]
};
