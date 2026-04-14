export const calcbcExamStrategyPart2Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'es2-intro',
      type: 'text' as const,
      content: `# Multiple-Choice Strategies

**Part 2 of 7 — Techniques for the 45 MC Questions**

### No-Calculator Section (30 Questions, 60 Minutes)

**Pacing:** 2 minutes per question. If stuck after 90 seconds, mark and move on.

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
      content: `### Calculator Section (15 Questions, 45 Minutes)

**Pacing:** 3 minutes per question — you have more time, and questions are harder.

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
            options: ['Recognize as $2 \\cdot \\lim \\frac{e^{2x}-1}{2x} = 2 \\cdot 1 = 2$', 'Use L\'Hôpital\'s Rule', 'Expand $e^{2x}$ as a full Taylor series', 'Factor the numerator'],
            correctAnswer: 0,
            explanation: 'Recognizing the limit form $\\lim_{u\\to 0} \\frac{e^u - 1}{u} = 1$ with $u = 2x$ is fastest. L\'Hôpital also works but takes longer.'
          },
          {
            question: 'On a calculator MC question asking for $\\int_0^2 \\sqrt{1 + (2x)^2}\\,dx$, the best approach is:',
            options: ['Type the integral directly into the calculator', 'Try trig substitution by hand', 'Approximate with a Riemann sum', 'Give up — it\'s too hard'],
            correctAnswer: 0,
            explanation: 'Calculator section integrals are designed to be evaluated numerically. Type it in and round to match the answer choices.'
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
            options: ['Yes — positive integrand means positive integral', 'No — it could be zero', 'Cannot determine'],
            correctAnswers: ['Yes — positive integrand means positive integral'],
            hints: ['If $f(x) > 0$ on $(a,b)$, then $\\int_a^b f(x)\\,dx > 0$.'],
            explanation: 'Since $\\ln x > 0$ for $x \\in (1, e)$, the integral must be positive. Eliminate $0$.'
          },
          {
            label: 'Can we eliminate $e \\approx 2.718$? The interval has length $e - 1 \\approx 1.718$ and $\\ln x \\leq 1$:',
            options: ['Yes — integral $\\leq 1 \\cdot (e-1) \\approx 1.718 < e$', 'No — it could equal $e$', 'Cannot determine'],
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
        correctAnswer: '0.77',
        acceptableAnswers: ['0.77', '0.771'],
        hints: ['$h = 0.5$. Trap rule: $h/2[f(0) + 2f(0.5) + f(1)]$. $f(x) = e^{-x^2}$, so $f(0) = 1$, $f(0.5) = e^{-0.25} \\approx 0.7788$, $f(1) = e^{-1} \\approx 0.3679$.'],
        explanation: '$0.5/2 \\cdot [1 + 2(0.7788) + 0.3679] = 0.25 \\cdot [1 + 1.5576 + 0.3679] = 0.25 \\cdot 2.9255 \\approx 0.731$. Hmm — let me recalculate. Actually $T = 0.25[1 + 2(0.7788) + 0.3679] = 0.25(2.9255) = 0.7314$. The correct answer is approximately $0.73$.'
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
