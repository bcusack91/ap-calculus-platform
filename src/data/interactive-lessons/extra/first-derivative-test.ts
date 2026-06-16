import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The First Derivative Test (AP Calculus AB).
 * Registry key / DB Topic.slug: 'first-derivative-test'.
 * 7 parts, gold-standard structure: increasing/decreasing & the sign of f' →
 * critical numbers → the First Derivative Test statement → building sign charts →
 * worked classifications (polynomials, products, trig) → non-differentiable &
 * domain-restricted subtleties → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every sign analysis and critical-point computation was verified before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'first-derivative-test',
    sections: [
      {
        id: 'fdt1-intro',
        type: 'text' as const,
        content: `# 📈 The First Derivative Test

**Part 1 of 7 — Increasing, Decreasing, and the Sign of $f'$**

---

### Topics in This Part

| Section |
|---------|
| What $f'$ tells you about $f$ |
| Increasing vs. decreasing intervals |
| Reading the sign of the derivative |
| Where the behavior can switch |

> 🔑 **Key Concept:** The **sign** of the first derivative $f'(x)$ tells you whether $f$ is climbing or falling. Where $f' > 0$, the graph **rises**; where $f' < 0$, it **falls**. The First Derivative Test turns this single idea into a complete recipe for finding and classifying every local maximum and minimum.`,
      },
      {
        id: 'fdt1-sign-meaning',
        type: 'text' as const,
        content: `## What the Sign of $f'$ Means

The derivative $f'(x)$ is the **slope** of $f$ at $x$. Slope has a sign, and that sign is the whole story:

| If on an interval... | then $f$ is... | the graph... |
|----------------------|----------------|--------------|
| $f'(x) > 0$ | **increasing** | goes **up** as $x$ moves right |
| $f'(x) < 0$ | **decreasing** | goes **down** as $x$ moves right |
| $f'(x) = 0$ | momentarily flat | has a horizontal tangent |

This is a theorem, not a guess: if $f'(x) > 0$ for every $x$ in an interval, then $f$ is increasing on that **whole** interval (and similarly for decreasing).

> 🔑 **Mantra:** *Positive slope = rising. Negative slope = falling.* Memorize the sign, and the shape follows.

### A Quick Picture

For $f(x) = x^2$, the derivative is $f'(x) = 2x$:
- For $x < 0$: $f'(x) = 2x < 0$, so $f$ is **decreasing** (the left half of the parabola falls).
- For $x > 0$: $f'(x) = 2x > 0$, so $f$ is **increasing** (the right half rises).

The switch from falling to rising happens right at $x = 0$ — the bottom of the parabola.`,
      },
      {
        id: 'fdt1-check-sign',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On an interval where $f\'(x) < 0$ for every $x$, the function $f$ is:',
              options: ['decreasing', 'increasing', 'constant', 'at a maximum'],
              correctAnswer: 0,
              explanation: 'A negative derivative means a negative slope everywhere on the interval, so the graph falls as $x$ increases. That is exactly "decreasing."',
            },
            {
              question: 'For $f(x) = x^2$ with $f\'(x) = 2x$, on the interval $(0, \\infty)$ the function is:',
              options: ['increasing', 'decreasing', 'constant', 'undefined'],
              correctAnswer: 0,
              explanation: 'For any $x > 0$, $f\'(x) = 2x > 0$. A positive derivative means $f$ is increasing on $(0, \\infty)$.',
            },
          ],
        },
      },
      {
        id: 'fdt1-eval-deriv',
        type: 'text' as const,
        content: `## Testing the Sign at a Point

You don't need the whole graph — just **plug a number into $f'$** and read the sign.

### Example: $f(x) = x^3 - 3x$

The derivative is $f'(x) = 3x^2 - 3$. Test a few inputs:

$$f'(-2) = 3(4) - 3 = 9 > 0 \\quad\\Rightarrow\\quad \\text{increasing near } x=-2$$
$$f'(0) = 3(0) - 3 = -3 < 0 \\quad\\Rightarrow\\quad \\text{decreasing near } x=0$$
$$f'(2) = 3(4) - 3 = 9 > 0 \\quad\\Rightarrow\\quad \\text{increasing near } x=2$$

> 💡 The function rises, then falls, then rises again. Somewhere between $x=-2$ and $x=0$ the slope had to pass through zero — that's where a **local maximum** lives. We'll pin it down exactly in Part 2.`,
      },
      {
        id: 'fdt1-drill-sign',
        type: 'input-boxes' as const,
        content: `**Read the Sign** 🧮

For $f(x) = x^2 - 4x + 1$, the derivative is $f'(x) = 2x - 4$. Evaluate $f'$ at each input and enter the **numerical value** (it will be positive or negative).

**1)** $f'(0) = \\,?$
**2)** $f'(2) = \\,?$
**3)** $f'(5) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-4', '0', '6'],
          hint1: '$f\'(0) = 2(0) - 4 = -4$. Negative, so $f$ is decreasing there.',
          hint2: '$f\'(2) = 2(2) - 4 = 0$. The slope is flat — a candidate for a turning point.',
          hint3: '$f\'(5) = 2(5) - 4 = 6$. Positive, so $f$ is increasing there.',
          explanation: '1) $-4$ (decreasing). 2) $0$ (flat — this is the vertex). 3) $6$ (increasing). The function falls until $x=2$, then rises: a local minimum at $x=2$.',
        },
      },
      {
        id: 'fdt1-where-switch',
        type: 'text' as const,
        content: `## Where Can the Behavior Switch?

A function can only change from increasing to decreasing (or vice versa) where the derivative either **equals zero** or is **undefined**. Everywhere else, $f'$ keeps its sign and $f$ keeps its direction.

> ⚠️ A horizontal tangent ($f' = 0$) is a *candidate* for a max or min — but not a guarantee. Some flat spots are neither (think of $f(x) = x^3$ at $x=0$, where the curve flattens but keeps rising). The First Derivative Test exists precisely to tell these cases apart.

These special inputs — where $f' = 0$ or $f'$ is undefined — are called **critical numbers**, and they are the heart of Part 2.`,
      },
      {
        id: 'fdt1-check-switch',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A function $f$ can change from increasing to decreasing only where:',
              options: [
                '$f\'(x) = 0$ or $f\'(x)$ is undefined',
                '$f(x) = 0$',
                '$f(x)$ is undefined',
                '$x$ is a whole number',
              ],
              correctAnswer: 0,
              explanation: 'Away from those points $f\'$ keeps its sign, so the direction can\'t flip. A switch in behavior requires $f\'=0$ or $f\'$ undefined — these are the critical numbers.',
            },
            {
              question: 'For $f(x) = x^3$ with $f\'(x) = 3x^2$, the slope at $x = 0$ is $0$, yet the function:',
              options: [
                'keeps increasing through $x = 0$',
                'has a local maximum at $x = 0$',
                'has a local minimum at $x = 0$',
                'is undefined at $x = 0$',
              ],
              correctAnswer: 0,
              explanation: '$f\'(x) = 3x^2 \\ge 0$ for all $x$, and it is positive on both sides of $0$. The tangent is momentarily flat, but $f$ keeps rising — a flat tangent does not guarantee a turning point.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'first-derivative-test',
    sections: [
      {
        id: 'fdt2-intro',
        type: 'text' as const,
        content: `# 📈 The First Derivative Test

**Part 2 of 7 — Critical Numbers**

---

> 🔑 **The Idea:** Every local maximum or minimum of $f$ hides at a **critical number** — an input where $f'(x) = 0$ or where $f'(x)$ does not exist. Find these first; they are the only places a turning point can occur.`,
      },
      {
        id: 'fdt2-definition',
        type: 'text' as const,
        content: `## Definition: Critical Number

A number $c$ in the domain of $f$ is a **critical number** if either:

1. $f'(c) = 0$ &nbsp;(horizontal tangent), **or**
2. $f'(c)$ **does not exist** (corner, cusp, or vertical tangent).

> ⚠️ The point $c$ must be **in the domain of $f$**. If $f$ isn't even defined at $x = c$, then $c$ is not a critical number — it's a hole or a vertical asymptote, handled separately.

### Why critical numbers matter

By Fermat's Theorem, *if $f$ has a local extremum at an interior point $c$, then $c$ is a critical number.* The contrapositive is the useful part: **anywhere that isn't critical cannot be a local max or min.** So critical numbers form the complete list of suspects.`,
      },
      {
        id: 'fdt2-find-zeros',
        type: 'text' as const,
        content: `## Finding Critical Numbers (Type 1: $f' = 0$)

Differentiate, set $f'(x) = 0$, and solve.

### Example: $f(x) = x^3 - 6x^2 + 9x + 2$

$$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$$

Set equal to zero: $3(x-1)(x-3) = 0 \\Rightarrow x = 1$ or $x = 3$.

The critical numbers are $x = 1$ and $x = 3$.

> 💡 **Always factor first if you can.** Factoring $3(x-1)(x-3)$ instantly gives the zeros and — bonus — makes the sign analysis in Part 4 almost effortless.`,
      },
      {
        id: 'fdt2-drill-find',
        type: 'input-boxes' as const,
        content: `**Find the Critical Numbers** 🧮

For $f(x) = x^3 - 12x$, find the critical numbers by solving $f'(x) = 0$. Enter the **smaller** value, then the **larger** value.

$$f'(x) = 3x^2 - 12$$

**1)** smaller critical number $= \\,?$
**2)** larger critical number $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-2', '2'],
          hint1: 'Set $3x^2 - 12 = 0$, so $x^2 = 4$.',
          hint2: '$x^2 = 4 \\Rightarrow x = \\pm 2$. Don\'t drop the negative root.',
          hint3: 'The two critical numbers are $x = -2$ and $x = 2$.',
          explanation: '$3x^2 - 12 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$. Smaller is $-2$, larger is $2$.',
        },
      },
      {
        id: 'fdt2-undefined',
        type: 'text' as const,
        content: `## Finding Critical Numbers (Type 2: $f'$ Undefined)

Not every critical number comes from $f' = 0$. The derivative can **fail to exist** at a sharp corner or cusp — and the function can still have an extremum there.

### Example: $f(x) = x^{2/3}$

$$f'(x) = \\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$$

This is never zero (a fraction with constant numerator $\\tfrac{2}{3}$ can't equal $0$), but it is **undefined at $x = 0$** — you'd divide by $\\sqrt[3]{0} = 0$.

Since $x = 0$ is in the domain of $f$ (indeed $f(0) = 0$), it **is** a critical number. The graph has a sharp **cusp** there — and, in fact, a local minimum.

> ⚠️ A common AP error is solving only $f'(x) = 0$ and forgetting to check where $f'$ is undefined. **Always do both.**`,
      },
      {
        id: 'fdt2-dropdown-type',
        type: 'dropdown-select' as const,
        content: `**Which Type?** 🔽

For each function, choose the kind of critical number at the indicated input.`,
        exercise: {
          dropdowns: [
            { label: '$f(x)=x^2-6x$ at $x=3$, where $f\'(x)=2x-6$:', options: ['$f\'=0$ (horizontal tangent)', '$f\'$ undefined (cusp)', 'not a critical number', 'outside the domain'] },
            { label: '$f(x)=x^{2/3}$ at $x=0$, where $f\'(x)=\\frac{2}{3\\sqrt[3]{x}}$:', options: ['$f\'$ undefined (cusp)', '$f\'=0$ (horizontal tangent)', 'not a critical number', 'a local maximum'] },
            { label: '$f(x)=\\frac{1}{x}$ at $x=0$:', options: ['not a critical number ($x=0$ not in domain)', '$f\'=0$', '$f\'$ undefined (cusp)', 'a local minimum'] },
          ],
          correctAnswers: ['$f\'=0$ (horizontal tangent)', '$f\'$ undefined (cusp)', 'not a critical number ($x=0$ not in domain)'],
          hint1: '$2x-6=0$ at $x=3$, a clean horizontal tangent.',
          hint2: '$\\frac{2}{3\\sqrt[3]{x}}$ blows up at $x=0$ but $f(0)=0$ is defined — a cusp.',
          hint3: '$1/x$ isn\'t defined at $x=0$, so $x=0$ can\'t be a critical number — it\'s an asymptote.',
          explanation: 'Type 1 ($f\'=0$) at $x=3$ for the parabola; Type 2 ($f\'$ undefined, but $f$ defined) at the cusp of $x^{2/3}$; and for $1/x$, $x=0$ is simply outside the domain, so it is not a critical number at all.',
        },
      },
      {
        id: 'fdt2-check-crit',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is a complete description of the critical numbers of $f$?',
              options: [
                'all $c$ in the domain where $f\'(c) = 0$ or $f\'(c)$ does not exist',
                'only the $c$ where $f\'(c) = 0$',
                'all $c$ where $f(c) = 0$',
                'only the endpoints of the interval',
              ],
              correctAnswer: 0,
              explanation: 'A critical number is any domain value where $f\'$ is zero OR fails to exist. Zeros of $f$ itself (where the graph crosses the $x$-axis) are irrelevant.',
            },
            {
              question: 'For $f(x) = \\frac{1}{x}$, is $x = 0$ a critical number?',
              options: [
                'No — $x = 0$ is not in the domain of $f$',
                'Yes — $f\'(0)$ does not exist',
                'Yes — $f(0) = 0$',
                'Yes — the graph has a vertical asymptote there',
              ],
              correctAnswer: 0,
              explanation: 'A critical number must lie in the domain of $f$. Since $f(0)$ is undefined ($1/0$), $x=0$ cannot be a critical number — it is a vertical asymptote, not a turning point.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'first-derivative-test',
    sections: [
      {
        id: 'fdt3-intro',
        type: 'text' as const,
        content: `# 📈 The First Derivative Test

**Part 3 of 7 — The Test Itself**

---

> 🔑 **The Payoff:** Finding a critical number tells you *where* a turning point might be. The **First Derivative Test** tells you *which kind* it is — by checking the sign of $f'$ on each side.`,
      },
      {
        id: 'fdt3-statement',
        type: 'text' as const,
        content: `## Statement of the First Derivative Test

Suppose $c$ is a critical number of a continuous function $f$. Look at the sign of $f'$ **just to the left** and **just to the right** of $c$:

| Sign of $f'$ left of $c$ | Sign of $f'$ right of $c$ | Conclusion at $x=c$ |
|:---:|:---:|:---|
| $+$ | $-$ | **local maximum** |
| $-$ | $+$ | **local minimum** |
| $+$ | $+$ | **no extremum** (keeps rising) |
| $-$ | $-$ | **no extremum** (keeps falling) |

> 🔑 **Read it as a story:** if $f$ rises *into* $c$ and falls *out of* it, $c$ is a **peak** (max). If $f$ falls *into* $c$ and rises *out of* it, $c$ is a **valley** (min). If the direction doesn't change, $c$ is neither.`,
      },
      {
        id: 'fdt3-signchange',
        type: 'text' as const,
        content: `## The Key Word: *Sign Change*

The First Derivative Test is entirely about whether $f'$ **changes sign** at $c$:

- $f'$ changes from $+$ to $-$ &nbsp;⟶&nbsp; **local maximum**
- $f'$ changes from $-$ to $+$ &nbsp;⟶&nbsp; **local minimum**
- $f'$ **does not** change sign &nbsp;⟶&nbsp; **neither**

### Example of "neither": $f(x) = x^3$

Here $f'(x) = 3x^2$, and $x = 0$ is a critical number. But $f'(-1) = 3 > 0$ and $f'(1) = 3 > 0$ — the slope is positive on **both** sides. No sign change, so $x = 0$ is **neither** a max nor a min, even though the tangent is horizontal.

> 💡 A horizontal tangent that doesn't change the sign of $f'$ is a **stationary point of inflection** — flat for an instant, but the function never turns around.`,
      },
      {
        id: 'fdt3-check-readsign',
        type: 'dropdown-select' as const,
        content: `**Classify From the Signs** 🔽

Each row gives the sign of $f'$ just left and just right of a critical number $c$. Choose what the First Derivative Test concludes.`,
        exercise: {
          dropdowns: [
            { label: '$f\'$ goes $+ \\to -$ at $c$:', options: ['local maximum', 'local minimum', 'neither', 'not enough info'] },
            { label: '$f\'$ goes $- \\to +$ at $c$:', options: ['local minimum', 'local maximum', 'neither', 'not enough info'] },
            { label: '$f\'$ goes $- \\to -$ at $c$:', options: ['neither', 'local maximum', 'local minimum', 'undefined'] },
            { label: '$f\'$ goes $+ \\to +$ at $c$:', options: ['neither', 'local maximum', 'local minimum', 'undefined'] },
          ],
          correctAnswers: ['local maximum', 'local minimum', 'neither', 'neither'],
          hint1: 'Rises then falls ($+\\to-$) is a peak; falls then rises ($-\\to+$) is a valley.',
          hint2: 'If the sign is the same on both sides, $f$ never turns around — neither a max nor a min.',
          hint3: 'Only a genuine sign change produces an extremum. Same sign both sides = neither.',
          explanation: '$+\\to-$ is a local max, $-\\to+$ is a local min, and no sign change (either $-\\to-$ or $+\\to+$) means neither.',
        },
      },
      {
        id: 'fdt3-worked-full',
        type: 'text' as const,
        content: `## A Complete First Example

Classify the critical numbers of $f(x) = x^3 - 6x^2 + 9x + 2$.

From Part 2, $f'(x) = 3(x-1)(x-3)$, with critical numbers $x = 1$ and $x = 3$. Test one point in each interval:

$$f'(0) = 3(-1)(-3) = 9 > 0 \\qquad (\\text{interval } x<1)$$
$$f'(2) = 3(1)(-1) = -3 < 0 \\qquad (\\text{interval } 1<x<3)$$
$$f'(4) = 3(3)(1) = 9 > 0 \\qquad (\\text{interval } x>3)$$

So $f'$ goes $+ \\to - \\to +$:

- At $x = 1$: $f'$ changes $+ \\to -$ ⟶ **local maximum**.
- At $x = 3$: $f'$ changes $- \\to +$ ⟶ **local minimum**.

> ✅ **Sanity check:** the function rises, turns over at $x=1$, falls to a valley at $x=3$, then rises again — exactly the classic cubic shape.`,
      },
      {
        id: 'fdt3-drill-value',
        type: 'input-boxes' as const,
        content: `**Find the Extreme Values** 🧮

Still using $f(x) = x^3 - 6x^2 + 9x + 2$ (local max at $x=1$, local min at $x=3$), compute the actual $y$-values by plugging into $f$.

**1)** local maximum value $f(1) = \\,?$
**2)** local minimum value $f(3) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '2'],
          hint1: '$f(1) = 1 - 6 + 9 + 2$.',
          hint2: '$f(3) = 27 - 6(9) + 9(3) + 2 = 27 - 54 + 27 + 2$.',
          hint3: 'Always plug the critical $x$ into $f$ (not $f\'$) to get the value.',
          explanation: '$f(1)=1-6+9+2=6$ (local max value). $f(3)=27-54+27+2=2$ (local min value).',
        },
      },
      {
        id: 'fdt3-check-apply',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A critical number $c$ has $f\'(x) > 0$ for $x$ slightly less than $c$ and $f\'(x) > 0$ for $x$ slightly greater than $c$. What is $c$?',
              options: ['neither a max nor a min', 'a local maximum', 'a local minimum', 'an absolute maximum'],
              correctAnswer: 0,
              explanation: 'The derivative is positive on both sides — no sign change — so $f$ keeps increasing right through $c$. It is neither a local max nor a local min.',
            },
            {
              question: 'At a local minimum of a differentiable function, the sign of $f\'$ changes:',
              options: ['from negative to positive', 'from positive to negative', 'it stays positive', 'it stays negative'],
              correctAnswer: 0,
              explanation: 'A local minimum is a valley: $f$ falls in ($f\' < 0$) and rises out ($f\' > 0$), so $f\'$ changes from negative to positive.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'first-derivative-test',
    sections: [
      {
        id: 'fdt4-intro',
        type: 'text' as const,
        content: `# 📈 The First Derivative Test

**Part 4 of 7 — Building a Sign Chart**

---

> 🔑 **The Tool:** A **sign chart** (sign line) for $f'$ organizes everything — critical numbers, test points, and the resulting $+/-$ pattern — into one tidy number line. It's the fastest, most reliable way to apply the test.`,
      },
      {
        id: 'fdt4-howto',
        type: 'text' as const,
        content: `## How to Build a Sign Chart

1. **Find $f'(x)$** and factor it completely.
2. **Mark every critical number** on a number line (zeros of $f'$ *and* where $f'$ is undefined).
3. **Pick one test point** in each open interval between marks.
4. **Evaluate the sign of $f'$** at each test point (you only need the sign, not the value).
5. **Read the pattern:** $+\\to-$ is a max, $-\\to+$ is a min, no change is neither.

> 💡 **Shortcut for the sign:** with $f'$ in factored form, you don't have to multiply anything out — just count how many factors are negative at the test point. An **odd** number of negative factors makes the product negative; an **even** number makes it positive.`,
      },
      {
        id: 'fdt4-worked',
        type: 'text' as const,
        content: `## Worked Sign Chart: $f(x) = x^4 - 8x^2$

Differentiate and factor:

$$f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2)$$

Critical numbers: $x = -2,\\ 0,\\ 2$. They split the line into four intervals. Test a point in each:

| Interval | Test $x$ | $4x$ | $(x-2)$ | $(x+2)$ | Sign of $f'$ |
|:--------:|:--------:|:----:|:-------:|:-------:|:------------:|
| $x < -2$ | $-3$ | $-$ | $-$ | $-$ | $\\;-\\;$ |
| $-2<x<0$ | $-1$ | $-$ | $-$ | $+$ | $\\;+\\;$ |
| $0<x<2$ | $1$ | $+$ | $-$ | $+$ | $\\;-\\;$ |
| $x>2$ | $3$ | $+$ | $+$ | $+$ | $\\;+\\;$ |

Reading the sign row $-\\,+\\,-\\,+$:

- $x = -2$: $-\\to+$ ⟶ **local minimum**
- $x = 0$: $+\\to-$ ⟶ **local maximum**
- $x = 2$: $-\\to+$ ⟶ **local minimum**

> ✅ This "W" shape (two valleys flanking a central hump) is typical of an even-degree quartic with a positive leading coefficient.`,
      },
      {
        id: 'fdt4-check-shortcut',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'With $f\'$ in fully factored form, the product is **negative** at a test point exactly when the number of negative factors is:',
              options: ['odd', 'even', 'zero', 'equal to the number of factors'],
              correctAnswer: 0,
              explanation: 'Each negative factor flips the sign. An odd number of negatives leaves the product negative; an even number (including zero) leaves it positive.',
            },
            {
              question: 'For $f\'(x) = 4x(x-2)(x+2)$, the sign of $f\'$ at the test point $x = -1$ is:',
              options: ['positive', 'negative', 'zero', 'undefined'],
              correctAnswer: 0,
              explanation: 'At $x=-1$: $4x=-4$ ($-$), $x-2=-3$ ($-$), $x+2=1$ ($+$). That is two negative factors — an even count — so the product is positive: $4(-1)(-3)(1)=12>0$.',
            },
          ],
        },
      },
      {
        id: 'fdt4-drill-counts',
        type: 'input-boxes' as const,
        content: `**Count the Negative Factors** 🧮

Use $f'(x) = 4x(x-2)(x+2)$ from the worked example. For each test point, enter **how many of the three factors are negative** (a whole number $0$–$3$).

**1)** at $x = -3$: number of negative factors $= \\,?$
**2)** at $x = 1$: number of negative factors $= \\,?$
**3)** at $x = 3$: number of negative factors $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1', '0'],
          hint1: 'At $x=-3$: $4x=-12$ ($-$), $x-2=-5$ ($-$), $x+2=-1$ ($-$). All three are negative.',
          hint2: 'At $x=1$: $4x=4$ ($+$), $x-2=-1$ ($-$), $x+2=3$ ($+$). Exactly one is negative.',
          hint3: 'At $x=3$: $4x=12$ ($+$), $x-2=1$ ($+$), $x+2=5$ ($+$). None are negative.',
          explanation: 'At $x=-3$: 3 negatives (odd ⟶ $f\'<0$). At $x=1$: 1 negative (odd ⟶ $f\'<0$). At $x=3$: 0 negatives (even ⟶ $f\'>0$). Odd count = negative product, even count = positive product.',
        },
      },
      {
        id: 'fdt4-check-read',
        type: 'dropdown-select' as const,
        content: `**Read the Chart** 🔽

A function has sign chart for $f'$:

$$\\underbrace{+}_{x<-1}\\;\\bigl(-1\\bigr)\\;\\underbrace{-}_{-1<x<4}\\;\\bigl(4\\bigr)\\;\\underbrace{+}_{x>4}$$

Use it to classify each critical number.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = -1$ ($f\'$ goes $+ \\to -$):', options: ['local maximum', 'local minimum', 'neither', 'absolute minimum'] },
            { label: 'At $x = 4$ ($f\'$ goes $- \\to +$):', options: ['local minimum', 'local maximum', 'neither', 'absolute maximum'] },
            { label: 'On the interval $-1 < x < 4$, $f$ is:', options: ['decreasing', 'increasing', 'constant', 'concave up'] },
          ],
          correctAnswers: ['local maximum', 'local minimum', 'decreasing'],
          hint1: '$+\\to-$ means rise then fall — a peak.',
          hint2: '$-\\to+$ means fall then rise — a valley.',
          hint3: 'Between $-1$ and $4$ the sign of $f\'$ is negative, so $f$ is decreasing there.',
          explanation: 'At $x=-1$: $+\\to-$ is a local max. At $x=4$: $-\\to+$ is a local min. Between them $f\'<0$, so $f$ decreases from the peak down to the valley.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'first-derivative-test',
    sections: [
      {
        id: 'fdt5-intro',
        type: 'text' as const,
        content: `# 📈 The First Derivative Test

**Part 5 of 7 — Worked Examples: Products, Quotients & Trig**

---

> 🔑 **Beyond polynomials:** the test works on *any* differentiable function. The only thing that changes is how you compute and factor $f'$. Here we tackle a product, a rational function, and a trig function.`,
      },
      {
        id: 'fdt5-product',
        type: 'text' as const,
        content: `## Example 1: A Product — $f(x) = x e^{-x}$

Use the product rule, then factor out the common piece:

$$f'(x) = (1)e^{-x} + x(-e^{-x}) = e^{-x}(1 - x)$$

Since $e^{-x} > 0$ for **every** $x$, the sign of $f'$ depends only on the factor $(1 - x)$:

- For $x < 1$: $\\,1 - x > 0$, so $f'(x) > 0$ — increasing.
- For $x > 1$: $\\,1 - x < 0$, so $f'(x) < 0$ — decreasing.

The only critical number is $x = 1$, and $f'$ changes $+ \\to -$ there.

> ✅ By the First Derivative Test, $f$ has a **local maximum at $x = 1$**, with value $f(1) = 1\\cdot e^{-1} = \\dfrac{1}{e} \\approx 0.368$.`,
      },
      {
        id: 'fdt5-check-product',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $f\'(x) = e^{-x}(1 - x)$, why can we ignore $e^{-x}$ when finding the sign?',
              options: [
                'because $e^{-x}$ is always positive, so it never affects the sign',
                'because $e^{-x}$ is always negative',
                'because $e^{-x}$ equals zero at the critical number',
                'because $e^{-x}$ cancels with $(1-x)$',
              ],
              correctAnswer: 0,
              explanation: 'The exponential $e^{-x}$ is positive for all real $x$, so it can never flip the sign of the product. Only the factor $(1-x)$ can change sign, and it does so at $x=1$.',
            },
          ],
        },
      },
      {
        id: 'fdt5-rational',
        type: 'text' as const,
        content: `## Example 2: A Rational Function — $f(x) = \\dfrac{x^2}{x - 1}$

Domain: all $x \\ne 1$. By the quotient rule:

$$f'(x) = \\frac{(2x)(x-1) - x^2(1)}{(x-1)^2} = \\frac{2x^2 - 2x - x^2}{(x-1)^2} = \\frac{x^2 - 2x}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}$$

The denominator $(x-1)^2 > 0$ wherever it's defined, so the sign of $f'$ comes from the numerator $x(x-2)$. Critical numbers (zeros of $f'$): $x = 0$ and $x = 2$.

> ⚠️ $x = 1$ makes $f'$ undefined, but it is **not** a critical number because $x=1$ is **not in the domain** of $f$ (it's a vertical asymptote). Mark it on the sign chart only as a place where the sign *could* flip.

Sign of $f' = \\dfrac{x(x-2)}{(x-1)^2}$ (denominator always $+$):

| Interval | $x<0$ | $0<x<1$ | $1<x<2$ | $x>2$ |
|:--------:|:-----:|:-------:|:-------:|:-----:|
| numerator $x(x-2)$ | $+$ | $-$ | $-$ | $+$ |
| **$f'$** | $+$ | $-$ | $-$ | $+$ |

- $x = 0$: $+\\to-$ ⟶ **local maximum**, $f(0) = \\dfrac{0}{-1} = 0$.
- $x = 2$: $-\\to+$ ⟶ **local minimum**, $f(2) = \\dfrac{4}{1} = 4$.

> 💡 The sign **didn't** change across $x=1$ (it was $-$ on both sides), so the asymptote is not an extremum — exactly what we expect.`,
      },
      {
        id: 'fdt5-drill-rational',
        type: 'input-boxes' as const,
        content: `**Use the Sign Chart** 🧮

For $f(x) = \\dfrac{x^2}{x-1}$ with $f'(x) = \\dfrac{x(x-2)}{(x-1)^2}$, answer using the chart above. Enter numbers; for the values, compute $f$ at the critical input.

**1)** The $x$-value of the local maximum $= \\,?$
**2)** The local minimum **value** $f(2) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '4'],
          hint1: 'The local max is where $f\'$ goes $+\\to-$, which is at $x=0$.',
          hint2: 'The local min is at $x=2$; its value is $f(2) = \\dfrac{2^2}{2-1} = \\dfrac{4}{1}$.',
          hint3: '$f(2) = 4/1 = 4$.',
          explanation: 'Local max at $x=0$ (where $f=0$); local min at $x=2$ with value $f(2)=4/1=4$.',
        },
      },
      {
        id: 'fdt5-trig',
        type: 'text' as const,
        content: `## Example 3: Trig — $f(x) = \\sin x + \\cos x$ on $[0, 2\\pi]$

$$f'(x) = \\cos x - \\sin x$$

Set $f'(x) = 0$: $\\;\\cos x = \\sin x \\Rightarrow \\tan x = 1 \\Rightarrow x = \\dfrac{\\pi}{4},\\ \\dfrac{5\\pi}{4}$.

Test points in $[0, 2\\pi]$:

$$f'(0) = \\cos 0 - \\sin 0 = 1 - 0 = 1 > 0$$
$$f'(\\pi) = \\cos\\pi - \\sin\\pi = -1 - 0 = -1 < 0$$
$$f'(2\\pi) = \\cos 2\\pi - \\sin 2\\pi = 1 - 0 = 1 > 0$$

So $f'$ runs $+\\,(-)\\,+$ across $\\tfrac{\\pi}{4}$ and $\\tfrac{5\\pi}{4}$:

- $x = \\dfrac{\\pi}{4}$: $+\\to-$ ⟶ **local maximum**.
- $x = \\dfrac{5\\pi}{4}$: $-\\to+$ ⟶ **local minimum**.

> ✅ **Check the value:** $f\\!\\left(\\tfrac{\\pi}{4}\\right) = \\tfrac{\\sqrt2}{2} + \\tfrac{\\sqrt2}{2} = \\sqrt2 \\approx 1.414$ — the maximum of $\\sin x + \\cos x$, as expected.`,
      },
      {
        id: 'fdt5-check-trig',
        type: 'dropdown-select' as const,
        content: `**Trig Classification** 🔽

Using $f(x) = \\sin x + \\cos x$ with $f'(x) = \\cos x - \\sin x$ on $[0, 2\\pi]$:`,
        exercise: {
          dropdowns: [
            { label: 'At $x = \\frac{\\pi}{4}$, the function has a:', options: ['local maximum', 'local minimum', 'neither', 'vertical tangent'] },
            { label: 'At $x = \\frac{5\\pi}{4}$, the function has a:', options: ['local minimum', 'local maximum', 'neither', 'vertical tangent'] },
            { label: 'The critical numbers come from solving:', options: ['$\\tan x = 1$', '$\\sin x = 0$', '$\\cos x = 0$', '$\\tan x = -1$'] },
          ],
          correctAnswers: ['local maximum', 'local minimum', '$\\tan x = 1$'],
          hint1: 'At $\\frac{\\pi}{4}$, $f\'$ goes $+\\to-$.',
          hint2: 'At $\\frac{5\\pi}{4}$, $f\'$ goes $-\\to+$.',
          hint3: 'Setting $\\cos x - \\sin x = 0$ gives $\\cos x = \\sin x$, i.e. $\\tan x = 1$.',
          explanation: '$f\'=\\cos x - \\sin x = 0 \\Rightarrow \\tan x = 1$, giving $x=\\frac{\\pi}{4}$ (max, $+\\to-$) and $x=\\frac{5\\pi}{4}$ (min, $-\\to+$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'first-derivative-test',
    sections: [
      {
        id: 'fdt6-intro',
        type: 'text' as const,
        content: `# 📈 The First Derivative Test

**Part 6 of 7 — Subtleties: Non-Differentiable Points & Restricted Domains**

---

> 🔑 **The Fine Print:** the test still works at corners, cusps, and on broken domains — but you must respect where the function actually lives. This part covers the traps AP loves to set.`,
      },
      {
        id: 'fdt6-corners',
        type: 'text' as const,
        content: `## Extrema at Corners and Cusps

A function can have a local max or min where it is **continuous but not differentiable**. The test handles these the same way: check the sign of $f'$ on each side.

### Example: $f(x) = \\lvert x\\rvert$

For $x < 0$, $f(x) = -x$ so $f'(x) = -1$. For $x > 0$, $f(x) = x$ so $f'(x) = +1$. At $x=0$ the derivative **doesn't exist** (a corner), so $x = 0$ is a critical number.

The sign of $f'$ runs $-\\to+$ across $x = 0$:

$$f'(x) = -1 \\;(x<0) \\quad\\longrightarrow\\quad f'(x) = +1 \\;(x>0)$$

That's a $-\\to+$ change, so $x = 0$ is a **local (and absolute) minimum**, with value $f(0)=0$ — even though there's no horizontal tangent.

> 💡 **The First Derivative Test doesn't need a horizontal tangent.** It only needs a **sign change** in $f'$. That's why it succeeds at corners where the Second Derivative Test simply can't be applied.`,
      },
      {
        id: 'fdt6-check-corner',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why does the First Derivative Test succeed at the corner of $f(x) = \\lvert x\\rvert$ when the Second Derivative Test cannot be used there?',
              options: [
                'The First Derivative Test only needs a sign change in $f\'$, not a value of $f\'\'$',
                'Because $f\'\'(0) = 0$ there',
                'Because $\\lvert x\\rvert$ has a horizontal tangent at $x=0$',
                'It does not work either; $\\lvert x\\rvert$ has no extremum',
              ],
              correctAnswer: 0,
              explanation: 'At $x=0$ the first derivative doesn\'t exist, so $f\'\'(0)$ certainly doesn\'t either — the Second Derivative Test is inapplicable. But the First Derivative Test only checks the sign of $f\'$ on each side, which changes $-\\to+$, confirming a local minimum.',
            },
          ],
        },
      },
      {
        id: 'fdt6-domain',
        type: 'text' as const,
        content: `## Respect the Domain

The First Derivative Test classifies **interior** critical numbers. You must:

1. Only test inputs **inside the domain** of $f$.
2. Choose test points that **also lie in the domain** — never test on the far side of a gap or asymptote and pretend it's adjacent.

### Example: $f(x) = \\sqrt{x}\\,$ — a one-sided domain

$$f'(x) = \\frac{1}{2\\sqrt{x}}, \\quad \\text{defined only for } x > 0.$$

This is **always positive** on the domain $(0,\\infty)$, so $f$ is increasing everywhere it exists. There is **no interior critical number** and therefore **no local extremum** — even though $f'$ "blows up" as $x \\to 0^+$. The point $x=0$ is a domain endpoint, classified separately (it is the absolute minimum on $[0,\\infty)$).

> ⚠️ **Don't invent a critical number from an asymptote or an endpoint.** $f'$ being undefined matters **only** when the original $f$ is still defined there.`,
      },
      {
        id: 'fdt6-drill-cusp',
        type: 'input-boxes' as const,
        content: `**Count the Critical Numbers** 🧮

For each function, enter how many **critical numbers** it has (a whole number). Remember: include both $f'=0$ and $f'$-undefined points, but only those **in the domain of $f$**.

**1)** $f(x) = x^{2/3}$, with $f'(x)=\\dfrac{2}{3\\sqrt[3]{x}}$ &nbsp;(defined for all real $x$): how many?
**2)** $f(x) = \\sqrt{x}$ on its domain $[0,\\infty)$, with $f'(x)=\\dfrac{1}{2\\sqrt{x}}$: how many **interior** critical numbers?
**3)** $f(x) = \\lvert x\\rvert$: how many?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '0', '1'],
          hint1: '$x^{2/3}$: $f\'$ is never $0$ but is undefined at $x=0$, and $f(0)=0$ is defined — that\'s 1 critical number (the cusp).',
          hint2: '$\\sqrt{x}$: $f\'>0$ everywhere on $(0,\\infty)$ and is never $0$; the only undefined point, $x=0$, is an endpoint, not interior — so 0 interior critical numbers.',
          hint3: '$\\lvert x\\rvert$: $f\'$ is undefined at the corner $x=0$ (and $x=0$ is in the domain) — that\'s 1 critical number.',
          explanation: '$x^{2/3}$ has 1 (cusp at $0$). $\\sqrt{x}$ has 0 interior (its only special point is the endpoint $x=0$). $\\lvert x\\rvert$ has 1 (corner at $0$).',
        },
      },
      {
        id: 'fdt6-drill-domain',
        type: 'dropdown-select' as const,
        content: `**Domain Awareness** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'For $f(x)=\\sqrt{x}$ on $(0,\\infty)$, the number of interior local extrema is:', options: ['0', '1', '2', 'infinitely many'] },
            { label: 'For $f(x)=\\lvert x\\rvert$, the point $x=0$ is a critical number because:', options: ['$f\'(0)$ does not exist', '$f\'(0)=0$', '$f(0)=0$', '$x=0$ is an asymptote'] },
            { label: 'A place where $f\'$ is undefined counts as a critical number only if:', options: ['$x$ is in the domain of $f$', '$f\'\'$ is also undefined', '$f$ crosses the $x$-axis', 'it is an endpoint'] },
          ],
          correctAnswers: ['0', '$f\'(0)$ does not exist', '$x$ is in the domain of $f$'],
          hint1: '$f\'(x)=\\frac{1}{2\\sqrt{x}}>0$ for all $x>0$, so $f$ only increases — no turning point.',
          hint2: 'At the corner of $\\lvert x\\rvert$, the left slope ($-1$) and right slope ($+1$) disagree, so $f\'(0)$ does not exist.',
          hint3: 'Critical numbers must lie in the domain of $f$; an undefined $f\'$ at a point outside the domain doesn\'t count.',
          explanation: '$\\sqrt{x}$ has 0 interior extrema (always increasing). $\\lvert x\\rvert$ has a critical number at $0$ because $f\'(0)$ DNE. And $f\'$ being undefined only creates a critical number when $x$ is actually in the domain of $f$.',
        },
      },
      {
        id: 'fdt6-summary-trap',
        type: 'text' as const,
        content: `## The Three Classic Traps — Summarized

| Trap | What goes wrong | Fix |
|------|-----------------|-----|
| Forgetting Type-2 critical numbers | You solve only $f'=0$ and miss cusps/corners | Also find where $f'$ is undefined **and** $f$ is defined |
| Treating an asymptote as a critical number | $x$ isn't in the domain of $f$ | A critical number must be in $\\text{dom}(f)$ |
| Assuming every flat tangent is an extremum | $f' = 0$ with no sign change (e.g. $x^3$) | Always confirm a **sign change** |

> 🔑 **The reliable workflow:** (1) find all critical numbers correctly, (2) build a sign chart on the domain, (3) classify by sign change. Do those three and you'll never miss or invent an extremum.`,
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'first-derivative-test',
    sections: [
      {
        id: 'fdt7-intro',
        type: 'text' as const,
        content: `# 📈 The First Derivative Test

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) read $f$'s behavior from the sign of $f'$, (2) locate every critical number, (3) build a sign chart, and (4) classify each turning point. Let's put it all together.`,
      },
      {
        id: 'fdt7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Decide increasing/decreasing | sign of $f'$: $+$ rises, $-$ falls |
| Find critical numbers | solve $f'=0$ **and** find where $f'$ is undefined (in $\\text{dom}\\,f$) |
| Classify a critical number | sign change of $f'$: $+\\to-$ max, $-\\to+$ min, no change neither |
| Find the extreme **value** | plug the critical $x$ back into $f$ (not $f'$) |

> ⚠️ Three habits to keep: include **Type-2** critical numbers, **stay inside the domain**, and never trust a flat tangent without checking for a real **sign change**.`,
      },
      {
        id: 'fdt7-mixed1',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = x^3 - 3x^2 + 4$, the derivative is $f\'(x) = 3x^2 - 6x = 3x(x-2)$. Classify $x = 0$.',
              options: ['local maximum', 'local minimum', 'neither', 'absolute minimum'],
              correctAnswer: 0,
              explanation: '$f\'=3x(x-2)$. Test $x=-1$: $3(-1)(-3)=9>0$. Test $x=1$: $3(1)(-1)=-3<0$. The sign goes $+\\to-$ at $x=0$, so it is a local maximum.',
            },
            {
              question: 'For the same $f$, classify $x = 2$.',
              options: ['local minimum', 'local maximum', 'neither', 'absolute maximum'],
              correctAnswer: 0,
              explanation: 'Test $x=1$: $f\'=-3<0$. Test $x=3$: $3(3)(1)=9>0$. The sign goes $-\\to+$ at $x=2$, so it is a local minimum.',
            },
          ],
        },
      },
      {
        id: 'fdt7-drill-find',
        type: 'input-boxes' as const,
        content: `**Locate and Value** 🧮

For $f(x) = 2x^3 - 9x^2 + 12x$, the derivative is $f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2)$.

**1)** The smaller critical number $= \\,?$
**2)** The larger critical number $= \\,?$
**3)** The local maximum **value** $f(1) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '2', '5'],
          hint1: '$6(x-1)(x-2)=0 \\Rightarrow x=1$ or $x=2$.',
          hint2: 'Test signs: $f\'(0)=12>0$, $f\'(1.5)=6(0.5)(-0.5)=-1.5<0$, $f\'(3)=6(2)(1)=12>0$. So $x=1$ is a max ($+\\to-$), $x=2$ is a min ($-\\to+$).',
          hint3: '$f(1)=2(1)-9(1)+12(1)=2-9+12=5$.',
          explanation: 'Critical numbers $x=1$ (local max) and $x=2$ (local min). The local max value is $f(1)=2-9+12=5$.',
        },
      },
      {
        id: 'fdt7-mixed2',
        type: 'dropdown-select' as const,
        content: `**Putting It Together** 🔽

For $g(x) = x^4 - 4x^3$, the derivative is $g'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$.`,
        exercise: {
          dropdowns: [
            { label: 'The critical numbers are:', options: ['$x = 0$ and $x = 3$', '$x = 0$ only', '$x = 3$ only', '$x = \\pm 3$'] },
            { label: 'At $x = 0$ ($g\'$: $-\\to-$, no sign change):', options: ['neither', 'local maximum', 'local minimum', 'absolute maximum'] },
            { label: 'At $x = 3$ ($g\'$: $-\\to+$):', options: ['local minimum', 'local maximum', 'neither', 'absolute maximum'] },
          ],
          correctAnswers: ['$x = 0$ and $x = 3$', 'neither', 'local minimum'],
          hint1: 'Set $4x^2(x-3)=0$: the factor $x^2$ gives $x=0$, and $(x-3)$ gives $x=3$.',
          hint2: 'Near $x=0$: test $x=-1$ ⟶ $4(1)(-4)=-16<0$; test $x=1$ ⟶ $4(1)(-2)=-8<0$. Same sign, so neither.',
          hint3: 'Near $x=3$: test $x=2$ ⟶ $4(4)(-1)=-16<0$; test $x=4$ ⟶ $4(16)(1)=64>0$. $-\\to+$ is a local min.',
          explanation: 'Critical numbers $x=0,3$. At $x=0$ the factor $x^2$ never changes sign, so $g\'$ stays negative on both sides ⟶ neither. At $x=3$, $g\'$ goes $-\\to+$ ⟶ local minimum. (Note: $x^2$ is an even-power factor — it touches zero without flipping sign.)',
        },
      },
      {
        id: 'fdt7-transition',
        type: 'text' as const,
        content: `## One Last Idea: Even-Power Factors

In $g'(x) = 4x^2(x-3)$, the factor $x^2$ is **squared** — an even power. Even-power factors **touch** zero but do **not** change sign. That's why $x=0$ was "neither": the squared factor kept $g'$ negative on both sides.

> 🔑 **Pattern to remember:** an **odd**-power factor (like $x$ or $(x-3)^1$) flips the sign as $x$ crosses its zero; an **even**-power factor (like $x^2$ or $(x-1)^4$) does not. Spotting this saves you from misclassifying a stationary inflection point.

You're ready for the Exit Quiz. 🚀`,
      },
      {
        id: 'fdt7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A continuous function has $f\'(x) > 0$ on $(-\\infty, 2)$ and $f\'(x) < 0$ on $(2, \\infty)$. What occurs at $x = 2$?',
              options: ['a local maximum', 'a local minimum', 'neither', 'a vertical asymptote'],
              correctAnswer: 0,
              explanation: 'The derivative changes from positive to negative at $x=2$ ($+\\to-$), so $f$ rises then falls: a local maximum.',
            },
            {
              question: 'Which value is a critical number of $f(x) = x^{1/3}$, whose derivative is $f\'(x) = \\frac{1}{3}x^{-2/3} = \\frac{1}{3\\sqrt[3]{x^2}}$?',
              options: ['$x = 0$', '$x = 1$', '$x = -1$', 'there are none'],
              correctAnswer: 0,
              explanation: '$f\'$ is never zero, but it is undefined at $x=0$ (division by $\\sqrt[3]{0}=0$). Since $x=0$ is in the domain of $f$ (with $f(0)=0$), it is a critical number — a vertical-tangent point.',
            },
            {
              question: 'For $f\'(x) = (x+1)(x-4)^2$, what happens at $x = 4$?',
              options: ['neither (no sign change)', 'local maximum', 'local minimum', 'absolute maximum'],
              correctAnswer: 0,
              explanation: 'The factor $(x-4)^2$ is squared (even power), so it touches zero without changing sign. Near $x=4$, $(x+1)>0$ and $(x-4)^2 \\ge 0$, so $f\'$ is positive on both sides — no sign change, hence neither a max nor a min.',
            },
          ],
        },
      },
    ],
  },
]
