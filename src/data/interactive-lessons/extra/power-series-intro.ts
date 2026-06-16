import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Power Series (AP Calculus BC).
 * Registry key / DB Topic.slug: 'power-series-intro'.
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'power-series-intro',
    sections: [
      {
        id: 'psi1-intro',
        type: 'text' as const,
        content: `# ➿ Introduction to Power Series

**Part 1 of 7 — What a Power Series Is**

---

### Topics in This Part

| Section |
|---------|
| Power Series as "Infinite Polynomials" |
| Center, Coefficients, and the General Form |
| Convergence Means a Number, Not Just a Pattern |

> 🔑 **Key Concept:** A **power series** is an infinite polynomial in $x$. Instead of a single number, it carries a whole formula's worth of information — but only for the values of $x$ where the infinite sum actually settles down to a real number.`,
      },
      {
        id: 'psi1-form',
        type: 'text' as const,
        content: `## The General Form

A **power series centered at $a$** is an infinite sum

$$\\sum_{n=0}^{\\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\cdots$$

Each piece has a name:

| Symbol | Name | Role |
|--------|------|------|
| $x$ | the variable | what you plug in |
| $a$ | the **center** | the point the series is "anchored" to |
| $c_n$ | the **coefficients** | the fixed numbers multiplying each power |
| $n$ | the index | counts the terms, usually from $0$ |

When the center is $a = 0$, the series simplifies to

$$\\sum_{n=0}^{\\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + \\cdots$$

> 💡 Think of a power series as a polynomial that *never stops*. A polynomial has finitely many terms; a power series has infinitely many — that's the only difference in the algebra.`,
      },
      {
        id: 'psi1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the center $a$ of the power series $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(x-3)^n}{n+1}$?',
              options: ['$a = 3$', '$a = 0$', '$a = -3$', '$a = 1$'],
              correctAnswer: 0,
              explanation: 'The series is written in powers of $(x - a)$. Matching $(x-3)^n$ to $(x-a)^n$ gives $a = 3$.',
            },
            {
              question: 'In $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{2^n}$, what is the coefficient $c_n$?',
              options: ['$\\dfrac{1}{2^n}$', '$2^n$', '$\\dfrac{1}{n}$', '$x^n$'],
              correctAnswer: 0,
              explanation: 'Write the term as $c_n x^n = \\frac{1}{2^n}\\,x^n$. The coefficient is everything multiplying $x^n$, namely $c_n = \\frac{1}{2^n}$. The $x^n$ itself is never part of the coefficient.',
            },
          ],
        },
      },
      {
        id: 'psi1-evaluate',
        type: 'text' as const,
        content: `## A Power Series Is a Function

Plug in a value of $x$ and a power series becomes an ordinary infinite sum of numbers. Sometimes that sum settles on a value; sometimes it blows up.

### Example: $\\displaystyle f(x) = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots$

Try $x = \\tfrac{1}{2}$:

$$1 + \\tfrac{1}{2} + \\tfrac{1}{4} + \\tfrac{1}{8} + \\cdots = 2$$

The partial sums $1,\\ 1.5,\\ 1.75,\\ 1.875,\\ \\ldots$ creep toward $2$. The series **converges** to $2$.

Now try $x = 2$:

$$1 + 2 + 4 + 8 + 16 + \\cdots \\to \\infty$$

The terms grow without bound, so the series **diverges** — it has no value.

> ⚠️ A power series only defines a function at the inputs where it **converges**. Finding that set of inputs is the whole game (Parts 4–5).`,
      },
      {
        id: 'psi1-partialsums',
        type: 'input-boxes' as const,
        content: `**Partial Sums** 🧮

For $\\displaystyle\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + \\cdots$ with $x = \\tfrac{1}{3}$, compute each partial sum.

**1)** $S_1 = 1 = \\,?$ *(just the first term)*
**2)** $S_2 = 1 + \\tfrac{1}{3} = \\,?$ *(decimal or fraction)*
**3)** $S_3 = 1 + \\tfrac{1}{3} + \\tfrac{1}{9} = \\,?$ *(fraction is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '4/3', '13/9'],
          hint1: 'The first partial sum is just the $n=0$ term, which is $x^0 = 1$.',
          hint2: '$1 + \\frac{1}{3} = \\frac{3}{3} + \\frac{1}{3} = \\frac{4}{3} \\approx 1.333$.',
          hint3: '$\\frac{4}{3} + \\frac{1}{9} = \\frac{12}{9} + \\frac{1}{9} = \\frac{13}{9} \\approx 1.444$.',
          explanation: 'The partial sums $1,\\ \\frac{4}{3},\\ \\frac{13}{9},\\ \\ldots$ march toward $\\frac{1}{1-1/3} = \\frac{3}{2}$, the value of the series at $x=\\frac{1}{3}$.',
        },
      },
      {
        id: 'psi1-vocab',
        type: 'text' as const,
        content: `## The Vocabulary You'll Reuse

Three words appear in every power-series problem:

| Term | Meaning |
|------|---------|
| **Converge** | the infinite sum approaches a finite number |
| **Diverge** | the sum grows without bound (or never settles) |
| **Center** | the value $a$ around which the series is built |

The series above is centered at $a = 0$, converges at $x = \\tfrac{1}{2}$, and diverges at $x = 2$. Nailing this language now makes Parts 4–5 painless.`,
      },
      {
        id: 'psi1-vocab-check',
        type: 'dropdown-select' as const,
        content: `**Vocabulary Check** 🔽

For $\\displaystyle\\sum_{n=0}^{\\infty} x^n$, classify each statement.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = \\tfrac{1}{2}$ the series', options: ['converges', 'diverges'] },
            { label: 'At $x = 3$ the series', options: ['diverges', 'converges'] },
            { label: 'The center of this series is $a =$', options: ['$0$', '$1$', '$\\tfrac{1}{2}$', '$\\infty$'] },
          ],
          correctAnswers: ['converges', 'diverges', '$0$'],
          hint1: 'At $x=\\tfrac{1}{2}$ the terms shrink and the sum approaches $2$ — it converges.',
          hint2: 'At $x=3$ the terms $1,3,9,27,\\ldots$ grow without bound — it diverges.',
          hint3: 'Written as $\\sum c_n (x-a)^n$, this is $\\sum x^n = \\sum (x-0)^n$, so $a = 0$.',
          explanation: 'It converges for $|x|<1$ (so $x=\\tfrac12$ works) and diverges for $|x|\\ge 1$ (so $x=3$ fails). The series is centered at $a=0$.',
        },
      },
      {
        id: 'psi1-recap',
        type: 'text' as const,
        content: `## What You've Got So Far

- A power series is $\\displaystyle\\sum_{n=0}^{\\infty} c_n (x-a)^n$ — an infinite polynomial centered at $a$.
- Plugging in a number turns it into an infinite series that may **converge** (has a value) or **diverge** (no value).
- The coefficients $c_n$ are the fixed numbers; the $x^n$ part is *not* part of the coefficient.

In Part 2 we meet the single most important example — the **geometric power series** — which we can sum *exactly*.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'power-series-intro',
    sections: [
      {
        id: 'psi2-intro',
        type: 'text' as const,
        content: `# ➿ Introduction to Power Series

**Part 2 of 7 — The Geometric Power Series**

---

> 🔑 **The Prototype:** The series $1 + x + x^2 + x^3 + \\cdots$ is the one power series we can sum with a clean closed-form formula. Master it and you can read the convergence of dozens of others.`,
      },
      {
        id: 'psi2-formula',
        type: 'text' as const,
        content: `## The Geometric Series Formula

For a geometric series with first term $a$ and common ratio $r$,

$$a + ar + ar^2 + ar^3 + \\cdots = \\frac{a}{1 - r}, \\qquad \\text{provided } |r| < 1.$$

If $|r| \\ge 1$ the series **diverges**. The condition $|r| < 1$ is the whole reason it converges: the terms shrink fast enough to add up to something finite.

### The power-series version

Set $a = 1$ and $r = x$. The ratio is now the variable itself:

$$\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots = \\frac{1}{1 - x}, \\qquad \\text{for } |x| < 1.$$

| $x$ | $\\dfrac{1}{1-x}$ | Converges? |
|-----|------------------|-----------|
| $\\tfrac{1}{2}$ | $2$ | ✓ ($|x|<1$) |
| $-\\tfrac{1}{2}$ | $\\tfrac{2}{3}$ | ✓ ($|x|<1$) |
| $2$ | — | ✗ diverges ($|x|\\ge 1$) |
| $1$ | — | ✗ diverges ($|x|\\ge 1$) |

> 🔑 **Memorize this:** $\\dfrac{1}{1-x} = \\displaystyle\\sum_{n=0}^{\\infty} x^n$ for $|x| < 1$. Almost every "famous" power series is built by manipulating this one.`,
      },
      {
        id: 'psi2-sum-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using $\\frac{1}{1-x} = \\sum x^n$, what does the series equal at $x = \\frac{1}{4}$?',
              options: ['$\\dfrac{4}{3}$', '$\\dfrac{3}{4}$', '$\\dfrac{4}{5}$', '$4$'],
              correctAnswer: 0,
              explanation: '$\\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$. Since $|1/4| < 1$, the formula applies.',
            },
            {
              question: 'For which value of $x$ does $\\sum_{n=0}^{\\infty} x^n$ DIVERGE?',
              options: ['$x = -\\tfrac{2}{3}$', '$x = 0.9$', '$x = \\tfrac{1}{10}$', '$x = 1.5$'],
              correctAnswer: 3,
              explanation: 'It converges exactly when $|x| < 1$. Since $|1.5| = 1.5 \\ge 1$, the series diverges there. All the others have $|x| < 1$.',
            },
          ],
        },
      },
      {
        id: 'psi2-substitution',
        type: 'text' as const,
        content: `## Building New Series by Substitution

Anywhere you see $\\dfrac{1}{1 - (\\text{something})}$, substitute that "something" in for $x$ — and substitute it into the convergence condition too.

### Example: $\\dfrac{1}{1 + x}$

Rewrite the bottom as $1 - (-x)$, so the ratio is $r = -x$:

$$\\frac{1}{1 + x} = \\frac{1}{1 - (-x)} = \\sum_{n=0}^{\\infty} (-x)^n = 1 - x + x^2 - x^3 + \\cdots$$

Converges when $|-x| < 1$, i.e. $|x| < 1$.

### Example: $\\dfrac{1}{1 - 2x}$

Here $r = 2x$:

$$\\frac{1}{1 - 2x} = \\sum_{n=0}^{\\infty} (2x)^n = 1 + 2x + 4x^2 + 8x^3 + \\cdots$$

Converges when $|2x| < 1$, i.e. $|x| < \\tfrac{1}{2}$.

> 💡 Substituting a number with a *coefficient* (like $2x$) shrinks the set of valid $x$. That's a preview of **radius of convergence** in Part 4.`,
      },
      {
        id: 'psi2-sub-drop',
        type: 'dropdown-select' as const,
        content: `**Match the Substitution** 🔽

Each function below is $\\frac{1}{1-r}$ in disguise. Identify the ratio $r$ and the convergence condition.`,
        exercise: {
          dropdowns: [
            { label: 'For $\\dfrac{1}{1 - 3x}$, the ratio is $r =$', options: ['$3x$', '$-3x$', '$x$', '$\\tfrac{x}{3}$'] },
            { label: '...so it converges when', options: ['$|x| < \\tfrac{1}{3}$', '$|x| < 3$', '$|x| < 1$', '$|x| < \\tfrac{1}{9}$'] },
            { label: 'For $\\dfrac{1}{1 + x^2}$, the ratio is $r =$', options: ['$-x^2$', '$x^2$', '$x$', '$-x$'] },
          ],
          correctAnswers: ['$3x$', '$|x| < \\tfrac{1}{3}$', '$-x^2$'],
          hint1: 'Match the denominator to $1 - r$. For $1 - 3x$, clearly $r = 3x$.',
          hint2: 'Convergence needs $|r| < 1$, so $|3x| < 1 \\Rightarrow |x| < \\frac{1}{3}$.',
          hint3: 'Write $1 + x^2 = 1 - (-x^2)$, so $r = -x^2$.',
          explanation: '$\\frac{1}{1-3x} = \\sum (3x)^n$ needs $|3x|<1$. And $\\frac{1}{1+x^2} = \\frac{1}{1-(-x^2)} = \\sum(-x^2)^n$, a series we will revisit when integrating to get $\\arctan x$.',
        },
      },
      {
        id: 'psi2-readcoef',
        type: 'text' as const,
        content: `## Reading Off a Coefficient

Once you've written $\\frac{1}{1-r} = \\sum r^n$, the coefficient of $x^k$ is whatever multiplies $x^k$ after you expand $r^n$.

**Example:** In $\\dfrac{1}{1-2x} = \\sum (2x)^n = 1 + 2x + 4x^2 + 8x^3 + \\cdots$, the coefficient of $x^3$ is $2^3 = 8$.

> ⚠️ When the ratio is negative (like $r = -x$), the coefficients **alternate sign**: $+,-,+,-,\\ldots$ Track the sign carefully.`,
      },
      {
        id: 'psi2-build-drill',
        type: 'input-boxes' as const,
        content: `**Find the First Coefficient You Need** 🧮

Expand each as a power series in $x$ and report the requested coefficient.

**1)** $\\dfrac{1}{1 - 5x} = \\sum (5x)^n$. The coefficient of $x^2$ is $\\,?$
**2)** $\\dfrac{1}{1 + x} = \\sum (-x)^n$. The coefficient of $x^3$ is $\\,?$ *(watch the sign)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['25', '-1'],
          hint1: 'The $x^2$ term is $(5x)^2 = 25x^2$, so its coefficient is $25$.',
          hint2: 'The $x^3$ term is $(-x)^3 = -x^3$, so its coefficient is $-1$.',
          hint3: 'Odd powers of $-x$ are negative; even powers are positive.',
          explanation: '1) $(5x)^2 = 25x^2 \\Rightarrow 25$.  2) $(-x)^3 = -x^3 \\Rightarrow -1$. The signs alternate $+,-,+,-,\\ldots$',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'power-series-intro',
    sections: [
      {
        id: 'psi3-intro',
        type: 'text' as const,
        content: `# ➿ Introduction to Power Series

**Part 3 of 7 — Convergence & the Ratio Test**

---

> 🔑 **The Universal Tool:** Most power series aren't geometric, so we can't just read off $|r|<1$. The **Ratio Test** handles them all by examining the limit of the ratio of consecutive terms.`,
      },
      {
        id: 'psi3-ratiotest',
        type: 'text' as const,
        content: `## The Ratio Test

For a series $\\sum a_n$, compute

$$L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|.$$

Then:

| Result | Conclusion |
|--------|-----------|
| $L < 1$ | series **converges** (absolutely) |
| $L > 1$ | series **diverges** |
| $L = 1$ | test is **inconclusive** — try another method |

For a **power series** $\\sum c_n (x-a)^n$, the term $a_n = c_n (x-a)^n$ carries the variable $x$, so $L$ will come out as $|x - a|$ times some number. Setting $L < 1$ then *solves for the $x$'s* that converge.

> 💡 The Ratio Test is the engine behind radius of convergence. We run it once, in terms of $x$, and the inequality $L < 1$ hands us the interval.`,
      },
      {
        id: 'psi3-ratio-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Ratio Test gives $L = \\lim |a_{n+1}/a_n| = 0.4$ for a particular $x$. What can you conclude?',
              options: ['Converges at that $x$', 'Diverges at that $x$', 'Inconclusive', 'Need the value of $x$ first'],
              correctAnswer: 0,
              explanation: 'Since $L = 0.4 < 1$, the Ratio Test guarantees (absolute) convergence at that $x$.',
            },
            {
              question: 'If the Ratio Test produces $L = 1$, what should you do?',
              options: ['Conclude it converges', 'Conclude it diverges', 'Use another test — the Ratio Test is inconclusive', 'Conclude $x$ is the center'],
              correctAnswer: 2,
              explanation: '$L = 1$ is the one case the Ratio Test cannot decide. This is exactly what happens at the endpoints of the interval, which we check separately in Part 5.',
            },
          ],
        },
      },
      {
        id: 'psi3-setup',
        type: 'text' as const,
        content: `## Setting Up the Ratio for a Power Series

The key algebra move: form $\\left|\\dfrac{a_{n+1}}{a_n}\\right|$ and **cancel**. The $(x-a)$ factors give one power of $|x-a|$; the coefficients give a numeric limit.

### Example: $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$

Here $a_n = \\dfrac{x^n}{n!}$, so

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left|\\frac{x^{n+1}}{(n+1)!} \\cdot \\frac{n!}{x^n}\\right| = |x| \\cdot \\frac{n!}{(n+1)!} = \\frac{|x|}{n+1}.$$

Take the limit:

$$L = \\lim_{n\\to\\infty} \\frac{|x|}{n+1} = 0.$$

Since $L = 0 < 1$ for **every** $x$, this series converges everywhere. (It's the series for $e^x$.)

> 🔑 **Cancellation shortcut:** $\\dfrac{n!}{(n+1)!} = \\dfrac{1}{n+1}$ because $(n+1)! = (n+1)\\cdot n!$. Factorials almost always collapse like this.`,
      },
      {
        id: 'psi3-factorial-drop',
        type: 'dropdown-select' as const,
        content: `**Simplify the Ratio** 🔽

Build $\\left|\\dfrac{a_{n+1}}{a_n}\\right|$ for $\\displaystyle\\sum \\frac{x^n}{n!}$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x^{n+1}}{x^n}$ simplifies to', options: ['$x$', '$x^{2n+1}$', '$1$', '$x^n$'] },
            { label: '$\\dfrac{n!}{(n+1)!}$ simplifies to', options: ['$\\dfrac{1}{n+1}$', '$n+1$', '$\\dfrac{1}{n}$', '$n!$'] },
            { label: 'So $\\displaystyle\\lim_{n\\to\\infty}\\frac{|x|}{n+1}$ equals', options: ['$0$', '$|x|$', '$\\infty$', '$1$'] },
          ],
          correctAnswers: ['$x$', '$\\dfrac{1}{n+1}$', '$0$'],
          hint1: '$\\frac{x^{n+1}}{x^n} = x^{(n+1)-n} = x^1 = x$.',
          hint2: 'Since $(n+1)! = (n+1)\\cdot n!$, the $n!$ cancels and leaves $\\frac{1}{n+1}$.',
          hint3: 'For any fixed $x$, the denominator $n+1 \\to \\infty$, so the fraction $\\to 0$.',
          explanation: 'Putting it together: $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x|}{n+1} \\to 0$. Because $L = 0 < 1$ for all $x$, $\\sum \\frac{x^n}{n!}$ converges on all of $\\mathbb{R}$.',
        },
      },
      {
        id: 'psi3-patterns',
        type: 'text' as const,
        content: `## The Three Cancellation Patterns

Almost every Ratio Test on a power series reduces to one of these, after the $|x-a|$ factors out:

| Coefficient piece | $\\dfrac{(\\text{at } n+1)}{(\\text{at } n)}$ | Limit as $n\\to\\infty$ |
|-------------------|-----------------------------|------------------------|
| factorial $n!$ | $\\dfrac{n!}{(n+1)!} = \\dfrac{1}{n+1}$ | $0$ |
| exponential $b^n$ | $\\dfrac{b^{n+1}}{b^n} = b$ | $b$ |
| power of $n$, e.g. $n$ | $\\dfrac{n}{n+1}$ | $1$ |

Recognizing which pattern you're in tells you the answer before you finish the algebra.

> 💡 Factorials drive $L$ to $0$ (huge radius); a bare power of $n$ leaves $L = |x-a|$ (radius $1$); an exponential $b^n$ scales the radius by $\\frac{1}{b}$.`,
      },
      {
        id: 'psi3-ratio-drill',
        type: 'input-boxes' as const,
        content: `**Quick Cancellations** 🧮

These show up constantly in the Ratio Test. Simplify each as a clean fraction or whole number.

**1)** $\\dfrac{(n+1)!}{n!} = \\,?$ *(answer in terms of $n$, e.g. "n+1")*
**2)** $\\dfrac{2^{n+1}}{2^n} = \\,?$
**3)** $\\displaystyle\\lim_{n\\to\\infty}\\frac{n}{n+1} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['n+1', '2', '1'],
          hint1: '$(n+1)! = (n+1)\\cdot n!$, so dividing by $n!$ leaves $n+1$.',
          hint2: '$\\frac{2^{n+1}}{2^n} = 2^{(n+1)-n} = 2^1 = 2$.',
          hint3: 'Divide top and bottom by $n$: $\\frac{1}{1 + 1/n} \\to \\frac{1}{1+0} = 1$.',
          explanation: '1) $n+1$.  2) $2$.  3) $1$. Factorials, exponentials, and polynomial-in-$n$ ratios are the three patterns you will cancel in nearly every Ratio Test.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'power-series-intro',
    sections: [
      {
        id: 'psi4-intro',
        type: 'text' as const,
        content: `# ➿ Introduction to Power Series

**Part 4 of 7 — Radius of Convergence**

---

> 🔑 **The Big Result:** Every power series converges on an interval centered at $a$. The half-width of that interval is the **radius of convergence** $R$ — and the Ratio Test computes it directly.`,
      },
      {
        id: 'psi4-radius',
        type: 'text' as const,
        content: `## Three Possible Outcomes

When you run the Ratio Test on $\\sum c_n (x-a)^n$, the limit $L$ comes out as $|x-a|$ times a number. Setting $L < 1$ gives exactly one of three pictures:

| Outcome | What $L < 1$ becomes | Radius |
|---------|----------------------|--------|
| Converges only at $x = a$ | $L = \\infty$ unless $x=a$ | $R = 0$ |
| Converges on a finite interval | $|x-a| < R$ | $0 < R < \\infty$ |
| Converges for all $x$ | $L = 0 < 1$ always | $R = \\infty$ |

The series always converges **at the center** $x = a$ (every term after the first is $0$). The radius $R$ measures how far out from $a$ you can go.

$$\\underbrace{a - R}_{\\text{left end}} \\;\\longleftarrow\\; a \\;\\longrightarrow\\; \\underbrace{a + R}_{\\text{right end}}$$

> 💡 "Radius" is literal: $R$ is the distance from the center $a$ to where convergence stops.`,
      },
      {
        id: 'psi4-radius-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Ratio Test on a series centered at $a = 2$ yields $L = |x - 2|$. Setting $L < 1$, what is the radius $R$?',
              options: ['$R = 1$', '$R = 2$', '$R = 0$', '$R = \\infty$'],
              correctAnswer: 0,
              explanation: '$L = |x-2| < 1$ matches the form $|x - a| < R$ with $R = 1$. Convergence reaches a distance $1$ from the center.',
            },
            {
              question: 'For $\\sum \\frac{x^n}{n!}$ we found $L = 0$ for every $x$. What is its radius of convergence?',
              options: ['$R = \\infty$', '$R = 0$', '$R = 1$', '$R = e$'],
              correctAnswer: 0,
              explanation: 'Since $L = 0 < 1$ no matter what $x$ is, the series converges everywhere, so $R = \\infty$.',
            },
          ],
        },
      },
      {
        id: 'psi4-worked',
        type: 'text' as const,
        content: `## Worked Example: Find $R$

### Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n}$

Form the ratio with $a_n = \\dfrac{(x-3)^n}{n}$:

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left|\\frac{(x-3)^{n+1}}{n+1}\\cdot \\frac{n}{(x-3)^n}\\right| = |x-3|\\cdot\\frac{n}{n+1}.$$

Take the limit (the $\\frac{n}{n+1}\\to 1$):

$$L = |x-3|\\cdot 1 = |x-3|.$$

Set $L < 1$:

$$|x - 3| < 1 \\quad\\Longrightarrow\\quad R = 1.$$

The series converges on $(3-1,\\ 3+1) = (2,\\ 4)$ — endpoints still to be checked in Part 5.

### Example: $\\displaystyle\\sum_{n=0}^{\\infty} n!\\,x^n$

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left|\\frac{(n+1)!\\,x^{n+1}}{n!\\,x^n}\\right| = (n+1)\\,|x| \\;\\xrightarrow[n\\to\\infty]{}\\; \\infty \\quad(\\text{for } x \\ne 0).$$

This is $\\infty$ unless $x = 0$, so the series converges **only at the center**: $R = 0$.

> ⚠️ A larger coefficient growth (like $n!$ in the numerator) *shrinks* the radius. Faster-growing coefficients ⇒ smaller $R$.`,
      },
      {
        id: 'psi4-radius-drop',
        type: 'dropdown-select' as const,
        content: `**Read Off the Radius** 🔽

After running the Ratio Test you get the limit $L$ shown. State the radius.`,
        exercise: {
          dropdowns: [
            { label: '$L = \\dfrac{|x|}{4}$', options: ['$R = 4$', '$R = \\tfrac{1}{4}$', '$R = 1$', '$R = \\infty$'] },
            { label: '$L = 3|x - 5|$', options: ['$R = \\tfrac{1}{3}$', '$R = 3$', '$R = 5$', '$R = 15$'] },
            { label: '$L = 0$ for all $x$', options: ['$R = \\infty$', '$R = 0$', '$R = 1$', 'depends on $x$'] },
          ],
          correctAnswers: ['$R = 4$', '$R = \\tfrac{1}{3}$', '$R = \\infty$'],
          hint1: 'Set $L < 1$: $\\frac{|x|}{4} < 1 \\Rightarrow |x| < 4$, so $R = 4$.',
          hint2: '$3|x-5| < 1 \\Rightarrow |x-5| < \\frac{1}{3}$, so $R = \\frac{1}{3}$.',
          hint3: 'If $L = 0 < 1$ regardless of $x$, the series converges everywhere: $R = \\infty$.',
          explanation: 'Always rewrite $L < 1$ in the form $|x - a| < R$. The number on the right is the radius. Coefficients in front of $|x-a|$ get reciprocated.',
        },
      },
      {
        id: 'psi4-isolate',
        type: 'text' as const,
        content: `## Isolating $R$ from $L < 1$

The mechanical recipe never changes:

1. Write the Ratio-Test limit as $L = k\\,|x - a|$ for some constant $k \\ge 0$.
2. Impose $L < 1$: that's $k\\,|x-a| < 1$.
3. Divide by $k$: $|x - a| < \\dfrac{1}{k}$, so $R = \\dfrac{1}{k}$.

**Special cases:** if $L = 0$ for all $x$ (think $k = 0$), then $R = \\infty$; if $L = \\infty$ except at $x = a$, then $R = 0$.

> 🔑 The radius is the **reciprocal** of the constant multiplying $|x-a|$ in the limit. Bigger constant ⇒ smaller radius.`,
      },
      {
        id: 'psi4-radius-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Radius** 🧮

Run the Ratio Test and report $R$ (use the word "infinity" for $R=\\infty$).

**1)** $\\displaystyle\\sum \\frac{x^n}{n}$ gives $L = |x|$. Then $R = \\,?$
**2)** $\\displaystyle\\sum \\frac{(x-1)^n}{2^n}$ gives $L = \\frac{|x-1|}{2}$. Then $R = \\,?$
**3)** $\\displaystyle\\sum \\frac{x^n}{n!}$ gives $L = 0$. Then $R = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '2', 'infinity'],
          hint1: '$|x| < 1$ is already in the form $|x| < R$, so $R = 1$.',
          hint2: '$\\frac{|x-1|}{2} < 1 \\Rightarrow |x-1| < 2$, so $R = 2$.',
          hint3: '$L = 0 < 1$ for every $x$, so convergence is everywhere: $R = \\infty$.',
          explanation: '1) $R=1$.  2) $R=2$.  3) $R=\\infty$. The radius is whatever bounds $|x-a|$ once you isolate it from $L < 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'power-series-intro',
    sections: [
      {
        id: 'psi5-intro',
        type: 'text' as const,
        content: `# ➿ Introduction to Power Series

**Part 5 of 7 — The Interval of Convergence**

---

> 🔑 **Finish the Job:** The radius gives the *open* interval $(a-R,\\ a+R)$. But the Ratio Test goes silent at the two endpoints ($L=1$ there). You must check each endpoint **by hand** to get the full **interval of convergence**.`,
      },
      {
        id: 'psi5-endpoints',
        type: 'text' as const,
        content: `## Why Endpoints Need Special Care

At $x = a \\pm R$, the Ratio Test gives $L = 1$ — inconclusive. So you **plug each endpoint into the original series** and test the resulting numeric series with a different tool:

| Endpoint series looks like | Use this |
|----------------------------|----------|
| $\\sum \\frac{1}{n^p}$ | $p$-series: converges iff $p > 1$ |
| $\\sum \\frac{(-1)^n}{n^p}$, terms $\\to 0$, decreasing | Alternating Series Test: converges |
| $\\sum \\frac{1}{n}$ | harmonic series: **diverges** |
| terms don't $\\to 0$ | $n$-th term test: **diverges** |

Each endpoint is independent: an interval can be open, closed, or half-open. The four possible shapes are $(a-R, a+R)$, $[a-R, a+R]$, $[a-R, a+R)$, $(a-R, a+R]$.

> ⚠️ **Never assume** both endpoints behave the same. Check $x = a - R$ and $x = a + R$ separately.`,
      },
      {
        id: 'psi5-endpoint-worked',
        type: 'text' as const,
        content: `## Worked Example: Full Interval

### Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$  (center $a = 0$, $R = 1$)

**Open interval:** $(-1, 1)$. Now test the two endpoints.

**Right endpoint $x = 1$:**
$$\\sum_{n=1}^{\\infty} \\frac{1^n}{n} = \\sum_{n=1}^{\\infty} \\frac{1}{n} \\quad\\text{— the harmonic series, which DIVERGES.}$$
So $x = 1$ is **out**.

**Left endpoint $x = -1$:**
$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n} = -1 + \\tfrac{1}{2} - \\tfrac{1}{3} + \\cdots \\quad\\text{— alternating harmonic, which CONVERGES.}$$
So $x = -1$ is **in**.

**Interval of convergence:** $\\boxed{[-1,\\ 1)}$ — closed on the left, open on the right.

> 💡 This is the classic asymmetric case: same radius, but the two endpoints disagree. It's why endpoint checking can't be skipped.`,
      },
      {
        id: 'psi5-endpoint-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'At an endpoint, the series becomes $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$. Does that endpoint belong to the interval?',
              options: ['Yes — it is a $p$-series with $p = 2 > 1$, so it converges', 'No — all $p$-series diverge', 'No — it is the harmonic series', 'Cannot tell without the Ratio Test'],
              correctAnswer: 0,
              explanation: '$\\sum \\frac{1}{n^2}$ is a $p$-series with $p = 2 > 1$, so it converges. That endpoint is included (bracket).',
            },
            {
              question: 'At an endpoint the series becomes $\\sum_{n=1}^{\\infty} \\frac{1}{n}$. Is the endpoint included?',
              options: ['No — the harmonic series diverges, so the endpoint is excluded', 'Yes — the harmonic series converges', 'Yes — every endpoint is always included', 'Cannot be determined'],
              correctAnswer: 0,
              explanation: 'The harmonic series $\\sum \\frac{1}{n}$ diverges ($p = 1$ is not $> 1$). The endpoint is excluded (parenthesis).',
            },
          ],
        },
      },
      {
        id: 'psi5-tests-recap',
        type: 'text' as const,
        content: `## Your Endpoint Toolkit

When you plug an endpoint in, you'll meet one of a few familiar numeric series. Keep these verdicts at your fingertips:

| Series | Verdict |
|--------|---------|
| $\\sum \\frac{1}{n}$ (harmonic) | diverges |
| $\\sum \\frac{1}{n^2},\\ \\sum \\frac{1}{n^3}$ ($p>1$) | converge |
| $\\sum \\frac{(-1)^n}{n}$ (alternating harmonic) | converges |
| $\\sum (-1)^n$ or any series whose terms don't $\\to 0$ | diverges |

> 💡 The $p$-series rule ($\\sum \\frac{1}{n^p}$ converges iff $p > 1$) plus the Alternating Series Test cover almost every endpoint you'll see in BC.`,
      },
      {
        id: 'psi5-endpoint-drop',
        type: 'dropdown-select' as const,
        content: `**Classify Each Endpoint Series** 🔽

Decide whether each numeric series (from plugging in an endpoint) converges or diverges.`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$', options: ['Converges', 'Diverges'] },
            { label: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n}$', options: ['Diverges', 'Converges'] },
            { label: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^3}$', options: ['Converges', 'Diverges'] },
            { label: '$\\displaystyle\\sum_{n=1}^{\\infty} (-1)^n$', options: ['Diverges', 'Converges'] },
          ],
          correctAnswers: ['Converges', 'Diverges', 'Converges', 'Diverges'],
          hint1: 'The alternating harmonic series converges by the Alternating Series Test (terms decrease to $0$).',
          hint2: 'The plain harmonic series $\\sum \\frac{1}{n}$ diverges; $\\sum \\frac{1}{n^3}$ is a $p$-series with $p=3>1$.',
          hint3: '$\\sum(-1)^n = -1+1-1+\\cdots$ has terms that do NOT approach $0$, so it diverges by the $n$-th term test.',
          explanation: 'Converges: alternating harmonic and the $p=3$ series. Diverges: the harmonic series ($p=1$) and $\\sum(-1)^n$ (terms fail to $\\to 0$).',
        },
      },
      {
        id: 'psi5-notation',
        type: 'text' as const,
        content: `## Writing the Final Answer

Translate each endpoint verdict into bracket notation:

- endpoint **converges** ⇒ **closed** bracket: $[\\ $ or $\\ ]$
- endpoint **diverges** ⇒ **open** parenthesis: $(\\ $ or $\\ )$

So a series centered at $a$ with radius $R$ whose left endpoint converges and right endpoint diverges has interval $[\\,a-R,\\ a+R\\,)$.

> ⚠️ The endpoints themselves are always $a - R$ and $a + R$ — the radius measures the distance from the center to each end.`,
      },
      {
        id: 'psi5-interval-drill',
        type: 'input-boxes' as const,
        content: `**Build the Interval** 🧮

A power series is centered at $a = 4$ with radius $R = 3$. The left endpoint converges; the right endpoint diverges.

**1)** Left end of the interval: $a - R = \\,?$
**2)** Right end of the interval: $a + R = \\,?$
**3)** Is the LEFT endpoint included? Enter "yes" or "no".`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '7', 'yes'],
          hint1: 'Left end $= a - R = 4 - 3$.',
          hint2: 'Right end $= a + R = 4 + 3$.',
          hint3: 'The left endpoint converges, so it is included (a closed bracket).',
          explanation: 'Endpoints are $a\\pm R = 4 \\pm 3 = 1$ and $7$. Left converges (included), right diverges (excluded), so the interval of convergence is $[1, 7)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'power-series-intro',
    sections: [
      {
        id: 'psi6-intro',
        type: 'text' as const,
        content: `# ➿ Introduction to Power Series

**Part 6 of 7 — Working With Power Series**

---

> 🔑 **Power Series Are Functions:** Inside the open interval of convergence, you can treat a power series exactly like a polynomial — substitute, differentiate, and integrate it **term by term**, and the radius $R$ stays the same.`,
      },
      {
        id: 'psi6-calculus',
        type: 'text' as const,
        content: `## Term-by-Term Differentiation & Integration

If $f(x) = \\sum_{n=0}^{\\infty} c_n x^n$ on $(-R, R)$, then on that same interval:

$$f'(x) = \\sum_{n=1}^{\\infty} n\\,c_n\\,x^{n-1}, \\qquad \\int f(x)\\,dx = C + \\sum_{n=0}^{\\infty} \\frac{c_n}{n+1}\\,x^{n+1}.$$

The **radius of convergence is unchanged** (only the endpoints might change).

### Example: a new series from the geometric one

Start from $\\dfrac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$ and differentiate both sides:

$$\\frac{d}{dx}\\left[\\frac{1}{1-x}\\right] = \\frac{1}{(1-x)^2}, \\qquad \\frac{d}{dx}\\sum_{n=0}^{\\infty} x^n = \\sum_{n=1}^{\\infty} n\\,x^{n-1}.$$

So $\\dfrac{1}{(1-x)^2} = \\sum_{n=1}^{\\infty} n\\,x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\cdots$, still valid for $|x| < 1$.

> 💡 This is the power of the prototype: one known series spawns a whole family by differentiating, integrating, and substituting.`,
      },
      {
        id: 'psi6-deriv-drop',
        type: 'dropdown-select' as const,
        content: `**Differentiate Term by Term** 🔽

Differentiate $f(x) = 1 + x + x^2 + x^3 + \\cdots$ term by term.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d}{dx}[x^2] =$', options: ['$2x$', '$x$', '$2$', '$\\tfrac{x^3}{3}$'] },
            { label: '$\\dfrac{d}{dx}[x^3] =$', options: ['$3x^2$', '$x^2$', '$3x$', '$\\tfrac{x^4}{4}$'] },
            { label: "So $f'(x) = 1 + 2x + 3x^2 + \\cdots$ equals", options: ['$\\dfrac{1}{(1-x)^2}$', '$\\dfrac{1}{1-x}$', '$\\ln(1-x)$', '$\\dfrac{1}{1+x}$'] },
          ],
          correctAnswers: ['$2x$', '$3x^2$', '$\\dfrac{1}{(1-x)^2}$'],
          hint1: 'Power rule: $\\frac{d}{dx}[x^2] = 2x^{2-1} = 2x$.',
          hint2: 'Power rule: $\\frac{d}{dx}[x^3] = 3x^{3-1} = 3x^2$.',
          hint3: 'Differentiating $\\frac{1}{1-x}$ gives $\\frac{1}{(1-x)^2}$, which the new series must equal.',
          explanation: 'Term-by-term differentiation of $\\sum x^n$ produces $\\sum n x^{n-1} = 1 + 2x + 3x^2 + \\cdots = \\frac{1}{(1-x)^2}$, on the same interval $|x|<1$.',
        },
      },
      {
        id: 'psi6-integrate',
        type: 'text' as const,
        content: `## Integrating to Discover $\\ln$ and $\\arctan$

### A series for $\\ln(1+x)$

Start from $\\dfrac{1}{1+x} = \\sum_{n=0}^{\\infty} (-x)^n = 1 - x + x^2 - x^3 + \\cdots$ (valid for $|x|<1$). Integrate term by term from $0$ to $x$:

$$\\ln(1+x) = \\int_0^x \\frac{dt}{1+t} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n}\\,x^n.$$

### A series for $\\arctan x$

Start from $\\dfrac{1}{1+x^2} = \\sum_{n=0}^{\\infty} (-x^2)^n = 1 - x^2 + x^4 - \\cdots$ and integrate:

$$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n+1}\\,x^{2n+1}.$$

> 🔑 Integrating the geometric prototype after a clever substitution is *exactly* how the famous series for $\\ln(1+x)$ and $\\arctan x$ are derived. Both have radius $R = 1$.`,
      },
      {
        id: 'psi6-apply-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When you differentiate a power series term by term, what happens to its radius of convergence $R$?',
              options: ['It stays the same', 'It always doubles', 'It always shrinks to $0$', 'It becomes $\\infty$'],
              correctAnswer: 0,
              explanation: 'Term-by-term differentiation (and integration) preserves the radius $R$. Only the endpoint behavior can change.',
            },
            {
              question: 'Which known series comes from integrating $\\frac{1}{1+x^2} = 1 - x^2 + x^4 - \\cdots$?',
              options: ['$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$', '$\\ln(1+x)$', '$e^x$', '$\\frac{1}{(1-x)^2}$'],
              correctAnswer: 0,
              explanation: 'Since $\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}$, integrating the series for $\\frac{1}{1+x^2}$ term by term yields the series for $\\arctan x$.',
            },
          ],
        },
      },
      {
        id: 'psi6-patterns',
        type: 'text' as const,
        content: `## The Patterns Worth Memorizing

These three fall straight out of the geometric prototype and appear all over BC:

| Function | Series | Coefficient of $x^n$ |
|----------|--------|----------------------|
| $\\dfrac{1}{(1-x)^2}$ | $1 + 2x + 3x^2 + 4x^3 + \\cdots$ | $n+1$ (for $x^n$) |
| $\\ln(1+x)$ | $x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\cdots$ | $\\dfrac{(-1)^{n-1}}{n}$ |
| $\\arctan x$ | $x - \\dfrac{x^3}{3} + \\dfrac{x^5}{5} - \\cdots$ | only **odd** powers, signs alternate |

> 💡 Reading off a single coefficient is just locating the matching power of $x$ in the pattern — no full expansion required.`,
      },
      {
        id: 'psi6-coef-drill',
        type: 'input-boxes' as const,
        content: `**Pull Out a Coefficient** 🧮

Use the derived series above.

**1)** In $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$, the coefficient of $x^3$ is $\\,?$ *(fraction)*
**2)** In $\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$, the coefficient of $x^5$ is $\\,?$ *(fraction)*
**3)** In $\\frac{1}{(1-x)^2} = 1 + 2x + 3x^2 + 4x^3 + \\cdots$, the coefficient of $x^3$ is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/3', '1/5', '4'],
          hint1: 'The pattern of $\\ln(1+x)$ is $+x, -\\frac{x^2}{2}, +\\frac{x^3}{3}$, so the $x^3$ coefficient is $+\\frac{1}{3}$.',
          hint2: 'The pattern of $\\arctan x$ is $+x, -\\frac{x^3}{3}, +\\frac{x^5}{5}$, so the $x^5$ coefficient is $+\\frac{1}{5}$.',
          hint3: 'For $\\frac{1}{(1-x)^2} = \\sum n x^{n-1}$, the $x^3$ term is $4x^3$, so the coefficient is $4$.',
          explanation: '1) $\\frac{1}{3}$.  2) $\\frac{1}{5}$.  3) $4$. Each pattern follows from differentiating or integrating the geometric prototype.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'power-series-intro',
    sections: [
      {
        id: 'psi7-intro',
        type: 'text' as const,
        content: `# ➿ Introduction to Power Series

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) read a power series's center and coefficients, (2) sum the geometric prototype, (3) run the Ratio Test, (4) find the radius $R$, (5) check endpoints for the full interval, and (6) build new series by calculus. Let's put it all together.`,
      },
      {
        id: 'psi7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Recognize the form | $\\sum c_n (x-a)^n$: center $a$, coefficients $c_n$ |
| Sum the prototype | $\\dfrac{1}{1-x} = \\sum x^n$ for $|x|<1$ |
| Test convergence | Ratio Test: $L = \\lim\\left|\\frac{a_{n+1}}{a_n}\\right|$; converge if $L<1$ |
| Find the radius | solve $L < 1$ into $|x-a| < R$ |
| Find the interval | open interval $(a-R, a+R)$, then check **both** endpoints |
| Make new series | differentiate / integrate / substitute (same $R$) |

> ⚠️ Two reflexes to keep: the Ratio Test is **inconclusive at endpoints** ($L=1$), so test them by hand; and faster-growing coefficients give a **smaller** radius.`,
      },
      {
        id: 'psi7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{3^n}$.',
              options: ['$R = 3$', '$R = \\tfrac{1}{3}$', '$R = 1$', '$R = \\infty$'],
              correctAnswer: 0,
              explanation: 'This is geometric with ratio $r = \\frac{x}{3}$. It converges when $\\left|\\frac{x}{3}\\right| < 1$, i.e. $|x| < 3$, so $R = 3$.',
            },
            {
              question: 'The series $\\sum \\frac{(x-2)^n}{n}$ has $R = 1$, so its open interval is $(1, 3)$. At $x = 1$ it becomes $\\sum \\frac{(-1)^n}{n}$ and at $x = 3$ it becomes $\\sum \\frac{1}{n}$. What is the full interval of convergence?',
              options: ['$[1, 3)$', '$(1, 3]$', '$[1, 3]$', '$(1, 3)$'],
              correctAnswer: 0,
              explanation: 'At $x=1$: alternating harmonic — converges (include). At $x=3$: harmonic — diverges (exclude). So the interval is $[1, 3)$.',
            },
          ],
        },
      },
      {
        id: 'psi7-strategy',
        type: 'text' as const,
        content: `## One Last Walkthrough

Faced with any "find the interval of convergence" problem, run this checklist:

1. **Ratio Test** ⇒ get $L$ in terms of $|x - a|$.
2. **Set $L < 1$** ⇒ isolate $|x - a| < R$ to read the radius $R$.
3. **Write the open interval** $(a-R,\\ a+R)$.
4. **Test each endpoint** $x = a \\pm R$ separately with a $p$-series / alternating / $n$-th-term argument.
5. **Assemble** the brackets: closed where it converges, open where it diverges.

> 🔑 The same five steps solve every problem in this lesson. The next drill and the Exit Quiz are just that checklist in action.`,
      },
      {
        id: 'psi7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $\\displaystyle\\sum \\frac{x^n}{n!}$ converges for all $x$. Its radius is $R = \\,?$ *(use "infinity")*
**2)** The Ratio Test on a series centered at $a = -2$ gives $L = \\frac{|x+2|}{5}$. Its radius is $R = \\,?$
**3)** Using $\\frac{1}{1-x} = \\sum x^n$, evaluate the series at $x = -\\frac{1}{2}$: the sum is $\\,?$ *(fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['infinity', '5', '2/3'],
          hint1: 'Converges for all $x$ means the radius is infinite.',
          hint2: '$\\frac{|x+2|}{5} < 1 \\Rightarrow |x+2| < 5$, so $R = 5$.',
          hint3: '$\\frac{1}{1-(-1/2)} = \\frac{1}{3/2} = \\frac{2}{3}$. Since $|-1/2| < 1$, the formula applies.',
          explanation: '1) $R = \\infty$.  2) $R = 5$ (note $|x+2| = |x-(-2)|$, centered at $-2$).  3) $\\frac{1}{1-(-1/2)} = \\frac{2}{3}$.',
        },
      },
      {
        id: 'psi7-final-text',
        type: 'text' as const,
        content: `## You're Ready

You've connected every piece: the **form** of a power series, the **geometric prototype** you can sum exactly, the **Ratio Test** that decides convergence, the **radius** $R$, the **interval** with its hand-checked endpoints, and the **calculus** that spins one series into many.

One final set of questions to lock it in. 🎓`,
      },
      {
        id: 'psi7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For the power series $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(x+1)^n}{4^n}$, what is the center $a$?',
              options: ['$a = -1$', '$a = 1$', '$a = 4$', '$a = 0$'],
              correctAnswer: 0,
              explanation: 'Write $(x+1)^n = (x-(-1))^n$, matching $(x-a)^n$ with $a = -1$. The series is centered at $-1$.',
            },
            {
              question: 'A power series has radius $R = 0$. Where does it converge?',
              options: ['Only at its center $x = a$', 'On all of $\\mathbb{R}$', 'On $(-1, 1)$', 'Nowhere at all'],
              correctAnswer: 0,
              explanation: '$R = 0$ means convergence only at the center $x = a$ (every series converges there, since all terms past the first vanish). It never converges nowhere — the center always works.',
            },
            {
              question: 'At an endpoint, the Ratio Test gives $L = 1$. What is the correct next step?',
              options: ['Substitute the endpoint into the series and apply a different test', 'Conclude the series converges there', 'Conclude the series diverges there', 'Conclude the radius is $1$'],
              correctAnswer: 0,
              explanation: 'At $L = 1$ the Ratio Test is inconclusive, so you plug the endpoint value into the original series and test it with a $p$-series, alternating series, or $n$-th term test.',
            },
          ],
        },
      },
    ],
  },
]
