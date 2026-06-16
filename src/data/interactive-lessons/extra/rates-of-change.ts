import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Average and Instantaneous Rates of Change (AP Precalculus).
 * Registry key / DB Topic.slug: 'rates-of-change'.
 * 7 parts, gold-standard structure: average rate of change as secant slope →
 * units & interpretation → instantaneous rate as a limit of secant slopes →
 * estimating IROC from tables (forward/backward/symmetric difference) →
 * estimating IROC from graphs (tangent lines) → how rate of change itself changes
 * (increasing/decreasing rates & concavity) → mixed applications + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every average-rate, difference-quotient, and limit value was verified numerically
 * before authoring.
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
                'The tangent line at the midpoint',
                'A horizontal line at the average height',
                'The vertical line $x = a$',
              ],
              correctAnswer: 0,
              explanation: 'Average rate of change equals $\\frac{f(b)-f(a)}{b-a}$, which is exactly the slope of the secant line connecting $(a,f(a))$ and $(b,f(b))$.',
            },
            {
              question: 'For $g(x) = 2x + 1$, the average rate of change on $[0, 5]$ is:',
              options: ['$2$', '$5$', '$11$', '$1$'],
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
                'The function is constant on the whole interval',
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

**Part 3 of 7 — Instantaneous Rate as a Limit of Secants**

---

> 🔑 **The Big Leap:** The **instantaneous rate of change (IROC)** is the rate at a *single instant* — the slope of the **tangent line**. We reach it by shrinking the interval: take average rates over smaller and smaller intervals and watch where they head.`,
      },
      {
        id: 'roc3-idea',
        type: 'text' as const,
        content: `## From Average to Instantaneous

Average rate needs **two** points. Instantaneous rate is about **one** point — so we sneak up on it.

Fix a point $x = a$ and let the second point be $x = a + h$, where $h$ is a small step. The average rate over $[a, a+h]$ is the **difference quotient**:

$$\\frac{f(a+h) - f(a)}{h}$$

As $h \\to 0$, the second point slides toward the first, the **secant turns into the tangent**, and the average rate becomes the instantaneous rate:

$$\\text{IROC at } a = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$

> 💡 Picture two dots on a curve. Slide the right dot toward the left dot. The connecting line pivots until it just kisses the curve — that final line is the **tangent**, and its slope is the instantaneous rate.`,
      },
      {
        id: 'roc3-worked',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^2$ at $x = 2$

Build the difference quotient at $a = 2$:

$$\\frac{f(2+h) - f(2)}{h} = \\frac{(2+h)^2 - 4}{h} = \\frac{4 + 4h + h^2 - 4}{h} = \\frac{4h + h^2}{h} = 4 + h$$

Now let $h \\to 0$:

$$\\lim_{h \\to 0} (4 + h) = 4$$

So the **instantaneous rate of change of $x^2$ at $x = 2$ is $4$** — the tangent line there has slope $4$.

### Watch It Converge

| Interval $[2, 2+h]$ | $h$ | Average rate $=4+h$ |
|---------------------|-----|---------------------|
| $[2, 3]$ | $1$ | $5$ |
| $[2, 2.5]$ | $0.5$ | $4.5$ |
| $[2, 2.1]$ | $0.1$ | $4.1$ |
| $[2, 2.01]$ | $0.01$ | $4.01$ |

The average rates close in on $4$. That target value is the instantaneous rate.`,
      },
      {
        id: 'roc3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The instantaneous rate of change at a point is the slope of the:',
              options: ['tangent line at that point', 'secant line through two far-apart points', 'horizontal axis', 'longest chord of the curve'],
              correctAnswer: 0,
              explanation: 'As the interval shrinks to a single point, the secant line becomes the tangent line. The instantaneous rate is the slope of that tangent.',
            },
            {
              question: 'Which limit gives the instantaneous rate of change of $f$ at $x=a$?',
              options: [
                '$\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}$',
                '$\\dfrac{f(b)-f(a)}{b-a}$',
                '$\\lim_{h\\to 0}\\,[f(a+h)-f(a)]$',
                '$\\dfrac{f(a)}{a}$',
              ],
              correctAnswer: 0,
              explanation: 'The instantaneous rate is the limit of the difference quotient $\\frac{f(a+h)-f(a)}{h}$ as $h\\to 0$. The second option is an average rate (fixed interval), not instantaneous.',
            },
          ],
        },
      },
      {
        id: 'roc3-drill',
        type: 'input-boxes' as const,
        content: `**Shrinking Intervals** 🧮

For $f(x) = x^2$, the average rate on $[3, 3+h]$ simplifies to $6 + h$.

**1)** Average rate on $[3, 4]$  *(use $h=1$)*
**2)** Average rate on $[3, 3.1]$  *(use $h=0.1$)*
**3)** The instantaneous rate at $x = 3$  *(let $h \\to 0$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '6.1', '6'],
          hint1: '$6 + h$ with $h=1$ gives $7$.',
          hint2: '$6 + h$ with $h=0.1$ gives $6.1$.',
          hint3: 'As $h\\to 0$, $6+h \\to 6$. So the tangent slope at $x=3$ is $6$.',
          explanation: '$\\frac{(3+h)^2-9}{h}=\\frac{6h+h^2}{h}=6+h$. Plug $h=1\\Rightarrow 7$; $h=0.1\\Rightarrow 6.1$; $h\\to 0\\Rightarrow 6$.',
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

**Part 4 of 7 — Estimating IROC from a Table**

---

> 🔑 **The Idea:** On the AP exam you often get a **table of values**, not a formula. You can't take a true limit, so you **estimate** the instantaneous rate using the average rate over the *smallest interval available* around the point.`,
      },
      {
        id: 'roc4-methods',
        type: 'text' as const,
        content: `## Three Ways to Estimate IROC at $x = a$

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

**Estimate the instantaneous rate of change at $t = 4$.**

Use the **symmetric** difference with the neighbors $t=2$ and $t=6$:

$$P'(4) \\approx \\frac{P(6) - P(2)}{6 - 2} = \\frac{30 - 10}{4} = \\frac{20}{4} = 5$$

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

**1)** Symmetric-difference estimate of $P'(6)$  *(use $t=4$ and $t=8$)*
**2)** Forward-difference estimate of $P'(2)$  *(use $t=2$ and $t=4$)*
**3)** Backward-difference estimate of $P'(8)$  *(use $t=6$ and $t=8$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '4', '10'],
          hint1: '$P\'(6)\\approx\\frac{P(8)-P(4)}{8-4}=\\frac{50-18}{4}$.',
          hint2: '$P\'(2)\\approx\\frac{P(4)-P(2)}{4-2}=\\frac{18-10}{2}$.',
          hint3: '$P\'(8)\\approx\\frac{P(8)-P(6)}{8-6}=\\frac{50-30}{2}$.',
          explanation: '1) $\\frac{50-18}{4}=\\frac{32}{4}=8$.  2) $\\frac{18-10}{2}=\\frac{8}{2}=4$.  3) $\\frac{50-30}{2}=\\frac{20}{2}=10$.',
        },
      },
      {
        id: 'roc4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Method** 🔽

For each situation, choose the best difference method to estimate the instantaneous rate at $x = a$.`,
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

**Part 5 of 7 — Estimating IROC from a Graph**

---

> 🔑 **The Idea:** Given a curve, the instantaneous rate at a point is the **slope of the tangent line** drawn at that point. Estimate it by reading "rise over run" off two clear points the tangent passes through.`,
      },
      {
        id: 'roc5-tangent',
        type: 'text' as const,
        content: `## Reading a Tangent Slope

To estimate the instantaneous rate of change at a point on a graph:

1. **Draw the tangent line** that just touches the curve at that point.
2. **Pick two points the tangent line passes through** — ideally where it crosses gridline intersections.
3. **Compute the slope** $\\dfrac{\\Delta y}{\\Delta x}$ between those two points.

### Example

Suppose the tangent line drawn at $x = 3$ passes through $(1, 2)$ and $(5, 10)$. Then:

$$\\text{IROC at } x = 3 \\approx \\frac{10 - 2}{5 - 1} = \\frac{8}{4} = 2$$

> 💡 You don't need the tangent's two points to be *on* the curve — they only need to be on the **tangent line**. Use whichever lattice points the line passes through cleanly.`,
      },
      {
        id: 'roc5-shape',
        type: 'text' as const,
        content: `## Slope Tells You the Shape

The sign and size of the instantaneous rate describe the curve at that instant:

| Tangent slope at a point | The curve there is… |
|--------------------------|---------------------|
| Positive | rising (increasing) |
| Negative | falling (decreasing) |
| Zero | momentarily flat — a peak, valley, or pause |
| Steep (large $|\\text{slope}|$) | changing fast |
| Shallow (small $|\\text{slope}|$) | changing slowly |

> ⚠️ A **horizontal tangent** (slope $0$) marks a spot where the function instantaneously stops increasing or decreasing — like the top of a thrown ball's path, where its vertical velocity is momentarily $0$.`,
      },
      {
        id: 'roc5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A tangent line drawn to a curve at $x = 4$ passes through $(2, 1)$ and $(6, 9)$. The instantaneous rate of change at $x=4$ is about:',
              options: ['$2$', '$4$', '$8$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Slope of the tangent $=\\frac{9-1}{6-2}=\\frac{8}{4}=2$. That tangent slope is the instantaneous rate at $x=4$.',
            },
            {
              question: 'At the highest point of a parabola that opens downward, the instantaneous rate of change is:',
              options: ['zero', 'positive', 'negative', 'undefined'],
              correctAnswer: 0,
              explanation: 'At a peak the tangent line is horizontal, so its slope — the instantaneous rate of change — is $0$. The function is neither rising nor falling at that instant.',
            },
          ],
        },
      },
      {
        id: 'roc5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Compare Tangent Slopes** 🔽

On a single curve, the tangent at point $A$ is steep and rising, the tangent at point $B$ is shallow and rising, and the tangent at point $C$ is horizontal.`,
        exercise: {
          dropdowns: [
            { label: 'The function is increasing fastest at:', options: ['$A$', '$B$', '$C$', 'they are equal'] },
            { label: 'The instantaneous rate of change is zero at:', options: ['$C$', '$A$', '$B$', 'none of them'] },
            { label: 'Comparing the rates: $A$ is ___ than $B$:', options: ['greater', 'less', 'equal', 'negative'] },
          ],
          correctAnswers: ['$A$', '$C$', 'greater'],
          hint1: 'A steeper rising tangent means a larger positive rate of change.',
          hint2: 'A horizontal tangent has slope $0$.',
          hint3: 'Steep beats shallow: $A$\'s rate is greater than $B$\'s.',
          explanation: 'Steepness of the tangent = magnitude of the rate. $A$ (steep) > $B$ (shallow) > $C$ (flat, rate $=0$).',
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
              question: 'A cup of hot coffee cools quickly at first, then more and more slowly. Its temperature is:',
              options: [
                'decreasing at a decreasing rate',
                'decreasing at an increasing rate',
                'increasing at a decreasing rate',
                'changing at a constant rate',
              ],
              correctAnswer: 0,
              explanation: 'Temperature falls (decreasing), but the size of each drop shrinks over time (the rate of decrease is shrinking), so it is "decreasing at a decreasing rate."',
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
          explanation: 'Rates: $-2, -1, -0.5$. All negative (decreasing) but moving toward $0$ — the magnitude shrinks, so $g$ decreases at a decreasing rate (concave up).',
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

You can now (1) compute average rates of change as secant slopes, (2) interpret their units and signs, (3) understand instantaneous rate as a limit of secants, (4) estimate IROC from tables and (5) graphs, and (6) describe how a rate of change itself changes. Time to put it all together.`,
      },
      {
        id: 'roc7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Average rate of change on $[a,b]$ | $\\dfrac{f(b)-f(a)}{b-a}$ (secant slope) |
| Instantaneous rate at $a$ | $\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}$ (tangent slope) |
| Estimate IROC from a table | symmetric difference $\\dfrac{f(a+h)-f(a-h)}{2h}$ |
| Estimate IROC from a graph | slope of the drawn tangent line |
| Units of any rate | $y$-units per $x$-unit |
| Increasing/decreasing rate | watch whether successive AROCs grow or shrink |

> ⚠️ **Don't confuse the two rates.** Average rate uses a fixed interval (two points); instantaneous rate is the limit at a single point. And a zero *average* rate only means the endpoints match — not that nothing happened in between.`,
      },
      {
        id: 'roc7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A drone\'s altitude is $A(t) = t^2 + 3t$ meters at time $t$ seconds. The average rate of change on $[1, 4]$ is:',
              options: ['$8$ m/s', '$5$ m/s', '$28$ m/s', '$12$ m/s'],
              correctAnswer: 0,
              explanation: '$A(4)=16+12=28$, $A(1)=1+3=4$. AROC $=\\frac{28-4}{4-1}=\\frac{24}{3}=8$ meters per second.',
            },
            {
              question: 'Using the table below, the best estimate of the instantaneous rate of change at $x=5$ is:\n\n| $x$ | $3$ | $5$ | $7$ |\n|---|---|---|---|\n| $f(x)$ | $4$ | $10$ | $20$ |',
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

The position of a particle is $s(t) = t^2$ meters at time $t$ seconds. (Recall: for $s(t)=t^2$, the average rate on $[a, a+h]$ simplifies to $2a + h$.)

**1)** Average velocity on $[1, 3]$  *(in m/s)*
**2)** Instantaneous velocity at $t = 1$  *(let $h\\to 0$ in $2a+h$ with $a=1$)*
**3)** Instantaneous velocity at $t = 5$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '10'],
          hint1: 'Average velocity $=\\frac{s(3)-s(1)}{3-1}=\\frac{9-1}{2}=\\frac{8}{2}$.',
          hint2: 'At $a=1$, $2a+h=2+h\\to 2$ as $h\\to 0$.',
          hint3: 'At $a=5$, $2a+h=10+h\\to 10$ as $h\\to 0$.',
          explanation: '1) $\\frac{9-1}{2}=4$ m/s (average).  2) IROC at $t=1$ is $2(1)=2$ m/s.  3) IROC at $t=5$ is $2(5)=10$ m/s.',
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
              question: 'As $h\\to 0$, the difference quotient $\\frac{f(a+h)-f(a)}{h}$ approaches the slope of the:',
              options: ['tangent line at $x=a$', 'secant line on $[0,a]$', '$x$-axis', 'line through the origin'],
              correctAnswer: 0,
              explanation: 'Shrinking $h$ slides the second point into $x=a$; the secant becomes the tangent. Its slope is the instantaneous rate of change at $x=a$.',
            },
            {
              question: 'A function increases over an interval but its rate of increase is shrinking. The graph is:',
              options: [
                'increasing and concave down',
                'increasing and concave up',
                'decreasing and concave down',
                'a straight line',
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
