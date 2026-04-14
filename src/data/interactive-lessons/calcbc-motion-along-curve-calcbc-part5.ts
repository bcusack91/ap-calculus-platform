export const calcbcMotionPart5Data = {
  topicSlug: 'motion-along-curve-calcbc',
  sections: [
    {
      id: 'mc5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies — Parametric Motion

**Part 5 of 7 — What the AP Tests and How to Score Full Credit**

### Common AP Question Types

| Type | What they ask | What you need |
|------|-------------|---------------|
| **Velocity/Speed** | "Find the velocity vector" or "speed at $t = 2$" | $\\vec{v} = \\langle x', y' \\rangle$, speed $= |\\vec{v}|$ |
| **Distance** | "Total distance traveled on $[a,b]$" | $\\int_a^b \\sqrt{(x')^2 + (y')^2}\\,dt$ |
| **Position** | "Find position at $t = 5$ given initial position" | $x(5) = x(0) + \\int_0^5 x'\\,dt$ |
| **Tangent line** | "Equation of tangent at $t = t_0$" | Point + slope $y'/x'$ |
| **At rest** | "When is the particle at rest?" | Both $x' = 0$ AND $y' = 0$ |
| **Direction** | "Describe the motion at $t = 3$" | Signs of $x'$ and $y'$ |

> **AP Tip:** Many FRQ problems give $x'(t)$ and $y'(t)$ (not $x(t)$, $y(t)$) along with initial conditions. You must use $\\int$ + FTC.`
    },
    {
      id: 'mc5-template',
      type: 'text' as const,
      content: `### FRQ Answer Template

**"Find the total distance traveled from $t = 1$ to $t = 4$."**

> Distance $= \\int_1^4 \\sqrt{[x'(t)]^2 + [y'(t)]^2}\\,dt$
> $= \\int_1^4 \\sqrt{(\\ldots)^2 + (\\ldots)^2}\\,dt$
> $= \\text{[calculator or exact value]}$

**"Is the speed increasing or decreasing at $t = 2$?"**

> $\\vec{v}(2) = \\langle x'(2), y'(2) \\rangle$, $\\vec{a}(2) = \\langle x''(2), y''(2) \\rangle$
> $\\vec{v} \\cdot \\vec{a} = x'(2) \\cdot x''(2) + y'(2) \\cdot y''(2) = \\ldots$
> Since $\\vec{v} \\cdot \\vec{a}$ [is positive/negative], speed is [increasing/decreasing].

### Calculator Tips

- Store $x'(t)$ and $y'(t)$ in $Y_1$ and $Y_2$
- Distance: $\\texttt{fnInt(}\\sqrt{Y_1^2 + Y_2^2}, X, a, b\\texttt{)}$
- For speed at a point: evaluate $\\sqrt{Y_1(t_0)^2 + Y_2(t_0)^2}$`
    },
    {
      id: 'mc5-mc',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions**',
      exercise: {
        questions: [
          {
            question: 'At $t = 3$, $x\'(3) = -2$ and $y\'(3) = 5$. Which statement is correct?',
            options: ['The particle is moving to the left and upward', 'The particle is at rest', 'The particle is moving to the right and upward', 'The particle is moving to the left and downward'],
            correctAnswer: 0,
            explanation: '$x\' < 0$ → left. $y\' > 0$ → up.'
          },
          {
            question: 'On a calculator FRQ, you are given $x\'(t)$ and $y\'(t)$ and asked for total distance on $[0, 6]$. You set up $\\int_0^6 \\sqrt{[x\'(t)]^2 + [y\'(t)]^2}\\,dt$ and get 14.237. How should you report?',
            options: ['$14.237$ (3 decimal places is standard on AP)', '$14.24$ (round to 2)', '$14$ (round to integer)', 'Leave as integral expression'],
            correctAnswer: 0,
            explanation: 'AP standard: 3 decimal places for calculator answers. Do not round further.'
          },
          {
            question: 'A common error on AP FRQs: students compute $\\int_0^5 x\'(t)\\,dt$ and $\\int_0^5 y\'(t)\\,dt$ separately, then $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$. This gives:',
            options: ['The displacement magnitude, NOT the total distance traveled', 'The total distance traveled', 'The average speed', 'The arc length'],
            correctAnswer: 0,
            explanation: 'Integrating components separately gives displacement. Total distance requires integrating SPEED $|\\vec{v}|$.'
          }
        ]
      }
    },
    {
      id: 'mc5-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ Setup**',
      exercise: {
        dropdowns: [
          {
            label: '"Find $y(4)$ given $y(1) = 3$ and $y\'(t) = \\sin(t^2)$." The setup is:',
            options: ['$y(4) = 3 + \\int_1^4 \\sin(t^2)\\,dt$', '$y(4) = \\int_1^4 \\sin(t^2)\\,dt$', '$y(4) = 3 \\cdot \\sin(16)$', '$y(4) = 3 + \\sin(16) - \\sin(1)$'],
            correctAnswers: ['$y(4) = 3 + \\int_1^4 \\sin(t^2)\\,dt$'],
            hints: ['FTC: $y(b) = y(a) + \\int_a^b y\'(t)\\,dt$.'],
            explanation: '$y(4) = y(1) + \\int_1^4 y\'(t)\\,dt = 3 + \\int_1^4 \\sin(t^2)\\,dt$.'
          },
          {
            label: '"Is the particle speeding up at $t = 2$?" requires computing:',
            options: ['$\\vec{v}(2) \\cdot \\vec{a}(2)$ and checking its sign', 'Whether $|\\vec{v}(2)| > 0$', 'Whether $|\\vec{a}(2)| > 0$', '$|\\vec{v}(2)| - |\\vec{v}(1)|$'],
            correctAnswers: ['$\\vec{v}(2) \\cdot \\vec{a}(2)$ and checking its sign'],
            hints: ['Speed increases when $\\vec{v} \\cdot \\vec{a} > 0$.'],
            explanation: '$\\vec{v} \\cdot \\vec{a} > 0$ ↔ speeding up. $\\vec{v} \\cdot \\vec{a} < 0$ ↔ slowing down.'
          }
        ]
      }
    },
    {
      id: 'mc5-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Given $x\'(t) = 5$ and $y\'(t) = 12$ (constants), what is the speed? (This classic 5-12-13 triangle appears on AP exams.)',
        correctAnswer: '13',
        acceptableAnswers: ['13', '13.0'],
        hints: ['$\\sqrt{25 + 144}$.'],
        explanation: '$\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$.'
      }
    },
    {
      id: 'mc5-summary',
      type: 'text' as const,
      content: `### AP Motion Checklist

$$\\boxed{\\text{Read carefully: distance} \\neq \\text{displacement}}$$

1. Identify whether they want distance, displacement, position, or speed
2. Set up the correct integral or computation
3. Show the setup clearly (integral expression)
4. Use calculator for numerical evaluation (3 decimals)
5. Include units if the problem has physical context

**Next: Part 6 — Problem-Solving Workshop**`
    }
  ]
};
