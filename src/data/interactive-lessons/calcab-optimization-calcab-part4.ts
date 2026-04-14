export const calcabOptimizationPart4Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt4-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 4 of 7 \u2014 3D Optimization (Cylinders & Cones)**

### 3D Shape Formulas

| Shape | Volume | Surface Area |
|:---:|:---:|:---:|
| Cylinder (closed) | $\\pi r^2 h$ | $2\\pi r^2 + 2\\pi rh$ |
| Cylinder (open top) | $\\pi r^2 h$ | $\\pi r^2 + 2\\pi rh$ |
| Cone | $\\frac{1}{3}\\pi r^2 h$ | $\\pi r^2 + \\pi r\\ell$ |
| Sphere | $\\frac{4}{3}\\pi r^3$ | $4\\pi r^2$ |

### Worked Example: Minimize Surface Area

> A closed cylinder has volume $V = 1000$ cm$^3$. Find the radius that minimizes surface area.

**Constraint:** $\\pi r^2 h = 1000 \\Rightarrow h = \\frac{1000}{\\pi r^2}$

**Objective:** $S = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + \\frac{2000}{r}$

$$S'(r) = 4\\pi r - \\frac{2000}{r^2} = 0$$
$$4\\pi r^3 = 2000 \\quad \\Rightarrow \\quad r = \\left(\\frac{500}{\\pi}\\right)^{1/3} \\approx 5.42 \\text{ cm}$$

Then $h = \\frac{1000}{\\pi(5.42)^2} \\approx 10.84 \\approx 2r$.

$$\\boxed{\\text{Optimal closed cylinder: } h = 2r}$$

> **Key Fact:** The optimal closed cylinder always has $h = 2r$ (height equals diameter). For an open-top cylinder, the optimal ratio is $h = r$.`
    },
    {
      id: 'opt4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 3D Optimization** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'An open-top cylinder has volume $V = 27\\pi$. What radius minimizes the surface area?',
            options: ['$r = 3$', '$r = 2$', '$r = \\sqrt[3]{27}$', '$r = 9$'],
            correctAnswer: 0,
            explanation: '$h = 27/r^2$. $S = \\pi r^2 + 2\\pi r(27/r^2) = \\pi r^2 + 54\\pi/r$. $S\' = 2\\pi r - 54\\pi/r^2 = 0$. $r^3 = 27$, $r = 3$.'
          },
          {
            question: 'For a closed cylinder with fixed volume, the optimal $h/r$ ratio is:',
            options: ['$h = 2r$', '$h = r$', '$h = 3r$', '$h = \\pi r$'],
            correctAnswer: 0,
            explanation: 'The optimal closed cylinder has $h = 2r$ (height = diameter). This minimizes surface area for a given volume.'
          },
          {
            question: 'An open-top box with square base has volume 32. $S = x^2 + 4xh$. Using $h = 32/x^2$, find $x$ that minimizes $S$.',
            options: ['$x = 4$', '$x = 2$', '$x = 8$', '$x = \\sqrt[3]{32}$'],
            correctAnswer: 0,
            explanation: '$S = x^2 + 128/x$. $S\' = 2x - 128/x^2 = 0$. $2x^3 = 128$. $x^3 = 64$, so $x = 4$.'
          }
        ]
      }
    },
    {
      id: 'opt4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'For a cylinder with fixed volume, the constraint equation is:',
            options: ['$\\pi r^2 h = V$', '$2\\pi r^2 + 2\\pi rh = V$', '$\\pi r^2 + 2\\pi rh = V$', '$2\\pi rh = V$'],
            correctAnswers: ['$\\pi r^2 h = V$'],
            hints: ['Volume = base area times height.'],
            explanation: '$V = \\pi r^2 h$ is the volume constraint.'
          },
          {
            label: 'After substituting the constraint, the surface area becomes a function of:',
            options: ['$r$ only', '$h$ only', '$r$ and $h$', 'Volume'],
            correctAnswers: ['$r$ only'],
            hints: ['We solved for $h$ in terms of $r$.'],
            explanation: 'We eliminate $h$ using $h = V/(\\pi r^2)$, making $S$ a function of $r$ alone.'
          },
          {
            label: 'The open-top cylinder has optimal ratio $h = r$ because:',
            options: ['Removing one circular face changes the derivative balance', 'The formula is different', 'The volume is less', 'The shape is a cone'],
            correctAnswers: ['Removing one circular face changes the derivative balance'],
            hints: ['$S = \\pi r^2 + 2\\pi rh$ (only one base).'],
            explanation: 'With only one base ($\\pi r^2$ instead of $2\\pi r^2$), the optimization yields $h = r$ instead of $h = 2r$.'
          }
        ]
      }
    },
    {
      id: 'opt4-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'An open-top cylinder has volume $V = 64\\pi$ cm$^3$. Find the radius (in cm) that minimizes surface area.\n\n(Enter an integer.)',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: [
          '$h = 64/r^2$.',
          '$S = \\pi r^2 + 2\\pi r \\cdot 64/r^2 = \\pi r^2 + 128\\pi/r$.',
          '$S\' = 2\\pi r - 128\\pi/r^2 = 0$. $r^3 = 64$.'
        ],
        explanation: '$r^3 = 64$, so $r = 4$ cm. Then $h = 64/16 = 4 = r$, confirming the $h = r$ rule.'
      }
    },
    {
      id: 'opt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- 3D optimization: same 5-step process with volume/surface area formulas
- Closed cylinder: optimal when $h = 2r$
- Open-top cylinder: optimal when $h = r$
- Always express $S$ or $V$ in one variable using the constraint`
    }
  ]
};
