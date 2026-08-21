export const lessonData = {
  topicSlug: 'sat-scatterplots-line-fit-core-skills',
  sections: [
    {
      id: 'scat-core-p1-intro',
      type: 'text' as const,
      content: `# Scatterplots & Line of Best Fit: The Basics

**Part 1 of 2 — Read the Direction, Use the Equation**

A **scatterplot** is a graph made of dots. Each dot is one thing that got measured twice — for example, one student's study hours and that same student's test score.

A **line of best fit** is a single straight line drawn through the middle of those dots. It is not meant to touch every dot. It is meant to show the general direction they are heading.

### Direction: is it going up or down?

Read the dots from left to right, the same way you read a sentence.

- Dots **rising** from left to right → **positive** association. As $x$ gets bigger, $y$ tends to get bigger too.
- Dots **falling** from left to right → **negative** association. As $x$ gets bigger, $y$ tends to get smaller.
- Dots with **no pattern at all** → no association.

### The equation of the line

The line of best fit comes with an equation that looks like this:

$y = 2x + 5$

Two numbers matter, and each one has a plain-English meaning.

- The number in front of $x$ is the **slope**. Here the slope is $2$. It means: **every time $x$ goes up by $1$, $y$ goes up by about $2$.**
- The number added at the end is the **y-intercept**. Here it is $5$. It means: **when $x$ is $0$, the predicted $y$ is $5$.**

A positive slope means the line goes up. A negative slope, like the $-3$ in $y = -3x + 40$, means the line goes down.

### Worked example: making a prediction

*Using $y = 2x + 5$, predict $y$ when $x = 4$.*

Put $4$ in for $x$:

$y = 2(4) + 5$

Multiply first: $2 \\times 4 = 8$.

$y = 8 + 5$

Add: $y = 13$.

The predicted value is $13$. Substitute, multiply, add. That is the whole move.

### Real dots versus the line

Sometimes a real dot sits above or below the line. The gap between them is called the **residual**, and you find it by subtracting:

residual $=$ actual $-$ predicted

If the real value is $15$ and the line predicted $13$, the residual is $15 - 13 = 2$. A positive residual means the dot sits **above** the line.`
    },
    {
      id: 'scat-core-p1-q1',
      type: 'quiz' as const,
      question: `A scatterplot shows dots that rise steadily from left to right in a roughly straight pattern. How would you describe the association?`,
      options: [
        'No association',
        'Negative linear — as $x$ increases, $y$ decreases',
        'The dots form a U shape',
        'Positive linear — as $x$ increases, $y$ also increases'
      ],
      correctAnswer: 3,
      explanation: `Read the dots from left to right. They are rising, which means that as $x$ gets bigger, $y$ gets bigger too. That is a positive association, and because the dots follow a roughly straight path it is called positive linear. A negative association would show dots falling as you move to the right, which is the opposite of what happens here.`
    },
    {
      id: 'scat-core-p1-q2',
      type: 'quiz' as const,
      question: `The line of best fit for a set of data is $y = 3x + 4$. Predict the value of $y$ when $x = 5$.`,
      options: ['$12$', '$15$', '$19$', '$22$'],
      correctAnswer: 2,
      explanation: `Substitute $5$ in for $x$: $y = 3(5) + 4$. Multiply first: $3 \\times 5 = 15$. Then add: $15 + 4 = 19$. The predicted value is $19$. The answer $15$ is what you get if you multiply but forget to add the $4$ at the end.`
    },
    {
      id: 'scat-core-p1-q3',
      type: 'quiz' as const,
      question: `A line of best fit is $y = 4x + 10$. What does the slope of $4$ tell you?`,
      options: [
        'Each time $x$ increases by $1$, $y$ increases by about $4$',
        'The value of $y$ is always $4$',
        'There are $4$ dots on the scatterplot',
        'When $x$ is $0$, $y$ is $4$'
      ],
      correctAnswer: 0,
      explanation: `The slope is the number in front of $x$, which is $4$ here. Slope always answers the same question: how much does $y$ change when $x$ goes up by $1$? So each time $x$ increases by $1$, $y$ increases by about $4$. The statement "when $x$ is $0$, $y$ is $4$" describes a y-intercept, and in this equation the y-intercept is $10$, not $4$.`
    },
    {
      id: 'scat-core-p1-q4',
      type: 'quiz' as const,
      question: `A line of best fit is $y = -2x + 30$. What does the negative slope tell you about the data?`,
      options: [
        'The values of $y$ are always negative',
        'As $x$ increases, $y$ tends to decrease',
        'As $x$ increases, $y$ tends to increase',
        'There is no association between $x$ and $y$'
      ],
      correctAnswer: 1,
      explanation: `The slope is $-2$, and the minus sign is what matters. A negative slope means that every time $x$ goes up by $1$, $y$ goes down by about $2$, so as $x$ increases, $y$ tends to decrease. The line points downhill as you read left to right. A negative slope does not mean the $y$ values themselves are negative — at $x = 5$, for example, this line predicts $y = -2(5) + 30 = -10 + 30 = 20$, which is positive.`
    }
  ]
}
