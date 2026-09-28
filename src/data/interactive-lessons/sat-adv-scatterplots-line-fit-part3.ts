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
      question: `For two cities, the lines of best fit relating $t$, the number of years since $2012$, to $R$, the median monthly rent in dollars, are $R = 1240 + 55t$ for City P and $R = 1480 + 35t$ for City Q. According to the models, how many years after $2012$ will the two cities have equal median monthly rent?`,
      options: ['$2.7$', '$12$', '$20$', '$240$'],
      correctAnswer: 1,
      explanation: `Set them equal: $1240 + 55t = 1480 + 35t$, so $20t = 240$ and $t = 12$ years. The traps: $240$ is the difference in intercepts, the numerator alone with the division never performed; $20$ is the difference in slopes, the denominator alone; $2.7$ divides $240$ by the SUM of the slopes ($55 + 35 = 90$) instead of their difference, which is the error that survives longest because it still produces a sensible-looking number of years.`
    },
    {
      id: 'scat-adv-p3-q2',
      type: 'quiz' as const,
      question: `A botanist models the height $h$, in centimeters, of a sunflower $w$ weeks after it sprouts with the line of best fit $h = 6.5w + 3.2$. One sunflower measured in week $8$ has an actual height of $51.8$ centimeters. Which statement about this data point is correct?`,
      options: [
        'The residual is $3.4$, and the point lies above the line of best fit',
        'The residual is $-3.4$, and the point lies below the line of best fit',
        'The residual is $-3.4$, and the point lies above the line of best fit',
        'The residual is $48.6$, and the point lies above the line of best fit'
      ],
      correctAnswer: 1,
      explanation: `The predicted height is $6.5(8) + 3.2 = 55.2$ centimeters. The residual is actual $-$ predicted $= 51.8 - 55.2 = -3.4$, and because the actual height is less than predicted, the point sits BELOW the line. The traps: the $3.4$-above option has the right magnitude with both the sign and the position flipped; the $-3.4$-above option gets the sign right but then contradicts it, pairing a negative residual with "above," a pairing that is never possible; the $48.6$ option computes $51.8 - 3.2$, subtracting the intercept instead of the full predicted value.`
    },
    {
      id: 'scat-adv-p3-q3',
      type: 'quiz' as const,
      question: `A school district models its monthly bus fuel cost $F$, in dollars, as $F = 38r + 1250$, where $r$ is the number of bus routes in operation. Which of the following is the best interpretation of the number $38$ in this model?`,
      options: [
        'The predicted monthly fuel cost when no routes are in operation is $\\$38$',
        'Each additional route in operation is associated with an increase of $\\$38$ in the predicted monthly fuel cost',
        'Each additional route in operation causes the monthly fuel cost to rise by exactly $\\$38$',
        'The district operates about $38$ bus routes in a typical month'
      ],
      correctAnswer: 1,
      explanation: `In $F = 38r + 1250$, the slope $38$ is the predicted change in cost per one-route increase, and the relationship is one of association. The traps: the no-routes option interprets $38$ as the intercept, when the predicted cost at $r = 0$ is $\\$1{,}250$; the causes-exactly option is nearly identical to the correct answer but asserts CAUSATION and the word "exactly," and a line of best fit supports neither; the 38-routes option misreads a rate as a count, treating the slope as a typical value of $r$ itself.`
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
