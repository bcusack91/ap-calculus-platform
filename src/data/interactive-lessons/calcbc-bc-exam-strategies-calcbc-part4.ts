export const calcbcExamStrategyPart4Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'es4-intro',
      type: 'text' as const,
      content: `# Time Management and Common Mistakes

**Part 4 of 7 — Avoiding Costly Errors Under Pressure**

### Time Allocation Strategy

| Section | Time | Per Question | Strategy |
|---------|------|--------------|----------|
| MC No-Calc | 60 min | 2 min | Fast; skip hard ones |
| MC Calc | 45 min | 3 min | Use calculator efficiently |
| FRQ Calc | 30 min | 15 min | Graph first, compute second |
| FRQ No-Calc | 60 min | 15 min | Show all work; answer every part |

> **AP Tip:** On FRQs, you can work on ANY question in the current section. If stuck on one, move to another and return.`
    },
    {
      id: 'es4-mistakes',
      type: 'text' as const,
      content: `### Top 10 BC-Specific Mistakes

| # | Mistake | How to avoid |
|---|---------|-------------|
| 1 | Forgetting $+C$ on indefinite integrals | Only on FRQs — MC gives specific answers |
| 2 | Wrong chain rule on parametric: $dy/dx \\neq y'(t)/x'(t)$ when using $d^2y/dx^2$ | $d^2y/dx^2 = \\frac{d}{dt}[dy/dx] \\div \\frac{dx}{dt}$ |
| 3 | Confusing convergence tests | Use the flowchart: geometric → p-series → ratio → AST |
| 4 | Wrong radius of convergence | Ratio test gives $|x - a| < R$; check endpoints separately |
| 5 | Forgetting to check endpoints | Radius ≠ interval; always test $x = a \\pm R$ |
| 6 | Speed vs. velocity | Speed $= |v|$ (scalar); velocity is signed or vector |
| 7 | Using wrong error bound | Alternating → AST bound; non-alternating → Lagrange |
| 8 | Integration by parts sign error | Use tabular method to reduce mistakes |
| 9 | Polar area: forgetting $1/2$ | $A = \\frac{1}{2}\\int r^2\\,d\\theta$ |
| 10 | Not simplifying series answers | $\\sum$ must match a known series for credit |`
    },
    {
      id: 'es4-mc',
      type: 'multiple-choice' as const,
      content: '**Error Detection**',
      exercise: {
        questions: [
          {
            question: 'A student writes $\\frac{d^2y}{dx^2} = \\frac{y\'\'(t)}{x\'\'(t)}$. This is:',
            options: ['Incorrect — the formula is $\\frac{d}{dt}[dy/dx] \\div \\frac{dx}{dt}$', 'Correct for parametric curves', 'Correct only when $t$ is time', 'Correct when $x\'(t) \\neq 0$'],
            correctAnswer: 0,
            explanation: 'The second derivative $d^2y/dx^2 \\neq y\'\'(t)/x\'\'(t)$. Correct formula: differentiate $dy/dx = y\'(t)/x\'(t)$ with respect to $t$, then divide by $x\'(t)$.'
          },
          {
            question: 'A student applies the ratio test to $\\sum (-1)^n/n$ and gets $L = 1$. They conclude the series diverges. This is:',
            options: ['Incorrect — ratio test is inconclusive when $L = 1$; AST shows convergence', 'Correct — $L = 1$ means divergence', 'Incorrect — should have used the root test', 'Correct — all alternating series diverge'],
            correctAnswer: 0,
            explanation: '$L = 1$ means the ratio test is inconclusive. The alternating series test shows $\\sum (-1)^n/n$ converges (alternating harmonic series).'
          },
          {
            question: 'On a polar area problem, a student writes $A = \\int_0^{\\pi} r^2\\,d\\theta$ instead of $A = \\frac{1}{2}\\int_0^{\\pi} r^2\\,d\\theta$. This costs:',
            options: ['Setup points — the $1/2$ is required', 'Nothing — the reader will assume they meant $1/2$', 'Only the final numerical answer point', 'All 9 points on the problem'],
            correctAnswer: 0,
            explanation: 'The $1/2$ in the polar area formula is essential. Missing it loses setup/integrand points.'
          }
        ]
      }
    },
    {
      id: 'es4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Time Management Decision Making**',
      exercise: {
        dropdowns: [
          {
            label: 'You\'ve spent 4 minutes on an MC question with no progress. Best action:',
            options: ['Mark it and move on — come back if time permits', 'Keep working — you\'re almost there', 'Guess randomly and leave', 'Skip it permanently'],
            correctAnswers: ['Mark it and move on — come back if time permits'],
            hints: ['Each MC question is worth the same. Don\'t sacrifice 2–3 easier questions for one hard one.'],
            explanation: 'One hard question isn\'t worth missing several easier ones. Mark and return with fresh eyes.'
          },
          {
            label: 'On an FRQ, you can\'t solve part (b) but can do parts (c) and (d). You should:',
            options: ['Skip (b) and do (c) and (d) — they may be independent', 'Give up on the whole question', 'Spend all remaining time on (b)', 'Write "see part (a)" for parts (c) and (d)'],
            correctAnswers: ['Skip (b) and do (c) and (d) — they may be independent'],
            hints: ['FRQ parts are often (but not always) independent.'],
            explanation: 'Parts (c) and (d) may not depend on (b). Even if they do, you can often use "the result from (b)" as a placeholder and earn method points.'
          }
        ]
      }
    },
    {
      id: 'es4-input',
      type: 'input-box' as const,
      content: '**Quick Check**',
      exercise: {
        question: 'If $x(t) = \\cos t$ and $y(t) = \\sin t$, what is $\\frac{d^2y}{dx^2}$ at $t = \\pi/4$? Use the correct parametric formula.',
        correctAnswer: '-sqrt(2)',
        acceptableAnswers: ['-sqrt(2)', '-√2', '-1.414', '-1.41'],
        hints: ['$dy/dx = \\cos t / (-\\sin t) = -\\cot t$. Then $\\frac{d}{dt}[-\\cot t] = \\csc^2 t$. Divide by $dx/dt = -\\sin t$.'],
        explanation: '$dy/dx = -\\cot t$. $\\frac{d}{dt}(-\\cot t) = \\csc^2 t$. $d^2y/dx^2 = \\csc^2 t / (-\\sin t) = -\\csc^3 t$. At $t = \\pi/4$: $-\\csc^3(\\pi/4) = -(\\sqrt{2})^3 = -2\\sqrt{2}$.'
      }
    },
    {
      id: 'es4-summary',
      type: 'text' as const,
      content: `### Time & Error Summary

- **MC:** 2 min/question (no-calc), 3 min/question (calc)
- **FRQ:** 15 min/question; skip and return if stuck
- Watch for: chain rule in parametric, $1/2$ in polar area, endpoint checks in convergence
- **Never leave a question blank** — partial credit is real

**Next: Part 5 — BC-Specific Topic Strategies**`
    }
  ]
};
