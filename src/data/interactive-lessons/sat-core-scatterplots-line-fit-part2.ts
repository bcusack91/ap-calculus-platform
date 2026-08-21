export const lessonData = {
  topicSlug: 'sat-scatterplots-line-fit-core-skills',
  sections: [
    {
      id: 'scat-core-p2-recap',
      type: 'text' as const,
      content: `# Scatterplots & Line of Best Fit: Practice

**Part 2 of 2 — Four Moves**

Almost every core scatterplot question is one of these four moves.

1. **Name the direction.** Read the dots left to right. Rising is a positive association. Falling is a negative association. No pattern means no association.
2. **Predict a value.** Take the equation, put the given number in for $x$, multiply, then add. For $y = 4x + 3$ at $x = 2$: $4 \\times 2 = 8$, then $8 + 3 = 11$.
3. **Explain the slope.** The slope is the number in front of $x$. It says how much $y$ changes each time $x$ goes up by $1$. A positive slope means $y$ goes up; a negative slope means $y$ goes down.
4. **Explain the y-intercept.** The y-intercept is the number added at the end. It is the predicted $y$ when $x = 0$ — the starting value.

### If a question asks about one real dot

- A dot far away from the general pattern is called an **outlier**.
- The gap between a real dot and the line is the **residual**: actual $-$ predicted. Predict first, then subtract. Above the line gives a positive residual; below the line gives a negative one.

### One thing to remember

The line of best fit gives a **prediction**, not a guarantee. Real dots sit a little above or below it, and that is normal.`
    },
    {
      id: 'scat-core-p2-q1',
      type: 'quiz' as const,
      question: `The line of best fit for a set of data is $y = 5x + 2$. Predict the value of $y$ when $x = 6$.`,
      options: ['$11$', '$32$', '$30$', '$37$'],
      correctAnswer: 1,
      explanation: `Substitute $6$ in for $x$: $y = 5(6) + 2$. Multiply first: $5 \\times 6 = 30$. Then add: $30 + 2 = 32$. The predicted value is $32$. The answer $30$ is the result of multiplying but leaving off the $+2$ at the end.`
    },
    {
      id: 'scat-core-p2-q2',
      type: 'quiz' as const,
      question: `A line of best fit is $y = 6x + 12$. What does the number $12$ represent?`,
      options: [
        'The slope of the line',
        'The number of data points',
        'The predicted value of $y$ when $x = 0$',
        'The largest value of $y$ in the data'
      ],
      correctAnswer: 2,
      explanation: `The number added at the end of the equation is the y-intercept, and the y-intercept is the predicted value of $y$ when $x$ is $0$. You can check it by substituting: $y = 6(0) + 12 = 0 + 12 = 12$. The slope of this line is the $6$ in front of $x$, not the $12$.`
    },
    {
      id: 'scat-core-p2-q3',
      type: 'quiz' as const,
      question: `On a scatterplot, most of the dots follow a clear upward path, but one dot sits far away from all the others. What is that dot called?`,
      options: ['The slope', 'The y-intercept', 'The line of best fit', 'An outlier'],
      correctAnswer: 3,
      explanation: `A data point that sits far away from the general pattern of the other points is called an outlier. It is a single dot that does not follow the trend the rest of the data shows. The slope and the y-intercept are numbers in the equation of the line, not points on the graph.`
    },
    {
      id: 'scat-core-p2-q4',
      type: 'quiz' as const,
      question: `A line of best fit is $y = 2x + 6$. For a data point with $x = 3$, the actual value of $y$ is $15$. What is the residual for that point?`,
      options: ['$3$', '$-3$', '$15$', '$12$'],
      correctAnswer: 0,
      explanation: `Start by predicting. Substitute $3$ in for $x$: $y = 2(3) + 6$. Multiply first: $2 \\times 3 = 6$. Then add: $6 + 6 = 12$, so the line predicts $12$. Now use residual $=$ actual $-$ predicted: $15 - 12 = 3$. The residual is $3$, and because it is positive the real dot sits above the line. The answer $-3$ comes from subtracting in the other order, predicted minus actual.`
    }
  ]
}
