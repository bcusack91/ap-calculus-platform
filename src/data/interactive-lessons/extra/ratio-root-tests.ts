import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Ratio and Root Tests (AP Calculus BC).
 * Registry key / DB Topic.slug: 'ratio-root-tests'.
 * 7 parts, gold-standard structure: why we need a test that reads a series'
 * own growth → the Ratio Test statement & the L < 1 / L > 1 / L = 1 trichotomy →
 * running the Ratio Test (factorials, exponentials, the n! / n^n star case) →
 * the Root Test and when to reach for it → power series & the radius of
 * convergence → choosing the right test / common pitfalls → mixed practice &
 * exit quiz. LaTeX uses doubled backslashes (these are JS template-literal
 * strings). Every limit, factorial ratio, and radius was recomputed by hand
 * before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'ratio-root-tests',
    sections: [
      {
        id: 'rrt1-intro',
        type: 'text' as const,
        content: `# ➗ The Ratio and Root Tests

**Part 1 of 7 — Why Read a Series' Own Growth Rate?**

---

### Topics in This Part

| Section |
|---------|
| The Problem with Comparison Tests |
| Terms That Grow or Shrink "Geometrically" |
| The Big Idea: Compare a Series to Itself |

> 🔑 **Key Concept:** The **Ratio Test** and **Root Test** decide convergence by measuring how fast a series' terms shrink — using *only the terms themselves*. No comparison series to invent, no integral to compute. When you see **factorials** ($n!$), **exponentials** ($r^n$), or **$n$th powers** ($n^n$), these are almost always the right tools.`,
      },
      {
        id: 'rrt1-problem',
        type: 'text' as const,
        content: `## The Problem They Solve

Tests like the **Comparison** and **Integral** tests force you to be clever: you must *find* a second series to compare against, or *integrate* a function. That's hard for a series like

$$\\sum_{n=1}^{\\infty} \\frac{n!}{n^n} \\quad\\text{or}\\quad \\sum_{n=1}^{\\infty} \\frac{2^n}{n^2}.$$

What do you even compare $\\dfrac{n!}{n^n}$ to? Its terms involve a factorial *and* an $n$th power — there's no obvious benchmark.

The Ratio and Root Tests sidestep this entirely. They ask one question:

> 💡 **The guiding question:** "From one term to the next, by what factor does the size of the terms multiply?" If each term is (eventually) a fraction of the one before it, the series behaves like a **geometric series** and converges.`,
      },
      {
        id: 'rrt1-spot',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For which series is the Ratio Test the most natural first choice?',
              options: [
                '$\\sum \\dfrac{3^n}{n!}$',
                '$\\sum \\dfrac{1}{n^2 + 1}$',
                '$\\sum \\dfrac{1}{\\sqrt{n}}$',
                '$\\sum \\dfrac{n}{n+5}$',
              ],
              correctAnswer: 0,
              explanation: 'A factorial in the term ($n!$) is the classic signal for the Ratio Test, because $\\frac{(n+1)!}{n!} = n+1$ simplifies beautifully. The others are rational in $n$ (better for comparison / $p$-series) and the last one fails the $n$th-term test outright.',
            },
            {
              question: 'A geometric series $\\sum r^n$ converges precisely when:',
              options: ['$|r| < 1$', '$|r| > 1$', '$r > 0$', '$|r| = 1$'],
              correctAnswer: 0,
              explanation: 'The geometric series converges iff $|r| < 1$. The Ratio and Root Tests generalize this exact threshold to the limiting ratio $L$.',
            },
          ],
        },
      },
      {
        id: 'rrt1-geometric',
        type: 'text' as const,
        content: `## The Geometric Series Is the Model

Recall the geometric series $\\sum r^n$. It **converges** exactly when $|r| < 1$ and **diverges** when $|r| \\ge 1$. The key feature: every term is the previous term times the **same ratio** $r$.

$$\\frac{a_{n+1}}{a_n} = \\frac{r^{n+1}}{r^n} = r \\quad\\text{(constant ratio)}$$

Most series aren't perfectly geometric, but many *behave* geometrically **in the limit** — the ratio of consecutive terms settles down to some number $L$ as $n \\to \\infty$. If that limiting ratio $L$ is less than $1$, the tail of the series shrinks like a geometric series with $r = L < 1$, so it converges.

| Series | Ratio $\\frac{a_{n+1}}{a_n}$ | Behaves like geometric? |
|--------|------------------------------|--------------------------|
| $\\sum r^n$ | exactly $r$ | yes (exactly) |
| $\\sum \\frac{2^n}{n!}$ | $\\frac{2}{n+1} \\to 0$ | yes, $L = 0 < 1$ |
| $\\sum \\frac{1}{n^2}$ | $\\left(\\frac{n}{n+1}\\right)^2 \\to 1$ | borderline, $L = 1$ |

> 🔑 **The whole topic in one sentence:** Compute the limiting ratio (or limiting $n$th root) of the terms, call it $L$, and compare $L$ to $1$ — just like comparing $|r|$ to $1$ for a geometric series.`,
      },
      {
        id: 'rrt1-ratio-warmup',
        type: 'input-boxes' as const,
        content: `**Compute the Ratio** 🧮

For each series with term $a_n$, simplify the ratio $\\dfrac{a_{n+1}}{a_n}$ and enter its **limit** as $n \\to \\infty$.

**1)** $a_n = \\dfrac{1}{2^n}$.  $\\;\\dfrac{a_{n+1}}{a_n} = \\dfrac{1}{2}$, so the limit $L = \\,?$
**2)** $a_n = \\dfrac{5^n}{n!}$.  $\\;\\dfrac{a_{n+1}}{a_n} = \\dfrac{5}{n+1}$, so the limit $L = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/2', '0'],
          hint1: '$\\dfrac{1/2^{n+1}}{1/2^n} = \\dfrac{2^n}{2^{n+1}} = \\dfrac{1}{2}$ — a constant, so the limit is just $\\dfrac{1}{2}$.',
          hint2: '$\\dfrac{5^{n+1}/(n+1)!}{5^n/n!} = 5 \\cdot \\dfrac{n!}{(n+1)!} = \\dfrac{5}{n+1}$. As $n \\to \\infty$, $\\dfrac{5}{n+1} \\to 0$.',
          hint3: 'A constant ratio has that constant as its limit; a ratio with $n$ in a growing denominator tends to $0$.',
          explanation: '1) The ratio is the constant $\\tfrac{1}{2}$, so $L = \\tfrac{1}{2}$. 2) The ratio $\\tfrac{5}{n+1} \\to 0$, so $L = 0$. Both have $L < 1$, foreshadowing convergence.',
        },
      },
      {
        id: 'rrt1-signal-text',
        type: 'text' as const,
        content: `## Learning to Recognize the Trigger

Before computing anything, a strong student *glances* at a series and predicts which test will pay off. The structure of $a_n$ is the tell:

- A **factorial** ($n!$) almost always means the **Ratio Test** — the $\\frac{(n+1)!}{n!} = n+1$ cancellation is irresistible.
- A **whole-term $n$th power** ($\\left(\\dots\\right)^n$ or $n^n$) means the **Root Test** — the $n$th root peels the exponent off.
- A **plain rational in $n$** ($\\frac{1}{n^2+1}$) means *neither*; Ratio and Root will only hand you $L = 1$.

Practice that triage now.`,
      },
      {
        id: 'rrt1-signal-check',
        type: 'dropdown-select' as const,
        content: `**Read the Signal** 🔽

Match each term to the structural feature that hints at a Ratio/Root approach.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{n!}{4^n}$ contains a:', options: ['factorial', 'whole-term $n$th power', 'plain rational in $n$'] },
            { label: '$\\left(\\frac{n}{n+2}\\right)^n$ contains a:', options: ['whole-term $n$th power', 'factorial', 'plain rational in $n$'] },
            { label: '$\\frac{1}{n^2+1}$ contains a:', options: ['plain rational in $n$', 'factorial', 'whole-term $n$th power'] },
          ],
          correctAnswers: ['factorial', 'whole-term $n$th power', 'plain rational in $n$'],
          hint1: '$n!$ is the factorial signal (Ratio Test).',
          hint2: 'An exponent of $n$ on the entire fraction is the $n$th-power signal (Root Test).',
          hint3: 'A simple rational like $\\frac{1}{n^2+1}$ is a job for $p$-series / comparison — Ratio & Root give $L=1$ there.',
          explanation: 'Factorials ⇒ lean Ratio; whole-term $n$th powers ⇒ lean Root; plain rationals in $n$ ⇒ neither (they yield $L=1$).',
        },
      },
      {
        id: 'rrt1-close',
        type: 'text' as const,
        content: `## Where We're Headed

You've seen the core intuition: a series whose terms shrink by a factor $L < 1$ behaves like a convergent geometric series. In **Part 2** we'll state the **Ratio Test** precisely — including the all-important rule for what happens when $L = 1$ (spoiler: the test tells you *nothing*, and you must switch tactics).

> ⚠️ **Preview of the trap:** $L = 1$ is the **inconclusive** case. Both $\\sum \\frac{1}{n}$ (diverges) and $\\sum \\frac{1}{n^2}$ (converges) give $L = 1$. Never conclude anything from $L = 1$.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'ratio-root-tests',
    sections: [
      {
        id: 'rrt2-intro',
        type: 'text' as const,
        content: `# ➗ The Ratio and Root Tests

**Part 2 of 7 — The Ratio Test, Stated Precisely**

---

> 🔑 **The Ratio Test:** For a series $\\sum a_n$, compute
> $$L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|.$$
> - If $L < 1$, the series **converges absolutely**.
> - If $L > 1$ (or $L = \\infty$), the series **diverges**.
> - If $L = 1$, the test is **inconclusive** — try another test.`,
      },
      {
        id: 'rrt2-statement',
        type: 'text' as const,
        content: `## Reading the Statement Carefully

Three details that trip students up:

**1) The absolute value is mandatory.** You take $\\left|\\dfrac{a_{n+1}}{a_n}\\right|$. This is why a *positive* answer $L$ can still apply to a series with negative or alternating terms — and why a result of "$L < 1$" gives **absolute** convergence.

**2) "$L > 1$ means diverge" is genuinely useful.** Unlike many tests (which only ever *confirm* convergence), the Ratio Test can *prove divergence* when $L > 1$. The reason: if terms eventually grow by a factor bigger than $1$ each step, they can't shrink to $0$, so the $n$th-term test for divergence kicks in.

**3) $L = 1$ proves nothing.** Memorize the two witnesses below.

| Series | Ratio limit $L$ | Truth |
|--------|------------------|-------|
| $\\sum \\dfrac{1}{n}$ (harmonic) | $1$ | **diverges** |
| $\\sum \\dfrac{1}{n^2}$ ($p=2$) | $1$ | **converges** |

> ⚠️ Same $L = 1$, opposite outcomes. The Ratio Test simply cannot see the difference — its eyes are too coarse near the boundary.`,
      },
      {
        id: 'rrt2-trichotomy',
        type: 'dropdown-select' as const,
        content: `**The Trichotomy** 🔽

Match each value of $L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$ to the correct conclusion.`,
        exercise: {
          dropdowns: [
            { label: '$L = 0.4$:', options: ['converges absolutely', 'diverges', 'inconclusive'] },
            { label: '$L = 1$:', options: ['inconclusive', 'converges absolutely', 'diverges'] },
            { label: '$L = 3$:', options: ['diverges', 'converges absolutely', 'inconclusive'] },
            { label: '$L = \\infty$:', options: ['diverges', 'converges absolutely', 'inconclusive'] },
          ],
          correctAnswers: ['converges absolutely', 'inconclusive', 'diverges', 'diverges'],
          hint1: 'Anything strictly less than $1$ ⇒ converges absolutely.',
          hint2: 'Exactly $1$ is the no-information case ⇒ inconclusive.',
          hint3: 'Anything greater than $1$, including $\\infty$ ⇒ diverges.',
          explanation: '$L < 1$ converges absolutely; $L = 1$ inconclusive; $L > 1$ or $\\infty$ diverges. The threshold is a single point, $1$.',
        },
      },
      {
        id: 'rrt2-why',
        type: 'text' as const,
        content: `## Why $L < 1$ Forces Convergence (the idea)

Suppose $L < 1$. Pick any number $r$ with $L < r < 1$. Because the ratios approach $L$, eventually *every* ratio is below $r$:

$$\\left|\\frac{a_{n+1}}{a_n}\\right| < r \\quad\\text{for all large } n.$$

That means $|a_{n+1}| < r\\,|a_n|$, so from some point on the terms are **dominated by a geometric series** with ratio $r < 1$:

$$|a_{N}| + |a_{N+1}| + |a_{N+2}| + \\cdots < |a_N|\\left(1 + r + r^2 + \\cdots\\right) = \\frac{|a_N|}{1 - r}.$$

A finite bound on the tail ⇒ absolute convergence. The geometric series did all the heavy lifting — exactly as promised in Part 1.

> 💡 **One-line summary:** $L < 1$ ⇒ the tail is squeezed under a convergent geometric series ⇒ absolute convergence.`,
      },
      {
        id: 'rrt2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Ratio Test gives $L = 1$ for a series. What can you conclude?',
              options: [
                'Nothing — you must use a different test.',
                'The series converges.',
                'The series diverges.',
                'The series converges conditionally.',
              ],
              correctAnswer: 0,
              explanation: '$L = 1$ is the inconclusive case. Both $\\sum \\frac{1}{n}$ and $\\sum \\frac{1}{n^2}$ produce $L = 1$, yet one diverges and one converges — so $L=1$ alone tells you nothing.',
            },
            {
              question: 'When $L < 1$, the Ratio Test concludes the series converges __________.',
              options: ['absolutely', 'conditionally', 'to exactly $L$', 'only if the terms are positive'],
              correctAnswer: 0,
              explanation: 'Because the test uses $\\left|\\frac{a_{n+1}}{a_n}\\right|$, an $L < 1$ result establishes convergence of $\\sum |a_n|$ — that is, absolute convergence (which also implies ordinary convergence).',
            },
          ],
        },
      },
      {
        id: 'rrt2-verdict-text',
        type: 'text' as const,
        content: `## Turning $L$ Into a One-Word Answer

On the exam, the final step is almost always "state the conclusion." Train the reflex now: as soon as you have $L$, your answer is fixed before you write another symbol.

| $L$ | Say this |
|-----|----------|
| $L < 1$ | **converges** (absolutely) |
| $L > 1$ or $L = \\infty$ | **diverges** |
| $L = 1$ | **inconclusive** — switch tests |

> 💡 The only number on the boundary is $1$ itself. Everything below it is convergence; everything above is divergence.`,
      },
      {
        id: 'rrt2-classify',
        type: 'input-boxes' as const,
        content: `**State the Verdict** 🧮

Given the Ratio-Test limit $L$ for a series, enter the verdict as a single letter:
**C** = converges (absolutely), **D** = diverges, **I** = inconclusive.

**1)** $L = \\dfrac{2}{3}$ → \\,?
**2)** $L = \\dfrac{7}{4}$ → \\,?
**3)** $L = 1$ → \\,?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['C', 'D', 'I'],
          hint1: '$\\tfrac{2}{3} < 1$.',
          hint2: '$\\tfrac{7}{4} = 1.75 > 1$.',
          hint3: '$L = 1$ is always the inconclusive boundary.',
          explanation: '1) $L = \\tfrac23 < 1$ ⇒ C. 2) $L = \\tfrac74 > 1$ ⇒ D. 3) $L = 1$ ⇒ I.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'ratio-root-tests',
    sections: [
      {
        id: 'rrt3-intro',
        type: 'text' as const,
        content: `# ➗ The Ratio and Root Tests

**Part 3 of 7 — Running the Ratio Test (Factorials & Exponentials)**

---

> 🔑 **The mechanical skill:** Write $\\dfrac{a_{n+1}}{a_n}$, then **cancel ruthlessly**. The two cancellation facts you need constantly:
> $$\\frac{(n+1)!}{n!} = n+1, \\qquad \\frac{r^{n+1}}{r^n} = r.$$`,
      },
      {
        id: 'rrt3-factorial-fact',
        type: 'text' as const,
        content: `## The Factorial Cancellation

Because $(n+1)! = (n+1)\\cdot n!$, a factorial ratio collapses to a single factor:

$$\\frac{(n+1)!}{n!} = n+1, \\qquad \\frac{n!}{(n+1)!} = \\frac{1}{n+1}, \\qquad \\frac{(2n+2)!}{(2n)!} = (2n+2)(2n+1).$$

That last one is worth a second look: stepping from $(2n)!$ up to $(2(n+1))! = (2n+2)!$ adds **two** new factors, $(2n+1)$ and $(2n+2)$.

> 💡 **Rule of thumb:** To simplify $\\dfrac{(\\text{bigger factorial})}{(\\text{smaller factorial})}$, write out only the factors the bigger one has *extra* — everything else cancels.`,
      },
      {
        id: 'rrt3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{(n+1)!}{n!}$.',
              options: ['$n+1$', '$\\dfrac{1}{n+1}$', '$n!$', '$1$'],
              correctAnswer: 0,
              explanation: '$(n+1)! = (n+1)\\cdot n!$, so $\\dfrac{(n+1)!}{n!} = n+1$. This is the single most useful cancellation in the Ratio Test.',
            },
            {
              question: 'In the Ratio Test, a factorial in the **denominator** of $a_n$ typically drives the limit $L$ toward:',
              options: ['$0$ (so the series converges)', '$\\infty$ (so the series diverges)', '$1$ (inconclusive)', 'a negative number'],
              correctAnswer: 0,
              explanation: 'A denominator factorial puts an $n+1$ in the *bottom* of the ratio, sending $L \\to 0 < 1$ — convergence. Factorials in the numerator do the opposite ($L \\to \\infty$).',
            },
          ],
        },
      },
      {
        id: 'rrt3-worked1',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}$

Here $a_n = \\dfrac{2^n}{n!}$. Form the ratio and simplify:

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n} = \\frac{2^{n+1}}{2^n} \\cdot \\frac{n!}{(n+1)!} = 2 \\cdot \\frac{1}{n+1} = \\frac{2}{n+1}.$$

Take the limit:

$$L = \\lim_{n \\to \\infty} \\frac{2}{n+1} = 0.$$

Since $L = 0 < 1$, the series **converges absolutely**.

> ✅ **Sanity check:** This is the Taylor series for $e^2$ (times constants), which of course converges. The factorial in the denominator always wins against an exponential in the numerator.`,
      },
      {
        id: 'rrt3-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n!}{10^n}$

Now the factorial is on **top**: $a_n = \\dfrac{n!}{10^n}$.

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!}{10^{n+1}} \\cdot \\frac{10^n}{n!} = (n+1) \\cdot \\frac{1}{10} = \\frac{n+1}{10}.$$

$$L = \\lim_{n \\to \\infty} \\frac{n+1}{10} = \\infty.$$

Since $L = \\infty > 1$, the series **diverges**.

> 🔑 **Pattern to internalize:** Factorial in the **denominator** → ratio $\\to 0$ → converges. Factorial in the **numerator** → ratio $\\to \\infty$ → diverges. Factorials grow faster than any exponential.

---

### Slow-Motion Replay

Both worked examples followed the same four moves — you'll repeat them on every Ratio-Test problem:

1. **Write** $\\left|\\dfrac{a_{n+1}}{a_n}\\right|$ as $a_{n+1}$ times the reciprocal of $a_n$.
2. **Group** like pieces: exponentials with exponentials, factorials with factorials.
3. **Cancel** using $\\frac{r^{n+1}}{r^n}=r$ and $\\frac{(n+1)!}{n!}=n+1$.
4. **Take the limit** of what remains.

Walk through these steps yourself on the next series.`,
      },
      {
        id: 'rrt3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Ratio** 🔽

You're applying the Ratio Test to $\\sum \\dfrac{3^n}{n!}$. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{3^{n+1}}{3^n} = $', options: ['$3$', '$3^n$', '$n+1$', '$\\frac{1}{3}$'] },
            { label: '$\\dfrac{n!}{(n+1)!} = $', options: ['$\\frac{1}{n+1}$', '$n+1$', '$n!$', '$1$'] },
            { label: 'So $\\left|\\frac{a_{n+1}}{a_n}\\right| = $', options: ['$\\frac{3}{n+1}$', '$3(n+1)$', '$\\frac{n+1}{3}$', '$3$'] },
            { label: 'Therefore $L = $', options: ['$0$', '$3$', '$1$', '$\\infty$'] },
          ],
          correctAnswers: ['$3$', '$\\frac{1}{n+1}$', '$\\frac{3}{n+1}$', '$0$'],
          hint1: '$\\frac{3^{n+1}}{3^n} = 3^{(n+1)-n} = 3$.',
          hint2: '$\\frac{n!}{(n+1)!} = \\frac{n!}{(n+1)\\,n!} = \\frac{1}{n+1}$.',
          hint3: 'Multiply: $3 \\cdot \\frac{1}{n+1} = \\frac{3}{n+1}$, which tends to $0$ as $n \\to \\infty$.',
          explanation: 'The ratio simplifies to $\\frac{3}{n+1} \\to 0 = L$. Since $L < 1$, $\\sum \\frac{3^n}{n!}$ converges absolutely.',
        },
      },
      {
        id: 'rrt3-onyourown-text',
        type: 'text' as const,
        content: `## Now Without Scaffolding

The dropdown held your hand through each cancellation. The exam won't. Run the full pipeline yourself on the three series below — predict the verdict *before* you finish, using the factorial-position rule:

> 🔑 **Quick verdict shortcut:** factorial on the **bottom** → expect $L \\to 0$ (converges). Factorial on the **top** → expect $L \\to \\infty$ (diverges). A pure exponential $\\sum r^n$ → $L = |r|$.`,
      },
      {
        id: 'rrt3-drill',
        type: 'input-boxes' as const,
        content: `**Find $L$** 🧮

Apply the Ratio Test and enter the limit $L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$. Use a whole number or simple fraction; type **inf** for $\\infty$.

**1)** $\\sum \\dfrac{n!}{2^n}$ → $L = \\,?$
**2)** $\\sum \\dfrac{4^n}{n!}$ → $L = \\,?$
**3)** $\\sum \\dfrac{5^n}{3^n}$ → $L = \\,?$  *(here $a_n = (5/3)^n$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['inf', '0', '5/3'],
          hint1: '$\\frac{(n+1)!}{n!}\\cdot\\frac{2^n}{2^{n+1}} = \\frac{n+1}{2} \\to \\infty$.',
          hint2: '$\\frac{4^{n+1}}{4^n}\\cdot\\frac{n!}{(n+1)!} = \\frac{4}{n+1} \\to 0$.',
          hint3: 'A geometric series $\\sum (5/3)^n$ has constant ratio $5/3$, so $L = 5/3$.',
          explanation: '1) $L = \\infty$ (factorial on top) ⇒ diverges. 2) $L = 0$ (factorial on bottom) ⇒ converges. 3) $L = \\tfrac53 > 1$ ⇒ diverges (consistent with $|r| > 1$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'ratio-root-tests',
    sections: [
      {
        id: 'rrt4-intro',
        type: 'text' as const,
        content: `# ➗ The Ratio and Root Tests

**Part 4 of 7 — The Star Case: $n^n$ and the Number $e$**

---

> 🔑 **The most famous Ratio-Test example:** $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$. The factorial and the $n$th power are racing, and the winner is decided by the limit $\\left(\\dfrac{n}{n+1}\\right)^n \\to \\dfrac{1}{e}$.`,
      },
      {
        id: 'rrt4-e-limit',
        type: 'text' as const,
        content: `## The Limit You Must Know

This single limit unlocks the $n^n$ family. From the definition of $e$:

$$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^{n} = e \\quad\\Longrightarrow\\quad \\lim_{n \\to \\infty} \\left(\\frac{n}{n+1}\\right)^{n} = \\frac{1}{e}.$$

Why the second follows from the first: $\\dfrac{n}{n+1} = \\dfrac{1}{\\frac{n+1}{n}} = \\dfrac{1}{1 + \\frac{1}{n}}$, so raising to the $n$th power gives $\\dfrac{1}{\\left(1+\\frac1n\\right)^n} \\to \\dfrac{1}{e}$.

Since $e \\approx 2.718$, we have $\\dfrac{1}{e} \\approx 0.368 < 1$.

> 💡 Keep $\\dfrac{1}{e} \\approx 0.37$ in your back pocket. It is the answer to the single most-asked Ratio-Test problem on the BC exam.`,
      },
      {
        id: 'rrt4-elimit-drill',
        type: 'input-boxes' as const,
        content: `**Pin Down the Limits** 🧮

Using $\\left(1+\\frac1n\\right)^n \\to e$ and its reciprocal, enter each limit. Type **e** for $e$ and **1/e** for $\\frac{1}{e}$ (decimals like $0.368$ also accepted).

**1)** $\\displaystyle\\lim_{n\\to\\infty}\\left(\\frac{n}{n+1}\\right)^{n} = \\,?$
**2)** $\\displaystyle\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^{n} = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/e', 'e'],
          hint1: '$\\frac{n}{n+1} = \\frac{1}{1+1/n}$, so its $n$th power is $\\frac{1}{(1+1/n)^n} \\to \\frac{1}{e}$.',
          hint2: 'This is the defining limit of $e$ itself.',
          hint3: 'The two are reciprocals: $\\frac{1}{e} \\approx 0.368$ and $e \\approx 2.718$.',
          explanation: '1) $\\left(\\frac{n}{n+1}\\right)^n \\to \\frac{1}{e}$. 2) $\\left(1+\\frac1n\\right)^n \\to e$. These power the entire $n^n$ family.',
        },
      },
      {
        id: 'rrt4-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$

Let $a_n = \\dfrac{n!}{n^n}$. Build the ratio:

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!}.$$

Use $\\dfrac{(n+1)!}{n!} = n+1$ and split off one factor of $(n+1)$ from the power:

$$= (n+1) \\cdot \\frac{n^n}{(n+1)^{n+1}} = (n+1)\\cdot \\frac{n^n}{(n+1)\\,(n+1)^{n}} = \\frac{n^n}{(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^{n}.$$

Now take the limit using the boxed fact:

$$L = \\lim_{n \\to \\infty}\\left(\\frac{n}{n+1}\\right)^{n} = \\frac{1}{e} \\approx 0.368.$$

Since $L = \\dfrac{1}{e} < 1$, the series **converges absolutely**. The $n^n$ in the denominator outruns the factorial.

> ✅ **Check the logic:** $\\dfrac{1}{e} < 1$, so the terms shrink geometrically (eventually) by a factor near $0.37$ — comfortably convergent.`,
      },
      {
        id: 'rrt4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Ratio Test on $\\sum \\dfrac{n!}{n^n}$ produces the limit $L = $',
              options: ['$\\dfrac{1}{e}$', '$e$', '$1$', '$0$'],
              correctAnswer: 0,
              explanation: 'The ratio simplifies to $\\left(\\frac{n}{n+1}\\right)^n$, whose limit is $\\frac{1}{e} \\approx 0.368 < 1$, so the series converges absolutely.',
            },
            {
              question: 'Because $L = \\dfrac{1}{e} \\approx 0.368$, the series $\\sum \\dfrac{n!}{n^n}$:',
              options: ['converges absolutely', 'diverges', 'is inconclusive', 'converges only conditionally'],
              correctAnswer: 0,
              explanation: '$\\frac{1}{e} < 1$, so the Ratio Test gives absolute convergence directly.',
            },
          ],
        },
      },
      {
        id: 'rrt4-variant',
        type: 'text' as const,
        content: `## A Divergent Cousin: $\\displaystyle\\sum \\frac{n^n}{n!}$

Flip the previous series upside down: $a_n = \\dfrac{n^n}{n!}$. The same algebra runs in reverse, and the ratio becomes

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left(\\frac{n+1}{n}\\right)^{n} = \\left(1 + \\frac{1}{n}\\right)^{n} \\;\\longrightarrow\\; e.$$

Now $L = e \\approx 2.718 > 1$, so this series **diverges**.

> 🔑 **Symmetry to remember:** $\\sum \\dfrac{n!}{n^n}$ converges ($L = 1/e$); $\\sum \\dfrac{n^n}{n!}$ diverges ($L = e$). The $n^n$ "wins" whichever race it's in.`,
      },
      {
        id: 'rrt4-drill',
        type: 'dropdown-select' as const,
        content: `**The $e$ Family** 🔽

Use the limits $\\left(\\frac{n}{n+1}\\right)^n \\to \\frac{1}{e}$ and $\\left(1+\\frac1n\\right)^n \\to e$.`,
        exercise: {
          dropdowns: [
            { label: 'Ratio limit for $\\sum \\frac{n!}{n^n}$:', options: ['$\\frac{1}{e}$', '$e$', '$1$', '$\\infty$'] },
            { label: 'Verdict for $\\sum \\frac{n!}{n^n}$:', options: ['converges', 'diverges', 'inconclusive'] },
            { label: 'Ratio limit for $\\sum \\frac{n^n}{n!}$:', options: ['$e$', '$\\frac{1}{e}$', '$1$', '$0$'] },
            { label: 'Verdict for $\\sum \\frac{n^n}{n!}$:', options: ['diverges', 'converges', 'inconclusive'] },
          ],
          correctAnswers: ['$\\frac{1}{e}$', 'converges', '$e$', 'diverges'],
          hint1: 'Factorial-over-$n^n$ gives $\\left(\\frac{n}{n+1}\\right)^n \\to \\frac1e \\approx 0.37 < 1$.',
          hint2: '$L = \\frac1e < 1$ ⇒ converges; $L = e > 1$ ⇒ diverges.',
          hint3: 'The flipped series gives the reciprocal limit, $e > 1$.',
          explanation: '$\\frac1e < 1$ ⇒ $\\sum \\frac{n!}{n^n}$ converges; $e > 1$ ⇒ $\\sum \\frac{n^n}{n!}$ diverges. The two are reciprocals of each other.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'ratio-root-tests',
    sections: [
      {
        id: 'rrt5-intro',
        type: 'text' as const,
        content: `# ➗ The Ratio and Root Tests

**Part 5 of 7 — The Root Test**

---

> 🔑 **The Root Test:** For $\\sum a_n$, compute
> $$L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} = \\lim_{n \\to \\infty} |a_n|^{1/n}.$$
> The conclusions are **identical** to the Ratio Test: $L < 1$ converges absolutely, $L > 1$ diverges, $L = 1$ inconclusive.`,
      },
      {
        id: 'rrt5-when',
        type: 'text' as const,
        content: `## When to Reach for the Root Test

The Root Test shines when the *whole term*, or a big chunk of it, is raised to the **$n$th power**. Taking the $n$th root then peels that power off cleanly.

The two limits that make it work:

$$\\lim_{n \\to \\infty} \\sqrt[n]{n} = 1, \\qquad \\lim_{n \\to \\infty} \\sqrt[n]{c} = 1 \\;\\;(\\text{any constant } c > 0).$$

So any polynomial-in-$n$ factor "evaporates" to $1$ under the $n$th root, leaving only the genuinely exponential part.

| Term $a_n$ | $\\sqrt[n]{\\lvert a_n\\rvert}$ | $L$ |
|------------|-------------------------------|-----|
| $\\left(\\frac{2n+1}{3n+1}\\right)^n$ | $\\frac{2n+1}{3n+1}$ | $\\frac{2}{3}$ |
| $\\frac{2^n}{n^n}$ | $\\frac{2}{n}$ | $0$ |
| $\\frac{5^n}{n^5}$ | $\\frac{5}{(\\sqrt[n]{n})^5}$ | $5$ |

> 💡 **Tell-tale sign:** an exponent of $n$ wrapped around the *entire* term (e.g. $\\left(\\frac{\\dots}{\\dots}\\right)^n$). That's the Root Test's home turf.`,
      },
      {
        id: 'rrt5-root-simplify',
        type: 'dropdown-select' as const,
        content: `**Take the $n$th Root** 🔽

Simplify $\\sqrt[n]{|a_n|}$ for each term, then read off the limit $L$.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt[n]{\\left(\\frac{n}{3n+2}\\right)^n} = $', options: ['$\\frac{n}{3n+2}$', '$\\frac{n}{3n+2}\\cdot n$', '$\\left(\\frac{n}{3n+2}\\right)^2$', '$\\frac{3n+2}{n}$'] },
            { label: 'so its limit $L = $', options: ['$\\frac{1}{3}$', '$3$', '$1$', '$0$'] },
            { label: '$\\sqrt[n]{\\frac{7^n}{n^n}} = $', options: ['$\\frac{7}{n}$', '$\\frac{n}{7}$', '$7$', '$7n$'] },
            { label: 'so its limit $L = $', options: ['$0$', '$7$', '$1$', '$\\infty$'] },
          ],
          correctAnswers: ['$\\frac{n}{3n+2}$', '$\\frac{1}{3}$', '$\\frac{7}{n}$', '$0$'],
          hint1: 'The $n$th root cancels the outer $n$th power, leaving the inside fraction.',
          hint2: '$\\frac{n}{3n+2} \\to \\frac{1}{3}$ (ratio of leading coefficients).',
          hint3: '$\\sqrt[n]{7^n/n^n} = \\frac{7}{n} \\to 0$.',
          explanation: 'First term: root gives $\\frac{n}{3n+2} \\to \\frac13 < 1$ (converges). Second: root gives $\\frac{7}{n} \\to 0 < 1$ (converges).',
        },
      },
      {
        id: 'rrt5-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\left(\\frac{3n+2}{2n+5}\\right)^{n}$

The whole term is an $n$th power, so take the $n$th root directly:

$$\\sqrt[n]{|a_n|} = \\sqrt[n]{\\left(\\frac{3n+2}{2n+5}\\right)^{n}} = \\frac{3n+2}{2n+5}.$$

Now the limit is an easy rational-function limit (leading coefficients):

$$L = \\lim_{n \\to \\infty} \\frac{3n+2}{2n+5} = \\frac{3}{2}.$$

Since $L = \\dfrac{3}{2} > 1$, the series **diverges**.

> ✅ **Reasonableness:** Each term is roughly $(3/2)^n$ for large $n$, and $(3/2)^n \\to \\infty$, so the terms don't even approach $0$. Divergence makes sense.`,
      },
      {
        id: 'rrt5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which limit makes the Root Test work on polynomial factors?',
              options: ['$\\sqrt[n]{n} \\to 1$', '$\\sqrt[n]{n} \\to 0$', '$\\sqrt[n]{n} \\to \\infty$', '$\\sqrt[n]{n} \\to n$'],
              correctAnswer: 0,
              explanation: '$\\sqrt[n]{n} = n^{1/n} \\to 1$. So any power of $n$ contributes a factor of $1$ to the root limit, leaving only the truly exponential part.',
            },
            {
              question: 'For $\\sum \\left(\\dfrac{n}{2n+1}\\right)^{n}$, the Root Test gives $L = $',
              options: ['$\\dfrac{1}{2}$', '$1$', '$2$', '$0$'],
              correctAnswer: 0,
              explanation: '$\\sqrt[n]{|a_n|} = \\frac{n}{2n+1} \\to \\frac{1}{2}$. Since $L = \\frac12 < 1$, the series converges absolutely.',
            },
          ],
        },
      },
      {
        id: 'rrt5-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{2^n}{n^n}$

Take the $n$th root of each piece:

$$\\sqrt[n]{\\frac{2^n}{n^n}} = \\frac{\\sqrt[n]{2^n}}{\\sqrt[n]{n^n}} = \\frac{2}{n}.$$

$$L = \\lim_{n \\to \\infty} \\frac{2}{n} = 0 < 1 \\;\\Rightarrow\\; \\text{converges absolutely}.$$

Notice the Ratio Test would also work here, but the Root Test is *faster* because the $n^n$ comes apart instantly under the root.

> 🔑 **Heuristic:** powers of $n$ in the exponent → **Root Test**; factorials → **Ratio Test**.`,
      },
      {
        id: 'rrt5-recap-text',
        type: 'text' as const,
        content: `## The Root-Test Recipe

Every Root-Test problem reduces to three moves:

1. **Take** $\\sqrt[n]{|a_n|}$ — distribute the root over products and quotients.
2. **Simplify** using $\\sqrt[n]{r^n}=r$, $\\sqrt[n]{n^n}=n$, $\\sqrt[n]{n}\\to 1$, and $\\sqrt[n]{c}\\to 1$.
3. **Take the limit** and compare to $1$.

> 💡 If a polynomial-in-$n$ factor sits *outside* an $n$th power (e.g. $\\frac{n^2 \\cdot 5^n}{\\,\\cdots\\,}$), its $n$th root still $\\to 1$ — so it never affects $L$. Only genuinely exponential pieces survive.

Try all three steps now.`,
      },
      {
        id: 'rrt5-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Root Test** 🧮

Compute $L = \\lim \\sqrt[n]{|a_n|}$. Enter a whole number or simple fraction.

**1)** $a_n = \\left(\\dfrac{4n}{5n+3}\\right)^{n}$ → $L = \\,?$
**2)** $a_n = \\dfrac{3^n}{n^n}$ → $L = \\,?$
**3)** $a_n = \\left(\\dfrac{n+1}{n}\\right)^{n}$ → $L = \\,?$  *(the $n$th root removes the outer power)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4/5', '0', '1'],
          hint1: '$\\sqrt[n]{|a_n|} = \\frac{4n}{5n+3} \\to \\frac{4}{5}$.',
          hint2: '$\\sqrt[n]{3^n/n^n} = \\frac{3}{n} \\to 0$.',
          hint3: 'The $n$th root cancels the outer exponent: $\\sqrt[n]{\\left(\\frac{n+1}{n}\\right)^n} = \\frac{n+1}{n} \\to 1$. So $L = 1$.',
          explanation: '1) $L = \\tfrac45 < 1$ ⇒ converges. 2) $L = 0 < 1$ ⇒ converges. 3) The $n$th root removes the outer power, leaving $\\frac{n+1}{n} \\to 1$, so $L = 1$ — inconclusive (the $e$ limit only appears for an exponent like $n^2$, where the leftover power survives the root).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'ratio-root-tests',
    sections: [
      {
        id: 'rrt6-intro',
        type: 'text' as const,
        content: `# ➗ The Ratio and Root Tests

**Part 6 of 7 — Power Series & the Radius of Convergence**

---

> 🔑 **The flagship application:** The Ratio Test is how you find the **interval of convergence** of a power series $\\sum c_n (x-a)^n$. You apply the test *with $x$ left in*, solve $L(x) < 1$ for $x$, and read off the **radius of convergence** $R$.`,
      },
      {
        id: 'rrt6-setup',
        type: 'text' as const,
        content: `## The Setup

For a power series $\\displaystyle\\sum_{n=0}^{\\infty} c_n (x - a)^n$, apply the Ratio Test to the terms $a_n = c_n (x-a)^n$:

$$L = \\lim_{n \\to \\infty}\\left|\\frac{c_{n+1}(x-a)^{n+1}}{c_n (x-a)^n}\\right| = |x - a|\\cdot\\lim_{n \\to \\infty}\\left|\\frac{c_{n+1}}{c_n}\\right|.$$

The factor $|x-a|$ pulls out front. The series **converges** when $L < 1$, i.e.

$$|x - a| \\cdot \\underbrace{\\lim\\left|\\tfrac{c_{n+1}}{c_n}\\right|}_{=\\,1/R} < 1 \\quad\\Longleftrightarrow\\quad |x - a| < R.$$

The number $R$ is the **radius of convergence**: the series converges for $|x-a| < R$ and diverges for $|x-a| > R$.

> ⚠️ **The endpoints $|x-a| = R$ are where $L = 1$** — inconclusive! You must test each endpoint **separately** by substituting it in and using another test (alternating series, $p$-series, etc.).`,
      },
      {
        id: 'rrt6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When you apply the Ratio Test to a power series $\\sum c_n(x-a)^n$, the factor $|x-a|$:',
              options: [
                'pulls out front, so $L = |x-a|\\cdot\\lim\\left|\\frac{c_{n+1}}{c_n}\\right|$',
                'cancels completely and disappears',
                'becomes $|x-a|^2$',
                'forces $L = 1$ for every $x$',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{(x-a)^{n+1}}{(x-a)^n} = (x-a)$, so $|x-a|$ factors out of the limit, leaving $L = |x-a|\\cdot\\lim\\left|\\frac{c_{n+1}}{c_n}\\right|$. Setting $L < 1$ then solves for $|x-a| < R$.',
            },
            {
              question: 'At the endpoints $|x-a| = R$, the Ratio Test gives $L = 1$, so you must:',
              options: [
                'test each endpoint separately with another test',
                'conclude the series converges there',
                'conclude the series diverges there',
                'double the radius',
              ],
              correctAnswer: 0,
              explanation: 'The endpoints land exactly on the inconclusive $L = 1$ boundary, so each must be checked by substitution and a different test (alternating series, $p$-series, etc.).',
            },
          ],
        },
      },
      {
        id: 'rrt6-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$

Here $a_n = \\dfrac{x^n}{n}$. Apply the Ratio Test:

$$L = \\lim_{n \\to \\infty}\\left|\\frac{x^{n+1}}{n+1}\\cdot\\frac{n}{x^n}\\right| = |x|\\cdot\\lim_{n \\to \\infty}\\frac{n}{n+1} = |x|\\cdot 1 = |x|.$$

Converges when $L = |x| < 1$, so the **radius of convergence is $R = 1$**, centered at $a = 0$. The open interval is $(-1, 1)$.

**Test the endpoints:**
- $x = 1$: series becomes $\\sum \\dfrac{1}{n}$ — the harmonic series, **diverges**.
- $x = -1$: series becomes $\\sum \\dfrac{(-1)^n}{n}$ — alternating harmonic, **converges**.

**Interval of convergence:** $[-1, 1)$.

> 💡 Notice how a single Ratio-Test computation gives the radius, but the *interval* still requires hand-checking both ends — that's where the Part-5/alternating-series skills pay off.`,
      },
      {
        id: 'rrt6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Radius** 🔽

Apply the Ratio Test to $\\sum \\dfrac{x^n}{n!}$ and to $\\sum n!\\,x^n$.`,
        exercise: {
          dropdowns: [
            { label: 'For $\\sum \\frac{x^n}{n!}$, $L = |x|\\cdot\\lim\\frac{n!}{(n+1)!} = $', options: ['$0$', '$|x|$', '$\\infty$', '$1$'] },
            { label: 'So $\\sum \\frac{x^n}{n!}$ converges for:', options: ['all $x$ ($R = \\infty$)', 'only $x = 0$', '$|x| < 1$', '$|x| > 1$'] },
            { label: 'For $\\sum n!\\,x^n$, $L = |x|\\cdot\\lim(n+1) = $', options: ['$\\infty$ (unless $x = 0$)', '$|x|$', '$0$', '$1$'] },
            { label: 'So $\\sum n!\\,x^n$ converges for:', options: ['only $x = 0$ ($R = 0$)', 'all $x$', '$|x| < 1$', '$|x| < e$'] },
          ],
          correctAnswers: ['$0$', 'all $x$ ($R = \\infty$)', '$\\infty$ (unless $x = 0$)', 'only $x = 0$ ($R = 0$)'],
          hint1: '$\\frac{n!}{(n+1)!} = \\frac{1}{n+1} \\to 0$, so $L = |x|\\cdot 0 = 0 < 1$ for every $x$.',
          hint2: 'If $L = 0 < 1$ no matter what $x$ is, the series converges everywhere: $R = \\infty$.',
          hint3: 'For $\\sum n!x^n$, the ratio is $|x|(n+1) \\to \\infty$ unless $x = 0$, so it converges only at the center: $R = 0$.',
          explanation: '$\\sum \\frac{x^n}{n!}$ (the series for $e^x$) has $R = \\infty$. $\\sum n!x^n$ has $R = 0$ — it converges only at its center $x = 0$. These are the two extreme radii.',
        },
      },
      {
        id: 'rrt6-radius-text',
        type: 'text' as const,
        content: `## Reading Off $R$ in One Step

After the $|x-a|$ factors out, the rest of the Ratio-Test limit is a pure number — call it $\\frac{1}{R}$. Then:

$$L = \\frac{|x-a|}{R} < 1 \\quad\\Longleftrightarrow\\quad |x - a| < R.$$

So the **radius is the reciprocal** of the coefficient limit $\\lim\\left|\\frac{c_{n+1}}{c_n}\\right|$. Three outcomes:

| Coefficient limit | $R$ | Meaning |
|--------------------|-----|---------|
| a positive number $\\frac1R$ | finite $R$ | converges on $(a-R,\\,a+R)$ |
| $0$ | $\\infty$ | converges for all $x$ |
| $\\infty$ | $0$ | converges only at $x=a$ |

> ⚠️ Finding $R$ is *not* the end — the interval still needs both endpoints checked by hand. But for the drill below, just report $R$.`,
      },
      {
        id: 'rrt6-drill',
        type: 'input-boxes' as const,
        content: `**Radius of Convergence** 🧮

Use the Ratio Test to find the radius $R$. Type **inf** for $\\infty$.

**1)** $\\sum \\dfrac{x^n}{3^n}$ → $R = \\,?$  *(ratio gives $L = |x|/3$)*
**2)** $\\sum \\dfrac{(x-2)^n}{n^2}$ → $R = \\,?$
**3)** $\\sum \\dfrac{x^n}{n!}$ → $R = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1', 'inf'],
          hint1: '$L = |x|\\cdot\\lim\\frac{3^n}{3^{n+1}} = \\frac{|x|}{3} < 1 \\Leftrightarrow |x| < 3$, so $R = 3$.',
          hint2: '$L = |x-2|\\cdot\\lim\\left(\\frac{n}{n+1}\\right)^2 = |x-2| < 1 \\Leftrightarrow |x-2| < 1$, so $R = 1$.',
          hint3: '$L = |x|\\cdot\\lim\\frac{1}{n+1} = 0 < 1$ for all $x$, so $R = \\infty$.',
          explanation: '1) $|x|<3 \\Rightarrow R = 3$. 2) $|x-2|<1 \\Rightarrow R = 1$ (centered at $2$). 3) converges for all $x \\Rightarrow R = \\infty$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'ratio-root-tests',
    sections: [
      {
        id: 'rrt7-intro',
        type: 'text' as const,
        content: `# ➗ The Ratio and Root Tests

**Part 7 of 7 — Choosing the Right Test, Pitfalls & Mastery Check**

---

You can now run the Ratio Test, run the Root Test, handle the $n^n$/$e$ family, and find a radius of convergence. The last skill is **strategy**: knowing *which* test (if any) to use, and dodging the classic traps.`,
      },
      {
        id: 'rrt7-pitfalls',
        type: 'multiple-choice' as const,
        content: `**Spot the Mistake** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student applies the Ratio Test to $\\sum \\dfrac{1}{n^3}$ and gets $L = 1$, then writes "converges by the Ratio Test." What went wrong?',
              options: [
                'The Ratio Test is inconclusive at $L=1$; the conclusion is unjustified (use the $p$-series test instead).',
                'Nothing — $L = 1$ means convergence.',
                'They should have gotten $L = 0$.',
                'The Ratio Test never applies to fractions.',
              ],
              correctAnswer: 0,
              explanation: '$L = 1$ gives no information. The series does converge (it is a $p$-series with $p = 3 > 1$), but that must be concluded from the $p$-series test, not the Ratio Test.',
            },
            {
              question: 'For $\\sum \\dfrac{(-1)^n\\, 2^n}{n!}$, the Ratio Test limit is $L = 0$. The correct conclusion is:',
              options: [
                'converges absolutely',
                'diverges',
                'converges conditionally only',
                'inconclusive',
              ],
              correctAnswer: 0,
              explanation: 'The Ratio Test uses absolute values, so the $(-1)^n$ is irrelevant to $L$. With $L = 0 < 1$, the series converges absolutely — alternating signs do not change that.',
            },
          ],
        },
      },
      {
        id: 'rrt7-decision',
        type: 'text' as const,
        content: `## A Decision Guide

| What you see in $a_n$ | Best first move |
|------------------------|------------------|
| Factorials ($n!$, $(2n)!$) | **Ratio Test** |
| A power of $n$ in the exponent ($n^n$, $\\left(\\dots\\right)^n$) | **Root Test** |
| Both factorial and exponential ($\\frac{r^n}{n!}$) | **Ratio Test** |
| $x$ present — a power series | **Ratio Test** (for the radius $R$) |
| Pure rational in $n$ ($\\frac{1}{n^p}$, $\\frac{n}{n^3+1}$) | **Not** Ratio/Root — they give $L=1$. Use $p$-series / comparison |

> ⚠️ **The #1 trap:** applying the Ratio Test to a $p$-series like $\\sum \\frac{1}{n^2}$. You'll grind out $L = \\lim\\left(\\frac{n}{n+1}\\right)^2 = 1$ and learn nothing. Rational-in-$n$ terms are a job for the $p$-series test or comparison, not Ratio/Root.`,
      },
      {
        id: 'rrt7-mixed',
        type: 'dropdown-select' as const,
        content: `**Pick the Test, Then the Verdict** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Best test for $\\sum \\frac{n!}{100^n}$:', options: ['Ratio', 'Root', 'p-series'] },
            { label: 'Verdict for $\\sum \\frac{n!}{100^n}$:', options: ['diverges', 'converges', 'inconclusive'] },
            { label: 'Best test for $\\sum \\left(\\frac{n}{4n+1}\\right)^n$:', options: ['Root', 'Ratio', 'p-series'] },
            { label: 'Verdict for $\\sum \\left(\\frac{n}{4n+1}\\right)^n$:', options: ['converges', 'diverges', 'inconclusive'] },
          ],
          correctAnswers: ['Ratio', 'diverges', 'Root', 'converges'],
          hint1: 'A factorial signals the Ratio Test; an $n$th power of the whole term signals the Root Test.',
          hint2: '$\\sum \\frac{n!}{100^n}$: ratio $= \\frac{n+1}{100} \\to \\infty > 1$, diverges.',
          hint3: '$\\sum \\left(\\frac{n}{4n+1}\\right)^n$: root $= \\frac{n}{4n+1} \\to \\frac14 < 1$, converges.',
          explanation: 'Factorial ⇒ Ratio Test ⇒ $L = \\infty$ ⇒ diverges. Whole-term $n$th power ⇒ Root Test ⇒ $L = \\tfrac14 < 1$ ⇒ converges.',
        },
      },
      {
        id: 'rrt7-reference',
        type: 'text' as const,
        content: `## Quick Reference Card

| Goal | Key move |
|------|----------|
| Ratio Test | $L = \\lim\\left\\lvert\\dfrac{a_{n+1}}{a_n}\\right\\rvert$ |
| Root Test | $L = \\lim \\sqrt[n]{\\lvert a_n\\rvert}$ |
| Conclusion | $L<1$ converges · $L>1$ diverges · $L=1$ inconclusive |
| Factorial cancel | $\\dfrac{(n+1)!}{n!} = n+1$ |
| The $e$ limits | $\\left(1+\\tfrac1n\\right)^n \\to e$ · $\\left(\\tfrac{n}{n+1}\\right)^n \\to \\tfrac1e$ |
| Root helpers | $\\sqrt[n]{n}\\to 1$ · $\\sqrt[n]{c}\\to 1$ |
| Power series | $L = \\lvert x-a\\rvert\\cdot\\lim\\left\\lvert\\tfrac{c_{n+1}}{c_n}\\right\\rvert < 1 \\Rightarrow \\lvert x-a\\rvert < R$ |

> 💡 Keep this card in mind for the mastery drill — then the exit quiz.`,
      },
      {
        id: 'rrt7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Mastery** 🧮

Find $L$ (Ratio or Root, your choice) and give the radius where asked. Type **inf** for $\\infty$.

**1)** $\\sum \\dfrac{n^2}{2^n}$: Ratio Test $L = \\,?$  *(ratio $\\to \\left(\\frac{n+1}{n}\\right)^2\\cdot\\frac12$)*
**2)** $\\sum \\dfrac{(2n)!}{(n!)^2}$: Ratio Test $L = \\,?$  *(ratio $\\to \\frac{(2n+2)(2n+1)}{(n+1)^2}$)*
**3)** $\\sum \\dfrac{x^n}{4^n}$: radius $R = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/2', '4', '4'],
          hint1: '$\\left(\\frac{n+1}{n}\\right)^2 \\to 1$, so $L = 1\\cdot\\frac12 = \\frac12 < 1$ (converges).',
          hint2: '$\\frac{(2n+2)(2n+1)}{(n+1)^2} = \\frac{2(n+1)(2n+1)}{(n+1)^2} = \\frac{2(2n+1)}{n+1} \\to 4 > 1$ (diverges).',
          hint3: '$L = \\frac{|x|}{4} < 1 \\Leftrightarrow |x| < 4$, so $R = 4$.',
          explanation: '1) $L = \\tfrac12$ ⇒ converges. 2) $L = 4 > 1$ ⇒ the central binomial series diverges. 3) $R = 4$.',
        },
      },
      {
        id: 'rrt7-wrapup',
        type: 'text' as const,
        content: `## You've Got the Whole Toolkit

You can now recognize when a series calls for the **Ratio Test** (factorials, exponentials, power series) versus the **Root Test** (whole-term $n$th powers), execute either cleanly, handle the $n^n$/$e$ star cases, find a **radius of convergence**, and — crucially — refuse to over-claim when $L = 1$.

One last check confirms it. Answer all three.`,
      },
      {
        id: 'rrt7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The Ratio Test on $\\sum \\dfrac{5^n}{n!}$ gives which limit, and what is the conclusion?',
              options: [
                '$L = 0$; converges absolutely',
                '$L = 5$; diverges',
                '$L = 1$; inconclusive',
                '$L = \\infty$; diverges',
              ],
              correctAnswer: 0,
              explanation: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{5}{n+1} \\to 0 = L$. Since $L < 1$, the series converges absolutely (it is part of the series for $e^5$).',
            },
            {
              question: 'The Root Test on $\\sum \\left(\\dfrac{5n+1}{2n+3}\\right)^{n}$ gives:',
              options: [
                '$L = \\frac{5}{2}$; diverges',
                '$L = \\frac{2}{5}$; converges',
                '$L = 1$; inconclusive',
                '$L = 0$; converges',
              ],
              correctAnswer: 0,
              explanation: '$\\sqrt[n]{|a_n|} = \\frac{5n+1}{2n+3} \\to \\frac{5}{2} > 1$, so the series diverges (its terms blow up like $(5/2)^n$).',
            },
            {
              question: 'Applying the Ratio Test to $\\sum \\dfrac{x^n}{n}$, the radius of convergence is:',
              options: ['$R = 1$', '$R = 0$', '$R = \\infty$', '$R = \\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: '$L = |x|\\cdot\\lim\\frac{n}{n+1} = |x|$. Converges when $|x| < 1$, so $R = 1$ (the interval, after endpoint checks, is $[-1, 1)$).',
            },
          ],
        },
      },
    ],
  },
]
