export const satFunctionsPart7Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn7-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 7 of 7 — Review & SAT-Level Mixed Practice**

### Functions Cheat Sheet

| Concept | Key Idea |
|---------|----------|
| $f(a)$ | Substitute $a$ into the function |
| $f(x) = k$ | Solve for $x$ (or find where $y = k$ on graph) |
| $f(g(x))$ | Evaluate inside out |
| $f(x + 1)$ | Replace every $x$ with $(x + 1)$ |
| Domain | All valid inputs |
| Range | All possible outputs |
| Increasing | $f$ goes up as $x$ moves right |
| $a \\cdot b^x$ | $a$ = initial value; $b > 1$ growth, $0 < b < 1$ decay |

### SAT Strategies for Function Questions

1. **Use the answer choices** — if asked for a function and given formulas, test with a value
2. **Read graphs carefully** — pay attention to open vs. closed circles
3. **Don't confuse $f(a) = b$ with $f(b) = a$** — in the first, $a$ is the input; in the second, $a$ is the output
4. **For word problems**: identify input vs. output

---

### Worked Example 1

**If $f(x) = ax + b$, $f(2) = 7$, and $f(5) = 16$, find $a$ and $b$.**

| Step | Work |
|------|------|
| Set up system | $2a + b = 7$ and $5a + b = 16$ |
| Subtract | $3a = 9$ → $a = 3$ |
| Find $b$ | $6 + b = 7$ → $b = 1$ |
| Answer | $f(x) = 3x + 1$ |

### Worked Example 2

**Find the range of $f(x) = -2(x - 3)^2 + 8$.**

| Step | Work |
|------|------|
| Identify vertex | $(3, 8)$ |
| Direction | Opens down ($a = -2 < 0$) |
| Maximum value | $8$ (at $x = 3$) |
| Range | $(-\\infty, 8]$ or $f(x) \\leq 8$ |`
    },
    {
      id: 'fn7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2x + 1$ and $g(x) = f(f(x))$, what is $g(3)$?',
            options: ['$15$', '$13$', '$9$', '$7$'],
            correctAnswer: 0,
            explanation: '$f(3) = 7$. Then $g(3) = f(f(3)) = f(7) = 2(7) + 1 = 15$.'
          },
          {
            question: 'What is the minimum value of the function $h(x) = 3|x - 2| - 6$?',
            options: ['$-6$', '$2$', '$0$', '$-2$'],
            correctAnswer: 0,
            explanation: 'The vertex of $y = a|x-h| + k$ is at $(h, k)$. Here, vertex is $(2, -6)$. Since $a = 3 > 0$, the function opens up and the minimum value is $-6$ (reached at $x = 2$, which is where the minimum occurs, not its value).'
          },
          {
            question: 'If $f(x) = \\frac{2x + 3}{x - 1}$, which value is NOT in the domain of $f$?',
            options: ['$1$', '$-3/2$', '$0$', '$-1$'],
            correctAnswer: 0,
            explanation: 'The denominator $x - 1 = 0$ when $x = 1$. So $x = 1$ is not in the domain.'
          }
        ]
      }
    },
    {
      id: 'fn7-text2',
      type: 'text' as const,
      content: `### Hard SAT Function Patterns

#### Pattern 1: Nested Function Evaluation

$f(x) = x^2 - 1$. What is $f(f(2))$?

$f(2) = 3$, then $f(3) = 8$. Answer: $8$.

#### Pattern 2: Functions Defined by Conditions

"$f(x)$ is a linear function where $f(3) = 10$ and the rate of change is $-2$."

→ Slope $= -2$: $f(x) = -2x + b$. $f(3) = -6 + b = 10$ → $b = 16$. So $f(x) = -2x + 16$.

### Worked Example 3

**$f$ is a quadratic with vertex $(1, -4)$ that passes through $(3, 0)$. Find $f(x)$.**

| Step | Work |
|------|------|
| Vertex form | $f(x) = a(x - 1)^2 - 4$ |
| Plug in $(3, 0)$ | $0 = a(4) - 4$ → $a = 1$ |
| Final | $f(x) = (x - 1)^2 - 4 = x^2 - 2x - 3$ |
| Verify | $f(3) = 9 - 6 - 3 = 0$ ✓ |

### Worked Example 4

**If $f(x) = 3x - 5$, for what value of $x$ does $f(2x) = f(x) + 10$?**

| Step | Work |
|------|------|
| Expand $f(2x)$ | $3(2x) - 5 = 6x - 5$ |
| Expand $f(x) + 10$ | $(3x - 5) + 10 = 3x + 5$ |
| Set equal | $6x - 5 = 3x + 5$ |
| Solve | $3x = 10$ → $x = 10/3$ |`
    },
    {
      id: 'fn7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT-Level Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 + 1$ and $g(x) = \\sqrt{x}$, what is the domain of $g(f(x))$?',
            options: ['All real numbers', '$x \\geq 0$', '$x > -1$', '$x \\geq 1$'],
            correctAnswer: 0,
            explanation: '$g(f(x)) = \\sqrt{x^2 + 1}$. Since $x^2 + 1 \\geq 1 > 0$ for all $x$, the square root is always defined. Domain: all real numbers.'
          },
          {
            question: 'A function satisfies $f(a + b) = f(a) \\cdot f(b)$ for all $a, b$. If $f(1) = 3$, what is $f(4)$?',
            options: ['$81$', '$12$', '$27$', '$64$'],
            correctAnswer: 0,
            explanation: '$f(2) = f(1+1) = f(1) \\cdot f(1) = 9$. $f(4) = f(2+2) = f(2) \\cdot f(2) = 81$. This is $f(x) = 3^x$.'
          },
          {
            question: 'If $f(x) = 2^x$ and $g(x) = f(x - 3) + 1$, what is $g(5)$?',
            options: ['$5$', '$4$', '$30$', '$257$'],
            correctAnswer: 0,
            explanation: '$g(5) = f(5 - 3) + 1 = f(2) + 1 = 4 + 1 = 5$. Forgetting the $+1$ gives 4, subtracting 3 outside the function gives $2^5 - 3 + 1 = 30$, and using $x + 3$ inside gives $2^8 + 1 = 257$.'
          },
          {
            question: 'If $f(x) = 2|x - 1| - 3$, how many solutions does $f(x) = 5$ have?',
            options: ['$2$', '$1$', '$0$', '$3$'],
            correctAnswer: 0,
            explanation: '$2|x-1| - 3 = 5$ → $2|x-1| = 8$ → $|x-1| = 4$ → $x = 5$ or $x = -3$. Two solutions.'
          }
        ]
      }
    },
    {
      id: 'fn7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick-Fire Function Review** 🔍\n\nMatch each situation with the correct answer.',
      exercise: {
        dropdowns: [
          { label: '$f(x) = x^2 - 4$: the x-intercepts are', options: ['x = 2 and x = -2', 'x = 4 and x = -4', 'x = 2 only', 'No x-intercepts'] },
          { label: '$f(x) = 3x - 6$: the value of $x$ for which $f(x) = 0$', options: ['2', '0', '-2', '6'] },
          { label: '$y = (x+3)^2 - 1$ is obtained from $y = x^2$ by', options: ['Left 3, down 1', 'Right 3, down 1', 'Left 3, up 1', 'Right 3, up 1'] },
          { label: '$f(x) = 4(0.5)^x$: the value of $f(2)$', options: ['1', '2', '0.25', '4'] }
        ],
        correctAnswers: ['x = 2 and x = -2', '2', 'Left 3, down 1', '1'],
        hint1: 'Set $x^2 - 4 = 0$ and solve.',
        hint2: 'This asks: "What input gives output $0$?" So solve $3x - 6 = 0$.',
        hint3: '$(x + 3)$ = shift left 3. $-1$ = shift down 1.',
        explanation: '$x^2 = 4$ → $x = \\pm 2$. Solve $3x - 6 = 0$ → $x = 2$. $(x+3)^2 - 1$ = left 3, down 1. $f(2) = 4(0.5)^2 = 4(0.25) = 1$.'
      }
    },
    {
      id: 'fn7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Full Functions & Graphs Review

| Topic | One-Liner |
|-------|-----------|
| Notation | $f(a)$ = plug in; $f(x) = k$ = solve |
| Composition | Inside out; order matters |
| Substitution | $f(x + 1)$ changes the input; $f(x) + 1$ changes the output |
| Transformations | Outside = vertical; inside = horizontal (opposite) |
| Piecewise | Check which rule applies at each $x$ |
| Absolute value | V-shape; $|A| = c$ → two cases |
| Rate of change | $\\frac{f(b)-f(a)}{b-a}$ = secant slope |
| Exponential | $a \\cdot b^x$: start at $a$, multiply by $b$ each step |
| Domain | No ÷ 0, no $\\sqrt{\\text{negative}}$ |

> **Final tip:** On the SAT, always check whether the question asks for an $x$-value or a $y$-value. "At what $x$..." vs. "What is the value of $f$..." are different questions!`
    }
  ]
};
