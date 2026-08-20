export const lessonData = {
  topicSlug: 'sat-scatterplots-line-fit-advanced',
  sections: [
    {
      id: 'scat-adv-p3-intro',
      type: 'text' as const,
      content: `# Scatterplots & Line of Fit: Timed Drill

**Part 3 of 3 — Four Items at Test Pace**

About **90 seconds each**. These cover the four highest-frequency hard-tier skeletons: the two-model crossing, the signed residual, the slope-as-a-sentence interpretation, and the two-points-at-the-same-$x$ residual chain.

Before each answer:

1. **What unit does the final clause ask for?** Time or value? Actual or predicted?
2. **Did I subtract slopes**, not add them?
3. **Is the residual's sign consistent with above/below the line?**`
    },
    {
      id: 'scat-adv-p3-q1',
      type: 'quiz' as const,
      question: `For two cities, the lines of best fit relating $t$, the number of years since $2010$, to $R$, the median monthly rent in dollars, are $R = 1180 + 46t$ for City P and $R = 1420 + 22t$ for City Q. According to the models, how many years after $2010$ will the two cities have equal median monthly rent?`,
      options: ['$3.5$', '$10$', '$24$', '$240$'],
      correctAnswer: 1,
      explanation: `Set them equal: $1180 + 46t = 1420 + 22t$, so $24t = 240$ and $t = 10$ years. The traps: $240$ is the difference in intercepts — the numerator alone, with the division never performed; $24$ is the difference in slopes, the denominator alone; $3.5$ divides $240$ by the SUM of the slopes ($46 + 22 = 68$) instead of their difference, which is the error that survives longest because it still produces a sensible-looking number of years.`
    },
    {
      id: 'scat-adv-p3-q2',
      type: 'quiz' as const,
      question: `A biologist models the mass $m$, in grams, of a seedling $d$ days after planting with the line of best fit $m = 0.85d + 2.4$. One seedling measured on day $12$ has an actual mass of $11.0$ grams. Which statement about this data point is correct?`,
      options: [
        'The residual is $1.6$, and the point lies above the line of best fit',
        'The residual is $-1.6$, and the point lies below the line of best fit',
        'The residual is $-1.6$, and the point lies above the line of best fit',
        'The residual is $8.6$, and the point lies above the line of best fit'
      ],
      correctAnswer: 1,
      explanation: `The predicted mass is $0.85(12) + 2.4 = 12.6$ grams. The residual is actual $-$ predicted $= 11.0 - 12.6 = -1.6$, and because the actual mass is less than predicted, the point sits BELOW the line. The traps: the first option has the right magnitude with both the sign and the position flipped; the third gets the sign right but then contradicts it, pairing a negative residual with "above" — a pairing that is never possible; the fourth computes $11.0 - 2.4$, subtracting the intercept instead of the full predicted value.`
    },
    {
      id: 'scat-adv-p3-q3',
      type: 'quiz' as const,
      question: `An analyst models a plant's monthly maintenance cost $C$, in dollars, as $C = 46m + 890$, where $m$ is the number of machines in operation. Which of the following is the best interpretation of the number $46$ in this model?`,
      options: [
        'The predicted monthly maintenance cost when no machines are in operation is $\\$46$',
        'Each additional machine in operation is associated with an increase of $\\$46$ in the predicted monthly maintenance cost',
        'Each additional machine in operation causes the monthly maintenance cost to rise by exactly $\\$46$',
        'The plant operates about $46$ machines in a typical month'
      ],
      correctAnswer: 1,
      explanation: `In $C = 46m + 890$, the slope $46$ is the predicted change in cost per one-machine increase, and the relationship is one of association. The traps: the first option interprets $46$ as the intercept, when the cost at $m = 0$ is $\\$890$; the third is nearly identical to the correct answer but asserts CAUSATION and the word "exactly" — a line of best fit supports neither; the fourth misreads a rate as a count, treating the slope as a typical value of $m$ itself.`
    },
    {
      id: 'scat-adv-p3-q4',
      type: 'quiz' as const,
      question: `The line of best fit for a data set is $y = 3.4x + 8$. One data point with $x = 5$ has a residual of $2.6$. A second data point also has $x = 5$, and its actual $y$-value is $4.2$ less than the actual $y$-value of the first point. What is the residual of the second data point?`,
      options: ['$-6.8$', '$-1.6$', '$1.6$', '$6.8$'],
      correctAnswer: 1,
      explanation: `At $x = 5$ the predicted value is $3.4(5) + 8 = 25$, and both points share it. The first point's actual value is $25 + 2.6 = 27.6$, so the second point's actual value is $27.6 - 4.2 = 23.4$, giving a residual of $23.4 - 25 = -1.6$. Shortcut: same $x$ means the same prediction, so the residual simply shifts by the same $-4.2$: $2.6 - 4.2 = -1.6$. The traps: $1.6$ has the correct magnitude but the wrong sign, placing the point above a line it falls below; $-6.8$ and $6.8$ combine $2.6$ and $4.2$ by addition instead of subtraction.`
    }
  ]
}
