export const calcbcArcLengthPart6Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al6-intro',
      type: 'text' as const,
      content: `# Arc Length — Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Mixed problems covering arc length for $y = f(x)$ and for parametric curves.

### Workshop Overview

| Problem | Topic |
|---------|-------|
| 1 | Cartesian arc length (hand computation) |
| 2 | Parametric arc length by hand |
| 3 | Choosing the right form |`
    },
    {
      id: 'al6-prob1',
      type: 'text' as const,
      content: `### Problem 1 — Cartesian

Find the arc length of $y = \\frac{x^3}{3} + \\frac{1}{4x}$ from $x = 1$ to $x = 3$.

$y' = x^2 - \\frac{1}{4x^2}$

$(y')^2 = x^4 - \\frac{1}{2} + \\frac{1}{16x^4}$

$1 + (y')^2 = x^4 + \\frac{1}{2} + \\frac{1}{16x^4} = \\left(x^2 + \\frac{1}{4x^2}\\right)^2$

$$L = \\int_1^3 \\left(x^2 + \\frac{1}{4x^2}\\right)dx = \\left[\\frac{x^3}{3} - \\frac{1}{4x}\\right]_1^3 = \\left(9 - \\frac{1}{12}\\right) - \\left(\\frac{1}{3} - \\frac{1}{4}\\right) = \\frac{108 - 1}{12} - \\frac{1}{12} = \\frac{106}{12} = \\frac{53}{6}$$`
    },
    {
      id: 'al6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Questions**',
      exercise: {
        questions: [
          {
            question: 'The key step in Problem 1 was recognizing that $1 + (y\')^2$ is:',
            options: ['A perfect square', 'A difference of two squares', 'A constant multiple of $x^4$', 'Always equal to $1$'],
            correctAnswer: 0,
            explanation: 'The function was chosen so $1 + (y\')^2 = (x^2 + \\frac{1}{4x^2})^2$. This is the standard "perfect square" arc length trick: the square root cancels the square.'
          },
          {
            question: 'The curve $x = 1 + 3t^2$, $y = 4 + 2t^3$ for $0 \\le t \\le 1$ has arc length:',
            options: ['$4\\sqrt{2}$', '$4\\sqrt{2} - 2$', '$2\\sqrt{2} - 1$', '$5$'],
            correctAnswer: 1,
            explanation: '$dx/dt = 6t$ and $dy/dt = 6t^2$, so the integrand is $\\sqrt{36t^2 + 36t^4} = 6t\\sqrt{1 + t^2}$ and $L = \\left[2(1 + t^2)^{3/2}\\right]_0^1 = 4\\sqrt{2} - 2$. Skipping the lower limit gives $4\\sqrt{2}$, losing the factor $2$ from $6 \\cdot \\frac{1}{3}$ gives $2\\sqrt{2} - 1$, and $\\int_0^1 (6t + 6t^2)\\,dt = 5$ adds the rates instead of using the square root.'
          }
        ]
      }
    },
    {
      id: 'al6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Form Selection Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x = t^2$, $y = t^3$ on $-1 \\le t \\le 1$, the integrand $\\sqrt{4t^2 + 9t^4}$ simplifies to',
            options: ['$t\\sqrt{4 + 9t^2}$', '$|t|\\sqrt{4 + 9t^2}$', '$2t + 3t^2$', '$t^2\\sqrt{4 + 9t^2}$'],
            correctAnswers: ['$|t|\\sqrt{4 + 9t^2}$'],
            hints: ['$\\sqrt{t^2} = |t|$, and $t$ is negative on part of the interval.'],
            explanation: '$\\sqrt{t^2(4 + 9t^2)} = |t|\\sqrt{4 + 9t^2}$. Writing $t$ makes the integrand negative for $t < 0$, so the two halves would cancel to $0$; the correct length is $2\\int_0^1 t\\sqrt{4 + 9t^2}\\,dt$. The other choices take the root term by term or factor out the wrong power.'
          },
          {
            label: 'Perfect-square arc length problems often involve functions of the form $y = \\frac{x^n}{n} + \\frac{1}{cx^m}$ because:',
            options: ['$1 + (y\')^2$ becomes a perfect square, so the square root cancels', '$y\'$ itself is a perfect square, so the square root cancels', 'These are the only curves whose arc length integral is finite', '$(y\')^2$ is constant, so the integrand is a constant'],
            correctAnswers: ['$1 + (y\')^2$ becomes a perfect square, so the square root cancels'],
            hints: ['When $y\' = ax^k - bx^{-k}$, $(y\')^2 + 1 = (ax^k + bx^{-k})^2$ if $4ab = 1$.'],
            explanation: 'If $y\' = f - g$ with $fg = 1/4$, then $1 + (y\')^2 = f^2 - \\frac{1}{2} + g^2 + 1 = (f+g)^2$, so $\\sqrt{1 + (y\')^2} = f + g$. Example: $y = \\frac{x^3}{6} + \\frac{1}{2x}$ gives $y\' = \\frac{x^2}{2} - \\frac{1}{2x^2}$ with $fg = \\frac{1}{4}$. The function is engineered so the square root simplifies; any curve with continuous $y\'$ on a closed interval has finite arc length.'
          }
        ]
      }
    },
    {
      id: 'al6-input',
      type: 'input-box' as const,
      content: '**Workshop Computation**',
      exercise: {
        question: 'Find the arc length of $y = \\frac{x^3}{6} + \\frac{1}{2x}$ from $x = 1$ to $x = 3$. Give the exact value as a fraction.',
        correctAnswer: '14/3',
        acceptableAnswers: ['14/3', '4.667', '4.67'],
        hints: ['$y\' = \\frac{x^2}{2} - \\frac{1}{2x^2}$, so $1 + (y\')^2 = \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)^2$.', '$L = \\int_1^3 \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)dx = \\left[\\frac{x^3}{6} - \\frac{1}{2x}\\right]_1^3$.'],
        explanation: '$\\left(\\frac{27}{6} - \\frac{1}{6}\\right) - \\left(\\frac{1}{6} - \\frac{1}{2}\\right) = \\frac{26}{6} + \\frac{2}{6} = \\frac{28}{6} = \\frac{14}{3}$.'
      }
    },
    {
      id: 'al6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

- Recognize perfect-square arc length problems: $y = ax^n + bx^{-m}$
- Use the parametric formula for parametric curves, with $t$-limits
- Watch for $\\sqrt{t^2} = |t|$ when the parameter interval includes negative values

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
