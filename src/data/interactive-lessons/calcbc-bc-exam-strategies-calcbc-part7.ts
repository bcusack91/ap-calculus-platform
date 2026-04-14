export const calcbcExamStrategyPart7Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'es7-intro',
      type: 'text' as const,
      content: `# Final Exam Preparation Checklist

**Part 7 of 7 — What to Do in the Last Week**

### One-Week Study Plan

| Day | Focus |
|-----|-------|
| Day 7 | Series: 6 Maclaurin series, Taylor polynomials, error bounds |
| Day 6 | Parametric/polar: derivatives, area, arc length |
| Day 5 | Integration: techniques, improper integrals, applications |
| Day 4 | Differential equations: separable, Euler's, logistic |
| Day 3 | Full practice FRQ set (timed) |
| Day 2 | Review mistakes; redo missed problems |
| Day 1 | Light review; formulas only; rest well |

> **AP Tip:** The night before, review formulas ONLY. Do not attempt new material.`
    },
    {
      id: 'es7-formulas',
      type: 'text' as const,
      content: `### Must-Know BC Formulas

**Series:**
$$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}, \\quad \\sin x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\cos x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$$

**Parametric:** $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$, $\\quad$ Speed $= \\sqrt{(x')^2 + (y')^2}$

**Polar:** $A = \\frac{1}{2}\\int r^2\\,d\\theta$, $\\quad \\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$

**Arc Length:** $L = \\int_a^b \\sqrt{(x')^2 + (y')^2}\\,dt$

**Logistic:** $\\frac{dP}{dt} = kP(1 - P/L)$, solution: $P(t) = \\frac{L}{1 + Ae^{-kLt}}$

**Euler's Method:** $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$

**Lagrange Error:** $|R_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}$`
    },
    {
      id: 'es7-mc',
      type: 'multiple-choice' as const,
      content: '**Formula Recall Check**',
      exercise: {
        questions: [
          {
            question: 'The polar area formula includes a factor of:',
            options: ['$1/2$', '$2$', '$\\pi$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$. The $1/2$ is the most commonly forgotten element.'
          },
          {
            question: 'In Euler\'s method with step size $h$, each step computes:',
            options: ['$y_{new} = y_{old} + h \\cdot f(x_{old}, y_{old})$', '$y_{new} = y_{old} \\cdot f(x_{old}, y_{old})$', '$y_{new} = y_{old} + f(x_{old}, y_{old})$', '$y_{new} = h \\cdot f(x_{old}, y_{old})$'],
            correctAnswer: 0,
            explanation: 'Euler\'s method: $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$. The slope times step size gives the change.'
          },
          {
            question: 'The carrying capacity in a logistic model $dP/dt = 0.5P(1 - P/200)$ is:',
            options: ['$200$', '$0.5$', '$100$', '$400$'],
            correctAnswer: 0,
            explanation: 'In $dP/dt = kP(1 - P/L)$, $L$ is the carrying capacity. Here $L = 200$.'
          }
        ]
      }
    },
    {
      id: 'es7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Exam Day Checklist**',
      exercise: {
        dropdowns: [
          {
            label: 'What to bring to the exam (choose the required item):',
            options: ['Two graphing calculators with fresh batteries', 'A formula sheet (not allowed)', 'Scratch paper (provided by proctor)', 'Your phone (must be off and stored)'],
            correctAnswers: ['Two graphing calculators with fresh batteries'],
            hints: ['Bring a backup calculator in case one fails.'],
            explanation: 'Bring two approved graphing calculators. No formula sheets are allowed. Scratch paper and answer booklets are provided.'
          },
          {
            label: 'During the no-calculator sections, you should:',
            options: ['Work algebraically and show all steps', 'Request to use your calculator briefly', 'Estimate all answers numerically', 'Skip questions that seem to need a calculator'],
            correctAnswers: ['Work algebraically and show all steps'],
            hints: ['No-calculator questions are designed to be solvable by hand.'],
            explanation: 'All no-calculator questions can be solved with algebra, calculus techniques, and known formulas. Show clear work.'
          }
        ]
      }
    },
    {
      id: 'es7-input',
      type: 'input-box' as const,
      content: '**Final Formula Check**',
      exercise: {
        question: 'The Maclaurin series for $1/(1-x)$ converges for $|x| < R$. What is $R$?',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['Geometric series with ratio $x$.'],
        explanation: '$1/(1-x) = \\sum x^n$ converges when $|x| < 1$. Radius of convergence $R = 1$.'
      }
    },
    {
      id: 'es7-summary',
      type: 'text' as const,
      content: `### You're Ready!

**Final reminders:**
1. ✓ Always show work on FRQs
2. ✓ Always guess on MC — no penalty
3. ✓ Series and parametric/polar: guaranteed BC FRQ topics
4. ✓ Know the 6 Maclaurin series and their intervals
5. ✓ $1/2$ in polar area, proper $d^2y/dx^2$ formula
6. ✓ Pace yourself: don't get stuck on one problem
7. ✓ Sleep well the night before

**BC Exam Strategies topic complete!**`
    }
  ]
};
