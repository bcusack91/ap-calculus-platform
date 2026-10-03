export const actMathStrategyPart4Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m4-intro',
      type: 'text' as const,
      content: `
# 🔢 Plugging In Numbers

**Part 4 of 7 — Picking Your Own Numbers**

Backsolving (Part 3) works when the answer choices are numbers. When the choices contain **variables**, use the partner strategy: **pick numbers** for the variables, turn the abstract problem into ordinary arithmetic, and see which choice produces the same result.

## When to Pick Numbers

| Signal | Example |
|--------|---------|
| Variables in the answer choices | $\\frac{mt}{60h}$, $3c - 15$ |
| "In terms of" | "in terms of $c$, how many books…" |
| Percent change with no starting value | "the price rose 25% and then fell 20%" |
| "Which must be true" / "which could be true" | "if $a < 0 < b$, which must be negative?" |
| Remainders, odd/even, positive/negative | "$n$ leaves remainder 3 when divided by 5" |

## How to Pick Numbers: Five Steps

1. **Choose easy values** for each variable, and write them down: "let $m = 120$, $h = 2$, $t = 30$."
2. **Solve the problem with those numbers** to get a **target** value. Circle it.
3. **Plug the same numbers into every choice.**
4. **Keep the choice(s) that hit the target.**
5. **If two or more choices match, pick new numbers** and test only those choices again.

## Choosing Good Numbers

- **Avoid 0 and 1.** They make many different expressions equal ($x^2 = x$ when $x = 1$), so several choices will match.
- **Avoid numbers that already appear in the problem**, and use **different** values for different variables.
- **Make the arithmetic friendly:** use 100 for percents and prices, multiples of 60 for minutes and hours, and numbers that divide evenly into the problem's quantities.
- **Respect the conditions:** if the problem says $x > 1$, do not pick $x = \\frac{1}{2}$.

## Percent Problems: Start at 100

If a price increases 20% and then decreases 20%, start with 100: $100 \\to 120 \\to 96$. The net change is a **4% decrease**, not zero, because the second 20% is taken of a bigger number. Starting at 100 makes the final percent change readable directly.

| Changes | Start at 100 | Net change |
|---------|--------------|------------|
| +20%, then −20% | $100 \\to 120 \\to 96$ | 4% decrease |
| +10%, then +10% | $100 \\to 110 \\to 121$ | 21% increase |
| +25%, then −20% | $100 \\to 125 \\to 100$ | no change |
| −50%, then +50% | $100 \\to 50 \\to 75$ | 25% decrease |

## "Must Be True" Problems: Try to Break Each Choice

For "must be true," a choice is eliminated by **one** counterexample. Try numbers of different types: a positive and a negative, a fraction between 0 and 1, a large number, zero (if allowed). The choice that survives every attempt is the answer. For "could be true," you only need **one** example that works.

| Type of number | Why try it |
|----------------|------------|
| Negative (e.g. $-2$) | Squaring and multiplying change sign behavior |
| Fraction between 0 and 1 (e.g. $\\frac{1}{4}$) | Squaring makes it **smaller** and $\\frac{1}{x}$ makes it **bigger** |
| Large number (e.g. 10) | Shows which expression grows fastest |

**ACT Tip:** Always check all four choices, even after one matches. If you stop at the first match and a second choice also matches, you have a 50% chance of being wrong without knowing it.
      `
    },
    {
      id: 'act-m4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Variables in the choices</b></summary>

**Question:** Pens cost $p$ cents each. How many pens can be bought with $d$ dollars? Choices: $\\frac{100d}{p}$, $\\frac{dp}{100}$, $\\frac{100p}{d}$, $\\frac{d}{100p}$.

**Solution:**
1. Pick $p = 50$ cents and $d = 2$ dollars.
2. Target: 2 dollars is 200 cents, and $200 \\div 50 = 4$ pens.
3. Plug in: $\\frac{100(2)}{50} = 4$ ✓, $\\frac{2(50)}{100} = 1$, $\\frac{100(50)}{2} = 2500$, $\\frac{2}{5000} = 0.0004$.

**Answer:** $\\frac{100d}{p}$. Only one choice hit 4, so no second round is needed.
</details>

<details>
<summary><b>Example 2: A "must be true" question</b></summary>

**Question:** If $x < y < 0$, which of the following must be true? Choices: $xy < 0$, $\\frac{x}{y} > 1$, $x + y > 0$, $x^2 < y^2$.

**Solution:**
1. Pick $x = -4$ and $y = -2$ (both negative, $x$ smaller).
2. $xy = 8$, not negative ✗. $\\frac{x}{y} = 2 > 1$ ✓. $x + y = -6$, not positive ✗. $x^2 = 16$ and $y^2 = 4$, so $x^2 < y^2$ is false ✗.
3. Try another pair to confirm, $x = -3$, $y = -1$: $\\frac{x}{y} = 3 > 1$ ✓.

**Answer:** $\\frac{x}{y} > 1$. Since $x$ is farther from zero than $y$ and both are negative, the quotient is always positive and greater than 1.
</details>
      `
    },
    {
      id: 'act-m4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Pick Numbers to Solve** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "For $x \\ne -3$, which of the following is equivalent to $\\frac{x^2 - 9}{x + 3} + 2x$?",
            options: ['$3x$', '$x - 3$', '$3x - 3$', '$x + 3$'],
            correctAnswer: 2,
            explanation: "Pick $x = 2$: $\\frac{4 - 9}{5} + 4 = -1 + 4 = 3$. Only $3x - 3$ gives 3 at $x = 2$. $3x$ gives 6 (it adds the $2x$ but drops the $-3$); $x - 3$ gives $-1$ (it simplifies the fraction but forgets the $+2x$); $x + 3$ gives 5 (a wrong cancellation that also forgets the $2x$). Algebraically, $\\frac{(x + 3)(x - 3)}{x + 3} = x - 3$, and $x - 3 + 2x = 3x - 3$."
          },
          {
            question: "A train travels $m$ miles in $h$ hours. At this rate, how many miles does it travel in $t$ minutes?",
            options: ['$\\frac{mt}{h}$', '$\\frac{mt}{60h}$', '$\\frac{mh}{t}$', '$\\frac{m}{ht}$'],
            correctAnswer: 1,
            explanation: "Pick $m = 120$, $h = 2$, $t = 30$: the train goes 60 miles per hour, which is 1 mile per minute, so 30 minutes gives 30 miles. $\\frac{120 \\cdot 30}{60 \\cdot 2} = 30$ ✓. $\\frac{mt}{h} = 1800$ treats $t$ minutes as if they were hours; $\\frac{mh}{t} = 8$ inverts the time relationship; $\\frac{m}{ht} = 2$ divides by the time when more time should mean more miles."
          },
          {
            question: "When the positive integer $n$ is divided by 5, the remainder is 3. What is the remainder when $2n$ is divided by 5?",
            options: ['$1$', '$2$', '$3$', '$6$'],
            correctAnswer: 0,
            explanation: "Pick $n = 8$ (8 divided by 5 leaves 3). Then $2n = 16$, and 16 divided by 5 leaves 1. Check with $n = 13$: $26$ leaves 1 again. 3 repeats the remainder of $n$ instead of $2n$; 6 doubles the remainder but a remainder upon division by 5 must be less than 5 (6 reduces to 1); 2 does not appear for any valid $n$."
          },
          {
            question: "If $a$ is negative and $b$ is positive, which of the following must be negative?",
            options: ['$a + b$', '$a^2 b$', '$b - a$', '$\\frac{a}{b}$'],
            correctAnswer: 3,
            explanation: "A negative divided by a positive is always negative, so $\\frac{a}{b}$ must be negative (try $a = -2$, $b = 4$: $-0.5$). $a + b$ can be positive ($-2 + 4 = 2$); $a^2 b$ is positive because $a^2$ is positive; $b - a$ subtracts a negative, so it is always positive."
          }
        ]
      }
    },
    {
      id: 'act-m4-input1',
      type: 'input-boxes' as const,
      content: `
**Pick Numbers, Then Answer** ✏️

1) If $n$ is an even integer, what is the remainder when $n^2 + 3$ is divided by 4?

2) A price is raised by 50% and then the new price is cut by 50%. The final price is what percent of the original price? (Enter the number only.)

3) If $\\frac{x}{y} = 3$, what is the value of $\\frac{x + y}{y}$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '75', '4'],
        hint1: 'Try $n = 2$: $4 + 3 = 7$. Then try $n = 4$.',
        hint2: 'Start at 100: up 50%, then down 50% of the new price.',
        hint3: 'Pick $y = 1$ and $x = 3$.',
        explanation: '1) $n = 2$ gives 7 and $n = 4$ gives 19; both leave remainder 3 because the square of an even number is a multiple of 4. 2) $100 \\to 150 \\to 75$, so 75%. 3) With $x = 3$, $y = 1$: $\\frac{4}{1} = 4$.'
      }
    },
    {
      id: 'act-m4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Pick and Check

| # | Problem | Numbers to pick | Answer |
|---|---------|-----------------|--------|
| 1 | A population grows 10% and then 10% again. What is the total percent increase? | Start at 100 | 21% |
| 2 | If $k$ is odd, which is even: $k + 2$, $3k$, $k^2$, or $k + 1$? | $k = 3$: 5, 9, 9, 4 | $k + 1$ |
| 3 | Every side of a rectangle is doubled. The area is multiplied by what? | $2 \\times 3 \\to 4 \\times 6$ | $4$ |
| 4 | If $x + y = s$, what is the average of $x$, $y$, and $2s$, in terms of $s$? | $x = 2$, $y = 4$, $s = 6$ | $s$ |

**ACT Tip:** In problem 4, picking numbers gives an average of $\\frac{2 + 4 + 12}{3} = 6$, which equals $s$. Then just check which choice equals 6 when $s = 6$.
      `
    },
    {
      id: 'act-m4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "The length of a rectangle is increased by 20% and its width is decreased by 10%. What is the effect on the rectangle's area?",
            options: ['A 10% increase', 'An 8% increase', 'An 8% decrease', 'A 2% increase'],
            correctAnswer: 1,
            explanation: "Pick a 10 by 10 square with area 100. The new length is 12 and the new width is 9, so the new area is 108: an 8% increase. A 10% increase comes from subtracting the percents ($20 - 10$), but percent changes multiply ($1.2 \\times 0.9 = 1.08$). An 8% decrease has the right size but the wrong direction; 2% has no basis in the calculation."
          },
          {
            question: "If $x > 1$, which of the following has the greatest value?",
            options: ['$\\sqrt{x}$', '$x$', '$\\frac{1}{x}$', '$x^2$'],
            correctAnswer: 3,
            explanation: "Pick $x = 4$: $\\sqrt{4} = 2$, $x = 4$, $\\frac{1}{4} = 0.25$, $x^2 = 16$. For any number greater than 1, squaring makes it larger, so $x^2$ is greatest. The square root shrinks numbers greater than 1, and the reciprocal of a number greater than 1 is less than 1."
          },
          {
            question: "If $0 < x < 1$, which of the following has the least value?",
            options: ['$x^2$', '$\\sqrt{x}$', '$x + 1$', '$\\frac{1}{x}$'],
            correctAnswer: 0,
            explanation: "Pick $x = \\frac{1}{4}$: $x^2 = \\frac{1}{16}$, $\\sqrt{x} = \\frac{1}{2}$, $x + 1 = \\frac{5}{4}$, $\\frac{1}{x} = 4$. For fractions between 0 and 1, squaring makes the number smaller, so $x^2$ is least. The square root of such a fraction is larger than the fraction, $x + 1$ is always greater than 1, and the reciprocal is greater than 1. (Picking a number greater than 1 here would break the condition and give the wrong answer.)"
          },
          {
            question: "Ana has twice as many books as Ben, and Ben has 5 fewer books than Cal. If Cal has $c$ books, how many books do Ana and Ben have together, in terms of $c$?",
            options: ['$3c - 5$', '$3c + 5$', '$3c - 15$', '$c - 5$'],
            correctAnswer: 2,
            explanation: "Pick $c = 10$: Ben has 5 and Ana has 10, so together they have 15. $3c - 15 = 15$ ✓. $3c - 5 = 25$ subtracts the 5 only once, but Ana's count loses 10 and Ben's loses 5; $3c + 5 = 35$ adds where it should subtract; $c - 5 = 5$ is Ben's count alone."
          }
        ]
      }
    },
    {
      id: 'act-m4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Pick numbers** when choices contain variables, the question says "in terms of," a percent problem has no starting value, or the question asks what "must be true."
- **Avoid 0, 1, and numbers already in the problem;** use different values for different variables and make the arithmetic easy.
- **Find the target first,** then test **all four** choices. If two match, pick new numbers.
- **Percents:** start at 100. Successive percent changes multiply; they do not add.
- **Must be true:** try to break each choice with negatives, fractions between 0 and 1, and large numbers.
      `
    }
  ]
}
