import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Scatter Plots and Trend Lines (Grade 8 Math, CCSS 8.SP.A).
 * Registry key / DB Topic.slug: 'scatter-plots-trend-lines-grade8'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * building scatter plots, describing association (positive/negative/none, linear/nonlinear,
 * clusters & outliers), drawing a trend line, finding its slope-intercept equation, and
 * using the equation to make predictions and interpret slope & intercept in context.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'scatter-plots-trend-lines-grade8',
    sections: [
      {
        id: 'spt1-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots and Trend Lines

**Part 1 of 5 — What a Scatter Plot Shows**

---

### Topics in This Part

| Section |
|---------|
| What Is a Scatter Plot? |
| Bivariate Data & Ordered Pairs |
| Plotting Points |

> 🔑 **Key Concept:** A **scatter plot** is a graph of paired numbers — like a student's *hours studied* and their *test score*. Each dot is one ordered pair $(x, y)$. The shape made by all the dots tells a story about how the two quantities are related.`,
      },
      {
        id: 'spt1-bivariate',
        type: 'text' as const,
        content: `## Bivariate Data

When you measure **two** things about each subject, you have **bivariate data** ("bi" = two). For example, for each car you might record its *age* and its *price*.

| Car | Age (years), $x$ | Price (\\$1000s), $y$ | Ordered pair |
|-----|------------------|----------------------|--------------|
| A | 2 | 18 | $(2, 18)$ |
| B | 5 | 12 | $(5, 12)$ |
| C | 8 | 7 | $(8, 7)$ |

Each row becomes **one dot** on the scatter plot, placed at $(x, y)$.

> 💡 **The $x$-axis** is the quantity you treat as the "input" (here, age). **The $y$-axis** is the quantity that may respond to it (here, price). Choosing axes is a judgment call, but the input usually goes on the horizontal axis.`,
      },
      {
        id: 'spt1-readpoint',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a scatter plot, what does a single dot represent?',
              options: [
                'One subject with its pair of measurements $(x, y)$',
                'The total of all the $x$-values',
                'The average of $x$ and $y$',
                'A line connecting two data values',
              ],
              correctAnswer: 0,
              explanation: 'Every dot is one individual (one car, one student, one day) plotted at its own $(x, y)$ pair. A scatter plot with 20 dots came from 20 subjects.',
            },
            {
              question: 'A scatter plot compares daily temperature ($x$) and ice cream sales ($y$). Which is the dependent (response) quantity that belongs on the $y$-axis?',
              options: ['Ice cream sales', 'Temperature', 'The number of dots', 'The day of the week'],
              correctAnswer: 0,
              explanation: 'Sales are expected to respond to temperature, so sales is the response variable on the $y$-axis and temperature is the input on the $x$-axis.',
            },
          ],
        },
      },
      {
        id: 'spt1-plotting',
        type: 'text' as const,
        content: `## Plotting a Point

To plot $(x, y)$: start at the origin, move **right** $x$ units, then **up** $y$ units.

**Example:** To plot $(3, 8)$ — move right $3$, then up $8$, and place a dot.

| Point | Move right | Move up |
|-------|-----------|---------|
| $(2, 5)$ | $2$ | $5$ |
| $(4, 1)$ | $4$ | $1$ |
| $(0, 6)$ | $0$ | $6$ |

> ⚠️ **Order matters!** The first number is always $x$ (horizontal). $(3, 8)$ and $(8, 3)$ are *different* dots. A common mistake is reversing them.`,
      },
      {
        id: 'spt1-readtable',
        type: 'input-boxes' as const,
        content: `**Read the Data** 🧮

A scatter plot was made from this table:

| Plant | Days of growth, $x$ | Height (cm), $y$ |
|-------|---------------------|------------------|
| 1 | 1 | 4 |
| 2 | 3 | 10 |
| 3 | 6 | 19 |

**1)** How many dots are on this scatter plot? $\\,?$
**2)** What is the $y$-coordinate (height) of the dot for Plant 2? $\\,?$
**3)** For the dot $(6, 19)$, how far right from the origin is it? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '10', '6'],
          hint1: 'One dot per plant, and there are 3 plants.',
          hint2: 'Plant 2 is the row $(3, 10)$; the height is the $y$-value.',
          hint3: 'The distance right from the origin is the $x$-coordinate.',
          explanation: '1) $3$ dots (one per row).  2) Plant 2 is $(3,10)$, so $y = 10$.  3) The point $(6,19)$ sits $6$ units to the right, because $x = 6$.',
        },
      },
      {
        id: 'spt1-axesdropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Axis** 🔽

A researcher studies how a sunflower's *days since planting* affects its *height*. Choose the best label for each part of the scatter plot.`,
        exercise: {
          dropdowns: [
            { label: 'Days since planting (the input) belongs on the:', options: ['$x$-axis (horizontal)', '$y$-axis (vertical)', 'origin', 'trend line'] },
            { label: 'Height (the response) belongs on the:', options: ['$y$-axis (vertical)', '$x$-axis (horizontal)', 'origin', 'first row'] },
            { label: 'The dot for a plant measured at $(7, 22)$ sits, from the origin:', options: ['right $7$, up $22$', 'right $22$, up $7$', 'up $7$, right $22$', 'left $7$, down $22$'] },
          ],
          correctAnswers: ['$x$-axis (horizontal)', '$y$-axis (vertical)', 'right $7$, up $22$'],
          hint1: 'The input (what you control or treat as the cause) goes on the horizontal axis.',
          hint2: 'The response (what may change because of the input) goes on the vertical axis.',
          hint3: 'For $(x, y)$ you always move right $x$ first, then up $y$.',
          explanation: 'Days planted is the input → $x$-axis. Height is the response → $y$-axis. To plot $(7, 22)$ go right $7$ (the $x$-value), then up $22$ (the $y$-value).',
        },
      },
      {
        id: 'spt1-wrapup',
        type: 'text' as const,
        content: `## You Can Now Build a Scatter Plot

You can turn a table of paired numbers into a cloud of dots. That cloud is about to become very useful: its **shape** reveals whether the two quantities move together, move opposite, or have nothing to do with each other.

In **Part 2** we learn to *read* that shape — the **association** between the variables.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'scatter-plots-trend-lines-grade8',
    sections: [
      {
        id: 'spt2-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots and Trend Lines

**Part 2 of 5 — Describing Association**

---

> 🔑 **The Big Question:** When $x$ goes up, what does $y$ tend to do? The answer is the **association** between the two variables. We describe it in three ways: **direction**, **form**, and **strength**.`,
      },
      {
        id: 'spt2-direction',
        type: 'text' as const,
        content: `## Direction: Positive, Negative, or None

| Association | What happens | Picture |
|-------------|--------------|---------|
| **Positive** | As $x$ increases, $y$ tends to **increase** | dots rise left → right ↗ |
| **Negative** | As $x$ increases, $y$ tends to **decrease** | dots fall left → right ↘ |
| **No association** | $y$ shows no clear trend as $x$ changes | dots scattered randomly |

**Real examples:**
- *Hours studied* vs. *test score* → **positive** (more study, higher score).
- *Car age* vs. *car price* → **negative** (older car, lower price).
- *Shoe size* vs. *math grade* → **no association** (unrelated).

> 💡 "Positive" does **not** mean good and "negative" does **not** mean bad. It only describes the *direction* the dots tilt.`,
      },
      {
        id: 'spt2-directionquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A scatter plot of "number of pizza slices eaten" ($x$) vs. "amount of pizza left" ($y$) would show what association?',
              options: ['Negative', 'Positive', 'No association', 'Nonlinear'],
              correctAnswer: 0,
              explanation: 'The more slices eaten, the less pizza remains — as $x$ goes up, $y$ goes down. That is a negative association.',
            },
            {
              question: 'Which pair of variables most likely shows a POSITIVE association?',
              options: [
                'A person\'s height and their shoe size',
                'A car\'s age and its resale price',
                'A student\'s ID number and their test score',
                'The temperature and the number of layers of clothing worn',
              ],
              correctAnswer: 0,
              explanation: 'Taller people tend to have larger feet, so height and shoe size rise together (positive). Car age/price is negative; ID number/score is no association; temperature/clothing is negative (colder → more layers).',
            },
          ],
        },
      },
      {
        id: 'spt2-form',
        type: 'text' as const,
        content: `## Form: Linear or Nonlinear

**Form** describes the *shape* of the cloud of dots.

- **Linear** — the dots roughly follow a **straight line**.
- **Nonlinear** — the dots follow a **curve** (they bend).

This lesson focuses on data that is roughly **linear**, because a straight trend line fits it well. If the dots clearly curve, a straight line would be a poor description.

### Strength

**Strength** is how *tightly* the dots hug the pattern.

- **Strong** — dots cluster very close to a line; the trend is obvious.
- **Weak** — dots are spread out; you can sense a trend but it's loose.

> 💡 A scatter plot can be a **strong positive linear** association (tight, rising, straight) or a **weak negative** one (loose, falling), and every combination in between.`,
      },
      {
        id: 'spt2-formdropdown',
        type: 'dropdown-select' as const,
        content: `**Describe the Association** 🔽

For each described scatter plot, pick the best label.`,
        exercise: {
          dropdowns: [
            { label: 'Dots fall steadily left to right, all hugging a straight line:', options: ['strong negative linear', 'strong positive linear', 'weak negative linear', 'no association'] },
            { label: 'Dots rise but are spread out loosely around a line:', options: ['weak positive linear', 'strong positive linear', 'strong negative linear', 'nonlinear'] },
            { label: 'Dots form a clear U-shaped curve:', options: ['nonlinear', 'strong positive linear', 'no association', 'weak negative linear'] },
          ],
          correctAnswers: ['strong negative linear', 'weak positive linear', 'nonlinear'],
          hint1: 'Falling dots = negative; tightly hugging a line = strong and linear.',
          hint2: 'Rising = positive; "spread out loosely" = weak.',
          hint3: 'A curve (U-shape) is not straight, so it is nonlinear.',
          explanation: '1) Falling + tight + straight = strong negative linear.  2) Rising + loose = weak positive linear.  3) A bending U-shape is nonlinear — a straight trend line would fit poorly.',
        },
      },
      {
        id: 'spt2-clusters',
        type: 'text' as const,
        content: `## Clusters and Outliers

Two features can stand out in a scatter plot:

- A **cluster** is a group of dots bunched together, separate from the rest. It can signal two different types of subjects in one plot.
- An **outlier** is a dot that lies **far away** from the overall pattern. It often comes from an unusual case or a recording error.

> ⚠️ **Outliers can be misleading.** A single far-off dot can pull a trend line toward it, so always look for one before drawing your line.`,
      },
      {
        id: 'spt2-outlierquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a scatter plot of height vs. weight for a class, one dot sits far above and to the left of every other dot. This dot is best described as:',
              options: ['An outlier', 'A cluster', 'The trend line', 'A positive association'],
              correctAnswer: 0,
              explanation: 'A single point that lies far from the overall pattern is an outlier. A cluster would be a *group* of dots, not a lone point.',
            },
            {
              question: 'Why should you check for outliers before drawing a trend line?',
              options: [
                'An outlier can pull the line away from the bulk of the data',
                'Outliers make the plot have more dots',
                'A trend line cannot be drawn if any outlier exists',
                'Outliers always change the direction from positive to negative',
              ],
              correctAnswer: 0,
              explanation: 'A far-off point tugs a best-fit line toward itself, so the line may no longer represent most of the data. Outliers do not forbid a line, nor do they automatically flip its direction.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'scatter-plots-trend-lines-grade8',
    sections: [
      {
        id: 'spt3-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots and Trend Lines

**Part 3 of 5 — Drawing the Trend Line**

---

> 🔑 **The Idea:** A **trend line** (also called a *line of best fit*) is a single straight line drawn through the middle of a linear scatter plot. It summarizes the whole cloud of dots with one simple rule.`,
      },
      {
        id: 'spt3-howto',
        type: 'text' as const,
        content: `## How to Draw a Good Trend Line

1. Make sure the association is roughly **linear** (a straight line makes sense).
2. Draw a line that runs through the **center** of the dots.
3. Aim for **about half the dots above** the line and **about half below** it.
4. Get the line **as close as possible** to as many dots as you can.

> ⚠️ A trend line is **not** "connect the dots," and it does **not** have to pass through any actual data point. It passes through the *middle* of them.

> 💡 Because people draw it by eye, two students may get slightly different trend lines — and both can be reasonable. What matters is that the line follows the overall pattern.`,
      },
      {
        id: 'spt3-gooddropdown',
        type: 'dropdown-select' as const,
        content: `**Is It a Good Trend Line?** 🔽

A linear scatter plot rises from lower-left to upper-right. Judge each proposed line.`,
        exercise: {
          dropdowns: [
            { label: 'A line through the center with ~half the dots on each side:', options: ['good trend line', 'too high', 'wrong direction', 'connects the dots'] },
            { label: 'A line drawn so that every dot sits below it:', options: ['too high', 'good trend line', 'wrong direction', 'perfect fit'] },
            { label: 'A line that falls from upper-left to lower-right:', options: ['wrong direction', 'good trend line', 'too low', 'too high'] },
          ],
          correctAnswers: ['good trend line', 'too high', 'wrong direction'],
          hint1: 'A good line splits the dots about evenly above and below.',
          hint2: 'If all dots are below the line, the line is sitting too high.',
          hint3: 'The data rises, so a falling line goes the wrong direction (negative vs. positive).',
          explanation: '1) Centered with a balanced split = a good trend line.  2) All dots below means the line is too high.  3) Rising data needs a rising line; a falling line is the wrong direction.',
        },
      },
      {
        id: 'spt3-slopefromline',
        type: 'text' as const,
        content: `## Finding the Slope from the Line

Once your trend line is drawn, pick **two points that lie ON the line** (corner gridpoints are easiest — they do **not** need to be real data dots). Then use the slope formula:

$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$$

### Worked Example

Suppose a trend line passes through $(0, 2)$ and $(4, 10)$.

$$m = \\frac{10 - 2}{4 - 0} = \\frac{8}{4} = 2$$

The slope is $2$: every time $x$ increases by $1$, the line predicts $y$ increases by about $2$.

> 💡 A **positive** slope confirms a **positive** association; a **negative** slope confirms a negative one.`,
      },
      {
        id: 'spt3-slopedrill',
        type: 'input-boxes' as const,
        content: `**Find the Slope** 🧮

Each trend line passes through the two given points. Find the slope $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.

**1)** Through $(1, 5)$ and $(5, 25)$: $\\;m = \\,?$
**2)** Through $(2, 8)$ and $(6, 20)$: $\\;m = \\,?$
**3)** Through $(0, 30)$ and $(10, 10)$: $\\;m = \\,?$  *(it falls, so $m$ is negative)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '3', '-2'],
          hint1: '$\\dfrac{25 - 5}{5 - 1} = \\dfrac{20}{4} = 5$.',
          hint2: '$\\dfrac{20 - 8}{6 - 2} = \\dfrac{12}{4} = 3$.',
          hint3: '$\\dfrac{10 - 30}{10 - 0} = \\dfrac{-20}{10} = -2$. A falling line has a negative slope.',
          explanation: '1) $m = 20/4 = 5$.  2) $m = 12/4 = 3$.  3) $m = -20/10 = -2$ (negative because the line falls).',
        },
      },
      {
        id: 'spt3-yint',
        type: 'text' as const,
        content: `## Finding the $y$-Intercept

The **$y$-intercept** $b$ is the $y$-value where the trend line crosses the **$y$-axis** — that is, where $x = 0$.

In the worked example through $(0, 2)$, the line already passes through the $y$-axis at $y = 2$, so $b = 2$.

Now you have both pieces of the line's equation:
$$y = mx + b = 2x + 2$$

> 🔑 **Slope-intercept form** $y = mx + b$ packs the whole trend line into one equation: $m$ is the slope, $b$ is the $y$-intercept. In **Part 4** we use this equation to make predictions.`,
      },
      {
        id: 'spt3-equationquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A trend line passes through $(0, 5)$ and $(2, 11)$. What is its slope?',
              options: ['$3$', '$5$', '$6$', '$2$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{11 - 5}{2 - 0} = \\dfrac{6}{2} = 3$.',
            },
            {
              question: 'That same line through $(0, 5)$ and $(2, 11)$ has what equation in slope-intercept form?',
              options: ['$y = 3x + 5$', '$y = 5x + 3$', '$y = 3x - 5$', '$y = 6x + 5$'],
              correctAnswer: 0,
              explanation: 'The slope is $3$ and the line crosses the $y$-axis at $(0, 5)$, so $b = 5$. Thus $y = 3x + 5$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'scatter-plots-trend-lines-grade8',
    sections: [
      {
        id: 'spt4-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots and Trend Lines

**Part 4 of 5 — Predicting & Interpreting**

---

> 🔑 **The Payoff:** Once the trend line is written as $y = mx + b$, you can **predict** a $y$-value for any $x$, and you can explain what the slope and intercept *mean* in the real situation.`,
      },
      {
        id: 'spt4-predict',
        type: 'text' as const,
        content: `## Making a Prediction

To predict, **substitute** the $x$-value into the trend-line equation and compute $y$.

### Worked Example

A study finds that the trend line for *hours studied* ($x$) vs. *test score* ($y$) is:
$$y = 8x + 40$$

Predict the score for a student who studies $4$ hours:
$$y = 8(4) + 40 = 32 + 40 = 72$$

The model predicts about a **$72$**.

> 💡 Predictions are **estimates**, not guarantees. A real student who studies $4$ hours might score $68$ or $77$ — the trend line gives the *expected* value, near the center of the dots.`,
      },
      {
        id: 'spt4-predictquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A trend line is $y = 3x + 2$. What does it predict for $x = 5$?',
              options: ['$17$', '$15$', '$10$', '$25$'],
              correctAnswer: 0,
              explanation: 'Substitute: $y = 3(5) + 2 = 15 + 2 = 17$.',
            },
            {
              question: 'A prediction from a trend line is best described as:',
              options: [
                'An estimate of the expected $y$-value, not an exact guarantee',
                'The exact value the next subject will have',
                'Always one of the original data points',
                'The average of all the $x$-values',
              ],
              correctAnswer: 0,
              explanation: 'The line runs through the middle of scattered dots, so it gives an expected (typical) value. Individual subjects vary above and below the line.',
            },
          ],
        },
      },
      {
        id: 'spt4-interpret',
        type: 'text' as const,
        content: `## Interpreting Slope and Intercept in Context

The two numbers in $y = mx + b$ carry real-world meaning:

| Symbol | Meaning in general | Meaning for $y = 8x + 40$ (study vs. score) |
|--------|--------------------|----------------------------------------------|
| **slope** $m$ | how much $y$ changes per **$1$-unit** increase in $x$ | each extra hour of study adds about **$8$ points** |
| **$y$-intercept** $b$ | the predicted $y$ when $x = 0$ | a student who studies **$0$ hours** is predicted to score **$40$** |

> 💡 Always attach the **units** when you interpret: the slope here is "$8$ points **per hour**," not just "$8$."

> ⚠️ **Interpolation vs. extrapolation.** Predicting *inside* the range of the data (interpolation) is fairly safe. Predicting *far outside* it (extrapolation) is risky — the pattern may not continue. Predicting a score for $40$ hours of study with this line would be extrapolation.`,
      },
      {
        id: 'spt4-interpretdropdown',
        type: 'dropdown-select' as const,
        content: `**Interpret the Model** 🔽

A trend line for *ice cream sales* uses $x =$ temperature (°F) and $y =$ cones sold:
$$y = 12x + 30$$`,
        exercise: {
          dropdowns: [
            { label: 'The slope $12$ means each 1°F rise adds about:', options: ['12 more cones sold', '30 more cones sold', '12 more degrees', '12 fewer cones'] },
            { label: 'The intercept $30$ is the predicted cones when temperature is:', options: ['$0$°F', '$30$°F', '$12$°F', 'the highest temperature'] },
            { label: 'Predicted cones at $x = 20$°F: $y = 12(20) + 30 =$', options: ['$270$', '$240$', '$300$', '$32$'] },
          ],
          correctAnswers: ['12 more cones sold', '$0$°F', '$270$'],
          hint1: 'Slope = change in $y$ per $1$-unit change in $x$ (per 1°F).',
          hint2: 'The $y$-intercept is the value of $y$ when $x = 0$.',
          hint3: '$12 \\times 20 = 240$, then $+30 = 270$.',
          explanation: 'Slope $12$ → $12$ more cones per degree. Intercept $30$ → predicted cones at $0$°F. At $x=20$: $12(20)+30 = 240+30 = 270$.',
        },
      },
      {
        id: 'spt4-predictdrill',
        type: 'input-boxes' as const,
        content: `**Predict It** 🧮

Use each trend line to make the prediction.

**1)** $y = 5x + 3$. Predict $y$ when $x = 6$: $\\,?$
**2)** $y = -2x + 50$. Predict $y$ when $x = 10$: $\\,?$  *(a negative slope means $y$ falls)*
**3)** $y = 4x + 12$. Each $1$-unit increase in $x$ raises $y$ by how much? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['33', '30', '4'],
          hint1: '$5(6) + 3 = 30 + 3 = 33$.',
          hint2: '$-2(10) + 50 = -20 + 50 = 30$.',
          hint3: 'The per-unit change in $y$ is the slope, $m = 4$.',
          explanation: '1) $5(6)+3 = 33$.  2) $-2(10)+50 = 30$.  3) The slope $4$ is exactly the increase in $y$ per $1$-unit increase in $x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'scatter-plots-trend-lines-grade8',
    sections: [
      {
        id: 'spt5-intro',
        type: 'text' as const,
        content: `# 📈 Scatter Plots and Trend Lines

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) build a scatter plot, (2) describe its association, (3) draw a trend line and find its equation, and (4) predict and interpret. Let's put it all together.`,
      },
      {
        id: 'spt5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Plot a pair $(x, y)$ | right $x$, up $y$ |
| Name the **direction** | rising = positive, falling = negative, random = none |
| Name the **form** | straight = linear, curved = nonlinear |
| Find the **slope** | $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ from two points on the line |
| Find the **intercept** | $b = y$ where the line crosses $x = 0$ |
| Write the line | $y = mx + b$ |
| **Predict** | substitute the $x$-value and compute $y$ |
| **Interpret slope** | change in $y$ per $1$-unit change in $x$ (with units) |

> ⚠️ Remember: a trend line passes through the **middle** of the dots (not every dot), and predicting far outside the data (extrapolation) is risky.`,
      },
      {
        id: 'spt5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A trend line passes through $(0, 6)$ and $(3, 18)$. What is its slope?',
              options: ['$4$', '$6$', '$12$', '$2$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{18 - 6}{3 - 0} = \\dfrac{12}{3} = 4$.',
            },
            {
              question: 'The same line through $(0, 6)$ and $(3, 18)$ has what equation?',
              options: ['$y = 4x + 6$', '$y = 6x + 4$', '$y = 4x - 6$', '$y = 12x + 6$'],
              correctAnswer: 0,
              explanation: 'The slope is $4$ and the line crosses the $y$-axis at $(0, 6)$, so $b = 6$. Thus $y = 4x + 6$.',
            },
          ],
        },
      },
      {
        id: 'spt5-applydrill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

A trend line for *minutes exercised* ($x$) vs. *calories burned* ($y$) is:
$$y = 9x + 15$$

**1)** Predict calories burned for $x = 10$ minutes: $\\,?$
**2)** How many calories does the model add per extra minute of exercise? $\\,?$
**3)** What does the model predict for $x = 0$ minutes (the $y$-intercept)? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['105', '9', '15'],
          hint1: '$9(10) + 15 = 90 + 15 = 105$.',
          hint2: 'Calories added per minute is the slope, $m$.',
          hint3: 'At $x = 0$, $y = 9(0) + 15 = 15$ — that is the $y$-intercept $b$.',
          explanation: '1) $9(10)+15 = 105$ calories.  2) The slope $9$ = calories per extra minute.  3) At $x=0$, $y = 15$ — the $y$-intercept.',
        },
      },
      {
        id: 'spt5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A scatter plot of "hours of TV watched" vs. "hours of sleep" shows dots that fall from upper-left to lower-right. The association is:',
              options: ['Negative', 'Positive', 'No association', 'Nonlinear'],
              correctAnswer: 0,
              explanation: 'Dots falling left-to-right mean that as TV hours increase, sleep hours decrease — a negative association.',
            },
            {
              question: 'A trend line is $y = 7x + 20$. What does it predict for $x = 5$?',
              options: ['$55$', '$35$', '$45$', '$27$'],
              correctAnswer: 0,
              explanation: '$y = 7(5) + 20 = 35 + 20 = 55$.',
            },
            {
              question: 'For the trend line $y = 7x + 20$, what does the slope $7$ mean?',
              options: [
                'Each 1-unit increase in $x$ raises the predicted $y$ by about $7$',
                'The line crosses the $y$-axis at $7$',
                'There are $7$ data points',
                'The prediction at $x = 0$ is $7$',
              ],
              correctAnswer: 0,
              explanation: 'Slope is the change in $y$ per $1$-unit change in $x$, so $y$ rises by about $7$ for each $+1$ in $x$. The intercept (where the line meets the $y$-axis) is $20$, not $7$.',
            },
          ],
        },
      },
    ],
  },
]
