export const calcbcExamStrategyPart2Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'es2-intro',
      type: 'text' as const,
      content: `# Multiple-Choice Strategies

**Part 2 of 7 — Techniques for the 42 MC Questions**

### No-Calculator Section (29 Questions, 62 Minutes)

**Pacing:** about 2 minutes per question (62 ÷ 29 ≈ 2.1). If stuck after 90 seconds, mark and move on.

**Common question types:**

| Type | Example |
|------|---------|
| Derivative evaluation | Find $f'(2)$ given $f(x) = \\ldots$ |
| Integral computation | $\\int_0^\\pi \\sin^2 x\\,dx = $ |
| Series convergence | Which series converges? |
| Limit evaluation | $\\lim_{x\\to 0} \\frac{\\sin 3x}{x} = $ |
| Slope field matching | Match DE to slope field |

> **AP Tip:** On the no-calculator section, most answers will be "nice" numbers or expressions. If you get $\\sqrt{17.3}$, recheck your work.`
    },
    {
      id: 'es2-calc',
      type: 'text' as const,
      content: `### Calculator Section (13 Questions, 38 Minutes)

**Pacing:** about 3 minutes per question (38 ÷ 13 ≈ 2.9) — you have more time, and questions are harder.

**When to use your calculator:**

1. **Graph to find intersections** — when equations can't be solved algebraically
2. **Evaluate definite integrals** — $\\int_0^3 e^{\\sin x}\\,dx$ (no antiderivative)
3. **Find numerical derivatives** — $f'(2.7)$ for complex $f$
4. **Solve equations** — zeros of $f'(x) = 0$ when factoring fails

**When NOT to use your calculator:**
- Simple algebra or arithmetic
- Basic derivatives/integrals you should know
- Problems that ask "which expression equals..."

> **AP Tip:** Store important functions in Y1, Y2, etc. Use TABLE and CALC features to check answers.`
    },
    {
      id: 'es2-mc',
      type: 'multiple-choice' as const,
      content: '**Strategy Practice**',
      exercise: {
        questions: [
          {
            question: 'On a no-calculator MC question, the fastest way to evaluate $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$ is:',
            options: ['Rewrite as $2 \\cdot \\frac{e^{2x}-1}{2x} \\to 2$', 'Apply the quotient rule to $\\frac{e^{2x}-1}{x}$, then let $x \\to 0$', 'Expand $e^{2x}$ as a full Taylor series and sum every term', 'Substitute $x = 0$ directly, since both parts are continuous'],
            correctAnswer: 0,
            explanation: 'Recognizing the limit form $\\lim_{u\\to 0} \\frac{e^u - 1}{u} = 1$ with $u = 2x$ is fastest: the limit is $2 \\cdot 1 = 2$. Substituting $x = 0$ gives the indeterminate form $0/0$, differentiating the whole quotient is not L\'Hôpital\'s Rule, and summing a full series is far slower. (L\'Hôpital\'s Rule also works but takes longer.)'
          },
          {
            question: 'On a calculator MC question asking for $\\int_0^2 \\sqrt{1 + (2x)^2}\\,dx$, the best approach is:',
            options: ['Enter the integral into the calculator', 'Find an antiderivative using $u = 1 + 4x^2$', 'Estimate it with a left Riemann sum of 4 rectangles', 'Simplify the integrand to $1 + 2x$ and integrate by hand'],
            correctAnswer: 0,
            explanation: 'Calculator section integrals are designed to be evaluated numerically. Type it in and round to match the answer choices. The substitution $u = 1 + 4x^2$ needs a factor of $x$ that the integrand does not have, a 4-rectangle Riemann sum is too rough to match the choices, and $\\sqrt{1 + (2x)^2} \\neq 1 + 2x$.'
          },
          {
            question: 'Process of elimination is most useful when:',
            options: ['You can rule out 2-3 options using quick checks', 'You have no idea about the topic', 'Every answer looks equally possible', 'The question is about definitions'],
            correctAnswer: 0,
            explanation: 'Quick checks like plugging in $x = 0$, checking dimensions, or testing boundary cases can eliminate wrong answers efficiently.'
          }
        ]
      }
    },
    {
      id: 'es2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Elimination Strategy Practice**\n\nFor $\\int_1^e \\ln x\\,dx$, the answer is one of: $0$, $1$, $e-1$, $e$.',
      exercise: {
        dropdowns: [
          {
            label: 'Can we eliminate $0$? Since $\\ln x > 0$ on $(1,e)$:',
            options: ['Yes — a positive integrand gives a positive integral', 'No — a positive integrand can still integrate to zero', 'No — $\\ln 1 = 0$, so the integral starts at $0$'],
            correctAnswers: ['Yes — a positive integrand gives a positive integral'],
            hints: ['If $f(x) > 0$ on $(a,b)$, then $\\int_a^b f(x)\\,dx > 0$.'],
            explanation: 'Since $\\ln x > 0$ for $x \\in (1, e)$, the integral must be positive. Eliminate $0$.'
          },
          {
            label: 'Can we eliminate $e \\approx 2.718$? The interval has length $e - 1 \\approx 1.718$ and $\\ln x \\leq 1$:',
            options: ['Yes — integral $\\leq 1 \\cdot (e-1) \\approx 1.718 < e$', 'No — the integral could equal $e$ exactly', 'No — the bound needs the exact antiderivative'],
            correctAnswers: ['Yes — integral $\\leq 1 \\cdot (e-1) \\approx 1.718 < e$'],
            hints: ['Bound: $\\int_1^e \\ln x\\,dx \\leq \\max(\\ln x) \\cdot (e - 1) = 1 \\cdot (e-1)$.'],
            explanation: 'Since $\\ln x \\leq 1$ on $[1,e]$, the integral $\\leq e - 1 \\approx 1.72 < e \\approx 2.72$. Eliminate $e$. The answer is $1$ (by integration by parts).'
          }
        ]
      }
    },
    {
      id: 'es2-input',
      type: 'input-box' as const,
      content: '**Quick Estimation**',
      exercise: {
        question: 'Estimate $\\int_0^1 e^{-x^2}\\,dx$ using the trapezoidal rule with $n=2$ (to 2 decimal places).',
        correctAnswer: '0.73',
        acceptableAnswers: ['0.73', '0.731'],
        hints: ['$h = 0.5$. Trap rule: $h/2[f(0) + 2f(0.5) + f(1)]$. $f(x) = e^{-x^2}$, so $f(0) = 1$, $f(0.5) = e^{-0.25} \\approx 0.7788$, $f(1) = e^{-1} \\approx 0.3679$.'],
        explanation: '$T = \\frac{0.5}{2}[f(0) + 2f(0.5) + f(1)] = 0.25[1 + 2(0.7788) + 0.3679] = 0.25(2.9255) \\approx 0.7314$, so the answer is approximately $0.73$.'
      }
    },
    {
      id: 'es2-summary',
      type: 'text' as const,
      content: `### MC Strategy Checklist

1. ✓ Pace yourself: 2 min (no-calc), 3 min (calc)
2. ✓ Mark and move — don't get stuck on one problem
3. ✓ Use process of elimination before computing
4. ✓ Check answers with quick substitutions
5. ✓ On calculator section: graph, evaluate, solve numerically
6. ✓ "Nice" answers in no-calc; decimal answers in calc

**Next: Part 3 — Free-Response Strategies**`
    }
  ]
};
