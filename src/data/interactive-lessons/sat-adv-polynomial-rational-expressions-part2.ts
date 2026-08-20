export const lessonData = {
  topicSlug: 'sat-polynomial-rational-expressions-advanced',
  sections: [
    {
      id: 'prex2-traps',
      type: 'text' as const,
      content: `# Polynomial & Rational Expressions: Traps & Speed

**Part 2 of 3 — Distractor Species and Fast Routes**

### Species 1: The Other Coordinate, The Other Feature

Rational-graph items generate a small family of numbers — hole $x$, hole $y$, vertical asymptote, horizontal asymptote, $y$-intercept, $x$-intercept — and then ask for a *combination* of two of them. The options are simply the family members plus the wrong combination.

For $f(x) = \\frac{3x^{2}-12}{x^{2}+x-6} = \\frac{3(x-2)(x+2)}{(x+3)(x-2)}$: the hole is at $x = 2$ with height $\\frac{3(4)}{5} = \\frac{12}{5}$, the vertical asymptote is $x = -3$, and the horizontal asymptote is $y = 3$. A question asking for the hole's $y$-coordinate has $2$, $-3$, and $3$ waiting for you. **Label every feature you compute** — "hole $x$," "VA" — so you can match the label to the ask.

The combination trap is its own species: when the ask is a **sum** and one value is negative, subtracting instead of adding produces a clean-looking option. $5 + \\left(-\\frac{5}{2}\\right) = \\frac{5}{2}$, but $\\frac{15}{2}$ is on the list.

### Species 2: The Extraneous Root Kept (or the Valid Root Thrown Away)

Both directions are planted on every equation item. The fix is mechanical: **the first thing you write is the excluded values.** $x \\ne 1$, $x \\ne -1$. Then solve, then cross-check the candidate list against it. Zero is legal unless a bare $x$ sits in a denominator.

### Species 3: The Intermediate Root

Work-rate and per-person-cost items are two-stage: solve a quadratic for $x$, then convert $x$ into the requested quantity. Both stages produce numbers, and the stage-one number is always a choice.

- Pumps: you solve for pump A's time; the question wants pump B's, $x + 3$.
- Bus charter: you solve for the original headcount $n$; the question wants the **new cost per person**, $\\frac{600}{n+5}$.
- Defect model: you solve for both training times; the question wants the **elapsed weeks between them**.

The rejected negative root is also planted, as is the value handed to you in the stem (the combined time, the flat fee).

### Species 4: Averaging What Cannot Be Averaged

Two equal-distance legs at $10$ and $15$ mph do **not** average $12.5$ mph. Average speed is $\\frac{\\text{total distance}}{\\text{total time}} = \\frac{60}{5} = 12$. Similarly, when total distance rises $20\\%$ and fuel rises $25\\%$, fuel economy scales by $\\frac{1.20}{1.25} = 0.96$ — a $4\\%$ **decrease**. The three planted errors are the reciprocal ratio ($+4\\%$), the subtracted percents ($5\\%$), and both at once.

### Species 5: The Sign Flip in a Difference

$3 - x = -(x - 3)$, $y^{2} - x^{2} = -(x^{2} - y^{2})$. In a complex fraction, that single negative is usually the only thing separating the right answer from the top distractor. Whenever a numerator and a denominator contain the same two terms in opposite order, **write the negative sign out explicitly** rather than cancelling in your head.`
    },
    {
      id: 'prex2-speed',
      type: 'text' as const,
      content: `### Speed Techniques

**1. Factor before you read the question again.** With the expression factored, holes, asymptotes, intercepts, and cancellations are all visible at once, and you can answer whichever of them is asked in five seconds.

**2. Clear denominators in one multiplication.** Identify the LCD (usually the difference of squares already sitting in the problem: $x^{2} - 1 = (x-1)(x+1)$, $x^{2} - 4 = (x-2)(x+2)$) and multiply **every term**, including the lone constant on the right. Skipping the constant is the single most common clearing error and always has a dedicated wrong answer.

**3. When a fraction equals zero, only the numerator matters.** $\\frac{-2x+7}{(x-2)(x+1)} = 0$ needs $-2x + 7 = 0$, so $x = \\frac{7}{2}$ — after confirming it is not an excluded value. Do not solve the denominator.

**4. Inequalities with a guaranteed-positive denominator are safe.** In context, $p > 0$ or $x \\ge 1$, so you may multiply through by $p$ without flipping the sign. $\\frac{45 + 4p}{p} \\le 4.5$ becomes $45 \\le 0.5p$, so $p \\ge 90$. Outside of context, do not multiply by a variable of unknown sign.

**5. Counting integer solutions: simplify, solve, count inclusively, then remove excluded values.** From $\\frac{n^{2}-100}{n-10} = n + 10$, the condition $n + 10 \\ge 30$ gives $n \\ge 20$, and the count from $20$ to $30$ is $30 - 20 + 1 = 11$. Two errors are planted: dropping the $+1$, and forgetting to remove the excluded value when it falls inside the range.

**6. Verify a messy root by substitution, not by re-deriving.** If you get $x = \\frac{13}{2}$, plugging it back into the original equation on your calculator takes fifteen seconds and catches every distribution error at once.

**Pacing:** a factor-and-read item (hole, asymptote, intercept) should take $45$ seconds. An equation with extraneous-root checking, about $75$. A two-stage context model — quadratic, then convert — is a full $2$ minutes, and it is worth it, because that is precisely where the intermediate-value trap lives.`
    },
    {
      id: 'prex2-q1',
      type: 'quiz' as const,
      question: 'A runner covers a $12$-mile course at a constant rate of $r$ miles per hour and then returns over the same $12$ miles at $r + 2$ miles per hour. The round trip takes $5$ hours. What is the runner\'s average speed, in miles per hour, for the entire round trip?',
      options: [
        '$4$',
        '$4.8$',
        '$5$',
        '$6$'
      ],
      correctAnswer: 1,
      explanation: 'Total time: $\\frac{12}{r} + \\frac{12}{r+2} = 5$. Multiply by $r(r+2)$: $12(r+2) + 12r = 5r(r+2)$, so $24r + 24 = 5r^{2} + 10r$ and $5r^{2} - 14r - 24 = 0$. Factoring, $(5r + 6)(r - 4) = 0$, and the positive root is $r = 4$, so the return leg is $6$ mph. Average speed is total distance over total time: $\\frac{24}{5} = 4.8$ mph. The traps: $5$ is the ARITHMETIC MEAN of $4$ and $6$, which is never the average speed over equal distances — more time is spent at the slower rate, so the true average always falls below the mean. $4$ and $6$ are the two individual leg speeds, the intermediate values.'
    },
    {
      id: 'prex2-q2',
      type: 'quiz' as const,
      question: 'For $x \\ne 0$ and $x \\ne 5$, the complex fraction $\\dfrac{\\frac{1}{x} - \\frac{1}{5}}{x - 5}$ simplifies to a single rational expression. What is its value at $x = 4$?',
      options: [
        '$\\frac{1}{20}$',
        '$-\\frac{1}{5}$',
        '$-\\frac{1}{20}$',
        '$-\\frac{1}{80}$'
      ],
      correctAnswer: 2,
      explanation: 'Combine the numerator: $\\frac{1}{x} - \\frac{1}{5} = \\frac{5 - x}{5x}$. Dividing by $x - 5$ gives $\\frac{5-x}{5x(x-5)}$, and since $5 - x = -(x - 5)$, this is $-\\frac{1}{5x}$. At $x = 4$: $-\\frac{1}{20}$. The traps: $\\frac{1}{20}$ misses the sign flip from $5 - x = -(x-5)$, which is the entire point of the item. $-\\frac{1}{5}$ simplifies to $-\\frac{1}{5}$ and loses the $x$ in the denominator. $-\\frac{1}{80}$ comes from cancelling incorrectly into $-\\frac{1}{5x^{2}}$.'
    },
    {
      id: 'prex2-q3',
      type: 'quiz' as const,
      question: 'A city measures per-capita water use as $w = \\frac{U}{P}$, where $U$ is total water used and $P$ is population. Over the next year the city\'s total water use is projected to rise by $30$ percent while its population rises by $20$ percent. How will per-capita water use change?',
      options: [
        'It will increase by about $8.3$ percent.',
        'It will decrease by about $8.3$ percent.',
        'It will increase by $10$ percent.',
        'It will decrease by $10$ percent.'
      ],
      correctAnswer: 0,
      explanation: 'The new per-capita figure is $\\frac{1.30U}{1.20P} = \\frac{1.30}{1.20} \\cdot \\frac{U}{P} \\approx 1.083w$, an INCREASE of about $8.3$ percent. The traps: "decrease by about $8.3$ percent" has the right magnitude but the wrong direction, from computing the reciprocal $\\frac{1.20}{1.30} \\approx 0.923$; sanity-check with the sizes, since the numerator grew faster than the denominator, the quotient must grow. "Increase by $10$ percent" subtracts the percent changes, $30 - 20$, which is not how a ratio of scale factors behaves. "Decrease by $10$ percent" makes both errors at once.'
    }
  ]
};
