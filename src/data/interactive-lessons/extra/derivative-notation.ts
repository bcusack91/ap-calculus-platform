import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Derivative Notation (AP Calculus AB).
 * Registry key / DB Topic.slug: 'derivative-notation'.
 * 7 parts, gold-standard structure: why notation matters → Lagrange (prime) →
 * Leibniz → evaluating a derivative at a point → higher-order derivatives →
 * the d/dx operator & other notations (Newton/Euler) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every notation, value, and answer index was checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'derivative-notation',
    sections: [
      {
        id: 'dn1-intro',
        type: 'text' as const,
        content: `# ✏️ Derivative Notation

**Part 1 of 7 — Why So Many Symbols?**

---

### Topics in This Part

| Section |
|---------|
| What a Derivative Is (Quick Refresher) |
| The Four Families of Notation |
| Same Idea, Different Costume |

> 🔑 **Key Concept:** A derivative is a single mathematical object — the *instantaneous rate of change* of one quantity with respect to another. Mathematicians invented several ways to **write** it. Knowing all of them lets you read any textbook, exam, or lab problem fluently.`,
      },
      {
        id: 'dn1-refresher',
        type: 'text' as const,
        content: `## What a Derivative Is (Quick Refresher)

The derivative of a function $f$ measures how fast its output changes as the input changes. Formally, it is the limit of a slope:

$$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

This single number (at a given $x$) is the **slope of the tangent line** to the graph of $f$ at that point.

That value can be written **many ways** — and that is exactly what this lesson is about. For example, every expression in the table below names *the very same thing*:

| Notation | Read aloud |
|----------|------------|
| $f'(x)$ | "f prime of x" |
| $\\dfrac{dy}{dx}$ | "d y d x" |
| $\\dfrac{d}{dx}\\big[f(x)\\big]$ | "d d x of f of x" |
| $\\dot{y}$ | "y dot" |

> 💡 **Same object, different costume.** None of these is "more correct" — each is a tool that shines in a different situation.`,
      },
      {
        id: 'dn1-families',
        type: 'text' as const,
        content: `## The Four Families of Notation

Across this lesson we will master four notations, named after the people who popularized them:

| Family | Symbol for derivative of $y=f(x)$ | Best for |
|--------|-----------------------------------|----------|
| **Lagrange** (prime) | $f'(x)$, $y'$ | Compact; quick to write |
| **Leibniz** | $\\dfrac{dy}{dx}$ | Shows *which variable*; related rates |
| **Euler** (operator) | $D_x\\,y$ | Treating "differentiate" as an action |
| **Newton** (dot) | $\\dot{y}$ | Derivatives with respect to **time** (physics) |

> 🔑 **The big four.** Lagrange and Leibniz dominate AP Calculus AB. Euler and Newton show up in physics and engineering — you should at least *recognize* them.`,
      },
      {
        id: 'dn1-match',
        type: 'dropdown-select' as const,
        content: `**Match the Family** 🔽

Identify which notation family each symbol belongs to.`,
        exercise: {
          dropdowns: [
            { label: '$f\'(x)$ belongs to:', options: ['Lagrange', 'Leibniz', 'Euler', 'Newton'] },
            { label: '$\\dfrac{dy}{dx}$ belongs to:', options: ['Lagrange', 'Leibniz', 'Euler', 'Newton'] },
            { label: '$\\dot{y}$ belongs to:', options: ['Lagrange', 'Leibniz', 'Euler', 'Newton'] },
            { label: '$D_x\\,y$ belongs to:', options: ['Lagrange', 'Leibniz', 'Euler', 'Newton'] },
          ],
          correctAnswers: ['Lagrange', 'Leibniz', 'Newton', 'Euler'],
          hint1: 'The prime mark $\\,\'\\,$ is Lagrange; the fraction $\\frac{dy}{dx}$ is Leibniz.',
          hint2: 'A dot over the variable is Newton — used for time derivatives.',
          hint3: 'The capital $D$ "operator" is Euler.',
          explanation: 'Prime $= $ Lagrange, fraction $= $ Leibniz, dot $= $ Newton, capital $D = $ Euler. All four name the *same* derivative.',
        },
      },
      {
        id: 'dn1-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A derivative measures…',
              options: [
                'the instantaneous rate of change of a function',
                'the area under a curve',
                'the average value of a function',
                'the y-intercept of a line',
              ],
              correctAnswer: 0,
              explanation: 'The derivative is the instantaneous rate of change — equivalently, the slope of the tangent line. Area under a curve is the *integral*, the opposite operation.',
            },
            {
              question: 'Which two expressions denote the SAME quantity for $y = f(x)$?',
              options: [
                '$f\'(x)$ and $\\dfrac{dy}{dx}$',
                '$f\'(x)$ and $f(x)$',
                '$\\dfrac{dy}{dx}$ and $\\displaystyle\\int f(x)\\,dx$',
                '$f\'(x)$ and the area under $f$',
              ],
              correctAnswer: 0,
              explanation: 'Both $f\'(x)$ (Lagrange) and $\\frac{dy}{dx}$ (Leibniz) name the derivative of $f$. They are simply two notations for one object.',
            },
          ],
        },
      },
      {
        id: 'dn1-count',
        type: 'input-boxes' as const,
        content: `**Count the Notations** 🧮

**1)** How many notation **families** did we name (Lagrange, Leibniz, Euler, Newton)? (whole number)
**2)** Of those, how many are the AP Calculus AB favorites that "dominate" the exam? (whole number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '2'],
          hint1: 'Re-read "The Four Families of Notation" table.',
          hint2: 'There are four families total.',
          hint3: 'The two that "dominate AP Calculus AB" are Lagrange and Leibniz.',
          explanation: '1) Four families: Lagrange, Leibniz, Euler, Newton.  2) Two dominate AP Calc AB — Lagrange (prime) and Leibniz ($\\frac{dy}{dx}$).',
        },
      },
      {
        id: 'dn1-wrap',
        type: 'text' as const,
        content: `## Where We're Headed

You've met the cast of characters. The rest of the lesson takes each notation seriously:

- **Part 2:** Lagrange (prime) notation in detail.
- **Part 3:** Leibniz notation — and *why* it looks like a fraction.
- **Part 4:** Plugging in a number (evaluating a derivative at a point).
- **Part 5:** Higher-order derivatives ($f''$, $\\frac{d^2y}{dx^2}$, …).
- **Part 6:** The $\\frac{d}{dx}$ operator, plus Euler and Newton notation.
- **Part 7:** Mixed practice and an exit quiz.

> 💡 By the end you'll translate any derivative statement between notations on sight — a skill the AP exam quietly tests on nearly every free-response question.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'derivative-notation',
    sections: [
      {
        id: 'dn2-intro',
        type: 'text' as const,
        content: `# ✏️ Derivative Notation

**Part 2 of 7 — Lagrange (Prime) Notation**

---

> 🔑 **The idea:** Add a little prime mark to the function's name. $f$ becomes $f'$ — its derivative. It's the fastest derivative notation to write, which is why it's everywhere.`,
      },
      {
        id: 'dn2-prime',
        type: 'text' as const,
        content: `## The Prime Mark

If $y = f(x)$, the derivative is written

$$f'(x) \\quad\\text{or}\\quad y'$$

Read it as **"f prime of x"** or **"y prime."** The prime symbol $\\,'\\,$ is the *operation* "take the derivative."

| Function | Its derivative (Lagrange) |
|----------|---------------------------|
| $f(x) = x^2$ | $f'(x) = 2x$ |
| $g(t) = t^3$ | $g'(t) = 3t^2$ |
| $y = \\sin x$ | $y' = \\cos x$ |

> 💡 **Name follows function.** If you call the function $g$, its derivative is $g'$. If you call it $h$, the derivative is $h'$. The letter just matches whatever you named the original.`,
      },
      {
        id: 'dn2-read',
        type: 'multiple-choice' as const,
        content: `**Reading Prime Notation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How do you read $g\'(t)$ aloud?',
              options: ['"g prime of t"', '"g times t"', '"g of t prime"', '"g squared t"'],
              correctAnswer: 0,
              explanation: 'The prime attaches to the function name $g$, so it is "g prime of t" — the derivative of $g$ evaluated at $t$.',
            },
            {
              question: 'If $P(x)$ is a function, its derivative in Lagrange notation is:',
              options: ['$P\'(x)$', '$\\dfrac{dP}{dP}$', '$x\'(P)$', '$P(x)\'$ times $x$'],
              correctAnswer: 0,
              explanation: 'The prime goes on the function name: $P\'(x)$ ("P prime of x").',
            },
          ],
        },
      },
      {
        id: 'dn2-meaning',
        type: 'text' as const,
        content: `## Function vs. Derivative — Don't Mix Them Up

These look similar but mean different things:

| Symbol | Meaning |
|--------|---------|
| $f(x)$ | the **function** — the original output |
| $f'(x)$ | the **derivative** — the rate of change |
| $f(2)$ | the function's **value** at $x=2$ |
| $f'(2)$ | the derivative's **value** at $x=2$ (a slope) |

> ⚠️ **Common trap:** $f'(2)$ does **not** mean "$f'$ multiplied by $2$." It means: first find the derivative function $f'$, *then* plug in $x = 2$. We'll drill this in Part 4.`,
      },
      {
        id: 'dn2-translate',
        type: 'dropdown-select' as const,
        content: `**Translate to Prime Notation** 🔽

Each row gives a function and asks for the right way to denote its derivative.`,
        exercise: {
          dropdowns: [
            { label: 'Derivative of $f(x)$:', options: ['$f\'(x)$', '$f(x\')$', '$f\'\'(x)$', '$f(x)$'] },
            { label: 'Derivative of $h(s)$:', options: ['$h\'(s)$', '$s\'(h)$', '$h(s\')$', '$h\'(h)$'] },
            { label: 'Derivative of $y$ (no name given):', options: ['$y\'$', '$x\'$', '$y$', '$\'y$'] },
          ],
          correctAnswers: ['$f\'(x)$', '$h\'(s)$', '$y\'$'],
          hint1: 'Put the prime mark on the function name, keep the input the same.',
          hint2: 'For $h(s)$ the function is $h$ and the variable is $s$, so the derivative is $h\'(s)$.',
          hint3: 'When the function is just called $y$, its derivative is $y\'$.',
          explanation: 'The prime attaches to the function name: $f \\to f\'$, $h \\to h\'$, $y \\to y\'$. The input letter stays put.',
        },
      },
      {
        id: 'dn2-namecount',
        type: 'input-boxes' as const,
        content: `**Prime the Right Name** 🧮

Type the derivative's name (just the symbol with a prime, e.g. \`q'\`) for each function.

**1)** The derivative of $k(x)$ is written: _____ (function name with a prime, no input)
**2)** The derivative of $v(t)$ is written: _____ (function name with a prime, no input)`,
        exercise: {
          boxes: 2,
          correctAnswers: ["k'", "v'"],
          hint1: 'The prime attaches to the function name itself.',
          hint2: 'For $k(x)$ the name is $k$, so the derivative name is $k\'$.',
          hint3: 'For $v(t)$ the name is $v$, so the derivative name is $v\'$.',
          explanation: '1) $k\'$ (the derivative of $k$).  2) $v\'$ (the derivative of $v$). The prime always rides on the function name.',
        },
      },
      {
        id: 'dn2-limit',
        type: 'text' as const,
        content: `## Connecting Back to the Limit

Lagrange notation is just shorthand for the limit definition:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

So when you write $f'(x)$, you are writing the **answer** to that limit — the slope function.

> 🔑 **Takeaway:** $f'$ is itself a *new function*. Feed it an $x$-value and it returns a slope. In the next part we'll see why Leibniz notation makes that "function of a variable" idea visually explicit.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'derivative-notation',
    sections: [
      {
        id: 'dn3-intro',
        type: 'text' as const,
        content: `# ✏️ Derivative Notation

**Part 3 of 7 — Leibniz Notation**

---

> 🔑 **The idea:** Leibniz writes the derivative as $\\dfrac{dy}{dx}$ — literally "a tiny change in $y$ over a tiny change in $x$." It looks like a fraction because it *comes from* a fraction of changes.`,
      },
      {
        id: 'dn3-leibniz',
        type: 'text' as const,
        content: `## From Slope to $\\dfrac{dy}{dx}$

The slope between two points is "rise over run":

$$\\text{slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{\\text{change in } y}{\\text{change in } x}$$

As the run $\\Delta x$ shrinks toward zero, $\\dfrac{\\Delta y}{\\Delta x}$ becomes the derivative, and Leibniz renames the infinitely small changes $dy$ and $dx$:

$$\\frac{dy}{dx} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$$

Read $\\dfrac{dy}{dx}$ as **"the derivative of $y$ with respect to $x$."**

> 💡 The phrase **"with respect to $x$"** is the whole point: the *bottom* of the fraction tells you which variable you're differentiating against.`,
      },
      {
        id: 'dn3-respect',
        type: 'multiple-choice' as const,
        content: `**With Respect To What?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $\\dfrac{dy}{dx}$, which variable are you differentiating WITH RESPECT TO?',
              options: ['$x$ (the bottom)', '$y$ (the top)', 'both equally', 'neither'],
              correctAnswer: 0,
              explanation: 'The variable on the bottom ($dx$) is the one you differentiate with respect to. So $\\frac{dy}{dx}$ is "the rate of change of $y$ as $x$ changes."',
            },
            {
              question: 'A scientist writes $\\dfrac{dV}{dt}$. This represents:',
              options: [
                'the rate of change of volume with respect to time',
                'volume divided by time',
                'time as a function of volume',
                'the second derivative of volume',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{dV}{dt}$ is "the derivative of volume $V$ with respect to time $t$" — how fast the volume is changing per unit time.',
            },
          ],
        },
      },
      {
        id: 'dn3-power',
        type: 'text' as const,
        content: `## Why Leibniz Is So Useful

Because the variable is built into the symbol, Leibniz notation shines whenever **more than one variable** is in play:

| Situation | Leibniz form | In words |
|-----------|--------------|----------|
| Position vs. time | $\\dfrac{dx}{dt}$ | velocity |
| Volume vs. radius | $\\dfrac{dV}{dr}$ | how volume changes as radius grows |
| Cost vs. quantity | $\\dfrac{dC}{dq}$ | marginal cost |

This clarity is why related-rates and chain-rule problems almost always use Leibniz notation.

> ⚠️ **Not literally a fraction.** Even though $\\frac{dy}{dx}$ *looks* like a division, $dy$ and $dx$ are not separate numbers you can cancel casually. Treat it as one inseparable symbol — at least until you formally learn differentials.`,
      },
      {
        id: 'dn3-fillin',
        type: 'input-boxes' as const,
        content: `**Build the Leibniz Symbol** 🧮

For each description, the derivative is written $\\dfrac{d\\,\\square}{d\\,\\triangle}$. Type the letter that goes in each box.

**1)** Rate of change of **distance $s$** with respect to **time $t$**: top box $= \\,?$
**2)** Same derivative: bottom box $= \\,?$
**3)** Rate of change of **area $A$** with respect to **radius $r$**: bottom box $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['s', 't', 'r'],
          hint1: 'The quantity that is changing goes on TOP; the variable you change it against goes on the BOTTOM.',
          hint2: '"$s$ with respect to $t$" → top is $s$, bottom is $t$.',
          hint3: 'For "$A$ with respect to $r$," the bottom (the "with respect to" variable) is $r$.',
          explanation: '1) top $= s$.  2) bottom $= t$, giving $\\frac{ds}{dt}$ (speed).  3) bottom $= r$, giving $\\frac{dA}{dr}$. The "with respect to" variable always sits on the bottom.',
        },
      },
      {
        id: 'dn3-equiv',
        type: 'dropdown-select' as const,
        content: `**Lagrange ↔ Leibniz** 🔽

Translate between the two AP-favorite notations for $y = f(x)$.`,
        exercise: {
          dropdowns: [
            { label: '$f\'(x)$ in Leibniz notation:', options: ['$\\dfrac{dy}{dx}$', '$\\dfrac{dx}{dy}$', '$\\dfrac{df}{df}$', '$\\dfrac{dx}{dx}$'] },
            { label: '$\\dfrac{dy}{dx}$ in Lagrange notation:', options: ['$y\'$', '$x\'$', '$y$', '$dy$'] },
            { label: 'The "with respect to" variable in $\\dfrac{dy}{dx}$:', options: ['$x$', '$y$', '$d$', 'none'] },
          ],
          correctAnswers: ['$\\dfrac{dy}{dx}$', '$y\'$', '$x$'],
          hint1: 'For $y = f(x)$, the top of the Leibniz fraction is $y$ and the bottom is $x$.',
          hint2: '$\\frac{dy}{dx}$ and $y\'$ are the same derivative in different notations.',
          hint3: 'The bottom variable, $x$, is the one you differentiate with respect to.',
          explanation: 'Since $y = f(x)$: $f\'(x) = y\' = \\frac{dy}{dx}$, and you differentiate with respect to the bottom variable $x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'derivative-notation',
    sections: [
      {
        id: 'dn4-intro',
        type: 'text' as const,
        content: `# ✏️ Derivative Notation

**Part 4 of 7 — Evaluating a Derivative at a Point**

---

> 🔑 **The idea:** A derivative function tells you the slope *everywhere*. Often you want the slope at **one specific input**. Each notation has its own way to say "plug in this number."`,
      },
      {
        id: 'dn4-three-ways',
        type: 'text' as const,
        content: `## Three Ways to Say "the Slope at $x = a$"

Suppose $y = f(x)$ and you want the slope at $x = a$. All three of these mean the *same number*:

$$f'(a) \\qquad \\frac{dy}{dx}\\bigg|_{x=a} \\qquad \\frac{df}{dx}\\bigg|_{x=a}$$

| Notation | How to read it |
|----------|----------------|
| $f'(a)$ | "f prime of a" |
| $\\dfrac{dy}{dx}\\Big|_{x=a}$ | "d y d x evaluated at x equals a" |

The vertical bar $\\Big|_{x=a}$ is called an **evaluation bar**. It means: *find the derivative first, then substitute $x = a$.*

> ⚠️ **Order matters.** Differentiate **first**, substitute **second**. You can't plug in the number before taking the derivative — once you substitute, $x$ is gone and there's nothing left to differentiate.`,
      },
      {
        id: 'dn4-worked',
        type: 'text' as const,
        content: `## Worked Example

Let $f(x) = x^2$, so $f'(x) = 2x$. Find the slope at $x = 3$.

**Lagrange:**
$$f'(3) = 2(3) = 6$$

**Leibniz:**
$$\\frac{dy}{dx}\\bigg|_{x=3} = 2x \\,\\Big|_{x=3} = 2(3) = 6$$

Both give a slope of $6$ at the point where $x = 3$.

> 💡 **Read it as a recipe:** (1) take the derivative → $2x$; (2) cross the evaluation bar → substitute $x=3$; (3) simplify → $6$.`,
      },
      {
        id: 'dn4-evalcheck',
        type: 'multiple-choice' as const,
        content: `**Evaluation Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does $f\'(2)$ tell you?',
              options: [
                'the slope of $f$ at the point where $x = 2$',
                'the value of $f$ at $x = 2$',
                'the derivative function $f\'$ multiplied by $2$',
                'the area under $f$ up to $x = 2$',
              ],
              correctAnswer: 0,
              explanation: '$f\'(2)$ means: take the derivative $f\'$, then evaluate it at $x = 2$. The result is the slope of the tangent line where $x = 2$.',
            },
            {
              question: 'The symbol $\\dfrac{dy}{dx}\\Big|_{x=5}$ instructs you to:',
              options: [
                'differentiate, then substitute $x = 5$',
                'substitute $x = 5$, then differentiate',
                'divide $y$ by $5$',
                'multiply the derivative by $5$',
              ],
              correctAnswer: 0,
              explanation: 'The evaluation bar means "after differentiating, plug in $x = 5$." You must differentiate first — substituting first would leave nothing to differentiate.',
            },
          ],
        },
      },
      {
        id: 'dn4-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Derivative** 🧮

You are given the derivative function; evaluate it at the indicated point.

**1)** $f'(x) = 2x$. Find $f'(4)$.
**2)** $g'(x) = 3x^2$. Find $g'(2)$.
**3)** $y' = 6x - 1$. Find $\\dfrac{dy}{dx}\\Big|_{x=0}$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '12', '-1'],
          hint1: 'Just substitute the given $x$-value into the derivative function.',
          hint2: '$f\'(4) = 2(4) = 8$; $g\'(2) = 3(2)^2 = 3 \\cdot 4 = 12$.',
          hint3: 'For #3, plug $x = 0$ into $6x - 1$: $6(0) - 1 = -1$.',
          explanation: '1) $f\'(4) = 2(4) = 8$.  2) $g\'(2) = 3(2)^2 = 12$.  3) $6(0) - 1 = -1$. Substitute the value into the derivative — that\'s all the evaluation bar asks.',
        },
      },
      {
        id: 'dn4-order',
        type: 'dropdown-select' as const,
        content: `**Differentiate First, Then Substitute** 🔽

Given $f(x) = x^3$, walk through finding the slope at $x = 2$.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — the derivative $f\'(x)$ is:', options: ['$3x^2$', '$x^2$', '$3x$', '$2x^3$'] },
            { label: 'Step 2 — substitute $x = 2$:', options: ['$3(2)^2$', '$3(2)^3$', '$(2)^3$', '$3 \\cdot 2$'] },
            { label: 'Step 3 — the value $f\'(2)$ equals:', options: ['$12$', '$6$', '$8$', '$24$'] },
          ],
          correctAnswers: ['$3x^2$', '$3(2)^2$', '$12$'],
          hint1: 'Power rule: the derivative of $x^3$ is $3x^2$.',
          hint2: 'Substitute $x = 2$ into $3x^2$ to get $3(2)^2$.',
          hint3: '$3(2)^2 = 3 \\cdot 4 = 12$.',
          explanation: '$f\'(x) = 3x^2$, so $f\'(2) = 3(2)^2 = 3 \\cdot 4 = 12$. Differentiate first, substitute second.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'derivative-notation',
    sections: [
      {
        id: 'dn5-intro',
        type: 'text' as const,
        content: `# ✏️ Derivative Notation

**Part 5 of 7 — Higher-Order Derivatives**

---

> 🔑 **The idea:** A derivative is itself a function, so you can differentiate it again — and again. Each notation has a clean way to stack up these *higher-order* derivatives.`,
      },
      {
        id: 'dn5-stack',
        type: 'text' as const,
        content: `## Derivatives of Derivatives

Take the derivative of $f'$ and you get the **second derivative**, $f''$. Do it again for the **third derivative**, and so on.

| Order | Lagrange | Leibniz | Read aloud |
|-------|----------|---------|------------|
| 1st | $f'(x)$ | $\\dfrac{dy}{dx}$ | "f prime" |
| 2nd | $f''(x)$ | $\\dfrac{d^2y}{dx^2}$ | "f double prime" |
| 3rd | $f'''(x)$ | $\\dfrac{d^3y}{dx^3}$ | "f triple prime" |
| 4th | $f^{(4)}(x)$ | $\\dfrac{d^4y}{dx^4}$ | "f superscript four" |

> 💡 **Beyond the third**, primes get unreadable, so Lagrange switches to a number in parentheses: $f^{(4)}$, $f^{(5)}$, …. The parentheses keep it from looking like an exponent.`,
      },
      {
        id: 'dn5-leibniz-square',
        type: 'text' as const,
        content: `## Why the Exponents Sit Where They Do

The Leibniz second derivative looks strange at first:

$$\\frac{d^2 y}{dx^2}$$

Think of applying the operator $\\dfrac{d}{dx}$ **twice**:

$$\\frac{d}{dx}\\left(\\frac{d}{dx}\\, y\\right) = \\frac{d \\cdot d}{dx \\cdot dx}\\, y = \\frac{d^2 y}{dx^2}$$

- The **top** counts how many times you differentiated: $d^2$.
- The **bottom** keeps the variable with its own exponent: $dx^2$ means $(dx)^2$.

> ⚠️ **Notation trap:** $\\dfrac{d^2 y}{dx^2}$ does **not** mean "square anything." The little $2$'s just record that you differentiated **twice**. It is *not* $\\left(\\frac{dy}{dx}\\right)^2$.`,
      },
      {
        id: 'dn5-readhigher',
        type: 'multiple-choice' as const,
        content: `**Reading Higher-Order Notation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the second derivative of $y$ in Leibniz notation?',
              options: ['$\\dfrac{d^2 y}{dx^2}$', '$\\dfrac{dy^2}{dx^2}$', '$\\left(\\dfrac{dy}{dx}\\right)^2$', '$\\dfrac{2y}{2x}$'],
              correctAnswer: 0,
              explanation: 'The second derivative is $\\frac{d^2 y}{dx^2}$ — the $2$ on top counts the differentiations, and $dx^2$ means $(dx)^2$ on the bottom.',
            },
            {
              question: '$f^{(4)}(x)$ means:',
              options: [
                'the fourth derivative of $f$',
                '$f$ raised to the fourth power',
                '$f$ evaluated at $4$',
                'four times $f$',
              ],
              correctAnswer: 0,
              explanation: 'Once primes get unwieldy, Lagrange uses a parenthesized number: $f^{(4)}$ is the fourth derivative. The parentheses distinguish it from an exponent $f^4$.',
            },
            {
              question: 'Which pair denotes the SAME thing?',
              options: [
                '$f\'\'(x)$ and $\\dfrac{d^2 y}{dx^2}$',
                '$f\'\'(x)$ and $\\dfrac{dy^2}{dx}$',
                '$f^{(4)}$ and $f^4$',
                '$\\dfrac{d^2 y}{dx^2}$ and $\\left(\\dfrac{dy}{dx}\\right)^2$',
              ],
              correctAnswer: 0,
              explanation: '$f\'\'(x)$ (Lagrange) and $\\frac{d^2 y}{dx^2}$ (Leibniz) are two notations for the second derivative — the same object.',
            },
          ],
        },
      },
      {
        id: 'dn5-ordercount',
        type: 'input-boxes' as const,
        content: `**Count the Order** 🧮

Each symbol is a higher-order derivative. Enter the **order** (a whole number) — how many times you differentiated.

**1)** $\\dfrac{d^2 y}{dx^2}$ → order $= \\,?$
**2)** $f^{(5)}(x)$ → order $= \\,?$
**3)** $f'''(x)$ → order $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '5', '3'],
          hint1: 'In Leibniz, the exponent on top is the order; in Lagrange, count the primes or read the parenthesized number.',
          hint2: '$d^2$ on top means order $2$; $f^{(5)}$ means order $5$.',
          hint3: 'Three primes ($f\'\'\'$) means order $3$.',
          explanation: '1) $\\frac{d^2 y}{dx^2}$ → order $2$.  2) $f^{(5)}$ → order $5$.  3) $f\'\'\'$ (three primes) → order $3$.',
        },
      },
      {
        id: 'dn5-meaning',
        type: 'text' as const,
        content: `## What Higher Derivatives Mean

Higher-order derivatives have real interpretations, especially with motion:

| Quantity | Notation | Meaning |
|----------|----------|---------|
| Position | $s(t)$ | where an object is |
| Velocity | $s'(t) = \\dfrac{ds}{dt}$ | how fast position changes |
| Acceleration | $s''(t) = \\dfrac{d^2 s}{dt^2}$ | how fast velocity changes |

So acceleration is the **second derivative of position with respect to time**.

> 💡 On the AP exam, "concavity" is read off the **second derivative** $f''$: where $f'' > 0$ the graph curves up, where $f'' < 0$ it curves down.`,
      },
      {
        id: 'dn5-order-drill',
        type: 'dropdown-select' as const,
        content: `**Name the Order** 🔽

State which derivative (1st, 2nd, 3rd, 4th) each symbol represents.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d^3 y}{dx^3}$ is the:', options: ['1st', '2nd', '3rd', '4th'] },
            { label: '$f\'\'(x)$ is the:', options: ['1st', '2nd', '3rd', '4th'] },
            { label: '$f^{(4)}(x)$ is the:', options: ['1st', '2nd', '3rd', '4th'] },
            { label: '$\\dfrac{dy}{dx}$ is the:', options: ['1st', '2nd', '3rd', '4th'] },
          ],
          correctAnswers: ['3rd', '2nd', '4th', '1st'],
          hint1: 'In Leibniz, the exponent on top counts the order; in Lagrange, count the primes.',
          hint2: '$d^3$ on top means 3rd; two primes ($f\'\'$) means 2nd.',
          hint3: '$f^{(4)}$ means 4th; a plain $\\frac{dy}{dx}$ (no exponent) is the 1st.',
          explanation: 'Order from the top exponent or the number of primes: $d^3 \\to$ 3rd, $f\'\' \\to$ 2nd, $f^{(4)} \\to$ 4th, $\\frac{dy}{dx} \\to$ 1st.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'derivative-notation',
    sections: [
      {
        id: 'dn6-intro',
        type: 'text' as const,
        content: `# ✏️ Derivative Notation

**Part 6 of 7 — The Operator $\\dfrac{d}{dx}$, Plus Euler & Newton**

---

> 🔑 **The idea:** Sometimes you want to write "differentiate *this expression*" without naming a function first. The operator $\\dfrac{d}{dx}[\\;\\cdot\\;]$ does exactly that — and Euler and Newton offer two more shorthands.`,
      },
      {
        id: 'dn6-operator',
        type: 'text' as const,
        content: `## The $\\dfrac{d}{dx}$ Operator

By itself, $\\dfrac{d}{dx}$ is an **instruction**: "take the derivative, with respect to $x$, of whatever is in the brackets."

$$\\frac{d}{dx}\\big[\\,x^2\\,\\big] = 2x \\qquad \\frac{d}{dx}\\big[\\,\\sin x\\,\\big] = \\cos x$$

Notice there's no function *name* — you act directly on the expression. This is perfect for stating rules:

$$\\frac{d}{dx}\\big[\\,x^n\\,\\big] = n\\,x^{n-1} \\quad\\text{(the power rule)}$$

> 💡 **$\\dfrac{d}{dx}$ vs. $\\dfrac{dy}{dx}$:** the operator $\\dfrac{d}{dx}[\\;]$ is *waiting* for something to act on; $\\dfrac{dy}{dx}$ already has $y$ on top, so it's a finished derivative.`,
      },
      {
        id: 'dn6-operatorcheck',
        type: 'multiple-choice' as const,
        content: `**Operator Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does $\\dfrac{d}{dx}\\big[\\,x^2\\,\\big]$ represent?',
              options: [
                'the derivative of $x^2$ with respect to $x$',
                '$x^2$ divided by $dx$',
                '$x^2$ evaluated at $d$',
                'a constant times $x^2$',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{d}{dx}[\\,\\cdot\\,]$ is the operator "differentiate with respect to $x$," so $\\frac{d}{dx}[x^2] = 2x$.',
            },
            {
              question: 'How is $\\dfrac{d}{dx}$ different from $\\dfrac{dy}{dx}$?',
              options: [
                '$\\dfrac{d}{dx}$ needs an expression to act on; $\\dfrac{dy}{dx}$ is already a complete derivative',
                'they are exactly identical',
                '$\\dfrac{d}{dx}$ is an integral',
                '$\\dfrac{dy}{dx}$ is an instruction with nothing to act on',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{d}{dx}$ is an operator awaiting input (you write something in brackets), while $\\frac{dy}{dx}$ already has $y$ on top and is a finished derivative.',
            },
          ],
        },
      },
      {
        id: 'dn6-euler-newton',
        type: 'text' as const,
        content: `## Euler and Newton Notation

Two more notations round out the family:

**Euler (operator) notation** uses a capital $D$:

$$D_x\\, f \\quad\\text{or}\\quad D\\,f \\;=\\; f'$$

The subscript shows the variable, just like the bottom of a Leibniz fraction. You'll meet $D$ in differential-equations and linear-algebra courses.

**Newton (dot) notation** puts a dot over the variable and is reserved for **derivatives with respect to time**:

$$\\dot{y} = \\frac{dy}{dt}, \\qquad \\ddot{y} = \\frac{d^2 y}{dt^2}$$

One dot = first time-derivative (velocity), two dots = second (acceleration). Physicists love it.

| Notation | First derivative | Second derivative |
|----------|------------------|-------------------|
| Newton | $\\dot{y}$ | $\\ddot{y}$ |
| Euler | $D_x\\,y$ | $D_x^{\\,2}\\,y$ |

> ⚠️ **Newton is time-only.** A dot specifically means "with respect to $t$." Don't use $\\dot{y}$ for a derivative with respect to $x$.`,
      },
      {
        id: 'dn6-allmatch',
        type: 'dropdown-select' as const,
        content: `**One Derivative, Four Notations** 🔽

For the first derivative of $y = f(x)$ (with respect to $x$, or time where noted), pick the matching symbol.`,
        exercise: {
          dropdowns: [
            { label: 'Lagrange first derivative:', options: ['$f\'(x)$', '$\\dfrac{dy}{dx}$', '$D_x\\,y$', '$\\dot{y}$'] },
            { label: 'Leibniz first derivative:', options: ['$\\dfrac{dy}{dx}$', '$f\'(x)$', '$D_x\\,y$', '$\\dot{y}$'] },
            { label: 'Euler first derivative:', options: ['$D_x\\,y$', '$f\'(x)$', '$\\dfrac{dy}{dx}$', '$\\dot{y}$'] },
            { label: 'Newton (time) first derivative:', options: ['$\\dot{y}$', '$f\'(x)$', '$\\dfrac{dy}{dx}$', '$D_x\\,y$'] },
          ],
          correctAnswers: ['$f\'(x)$', '$\\dfrac{dy}{dx}$', '$D_x\\,y$', '$\\dot{y}$'],
          hint1: 'Prime $\\to$ Lagrange; fraction $\\to$ Leibniz.',
          hint2: 'Capital $D \\to$ Euler; dot over the variable $\\to$ Newton.',
          hint3: 'Each family has its signature mark: $\\,\'\\,$, $\\frac{\\;}{\\;}$, $D$, and the dot.',
          explanation: 'All four — $f\'(x)$, $\\frac{dy}{dx}$, $D_x\\,y$, and $\\dot{y}$ — name the same first derivative; only the symbol changes.',
        },
      },
      {
        id: 'dn6-newton-order',
        type: 'multiple-choice' as const,
        content: `**Newton Notation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In Newton notation, what does $\\ddot{x}$ (two dots) represent for position $x(t)$?',
              options: [
                'acceleration (the second time-derivative)',
                'velocity (the first time-derivative)',
                'position itself',
                'distance squared',
              ],
              correctAnswer: 0,
              explanation: 'Two dots = second derivative with respect to time. For position $x(t)$, $\\ddot{x} = \\frac{d^2 x}{dt^2}$ is acceleration.',
            },
            {
              question: 'A dot in Newton notation always means a derivative with respect to:',
              options: ['time $t$', 'the variable $x$', 'any variable you choose', 'the function name'],
              correctAnswer: 0,
              explanation: 'Newton (dot) notation is reserved for time derivatives: $\\dot{y} = \\frac{dy}{dt}$. That\'s why it\'s a physics favorite.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'derivative-notation',
    sections: [
      {
        id: 'dn7-intro',
        type: 'text' as const,
        content: `# ✏️ Derivative Notation

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) name the four notation families, (2) translate between Lagrange and Leibniz, (3) evaluate a derivative at a point, (4) read higher-order derivatives, and (5) recognize the $\\frac{d}{dx}$ operator plus Euler and Newton. Let's put it all together.`,
      },
      {
        id: 'dn7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| You want to… | Notation |
|--------------|----------|
| Write a derivative compactly | $f'(x)$ or $y'$ |
| Show the variable / "with respect to" | $\\dfrac{dy}{dx}$ |
| State the slope at $x = a$ | $f'(a)$ or $\\dfrac{dy}{dx}\\Big|_{x=a}$ |
| Write the $n$th derivative | $f^{(n)}(x)$ or $\\dfrac{d^n y}{dx^n}$ |
| Say "differentiate this expression" | $\\dfrac{d}{dx}\\big[\\;\\cdot\\;\\big]$ |
| Differentiate with respect to time | $\\dot{y}$ (Newton) |

> ⚠️ **Three traps to avoid:** (1) $f'(2)$ means evaluate, not multiply; (2) $\\dfrac{d^2 y}{dx^2}$ counts *two derivatives*, it is **not** a square; (3) differentiate **before** you substitute a number.`,
      },
      {
        id: 'dn7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is NOT a notation for the first derivative of $y = f(x)$ with respect to $x$?',
              options: ['$\\displaystyle\\int f(x)\\,dx$', '$f\'(x)$', '$\\dfrac{dy}{dx}$', '$D_x\\,y$'],
              correctAnswer: 0,
              explanation: '$\\int f(x)\\,dx$ is the *integral* (antiderivative), the opposite operation. The other three all denote the first derivative.',
            },
            {
              question: 'Given $f(x) = x^2$ so $f\'(x) = 2x$, what is $\\dfrac{dy}{dx}\\Big|_{x=5}$?',
              options: ['$10$', '$25$', '$2$', '$7$'],
              correctAnswer: 0,
              explanation: 'Differentiate to get $2x$, then evaluate at $x = 5$: $2(5) = 10$.',
            },
            {
              question: 'The Leibniz notation for the third derivative of $y$ is:',
              options: ['$\\dfrac{d^3 y}{dx^3}$', '$\\dfrac{dy^3}{dx^3}$', '$\\left(\\dfrac{dy}{dx}\\right)^3$', '$\\dfrac{d^3}{dx}\\,y$'],
              correctAnswer: 0,
              explanation: 'The third derivative is $\\frac{d^3 y}{dx^3}$: the $3$ on top counts the differentiations, and $dx^3$ means $(dx)^3$.',
            },
          ],
        },
      },
      {
        id: 'dn7-translate-drill',
        type: 'dropdown-select' as const,
        content: `**Full Translation** 🔽

Translate each statement into the requested notation. Throughout, $y = f(x)$.`,
        exercise: {
          dropdowns: [
            { label: '"f double prime of x" in Leibniz:', options: ['$\\dfrac{d^2 y}{dx^2}$', '$\\dfrac{dy}{dx}$', '$f^{(2)}$', '$\\dfrac{d^2}{dx}$'] },
            { label: 'Slope of $f$ at $x = 1$ in Lagrange:', options: ['$f\'(1)$', '$f(1)$', '$f\'\'(1)$', '$\\dfrac{d}{dx}f$'] },
            { label: '"Differentiate $\\cos x$ with respect to $x$" as an operator:', options: ['$\\dfrac{d}{dx}\\big[\\cos x\\big]$', '$\\dfrac{d(\\cos x)}{d(\\cos x)}$', '$\\dot{\\cos x}$', '$D_t\\cos x$'] },
          ],
          correctAnswers: ['$\\dfrac{d^2 y}{dx^2}$', '$f\'(1)$', '$\\dfrac{d}{dx}\\big[\\cos x\\big]$'],
          hint1: '"Double prime" = second derivative; in Leibniz that\'s $\\frac{d^2 y}{dx^2}$.',
          hint2: 'Slope at $x = 1$ in Lagrange is $f\'(1)$ — derivative first, then evaluate.',
          hint3: 'The operator $\\frac{d}{dx}[\\;\\cdot\\;]$ takes the expression in brackets.',
          explanation: 'Second derivative $\\to \\frac{d^2 y}{dx^2}$; slope at a point $\\to f\'(1)$; "differentiate this expression" $\\to \\frac{d}{dx}[\\cos x]$.',
        },
      },
      {
        id: 'dn7-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate & Identify** 🧮

**1)** $f'(x) = 4x - 3$. Find $f'(2)$.
**2)** $g'(x) = 3x^2$. Find $g'(1)$.
**3)** How many derivatives does $\\dfrac{d^4 y}{dx^4}$ represent? (Enter a whole number.)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '3', '4'],
          hint1: 'For #1 and #2, substitute the $x$-value into the derivative.',
          hint2: '$f\'(2) = 4(2) - 3 = 8 - 3$; $g\'(1) = 3(1)^2$.',
          hint3: 'The exponent on top of a Leibniz derivative is the order — how many times you differentiated.',
          explanation: '1) $f\'(2) = 4(2) - 3 = 5$.  2) $g\'(1) = 3(1)^2 = 3$.  3) $\\frac{d^4 y}{dx^4}$ is the 4th derivative, so the answer is $4$.',
        },
      },
      {
        id: 'dn7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'In the symbol $\\dfrac{dy}{dx}$, the variable on the bottom tells you:',
              options: [
                'which variable you are differentiating with respect to',
                'the value of the slope',
                'the order of the derivative',
                'the function\'s name',
              ],
              correctAnswer: 0,
              explanation: 'The bottom variable is the "with respect to" variable: $\\frac{dy}{dx}$ differentiates $y$ with respect to $x$.',
            },
            {
              question: 'Which expression does NOT equal the others (for $y = f(x)$)?',
              options: ['$f(x)$', '$f\'(x)$', '$\\dfrac{dy}{dx}$', '$D_x\\,y$'],
              correctAnswer: 0,
              explanation: '$f(x)$ is the original function — not a derivative. The other three ($f\'(x)$, $\\frac{dy}{dx}$, $D_x\\,y$) are all the first derivative.',
            },
            {
              question: 'Given $s(t) = t^2$ with $s\'(t) = 2t$, the velocity at $t = 3$, written $s\'(3)$, equals:',
              options: ['$6$', '$9$', '$2$', '$3$'],
              correctAnswer: 0,
              explanation: 'Velocity is the first derivative of position: $s\'(t) = 2t$, so $s\'(3) = 2(3) = 6$. Differentiate first, then substitute $t = 3$.',
            },
          ],
        },
      },
    ],
  },
]
