import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — What Is a Derivative? (AP Calculus AB).
 * Registry key / DB Topic.slug: 'what-is-a-derivative'.
 * 7 parts, gold-standard structure: the rate-of-change problem → average rate &
 * secant lines → the limit idea (secant → tangent) → the formal definition of the
 * derivative at a point → computing f'(a) from the definition → what the derivative
 * MEANS (slope, velocity, units, sign) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every numeric value, slope, limit, and difference quotient was verified before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'what-is-a-derivative',
    sections: [
      {
        id: 'wiad1-intro',
        type: 'text' as const,
        content: `# ⚡ What Is a Derivative?

**Part 1 of 7 — The Rate-of-Change Problem**

---

### Topics in This Part

| Section |
|---------|
| Rates of change all around us |
| Average rate of change |
| Why "average" isn't enough |

> 🔑 **Key Concept:** A **derivative** measures how fast a quantity is changing *at one instant*. It is the central idea of all of calculus. Before we define it precisely, we need to feel the problem it solves: turning an **average** rate of change into an **instantaneous** one.`,
      },
      {
        id: 'wiad1-rates',
        type: 'text' as const,
        content: `## Rates of Change Are Everywhere

A **rate of change** tells you how one quantity changes as another changes. You already use them constantly:

| Situation | Quantity | Changes with | Rate of change |
|-----------|----------|--------------|----------------|
| Driving | distance | time | **speed** (mi/hr) |
| Heating water | temperature | time | degrees per minute |
| Filling a pool | volume | time | gallons per minute |
| A business | profit | units sold | dollars per unit |

In every case the rate is a **change in output divided by a change in input**:

$$\\text{rate of change} = \\frac{\\text{change in output}}{\\text{change in input}} = \\frac{\\Delta y}{\\Delta x}$$

> 💡 The symbol $\\Delta$ (capital Greek "delta") means **"change in."** So $\\Delta y$ is the change in $y$, and $\\Delta x$ is the change in $x$.`,
      },
      {
        id: 'wiad1-rate-units-drop',
        type: 'dropdown-select' as const,
        content: `**Name the Rate** 🔽

Every rate of change is *output per input*. Match each situation to its rate.`,
        exercise: {
          dropdowns: [
            { label: 'Distance (mi) changing with time (hr) gives a rate in:', options: ['miles per hour', 'hours per mile', 'miles', 'hours'] },
            { label: 'Volume (gal) changing with time (min) gives a rate in:', options: ['gallons per minute', 'minutes per gallon', 'gallons', 'minutes'] },
            { label: 'In $\\dfrac{\\Delta y}{\\Delta x}$, the symbol $\\Delta$ means:', options: ['"change in"', '"sum of"', '"product of"', '"square root of"'] },
          ],
          correctAnswers: ['miles per hour', 'gallons per minute', '"change in"'],
          hint1: 'A rate is the output unit *per* the input unit.',
          hint2: 'Output is gallons, input is minutes ⇒ gallons per minute.',
          hint3: '$\\Delta$ (delta) is shorthand for "change in."',
          explanation: 'Every rate of change is $\\frac{\\text{change in output}}{\\text{change in input}}$, so its units are output-units per input-unit; $\\Delta$ means "change in."',
        },
      },
      {
        id: 'wiad1-avg-rate',
        type: 'text' as const,
        content: `## Average Rate of Change

The **average rate of change** of a function $f$ between two inputs $x = a$ and $x = b$ is:

$$\\text{average rate} = \\frac{f(b) - f(a)}{b - a}$$

This is exactly the **slope formula** $\\dfrac{\\Delta y}{\\Delta x}$ — we just feed it two points that sit on the graph of $f$.

### Worked Example: $f(x) = x^2$ from $x = 1$ to $x = 4$

$$\\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = \\frac{15}{3} = 5$$

So between $x = 1$ and $x = 4$, the function rises an **average** of $5$ units of output per unit of input.

> ✅ This is a real, useful number — but it's an *average* over a whole interval. It doesn't tell you the rate at any single point.`,
      },
      {
        id: 'wiad1-avg-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the average rate of change of $f(x) = x^2$ from $x = 2$ to $x = 5$?',
              options: ['$7$', '$3$', '$21$', '$9$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{f(5) - f(2)}{5 - 2} = \\dfrac{25 - 4}{3} = \\dfrac{21}{3} = 7$.',
            },
            {
              question: 'The average rate of change formula $\\dfrac{f(b) - f(a)}{b - a}$ is the same as the slope of:',
              options: ['the secant line through $(a, f(a))$ and $(b, f(b))$', 'the tangent line at $x = a$', 'a vertical line', 'the $x$-axis'],
              correctAnswer: 0,
              explanation: 'It is rise over run between two points on the graph, which is exactly the slope of the secant line connecting them.',
            },
          ],
        },
      },
      {
        id: 'wiad1-avg-drill',
        type: 'input-boxes' as const,
        content: `**Compute Average Rates** 🧮

Find the average rate of change of each function over the given interval.

**1)** $f(x) = x^2$ on $[3, 5]$ $\\;\\Rightarrow\\;$ rate $= \\,?$
**2)** $f(x) = 5x - 1$ on $[0, 10]$ $\\;\\Rightarrow\\;$ rate $= \\,?$
**3)** $f(x) = x^2$ on $[2, 2.5]$ $\\;\\Rightarrow\\;$ rate $= \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '5', '4.5'],
          hint1: '$\\dfrac{f(5) - f(3)}{5 - 3} = \\dfrac{25 - 9}{2} = \\dfrac{16}{2}$.',
          hint2: 'For a line $5x - 1$, the average rate equals its slope, $5$, on *any* interval.',
          hint3: '$\\dfrac{f(2.5) - f(2)}{2.5 - 2} = \\dfrac{6.25 - 4}{0.5} = \\dfrac{2.25}{0.5}$.',
          explanation: '1) $16/2 = 8$.  2) A line has the same slope everywhere: $5$.  3) $2.25/0.5 = 4.5$.',
        },
      },
      {
        id: 'wiad1-why-not-enough',
        type: 'text' as const,
        content: `## Why "Average" Isn't Enough

Suppose a car travels $120$ miles in $2$ hours. Its **average** speed is $60$ mi/hr. But that doesn't mean the speedometer read $60$ the whole time — the car may have stopped at lights and sped up on the highway.

The number you actually want when you glance at the speedometer is the speed **right now**, at a single instant. That's an **instantaneous rate of change**.

> ⚠️ **The trap:** the formula $\\dfrac{f(b) - f(a)}{b - a}$ *needs two different points*. If you try to plug in a single instant — set $b = a$ — you get $\\dfrac{0}{0}$, which is undefined.

Solving this $\\frac{0}{0}$ problem is the whole reason the derivative exists. In Part 2 we set up the tool that gets us there: the **secant line**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'what-is-a-derivative',
    sections: [
      {
        id: 'wiad2-intro',
        type: 'text' as const,
        content: `# ⚡ What Is a Derivative?

**Part 2 of 7 — Secant Lines & the Difference Quotient**

---

> 🔑 **The Idea:** To find the slope of a curve at one point, we first measure the slope between **two** nearby points — a *secant line* — and then slide those points closer together.`,
      },
      {
        id: 'wiad2-secant',
        type: 'text' as const,
        content: `## The Secant Line

A **secant line** passes through **two** points on a curve. Its slope is the average rate of change between them.

To set up for calculus, we describe the two points cleverly. Start at a fixed point $x = a$, then step a small distance $h$ to the right, landing at $x = a + h$:

- First point: $\\big(a,\\; f(a)\\big)$
- Second point: $\\big(a + h,\\; f(a + h)\\big)$

The slope of the secant line through them is:

$$m_{\\text{sec}} = \\frac{f(a + h) - f(a)}{(a + h) - a} = \\frac{f(a + h) - f(a)}{h}$$

> 🔑 **This expression has a name:** the **difference quotient**. It is the average rate of change of $f$ over a step of size $h$ starting at $a$. Memorize its shape — the derivative is built directly out of it.`,
      },
      {
        id: 'wiad2-dq-build',
        type: 'dropdown-select' as const,
        content: `**Build the Difference Quotient** 🔽

You're finding the secant slope of $f$ starting at $x = a$ with step $h$.`,
        exercise: {
          dropdowns: [
            { label: 'The second input is:', options: ['$a + h$', '$a - h$', '$a \\cdot h$', '$h$'] },
            { label: 'The numerator (the rise) is:', options: ['$f(a + h) - f(a)$', '$f(a) - f(h)$', '$f(a + h) + f(a)$', '$f(h)$'] },
            { label: 'The denominator (the run) is:', options: ['$h$', '$a$', '$a + h$', '$2h$'] },
          ],
          correctAnswers: ['$a + h$', '$f(a + h) - f(a)$', '$h$'],
          hint1: 'We step a distance $h$ to the right of $a$.',
          hint2: 'The rise is the change in output: second output minus first output.',
          hint3: 'The run is the change in input: $(a + h) - a = h$.',
          explanation: 'The difference quotient is $\\dfrac{f(a + h) - f(a)}{h}$ — rise over run between $(a, f(a))$ and $(a + h, f(a + h))$.',
        },
      },
      {
        id: 'wiad2-worked',
        type: 'text' as const,
        content: `## Worked Example: Secant Slopes of $f(x) = x^2$ at $a = 2$

Here $f(a) = f(2) = 4$. Let's compute the difference quotient $\\dfrac{f(2 + h) - 4}{h}$ for shrinking $h$:

| Step $h$ | Second point | Secant slope $\\dfrac{f(2+h) - 4}{h}$ |
|----------|--------------|----------------------------------------|
| $1$ | $(3, 9)$ | $\\dfrac{9 - 4}{1} = 5$ |
| $0.5$ | $(2.5, 6.25)$ | $\\dfrac{6.25 - 4}{0.5} = 4.5$ |
| $0.1$ | $(2.1, 4.41)$ | $\\dfrac{4.41 - 4}{0.1} = 4.1$ |
| $0.01$ | $(2.01, 4.0401)$ | $\\dfrac{4.0401 - 4}{0.01} = 4.01$ |

As $h$ gets smaller, the secant slopes march toward a clear target: $5 \\to 4.5 \\to 4.1 \\to 4.01 \\to \\dots$

> 💡 The slopes are closing in on **$4$**. That number — the value the secant slopes approach as $h \\to 0$ — is the slope of the curve *at the single point* $x = 2$.`,
      },
      {
        id: 'wiad2-secant-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = x^2$ at $a = 2$, the secant slope with step $h = 0.001$ is closest to:',
              options: ['$4.001$', '$4$', '$2.001$', '$5$'],
              correctAnswer: 0,
              explanation: 'The pattern is $4 + h$. With $h = 0.001$ that is $4.001$ — extremely close to the target value $4$.',
            },
            {
              question: 'In the difference quotient $\\dfrac{f(a + h) - f(a)}{h}$, what does $h$ represent?',
              options: ['the horizontal distance between the two points', 'the height of the curve', 'the slope of the tangent', 'the value of $f(a)$'],
              correctAnswer: 0,
              explanation: '$h$ is the run — the horizontal step from $a$ to the second input $a + h$.',
            },
          ],
        },
      },
      {
        id: 'wiad2-secant-drill',
        type: 'input-boxes' as const,
        content: `**Secant Slopes** 🧮

For $f(x) = x^2$ at $a = 3$, the difference quotient simplifies to $6 + h$ (you'll prove this in Part 5). Use that to fill in the secant slopes.

**1)** $h = 1 \\;\\Rightarrow\\;$ secant slope $= \\,?$
**2)** $h = 0.1 \\;\\Rightarrow\\;$ secant slope $= \\,?$
**3)** $h = 0.01 \\;\\Rightarrow\\;$ secant slope $= \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '6.1', '6.01'],
          hint1: 'Slope $= 6 + h$, so for $h = 1$ it is $6 + 1$.',
          hint2: 'For $h = 0.1$, slope $= 6 + 0.1$.',
          hint3: 'For $h = 0.01$, slope $= 6 + 0.01$.',
          explanation: '1) $6 + 1 = 7$.  2) $6 + 0.1 = 6.1$.  3) $6 + 0.01 = 6.01$. As $h \\to 0$, the slopes approach $6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'what-is-a-derivative',
    sections: [
      {
        id: 'wiad3-intro',
        type: 'text' as const,
        content: `# ⚡ What Is a Derivative?

**Part 3 of 7 — From Secant to Tangent: The Limit Idea**

---

> 🔑 **The Leap:** As the step $h$ shrinks toward $0$, the second point slides into the first, and the **secant line rotates into the tangent line**. The slope it approaches is the derivative.`,
      },
      {
        id: 'wiad3-tangent',
        type: 'text' as const,
        content: `## The Tangent Line

A **tangent line** touches the curve at a single point and matches the curve's direction there. It is the "ideal" line whose slope *is* the slope of the curve at that point.

We can't compute the tangent slope directly with rise-over-run, because a tangent only touches **one** point — and one point isn't enough for a slope. So we sneak up on it:

1. Pick a second point a distance $h$ away.
2. Compute the **secant** slope $\\dfrac{f(a + h) - f(a)}{h}$.
3. Let $h \\to 0$ so the second point slides into the first.
4. The secant slopes approach a limiting value — that's the **tangent slope**.

> 💡 **Secant becomes tangent.** Watch what happened to $f(x) = x^2$ at $a = 2$ in Part 2: the secant slopes $5,\\ 4.5,\\ 4.1,\\ 4.01,\\dots$ approached $4$. That $4$ is the slope of the tangent line at $x = 2$.`,
      },
      {
        id: 'wiad3-direction-drop',
        type: 'dropdown-select' as const,
        content: `**Read the Tangent Slope** 🔽

The tangent slope's **sign** tells you the curve's direction at that point.`,
        exercise: {
          dropdowns: [
            { label: 'A positive tangent slope means the curve is:', options: ['increasing', 'decreasing', 'flat', 'vertical'] },
            { label: 'A tangent slope of $0$ means the curve is momentarily:', options: ['flat (horizontal)', 'increasing', 'decreasing', 'undefined'] },
            { label: 'A negative tangent slope means the curve is:', options: ['decreasing', 'increasing', 'flat', 'horizontal'] },
          ],
          correctAnswers: ['increasing', 'flat (horizontal)', 'decreasing'],
          hint1: 'Positive slope ⇒ going uphill left to right.',
          hint2: 'Zero slope ⇒ a horizontal tangent (e.g., the bottom of a parabola).',
          hint3: 'Negative slope ⇒ going downhill left to right.',
          explanation: 'The tangent slope (the derivative) carries the same meaning as any slope: positive = increasing, zero = flat, negative = decreasing.',
        },
      },
      {
        id: 'wiad3-limit',
        type: 'text' as const,
        content: `## "Approaches" = Limit

The phrase "the value the secant slopes *approach* as $h$ gets close to $0$" is captured by a **limit**:

$$\\text{tangent slope at } a = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

The notation $\\displaystyle\\lim_{h \\to 0}$ reads "the limit as $h$ approaches $0$." It asks: *what number is this expression heading toward* as $h$ gets arbitrarily small?

> ⚠️ **Crucial subtlety:** we never set $h = 0$. Plugging in $h = 0$ gives $\\dfrac{0}{0}$, which is undefined. The limit instead asks what the expression *targets* as $h$ gets close to $0$ — and that target is a perfectly good number.`,
      },
      {
        id: 'wiad3-limit-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'As $h \\to 0$, the secant line through $(a, f(a))$ and $(a + h, f(a + h))$ becomes the:',
              options: ['tangent line at $x = a$', 'vertical line $x = a$', '$x$-axis', 'secant line at $x = b$'],
              correctAnswer: 0,
              explanation: 'As the second point slides into the first, the secant rotates into the tangent line at $x = a$.',
            },
            {
              question: 'Why can\'t we simply substitute $h = 0$ into $\\dfrac{f(a + h) - f(a)}{h}$?',
              options: ['It produces $\\frac{0}{0}$, which is undefined', 'It gives the wrong sign', '$h$ must be negative', 'The numerator becomes infinite'],
              correctAnswer: 0,
              explanation: 'At $h = 0$ the two points coincide, so both numerator and denominator are $0$, giving the indeterminate form $\\frac{0}{0}$. The limit sidesteps this.',
            },
          ],
        },
      },
      {
        id: 'wiad3-estimate-drill',
        type: 'input-boxes' as const,
        content: `**Estimate the Limit** 🧮

A function's secant slopes at $x = 4$ for shrinking $h$ are:

$$10.5,\\quad 10.1,\\quad 10.05,\\quad 10.01,\\quad 10.001,\\ \\dots$$

**1)** What single number do these slopes appear to approach as $h \\to 0$? $\\;\\Rightarrow\\;$ tangent slope $= \\,?$
**2)** That limiting value is the slope of which line at $x = 4$? *(type:* tangent *or* secant*)* $\\;\\Rightarrow\\; ?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['10', 'tangent'],
          hint1: 'The slopes are closing in: $10.5 \\to 10.1 \\to 10.05 \\to 10.01 \\to 10.001$.',
          hint2: 'They are heading toward a whole number just below all of them.',
          hint3: 'The limit of the secant slopes is the slope of the tangent line.',
          explanation: 'The secant slopes approach $10$, which is the slope of the **tangent** line at $x = 4$ — the derivative there.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'what-is-a-derivative',
    sections: [
      {
        id: 'wiad4-intro',
        type: 'text' as const,
        content: `# ⚡ What Is a Derivative?

**Part 4 of 7 — The Definition of the Derivative**

---

> 🔑 **The Payoff:** Everything so far collapses into one definition. The **derivative of $f$ at $a$** is the limit of the difference quotient — the instantaneous rate of change, and the slope of the tangent line, all in one.`,
      },
      {
        id: 'wiad4-definition',
        type: 'text' as const,
        content: `## The Definition

The **derivative of $f$ at the point $x = a$**, written $f'(a)$ (read "$f$ prime of $a$"), is:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

When this limit exists, we say $f$ is **differentiable** at $a$, and $f'(a)$ is a single number that means three things at once:

| $f'(a)$ is... | Interpretation |
|---------------|----------------|
| the limit of the difference quotient | the value the secant slopes approach |
| the slope of the tangent line at $x = a$ | how steep the graph is at that point |
| the instantaneous rate of change | how fast $f$ is changing right at $x = a$ |

> 🔑 **One symbol, three meanings.** $f'(a)$ is *simultaneously* a limit, a slope, and a rate. That triple identity is what makes the derivative so powerful.`,
      },
      {
        id: 'wiad4-def-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The derivative $f\'(a)$ is defined as:',
              options: [
                '$\\displaystyle\\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$',
                '$\\displaystyle\\frac{f(a + h) - f(a)}{h}$ with $h = 0$',
                '$\\displaystyle\\frac{f(b) - f(a)}{b - a}$',
                '$f(a) \\cdot h$',
              ],
              correctAnswer: 0,
              explanation: 'The derivative is the *limit* of the difference quotient as $h \\to 0$ — not the difference quotient itself, and not with $h$ literally set to $0$.',
            },
            {
              question: 'If $f\'(3) = 5$, which statement is TRUE?',
              options: [
                'The tangent line to $f$ at $x = 3$ has slope $5$.',
                'The value of $f$ at $x = 3$ is $5$.',
                'The average rate of change of $f$ is always $5$.',
                'The graph of $f$ crosses the $x$-axis at $5$.',
              ],
              correctAnswer: 0,
              explanation: '$f\'(3) = 5$ means the *instantaneous rate of change* at $x = 3$ is $5$, i.e. the tangent line there has slope $5$. It says nothing about the value $f(3)$.',
            },
          ],
        },
      },
      {
        id: 'wiad4-notation',
        type: 'text' as const,
        content: `## Different Names, Same Idea

The derivative gets written several ways. They all mean the same thing:

| Notation | Read as | Credited to |
|----------|---------|-------------|
| $f'(x)$ | "$f$ prime of $x$" | Lagrange |
| $\\dfrac{dy}{dx}$ | "$dy\\,dx$" | Leibniz |
| $\\dfrac{d}{dx}\\big[f(x)\\big]$ | "$d\\,dx$ of $f$" | Leibniz |
| $\\dot{y}$ | "$y$ dot" (rate in time) | Newton |

The Leibniz form $\\dfrac{dy}{dx}$ is meant to remind you of $\\dfrac{\\Delta y}{\\Delta x}$ — a slope — with the $\\Delta$'s shrunk down to *infinitesimally small* changes $dy$ and $dx$.

> 💡 $\\dfrac{dy}{dx}\\Big|_{x = a}$ means "the derivative evaluated at $x = a$," the same thing as $f'(a)$.`,
      },
      {
        id: 'wiad4-fa-vs-fprime-drill',
        type: 'input-boxes' as const,
        content: `**Value vs. Rate** 🧮

A table gives a function and its derivative:

| $x$ | $f(x)$ | $f'(x)$ |
|-----|--------|---------|
| $2$ | $10$ | $3$ |
| $5$ | $40$ | $0$ |

**1)** What is $f(2)$, the *value* of the function at $x = 2$? $\\;\\Rightarrow\\; ?$
**2)** What is $f'(2)$, the tangent *slope* at $x = 2$? $\\;\\Rightarrow\\; ?$
**3)** At $x = 5$ the tangent slope $f'(5) = \\,?$  *(a horizontal tangent)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '3', '0'],
          hint1: 'Read $f(2)$ straight from the $f(x)$ column.',
          hint2: 'Read $f\'(2)$ from the $f\'(x)$ column — it is the slope, not the value.',
          hint3: '$f\'(5)$ is in the $f\'(x)$ column at $x = 5$; a value of $0$ means a flat tangent.',
          explanation: '$f(2) = 10$ is the function value; $f\'(2) = 3$ is the rate/slope there; $f\'(5) = 0$ means the graph is momentarily flat at $x = 5$. Keep value ($f$) and rate ($f\'$) separate.',
        },
      },
      {
        id: 'wiad4-notation-drop',
        type: 'dropdown-select' as const,
        content: `**Match the Notation** 🔽

All of these express the derivative. Pick the matching reading.`,
        exercise: {
          dropdowns: [
            { label: '$f\'(x)$ is read:', options: ['"$f$ prime of $x$"', '"$f$ of $x$ squared"', '"$f$ inverse"', '"the integral of $f$"'] },
            { label: '$\\dfrac{dy}{dx}$ is meant to echo the slope formula:', options: ['$\\dfrac{\\Delta y}{\\Delta x}$', '$y \\cdot x$', '$y + x$', '$\\dfrac{x}{y}$'] },
            { label: '"The derivative of $f$ at $x = 3$" is written:', options: ['$f\'(3)$', '$f(3)$', '$3f$', '$f^{-1}(3)$'] },
          ],
          correctAnswers: ['"$f$ prime of $x$"', '$\\dfrac{\\Delta y}{\\Delta x}$', '$f\'(3)$'],
          hint1: 'The prime symbol $\'$ is read "prime."',
          hint2: 'Leibniz notation deliberately mimics rise over run.',
          hint3: '$f(3)$ is the *value* of the function; $f\'(3)$ is its *derivative* at $3$.',
          explanation: '$f\'(x)$ = "f prime of x"; $\\frac{dy}{dx}$ mirrors $\\frac{\\Delta y}{\\Delta x}$; and the derivative at $x = 3$ is $f\'(3)$, not $f(3)$.',
        },
      },
      {
        id: 'wiad4-recap',
        type: 'text' as const,
        content: `## Where We Stand

You now own the definition:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

So far we've only *estimated* derivatives from tables of secant slopes. In Part 5 we'll compute them **exactly** by simplifying the difference quotient algebraically and then taking the limit — no tables needed.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'what-is-a-derivative',
    sections: [
      {
        id: 'wiad5-intro',
        type: 'text' as const,
        content: `# ⚡ What Is a Derivative?

**Part 5 of 7 — Computing Derivatives from the Definition**

---

> 🔑 **The Trick:** Expand $f(a + h)$, simplify the numerator, then **cancel the $h$** in the denominator. Once $h$ is gone from the bottom, you can safely let $h \\to 0$.`,
      },
      {
        id: 'wiad5-worked1',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^2$ at $a = 3$

Start from the definition with $a = 3$:

$$f'(3) = \\lim_{h \\to 0} \\frac{f(3 + h) - f(3)}{h} = \\lim_{h \\to 0} \\frac{(3 + h)^2 - 9}{h}$$

**Step 1 — Expand** $(3 + h)^2 = 9 + 6h + h^2$:

$$= \\lim_{h \\to 0} \\frac{9 + 6h + h^2 - 9}{h} = \\lim_{h \\to 0} \\frac{6h + h^2}{h}$$

**Step 2 — Factor and cancel** $h$:

$$= \\lim_{h \\to 0} \\frac{h(6 + h)}{h} = \\lim_{h \\to 0} (6 + h)$$

**Step 3 — Now let $h \\to 0$** (safe — no $h$ in a denominator):

$$= 6 + 0 = 6$$

> ✅ So $f'(3) = 6$. This matches the table from Part 2: the secant slopes $7, 6.1, 6.01, \\dots$ were closing in on exactly $6$.`,
      },
      {
        id: 'wiad5-worked1-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In computing $f\'(3)$ for $f(x) = x^2$, why are we allowed to cancel the $h$ in $\\dfrac{h(6 + h)}{h}$?',
              options: [
                'In the limit $h$ approaches $0$ but is never equal to $0$, so $h \\ne 0$ and the cancellation is valid',
                'Because $h$ is always equal to $1$',
                'Because $6 + h = 6$',
                'You are not actually allowed to cancel it',
              ],
              correctAnswer: 0,
              explanation: 'The limit considers $h$ values *near* $0$ but never $0$ itself. Since $h \\ne 0$, dividing $h/h = 1$ is legitimate, which clears the $\\frac{0}{0}$ problem.',
            },
            {
              question: 'After simplifying, the derivative is $\\displaystyle\\lim_{h \\to 0}(6 + h)$. Its value is:',
              options: ['$6$', '$0$', '$\\frac{0}{0}$', 'undefined'],
              correctAnswer: 0,
              explanation: 'Once the expression is just $6 + h$ (no $h$ in a denominator), substituting $h = 0$ gives $6$.',
            },
          ],
        },
      },
      {
        id: 'wiad5-worked2',
        type: 'text' as const,
        content: `## Worked Example: A General Point $f(x) = x^2$ at $x = a$

Doing it once for *any* $a$ gives the whole derivative function at once:

$$f'(a) = \\lim_{h \\to 0} \\frac{(a + h)^2 - a^2}{h} = \\lim_{h \\to 0} \\frac{a^2 + 2ah + h^2 - a^2}{h}$$

$$= \\lim_{h \\to 0} \\frac{2ah + h^2}{h} = \\lim_{h \\to 0} \\frac{h(2a + h)}{h} = \\lim_{h \\to 0} (2a + h) = 2a$$

So for $f(x) = x^2$, the derivative is $f'(x) = 2x$. Now you can read off the slope at **any** point:

| Point | $f'(x) = 2x$ | Tangent slope |
|-------|--------------|---------------|
| $x = 2$ | $2(2)$ | $4$ |
| $x = 3$ | $2(3)$ | $6$ |
| $x = 0$ | $2(0)$ | $0$ (flat — the bottom of the parabola) |
| $x = -1$ | $2(-1)$ | $-2$ (going downhill) |

> 💡 **One limit, infinitely many slopes.** Computing $f'(a)$ for a general $a$ produces a brand-new function $f'$ that hands you the tangent slope everywhere.`,
      },
      {
        id: 'wiad5-tangent-line',
        type: 'text' as const,
        content: `## Bonus: The Tangent Line Equation

Once you have a slope $f'(a)$ and the point $\\big(a, f(a)\\big)$, the tangent line is just point-slope form:

$$y - f(a) = f'(a)\\,(x - a)$$

### Example: tangent to $f(x) = x^2$ at $x = 3$

We have the point $(3, 9)$ and slope $f'(3) = 6$:

$$y - 9 = 6(x - 3) \\;\\Rightarrow\\; y = 6x - 9$$

> ✅ **Check:** at $x = 3$, $y = 6(3) - 9 = 9$ ✓ — the tangent passes through $(3, 9)$.`,
      },
      {
        id: 'wiad5-compute-drill',
        type: 'input-boxes' as const,
        content: `**Compute Exact Derivatives** 🧮

For $f(x) = x^2$ we proved $f'(x) = 2x$. Use it.

**1)** $f'(5) = \\,?$
**2)** $f'(-3) = \\,?$
**3)** The tangent to $f(x) = x^2$ at $x = 1$ has slope $f'(1) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '-6', '2'],
          hint1: '$f\'(5) = 2(5)$.',
          hint2: '$f\'(-3) = 2(-3)$ — keep the sign.',
          hint3: '$f\'(1) = 2(1)$.',
          explanation: '1) $2(5) = 10$.  2) $2(-3) = -6$.  3) $2(1) = 2$. The rule $f\'(x) = 2x$ gives the slope at any point.',
        },
      },
      {
        id: 'wiad5-steps-drop',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're computing $f'(a)$ for $f(x) = x^2$ from the definition. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — write the difference quotient:', options: ['$\\dfrac{(a + h)^2 - a^2}{h}$', '$\\dfrac{a^2 - h^2}{h}$', '$(a + h)^2$', '$\\dfrac{a^2}{h}$'] },
            { label: 'Step 2 — expand the numerator:', options: ['$\\dfrac{2ah + h^2}{h}$', '$\\dfrac{2a + h}{h}$', '$\\dfrac{a^2 + h^2}{h}$', '$\\dfrac{2ah}{h^2}$'] },
            { label: 'Step 3 — cancel $h$:', options: ['$2a + h$', '$2a$', '$a + h$', '$2ah$'] },
            { label: 'Step 4 — let $h \\to 0$:', options: ['$2a$', '$2a + h$', '$0$', '$a^2$'] },
          ],
          correctAnswers: ['$\\dfrac{(a + h)^2 - a^2}{h}$', '$\\dfrac{2ah + h^2}{h}$', '$2a + h$', '$2a$'],
          hint1: 'Plug $a + h$ into $x^2$ and subtract $f(a) = a^2$.',
          hint2: '$(a + h)^2 - a^2 = 2ah + h^2$ after the $a^2$ terms cancel.',
          hint3: 'Factor $h$ from $2ah + h^2 = h(2a + h)$, then cancel; finally substitute $h = 0$ to get $2a$.',
          explanation: 'Expand $\\to$ simplify $\\to$ cancel $h$ $\\to$ take the limit. The result is $f\'(a) = 2a$, i.e. $f\'(x) = 2x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'what-is-a-derivative',
    sections: [
      {
        id: 'wiad6-intro',
        type: 'text' as const,
        content: `# ⚡ What Is a Derivative?

**Part 6 of 7 — What a Derivative MEANS (Velocity, Units & Sign)**

---

> 🔑 **The Point of It All:** A derivative isn't just abstract slope. In the real world $f'(a)$ is a **rate** with real **units**, and its **sign** tells you whether things are rising or falling.`,
      },
      {
        id: 'wiad6-velocity',
        type: 'text' as const,
        content: `## Velocity Is a Derivative

If $s(t)$ gives an object's **position** at time $t$, then its **velocity** is the derivative $s'(t)$ — the instantaneous rate at which position changes.

### Example: a dropped object, $s(t) = 16t^2$ feet after $t$ seconds

The **average** velocity from $t = 2$ to $t = 3$ is just a secant slope:

$$\\frac{s(3) - s(2)}{3 - 2} = \\frac{144 - 64}{1} = 80 \\text{ ft/sec}$$

The **instantaneous** velocity at $t = 2$ is the derivative. Using the same definition-method, $s'(t) = 32t$, so:

$$s'(2) = 32(2) = 64 \\text{ ft/sec}$$

> 💡 Average velocity used **two** times; instantaneous velocity is the derivative at **one** instant. The speedometer reading at exactly $t = 2$ is $64$ ft/sec.`,
      },
      {
        id: 'wiad6-vel-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If position is $s(t)$ in meters and $t$ in seconds, then the derivative $s\'(t)$ is measured in:',
              options: ['meters per second', 'seconds per meter', 'meters', 'seconds'],
              correctAnswer: 0,
              explanation: 'A derivative is $\\frac{\\text{change in output}}{\\text{change in input}}$, so its units are output-units per input-unit: meters per second.',
            },
            {
              question: 'For $s(t) = 16t^2$ with $s\'(t) = 32t$, the instantaneous velocity at $t = 3$ is:',
              options: ['$96$ ft/sec', '$48$ ft/sec', '$144$ ft/sec', '$80$ ft/sec'],
              correctAnswer: 0,
              explanation: '$s\'(3) = 32(3) = 96$ ft/sec. (The $144$ is the *position* $s(3)$, and $80$ was the *average* velocity over $[2,3]$.)',
            },
          ],
        },
      },
      {
        id: 'wiad6-units',
        type: 'text' as const,
        content: `## Units & Sign: Reading a Derivative in Context

Because a derivative is output-units **per** input-unit, you can always state what it means in plain language:

| If $f(t)$ measures... | with input $t$ in... | then $f'(t)$ is in... | and means... |
|-----------------------|----------------------|------------------------|--------------|
| Temperature (°F) | hours | °F per hour | how fast it's warming/cooling |
| Population (people) | years | people per year | growth rate |
| Cost (dollars) | items produced | dollars per item | marginal cost |
| Distance (miles) | hours | miles per hour | speed |

The **sign** adds direction:

- $f'(a) > 0$: the quantity is **increasing** at that instant.
- $f'(a) < 0$: the quantity is **decreasing** at that instant.
- $f'(a) = 0$: the quantity is momentarily **steady** (a horizontal tangent — often a peak or valley).

> ⚠️ **Don't confuse $f$ with $f'$.** $f(a)$ is *how much* there is; $f'(a)$ is *how fast it's changing*. A population can be huge ($f$ large) while shrinking ($f' < 0$).`,
      },
      {
        id: 'wiad6-units-drop',
        type: 'dropdown-select' as const,
        content: `**Interpret in Context** 🔽

A tank holds $V(t)$ gallons of water after $t$ minutes.`,
        exercise: {
          dropdowns: [
            { label: 'The units of $V\'(t)$ are:', options: ['gallons per minute', 'gallons', 'minutes', 'minutes per gallon'] },
            { label: 'If $V\'(5) = -3$, at $t = 5$ minutes the tank is:', options: ['draining at $3$ gal/min', 'filling at $3$ gal/min', 'full', 'empty'] },
            { label: '$V\'(5) = 0$ would mean the water level is:', options: ['momentarily not changing', 'rising fastest', 'falling fastest', 'exactly $0$ gallons'] },
          ],
          correctAnswers: ['gallons per minute', 'draining at $3$ gal/min', 'momentarily not changing'],
          hint1: 'Output is gallons, input is minutes; the derivative is gallons per minute.',
          hint2: 'A *negative* rate means the amount is decreasing — water is leaving.',
          hint3: 'A zero derivative means the quantity is momentarily steady (not rising or falling).',
          explanation: '$V\'(t)$ is in gal/min. $V\'(5) = -3$ ⇒ draining at $3$ gal/min. $V\'(5) = 0$ ⇒ level momentarily constant — it says nothing about how *full* the tank is.',
        },
      },
      {
        id: 'wiad6-sign-drill',
        type: 'input-boxes' as const,
        content: `**Match Sign to Behavior** 🧮

A hiker's elevation is $E(t)$ feet after $t$ hours. For each scenario, enter **+** if $E'(t)$ is positive, **-** if negative, or **0** if zero.

**1)** Climbing steadily uphill $\\;\\Rightarrow\\; E'(t)$ is $\\,?$  *(enter + , - , or 0)*
**2)** Pausing at a flat overlook $\\;\\Rightarrow\\; E'(t)$ is $\\,?$
**3)** Descending toward the trailhead $\\;\\Rightarrow\\; E'(t)$ is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['+', '0', '-'],
          hint1: 'Going up ⇒ elevation increasing ⇒ derivative is positive.',
          hint2: 'Standing still on flat ground ⇒ elevation not changing ⇒ derivative is $0$.',
          hint3: 'Going down ⇒ elevation decreasing ⇒ derivative is negative.',
          explanation: '1) Increasing ⇒ $+$.  2) Constant ⇒ $0$.  3) Decreasing ⇒ $-$. The sign of $E\'(t)$ encodes the direction of change.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'what-is-a-derivative',
    sections: [
      {
        id: 'wiad7-intro',
        type: 'text' as const,
        content: `# ⚡ What Is a Derivative?

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) compute average rates of change, (2) build the difference quotient, (3) see the secant-to-tangent limit, (4) state the definition $f'(a)$, (5) compute derivatives from that definition, and (6) interpret a derivative's units and sign. Let's put it all together.`,
      },
      {
        id: 'wiad7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Idea | Formula / Meaning |
|------|-------------------|
| Average rate of change | $\\dfrac{f(b) - f(a)}{b - a}$ — slope of a **secant** line |
| Difference quotient | $\\dfrac{f(a + h) - f(a)}{h}$ — secant slope with step $h$ |
| Derivative at a point | $f'(a) = \\displaystyle\\lim_{h \\to 0} \\dfrac{f(a + h) - f(a)}{h}$ |
| What $f'(a)$ is | tangent slope = instantaneous rate of change |
| Tangent line | $y - f(a) = f'(a)(x - a)$ |
| Units of $f'$ | output-units **per** input-unit |
| Sign of $f'$ | $+$ increasing, $-$ decreasing, $0$ momentarily flat |

> ⚠️ **Never** set $h = 0$ in the difference quotient before simplifying — cancel the $h$ first, *then* take the limit. And keep $f(a)$ (a value) separate from $f'(a)$ (a rate).`,
      },
      {
        id: 'wiad7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The average rate of change of $f(x) = x^2$ on $[1, 3]$ is:',
              options: ['$4$', '$2$', '$8$', '$5$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{f(3) - f(1)}{3 - 1} = \\dfrac{9 - 1}{2} = \\dfrac{8}{2} = 4$.',
            },
            {
              question: 'For $f(x) = x^2$, the difference quotient at $x = a$ simplifies to $2a + h$ before the limit. So $f\'(a) =$',
              options: ['$2a$', '$2a + h$', '$a^2$', '$2$'],
              correctAnswer: 0,
              explanation: 'Letting $h \\to 0$ in $2a + h$ gives $2a$. Hence $f\'(x) = 2x$.',
            },
            {
              question: 'A balloon\'s volume is $V(t)$ liters after $t$ seconds. If $V\'(4) = -0.5$, then at $t = 4$ seconds the balloon is:',
              options: ['shrinking at $0.5$ L/sec', 'growing at $0.5$ L/sec', 'exactly $0.5$ L in volume', 'not moving'],
              correctAnswer: 0,
              explanation: 'A negative derivative means the volume is *decreasing*. The magnitude $0.5$ gives the rate: shrinking at $0.5$ liters per second.',
            },
          ],
        },
      },
      {
        id: 'wiad7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Computation** 🧮

Use $f(x) = x^2$ with $f'(x) = 2x$ where needed.

**1)** Average rate of change of $f(x) = x^2$ on $[4, 6]$ $\\;\\Rightarrow\\; ?$
**2)** $f'(7) = \\,?$  *(instantaneous slope at $x = 7$)*
**3)** The tangent line $y = 2x - 1$ touches $f(x) = x^2$ at $x = 1$. Its slope is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '14', '2'],
          hint1: '$\\dfrac{f(6) - f(4)}{6 - 4} = \\dfrac{36 - 16}{2}$.',
          hint2: '$f\'(7) = 2(7)$.',
          hint3: 'In $y = mx + b$ the slope is $m$; here $m = 2$ (and indeed $f\'(1) = 2(1) = 2$).',
          explanation: '1) $\\dfrac{20}{2} = 10$.  2) $2(7) = 14$.  3) slope $= 2$, matching $f\'(1) = 2$.',
        },
      },
      {
        id: 'wiad7-ready',
        type: 'text' as const,
        content: `## You're Ready

You started with a simple question — *how fast is something changing right now?* — and you now have the complete answer:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

a single number that is the **tangent slope**, the **instantaneous rate of change**, and the limit of **secant slopes**, all at once. That is the derivative. One last quiz to lock it in.`,
      },
      {
        id: 'wiad7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which expression IS the definition of the derivative of $f$ at $x = a$?',
              options: [
                '$\\displaystyle\\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$',
                '$\\displaystyle\\frac{f(b) - f(a)}{b - a}$',
                '$f(a + h) - f(a)$',
                '$\\displaystyle\\lim_{h \\to 0} \\big(f(a + h) - f(a)\\big)$',
              ],
              correctAnswer: 0,
              explanation: 'The derivative is the limit *of the difference quotient* — the whole fraction $\\frac{f(a+h)-f(a)}{h}$ — as $h \\to 0$. The second option is the average rate (a secant slope), not the derivative.',
            },
            {
              question: 'As $h \\to 0$, the secant line through $(a, f(a))$ and $(a + h, f(a + h))$ approaches the tangent line, and its slope approaches:',
              options: ['$f\'(a)$', '$f(a)$', '$0$ always', '$\\frac{0}{0}$'],
              correctAnswer: 0,
              explanation: 'The limiting secant slope is precisely $f\'(a)$, the slope of the tangent line at $x = a$.',
            },
            {
              question: 'A cup of coffee cools so that its temperature $T(t)$ in °F has $T\'(10) = -2$ at $t = 10$ minutes. This means at $t = 10$ minutes the coffee is:',
              options: [
                'cooling at $2$ °F per minute',
                'warming at $2$ °F per minute',
                'exactly $2$ °F',
                'at its hottest',
              ],
              correctAnswer: 0,
              explanation: 'The derivative is a rate with units °F per minute. The negative sign means *decreasing*, so the coffee is cooling at $2$ °F per minute. (It says nothing about the actual temperature value.)',
            },
          ],
        },
      },
    ],
  },
]
