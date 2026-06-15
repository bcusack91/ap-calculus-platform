import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Logarithmic Functions (Algebra 2).
 * Registry key: 'logarithmic-functions-algebra2' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions-algebra2',
    sections: [
      {
        id: 'log1-intro',
        type: 'text' as const,
        content: `# 🪵 Logarithmic Functions

**Part 1 of 5 — What a Logarithm Really Is**

---

### Topics in This Part

| Section |
|---------|
| Logarithms Undo Exponents |
| The Definition: log ⇄ exponent |
| Evaluating Logarithms |
| Common Logs and Natural Logs |

> 🔑 **Key Concept:** A logarithm answers one question — *"What exponent do I put on the base to get this number?"* Everything in this lesson grows from that single idea.`,
      },
      {
        id: 'log1-undo',
        type: 'text' as const,
        content: `## Logarithms Undo Exponents

You already know how to read $2^3 = 8$ — *"$2$ to the power $3$ equals $8$."*

A **logarithm** flips that around. It starts with the answer ($8$) and asks for the **exponent**:

$$\\log_2 8 = 3 \\quad\\Longleftrightarrow\\quad 2^3 = 8$$

Read $\\log_2 8 = 3$ as *"the log, base $2$, of $8$ is $3$"* — meaning **$2$ raised to the $3$ gives $8$.**

| You're given | You want | Tool |
|--------------|----------|------|
| base & exponent | the result | **exponent**: $2^3 = ?$ |
| base & result | the exponent | **logarithm**: $\\log_2 8 = ?$ |

> 🔑 **Key Idea:** A log *is* an exponent. The expression $\\log_b x$ literally **equals the power** you raise $b$ to in order to reach $x$.`,
      },
      {
        id: 'log1-def',
        type: 'text' as const,
        content: `## The Definition

This is the most important line in the whole lesson — memorize it:

$$\\log_b x = y \\quad\\Longleftrightarrow\\quad b^y = x \\qquad (b > 0,\\; b \\ne 1,\\; x > 0)$$

- $b$ is the **base** (same base in both forms)
- $y$ is the **exponent** — and also the **value of the log**
- $x$ is the **result** (the number inside the log, called the *argument*)

### Switching Forms

| Logarithmic form | Exponential form |
|------------------|------------------|
| $\\log_3 81 = 4$ | $3^4 = 81$ |
| $\\log_{10} 1000 = 3$ | $10^3 = 1000$ |
| $\\log_5 \\frac{1}{25} = -2$ | $5^{-2} = \\frac{1}{25}$ |

> 💡 **Trick to remember:** the **base of the log becomes the base of the power**, and the **answer of the log becomes the exponent**. The argument is left over on the other side.`,
      },
      {
        id: 'log1-form-dropdown',
        type: 'dropdown-select' as const,
        content: `**Switch Between Forms** 🔽

Match each logarithm to its equivalent exponential equation.`,
        exercise: {
          dropdowns: [
            { label: '$\\log_2 16 = 4$ means:', options: ['$2^4 = 16$', '$4^2 = 16$', '$2^{16} = 4$', '$16^2 = 4$'] },
            { label: '$\\log_7 49 = 2$ means:', options: ['$7^2 = 49$', '$2^7 = 49$', '$49^2 = 7$', '$7^{49} = 2$'] },
            { label: '$10^3 = 1000$ in log form:', options: ['$\\log_{10} 1000 = 3$', '$\\log_3 1000 = 10$', '$\\log_{1000} 10 = 3$', '$\\log_{10} 3 = 1000$'] },
          ],
          correctAnswers: ['$2^4 = 16$', '$7^2 = 49$', '$\\log_{10} 1000 = 3$'],
          hint1: 'The base of the log ($2$) becomes the base of the power; the value of the log ($4$) becomes the exponent.',
          hint2: '$\\log_b x = y$ converts to $b^y = x$. For $\\log_7 49 = 2$: base $7$, exponent $2$, result $49$.',
          hint3: 'To go from $10^3 = 1000$ to log form: the base $10$ stays the base, the exponent $3$ becomes the answer, $1000$ is the argument.',
          explanation: '$\\log_b x = y \\Leftrightarrow b^y = x$. Keep the base; the value of the log is the exponent.',
        },
      },
      {
        id: 'log1-evaluate',
        type: 'text' as const,
        content: `## Evaluating a Logarithm

To find $\\log_b x$ by hand, ask: **"$b$ to *what* power gives $x$?"**

### Example: $\\log_2 32$

$2$ to the power *what* equals $32$? Since $2^5 = 32$, the answer is $\\boxed{5}$.

### Example: $\\log_3 \\frac{1}{9}$

$3$ to the power *what* equals $\\frac{1}{9}$? Since $3^{-2} = \\frac{1}{9}$, the answer is $\\boxed{-2}$.

### Two Logs You Should Know Instantly

$$\\log_b 1 = 0 \\quad (\\text{because } b^0 = 1) \\qquad\\qquad \\log_b b = 1 \\quad (\\text{because } b^1 = b)$$

> ⚠️ **Watch out:** the argument of a log must be **positive**. There is no real value for $\\log_2(-8)$ or $\\log_2 0$ — no power of $2$ is ever negative or zero.`,
      },
      {
        id: 'log1-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate Each Log** 🧮

Ask "the base to *what* power gives the argument?" Enter the value.

**1)** $\\log_2 64 = \\,?$
**2)** $\\log_5 125 = \\,?$
**3)** $\\log_4 \\dfrac{1}{16} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '3', '-2'],
          hint1: '$2$ to what power is $64$? $2^6 = 64$.',
          hint2: '$5$ to what power is $125$? $5^3 = 125$.',
          hint3: '$4$ to what power is $\\frac{1}{16}$? Since $4^2 = 16$, $4^{-2} = \\frac{1}{16}$.',
          explanation: '1) $2^6 = 64$, so $6$.  2) $5^3 = 125$, so $3$.  3) $4^{-2} = \\frac{1}{16}$, so $-2$.',
        },
      },
      {
        id: 'log1-common-natural',
        type: 'text' as const,
        content: `## Common Logs and Natural Logs

Two bases are so common they get shorthand notation:

| Name | Base | Written | Means |
|------|------|---------|-------|
| **Common log** | $10$ | $\\log x$ | $\\log_{10} x$ |
| **Natural log** | $e \\approx 2.718$ | $\\ln x$ | $\\log_e x$ |

When you see $\\log x$ with **no base**, assume base $10$. When you see $\\ln x$, the base is the constant $e$.

$$\\log 100 = 2 \\quad (10^2 = 100) \\qquad\\qquad \\ln e = 1 \\quad (e^1 = e)$$

> 💡 Your calculator has dedicated $\\boxed{\\log}$ and $\\boxed{\\ln}$ keys — that's why these two bases are special. We'll use them in Part 4 to evaluate *any* base.`,
      },
      {
        id: 'log1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does $\\log_b x$ represent?',
              options: [
                'The exponent you put on $b$ to get $x$',
                'The result of multiplying $b$ by $x$',
                'The base $b$ raised to the power $x$',
                'The number $x$ divided by the base $b$',
              ],
              correctAnswer: 0,
              explanation: 'A logarithm *is* an exponent: $\\log_b x$ is the power you raise $b$ to in order to produce $x$.',
            },
            {
              question: 'Which expression is undefined (has no real value)?',
              options: ['$\\log_2(-8)$', '$\\log_2 8$', '$\\log_2 1$', '$\\log_2 \\frac{1}{8}$'],
              correctAnswer: 0,
              explanation: 'The argument of a log must be positive. No power of $2$ is negative, so $\\log_2(-8)$ has no real value. $\\log_2 1 = 0$ and $\\log_2 \\frac{1}{8} = -3$ are both fine.',
            },
            {
              question: 'In the expression $\\ln x$, what is the base?',
              options: ['$e \\approx 2.718$', '$10$', '$2$', '$1$'],
              correctAnswer: 0,
              explanation: '$\\ln$ is the natural log, base $e \\approx 2.718$. The common log $\\log$ (no subscript) is base $10$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions-algebra2',
    sections: [
      {
        id: 'log2-intro',
        type: 'text' as const,
        content: `# 🪵 Logarithmic Functions

**Part 2 of 5 — The Graph & Its Inverse**

---

> 🔑 **The Idea:** The logarithm function $y = \\log_b x$ is the **mirror image** of the exponential $y = b^x$ across the line $y = x$. Understanding that inverse relationship explains the entire shape — its domain, its asymptote, everything.`,
      },
      {
        id: 'log2-inverse',
        type: 'text' as const,
        content: `## Logs and Exponentials Are Inverses

$y = b^x$ and $y = \\log_b x$ **undo each other**. Feed the output of one into the other and you get back where you started:

$$\\log_b(b^x) = x \\qquad\\qquad b^{\\log_b x} = x$$

Because they're inverses, their graphs are **reflections across the line $y = x$**, and their key points **swap coordinates**:

| Point on $y = 2^x$ | Reflected point on $y = \\log_2 x$ |
|--------------------|-----------------------------------|
| $(0, 1)$ | $(1, 0)$ |
| $(1, 2)$ | $(2, 1)$ |
| $(3, 8)$ | $(8, 3)$ |
| $(-1, \\frac{1}{2})$ | $(\\frac{1}{2}, -1)$ |

> 💡 To plot $y = \\log_b x$ fast: take any easy point on $y = b^x$ and **flip its coordinates**.`,
      },
      {
        id: 'log2-features',
        type: 'text' as const,
        content: `## Features of $y = \\log_b x$ (with $b > 1$)

$$y = \\log_b x$$

| Feature | Value | Why |
|---------|-------|-----|
| **Domain** | $x > 0$ | you can only take a log of a **positive** number |
| **Range** | all real numbers | the exponent can be any value |
| **Vertical asymptote** | $x = 0$ (the $y$-axis) | as $x \\to 0^+$, $y \\to -\\infty$ |
| **$x$-intercept** | $(1, 0)$ | $\\log_b 1 = 0$ for every base |
| **Behavior** | increasing | larger $x$ ⇒ larger exponent |

The curve passes through $(1, 0)$ and $(b, 1)$, rises slowly forever to the right, and plunges toward $-\\infty$ as $x$ approaches $0$.

> ⚠️ **Domain trap:** the graph **never touches or crosses the $y$-axis**. There is no point at $x = 0$ or for any negative $x$.`,
      },
      {
        id: 'log2-graph-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Graph** 🔽

Use the features of $y = \\log_b x$ (base $b > 1$).`,
        exercise: {
          dropdowns: [
            { label: 'Domain of $y = \\log_2 x$:', options: ['$x > 0$', 'all real numbers', '$x \\ge 0$', '$x \\ne 0$'] },
            { label: 'The graph of $y = \\log_3 x$ crosses the $x$-axis at:', options: ['$(1, 0)$', '$(0, 0)$', '$(0, 1)$', '$(3, 0)$'] },
            { label: 'As $x \\to 0^+$, the value of $\\log_b x$:', options: ['$\\to -\\infty$', '$\\to +\\infty$', '$\\to 0$', '$\\to 1$'] },
          ],
          correctAnswers: ['$x > 0$', '$(1, 0)$', '$\\to -\\infty$'],
          hint1: 'You can only take the log of a positive number, so $x$ must be greater than $0$.',
          hint2: '$\\log_b 1 = 0$ for every base, so the curve always crosses the $x$-axis at $x = 1$.',
          hint3: 'There is a vertical asymptote at $x = 0$; as $x$ shrinks toward $0$, the exponent needed plunges to $-\\infty$.',
          explanation: 'For $b > 1$: domain $x > 0$, range all reals, vertical asymptote $x = 0$, and $x$-intercept $(1, 0)$.',
        },
      },
      {
        id: 'log2-inverse-fn',
        type: 'text' as const,
        content: `## Finding the Inverse Algebraically

Because exponentials and logs are inverses, you can find one from the other by **swapping $x$ and $y$**.

### Example: inverse of $y = 3^x$

1. Swap $x$ and $y$: $\\;x = 3^y$
2. Rewrite in log form (the definition!): $\\;y = \\log_3 x$

So the inverse of $y = 3^x$ is $y = \\log_3 x$. ✓

### Example: inverse of $y = \\log_5 x$

1. Swap: $\\;x = \\log_5 y$
2. Rewrite in exponential form: $\\;y = 5^x$

> 🔑 **Key move:** converting between log and exponential form (Part 1) *is* the tool for finding inverses.`,
      },
      {
        id: 'log2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The graph of $y = \\log_b x$ is the reflection of $y = b^x$ across which line?',
              options: ['$y = x$', '$y = 0$', '$x = 0$', '$y = -x$'],
              correctAnswer: 0,
              explanation: 'Inverse functions are reflections across $y = x$. Each point $(a, c)$ on $y = b^x$ maps to $(c, a)$ on $y = \\log_b x$.',
            },
            {
              question: 'What is the inverse of $f(x) = 4^x$?',
              options: ['$f^{-1}(x) = \\log_4 x$', '$f^{-1}(x) = 4^{-x}$', '$f^{-1}(x) = \\log_x 4$', '$f^{-1}(x) = x^4$'],
              correctAnswer: 0,
              explanation: 'Swap $x$ and $y$ in $y = 4^x$ to get $x = 4^y$, then convert to log form: $y = \\log_4 x$.',
            },
            {
              question: 'Which point lies on the graph of $y = \\log_2 x$?',
              options: ['$(8, 3)$', '$(3, 8)$', '$(0, 1)$', '$(2, 4)$'],
              correctAnswer: 0,
              explanation: '$\\log_2 8 = 3$ because $2^3 = 8$, so $(8, 3)$ is on the curve. (It is the flip of $(3, 8)$, which lies on $y = 2^x$.)',
            },
          ],
        },
      },
      {
        id: 'log2-flip-recap',
        type: 'text' as const,
        content: `## The Coordinate-Flip Shortcut

Putting the inverse idea to work: every point you know on $y = b^x$ gives you a point on $y = \\log_b x$ **for free** — just swap the coordinates.

| Known on $y = 3^x$ | Flip → on $y = \\log_3 x$ |
|--------------------|--------------------------|
| $(0, 1)$ | $(1, 0)$ |
| $(1, 3)$ | $(3, 1)$ |
| $(2, 9)$ | $(9, 2)$ |

> 💡 No tables of values needed — reflecting across $y = x$ does the work. Let's try one.`,
      },
      {
        id: 'log2-point-drill',
        type: 'input-boxes' as const,
        content: `**Flip the Coordinates** 🧮

The point $(2, 9)$ lies on $y = 3^x$ because $3^2 = 9$. Reflecting across $y = x$ gives a point on $y = \\log_3 x$.

**1)** The reflected point on $y = \\log_3 x$ has $x$-coordinate $= \\,?$
**2)** That same reflected point has $y$-coordinate $= \\,?$
**3)** Evaluate directly: $\\log_3 9 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '2', '2'],
          hint1: 'Reflecting across $y = x$ swaps the coordinates: $(2, 9) \\to (9, 2)$. The new $x$-coordinate is $9$.',
          hint2: 'After the swap, the new $y$-coordinate is $2$.',
          hint3: '$\\log_3 9$ asks "$3$ to what power is $9$?" Since $3^2 = 9$, it equals $2$ — matching the swapped $y$-coordinate.',
          explanation: '$(2, 9)$ on $y = 3^x$ reflects to $(9, 2)$ on $y = \\log_3 x$. And indeed $\\log_3 9 = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions-algebra2',
    sections: [
      {
        id: 'log3-intro',
        type: 'text' as const,
        content: `# 🪵 Logarithmic Functions

**Part 3 of 5 — The Laws of Logarithms**

---

> 🔑 **Why it matters:** Logs turn **multiplication into addition** and **powers into multiplication**. These three laws are the engine behind solving equations (Part 5) and were how people multiplied huge numbers before calculators existed.`,
      },
      {
        id: 'log3-laws',
        type: 'text' as const,
        content: `## The Three Laws

For the same base $b$ (with $M, N > 0$):

| Law | Rule | In words |
|-----|------|----------|
| **Product** | $\\log_b(MN) = \\log_b M + \\log_b N$ | log of a product = **sum** of logs |
| **Quotient** | $\\log_b\\!\\left(\\dfrac{M}{N}\\right) = \\log_b M - \\log_b N$ | log of a quotient = **difference** of logs |
| **Power** | $\\log_b(M^p) = p\\,\\log_b M$ | an exponent **comes out front** as a multiplier |

**Where they come from:** logs are exponents, and exponents *add* when you multiply powers. Since $b^x \\cdot b^y = b^{x+y}$, taking logs turns that product into the sum $x + y$.

> ⚠️ **The #1 mistake:** these laws apply to logs of *products and quotients*, **not** to products or sums of logs themselves. In particular:
> $$\\log_b(M + N) \\ne \\log_b M + \\log_b N \\qquad \\frac{\\log_b M}{\\log_b N} \\ne \\log_b\\!\\left(\\frac{M}{N}\\right)$$`,
      },
      {
        id: 'log3-expand',
        type: 'text' as const,
        content: `## Expanding a Logarithm

"Expanding" means breaking one log into a sum/difference of simpler logs.

### Example: expand $\\log_2(8x)$

$$\\log_2(8x) = \\log_2 8 + \\log_2 x = 3 + \\log_2 x$$

(Product rule, then evaluate $\\log_2 8 = 3$.)

### Example: expand $\\log_5\\!\\left(\\dfrac{x^3}{y}\\right)$

$$\\log_5\\!\\left(\\frac{x^3}{y}\\right) = \\log_5 x^3 - \\log_5 y = 3\\log_5 x - \\log_5 y$$

(Quotient rule first, then the power rule pulls the $3$ out front.)

> 💡 **Order of operations, reversed:** when expanding, handle the **product/quotient first** (outermost operation), then bring down any **exponents** with the power rule.`,
      },
      {
        id: 'log3-expand-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Law** 🔽

Choose the correctly expanded form of each logarithm.`,
        exercise: {
          dropdowns: [
            { label: '$\\log_b(xy)$ expands to:', options: ['$\\log_b x + \\log_b y$', '$\\log_b x - \\log_b y$', '$\\log_b x \\cdot \\log_b y$', '$y\\log_b x$'] },
            { label: '$\\log_b\\!\\left(\\frac{x}{5}\\right)$ expands to:', options: ['$\\log_b x - \\log_b 5$', '$\\log_b x + \\log_b 5$', '$\\frac{\\log_b x}{\\log_b 5}$', '$5\\log_b x$'] },
            { label: '$\\log_b(x^4)$ expands to:', options: ['$4\\log_b x$', '$\\log_b 4 \\cdot x$', '$(\\log_b x)^4$', '$\\log_b x + 4$'] },
          ],
          correctAnswers: ['$\\log_b x + \\log_b y$', '$\\log_b x - \\log_b 5$', '$4\\log_b x$'],
          hint1: 'A product inside the log becomes a **sum** of logs (product rule).',
          hint2: 'A quotient inside the log becomes a **difference** of logs (quotient rule).',
          hint3: 'An exponent on the argument comes out front as a multiplier (power rule): $\\log_b(x^4) = 4\\log_b x$.',
          explanation: 'Product → sum, quotient → difference, power → coefficient out front. These three moves cover every expansion.',
        },
      },
      {
        id: 'log3-condense',
        type: 'text' as const,
        content: `## Condensing a Logarithm

"Condensing" runs the laws **in reverse**: combine several logs into a single log. This is the form you need before solving an equation.

### Example: condense $\\log_3 4 + \\log_3 7$

$$\\log_3 4 + \\log_3 7 = \\log_3(4 \\cdot 7) = \\log_3 28$$

### Example: condense $2\\log x - \\log y$

First send coefficients **back up** as exponents (power rule in reverse), then combine:

$$2\\log x - \\log y = \\log x^2 - \\log y = \\log\\!\\left(\\frac{x^2}{y}\\right)$$

> 🔑 **Key move:** to condense, **coefficients must be cleared first** (turn $2\\log x$ into $\\log x^2$) before you can merge logs with $+$ or $-$.`,
      },
      {
        id: 'log3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Condense $\\log_2 5 + \\log_2 3$ into a single logarithm.',
              options: ['$\\log_2 15$', '$\\log_2 8$', '$\\log_4 15$', '$\\log_2 \\frac{5}{3}$'],
              correctAnswer: 0,
              explanation: 'Product rule in reverse: a sum of logs with the same base becomes a log of the product. $\\log_2 5 + \\log_2 3 = \\log_2(5 \\cdot 3) = \\log_2 15$.',
            },
            {
              question: 'Which statement is FALSE?',
              options: [
                '$\\log(x + y) = \\log x + \\log y$',
                '$\\log(xy) = \\log x + \\log y$',
                '$\\log(x^3) = 3\\log x$',
                '$\\log\\!\\left(\\frac{x}{y}\\right) = \\log x - \\log y$',
              ],
              correctAnswer: 0,
              explanation: 'There is no log law for a sum *inside* the argument. $\\log(x+y)$ does NOT simplify; the product, power, and quotient rules are the three true laws.',
            },
            {
              question: 'Expand $\\log_b(x^2 y)$ fully.',
              options: [
                '$2\\log_b x + \\log_b y$',
                '$2\\log_b x \\cdot \\log_b y$',
                '$2(\\log_b x + \\log_b y)$',
                '$\\log_b x^2 - \\log_b y$',
              ],
              correctAnswer: 0,
              explanation: 'Product rule: $\\log_b(x^2 y) = \\log_b x^2 + \\log_b y$. Then the power rule gives $2\\log_b x + \\log_b y$.',
            },
          ],
        },
      },
      {
        id: 'log3-evaluate-tip',
        type: 'text' as const,
        content: `## Combining Laws with Evaluation

The laws really shine when one of the pieces is a log you can **evaluate exactly**. The product/quotient rule splits the expression; then you collapse the known part to a number.

$$\\log_2(16x) = \\log_2 16 + \\log_2 x = 4 + \\log_2 x$$

$$\\log_2\\!\\left(\\frac{x}{8}\\right) = \\log_2 x - \\log_2 8 = \\log_2 x - 3$$

> 🔑 **Strategy:** apply a law to *separate* the numeric part, then replace it with its value. The next drill mixes both moves.`,
      },
      {
        id: 'log3-laws-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Laws** 🧮

Use the laws, then evaluate where possible.

**1)** $\\log_2 4 + \\log_2 8 = \\log_2 ? \\;$ — enter the single argument (a number).
**2)** Evaluate that result: $\\log_2 4 + \\log_2 8 = \\,?$
**3)** $\\log_b(x^5)$ expands to $?\\,\\log_b x$ — enter the coefficient.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['32', '5', '5'],
          hint1: 'Product rule: $\\log_2 4 + \\log_2 8 = \\log_2(4 \\cdot 8) = \\log_2 32$. The argument is $32$.',
          hint2: '$\\log_2 32 = 5$ because $2^5 = 32$. (Check: $\\log_2 4 = 2$ and $\\log_2 8 = 3$, and $2 + 3 = 5$.)',
          hint3: 'Power rule: the exponent $5$ comes out front, so $\\log_b(x^5) = 5\\log_b x$.',
          explanation: '1) $\\log_2(4 \\cdot 8) = \\log_2 32$.  2) $2 + 3 = 5$.  3) The exponent $5$ becomes the coefficient.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions-algebra2',
    sections: [
      {
        id: 'log4-intro',
        type: 'text' as const,
        content: `# 🪵 Logarithmic Functions

**Part 4 of 5 — Change of Base & Real-World Models**

---

> 🔑 **The Payoff:** Calculators only have $\\log$ (base $10$) and $\\ln$ (base $e$) keys — yet logs appear everywhere, in earthquakes, sound, and acidity. The **change-of-base formula** lets you evaluate *any* base, and these scales show why logs matter.`,
      },
      {
        id: 'log4-change-base',
        type: 'text' as const,
        content: `## The Change-of-Base Formula

To evaluate a log in *any* base $b$, rewrite it using a base your calculator knows:

$$\\log_b x = \\frac{\\log x}{\\log b} = \\frac{\\ln x}{\\ln b}$$

You may use **either** common log or natural log on top and bottom — just be consistent.

### Example: $\\log_2 50$

$$\\log_2 50 = \\frac{\\ln 50}{\\ln 2} \\approx \\frac{3.912}{0.693} \\approx 5.644$$

**Sanity check:** $2^5 = 32$ and $2^6 = 64$, so $\\log_2 50$ must be between $5$ and $6$. ✓

> 💡 **Memory hook:** *"new base on the bottom."* The base you're switching *to* (here $\\ln$) goes in both spots; the original base $b$ lands in the **denominator**.`,
      },
      {
        id: 'log4-cb-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression correctly rewrites $\\log_5 20$ using natural logs?',
              options: ['$\\dfrac{\\ln 20}{\\ln 5}$', '$\\dfrac{\\ln 5}{\\ln 20}$', '$\\ln 20 - \\ln 5$', '$\\ln 20 \\cdot \\ln 5$'],
              correctAnswer: 0,
              explanation: 'Change of base: $\\log_b x = \\frac{\\ln x}{\\ln b}$. The argument $20$ goes on top, the original base $5$ goes on the bottom.',
            },
            {
              question: 'Without a calculator, $\\log_3 20$ must lie between which two integers? (Hint: $3^2 = 9$, $3^3 = 27$.)',
              options: ['$2$ and $3$', '$1$ and $2$', '$3$ and $4$', '$0$ and $1$'],
              correctAnswer: 0,
              explanation: 'Since $9 < 20 < 27$, i.e. $3^2 < 20 < 3^3$, the exponent $\\log_3 20$ is between $2$ and $3$ (about $2.73$).',
            },
          ],
        },
      },
      {
        id: 'log4-cb-procedure',
        type: 'text' as const,
        content: `## Doing It on a Calculator

The whole procedure is three keystrokes once you've set it up:

1. Write $\\log_b x = \\dfrac{\\log x}{\\log b}$ (or use $\\ln$).
2. Type the **numerator** $\\log x$, then divide by the **denominator** $\\log b$.
3. **Estimate first** so you can catch an upside-down fraction.

For $\\log_3 100$: since $3^4 = 81$ and $3^5 = 243$, the answer must be between $4$ and $5$ — and indeed $\\frac{\\log 100}{\\log 3} = \\frac{2}{0.477} \\approx 4.19$. ✓

> ⚠️ Flipping the fraction is the classic error. The **original base goes on the bottom** — estimate to confirm you didn't invert it.`,
      },
      {
        id: 'log4-cb-drill',
        type: 'input-boxes' as const,
        content: `**Change of Base** 🧮

Use $\\log_b x = \\dfrac{\\log x}{\\log b}$. Round to **two decimal places**.

**1)** $\\log_2 10 = \\,?$  *(use $\\log 10 = 1$, $\\log 2 \\approx 0.301$)*
**2)** $\\log_4 64 = \\,?$  *(this one is exact — a whole number)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3.32', '3'],
          hint1: '$\\log_2 10 = \\frac{\\log 10}{\\log 2} = \\frac{1}{0.301} \\approx 3.32$.',
          hint2: '$\\log_4 64$: ask "$4$ to what power is $64$?" Since $4^3 = 64$, it equals exactly $3$ — no rounding needed.',
          hint3: 'Sanity-check #1: $2^3 = 8$ and $2^4 = 16$, so $\\log_2 10$ sits just above $3$.',
          explanation: '1) $\\frac{1}{0.301} \\approx 3.32$.  2) $4^3 = 64$, so $\\log_4 64 = 3$ exactly.',
        },
      },
      {
        id: 'log4-models',
        type: 'text' as const,
        content: `## Why Logs Run on Real Scales

Several famous measurement scales are **logarithmic** — each whole step means a $10\\times$ jump, so logs compress enormous ranges into small numbers.

| Scale | Measures | Formula |
|-------|----------|---------|
| **Richter** | earthquake energy | $M = \\log\\!\\left(\\dfrac{I}{I_0}\\right)$ |
| **Decibel** | sound loudness | $L = 10\\log\\!\\left(\\dfrac{I}{I_0}\\right)$ |
| **pH** | acidity | $\\text{pH} = -\\log[\\text{H}^+]$ |

### Earthquake Example

A magnitude-$6$ quake is **not** twice a magnitude-$3$ — because each unit is a power of $10$:

$$\\frac{10^6}{10^3} = 10^{6-3} = 10^3 = 1000$$

A magnitude-$6$ quake is **$1000$ times** as intense as a magnitude-$3$.

> ⚠️ **Don't read these scales linearly.** Going from pH $5$ to pH $3$ is $10^{(5-3)} = 100$ times more acidic, not "a little" more.`,
      },
      {
        id: 'log4-model-dropdown',
        type: 'dropdown-select' as const,
        content: `**Logarithmic Scales** 🔽

Each step on these scales is a factor of $10$.`,
        exercise: {
          dropdowns: [
            { label: 'A magnitude-$7$ quake vs. magnitude-$5$ is how many times as intense?', options: ['$100$', '$2$', '$10$', '$1000$'] },
            { label: 'In $\\text{pH} = -\\log[\\text{H}^+]$, a lower pH means the solution is:', options: ['more acidic', 'more basic', 'neutral', 'unchanged'] },
            { label: 'Each $+1$ on the Richter scale multiplies intensity by:', options: ['$10$', '$2$', '$100$', '$1$'] },
          ],
          correctAnswers: ['$100$', 'more acidic', '$10$'],
          hint1: 'Difference of $7 - 5 = 2$ units, so the ratio is $10^2 = 100$.',
          hint2: 'pH has a negative sign: smaller pH ⇒ larger $[\\text{H}^+]$ ⇒ more acidic.',
          hint3: 'A single Richter unit is one power of $10$, so $+1$ unit = $10\\times$ the intensity.',
          explanation: 'Logarithmic scales step by powers of $10$: $+2$ units = $10^2 = 100\\times$; lower pH = more acidic; $+1$ Richter = $10\\times$.',
        },
      },
      {
        id: 'log4-ph-setup',
        type: 'text' as const,
        content: `## Working the pH Formula

Chemists measure acidity with $\\text{pH} = -\\log[\\text{H}^+]$, where $[\\text{H}^+]$ is the hydrogen-ion concentration in moles per liter.

Because concentrations are tiny powers of $10$, the log makes them friendly. When $[\\text{H}^+] = 10^{-n}$:

$$\\text{pH} = -\\log(10^{-n}) = -(-n) = n$$

So the pH is simply the **positive version of the exponent**. A neutral solution sits at pH $7$; lower is acidic, higher is basic.

> 💡 You'll use $\\log(10^k) = k$ — one of the cleanest log facts there is.`,
      },
      {
        id: 'log4-ph-drill',
        type: 'input-boxes' as const,
        content: `**pH Calculation** 🧮

Use $\\text{pH} = -\\log[\\text{H}^+]$, where $[\\text{H}^+]$ is the hydrogen-ion concentration.

**1)** A solution has $[\\text{H}^+] = 10^{-4}$. Its pH $= \\,?$
**2)** Pure water has $[\\text{H}^+] = 10^{-7}$. Its pH $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '7'],
          hint1: '$\\text{pH} = -\\log(10^{-4})$. Since $\\log(10^{-4}) = -4$, the pH is $-(-4) = 4$.',
          hint2: '$\\text{pH} = -\\log(10^{-7}) = -(-7) = 7$ — exactly neutral, as expected for pure water.',
          hint3: 'Remember $\\log(10^n) = n$, so $-\\log(10^{-n}) = n$.',
          explanation: '1) $-\\log(10^{-4}) = 4$.  2) $-\\log(10^{-7}) = 7$. The exponent (made positive) is the pH.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions-algebra2',
    sections: [
      {
        id: 'log5-intro',
        type: 'text' as const,
        content: `# 🪵 Logarithmic Functions

**Part 5 of 5 — Solving Equations & Mastery Check**

---

You can now (1) read a log as an exponent, (2) graph it as an inverse, (3) wield the three laws, and (4) change base. The final skill ties it all together: **solving equations that contain logs or unknown exponents.**`,
      },
      {
        id: 'log5-solve-exp',
        type: 'text' as const,
        content: `## Solving Exponential Equations with Logs

When the unknown is **in the exponent**, take a log of both sides and use the power rule to bring it down.

### Example: $2^x = 40$

$$\\ln(2^x) = \\ln 40 \\;\\Rightarrow\\; x\\ln 2 = \\ln 40 \\;\\Rightarrow\\; x = \\frac{\\ln 40}{\\ln 2} \\approx \\frac{3.689}{0.693} \\approx 5.32$$

**Sanity check:** $2^5 = 32$ and $2^6 = 64$, so $x \\approx 5.32$ is reasonable. ✓

> 🔑 **The key move:** the power rule turns $\\ln(2^x)$ into $x\\ln 2$, freeing the exponent so you can divide for $x$.`,
      },
      {
        id: 'log5-solve-log',
        type: 'text' as const,
        content: `## Solving Logarithmic Equations

When the unknown is **inside a log**, condense to a single log, then convert to exponential form.

### Example: $\\log_2(x) = 5$

Convert to exponential form (the definition): $\\;x = 2^5 = 32$.

### Example: $\\log_3(x - 1) = 2$

$$x - 1 = 3^2 = 9 \\;\\Rightarrow\\; x = 10$$

> ⚠️ **Always check for extraneous solutions.** A log's argument must stay **positive**. Substitute back: $\\log_3(10 - 1) = \\log_3 9 = 2$ ✓. If a solution made any argument $\\le 0$, you would **reject it**.`,
      },
      {
        id: 'log5-solve-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Solution** 🔽

You're solving $\\log_2(x - 3) = 4$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Convert to exponential form:', options: ['$x - 3 = 2^4$', '$x - 3 = 4^2$', '$2^{x-3} = 4$', '$x - 3 = \\log_2 4$'] },
            { label: 'Simplify the right side:', options: ['$x - 3 = 16$', '$x - 3 = 8$', '$x - 3 = 6$', '$x - 3 = 2$'] },
            { label: 'Solve for $x$:', options: ['$x = 19$', '$x = 13$', '$x = 11$', '$x = 5$'] },
          ],
          correctAnswers: ['$x - 3 = 2^4$', '$x - 3 = 16$', '$x = 19$'],
          hint1: 'Use the definition $\\log_b A = c \\Leftrightarrow b^c = A$. Here base $2$, value $4$, so $x - 3 = 2^4$.',
          hint2: '$2^4 = 16$.',
          hint3: '$x - 3 = 16 \\Rightarrow x = 19$. Check: $\\log_2(19 - 3) = \\log_2 16 = 4$ ✓.',
          explanation: '$\\log_2(x-3) = 4 \\Rightarrow x - 3 = 2^4 = 16 \\Rightarrow x = 19$, and the argument $16 > 0$ is valid.',
        },
      },
      {
        id: 'log5-quick-ref',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Read $\\log_b x$ | "$b$ to *what* power gives $x$?" |
| Switch forms | $\\log_b x = y \\Leftrightarrow b^y = x$ |
| Product / Quotient | $\\log MN = \\log M + \\log N$; $\\log \\frac{M}{N} = \\log M - \\log N$ |
| Power | $\\log(M^p) = p\\log M$ |
| Change base | $\\log_b x = \\dfrac{\\ln x}{\\ln b}$ |
| Solve $b^x = k$ | $x = \\dfrac{\\ln k}{\\ln b}$ |
| Solve $\\log_b(\\,\\cdot\\,) = c$ | convert to $b^c$, then **check the argument $> 0$** |

> 💡 Two identities cover most quick evaluations: $\\log_b 1 = 0$ and $\\log_b b = 1$.`,
      },
      {
        id: 'log5-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

**1)** $\\log_5(x) = 3 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\log_2(x + 5) = 4 \\;\\Rightarrow\\; x = \\,?$
**3)** $10^x = 1000 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['125', '11', '3'],
          hint1: 'Convert: $\\log_5 x = 3 \\Rightarrow x = 5^3 = 125$.',
          hint2: '$\\log_2(x+5) = 4 \\Rightarrow x + 5 = 2^4 = 16 \\Rightarrow x = 11$. Check: $\\log_2 16 = 4$ ✓.',
          hint3: '$10^x = 1000 \\Rightarrow x = \\log 1000 = 3$ because $10^3 = 1000$.',
          explanation: '1) $x = 5^3 = 125$.  2) $x + 5 = 16 \\Rightarrow x = 11$.  3) $10^3 = 1000 \\Rightarrow x = 3$.',
        },
      },
      {
        id: 'log5-two-traps',
        type: 'text' as const,
        content: `## Two Traps to Avoid

Before the mixed set, lock in the two mistakes that sink the most students:

> ⚠️ **Trap 1 — dropping the check.** After solving a log equation, **substitute back** and confirm every argument is positive. Reject any root that makes a log's argument $\\le 0$.

> ⚠️ **Trap 2 — confusing the two equation types.** If the unknown is *in the exponent* ($b^x = k$), take a log. If the unknown is *inside the log* ($\\log_b(\\cdot) = c$), convert to exponential form. Pick the move that **frees the variable**.`,
      },
      {
        id: 'log5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\log_4(x) = 3$.',
              options: ['$x = 64$', '$x = 12$', '$x = 81$', '$x = 7$'],
              correctAnswer: 0,
              explanation: 'Convert to exponential form: $x = 4^3 = 64$.',
            },
            {
              question: 'Solve $3^x = 81$.',
              options: ['$x = 4$', '$x = 3$', '$x = 27$', '$x = 9$'],
              correctAnswer: 0,
              explanation: '$81 = 3^4$, so $3^x = 3^4$ gives $x = 4$. (Equivalently $x = \\log_3 81 = 4$.)',
            },
            {
              question: 'Which value of $x$ must be REJECTED as extraneous in $\\log_2(x - 6) = 3$?',
              options: [
                'No solution is extraneous; $x = 14$ is valid',
                '$x = 14$ is extraneous',
                '$x = 2$ is the answer',
                '$x = -2$',
              ],
              correctAnswer: 0,
              explanation: '$x - 6 = 2^3 = 8 \\Rightarrow x = 14$. Check the argument: $14 - 6 = 8 > 0$, so $x = 14$ is valid — nothing is rejected here.',
            },
          ],
        },
      },
      {
        id: 'log5-wrap',
        type: 'text' as const,
        content: `## You've Mastered Logarithms

From a single idea — *a log is an exponent* — you built the whole toolkit:

- **Read & switch forms:** $\\log_b x = y \\Leftrightarrow b^y = x$
- **Graph:** the inverse of $b^x$, domain $x > 0$, asymptote at $x = 0$
- **Laws:** product → sum, quotient → difference, power → coefficient
- **Change of base** and **real-world scales** (Richter, decibels, pH)
- **Solve** exponential *and* logarithmic equations (and check for extraneous roots)

> 🔑 One last time: when in doubt, **rewrite the log as an exponent.** That move unlocks almost everything. Now finish strong on the Exit Quiz.`,
      },
      {
        id: 'log5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\log_3 \\dfrac{1}{27}$.',
              options: ['$-3$', '$3$', '$-\\frac{1}{3}$', '$9$'],
              correctAnswer: 0,
              explanation: '$3^{-3} = \\frac{1}{27}$, so $\\log_3 \\frac{1}{27} = -3$.',
            },
            {
              question: 'Condense $\\log x + 2\\log y$ into a single logarithm.',
              options: ['$\\log(xy^2)$', '$\\log(x + y^2)$', '$2\\log(xy)$', '$\\log(x^2 y)$'],
              correctAnswer: 0,
              explanation: 'Power rule first: $2\\log y = \\log y^2$. Then the product rule: $\\log x + \\log y^2 = \\log(xy^2)$.',
            },
            {
              question: 'What is the domain of $y = \\log_2(x)$?',
              options: ['$x > 0$', 'all real numbers', '$x \\ge 0$', '$x \\ne 0$'],
              correctAnswer: 0,
              explanation: 'You can only take the log of a positive number, so the domain is $x > 0$. The graph has a vertical asymptote at $x = 0$.',
            },
          ],
        },
      },
    ],
  },
]
