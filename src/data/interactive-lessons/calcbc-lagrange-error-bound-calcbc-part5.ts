export const calcbcLagrangePart5Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'le5-intro',
      type: 'text' as const,
      content: `# AP Exam FRQ Strategies

**Part 5 of 7 — Earning Full Credit**

### How Lagrange Appears on the AP Exam

**Common FRQ Patterns:**

1. **"Use the Lagrange error bound to show that..."**
   - Given: $f$, some derivatives, $c$, $x$
   - Write the formula, identify $M$, compute, compare to target

2. **"Show the approximation is within $\\varepsilon$ of the actual value"**
   - Same setup but you must conclude with an inequality

3. **"Find the minimum degree $n$ such that..."**
   - Try successive $n$ values in the bound

### Template for Full Credit

Step 1: State the formula: $|R_n(x)| \\le M|x - c|^{n+1}/(n+1)!$

Step 2: Identify each component:
- $n = $ __, $c = $ __, $x = $ __

Step 3: Find or state $M$:
- "Since $|f^{(n+1)}(t)| \\le M$ on $[c, x]$..."

Step 4: Compute and conclude:
- "$|R_n(x)| \\le \\text{value} < \\varepsilon$. Therefore..."

> **AP Tip:** The graders look for the **formula stated**, **$M$ identified with justification**, and the **final inequality**. Missing any one of these costs a point.`
    },
    {
      id: 'le5-frq-example',
      type: 'text' as const,
      content: `### Model FRQ Response

*"Let $f(x) = \\sin x$. Use the Lagrange error bound to show that $T_5(1)$ approximates $\\sin(1)$ within $0.002$."*

**Response:**

By the Lagrange error bound:

$$|R_5(1)| \\le \\frac{M \\cdot |1 - 0|^6}{6!}$$

Since all derivatives of $\\sin x$ satisfy $|f^{(k)}(t)| \\le 1$ for all $t$, we have $M = 1$.

$$|R_5(1)| \\le \\frac{1 \\cdot 1^6}{720} = \\frac{1}{720} \\approx 0.00139$$

Since $0.00139 < 0.002$, the approximation $T_5(1)$ is within $0.002$ of $\\sin(1)$. $\\square$

### Common Mistakes That Lose Points

| Mistake | Why it costs points |
|---------|-------------------|
| Not stating the formula | Graders can't give formula credit |
| Using $M = f^{(n+1)}(c)$ instead of max | $M$ must be a max over the interval |
| Forgetting $(n+1)!$ | The factorial is essential |
| Not concluding with "$< \\varepsilon$" | Must explicitly compare |`
    },
    {
      id: 'le5-mc1',
      type: 'multiple-choice' as const,
      content: '**FRQ Strategy**',
      exercise: {
        questions: [
          {
            question: 'A table gives $f^{(k)}(3)$ for $k = 0, 1, 2, 3, 4, 5$ but also states $|f^{(5)}(t)| \\le 20$ on $[3, 3.5]$. To bound $|R_4(3.5)|$, which value of $M$ do you use?',
            options: ['$M = 20$ (the given bound on the 5th derivative)', '$M = |f^{(5)}(3)|$ from the table', '$M = |f^{(4)}(3)|$', '$M = 20 \\cdot 5!$'],
            correctAnswer: 0,
            explanation: 'For $n = 4$, we need $|f^{(5)}(t)| \\le M$ on the interval. The problem gives $M = 20$ as this bound.'
          },
          {
            question: 'After computing $|R_n| \\le 0.0047$ and the target is $\\varepsilon = 0.005$, the correct conclusion is:',
            options: ['"Since $0.0047 < 0.005$, the approximation is within $0.005$"', '"The approximation is approximately $0.005$"', '"$T_n$ converges to $f$"', '"The error is $0.0047$"'],
            correctAnswer: 0,
            explanation: 'You must make the explicit comparison: bound $<$ target. Saying the error "is" the bound is wrong (it is an upper bound).'
          },
          {
            question: 'If you write "$|R_n| \\le M|x-c|^{n+1}/n!$" (using $n!$ instead of $(n+1)!$), you will:',
            options: ['Lose the formula point even if the computation is otherwise correct', 'Still get full credit if the answer is right', 'Get partial credit', 'Only lose the answer point'],
            correctAnswer: 0,
            explanation: 'The formula must be exactly correct: $(n+1)!$. An incorrect formula loses that point.'
          }
        ]
      }
    },
    {
      id: 'le5-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ Setup Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'FRQ: "$f$ has derivatives of all orders at $x = 2$. $|f^{(4)}(t)| \\le 15$ on $[2, 2.3]$. Bound $|R_3(2.3)|$." The $(n+1)$th derivative here is:',
            options: ['$f^{(4)}$ since $n = 3$, so $n + 1 = 4$', '$f^{(3)}$ since $n = 3$', '$f^{(5)}$', '$f^{(15)}$'],
            correctAnswers: ['$f^{(4)}$ since $n = 3$, so $n + 1 = 4$'],
            hints: ['If $n = 3$ (using $T_3$), then the remainder involves the $(n+1) = 4$th derivative.'],
            explanation: '$R_3$ involves $f^{(4)}$. The bound gives $|f^{(4)}(t)| \\le 15$, so $M = 15$.'
          },
          {
            label: 'Same FRQ: the final bound equals:',
            options: ['$15(0.3)^4/4! = 15 \\cdot 0.0081/24 = 0.0050625$', '$15(2.3)^4/4!$', '$15(0.3)^3/3!$', '$15(0.3)^4/3!$'],
            correctAnswers: ['$15(0.3)^4/4! = 15 \\cdot 0.0081/24 = 0.0050625$'],
            hints: ['$|x - c| = 2.3 - 2 = 0.3$, $(n+1)! = 4! = 24$.'],
            explanation: '$|R_3(2.3)| \\le 15(0.3)^4/4! = 15(0.0081)/24 = 0.1215/24 \\approx 0.00506$.'
          }
        ]
      }
    },
    {
      id: 'le5-input',
      type: 'input-box' as const,
      content: '**FRQ Computation**',
      exercise: {
        question: 'FRQ: $|f^{(6)}(t)| \\le 50$ on $[1, 1.1]$. Compute the Lagrange error bound for $T_5(1.1)$ centered at $c = 1$. Give answer as a decimal.',
        correctAnswer: '0.0000000069',
        acceptableAnswers: ['0.0000000069', '6.9e-9', '6.94e-9', '0.00000000694'],
        hints: ['$|R_5| \\le 50(0.1)^6/6!$.', '$(0.1)^6 = 10^{-6}$, $6! = 720$.'],
        explanation: '$|R_5(1.1)| \\le 50(0.1)^6/6! = 50 \\times 10^{-6}/720 = 5 \\times 10^{-5}/720 \\approx 6.94 \\times 10^{-8}$.'
      }
    },
    {
      id: 'le5-summary',
      type: 'text' as const,
      content: `### Summary

- State formula → identify $M$ → compute → conclude with inequality
- Use the $M$ given in the problem when provided
- $(n+1)!$ not $n!$ — get the formula exactly right
- Always include the final comparison: "bound $< \\varepsilon$, therefore..."

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
