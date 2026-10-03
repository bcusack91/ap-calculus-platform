export const actMathStrategyPart1Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m1-intro',
      type: 'text' as const,
      content: `
# 📋 ACT Math Strategy

**Part 1 of 7 — ACT Math Overview**

The ACT Math test rewards students who know the content *and* who work efficiently. This lesson teaches the test-taking strategies, but every strategy is practiced on real ACT-style math problems, because a strategy only counts if it gets you to the right answer faster or more reliably.

## The Enhanced ACT Math Test at a Glance

| Feature | What it means for you |
|---------|-----------------------|
| **45 questions in 50 minutes** | About 67 seconds per question on average ($50 \\times 60 \\div 45 \\approx 66.7$ seconds) |
| **4 answer choices** per question | A blind guess has a 1-in-4 chance; eliminating one choice raises it to 1-in-3 |
| **Calculator allowed on every question** | Four-function, scientific, or graphing calculators are permitted; calculators with a computer algebra system (CAS), such as the TI-89 or TI-Nspire CAS, are not |
| **No formula sheet** | You must already know area, volume, the Pythagorean theorem, slope, SOH-CAH-TOA, and so on |
| **No penalty for wrong answers** | Never leave a question blank |
| **Unscored field-test questions** | A few questions are being tried out for future tests; you cannot tell which ones, so treat every question as real |

Math is one of the three tests in the Composite score (English, Math, Reading). Science is optional and reported separately.

## No Formula Sheet: Bring These

The ACT prints none of these formulas, so they have to be in your head before you walk in.

| Formula | Quick example |
|---------|---------------|
| Rectangle area: $A = lw$ | 5 by 11 gives $A = 55$ |
| Triangle area: $A = \\frac{1}{2}bh$ | base 10, height 7 gives $A = 35$ |
| Circle area: $A = \\pi r^2$ | $r = 4$ gives $A = 16\\pi$ |
| Circumference: $C = 2\\pi r$ (or $\\pi d$) | $r = 4$ gives $C = 8\\pi$ |
| Pythagorean theorem: $a^2 + b^2 = c^2$ for a right triangle | legs 10 and 24 give $c = \\sqrt{676} = 26$ |
| Common triples: 3-4-5 and 5-12-13, plus their multiples (6-8-10, 10-24-26) | legs 6 and 8 give hypotenuse 10 with no square root |
| SOH-CAH-TOA: $\\sin = \\frac{\\text{opp}}{\\text{hyp}}$, $\\cos = \\frac{\\text{adj}}{\\text{hyp}}$, $\\tan = \\frac{\\text{opp}}{\\text{adj}}$ | opposite 6, adjacent 8, hypotenuse 10: $\\sin = 0.6$, $\\cos = 0.8$, $\\tan = 0.75$ |
| Volume of a box: $V = lwh$ | 2 by 5 by 7 gives $V = 70$ |
| Volume of a cylinder: $V = \\pi r^2 h$ | $r = 2$, $h = 5$ gives $V = 20\\pi$ |
| Slope: $m = \\frac{y_2 - y_1}{x_2 - x_1}$ | $(1, 4)$ and $(5, 10)$ give $m = \\frac{6}{4} = 1.5$ |
| Percent change: $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$ | 50 to 58 is $\\frac{8}{50} = 16\\%$ |

## What Is Tested

- **Preparing for Higher Math:** Number & Quantity, Algebra, Functions, Geometry, and Statistics & Probability.
- **Integrating Essential Skills:** rates, percentages, proportional reasoning, area, and averages, used in multi-step problems.
- **Modeling:** building or interpreting a mathematical model of a real situation. Modeling questions overlap the other categories.

Questions generally get harder as you move through the test, though the order is not strict. Early questions should go quickly; bank that time for the later ones.

## The Four-Step Problem Routine

1. **Read the last sentence first.** Find exactly what is asked: $x$? $2x$? The area? The *difference*? Write it at the top of your scratch work.
2. **Choose a method:** direct algebra, backsolving (Part 3), picking numbers (Part 4), estimating and eliminating (Part 5), or drawing a diagram (Part 6).
3. **Solve, writing short steps.** Doing three steps in your head is where most careless errors happen.
4. **Check the answer against the question:** right quantity, right units, reasonable size.

## Trap #1: Answering a Different Question

The ACT often lists the value of an intermediate step as a wrong choice. If you solve for $x$ but the question asks for $x + 3$, the value of $x$ will almost certainly be waiting for you among the choices.

| The question asks for… | The tempting wrong choice is… |
|------------------------|-------------------------------|
| $x + 3$ | the value of $x$ |
| the area | the side length or the perimeter |
| how many *more* girls than boys | the number of girls |
| a time in *minutes* | the same time in hours |
| the *other* solution | the solution you were given |

**Shortcut — solve for the expression, not the variable.** If $2(x - 3) = 14$ and you need $x - 3$, divide both sides by 2: $x - 3 = 7$. You never need $x$. Likewise, if $4a + 4b = 36$, then $a + b = 9$ without finding $a$ or $b$.

**ACT Tip:** Before you bubble, reread the question's final phrase and ask, "Is the number I have the thing they asked for?" That five-second check saves more points than almost any other habit.
      `
    },
    {
      id: 'act-m1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Solve for x, then answer the real question</b></summary>

**Question:** If $4x - 7 = 21$, what is the value of $x + 3$?

**Solution:**
1. What is asked? The value of $x + 3$, not $x$.
2. $4x = 28$, so $x = 7$.
3. $x + 3 = 10$. ✓

**Trap:** The choices would include 7 (the value of $x$). A student who stops at step 2 picks it and loses an easy point.
</details>

<details>
<summary><b>Example 2: A multi-step problem with several tempting stopping points</b></summary>

**Question:** The length of a rectangle is 3 cm more than twice its width. The perimeter is 54 cm. What is the area of the rectangle, in square centimeters?

**Solution:**
1. What is asked? The **area**.
2. Let the width be $w$; the length is $2w + 3$.
3. Perimeter: $2(w + 2w + 3) = 54 \\implies 3w + 3 = 27 \\implies w = 8$.
4. Length $= 2(8) + 3 = 19$.
5. Area $= 8 \\times 19 = 152$ square centimeters. ✓

**Trap:** 8 (the width), 19 (the length), and 54 (the perimeter) are all numbers you wrote down along the way. Only 152 answers the question.
</details>
      `
    },
    {
      id: 'act-m1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Answer the Question That Is Asked** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "If $3x + 5 = 26$, what is the value of $6x$?",
            options: ['$7$', '$21$', '$42$', '$47$'],
            correctAnswer: 2,
            explanation: "Subtract 5: $3x = 21$. The question wants $6x$, which is $2(3x) = 42$; no need to find $x$. 7 is the value of $x$ itself, 21 is $3x$ (stopping one step early), and 47 is $6x + 5$, which adds back a 5 the question never asked for."
          },
          {
            question: "The ratio of boys to girls in a club is $3:5$, and the club has 40 members. How many more girls than boys are in the club?",
            options: ['$10$', '$15$', '$25$', '$8$'],
            correctAnswer: 0,
            explanation: "There are $3 + 5 = 8$ parts, so each part is $40 \\div 8 = 5$ members: 15 boys and 25 girls. The difference is $25 - 15 = 10$. 15 is the number of boys and 25 is the number of girls, not the difference; 8 is the number of ratio parts, not a count of people."
          },
          {
            question: "A car travels 150 miles in 2.5 hours. At this rate, how many minutes will it take the car to travel 84 miles?",
            options: ['$1.4$', '$84$', '$210$', '$5040$'],
            correctAnswer: 1,
            explanation: "The rate is $150 \\div 2.5 = 60$ miles per hour, which is exactly 1 mile per minute, so 84 miles takes 84 minutes. 1.4 is the time in hours ($84 \\div 60$), the right amount in the wrong unit. 210 multiplies 84 by 2.5, treating the 2.5 hours as if it were minutes per mile; 5040 multiplies the distance by the speed, which produces no meaningful quantity at all."
          },
          {
            question: "The equation $x^2 + kx - 10 = 0$ has $x = 2$ as one solution. What is the other solution?",
            options: ['$3$', '$5$', '$2$', '$-5$'],
            correctAnswer: 3,
            explanation: "Substitute $x = 2$: $4 + 2k - 10 = 0$, so $k = 3$. Then $x^2 + 3x - 10 = (x + 5)(x - 2) = 0$, giving $x = -5$ or $x = 2$. The other solution is $-5$. 3 is the value of $k$, not a solution; 5 has the wrong sign; and 2 is the solution you were given, not the other one."
          }
        ]
      }
    },
    {
      id: 'act-m1-input1',
      type: 'input-boxes' as const,
      content: `
**Solve for the Expression, Not the Variable** 🧮

1) If $2(x - 3) = 14$, what is the value of $x - 3$?

2) If $4a + 4b = 36$, what is the value of $a + b$?

3) A square has a perimeter of 36. What is its area?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '9', '81'],
        hint1: 'Divide both sides by 2. The expression $x - 3$ is already sitting inside the parentheses.',
        hint2: 'Factor the left side: $4(a + b) = 36$.',
        hint3: 'Find the side first ($36 \\div 4$), then square it.',
        explanation: '1) $x - 3 = 14 \\div 2 = 7$. 2) $4(a + b) = 36$, so $a + b = 9$. 3) The side is 9, so the area is $9^2 = 81$; 9 is the side length, not the area.'
      }
    },
    {
      id: 'act-m1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: The Question-Asked Drill

For each problem, first say out loud what is being asked, then solve. The last column shows the wrong answer students most often choose.

| # | Problem | Answer | Common wrong pick |
|---|---------|--------|-------------------|
| 1 | If $5n - 2 = 33$, what is $n^2$? | $49$ | $7$ (the value of $n$) |
| 2 | A circle has circumference $12\\pi$. What is its area? | $36\\pi$ | $6$ (the radius) |
| 3 | $\\frac{x}{3} + 4 = 9$. What is $x - 5$? | $10$ | $15$ (the value of $x$) |
| 4 | Of 30 students, 40% walk to school. How many do **not** walk? | $18$ | $12$ (the walkers) |

**ACT Tip:** Underline words such as *more than*, *not*, *remaining*, *area*, and the units. They tell you which of your numbers is the answer.
      `
    },
    {
      id: 'act-m1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "If $3(x + 2) = 5x - 4$, what is the value of $x^2$?",
            options: ['$5$', '$10$', '$25$', '$100$'],
            correctAnswer: 2,
            explanation: "Distribute: $3x + 6 = 5x - 4$, so $10 = 2x$ and $x = 5$. The question asks for $x^2 = 25$. 5 is $x$ itself; 10 is the value of $2x$ from the middle step; 100 is what you get by squaring that 10 instead of $x$."
          },
          {
            question: "A circle has a circumference of $10\\pi$ inches. What is the area of the circle, in square inches?",
            options: ['$25\\pi$', '$5\\pi$', '$100\\pi$', '$10\\pi$'],
            correctAnswer: 0,
            explanation: "No formula sheet is given, so you need $C = 2\\pi r$ and $A = \\pi r^2$. From $2\\pi r = 10\\pi$, $r = 5$, and $A = \\pi(5)^2 = 25\\pi$. $5\\pi$ multiplies $\\pi$ by the radius instead of its square; $100\\pi$ squares the diameter (10) instead of the radius; $10\\pi$ is the circumference, not the area."
          },
          {
            question: "The mean of five numbers is 12. Four of the numbers are 10, 14, 9, and 11. What is the fifth number?",
            options: ['$11$', '$16$', '$12$', '$44$'],
            correctAnswer: 1,
            explanation: "A mean of 12 for five numbers means the total is $5 \\times 12 = 60$. The four known numbers sum to 44, so the fifth is $60 - 44 = 16$. 44 is the partial sum, not the missing number; 11 is the mean of the four known numbers; 12 simply repeats the given mean, which would only work if the four known numbers already averaged 12."
          },
          {
            question: "A line passes through the points $(2, 7)$ and $(4, 11)$. What is the $y$-intercept of the line?",
            options: ['$-1.5$', '$2$', '$7$', '$3$'],
            correctAnswer: 3,
            explanation: "Slope $= \\frac{11 - 7}{4 - 2} = 2$. Using $(2, 7)$: $7 = 2(2) + b$, so $b = 3$. 2 is the slope, not the intercept; 7 is the $y$-coordinate of a given point; $-1.5$ is the $x$-intercept (where $2x + 3 = 0$), which answers a different question."
          }
        ]
      }
    },
    {
      id: 'act-m1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Format:** 45 questions, 50 minutes, 4 choices, about 67 seconds per question. A calculator is allowed throughout; there is no formula sheet.
- **Never leave a blank:** there is no penalty for a wrong answer, and some questions are unscored field tests you cannot identify.
- **Four-step routine:** read what is asked, choose a method, solve with written steps, and check the answer against the question.
- **Biggest early trap:** intermediate values ($x$ instead of $x + 3$, width instead of area, hours instead of minutes) appear as wrong choices.
- **Shortcut:** when the question asks for an expression, try to get that expression directly instead of solving for the variable.
      `
    }
  ]
}
