export const lessonData = {
  topicSlug: 'sat-scatterplots-line-fit-advanced',
  sections: [
    {
      id: 'scat-adv-p2-traps',
      type: 'text' as const,
      content: `# Scatterplots & Line of Fit: Traps & Speed

**Part 2 of 3 — Distractor Autopsy**

### Distractor Species 1: The Sign of the Residual

Every residual item offers both $+r$ and $-r$. Anchor on the picture, not the formula: **above the line is positive, below is negative.** If the actual value is smaller than the predicted value, the residual is negative — no exceptions.

### Distractor Species 2: Input Reported as Output

"After how many **hours** are the charges equal?" and "**what** is the charge when they are equal?" have different answers, and both are in the options. Circle the unit in the final clause before you solve.

### Distractor Species 3: The Sum-of-Residuals Decoy

A line of best fit runs through the middle of the data, with points above it and points below it, so positive and negative residuals cancel and the signed sum lands near zero for a good fit and a bad fit alike. So "Model 1's residuals sum to zero, therefore Model 1 fits better" is a statement with no content. Compare **magnitudes**, never the signed sum.

### Distractor Species 4: "Causes"

The correct interpretation of a slope is always **associated with**. An option that says the predictor *causes* the response, or that changing $x$ *will produce* a change in $y$, is wrong regardless of how well the arithmetic matches.

### Distractor Species 5: The Plausible Irrelevant Truth

In extrapolation and interpretation items, one distractor is a **true statement that answers a different question** — "the slope is negative, so value decreases." True, and beside the point. Ask whether the statement addresses the specific concern the question raised.

### Distractor Species 6: Anchor-Point Confusion

When a line is defined by two points, the intercept is *not* one of the given $y$-values. Using $52$ from $(4, 52)$ as the $y$-intercept produces a clean, wrong prediction.

---

## Speed Techniques

**Residual, one line.** actual $=$ predicted $+$ residual. Write it down before computing anything.

**Slope from two points, then anchor.** Compute $m = \\frac{y_{2} - y_{1}}{x_{2} - x_{1}}$, then use point-slope from *either* given point — never assume a given point is the intercept.

**Two models, one subtraction.** For $y = a_{1} + b_{1}t$ and $y = a_{2} + b_{2}t$, the crossing is at
$$t = \\frac{a_{2} - a_{1}}{b_{1} - b_{2}}$$
Dividing by the *sum* of the slopes is a planted option, so check that you subtracted.

**Better fit, at a glance.** Scan the two residual lists for the largest absolute value. The model whose worst miss is smaller almost always wins, and you rarely need to compute anything.`
    },
    {
      id: 'scat-adv-p2-q1',
      type: 'quiz' as const,
      question: `Two linear models were fit to the same $8$-point data set. The residuals from Model 1 are $2.3$, $-1.9$, $1.2$, $-2.6$, $1.4$, $-0.8$, $2.2$, and $-1.8$. The residuals from Model 2 are $0.6$, $-0.9$, $1.1$, $-0.4$, $0.8$, $-1.2$, $0.5$, and $-0.7$. Which statement is best supported by the residuals?`,
      options: [
        'Model 1 fits the data better, because its residuals sum to exactly zero while Model 2’s do not',
        'Model 2 fits the data better, because its residuals are smaller in absolute value',
        'The two models fit equally well, because each has four positive and four negative residuals',
        'Model 1 fits the data better, because its residuals cover a wider range of values'
      ],
      correctAnswer: 1,
      explanation: `Model 1's residuals run as large as $2.6$ in magnitude; Model 2's never exceed $1.2$. Smaller residuals mean the predictions sit closer to the actual data, so Model 2 is the better fit. The traps: the sum-to-zero option is a genuine arithmetic observation (Model 1's residuals really do sum to $0$ while Model 2's sum to $-0.2$), but positive and negative residuals cancel in a signed sum, so a sum near zero can hide large misses and distinguishes nothing; the equal-fit option counts signs, which is equally uninformative; the wider-range option treats a wider spread of errors as a virtue when it is the definition of a worse fit.`
    },
    {
      id: 'scat-adv-p2-q2',
      type: 'quiz' as const,
      question: `A scatterplot of $40$ points shows a strong positive linear association. A new point is then included in the data. Its $x$-value lies near the middle of the existing $x$-values, and its $y$-value is far below all of the other points. Which of the following best describes the effect on the line of best fit?`,
      options: [
        'The slope decreases sharply, while the $y$-intercept is nearly unchanged',
        'The slope changes very little, while the $y$-intercept decreases',
        'Both the slope and the $y$-intercept are unchanged, because a single point among $41$ cannot affect a line of best fit',
        'The slope becomes negative, because the new point breaks the positive association'
      ],
      correctAnswer: 1,
      explanation: `A point at a typical $x$-value has almost no leverage to rotate the line (it sits near the balance point), so the slope barely moves. But it pulls the whole line downward to reduce its own large residual, which lowers the intercept. The traps: the sharp-slope-decrease option describes what a point at an EXTREME $x$-value would do (high leverage rotates the line); the both-unchanged option is the common intuition that one point in forty-one is negligible, when in fact an outlier's influence is exactly what these items test; the negative-slope option overstates the effect, since one low point cannot reverse a strong positive association, though it does make it weaker.`
    },
    {
      id: 'scat-adv-p2-q3',
      type: 'quiz' as const,
      question: `A line of best fit passes through the points $(4, 52)$ and $(16, 22)$ on a scatterplot relating the number of hours $x$ that a cooling unit has been running to the temperature $y$, in degrees, inside a storage room. According to this line, what temperature is predicted at $x = 20$?`,
      options: ['$2$', '$12$', '$22$', '$92$'],
      correctAnswer: 1,
      explanation: `The slope is $\\frac{22 - 52}{16 - 4} = \\frac{-30}{12} = -2.5$, so the line is $y = 62 - 2.5x$. At $x = 20$: $62 - 50 = 12$ degrees. (Check from the other point: $22 - 2.5(20 - 16) = 12$.) The traps: $2$ treats $52$ as the $y$-intercept and computes $52 - 2.5(20)$, forgetting that $(4, 52)$ is not on the $y$-axis; $92$ uses a slope of $+2.5$ from $(4, 52)$, ignoring that the temperature is falling; $22$ simply reports the $y$-value at the nearest given point, $x = 16$.`
    }
  ]
}
