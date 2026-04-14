export const calcbcLagrangePart7Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'le7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review

**Part 7 of 7 — Lagrange Error Bound Mastery**

### Complete Formula Reference

$$\\boxed{|R_n(x)| \\le \\frac{M \\cdot |x - c|^{n+1}}{(n+1)!}, \\quad M = \\max_{t \\in [c,x]} |f^{(n+1)}(t)|}$$

### Decision Flowchart

1. **Is the series alternating?**
   - Yes → Use AST bound (unless told otherwise)
   - No → Use Lagrange

2. **Is $M$ given in the problem?**
   - Yes → Use it directly
   - No → Find max of $|f^{(n+1)}|$ on the interval

3. **Plug into the formula and conclude.**

### Quick $M$ Reference

| Function | $M$ value |
|----------|-----------|
| $\\sin x, \\cos x$ | $1$ |
| $e^x$ on $[0, a]$ ($a > 0$) | $e^a$ (or use $3$ if $a \\le 1$) |
| $e^{-x}$ on $[0, a]$ | $1$ |
| $\\ln(1+x)$, $n$th remainder | $n!$ at $t = 0$ |
| Given: "$|f^{(k)}| \\le K$" | $K$ |`
    },
    {
      id: 'le7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review — Conceptual**',
      exercise: {
        questions: [
          {
            question: 'The Lagrange error bound GUARANTEES that the actual error is:',
            options: ['Less than or equal to the computed bound', 'Equal to the computed bound', 'Greater than the computed bound', 'Within 10% of the computed bound'],
            correctAnswer: 0,
            explanation: 'It is an upper bound. The actual error could be much smaller.'
          },
          {
            question: 'If you use $M = 5$ but the true max of $|f^{(n+1)}|$ is $3$, the bound is:',
            options: ['Still valid (overestimate, but correct direction)', 'Invalid (you used too large an $M$)', 'Exact', 'Undefined'],
            correctAnswer: 0,
            explanation: 'Using a larger $M$ gives a looser but still valid upper bound. You can always overestimate $M$.'
          },
          {
            question: 'For what type of function does Lagrange typically give the TIGHTEST bound?',
            options: ['Functions where $|f^{(n+1)}|$ is nearly constant on $[c, x]$', 'Oscillating functions', 'Polynomials of degree $> n$', 'Step functions'],
            correctAnswer: 0,
            explanation: 'When the $(n+1)$st derivative varies little, $M$ is close to the actual max, making the bound tight.'
          }
        ]
      }
    },
    {
      id: 'le7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review — Computation**',
      exercise: {
        questions: [
          {
            question: '$|R_7(0.2)|$ for $\\sin x$ at $c = 0$:',
            options: ['$(0.2)^8/8! = 2.56 \\times 10^{-6}/40320 \\approx 6.35 \\times 10^{-11}$', '$(0.2)^7/7!$', '$(0.2)^8/7!$', '$(0.2)^7/8!$'],
            correctAnswer: 0,
            explanation: '$M = 1$. $|R_7| \\le (0.2)^8/8! = 2.56 \\times 10^{-6}/40320 \\approx 6.35 \\times 10^{-11}$.'
          },
          {
            question: 'FRQ: $|f^{(3)}(t)| \\le 10$ on $[4, 4.5]$. $|R_2(4.5)| \\le$',
            options: ['$10(0.5)^3/3! = 10(0.125)/6 \\approx 0.2083$', '$10(4.5)^3/3!$', '$10(0.5)^2/2!$', '$3 \\cdot 10(0.5)^3$'],
            correctAnswer: 0,
            explanation: '$|R_2| \\le 10(0.5)^3/3! = 10/48 \\approx 0.2083$.'
          }
        ]
      }
    },
    {
      id: 'le7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Review — Identify the Error**',
      exercise: {
        dropdowns: [
          {
            label: 'A student writes: "$|R_4| \\le M(x-c)^5/4!$." The mistake is:',
            options: ['Denominator should be $5!$ not $4!$', 'Exponent should be $4$', 'Missing absolute value on $x - c$', 'No mistake'],
            correctAnswers: ['Denominator should be $5!$ not $4!$'],
            hints: ['$|R_n| \\le M|x-c|^{n+1}/(n+1)!$. What is $(n+1)!$ when $n = 4$?'],
            explanation: 'When $n = 4$: exponent is $n+1 = 5$ ✓, but denominator must be $(n+1)! = 5! = 120$, not $4! = 24$.'
          },
          {
            label: 'A student uses $M = \\sin(0.5)$ to bound $|R_4|$ for $\\sin x$ at $x = 0.5$. This is:',
            options: ['Wrong — $M$ should be $1$ (max of ALL derivatives, not value of $f$)', 'Correct but not optimal', 'Correct and optimal', 'Wrong — $M$ should be $\\cos(0.5)$'],
            correctAnswers: ['Wrong — $M$ should be $1$ (max of ALL derivatives, not value of $f$)'],
            hints: ['$M$ bounds $|f^{(n+1)}(t)|$, not $|f(x)|$.'],
            explanation: '$M$ is the max of the $(n+1)$st derivative on the interval, not the function value. For $\\sin$, all derivatives are bounded by $1$.'
          }
        ]
      }
    },
    {
      id: 'le7-input',
      type: 'input-box' as const,
      content: '**Review — Final Challenge**',
      exercise: {
        question: 'What minimum degree $n$ ensures $T_n(1)$ for $e^x$ (at $c = 0$, $M = 3$) is accurate within $10^{-6}$? Solve $3/( n+1)! < 10^{-6}$, i.e., $(n+1)! > 3{,}000{,}000$. Enter $n$.',
        correctAnswer: '9',
        acceptableAnswers: ['9'],
        hints: ['$8! = 40320$, $9! = 362880$, $10! = 3628800$.'],
        explanation: '$(n+1)! > 3{,}000{,}000$. $10! = 3{,}628{,}800 > 3{,}000{,}000$ ✓. $9! = 362{,}880 < 3{,}000{,}000$ ✗. So $n + 1 = 10$, $n = 9$.'
      }
    },
    {
      id: 'le7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered the Lagrange Error Bound:
- The formula and what each part means
- Finding $M$ for common functions
- Determining how many terms you need
- Lagrange vs. AST: when to use each
- AP FRQ response format for full credit

> **Key Takeaway:** The Lagrange Error Bound is one of the most tested BC topics. Master the formula, practice finding $M$, and always conclude with an explicit inequality.`
    }
  ]
};
