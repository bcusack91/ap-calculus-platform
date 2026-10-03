export const actMathStrategyPart2Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m2-intro',
      type: 'text' as const,
      content: `
# 🧮 Calculator Tips

**Part 2 of 7 — Using Your Calculator Fast and Accurately**

You may use a calculator on every ACT Math question. Every question can also be solved without one, so the calculator is a tool, not a crutch: the goal is to use it where it saves time or prevents arithmetic slips, and to skip it where algebra is faster.

**Allowed:** four-function, scientific, and most graphing calculators. **Not allowed:** calculators with a computer algebra system (for example the TI-89, TI-92, or TI-Nspire CAS), and phones or other devices with internet access. Check the current ACT calculator policy before test day, put in fresh batteries, and practice on the same calculator you will bring.

## Entry Errors That Cost Points

Your calculator does exactly what you type, in order-of-operations order. Most calculator mistakes are entry mistakes.

| You mean | Type it as | Common wrong entry → result |
|----------|------------|-----------------------------|
| $-3^2 = -9$ | -3^2 | correct as typed; but $(-3)^2 = 9$ needs parentheses |
| $\\frac{12}{2 \\cdot 3} = 2$ | 12 ÷ (2 × 3) | 12 ÷ 2 × 3 → 18 |
| $\\frac{4 + 8}{2} = 6$ | (4 + 8) ÷ 2 | 4 + 8 ÷ 2 → 8 |
| $\\sqrt{16 + 9} = 5$ | √(16 + 9) | √16 + 9 → 13 |
| $2^{3 + 1} = 16$ | 2^(3 + 1) | 2^3 + 1 → 9 |
| $\\sin 30^\\circ = 0.5$ | sin(30) in **degree** mode | radian mode → about $-0.988$ |

**Rule of thumb:** whenever a fraction bar, square root, or exponent covers more than one term, wrap that group in parentheses.

## When the Calculator Helps

1. **Messy arithmetic:** decimals, large products, percent of a number, compound growth such as $500(1.04)^{6}$.
2. **Matching radical or $\\pi$ answers:** compute a decimal for your result and for each choice. For example, $\\sqrt{72} \\approx 8.485$, and $6\\sqrt{2} \\approx 8.485$, so they match.
3. **Graphing:** to find where two graphs intersect, graph both and use the intersect feature. To find zeros, graph one side minus the other. To find a maximum or minimum, use the max/min feature.
4. **Tables:** to test integer values quickly (for example, to see which choice makes $2^{x} = 4x$ true), enter the function and scroll the table.
5. **Checking equivalence:** if a question asks which expression is equivalent to another, graph both or evaluate both at a value such as $x = 2$.

## When the Calculator Slows You Down

- **Simplifying algebra:** factoring $x^2 - 9$ into $(x + 3)(x - 3)$ is faster by hand.
- **One-step equations:** if $3x = 21$, you know $x = 7$ before you can press the keys.
- **Choices in exact form** like $\\frac{3}{4}$ versus $\\frac{4}{3}$: often a quick mental estimate is enough to tell them apart.
- **Long chains of operations:** typing a ten-step computation in one line invites a misplaced parenthesis. Break it into pieces and write down each intermediate result.

## The Estimate-First Habit

Before pressing ENTER, guess the size of the answer. If $\\frac{398 \\times 0.51}{19.7}$ should be about $\\frac{400 \\times 0.5}{20} = 10$, a calculator result of 103 tells you that you mistyped something. Estimation is your built-in error detector.

**Degree-mode check:** for a 50-foot rope at $35^\\circ$ to the ground, $50 \\sin 35^\\circ \\approx 50(0.574) \\approx 28.7$ feet in degree mode, but the same keystrokes in radian mode return about $-21.4$, an impossible negative height.

**ACT Tip:** Set your calculator to **degree mode** before the test starts. ACT trigonometry questions are mostly in degrees, and a radian-mode answer is often negative or far off, which is a giveaway that something went wrong.
      `
    },
    {
      id: 'act-m2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Matching a radical answer with decimals</b></summary>

**Question:** Which of the following is equal to $\\sqrt{72}$? The choices are $6\\sqrt{2}$, $8\\sqrt{3}$, $4\\sqrt{3}$, and $2\\sqrt{6}$.

**Solution:**
1. By hand: $72 = 36 \\times 2$, so $\\sqrt{72} = 6\\sqrt{2}$. ✓
2. Calculator check: $\\sqrt{72} \\approx 8.485$. The choices evaluate to $6\\sqrt{2} \\approx 8.485$, $8\\sqrt{3} \\approx 13.86$, $4\\sqrt{3} \\approx 6.93$, and $2\\sqrt{6} \\approx 4.90$. Only $6\\sqrt{2}$ matches.

**Takeaway:** If you forget how to simplify a radical, the decimal comparison still finds the answer in seconds.
</details>

<details>
<summary><b>Example 2: Letting the graph solve a system</b></summary>

**Question:** The graphs of $y = x^2 - 3$ and $y = 2x$ intersect at two points. What is the sum of the $x$-coordinates of those points?

**Solution (algebra):** Set them equal: $x^2 - 3 = 2x \\implies x^2 - 2x - 3 = 0 \\implies (x - 3)(x + 1) = 0$, so $x = 3$ or $x = -1$. The sum is $2$. ✓

**Solution (graphing):** Graph both equations and use the intersect feature twice: the points are $(-1, -2)$ and $(3, 6)$. Same sum, $2$.

**Takeaway:** If the quadratic does not factor nicely, the graph still gives the intersection points.
</details>
      `
    },
    {
      id: 'act-m2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Calculator Entry Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "What is the value of $\\frac{-2^2 + 16}{3 \\cdot 4}$?",
            options: ['$1$', '$\\frac{5}{3}$', '$16$', '$\\frac{52}{3}$'],
            correctAnswer: 0,
            explanation: "The exponent applies before the negative sign: $-2^2 = -4$. The numerator is $-4 + 16 = 12$, and $12 \\div 12 = 1$. $\\frac{5}{3}$ comes from treating $-2^2$ as $(-2)^2 = 4$, giving $\\frac{20}{12}$. 16 comes from typing the denominator without parentheses ($12 \\div 3 \\times 4$). $\\frac{52}{3}$ comes from dropping both sets of grouping parentheses ($-4 + 16 \\div 3 \\times 4$)."
          },
          {
            question: "Which of the following is equal to $\\sqrt{75} - \\sqrt{12}$?",
            options: ['$\\sqrt{63}$', '$7\\sqrt{3}$', '$3\\sqrt{3}$', '$2\\sqrt{6}$'],
            correctAnswer: 2,
            explanation: "$\\sqrt{75} = 5\\sqrt{3}$ and $\\sqrt{12} = 2\\sqrt{3}$, so the difference is $3\\sqrt{3} \\approx 5.196$. A calculator confirms: $8.660 - 3.464 = 5.196$. $\\sqrt{63} \\approx 7.94$ comes from subtracting under one radical, which is not allowed; $7\\sqrt{3}$ adds the radicals instead of subtracting; $2\\sqrt{6} \\approx 4.90$ does not match the decimal value."
          },
          {
            question: "A straight ramp 12 feet long makes a $30^\\circ$ angle with the level ground. To the nearest hundredth of a foot, how high does the top of the ramp rise above the ground?",
            options: ['$-11.86$', '$6\\sqrt{3}$', '$24$', '$6$'],
            correctAnswer: 3,
            explanation: "The height is opposite the angle and the ramp is the hypotenuse: $12 \\sin 30^\\circ = 12(0.5) = 6$ feet. $-11.86$ is what a calculator in radian mode returns for $12 \\sin 30$, and a negative height is impossible. $6\\sqrt{3} \\approx 10.39$ uses cosine, which gives the horizontal run. 24 divides by the sine instead of multiplying."
          },
          {
            question: "What is the value of $(2.5 \\times 10^{4})(6 \\times 10^{-2})$?",
            options: ['$1.5 \\times 10^{2}$', '$1.5 \\times 10^{3}$', '$1.5 \\times 10^{-8}$', '$8.5 \\times 10^{2}$'],
            correctAnswer: 1,
            explanation: "Multiply the coefficients and add the exponents: $15 \\times 10^{2} = 1500 = 1.5 \\times 10^{3}$. $1.5 \\times 10^{2}$ forgets to adjust the exponent after rewriting 15 as 1.5; $1.5 \\times 10^{-8}$ multiplies the exponents instead of adding them; $8.5 \\times 10^{2}$ adds the coefficients instead of multiplying them."
          }
        ]
      }
    },
    {
      id: 'act-m2-input1',
      type: 'input-boxes' as const,
      content: `
**Type It Right** ✏️

1) $(-4)^2 - 3^2$

2) $\\frac{18}{3 \\cdot 2}$

3) $\\sqrt{6^2 + 8^2}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '3', '10'],
        hint1: 'The parentheses make the first square positive: $16 - 9$.',
        hint2: 'Put the whole denominator in parentheses: $18 \\div (3 \\times 2)$.',
        hint3: 'The square root covers the whole sum: $\\sqrt{36 + 64}$.',
        explanation: '1) $16 - 9 = 7$. 2) $18 \\div 6 = 3$ (typing $18 \\div 3 \\times 2$ gives 12). 3) $\\sqrt{100} = 10$ (typing $\\sqrt{36} + 64$ gives 70).'
      }
    },
    {
      id: 'act-m2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Calculator or Not?

| # | Problem | Fastest route | Answer |
|---|---------|---------------|--------|
| 1 | $\\frac{x^2 - 16}{x - 4}$ for $x \\ne 4$ simplifies to? | By hand: factor | $x + 4$ |
| 2 | Value of $800(1.03)^{5}$, nearest whole number | Calculator | $927$ |
| 3 | Which is closest to $\\sqrt{50}$: 6.5, 7.1, 7.5, or 25? | Estimate: $7^2 = 49$ | $7.1$ |
| 4 | $x$-coordinates where $y = x^2$ meets $y = x + 6$ | Graph or factor | $-2$ and $3$ |

**ACT Tip:** If the answer choices are close decimals (such as 927 versus 932), use the calculator. If they are far apart or in algebraic form, think first.
      `
    },
    {
      id: 'act-m2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Graphs, Tables, and Decimals** 📋
      `,
      exercise: {
        questions: [
          {
            question: "The graphs of $y = x^2 - 4$ and $y = x + 2$ intersect at two points. What is the sum of the $x$-coordinates of the two points?",
            options: ['$-1$', '$1$', '$-6$', '$3$ and $-2$'],
            correctAnswer: 1,
            explanation: "Set the equations equal: $x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0$, so $x = 3$ and $x = -2$, and the sum is 1. Graphing and using intersect shows the same points, $(-2, 0)$ and $(3, 5)$. $-1$ flips the sign of the sum; $-6$ is the product of the roots, not their sum; '3 and $-2$' lists the two $x$-coordinates without adding them, so it answers a different question."
          },
          {
            question: "What is the greatest value of $x$ for which $2^{x} = 4x$?",
            options: ['$2$', '$3$', '$8$', '$4$'],
            correctAnswer: 3,
            explanation: "This equation cannot be solved with ordinary algebra, so test values with a table: at $x = 4$, $2^4 = 16$ and $4(4) = 16$, a match. At $x = 2$ the sides are 4 and 8; at $x = 3$ they are 8 and 12; at $x = 8$ they are 256 and 32. Neither 2, 3, nor 8 balances the equation, and the other solution (about 0.31) is smaller than 4."
          },
          {
            question: "Which of the following is closest to $\\frac{\\pi \\cdot 7^2}{\\sqrt{2}}$?",
            options: ['$15.6$', '$34.6$', '$108.9$', '$54.4$'],
            correctAnswer: 2,
            explanation: "$\\pi \\cdot 49 \\approx 153.94$, and $153.94 \\div 1.414 \\approx 108.9$. 34.6 leaves out the $\\pi$ ($49 \\div 1.414$); 54.4 divides by $2\\sqrt{2}$ instead of $\\sqrt{2}$; 15.6 forgets to square the 7. Estimating first ($150 \\div 1.4$ is a bit more than 100) confirms 108.9."
          },
          {
            question: "What is the maximum value of the function $f(x) = -x^2 + 6x + 1$?",
            options: ['$10$', '$3$', '$9$', '$1$'],
            correctAnswer: 0,
            explanation: "The vertex is at $x = -\\frac{6}{2(-1)} = 3$, and $f(3) = -9 + 18 + 1 = 10$. A graphing calculator's maximum feature gives the vertex $(3, 10)$. 3 is the $x$-coordinate where the maximum occurs, not the maximum value; 9 drops the constant term ($-9 + 18$ without the $+1$); 1 is the $y$-intercept."
          }
        ]
      }
    },
    {
      id: 'act-m2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Parentheses everywhere:** wrap any group under a fraction bar, root, or exponent. Remember $-3^2 = -9$ but $(-3)^2 = 9$.
- **Degree mode** for ACT trigonometry; a negative length means the mode is wrong.
- **Use the calculator for** messy arithmetic, decimal matching of radical or $\\pi$ answers, graph intersections, zeros, maximums and minimums, and tables of values.
- **Skip the calculator for** factoring, one-step equations, and choices in algebraic form.
- **Estimate first** so that you notice when a mistyped entry produces an unreasonable result.
      `
    }
  ]
}
