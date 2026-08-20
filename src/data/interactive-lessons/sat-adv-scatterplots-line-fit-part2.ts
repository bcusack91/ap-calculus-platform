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

The residuals of a least-squares line always sum to approximately zero — for *any* least-squares fit, good or bad. So "Model 1's residuals sum to zero, therefore Model 1 fits better" is a statement with no content. Compare **magnitudes**, never the signed sum.

### Distractor Species 4: "Causes"

The correct interpretation of a slope is always **associated with**. An option that says the predictor *causes* the response, or that changing $x$ *will produce* a change in $y$, is wrong regardless of how well the arithmetic matches.

### Distractor Species 5: The Plausible Irrelevant Truth

In extrapolation and interpretation items, one distractor is a **true statement that answers a different question** — "the slope is negative, so value decreases." True, and beside the point. Ask whether the statement addresses the specific concern the question raised.

### Distractor Species 6: Anchor-Point Confusion

When a line is defined by two points, the intercept is *not* one of the given $y$-values. Using $46$ from $(2, 46)$ as the $y$-intercept produces a clean, wrong prediction.

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
      question: `Two linear models were fit to the same $8$-point data set. The residuals from Model 1 are $2.1$, $-1.8$, $0.9$, $-2.4$, $1.6$, $-0.7$, $2.0$, and $-1.7$. The residuals from Model 2 are $0.6$, $-0.9$, $1.1$, $-0.4$, $0.8$, $-1.2$, $0.5$, and $-0.7$. Which statement is best supported by the residuals?`,
      options: [
        'Model 1 fits the data better, because its residuals sum to exactly zero while Model 2’s do not',
        'Model 2 fits the data better, because its residuals are smaller in absolute value',
        'The two models fit equally well, because each has four positive and four negative residuals',
        'Model 1 fits the data better, because its residuals cover a wider range of values'
      ],
      correctAnswer: 1,
      explanation: `Model 1's residuals run as large as $2.4$ in magnitude; Model 2's never exceed $1.2$. Smaller residuals mean the predictions sit closer to the actual data, so Model 2 is the better fit. The traps: the first option is a genuine arithmetic observation — Model 1's residuals really do sum to $0$ while Model 2's sum to $-0.2$ — but the signed sum of least-squares residuals is always about zero regardless of fit quality, so it distinguishes nothing; the third counts signs, which is equally uninformative; the fourth treats a wider spread of errors as a virtue when it is the definition of a worse fit.`
    },
    {
      id: 'scat-adv-p2-q2',
      type: 'quiz' as const,
      question: `A scatterplot of $25$ points shows a strong positive linear association. One additional point is then added whose $x$-value is very close to the mean of the existing $x$-values, but whose $y$-value is far above every other point. Which of the following best describes the effect on the line of best fit?`,
      options: [
        'The slope increases sharply, while the $y$-intercept is nearly unchanged',
        'The slope changes very little, while the $y$-intercept increases',
        'Both the slope and the $y$-intercept are unchanged, because a single point among $26$ cannot affect a line of best fit',
        'The slope becomes negative, because the new point breaks the positive association'
      ],
      correctAnswer: 1,
      explanation: `A point at a typical $x$-value has almost no leverage to rotate the line — it sits at the balance point — so the slope barely moves. But it pulls the whole line upward to reduce its own large residual, which raises the intercept. The traps: the first option describes what a point at an EXTREME $x$-value would do (high leverage rotates the line); the third is the common intuition that one point in twenty-six is negligible, when in fact an outlier's influence is exactly what these items test; the fourth overstates the effect — one high point cannot reverse a strong positive association, though it does weaken the correlation.`
    },
    {
      id: 'scat-adv-p2-q3',
      type: 'quiz' as const,
      question: `A line of best fit passes through the points $(2, 46)$ and $(14, 22)$ on a scatterplot relating the number of hours $x$ that a refrigerated truck has been running to its internal temperature $y$, in degrees. According to this line, what internal temperature is predicted at $x = 20$?`,
      options: ['$6$', '$10$', '$22$', '$82$'],
      correctAnswer: 1,
      explanation: `The slope is $\\frac{22 - 46}{14 - 2} = \\frac{-24}{12} = -2$, so the line is $y = 50 - 2x$. At $x = 20$: $50 - 40 = 10$ degrees. (Check from the other point: $22 - 2(20 - 14) = 10$.) The traps: $6$ treats $46$ as the $y$-intercept and computes $46 - 2(20)$, forgetting that $(2, 46)$ is not on the $y$-axis; $82$ uses a slope of $+2$, ignoring that temperature is falling; $22$ simply reports the $y$-value at the nearest given point, $x = 14$.`
    }
  ]
}
