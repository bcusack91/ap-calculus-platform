export const calcbcParamDerivPart7Data = {
  topicSlug: 'parametric-derivatives-calcbc',
  sections: [
    {
      id: 'pd7-intro',
      type: 'text' as const,
      content: `# Parametric Derivatives

**Part 7 of 7 \u2014 Comprehensive Review**

Master all parametric derivative concepts for the AP exam.

### Complete Formula Sheet

| Formula | Expression |
|---------|-----------|
| First derivative | $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ |
| Second derivative | $\\frac{d^2y}{dx^2} = \\frac{(d/dt)(dy/dx)}{dx/dt}$ |
| Speed | $v = \\sqrt{(x')^2+(y')^2}$ |
| Curvature | $\\kappa = \\frac{|x'y''-y'x''|}{((x')^2+(y')^2)^{3/2}}$ |
| Tangent line | $y - y_0 = \\frac{dy/dx}(x - x_0)$ |
| Normal line | slope $= -\\frac{dx/dt}{dy/dt}$ |`
    },
    {
      id: 'pd7-mc1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment**',
      exercise: {
        questions: [
          {
            question: 'For $x = \\tan t$, $y = \\sec t$, $\\frac{dy}{dx}$ equals:',
            options: ['$\\csc t$', '$\\sin t$', '$\\cos t$', '$\\sec t$'],
            correctAnswer: 1,
            explanation: '$dy/dx = \\frac{\\sec t\\tan t}{\\sec^2 t} = \\frac{\\tan t}{\\sec t} = \\sin t$.'
          },
          {
            question: 'The acceleration vector for uniform circular motion $x = R\\cos(\\omega t)$, $y = R\\sin(\\omega t)$ always points:',
            options: ['Toward the center', 'Along the tangent', 'Outward', 'Upward'],
            correctAnswer: 0,
            explanation: '$\\mathbf{a} = (-R\\omega^2\\cos\\omega t, -R\\omega^2\\sin\\omega t) = -\\omega^2(x,y)$. This is opposite to the position vector: toward the center.'
          },
          {
            question: 'When $x\'(t_0) = 0$, $y\'(t_0) = 0$, $x\'\'(t_0) \\ne 0$, and $y\'\'(t_0) \\ne 0$, the point is:',
            options: ['A cusp (use limits to find tangent direction)', 'A horizontal tangent', 'A vertical tangent', 'An inflection point'],
            correctAnswer: 0,
            explanation: 'Both velocity components vanish: the standard formula gives $0/0$. We use L\'H\\^opital: $\\lim dy/dx = y\'\'(t_0)/x\'\'(t_0)$. The point is typically a cusp or stationary point.'
          },
          {
            question: 'The relationship between curvature and the second derivative for $y = f(x)$ is:',
            options: ['$\\kappa = \\frac{|f\'\'|}{(1+(f\')^2)^{3/2}}$', '$\\kappa = |f\'\'|$', '$\\kappa = f\'\'/(f\')^2$', '$\\kappa = 1/f\'\'$'],
            correctAnswer: 0,
            explanation: 'Setting $x = t$, $y = f(t)$: $\\kappa = \\frac{|1 \\cdot f\'\' - f\' \\cdot 0|}{(1+(f\')^2)^{3/2}} = \\frac{|f\'\'|}{(1+(f\')^2)^{3/2}}$.'
          }
        ]
      }
    },
    {
      id: 'pd7-common-errors',
      type: 'text' as const,
      content: `### Common AP Exam Errors to Avoid

| Error | Correction |
|-------|-----------|
| $\\frac{d^2y}{dx^2} = \\frac{y''(t)}{x''(t)}$ | Use $\\frac{(d/dt)(dy/dx)}{dx/dt}$ |
| Forgetting to evaluate the point $(x_0, y_0)$ | Always compute $x(t_0)$ and $y(t_0)$ |
| Confusing speed with velocity | Speed $\\ge 0$; velocity is a vector |
| Ignoring domain restrictions when eliminating $t$ | Always note valid ranges |
| Writing the tangent slope but not the line equation | Use point-slope: $y - y_0 = m(x - x_0)$ |`
    },
    {
      id: 'pd7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Concept Check**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x = t^2$, $y = t^3$, the Cartesian curve $y^2 = x^3$ has:',
            options: ['A cusp at the origin', 'A smooth curve through the origin', 'No special feature', 'A vertical asymptote'],
            correctAnswers: ['A cusp at the origin'],
            hints: ['Both $x\'$ and $y\'$ are zero at $t = 0$.'],
            explanation: 'At $t=0$: $(0,0)$ with $x\'=0$, $y\'=0$. The curve $y^2 = x^3$ has a cusp at the origin where the tangent direction changes.'
          },
          {
            label: 'If a particle has constant speed $c > 0$, its acceleration:',
            options: ['Is always perpendicular to velocity', 'Is zero', 'Points in the direction of motion', 'Is constant'],
            correctAnswers: ['Is always perpendicular to velocity'],
            hints: ['Constant $|\\mathbf{v}|^2 = \\mathbf{v} \\cdot \\mathbf{v}$. Differentiate both sides.'],
            explanation: '$d/dt(|\\mathbf{v}|^2) = 2\\mathbf{v}\\cdot\\mathbf{a} = 0$. So $\\mathbf{v} \\perp \\mathbf{a}$. Acceleration only changes direction, not speed.'
          },
          {
            label: 'The parametric curve $x = a\\cosh t$, $y = b\\sinh t$ represents:',
            options: ['A hyperbola', 'An ellipse', 'A parabola', 'A circle'],
            correctAnswers: ['A hyperbola'],
            hints: ['$\\cosh^2 t - \\sinh^2 t = 1$.'],
            explanation: '$x^2/a^2 - y^2/b^2 = \\cosh^2 t - \\sinh^2 t = 1$. This is a hyperbola.'
          }
        ]
      }
    },
    {
      id: 'pd7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'For uniform circular motion $x = 4\\cos t$, $y = 4\\sin t$, the curvature equals $1/R$ where $R$ is the radius. What is the curvature? Enter as a fraction.',
        correctAnswer: '1/4',
        acceptableAnswers: ['1/4', '0.25'],
        hints: ['The radius is $4$.', 'Curvature of a circle of radius $R$ is $1/R$.'],
        explanation: 'For a circle of radius $R = 4$, the curvature is $\\kappa = 1/R = 1/4$.'
      }
    },
    {
      id: 'pd7-summary',
      type: 'text' as const,
      content: `### Parametric Derivatives Complete!

You have mastered:
- First and second derivatives of parametric curves
- Tangent and normal line equations
- Velocity, acceleration, and speed
- Curvature and radius of curvature
- Eliminating the parameter and choosing methods

> **AP Exam Note:** Parametric derivative questions appear in both MC and FRQ. The most common FRQ asks: find $dy/dx$, determine tangent line, compute speed or distance. Always show your work clearly.`
    }
  ]
};
