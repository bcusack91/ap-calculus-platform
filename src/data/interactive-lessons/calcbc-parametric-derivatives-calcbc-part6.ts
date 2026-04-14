export const calcbcParamDerivPart6Data = {
  topicSlug: 'parametric-derivatives-calcbc',
  sections: [
    {
      id: 'pd6-intro',
      type: 'text' as const,
      content: `# Parametric Derivatives

**Part 6 of 7 \u2014 Problem-Solving Workshop**

Mixed practice covering tangent lines, concavity, velocity, speed, and curvature for parametric curves.`
    },
    {
      id: 'pd6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: 'For $x = t - t^3$, $y = 1 - t^4$, at $t = 1$: $dy/dx$ is:',
            options: ['$2$', '$-2$', '$4$', 'Undefined'],
            correctAnswer: 0,
            explanation: '$dx/dt = 1 - 3t^2 = -2$. $dy/dt = -4t^3 = -4$. $dy/dx = -4/(-2) = 2$.'
          },
          {
            question: 'A particle with $x(t) = \\cos^3 t$, $y(t) = \\sin^3 t$ (astroid) has speed:',
            options: ['$3|\\sin t\\cos t|$', '$3$', '$1$', '$3\\sin t\\cos t$'],
            correctAnswer: 0,
            explanation: '$x\'=-3\\cos^2 t\\sin t$, $y\'=3\\sin^2 t\\cos t$. Speed $= 3|\\sin t\\cos t|\\sqrt{\\cos^2 t + \\sin^2 t} = 3|\\sin t\\cos t|$.'
          },
          {
            question: 'The tangent to $x = t^2$, $y = t^3$ at the origin ($t = 0$) is:',
            options: ['Horizontal ($y = 0$)', 'Vertical ($x = 0$)', 'Has slope $1$', 'Does not exist'],
            correctAnswer: 0,
            explanation: '$dy/dx = 3t^2/(2t) = 3t/2$. As $t \\to 0$, $dy/dx \\to 0$. The tangent line at the origin is $y = 0$ (horizontal).'
          }
        ]
      }
    },
    {
      id: 'pd6-frq',
      type: 'text' as const,
      content: `### AP FRQ-Style Problem

A particle moves in the $xy$-plane with $x(t) = 2t + \\sin t$ and $y(t) = 3t - \\cos t$ for $t \\ge 0$.

**(a)** Find the velocity vector at $t = \\pi$.

$\\mathbf{v}(\\pi) = (2 + \\cos\\pi,\\, 3 + \\sin\\pi) = (1, 3)$

**(b)** Find the speed at $t = \\pi$.

$$|\\mathbf{v}| = \\sqrt{1 + 9} = \\sqrt{10}$$

**(c)** Is the particle ever at rest?

$x' = 2 + \\cos t \\ge 1 > 0$ for all $t$. Since $x'$ is never zero, the particle is never at rest.

**(d)** Find $dy/dx$ at $t = 0$.

$$\\frac{dy}{dx}\\bigg|_{t=0} = \\frac{3 + \\sin 0}{2 + \\cos 0} = \\frac{3}{3} = 1$$`
    },
    {
      id: 'pd6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Mixed Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x = \\ln t$, $y = 1/t$, the concavity for $t > 0$ is:',
            options: ['Always concave up', 'Always concave down', 'Changes at $t = 1$', 'Zero curvature'],
            correctAnswers: ['Always concave up'],
            hints: ['$dy/dx = \\frac{-1/t^2}{1/t} = -1/t$. Find $d^2y/dx^2$.'],
            explanation: '$dy/dx = -1/t$. $d/dt(-1/t) = 1/t^2$. $d^2y/dx^2 = \\frac{1/t^2}{1/t} = 1/t > 0$ for $t > 0$. Always concave up. (This is $y = e^{-x}$, which is indeed concave up.)'
          },
          {
            label: 'At a cusp (both $x\' = 0$ and $y\' = 0$), the curvature is:',
            options: ['Undefined (speed is zero)', 'Zero', 'Infinity', 'One'],
            correctAnswers: ['Undefined (speed is zero)'],
            hints: ['Curvature formula has speed$^3$ in the denominator.'],
            explanation: 'When speed $= 0$, the denominator $(v)^3 = 0$, so curvature is undefined at cusps.'
          }
        ]
      }
    },
    {
      id: 'pd6-input',
      type: 'input-box' as const,
      content: '**FRQ Computation**',
      exercise: {
        question: 'For $x(t) = t^2 - 1$, $y(t) = t^3 + t$, find $d^2y/dx^2$ at $t = 1$. First: $dy/dx = (3t^2+1)/(2t)$. Differentiate and divide by $dx/dt$. Enter the answer as a fraction.',
        correctAnswer: '1/2',
        acceptableAnswers: ['1/2', '0.5'],
        hints: ['$dy/dx = (3t^2+1)/(2t) = (3t/2) + 1/(2t)$.', '$d/dt = 3/2 - 1/(2t^2)$. At $t=1$: $3/2 - 1/2 = 1$. Divide by $dx/dt = 2$.'],
        explanation: '$dy/dx = (3t^2+1)/(2t) = 3t/2 + 1/(2t)$. Differentiating: $d/dt = 3/2 - 1/(2t^2)$. At $t=1$: $3/2 - 1/2 = 1$. Divide by $dx/dt = 2(1) = 2$. So $d^2y/dx^2 = 1/2$.'
      }
    },
    {
      id: 'pd6-summary',
      type: 'text' as const,
      content: `### Workshop Recap

**AP Problem-Solving Checklist:**
1. Identify what type of problem: tangent line, concavity, speed, distance
2. Find the correct derivatives ($dy/dx$, $d^2y/dx^2$, velocity, speed)
3. Evaluate at the given parameter value
4. Interpret the result in context
5. Double-check: did you divide by $dx/dt$ for the second derivative?

> **Coming Up:** Part 7 is the **Comprehensive Review** of parametric derivatives.`
    }
  ]
};
