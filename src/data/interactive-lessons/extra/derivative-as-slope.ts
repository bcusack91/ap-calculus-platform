import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Derivative as Slope (AP Calculus AB).
 * Registry key / DB Topic.slug: 'derivative-as-slope'.
 * 7 parts, gold-standard structure: slope of a line → average rate / secant lines →
 * secant-to-tangent limit (derivative at a point) → computing f'(a) from the limit →
 * the derivative as a function → reading slope off a graph → tangent lines &
 * linear approximation → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every numeric value, slope, and limit was verified before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'derivative-as-slope',
    sections: [
      {
        id: 'das1-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Slope

**Part 1 of 7 — From Lines to Curves**

---

### Topics in This Part

| Section |
|---------|
| The slope of a straight line |
| Why a curve has no single slope |
| Average rate of change (secant slope) |

> 🔑 **Key Concept:** A **derivative** is just a slope — the slope of a curve *at a single point*. Before we can talk about the slope of a curve, we need to be rock-solid on the slope of a line, because the slope of a curve is built out of slopes of lines.`,
      },
      {
        id: 'das1-line-slope',
        type: 'text' as const,
        content: `## Slope of a Straight Line

For a straight line, slope is **rise over run** — and it's the *same everywhere* on the line:

$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$

The slope measures **how fast $y$ changes as $x$ changes**.

| Line | Through points | Slope |
|------|----------------|-------|
| $y = 3x + 2$ | $(0,2)$ and $(1,5)$ | $\\dfrac{5-2}{1-0} = 3$ |
| $y = -2x + 1$ | $(0,1)$ and $(2,-3)$ | $\\dfrac{-3-1}{2-0} = -2$ |
| $y = 5$ | $(0,5)$ and $(4,5)$ | $\\dfrac{5-5}{4-0} = 0$ |

> 🔑 **Key Idea:** For a line, slope is a single number. Pick *any* two points and you get the same answer. That's exactly what fails for a curve.`,
      },
      {
        id: 'das1-line-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the slope of the line through $(1, 4)$ and $(3, 10)$?',
              options: ['$3$', '$2$', '$\\frac{1}{3}$', '$6$'],
              correctAnswer: 0,
              explanation: 'Slope $= \\dfrac{10 - 4}{3 - 1} = \\dfrac{6}{2} = 3$.',
            },
            {
              question: 'A horizontal line has slope:',
              options: ['$0$', 'undefined', '$1$', 'It depends which two points you pick.'],
              correctAnswer: 0,
              explanation: 'On a horizontal line $y$ never changes, so the rise is $0$ and the slope is $0/\\text{run} = 0$.',
            },
          ],
        },
      },
      {
        id: 'das1-curve-problem',
        type: 'text' as const,
        content: `## Why a Curve Has No Single Slope

Look at the parabola $y = x^2$. It is **steep** on the far right, **flat** at the bottom, and **steep going down** on the far left. The "slope" clearly changes from point to point.

So the question "what is the slope of $y = x^2$?" has no single answer. The better question is:

> 💡 **What is the slope of the curve *at one specific point*?**

That single-point slope is the **derivative**. To find it, we first measure the slope between **two** points on the curve — a *secant line* — then slide those two points together until they're (almost) the same point.`,
      },
      {
        id: 'das1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Line** 🔽

Match each description to the right idea.`,
        exercise: {
          dropdowns: [
            { label: 'A line through *two* points on a curve is a:', options: ['secant line', 'tangent line', 'vertical line'] },
            { label: 'A line that grazes the curve at *one* point is a:', options: ['tangent line', 'secant line', 'vertical line'] },
            { label: 'For the line $y = 3x + 2$, the slope at every point is:', options: ['$3$', '$2$', 'different at every point'] },
          ],
          correctAnswers: ['secant line', 'tangent line', '$3$'],
          hint1: 'A line *cutting through* two points of the curve is a secant.',
          hint2: 'A line that just touches the curve at a single point is the tangent.',
          hint3: 'In $y = mx + b$ the slope is $m$; here $m = 3$, and a line\'s slope never changes.',
          explanation: 'A secant connects two points; a tangent touches one. A straight line has one constant slope ($m=3$ here).',
        },
      },
      {
        id: 'das1-secant',
        type: 'text' as const,
        content: `## Average Rate of Change = Secant Slope

A line connecting **two points** on a curve is a **secant line**. Its slope is the **average rate of change** of the function between those points:

$$\\text{average rate of change} = \\frac{f(b) - f(a)}{b - a}$$

This is the *exact same* rise-over-run formula — we just feed it two points that happen to sit on a curve.

### Worked Example: $f(x) = x^2$ from $x = 1$ to $x = 4$

$$\\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = \\frac{15}{3} = 5$$

So between $x=1$ and $x=4$, the curve climbs an *average* of $5$ units up for every $1$ unit right. It does **not** mean the slope is $5$ at every point — only on average across that interval.`,
      },
      {
        id: 'das1-aroc-drill',
        type: 'input-boxes' as const,
        content: `**Average Rate of Change** 🧮

Compute the average rate of change (secant slope) of each function over the given interval.

**1)** $f(x) = x^2$ on $[2, 5]$ $\\;\\Rightarrow\\; ?$
**2)** $f(x) = x^2 - 4x + 1$ on $[1, 4]$ $\\;\\Rightarrow\\; ?$
**3)** $f(x) = x^3$ on $[1, 2]$ $\\;\\Rightarrow\\; ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '1', '7'],
          hint1: '$\\dfrac{f(5)-f(2)}{5-2} = \\dfrac{25-4}{3}$.',
          hint2: '$f(4) = 16-16+1 = 1$ and $f(1) = 1-4+1 = -2$, so $\\dfrac{1-(-2)}{4-1}$.',
          hint3: '$\\dfrac{f(2)-f(1)}{2-1} = \\dfrac{8-1}{1}$.',
          explanation: '1) $\\dfrac{25-4}{3} = 7$.  2) $\\dfrac{1-(-2)}{3} = \\dfrac{3}{3} = 1$.  3) $\\dfrac{8-1}{1} = 7$. Each is a secant slope = average rate of change.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'derivative-as-slope',
    sections: [
      {
        id: 'das2-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Slope

**Part 2 of 7 — From Secant to Tangent**

---

> 🔑 **The Big Move:** Keep one point fixed and slide the second point *toward* it. The secant lines tilt until they settle on the **tangent line** — the line that just grazes the curve at one point. The slope of *that* line is the derivative.`,
      },
      {
        id: 'das2-tangent',
        type: 'text' as const,
        content: `## The Tangent Line

The **tangent line** at a point touches the curve at that point and has the *same direction* as the curve there. Its slope is the **instantaneous rate of change** — the slope of the curve at that single point.

We can't use rise-over-run directly on a tangent line, because we only know **one** point on the curve. The trick:

1. Pick a second nearby point, a distance $h$ away in $x$.
2. Compute the **secant** slope between them.
3. Let $h \\to 0$ so the second point slides into the first.

As $h$ shrinks, the secant slope closes in on the tangent slope.`,
      },
      {
        id: 'das2-converge-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'As the second point slides toward the first ($h \\to 0$), the secant line approaches the:',
              options: ['tangent line', 'vertical line', 'horizontal line', 'a different secant line'],
              correctAnswer: 0,
              explanation: 'The two points merge into one, and the secant settles onto the tangent line at that point.',
            },
            {
              question: 'Why can\'t we just plug in $h = 0$ to get the tangent slope directly?',
              options: ['It gives the indeterminate form $\\frac{0}{0}$', 'It gives a negative number', 'The slope would be infinite', 'You can — plugging in $h=0$ always works'],
              correctAnswer: 0,
              explanation: 'At $h=0$ the second point equals the first, so both rise and run are $0$, giving $\\frac{0}{0}$. We take the limit as $h \\to 0$ instead.',
            },
          ],
        },
      },
      {
        id: 'das2-table',
        type: 'text' as const,
        content: `## Watch the Secant Slopes Converge

Take $f(x) = x^2$ and fix the point at $x = 2$. We compute the secant slope between $x = 2$ and $x = 2 + h$ as $h$ gets small:

$$\\text{secant slope} = \\frac{f(2+h) - f(2)}{h} = \\frac{(2+h)^2 - 4}{h}$$

| $h$ | second point | secant slope |
|-----|--------------|--------------|
| $1$ | $x = 3$ | $\\dfrac{9-4}{1} = 5$ |
| $0.5$ | $x = 2.5$ | $\\dfrac{6.25-4}{0.5} = 4.5$ |
| $0.1$ | $x = 2.1$ | $\\dfrac{4.41-4}{0.1} = 4.1$ |
| $0.01$ | $x = 2.01$ | $\\dfrac{4.0401-4}{0.01} = 4.01$ |

The slopes march toward $\\mathbf{4}$. The slope of $y = x^2$ at $x = 2$ is exactly $4$.

> 💡 Notice the pattern: $5,\\ 4.5,\\ 4.1,\\ 4.01 \\to 4$. We never *reach* $h = 0$ (that would be $\\frac{0}{0}$), but the trend is unmistakable — that's what a **limit** captures.`,
      },
      {
        id: 'das2-trend-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Trend** 🔽

For $f(x) = x^2$ at $x = 1$, the secant slope to $x = 1+h$ simplifies to $2 + h$.`,
        exercise: {
          dropdowns: [
            { label: 'At $h = 0.1$ the secant slope $2 + 0.1$ is:', options: ['$2.1$', '$1.9$', '$2$', '$0.1$'] },
            { label: 'As $h \\to 0$, the secant slopes approach:', options: ['$2$', '$1$', '$0$', 'infinity'] },
            { label: 'That limiting value is the slope of the:', options: ['tangent line at $x = 1$', 'secant line', 'horizontal axis'] },
          ],
          correctAnswers: ['$2.1$', '$2$', 'tangent line at $x = 1$'],
          hint1: 'Just add: $2 + 0.1 = 2.1$.',
          hint2: 'Plug $h = 0$ into $2 + h$ to get $2$.',
          hint3: 'The limit of the secant slopes is the tangent (instantaneous) slope at the fixed point $x = 1$.',
          explanation: 'The secant slopes $2 + h$ shrink toward $2$ as $h \\to 0$, giving the tangent slope at $x = 1$: $f\'(1) = 2$.',
        },
      },
      {
        id: 'das2-simplify-note',
        type: 'text' as const,
        content: `## The Shortcut: Simplify, Then Substitute

Did you notice each secant expression collapsed to a clean form? For $f(x)=x^2$ at $x=2$ the messy quotient $\\dfrac{(2+h)^2 - 4}{h}$ simplifies to just $4 + h$, and at $x=1$ it becomes $2 + h$.

That's the whole game: **simplify the difference quotient until the $h$ in the denominator cancels, then let $h \\to 0$.** Once the $h$ is gone from the bottom, you can safely substitute $h = 0$.

$$\\frac{(2+h)^2 - 4}{h} = \\frac{4h + h^2}{h} = 4 + h \\;\\xrightarrow{\\,h \\to 0\\,}\\; 4$$

Let's drill that cancellation by hand.`,
      },
      {
        id: 'das2-secant-drill',
        type: 'input-boxes' as const,
        content: `**Shrink the Secant** 🧮

For $f(x) = x^2$ fixed at $x = 2$, the secant slope to $x = 2+h$ is $\\dfrac{(2+h)^2 - 4}{h}$. Compute it for each $h$.

**1)** $h = 0.5 \\;\\Rightarrow\\; ?$
**2)** $h = 0.1 \\;\\Rightarrow\\; ?$
**3)** The slopes approach what limiting value as $h \\to 0$? $\\;\\Rightarrow\\; ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4.5', '4.1', '4'],
          hint1: '$\\dfrac{(2.5)^2 - 4}{0.5} = \\dfrac{6.25 - 4}{0.5} = \\dfrac{2.25}{0.5}$.',
          hint2: '$\\dfrac{(2.1)^2 - 4}{0.1} = \\dfrac{4.41 - 4}{0.1} = \\dfrac{0.41}{0.1}$.',
          hint3: 'The expression simplifies to $4 + h$, which heads to $4$ as $h \\to 0$.',
          explanation: '1) $4.5$.  2) $4.1$.  3) The secant slope simplifies to $4 + h$, so it approaches $\\mathbf{4}$ — the tangent slope at $x=2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'derivative-as-slope',
    sections: [
      {
        id: 'das3-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Slope

**Part 3 of 7 — The Derivative at a Point**

---

> 🔑 **The Definition:** The slope of $f$ at $x = a$ — written $f'(a)$ — is the limit of the secant slopes:
> $$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$`,
      },
      {
        id: 'das3-definition',
        type: 'text' as const,
        content: `## The Limit Definition

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$

This is the secant-slope formula with the two points slid together. The result $f'(a)$ is:

- the **slope of the tangent line** to $y=f(x)$ at $x=a$,
- the **instantaneous rate of change** of $f$ at $x = a$,
- the **derivative** of $f$ at $a$.

All three phrases mean the *same number*.

### The Three Steps

1. **Build** the difference quotient $\\dfrac{f(a+h)-f(a)}{h}$.
2. **Simplify** until the $h$ in the denominator cancels.
3. **Take the limit** $h \\to 0$ by plugging in $h = 0$ to the simplified form.`,
      },
      {
        id: 'das3-steps-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk Through the Limit** 🔽

You're finding $f'(4)$ for $f(x) = x^2$. Choose what happens at each step.`,
        exercise: {
          dropdowns: [
            { label: 'Build the difference quotient:', options: ['$\\dfrac{(4+h)^2 - 16}{h}$', '$\\dfrac{(4+h)^2 - 4}{h}$', '$\\dfrac{16 - (4+h)^2}{h}$', '$(4+h)^2 - 16$'] },
            { label: 'Expand and cancel the $h$ to get:', options: ['$8 + h$', '$8h + h^2$', '$16 + h$', '$4 + h$'] },
            { label: 'Take the limit as $h \\to 0$:', options: ['$8$', '$16$', '$4$', '$0$'] },
          ],
          correctAnswers: ['$\\dfrac{(4+h)^2 - 16}{h}$', '$8 + h$', '$8$'],
          hint1: 'Use $\\dfrac{f(4+h) - f(4)}{h}$ with $f(4) = 16$.',
          hint2: '$(4+h)^2 - 16 = 8h + h^2 = h(8+h)$; divide by $h$ to get $8 + h$.',
          hint3: 'Plug $h = 0$ into $8 + h$ to get $8$. (Check: $f\'(x) = 2x$, so $f\'(4) = 8$.)',
          explanation: 'Build $\\dfrac{(4+h)^2-16}{h}$, simplify to $8 + h$, then let $h \\to 0$ to get $f\'(4) = 8$.',
        },
      },
      {
        id: 'das3-worked1',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^2$ at $x = 3$

**Step 1 — Build:**
$$\\frac{f(3+h) - f(3)}{h} = \\frac{(3+h)^2 - 9}{h}$$

**Step 2 — Simplify:** Expand $(3+h)^2 = 9 + 6h + h^2$:
$$\\frac{9 + 6h + h^2 - 9}{h} = \\frac{6h + h^2}{h} = \\frac{h(6 + h)}{h} = 6 + h$$

**Step 3 — Limit:**
$$f'(3) = \\lim_{h \\to 0}(6 + h) = 6$$

> ✅ The slope of $y = x^2$ at $x = 3$ is $\\mathbf{6}$. (Check the secant: from $x=3$ to $x=3.01$ the slope is $\\frac{3.01^2 - 9}{0.01} = 6.01$ — closing in on $6$.)`,
      },
      {
        id: 'das3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = x^2 + 1$, the difference quotient at $x = 3$ simplifies to $6 + h$. What is $f\'(3)$?',
              options: ['$6$', '$0$', '$10$', '$6 + h$'],
              correctAnswer: 0,
              explanation: 'Take the limit as $h \\to 0$: $\\lim_{h\\to 0}(6+h) = 6$. The $+1$ cancels with $f(3)$ in the numerator.',
            },
            {
              question: 'The quantity $\\dfrac{f(a+h) - f(a)}{h}$ before taking the limit is the:',
              options: ['secant slope (average rate of change)', 'tangent slope', 'second derivative', 'area under the curve'],
              correctAnswer: 0,
              explanation: 'It is the slope between the two points $(a, f(a))$ and $(a+h, f(a+h))$ — a secant slope. The limit turns it into the tangent slope.',
            },
          ],
        },
      },
      {
        id: 'das3-worked2',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^2 - 3x$ at $x = 2$

**Build & simplify.** Here $f(2) = 4 - 6 = -2$, and $f(2+h) = (2+h)^2 - 3(2+h)$:

$$f(2+h) = (4 + 4h + h^2) - (6 + 3h) = -2 + h + h^2$$

$$\\frac{f(2+h) - f(2)}{h} = \\frac{(-2 + h + h^2) - (-2)}{h} = \\frac{h + h^2}{h} = 1 + h$$

**Limit:**
$$f'(2) = \\lim_{h \\to 0}(1 + h) = 1$$

> 💡 The constant term ($-2$) always cancels with $f(a)$ — that's why every difference quotient loses its constant and keeps an $h$ you can factor out.`,
      },
      {
        id: 'das3-drill',
        type: 'input-boxes' as const,
        content: `**Derivative at a Point** 🧮

Use $f'(a) = \\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}$ to find each slope. (For $f(x)=x^2$, the difference quotient simplifies to $2a + h$.)

**1)** $f(x) = x^2$ at $x = 5 \\;\\Rightarrow\\; f'(5) = ?$
**2)** $f(x) = 2x^2$ at $x = 1 \\;\\Rightarrow\\; f'(1) = ?$
**3)** $f(x) = x^2 + 2x$ at $x = 1 \\;\\Rightarrow\\; f'(1) = ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '4', '4'],
          hint1: 'Difference quotient is $2(5) + h = 10 + h \\to 10$.',
          hint2: '$\\dfrac{2(1+h)^2 - 2}{h} = \\dfrac{4h + 2h^2}{h} = 4 + 2h \\to 4$.',
          hint3: '$\\dfrac{(1+h)^2 + 2(1+h) - 3}{h} = \\dfrac{4h + h^2}{h} = 4 + h \\to 4$. (Here $f(1) = 1 + 2 = 3$.)',
          explanation: '1) $f\'(5) = 10$.  2) $f\'(1) = 4$.  3) $f\'(1) = 4$. Each is the limit of its simplified difference quotient.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'derivative-as-slope',
    sections: [
      {
        id: 'das4-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Slope

**Part 4 of 7 — The Derivative as a Function**

---

> 🔑 **Big Idea:** Instead of computing a slope at one $x$ at a time, leave $x$ as a variable. The result, $f'(x)$, is a *brand-new function* that hands you the slope at **any** point you plug in.`,
      },
      {
        id: 'das4-function',
        type: 'text' as const,
        content: `## From a Point to a Function

Replace the fixed number $a$ with the variable $x$:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

### Worked Example: $f(x) = x^2$

$$\\frac{(x+h)^2 - x^2}{h} = \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h$$

$$f'(x) = \\lim_{h \\to 0}(2x + h) = 2x$$

So the **slope function** of $y = x^2$ is $f'(x) = 2x$. Now every point's slope is one substitution away:

| $x$ | $f'(x) = 2x$ = slope there |
|-----|----------------------------|
| $-3$ | $2(-3) = -6$ (steep, going down) |
| $0$ | $2(0) = 0$ (flat — the vertex) |
| $2$ | $2(2) = 4$ |
| $5$ | $2(5) = 10$ (steep, going up) |

> 💡 This matches Part 2 exactly: we found slope $4$ at $x=2$, and $f'(2) = 2(2) = 4$. ✓`,
      },
      {
        id: 'das4-fn-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The derivative $f\'(x)$ is best described as:',
              options: ['a new function that gives the slope at each $x$', 'the height of $f$ at each $x$', 'a single fixed number', 'the same thing as $f(x)$'],
              correctAnswer: 0,
              explanation: 'Leaving $x$ as a variable turns the derivative into a *function* whose output is the tangent slope at each input $x$.',
            },
            {
              question: 'Using $f\'(x) = 2x$ for $y = x^2$, where is the slope $0$?',
              options: ['at $x = 0$ (the vertex)', 'at $x = 1$', 'everywhere', 'nowhere'],
              correctAnswer: 0,
              explanation: '$2x = 0$ only when $x = 0$, the bottom of the parabola, where the tangent is horizontal.',
            },
          ],
        },
      },
      {
        id: 'das4-lines',
        type: 'text' as const,
        content: `## Special Cases You Should Just Know

**Lines have constant slope.** If $f(x) = mx + b$, then $f'(x) = m$ everywhere.

$$f(x) = 3x + 2 \\;\\Rightarrow\\; f'(x) = 3 \\quad (\\text{slope } 3 \\text{ at every point})$$

**Constants are flat.** If $f(x) = c$, the graph is horizontal, so $f'(x) = 0$.

$$f(x) = 5 \\;\\Rightarrow\\; f'(x) = 0$$

> ⚠️ **Don't confuse $f$ and $f'$.** $f(x)$ gives the **height** of the curve; $f'(x)$ gives the **slope** of the curve. They are different functions with different graphs.`,
      },
      {
        id: 'das4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Slope at a Point** 🔽

The slope function of $y = x^2$ is $f'(x) = 2x$. Use it to read off slopes.`,
        exercise: {
          dropdowns: [
            { label: 'Slope of $y=x^2$ at $x = 4$:', options: ['$8$', '$16$', '$4$', '$2$'] },
            { label: 'Slope of $y=x^2$ at $x = -1$:', options: ['$-2$', '$2$', '$-1$', '$1$'] },
            { label: 'At which $x$ is the slope of $y=x^2$ equal to $0$?', options: ['$x = 0$', '$x = 1$', '$x = 2$', 'never'] },
          ],
          correctAnswers: ['$8$', '$-2$', '$x = 0$'],
          hint1: 'Plug into $f\'(x) = 2x$: $2(4) = 8$.',
          hint2: '$2(-1) = -2$ — a negative slope, so the curve is going downhill there.',
          hint3: 'Set $2x = 0$, which gives $x = 0$ — the bottom (vertex) of the parabola, where the tangent is horizontal.',
          explanation: 'The derivative $f\'(x) = 2x$ returns the tangent slope for any $x$. It is $0$ exactly at the vertex $x = 0$.',
        },
      },
      {
        id: 'das4-recap',
        type: 'text' as const,
        content: `## Three Slope Functions to Keep Handy

So far you have three slope functions you can use without re-deriving them each time:

| Original function $f(x)$ | Slope function $f'(x)$ |
|--------------------------|------------------------|
| $x^2$ | $2x$ |
| line $mx + b$ | $m$ (constant) |
| constant $c$ | $0$ |

Plug a value of $x$ into $f'$ and you get the tangent slope there. The next drill mixes all three — read each function carefully before you answer.`,
      },
      {
        id: 'das4-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Slope Function** 🧮

**1)** If $f'(x) = 2x$, find the slope of $y = x^2$ at $x = 7 \\;\\Rightarrow\\; ?$
**2)** For $f(x) = 4x - 7$, the slope at *every* point is $\\;\\Rightarrow\\; ?$
**3)** For the constant function $f(x) = 9$, the slope at every point is $\\;\\Rightarrow\\; ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['14', '4', '0'],
          hint1: '$f\'(7) = 2(7)$.',
          hint2: 'A line $mx+b$ has constant slope $m$; here $m = 4$.',
          hint3: 'A horizontal line never rises, so its slope is $0$ everywhere.',
          explanation: '1) $2(7) = 14$.  2) Slope of $4x-7$ is $4$ everywhere.  3) Slope of a constant is $0$ everywhere.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'derivative-as-slope',
    sections: [
      {
        id: 'das5-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Slope

**Part 5 of 7 — Reading Slope Off a Graph**

---

> 🔑 **No Formula Needed:** Even without an equation, you can read a derivative straight from a graph. The **sign** and **size** of the slope tell you everything about how the function is behaving.`,
      },
      {
        id: 'das5-sign',
        type: 'text' as const,
        content: `## The Sign of the Slope

At any point, picture the tangent line and ask: *which way does it tilt?*

| Tangent tilts… | $f'(x)$ is… | The function is… |
|----------------|-------------|------------------|
| uphill ↗ | **positive** | **increasing** |
| downhill ↘ | **negative** | **decreasing** |
| flat → | **zero** | momentarily level (peak, valley, or pause) |

The **steeper** the tangent, the **larger** $|f'(x)|$.

### Example: $f(x) = x^2$ (slope function $2x$)
- For $x < 0$: $2x$ is **negative** → curve is **decreasing** (left side of the parabola goes down). ✓
- For $x > 0$: $2x$ is **positive** → curve is **increasing** (right side goes up). ✓
- At $x = 0$: $2x = 0$ → flat tangent at the bottom (the vertex). ✓`,
      },
      {
        id: 'das5-sign-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'At a point where a function is *decreasing*, the slope of the tangent line (the derivative) is:',
              options: ['negative', 'positive', 'zero', 'undefined'],
              correctAnswer: 0,
              explanation: 'A decreasing function falls as you move right, so the tangent tilts downhill and the derivative is negative.',
            },
            {
              question: 'At the very top of a smooth hill (a peak), the tangent line is horizontal. What is the derivative there?',
              options: ['$0$', 'positive', 'negative', 'It does not exist.'],
              correctAnswer: 0,
              explanation: 'A horizontal tangent has slope $0$, so $f\'(x) = 0$ at a smooth peak (and at a smooth valley).',
            },
          ],
        },
      },
      {
        id: 'das5-zero-slope',
        type: 'text' as const,
        content: `## Where Is the Slope Zero?

A **horizontal tangent** ($f'(x) = 0$) happens at the *turning points* of a graph — the tops of hills and bottoms of valleys.

### Example: $f(x) = x^2 - 6x + 5$

Its slope function is $f'(x) = 2x - 6$. Set it to zero:

$$2x - 6 = 0 \\;\\Rightarrow\\; x = 3$$

So the tangent is horizontal at $x = 3$ — the bottom of this upward parabola. To the **left** of $x=3$ the slope $2x-6$ is negative (decreasing); to the **right** it's positive (increasing).

> 💡 Finding where $f'(x) = 0$ is the first step toward locating maximums and minimums — a huge use of the derivative later in the course.`,
      },
      {
        id: 'das5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Slope to the Behavior** 🔽

A function has slope function $f'(x) = 2x - 6$.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = 1$, the slope $2(1)-6 = -4$, so the function is:', options: ['decreasing', 'increasing', 'flat'] },
            { label: 'At $x = 5$, the slope $2(5)-6 = 4$, so the function is:', options: ['increasing', 'decreasing', 'flat'] },
            { label: 'The tangent line is horizontal at $x = $', options: ['$3$', '$6$', '$0$', '$-3$'] },
          ],
          correctAnswers: ['decreasing', 'increasing', '$3$'],
          hint1: 'A negative slope ($-4$) means the curve goes downhill — decreasing.',
          hint2: 'A positive slope ($+4$) means the curve goes uphill — increasing.',
          hint3: 'Set $2x - 6 = 0$ to find the horizontal tangent: $x = 3$.',
          explanation: 'The sign of $f\'(x) = 2x-6$ flips at $x = 3$: negative (decreasing) before it, zero at it, positive (increasing) after it.',
        },
      },
      {
        id: 'das5-turning',
        type: 'text' as const,
        content: `## Solving for the Turning Point

To *locate* a horizontal tangent, you don't guess — you **solve $f'(x) = 0$**. For any slope function of the form $f'(x) = 2x + c$, that's a one-step linear equation:

$$2x + c = 0 \\;\\Rightarrow\\; x = -\\frac{c}{2}$$

This single $x$-value is where the parabola turns from decreasing to increasing (or vice versa). Try it on a couple of slope functions.`,
      },
      {
        id: 'das5-drill',
        type: 'input-boxes' as const,
        content: `**Find the Horizontal Tangent** 🧮

Set the slope function equal to $0$ and solve for $x$.

**1)** $f'(x) = 2x - 8 \\;\\Rightarrow\\;$ horizontal tangent at $x = ?$
**2)** $f'(x) = 2x + 10 \\;\\Rightarrow\\;$ horizontal tangent at $x = ?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '-5'],
          hint1: '$2x - 8 = 0 \\Rightarrow 2x = 8 \\Rightarrow x = 4$.',
          hint2: '$2x + 10 = 0 \\Rightarrow 2x = -10 \\Rightarrow x = -5$.',
          hint3: 'In each case, move the constant to the other side, then divide by $2$.',
          explanation: '1) $x = 4$.  2) $x = -5$. At each of these $x$-values the tangent is horizontal (slope $0$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'derivative-as-slope',
    sections: [
      {
        id: 'das6-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Slope

**Part 6 of 7 — Tangent Lines & Linear Approximation**

---

> 🔑 **The Payoff:** Once you have a slope, you have a *line*. The tangent line lets you write the equation of the curve's "best straight-line copy" near a point — and use it to estimate values fast.`,
      },
      {
        id: 'das6-tangent-eqn',
        type: 'text' as const,
        content: `## Equation of the Tangent Line

To write the tangent line to $y = f(x)$ at $x = a$ you need **two ingredients**:

1. **A point:** $\\big(a,\\ f(a)\\big)$ — plug $a$ into the *original* function for the height.
2. **A slope:** $m = f'(a)$ — plug $a$ into the *derivative*.

Then use point-slope form:

$$y - f(a) = f'(a)\\,(x - a)$$

### Worked Example: $f(x) = x^2$ at $x = 3$

- Point: $f(3) = 9$, so the point is $(3, 9)$.
- Slope: $f'(x) = 2x$, so $f'(3) = 6$.

$$y - 9 = 6(x - 3) \\;\\Rightarrow\\; y = 6x - 18 + 9 \\;\\Rightarrow\\; y = 6x - 9$$

> ✅ **Check:** At $x = 3$, the line gives $y = 6(3) - 9 = 9$, matching the point $(3,9)$. ✓`,
      },
      {
        id: 'das6-tangent-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To find the tangent line to $f$ at $x = a$, the slope you use is:',
              options: ['$f\'(a)$', '$f(a)$', '$\\frac{f(a)}{a}$', 'the average of $f(a)$ and $f\'(a)$'],
              correctAnswer: 0,
              explanation: 'The tangent slope is the derivative evaluated at the point: $m = f\'(a)$. The value $f(a)$ gives the height, not the slope.',
            },
            {
              question: 'The tangent line to $f(x) = x^2$ at $x = 1$ (where $f\'(x) = 2x$) is:',
              options: ['$y = 2x - 1$', '$y = 2x + 1$', '$y = x^2$', '$y = 2x$'],
              correctAnswer: 0,
              explanation: 'Point $(1, 1)$, slope $f\'(1) = 2$. Then $y - 1 = 2(x-1) \\Rightarrow y = 2x - 1$.',
            },
          ],
        },
      },
      {
        id: 'das6-approx',
        type: 'text' as const,
        content: `## Linear Approximation (Local Linearity)

Near the point of tangency, the curve and its tangent line are nearly identical — a smooth curve looks **straight** if you zoom in far enough. So the tangent line is a great **estimator** for nearby values.

### Example: Estimate $(3.1)^2$ using the tangent at $x = 3$

The tangent line is $y = 6x - 9$. Plug in $x = 3.1$:

$$y = 6(3.1) - 9 = 18.6 - 9 = 9.6$$

The true value is $(3.1)^2 = 9.61$. The tangent-line estimate $9.6$ is off by only $0.01$ — excellent for a one-step approximation.

> 💡 This idea — replacing a curve by its tangent line near a point — is called **local linear approximation**, and it powers everything from quick mental estimates to numerical methods.`,
      },
      {
        id: 'das6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Tangent Line** 🔽

You're finding the tangent to $f(x) = x^2 - 2x + 1$ at $x = 4$, where $f'(x) = 2x - 2$.`,
        exercise: {
          dropdowns: [
            { label: 'The point of tangency $(4,\\ f(4))$ is:', options: ['$(4, 9)$', '$(4, 16)$', '$(4, 1)$', '$(4, 7)$'] },
            { label: 'The slope $f\'(4) = 2(4) - 2$ is:', options: ['$6$', '$8$', '$4$', '$2$'] },
            { label: 'The tangent line is:', options: ['$y = 6x - 15$', '$y = 6x + 9$', '$y = 8x - 23$', '$y = 6x - 9$'] },
          ],
          correctAnswers: ['$(4, 9)$', '$6$', '$y = 6x - 15$'],
          hint1: '$f(4) = 16 - 8 + 1 = 9$, so the point is $(4, 9)$.',
          hint2: '$f\'(4) = 2(4) - 2 = 8 - 2 = 6$.',
          hint3: 'Point-slope: $y - 9 = 6(x - 4) \\Rightarrow y = 6x - 24 + 9 = 6x - 15$.',
          explanation: 'Point $(4,9)$, slope $6$, so $y - 9 = 6(x-4)$ gives $y = 6x - 15$.',
        },
      },
      {
        id: 'das6-estimate-note',
        type: 'text' as const,
        content: `## Using the Line to Estimate

Once you have the tangent line, *using* it is just plugging in an $x$-value close to the point of tangency. For $f(x) = x^2$ the tangent at $x = 3$ is $y = 6x - 9$, so a value like $f(2.9)$ is approximately:

$$y = 6(2.9) - 9 = 17.4 - 9 = 8.4 \\quad(\\text{true value } 2.9^2 = 8.41)$$

The closer the input is to the point of tangency, the better the estimate. Try a few.`,
      },
      {
        id: 'das6-drill',
        type: 'input-boxes' as const,
        content: `**Tangent-Line Estimate** 🧮

For $f(x) = x^2$, the tangent at $x = 3$ is $y = 6x - 9$.

**1)** Use it to estimate $f(2.9)$: plug $x = 2.9$ into $6x - 9 \\;\\Rightarrow\\; ?$
**2)** What is the *exact* value $f(3) = 3^2 \\;\\Rightarrow\\; ?$
**3)** The slope of $y = x^2$ at $x = -2$ (use $f'(x)=2x$) $\\;\\Rightarrow\\; ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8.4', '9', '-4'],
          hint1: '$6(2.9) - 9 = 17.4 - 9$.',
          hint2: '$3^2 = 9$ — the point of tangency itself.',
          hint3: '$f\'(-2) = 2(-2)$.',
          explanation: '1) $6(2.9)-9 = 8.4$ (true value $2.9^2 = 8.41$ — very close).  2) $9$.  3) $2(-2) = -4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'derivative-as-slope',
    sections: [
      {
        id: 'das7-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Slope

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) find a secant slope / average rate of change, (2) shrink it into a tangent slope with a limit, (3) build the derivative as a function, (4) read slope behavior off a graph, and (5) write tangent lines and use them to estimate. Time to put it all together.`,
      },
      {
        id: 'das7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Idea | Formula / Fact |
|------|----------------|
| Average rate of change | $\\dfrac{f(b) - f(a)}{b - a}$ (secant slope) |
| Derivative at a point | $f'(a) = \\lim\\limits_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}$ |
| Slope function of $x^2$ | $f'(x) = 2x$ |
| Line $mx+b$ / constant $c$ | $f'(x) = m$ / $f'(x) = 0$ |
| $f'(x) > 0$ / $< 0$ / $= 0$ | increasing / decreasing / horizontal tangent |
| Tangent line at $x=a$ | $y - f(a) = f'(a)(x - a)$ |

> ⚠️ **Three things to never mix up:** $f(a)$ is the *height*, $f'(a)$ is the *slope*, and the average rate of change uses *two* points while the derivative uses a *limit* at *one* point.`,
      },
      {
        id: 'das7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The average rate of change of $f(x) = x^3$ on $[1, 2]$ is:',
              options: ['$7$', '$3$', '$8$', '$9$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{f(2)-f(1)}{2-1} = \\dfrac{8 - 1}{1} = 7$.',
            },
            {
              question: 'For $f(x) = x^2$ (so $f\'(x) = 2x$), the slope of the tangent at $x = -1$ is:',
              options: ['$-2$', '$2$', '$-1$', '$1$'],
              correctAnswer: 0,
              explanation: '$f\'(-1) = 2(-1) = -2$ — a downhill tangent, since the left branch of the parabola is decreasing.',
            },
            {
              question: 'If $f\'(x) = 0$ at $x = c$ and $f\'$ changes from positive to negative there, the point $x = c$ is a:',
              options: ['peak (local maximum)', 'valley (local minimum)', 'point of steepest slope', 'place where $f$ is undefined'],
              correctAnswer: 0,
              explanation: 'Increasing then decreasing (slope $+$ to $0$ to $-$) describes a hilltop — a local maximum.',
            },
          ],
        },
      },
      {
        id: 'das7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Put It Together** 🧮

**1)** Average rate of change of $f(x) = x^2$ on $[2, 6] \\;\\Rightarrow\\; ?$
**2)** $f(x) = x^2 + 2x$ at $x = 3$. Using the difference quotient $\\dfrac{(3+h)^2 + 2(3+h) - 15}{h} = 8 + h$, what is $f'(3)? \\;\\Rightarrow\\; ?$
**3)** The tangent to $f(x) = x^2$ at $x = -2$ is $y = -4x - 4$. Use it to estimate $f(-1.9)$: plug in $x = -1.9 \\;\\Rightarrow\\; ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '8', '3.6'],
          hint1: '$\\dfrac{f(6)-f(2)}{6-2} = \\dfrac{36 - 4}{4}$.',
          hint2: 'Take the limit of $8 + h$ as $h \\to 0$.',
          hint3: '$-4(-1.9) - 4 = 7.6 - 4$.',
          explanation: '1) $\\dfrac{36-4}{4} = \\dfrac{32}{4} = 8$.  2) $\\lim_{h\\to 0}(8+h) = 8$.  3) $-4(-1.9) - 4 = 3.6$ (true value $(-1.9)^2 = 3.61$).',
        },
      },
      {
        id: 'das7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The derivative $f\'(a)$ represents the:',
              options: ['slope of the tangent line at $x = a$', 'height of the curve at $x = a$', 'area under the curve up to $x = a$', 'average of $f$ over an interval'],
              correctAnswer: 0,
              explanation: 'By definition $f\'(a)$ is the limit of secant slopes — the slope of the tangent line (the instantaneous rate of change) at $x = a$.',
            },
            {
              question: 'For $f(x) = x^2$, what is the average rate of change on $[2, 5]$?',
              options: ['$7$', '$3$', '$10$', '$21$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{f(5)-f(2)}{5-2} = \\dfrac{25 - 4}{3} = \\dfrac{21}{3} = 7$.',
            },
            {
              question: 'The tangent line to $f(x) = x^2$ at $x = 1$ (slope $f\'(1) = 2$, point $(1,1)$) is:',
              options: ['$y = 2x - 1$', '$y = 2x + 1$', '$y = x - 1$', '$y = 2x$'],
              correctAnswer: 0,
              explanation: '$y - 1 = 2(x - 1) \\Rightarrow y = 2x - 2 + 1 = 2x - 1$. Check: at $x=1$, $y = 2(1)-1 = 1$. ✓',
            },
          ],
        },
      },
    ],
  },
]
