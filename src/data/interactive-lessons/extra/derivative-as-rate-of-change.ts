import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Derivative as Rate of Change (AP Calculus AB).
 * Registry key / DB Topic.slug: 'derivative-as-rate-of-change'.
 * 7 parts, gold-standard structure: average rate of change → instantaneous rate &
 * the limit definition → units / interpreting f'(a) in context → motion
 * (position–velocity–acceleration) → rates from graphs & tables → applied rates
 * (population, economics, related quantities) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every average-rate slope, difference quotient, and motion value was verified
 * numerically before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'derivative-as-rate-of-change',
    sections: [
      {
        id: 'droc1-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Rate of Change

**Part 1 of 7 — Average Rate of Change**

---

### Topics in This Part

| Section |
|---------|
| Rate of Change Is Just Slope |
| The Average-Rate-of-Change Formula |
| Reading Rates from a Table |

> 🔑 **Key Concept:** A *rate of change* measures how fast one quantity changes compared to another. Before we can talk about the **instantaneous** rate (the derivative), we need the **average** rate — the slope of a line between two points.`,
      },
      {
        id: 'droc1-slope',
        type: 'text' as const,
        content: `## Rate of Change Is Just Slope

Every rate of change is a **slope**: a change in output divided by a change in input.

$$\\text{rate} = \\frac{\\text{change in } y}{\\text{change in } x} = \\frac{\\Delta y}{\\Delta x}$$

Think about driving. If you travel $120$ miles in $2$ hours, your *average* speed is

$$\\frac{\\Delta(\\text{distance})}{\\Delta(\\text{time})} = \\frac{120 \\text{ mi}}{2 \\text{ hr}} = 60 \\text{ mph}.$$

That $60$ mph is the **average rate of change** of distance with respect to time — the slope of the straight line connecting your start and end points.

> 🔑 **Key Idea:** The word "per" almost always signals a rate: miles **per** hour, dollars **per** item, people **per** year. The units of a rate are always *(output units) per (input units)*.`,
      },
      {
        id: 'droc1-formula',
        type: 'text' as const,
        content: `## The Average-Rate-of-Change Formula

For a function $f$ on the interval $[a, b]$, the **average rate of change** is the slope of the **secant line** through $(a, f(a))$ and $(b, f(b))$:

$$\\text{AROC} = \\frac{f(b) - f(a)}{b - a}$$

### Worked Example: $f(x) = x^2$ on $[1, 4]$

$$\\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = \\frac{15}{3} = 5$$

So on average, $f$ rises $5$ units of $y$ for every $1$ unit of $x$ across this interval.

| Quantity | Value |
|----------|-------|
| $f(1)$ | $1$ |
| $f(4)$ | $16$ |
| $\\Delta y = f(4)-f(1)$ | $15$ |
| $\\Delta x = 4-1$ | $3$ |
| Average rate | $\\dfrac{15}{3} = 5$ |

> 💡 The secant line just *connects two points*. The average rate ignores everything that happens between them — it only sees the endpoints.`,
      },
      {
        id: 'droc1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The average rate of change of a function on $[a, b]$ is the slope of which line?',
              options: ['The secant line through $(a, f(a))$ and $(b, f(b))$', 'The tangent line at $x = a$', 'The tangent line at $x = b$', 'A horizontal line at $y = f(a)$'],
              correctAnswer: 0,
              explanation: 'Average rate of change uses two points, so it is the slope of the secant line joining them. A tangent line touches just one point — that gives the *instantaneous* rate (Part 2).',
            },
            {
              question: 'For $g(x) = 3x + 7$, the average rate of change on **any** interval $[a, b]$ equals:',
              options: ['$3$', '$7$', '$3a + 7$', 'It depends on the interval'],
              correctAnswer: 0,
              explanation: 'For a linear function the slope is constant, so the average rate of change is always the slope $3$, no matter which interval you pick. This is special to lines.',
            },
          ],
        },
      },
      {
        id: 'droc1-input',
        type: 'input-boxes' as const,
        content: `**Compute the Average Rate** 🧮

Use $\\dfrac{f(b)-f(a)}{b-a}$.

**1)** $f(x) = x^2$ on $[2, 5]$. AROC $= \\,?$
**2)** $f(x) = x^3$ on $[1, 3]$. AROC $= \\,?$
**3)** A car's position is $s(t)=4t$ (meters) for $t$ in seconds. Average velocity on $[0,10]$ $= \\,?$ *(m/s)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '13', '4'],
          hint1: '$f(5)=25,\\ f(2)=4$, so $\\dfrac{25-4}{5-2}=\\dfrac{21}{3}=7$.',
          hint2: '$f(3)=27,\\ f(1)=1$, so $\\dfrac{27-1}{3-1}=\\dfrac{26}{2}=13$.',
          hint3: '$s(10)=40,\\ s(0)=0$, so $\\dfrac{40-0}{10-0}=4$. A line has constant slope $4$.',
          explanation: '1) $\\dfrac{25-4}{3}=7$.  2) $\\dfrac{27-1}{2}=13$.  3) $\\dfrac{40-0}{10}=4$ m/s.',
        },
      },
      {
        id: 'droc1-table',
        type: 'text' as const,
        content: `## Reading Rates from a Table

You don't need a formula to find an average rate — just two data points. Suppose a tank is being filled:

| Time $t$ (min) | Volume $V$ (liters) |
|----------------|---------------------|
| $0$ | $5$ |
| $3$ | $20$ |
| $7$ | $48$ |

Average rate of filling on $[3, 7]$:

$$\\frac{V(7) - V(3)}{7 - 3} = \\frac{48 - 20}{4} = \\frac{28}{4} = 7 \\text{ liters per minute}.$$

> ⚠️ **Watch the interval.** The average rate on $[0,3]$ is $\\frac{20-5}{3}=5$ L/min, but on $[3,7]$ it's $7$ L/min. Different intervals give different averages — the tank is filling *faster* later. In Part 2 we shrink the interval to a single instant.`,
      },
      {
        id: 'droc1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Pieces** 🔽

Use the tank table ($V$ in liters, $t$ in minutes) above.`,
        exercise: {
          dropdowns: [
            { label: 'Average filling rate on $[0, 7]$:', options: ['$\\dfrac{48-5}{7}$ L/min', '$\\dfrac{48-5}{7-5}$ L/min', '$\\dfrac{48}{7}$ L/min', '$48-5$ L/min'] },
            { label: 'That average rate equals (to 1 decimal):', options: ['$\\approx 6.1$', '$\\approx 7.0$', '$\\approx 8.6$', '$\\approx 5.0$'] },
            { label: 'The units of this rate are:', options: ['liters per minute', 'minutes per liter', 'liters', 'minutes'] },
          ],
          correctAnswers: ['$\\dfrac{48-5}{7}$ L/min', '$\\approx 6.1$', 'liters per minute'],
          hint1: 'AROC $=\\dfrac{V(7)-V(0)}{7-0}=\\dfrac{48-5}{7}$.',
          hint2: '$\\dfrac{43}{7}\\approx 6.14$, which rounds to $6.1$.',
          hint3: 'Output is liters, input is minutes, so the rate is liters per minute.',
          explanation: '$\\dfrac{V(7)-V(0)}{7-0}=\\dfrac{43}{7}\\approx 6.1$ liters per minute — the overall average between $0$ and $7$ minutes.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'derivative-as-rate-of-change',
    sections: [
      {
        id: 'droc2-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Rate of Change

**Part 2 of 7 — From Average to Instantaneous Rate**

---

> 🔑 **The Big Idea:** The **derivative** is the *instantaneous* rate of change — the average rate of change measured over an interval so tiny it collapses to a single point. We get there by taking a **limit**.`,
      },
      {
        id: 'droc2-zoom',
        type: 'text' as const,
        content: `## Shrinking the Interval

Watch what happens to the average rate of change of $f(x)=x^2$ on $[2, 2+h]$ as $h$ gets small:

| Interval | $\\dfrac{f(2+h)-f(2)}{h}$ |
|----------|--------------------------|
| $[2, 3]$ ($h=1$) | $\\dfrac{9-4}{1}=5$ |
| $[2, 2.5]$ ($h=0.5$) | $\\dfrac{6.25-4}{0.5}=4.5$ |
| $[2, 2.1]$ ($h=0.1$) | $\\dfrac{4.41-4}{0.1}=4.1$ |
| $[2, 2.01]$ ($h=0.01$) | $\\dfrac{4.0401-4}{0.01}=4.01$ |

The average rates march toward $4$. That limiting value, $4$, is the **instantaneous rate of change** of $f$ at $x=2$.

> 💡 As the second point slides toward the first, the **secant line** rotates into the **tangent line**. The slope of that tangent is the derivative.`,
      },
      {
        id: 'droc2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'As the interval $[a, b]$ shrinks so that $b \\to a$, the secant line approaches the:',
              options: ['Tangent line at $x = a$', 'Horizontal axis', 'Secant on a different interval', 'Vertical line $x = a$'],
              correctAnswer: 0,
              explanation: 'When the two points merge into one, the secant rotates into the tangent line at that point. Its slope is the instantaneous rate — the derivative.',
            },
            {
              question: 'In the table above, the values $5, 4.5, 4.1, 4.01$ are approaching $4$. What does $4$ represent?',
              options: ['The instantaneous rate of change of $f$ at $x = 2$', 'The average rate on $[2, 3]$', 'The value $f(2)$', 'The change in $x$'],
              correctAnswer: 0,
              explanation: 'The limit of the average rates as $h \\to 0$ is the instantaneous rate of change at $x=2$, i.e. $f\'(2) = 4$.',
            },
          ],
        },
      },
      {
        id: 'droc2-limit-def',
        type: 'text' as const,
        content: `## The Limit Definition of the Derivative

The instantaneous rate of change of $f$ at $x = a$ is the **derivative** $f'(a)$, defined as the limit of the average rates:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$

The fraction $\\dfrac{f(a+h)-f(a)}{h}$ is called the **difference quotient** — it is exactly the average rate of change on $[a, a+h]$.

### Worked Example: $f(x) = x^2$ at $x = 2$

$$f'(2) = \\lim_{h \\to 0} \\frac{(2+h)^2 - 4}{h} = \\lim_{h \\to 0} \\frac{4 + 4h + h^2 - 4}{h}$$

$$= \\lim_{h \\to 0} \\frac{4h + h^2}{h} = \\lim_{h \\to 0} (4 + h) = 4.$$

This confirms the table: $f'(2) = 4$.

> 🔑 **Two names, one idea:** "derivative," "instantaneous rate of change," and "slope of the tangent line" all mean the same thing.`,
      },
      {
        id: 'droc2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Difference Quotient** 🔽

You're finding $f'(3)$ for $f(x) = x^2$ from the definition. Choose the correct piece at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'The difference quotient is:', options: ['$\\dfrac{f(3+h)-f(3)}{h}$', '$\\dfrac{f(3)-f(0)}{3}$', '$\\dfrac{f(3+h)-f(3)}{3}$', '$f(3+h)-f(3)$'] },
            { label: '$f(3+h)$ expands to:', options: ['$9 + 6h + h^2$', '$9 + h^2$', '$9 + 3h$', '$6h + h^2$'] },
            { label: 'After subtracting $f(3)=9$ and simplifying, the quotient is:', options: ['$6 + h$', '$6h + h^2$', '$6$', '$9 + h$'] },
            { label: 'Taking $h \\to 0$ gives $f\'(3) =$', options: ['$6$', '$9$', '$3$', '$0$'] },
          ],
          correctAnswers: ['$\\dfrac{f(3+h)-f(3)}{h}$', '$9 + 6h + h^2$', '$6 + h$', '$6$'],
          hint1: 'The difference quotient is $\\dfrac{f(a+h)-f(a)}{h}$ with $a=3$.',
          hint2: '$(3+h)^2 = 9 + 6h + h^2$.',
          hint3: '$\\dfrac{(9+6h+h^2)-9}{h}=\\dfrac{6h+h^2}{h}=6+h$, and $\\lim_{h\\to 0}(6+h)=6$.',
          explanation: 'The difference quotient $\\dfrac{(3+h)^2-9}{h}$ simplifies to $6+h$; its limit as $h\\to 0$ is $f\'(3)=6$.',
        },
      },
      {
        id: 'droc2-input',
        type: 'input-boxes' as const,
        content: `**Difference Quotients** 🧮

For $f(x) = x^2$, simplify the difference quotient $\\dfrac{f(a+h)-f(a)}{h}$, then take the limit.

**1)** At $a = 5$: the simplified quotient is $10 + h$, so $f'(5) = \\,?$
**2)** For $f(x)=x^2$ in general, $f'(a) = 2a$. Find $f'(7) = \\,?$
**3)** For $f(x) = 4x + 1$ (a line), $f'(a) = \\,?$ for every $a$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '14', '4'],
          hint1: '$\\lim_{h\\to 0}(10+h)=10$.',
          hint2: '$f\'(a)=2a$, so $f\'(7)=2\\cdot 7=14$.',
          hint3: 'A line $4x+1$ has constant slope, so its instantaneous rate is always $4$.',
          explanation: '1) $f\'(5)=10$.  2) $f\'(7)=14$.  3) $f\'(a)=4$ everywhere — for a line, average and instantaneous rates are equal.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'derivative-as-rate-of-change',
    sections: [
      {
        id: 'droc3-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Rate of Change

**Part 3 of 7 — Units & Interpreting $f'(a)$ in Context**

---

> 🔑 **Why this matters for the AP exam:** Half of "rate of change" questions ask you to **interpret** a derivative in plain English — with the correct **units** and the correct **meaning**. A bare number earns no credit; the *sentence* does.`,
      },
      {
        id: 'droc3-units',
        type: 'text' as const,
        content: `## The Units of a Derivative

Because $f'(a)=\\lim\\limits_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}$ is a ratio of *(output)* to *(input)*, its units are always:

$$\\frac{\\text{units of } f}{\\text{units of } x}.$$

| If $f$ measures... | and $x$ measures... | then $f'$ is in... |
|--------------------|---------------------|--------------------|
| meters | seconds | meters per second |
| dollars | items produced | dollars per item |
| population (people) | years | people per year |
| °C (temperature) | minutes | °C per minute |
| liters | minutes | liters per minute |

> 💡 **Rule of thumb:** take the units of the output, write "per," then the units of the input.`,
      },
      {
        id: 'droc3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Units** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$P(t)$ = population (people), $t$ in years. $P\'(t)$ units:', options: ['people per year', 'years per person', 'people', 'years'] },
            { label: '$C(x)$ = cost (dollars), $x$ = items. $C\'(x)$ units:', options: ['dollars per item', 'items per dollar', 'dollars', 'items'] },
            { label: '$h(t)$ = height (feet), $t$ in seconds. $h\'(t)$ units:', options: ['feet per second', 'seconds per foot', 'feet', 'feet per second squared'] },
          ],
          correctAnswers: ['people per year', 'dollars per item', 'feet per second'],
          hint1: 'Units of a derivative are (output units) per (input units).',
          hint2: 'For $C(x)$, output is dollars and input is items, so dollars per item.',
          hint3: 'For $h(t)$, output is feet and input is seconds, so feet per second (a velocity).',
          explanation: 'A derivative always carries units of $\\dfrac{\\text{output}}{\\text{input}}$: people/year, dollars/item, feet/second.',
        },
      },
      {
        id: 'droc3-interpret',
        type: 'text' as const,
        content: `## Writing a Correct Interpretation

Suppose $W(t)$ gives the weight (in pounds) of a puppy at age $t$ weeks, and $W'(8) = 1.5$.

A full-credit interpretation has **three** ingredients:

1. **The value & its units:** $1.5$ pounds per week
2. **The variable & moment:** at $t = 8$ weeks
3. **The meaning:** the puppy's weight is *increasing*

> ✅ **Model sentence:** "At age $8$ weeks, the puppy's weight is increasing at a rate of $1.5$ pounds per week."

A **negative** derivative means the quantity is **decreasing**. If $W'(20) = -0.4$, then at age $20$ weeks the weight is *decreasing* at $0.4$ pounds per week.

> ⚠️ **Common AP error:** saying "the weight is $1.5$" (that's a *value*, not a *rate*) or forgetting to state whether it is increasing or decreasing.`,
      },
      {
        id: 'droc3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Let $T(t)$ be the temperature (°C) of coffee $t$ minutes after pouring, with $T\'(5) = -2$. The best interpretation is:',
              options: ['At $t=5$ min, the coffee is cooling at a rate of $2$ °C per minute.', 'At $t=5$ min, the coffee is $-2$ degrees.', 'The coffee warms by $2$ °C each minute.', 'After $5$ minutes the coffee is $2$ °C.'],
              correctAnswer: 0,
              explanation: 'A negative rate means decreasing, so the coffee is cooling. The magnitude $2$ with units °C/min and the moment $t=5$ complete the sentence. The other options confuse a rate with a value or get the sign wrong.',
            },
            {
              question: 'If $C(x)$ is the cost in dollars to produce $x$ widgets and $C\'(100) = 7$, then $7$ means:',
              options: ['Near $100$ widgets, cost rises about \\$7 for each additional widget.', 'It costs \\$7 to make $100$ widgets.', 'Producing $100$ widgets costs \\$700.', 'Each widget sells for \\$7.'],
              correctAnswer: 0,
              explanation: 'The derivative of cost (marginal cost) is the approximate added cost of one more unit. At $x=100$, the next widget costs about \\$7 more. This is a *rate*, not a total or a selling price.',
            },
          ],
        },
      },
      {
        id: 'droc3-input',
        type: 'input-boxes' as const,
        content: `**Rates in Context** 🧮

A spherical balloon is being inflated. Its volume $V$ (in cubic centimeters) at time $t$ (seconds) satisfies $V'(4) = 30$.

**1)** At $t = 4$ s, is the volume increasing or decreasing? Type **inc** or **dec**.
**2)** By roughly how many cm³ does the volume change during the next $1$ second? *(use the rate)*
**3)** A different balloon has $V'(t) = 0$ at some instant. Its volume is momentarily constant — at that instant the rate of change is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['inc', '30', '0'],
          hint1: 'A positive derivative ($30 > 0$) means the quantity is increasing.',
          hint2: 'Rate $\\approx \\dfrac{\\Delta V}{\\Delta t}$, so over $1$ second $\\Delta V \\approx 30 \\cdot 1 = 30$ cm³.',
          hint3: 'When the derivative equals $0$, the instantaneous rate of change is $0$ — the quantity is momentarily neither rising nor falling.',
          explanation: '1) $V\'(4)=30>0 \\Rightarrow$ increasing (**inc**).  2) $\\Delta V \\approx 30\\cdot 1 = 30$ cm³.  3) $V\'=0$ means a rate of $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'derivative-as-rate-of-change',
    sections: [
      {
        id: 'droc4-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Rate of Change

**Part 4 of 7 — Motion: Position, Velocity, Acceleration**

---

> 🔑 **The classic application:** When $s(t)$ is the **position** of an object, its derivative $s'(t)$ is the **velocity** — the rate of change of position. Differentiate again and you get **acceleration**.`,
      },
      {
        id: 'droc4-pva',
        type: 'text' as const,
        content: `## The Motion Chain

$$s(t) \\;\\xrightarrow{\\;\\frac{d}{dt}\\;}\\; v(t) = s'(t) \\;\\xrightarrow{\\;\\frac{d}{dt}\\;}\\; a(t) = v'(t)$$

| Quantity | Symbol | Meaning | Typical units |
|----------|--------|---------|---------------|
| Position | $s(t)$ | where the object is | meters (m) |
| Velocity | $v(t) = s'(t)$ | rate of change of position | m/s |
| Acceleration | $a(t) = v'(t)$ | rate of change of velocity | m/s² |

**Velocity vs. speed:**
- **Velocity** is *signed*: positive = moving in the positive direction, negative = moving in the negative direction.
- **Speed** is $|v(t)|$ — always $\\ge 0$, no direction.

> 💡 **Sign of velocity tells direction.** $v(t) > 0$ → moving right/up; $v(t) < 0$ → moving left/down; $v(t) = 0$ → momentarily stopped (often a turning point).`,
      },
      {
        id: 'droc4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $s(t)$ is position, then velocity is:',
              options: ['$s\'(t)$, the derivative of position', '$s(t)$ divided by $t$', 'the second derivative $s\'\'(t)$', 'always positive'],
              correctAnswer: 0,
              explanation: 'Velocity is the *rate of change of position*, i.e. the first derivative $v(t)=s\'(t)$. Acceleration is the second derivative.',
            },
            {
              question: 'A particle has $v(3) = -5$ m/s. At $t = 3$ the particle is:',
              options: ['Moving in the negative direction at a speed of $5$ m/s', 'Speeding up', 'At rest', 'Moving in the positive direction'],
              correctAnswer: 0,
              explanation: 'A negative velocity means motion in the negative direction. Its speed is $|{-5}| = 5$ m/s. We cannot tell if it is speeding up without the acceleration.',
            },
          ],
        },
      },
      {
        id: 'droc4-worked',
        type: 'text' as const,
        content: `## Worked Example: A Thrown Ball

A ball's height (in feet) after $t$ seconds is

$$s(t) = -16t^2 + 48t + 5.$$

Its velocity is the derivative (we'll use the rule $\\frac{d}{dt}[t^n] = n t^{n-1}$):

$$v(t) = s'(t) = -32t + 48.$$

**When is the ball momentarily at rest (at its peak)?** Set $v(t) = 0$:

$$-32t + 48 = 0 \\;\\Rightarrow\\; t = \\frac{48}{32} = 1.5 \\text{ s}.$$

**Velocity at $t = 1$:** $v(1) = -32(1) + 48 = 16$ ft/s (moving **up**, since positive).

**Velocity at $t = 2$:** $v(2) = -32(2) + 48 = -16$ ft/s (moving **down**, since negative).

**Acceleration:** $a(t) = v'(t) = -32$ ft/s² (constant — gravity).

> ✅ **Check the turning point:** velocity is $+16$ before $t=1.5$ and $-16$ after, so the ball rises, stops at $t = 1.5$ s, then falls. ✓`,
      },
      {
        id: 'droc4-input',
        type: 'input-boxes' as const,
        content: `**Motion Drill** 🧮

A particle moves along a line with position $s(t) = t^2 - 6t + 8$ (meters, $t$ in seconds). Its velocity is $v(t) = s'(t) = 2t - 6$.

**1)** Find the velocity at $t = 1$: $v(1) = \\,?$ *(m/s)*
**2)** At what time is the particle momentarily at rest ($v = 0$)? $t = \\,?$ *(s)*
**3)** The acceleration is constant. $a(t) = \\,?$ *(m/s²)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-4', '3', '2'],
          hint1: '$v(1) = 2(1) - 6 = -4$ m/s (moving in the negative direction).',
          hint2: 'Set $2t - 6 = 0 \\Rightarrow t = 3$ s.',
          hint3: '$a(t) = v\'(t) = \\dfrac{d}{dt}(2t-6) = 2$ m/s².',
          explanation: '1) $v(1)=-4$ m/s.  2) $v=0$ at $t=3$ s.  3) $a=2$ m/s² (derivative of $2t-6$).',
        },
      },
      {
        id: 'droc4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Direction of Motion** 🔽

Using $v(t) = 2t - 6$ from the drill above, decide the particle's behavior.`,
        exercise: {
          dropdowns: [
            { label: 'At $t = 1$ ($v = -4$), the particle is moving:', options: ['in the negative direction', 'in the positive direction', 'not at all', 'at constant speed'] },
            { label: 'At $t = 5$ ($v = 4$), the particle is moving:', options: ['in the positive direction', 'in the negative direction', 'not at all', 'backward'] },
            { label: 'The speed at $t = 1$ is $|v|$ =', options: ['$4$ m/s', '$-4$ m/s', '$0$ m/s', '$2$ m/s'] },
          ],
          correctAnswers: ['in the negative direction', 'in the positive direction', '$4$ m/s'],
          hint1: 'Negative velocity → negative direction; positive velocity → positive direction.',
          hint2: 'At $t=5$, $v=2(5)-6=4>0$, so positive direction.',
          hint3: 'Speed is the absolute value of velocity: $|-4| = 4$ m/s.',
          explanation: 'Sign of $v$ gives direction: $v(1)=-4$ (negative dir.), $v(5)=4$ (positive dir.). Speed $=|v|=4$ m/s at $t=1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'derivative-as-rate-of-change',
    sections: [
      {
        id: 'droc5-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Rate of Change

**Part 5 of 7 — Reading Rates from Graphs & Tables**

---

> 🔑 **No formula? No problem.** The AP exam loves giving you a *graph* or a *table* and asking for a rate of change. You estimate the derivative as a slope — exactly the average-rate idea from Part 1.`,
      },
      {
        id: 'droc5-graph',
        type: 'text' as const,
        content: `## Slope on a Graph = Rate of Change

On the graph of $y = f(x)$:

- The **average** rate of change over $[a,b]$ is the **slope of the secant** line between the two points.
- The **instantaneous** rate at $x = a$ is the **slope of the tangent** line at that point.

**Reading the steepness:**

| What the graph does | What the derivative does |
|---------------------|--------------------------|
| Rising (going up) | $f'(x) > 0$ |
| Falling (going down) | $f'(x) < 0$ |
| Flat (horizontal tangent) | $f'(x) = 0$ |
| Steeper | larger $|f'(x)|$ |

> 💡 To estimate a tangent slope from a graph, pick two nearby points on the curve and compute "rise over run." The closer the points, the better the estimate.`,
      },
      {
        id: 'droc5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'At a point where the graph of $f$ has a **horizontal tangent line**, the instantaneous rate of change is:',
              options: ['$0$', 'positive', 'negative', 'undefined'],
              correctAnswer: 0,
              explanation: 'A horizontal line has slope $0$, so $f\'(x) = 0$ there. The quantity is momentarily not changing.',
            },
            {
              question: 'On an interval where $f$ is **decreasing**, the average rate of change is:',
              options: ['Negative', 'Positive', 'Zero', 'Always exactly $-1$'],
              correctAnswer: 0,
              explanation: 'Decreasing means $f(b) < f(a)$ for $a<b$, so $\\dfrac{f(b)-f(a)}{b-a}$ has a negative numerator over a positive denominator — a negative rate.',
            },
          ],
        },
      },
      {
        id: 'droc5-table',
        type: 'text' as const,
        content: `## Estimating a Rate from a Table

When only a table is given, estimate $f'(a)$ using the data points **closest** to $a$ (a symmetric pair around $a$ is best).

| $t$ (hr) | $D(t)$ = distance (mi) |
|----------|------------------------|
| $0$ | $0$ |
| $2$ | $90$ |
| $4$ | $210$ |
| $6$ | $300$ |

**Estimate $D'(4)$** using the surrounding points $t=2$ and $t=6$ (a *centered* difference):

$$D'(4) \\approx \\frac{D(6) - D(2)}{6 - 2} = \\frac{300 - 90}{4} = \\frac{210}{4} = 52.5 \\text{ mph}.$$

> 💡 The **centered** estimate (using points on both sides) is usually more accurate than a one-sided one. If only one side is available — e.g. estimating $D'(0)$ — use the nearest interval, $\\frac{D(2)-D(0)}{2} = 45$ mph.`,
      },
      {
        id: 'droc5-input',
        type: 'input-boxes' as const,
        content: `**Estimate from the Table** 🧮

Use the distance table above ($D$ in miles, $t$ in hours).

**1)** Average speed on $[0, 6]$ $= \\,?$ *(mph)*
**2)** Estimate $D'(2)$ with a centered difference using $t=0$ and $t=4$: $\\,?$ *(mph)*
**3)** Average speed on $[4, 6]$ $= \\,?$ *(mph)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['50', '52.5', '45'],
          hint1: '$\\dfrac{D(6)-D(0)}{6-0} = \\dfrac{300-0}{6} = 50$ mph.',
          hint2: 'Centered: $\\dfrac{D(4)-D(0)}{4-0} = \\dfrac{210-0}{4} = 52.5$ mph.',
          hint3: '$\\dfrac{D(6)-D(4)}{6-4} = \\dfrac{300-210}{2} = \\dfrac{90}{2} = 45$ mph.',
          explanation: '1) $\\dfrac{300}{6}=50$.  2) centered $D\'(2)\\approx\\dfrac{210-0}{4}=52.5$.  3) $\\dfrac{90}{2}=45$ mph.',
        },
      },
      {
        id: 'droc5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sign of the Rate** 🔽

A hiker's elevation $E(t)$ is graphed against time. Match each description to the sign of $E'(t)$.`,
        exercise: {
          dropdowns: [
            { label: 'While climbing uphill, $E\'(t)$ is:', options: ['positive', 'negative', 'zero', 'undefined'] },
            { label: 'While resting on flat ground, $E\'(t)$ is:', options: ['zero', 'positive', 'negative', 'increasing'] },
            { label: 'While descending, $E\'(t)$ is:', options: ['negative', 'positive', 'zero', 'constant'] },
          ],
          correctAnswers: ['positive', 'zero', 'negative'],
          hint1: 'Climbing means elevation is increasing, so the rate is positive.',
          hint2: 'Flat ground means elevation is constant, so the rate is zero.',
          hint3: 'Descending means elevation is decreasing, so the rate is negative.',
          explanation: 'Increasing elevation → $E\'>0$; constant → $E\'=0$; decreasing → $E\'<0$. The sign of the derivative reports the direction of change.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'derivative-as-rate-of-change',
    sections: [
      {
        id: 'droc6-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Rate of Change

**Part 6 of 7 — Applied Rates Everywhere**

---

> 🔑 **One idea, many fields.** "Derivative = rate of change" shows up in biology (growth), economics (marginal cost/revenue), chemistry (reaction rate), and physics. The math is identical; only the *labels* change.`,
      },
      {
        id: 'droc6-marginal',
        type: 'text' as const,
        content: `## Economics: Marginal Cost & Revenue

In economics, "**marginal**" means "the derivative of."

- **Marginal cost** $C'(x)$ ≈ the cost of producing the **next** unit.
- **Marginal revenue** $R'(x)$ ≈ the revenue from selling the **next** unit.

### Example

A factory's cost is $C(x) = 0.5x^2 + 20x + 500$ dollars for $x$ items. Its marginal cost is

$$C'(x) = x + 20.$$

At $x = 100$: $C'(100) = 120$, so the $101^{\\text{st}}$ item costs about \\$120 to make.

> 💡 Why "approximately the next unit"? Because $C'(x)=\\lim_{h\\to 0}\\frac{C(x+h)-C(x)}{h}$, and taking $h = 1$ unit gives $C(x+1)-C(x)$ — the actual cost of one more item, which the derivative closely approximates.`,
      },
      {
        id: 'droc6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A population model gives $P(t)$ in thousands, $t$ in years, with $P\'(10) = 3$. The best reading is:',
              options: ['At year $10$, the population is growing at about $3$ thousand people per year.', 'At year $10$, the population is $3$ thousand.', 'The population triples every $10$ years.', 'It takes $3$ years to add one person.'],
              correctAnswer: 0,
              explanation: '$P\'(10)=3$ is a *rate*: thousands of people per year, at the instant $t=10$. It is positive, so the population is growing.',
            },
            {
              question: 'For cost $C(x)$, the marginal cost $C\'(x)$ represents:',
              options: ['Approximately the cost of producing one more unit', 'The total cost of all units', 'The average cost per unit so far', 'The selling price'],
              correctAnswer: 0,
              explanation: 'Marginal cost is the derivative of cost — the approximate added cost of the next unit. It is not a total, an average, or a price.',
            },
          ],
        },
      },
      {
        id: 'droc6-worked',
        type: 'text' as const,
        content: `## Biology: A Growing Population

A bacteria colony has population $P(t) = 200 + 50t^2$ (cells) after $t$ hours. The growth rate is

$$P'(t) = 100t \\quad \\text{cells per hour}.$$

| $t$ (hr) | $P(t)$ (cells) | Growth rate $P'(t)$ (cells/hr) |
|----------|----------------|-------------------------------|
| $0$ | $200$ | $0$ |
| $2$ | $400$ | $200$ |
| $4$ | $1000$ | $400$ |

Notice the growth rate itself **increases** over time — the colony grows faster and faster. At $t=4$, it is gaining $400$ cells **per hour**.

> ⚠️ Don't confuse $P(t)$ (how many cells *there are*) with $P'(t)$ (how fast that number is *changing*). At $t=4$ there are $1000$ cells, growing at $400$ cells/hr.`,
      },
      {
        id: 'droc6-input',
        type: 'input-boxes' as const,
        content: `**Applied Rates** 🧮

Use $P(t) = 200 + 50t^2$ with $P'(t) = 100t$ (cells, hours), and the cost function $C(x) = 0.5x^2 + 20x + 500$ with $C'(x) = x + 20$ (dollars, items).

**1)** Population growth rate at $t = 3$: $P'(3) = \\,?$ *(cells/hr)*
**2)** Marginal cost at $x = 50$: $C'(50) = \\,?$ *(dollars)*
**3)** Number of cells present at $t = 2$: $P(2) = \\,?$ *(this is a value, not a rate!)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['300', '70', '400'],
          hint1: '$P\'(3) = 100\\cdot 3 = 300$ cells/hr.',
          hint2: '$C\'(50) = 50 + 20 = 70$ dollars for the next item.',
          hint3: '$P(2) = 200 + 50\\cdot 2^2 = 200 + 200 = 400$ cells (a quantity, not a rate).',
          explanation: '1) $P\'(3)=300$ cells/hr.  2) $C\'(50)=70$ dollars.  3) $P(2)=200+200=400$ cells — note this is the *amount*, while $P\'$ is the *rate*.',
        },
      },
      {
        id: 'droc6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Value vs. Rate** 🔽

For each statement, decide whether it describes a **value** $f(a)$ or a **rate** $f'(a)$.`,
        exercise: {
          dropdowns: [
            { label: '"The tank holds $48$ liters right now."', options: ['value $f(a)$', 'rate $f\'(a)$'] },
            { label: '"The water level is rising at $7$ liters per minute."', options: ['rate $f\'(a)$', 'value $f(a)$'] },
            { label: '"The marginal cost is \\$70 per item."', options: ['rate $f\'(a)$', 'value $f(a)$'] },
          ],
          correctAnswers: ['value $f(a)$', 'rate $f\'(a)$', 'rate $f\'(a)$'],
          hint1: 'A plain amount ("holds 48 liters") is a value $f(a)$.',
          hint2: 'Anything with "per" ("liters per minute") is a rate $f\'(a)$.',
          hint3: '"Marginal" means derivative, so marginal cost is a rate $f\'(a)$.',
          explanation: 'Amounts are values; anything expressed "per unit of input" (or labeled "marginal") is a rate of change — a derivative.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'derivative-as-rate-of-change',
    sections: [
      {
        id: 'droc7-intro',
        type: 'text' as const,
        content: `# 📈 Derivative as Rate of Change

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) compute an average rate of change, (2) reach the instantaneous rate via a limit, (3) interpret a derivative with units in context, (4) handle motion (position–velocity–acceleration), and (5) read rates from graphs and tables. Let's put it all together.`,
      },
      {
        id: 'droc7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Average rate on $[a,b]$ | $\\dfrac{f(b)-f(a)}{b-a}$ (secant slope) |
| Instantaneous rate at $a$ | $f'(a)=\\lim\\limits_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}$ (tangent slope) |
| Units of $f'$ | (output units) per (input units) |
| Velocity / acceleration | $v=s'$, $a=v'=s''$ |
| Sign of $f'$ | $+$ increasing, $-$ decreasing, $0$ flat |
| Estimate from a table | centered difference $\\dfrac{f(a+h)-f(a-h)}{2h}$ |

> ⚠️ **Top exam reminders:** always include **units**, always say whether a quantity is **increasing or decreasing**, and never confuse the **value** $f(a)$ with the **rate** $f'(a)$.`,
      },
      {
        id: 'droc7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The average rate of change of $f(x) = x^2 - 2x$ on $[1, 4]$ is:',
              options: ['$3$', '$8$', '$5$', '$\\dfrac{8}{3}$'],
              correctAnswer: 0,
              explanation: '$f(4)=16-8=8$ and $f(1)=1-2=-1$. AROC $=\\dfrac{8-(-1)}{4-1}=\\dfrac{9}{3}=3$.',
            },
            {
              question: 'A particle has position $s(t) = t^3$ (m). Given $s\'(t)=3t^2$, its velocity at $t = 2$ is:',
              options: ['$12$ m/s', '$8$ m/s', '$6$ m/s', '$4$ m/s'],
              correctAnswer: 0,
              explanation: '$v(2)=s\'(2)=3(2)^2=3\\cdot 4=12$ m/s.',
            },
          ],
        },
      },
      {
        id: 'droc7-input',
        type: 'input-boxes' as const,
        content: `**Mixed Computation** 🧮

**1)** Average rate of change of $f(x)=x^2$ on $[3, 7]$ $= \\,?$
**2)** For $s(t) = -16t^2 + 64t$ (feet), $v(t) = -32t + 64$. The object is momentarily at rest when $t = \\,?$ *(s)*
**3)** A table gives $f(2)=10$ and $f(6)=2$. The average rate of change on $[2,6]$ is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '2', '-2'],
          hint1: '$\\dfrac{49-9}{7-3}=\\dfrac{40}{4}=10$.',
          hint2: 'Set $-32t+64=0 \\Rightarrow t = \\dfrac{64}{32}=2$ s.',
          hint3: '$\\dfrac{f(6)-f(2)}{6-2}=\\dfrac{2-10}{4}=\\dfrac{-8}{4}=-2$ (negative → decreasing).',
          explanation: '1) $\\dfrac{49-9}{4}=10$.  2) $v=0$ at $t=2$ s.  3) $\\dfrac{2-10}{4}=-2$ — the function is decreasing on this interval.',
        },
      },
      {
        id: 'droc7-dropdown',
        type: 'dropdown-select' as const,
        content: `**Interpretation Round** 🔽

$R(t)$ = the amount of rainfall (in inches) collected in a gauge after $t$ hours. Choose the best completion.`,
        exercise: {
          dropdowns: [
            { label: 'The units of $R\'(t)$ are:', options: ['inches per hour', 'hours per inch', 'inches', 'hours'] },
            { label: 'If $R\'(3) = 0.4$, then at $t=3$ hr the rainfall is:', options: ['increasing at $0.4$ in/hr', 'decreasing at $0.4$ in/hr', 'exactly $0.4$ inches', 'constant'] },
            { label: 'If the rain stops, then during that period $R\'(t)$ is:', options: ['$0$', 'positive', 'negative', 'undefined'] },
          ],
          correctAnswers: ['inches per hour', 'increasing at $0.4$ in/hr', '$0$'],
          hint1: 'Output is inches, input is hours, so the rate is inches per hour.',
          hint2: '$R\'(3)=0.4>0$ means the collected amount is increasing at $0.4$ in/hr.',
          hint3: 'If no new rain falls, the collected total stops changing, so its rate of change is $0$.',
          explanation: 'Units = in/hr; $R\'(3)=0.4>0$ → increasing at $0.4$ in/hr; rain stopped → $R\'=0$ (amount momentarily constant).',
        },
      },
      {
        id: 'droc7-wrapup',
        type: 'text' as const,
        content: `## You've Got It

Across this lesson, one idea kept reappearing in different costumes — *velocity*, *marginal cost*, *growth rate*, *slope of a tangent*. Every one of them is the same object: **the derivative, a rate of change**.

> 🔑 **The one-sentence summary:** $f'(a)$ is the instantaneous rate of change of $f$ at $x = a$ — the limit of average rates, the slope of the tangent line, carrying units of (output) per (input).

One last check to lock it in.`,
      },
      {
        id: 'droc7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The average rate of change of $f(x) = 2x^2$ on $[1, 3]$ is:',
              options: ['$8$', '$4$', '$16$', '$6$'],
              correctAnswer: 0,
              explanation: '$f(3)=2(9)=18$ and $f(1)=2(1)=2$. AROC $=\\dfrac{18-2}{3-1}=\\dfrac{16}{2}=8$.',
            },
            {
              question: 'Let $V(t)$ be the volume of water (gallons) in a draining tub, $t$ in minutes, with $V\'(2) = -3$. This means:',
              options: ['At $t=2$ min, the volume is decreasing at $3$ gallons per minute.', 'At $t=2$ min, there are $3$ gallons left.', 'The tub fills at $3$ gallons per minute.', 'It takes $3$ minutes to drain the tub.'],
              correctAnswer: 0,
              explanation: 'A negative derivative means the quantity is decreasing. With units gallons/min at $t=2$, the volume falls by about $3$ gallons each minute — the tub is draining.',
            },
            {
              question: 'A particle has velocity $v(t) = 2t - 6$ (m/s). At which time is it momentarily at rest?',
              options: ['$t = 3$ s', '$t = 6$ s', '$t = -3$ s', '$t = 0$ s'],
              correctAnswer: 0,
              explanation: '"At rest" means velocity $=0$: $2t-6=0 \\Rightarrow t=3$ s. Before $t=3$ the particle moves in the negative direction; after, in the positive direction.',
            },
          ],
        },
      },
    ],
  },
]
