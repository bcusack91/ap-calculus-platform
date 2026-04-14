export const calcbcParametricPart5Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par5-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 5 of 7 \u2014 Surface Area & Volume of Revolution**

When parametric curves are revolved around an axis, we can compute the surface area and volume using modified integral formulas.`
    },
    {
      id: 'par5-sa',
      type: 'text' as const,
      content: `### Surface Area of Revolution

**Revolution about the $x$-axis:**
$$\\boxed{SA = 2\\pi \\int_a^b |y(t)| \\cdot \\sqrt{(x')^2 + (y')^2}\\,dt}$$

**Revolution about the $y$-axis:**
$$\\boxed{SA = 2\\pi \\int_a^b |x(t)| \\cdot \\sqrt{(x')^2 + (y')^2}\\,dt}$$

The factor $2\\pi r$ comes from the circumference of revolution, and $ds = \\sqrt{(x')^2 + (y')^2}\\,dt$ is the arc element.

### Example: Sphere from $x = R\\cos t$, $y = R\\sin t$, $0 \\le t \\le \\pi$

Revolving the upper semicircle about the $x$-axis:

$$SA = 2\\pi \\int_0^{\\pi} R\\sin t \\cdot R\\,dt = 2\\pi R^2 \\int_0^{\\pi} \\sin t\\,dt = 2\\pi R^2 \\cdot 2 = 4\\pi R^2$$

$$\\boxed{SA_{\\text{sphere}} = 4\\pi R^2 \\quad \\checkmark}$$`
    },
    {
      id: 'par5-volume',
      type: 'text' as const,
      content: `### Volume of Revolution (Disk/Washer)

**About the $x$-axis** (using disks):
$$V = \\pi \\int_a^b [y(t)]^2 \\cdot x'(t)\\,dt$$

### Example: Sphere volume from semicircle

$x = R\\cos t$, $y = R\\sin t$, $0 \\le t \\le \\pi$:

$$V = \\pi \\int_0^{\\pi} R^2\\sin^2 t \\cdot (-R\\sin t)\\,dt = -\\pi R^3 \\int_0^{\\pi} \\sin^3 t\\,dt$$

$$= \\pi R^3 \\cdot \\frac{4}{3} = \\frac{4}{3}\\pi R^3$$

$$\\boxed{V_{\\text{sphere}} = \\frac{4}{3}\\pi R^3 \\quad \\checkmark}$$

> **AP Tip:** Volume problems with parametric curves often appear in BC FRQs. Set up the integral carefully, matching the revolution axis.`
    },
    {
      id: 'par5-mc1',
      type: 'multiple-choice' as const,
      content: '**Surface Area & Volume**',
      exercise: {
        questions: [
          {
            question: 'Surface area of $x = t$, $y = t^2$ for $0 \\le t \\le 1$ revolved about the $x$-axis has integrand:',
            options: [
              '$2\\pi t^2 \\sqrt{1+4t^2}$',
              '$2\\pi t \\sqrt{1+4t^2}$',
              '$\\pi (t^2)^2 \\cdot 1$',
              '$2\\pi t^2 \\cdot 2t$'
            ],
            correctAnswer: 0,
            explanation: '$|y| = t^2$, speed $= \\sqrt{1 + (2t)^2} = \\sqrt{1+4t^2}$. $SA$ integrand $= 2\\pi t^2 \\sqrt{1+4t^2}$.'
          },
          {
            question: 'For $x = \\cos t$, $y = \\sin t$, $0 \\le t \\le \\pi$ revolved about the $x$-axis, $SA$ equals:',
            options: ['$4\\pi$', '$2\\pi$', '$\\pi$', '$4\\pi^2$'],
            correctAnswer: 0,
            explanation: '$2\\pi \\int_0^{\\pi} \\sin t \\cdot 1\\,dt = 2\\pi[-\\cos t]_0^{\\pi} = 2\\pi(1+1) = 4\\pi$. This is the surface area of the unit sphere.'
          }
        ]
      }
    },
    {
      id: 'par5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Setup**',
      exercise: {
        dropdowns: [
          {
            label: 'Revolving $x = t^2$, $y = t$ about the $y$-axis, $SA$ uses:',
            options: ['$2\\pi |x(t)| \\cdot \\text{speed}$ (use $|x| = t^2$)', '$2\\pi |y(t)| \\cdot \\text{speed}$', '$\\pi [x(t)]^2 y\'(t)$', '$\\pi [y(t)]^2 x\'(t)$'],
            correctAnswers: ['$2\\pi |x(t)| \\cdot \\text{speed}$ (use $|x| = t^2$)'],
            hints: ['Revolution about $y$-axis uses the distance from the $y$-axis, which is $|x|$.'],
            explanation: 'About $y$-axis: $SA = 2\\pi \\int |x| \\cdot ds = 2\\pi \\int t^2 \\sqrt{(2t)^2 + 1}\\,dt$.'
          },
          {
            label: 'Volume of $x = 2\\cos t$, $y = 2\\sin t$ ($0 \\le t \\le \\pi$) about $x$-axis uses:',
            options: ['$\\pi \\int_0^{\\pi} (2\\sin t)^2(-2\\sin t)\\,dt$', '$2\\pi \\int_0^{\\pi} 2\\sin t \\cdot 2\\,dt$', '$\\pi \\int_0^2 y^2\\,dx$', '$2\\pi \\int_0^{\\pi} (2\\cos t)^2\\,dt$'],
            correctAnswers: ['$\\pi \\int_0^{\\pi} (2\\sin t)^2(-2\\sin t)\\,dt$'],
            hints: ['Disk method: $V = \\pi \\int [y(t)]^2 x\'(t)\\,dt$. $x\' = -2\\sin t$.'],
            explanation: '$V = \\pi \\int_0^{\\pi} 4\\sin^2 t \\cdot (-2\\sin t)\\,dt = -8\\pi \\int_0^{\\pi} \\sin^3 t\\,dt = -8\\pi \\cdot (-4/3) = \\frac{32\\pi}{3}$.'
          }
        ]
      }
    },
    {
      id: 'par5-input',
      type: 'input-box' as const,
      content: '**Quick Computation**',
      exercise: {
        question: 'The lateral surface area of a cone with slant height $\\ell$ and base radius $r$ is $\\pi r \\ell$. Parametrize the slant side as $x = t$, $y = (r/\\ell)t$ for $0 \\le t \\le \\ell$. What is the speed (constant)?',
        correctAnswer: 'sqrt(1+r^2/l^2)',
        acceptableAnswers: ['sqrt(1+r^2/l^2)', '1'],
        hints: ['$x\' = 1$, $y\' = r/\\ell$.', 'Speed $= \\sqrt{1 + r^2/\\ell^2}$.'],
        explanation: 'Speed $= \\sqrt{1 + (r/\\ell)^2} = \\sqrt{(\\ell^2 + r^2)/\\ell^2}$. The SA integral with proper simplification gives $\\pi r \\ell$.'
      }
    },
    {
      id: 'par5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

| Quantity | About $x$-axis | About $y$-axis |
|:---:|:---:|:---:|
| Surface area | $2\\pi \\int |y| \\cdot ds$ | $2\\pi \\int |x| \\cdot ds$ |
| Volume (disk) | $\\pi \\int y^2 x'\\,dt$ | $\\pi \\int x^2 y'\\,dt$ |

> **Coming Up:** Part 6 is a **Problem-Solving Workshop** with mixed parametric problems.`
    }
  ]
};
