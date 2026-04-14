export const calcbcArcLengthPart6Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al6-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area — Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Mixed problems covering all forms of arc length and surface area.

### Workshop Overview

| Problem | Topic |
|---------|-------|
| 1 | Cartesian arc length (hand computation) |
| 2 | Parametric surface area |
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
            options: ['A perfect square', 'Equal to 1', 'A constant', 'Zero'],
            correctAnswer: 0,
            explanation: 'The function was chosen so $1 + (y\')^2 = (x^2 + \\frac{1}{4x^2})^2$. This is the standard "perfect square" arc length trick.'
          },
          {
            question: 'The surface area when rotating $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ about the $x$-axis is:',
            options: ['$\\frac{\\pi}{6}(17\\sqrt{17} - 1)$', '$4\\pi$', '$8\\pi\\sqrt{2}$', '$\\frac{\\pi}{3}(17\\sqrt{17})$'],
            correctAnswer: 0,
            explanation: '$y\' = \\frac{1}{2\\sqrt{x}}$, $1 + (y\')^2 = 1 + \\frac{1}{4x} = \\frac{4x+1}{4x}$. $S = 2\\pi\\int_0^4 \\sqrt{x}\\cdot\\frac{\\sqrt{4x+1}}{2\\sqrt{x}}\\,dx = \\pi\\int_0^4\\sqrt{4x+1}\\,dx = \\frac{\\pi}{6}[(4x+1)^{3/2}]_0^4 = \\frac{\\pi}{6}(17\\sqrt{17}-1)$.'
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
            label: 'For the curve $r = 1 + \\cos\\theta$, use the _____ arc length formula.',
            options: ['Polar', 'Cartesian', 'Parametric', 'Any — all give the same integral'],
            correctAnswers: ['Polar'],
            hints: ['The curve is given in polar form.'],
            explanation: 'Use $L = \\int\\sqrt{r^2 + (r\')^2}\\,d\\theta$. Converting to Cartesian would make it much harder.'
          },
          {
            label: 'Perfect-square arc length problems always involve functions of the form $y = \\frac{x^n}{n} + \\frac{1}{cx^m}$ because:',
            options: ['$(y\')^2$ produces cross terms that cancel to give a perfect square with $+1$', 'It is a coincidence', 'The integral is always rational', 'These are the only functions with finite arc length'],
            correctAnswers: ['$(y\')^2$ produces cross terms that cancel to give a perfect square with $+1$'],
            hints: ['When $y\' = ax^k - bx^{-k}$, $(y\')^2 + 1 = (ax^k + bx^{-k})^2$ if $2ab = 1$.'],
            explanation: 'If $y\' = f - g$ with $fg = 1/2$, then $(y\')^2 + 1 = f^2 + 2fg + g^2 = (f+g)^2$. The function is engineered so the square root simplifies.'
          }
        ]
      }
    },
    {
      id: 'al6-input',
      type: 'input-box' as const,
      content: '**Workshop Computation**',
      exercise: {
        question: 'From Problem 1, what is the arc length $53/6$ as a decimal (round to 2 places)?',
        correctAnswer: '8.83',
        acceptableAnswers: ['8.83', '8.833', '53/6'],
        hints: ['$53 \\div 6 = 8.8\\overline{3}$.'],
        explanation: '$53/6 = 8.833\\ldots \\approx 8.83$.'
      }
    },
    {
      id: 'al6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

- Recognize perfect-square arc length problems: $y = ax^n + bx^{-m}$
- Choose polar form for polar curves, parametric for parametric curves
- Surface area: always $2\\pi\\int(\\text{radius})\\,ds$

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
