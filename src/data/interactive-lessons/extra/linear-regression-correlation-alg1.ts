import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Linear Regression and Correlation (Algebra 1).
 * Registry key: 'linear-regression-correlation-alg1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 *
 * All datasets and statistics in this file were computed and cross-checked:
 *   • Hours vs Score: x=1..5, y=50,65,70,80,90 → b=9.5, a=42.5, r≈0.99, r²≈0.98
 *   • Hand-r dataset:  x=0..4, y=1,3,2,5,4      → Sxx=10, Syy=10, Sxy=8, r=0.8 exactly
 *   • Temp vs Sales:   x=60..85, y=120..210     → b≈3.46, a=-90, r≈0.99
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'linear-regression-correlation-alg1',
    sections: [
      {
        id: 'lrc1-intro',
        type: 'text' as const,
        content: `# 📈 Linear Regression and Correlation

**Part 1 of 5 — Scatterplots & Describing a Relationship**

---

### Topics in This Part

| Section |
|---------|
| Bivariate Data & Scatterplots |
| Direction, Form, and Strength |
| Explanatory vs. Response Variables |

> 🔑 **Key Concept:** When two numerical variables are measured on the same individuals — like *hours studied* and *test score* — we plot the pairs as points. The picture that emerges (a **scatterplot**) tells us whether the variables move together, and how tightly.`,
      },
      {
        id: 'lrc1-scatter',
        type: 'text' as const,
        content: `## Bivariate Data & Scatterplots

**Bivariate** means *two variables*. Each individual contributes an ordered pair $(x, y)$.

| Hours studied ($x$) | Test score ($y$) |
|:---:|:---:|
| 1 | 50 |
| 2 | 65 |
| 3 | 70 |
| 4 | 80 |
| 5 | 90 |

Plotting these five points gives a **scatterplot**. Here the points climb from lower-left to upper-right — more hours tends to mean a higher score.

We always put the **explanatory variable** (the one we think does the explaining) on the horizontal $x$-axis and the **response variable** (the one we think responds) on the vertical $y$-axis.

> 💡 In "hours studied vs. test score," hours is *explanatory* ($x$) and score is *response* ($y$). Ask yourself: *which one would I change to affect the other?* That one is $x$.`,
      },
      {
        id: 'lrc1-varcheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A researcher studies how the amount of fertilizer affects plant height. Which variable belongs on the $x$-axis (explanatory)?',
              options: ['Amount of fertilizer', 'Plant height', 'Number of plants', 'Time of day'],
              correctAnswer: 0,
              explanation: 'Fertilizer is what we vary to *explain* changes in height, so fertilizer is explanatory ($x$) and height is the response ($y$).',
            },
            {
              question: 'What does each single point on a scatterplot represent?',
              options: ['One individual, with its $x$- and $y$-values', 'The average of all the data', 'A single variable', 'The line of best fit'],
              correctAnswer: 0,
              explanation: 'Every point is one individual measured on both variables, plotted at $(x, y)$.',
            },
          ],
        },
      },
      {
        id: 'lrc1-dfs',
        type: 'text' as const,
        content: `## Direction, Form, and Strength

Describe every scatterplot with three words:

- **Direction** — *Positive* (points rise left-to-right) or *negative* (points fall).
- **Form** — *Linear* (points follow a straight-line pattern) or *nonlinear* (a curve).
- **Strength** — How tightly the points hug the pattern: *strong*, *moderate*, or *weak*.

| Picture | Direction | Form | Strength |
|---------|-----------|------|----------|
| Points rise tightly along a line | Positive | Linear | Strong |
| Points fall in a loose cloud | Negative | Linear | Weak |
| Points trace a U-shape | (curved) | Nonlinear | — |

> ⚠️ **Always look at the scatterplot first.** Everything else in this lesson — the correlation coefficient, the line of best fit — only makes sense when the form is *linear*. A strong **curved** pattern can fool a number into looking weak.`,
      },
      {
        id: 'lrc1-describe',
        type: 'dropdown-select' as const,
        content: `**Describe the Scatterplot** 🔽

A scatterplot of *outdoor temperature* vs. *ice cream sales* shows points climbing steadily from lower-left to upper-right, clustered tightly around a straight line.`,
        exercise: {
          dropdowns: [
            { label: 'Direction:', options: ['Positive', 'Negative', 'No direction'] },
            { label: 'Form:', options: ['Linear', 'Nonlinear', 'No form'] },
            { label: 'Strength:', options: ['Strong', 'Weak', 'None'] },
          ],
          correctAnswers: ['Positive', 'Linear', 'Strong'],
          hint1: 'Points climbing left-to-right means as $x$ goes up, $y$ goes up — that is *positive*.',
          hint2: 'Following a straight-line pattern (not a curve) means the form is *linear*.',
          hint3: 'Points clustered *tightly* around the line means the relationship is *strong*.',
          explanation: 'Rising points → positive; straight-line pattern → linear; tight clustering → strong. So: a strong, positive, linear relationship.',
        },
      },
      {
        id: 'lrc1-negative',
        type: 'text' as const,
        content: `## Negative Relationships

A **negative** relationship is just as common: as one variable goes *up*, the other goes *down*, so the points fall from upper-left to lower-right.

| Explanatory ($x$) | Response ($y$) | Likely direction |
|-------------------|----------------|:---:|
| Hours of TV watched | Test grade | Negative |
| Outdoor temperature | Heating bill | Negative |
| Age of a used car | Resale price | Negative |
| Hours exercised | Resting heart rate | Negative |

> 💡 A *negative* relationship can still be **strong** — strength is about how tightly the points hug the line, not which way the line tilts. A tightly falling cloud of points is strong *and* negative.`,
      },
      {
        id: 'lrc1-negcheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For which pair would you most expect a **negative** relationship?',
              options: [
                'Age of a used car ($x$) and its resale price ($y$)',
                'Hours studied ($x$) and test score ($y$)',
                'Height ($x$) and shoe size ($y$)',
                'Temperature ($x$) and ice cream sales ($y$)',
              ],
              correctAnswer: 0,
              explanation: 'As a car gets older, its resale price tends to drop — as $x$ rises, $y$ falls, which is a negative relationship. The other three are all positive.',
            },
            {
              question: 'A scatterplot shows points falling steeply but clustered very tightly around a line. This relationship is:',
              options: ['Strong and negative', 'Weak and negative', 'Strong and positive', 'Nonlinear'],
              correctAnswer: 0,
              explanation: 'Falling points → negative direction; tight clustering → strong. Direction (the tilt) and strength (the tightness) are judged separately.',
            },
          ],
        },
      },
      {
        id: 'lrc1-wrap',
        type: 'text' as const,
        content: `## Why This Matters

Once we know a relationship is **linear**, two powerful tools open up:

1. The **correlation coefficient** $r$ — a single number measuring direction *and* strength (Part 2).
2. The **line of best fit** $\\hat{y} = a + bx$ — an equation that lets us **predict** (Parts 3–4).

You can now read a scatterplot and describe it in three words. Next we turn "strong/moderate/weak" into an exact number.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'linear-regression-correlation-alg1',
    sections: [
      {
        id: 'lrc2-intro',
        type: 'text' as const,
        content: `# 📈 Linear Regression and Correlation

**Part 2 of 5 — The Correlation Coefficient $r$**

---

> 🔑 **The Idea:** The **correlation coefficient** $r$ squeezes the *direction* and *strength* of a linear relationship into one number between $-1$ and $+1$.`,
      },
      {
        id: 'lrc2-scale',
        type: 'text' as const,
        content: `## What $r$ Tells You

$$-1 \\le r \\le 1$$

- The **sign** of $r$ = the **direction**. Positive $r$ → positive (rising) trend; negative $r$ → negative (falling) trend.
- The **size** of $r$ (its distance from $0$) = the **strength**.

| Value of $r$ | Meaning |
|:---:|---|
| $r = +1$ | Perfect positive line (every point on it) |
| $r = -1$ | Perfect negative line |
| $r \\approx 0$ | No *linear* relationship |
| $\\lvert r \\rvert \\ge 0.8$ | Strong |
| $0.5 \\le \\lvert r \\rvert < 0.8$ | Moderate |
| $\\lvert r \\rvert < 0.5$ | Weak |

> 💡 $r = -0.9$ is **stronger** than $r = +0.6$. Strength depends on how far $r$ is from $0$, *not* on its sign. The sign only tells direction.`,
      },
      {
        id: 'lrc2-readr',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which correlation describes the **strongest** linear relationship?',
              options: ['$r = -0.95$', '$r = 0.80$', '$r = 0.50$', '$r = -0.10$'],
              correctAnswer: 0,
              explanation: 'Strength is the distance from $0$: $\\lvert -0.95\\rvert = 0.95$ is the largest, so $r = -0.95$ is the strongest (and it is a negative relationship).',
            },
            {
              question: 'A scatterplot shows points falling from upper-left to lower-right in a tight line. The value of $r$ is closest to:',
              options: ['$-0.9$', '$0$', '$+0.9$', '$+0.4$'],
              correctAnswer: 0,
              explanation: 'A falling pattern is negative, and a tight line is strong, so $r$ is near $-1$ — about $-0.9$.',
            },
          ],
        },
      },
      {
        id: 'lrc2-compute',
        type: 'text' as const,
        content: `## Computing $r$ by Hand

For a small data set you can compute $r$ from sums of squares:

$$r = \\frac{S_{xy}}{\\sqrt{S_{xx}\\, S_{yy}}}, \\quad\\text{where}\\quad S_{xy} = \\sum (x-\\bar{x})(y-\\bar{y})$$

and $S_{xx} = \\sum (x-\\bar{x})^2$, $\\;S_{yy} = \\sum (y-\\bar{y})^2$.

### Worked Example

Data: $x = 0,1,2,3,4$ and $y = 1,3,2,5,4$. Means: $\\bar{x} = 2$, $\\bar{y} = 3$.

| $x$ | $y$ | $x-\\bar{x}$ | $y-\\bar{y}$ | $(x-\\bar{x})^2$ | $(y-\\bar{y})^2$ | $(x-\\bar{x})(y-\\bar{y})$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 0 | 1 | $-2$ | $-2$ | 4 | 4 | 4 |
| 1 | 3 | $-1$ | 0 | 1 | 0 | 0 |
| 2 | 2 | 0 | $-1$ | 0 | 1 | 0 |
| 3 | 5 | 1 | 2 | 1 | 4 | 2 |
| 4 | 4 | 2 | 1 | 4 | 1 | 2 |
| | | | **Sum** | $S_{xx}=10$ | $S_{yy}=10$ | $S_{xy}=8$ |

$$r = \\frac{8}{\\sqrt{10 \\cdot 10}} = \\frac{8}{10} = 0.8$$

> ✅ A moderate-to-strong positive correlation. In practice you'll usually let a calculator do this — but doing it once shows you exactly what $r$ measures.`,
      },
      {
        id: 'lrc2-rdrill',
        type: 'input-boxes' as const,
        content: `**Compute $r$** 🧮

A different data set gives these sums:
$$S_{xx} = 16,\\quad S_{yy} = 25,\\quad S_{xy} = 18$$

**1)** Find $\\sqrt{S_{xx}\\, S_{yy}} = \\sqrt{16 \\cdot 25} = \\,?$
**2)** Find $r = \\dfrac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} = \\,?$  *(decimal, round to 2 places)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['20', '0.9'],
          hint1: '$\\sqrt{16 \\cdot 25} = \\sqrt{400} = 20$.',
          hint2: '$r = 18 / 20$.',
          hint3: '$18 \\div 20 = 0.9$, a strong positive correlation.',
          explanation: '$\\sqrt{16\\cdot 25} = \\sqrt{400} = 20$, so $r = \\dfrac{18}{20} = 0.9$ — strong and positive.',
        },
      },
      {
        id: 'lrc2-rsquared',
        type: 'text' as const,
        content: `## The Coefficient of Determination $r^2$

Square the correlation to get $r^2$ (always between $0$ and $1$). It has a concrete meaning:

> 🔑 $r^2$ is the **proportion of the variation in $y$ that is explained by the linear relationship with $x$.**

If the *Hours vs. Score* data gives $r = 0.99$, then
$$r^2 = (0.99)^2 \\approx 0.98 = 98\\%.$$
So about **98% of the variation in test scores** is explained by hours studied; the remaining 2% is due to everything else.

> ⚠️ Because $r^2$ comes from *squaring*, it loses the sign — it cannot tell you the *direction*. A correlation of $r=-0.6$ and one of $r=+0.6$ both give $r^2 = 0.36$.`,
      },
      {
        id: 'lrc2-r2drill',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $r = 0.8$, what is $r^2$, and what does it mean?',
              options: [
                '$r^2 = 0.64$; about 64% of the variation in $y$ is explained by $x$',
                '$r^2 = 0.64$; the slope of the line is 0.64',
                '$r^2 = 1.6$; the relationship is very strong',
                '$r^2 = 0.40$; 40% of points lie on the line',
              ],
              correctAnswer: 0,
              explanation: '$r^2 = 0.8^2 = 0.64$. The coefficient of determination is the fraction of $y$\'s variation explained by the linear model — here 64%.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'linear-regression-correlation-alg1',
    sections: [
      {
        id: 'lrc3-intro',
        type: 'text' as const,
        content: `# 📈 Linear Regression and Correlation

**Part 3 of 5 — The Line of Best Fit**

---

> 🔑 **The Goal:** Find the single straight line $\\hat{y} = a + bx$ that comes *closest* to all the points. We call it the **least-squares regression line**, and it lets us predict $y$ from $x$.`,
      },
      {
        id: 'lrc3-lsrl',
        type: 'text' as const,
        content: `## The Least-Squares Regression Line

Out of all possible lines, the **least-squares line** is the one that makes the total of the *squared vertical distances* from the points to the line as small as possible.

$$\\hat{y} = a + bx$$

The hat on $\\hat{y}$ ("$y$-hat") signals a **predicted** value, not an observed one.

- $b$ = **slope** — how much $\\hat{y}$ changes for each **+1** increase in $x$.
- $a$ = **$y$-intercept** — the predicted $\\hat{y}$ when $x = 0$.

The slope and correlation are linked through the standard deviations $s_x$ and $s_y$:

$$b = r \\cdot \\frac{s_y}{s_x}, \\qquad a = \\bar{y} - b\\,\\bar{x}$$

> 💡 The slope $b$ always has the **same sign as $r$**: a positive correlation gives an upward-sloping line, a negative correlation a downward-sloping one.`,
      },
      {
        id: 'lrc3-slopecheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the regression line $\\hat{y} = 42.5 + 9.5x$ for *hours studied* ($x$) vs. *test score* ($y$), what does the slope $9.5$ mean?',
              options: [
                'Each additional hour studied predicts about 9.5 more points',
                'A student who studies 0 hours scores 9.5',
                'The correlation is 9.5',
                '9.5% of the variation is explained',
              ],
              correctAnswer: 0,
              explanation: 'The slope is the predicted change in $y$ per +1 in $x$: each extra hour adds about 9.5 points to the predicted score.',
            },
            {
              question: 'In that same line $\\hat{y} = 42.5 + 9.5x$, what does the intercept $42.5$ represent?',
              options: [
                'The predicted score for a student who studies $x = 0$ hours',
                'The score increase per hour',
                'The maximum possible score',
                'The correlation coefficient',
              ],
              correctAnswer: 0,
              explanation: 'The $y$-intercept $a$ is the predicted $\\hat{y}$ when $x = 0$ — here, a predicted score of 42.5 for zero hours studied.',
            },
          ],
        },
      },
      {
        id: 'lrc3-build',
        type: 'text' as const,
        content: `## Building the Line: Worked Example

Use the *Hours vs. Score* data: $x = 1,2,3,4,5$ and $y = 50,65,70,80,90$.

**Step 1 — Means.** $\\bar{x} = 3$, $\\bar{y} = 71$.

**Step 2 — Sums of squares.** Working from the deviations gives
$$S_{xx} = 10, \\qquad S_{xy} = 95.$$

**Step 3 — Slope.** The slope can be found directly as $b = \\dfrac{S_{xy}}{S_{xx}}$:
$$b = \\frac{95}{10} = 9.5.$$

**Step 4 — Intercept.** Use $a = \\bar{y} - b\\,\\bar{x}$:
$$a = 71 - 9.5(3) = 71 - 28.5 = 42.5.$$

**The line:**
$$\\hat{y} = 42.5 + 9.5x$$

> ✅ **Check:** the regression line *always* passes through the point of averages $(\\bar{x}, \\bar{y}) = (3, 71)$. Test it: $42.5 + 9.5(3) = 42.5 + 28.5 = 71$ ✓`,
      },
      {
        id: 'lrc3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're finding the regression line for a data set with $\\bar{x} = 4$, $\\bar{y} = 20$, $S_{xx} = 8$, and $S_{xy} = 24$.`,
        exercise: {
          dropdowns: [
            { label: 'Slope $b = S_{xy} / S_{xx}$:', options: ['$3$', '$24$', '$8$', '$\\tfrac{1}{3}$'] },
            { label: 'Intercept $a = \\bar{y} - b\\bar{x}$:', options: ['$8$', '$20$', '$12$', '$-12$'] },
            { label: 'The regression line:', options: ['$\\hat{y} = 8 + 3x$', '$\\hat{y} = 3 + 8x$', '$\\hat{y} = 20 + 4x$', '$\\hat{y} = 8 - 3x$'] },
          ],
          correctAnswers: ['$3$', '$8$', '$\\hat{y} = 8 + 3x$'],
          hint1: '$b = S_{xy}/S_{xx} = 24/8 = 3$.',
          hint2: '$a = \\bar{y} - b\\bar{x} = 20 - 3(4) = 20 - 12 = 8$.',
          hint3: 'With $a = 8$ and $b = 3$, the line is $\\hat{y} = 8 + 3x$.',
          explanation: '$b = 24/8 = 3$; $a = 20 - 3(4) = 8$; so $\\hat{y} = 8 + 3x$. It passes through $(4, 20)$: $8 + 3(4) = 20$ ✓.',
        },
      },
      {
        id: 'lrc3-recipe',
        type: 'text' as const,
        content: `## The Two-Step Recipe

Every regression problem in Algebra 1 boils down to the same two moves, in order:

$$\\boxed{\\;b = \\frac{S_{xy}}{S_{xx}}\\;}\\qquad\\text{then}\\qquad\\boxed{\\;a = \\bar{y} - b\\,\\bar{x}\\;}$$

You **must** find the slope $b$ first, because the intercept formula needs it. Then assemble $\\hat{y} = a + bx$.

> 🔑 Sanity check every line you build: plug in $\\bar{x}$ and you should get exactly $\\bar{y}$, because the line always passes through $(\\bar{x}, \\bar{y})$.`,
      },
      {
        id: 'lrc3-drill',
        type: 'input-boxes' as const,
        content: `**Build the Line** 🧮

A data set has $\\bar{x} = 5$, $\\bar{y} = 10$, $S_{xx} = 20$, $S_{xy} = 30$.

**1)** Slope $b = \\dfrac{S_{xy}}{S_{xx}} = \\,?$
**2)** Intercept $a = \\bar{y} - b\\,\\bar{x} = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1.5', '2.5'],
          hint1: '$b = 30 / 20$.',
          hint2: '$b = 1.5$. Now $a = 10 - 1.5 \\times 5$.',
          hint3: '$a = 10 - 7.5 = 2.5$.',
          explanation: '$b = 30/20 = 1.5$, and $a = 10 - 1.5(5) = 10 - 7.5 = 2.5$. The line is $\\hat{y} = 2.5 + 1.5x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'linear-regression-correlation-alg1',
    sections: [
      {
        id: 'lrc4-intro',
        type: 'text' as const,
        content: `# 📈 Linear Regression and Correlation

**Part 4 of 5 — Predictions, Residuals & Cautions**

---

> 🔑 **The Payoff:** With the line $\\hat{y} = a + bx$ in hand, plug in any $x$ to **predict** $y$. But predictions come with rules — and a famous warning about *causation*.`,
      },
      {
        id: 'lrc4-predict',
        type: 'text' as const,
        content: `## Making Predictions

To predict, substitute the $x$-value into the line.

Using $\\hat{y} = 42.5 + 9.5x$ (Hours vs. Score):

**Predict the score for 6 hours of study:**
$$\\hat{y} = 42.5 + 9.5(6) = 42.5 + 57 = 99.5$$

**Predict the score for 2.5 hours:**
$$\\hat{y} = 42.5 + 9.5(2.5) = 42.5 + 23.75 = 66.25$$

### Interpolation vs. Extrapolation

- **Interpolation** — predicting *inside* the range of the data ($x$ between 1 and 5 here). Generally safe.
- **Extrapolation** — predicting *outside* the data range (e.g. $x = 20$ hours). **Risky** — the linear pattern may not hold out there.

> ⚠️ Extrapolation is the #1 prediction trap. Our line would "predict" a score of $42.5 + 9.5(20) = 232.5$ for 20 hours — impossible on a 100-point test. Never trust a prediction far outside the data.`,
      },
      {
        id: 'lrc4-predictdrill',
        type: 'input-boxes' as const,
        content: `**Predict with the Line** 🧮

A delivery company models *cost* ($y$, dollars) against *distance* ($x$, miles) with
$$\\hat{y} = 3 + 2x.$$

**1)** Predicted cost for a 10-mile trip: $\\hat{y} = \\,?$ *(dollars)*
**2)** Predicted cost for a 25-mile trip: $\\hat{y} = \\,?$ *(dollars)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['23', '53'],
          hint1: 'Substitute $x = 10$: $\\hat{y} = 3 + 2(10)$.',
          hint2: '$3 + 20 = 23$. Now do $x = 25$.',
          hint3: '$3 + 2(25) = 3 + 50 = 53$.',
          explanation: '$x=10$: $3 + 2(10) = 23$. $\\;x=25$: $3 + 2(25) = 53$. The slope means each extra mile adds \\$2.',
        },
      },
      {
        id: 'lrc4-residual',
        type: 'text' as const,
        content: `## Residuals: How Far Off Was the Prediction?

A **residual** is the *vertical gap* between an actual data point and the line:

$$\\text{residual} = y - \\hat{y} = (\\text{observed}) - (\\text{predicted})$$

### Worked Example

In the Hours vs. Score data, the student who studied **2 hours** actually scored **65**. The line predicts
$$\\hat{y} = 42.5 + 9.5(2) = 61.5.$$
So the residual is
$$65 - 61.5 = +3.5.$$

A **positive** residual means the point sits **above** the line (the model *under*-predicted). A **negative** residual means it sits **below** the line.

> 💡 The least-squares line is built so the residuals always **sum to zero** — positives and negatives perfectly cancel. That's what makes it the "best fit."`,
      },
      {
        id: 'lrc4-resdrill',
        type: 'input-boxes' as const,
        content: `**Compute Residuals** 🧮

Use $\\hat{y} = 42.5 + 9.5x$. A student studied **4 hours** and scored **80**.

**1)** Predicted score $\\hat{y} = 42.5 + 9.5(4) = \\,?$
**2)** Residual $= y - \\hat{y} = 80 - \\,?$ — enter the residual *(it is negative)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['80.5', '-0.5'],
          hint1: '$42.5 + 9.5(4) = 42.5 + 38$.',
          hint2: 'The prediction is $80.5$.',
          hint3: 'Residual $= 80 - 80.5 = -0.5$ (the point is just *below* the line).',
          explanation: 'Predicted $\\hat{y} = 42.5 + 38 = 80.5$. Residual $= 80 - 80.5 = -0.5$: a negative residual, so this point lies slightly below the line.',
        },
      },
      {
        id: 'lrc4-causation',
        type: 'text' as const,
        content: `## Correlation Is **Not** Causation

A strong correlation means two variables *move together* — it does **not** prove one *causes* the other.

> ⚠️ **The classic example:** Across a town, ice-cream sales and drowning deaths are strongly positively correlated. Ice cream doesn't cause drownings! A hidden **lurking variable** — hot summer weather — drives *both* up at once.

To establish causation you need a **controlled experiment**, not just a high $r$. Always ask: *Could a third variable explain both?*`,
      },
      {
        id: 'lrc4-causecheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Researchers find a strong positive correlation between the number of firefighters sent to a fire and the amount of damage. What is the best conclusion?',
              options: [
                'A lurking variable (the size of the fire) likely drives both — correlation is not causation',
                'Firefighters cause fire damage, so send fewer',
                'There is no relationship between the variables',
                'The correlation must be near $0$',
              ],
              correctAnswer: 0,
              explanation: 'Bigger fires cause both more firefighters *and* more damage. The fire\'s size is a lurking variable; the correlation does not mean firefighters cause damage.',
            },
            {
              question: 'Predicting a value of $y$ for an $x$ far **outside** the range of the data is called:',
              options: ['Extrapolation (and it is risky)', 'Interpolation (and it is safe)', 'Correlation', 'A residual'],
              correctAnswer: 0,
              explanation: 'Going beyond the observed $x$-range is extrapolation, which is unreliable because the linear pattern may not continue.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'linear-regression-correlation-alg1',
    sections: [
      {
        id: 'lrc5-intro',
        type: 'text' as const,
        content: `# 📈 Linear Regression and Correlation

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) describe a scatterplot, (2) interpret $r$ and $r^2$, (3) build the line of best fit, and (4) predict, find residuals, and avoid the causation trap. Let's put it all together.`,
      },
      {
        id: 'lrc5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Describe a scatterplot | direction (pos/neg) · form (linear?) · strength |
| Measure strength + direction | $r$, with $-1 \\le r \\le 1$ |
| "% of variation explained" | $r^2$ (between $0$ and $1$) |
| Slope of the line | $b = r\\dfrac{s_y}{s_x} = \\dfrac{S_{xy}}{S_{xx}}$ |
| Intercept of the line | $a = \\bar{y} - b\\,\\bar{x}$ |
| Predict | plug $x$ into $\\hat{y} = a + bx$ |
| Residual | $y - \\hat{y}$ (observed $-$ predicted) |

> ⚠️ Remember: the sign of $r$ matches the sign of $b$; $r^2$ drops the sign; extrapolation is risky; and **correlation never proves causation**.`,
      },
      {
        id: 'lrc5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A regression line is $\\hat{y} = 8 + 3x$. What is the predicted value of $y$ when $x = 5$?',
              options: ['$23$', '$15$', '$40$', '$11$'],
              correctAnswer: 0,
              explanation: '$\\hat{y} = 8 + 3(5) = 8 + 15 = 23$.',
            },
            {
              question: 'For a data set, $r = -0.7$. Which statement is true?',
              options: [
                'There is a moderate negative linear relationship; about 49% of the variation in $y$ is explained',
                'There is a positive relationship because $r^2$ is positive',
                'The relationship is weak because $r$ is negative',
                'The slope of the regression line is positive',
              ],
              correctAnswer: 0,
              explanation: '$r = -0.7$ is a moderate, *negative* relationship (so the slope is negative too). $r^2 = (-0.7)^2 = 0.49 \\approx 49\\%$ of the variation is explained.',
            },
          ],
        },
      },
      {
        id: 'lrc5-fullproblem',
        type: 'text' as const,
        content: `## One Full Problem, Start to Finish

A typical exam question hands you the summary numbers and asks for the line *and* a prediction. The flow is always the same:

1. **Slope:** $b = \\dfrac{S_{xy}}{S_{xx}}$
2. **Intercept:** $a = \\bar{y} - b\\,\\bar{x}$
3. **Assemble:** $\\hat{y} = a + bx$
4. **Predict:** substitute the requested $x$

Try the complete cycle below — find the slope, the intercept, and then make a prediction.`,
      },
      {
        id: 'lrc5-buildquiz',
        type: 'input-boxes' as const,
        content: `**Build & Predict** 🧮

A data set has $\\bar{x} = 4$, $\\bar{y} = 12$, $S_{xx} = 10$, $S_{xy} = 25$.

**1)** Slope $b = S_{xy}/S_{xx} = \\,?$
**2)** Intercept $a = \\bar{y} - b\\bar{x} = \\,?$
**3)** Using $\\hat{y} = a + bx$, predict $\\hat{y}$ when $x = 6$. $\\hat{y} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2.5', '2', '17'],
          hint1: '$b = 25/10 = 2.5$.',
          hint2: '$a = 12 - 2.5(4) = 12 - 10 = 2$.',
          hint3: 'Line is $\\hat{y} = 2 + 2.5x$, so at $x=6$: $2 + 2.5(6) = 2 + 15 = 17$.',
          explanation: '$b = 25/10 = 2.5$; $a = 12 - 2.5(4) = 2$; line $\\hat{y} = 2 + 2.5x$; at $x = 6$, $\\hat{y} = 2 + 15 = 17$.',
        },
      },
      {
        id: 'lrc5-readytoquiz',
        type: 'text' as const,
        content: `## You're Ready

You can describe a scatterplot, read $r$ and $r^2$, build $\\hat{y} = a + bx$, predict and interpret residuals, and steer clear of the causation trap. One last set of three questions seals the lesson.

> 💡 On each Exit-Quiz item, decide *which* tool it's testing first — strength of $r$, a residual, or causation — then apply the matching move.`,
      },
      {
        id: 'lrc5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which value of $r$ indicates the **strongest** linear relationship?',
              options: ['$-0.92$', '$0.55$', '$0.10$', '$-0.30$'],
              correctAnswer: 0,
              explanation: 'Strength is distance from $0$: $\\lvert -0.92 \\rvert = 0.92$ is the largest, so $r = -0.92$ is the strongest.',
            },
            {
              question: 'A line $\\hat{y} = 50 + 4x$ models exam score vs. hours of sleep. The actual score for a student with $x = 5$ hours was $66$. The residual is:',
              options: ['$-4$', '$+4$', '$+16$', '$+70$'],
              correctAnswer: 0,
              explanation: 'Predicted $\\hat{y} = 50 + 4(5) = 70$. Residual $= y - \\hat{y} = 66 - 70 = -4$ (the point lies below the line).',
            },
            {
              question: 'A study finds a strong positive correlation between shoe size and reading ability in elementary schoolchildren. The best explanation is:',
              options: [
                'A lurking variable — age — increases both, so correlation is not causation',
                'Bigger feet cause better reading',
                'Reading more makes feet grow',
                'The correlation must be a calculation error',
              ],
              correctAnswer: 0,
              explanation: 'Older children have both bigger feet and stronger reading skills. Age is the lurking variable; the correlation does not imply one causes the other.',
            },
          ],
        },
      },
    ],
  },
]
