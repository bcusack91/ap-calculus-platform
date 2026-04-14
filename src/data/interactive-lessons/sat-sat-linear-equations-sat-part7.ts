export const satLinearEquationsPart7Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le7-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 7 of 7 — SAT Mixed Practice & Review**

### Quick Reference

| Concept | Formula/Rule |
|---------|-------------|
| Slope-intercept | $y = mx + b$ |
| Standard form | $Ax + By = C$, slope $= -A/B$ |
| Point-slope | $y - y_1 = m(x - x_1)$ |
| Slope formula | $m = \\frac{y_2 - y_1}{x_2 - x_1}$ |
| Parallel | Same slope |
| Perpendicular | $m_1 \\cdot m_2 = -1$ |
| System: no solution | Same slope, different intercepts |
| System: ∞ solutions | Identical equations |
| Absolute value | $|expr| = c$ → two cases |
| Literal equations | Isolate — treat others as constants |

### Common SAT Mistakes to Avoid

1. **Forgetting to flip** the inequality sign when dividing by a negative
2. **Misreading** what the question asks — "What is $x + y$?" vs "What is $x$?"
3. **Not checking** answer choices by plugging back in
4. **Rushing** standard form → slope conversion (slope is $-A/B$, not $A/B$)
5. **Absolute value = negative** → instant "no solution"

### Time-Saving Strategies

- **Back-solve from answer choices** — plug in each option when algebra is messy
- **Pick smart numbers** — if the problem has fractions, choose a common denominator
- **Look for shortcuts** — many system problems can be solved by adding/subtracting the equations directly
- **Estimate first** — eliminate obviously wrong answers before computing`
    },
    {
      id: 'le7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review — Round 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $3(x - 2) = 2x + 7$, what is the value of $5x$?',
            options: ['$65$', '$13$', '$15$', '$60$'],
            correctAnswer: 0,
            explanation: '$3x - 6 = 2x + 7$ → $x = 13$. The question asks for $5x = 5(13) = 65$. Always read what the question asks for!'
          },
          {
            question: 'Line $p$ has equation $y = -2x + 5$. Line $q$ is perpendicular to $p$ and passes through $(4, 1)$. What is the y-intercept of $q$?',
            options: ['$-1$', '$1$', '$3$', '$-3$'],
            correctAnswer: 0,
            explanation: 'Perpendicular slope: $1/2$. Point-slope: $y - 1 = \\frac{1}{2}(x - 4)$ → $y = \\frac{1}{2}x - 1$. The y-intercept is $-1$.'
          },
          {
            question: 'For what value of $a$ does $ax + 6y = 12$ and $2x + 3y = 5$ have no solution?',
            options: ['$4$', '$2$', '$6$', '$3$'],
            correctAnswer: 0,
            explanation: 'No solution = parallel lines = same slope. First equation slope: $-a/6$. Second: $-2/3$. Set equal: $-a/6 = -2/3$ → $a = 4$. Check y-intercepts differ: $12/6 = 2 \\neq 5/3$. ✓'
          }
        ]
      }
    },
    {
      id: 'le7-text2',
      type: 'text' as const,
      content: `### SAT-Style Hard Problems: Worked Solutions

### Worked Example 1

**The function $f(x) = 3x + k$ passes through the point where $g(x) = -x + 8$ crosses the x-axis. Find $k$.**

| Step | Work |
|------|------|
| Find x-intercept of $g$ | $0 = -x + 8$ → $x = 8$ → point $(8, 0)$ |
| Plug into $f$ | $0 = 3(8) + k$ → $k = -24$ |

### Worked Example 2

**In the $xy$-plane, line $\\ell$ passes through the origin and is perpendicular to $5x + 2y = 10$. Which point is on line $\\ell$?**

| Step | Work |
|------|------|
| Slope of given line | $y = -\\frac{5}{2}x + 5$ → $m = -5/2$ |
| Perpendicular slope | $m_{\\perp} = 2/5$ |
| Line through origin | $y = \\frac{2}{5}x$ |
| Check points | Any point $(a, 2a/5)$ works, e.g., $(5, 2)$ |

### Worked Example 3

**If $|2x - 1| + 3 = 10$, what is the product of the possible values of $x$?**

| Step | Work |
|------|------|
| Isolate absolute value | $|2x - 1| = 7$ |
| Case 1 | $2x - 1 = 7$ → $x = 4$ |
| Case 2 | $2x - 1 = -7$ → $x = -3$ |
| Product | $4 \\times (-3) = -12$ |`
    },
    {
      id: 'le7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Mixed Review — Round 2 (Hard)** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $\\frac{x}{3} + \\frac{y}{4} = 1$ and $x = 6$, what is $y$?',
            options: ['$-4$', '$4$', '$-2$', '$8$'],
            correctAnswer: 0,
            explanation: '$6/3 + y/4 = 1$ → $2 + y/4 = 1$ → $y/4 = -1$ → $y = -4$.'
          },
          {
            question: 'The lines $y = ax + 5$ and $y = (a+2)x - 3$ are perpendicular. What is $a$?',
            options: ['$-1 + \\sqrt{2}$, or $-1 - \\sqrt{2}$', '$1$', '$-1$', '$0$ or $-2$'],
            correctAnswer: 2,
            explanation: 'Perpendicular: $a(a+2) = -1$ → $a^2 + 2a + 1 = 0$ → $(a+1)^2 = 0$ → $a = -1$. Check: slopes are $-1$ and $1$, product $= -1$ ✓.'
          },
          {
            question: 'A system of two linear equations in $x$ and $y$ has the solution $(3, -2)$. If one equation is $x + 2y = -1$, which could be the other?',
            options: ['$2x - y = 8$', '$x + 2y = 5$', '$3x + 6y = -3$', '$x - y = 1$'],
            correctAnswer: 0,
            explanation: 'Plug $(3, -2)$ into each. $2(3) - (-2) = 8$ ✓. Option C is a multiple of the first equation (infinite solutions, not unique). D: $3 - (-2) = 5 \\neq 1$.'
          },
          {
            question: 'If $2|x - 3| - 4 = 6$, what is the sum of all possible values of $x$?',
            options: ['$6$', '$8$', '$0$', '$-6$'],
            correctAnswer: 0,
            explanation: '$2|x-3| = 10$ → $|x-3| = 5$. Cases: $x - 3 = 5$ → $x = 8$, or $x - 3 = -5$ → $x = -2$. Sum: $8 + (-2) = 6$.'
          }
        ]
      }
    },
    {
      id: 'le7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Speed Round: What Strategy?** 🔍\n\nFor each problem type, select the fastest solving approach.',
      exercise: {
        dropdowns: [
          { label: '"What is the slope of $5x - 3y = 15$?"', options: ['Isolate y (slope-intercept)', 'Plug in two points', 'Use $-A/B$ shortcut', 'Graph it'] },
          { label: '"If $x + y = 9$ and $x - y = 3$, find $x$."', options: ['Substitution', 'Elimination (add)', 'Graphing', 'Back-solve'] },
          { label: '"Find the line through $(2,5)$ with slope $-3$."', options: ['Standard form', 'Point-slope form', 'Two-point formula', 'Elimination'] },
          { label: '"Which point satisfies $y > 2x + 1$?"', options: ['Solve algebraically', 'Graph the region', 'Plug in each answer choice', 'Factor'] }
        ],
        correctAnswers: ['Use $-A/B$ shortcut', 'Elimination (add)', 'Point-slope form', 'Plug in each answer choice'],
        hint1: 'For slope from standard form, the quickest method is the $-A/B$ formula.',
        hint2: 'When the equations have matching coefficients with opposite signs, add them.',
        hint3: 'When you have a point and a slope, point-slope form is immediate.',
        explanation: 'Standard form slope: use $-A/B = -5/(-3) = 5/3$. Matching coefficients → elimination. Known point + slope → point-slope. Checking a point in an inequality → plug and check.'
      }
    },
    {
      id: 'le7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7 (Full Topic Review)

| Topic | Core Skill | Common Trap |
|-------|-----------|-------------|
| Forms of lines | Convert fluently | Slope from standard form is $-A/B$ |
| Systems | Choose sub vs. elim | Read what they ask ($x$? $y$? $x+y$?) |
| Inequalities | Flip on × or ÷ by negative | "At most" = $\\leq$, "at least" = $\\geq$ |
| Parallel/Perp | Compare slopes | Perpendicular: $m_1 \\cdot m_2 = -1$ |
| Word problems | Slope = rate, $b$ = start | Decreasing = negative slope |
| Absolute value | Split into two cases | $|expr| = \\text{negative}$ → no solution |
| Literal equations | Isolate target variable | Treat other letters as numbers |

**Final SAT Strategies:**
- Back-solve from answer choices is your best friend on hard problems
- Estimate to eliminate obviously wrong answers
- Have your approach ready in the first 5 seconds — don't stare`
    }
  ]
};
