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

For $C = 46m + 890$: the slope $46$ is "each additional machine is associated with **\\$46** more per month"; the intercept $890$ is "the predicted cost when $m = 0$." Note **associated with**, not "causes" — a line of best fit never establishes causation, and an option that says "causes" is wrong on that word alone.

### Archetype 3: Extrapolation Beyond the Data

A model built from cars **1 to 8 years old** says nothing reliable about a 15-year-old car. Items plant an input far outside the stated range, and the correct answer is always that the prediction is unreliable *because the input is outside the range the model was built from*. Frequently the model also predicts something impossible — a negative price, a negative mass — which is the confirming clue.

### Archetype 4: Two Competing Models

Two lines, two contexts (two cities, two brands, two groups). The questions are always one of three:

- **When are they equal?** Set the expressions equal and solve.
- **Which changes faster?** Compare $|\\text{slope}|$.
- **Which starts higher?** Compare intercepts.

Solving for the input and then reporting the *output* — or vice versa — is the built-in trap.

### Archetype 5: Which Model Fits Better

Given two sets of residuals for the same data, the better model is the one whose residuals are **smaller in absolute value**. Residuals of a least-squares line always sum to about zero, so "these sum to zero" is evidence of nothing at all — and that is precisely the distractor offered.

### Archetype 6: What One New Point Does

- A point far above the others at a **typical $x$** raises the intercept and barely moves the slope.
- A point at an **extreme $x$** (high leverage) can swing the slope substantially.
- Any point far off the pattern **weakens** the correlation.`
    },
    {
      id: 'scat-adv-p1-q1',
      type: 'quiz' as const,
      question: `The line of best fit for a data set is $y = 4.6x + 11.2$. One data point in the set has $x = 8$ and a residual of $-3.5$. What is the actual $y$-value of that data point?`,
      options: ['$36.8$', '$44.5$', '$48.0$', '$51.5$'],
      correctAnswer: 1,
      explanation: `The predicted value is $4.6(8) + 11.2 = 48.0$. Since residual $=$ actual $-$ predicted, the actual value is $48.0 + (-3.5) = 44.5$. The traps: $51.5$ subtracts the negative residual instead of adding it, the single most common slip in this archetype; $48.0$ is the PREDICTED value, which is the answer to a question that was not asked; $36.8$ is $4.6(8)$ with the intercept dropped.`
    },
    {
      id: 'scat-adv-p1-q2',
      type: 'quiz' as const,
      question: `For two brands of battery, the lines of best fit relating the number of hours $h$ of use to the remaining charge $c$, as a percent, are $c = 100 - 7.5h$ for Brand X and $c = 96 - 5.5h$ for Brand Y. According to the models, after how many hours of use do the two brands have the same remaining charge?`,
      options: ['$0.31$', '$2$', '$4$', '$85$'],
      correctAnswer: 1,
      explanation: `Set the expressions equal: $100 - 7.5h = 96 - 5.5h$, so $4 = 2h$ and $h = 2$ hours. The traps: $85$ is the remaining CHARGE at that moment ($100 - 7.5(2)$) — the right work reported in the wrong units, and the most attractive wrong answer here; $4$ is the difference in intercepts, the numerator of the calculation left unfinished; $0.31$ divides that $4$ by the SUM of the slopes ($7.5 + 5.5 = 13$) rather than their difference.`
    },
    {
      id: 'scat-adv-p1-q3',
      type: 'quiz' as const,
      question: `A line of best fit relating a car's age $a$, in years, to its resale value $V$, in dollars, is $V = 24800 - 2150a$. The model was built from data on cars between $1$ and $8$ years old. A student uses it to predict the resale value of a $15$-year-old car. Which statement best describes this prediction?`,
      options: [
        'It is reliable, because the relationship is linear and linear models apply to every input',
        'It is unreliable, because $15$ lies far outside the $1$-to-$8$-year range the model was built from — and the model predicts a negative value, which is impossible',
        'It is reliable, because the slope is negative and a car’s value should indeed decrease with age',
        'It is unreliable, because the model has a nonzero $V$-intercept'
      ],
      correctAnswer: 1,
      explanation: `A line of best fit describes only the range of data it was built from. Predicting at $a = 15$ is extrapolation, and here the model returns $24800 - 2150(15) = -7450$ dollars — a negative resale value, which confirms the model has been pushed past where it means anything. The traps: the first and third options are both true statements about the model that do not address the range problem at all — the third is especially tempting because "value decreases with age" is genuinely correct; the fourth objects to the intercept, which is a normal feature of every such model.`
    }
  ]
}
