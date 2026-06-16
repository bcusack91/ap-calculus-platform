import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Direct and Limit Comparison Tests (AP Calculus BC).
 * Registry key: 'comparison-tests' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: foundations (benchmarks) → Direct Comparison Test →
 * choosing/manipulating bounds → Limit Comparison Test → choosing a comparison series →
 * strategy & pitfalls → mixed practice + exit quiz. Each part alternates teaching with
 * interactive checks across >= 2 exercise types. LaTeX uses doubled backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'comparison-tests',
    sections: [
      {
        id: 'cmp1-intro',
        type: 'text' as const,
        content: `# ⚖️ Direct & Limit Comparison Tests

**Part 1 of 7 — The Benchmark Series**

---

### Topics in This Part

| Section |
|---------|
| Why We Compare |
| The $p$-Series Benchmark |
| The Geometric Benchmark |

> 🔑 **Key Concept:** Comparison tests decide convergence by measuring an unfamiliar series against a **benchmark** whose behavior we already know. Before we can compare, we need a few trustworthy benchmarks — that's Part 1.`,
      },
      {
        id: 'cmp1-why',
        type: 'text' as const,
        content: `## Why We Compare

Most series are too messy to sum exactly, but we usually only need one fact: **does the infinite sum converge to a finite value, or does it diverge?**

Comparison tests answer that for a series of **positive terms** by trapping it against a series we already understand:

- If a positive series sits **underneath** a convergent series, it is squeezed into converging too.
- If a positive series sits **above** a divergent series, it is forced to diverge as well.

> ⚠️ **Positivity matters.** Both comparison tests in this lesson require terms that are positive (or at least eventually positive). For series with sign changes, you would reach for other tools, such as the Alternating Series Test.

Everything depends on having reliable benchmarks. The two workhorses are the **$p$-series** and the **geometric series**.`,
      },
      {
        id: 'cmp1-pseries',
        type: 'text' as const,
        content: `## The $p$-Series Benchmark

A **$p$-series** has the form

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$$

Its convergence depends entirely on the exponent $p$:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\quad\\begin{cases} \\text{converges} & \\text{if } p > 1 \\\\[4pt] \\text{diverges} & \\text{if } p \\le 1 \\end{cases}$$

| Series | $p$ | Behavior |
|--------|-----|----------|
| $\\sum \\frac{1}{n^2}$ | $2$ | converges ($p>1$) |
| $\\sum \\frac{1}{n^{3/2}}$ | $1.5$ | converges ($p>1$) |
| $\\sum \\frac{1}{n}$ | $1$ | **diverges** (harmonic series) |
| $\\sum \\frac{1}{\\sqrt{n}}$ | $0.5$ | diverges ($p<1$) |

> 💡 The boundary case $\\sum \\frac{1}{n}$ — the **harmonic series** — *diverges*, even though its terms shrink to $0$. Terms shrinking to zero is necessary but **not** sufficient for convergence.`,
      },
      {
        id: 'cmp1-pseries-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which $p$-series **converges**?',
              options: ['$\\sum \\frac{1}{n}$', '$\\sum \\frac{1}{\\sqrt{n}}$', '$\\sum \\frac{1}{n^{4/3}}$', '$\\sum \\frac{1}{n^{0.9}}$'],
              correctAnswer: 2,
              explanation: 'A $p$-series converges exactly when $p>1$. Here $p = 4/3 \\approx 1.33 > 1$, so it converges. The others have $p = 1$, $0.5$, and $0.9$, all $\\le 1$, so they diverge.',
            },
            {
              question: 'The harmonic series $\\sum \\frac{1}{n}$ ...',
              options: ['converges because $\\frac{1}{n} \\to 0$', 'diverges, since it is a $p$-series with $p = 1$', 'converges to $1$', 'diverges because the terms grow'],
              correctAnswer: 1,
              explanation: 'It is the $p$-series with $p=1$, the boundary case, which diverges. The terms do shrink to $0$, but that alone never guarantees convergence.',
            },
          ],
        },
      },
      {
        id: 'cmp1-geometric',
        type: 'text' as const,
        content: `## The Geometric Benchmark

A **geometric series** has the form

$$\\sum_{n=0}^{\\infty} a\\, r^{n}$$

and converges **if and only if** the ratio satisfies $\\lvert r \\rvert < 1$:

$$\\sum_{n=0}^{\\infty} a\\, r^{n} = \\frac{a}{1-r} \\quad (\\lvert r \\rvert < 1).$$

The pieces we will compare against most often look like $\\dfrac{1}{2^n}$, $\\dfrac{3^n}{5^n}$, or $\\dfrac{1}{e^n}$ — anything where the variable sits in the **exponent**.

| Series | Ratio $r$ | Behavior |
|--------|-----------|----------|
| $\\sum \\frac{1}{2^n}$ | $\\frac{1}{2}$ | converges ($\\lvert r \\rvert<1$) |
| $\\sum \\left(\\frac{3}{5}\\right)^n$ | $\\frac{3}{5}$ | converges |
| $\\sum \\left(\\frac{5}{3}\\right)^n$ | $\\frac{5}{3}$ | diverges ($\\lvert r \\rvert>1$) |

> 🔑 **Spot the type fast:** a variable in the **exponent** ($r^n$) signals geometric; a variable in the **base** of a power ($n^p$) signals a $p$-series.`,
      },
      {
        id: 'cmp1-classify',
        type: 'dropdown-select' as const,
        content: `**Classify the Benchmark** 🔽

For each series, choose its type and whether it converges or diverges.`,
        exercise: {
          dropdowns: [
            { label: '$\\sum \\frac{1}{n^3}$ is a ...', options: ['$p$-series, converges', '$p$-series, diverges', 'geometric, converges', 'geometric, diverges'] },
            { label: '$\\sum \\left(\\frac{7}{4}\\right)^n$ is a ...', options: ['geometric, converges', 'geometric, diverges', '$p$-series, converges', '$p$-series, diverges'] },
            { label: '$\\sum \\frac{1}{\\sqrt[3]{n}}$ is a ...', options: ['$p$-series, diverges', '$p$-series, converges', 'geometric, diverges', 'geometric, converges'] },
          ],
          correctAnswers: ['$p$-series, converges', 'geometric, diverges', '$p$-series, diverges'],
          hint1: 'Variable in the base of a power $\\Rightarrow p$-series with that exponent; variable in the exponent $\\Rightarrow$ geometric with that ratio.',
          hint2: '$\\sum \\frac{1}{n^3}$ has $p = 3 > 1$ (converges); $\\left(\\frac{7}{4}\\right)^n$ has $r = \\frac{7}{4} > 1$ (diverges).',
          hint3: '$\\frac{1}{\\sqrt[3]{n}} = \\frac{1}{n^{1/3}}$, so $p = \\frac{1}{3} < 1$, which diverges.',
          explanation: '$\\sum \\frac{1}{n^3}$: $p$-series, $p=3>1$, converges. $\\sum (7/4)^n$: geometric, $r=7/4>1$, diverges. $\\sum \\frac{1}{n^{1/3}}$: $p$-series, $p=1/3 \\le 1$, diverges.',
        },
      },
      {
        id: 'cmp1-boundary',
        type: 'text' as const,
        content: `## The Convergence Boundary in One Number

Both benchmarks come down to a single threshold you compare against:

- A **$p$-series** converges exactly when its exponent exceeds the threshold $p = 1$.
- A **geometric series** converges exactly when its ratio stays below the threshold $\\lvert r \\rvert = 1$.

> 💡 Reading the threshold the right way is half the battle: $p$ must be **strictly greater** than $1$, while $\\lvert r \\rvert$ must be **strictly less** than $1$. The boundary value itself ($p = 1$ or $\\lvert r \\rvert = 1$) always **diverges**.`,
      },
      {
        id: 'cmp1-threshold-drill',
        type: 'input-boxes' as const,
        content: `**The Threshold Numbers** 🧮

**1)** A $p$-series $\\sum \\frac{1}{n^p}$ converges for all $p$ strictly greater than which number?  $\\,?$
**2)** $\\sum \\frac{1}{\\sqrt{n}} = \\sum \\frac{1}{n^p}$. What is $p$ here?  $\\,?$  *(decimal or fraction)*
**3)** A geometric series $\\sum r^n$ converges when $\\lvert r \\rvert$ is strictly less than which number?  $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1/2', '1'],
          hint1: 'The $p$-series threshold is $p = 1$; convergence needs $p > 1$.',
          hint2: '$\\sqrt{n} = n^{1/2}$, so $\\frac{1}{\\sqrt n} = \\frac{1}{n^{1/2}}$ gives $p = \\frac12 = 0.5$.',
          hint3: 'Geometric series converge for $\\lvert r \\rvert < 1$.',
          explanation: '1) $p > 1$ for convergence, so the threshold is $1$. 2) $p = \\frac12 = 0.5 \\le 1$, so $\\sum \\frac{1}{\\sqrt n}$ diverges. 3) $\\lvert r \\rvert < 1$ for a geometric series to converge.',
        },
      },
      {
        id: 'cmp1-wrap',
        type: 'text' as const,
        content: `## You Now Have a Toolkit

You can instantly classify the two benchmark families:

$$\\sum \\frac{1}{n^p}: \\text{ converges} \\iff p > 1 \\qquad \\sum r^n: \\text{ converges} \\iff \\lvert r \\rvert < 1.$$

In Part 2 we use these benchmarks inside the **Direct Comparison Test** — the test that traps a series between $0$ and a known series.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'comparison-tests',
    sections: [
      {
        id: 'cmp2-intro',
        type: 'text' as const,
        content: `# ⚖️ Direct & Limit Comparison Tests

**Part 2 of 7 — The Direct Comparison Test**

---

> 🔑 **The Idea:** If a positive series stays **below** a convergent series, it converges. If it stays **above** a divergent series, it diverges. The whole test is one inequality.`,
      },
      {
        id: 'cmp2-statement',
        type: 'text' as const,
        content: `## The Direct Comparison Test (DCT)

Suppose $0 \\le a_n \\le b_n$ for all $n$ (beyond some starting index). Then:

| If the bigger one ... | ... then the smaller one |
|------------------------|--------------------------|
| $\\sum b_n$ **converges** | $\\sum a_n$ converges |
| $\\sum a_n$ **diverges** | $\\sum b_n$ diverges |

In words:

$$\\underbrace{a_n}_{\\text{your series}} \\le \\underbrace{b_n}_{\\text{convergent}} \\;\\Rightarrow\\; \\sum a_n \\text{ converges}$$

$$\\underbrace{a_n}_{\\text{your series}} \\ge \\underbrace{b_n}_{\\text{divergent}} \\;\\Rightarrow\\; \\sum a_n \\text{ diverges}$$

> ⚠️ **The inequality must point the helpful way.** Being *smaller* than a **divergent** series tells you nothing — your series could still converge. Being *larger* than a **convergent** series tells you nothing either.`,
      },
      {
        id: 'cmp2-logic',
        type: 'text' as const,
        content: `## A Picture of Why It Works

Think of the partial sums as accumulating area under bars of heights $a_1, a_2, a_3, \\dots$

- If every bar $a_n$ is **shorter** than a corresponding bar $b_n$, and the $b$-bars add to a **finite** total, then the shorter $a$-bars cannot add to more — they are trapped under a finite ceiling, so $\\sum a_n$ converges.
- If every bar $a_n$ is **taller** than a corresponding bar $b_n$, and the $b$-bars add to **infinity**, then the taller $a$-bars must also blow up, so $\\sum a_n$ diverges.

> 💡 The two useful directions are *"smaller than convergent"* (squeezed down to a finite value) and *"bigger than divergent"* (pushed up to infinity). Memorize those two; the other two combinations are inconclusive.`,
      },
      {
        id: 'cmp2-direction-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You show $0 \\le a_n \\le b_n$ and $\\sum b_n$ **converges**. What can you conclude?',
              options: ['$\\sum a_n$ converges', '$\\sum a_n$ diverges', 'Nothing — inconclusive', '$\\sum a_n = \\sum b_n$'],
              correctAnswer: 0,
              explanation: 'Smaller than a convergent series $\\Rightarrow$ converges. The $a$-terms are trapped beneath a finite total.',
            },
            {
              question: 'You show $0 \\le a_n \\le b_n$ and $\\sum b_n$ **diverges**. What can you conclude about $\\sum a_n$?',
              options: ['It converges', 'It diverges', 'Nothing — inconclusive', 'It equals $\\sum b_n$'],
              correctAnswer: 2,
              explanation: 'Being *smaller* than a divergent series is useless: a small series can still converge (e.g. $\\frac{1}{n^2} \\le \\frac{1}{n}$, yet $\\sum \\frac{1}{n^2}$ converges). You would need a divergent series *below* $a_n$.',
            },
          ],
        },
      },
      {
        id: 'cmp2-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}$

**Goal:** decide convergence with the DCT.

**Step 1 — Pick a benchmark.** For large $n$ the $+1$ barely matters, so this behaves like the convergent $p$-series $\\sum \\frac{1}{n^2}$ ($p = 2 > 1$).

**Step 2 — Get the inequality pointing the right way.** Since $n^2 + 1 > n^2$, a bigger denominator makes a smaller fraction:

$$\\frac{1}{n^2 + 1} \\le \\frac{1}{n^2}.$$

**Step 3 — Apply the DCT.** Our series is **smaller** than the **convergent** $\\sum \\frac{1}{n^2}$, so

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1} \\text{ converges.} \\;\\checkmark$$`,
      },
      {
        id: 'cmp2-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n - \\tfrac{1}{2}}$

**Step 1 — Pick a benchmark.** This resembles the **divergent** harmonic series $\\sum \\frac{1}{n}$ ($p = 1$).

**Step 2 — Point the inequality.** Since $n - \\tfrac{1}{2} < n$, a smaller denominator makes a **larger** fraction:

$$\\frac{1}{n - \\tfrac{1}{2}} \\ge \\frac{1}{n}.$$

**Step 3 — Apply the DCT.** Our series is **bigger** than the **divergent** $\\sum \\frac{1}{n}$, so

$$\\sum_{n=1}^{\\infty} \\frac{1}{n - \\tfrac{1}{2}} \\text{ diverges.} \\;\\checkmark$$

> 🔑 **Pattern:** a slightly *bigger* denominator $\\Rightarrow$ smaller terms $\\Rightarrow$ compare *upward* to converge. A slightly *smaller* denominator $\\Rightarrow$ bigger terms $\\Rightarrow$ compare *downward* to diverge.`,
      },
      {
        id: 'cmp2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Comparison** 🔽

You are testing $\\displaystyle\\sum \\frac{1}{n^3 + 4}$ with the DCT.`,
        exercise: {
          dropdowns: [
            { label: 'Best benchmark series:', options: ['$\\sum \\frac{1}{n^3}$', '$\\sum \\frac{1}{n}$', '$\\sum \\frac{1}{3^n}$', '$\\sum n^3$'] },
            { label: 'Correct inequality:', options: ['$\\frac{1}{n^3+4} \\le \\frac{1}{n^3}$', '$\\frac{1}{n^3+4} \\ge \\frac{1}{n^3}$', '$\\frac{1}{n^3+4} = \\frac{1}{n^3}$', '$\\frac{1}{n^3+4} \\ge \\frac{1}{n}$'] },
            { label: 'Conclusion:', options: ['converges', 'diverges', 'inconclusive', 'oscillates'] },
          ],
          correctAnswers: ['$\\sum \\frac{1}{n^3}$', '$\\frac{1}{n^3+4} \\le \\frac{1}{n^3}$', 'converges'],
          hint1: 'Drop the lower-order constant: the series behaves like $\\sum \\frac{1}{n^3}$, a $p$-series with $p=3$.',
          hint2: 'A bigger denominator ($n^3 + 4 > n^3$) gives a smaller fraction.',
          hint3: 'Smaller than the convergent $\\sum \\frac{1}{n^3}$ $\\Rightarrow$ your series converges.',
          explanation: 'Compare to the convergent $p$-series $\\sum \\frac{1}{n^3}$. Since $n^3+4 > n^3$, we get $\\frac{1}{n^3+4} \\le \\frac{1}{n^3}$, so by the DCT the series converges.',
        },
      },
      {
        id: 'cmp2-exponential-note',
        type: 'text' as const,
        content: `## The Same Logic Works for Geometric Benchmarks

The DCT does not care whether your benchmark is a $p$-series or a geometric series — only that the inequality points the helpful way.

For a term like $\\dfrac{1}{2^n + 5}$, the "$+5$" only makes the denominator bigger, so

$$\\frac{1}{2^n + 5} \\le \\frac{1}{2^n},$$

and $\\sum \\frac{1}{2^n}$ is a **convergent** geometric series ($r = \\tfrac12$). Smaller than convergent $\\Rightarrow$ convergent.

> 💡 Whenever you see a constant added inside an exponential or polynomial denominator, dropping it gives the clean benchmark and the inequality you need.`,
      },
      {
        id: 'cmp2-drill',
        type: 'multiple-choice' as const,
        content: `**Apply the DCT** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\sum \\frac{1}{2^n + 5}$, which comparison proves convergence?',
              options: ['$\\frac{1}{2^n + 5} \\le \\frac{1}{2^n}$ vs. convergent $\\sum \\frac{1}{2^n}$', '$\\frac{1}{2^n+5} \\ge \\frac{1}{2^n}$ vs. $\\sum \\frac{1}{2^n}$', '$\\frac{1}{2^n+5} \\le \\frac{1}{n}$ vs. $\\sum \\frac{1}{n}$', 'It diverges'],
              correctAnswer: 0,
              explanation: 'Since $2^n + 5 > 2^n$, we have $\\frac{1}{2^n+5} \\le \\frac{1}{2^n}$. The geometric series $\\sum \\frac{1}{2^n}$ ($r = \\frac12$) converges, so by the DCT the original converges.',
            },
            {
              question: 'For $\\sum \\frac{\\ln n}{n}$ (with $n \\ge 3$), since $\\ln n \\ge 1$, comparing to $\\sum \\frac{1}{n}$ shows the series ...',
              options: ['converges', 'diverges', 'is inconclusive', 'equals $\\sum \\frac{1}{n}$'],
              correctAnswer: 1,
              explanation: 'For $n \\ge 3$, $\\ln n > 1$, so $\\frac{\\ln n}{n} \\ge \\frac{1}{n}$. The series is *bigger* than the *divergent* harmonic series, so by the DCT it diverges.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'comparison-tests',
    sections: [
      {
        id: 'cmp3-intro',
        type: 'text' as const,
        content: `# ⚖️ Direct & Limit Comparison Tests

**Part 3 of 7 — Manipulating Bounds Cleverly**

---

> 🔑 **The Skill:** The DCT only works if you can produce a *clean* inequality. This part trains the algebra moves — bounding $\\sin$, $\\cos$, $\\ln$, and dropping positive terms — that make a comparison valid.`,
      },
      {
        id: 'cmp3-bounding',
        type: 'text' as const,
        content: `## Bounding the Numerator

Many series have a bounded "wiggle" on top. Replace it with its **largest** value to compare upward.

| Wiggle | Useful bound |
|--------|--------------|
| $\\sin n$, $\\cos n$ | $\\lvert \\sin n \\rvert \\le 1$, $\\lvert \\cos n \\rvert \\le 1$ |
| $2 + \\sin n$ | $2 + \\sin n \\le 3$ |
| $\\ln n$ (large $n$) | $\\ln n \\le n$ (and $\\ln n \\ge 1$) |

### Example: $\\displaystyle\\sum \\frac{2 + \\sin n}{n^2}$

Since $2 + \\sin n \\le 3$,

$$\\frac{2 + \\sin n}{n^2} \\le \\frac{3}{n^2}.$$

And $\\sum \\frac{3}{n^2} = 3\\sum \\frac{1}{n^2}$ converges ($p = 2$). So our series converges by the DCT.

> 💡 A constant multiple never changes convergence: $\\sum c\\,b_n$ converges exactly when $\\sum b_n$ does (for $c \\ne 0$). So $\\sum \\frac{3}{n^2}$ is just as "convergent" as $\\sum \\frac{1}{n^2}$.`,
      },
      {
        id: 'cmp3-bound-drill',
        type: 'input-boxes' as const,
        content: `**Bound the Numerator** 🧮

Replace each bounded numerator with the smallest constant $C$ that makes a valid upper bound $\\le \\frac{C}{n^2}$.

**1)** $\\frac{1 + \\sin n}{n^2} \\le \\frac{C}{n^2}$.  $C = \\,?$
**2)** $\\frac{5 + 3\\cos n}{n^2} \\le \\frac{C}{n^2}$.  $C = \\,?$
**3)** $\\frac{7\\lvert \\sin n \\rvert}{n^2} \\le \\frac{C}{n^2}$.  $C = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '8', '7'],
          hint1: '$\\sin n \\le 1$, so $1 + \\sin n \\le 2$.',
          hint2: '$\\cos n \\le 1$, so $5 + 3\\cos n \\le 5 + 3 = 8$.',
          hint3: '$\\lvert \\sin n \\rvert \\le 1$, so $7\\lvert \\sin n \\rvert \\le 7$.',
          explanation: '1) $1 + \\sin n \\le 2$. 2) $5 + 3\\cos n \\le 8$. 3) $7\\lvert \\sin n \\rvert \\le 7$. Each numerator is replaced by its maximum; all three then converge by comparison to $\\sum \\frac{C}{n^2}$.',
        },
      },
      {
        id: 'cmp3-dropping',
        type: 'text' as const,
        content: `## Dropping Positive Terms Makes a Fraction Bigger

To compare **upward** (to prove divergence), make your terms look *bigger* by shrinking the denominator. To compare **downward** (to prove convergence), make your terms look *smaller* by growing the denominator.

### Example: $\\displaystyle\\sum \\frac{1}{\\sqrt{n^2 + n}}$

Inside the root, $n^2 + n \\le n^2 + n^2 = 2n^2$ for $n \\ge 1$. A bigger inside means a bigger root means a **smaller** fraction... but we want a divergence comparison here, so flip it: since $n^2 + n \\le 2n^2$,

$$\\sqrt{n^2 + n} \\le \\sqrt{2}\\,n \\;\\Rightarrow\\; \\frac{1}{\\sqrt{n^2+n}} \\ge \\frac{1}{\\sqrt{2}\\,n}.$$

Our series is **bigger** than $\\frac{1}{\\sqrt 2}\\sum \\frac{1}{n}$, a constant times the **divergent** harmonic series, so it **diverges**.

> ⚠️ **Watch the chain of inequalities.** A bigger denominator gives a *smaller* fraction. Reversing that relationship is the single most common DCT error.`,
      },
      {
        id: 'cmp3-bound-check',
        type: 'dropdown-select' as const,
        content: `**Pick the Valid Bound** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'For $\\frac{4 + \\cos n}{n^2}$, a valid upper bound is:', options: ['$\\frac{5}{n^2}$', '$\\frac{3}{n^2}$', '$\\frac{1}{n^2}$', '$\\frac{5}{n}$'] },
            { label: 'For $\\frac{1}{n^2 - 2}$ (with $n \\ge 2$), since $n^2 - 2 < n^2$:', options: ['$\\frac{1}{n^2-2} \\ge \\frac{1}{n^2}$', '$\\frac{1}{n^2-2} \\le \\frac{1}{n^2}$', '$\\frac{1}{n^2-2} \\le \\frac{1}{n}$', '$\\frac{1}{n^2-2} = \\frac{1}{n^2}$'] },
            { label: '$\\frac{1}{n^2-2}$ therefore ...', options: ['converges (bounded above by convergent $\\sum \\frac{c}{n^2}$)', 'diverges', 'is inconclusive', 'oscillates'] },
          ],
          correctAnswers: ['$\\frac{5}{n^2}$', '$\\frac{1}{n^2-2} \\ge \\frac{1}{n^2}$', 'converges (bounded above by convergent $\\sum \\frac{c}{n^2}$)'],
          hint1: '$\\cos n \\le 1$, so $4 + \\cos n \\le 5$.',
          hint2: 'A smaller denominator ($n^2 - 2 < n^2$) makes a *bigger* fraction, so $\\frac{1}{n^2-2} \\ge \\frac{1}{n^2}$.',
          hint3: 'Being bigger than convergent is inconclusive on its own — but a sharper bound like $n^2 - 2 \\ge \\frac{1}{2}n^2$ (for $n \\ge 2$) gives $\\frac{1}{n^2-2} \\le \\frac{2}{n^2}$, which converges.',
          explanation: '$4 + \\cos n \\le 5$ gives the bound $\\frac{5}{n^2}$. Note $\\frac{1}{n^2-2} \\ge \\frac{1}{n^2}$ is true but inconclusive alone; the clean convergence argument uses $n^2 - 2 \\ge \\tfrac12 n^2$ for $n\\ge 2$, giving $\\frac{1}{n^2-2}\\le \\frac{2}{n^2}$, a convergent comparison.',
        },
      },
      {
        id: 'cmp3-limitation',
        type: 'text' as const,
        content: `## When the DCT Gets Awkward

The DCT demands a *clean* inequality, and that is sometimes painful. Look at

$$\\sum \\frac{1}{n^2 - 2}.$$

We *want* to compare to $\\sum \\frac{1}{n^2}$, but the natural inequality $\\frac{1}{n^2-2} \\ge \\frac{1}{n^2}$ points the **wrong way** for convergence. You can rescue it with a sharper bound ($n^2 - 2 \\ge \\tfrac12 n^2$ for $n \\ge 2$ gives $\\frac{1}{n^2-2} \\le \\frac{2}{n^2}$) — but that algebra is fiddly.

> 💡 Wouldn't it be nicer to just say "this behaves *like* $\\frac{1}{n^2}$" without fighting an inequality? That is exactly what the **Limit Comparison Test** does — coming up in Part 4.`,
      },
      {
        id: 'cmp3-drill',
        type: 'multiple-choice' as const,
        content: `**Apply the Technique** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which bound correctly proves $\\sum \\frac{\\lvert \\sin n \\rvert}{n^3}$ converges?',
              options: ['$\\frac{\\lvert \\sin n \\rvert}{n^3} \\le \\frac{1}{n^3}$, convergent $p$-series', '$\\frac{\\lvert \\sin n \\rvert}{n^3} \\ge \\frac{1}{n^3}$', '$\\frac{\\lvert \\sin n \\rvert}{n^3} \\le \\frac{1}{n}$', 'It diverges'],
              correctAnswer: 0,
              explanation: '$\\lvert \\sin n \\rvert \\le 1$, so $\\frac{\\lvert \\sin n \\rvert}{n^3} \\le \\frac{1}{n^3}$. Since $\\sum \\frac{1}{n^3}$ converges ($p = 3 > 1$), the DCT gives convergence.',
            },
            {
              question: 'For $\\sum \\frac{n}{n^2 + 1}$, comparing to $\\sum \\frac{1}{n}$: since $\\frac{n}{n^2+1} \\ge \\frac{n}{n^2 + n^2} = \\frac{1}{2n}$, the series ...',
              options: ['converges', 'diverges', 'is inconclusive', 'equals $\\frac{1}{2}\\sum\\frac1n$'],
              correctAnswer: 1,
              explanation: 'For $n \\ge 1$, $n^2 + 1 \\le 2n^2$, so $\\frac{n}{n^2+1} \\ge \\frac{n}{2n^2} = \\frac{1}{2n}$. The series is bigger than $\\frac12\\sum\\frac1n$ (divergent harmonic), so it diverges.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'comparison-tests',
    sections: [
      {
        id: 'cmp4-intro',
        type: 'text' as const,
        content: `# ⚖️ Direct & Limit Comparison Tests

**Part 4 of 7 — The Limit Comparison Test**

---

> 🔑 **The Idea:** Instead of fighting an inequality, just take a **limit of the ratio** $\\frac{a_n}{b_n}$. If that limit is a finite positive number, the two series live or die together.`,
      },
      {
        id: 'cmp4-statement',
        type: 'text' as const,
        content: `## The Limit Comparison Test (LCT)

Let $a_n > 0$ and $b_n > 0$ (eventually). Compute

$$L = \\lim_{n \\to \\infty} \\frac{a_n}{b_n}.$$

**If $0 < L < \\infty$** (a finite, positive number), then $\\sum a_n$ and $\\sum b_n$ **both converge or both diverge** — they share the same fate.

| Value of $L$ | What it tells you |
|--------------|-------------------|
| $0 < L < \\infty$ | Same behavior — conclusive |
| $L = 0$ | Special case (see below) |
| $L = \\infty$ | Special case (see below) |

> 🔑 **Why it works:** if $\\frac{a_n}{b_n} \\to L$ with $L$ finite and positive, then for large $n$, $a_n \\approx L\\, b_n$. A constant multiple cannot change convergence, so the two series match.`,
      },
      {
        id: 'cmp4-verdict-check',
        type: 'dropdown-select' as const,
        content: `**Read the Verdict** 🔽

In each case you have already computed the LCT limit $L$ against the stated benchmark. Choose the conclusion.`,
        exercise: {
          dropdowns: [
            { label: '$L = 2$ with convergent $\\sum b_n$:', options: ['converges', 'diverges', 'inconclusive'] },
            { label: '$L = \\frac{1}{4}$ with divergent $\\sum b_n$:', options: ['diverges', 'converges', 'inconclusive'] },
            { label: '$L = 7$ with convergent $\\sum b_n$:', options: ['converges', 'diverges', 'inconclusive'] },
          ],
          correctAnswers: ['converges', 'diverges', 'converges'],
          hint1: 'Any finite positive $L$ makes the two series share the same fate as the benchmark.',
          hint2: 'A divergent benchmark with $0 < L < \\infty$ drags the series into divergence.',
          hint3: 'The actual value of $L$ ($2$, $\\frac14$, or $7$) does not matter — only that it is finite and positive.',
          explanation: 'With $0 < L < \\infty$, $\\sum a_n$ matches $\\sum b_n$. Convergent benchmark $\\Rightarrow$ converges; divergent benchmark $\\Rightarrow$ diverges. The size of $L$ is irrelevant.',
        },
      },
      {
        id: 'cmp4-procedure',
        type: 'text' as const,
        content: `## How to Use It: "Strip to the Dominant Terms"

The benchmark $b_n$ is found by keeping only the **highest-power** term on top and bottom.

### Worked Example: $\\displaystyle\\sum \\frac{1}{n^2 - 2}$ (the one the DCT struggled with)

**Step 1 — Choose $b_n$.** Dominant behavior is $\\frac{1}{n^2}$, so let $b_n = \\frac{1}{n^2}$.

**Step 2 — Take the limit:**

$$L = \\lim_{n\\to\\infty} \\frac{\\frac{1}{n^2 - 2}}{\\frac{1}{n^2}} = \\lim_{n\\to\\infty} \\frac{n^2}{n^2 - 2} = 1.$$

**Step 3 — Conclude.** Since $0 < L = 1 < \\infty$ and $\\sum \\frac{1}{n^2}$ **converges**, the LCT says

$$\\sum \\frac{1}{n^2 - 2} \\text{ converges.} \\;\\checkmark$$

> 💡 No inequality, no sign worries — just a clean limit. That is why the LCT is often the **first** tool to try on rational-looking series.`,
      },
      {
        id: 'cmp4-limit-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Limit $L$** 🧮

For each pair, compute $L = \\lim_{n\\to\\infty} \\frac{a_n}{b_n}$ (a finite number).

**1)** $a_n = \\frac{1}{3n^2 + 1}$, $b_n = \\frac{1}{n^2}$.  $L = \\,?$  *(decimal or fraction)*
**2)** $a_n = \\frac{5n}{n^2 + 4}$, $b_n = \\frac{1}{n}$.  $L = \\,?$
**3)** $a_n = \\frac{2n^2 + n}{n^3 + 7}$, $b_n = \\frac{1}{n}$.  $L = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/3', '5', '2'],
          hint1: '$\\frac{a_n}{b_n} = \\frac{n^2}{3n^2+1} \\to \\frac13$ as $n\\to\\infty$.',
          hint2: '$\\frac{5n}{n^2+4}\\cdot\\frac{n}{1} = \\frac{5n^2}{n^2+4} \\to 5$.',
          hint3: '$\\frac{2n^2+n}{n^3+7}\\cdot\\frac{n}{1} = \\frac{2n^3+n^2}{n^3+7} \\to 2$ (ratio of leading coefficients).',
          explanation: '1) $\\frac{n^2}{3n^2+1}\\to\\frac13$.  2) $\\frac{5n^2}{n^2+4}\\to 5$.  3) $\\frac{2n^3+n^2}{n^3+7}\\to 2$. Each limit is the ratio of leading coefficients once degrees match.',
        },
      },
      {
        id: 'cmp4-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum \\frac{3n^2 + 5}{n^4 + n + 1}$

**Step 1 — Dominant terms.** Top behaves like $3n^2$, bottom like $n^4$, so the series behaves like $\\frac{3n^2}{n^4} = \\frac{3}{n^2}$. Use $b_n = \\frac{1}{n^2}$.

**Step 2 — Limit:**

$$L = \\lim_{n\\to\\infty} \\frac{3n^2 + 5}{n^4 + n + 1}\\cdot \\frac{n^2}{1} = \\lim_{n\\to\\infty} \\frac{3n^4 + 5n^2}{n^4 + n + 1} = 3.$$

**Step 3 — Conclude.** $0 < L = 3 < \\infty$ and $\\sum \\frac{1}{n^2}$ converges, so the series **converges**.

> 🔑 **Shortcut for rational terms:** subtract the degree of the bottom polynomial from the degree of the top to find the effective $p$. Here $\\deg(\\text{bottom}) - \\deg(\\text{top}) = 4 - 2 = 2$, so it behaves like a $p$-series with $p = 2$ — convergent.`,
      },
      {
        id: 'cmp4-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using the LCT on $\\sum \\frac{n + 3}{n^3 + 2n}$, the best benchmark $b_n$ is:',
              options: ['$\\frac{1}{n^2}$', '$\\frac{1}{n}$', '$\\frac{1}{n^3}$', '$\\frac{1}{n^4}$'],
              correctAnswer: 0,
              explanation: 'Top $\\sim n$, bottom $\\sim n^3$, so the term behaves like $\\frac{n}{n^3} = \\frac{1}{n^2}$. Use $b_n = \\frac{1}{n^2}$ (and the series converges).',
            },
            {
              question: 'For the LCT to give a conclusion with benchmark $b_n$, the limit $L = \\lim a_n/b_n$ must be:',
              options: ['exactly $1$', 'any finite positive number', 'zero', 'infinite'],
              correctAnswer: 1,
              explanation: 'Any $L$ with $0 < L < \\infty$ works — the series share their fate. The value need not be $1$; the limits $L = 3$ or $L = \\frac13$ are equally conclusive.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'comparison-tests',
    sections: [
      {
        id: 'cmp5-intro',
        type: 'text' as const,
        content: `# ⚖️ Direct & Limit Comparison Tests

**Part 5 of 7 — Choosing the Right Comparison**

---

> 🔑 **The Art:** Both tests live or die by the benchmark you pick. This part is a recipe for choosing $b_n$ correctly every time, plus the special $L = 0$ and $L = \\infty$ cases.`,
      },
      {
        id: 'cmp5-recipe',
        type: 'text' as const,
        content: `## The Benchmark Recipe

To find $b_n$, ask: **what does $a_n$ look like when $n$ is huge?**

1. **Rational in $n$?** Keep the highest power on top and bottom; the ratio is a $p$-series. (Effective $p = \\deg(\\text{bottom}) - \\deg(\\text{top})$.)
2. **Root in the denominator?** $\\sqrt{n^k} = n^{k/2}$ — treat it as a fractional power.
3. **Exponential ($r^n$) present?** It dominates any polynomial, so compare to the geometric piece.

| Series $a_n$ | Dominant $b_n$ | Benchmark behavior |
|--------------|----------------|--------------------|
| $\\frac{2n+1}{n^3 - 4}$ | $\\frac{1}{n^2}$ | $p$-series, converges |
| $\\frac{1}{\\sqrt{n^3 + n}}$ | $\\frac{1}{n^{3/2}}$ | $p$-series, converges |
| $\\frac{n}{\\sqrt{n} + 1}$ | $\\frac{1}{n^{-1/2}} = n^{1/2}$ | terms $\\to\\infty$, diverges |
| $\\frac{2^n}{3^n - 1}$ | $\\left(\\frac{2}{3}\\right)^n$ | geometric, converges |`,
      },
      {
        id: 'cmp5-recipe-check',
        type: 'dropdown-select' as const,
        content: `**Choose the Benchmark** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\sum \\frac{4n^2 - 1}{n^5 + 3}$ behaves like:', options: ['$\\sum \\frac{1}{n^3}$', '$\\sum \\frac{1}{n^2}$', '$\\sum \\frac{1}{n^5}$', '$\\sum \\frac{1}{n}$'] },
            { label: '$\\sum \\frac{1}{\\sqrt{4n^2 + n}}$ behaves like:', options: ['$\\sum \\frac{1}{n}$', '$\\sum \\frac{1}{n^2}$', '$\\sum \\frac{1}{\\sqrt n}$', '$\\sum \\frac{1}{n^{3/2}}$'] },
            { label: '$\\sum \\frac{5^n}{7^n + 2}$ behaves like:', options: ['$\\sum \\left(\\frac{5}{7}\\right)^n$', '$\\sum \\left(\\frac{7}{5}\\right)^n$', '$\\sum \\frac{1}{n}$', '$\\sum \\frac{1}{n^2}$'] },
          ],
          correctAnswers: ['$\\sum \\frac{1}{n^3}$', '$\\sum \\frac{1}{n}$', '$\\sum \\left(\\frac{5}{7}\\right)^n$'],
          hint1: 'For rationals, subtract degrees: top deg $2$, bottom deg $5$ $\\Rightarrow$ behaves like $\\frac{1}{n^{5-2}} = \\frac{1}{n^3}$.',
          hint2: '$\\sqrt{4n^2 + n} \\approx \\sqrt{4n^2} = 2n$, so $\\frac{1}{\\sqrt{4n^2+n}} \\approx \\frac{1}{2n}$, behaving like $\\frac{1}{n}$.',
          hint3: 'Exponentials dominate: $\\frac{5^n}{7^n + 2} \\approx \\frac{5^n}{7^n} = \\left(\\frac57\\right)^n$, geometric with $r = \\frac57 < 1$.',
          explanation: '1) $\\frac{4n^2}{n^5} = \\frac{4}{n^3}$ $\\Rightarrow \\frac{1}{n^3}$. 2) $\\sqrt{4n^2+n} \\sim 2n$ $\\Rightarrow \\frac{1}{n}$. 3) $\\frac{5^n}{7^n} = (5/7)^n$, geometric.',
        },
      },
      {
        id: 'cmp5-special',
        type: 'text' as const,
        content: `## The Special Cases: $L = 0$ and $L = \\infty$

When the ratio limit is $0$ or $\\infty$, the LCT gives a **one-directional** conclusion — useful only if the benchmark cooperates.

| Limit | Meaning | Conclusion |
|-------|---------|------------|
| $L = 0$ | $a_n$ is *much smaller* than $b_n$ | If $\\sum b_n$ **converges**, then $\\sum a_n$ converges. |
| $L = \\infty$ | $a_n$ is *much larger* than $b_n$ | If $\\sum b_n$ **diverges**, then $\\sum a_n$ diverges. |

> ⚠️ **The pairing must match.** $L = 0$ is only conclusive with a **convergent** $b_n$ (you are squeezed below it). $L = \\infty$ is only conclusive with a **divergent** $b_n$ (you tower above it). The mismatched pairings are inconclusive.

### Example: $\\displaystyle\\sum \\frac{\\ln n}{n^2}$

Compare to $b_n = \\frac{1}{n^{3/2}}$ (convergent, $p = 1.5$). Then $\\frac{a_n}{b_n} = \\frac{\\ln n}{n^2}\\cdot n^{3/2} = \\frac{\\ln n}{n^{1/2}} \\to 0$. Since $L = 0$ **and the benchmark converges**, $\\sum \\frac{\\ln n}{n^2}$ converges.`,
      },
      {
        id: 'cmp5-special-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You find $L = \\lim a_n/b_n = 0$ and your benchmark $\\sum b_n$ **converges**. Then $\\sum a_n$ ...',
              options: ['converges', 'diverges', 'is inconclusive', 'equals $0$'],
              correctAnswer: 0,
              explanation: '$L = 0$ means $a_n$ is eventually much smaller than $b_n$. Being dominated by a convergent series forces $\\sum a_n$ to converge.',
            },
            {
              question: 'You find $L = 0$, but your benchmark $\\sum b_n$ **diverges**. What can you conclude about $\\sum a_n$?',
              options: ['It converges', 'It diverges', 'Nothing — inconclusive', 'It equals $\\sum b_n$'],
              correctAnswer: 2,
              explanation: '$L = 0$ with a divergent benchmark is the mismatched pairing: being much smaller than something that diverges tells you nothing. You would need a different benchmark.',
            },
          ],
        },
      },
      {
        id: 'cmp5-degree-shortcut',
        type: 'text' as const,
        content: `## The Degree Shortcut for Rational Series

For a series whose term is a ratio of polynomials (or roots), you can skip the limit entirely and read off the **effective $p$**:

$$p_{\\text{eff}} = \\deg(\\text{denominator}) - \\deg(\\text{numerator}).$$

Then the series converges **iff $p_{\\text{eff}} > 1$** — exactly the $p$-series rule.

| Term | $\\deg$ bottom $-$ top | $p_{\\text{eff}}$ | Verdict |
|------|------------------------|------------------|---------|
| $\\frac{n^2}{n^5 + 1}$ | $5 - 2$ | $3$ | converges |
| $\\frac{n + 1}{n^2 + 4}$ | $2 - 1$ | $1$ | diverges |
| $\\frac{1}{\\sqrt{n^3}}$ | $\\frac32 - 0$ | $\\frac32$ | converges |

> 💡 Treat a square root as **half a degree**: $\\sqrt{n^3} = n^{3/2}$ contributes degree $\\frac32$. This shortcut is just the LCT with $b_n = \\frac{1}{n^{p_{\\text{eff}}}}$ done in your head.`,
      },
      {
        id: 'cmp5-drill',
        type: 'input-boxes' as const,
        content: `**Find the Effective $p$** 🧮

For each rational series, give the effective $p$ (use $p = \\deg(\\text{bottom}) - \\deg(\\text{top})$), then you'd know it converges iff $p > 1$.

**1)** $\\sum \\frac{n^2 + 1}{n^4 + 5}$.  $p = \\,?$
**2)** $\\sum \\frac{n + 7}{n^2 - 3}$.  $p = \\,?$
**3)** $\\sum \\frac{3}{\\sqrt{n^3 + n}}$.  $p = \\,?$  *(use $\\sqrt{n^3} = n^{3/2}$; decimal or fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '3/2'],
          hint1: 'Bottom degree $4$, top degree $2$: $p = 4 - 2 = 2$.',
          hint2: 'Bottom degree $2$, top degree $1$: $p = 2 - 1 = 1$ (this is the divergent boundary).',
          hint3: '$\\frac{1}{\\sqrt{n^3}} = \\frac{1}{n^{3/2}}$, so $p = \\frac32 = 1.5$.',
          explanation: '1) $p = 2$ (converges). 2) $p = 1$ (diverges — harmonic-like). 3) $p = \\frac32 = 1.5$ (converges). Convergence holds iff $p > 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'comparison-tests',
    sections: [
      {
        id: 'cmp6-intro',
        type: 'text' as const,
        content: `# ⚖️ Direct & Limit Comparison Tests

**Part 6 of 7 — Strategy, Pitfalls & Test-Day Flow**

---

> 🔑 **The Goal:** know *which* test to reach for, *which* benchmark to pair it with, and *which* traps cost the most points on the AP exam.`,
      },
      {
        id: 'cmp6-flow',
        type: 'text' as const,
        content: `## Decision Flow

When a positive-term series shows up, run this checklist:

1. **Is it already a benchmark?** A bare $p$-series or geometric series — answer instantly.
2. **Does it *look like* a $p$-series or geometric after dropping junk?** Use the **Limit Comparison Test** (cleanest for rationals and roots).
3. **Is there a tidy inequality** ($\\sin/\\cos/\\ln$ bounds, a "$+$ constant" in the denominator)? The **Direct Comparison Test** is quick.

> 💡 **Default to the LCT** for rational and root expressions — it sidesteps the inequality-direction trap. Reach for the **DCT** when a bound is obvious (bounded numerator, or denominator $= n^p \\pm$ constant).`,
      },
      {
        id: 'cmp6-pitfalls',
        type: 'text' as const,
        content: `## The Top Pitfalls

| Pitfall | Fix |
|---------|-----|
| Using a comparison test on a series with **negative/alternating** terms | Both tests require positive terms; use the Alternating Series Test instead. |
| Inequality pointing the **wrong way** (smaller-than-divergent, bigger-than-convergent) | Only "smaller-than-convergent" and "bigger-than-divergent" conclude. |
| Thinking $a_n \\to 0$ proves **convergence** | It does not — $\\sum \\frac1n$ has $a_n \\to 0$ yet diverges. |
| Forgetting the **$p = 1$ boundary** diverges | $p$-series converges only for $p > 1$, strictly. |
| Mishandling $L = 0$ or $L = \\infty$ | Each is conclusive only with the matching benchmark (convergent / divergent). |

> ⚠️ **The harmonic trap.** If a comparison leaves you next to $\\sum \\frac1n$, the answer is almost always **diverges** — $p = 1$ is on the divergent side of the line.`,
      },
      {
        id: 'cmp6-strategy-check',
        type: 'multiple-choice' as const,
        content: `**Pick the Best Test** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\sum \\frac{3n^2 - n}{n^4 + 2n + 5}$, the most efficient approach is:',
              options: ['Limit Comparison with $\\frac{1}{n^2}$', 'Direct Comparison with $\\frac{1}{n}$', 'Alternating Series Test', 'It cannot be tested'],
              correctAnswer: 0,
              explanation: 'A messy rational with no clean inequality is ideal for the LCT. It behaves like $\\frac{3n^2}{n^4} = \\frac{3}{n^2}$, so compare to $\\frac{1}{n^2}$ (converges).',
            },
            {
              question: 'For $\\sum \\frac{2 + \\cos n}{n^2}$, the quickest valid argument is:',
              options: ['DCT: $\\frac{2+\\cos n}{n^2} \\le \\frac{3}{n^2}$, convergent', 'It diverges since $\\cos n$ oscillates', 'LCT fails because $\\cos n$ has no limit', 'Alternating Series Test'],
              correctAnswer: 0,
              explanation: 'A bounded numerator ($2 + \\cos n \\le 3$) gives an instant DCT bound $\\frac{3}{n^2}$, which converges. (The LCT actually fails here because $\\frac{a_n}{b_n} = 2 + \\cos n$ has no limit — a nice illustration of when to prefer the DCT.)',
            },
          ],
        },
      },
      {
        id: 'cmp6-worked-flow',
        type: 'text' as const,
        content: `## A Full Walkthrough

**Test $\\displaystyle\\sum \\frac{\\sqrt{n}}{n^2 + 1}$.**

**Step 1 — Strip to dominant terms.** Top $\\sim \\sqrt n = n^{1/2}$, bottom $\\sim n^2$, so the term behaves like $\\frac{n^{1/2}}{n^2} = \\frac{1}{n^{3/2}}$. Effective $p = 2 - \\tfrac12 = \\tfrac32$.

**Step 2 — Run the LCT** with $b_n = \\frac{1}{n^{3/2}}$:

$$L = \\lim_{n\\to\\infty} \\frac{\\sqrt n}{n^2 + 1}\\cdot n^{3/2} = \\lim_{n\\to\\infty} \\frac{n^2}{n^2 + 1} = 1.$$

**Step 3 — Conclude.** $0 < L = 1 < \\infty$ and $\\sum \\frac{1}{n^{3/2}}$ converges ($p = 1.5 > 1$), so the series **converges**.

> 🔑 This is the everyday rhythm: *strip → pick $b_n$ → limit → match the benchmark's fate.*`,
      },
      {
        id: 'cmp6-pitfall-drill',
        type: 'dropdown-select' as const,
        content: `**Spot the Verdict** 🔽

For each scenario, choose the correct conclusion.`,
        exercise: {
          dropdowns: [
            { label: '$a_n \\le \\frac{1}{n}$ (divergent benchmark), $a_n > 0$:', options: ['inconclusive', 'converges', 'diverges'] },
            { label: '$a_n \\ge \\frac{1}{n}$ (divergent benchmark), $a_n > 0$:', options: ['diverges', 'converges', 'inconclusive'] },
            { label: '$\\lim a_n/b_n = 4$ with $\\sum b_n$ convergent:', options: ['converges', 'diverges', 'inconclusive'] },
          ],
          correctAnswers: ['inconclusive', 'diverges', 'converges'],
          hint1: 'Smaller than a *divergent* series tells you nothing.',
          hint2: 'Bigger than a *divergent* series forces divergence.',
          hint3: '$0 < L = 4 < \\infty$ means same fate as the convergent benchmark.',
          explanation: 'Smaller-than-divergent is inconclusive. Bigger-than-divergent diverges. A finite positive LCT limit ($L=4$) matches the benchmark, so it converges.',
        },
      },
      {
        id: 'cmp6-handle-alternating',
        type: 'text' as const,
        content: `## One Last Reminder: Positivity

Comparison tests are built for **positive** terms. If a series alternates sign, the comparison machinery does not apply directly.

A common rescue is to test for **absolute convergence**: if $\\sum \\lvert a_n \\rvert$ converges (which you *can* attack with a comparison test, since $\\lvert a_n \\rvert > 0$), then $\\sum a_n$ converges too.

> ⚠️ But the reverse fails: $\\sum \\lvert a_n \\rvert$ **diverging** does not settle $\\sum a_n$ — an alternating series can still converge conditionally. For that verdict you would switch to the Alternating Series Test.`,
      },
      {
        id: 'cmp6-positivity-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You want to test $\\sum \\frac{(-1)^n}{n^2}$. What is the best first move with comparison tools?',
              options: ['Compare $\\sum \\left\\lvert\\frac{(-1)^n}{n^2}\\right\\rvert = \\sum \\frac{1}{n^2}$, which converges, proving absolute convergence', 'Apply the DCT directly to the alternating series', 'Conclude it diverges because of the $(-1)^n$', 'Comparison tests cannot help at all'],
              correctAnswer: 0,
              explanation: 'Take absolute values: $\\sum \\frac{1}{n^2}$ converges ($p = 2$). So the original converges absolutely, hence converges. Comparison tests need positive terms, which $\\lvert a_n \\rvert$ provides.',
            },
            {
              question: 'If $\\sum \\lvert a_n \\rvert$ DIVERGES, what does that tell you about the alternating $\\sum a_n$?',
              options: ['It must diverge', 'It must converge', 'Nothing by itself — it may still converge conditionally', 'It equals $0$'],
              correctAnswer: 2,
              explanation: 'Divergence of $\\sum \\lvert a_n \\rvert$ rules out absolute convergence only. The alternating series can still converge conditionally (e.g. $\\sum \\frac{(-1)^n}{n}$), so you switch to the Alternating Series Test.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'comparison-tests',
    sections: [
      {
        id: 'cmp7-intro',
        type: 'text' as const,
        content: `# ⚖️ Direct & Limit Comparison Tests

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) classify benchmark series, (2) apply the Direct Comparison Test with a correctly-pointed inequality, (3) apply the Limit Comparison Test by stripping to dominant terms, and (4) choose the right test and benchmark under pressure. Let's put it together.`,
      },
      {
        id: 'cmp7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Tool | When | Conclusion |
|------|------|------------|
| $p$-series $\\sum \\frac{1}{n^p}$ | benchmark | converges $\\iff p > 1$ |
| geometric $\\sum r^n$ | benchmark | converges $\\iff \\lvert r \\rvert < 1$ |
| **DCT** | clean inequality $0 \\le a_n \\le b_n$ | $b_n$ conv $\\Rightarrow a_n$ conv; $a_n \\ge b_n$ div $\\Rightarrow a_n$ div |
| **LCT** | $L = \\lim \\frac{a_n}{b_n}$, $0 < L < \\infty$ | same fate as $\\sum b_n$ |

> ⚠️ **Three things to never forget:** positivity is required; the $p = 1$ boundary **diverges**; and $a_n \\to 0$ alone proves nothing.`,
      },
      {
        id: 'cmp7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Determine whether $\\sum \\frac{1}{n^2 + 3n}$ converges or diverges.',
              options: ['Converges (LCT with $\\frac{1}{n^2}$, $L = 1$)', 'Diverges (LCT with $\\frac{1}{n}$)', 'Inconclusive', 'Diverges (harmonic)'],
              correctAnswer: 0,
              explanation: 'Top deg $0$, bottom deg $2$, so it behaves like $\\frac{1}{n^2}$. $L = \\lim \\frac{n^2}{n^2+3n} = 1$, finite and positive, and $\\sum \\frac{1}{n^2}$ converges. So it converges.',
            },
            {
              question: 'Determine whether $\\sum \\frac{n+1}{n^2 + 4}$ converges or diverges.',
              options: ['Converges', 'Diverges (behaves like $\\frac{1}{n}$, $p=1$)', 'Inconclusive', 'Converges (geometric)'],
              correctAnswer: 1,
              explanation: 'Top deg $1$, bottom deg $2$: effective $p = 2 - 1 = 1$. LCT with $\\frac{1}{n}$ gives $L = \\lim \\frac{n^2+n}{n^2+4} = 1$, and $\\sum \\frac1n$ diverges, so this diverges.',
            },
          ],
        },
      },
      {
        id: 'cmp7-bridge1',
        type: 'text' as const,
        content: `## Same Tool, Numbers Only

Those two problems hinged on one number: the **effective $p$**. When the term is rational, that single subtraction ($\\deg$ bottom $-$ $\\deg$ top) decides the whole problem before you write a limit.

> 💡 In the next drill, compute that effective $p$ and the matching LCT limit directly — they should agree with the convergence verdict every time.`,
      },
      {
        id: 'cmp7-mixed2',
        type: 'input-boxes' as const,
        content: `**Mixed Practice — Compute** 🧮

**1)** For $\\sum \\frac{6n^3 - 2}{n^5 + n}$, find the effective $p = \\deg(\\text{bottom}) - \\deg(\\text{top})$.  $p = \\,?$
**2)** For the same series, compute $L = \\lim_{n\\to\\infty} \\frac{a_n}{1/n^2}$.  $L = \\,?$
**3)** A geometric series $\\sum a r^n$ converges when $\\lvert r \\rvert < \\,?$  *(enter the boundary number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '6', '1'],
          hint1: 'Bottom degree $5$, top degree $3$: $p = 5 - 3 = 2$.',
          hint2: '$\\frac{6n^3-2}{n^5+n}\\cdot n^2 = \\frac{6n^5 - 2n^2}{n^5 + n} \\to 6$ (ratio of leading coefficients).',
          hint3: 'Geometric series converge exactly when $\\lvert r \\rvert < 1$.',
          explanation: '1) $p = 5 - 3 = 2$ (so it converges). 2) $L = 6$, a finite positive limit matching $\\sum \\frac{1}{n^2}$. 3) $\\lvert r \\rvert < 1$ is the geometric convergence condition.',
        },
      },
      {
        id: 'cmp7-bridge2',
        type: 'text' as const,
        content: `## Ready for the Exit Quiz

You have the full toolkit: benchmark recognition, the DCT inequality (pointed the right way), the LCT limit, the degree shortcut, and the positivity guardrail. The exit quiz pulls one question from each idea.

> 🔑 **Before you answer:** for each series, decide *which* test fits, *which* benchmark it matches, and *which* side of the $p = 1$ (or $\\lvert r \\rvert = 1$) line you land on.`,
      },
      {
        id: 'cmp7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which comparison correctly proves $\\sum \\frac{1}{n^3 + 1}$ converges?',
              options: ['$\\frac{1}{n^3+1} \\le \\frac{1}{n^3}$, and $\\sum \\frac{1}{n^3}$ converges', '$\\frac{1}{n^3+1} \\ge \\frac{1}{n^3}$, and $\\sum \\frac{1}{n^3}$ converges', '$\\frac{1}{n^3+1} \\le \\frac{1}{n}$, and $\\sum \\frac1n$ converges', 'It diverges'],
              correctAnswer: 0,
              explanation: 'Since $n^3 + 1 > n^3$, we get $\\frac{1}{n^3+1} \\le \\frac{1}{n^3}$. The benchmark $\\sum \\frac{1}{n^3}$ converges ($p=3$), so by the DCT the series converges.',
            },
            {
              question: 'Using the Limit Comparison Test on $\\sum \\frac{2n - 1}{n^2 + 5}$ with $b_n = \\frac1n$, what happens?',
              options: ['$L = 2$, finite positive, and $\\sum \\frac1n$ diverges, so it diverges', '$L = 0$, so it converges', '$L = \\infty$, inconclusive', '$L = 2$, so it converges'],
              correctAnswer: 0,
              explanation: '$L = \\lim \\frac{2n-1}{n^2+5}\\cdot n = \\lim \\frac{2n^2 - n}{n^2 + 5} = 2$. Since $0 < L < \\infty$ and $\\sum \\frac1n$ diverges, the series diverges.',
            },
            {
              question: 'Which statement is TRUE?',
              options: ['A $p$-series converges if and only if $p > 1$', 'If $a_n \\to 0$ then $\\sum a_n$ converges', 'Comparison tests work for any series, including alternating ones', 'The harmonic series $\\sum \\frac1n$ converges'],
              correctAnswer: 0,
              explanation: 'Only the first is true: $p$-series converge exactly when $p > 1$. Terms $\\to 0$ does not imply convergence ($\\sum \\frac1n$), comparison tests need positive terms, and the harmonic series diverges.',
            },
          ],
        },
      },
    ],
  },
]
