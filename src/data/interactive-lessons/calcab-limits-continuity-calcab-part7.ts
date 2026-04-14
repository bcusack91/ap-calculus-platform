export const calcabLimitsPart7Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit7-intro',
      type: 'text' as const,
      content: `# ∫ Review & AP Exam Applications

**Part 7 of 7 — Putting It All Together**

---

### Complete Limits & Continuity Toolkit

| Tool | When to Use | Key Formula |
|------|------------|------------|
| Direct Substitution | Always try first | Plug in $x = c$ |
| Factoring | $\\frac{0}{0}$ with polynomials | Cancel common factor |
| Conjugate | $\\frac{0}{0}$ with radicals | Multiply by $\\frac{\\sqrt{\\ldots}+k}{\\sqrt{\\ldots}+k}$ |
| Trig Limits | $\\frac{\\sin(ax)}{bx}$ forms | $\\frac{\\sin u}{u} \\to 1$ |
| Degree Comparison | $x \\to \\pm\\infty$ | Higher degree wins |
| One-Sided Limits | Piecewise, $|x|$, asymptotes | Check $c^-$ and $c^+$ |
| Squeeze Theorem | Oscillating functions | $g \\leq f \\leq h$ and $g,h \\to L$ |
| Continuity Check | 3 conditions | $f(c)$ defined, limit exists, they match |
| IVT | Existence of roots | Continuous + sign change |

> 🔑 **Key Principle:** Mastering limits is the foundation for ALL of calculus — derivatives, integrals, and series all rely on limits.`
    },
    {
      id: 'limit7-connections',
      type: 'text' as const,
      content: `
## 📖 How Limits Connect to the Rest of AP Calculus

### Derivatives Are Limits
$$\\boxed{f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}}$$

Every derivative you compute is secretly a limit! The skills from Parts 1–6 (especially factoring, rationalizing, and trig limits) are essential for computing derivatives from the definition.

### Integrals Are Limits
$$\\boxed{\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i)\\Delta x}$$

The definite integral is the limit of Riemann sums as the number of rectangles approaches infinity.

### L'Hôpital's Rule (Preview)

Later in the course, you'll learn a shortcut for $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$ forms:

$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)} \\quad \\text{(if conditions are met)}$$

For now, the algebraic techniques from this unit are the foundation.

> **AP Tip:** The AP exam tests limits in multiple-choice (computation), free-response (justification with IVT/continuity), and implicitly through derivative and integral problems. Expect 3–5 direct limit questions plus many indirect ones.`
    },
    {
      id: 'limit7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Comprehensive Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}$.',
            options: ['$\\frac{3}{2}$', '$1$', '$0$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \\frac{x^2+x+1}{x+1}$. At $x=1$: $\\frac{3}{2}$.'
          },
          {
            question: 'The function $f(x) = \\frac{|x-2|}{x-2}$ at $x = 2$ has what type of discontinuity?',
            options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'],
            correctAnswer: 1,
            explanation: 'For $x > 2$: $f(x) = 1$. For $x < 2$: $f(x) = -1$. The one-sided limits differ ($1 \\neq -1$), so this is a jump discontinuity.'
          },
          {
            question: 'If $f(x) = \\begin{cases} \\frac{x^2-4}{x-2} & x \\neq 2 \\\\ k & x = 2 \\end{cases}$ is continuous at $x = 2$, what is $k$?',
            options: ['$0$', '$2$', '$4$', '$8$'],
            correctAnswer: 2,
            explanation: '$\\lim_{x \\to 2} \\frac{x^2-4}{x-2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2}(x+2) = 4$. For continuity: $k = f(2) = \\lim = 4$.'
          }
        ]
      }
    },
    {
      id: 'limit7-frq-practice',
      type: 'text' as const,
      content: `
## 📌 Free-Response Practice: IVT Justification

**Problem (AP Style):** Let $f$ be the function defined by $f(x) = x^3 - 4x + 2$.

**(a)** Show that $f$ has at least one zero in the interval $[-3, 0]$.

**Model Solution:**

> $f$ is a polynomial, so $f$ is continuous on $[-3, 0]$.
> 
> $f(-3) = (-3)^3 - 4(-3) + 2 = -27 + 12 + 2 = -13$
> 
> $f(0) = 0 - 0 + 2 = 2$
> 
> Since $f(-3) = -13 < 0 < 2 = f(0)$, and $f$ is continuous on $[-3,0]$, by the Intermediate Value Theorem, there exists $c \\in (-3, 0)$ such that $f(c) = 0$.

---

### Grading Rubric (How AP Readers Score This)

| Point | Requirement |
|-------|------------|
| 1 | States $f$ is continuous (with reason) |
| 1 | Computes $f(a)$ and $f(b)$ correctly |
| 1 | Notes $0$ is between $f(a)$ and $f(b)$, invokes IVT, states conclusion |

> **AP Tip:** Forgetting to state "$f$ is continuous" costs you a point every time. It's the most common mistake on IVT problems.`
    },
    {
      id: 'limit7-quiz2',
      type: 'multiple-choice' as const,
      content: `**AP Exam Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The equation $\\cos(x) = x$ has a solution in which interval?',
            options: ['$[0, \\pi/2]$', '$[\\pi, 2\\pi]$', '$[-\\pi, -\\pi/2]$', 'No solution exists'],
            correctAnswer: 0,
            explanation: 'Let $g(x) = \\cos(x) - x$. Then $g(0) = 1 > 0$ and $g(\\pi/2) = 0 - \\pi/2 < 0$. Since $g$ is continuous and changes sign on $[0, \\pi/2]$, by IVT there exists a solution.'
          },
          {
            question: 'Which statement about $f(x) = \\frac{x^2-1}{|x-1|}$ at $x = 1$ is correct?',
            options: [
              '$f$ is continuous at $x=1$',
              '$f$ has a removable discontinuity at $x=1$',
              '$f$ has a jump discontinuity at $x=1$',
              '$f$ has an infinite discontinuity at $x=1$'
            ],
            correctAnswer: 2,
            explanation: 'For $x > 1$: $f = \\frac{(x-1)(x+1)}{x-1} = x+1 \\to 2$. For $x < 1$: $f = \\frac{(x-1)(x+1)}{-(x-1)} = -(x+1) \\to -2$. Since $2 \\neq -2$, jump discontinuity.'
          }
        ]
      }
    },
    {
      id: 'limit7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Final Review: Name That Technique** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 2} \\frac{x^2-5x+6}{x-2}$', options: ['Factor', 'Conjugate', 'Squeeze', 'Degree comparison'] },
          { label: '$\\lim_{x \\to 0} x^2\\cos(1/x)$', options: ['Factor', 'Conjugate', 'Squeeze', 'Degree comparison'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{3x^2+1}{5x^2-2}$', options: ['Factor', 'Conjugate', 'Squeeze', 'Degree comparison'] },
          { label: '$\\lim_{x \\to 1} \\frac{\\sqrt{x}-1}{x-1}$', options: ['Factor', 'Conjugate', 'Squeeze', 'Degree comparison'] }
        ],
        correctAnswers: ['Factor', 'Squeeze', 'Degree comparison', 'Conjugate'],
        hint1: '$x^2-5x+6 = (x-2)(x-3)$.',
        hint2: '$-x^2 \\leq x^2\\cos(1/x) \\leq x^2$ and both bounds $\\to 0$.',
        hint3: 'Same degree on top and bottom.',
        explanation: 'Factor $\\to x-3 = -1$. Squeeze between $-x^2$ and $x^2 \\to 0$. Degree comparison $\\to 3/5$. Conjugate $\\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{(x-1)(\\sqrt{x}+1)} = \\frac{1}{\\sqrt{x}+1} \\to \\frac{1}{2}$.'
      }
    },
    {
      id: 'limit7-input1',
      type: 'input-box' as const,
      content: `**Compute the Limit** ✍️`,
      exercise: {
        question: 'Evaluate $\\lim_{x \\to 2} \\frac{x^2-5x+6}{x-2}$.',
        correctAnswer: '-1',
        acceptableAnswers: ['-1'],
        hint1: 'Factor the numerator: $x^2-5x+6 = (x-2)(x-3)$.',
        hint2: 'After canceling $(x-2)$: $\\lim_{x \\to 2}(x-3) = ?$',
        explanation: '$\\frac{(x-2)(x-3)}{x-2} = x - 3$. At $x = 2$: $2 - 3 = -1$.'
      }
    },
    {
      id: 'limit7-input2',
      type: 'input-box' as const,
      content: `**One More Challenge** ✍️`,
      exercise: {
        question: 'Let $f(x) = \\begin{cases} ax + 1 & x < 2 \\\\ x^2 - 1 & x \\geq 2 \\end{cases}$. Find $a$ so that $f$ is continuous at $x = 2$.',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hint1: 'For continuity: $\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x) = f(2)$.',
        hint2: '$f(2) = 4-1 = 3$. Set $\\lim_{x \\to 2^-} (ax+1) = 2a+1 = 3$.',
        explanation: '$f(2) = 2^2-1 = 3$. $\\lim_{x \\to 2^-}(ax+1) = 2a+1$. For continuity: $2a+1 = 3 \\Rightarrow a = 1$.'
      }
    }
  ]
}
