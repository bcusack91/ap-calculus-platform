import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Derivatives of Exponential Functions (AP Calculus AB).
 * Registry key / DB Topic.slug: 'derivatives-of-exponential-functions'.
 * 7 parts, gold-standard structure: foundations → the special role of e →
 * general base a^x → chain rule with exponentials → applications/growth →
 * common pitfalls → mixed practice + exit quiz. LaTeX uses doubled backslashes
 * (template-literal strings). Every interactive check has a real explanation;
 * input-boxes/dropdowns supply hint1/hint2/hint3.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'derivatives-of-exponential-functions',
    sections: [
      {
        id: 'dexp1-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Exponential Functions

**Part 1 of 7 — Why Exponentials Are Special**

---

### Topics in This Part

| Section |
|---------|
| What Makes $a^x$ Different from $x^n$ |
| The Self-Replicating Slope |
| Reading Growth from a Graph |

> 🔑 **Key Concept:** An exponential function $f(x) = a^x$ has a variable in the *exponent*, not the base. The power rule $\\frac{d}{dx}x^n = nx^{n-1}$ does **not** apply — exponentials obey a completely different (and beautiful) rule.`,
      },
      {
        id: 'dexp1-vs-power',
        type: 'text' as const,
        content: `## Exponential vs. Power Functions

It is easy to confuse these two forms. The difference is *where the variable lives*.

| Type | Form | Example | Variable is in the… |
|------|------|---------|---------------------|
| Power function | $x^n$ | $x^3$ | base |
| Exponential function | $a^x$ | $2^x$ | exponent |

For a **power function** you use the power rule:
$$\\frac{d}{dx}\\,x^3 = 3x^2$$

For an **exponential function** the power rule is wrong. You cannot "bring down the exponent" because the exponent is the variable. We need a new rule, which Part 2 develops.

> ⚠️ **Watch Out:** $\\dfrac{d}{dx}\\,2^x \\ne x\\cdot 2^{x-1}$. That is the power rule applied illegally. The correct derivative involves a natural-log factor — coming soon.`,
      },
      {
        id: 'dexp1-classify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is an exponential function?',
              options: ['$f(x) = x^5$', '$f(x) = 5^x$', '$f(x) = x^{1/2}$', '$f(x) = 5x$'],
              correctAnswer: 1,
              explanation: 'In $5^x$ the variable $x$ sits in the exponent over a constant base — that is exponential. $x^5$ and $x^{1/2}$ are power functions, and $5x$ is linear.',
            },
            {
              question: 'Why does the power rule fail for $3^x$?',
              options: [
                'Because $3$ is not a whole number power',
                'Because the variable is in the exponent, not the base',
                'Because $3^x$ is not differentiable',
                'Because the power rule only works for negative exponents',
              ],
              correctAnswer: 1,
              explanation: 'The power rule $\\frac{d}{dx}x^n = nx^{n-1}$ requires a constant exponent $n$. In $3^x$ the exponent is the variable, so the rule does not apply.',
            },
          ],
        },
      },
      {
        id: 'dexp1-self-slope',
        type: 'text' as const,
        content: `## The Self-Replicating Slope

Here is the single most important fact about exponentials. Consider $f(x) = a^x$ and look at how its slope behaves.

Using the limit definition with $f(x) = a^x$:

$$f'(x) = \\lim_{h \\to 0} \\frac{a^{x+h} - a^x}{h} = \\lim_{h \\to 0} \\frac{a^x\\,a^{h} - a^x}{h} = a^x \\cdot \\underbrace{\\lim_{h \\to 0} \\frac{a^{h} - 1}{h}}_{\\text{a constant!}}$$

Because $a^x$ factors out, the derivative is just $a^x$ **times a constant** that depends only on the base $a$:

$$\\frac{d}{dx}\\,a^x = a^x \\cdot k_a, \\qquad k_a = \\lim_{h \\to 0}\\frac{a^h - 1}{h}$$

> 🔑 **The Big Idea:** The derivative of an exponential is *a constant multiple of itself*. No other elementary function does this. The whole subject is about pinning down that constant $k_a$ — which Part 2 reveals is exactly $\\ln a$.`,
      },
      {
        id: 'dexp1-slope-table',
        type: 'input-boxes' as const,
        content: `**Read the Self-Replicating Slope** 🧮

The table below tracks a hypothetical exponential whose slope equals its value (like $e^x$). Use that property — *slope = value* — to fill the blanks.

| $x$ | value | slope |
|-----|-------|-------|
| $0$ | $1$ | **(1)** |
| $1$ | $4$ | **(2)** |
| $2$ | $9$ | **(3)** |`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '4', '9'],
          hint1: 'The defining property is "slope equals value," so the slope column copies the value column.',
          hint2: 'At $x=1$ the value is $4$, so the slope is also $4$.',
          hint3: 'At $x=2$ the value is $9$, so the slope is also $9$.',
          explanation: 'For an exponential, the slope at each point equals the function value there. So the slopes are $1$, $4$, $9$ — identical to the values.',
        },
      },
      {
        id: 'dexp1-structure-recap',
        type: 'text' as const,
        content: `## Naming the Pieces

Before we hunt down the mystery constant, lock in the structure you just discovered. The derivative of $a^x$ has three ingredients:

1. The original function $a^x$ (it reappears unchanged).
2. A constant factor that does **not** depend on $x$.
3. That constant depends **only** on the base $a$.

The next check makes sure each piece is in the right slot.`,
      },
      {
        id: 'dexp1-constant',
        type: 'dropdown-select' as const,
        content: `**Match the Structure** 🔽

Fill in the structure of the exponential derivative based on Part 1.`,
        exercise: {
          dropdowns: [
            { label: 'In $a^x$, the variable is in the…', options: ['base', 'exponent', 'coefficient', 'denominator'] },
            { label: 'The derivative of $a^x$ is a constant times…', options: ['$x^a$', '$a^x$ itself', '$\\ln x$', '$a^{x-1}$'] },
            { label: 'That constant depends only on…', options: ['the value of $x$', 'the base $a$', 'the exponent', 'nothing — it is always $1$'] },
          ],
          correctAnswers: ['exponent', '$a^x$ itself', 'the base $a$'],
          hint1: 'Exponential means the variable is up high, in the exponent.',
          hint2: 'The limit work showed $a^x$ factors out, so the derivative is a multiple of $a^x$.',
          hint3: 'The leftover limit $\\lim_{h\\to 0}\\frac{a^h-1}{h}$ has no $x$ in it — it depends only on $a$.',
          explanation: 'For $a^x$: variable in the exponent, derivative is (constant)$\\cdot a^x$, and the constant depends only on the base $a$. That constant turns out to be $\\ln a$.',
        },
      },
      {
        id: 'dexp1-wrap',
        type: 'text' as const,
        content: `## Where We Are Headed

You now know the defining feature of exponentials: **their slope is proportional to their value.** This is why they model population, money, and radioactive decay — the rate of change tracks the current amount.

In Part 2 we choose the *one special base* that makes the proportionality constant equal to exactly $1$. That base is **Euler's number $e$**, and it makes $e^x$ its own derivative.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'derivatives-of-exponential-functions',
    sections: [
      {
        id: 'dexp2-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Exponential Functions

**Part 2 of 7 — The Natural Base $e$**

---

> 🔑 **The Idea:** Among all exponential functions, exactly one has slope-equals-value at every point. Its base is $e \\approx 2.71828$, and it gives the cleanest derivative in all of calculus.`,
      },
      {
        id: 'dexp2-e-rule',
        type: 'text' as const,
        content: `## The Rule You Must Memorize

$$\\boxed{\\frac{d}{dx}\\,e^x = e^x}$$

The function $e^x$ is **its own derivative**. The constant $k_a$ from Part 1 equals exactly $1$ when $a = e$.

That means the slope of $y = e^x$ at any point equals the $y$-value there:

| Point on $y = e^x$ | $y$-value | Slope $y' = e^x$ |
|--------------------|-----------|------------------|
| $x = 0$ | $e^0 = 1$ | $1$ |
| $x = 1$ | $e^1 \\approx 2.718$ | $\\approx 2.718$ |
| $x = 2$ | $e^2 \\approx 7.389$ | $\\approx 7.389$ |

> 💡 At $x = 0$ the tangent line to $y = e^x$ has slope exactly $1$ and passes through $(0, 1)$, so it is $y = x + 1$.`,
      },
      {
        id: 'dexp2-quick',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\dfrac{d}{dx}\\,e^x = $',
              options: ['$x\\,e^{x-1}$', '$e^x$', '$\\dfrac{e^x}{x}$', '$e^{x}\\ln x$'],
              correctAnswer: 1,
              explanation: '$e^x$ is its own derivative: $\\frac{d}{dx}e^x = e^x$. There is no extra factor.',
            },
            {
              question: 'The slope of $y = e^x$ at the point where $x = 3$ is:',
              options: ['$3$', '$e^3$', '$3e^2$', '$e^2$'],
              correctAnswer: 1,
              explanation: 'Since $y\' = e^x$, the slope at $x=3$ equals $e^3 \\approx 20.09$ — the same as the $y$-value there.',
            },
          ],
        },
      },
      {
        id: 'dexp2-with-coeff',
        type: 'text' as const,
        content: `## Constant Multiples and Sums

The constant-multiple and sum rules work exactly as you expect.

**Constant out front:**
$$\\frac{d}{dx}\\left(5e^x\\right) = 5e^x$$

**Sum and difference:**
$$\\frac{d}{dx}\\left(e^x + x^4\\right) = e^x + 4x^3$$

The $e^x$ term differentiates to itself; the $x^4$ term uses the ordinary power rule.

**Watch the constant term:** a plain constant like $e$ (no $x$) is just a number, so its derivative is $0$.
$$\\frac{d}{dx}\\left(e^x + e\\right) = e^x + 0 = e^x$$

> ⚠️ **Don't confuse $e^x$ with $e$.** $e \\approx 2.718$ is a *constant* (derivative $0$). $e^x$ is a *function* (derivative $e^x$).`,
      },
      {
        id: 'dexp2-drill',
        type: 'input-boxes' as const,
        content: `**Differentiate** 🧮

Find each derivative. Enter the coefficient or value requested.

**1)** $\\dfrac{d}{dx}(7e^x)$. The result is $\\;?\\;\\cdot e^x$. Enter the number $?$.
**2)** $\\dfrac{d}{dx}(e^x + x^2)$ at $x = 0$ equals $?$  *(use $e^0 = 1$)*
**3)** $\\dfrac{d}{dx}(e^x - 10)$ at $x = 0$ equals $?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '1', '1'],
          hint1: 'The constant multiple stays out front unchanged: $\\frac{d}{dx}(7e^x) = 7e^x$.',
          hint2: '$\\frac{d}{dx}(e^x + x^2) = e^x + 2x$. At $x=0$: $e^0 + 2(0) = 1 + 0 = 1$.',
          hint3: 'The $-10$ is a constant, derivative $0$. So $\\frac{d}{dx}(e^x - 10) = e^x$; at $x=0$ that is $e^0 = 1$.',
          explanation: '1) coefficient $7$.  2) $e^x + 2x$ at $0$ is $1$.  3) $e^x$ at $0$ is $1$. Constants drop out; the $e^x$ term is unchanged.',
        },
      },
      {
        id: 'dexp2-function-vs-constant',
        type: 'text' as const,
        content: `## Function or Constant? Decide Before You Differentiate

The fastest points are lost by treating a constant as a function (or vice versa). Train your eye:

- $e^x$, $e^{2x}$, $3e^x$ — these have an $x$ in the exponent, so they are **functions** (nonzero derivative).
- $e$, $e^2$, $\\ln 5$, $\\pi$ — no variable at all, so they are **constants** (derivative $0$).

> 💡 Ask one question: *"Is there an $x$ anywhere?"* No $x$ means the derivative is $0$.`,
      },
      {
        id: 'dexp2-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Function or Constant?** 🔽

Decide each term's derivative.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{d}{dx}(e^x) =$', options: ['$e^x$', '$0$', '$1$', '$xe^{x-1}$'] },
            { label: '$\\frac{d}{dx}(e) =$', options: ['$e$', '$0$', '$1$', '$e^x$'] },
            { label: '$\\frac{d}{dx}(e^2) =$', options: ['$2e$', '$0$', '$e^2$', '$2e^2$'] },
          ],
          correctAnswers: ['$e^x$', '$0$', '$0$'],
          hint1: '$e^x$ has $x$ in the exponent, so it is a function — its derivative is $e^x$.',
          hint2: '$e \\approx 2.718$ is just a number with no $x$, so its derivative is $0$.',
          hint3: '$e^2 \\approx 7.389$ is also a constant (no $x$), so its derivative is $0$.',
          explanation: 'Only $e^x$ contains a variable, so only it has a nonzero derivative ($e^x$). Both $e$ and $e^2$ are plain numbers, derivative $0$.',
        },
      },
      {
        id: 'dexp2-wrap',
        type: 'text' as const,
        content: `## Key Takeaway

$$\\frac{d}{dx}\\,e^x = e^x \\qquad\\text{and}\\qquad \\frac{d}{dx}\\,c\\,e^x = c\\,e^x$$

The natural exponential is the backbone of the topic. But what about bases that *aren't* $e$, like $2^x$ or $10^x$? Part 3 handles the general case using $\\ln a$.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'derivatives-of-exponential-functions',
    sections: [
      {
        id: 'dexp3-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Exponential Functions

**Part 3 of 7 — General Base: $\\frac{d}{dx}a^x = a^x \\ln a$**

---

> 🔑 **The Idea:** Every exponential can be rewritten with base $e$. Doing so reveals the missing constant from Part 1: it is $\\ln a$, the natural log of the base.`,
      },
      {
        id: 'dexp3-derive',
        type: 'text' as const,
        content: `## Where the $\\ln a$ Comes From

Any positive base can be written as a power of $e$, because $a = e^{\\ln a}$. Therefore:

$$a^x = \\left(e^{\\ln a}\\right)^x = e^{(\\ln a)\\,x}$$

Differentiating $e^{(\\ln a)x}$ (the exponent is a constant times $x$) brings down that constant:

$$\\frac{d}{dx}\\,a^x = e^{(\\ln a)x}\\cdot \\ln a = a^x \\ln a$$

$$\\boxed{\\frac{d}{dx}\\,a^x = a^x \\ln a}$$

### A Quick Sanity Check

When $a = e$, we get $\\ln e = 1$, so $\\frac{d}{dx}e^x = e^x \\cdot 1 = e^x$ — exactly the Part 2 rule. The general rule *contains* the special one.

| Function | Derivative | Numeric factor |
|----------|------------|----------------|
| $2^x$ | $2^x \\ln 2$ | $\\ln 2 \\approx 0.693$ |
| $10^x$ | $10^x \\ln 10$ | $\\ln 10 \\approx 2.303$ |
| $e^x$ | $e^x \\ln e = e^x$ | $\\ln e = 1$ |`,
      },
      {
        id: 'dexp3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\dfrac{d}{dx}\\,2^x = $',
              options: ['$x\\,2^{x-1}$', '$2^x$', '$2^x \\ln 2$', '$2^x \\ln x$'],
              correctAnswer: 2,
              explanation: 'General rule: $\\frac{d}{dx}a^x = a^x \\ln a$. With $a = 2$ this is $2^x \\ln 2$.',
            },
            {
              question: 'For which base $a$ does $\\frac{d}{dx}a^x = a^x$ exactly (no extra factor)?',
              options: ['$a = 1$', '$a = 10$', '$a = e$', '$a = 2$'],
              correctAnswer: 2,
              explanation: 'The extra factor is $\\ln a$. It equals $1$ only when $a = e$, since $\\ln e = 1$. That is what makes $e$ the "natural" base.',
            },
          ],
        },
      },
      {
        id: 'dexp3-pattern',
        type: 'text' as const,
        content: `## The Two-Piece Pattern

Every general-base derivative is just **the function times its log factor**:

$$\\frac{d}{dx}\\,a^x = \\underbrace{a^x}_{\\text{unchanged}}\\;\\cdot\\;\\underbrace{\\ln a}_{\\text{log of base}}$$

The exponential never changes — only a single $\\ln a$ tags along. Lock in that log factor in the next check.`,
      },
      {
        id: 'dexp3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Derivative** 🔽

Each exponential's derivative is (the function) $\\times$ (the log factor). Pick the correct factor.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{d}{dx}\\,3^x = 3^x \\cdot$', options: ['$\\ln 3$', '$3$', '$x$', '$\\ln x$'] },
            { label: '$\\frac{d}{dx}\\,5^x = 5^x \\cdot$', options: ['$5$', '$\\ln 5$', '$\\log 5$', '$x\\ln 5$'] },
            { label: '$\\frac{d}{dx}\\,e^x = e^x \\cdot$', options: ['$\\ln e$', '$e$', '$x$', '$0$'] },
          ],
          correctAnswers: ['$\\ln 3$', '$\\ln 5$', '$\\ln e$'],
          hint1: 'The factor is always the natural log of the base, $\\ln a$.',
          hint2: 'For base $5$, the factor is $\\ln 5$ (natural log, not $\\log_{10}$).',
          hint3: 'For base $e$, the factor is $\\ln e = 1$, which is why $e^x$ is its own derivative.',
          explanation: 'Each is $a^x \\ln a$: $3^x\\ln 3$, $5^x\\ln 5$, and $e^x\\ln e = e^x$. The log factor is the natural log of the base.',
        },
      },
      {
        id: 'dexp3-evaluate',
        type: 'text' as const,
        content: `## Evaluating at a Point

To find a slope, plug the $x$-value into the derivative.

### Example: slope of $y = 2^x$ at $x = 3$

$$y' = 2^x \\ln 2 \\;\\Rightarrow\\; y'(3) = 2^3 \\ln 2 = 8\\ln 2 \\approx 8(0.693) \\approx 5.55$$

### Example: derivative of $y = 4\\cdot 3^x$

The constant multiple rides along:
$$y' = 4\\cdot 3^x \\ln 3$$

> 💡 Leave answers in exact form like $8\\ln 2$ unless a decimal is asked for — exact form is preferred on the AP exam.`,
      },
      {
        id: 'dexp3-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Factor** 🧮

Each derivative has the form $a^x \\ln a$ (possibly with a coefficient). Answer what is asked.

**1)** $\\dfrac{d}{dx}\\,7^x = 7^x \\ln(\\,?\\,)$. Enter the number inside the log.
**2)** $\\dfrac{d}{dx}\\,10^x$ evaluated at $x = 0$ equals $\\ln(\\,?\\,)$. Enter the number.  *(use $10^0 = 1$)*
**3)** $\\dfrac{d}{dx}(6\\cdot 2^x) = ?\\cdot 2^x \\ln 2$. Enter the leading number $?$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '10', '6'],
          hint1: 'The log factor is the natural log of the base, so for $7^x$ it is $\\ln 7$.',
          hint2: '$\\frac{d}{dx}10^x = 10^x \\ln 10$. At $x=0$: $10^0\\ln 10 = 1\\cdot\\ln 10 = \\ln 10$, so the number is $10$.',
          hint3: 'The constant $6$ stays out front: $\\frac{d}{dx}(6\\cdot 2^x) = 6\\cdot 2^x \\ln 2$.',
          explanation: '1) base is $7$, factor $\\ln 7$.  2) $10^x\\ln 10$ at $0$ is $\\ln 10$.  3) coefficient $6$ rides along. Rule used throughout: $\\frac{d}{dx}a^x = a^x\\ln a$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'derivatives-of-exponential-functions',
    sections: [
      {
        id: 'dexp4-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Exponential Functions

**Part 4 of 7 — The Chain Rule with Exponentials**

---

> 🔑 **The Idea:** When the exponent is a *function* $u(x)$ instead of a plain $x$, multiply by the derivative of the exponent. This is the single most-tested skill in this topic.`,
      },
      {
        id: 'dexp4-chain-rule',
        type: 'text' as const,
        content: `## The Composite Rules

$$\\boxed{\\frac{d}{dx}\\,e^{u} = e^{u}\\cdot u'} \\qquad \\boxed{\\frac{d}{dx}\\,a^{u} = a^{u}\\,(\\ln a)\\,u'}$$

The exponential stays exactly the same; you tack on the derivative of the exponent.

### Example: $\\frac{d}{dx}\\,e^{3x}$

Here $u = 3x$, so $u' = 3$:
$$\\frac{d}{dx}\\,e^{3x} = e^{3x}\\cdot 3 = 3e^{3x}$$

### Example: $\\frac{d}{dx}\\,e^{x^2}$

Here $u = x^2$, so $u' = 2x$:
$$\\frac{d}{dx}\\,e^{x^2} = e^{x^2}\\cdot 2x = 2x\\,e^{x^2}$$

### Example: $\\frac{d}{dx}\\,e^{-5x}$

Here $u = -5x$, so $u' = -5$:
$$\\frac{d}{dx}\\,e^{-5x} = -5e^{-5x}$$

> ⚠️ **The #1 mistake:** forgetting $u'$. $\\frac{d}{dx}e^{3x}$ is $3e^{3x}$, **not** $e^{3x}$. The exponent's slope must come out.`,
      },
      {
        id: 'dexp4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\dfrac{d}{dx}\\,e^{4x} = $',
              options: ['$e^{4x}$', '$4e^{4x}$', '$4e^{4x-1}$', '$e^{4}$'],
              correctAnswer: 1,
              explanation: 'With $u = 4x$, $u\' = 4$, so $\\frac{d}{dx}e^{4x} = e^{4x}\\cdot 4 = 4e^{4x}$.',
            },
            {
              question: '$\\dfrac{d}{dx}\\,e^{x^3} = $',
              options: ['$e^{x^3}$', '$3x^2 e^{x^3}$', '$x^3 e^{x^3 - 1}$', '$3x^2 e^{3x^2}$'],
              correctAnswer: 1,
              explanation: 'With $u = x^3$, $u\' = 3x^2$, so $\\frac{d}{dx}e^{x^3} = e^{x^3}\\cdot 3x^2 = 3x^2 e^{x^3}$. The exponent itself is unchanged.',
            },
          ],
        },
      },
      {
        id: 'dexp4-two-step',
        type: 'text' as const,
        content: `## A Reliable Two-Step

When the chain rule feels error-prone, slow down and do it in two explicit steps:

1. **Find $u'$** — the derivative of just the exponent.
2. **Assemble** — write the exponential unchanged, then multiply by $u'$.

The next check walks you through that exact process for two functions.`,
      },
      {
        id: 'dexp4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find $u'$, Then Assemble** 🔽

For each, identify $u'$ and the full derivative.`,
        exercise: {
          dropdowns: [
            { label: 'For $e^{7x}$, $u\' =$', options: ['$7$', '$7x$', '$1$', '$e^{7x}$'] },
            { label: 'So $\\frac{d}{dx}e^{7x} =$', options: ['$7e^{7x}$', '$e^{7x}$', '$7xe^{7x}$', '$e^{7}$'] },
            { label: 'For $e^{-x^2}$, the derivative is', options: ['$-2x\\,e^{-x^2}$', '$2x\\,e^{-x^2}$', '$e^{-x^2}$', '$-2x\\,e^{-2x}$'] },
          ],
          correctAnswers: ['$7$', '$7e^{7x}$', '$-2x\\,e^{-x^2}$'],
          hint1: 'For $e^{7x}$ the exponent is $u = 7x$, so $u\' = 7$.',
          hint2: 'Multiply the exponential by $u\'$: $e^{7x}\\cdot 7 = 7e^{7x}$.',
          hint3: 'For $e^{-x^2}$, $u = -x^2$ gives $u\' = -2x$, so the derivative is $-2x\\,e^{-x^2}$.',
          explanation: '$e^{7x}$: $u\'=7 \\Rightarrow 7e^{7x}$. $e^{-x^2}$: $u\' = -2x \\Rightarrow -2x\\,e^{-x^2}$. Always multiply by the derivative of the exponent.',
        },
      },
      {
        id: 'dexp4-base-a',
        type: 'text' as const,
        content: `## Chain Rule with a General Base

The same idea applies to base $a$ — just keep the $\\ln a$ factor.

### Example: $\\frac{d}{dx}\\,2^{5x}$

Here $a = 2$, $u = 5x$, $u' = 5$:
$$\\frac{d}{dx}\\,2^{5x} = 2^{5x}\\,(\\ln 2)\\,(5) = 5\\ln 2\\cdot 2^{5x}$$

### Example: $\\frac{d}{dx}\\,3^{x^2}$

Here $a = 3$, $u = x^2$, $u' = 2x$:
$$\\frac{d}{dx}\\,3^{x^2} = 3^{x^2}\\,(\\ln 3)\\,(2x) = 2x\\ln 3\\cdot 3^{x^2}$$

> 💡 **Order of factors:** (original function) $\\times$ ($\\ln a$) $\\times$ ($u'$). For base $e$, $\\ln e = 1$ so that factor disappears.`,
      },
      {
        id: 'dexp4-drill',
        type: 'input-boxes' as const,
        content: `**Chain Rule Drill** 🧮

Differentiate; enter the requested number.

**1)** $\\dfrac{d}{dx}\\,e^{6x} = ?\\cdot e^{6x}$. Enter $?$.
**2)** $\\dfrac{d}{dx}\\,e^{x^2}$ written as $?\\,x\\,e^{x^2}$. Enter the number $?$.
**3)** $\\dfrac{d}{dx}\\,e^{-3x}$ at $x = 0$ equals $?$  *(use $e^0 = 1$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '2', '-3'],
          hint1: '$u = 6x \\Rightarrow u\' = 6$, so the derivative is $6e^{6x}$.',
          hint2: '$u = x^2 \\Rightarrow u\' = 2x$, so $\\frac{d}{dx}e^{x^2} = 2x\\,e^{x^2}$; the number is $2$.',
          hint3: '$u = -3x \\Rightarrow u\' = -3$, so the derivative is $-3e^{-3x}$. At $x=0$: $-3\\cdot e^0 = -3\\cdot 1 = -3$.',
          explanation: '1) $u\'=6 \\Rightarrow 6e^{6x}$.  2) $u\'=2x \\Rightarrow 2x\\,e^{x^2}$.  3) $-3e^{-3x}$ at $0$ is $-3$. Always multiply by $u\'$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'derivatives-of-exponential-functions',
    sections: [
      {
        id: 'dexp5-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Exponential Functions

**Part 5 of 7 — Product & Quotient Combinations**

---

> 🔑 **The Idea:** Exponentials show up multiplied or divided by other functions. Combine the exponential rule with the product and quotient rules — and watch for chances to factor.`,
      },
      {
        id: 'dexp5-product',
        type: 'text' as const,
        content: `## Product Rule with $e^x$

Recall the product rule: $(fg)' = f'g + fg'$.

### Example: $\\frac{d}{dx}\\left(x^2 e^x\\right)$

Let $f = x^2$ ($f' = 2x$) and $g = e^x$ ($g' = e^x$):

$$\\frac{d}{dx}\\left(x^2 e^x\\right) = 2x\\,e^x + x^2 e^x = x e^x(2 + x)$$

Factoring out the common $xe^x$ makes the answer compact and helps when you later solve $y' = 0$.

### Example: $\\frac{d}{dx}\\left(x\\,e^{2x}\\right)$

Let $f = x$ ($f' = 1$) and $g = e^{2x}$ ($g' = 2e^{2x}$ by the chain rule):

$$\\frac{d}{dx}\\left(x\\,e^{2x}\\right) = 1\\cdot e^{2x} + x\\cdot 2e^{2x} = e^{2x}(1 + 2x)$$

> 💡 $e^x$ is never zero, so when you set a product like $xe^x(2+x) = 0$, the solutions come from the *other* factors: $x = 0$ or $x = -2$.`,
      },
      {
        id: 'dexp5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\dfrac{d}{dx}\\left(x\\,e^x\\right) = $',
              options: ['$e^x$', '$x e^x$', '$e^x(1 + x)$', '$e^x(x - 1)$'],
              correctAnswer: 2,
              explanation: 'Product rule: $1\\cdot e^x + x\\cdot e^x = e^x + xe^x = e^x(1 + x)$.',
            },
            {
              question: 'Solving $e^x(1 + x) = 0$ gives which $x$?',
              options: ['$x = 0$', '$x = 1$', '$x = -1$', 'no real solution'],
              correctAnswer: 2,
              explanation: 'Since $e^x \\ne 0$ ever, the only way the product is $0$ is $1 + x = 0$, i.e. $x = -1$.',
            },
          ],
        },
      },
      {
        id: 'dexp5-quotient',
        type: 'text' as const,
        content: `## Quotient Rule with $e^x$

Recall: $\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g - fg'}{g^2}$.

### Example: $\\frac{d}{dx}\\left(\\dfrac{e^x}{x}\\right)$

Let $f = e^x$ ($f' = e^x$) and $g = x$ ($g' = 1$):

$$\\frac{d}{dx}\\left(\\frac{e^x}{x}\\right) = \\frac{e^x\\cdot x - e^x\\cdot 1}{x^2} = \\frac{e^x(x - 1)}{x^2}$$

### Example: $\\frac{d}{dx}\\left(\\dfrac{x}{e^x}\\right)$

Rewrite as $x e^{-x}$ and use the product rule (often easier than the quotient rule):

$$\\frac{d}{dx}\\left(x e^{-x}\\right) = 1\\cdot e^{-x} + x\\cdot(-e^{-x}) = e^{-x}(1 - x)$$

> 💡 **Tip:** A division by $e^x$ can always be rewritten as multiplication by $e^{-x}$. Choose whichever rule keeps the algebra cleaner.`,
      },
      {
        id: 'dexp5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Assemble the Pieces** 🔽

You are differentiating $h(x) = x^3 e^x$ with the product rule. Fill in each piece.`,
        exercise: {
          dropdowns: [
            { label: '$f = x^3$, so $f\' =$', options: ['$3x^2$', '$x^2$', '$3x^3$', '$x^4/4$'] },
            { label: '$g = e^x$, so $g\' =$', options: ['$e^x$', '$xe^{x-1}$', '$\\ln x$', '$e$'] },
            { label: 'Factored derivative $h\'(x) =$', options: ['$x^2 e^x(3 + x)$', '$x^2 e^x(3 - x)$', '$3x^2 e^x$', '$x^3 e^x$'] },
          ],
          correctAnswers: ['$3x^2$', '$e^x$', '$x^2 e^x(3 + x)$'],
          hint1: 'Power rule on $x^3$ gives $3x^2$.',
          hint2: '$e^x$ is its own derivative.',
          hint3: '$h\' = 3x^2 e^x + x^3 e^x$. Factor out $x^2 e^x$: $x^2 e^x(3 + x)$.',
          explanation: 'Product rule: $h\' = 3x^2 e^x + x^3 e^x = x^2 e^x(3 + x)$. Factoring out the common $x^2 e^x$ gives the clean form.',
        },
      },
      {
        id: 'dexp5-eval-tip',
        type: 'text' as const,
        content: `## Evaluating Combination Derivatives

Once you have a factored derivative, plugging in a value is fast — especially at $x = 0$, where $e^0 = 1$.

For example, $\\frac{d}{dx}(xe^x) = e^x(1 + x)$, so at $x = 0$:
$$e^{0}(1 + 0) = 1\\cdot 1 = 1$$

Keep $e^0 = 1$ handy for the next drill.`,
      },
      {
        id: 'dexp5-drill',
        type: 'input-boxes' as const,
        content: `**Product & Quotient Drill** 🧮

Differentiate and evaluate at the given point.

**1)** For $y = x e^x$, find $y'(0)$.  *(use $e^0 = 1$)*
**2)** For $y = x^2 e^x = x e^x(x+2)$ after factoring its derivative, find $y'(0)$.
**3)** $\\dfrac{d}{dx}\\!\\left(\\dfrac{e^x}{x}\\right) = \\dfrac{e^x(x-1)}{x^2}$. Evaluate at $x = 1$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '0', '0'],
          hint1: '$y\' = e^x(1+x)$. At $x=0$: $e^0(1+0) = 1\\cdot 1 = 1$.',
          hint2: '$\\frac{d}{dx}(x^2 e^x) = 2x e^x + x^2 e^x = xe^x(2 + x)$. At $x=0$: $0\\cdot e^0\\cdot 2 = 0$.',
          hint3: 'At $x=1$: numerator $e^1(1-1) = e\\cdot 0 = 0$, so the whole expression is $0$.',
          explanation: '1) $e^x(1+x)$ at $0$ is $1$.  2) $xe^x(2+x)$ at $0$ is $0$ (the $x$ factor vanishes).  3) the $(x-1)$ factor is $0$ at $x=1$, so the derivative is $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'derivatives-of-exponential-functions',
    sections: [
      {
        id: 'dexp6-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Exponential Functions

**Part 6 of 7 — Tangent Lines, Growth & Decay**

---

> 🔑 **The Idea:** The slope-equals-rate property makes exponentials the model for growth and decay. We use derivatives to find tangent lines and instantaneous rates of change.`,
      },
      {
        id: 'dexp6-tangent',
        type: 'text' as const,
        content: `## Tangent Lines to Exponential Curves

Use point-slope form $y - y_0 = m(x - x_0)$ where $m = f'(x_0)$.

### Example: tangent to $y = e^x$ at $x = 0$

- Point: $\\big(0,\\, e^0\\big) = (0, 1)$
- Slope: $f'(x) = e^x$, so $f'(0) = e^0 = 1$
- Line: $y - 1 = 1(x - 0) \\Rightarrow y = x + 1$

### Example: tangent to $y = e^{2x}$ at $x = 0$

- Point: $\\big(0,\\, e^0\\big) = (0, 1)$
- Slope: $f'(x) = 2e^{2x}$, so $f'(0) = 2e^0 = 2$
- Line: $y - 1 = 2(x - 0) \\Rightarrow y = 2x + 1$

> 💡 **Pattern:** For $y = e^{kx}$, the tangent at $x = 0$ is always $y = kx + 1$, because the curve passes through $(0,1)$ with slope $k$.`,
      },
      {
        id: 'dexp6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The tangent line to $y = e^x$ at $x = 0$ is:',
              options: ['$y = x$', '$y = x + 1$', '$y = e^x$', '$y = 1$'],
              correctAnswer: 1,
              explanation: 'At $x=0$: point $(0,1)$, slope $e^0 = 1$. Point-slope gives $y = x + 1$.',
            },
            {
              question: 'For $y = e^{3x}$, the slope of the tangent at $x = 0$ is:',
              options: ['$1$', '$3$', '$e^3$', '$0$'],
              correctAnswer: 1,
              explanation: '$y\' = 3e^{3x}$, so $y\'(0) = 3e^0 = 3\\cdot 1 = 3$.',
            },
          ],
        },
      },
      {
        id: 'dexp6-growth',
        type: 'text' as const,
        content: `## Exponential Growth and Decay

A quantity that grows or decays at a rate proportional to its size satisfies:

$$P(t) = P_0\\,e^{kt} \\qquad\\Rightarrow\\qquad P'(t) = k\\,P_0\\,e^{kt} = k\\,P(t)$$

- If $k > 0$: **growth** (population, compound interest).
- If $k < 0$: **decay** (radioactive material, cooling, drug elimination).

The derivative gives the **instantaneous rate of change**.

### Example

A culture grows as $P(t) = 200\\,e^{0.05t}$ (with $t$ in hours). How fast is it growing at $t = 0$?

$$P'(t) = 200\\,(0.05)\\,e^{0.05t} = 10\\,e^{0.05t}$$
$$P'(0) = 10\\,e^{0} = 10\\cdot 1 = 10 \\text{ organisms per hour}$$

> 🔑 **Key relationship:** $P'(t) = k\\,P(t)$. The growth rate at any instant is the constant $k$ times the current amount — the self-replicating slope from Part 1, in the real world.`,
      },
      {
        id: 'dexp6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Model Analysis** 🔽

A sample decays as $A(t) = 80\\,e^{-0.2t}$ (mg, $t$ in days).`,
        exercise: {
          dropdowns: [
            { label: 'Is this growth or decay?', options: ['decay', 'growth', 'constant', 'linear'] },
            { label: '$A\'(t) =$', options: ['$-16\\,e^{-0.2t}$', '$80\\,e^{-0.2t}$', '$-0.2\\,e^{-0.2t}$', '$16\\,e^{-0.2t}$'] },
            { label: 'The rate of change at $t=0$ is', options: ['$-16$ mg/day', '$80$ mg/day', '$-0.2$ mg/day', '$0$ mg/day'] },
          ],
          correctAnswers: ['decay', '$-16\\,e^{-0.2t}$', '$-16$ mg/day'],
          hint1: 'A negative exponent coefficient ($k = -0.2 < 0$) means the amount shrinks over time — decay.',
          hint2: '$A\'(t) = 80\\cdot(-0.2)\\,e^{-0.2t} = -16\\,e^{-0.2t}$ by the chain rule.',
          hint3: 'At $t=0$: $A\'(0) = -16\\,e^{0} = -16\\cdot 1 = -16$ mg/day. Negative because it is decaying.',
          explanation: 'Since $k=-0.2<0$ it is decay. $A\'(t) = -16e^{-0.2t}$, and at $t=0$ the rate is $-16$ mg/day (losing mass).',
        },
      },
      {
        id: 'dexp6-zero-trick',
        type: 'text' as const,
        content: `## The "Evaluate at $t = 0$" Shortcut

For any model $f(t) = c\\,e^{kt}$, the derivative is $f'(t) = ck\\,e^{kt}$. At $t = 0$ the exponential is $e^0 = 1$, so:

$$f'(0) = ck\\cdot 1 = ck$$

The initial rate of change is simply **coefficient $\\times$ growth constant**. The next drill puts this to work.`,
      },
      {
        id: 'dexp6-drill',
        type: 'input-boxes' as const,
        content: `**Rates & Tangents** 🧮

**1)** For $y = e^{5x}$, the tangent line at $x=0$ has slope $?$.
**2)** $P(t) = 100\\,e^{0.03t}$. The instantaneous rate $P'(0)$ equals $?$  *(use $e^0=1$)*
**3)** For $y = e^{-4x}$, find $y'(0)$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '3', '-4'],
          hint1: '$y\' = 5e^{5x}$, so $y\'(0) = 5e^0 = 5$.',
          hint2: '$P\'(t) = 100(0.03)e^{0.03t} = 3e^{0.03t}$; at $t=0$ that is $3\\cdot 1 = 3$.',
          hint3: '$y\' = -4e^{-4x}$, so $y\'(0) = -4e^0 = -4$.',
          explanation: '1) slope $5$.  2) $P\'(0) = 3$.  3) $y\'(0) = -4$. Each uses the chain rule: multiply by the exponent\'s coefficient, then set the exponent to $0$ so $e^0=1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'derivatives-of-exponential-functions',
    sections: [
      {
        id: 'dexp7-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Exponential Functions

**Part 7 of 7 — Pitfalls, Mixed Practice & Mastery Check**

---

You can now differentiate $e^x$, $a^x$, composites with the chain rule, and combinations with products and quotients. This final part hardens those skills and finishes with an Exit Quiz.`,
      },
      {
        id: 'dexp7-pitfalls',
        type: 'text' as const,
        content: `## Common Pitfalls (Don't Lose Easy Points)

| Mistake | Wrong | Right |
|---------|-------|-------|
| Power rule on $a^x$ | $\\frac{d}{dx}2^x = x\\,2^{x-1}$ | $2^x \\ln 2$ |
| Dropping $\\ln a$ | $\\frac{d}{dx}5^x = 5^x$ | $5^x \\ln 5$ |
| Forgetting $u'$ | $\\frac{d}{dx}e^{3x} = e^{3x}$ | $3e^{3x}$ |
| Differentiating constant $e$ | $\\frac{d}{dx}e = e$ | $0$ |
| Wrong sign on decay | $\\frac{d}{dx}e^{-2x} = 2e^{-2x}$ | $-2e^{-2x}$ |

> ⚠️ **Golden rules:** (1) $e^x$ is its own derivative. (2) For other bases, multiply by $\\ln a$. (3) For composites, multiply by $u'$. (4) $e$ alone is just a number — its derivative is $0$.`,
      },
      {
        id: 'dexp7-quick-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Function | Derivative |
|----------|------------|
| $e^x$ | $e^x$ |
| $e^{u}$ | $e^{u}\\cdot u'$ |
| $a^x$ | $a^x \\ln a$ |
| $a^{u}$ | $a^{u}(\\ln a)\\,u'$ |
| $c\\,e^{kx}$ | $ck\\,e^{kx}$ |

> 🔑 **One sentence:** Keep the exponential, multiply by $\\ln(\\text{base})$ if the base isn't $e$, and multiply by the derivative of the exponent.`,
      },
      {
        id: 'dexp7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\dfrac{d}{dx}\\left(3e^{2x}\\right) = $',
              options: ['$3e^{2x}$', '$6e^{2x}$', '$6e^{2x-1}$', '$2e^{2x}$'],
              correctAnswer: 1,
              explanation: 'Constant $3$ stays; chain rule on $e^{2x}$ gives $2e^{2x}$. Together: $3\\cdot 2e^{2x} = 6e^{2x}$.',
            },
            {
              question: '$\\dfrac{d}{dx}\\,4^{x} = $',
              options: ['$4^x$', '$x\\,4^{x-1}$', '$4^x \\ln 4$', '$4\\ln x$'],
              correctAnswer: 2,
              explanation: 'General base rule: $\\frac{d}{dx}a^x = a^x\\ln a$, so $\\frac{d}{dx}4^x = 4^x\\ln 4$.',
            },
          ],
        },
      },
      {
        id: 'dexp7-checklist',
        type: 'text' as const,
        content: `## Run the Checklist on Every Problem

Before you write a final answer, sweep through these four questions:

- Is the base $e$, or do I need a $\\ln a$ factor?
- Is the exponent a function $u$? If so, did I multiply by $u'$?
- Are there products or quotients that need their own rule?
- Did any plain constant sneak in (derivative $0$)?

The drill below mixes all of these — slow down and apply the checklist.`,
      },
      {
        id: 'dexp7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $\\dfrac{d}{dx}(e^{2x})$ written as $?\\,e^{2x}$. Enter $?$.
**2)** $\\dfrac{d}{dx}(x e^x)$ at $x = 0$ equals $?$  *(use $e^0 = 1$)*
**3)** $\\dfrac{d}{dx}(5e^{-x})$ at $x = 0$ equals $?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '-5'],
          hint1: '$u = 2x \\Rightarrow u\' = 2$, so $\\frac{d}{dx}e^{2x} = 2e^{2x}$.',
          hint2: '$\\frac{d}{dx}(xe^x) = e^x(1+x)$; at $x=0$ that is $1\\cdot(1+0) = 1$.',
          hint3: '$\\frac{d}{dx}(5e^{-x}) = 5\\cdot(-1)e^{-x} = -5e^{-x}$; at $x=0$ that is $-5\\cdot 1 = -5$.',
          explanation: '1) coefficient $2$.  2) $e^x(1+x)$ at $0$ is $1$.  3) $-5e^{-x}$ at $0$ is $-5$. Chain rule and product rule throughout.',
        },
      },
      {
        id: 'dexp7-ready',
        type: 'text' as const,
        content: `## You're Ready

You now have every tool for derivatives of exponential functions:

- $\\frac{d}{dx}e^x = e^x$ (its own derivative)
- $\\frac{d}{dx}a^x = a^x\\ln a$ (general base)
- $\\frac{d}{dx}e^{u} = e^{u}u'$ and $\\frac{d}{dx}a^{u} = a^{u}(\\ln a)u'$ (chain rule)
- Product and quotient rules for combinations
- $P'(t) = kP(t)$ for growth and decay

One last quiz to lock it in.`,
      },
      {
        id: 'dexp7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$\\dfrac{d}{dx}\\,e^{x^2} = $',
              options: ['$e^{x^2}$', '$2x\\,e^{x^2}$', '$x^2 e^{x^2 - 1}$', '$2x\\,e^{2x}$'],
              correctAnswer: 1,
              explanation: 'Chain rule with $u = x^2$, $u\' = 2x$: $\\frac{d}{dx}e^{x^2} = e^{x^2}\\cdot 2x = 2x\\,e^{x^2}$.',
            },
            {
              question: 'Which base $a$ makes $\\dfrac{d}{dx}a^x = a^x$ with no extra factor?',
              options: ['$a = 2$', '$a = 10$', '$a = e$', '$a = 1$'],
              correctAnswer: 2,
              explanation: 'The extra factor is $\\ln a$, which equals $1$ only when $a = e$. So $\\frac{d}{dx}e^x = e^x$ exactly.',
            },
            {
              question: 'For $P(t) = 50\\,e^{0.04t}$, the instantaneous rate of change at $t = 0$ is:',
              options: ['$50$', '$2$', '$0.04$', '$0$'],
              correctAnswer: 1,
              explanation: '$P\'(t) = 50(0.04)e^{0.04t} = 2e^{0.04t}$. At $t=0$: $2e^0 = 2\\cdot 1 = 2$.',
            },
          ],
        },
      },
    ],
  },
]
