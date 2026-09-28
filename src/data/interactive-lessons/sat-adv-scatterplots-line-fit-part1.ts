export const lessonData = {
  topicSlug: 'sat-scatterplots-line-fit-advanced',
  sections: [
    {
      id: 'scat-adv-p1-intro',
      type: 'text' as const,
      content: `# Scatterplots & Line of Fit: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

At this tier the arithmetic is trivial. What is being tested is whether you know **exactly what a line of best fit claims** — and, more often, what it does *not* claim.

### Archetype 1: The Residual, With Its Sign Intact

$$\\text{residual} = \\text{actual} - \\text{predicted}$$

A **positive** residual means the point sits **above** the line; a negative residual means below. Hard items give you the residual and the model and ask for the actual value, which means running the definition backwards:

$$\\text{actual} = \\text{predicted} + \\text{residual}$$

The trap is subtracting when you should add, and it is available as an option every single time.

### Archetype 2: Slope and Intercept as Sentences

For $C = 62v + 410$, where $v$ is the number of vans in a fleet: the slope $62$ is "each additional van is associated with **\\$62** more per month"; the intercept $410$ is "the predicted cost when $v = 0$." Note **associated with**, not "causes" — a line of best fit never establishes causation, and an option that says "causes" is wrong on that word alone.

### Archetype 3: Extrapolation Beyond the Data

A model built from children **2 to 10 years old** says nothing reliable about a 30-year-old adult. Items plant an input far outside the stated range, and the correct answer is always that the prediction is unreliable *because the input is outside the range the model was built from*. Frequently the model also predicts something impossible — a negative price, a negative mass — which is the confirming clue.

### Archetype 4: Two Competing Models

Two lines, two contexts (two cities, two brands, two groups). The questions are always one of three:

- **When are they equal?** Set the expressions equal and solve.
- **Which changes faster?** Compare $|\\text{slope}|$.
- **Which starts higher?** Compare intercepts.

Solving for the input and then reporting the *output* — or vice versa — is the built-in trap.

### Archetype 5: Which Model Fits Better

Given two sets of residuals for the same data, the better model is the one whose residuals are **smaller in absolute value**. Adding the residuals with their signs proves nothing: a miss of $+5$ and a miss of $-5$ cancel to $0$, so a line with big misses in both directions can still have residuals that "sum to zero." That signed sum is precisely the distractor offered.

### Archetype 6: What One New Point Does

- A point far above the others at a **typical $x$** raises the intercept and barely moves the slope.
- A point at an **extreme $x$** (high leverage) can swing the slope substantially.
- Any point far off the pattern **weakens** the association.`
    },
    {
      id: 'scat-adv-p1-q1',
      type: 'quiz' as const,
      question: `The line of best fit for a data set is $y = 3.8x + 14.6$. One data point in the set has $x = 9$ and a residual of $-4.3$. What is the actual $y$-value of that data point?`,
      options: ['$34.2$', '$44.5$', '$48.8$', '$53.1$'],
      correctAnswer: 1,
      explanation: `The predicted value is $3.8(9) + 14.6 = 34.2 + 14.6 = 48.8$. Since residual $=$ actual $-$ predicted, the actual value is $48.8 + (-4.3) = 44.5$. The traps: $53.1$ subtracts the negative residual instead of adding it, the single most common slip in this archetype; $48.8$ is the PREDICTED value, which is the answer to a question that was not asked; $34.2$ is $3.8(9)$ with the intercept dropped.`
    },
    {
      id: 'scat-adv-p1-q2',
      type: 'quiz' as const,
      question: `For two brands of battery, the lines of best fit relating the number of hours $h$ of use to the remaining charge $c$, as a percent, are $c = 100 - 8h$ for Brand X and $c = 94 - 5h$ for Brand Y. According to the models, after how many hours of use do the two brands have the same remaining charge?`,
      options: ['$0.46$', '$2$', '$6$', '$84$'],
      correctAnswer: 1,
      explanation: `Set the expressions equal: $100 - 8h = 94 - 5h$, so $6 = 3h$ and $h = 2$ hours. The traps: $84$ is the remaining CHARGE at that moment ($100 - 8(2)$), the right work reported in the wrong units and the most attractive wrong answer here; $6$ is the difference in intercepts, the numerator of the calculation left unfinished; $0.46$ divides that $6$ by the SUM of the slopes ($8 + 5 = 13$) rather than their difference.`
    },
    {
      id: 'scat-adv-p1-q3',
      type: 'quiz' as const,
      question: `A line of best fit relating the outdoor temperature $t$, in degrees Fahrenheit, to the number of cups $C$ of hot cocoa a stand sells in a day is $C = 210 - 3.5t$. The model was built from days when the temperature was between $20$ and $50$ degrees Fahrenheit. The owner uses it to predict sales on a day when the temperature is $75$ degrees Fahrenheit. Which statement best describes this prediction?`,
      options: [
        'It is reliable, because a linear model gives a valid prediction for every input',
        'It is unreliable, because the input is far outside the span of the data used',
        'It is reliable, because the negative slope shows that sales fall as it warms',
        'It is unreliable, because the model has a nonzero intercept for its sales axis'
      ],
      correctAnswer: 1,
      explanation: `A line of best fit describes only the range of data it was built from. Predicting at $t = 75$ is extrapolation, and here the model returns $210 - 3.5(75) = 210 - 262.5 = -52.5$ cups, a negative number of sales, which confirms the model has been pushed past where it means anything. The traps: the every-input option is false, because a linear model is trustworthy only near the data it came from; the negative-slope option is especially tempting because "sales fall as it warms" is genuinely what the model says, but that true fact does not address the range problem at all; the nonzero-intercept option objects to the intercept, which is a normal feature of every such model.`
    }
  ]
}
