import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Average and Instantaneous Rates of Change (AP Precalculus).
 * Registry key / DB Topic.slug: 'rates-of-change'.
 * 7 parts, scoped to AP Precalculus CED 1.2-1.4: average rate of change as secant
 * slope → units & interpretation → rate at a point estimated from shrinking
 * intervals → estimating the rate at a point from tables (one-sided and centered
 * intervals) → comparing rates at two points from a graph → how rate of change
 * itself changes (increasing/decreasing rates & concavity) → mixed applications +
 * exit quiz. LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every average-rate value was verified numerically before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rates-of-change',
    sections: [
      {
        id: 'roc1-intro',
        type: 'text' as const,
        content: `# 📈 Average & Instantaneous Rates of Change

**Part 1 of 7 — Average Rate of Change as a Secant Slope**

---

### Topics in This Part

| Section |
|---------|
| What "Rate of Change" Means |
| The Average Rate of Change Formula |
| Reading It as a Secant Slope |

> 🔑 **Key Concept:** The **average rate of change (AROC)** of a function over an interval is just the **slope of the line connecting the two endpoints** of the graph on that interval. If you can find a slope, you can find an average rate of change.`,
      },
      {
        id: 'roc1-formula',
        type: 'text' as const,
        content: `## The Average Rate of Change Formula

For a function $f$ on the interval from $x = a$ to $x = b$:

$$\\text{AROC} = \\frac{f(b) - f(a)}{b - a} = \\frac{\\Delta y}{\\Delta x}$$

This is **"rise over run"** — the change in output divided by the change in input.

### Worked Example: $f(x) = x^2$ on $[1, 3]$

$$\\text{AROC} = \\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{3 - 1} = \\frac{8}{2} = 4$$

So between $x = 1$ and $x = 3$, the function rises by $4$ units of $y$ for every $1$ unit of $x$, **on average**.

> 💡 The word *average* matters. Between $x=1$ and $x=3$ the curve isn't a straight line, so its steepness changes — but $4$ is the single slope of the straight **secant line** joining the two endpoints.`,
      },
      {
        id: 'roc1-secant',
        type: 'text' as const,
        content: `## Secant Line = Average Rate

A **secant line** passes through two points on a curve. The slope of that secant line *is* the average rate of change.

| Two points on $f$ | Secant slope = AROC |
|-------------------|---------------------|
| $(a,\\, f(a))$ and $(b,\\, f(b))$ | $\\dfrac{f(b)-f(a)}{b-a}$ |

So these three phrases all mean the **same number**:
- "average rate of change of $f$ on $[a, b]$"
- "slope of the secant line through $(a, f(a))$ and $(b, f(b))$"
- "$\\dfrac{\\Delta y}{\\Delta x}$ over the interval"

> ⚠️ **Order matters in pairs, not overall.** You may compute $\\dfrac{f(b)-f(a)}{b-a}$ or $\\dfrac{f(a)-f(b)}{a-b}$ — both give the same answer. But you may **not** mix them: $\\dfrac{f(b)-f(a)}{a-b}$ flips the sign and is wrong.`,
      },
      {
        id: 'roc1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The average rate of change of a function on $[a, b]$ is the slope of which line?',
              options: [
                'The secant line through the two endpoints',
                'The line from the origin to $(b, f(b))$',
                'A horizontal line at the average height',
                'The vertical line $x = a$',
              ],
              correctAnswer: 0,
              explanation: 'Average rate of change equals $\\frac{f(b)-f(a)}{b-a}$, which is exactly the slope of the secant line connecting $(a,f(a))$ and $(b,f(b))$.',
            },
            {
              question: 'For $g(x) = 2x + 1$, the average rate of change on $[0, 5]$ is:',
              options: ['$2$', '$0.5$', '$11$', '$10$'],
              correctAnswer: 0,
              explanation: '$g(5)=11$, $g(0)=1$, so AROC $=\\frac{11-1}{5-0}=\\frac{10}{5}=2$. For a line, the average rate of change always equals its slope, no matter the interval.',
            },
          ],
        },
      },
      {
        id: 'roc1-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Average Rate** 🧮

Find the average rate of change on the given interval. Fractions or decimals are fine.

**1)** $f(x) = x^2$ on $[2, 5]$
**2)** $f(x) = x^2$ on $[-1, 4]$
**3)** $h(x) = 3x - 7$ on $[10, 20]$  *(it's linear!)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '3', '3'],
          hint1: '$f(5)=25$, $f(2)=4$: AROC $=\\frac{25-4}{5-2}=\\frac{21}{3}=7$.',
          hint2: '$f(4)=16$, $f(-1)=1$: AROC $=\\frac{16-1}{4-(-1)}=\\frac{15}{5}=3$.',
          hint3: 'A line of slope $3$ has average rate of change $3$ on any interval.',
          explanation: '1) $\\frac{21}{3}=7$.  2) $\\frac{15}{5}=3$.  3) Linear with slope $3$, so AROC $=3$.',
        },
      },
      {
        id: 'roc1-close',
        type: 'text' as const,
        content: `## What You've Got

You can now turn any "average rate of change" question into a **slope** computation:

$$\\boxed{\\;\\text{AROC} = \\frac{f(b) - f(a)}{b - a}\\;}$$

In **Part 2** we attach *units and meaning* to that number, so an average rate of change becomes a real-world statement like "the car gained $15$ miles per hour each second."`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rates-of-change',
    sections: [
      {
        id: 'roc2-intro',
        type: 'text' as const,
        content: `# 📈 Average & Instantaneous Rates of Change

**Part 2 of 7 — Units, Signs & Interpretation**

---

> 🔑 **The Idea:** A rate of change isn't just a number — it carries **units** (output units per input unit) and a **sign** (increasing vs. decreasing). Reading both is the heart of AP Precalculus rate questions.`,
      },
      {
        id: 'roc2-units',
        type: 'text' as const,
        content: `## Units: Output per Input

The units of a rate of change are always:

$$\\frac{\\text{units of } y}{\\text{units of } x}$$

| Situation | $y$-units | $x$-units | Rate units |
|-----------|-----------|-----------|------------|
| Distance vs. time | miles | hours | miles per hour |
| Population vs. years | people | years | people per year |
| Cost vs. items | dollars | items | dollars per item |
| Temperature vs. minutes | $^\\circ$C | minutes | $^\\circ$C per minute |

### Example

A tank holds $V(t)$ liters of water after $t$ minutes. If the average rate of change of $V$ on $[0, 4]$ is $-6$, then the tank **loses** water at an average of $6$ liters per minute over those $4$ minutes.

> 💡 To interpret a rate in a sentence, fill in: **"$y$ changes by about [rate] [$y$-units] for each [$x$-unit]."**`,
      },
      {
        id: 'roc2-sign',
        type: 'text' as const,
        content: `## What the Sign Tells You

| Sign of AROC | Meaning over the interval |
|--------------|---------------------------|
| **Positive** | $f$ is increasing *on average* (secant slopes up) |
| **Negative** | $f$ is decreasing *on average* (secant slopes down) |
| **Zero** | $f$ ends at the same height it started ($f(a)=f(b)$) |

> ⚠️ **Zero average rate does NOT mean "no movement."** On $[-2, 2]$ for $f(x)=x^2$, AROC $=\\frac{4-4}{2-(-2)}=0$ — yet the function dips down and comes back up. Average rate only compares the two **endpoints**.`,
      },
      {
        id: 'roc2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Interpret the Rate** 🔽

A balloon's height is $H(t)$ meters after $t$ seconds. Its average rate of change on $[0, 10]$ is $+4$.`,
        exercise: {
          dropdowns: [
            { label: 'The units of this rate are:', options: ['meters per second', 'seconds per meter', 'meters', 'seconds'] },
            { label: 'Because the rate is positive, the balloon is, on average:', options: ['rising', 'falling', 'stationary', 'spinning'] },
            { label: 'A correct sentence is: "On average, the height increases by 4 meters every…":', options: ['1 second', '10 seconds', '4 seconds', '40 seconds'] },
          ],
          correctAnswers: ['meters per second', 'rising', '1 second'],
          hint1: 'Units of a rate are $y$-units over $x$-units = meters over seconds.',
          hint2: 'A positive rate of change means the output is increasing on average.',
          hint3: 'A rate of "4 meters per second" means 4 meters of change for each single second.',
          explanation: 'The rate $+4$ has units meters/second, its positive sign means rising, and it means $+4$ meters per *each* second.',
        },
      },
      {
        id: 'roc2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The average rate of change of $f(x)=x^2$ on $[-3, 3]$ is $0$. What does this tell you?',
              options: [
                'The endpoints have equal heights, $f(-3)=f(3)=9$',
                'The function is constant: $f(x) = 9$ on the whole interval',
                'The function never changes value',
                'The function has no graph on that interval',
              ],
              correctAnswer: 0,
              explanation: 'A zero average rate means $f(b)=f(a)$. Here $f(-3)=9=f(3)$, so the secant is horizontal — but the curve still dips to $0$ in between. Endpoints equal does not mean constant.',
            },
            {
              question: 'A patient\'s temperature drops from $39^\\circ$C to $37^\\circ$C over $4$ hours. The average rate of change is:',
              options: ['$-0.5\\ ^\\circ$C per hour', '$0.5\\ ^\\circ$C per hour', '$-2\\ ^\\circ$C per hour', '$-8\\ ^\\circ$C per hour'],
              correctAnswer: 0,
              explanation: 'AROC $=\\frac{37-39}{4}=\\frac{-2}{4}=-0.5\\ ^\\circ$C per hour. The negative sign shows the temperature is falling.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rates-of-change',
    sections: [
      {
        id: 'roc3-intro',
        type: 'text' as const,
        content: `# 📈 Average & Instantaneous Rates of Change

**Part 3 of 7 — Rate at a Point from Shrinking Intervals**

---

> 🔑 **The Big Leap:** The **rate of change at a point** (often called the *instantaneous* rate of change) describes how fast the output would change if the input changed right at that point. You estimate it with average rates of change over **smaller and smaller intervals containing the point**.`,
      },
      {
        id: 'roc3-idea',
        type: 'text' as const,
        content: `## From Average to "At a Point"

An average rate of change needs **two** points. A rate at a point is about **one** point, so you sneak up on it with intervals that contain the point and keep getting narrower.

To estimate the rate of change of $f$ at $x = a$, compute the average rate of change on intervals like:

| Interval type | Example near $a = 2$ |
|---------------|----------------------|
| Starting at $a$ | $[2, 2.1]$, then $[2, 2.01]$ |
| Ending at $a$ | $[1.9, 2]$, then $[1.99, 2]$ |
| Centered on $a$ | $[1.9, 2.1]$, then $[1.99, 2.01]$ |

As the intervals shrink, the average rates settle on one value. That value is your estimate of the rate of change at $x = a$.

> 💡 Calculus later makes this idea exact. AP Precalculus asks you to **estimate** it from formulas, tables, and graphs, and to **compare** rates at different points.`,
      },
      {
        id: 'roc3-worked',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^2$ at $x = 2$

### Shrinking From the Right

| Interval | Average rate of change |
|----------|------------------------|
| $[2, 3]$ | $\\dfrac{9 - 4}{1} = 5$ |
| $[2, 2.5]$ | $\\dfrac{6.25 - 4}{0.5} = 4.5$ |
| $[2, 2.1]$ | $\\dfrac{4.41 - 4}{0.1} = 4.1$ |
| $[2, 2.01]$ | $\\dfrac{4.0401 - 4}{0.01} = 4.01$ |

### Shrinking From the Left

| Interval | Average rate of change |
|----------|------------------------|
| $[1.9, 2]$ | $\\dfrac{4 - 3.61}{0.1} = 3.9$ |
| $[1.99, 2]$ | $\\dfrac{4 - 3.9601}{0.01} = 3.99$ |

The right-hand values sit just above $4$ and the left-hand values just below it. The centered interval $[1.9, 2.1]$ gives $\\dfrac{4.41 - 3.61}{0.2} = 4$.

So the **rate of change of $x^2$ at $x = 2$ is about $4$**: near $x = 2$, the output grows about $4$ units per unit of input.`,
      },
      {
        id: 'roc3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The rate of change of $f$ at $x = a$ is best estimated by the average rate of change over:',
              options: ['a small interval containing $a$', 'the interval from $0$ to $a$', 'the widest interval in the domain', 'the interval from $a$ to $2a$'],
              correctAnswer: 0,
              explanation: 'A rate at a point is approximated by average rates over small intervals containing that point. Wide intervals, or ones stretching far from $a$, average in behavior from other inputs.',
            },
            {
              question: 'The average rates of $f$ on $[5, 5.1]$, $[5, 5.01]$ and $[5, 5.001]$ are $2.31$, $2.301$ and $2.3001$. The rate of change of $f$ at $x = 5$ is about:',
              options: ['$2.3$', '$2.31$', '$0.0001$', '$5$'],
              correctAnswer: 0,
              explanation: 'As the intervals shrink, the average rates settle on $2.3$. The value $2.31$ comes from the widest interval, and $0.0001$ tracks how much the estimates differ rather than the rate itself.',
            },
          ],
        },
      },
      {
        id: 'roc3-drill',
        type: 'input-boxes' as const,
        content: `**Shrinking Intervals** 🧮

Let $f(x) = x^2 + x$.

**1)** Average rate on $[3, 4]$
**2)** Average rate on $[3, 3.1]$
**3)** Your estimate of the rate of change at $x = 3$ (a whole number)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '7.1', '7'],
          hint1: '$f(4) = 20$ and $f(3) = 12$, so the average rate is $\\frac{20 - 12}{1}$.',
          hint2: '$f(3.1) = 9.61 + 3.1 = 12.71$, so the average rate is $\\frac{12.71 - 12}{0.1}$.',
          hint3: 'Try $[3, 3.01]$: $f(3.01) = 12.0701$, giving $7.01$. The values settle on a whole number.',
          explanation: '1) $\\frac{8}{1} = 8$. 2) $\\frac{0.71}{0.1} = 7.1$. 3) On $[3, 3.01]$ the average rate is $7.01$, so the rate at $x = 3$ is about $7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rates-of-change',
    sections: [
      {
        id: 'roc4-intro',
        type: 'text' as const,
        content: `# 📈 Average & Instantaneous Rates of Change

**Part 4 of 7 — Estimating the Rate at a Point from a Table**

---

> 🔑 **The Idea:** On the AP exam you often get a **table of values**, not a formula. You can't shrink the interval past the data you have, so you **estimate** the rate of change at a point using the average rate over the *smallest interval available* around the point.`,
      },
      {
        id: 'roc4-methods',
        type: 'text' as const,
        content: `## Three Ways to Estimate the Rate at $x = a$

| Method | Formula | When to use |
|--------|---------|-------------|
| **Forward** difference | $\\dfrac{f(a+h)-f(a)}{h}$ | only data *after* $a$ is available |
| **Backward** difference | $\\dfrac{f(a)-f(a-h)}{h}$ | only data *before* $a$ is available |
| **Symmetric** difference | $\\dfrac{f(a+h)-f(a-h)}{2h}$ | data on **both** sides (most accurate) |

> 💡 The **symmetric** (centered) difference uses one point on each side and is usually the best estimate, because it averages the slopes coming in and going out.`,
      },
      {
        id: 'roc4-worked',
        type: 'text' as const,
        content: `## Worked Example

A function $P(t)$ (a population, in thousands) is sampled:

| $t$ (years) | $2$ | $4$ | $6$ | $8$ |
|-------------|-----|-----|-----|-----|
| $P(t)$ | $10$ | $18$ | $30$ | $50$ |

**Estimate the rate of change of $P$ at $t = 4$.**

Use the **symmetric** difference with the neighbors $t=2$ and $t=6$:

$$\\text{rate at } t = 4 \\approx \\frac{P(6) - P(2)}{6 - 2} = \\frac{30 - 10}{4} = \\frac{20}{4} = 5$$

So the population is growing at about **$5$ thousand people per year** at $t = 4$.

> ⚠️ Use the points **closest** to $t=4$ that bracket it ($t=2$ and $t=6$). Don't reach all the way out to $t=8$ — that would average over too wide an interval and lose accuracy.`,
      },
      {
        id: 'roc4-drill',
        type: 'input-boxes' as const,
        content: `**Estimate from the Table** 🧮

Using the same table:

| $t$ | $2$ | $4$ | $6$ | $8$ |
|-----|-----|-----|-----|-----|
| $P(t)$ | $10$ | $18$ | $30$ | $50$ |

**1)** Symmetric-difference estimate of the rate at $t = 6$  *(use $t=4$ and $t=8$)*
**2)** Forward-difference estimate of the rate at $t = 2$  *(use $t=2$ and $t=4$)*
**3)** Backward-difference estimate of the rate at $t = 8$  *(use $t=6$ and $t=8$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '4', '10'],
          hint1: 'Rate at $t=6$: $\\frac{P(8)-P(4)}{8-4}=\\frac{50-18}{4}$.',
          hint2: 'Rate at $t=2$: $\\frac{P(4)-P(2)}{4-2}=\\frac{18-10}{2}$.',
          hint3: 'Rate at $t=8$: $\\frac{P(8)-P(6)}{8-6}=\\frac{50-30}{2}$.',
          explanation: '1) $\\frac{50-18}{4}=\\frac{32}{4}=8$.  2) $\\frac{18-10}{2}=\\frac{8}{2}=4$.  3) $\\frac{50-30}{2}=\\frac{20}{2}=10$.',
        },
      },
      {
        id: 'roc4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Method** 🔽

For each situation, choose the best difference method to estimate the rate of change at $x = a$.`,
        exercise: {
          dropdowns: [
            { label: 'You have data points on both sides of $a$:', options: ['symmetric difference', 'forward difference only', 'backward difference only', 'no estimate possible'] },
            { label: '$a$ is the very last point in the table:', options: ['backward difference', 'symmetric difference', 'forward difference', 'midpoint of all data'] },
            { label: '$a$ is the very first point in the table:', options: ['forward difference', 'backward difference', 'symmetric difference', 'no estimate possible'] },
          ],
          correctAnswers: ['symmetric difference', 'backward difference', 'forward difference'],
          hint1: 'With neighbors on each side, center your estimate with a symmetric difference.',
          hint2: 'At the last point there is nothing after it, so reach backward to the previous point.',
          hint3: 'At the first point there is nothing before it, so reach forward to the next point.',
          explanation: 'Use symmetric when both sides are available (most accurate); at an endpoint you can only go the one direction that has data.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rates-of-change',
    sections: [
      {
        id: 'roc5-intro',
        type: 'text' as const,
        content: `# 📈 Average & Instantaneous Rates of Change

**Part 5 of 7 — Comparing Rates at Two Points from a Graph**

---

> 🔑 **The Idea:** On a graph, the rate of change at a point shows up as **steepness** there. To estimate it, read two points on the graph just to the left and right of the point and compute the slope between them. To compare rates at two points, do the same at each point.`,
      },
      {
        id: 'roc5-read',
        type: 'text' as const,
        content: `## Reading a Rate off a Graph

To estimate the rate of change at $x = a$ from a graph:

1. **Read two points on the graph** close to $a$, one on each side, ideally where the curve crosses gridlines.
2. **Compute the slope** $\\dfrac{\\Delta y}{\\Delta x}$ between them. That is the average rate on a small interval containing $a$.
3. **Repeat at the second point** if you are comparing, using an interval of the same width.

### Example

A graph of $f$ passes through these points:

| Near $x = 3$ | Near $x = 6$ |
|--------------|--------------|
| $(2.5,\\ 3.1)$ and $(3.5,\\ 4.9)$ | $(5.5,\\ 7.0)$ and $(6.5,\\ 7.4)$ |

$$\\text{rate at } x = 3 \\approx \\frac{4.9 - 3.1}{3.5 - 2.5} = 1.8 \\qquad \\text{rate at } x = 6 \\approx \\frac{7.4 - 7.0}{6.5 - 5.5} = 0.4$$

Both rates are positive, so $f$ is increasing at both points, but it rises much faster near $x = 3$: about $4.5$ times as fast.`,
      },
      {
        id: 'roc5-shape',
        type: 'text' as const,
        content: `## Steepness Tells You the Shape

| Graph near the point | Rate of change there |
|----------------------|----------------------|
| Rising | positive |
| Falling | negative |
| Steep | large in size: changing fast |
| Nearly flat | small in size: changing slowly |
| Top of a hill or bottom of a valley | about $0$, switching sign |

> ⚠️ At a **peak**, average rates just to the left are positive and just to the right are negative, so a small interval centered on the peak gives a rate near $0$. That is why the rate of change is $0$ at the top of a thrown ball's path.`,
      },
      {
        id: 'roc5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A graph passes through $(3.8,\\ 5.6)$ and $(4.2,\\ 7.2)$. The rate of change at $x = 4$ is about:',
              options: ['$4$', '$1.6$', '$0.4$', '$1.8$'],
              correctAnswer: 0,
              explanation: 'Slope between the two nearby points: $\\frac{7.2 - 5.6}{4.2 - 3.8} = \\frac{1.6}{0.4} = 4$. Stopping at the change in output gives $1.6$, and dividing $7.2$ by $4$ gives $1.8$.',
            },
            {
              question: 'At the highest point of a parabola that opens downward, the rate of change is:',
              options: ['zero', 'positive', 'negative', 'undefined'],
              correctAnswer: 0,
              explanation: 'Just left of the peak the graph rises and just right of it the graph falls, so a small interval centered on the peak has an average rate near $0$. The function is neither rising nor falling there.',
            },
          ],
        },
      },
      {
        id: 'roc5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Compare Rates on a Graph** 🔽

On a single curve, the graph is steep and rising near point $A$, shallow and rising near point $B$, and it peaks at point $C$.`,
        exercise: {
          dropdowns: [
            { label: 'The function is increasing fastest at:', options: ['$A$', '$B$', '$C$', 'they are equal'] },
            { label: 'The rate of change is about zero at:', options: ['$C$', '$A$', '$B$', 'none of them'] },
            { label: 'Comparing the rates: $A$ is ___ than $B$:', options: ['greater', 'less', 'equal', 'negative'] },
          ],
          correctAnswers: ['$A$', '$C$', 'greater'],
          hint1: 'A steeper rising graph means a larger positive rate of change.',
          hint2: 'At a peak, the rates switch from positive to negative.',
          hint3: 'Steep beats shallow: the rate at $A$ is greater than the rate at $B$.',
          explanation: 'Steepness near a point shows the size of the rate. $A$ (steep) > $B$ (shallow) > $C$ (the peak, rate about $0$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'rates-of-change',
    sections: [
      {
        id: 'roc6-intro',
        type: 'text' as const,
        content: `# 📈 Average & Instantaneous Rates of Change

**Part 6 of 7 — When the Rate Itself Is Changing**

---

> 🔑 **The Idea:** A rate of change can *increase* or *decrease* as you move along the curve. AP Precalculus asks you to recognize when a function is changing at an **increasing rate** vs. a **decreasing rate** — and to connect that to the curve's shape.`,
      },
      {
        id: 'roc6-concept',
        type: 'text' as const,
        content: `## Increasing Rate vs. Decreasing Rate

Look at how the **average rates over successive equal intervals** behave:

| Successive AROCs | The function is changing at a(n)… | Curve shape |
|------------------|-----------------------------------|-------------|
| getting larger ($2, 5, 9, \\dots$) | **increasing** rate | bends upward (concave up) |
| getting smaller ($9, 5, 2, \\dots$) | **decreasing** rate | bends downward (concave down) |
| staying constant ($4, 4, 4, \\dots$) | constant rate | straight line |

### Example

| $x$ | $0$ | $1$ | $2$ | $3$ |
|-----|-----|-----|-----|-----|
| $f(x)$ | $1$ | $2$ | $4$ | $8$ |

Successive average rates: $\\frac{2-1}{1}=1$, then $\\frac{4-2}{1}=2$, then $\\frac{8-4}{1}=4$. They grow ($1, 2, 4$), so $f$ is increasing **and** doing so at an increasing rate — the graph curves upward.

> 💡 "Increasing at a decreasing rate" still means the function is **going up** — just less and less steeply. Think of a car still speeding up, but easing off the gas.`,
      },
      {
        id: 'roc6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Behavior** 🔽

A function's average rates of change over consecutive equal intervals are $12,\\ 8,\\ 5,\\ 3$ — all **positive** but **shrinking**.`,
        exercise: {
          dropdowns: [
            { label: 'Is the function increasing or decreasing?', options: ['increasing', 'decreasing', 'constant', 'cannot tell'] },
            { label: 'Is it changing at an increasing or decreasing rate?', options: ['decreasing rate', 'increasing rate', 'constant rate', 'zero rate'] },
            { label: 'The graph is therefore:', options: ['concave down', 'concave up', 'a straight line', 'horizontal'] },
          ],
          correctAnswers: ['increasing', 'decreasing rate', 'concave down'],
          hint1: 'All the rates are positive, so the outputs keep rising.',
          hint2: 'The positive rates are getting smaller, so the rate of change is decreasing.',
          hint3: 'Rising but flattening out = increasing at a decreasing rate = concave down.',
          explanation: 'Positive rates ⇒ increasing. Shrinking rates ⇒ decreasing rate. Rising-but-flattening ⇒ concave down.',
        },
      },
      {
        id: 'roc6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A savings balance grows so that each year it gains MORE than the year before. The balance is:',
              options: [
                'increasing at an increasing rate',
                'increasing at a decreasing rate',
                'decreasing at an increasing rate',
                'constant',
              ],
              correctAnswer: 0,
              explanation: 'The balance is going up (increasing) and the yearly gain is getting larger each year (increasing rate). That is "increasing at an increasing rate," a concave-up pattern.',
            },
            {
              question: 'A cup of hot coffee cools quickly at first, then more and more slowly. Its temperature graph is:',
              options: [
                'decreasing and concave up',
                'decreasing and concave down',
                'decreasing and linear',
                'increasing and concave down',
              ],
              correctAnswer: 0,
              explanation: 'The temperature falls, so it is decreasing. The drops shrink, so the signed rates (such as $-10$, then $-6$, then $-3$ degrees per minute) are increasing toward $0$, which makes the graph concave up.',
            },
            {
              question: 'A function has equal average rates of change of $3$ over every consecutive interval. The function is:',
              options: ['linear with slope $3$', 'concave up', 'concave down', 'increasing at an increasing rate'],
              correctAnswer: 0,
              explanation: 'A constant average rate of change over every interval is the signature of a straight line. Here that constant slope is $3$.',
            },
          ],
        },
      },
      {
        id: 'roc6-drill',
        type: 'input-boxes' as const,
        content: `**Track the Changing Rate** 🧮

| $x$ | $0$ | $2$ | $4$ | $6$ |
|-----|-----|-----|-----|-----|
| $g(x)$ | $20$ | $16$ | $14$ | $13$ |

Compute the average rate of change on each consecutive interval.

**1)** AROC on $[0, 2]$
**2)** AROC on $[2, 4]$
**3)** AROC on $[4, 6]$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '-1', '-0.5'],
          hint1: '$\\frac{16-20}{2-0}=\\frac{-4}{2}=-2$.',
          hint2: '$\\frac{14-16}{4-2}=\\frac{-2}{2}=-1$.',
          hint3: '$\\frac{13-14}{6-4}=\\frac{-1}{2}=-0.5$.',
          explanation: 'Rates: $-2, -1, -0.5$. All negative, so $g$ is decreasing. As signed numbers the rates increase toward $0$, so $g$ is decreasing with an increasing rate of change, and its graph is concave up.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'rates-of-change',
    sections: [
      {
        id: 'roc7-intro',
        type: 'text' as const,
        content: `# 📈 Average & Instantaneous Rates of Change

**Part 7 of 7 — Mixed Applications & Mastery Check**

---

You can now (1) compute average rates of change as secant slopes, (2) interpret their units and signs, (3) estimate a rate at a point from shrinking intervals, (4) estimate it from tables and (5) compare rates on graphs, and (6) describe how a rate of change itself changes. Time to put it all together.`,
      },
      {
        id: 'roc7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Average rate of change on $[a,b]$ | $\\dfrac{f(b)-f(a)}{b-a}$ (secant slope) |
| Rate of change at $a$ | average rates on smaller and smaller intervals containing $a$ |
| Estimate the rate from a table | symmetric difference $\\dfrac{f(a+h)-f(a-h)}{2h}$ using the nearest data |
| Compare rates on a graph | slope between nearby graph points on each side of each point |
| Units of any rate | $y$-units per $x$-unit |
| Increasing/decreasing rate | watch whether successive AROCs grow or shrink |

> ⚠️ **Don't confuse the two rates.** Average rate uses a fixed interval (two points); a rate at a point is estimated from small intervals around one point. And a zero *average* rate only means the endpoints match — not that nothing happened in between.`,
      },
      {
        id: 'roc7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A drone\'s altitude is $A(t) = t^2 + 3t$ meters at time $t$ seconds. The average rate of change on $[1, 4]$ is:',
              options: ['$8$ m/s', '$24$ m/s', '$28$ m/s', '$12$ m/s'],
              correctAnswer: 0,
              explanation: '$A(4)=16+12=28$, $A(1)=1+3=4$. AROC $=\\frac{28-4}{4-1}=\\frac{24}{3}=8$ meters per second.',
            },
            {
              question: 'Using the table below, the best estimate of the rate of change at $x=5$ is:\n\n| $x$ | $3$ | $5$ | $7$ |\n|---|---|---|---|\n| $f(x)$ | $4$ | $10$ | $20$ |',
              options: ['$4$', '$3$', '$5$', '$8$'],
              correctAnswer: 0,
              explanation: 'Symmetric difference: $\\frac{f(7)-f(3)}{7-3}=\\frac{20-4}{4}=\\frac{16}{4}=4$. This centered estimate uses the neighbors on both sides of $x=5$.',
            },
          ],
        },
      },
      {
        id: 'roc7-applied',
        type: 'input-boxes' as const,
        content: `**Applied Computation** 🧮

The position of a particle is $s(t) = t^2$ meters at time $t$ seconds.

**1)** Average velocity on $[1, 3]$  *(in m/s)*
**2)** Estimate the velocity at $t = 1$ using $[0.9, 1.1]$
**3)** Estimate the velocity at $t = 5$ using $[4.9, 5.1]$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '10'],
          hint1: 'Average velocity $=\\frac{s(3)-s(1)}{3-1}=\\frac{9-1}{2}=\\frac{8}{2}$.',
          hint2: '$s(1.1)=1.21$ and $s(0.9)=0.81$, so compute $\\frac{1.21-0.81}{0.2}$.',
          hint3: '$s(5.1)=26.01$ and $s(4.9)=24.01$, so compute $\\frac{26.01-24.01}{0.2}$.',
          explanation: '1) $\\frac{9-1}{2}=4$ m/s (average).  2) $\\frac{0.4}{0.2}=2$ m/s at $t=1$.  3) $\\frac{2}{0.2}=10$ m/s at $t=5$.',
        },
      },
      {
        id: 'roc7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The average rate of change of $f(x)=x^2-2x$ on $[0, 4]$ is:',
              options: ['$2$', '$8$', '$4$', '$0$'],
              correctAnswer: 0,
              explanation: '$f(4)=16-8=8$, $f(0)=0$. AROC $=\\frac{8-0}{4-0}=\\frac{8}{4}=2$.',
            },
            {
              question: 'Which interval gives the most accurate estimate of the rate of change of $f$ at $x = a$?',
              options: ['$[a - 0.01,\\ a + 0.01]$', '$[a - 1,\\ a + 1]$', '$[a,\\ a + 1]$', '$[0,\\ a]$'],
              correctAnswer: 0,
              explanation: 'The narrowest interval containing $x = a$ gives the best estimate, because it averages over inputs closest to $a$. The interval $[0, a]$ gives the average rate over a long stretch, not the rate at $a$.',
            },
            {
              question: 'A function increases over an interval but its rate of increase is shrinking. The graph is:',
              options: [
                'increasing and concave down',
                'increasing and concave up',
                'decreasing and concave down',
                'increasing and linear',
              ],
              correctAnswer: 0,
              explanation: 'Outputs rising ⇒ increasing. A shrinking positive rate ⇒ the curve flattens as it rises ⇒ concave down. This is "increasing at a decreasing rate."',
            },
          ],
        },
      },
    ],
  },
]
