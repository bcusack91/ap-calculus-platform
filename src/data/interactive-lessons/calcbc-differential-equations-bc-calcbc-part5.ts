export const calcbcDiffEqPart5Data = {
  topicSlug: 'differential-equations-bc-calcbc',
  sections: [
    {
      id: 'de5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies — Differential Equations

**Part 5 of 7 — Maximizing Your Score**

### DE Question Types on the BC Exam

| Type | Frequency | What to do |
|------|-----------|-----------|
| Solve a separable DE | Very common | Separate → integrate → apply IC |
| Slope field matching | Common (MC) | Test specific points |
| Verify a solution | Common (FRQ part) | Plug in, compare sides |
| Set up a DE from description | Common (FRQ) | Translate "proportional to" etc. |
| Euler's method | Occasional | Step-by-step table |
| Equilibrium/stability | Occasional | Sign analysis of $y'$ |

> **AP Tip:** DE problems appear on nearly every AP Calculus BC exam. At least one FRQ usually involves solving a separable DE with initial conditions.`
    },
    {
      id: 'de5-frq',
      type: 'text' as const,
      content: `### FRQ Answer Templates

**"Solve the initial value problem $dy/dx = f(x,y)$, $y(a) = b$."**

> $\\frac{dy}{h(y)} = g(x)\\,dx$ [show separation]
> $\\int \\frac{dy}{h(y)} = \\int g(x)\\,dx$ [show integrals]
> [result with $+C$]
> Apply $y(a) = b$: [find $C$]
> Therefore $y = \\ldots$ [particular solution]

**"Describe the behavior of $y$ as $t \\to \\infty$."**

> As $t \\to \\infty$, $e^{kt} \\to 0$ (if $k < 0$), so $y \\to \\ldots$
> OR: The equilibrium solution is $y = L$, and since $y' > 0$ for $y < L$, $y$ approaches $L$ from below.

### Common Mistakes to Avoid

1. Forgetting $+C$ before applying IC (then it's hard to solve)
2. Forgetting absolute value in $\\ln|y|$
3. Incorrect separation: $y' = x + y$ is NOT separable
4. Dividing by $y$ without noting $y = 0$ is a separate solution
5. Not checking domain of the solution`
    },
    {
      id: 'de5-mc',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions**',
      exercise: {
        questions: [
          {
            question: 'When solving $\\frac{dy}{dx} = \\frac{y}{x}$ by separation, the general solution is:',
            options: ['$y = Cx$ (since $\\ln|y| = \\ln|x| + C_1$ gives $y = e^{C_1} \\cdot x$)', '$y = x + C$', '$y = Ce^x$', '$y = x^2/2 + C$'],
            correctAnswer: 0,
            explanation: '$dy/y = dx/x \\Rightarrow \\ln|y| = \\ln|x| + C_1 \\Rightarrow y = Ax$ where $A = \\pm e^{C_1}$.'
          },
          {
            question: 'On an FRQ, after finding $\\ln|y| = 3x + C$ and $y(0) = 5$, the correct next step is:',
            options: ['$\\ln 5 = 0 + C$, so $C = \\ln 5$, giving $\\ln|y| = 3x + \\ln 5$, hence $y = 5e^{3x}$', 'Take $e$ of both sides first: $y = e^{3x+C}$, then plug in', 'Both approaches work, but showing the $C$ step earns more credit', 'Skip $C$ and write $y = 5e^{3x}$ directly'],
            correctAnswer: 2,
            explanation: 'Both are mathematically valid. Showing the $+C$ step and substituting the IC demonstrates complete understanding and earns full AP credit.'
          },
          {
            question: 'A slope field has horizontal segments along $y = 2$. The DE could be:',
            options: ['$y\' = y - 2$', '$y\' = x - 2$', '$y\' = 2y$', '$y\' = 2 - x$'],
            correctAnswer: 0,
            explanation: '$y\' = y - 2 = 0$ when $y = 2$. Horizontal segments along $y = 2$.'
          }
        ]
      }
    },
    {
      id: 'de5-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ Scoring Strategy**',
      exercise: {
        dropdowns: [
          {
            label: 'When solving $y\' = 2y$ with $y(0) = 3$, the FIRST line of your solution should be:',
            options: ['$\\frac{dy}{y} = 2\\,dx$ (show separation)', '$y = Ce^{2x}$', '$y = 3e^{2x}$', '$\\int dy = \\int 2y\\,dx$'],
            correctAnswers: ['$\\frac{dy}{y} = 2\\,dx$ (show separation)'],
            hints: ['AP readers want to see the separation step.'],
            explanation: 'Showing separation earns the first point. Jumping to the answer may lose setup points.'
          },
          {
            label: 'After integrating to get $\\ln|y| = 2x + C$, the IC gives:',
            options: ['$\\ln 3 = C$', '$C = 3$', '$C = e^3$', '$C = 2(0) = 0$'],
            correctAnswers: ['$\\ln 3 = C$'],
            hints: ['$\\ln|y(0)| = 2(0) + C$.'],
            explanation: '$\\ln 3 = 0 + C \\Rightarrow C = \\ln 3$.'
          }
        ]
      }
    },
    {
      id: 'de5-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'For $y\' = -0.5y$ with $y(0) = 100$, what value does $y$ approach as $t \\to \\infty$?',
        correctAnswer: '0',
        acceptableAnswers: ['0', '0.0'],
        hints: ['$y = 100e^{-0.5t}$. As $t \\to \\infty$, $e^{-0.5t} \\to 0$.'],
        explanation: '$y = 100e^{-0.5t} \\to 0$. The quantity decays to zero.'
      }
    },
    {
      id: 'de5-summary',
      type: 'text' as const,
      content: `### AP Exam Checklist for DEs

$$\\boxed{\\text{Separate} \\to \\text{Integrate (with }+C\\text{)} \\to \\text{Apply IC} \\to \\text{Solve for }y}$$

1. ✓ Show separation clearly
2. ✓ Include $+C$ on one side
3. ✓ Apply initial condition to find $C$
4. ✓ Write the particular solution
5. ✓ Check: does your solution satisfy both the DE and the IC?

**Next: Part 6 — Problem-Solving Workshop**`
    }
  ]
};
