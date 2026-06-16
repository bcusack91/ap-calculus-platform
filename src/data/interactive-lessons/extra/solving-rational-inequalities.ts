import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Rational Inequalities (AP Precalculus).
 * Registry key / DB Topic.slug: 'solving-rational-inequalities'.
 * 7 parts, gold-standard structure: foundations & the cross-multiply trap →
 * critical numbers (zeros vs. undefined) → the sign-chart method → reading the chart
 * (strict vs. non-strict, excluded points) → getting to standard form (one side, common
 * denominator) → multiplicity & harder factored examples → applications, interval
 * notation + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every sign-chart, interval, and root was verified by test-point substitution before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'solving-rational-inequalities',
    sections: [
      {
        id: 'sri1-intro',
        type: 'text' as const,
        content: `# ➗ Rational Inequalities

**Part 1 of 7 — Why Rational Inequalities Are Different**

---

### Topics in This Part

| Section |
|---------|
| What Is a Rational Inequality? |
| The Cross-Multiplication Trap |
| Two Kinds of "Critical" Points |

> 🔑 **Key Concept:** A **rational inequality** compares a ratio of polynomials to $0$ — for example $\\dfrac{x-1}{x+2} > 0$. The whole challenge is that a fraction can flip sign in **two** ways: when its **top** hits zero, *or* when its **bottom** hits zero. Tracking both is what this lesson is about.`,
      },
      {
        id: 'sri1-what',
        type: 'text' as const,
        content: `## What Is a Rational Inequality?

A **rational inequality** is an inequality involving a rational expression — a polynomial divided by a polynomial — compared with $0$ (or that *can be rearranged* to compare with $0$):

$$\\frac{x-1}{x+2} > 0, \\qquad \\frac{x^2-4}{x-3} \\le 0, \\qquad \\frac{5}{x} \\ge 2$$

A **solution** is the set of all $x$-values that make the statement **true**. The answer is almost always a **union of intervals**, not a single number.

| Expression | Top is $0$ when… | Bottom is $0$ when… |
|------------|------------------|---------------------|
| $\\dfrac{x-1}{x+2}$ | $x = 1$ | $x = -2$ |
| $\\dfrac{x^2-4}{x-3}$ | $x = 2,\\,-2$ | $x = 3$ |
| $\\dfrac{5}{x}$ | never | $x = 0$ |

> ⚠️ **Domain first:** Wherever the **denominator** is $0$, the expression is **undefined**. Those $x$-values can *never* be part of the solution, no matter what.`,
      },
      {
        id: 'sri1-trap',
        type: 'text' as const,
        content: `## The Cross-Multiplication Trap

With an **equation** like $\\dfrac{x-1}{x+2} = 0$ you might clear the fraction by multiplying both sides by $x+2$. With an **inequality**, that move is **dangerous**.

Why? Because multiplying both sides of an inequality by a **negative** number *flips* the inequality sign — and we usually don't know the sign of $x+2$ (it depends on $x$!).

$$\\frac{x-1}{x+2} > 0 \\;\\;\\overset{?}{\\Longrightarrow}\\;\\; x - 1 > 0 \\quad\\text{(WRONG — assumes } x+2>0)$$

> ⚠️ **Never multiply an inequality by a variable expression** unless you know its sign. Instead, we'll get one side to $0$ and read the sign of the fraction directly. That's the **sign-chart method**, coming in Part 3.`,
      },
      {
        id: 'sri1-trap-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why is it unsafe to "cross-multiply" $\\dfrac{x-1}{x+2} > 0$ by $x+2$?',
              options: [
                'Because $x+2$ could be negative, which would flip the inequality',
                'Because cross-multiplication only works for equations with no variables',
                'Because the top and bottom must be the same degree',
                'It is actually always safe to do this',
              ],
              correctAnswer: 0,
              explanation: 'When $x < -2$, the factor $x+2$ is negative. Multiplying an inequality by a negative number reverses its direction, so the move is only valid if you know $x+2 > 0$ — which you do not.',
            },
            {
              question: 'For $\\dfrac{x^2-4}{x-3} \\le 0$, which value can NEVER be a solution?',
              options: ['$x = 3$', '$x = 2$', '$x = -2$', '$x = 0$'],
              correctAnswer: 0,
              explanation: 'At $x=3$ the denominator $x-3$ is $0$, so the expression is undefined. An undefined expression can never satisfy the inequality, so $x=3$ is always excluded.',
            },
          ],
        },
      },
      {
        id: 'sri1-critical',
        type: 'text' as const,
        content: `## Two Kinds of "Critical" Points

A rational expression can only change sign at a place where it **equals $0$** or where it is **undefined**. These are the **critical numbers** (also called boundary points):

- **Zeros of the numerator** → the expression *equals* $0$ here. These may be **included** (closed dot $\\bullet$) if the inequality is $\\le$ or $\\ge$.
- **Zeros of the denominator** → the expression is *undefined* here. These are **always excluded** (open dot $\\circ$), no matter the inequality sign.

For $\\dfrac{x-1}{x+2}$, the critical numbers are $x = 1$ (a zero) and $x = -2$ (undefined). They split the number line into three pieces:

$$(-\\infty,\\,-2),\\qquad (-2,\\,1),\\qquad (1,\\,\\infty)$$

> 💡 With $n$ critical numbers you get $n+1$ intervals to test. The sign of the fraction is **constant** on each interval — it can only switch *at* a critical number.`,
      },
      {
        id: 'sri1-critical-drill',
        type: 'input-boxes' as const,
        content: `**Find the Critical Numbers** 🧮

For $\\dfrac{x+5}{x-3}$:

**1)** Numerator zero: $x = \\,?$
**2)** Denominator zero (undefined): $x = \\,?$
**3)** How many intervals do these two points create on the number line? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-5', '3', '3'],
          hint1: 'Set the top $x+5 = 0$.',
          hint2: 'Set the bottom $x-3 = 0$.',
          hint3: 'Two critical numbers split the line into $2+1 = 3$ intervals.',
          explanation: '1) $x+5=0 \\Rightarrow x=-5$ (a zero, possibly included). 2) $x-3=0 \\Rightarrow x=3$ (undefined, always excluded). 3) Two points give three intervals: $(-\\infty,-5)$, $(-5,3)$, $(3,\\infty)$.',
        },
      },
      {
        id: 'sri1-sort-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sort the Critical Numbers** 🔽

For $\\dfrac{x-1}{x+2}$, the critical numbers are $1$ and $-2$. Order them on the number line and identify each.`,
        exercise: {
          dropdowns: [
            { label: 'Leftmost critical number:', options: ['$-2$', '$1$'] },
            { label: 'The point $x=-2$ comes from the…', options: ['denominator (undefined)', 'numerator (zero)'] },
            { label: 'The point $x=1$ comes from the…', options: ['numerator (zero)', 'denominator (undefined)'] },
          ],
          correctAnswers: ['$-2$', 'denominator (undefined)', 'numerator (zero)'],
          hint1: 'On a number line, $-2$ sits to the left of $1$.',
          hint2: '$x=-2$ makes the bottom $x+2$ equal $0$.',
          hint3: '$x=1$ makes the top $x-1$ equal $0$.',
          explanation: 'In increasing order: $-2$, then $1$. $x=-2$ zeros the denominator $x+2$ (undefined, open dot); $x=1$ zeros the numerator $x-1$ (a value of $0$, dot type set by the inequality).',
        },
      },
      {
        id: 'sri1-recap',
        type: 'text' as const,
        content: `## Part 1 Recap

- A rational inequality compares $\\dfrac{P(x)}{Q(x)}$ with $0$.
- **Never** cross-multiply by a variable expression — the sign is unknown.
- **Critical numbers** come from the numerator ($=0$, maybe included) *and* the denominator (undefined, always excluded).
- They cut the number line into intervals where the sign is constant.

Next, in **Part 2**, we'll nail down *exactly* how to find every critical number, including from factored quadratics.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'solving-rational-inequalities',
    sections: [
      {
        id: 'sri2-intro',
        type: 'text' as const,
        content: `# ➗ Rational Inequalities

**Part 2 of 7 — Finding Every Critical Number**

---

> 🔑 **The Goal:** Before any sign chart, you must list **all** the values where the numerator is $0$ and **all** the values where the denominator is $0$. Miss one and your number line is wrong.`,
      },
      {
        id: 'sri2-factor',
        type: 'text' as const,
        content: `## Factor First, Then Read Off the Zeros

The fastest route to the critical numbers is to **factor** the top and bottom completely, then set each factor to $0$.

### Example: $\\dfrac{x^2 - 4}{x^2 - x - 6}$

Factor both:

$$\\frac{x^2-4}{x^2-x-6} = \\frac{(x-2)(x+2)}{(x-3)(x+2)}$$

- **Numerator** $= 0$: $\\;x = 2$ or $x = -2$.
- **Denominator** $= 0$: $\\;x = 3$ or $x = -2$.

> ⚠️ **Watch the overlap!** $x=-2$ makes *both* top and bottom $0$. Because it makes the **denominator** $0$, the expression is **undefined** there — it is **always excluded**, even though it's also a numerator zero. The denominator wins.`,
      },
      {
        id: 'sri2-factor-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $\\dfrac{(x-2)(x+2)}{(x-3)(x+2)}$, what is the status of $x = -2$?',
              options: [
                'Undefined and excluded — the denominator is $0$ there',
                'A zero that is always included',
                'A zero that is included only for strict inequalities',
                'Not a critical number at all',
              ],
              correctAnswer: 0,
              explanation: 'A value that zeros the denominator makes the whole expression undefined. Even though $x=-2$ also zeros the numerator, the denominator takes priority, so $x=-2$ is excluded with an open dot.',
            },
            {
              question: 'What are the denominator zeros of $\\dfrac{x+1}{x^2-9}$?',
              options: ['$x = 3$ and $x = -3$', '$x = 9$ only', '$x = -1$', '$x = 3$ only'],
              correctAnswer: 0,
              explanation: '$x^2-9 = (x-3)(x+3)$, which is $0$ at $x = 3$ and $x = -3$. Both make the expression undefined.',
            },
          ],
        },
      },
      {
        id: 'sri2-list',
        type: 'text' as const,
        content: `## Listing and Ordering the Critical Numbers

Once you have every zero of the top and bottom, **plot them in increasing order** on a number line and mark each dot type:

- $\\bullet$ **closed** = included (numerator zero with $\\le$ or $\\ge$)
- $\\circ$ **open** = excluded (denominator zero **always**; or any zero with strict $<$ or $>$)

### Example: $\\dfrac{(x-2)(x+2)}{(x-3)(x+2)} \\le 0$

Critical numbers in order: $-2,\\; 2,\\; 3$.

| $x$-value | Source | Dot |
|-----------|--------|-----|
| $-2$ | denominator $0$ (undefined) | $\\circ$ open |
| $2$ | numerator $0$, and $\\le$ allows equality | $\\bullet$ closed |
| $3$ | denominator $0$ (undefined) | $\\circ$ open |

> 💡 The dot type doesn't change *which intervals* solve the inequality — it only decides whether the **endpoints** themselves get included.`,
      },
      {
        id: 'sri2-list-drill',
        type: 'dropdown-select' as const,
        content: `**Classify the Endpoints** 🔽

You're solving $\\dfrac{x-4}{x+1} \\ge 0$. Decide each endpoint's dot type.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = 4$ (numerator zero, inequality is $\\ge$):', options: ['closed $\\bullet$ — included', 'open $\\circ$ — excluded'] },
            { label: 'At $x = -1$ (denominator zero):', options: ['open $\\circ$ — excluded', 'closed $\\bullet$ — included'] },
          ],
          correctAnswers: ['closed $\\bullet$ — included', 'open $\\circ$ — excluded'],
          hint1: 'A numerator zero gives a value of $0$. Does $0 \\ge 0$ hold? Yes — so it can be included.',
          hint2: 'A denominator zero is undefined and can never be a solution.',
          hint3: 'Numerator zero + non-strict $\\ge$ → closed. Denominator zero → always open.',
          explanation: 'At $x=4$ the fraction equals $0$, and $0 \\ge 0$ is true, so with $\\ge$ we include it (closed). At $x=-1$ the fraction is undefined, so it is always excluded (open).',
        },
      },
      {
        id: 'sri2-allzeros-drill',
        type: 'input-boxes' as const,
        content: `**Collect All Critical Numbers** 🧮

For $\\dfrac{x^2 - 5x + 6}{x^2 - 1}$, factor and list the critical numbers in **increasing order**.

Hint: $x^2-5x+6 = (x-2)(x-3)$ and $x^2-1 = (x-1)(x+1)$.

**1)** Smallest critical number $= \\,?$
**2)** Next $= \\,?$
**3)** Next $= \\,?$
**4)** Largest $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-1', '1', '2', '3'],
          hint1: 'Numerator zeros: $x=2,3$. Denominator zeros: $x=1,-1$.',
          hint2: 'Now sort all four values from least to greatest.',
          hint3: 'Order: $-1 < 1 < 2 < 3$.',
          explanation: 'Numerator $(x-2)(x-3)=0 \\Rightarrow x=2,3$. Denominator $(x-1)(x+1)=0 \\Rightarrow x=1,-1$. Sorted: $-1, 1, 2, 3$. The $\\pm 1$ are undefined (open); $2, 3$ are zeros.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'solving-rational-inequalities',
    sections: [
      {
        id: 'sri3-intro',
        type: 'text' as const,
        content: `# ➗ Rational Inequalities

**Part 3 of 7 — The Sign-Chart Method**

---

> 🔑 **The Core Technique:** Plot the critical numbers, pick a **test point** inside each interval, plug it into the factored fraction, and record whether the result is $+$ or $-$. The sign is constant across each whole interval, so one test point decides the entire interval.`,
      },
      {
        id: 'sri3-steps',
        type: 'text' as const,
        content: `## The Five Steps

To solve a rational inequality:

1. **Get one side $= 0$** (Part 5 covers this; here the fraction is already vs. $0$).
2. **Factor** the numerator and denominator completely.
3. **Mark critical numbers** on a number line (open $\\circ$ for denominator zeros, dot type for numerator zeros set by the inequality).
4. **Test one point** in each interval — record the sign of the fraction there.
5. **Select** the intervals whose sign matches the inequality, then attach the right endpoints.

### Worked Example: $\\dfrac{x-1}{x+2} > 0$

Critical numbers: $x = 1$ (zero), $x = -2$ (undefined). Intervals: $(-\\infty,-2)$, $(-2,1)$, $(1,\\infty)$.

| Interval | Test $x$ | $x-1$ | $x+2$ | $\\dfrac{x-1}{x+2}$ |
|----------|----------|-------|-------|---------------------|
| $(-\\infty,-2)$ | $-3$ | $-$ | $-$ | $+$ |
| $(-2,1)$ | $0$ | $-$ | $+$ | $-$ |
| $(1,\\infty)$ | $2$ | $+$ | $+$ | $+$ |

We want $> 0$ (positive), so the solution is $(-\\infty,-2)\\,\\cup\\,(1,\\infty)$. Both endpoints are open: $-2$ is undefined, and $1$ is excluded because $>$ is strict.`,
      },
      {
        id: 'sri3-sign-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the table above, why is $\\dfrac{x-1}{x+2}$ positive on $(-\\infty,-2)$?',
              options: [
                'A negative numerator divided by a negative denominator gives a positive result',
                'Because $x$ is negative there',
                'Because the numerator is positive there',
                'Because $-2$ is excluded',
              ],
              correctAnswer: 0,
              explanation: 'At a test point like $x=-3$: numerator $-3-1=-4$ (negative) and denominator $-3+2=-1$ (negative). Negative ÷ negative = positive, so the fraction is $+$ on that interval.',
            },
            {
              question: 'For $\\dfrac{x-1}{x+2} > 0$, why is $x=1$ NOT included in the solution?',
              options: [
                'Because $>$ is strict, and at $x=1$ the fraction equals $0$, which is not greater than $0$',
                'Because $x=1$ makes the expression undefined',
                'Because $1$ is a denominator zero',
                'It actually should be included',
              ],
              correctAnswer: 0,
              explanation: 'At $x=1$ the numerator is $0$, so the fraction equals $0$. The strict inequality $>0$ requires a value strictly greater than $0$, and $0$ does not qualify. So $x=1$ is excluded (open dot).',
            },
          ],
        },
      },
      {
        id: 'sri3-shortcut',
        type: 'text' as const,
        content: `## A Faster Way to Read Signs

You don't have to recompute the whole fraction at each test point. Just count the **negative factors**:

- An **even** number of negative factors → the fraction is **positive** $(+)$.
- An **odd** number of negative factors → the fraction is **negative** $(-)$.

### Example: $\\dfrac{(x-1)(x-4)}{x+2}$ at $x = 0$

- $x-1 = -1$ → negative
- $x-4 = -4$ → negative
- $x+2 = 2$ → positive

Two negative factors (even) → the fraction is **positive** at $x=0$. ✓

> 💡 This factor-counting trick is the heart of the sign chart. As you cross each *single* critical number left to right, exactly one factor flips sign, so the overall sign of the fraction usually flips too.`,
      },
      {
        id: 'sri3-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Negatives** 🧮

For $\\dfrac{(x+3)(x-1)}{(x-5)}$, evaluate the sign at $x = 0$.

**1)** How many of the three factors are negative at $x=0$? $\\,?$
**2)** Is the fraction positive or negative there? (type "positive" or "negative") $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', 'positive'],
          hint1: 'At $x=0$: $x+3=3\\,(+)$, $x-1=-1\\,(-)$, $x-5=-5\\,(-)$.',
          hint2: 'Count the negatives: $x-1$ and $x-5$ are both negative, so two of them.',
          hint3: 'An even number of negative factors gives a positive result.',
          explanation: 'At $x=0$: $x+3=3$ (positive), $x-1=-1$ (negative), $x-5=-5$ (negative). That is $2$ negative factors — an even count — so the fraction is POSITIVE.',
        },
      },
      {
        id: 'sri3-build-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Sign Chart** 🔽

For $\\dfrac{x+1}{x-2}$, critical numbers are $-1$ and $2$. Fill in the sign of the fraction on each interval using a test point.`,
        exercise: {
          dropdowns: [
            { label: 'On $(-\\infty,-1)$, test $x=-2$:', options: ['$+$', '$-$'] },
            { label: 'On $(-1,2)$, test $x=0$:', options: ['$-$', '$+$'] },
            { label: 'On $(2,\\infty)$, test $x=3$:', options: ['$+$', '$-$'] },
          ],
          correctAnswers: ['$+$', '$-$', '$+$'],
          hint1: 'At $x=-2$: top $=-1\\,(-)$, bottom $=-4\\,(-)$. Two negatives → $+$.',
          hint2: 'At $x=0$: top $=1\\,(+)$, bottom $=-2\\,(-)$. One negative → $-$.',
          hint3: 'At $x=3$: top $=4\\,(+)$, bottom $=1\\,(+)$. Zero negatives → $+$.',
          explanation: 'Test points: $x=-2 \\to (-)/(-) = +$; $x=0 \\to (+)/(-) = -$; $x=3 \\to (+)/(+) = +$. The sign pattern is $+,\\,-,\\,+$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'solving-rational-inequalities',
    sections: [
      {
        id: 'sri4-intro',
        type: 'text' as const,
        content: `# ➗ Rational Inequalities

**Part 4 of 7 — Endpoints & Writing the Solution**

---

> 🔑 **The Finishing Move:** Once the sign chart is built, choosing the right *intervals* is easy. The subtle part is the **endpoints** — when to use $[\\;]$ (included) vs. $(\\;)$ (excluded), and how to write the answer in clean **interval notation**.`,
      },
      {
        id: 'sri4-endpoints',
        type: 'text' as const,
        content: `## Endpoint Rules (memorize these)

| Critical number is a… | Strict $<,\\,>$ | Non-strict $\\le,\\,\\ge$ |
|------------------------|-----------------|--------------------------|
| **Numerator** zero (value $=0$) | exclude $\\circ$ | **include** $\\bullet$ |
| **Denominator** zero (undefined) | exclude $\\circ$ | exclude $\\circ$ |

The key takeaways:

- A **denominator** zero is **always** excluded — even with $\\le$ or $\\ge$. You can't include an undefined point.
- A **numerator** zero is included **only** when the inequality allows equality ($\\le$ or $\\ge$), because there the fraction equals $0$.

> ⚠️ The single most common mistake is writing $[\\,]$ around a denominator zero. Undefined points get a parenthesis $(\\,)$ **every time**.`,
      },
      {
        id: 'sri4-notation',
        type: 'text' as const,
        content: `## Interval Notation Quick Reference

| Notation | Meaning |
|----------|---------|
| $(a, b)$ | $a < x < b$ (both ends excluded) |
| $[a, b]$ | $a \\le x \\le b$ (both ends included) |
| $[a, b)$ | $a \\le x < b$ (left included, right not) |
| $(-\\infty, a)$ | all $x < a$ |
| $\\cup$ | "or" — union of separate pieces |

$\\infty$ and $-\\infty$ are **never** included, so they always get a parenthesis.

### Worked Example: $\\dfrac{x-1}{x+2} \\ge 0$

Same sign chart as before ($+,\\,-,\\,+$ across $-2$ and $1$). We want $\\ge 0$, so we take the **positive** intervals **and** the points where the fraction $=0$.

- Positive intervals: $(-\\infty,-2)$ and $(1,\\infty)$.
- $x=1$ is a numerator zero with $\\ge$ → **include** it: the right piece becomes $[1,\\infty)$.
- $x=-2$ is a denominator zero → **exclude** it: keep the parenthesis.

$$\\boxed{(-\\infty,\\,-2)\\,\\cup\\,[1,\\,\\infty)}$$`,
      },
      {
        id: 'sri4-notation-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A solution includes everything from $x=3$ (a numerator zero) up to but not including $x=7$ (a denominator zero), with the inequality $\\le$. Which notation is correct?',
              options: ['$[3, 7)$', '$(3, 7]$', '$[3, 7]$', '$(3, 7)$'],
              correctAnswer: 0,
              explanation: 'The numerator zero $3$ with $\\le$ is included → bracket $[$. The denominator zero $7$ is always excluded → parenthesis $)$. So $[3,7)$.',
            },
            {
              question: 'Which value is always written with a parenthesis, never a bracket?',
              options: ['$\\infty$', 'A numerator zero with $\\ge$', 'A numerator zero with $\\le$', 'The number $0$ if it is a numerator zero'],
              correctAnswer: 0,
              explanation: '$\\infty$ (and $-\\infty$) is not a real number you can reach, so it is always excluded with a parenthesis. Numerator zeros with $\\le$ or $\\ge$ do get included.',
            },
          ],
        },
      },
      {
        id: 'sri4-full-example',
        type: 'text' as const,
        content: `## Full Worked Example, Start to Finish

Solve $\\dfrac{x-3}{x+1} \\le 0$.

**Step 1 — Critical numbers:** numerator zero $x=3$; denominator zero $x=-1$.

**Step 2 — Sign chart** across $-1$ and $3$:

| Interval | Test $x$ | Sign of $\\dfrac{x-3}{x+1}$ |
|----------|----------|------------------------------|
| $(-\\infty,-1)$ | $-2$ | $\\dfrac{-5}{-1} = +$ |
| $(-1,3)$ | $0$ | $\\dfrac{-3}{1} = -$ |
| $(3,\\infty)$ | $4$ | $\\dfrac{1}{5} = +$ |

**Step 3 — Select:** we want $\\le 0$ (negative or zero) → the middle interval $(-1,3)$.

**Step 4 — Endpoints:** $x=3$ is a numerator zero with $\\le$ → **include** $\\Rightarrow$ bracket. $x=-1$ is undefined → **exclude** $\\Rightarrow$ parenthesis.

$$\\boxed{(-1,\\,3]}$$`,
      },
      {
        id: 'sri4-endpoint-drill',
        type: 'input-boxes' as const,
        content: `**Endpoint Decisions** 🧮

A sign chart gives the negative interval between a numerator zero at $x = 6$ and a denominator zero at $x = 10$. For each inequality, decide whether $x=6$ is included.

Type **1** for included (bracket) or **0** for excluded (parenthesis).

**1)** With $\\dfrac{P(x)}{Q(x)} \\le 0$, is $x=6$ included? $\\,?$
**2)** With $\\dfrac{P(x)}{Q(x)} < 0$, is $x=6$ included? $\\,?$
**3)** Is $x=10$ (denominator zero) ever included? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '0', '0'],
          hint1: 'At a numerator zero the fraction equals $0$. Does $\\le 0$ allow $0$? Yes.',
          hint2: 'Does the strict $< 0$ allow the value $0$? No.',
          hint3: 'A denominator zero is undefined — it is never a valid solution.',
          explanation: '1) $x=6$ gives a value of $0$, and $0 \\le 0$ is true → included (1). 2) $0 < 0$ is false → excluded (0). 3) $x=10$ is undefined regardless of the symbol → never included (0).',
        },
      },
      {
        id: 'sri4-write-dropdown',
        type: 'dropdown-select' as const,
        content: `**Write the Solution** 🔽

The sign chart for $\\dfrac{x-3}{x+1}$ is $+,\\,-,\\,+$ across critical numbers $-1$ (undefined) and $3$ (zero). Now answer for the inequality $\\dfrac{x-3}{x+1} \\ge 0$.`,
        exercise: {
          dropdowns: [
            { label: 'Which intervals do we keep for $\\ge 0$?', options: ['the two positive ones', 'only the middle negative one', 'all three'] },
            { label: 'Endpoint at $x=3$ (numerator zero, $\\ge$):', options: ['included — bracket', 'excluded — parenthesis'] },
            { label: 'Endpoint at $x=-1$ (denominator zero):', options: ['excluded — parenthesis', 'included — bracket'] },
          ],
          correctAnswers: ['the two positive ones', 'included — bracket', 'excluded — parenthesis'],
          hint1: '$\\ge 0$ means positive OR zero, so keep the positive intervals plus any zeros.',
          hint2: 'A numerator zero with $\\ge$ satisfies "$=0$", so include it.',
          hint3: 'A denominator zero is undefined — always excluded.',
          explanation: 'For $\\ge 0$ we keep $(-\\infty,-1)$ and $[3,\\infty)$. $x=3$ is included (numerator zero, $\\ge$), $x=-1$ is excluded (undefined). Final answer: $(-\\infty,-1)\\cup[3,\\infty)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'solving-rational-inequalities',
    sections: [
      {
        id: 'sri5-intro',
        type: 'text' as const,
        content: `# ➗ Rational Inequalities

**Part 5 of 7 — Getting One Side to Zero**

---

> 🔑 **The Setup Step:** Real problems rarely arrive as "fraction $> 0$." You'll see things like $\\dfrac{5}{x} \\ge 2$ or $\\dfrac{1}{x-1} < \\dfrac{2}{x}$. The **first move is always the same**: move *everything* to one side and combine into a single fraction compared with $0$. Only then do you build the sign chart.`,
      },
      {
        id: 'sri5-onefraction',
        type: 'text' as const,
        content: `## Move, Don't Cross-Multiply

### Example: $\\dfrac{5}{x} \\ge 2$

**Wrong instinct:** multiply both sides by $x$. (We don't know the sign of $x$!)

**Right move:** subtract $2$ and combine over a common denominator:

$$\\frac{5}{x} - 2 \\ge 0 \\;\\Longrightarrow\\; \\frac{5}{x} - \\frac{2x}{x} \\ge 0 \\;\\Longrightarrow\\; \\frac{5 - 2x}{x} \\ge 0$$

Now it's a clean rational inequality vs. $0$. Critical numbers: numerator $5-2x=0 \\Rightarrow x = \\tfrac{5}{2}$; denominator $x = 0$.

> ⚠️ A frequent error is to "simplify" $5 - 2x$ and forget it's now the numerator of a fraction. Keep the single-fraction form until the sign chart is done.`,
      },
      {
        id: 'sri5-onefraction-drill',
        type: 'input-boxes' as const,
        content: `**Combine Into One Fraction** 🧮

Rewrite $\\dfrac{5}{x} \\ge 2$ as $\\dfrac{5-2x}{x} \\ge 0$, then find its critical numbers.

**1)** Numerator zero (enter as the fraction $5/2$): $x = \\,?$
**2)** Denominator zero: $x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5/2', '0'],
          hint1: 'Set $5 - 2x = 0$ and solve for $x$.',
          hint2: '$5 - 2x = 0 \\Rightarrow 2x = 5 \\Rightarrow x = 5/2 = 2.5$.',
          hint3: 'The denominator is just $x$, so it is $0$ at $x = 0$.',
          explanation: 'Numerator: $5-2x=0 \\Rightarrow x = 5/2 = 2.5$ (a zero, includable since $\\ge$). Denominator: $x = 0$ (undefined, excluded).',
        },
      },
      {
        id: 'sri5-solve-it',
        type: 'text' as const,
        content: `## Finish the Example

We had $\\dfrac{5-2x}{x} \\ge 0$ with critical numbers $0$ and $\\tfrac{5}{2}$. Sign chart:

| Interval | Test $x$ | $5-2x$ | $x$ | $\\dfrac{5-2x}{x}$ |
|----------|----------|--------|-----|---------------------|
| $(-\\infty,0)$ | $-1$ | $7\\,(+)$ | $-1\\,(-)$ | $-$ |
| $(0,\\,5/2)$ | $1$ | $3\\,(+)$ | $1\\,(+)$ | $+$ |
| $(5/2,\\infty)$ | $3$ | $-1\\,(-)$ | $3\\,(+)$ | $-$ |

We want $\\ge 0$ (positive or zero) → the middle interval $(0,\\,\\tfrac{5}{2})$, plus the zero.

- $x=\\tfrac{5}{2}$ is a numerator zero with $\\ge$ → **include** (bracket).
- $x=0$ is undefined → **exclude** (parenthesis).

$$\\boxed{\\left(0,\\;\\tfrac{5}{2}\\right]}$$

> 💡 **Sanity check** $x=1$: $\\dfrac{5}{1} = 5 \\ge 2$ ✓. And $x=4$: $\\dfrac{5}{4} = 1.25 \\not\\ge 2$ ✓ (correctly excluded).`,
      },
      {
        id: 'sri5-twofrac',
        type: 'text' as const,
        content: `## Two Fractions: Same Idea

### Example: $\\dfrac{1}{x-1} < \\dfrac{2}{x}$

Move everything left and use the common denominator $x(x-1)$:

$$\\frac{1}{x-1} - \\frac{2}{x} < 0 \\;\\Longrightarrow\\; \\frac{x - 2(x-1)}{x(x-1)} < 0 \\;\\Longrightarrow\\; \\frac{x - 2x + 2}{x(x-1)} < 0 \\;\\Longrightarrow\\; \\frac{-x + 2}{x(x-1)} < 0$$

So $\\dfrac{2 - x}{x(x-1)} < 0$. Critical numbers: numerator $x=2$; denominators $x=0$ and $x=1$.

> ⚠️ **Don't forget a denominator factor!** Both $x$ and $x-1$ create undefined points. Three critical numbers here means **four** intervals to test.`,
      },
      {
        id: 'sri5-twofrac-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When combining $\\dfrac{1}{x-1} - \\dfrac{2}{x}$ over the common denominator $x(x-1)$, the numerator is:',
              options: ['$x - 2(x-1) = -x + 2$', '$1 - 2 = -1$', '$x - 2x = -x$', '$2(x-1) - x = x - 2$'],
              correctAnswer: 0,
              explanation: 'Scale each fraction: $\\frac{1}{x-1}=\\frac{x}{x(x-1)}$ and $\\frac{2}{x}=\\frac{2(x-1)}{x(x-1)}$. Subtract numerators: $x - 2(x-1) = x - 2x + 2 = -x + 2$.',
            },
            {
              question: 'For $\\dfrac{2-x}{x(x-1)} < 0$, how many critical numbers (and thus intervals) are there?',
              options: ['3 critical numbers → 4 intervals', '2 critical numbers → 3 intervals', '1 critical number → 2 intervals', '4 critical numbers → 5 intervals'],
              correctAnswer: 0,
              explanation: 'Numerator zero: $x=2$. Denominator zeros: $x=0$ and $x=1$. That is $3$ critical numbers, so $3+1=4$ intervals to test.',
            },
          ],
        },
      },
      {
        id: 'sri5-twofrac-finish',
        type: 'dropdown-select' as const,
        content: `**Finish the Two-Fraction Problem** 🔽

Solve $\\dfrac{2-x}{x(x-1)} < 0$. Critical numbers in order: $0,\\,1,\\,2$. Fill in each interval's sign (test points $x=-1,\\,0.5,\\,1.5,\\,3$).`,
        exercise: {
          dropdowns: [
            { label: 'On $(-\\infty,0)$, test $x=-1$:', options: ['$+$', '$-$'] },
            { label: 'On $(0,1)$, test $x=0.5$:', options: ['$-$', '$+$'] },
            { label: 'On $(1,2)$, test $x=1.5$:', options: ['$+$', '$-$'] },
            { label: 'On $(2,\\infty)$, test $x=3$:', options: ['$-$', '$+$'] },
          ],
          correctAnswers: ['$+$', '$-$', '$+$', '$-$'],
          hint1: 'At $x=-1$: $2-x=3\\,(+)$, $x=-1\\,(-)$, $x-1=-2\\,(-)$. Two negatives → $+$.',
          hint2: 'At $x=0.5$: $2-x=1.5\\,(+)$, $x=0.5\\,(+)$, $x-1=-0.5\\,(-)$. One negative → $-$.',
          hint3: 'At $x=1.5$: $2-x=0.5\\,(+)$, $x=1.5\\,(+)$, $x-1=0.5\\,(+)$. Zero negatives → $+$. At $x=3$: $2-x=-1\\,(-)$, rest positive → $-$.',
          explanation: 'Signs: $x=-1\\to(+)/[(-)(-)]=+$; $x=0.5\\to(+)/[(+)(-)]=-$; $x=1.5\\to(+)/[(+)(+)]=+$; $x=3\\to(-)/[(+)(+)]=-$. Pattern $+,-,+,-$. We want $<0$, so the solution is $(0,1)\\cup(2,\\infty)$ — all endpoints excluded (strict, and $0,1$ undefined).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'solving-rational-inequalities',
    sections: [
      {
        id: 'sri6-intro',
        type: 'text' as const,
        content: `# ➗ Rational Inequalities

**Part 6 of 7 — Multiplicity & Repeated Factors**

---

> 🔑 **The Subtlety:** Usually the sign *flips* every time you cross a critical number. But a **squared** (even-power) factor like $(x-2)^2$ does **not** flip the sign — it just touches $0$ and bounces back. Knowing when the sign holds vs. flips saves you from a wrong chart.`,
      },
      {
        id: 'sri6-mult',
        type: 'text' as const,
        content: `## Even vs. Odd Multiplicity

A factor's **multiplicity** is its exponent. As you cross its critical number:

| Multiplicity | Example factor | Sign behavior at the crossing |
|--------------|----------------|-------------------------------|
| **Odd** ($1, 3, \\dots$) | $(x-2),\\ (x-2)^3$ | sign **flips** ($+\\leftrightarrow-$) |
| **Even** ($2, 4, \\dots$) | $(x-2)^2,\\ (x-2)^4$ | sign **does not flip** |

Why? An even power is never negative, so it can't change the fraction's sign — it only contributes a $0$ at that point.

### Example: $\\dfrac{(x-1)^2 (x-4)}{x+2}$

Crossing left to right, the sign flips at $x=-2$ (mult. 1), holds at $x=1$ (mult. 2, even — bounce), and flips at $x=4$ (mult. 1).`,
      },
      {
        id: 'sri6-mult-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Crossing the critical number from a factor $(x-3)^2$, the sign of the whole expression…',
              options: [
                'does not flip — even powers are never negative',
                'always flips',
                'becomes undefined',
                'flips only for $<$ inequalities',
              ],
              correctAnswer: 0,
              explanation: '$(x-3)^2 \\ge 0$ for all $x$, so it never contributes a negative. Crossing $x=3$ does not change the overall sign — the chart "bounces" off $0$ there.',
            },
            {
              question: 'For $\\dfrac{(x-1)^2(x-4)}{x+2}$, at which critical number does the sign NOT flip?',
              options: ['$x = 1$', '$x = 4$', '$x = -2$', 'It flips at all of them'],
              correctAnswer: 0,
              explanation: 'The factor $(x-1)^2$ has even multiplicity 2, so the sign does not flip at $x=1$. The single factors at $x=4$ and $x=-2$ each flip the sign.',
            },
          ],
        },
      },
      {
        id: 'sri6-worked',
        type: 'text' as const,
        content: `## Worked Example With a Repeated Factor

Solve $\\dfrac{(x-1)^2 (x-4)}{x+2} \\ge 0$.

Critical numbers in order: $-2$ (undefined), $1$ (numerator zero, mult. 2), $4$ (numerator zero, mult. 1).

Start at the far right $(4,\\infty)$ and work left, flipping only at odd-multiplicity points.

| Interval | Sign | Reason |
|----------|------|--------|
| $(4,\\infty)$ | $+$ | test $x=5$: $\\frac{(+)(+)}{(+)} = +$ |
| $(1,4)$ | $-$ | flip across $x=4$ (mult. 1) |
| $(-2,1)$ | $-$ | **no flip** across $x=1$ (mult. 2) |
| $(-\\infty,-2)$ | $+$ | flip across $x=-2$ (mult. 1) |

We want $\\ge 0$: positive intervals $(-\\infty,-2)$ and $(4,\\infty)$, plus zeros.

- $x=1$: numerator zero, fraction $=0$, and $\\ge$ → **include** the single point $\\{1\\}$.
- $x=4$: numerator zero with $\\ge$ → **include** → $[4,\\infty)$.
- $x=-2$: undefined → **exclude**.

$$\\boxed{(-\\infty,\\,-2)\\,\\cup\\,\\{1\\}\\,\\cup\\,[4,\\,\\infty)}$$

> 💡 The lone point $\\{1\\}$ surprises students. The fraction equals $0$ there, $0 \\ge 0$ is true, so $1$ is a solution even though both neighboring intervals are negative.`,
      },
      {
        id: 'sri6-worked-drill',
        type: 'input-boxes' as const,
        content: `**Multiplicity Drill** 🧮

For $\\dfrac{(x+3)^2 (x-1)}{x-5}$, classify the behavior at each critical number.

**1)** At $x=-3$, does the sign flip? (type "yes" or "no") $\\,?$
**2)** At $x=1$, does the sign flip? (type "yes" or "no") $\\,?$
**3)** At $x=5$, does the sign flip? (type "yes" or "no") $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['no', 'yes', 'yes'],
          hint1: '$(x+3)^2$ has even multiplicity 2.',
          hint2: '$(x-1)$ and $(x-5)$ each have multiplicity 1 (odd).',
          hint3: 'Even multiplicity → no flip; odd multiplicity → flip.',
          explanation: '$x=-3$: from $(x+3)^2$, even multiplicity → NO flip. $x=1$: from $(x-1)$, multiplicity 1 → flip. $x=5$: from $(x-5)$, multiplicity 1 → flip.',
        },
      },
      {
        id: 'sri6-select-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply It** 🔽

Using the worked sign chart $+,\\,-,\\,-,\\,+$ (left to right across $-2$, $1$, $4$) for $\\dfrac{(x-1)^2(x-4)}{x+2} \\le 0$, choose the solution pieces.`,
        exercise: {
          dropdowns: [
            { label: 'For $\\le 0$, keep the intervals where the sign is:', options: ['$-$ (negative)', '$+$ (positive)'] },
            { label: 'The two negative intervals $(-2,1)$ and $(1,4)$ join into:', options: ['$(-2,4)$ with $x=1$ included', 'two fully separate open intervals'] },
            { label: 'Endpoint $x=-2$ (denominator zero):', options: ['excluded', 'included'] },
          ],
          correctAnswers: ['$-$ (negative)', '$(-2,4)$ with $x=1$ included', 'excluded'],
          hint1: '$\\le 0$ means negative OR zero.',
          hint2: 'Between $-2$ and $4$ both subintervals are negative, and $x=1$ is a zero (included by $\\le$), so they merge into one interval.',
          hint3: '$x=-2$ is undefined → excluded; $x=4$ is a zero, included by $\\le$.',
          explanation: 'For $\\le 0$ keep the negatives $(-2,1)$ and $(1,4)$. Since $x=1$ is a zero included by $\\le$, the gap closes and they merge. Endpoint $x=4$ is a numerator zero included by $\\le$ (bracket); endpoint $x=-2$ is undefined (excluded). Full answer: $(-2,\\,4]$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'solving-rational-inequalities',
    sections: [
      {
        id: 'sri7-intro',
        type: 'text' as const,
        content: `# ➗ Rational Inequalities

**Part 7 of 7 — Applications, Mixed Practice & Mastery Check**

---

You can now (1) find every critical number, (2) build a sign chart, (3) handle the endpoints, (4) clear fractions to one side, and (5) account for repeated factors. Let's apply it and then prove mastery.`,
      },
      {
        id: 'sri7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Step | What to do |
|------|------------|
| 1. One side $=0$ | Move all terms left; combine over a common denominator. **Never** cross-multiply. |
| 2. Factor | Factor numerator and denominator fully. |
| 3. Critical numbers | Numerator zeros + denominator zeros, in increasing order. |
| 4. Sign chart | Test one point per interval (or count negative factors). |
| 5. Select & endpoints | Match the inequality's sign. Numerator zeros included only if $\\le/\\ge$; denominator zeros **always** excluded. |

> ⚠️ Two recurring traps: (1) cross-multiplying by a variable, and (2) bracketing a denominator zero. Avoid both and you'll be right almost every time.`,
      },
      {
        id: 'sri7-application',
        type: 'text' as const,
        content: `## A Real Application: Average Cost

A company's average cost per unit (in dollars) for producing $x$ units is

$$A(x) = \\frac{2x + 500}{x}, \\qquad x > 0.$$

**Question:** For how many units is the average cost **below** \\$6 per unit?

Set up the inequality and move everything to one side:

$$\\frac{2x+500}{x} < 6 \\;\\Longrightarrow\\; \\frac{2x+500}{x} - 6 < 0 \\;\\Longrightarrow\\; \\frac{2x+500 - 6x}{x} < 0 \\;\\Longrightarrow\\; \\frac{500 - 4x}{x} < 0$$

Critical numbers: numerator $500-4x=0 \\Rightarrow x = 125$; denominator $x=0$. Since the context requires $x>0$, test on $(0,125)$ and $(125,\\infty)$:

- $(0,125)$, test $x=100$: $\\dfrac{500-400}{100} = \\dfrac{100}{100} = + $ → not $<0$.
- $(125,\\infty)$, test $x=200$: $\\dfrac{500-800}{200} = \\dfrac{-300}{200} = -$ → satisfies $<0$. ✓

So the average cost dips below \\$6 once **more than 125 units** are produced: $x > 125$.`,
      },
      {
        id: 'sri7-application-check',
        type: 'input-boxes' as const,
        content: `**Application Drill** 🧮

Using $A(x) = \\dfrac{2x+500}{x}$ from above:

**1)** At exactly $x = 125$ units, what is the average cost in dollars? $\\,?$
**2)** The cost falls below \\$6 when $x$ is greater than what number? $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '125'],
          hint1: '$A(125) = \\dfrac{2(125)+500}{125} = \\dfrac{250+500}{125} = \\dfrac{750}{125}$.',
          hint2: '$\\dfrac{750}{125} = 6$ — exactly the break-even cost.',
          hint3: 'From the sign chart, $\\dfrac{500-4x}{x} < 0$ holds for $x > 125$.',
          explanation: '1) $A(125) = 750/125 = \\$6$ exactly. 2) The inequality $\\frac{500-4x}{x}<0$ is satisfied for $x>125$, so the average cost drops below \\$6 there.',
        },
      },
      {
        id: 'sri7-final-tips',
        type: 'text' as const,
        content: `## Before You Start the Final Practice

A quick pre-flight checklist for every rational inequality:

> 🔑 **The 5-Point Check**
> 1. Is one side $0$? If not, **move and combine** — don't cross-multiply.
> 2. Factor top and bottom; list **all** critical numbers in order.
> 3. Mark denominator zeros as **always open**.
> 4. Build the sign chart with test points (or count negatives).
> 5. Select matching intervals; decide endpoints **one at a time**.

> 💡 If your final answer brackets a denominator zero, you made an error — back up and re-check step 5.`,
      },
      {
        id: 'sri7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\dfrac{x+4}{x-2} > 0$.',
              options: [
                '$(-\\infty,-4)\\cup(2,\\infty)$',
                '$(-4,2)$',
                '$[-4,2)$',
                '$(-\\infty,-4]\\cup[2,\\infty)$',
              ],
              correctAnswer: 0,
              explanation: 'Critical numbers $-4$ (zero) and $2$ (undefined). Signs: $+$ on $(-\\infty,-4)$, $-$ on $(-4,2)$, $+$ on $(2,\\infty)$. For $>0$ take the positives: $(-\\infty,-4)\\cup(2,\\infty)$. Strict and the undefined point both force open ends.',
            },
            {
              question: 'Solve $\\dfrac{x-1}{x+3} \\le 0$.',
              options: [
                '$(-3, 1]$',
                '$[-3, 1]$',
                '$(-3, 1)$',
                '$(-\\infty,-3)\\cup[1,\\infty)$',
              ],
              correctAnswer: 0,
              explanation: 'Critical numbers $1$ (zero) and $-3$ (undefined). Signs: $+,\\,-,\\,+$. For $\\le 0$ take the negative middle interval. Include $x=1$ (numerator zero with $\\le$) → bracket; exclude $x=-3$ (undefined) → parenthesis: $(-3,1]$.',
            },
          ],
        },
      },
      {
        id: 'sri7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which step is always WRONG when solving a rational inequality?',
              options: [
                'Cross-multiplying by a variable expression of unknown sign',
                'Moving every term to one side',
                'Combining fractions over a common denominator',
                'Testing one point per interval',
              ],
              correctAnswer: 0,
              explanation: 'Multiplying both sides by a variable expression can flip the inequality if that expression is negative, and its sign is unknown. The safe path is to get one side to $0$ and read the sign chart.',
            },
            {
              question: 'When is a denominator zero included in the solution set?',
              options: [
                'Never — it makes the expression undefined',
                'Always, if the inequality is $\\le$ or $\\ge$',
                'Only for $<$ and $>$',
                'Only when it equals a numerator zero',
              ],
              correctAnswer: 0,
              explanation: 'A denominator zero makes the expression undefined, so it can never satisfy the inequality. It is excluded (open dot / parenthesis) regardless of the inequality symbol.',
            },
            {
              question: 'Solve $\\dfrac{3}{x-2} \\ge 0$.',
              options: [
                '$(2, \\infty)$',
                '$[2, \\infty)$',
                '$(-\\infty, 2)$',
                '$(-\\infty, 2]$',
              ],
              correctAnswer: 0,
              explanation: 'The numerator $3$ is never $0$, so the only critical number is $x=2$ (undefined). For $x<2$, $x-2<0$ so the fraction is negative; for $x>2$ it is positive. We want $\\ge 0$, giving the positive interval $(2,\\infty)$. $x=2$ is undefined, so it stays excluded.',
            },
          ],
        },
      },
    ],
  },
]
