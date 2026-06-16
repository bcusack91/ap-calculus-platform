import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Scatter Plots (Grade 8 Math).
 * Registry key / DB Topic.slug: 'scatter-plots'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'scatter-plots',
    sections: [
      {
        id: 'sp1-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots

**Part 1 of 5 — Plotting & Reading Two Variables**

---

### Topics in This Part

| Section |
|---------|
| What Is a Scatter Plot? |
| Bivariate Data & Ordered Pairs |
| Plotting and Reading Points |

> 🔑 **Key Concept:** A **scatter plot** shows the relationship between **two** different measurements taken on the same things — like a person's height *and* their shoe size. Each dot is one "thing" with two numbers attached.`,
      },
      {
        id: 'sp1-bivariate',
        type: 'text' as const,
        content: `## What Is a Scatter Plot?

A **scatter plot** is a graph of dots on a coordinate grid. We use it to look for a **pattern** between two quantities.

The data behind it is called **bivariate data** — *bi* means "two", so it's two measurements per item:

| Student | Hours Studied ($x$) | Test Score ($y$) |
|---------|---------------------|------------------|
| Ava | $1$ | $60$ |
| Ben | $3$ | $74$ |
| Cara | $5$ | $88$ |

Each row becomes **one point**: Ava is $(1, 60)$, Ben is $(3, 74)$, Cara is $(5, 88)$.

- The **first number** ($x$) goes across — the **horizontal** axis.
- The **second number** ($y$) goes up — the **vertical** axis.

> 🔑 **Key Idea:** One dot = one item, carrying **two** values written as an ordered pair $(x, y)$. We do **not** connect the dots with lines.`,
      },
      {
        id: 'sp1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What makes a scatter plot different from a regular line graph?',
              options: [
                'It plots two variables as separate dots to look for a pattern, without connecting them',
                'It always connects every point in order with straight line segments',
                'It can only show one variable at a time',
                'It must start at the origin $(0,0)$',
              ],
              correctAnswer: 0,
              explanation: 'A scatter plot graphs paired ($x$, $y$) data as separate dots so we can see a relationship between two variables. We do not connect the dots.',
            },
            {
              question: 'In the table, Cara studied $5$ hours and scored $88$. As an ordered pair, Cara is:',
              options: ['$(5, 88)$', '$(88, 5)$', '$(5, 5)$', '$(88, 88)$'],
              correctAnswer: 0,
              explanation: 'Hours studied is the $x$-value (goes across) and the score is the $y$-value (goes up), so Cara is $(5, 88)$.',
            },
          ],
        },
      },
      {
        id: 'sp1-plot-text',
        type: 'text' as const,
        content: `## Plotting and Reading Points

To **plot** $(3, 74)$: start at the origin, move **right $3$** (the $x$-value), then **up $74$** (the $y$-value), and place a dot.

To **read** a point you already see, do the reverse:
- Drop straight **down** to the $x$-axis to find the first number.
- Slide straight **across** to the $y$-axis to find the second number.

### Example

A dot sits directly above $4$ on the $x$-axis and lines up with $80$ on the $y$-axis. That dot is the point $(4, 80)$ — a student who studied $4$ hours and scored $80$.

> 💡 The $x$-value tells you the *cause/input* (hours), and the $y$-value tells you the *result/output* (score). Keep the order straight: it's always $(x, y)$.`,
      },
      {
        id: 'sp1-plot-drill',
        type: 'input-boxes' as const,
        content: `**Read the Points** 🧮

Use the data table from earlier (Hours $x$, Score $y$).

**1)** Ben studied $3$ hours and scored $74$. His $x$-coordinate is $\\,?$
**2)** Ben's $y$-coordinate is $\\,?$
**3)** A new student is plotted at $(2, 68)$. What was that student's **score**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '74', '68'],
          hint1: 'The $x$-coordinate is the first number in the pair — hours studied.',
          hint2: 'The $y$-coordinate is the second number — the test score.',
          hint3: 'In $(2, 68)$, the score is the $y$-value, the second number: $68$.',
          explanation: 'Ben is $(3, 74)$: $x = 3$ hours, $y = 74$ points. The point $(2, 68)$ has score (the $y$-value) $= 68$.',
        },
      },
      {
        id: 'sp1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Word to the Axis** 🔽

A scatter plot compares **temperature** and **ice-cream sales**.`,
        exercise: {
          dropdowns: [
            { label: 'A scatter plot displays this kind of data:', options: ['bivariate (two variables)', 'univariate (one variable)', 'categorical only', 'no numbers at all'] },
            { label: 'The first number of an ordered pair is the…', options: ['$x$-coordinate', '$y$-coordinate', 'slope', 'origin'] },
            { label: 'Each dot on a scatter plot represents…', options: ['one item with two measurements', 'two separate items', 'the average of all data', 'the title of the graph'] },
          ],
          correctAnswers: ['bivariate (two variables)', '$x$-coordinate', 'one item with two measurements'],
          hint1: '"Bi" means two — a scatter plot pairs two measurements.',
          hint2: 'Ordered pairs are written $(x, y)$, so the first number is the $x$-coordinate.',
          hint3: 'One dot carries both numbers for a single item (one day, one student, etc.).',
          explanation: 'Scatter plots show bivariate data; the first coordinate is $x$; and each dot is a single item carrying two measurements.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'scatter-plots',
    sections: [
      {
        id: 'sp2-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots

**Part 2 of 5 — Patterns: Association & Correlation**

---

> 🔑 **The Big Question:** When you look at the cloud of dots, do they **trend** in a direction? The pattern we see is called the **association** (or **correlation**) between the two variables.`,
      },
      {
        id: 'sp2-direction',
        type: 'text' as const,
        content: `## Direction of the Association

| Type | What the dots do | Real example |
|------|------------------|--------------|
| **Positive** | as $x$ goes up, $y$ goes **up** (dots rise →) | hours studied vs test score |
| **Negative** | as $x$ goes up, $y$ goes **down** (dots fall →) | car's age vs its resale price |
| **No association** | no up/down trend; a shapeless cloud | shoe size vs math grade |

A **positive association** slopes uphill from left to right. A **negative association** slopes downhill from left to right.

> 💡 Think of reading left-to-right like reading a sentence. Uphill = positive, downhill = negative, flat/messy = none.`,
      },
      {
        id: 'sp2-direction-q',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'As the number of hours a phone is used goes up, its remaining battery percentage goes down. This is a…',
              options: ['negative association', 'positive association', 'no association', 'nonlinear cluster'],
              correctAnswer: 0,
              explanation: 'One variable goes up while the other goes down — the dots fall from left to right — so the association is negative.',
            },
            {
              question: 'Which pair of variables most likely shows NO association?',
              options: [
                "A student's height and the last digit of their phone number",
                'Hours of sleep and alertness the next day',
                'A pizza’s diameter and its price',
                'Distance driven and gas used',
              ],
              correctAnswer: 0,
              explanation: 'Height has nothing to do with a random phone-number digit, so those dots would form a shapeless cloud — no association. The other pairs have a clear cause-and-effect trend.',
            },
          ],
        },
      },
      {
        id: 'sp2-form-strength',
        type: 'text' as const,
        content: `## Form, Strength, and Outliers

Beyond direction, describe **three** more things:

- **Form** — Are the dots roughly along a straight line (**linear**) or do they curve (**nonlinear**)?
- **Strength** — Are the dots tightly packed near a line (**strong**) or widely spread out (**weak**)?
- **Outliers** — Is there a dot that sits far away from the rest of the pattern?

| Picture | Description |
|---------|-------------|
| dots hug a straight rising line | strong, positive, linear |
| dots loosely drift downward | weak, negative, linear |
| dots bend like a curve | nonlinear |

> ⚠️ **Watch out:** "Strong" is about how *tight* the dots are, not how *steep* they are. A gentle line with dots glued to it is **strong**; a steep but scattered cloud is **weak**.`,
      },
      {
        id: 'sp2-strength-drill',
        type: 'dropdown-select' as const,
        content: `**Describe the Scatter** 🔽

Choose the best word for each described scatter plot.`,
        exercise: {
          dropdowns: [
            { label: 'Dots tightly hug a line that rises left-to-right:', options: ['strong positive', 'weak negative', 'no association', 'strong negative'] },
            { label: 'Dots are very spread out but generally fall left-to-right:', options: ['weak negative', 'strong positive', 'strong negative', 'no association'] },
            { label: 'Dots clearly bend along a curve, not a straight line:', options: ['nonlinear', 'strong linear', 'no association', 'positive linear'] },
          ],
          correctAnswers: ['strong positive', 'weak negative', 'nonlinear'],
          hint1: 'Tightly packed = strong; rising = positive.',
          hint2: 'Very spread out = weak; falling = negative.',
          hint3: 'A curved pattern means the form is nonlinear.',
          explanation: 'Tight + rising = strong positive. Spread + falling = weak negative. A curve = nonlinear (no straight line fits it well).',
        },
      },
      {
        id: 'sp2-outlier',
        type: 'multiple-choice' as const,
        content: `**Spot the Outlier** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a strong positive scatter plot of study hours vs score, one dot shows a student who studied $6$ hours but scored only $20$. That dot is best called a(n):',
              options: ['outlier', 'positive association', 'trend line', 'cluster'],
              correctAnswer: 0,
              explanation: 'Every other point follows the rising pattern, but this one sits far from it. A point that breaks from the overall pattern is an outlier.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'scatter-plots',
    sections: [
      {
        id: 'sp3-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots

**Part 3 of 5 — The Trend Line (Line of Best Fit)**

---

> 🔑 **The Idea:** When a scatter plot looks roughly **linear**, we draw a single straight line that follows the middle of the cloud. It's called the **trend line** or **line of best fit**, and it summarizes the whole pattern.`,
      },
      {
        id: 'sp3-fit-rules',
        type: 'text' as const,
        content: `## How to Draw a Good Trend Line

A line of best fit does **not** have to touch any of the dots. Instead it should:

1. Follow the **overall direction** of the data (uphill for positive, downhill for negative).
2. Pass through the **middle** of the cloud, with roughly **as many dots above the line as below it**.
3. Stay as **close as possible** to all the dots overall.

> ⚠️ **Common mistake:** A good trend line is *not* drawn just to connect the first and last dots, and it does *not* have to hit the most points. Balance the dots above and below.

### Why bother?

Once we have a line, we can **predict**: estimate a $y$-value for an $x$ we never measured. That's the real power of a scatter plot.`,
      },
      {
        id: 'sp3-fit-q',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement about a line of best fit is TRUE?',
              options: [
                'It should have roughly as many points above it as below it',
                'It must pass through every data point',
                'It should connect the first and last points only',
                'It must always pass through the origin',
              ],
              correctAnswer: 0,
              explanation: 'A good trend line balances the points, staying close to all of them with about as many above as below. It rarely touches every point and does not just link the endpoints.',
            },
            {
              question: 'A scatter plot of dots that clearly **curve** upward should:',
              options: [
                'not use a straight line of best fit, because the form is nonlinear',
                'still be forced to use a straight line through the origin',
                'be ignored entirely',
                'use a vertical line',
              ],
              correctAnswer: 0,
              explanation: 'A straight line of best fit only makes sense when the form is roughly linear. Curved (nonlinear) data is not well summarized by a straight line.',
            },
          ],
        },
      },
      {
        id: 'sp3-fit-dropdown',
        type: 'dropdown-select' as const,
        content: `**Judge the Line** 🔽

For each scatter plot, decide whether a straight line of best fit is appropriate and what direction it should slope.`,
        exercise: {
          dropdowns: [
            { label: 'Dots rise steadily in a straight band:', options: ['linear, slopes up', 'linear, slopes down', 'nonlinear — no straight line', 'flat — no association'] },
            { label: 'Dots fall steadily in a straight band:', options: ['linear, slopes down', 'linear, slopes up', 'nonlinear — no straight line', 'flat — no association'] },
            { label: 'Dots form a clear U-shaped curve:', options: ['nonlinear — no straight line', 'linear, slopes up', 'linear, slopes down', 'flat — no association'] },
          ],
          correctAnswers: ['linear, slopes up', 'linear, slopes down', 'nonlinear — no straight line'],
          hint1: 'Rising dots ⇒ a line that slopes up (positive).',
          hint2: 'Falling dots ⇒ a line that slopes down (negative).',
          hint3: 'A U-shape is curved, so no single straight line fits it well.',
          explanation: 'Use a straight line only for linear patterns: up for positive, down for negative. A U-shape is nonlinear — a straight line is the wrong tool.',
        },
      },
      {
        id: 'sp3-balance-drill',
        type: 'input-boxes' as const,
        content: `**Balance the Points** 🧮

A scatter plot has $10$ data points. You want your trend line to split them as evenly as possible.

**1)** For a well-balanced line, about how many points should sit **above** the line? $\\,?$
**2)** About how many should sit **below** it? $\\,?$
**3)** A different plot has $7$ points and one lands exactly **on** the line. If $3$ are above, how many are below? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '5', '3'],
          hint1: 'Split $10$ evenly: half above, half below.',
          hint2: 'Half of $10$ is $5$ on each side.',
          hint3: '$7$ points, $1$ on the line, leaves $6$ off it. If $3$ are above, then $6 - 3 = 3$ are below.',
          explanation: 'A balanced line of $10$ points puts about $5$ above and $5$ below. With $7$ points and $1$ on the line, $6$ remain; $3$ above means $3$ below.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'scatter-plots',
    sections: [
      {
        id: 'sp4-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots

**Part 4 of 5 — The Equation: Slope, Intercept & Predicting**

---

> 🔑 **Big Payoff:** Once the trend line has an equation $y = mx + b$, the slope $m$ and intercept $b$ each **tell a story about the real situation**, and the equation lets us **predict**.`,
      },
      {
        id: 'sp4-equation',
        type: 'text' as const,
        content: `## Reading the Equation $y = mx + b$

The trend line is just a line, so it has the slope-intercept form you already know:

$$y = mx + b$$

- $m$ = **slope** = the change in $y$ for **each increase of $1$** in $x$ (the *rate*).
- $b$ = **$y$-intercept** = the predicted $y$ when $x = 0$ (the *starting value*).

### Example: Studying vs Score

Suppose the line of best fit is $y = 7x + 50$, where $x$ is hours studied and $y$ is the test score.

| Symbol | Value | What it means in words |
|--------|-------|------------------------|
| slope $m$ | $7$ | each extra **hour** of studying adds about **$7$ points** |
| intercept $b$ | $50$ | a student who studies **$0$ hours** is predicted to score about **$50$** |

> 💡 The **slope** is always a *rate*: "so much $y$ per $1$ unit of $x$." Saying it in real words ("$7$ points per hour") is exactly what Grade 8 problems ask for.`,
      },
      {
        id: 'sp4-interpret-q',
        type: 'multiple-choice' as const,
        content: `**Interpret the Line** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A plant’s height (cm) vs days has trend line $y = 0.5x + 4$. The slope $0.5$ means:',
              options: [
                'the plant grows about $0.5$ cm per day',
                'the plant started at $0.5$ cm',
                'the plant is $0.5$ cm tall after $4$ days',
                'the plant grows $4$ cm per day',
              ],
              correctAnswer: 0,
              explanation: 'Slope is the change in $y$ (height) per $1$ unit of $x$ (day). A slope of $0.5$ means about $0.5$ cm of growth each day.',
            },
            {
              question: 'In that same line $y = 0.5x + 4$, what does the intercept $4$ represent?',
              options: [
                'the height at day $0$ (the starting height)',
                'the growth rate',
                'the height after $4$ days',
                'the number of leaves',
              ],
              correctAnswer: 0,
              explanation: 'The $y$-intercept is the predicted $y$ when $x = 0$. Here that is the plant’s height on day $0$: about $4$ cm.',
            },
          ],
        },
      },
      {
        id: 'sp4-predict-text',
        type: 'text' as const,
        content: `## Predicting With the Line

To predict, **substitute** the $x$-value into the equation and compute $y$.

### Example: $y = 7x + 50$

Predict the score for a student who studies **$4$ hours**:

$$y = 7(4) + 50 = 28 + 50 = 78$$

Predict the score for **$6$ hours**:

$$y = 7(6) + 50 = 42 + 50 = 92$$

> ⚠️ **Interpolation vs Extrapolation:** Predicting *inside* the range of your data (interpolation) is fairly safe. Predicting *far outside* it (extrapolation) is risky — the pattern may not continue. Studying $40$ hours won't give a score of $7(40)+50 = 330$; scores cap at $100$!`,
      },
      {
        id: 'sp4-predict-drill',
        type: 'input-boxes' as const,
        content: `**Predict With the Equation** 🧮

Use the trend line $y = 3x + 12$, where $x$ is weeks of practice and $y$ is words typed per minute.

**1)** Predict the speed after $5$ weeks: $y = \\,?$
**2)** Predict the speed after $10$ weeks: $y = \\,?$
**3)** What is the predicted starting speed (at $0$ weeks)? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['27', '42', '12'],
          hint1: 'Substitute $x = 5$: $y = 3(5) + 12$.',
          hint2: 'Substitute $x = 10$: $y = 3(10) + 12 = 30 + 12$.',
          hint3: 'At $0$ weeks, $x = 0$, so $y = 3(0) + 12 = 12$ — that is the $y$-intercept.',
          explanation: '1) $3(5)+12 = 15+12 = 27$.  2) $3(10)+12 = 30+12 = 42$.  3) $3(0)+12 = 12$ (the intercept).',
        },
      },
      {
        id: 'sp4-slope-drill',
        type: 'input-boxes' as const,
        content: `**Find the Slope From Two Points** 🧮

A trend line passes through the points $(2, 8)$ and $(6, 20)$. Use $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.

**1)** Change in $y$ (the numerator): $20 - 8 = \\,?$
**2)** Change in $x$ (the denominator): $6 - 2 = \\,?$
**3)** The slope $m = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '4', '3'],
          hint1: 'Subtract the $y$-values: $20 - 8$.',
          hint2: 'Subtract the $x$-values in the same order: $6 - 2$.',
          hint3: 'Slope is rise over run: $\\frac{12}{4} = 3$.',
          explanation: 'Rise $= 20 - 8 = 12$, run $= 6 - 2 = 4$, so $m = \\frac{12}{4} = 3$. The line gains $3$ in $y$ for every $1$ in $x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'scatter-plots',
    sections: [
      {
        id: 'sp5-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) plot and read bivariate points, (2) describe direction, form, and strength, (3) draw a line of best fit, and (4) read its slope/intercept and predict. Let's put it all together.`,
      },
      {
        id: 'sp5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key idea |
|------|----------|
| Plot a point | $(x, y)$: right $x$, then up $y$ |
| Describe a pattern | direction (+ / − / none), form (linear / nonlinear), strength (strong / weak) |
| Draw a trend line | follow the cloud; balance points above and below |
| Read slope $m$ | change in $y$ per $1$ unit of $x$ (a rate) |
| Read intercept $b$ | predicted $y$ when $x = 0$ (starting value) |
| Predict | substitute $x$ into $y = mx + b$ |

> ⚠️ Remember: correlation describes a *pattern*, not proof that one thing **causes** the other — and don't extrapolate far past your data.`,
      },
      {
        id: 'sp5-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Vocabulary Round-Up** 🔽

Lock in the key terms one more time.`,
        exercise: {
          dropdowns: [
            { label: 'As $x$ increases, $y$ decreases. The association is…', options: ['negative', 'positive', 'none', 'nonlinear'] },
            { label: 'In $y = mx + b$, the rate of change is the…', options: ['slope $m$', 'intercept $b$', '$x$-value', 'outlier'] },
            { label: 'A point far from the overall pattern is a(n)…', options: ['outlier', 'cluster', 'intercept', 'trend line'] },
            { label: 'Predicting a $y$-value *within* the data range is called…', options: ['interpolation', 'extrapolation', 'correlation', 'causation'] },
          ],
          correctAnswers: ['negative', 'slope $m$', 'outlier', 'interpolation'],
          hint1: 'Down as the other goes up ⇒ negative.',
          hint2: 'The slope $m$ is the per-unit rate of change.',
          hint3: 'A lone faraway point is an outlier; predicting inside the data is interpolation.',
          explanation: 'Down-trend = negative; $m$ = slope (rate); a faraway point = outlier; predicting inside the range = interpolation (safer than extrapolation).',
        },
      },
      {
        id: 'sp5-causation',
        type: 'multiple-choice' as const,
        content: `**Correlation vs Causation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Ice-cream sales and drowning incidents both rise together in summer (a positive association). Best conclusion?',
              options: [
                'They are correlated, but ice cream does not cause drownings — hot weather drives both',
                'Eating ice cream causes drownings',
                'Drowning causes people to buy ice cream',
                'There is no association at all',
              ],
              correctAnswer: 0,
              explanation: 'A positive association does not prove cause-and-effect. A hidden factor (hot weather) raises both, so this is correlation without causation.',
            },
          ],
        },
      },
      {
        id: 'sp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The trend line for temperature ($x$, °F) vs lemonade cups sold ($y$) is $y = 4x - 120$. About how many cups are predicted at $80$°F?',
              options: ['$200$', '$320$', '$80$', '$120$'],
              correctAnswer: 0,
              explanation: 'Substitute $x = 80$: $y = 4(80) - 120 = 320 - 120 = 200$ cups.',
            },
            {
              question: 'A scatter plot of a car’s age vs its value shows dots tightly falling from left to right. Describe it.',
              options: [
                'strong negative association',
                'weak positive association',
                'no association',
                'strong positive association',
              ],
              correctAnswer: 0,
              explanation: 'Falling dots ⇒ negative; tightly packed ⇒ strong. Older cars are worth less, a strong negative association.',
            },
          ],
        },
      },
      {
        id: 'sp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A scatter plot shows that as a candle burns longer, its height decreases steadily and the dots hug a line. This is a:',
              options: [
                'strong negative, linear association',
                'strong positive, linear association',
                'weak positive, nonlinear association',
                'no association',
              ],
              correctAnswer: 0,
              explanation: 'Height goes down as time goes up ⇒ negative. Dots hug a straight line ⇒ strong and linear. So: strong negative, linear.',
            },
            {
              question: 'A trend line is $y = 6x + 20$, where $x$ is months of saving and $y$ is dollars saved. What does the slope $6$ mean?',
              options: [
                'savings increase by about \\$6 each month',
                'the account started at \\$6',
                'the person saves \\$6 total',
                'it takes $6$ months to start saving',
              ],
              correctAnswer: 0,
              explanation: 'Slope is the change in $y$ per $1$ unit of $x$: about \\$6 added to savings each month. The \\$20 intercept is the starting amount.',
            },
            {
              question: 'Using $y = 6x + 20$, how much is predicted to be saved after $5$ months?',
              options: ['\\$50', '\\$30', '\\$26', '\\$120'],
              correctAnswer: 0,
              explanation: 'Substitute $x = 5$: $y = 6(5) + 20 = 30 + 20 = 50$, so about \\$50.',
            },
          ],
        },
      },
    ],
  },
]
