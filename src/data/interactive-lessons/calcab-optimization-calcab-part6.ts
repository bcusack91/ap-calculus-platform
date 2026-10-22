export const calcabOptimizationPart6Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt6-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 6 of 7 \u2014 AP-Style Workshop**

### AP FRQ Optimization Patterns

| Pattern | What They Ask | Key Steps |
|:---:|:---:|:---:|
| Geometric | "Find dimensions that maximize/minimize..." | Draw diagram, label, constrain |
| Applied | "At what rate/quantity is profit maximized?" | $P = R - C$, set $P' = 0$ |
| Justification | "Justify that your answer is a maximum" | Sign change of $f'$ at the only critical point |
| Closed interval | "Find the absolute maximum on $[a,b]$" | Candidates Test: critical points and endpoints |

### Full Worked AP Problem

> A rectangle has one side on the $x$-axis, the upper two vertices on $y = 4 - x^2$.
>
> **(a)** Express the area $A$ in terms of $x$.
>
> **(b)** Find the value of $x$ that maximizes $A$.
>
> **(c)** Justify that your answer gives a maximum.

**Solution (a):** Vertices at $(\\pm x, 0)$ and $(\\pm x, 4-x^2)$. Width $= 2x$, height $= 4-x^2$.
$$A(x) = 2x(4-x^2) = 8x - 2x^3, \\quad 0 < x < 2$$

**Solution (b):** $A'(x) = 8 - 6x^2 = 0 \\Rightarrow x^2 = 4/3 \\Rightarrow x = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$

**Solution (c):** $A'(x) = 8 - 6x^2$ is positive for $0 < x < \\frac{2\\sqrt{3}}{3}$ and negative for $\\frac{2\\sqrt{3}}{3} < x < 2$. So $A$ increases and then decreases, and $x = \\frac{2\\sqrt{3}}{3}$ is the **only** critical point on $(0, 2)$. Therefore it gives the **absolute maximum**.

(Equivalently: $A''(x) = -12x < 0$ there, so it is a local maximum, and because it is the only critical point on the interval, that local maximum is the absolute maximum.)

$$A_{\\max} = 2 \\cdot \\frac{2\\sqrt{3}}{3}\\left(4 - \\frac{4}{3}\\right) = \\frac{4\\sqrt{3}}{3} \\cdot \\frac{8}{3} = \\frac{32\\sqrt{3}}{9}$$

> **AP Tip:** The Second Derivative Test alone shows only a **local** maximum. For the absolute maximum, add "and it is the only critical point on the interval," or, on a closed interval, compare $f$ at the critical points and the endpoints (Candidates Test). Always state the conclusion in words.`
    },
    {
      id: 'opt6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Two positive numbers have product 100. Their sum is minimized when they are:',
            options: ['$10$ and $10$', '$100$ and $1$', '$50$ and $2$', '$50$ and $50$'],
            correctAnswer: 0,
            explanation: '$xy=100$, minimize $S=x+100/x$. $S\'=1-100/x^2=0$ at $x=10$. $y=10$. Differentiating $100/x$ as $-100/x$ gives $100$ and $1$, solving $x^2 = 100$ as $x = 50$ gives $50$ and $2$, and $50$ and $50$ answers the fixed-sum problem instead.'
          },
          {
            question: 'A page has 1-inch margins on all sides. Print area is 24 sq in. The page width that minimizes paper area is:',
            options: ['$2+2\\sqrt{6}$ inches', '$2\\sqrt{6}$ inches', '$1+2\\sqrt{6}$ inches', '$4+2\\sqrt{6}$ inches'],
            correctAnswer: 0,
            explanation: 'Print: $(w-2)(h-2)=24$, $h=24/(w-2)+2$. $A=wh$. Calculus gives $w - 2 = \\sqrt{24} = 2\\sqrt{6}$, so $w=2+2\\sqrt{6}$. Stopping at $2\\sqrt{6}$ gives the print width, adding only one margin gives $1+2\\sqrt{6}$, and adding the margins twice gives $4+2\\sqrt{6}$.'
          },
          {
            question: 'For a twice-differentiable $f$, which fact shows that a critical point $c$ is a local maximum?',
            options: ['$f\'\'(c) < 0$ at the critical point $c$', '$f\'(c) = 0$ at the critical point $c$', '$f\'\'(c) > 0$ at the critical point $c$', '$f(c) > 0$ at the critical point $c$'],
            correctAnswer: 0,
            explanation: 'Second Derivative Test: $f\'(c)=0$ and $f\'\'(c)<0$ implies a local maximum at $c$. $f\'(c)=0$ alone only locates a candidate, $f\'\'(c) > 0$ indicates a minimum, and the sign of $f(c)$ says nothing about extrema.'
          }
        ]
      }
    },
    {
      id: 'opt6-dropdown',
      type: 'dropdown-select' as const,
      content: '**AP steps.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'On $(0, \\infty)$, $x = c$ is the only critical point of $f$, and $f\'$ changes from $+$ to $-$ there. Then $f(c)$ is:',
            options: ['The absolute maximum on $(0, \\infty)$', 'A local maximum only; more checks are needed', 'The absolute minimum on $(0, \\infty)$', 'Impossible to classify without $f\'\'(c)$'],
            correctAnswers: ['The absolute maximum on $(0, \\infty)$'],
            hints: ['$f$ increases up to $c$ and decreases after it, and there is no other critical point.'],
            explanation: '$f$ increases on $(0, c)$ and decreases on $(c, \\infty)$, so no other point can give a larger value: $f(c)$ is the absolute maximum. The single-critical-point argument is what upgrades a local maximum to an absolute one.'
          },
          {
            label: 'To justify that a critical point $c$ on an open interval gives the **absolute** maximum, write:',
            options: ['$f\'$ goes from $+$ to $-$ at $c$, its only critical point', '$f\'\'(c) < 0$, so $f(c)$ must be the absolute maximum', '$f(c)$ is larger than $f$ at two nearby points', 'A calculator graph of $f$ peaks near $x = c$'],
            correctAnswers: ['$f\'$ goes from $+$ to $-$ at $c$, its only critical point'],
            hints: ['A local test needs one more fact to become an absolute statement.'],
            explanation: 'The sign change shows a local maximum, and "only critical point on the interval" makes it the absolute maximum. $f\'\'(c) < 0$ by itself shows only a local maximum, and sample values or a graph are not a justification.'
          },
          {
            label: 'If the domain is a closed interval $[a,b]$, you should:',
            options: ['Compare $f$ at critical points and endpoints', 'Check only the critical points inside', 'Check only the endpoints $a$ and $b$', 'Use the Second Derivative Test at each critical point'],
            correctAnswers: ['Compare $f$ at critical points and endpoints'],
            hints: ['Extreme Value Theorem.'],
            explanation: 'On a closed interval, absolute max/min could be at critical points or endpoints. Evaluate $f$ at all candidates.'
          }
        ]
      }
    },
    {
      id: 'opt6-input',
      type: 'input-box' as const,
      content: '**AP Problem.** \u270d\ufe0f',
      exercise: {
        question: 'A rectangle inscribed under $y = 9 - x^2$ (with base on the $x$-axis) has $A(x) = 2x(9-x^2)$ for $0 < x < 3$. Find the maximum area. Give an exact answer, or a decimal correct to three places.',
        correctAnswer: '12sqrt(3)',
        acceptableAnswers: ['12sqrt(3)', '12*sqrt(3)', '12√3', '20.785', '20.784'],
        hints: [
          '$A = 18x - 2x^3$. $A\' = 18 - 6x^2 = 0$.',
          '$x^2 = 3$, $x = \\sqrt{3}$.',
          '$A = 2\\sqrt{3}(9-3) = 12\\sqrt{3}$.'
        ],
        explanation: '$A\'(x) = 18 - 6x^2$ is positive for $0 < x < \\sqrt{3}$ and negative for $\\sqrt{3} < x < 3$, and $x = \\sqrt{3}$ is the only critical point, so it gives the absolute maximum: $A(\\sqrt{3}) = 2\\sqrt{3} \\cdot 6 = 12\\sqrt{3} \\approx 20.785$.'
      }
    },
    {
      id: 'opt6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs require complete justification for max/min
- State the domain of the objective function
- The Second Derivative Test shows a local extremum; add "only critical point on the interval" for the absolute one
- On closed intervals, compare all candidates (critical points + endpoints)`
    }
  ]
};
