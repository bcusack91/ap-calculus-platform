export const calcabDiffEqPart7Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de7-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 7 of 7 — Comprehensive Assessment**

### Complete Reference

| Topic | Key Formula |
|:---:|:---:|
| Direct integration | $dy/dx = f(x) \\implies y = \\int f(x)\\,dx + C$ |
| Separation of variables | $\\frac{dy}{g(y)} = f(x)\\,dx$, integrate both sides |
| Exponential model | $dy/dt = ky \\implies y = y_0e^{kt}$ |
| Newton's cooling | $dT/dt = -k(T-T_{env}) \\implies T = T_{env}+(T_0-T_{env})e^{-kt}$ |
| Euler's method | $y_{n+1} = y_n + f(x_n,y_n)\\Delta x$ |
| Half-life | $T_h = \\ln 2/|k|$ |
| Equilibrium | $dy/dx = 0$ → constant solutions |

### Top AP Mistakes

| Mistake | Fix |
|:---:|:---:|
| Forgetting $+C$ | ALWAYS include until IC is applied |
| Not separating completely | ALL $y$'s on one side, ALL $x$'s on the other |
| Losing equilibrium solutions | Check $g(y)=0$ before dividing |
| Wrong Euler direction | Concave up = underestimate |
| Forgetting domain | Check where solution is defined |`
    },
    {
      id: 'de7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = 2xy^2$ with $y(0) = 1$.',
            options: ['$y = \\frac{1}{1-x^2}$', '$y = e^{x^2}$', '$y = \\frac{1}{1+x^2}$', '$y = (1+x^2)^2$'],
            correctAnswer: 0,
            explanation: '$dy/y^2 = 2x\\,dx$. $-1/y = x^2 + C$. $y(0) = 1$: $C = -1$. $y = 1/(1-x^2)$.'
          },
          {
            question: 'A population grows at rate $\\frac{dP}{dt} = 0.05P$. Starting at 500, when does it reach 2000?',
            options: ['$\\frac{\\ln 4}{0.05}$', '$\\frac{\\ln 2}{0.05}$', '$80$', '$20\\ln 4$'],
            correctAnswer: 0,
            explanation: '$500e^{0.05t} = 2000$. $e^{0.05t} = 4$. $t = \\ln 4/0.05$.'
          },
          {
            question: 'Using Euler\'s method: $dy/dx = y$, $y(0)=1$, $\\Delta x = 1$. Approximate $y(2)$.',
            options: ['$4$', '$e^2$', '$2$', '$3$'],
            correctAnswer: 0,
            explanation: '$y(1) = 1 + 1(1) = 2$. $y(2) = 2 + 2(1) = 4$. (Exact: $e^2 \\approx 7.39$, so Euler understimates.)'
          }
        ]
      }
    },
    {
      id: 'de7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Final Assessment — Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\frac{dy}{dx} = (y-1)(y-3)$, which equilibrium is stable?',
            options: ['$y = 1$ only', '$y = 3$ only', 'Both', 'Neither'],
            correctAnswer: 0,
            explanation: 'At $y=2$ (between equilibria): $(1)(-1) < 0$ → decreasing toward $y=1$. At $y=4$: $(3)(1) > 0$ → increasing away from $y=3$. So $y=1$ is stable, $y=3$ is unstable.'
          },
          {
            question: 'The general solution of $\\frac{dy}{dx} = \\frac{2y}{x}$ is:',
            options: ['$y = Ax^2$', '$y = Ae^{2x}$', '$y = A\\ln(x^2)$', '$y = 2x + A$'],
            correctAnswer: 0,
            explanation: '$dy/y = 2dx/x$. $\\ln|y| = 2\\ln|x| + C = \\ln(x^2) + C$. $y = Ax^2$.'
          },
          {
            question: 'If $f\'(x) = \\sin(x^2)$ and $f(0) = 3$, then $f(x) =$',
            options: ['$-\\cos(x^2) + 4$', '$3 + \\int_0^x \\sin(t^2)\\,dt$', '$\\sin(x^2) + 3$', '$\\cos(x^2) + 2$'],
            correctAnswer: 1,
            explanation: 'By FTC: $f(x) = f(0) + \\int_0^x f\'(t)\\,dt = 3 + \\int_0^x \\sin(t^2)\\,dt$. (No closed form exists.)'
          }
        ]
      }
    },
    {
      id: 'de7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final classification.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '"The rate of change of $Q$ is proportional to $Q$" translates to:',
            options: ['$dQ/dt = kt$', '$dQ/dt = kQ$', '$Q = kt$', '$dQ/dt = k/Q$'],
            correctAnswers: ['$dQ/dt = kQ$'],
            hints: ['"Rate of change" = derivative. "Proportional to $Q$" = $kQ$.'],
            explanation: '"Rate of change" → $dQ/dt$. "Proportional to $Q$" → $= kQ$.'
          },
          {
            label: 'Euler\'s method with $dy/dx = -y$, $y(0)=4$, $\\Delta x=0.5$: $y(0.5) =$',
            options: ['$2$', '$3$', '$4e^{-0.5}$', '$3.5$'],
            correctAnswers: ['$2$'],
            hints: ['$y_1 = 4 + (-4)(0.5) = 4 - 2 = 2$.'],
            explanation: '$f(0,4) = -4$. $y_1 = 4 + (-4)(0.5) = 2$.'
          },
          {
            label: '$\\frac{dy}{dx} = e^{x+y}$ can be separated as:',
            options: ['$e^{-y}\\,dy = e^x\\,dx$', 'Cannot be separated', '$dy/e^x = e^y\\,dx$', '$e^y\\,dy = e^x\\,dx$'],
            correctAnswers: ['$e^{-y}\\,dy = e^x\\,dx$'],
            hints: ['$e^{x+y} = e^x \\cdot e^y$. Divide both sides by $e^y$.'],
            explanation: '$dy/e^y = e^x\\,dx$, i.e., $e^{-y}\\,dy = e^x\\,dx$.'
          }
        ]
      }
    },
    {
      id: 'de7-input',
      type: 'input-box' as const,
      content: '**Final challenge.** ✍️',
      exercise: {
        question: 'Solve $\\frac{dy}{dx} = e^{x-y}$ with $y(0) = 0$. Find $y(\\ln 2)$.\n\n(Give an exact answer using ln notation.)',
        correctAnswer: 'ln(2)',
        acceptableAnswers: ['ln(2)', 'ln 2', 'ln2'],
        hints: [
          '$e^{x-y} = e^x \\cdot e^{-y}$. Separate: $e^y\\,dy = e^x\\,dx$.',
          '$e^y = e^x + C$. $y(0) = 0$: $1 = 1 + C$, so $C = 0$.',
          '$e^y = e^x$, so $y = x$. Therefore $y(\\ln 2) = \\ln 2$.'
        ],
        explanation: '$e^y\\,dy = e^x\\,dx$. $e^y = e^x + C$. IC: $C = 0$. So $y = x$, and $y(\\ln 2) = \\ln 2$.'
      }
    },
    {
      id: 'de7-summary',
      type: 'text' as const,
      content: `### Differential Equations — Complete! ✅

| Skill | Status |
|:---:|:---:|
| Direct integration | ✅ |
| Separation of variables | ✅ |
| Slope fields | ✅ |
| Exponential growth/decay | ✅ |
| Newton's cooling | ✅ |
| Euler's method | ✅ |
| Equilibrium & stability | ✅ |
| Particular solutions & domains | ✅ |

> **Congratulations!** You've mastered differential equations for AP Calculus AB.`
    }
  ]
};
