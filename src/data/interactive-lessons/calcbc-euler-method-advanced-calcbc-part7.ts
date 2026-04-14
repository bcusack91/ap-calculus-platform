export const calcbcEulerPart7Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review — Euler's Method

**Part 7 of 7 — Final Assessment**

### Complete Euler Toolkit

| Concept | Key Formula/Idea |
|---------|-----------------|
| Update rule | $y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x$ |
| Step size | $\\Delta x = (x_{\\text{target}} - x_0)/n$ |
| Overestimate | $y'' < 0$ (concave down) |
| Underestimate | $y'' > 0$ (concave up) |
| Accuracy | Smaller $\\Delta x$ → better approximation |
| Slope fields | Euler traces piecewise-linear path along slopes |

$$\\boxed{y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x}$$`
    },
    {
      id: 'euler7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Set A**',
      exercise: {
        questions: [
          {
            question: '$dy/dx = y(1-y)$, $y(0) = 0.5$, $\\Delta x = 0.2$. $y(0.2) =$',
            options: ['$0.5 + 0.25(0.2) = 0.55$', '$0.5 + 0.5(0.2) = 0.6$', '$0.5 + 0.25 = 0.75$', '$0.55 + 0.25(0.2) = 0.6$'],
            correctAnswer: 0,
            explanation: '$f(0, 0.5) = 0.5(1-0.5) = 0.25$. $y(0.2) = 0.5 + 0.25(0.2) = 0.55$.'
          },
          {
            question: 'For $dy/dx = -y^2$, $y(0) = 1$, the solution $y = 1/(1+x)$ is concave up ($y\'\' = 2/(1+x)^3 > 0$). Euler:',
            options: ['Underestimates $y$ on $[0, \\infty)$', 'Overestimates $y$', 'Is exact', 'Alternates over/under'],
            correctAnswer: 0,
            explanation: 'Concave up → tangent line is below the curve → Euler gives values below the true solution.'
          },
          {
            question: '$dy/dx = \\sqrt{x+y}$, $y(0) = 1$, $\\Delta x = 0.1$. $y(0.1) =$',
            options: ['$1 + 1(0.1) = 1.1$', '$1 + \\sqrt{0.1}(0.1) = 1.032$', '$1 + 0.1 = 1.1$', '$\\sqrt{1}(0.1) = 0.1$'],
            correctAnswer: 0,
            explanation: '$f(0, 1) = \\sqrt{0 + 1} = 1$. $y(0.1) = 1 + 1(0.1) = 1.1$.'
          }
        ]
      }
    },
    {
      id: 'euler7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review Set B — Conceptual**',
      exercise: {
        questions: [
          {
            question: 'Two students use Euler on the same ODE. Student A uses $\\Delta x = 0.1$ (10 steps), Student B uses $\\Delta x = 0.01$ (100 steps). Which approximation is more accurate?',
            options: ['Student B (smaller step size gives less error)', 'Student A (fewer steps = fewer rounding errors)', 'Both are equally accurate', 'Cannot determine without the ODE'],
            correctAnswer: 0,
            explanation: 'Smaller $\\Delta x$ → smaller truncation error. Student B is more accurate.'
          },
          {
            question: 'Euler\'s method uses the slope at the beginning of each step. Improved Euler (Heun\'s method) uses:',
            options: ['The average of slopes at the beginning and predicted end', 'The slope at the end of each step', 'The slope at the midpoint', 'A weighted average of three slopes'],
            correctAnswer: 0,
            explanation: 'Heun\'s method: predict $y^*$ using Euler, then average the slopes at $(x_n, y_n)$ and $(x_{n+1}, y^*)$. (Beyond AP scope, but good to know.)'
          }
        ]
      }
    },
    {
      id: 'euler7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Complete This Euler Table**\n\n$dy/dx = 1 - y/x$, $y(1) = 2$, $\\Delta x = 0.5$',
      exercise: {
        dropdowns: [
          {
            label: 'Step 1: $f(1, 2) = 1 - 2/1 = -1$. $y(1.5) =$',
            options: ['$2 + (-1)(0.5) = 1.5$', '$2 + (-1) = 1$', '$2 - 0.5 = 1.5$', '$2 + 1(0.5) = 2.5$'],
            correctAnswers: ['$2 + (-1)(0.5) = 1.5$'],
            hints: ['$y(1.5) = 2 + (-1)(0.5)$.'],
            explanation: '$y(1.5) = 2 - 0.5 = 1.5$.'
          },
          {
            label: 'Step 2: $f(1.5, 1.5) = 1 - 1.5/1.5 = 0$. $y(2) =$',
            options: ['$1.5 + 0(0.5) = 1.5$', '$1.5 + 0.5 = 2$', '$1.5 - 0.5 = 1$', '$0$'],
            correctAnswers: ['$1.5 + 0(0.5) = 1.5$'],
            hints: ['$\\Delta y = 0 \\cdot 0.5 = 0$. $y$ stays at $1.5$.'],
            explanation: 'Slope is 0 at $(1.5, 1.5)$, so $y(2) = 1.5$.'
          }
        ]
      }
    },
    {
      id: 'euler7-input',
      type: 'input-box' as const,
      content: '**Final Challenge**',
      exercise: {
        question: '$dy/dx = t^2$ (using $t$ instead of $x$), $y(0) = 0$, $\\Delta t = 1$. Use Euler to approximate $y(3)$ (3 steps). Enter a number.',
        correctAnswer: '5',
        acceptableAnswers: ['5', '5.0'],
        hints: ['Step 1: $f(0) = 0$, $y(1) = 0$. Step 2: $f(1) = 1$, $y(2) = 1$. Step 3: $f(2) = 4$, $y(3) = 1 + 4 = 5$.'],
        explanation: '$y(1) = 0 + 0(1) = 0$. $y(2) = 0 + 1(1) = 1$. $y(3) = 1 + 4(1) = 5$. (Exact: $\\int_0^3 t^2 dt = 9$.)'
      }
    },
    {
      id: 'euler7-summary',
      type: 'text' as const,
      content: `### Euler's Method — Complete

You've mastered:
- The Euler update formula and table-based computation
- Multi-step approximations
- Over/underestimate analysis via concavity
- Connection to slope fields and equilibria
- AP FRQ strategies and point-earning techniques

$$\\boxed{y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x \\quad | \\quad \\text{Concave up} \\Rightarrow \\text{under} \\quad | \\quad \\text{Concave down} \\Rightarrow \\text{over}}$$`
    }
  ]
};
