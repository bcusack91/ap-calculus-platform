export const actMathStrategyPart7Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m7-intro',
      type: 'text' as const,
      content: `
# 🏁 Putting It All Together

**Part 7 of 7 — Integrated Mixed Practice**

On test day, questions do not come labeled "backsolve me" or "draw a diagram." The skill that matters most is choosing a good method in the first few seconds. This part pulls together everything from Parts 1–6 and finishes with a mixed set of ACT-style problems.

## Strategy Selector

| If you see… | Try first… | Part |
|-------------|-----------|------|
| A question asking for an expression ($3x$, $x + 3$, $a + b$) | Solve for the expression directly; reread what is asked | 1 |
| Messy decimals, radicals or $\\pi$ in the choices, or an equation you cannot solve by hand | Calculator: decimal matching, graphing, or a table | 2 |
| Numerical choices and a wordy setup (ages, tickets, mixtures, consecutive integers) | Backsolve, starting with a middle choice | 3 |
| Variables in the choices, "in terms of," or a percent change with no starting value | Pick numbers (100 for percents) and test all four choices | 4 |
| Choices that are far apart, or bounds you can reason about | Estimate and eliminate | 5 |
| A story about directions, shapes, or groups with no figure | Draw and label a diagram | 6 |
| A radical or rational equation | Solve, then check every root in the original equation | 3, 6 |
| NOT, EXCEPT, LEAST in capitals | Mark the word; look for the one choice that fails the condition | 6 |

Often two strategies combine: draw a diagram, then backsolve; or pick numbers, then estimate.

## Test-Day Game Plan for ACT Math

1. **Before the test:** fresh calculator batteries, degree mode, and a plan for pacing checkpoints (about 9 minutes at question 10, 19 at question 20, 31 at question 30, 43 at question 40).
2. **Pass 1:** for each question, read what is asked, pick a method, solve. If there is no plan after about 90 seconds, guess, mark it, and move on.
3. **Pass 2:** return to the marked questions, easiest first.
4. **Last minute:** every question gets an answer. There is no penalty for guessing.

## Reviewing Practice Tests: The Error Log

After each practice set, sort every miss into one category. The category tells you what to fix.

| Category | Example | Fix |
|----------|---------|-----|
| **Content gap** | did not know the area formula for a trapezoid | relearn the topic, then do 5 similar problems |
| **Misread** | found $x$ when the question asked for $x + 3$ | circle what is asked before solving |
| **Careless** | typed $-3^2$ when you meant $(-3)^2$ | write steps; estimate before trusting the calculator |
| **Strategy** | spent 3 minutes on algebra that backsolving finishes in 40 seconds | redo the problem with the faster method |
| **Time** | never reached the last 6 questions | practice the two-pass system with a timer |

For many students, misreads and careless errors account for a meaningful share of misses, and those are the quickest points to recover.

## A Note on Accuracy vs. Speed

Rushing to reach every question is only worth it if your accuracy holds. A student who answers 40 questions carefully and guesses on 5 usually outscores one who races through all 45 and makes many careless errors. Find the pace at which your accuracy stays high, then build speed through practice, not panic.

**ACT Tip:** When you check an answer, use a *different* method than the one you solved with: backsolve an algebra answer, or estimate a calculator answer. A second method catches errors that repeating the same steps would not.
      `
    },
    {
      id: 'act-m7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Recognize a structure, then solve for what is asked</b></summary>

**Question:** If $x^2 - y^2 = 24$ and $x - y = 4$, what is the value of $x$?

**Solution:**
1. Recognize the difference of squares: $x^2 - y^2 = (x + y)(x - y)$.
2. Substitute: $(x + y)(4) = 24$, so $x + y = 6$.
3. Add the equations $x + y = 6$ and $x - y = 4$: $2x = 10$, so $x = 5$. ✓
4. Check with a different method: $y = 1$, and $25 - 1 = 24$ ✓.

**Strategies used:** solving for an expression ($x + y$) and checking by a second method.
</details>

<details>
<summary><b>Example 2: Diagram plus backsolving</b></summary>

**Question:** The length of a rectangle is 4 inches more than its width, and its diagonal is 20 inches. What is the width, in inches? Choices: 8, 10, 12, 16.

**Solution:**
1. Draw the rectangle with its diagonal: a right triangle with legs $w$ and $w + 4$ and hypotenuse 20.
2. Backsolve with a middle choice, 12: legs 12 and 16, and $12^2 + 16^2 = 144 + 256 = 400 = 20^2$ ✓.
3. Pattern check: 12-16-20 is the 3-4-5 triangle scaled by 4.

**Trap:** 16 is the length, not the width. The algebraic route ($w^2 + 4w - 192 = 0$) gives the same answer but takes longer.
</details>
      `
    },
    {
      id: 'act-m7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Set A** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "The product of two consecutive positive odd integers is 143. What is the larger of the two integers?",
            options: ['$11$', '$12$', '$13$', '$15$'],
            correctAnswer: 2,
            explanation: "Backsolve: if 13 is the larger, the smaller is 11, and $11 \\times 13 = 143$ ✓. 11 is the smaller integer, the right pair but the wrong member. 12 is even, so it cannot be one of two odd integers. If 15 were the larger, the product would be $13 \\times 15 = 195$."
          },
          {
            question: "If $n$ is an odd integer, which of the following must be even?",
            options: ['$n^2$', '$n + 2$', '$3n$', '$n^2 + n$'],
            correctAnswer: 3,
            explanation: "Pick $n = 3$: $n^2 = 9$, $n + 2 = 5$, $3n = 9$, and $n^2 + n = 12$. Only $n^2 + n$ is even, and it always will be, because $n^2 + n = n(n + 1)$ is a product of consecutive integers, one of which is even. The square of an odd number, an odd number plus 2, and 3 times an odd number are all odd."
          },
          {
            question: "A faucet drips 3 milliliters of water every 10 seconds. At this rate, how many liters of water drip in one day? (1 liter = 1,000 milliliters)",
            options: ['$2.592$', '$25.92$', '$259.2$', '$0.432$'],
            correctAnswer: 1,
            explanation: "The rate is 0.3 mL per second. One day has $24 \\times 3600 = 86{,}400$ seconds, so the total is $0.3 \\times 86{,}400 = 25{,}920$ mL $= 25.92$ L. 0.432 treats the 10 seconds as 10 minutes (144 intervals per day). 259.2 and 2.592 have the right digits but come from dividing by 100 or 10,000 instead of 1,000."
          },
          {
            question: "Points $A$, $B$, $C$, and $D$ lie on a line in that order. $AC = 14$, $BD = 17$, and $AD = 25$. What is $BC$?",
            options: ['$6$', '$11$', '$14$', '$17$'],
            correctAnswer: 0,
            explanation: "Draw the line with the points in order. $AB = AD - BD = 25 - 17 = 8$, and $BC = AC - AB = 14 - 8 = 6$. 11 is $CD$ ($25 - 14$), 14 is $AC$, and 17 is $BD$: each is a real segment in the diagram, but none of them is $BC$."
          },
          {
            question: "Which of the following is closest to $\\sqrt{2} \\cdot \\sqrt{50} + \\sqrt{99}$?",
            options: ['$14$', '$20$', '$100$', '$10$'],
            correctAnswer: 1,
            explanation: "$\\sqrt{2} \\cdot \\sqrt{50} = \\sqrt{100} = 10$, and $\\sqrt{99}$ is just under 10, so the sum is about 20 (exactly 19.95). 10 counts only the first term; 14 is roughly $\\sqrt{199}$, which wrongly adds under one radical; 100 multiplies 2 by 50 but forgets the square root."
          }
        ]
      }
    },
    {
      id: 'act-m7-input1',
      type: 'input-boxes' as const,
      content: `
**Choose Your Method** ✏️

1) The sum of four consecutive odd integers is 64. What is the largest of the four?

2) A shirt that costs a store 25 dollars is marked up 40%, and then sold at 20% off the marked-up price. What is the selling price, in dollars?

3) A square has a diagonal of length 10. What is the area of the square?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['19', '28', '50'],
        hint1: 'The four integers average $64 \\div 4 = 16$, so they sit around 16: two below and two above.',
        hint2: 'Successive percent changes multiply: $25 \\times 1.4 \\times 0.8$.',
        hint3: 'Draw it: the diagonal splits the square into two 45-45-90 triangles, or use area $= \\frac{d^2}{2}$.',
        explanation: '1) 13, 15, 17, 19 sum to 64, so the largest is 19. 2) $25 \\times 1.4 = 35$, and $35 \\times 0.8 = 28$ dollars (adding the percents into a single 20% markup would wrongly give 30). 3) The side is $\\frac{10}{\\sqrt{2}}$, so the area is $\\frac{100}{2} = 50$.'
      }
    },
    {
      id: 'act-m7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Timed Mini-Set (aim for 5 minutes)

| # | Problem | Good strategy | Answer |
|---|---------|---------------|--------|
| 1 | If $5x - 3 = 2x + 9$, what is $3x$? | Solve for the expression | $12$ |
| 2 | A shirt costs 24 dollars after a 20% discount. What was the original price? | Percent base / backsolve | 30 dollars |
| 3 | If $a$ and $b$ are positive and $\\frac{a}{b} = 2$, what is $\\frac{a^2 - b^2}{b^2}$? | Pick $b = 1$, $a = 2$ | $3$ |
| 4 | Two sides of a triangle are 6 and 11. Which could be the third side: 4, 5, 12, or 17? | Eliminate with bounds ($5 < s < 17$) | $12$ |
| 5 | A 13-foot ladder reaches 12 feet up a wall. How far is its base from the wall? | Draw it; 5-12-13 triangle | 5 feet |

**ACT Tip:** After the mini-set, log each miss in your error log by category before checking the next set.
      `
    },
    {
      id: 'act-m7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Set B** 📋
      `,
      exercise: {
        questions: [
          {
            question: "At a school of 600 students, 40% of the students are in the band. Of the band members, 25% are also in the choir. How many band members are NOT in the choir?",
            options: ['$60$', '$150$', '$180$', '$240$'],
            correctAnswer: 2,
            explanation: "Band: $0.4 \\times 600 = 240$. The 25% is of the **band**, not the school: $0.25 \\times 240 = 60$ are in both. Band members not in choir: $240 - 60 = 180$. 60 answers the question without the NOT; 240 is the whole band; 150 takes 25% of 600, the wrong base."
          },
          {
            question: "How many points of intersection do the graphs of $y = x^3 - 3x$ and $y = 1$ have?",
            options: ['$0$', '$1$', '$2$', '$3$'],
            correctAnswer: 3,
            explanation: "Graph both on a calculator, or reason: $y = x^3 - 3x$ has a local maximum of 2 at $x = -1$ and a local minimum of $-2$ at $x = 1$. The horizontal line $y = 1$ lies between them, so it crosses the curve three times (once before the maximum, once between the turning points, once after the minimum). One crossing would require the line to miss the middle section, and two would require it to touch exactly at a turning point; zero is impossible for a cubic."
          },
          {
            question: "If $3x = 4y$ and $y \\ne 0$, what is the value of $\\frac{x + y}{y}$?",
            options: ['$\\frac{4}{3}$', '$\\frac{7}{3}$', '$\\frac{7}{4}$', '$\\frac{3}{4}$'],
            correctAnswer: 1,
            explanation: "Pick numbers that satisfy $3x = 4y$: $x = 4$, $y = 3$. Then $\\frac{4 + 3}{3} = \\frac{7}{3}$. $\\frac{4}{3}$ is $\\frac{x}{y}$ alone, missing the $+1$; $\\frac{7}{4}$ divides by $x$ instead of $y$; $\\frac{3}{4}$ is $\\frac{y}{x}$."
          },
          {
            question: "A driver travels 60 miles at 30 miles per hour and then returns the same 60 miles at 60 miles per hour. What is the average speed for the whole trip, in miles per hour?",
            options: ['$40$', '$45$', '$90$', '$120$'],
            correctAnswer: 0,
            explanation: "Average speed is total distance divided by total time: 120 miles in $2 + 1 = 3$ hours is 40 mph. 45 averages the two speeds, but the driver spends twice as long at the slower speed; 90 adds the speeds; 120 is the total distance in miles, not a speed."
          }
        ]
      }
    },
    {
      id: 'act-m7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Choose a method in seconds** using the strategy selector: expression, calculator, backsolve, pick numbers, estimate, diagram, check roots, mark NOT.
- **Combine strategies** when helpful (diagram plus backsolve, pick numbers plus estimate).
- **Game plan:** checkpoints at questions 10, 20, 30, and 40; two passes; no blanks.
- **Error log:** sort misses into content gap, misread, careless, strategy, and time, then fix the biggest category first.
- **Check with a different method** than the one you used to solve.
      `
    }
  ]
}
