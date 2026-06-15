import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rational Functions and Their Graphs (Algebra 2).
 * Registry key: 'rational-functions-graphs-alg2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rational-functions-graphs-alg2',
    sections: [
      {
        id: 'rf1-intro',
        type: 'text' as const,
        content: `# 〽️ Rational Functions and Their Graphs

**Part 1 of 5 — What Is a Rational Function?**

---

### Topics in This Part

| Section |
|---------|
| Definition & the Parent Function |
| Domain: Where the Function "Breaks" |
| Reading the Graph of $\\frac{1}{x}$ |

> 🔑 **Key Concept:** A **rational function** is a fraction of two polynomials, $f(x) = \\dfrac{P(x)}{Q(x)}$. Everything interesting about its graph — the gaps, the invisible walls, the leveling-off — comes from one question: *where does the denominator misbehave?*`,
      },
      {
        id: 'rf1-define',
        type: 'text' as const,
        content: `## Definition & the Parent Function

A **rational function** has the form

$$f(x) = \\frac{P(x)}{Q(x)}, \\qquad Q(x) \\ne 0$$

where $P$ and $Q$ are polynomials. The simplest one is the **parent function**:

$$f(x) = \\frac{1}{x}$$

Its graph is a **hyperbola** sitting in two opposite corners of the plane.

| $x$ | $-2$ | $-1$ | $-\\tfrac{1}{2}$ | $\\tfrac{1}{2}$ | $1$ | $2$ |
|-----|------|------|------|------|-----|-----|
| $\\frac{1}{x}$ | $-0.5$ | $-1$ | $-2$ | $2$ | $1$ | $0.5$ |

Notice two things:
- As $x$ gets **close to $0$**, $\\frac{1}{x}$ blows up toward $\\pm\\infty$.
- As $x$ gets **large**, $\\frac{1}{x}$ shrinks toward $0$.

> 🔑 **Key Idea:** Division by zero is undefined, so $x = 0$ is *not* allowed. That single forbidden value creates the most important feature of the graph.`,
      },
      {
        id: 'rf1-isit-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a rational function?',
              options: ['$f(x) = \\frac{2x+1}{x-3}$', '$f(x) = \\sqrt{x} + 1$', '$f(x) = 2^x$', '$f(x) = |x|$'],
              correctAnswer: 0,
              explanation: 'A rational function is a ratio of two polynomials. $\\frac{2x+1}{x-3}$ fits exactly. A square root, an exponential, and an absolute value are not polynomials over polynomials.',
            },
            {
              question: 'Why is $f(x) = \\frac{1}{x}$ undefined at $x = 0$?',
              options: ['Because $0$ is negative', 'Because division by zero is undefined', 'Because the numerator is $1$', 'Because $0$ is not an integer'],
              correctAnswer: 1,
              explanation: 'Substituting $x=0$ gives $\\frac{1}{0}$, and dividing by zero has no defined value. So $0$ must be excluded from the domain.',
            },
          ],
        },
      },
      {
        id: 'rf1-domain',
        type: 'text' as const,
        content: `## Domain: Where the Function "Breaks"

The **domain** of a rational function is *all real numbers except where the denominator equals zero*. To find the excluded values:

1. **Set the denominator equal to $0$.**
2. **Solve.** Those solutions are the forbidden $x$-values.

### Example: $f(x) = \\dfrac{x+5}{x-3}$

Set $x - 3 = 0 \\Rightarrow x = 3$. So the domain is **all reals except $x = 3$**.

### Example: $g(x) = \\dfrac{x}{x^2 - 4}$

Factor the denominator: $x^2 - 4 = (x-2)(x+2)$. Set each factor to $0$:

$$x - 2 = 0 \\Rightarrow x = 2, \\qquad x + 2 = 0 \\Rightarrow x = -2$$

Domain: **all reals except $x = 2$ and $x = -2$**.

> 💡 The numerator never restricts the domain — only the **denominator** can make a rational function undefined.`,
      },
      {
        id: 'rf1-domain-drill',
        type: 'input-boxes' as const,
        content: `**Find the Excluded Values** 🧮

For each function, enter the $x$-value(s) that are **not** in the domain. If there are two, enter the **smaller** one first.

**1)** $f(x) = \\dfrac{x-1}{x+6}$.  Excluded $x = \\,?$
**2)** $g(x) = \\dfrac{4}{x^2 - 9}$.  Smaller excluded $x = \\,?$
**3)** $g(x) = \\dfrac{4}{x^2 - 9}$.  Larger excluded $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-6', '-3', '3'],
          hint1: 'Set the denominator to $0$: $x + 6 = 0 \\Rightarrow x = -6$.',
          hint2: 'Factor $x^2 - 9 = (x-3)(x+3)$. The zeros are $x = 3$ and $x = -3$.',
          hint3: 'The smaller excluded value is $-3$; the larger is $3$.',
          explanation: '1) $x+6=0 \\Rightarrow x=-6$.  2) & 3) $x^2-9=(x-3)(x+3)=0 \\Rightarrow x=\\pm 3$, so $-3$ then $3$.',
        },
      },
      {
        id: 'rf1-read-graph',
        type: 'text' as const,
        content: `## Reading the Graph of $\\frac{1}{x}$

The parent graph lives in the top-right and bottom-left corners. Two invisible lines guide it:

- The **vertical line $x = 0$** (the $y$-axis): the curve shoots up on the right and down on the left, never touching it.
- The **horizontal line $y = 0$** (the $x$-axis): far out, both branches flatten toward it.

These guide lines are called **asymptotes** — lines a graph approaches but never reaches. Almost every rational graph you'll meet is built from this same idea.

> 💡 As $x \\to 0$, $\\frac{1}{x} \\to \\pm\\infty$ (vertical asymptote). As $x \\to \\pm\\infty$, $\\frac{1}{x} \\to 0$ (horizontal asymptote).`,
      },
      {
        id: 'rf1-graph-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Parent Graph** 🔽

Use the behavior of $f(x) = \\dfrac{1}{x}$ to fill in each blank.`,
        exercise: {
          dropdowns: [
            { label: 'As $x \\to 0^{+}$ (from the right), $\\frac{1}{x}$ goes toward:', options: ['$+\\infty$', '$-\\infty$', '$0$', '$1$'] },
            { label: 'As $x \\to +\\infty$, $\\frac{1}{x}$ goes toward:', options: ['$0$', '$+\\infty$', '$1$', '$-\\infty$'] },
            { label: 'The two branches sit in which corners?', options: ['top-right & bottom-left', 'top-left & bottom-right', 'both on top', 'both on the right'] },
          ],
          correctAnswers: ['$+\\infty$', '$0$', 'top-right & bottom-left'],
          hint1: 'Plug in a tiny positive number like $x = 0.01$: $\\frac{1}{0.01} = 100$, which grows without bound.',
          hint2: 'Plug in a huge number like $x = 1000$: $\\frac{1}{1000} = 0.001$, which shrinks toward $0$.',
          hint3: 'For $x>0$, $\\frac{1}{x}>0$ (top-right); for $x<0$, $\\frac{1}{x}<0$ (bottom-left).',
          explanation: 'Near $0$ from the right the values blow up to $+\\infty$; far out they decay to $0$; and since the sign of $\\frac{1}{x}$ matches the sign of $x$, the branches occupy the top-right and bottom-left.',
        },
      },
      {
        id: 'rf1-wrap',
        type: 'text' as const,
        content: `## What the Domain Tells Us

Every excluded $x$-value is a place where the graph has *something missing* — either an invisible vertical wall the curve can't cross (a **vertical asymptote**) or a single missing point (a **hole**). Part 2 shows you how to tell which is which.

> 🔑 **Takeaway:** Finding the domain is always step one. Set the denominator to zero, solve, and you've located every "break" in the graph.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rational-functions-graphs-alg2',
    sections: [
      {
        id: 'rf2-intro',
        type: 'text' as const,
        content: `# 〽️ Rational Functions and Their Graphs

**Part 2 of 5 — Vertical Asymptotes & Holes**

---

> 🔑 **The Idea:** Both vertical asymptotes and holes come from zeros of the denominator. The difference: a **hole** appears where a factor cancels with the numerator; a **vertical asymptote** appears where it does *not*.`,
      },
      {
        id: 'rf2-va',
        type: 'text' as const,
        content: `## Vertical Asymptotes

A **vertical asymptote** is a vertical line $x = a$ that the graph approaches but never touches. After fully simplifying the fraction, you get one wherever the **denominator** is zero.

### Example: $f(x) = \\dfrac{1}{x - 4}$

The denominator is zero at $x = 4$, and nothing cancels, so there is a vertical asymptote at $x = 4$.

As $x \\to 4$ from either side, the denominator shrinks toward $0$, so $|f(x)| \\to \\infty$. The curve races up or down along the line $x = 4$.

| $x$ | $3.9$ | $3.99$ | $4.01$ | $4.1$ |
|-----|-------|--------|--------|-------|
| $\\frac{1}{x-4}$ | $-10$ | $-100$ | $100$ | $10$ |

> ⚠️ The graph gets arbitrarily close to $x = 4$ but **never** crosses it — a function can never output a value at a point where it's undefined.`,
      },
      {
        id: 'rf2-holes',
        type: 'text' as const,
        content: `## Holes (Removable Discontinuities)

When a factor cancels from **both** the numerator and denominator, the graph has a **hole** — a single missing point — instead of an asymptote.

### Example: $f(x) = \\dfrac{x^2 - 9}{x - 3}$

Factor and cancel:

$$f(x) = \\frac{(x-3)(x+3)}{x-3} = x + 3, \\quad x \\ne 3$$

The simplified function is the line $y = x + 3$, **but** $x = 3$ is still excluded from the original domain. So the graph is that line with a single **hole** at $x = 3$.

Find the hole's $y$-coordinate by plugging $x = 3$ into the **simplified** form: $y = 3 + 3 = 6$. The hole is at $(3, 6)$.

> 🔑 **Cancels → hole. Doesn't cancel → vertical asymptote.** Always factor first to find out which.`,
      },
      {
        id: 'rf2-va-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Where is the vertical asymptote of $f(x) = \\dfrac{x+2}{x-5}$?',
              options: ['$x = 5$', '$x = -2$', '$x = 2$', '$y = 5$'],
              correctAnswer: 0,
              explanation: 'Nothing cancels, so set the denominator to zero: $x - 5 = 0 \\Rightarrow x = 5$. A vertical asymptote is a vertical line $x = a$.',
            },
            {
              question: 'The function $f(x) = \\dfrac{(x-1)(x+4)}{x-1}$ has a hole, not an asymptote, at $x = 1$ because:',
              options: ['the $(x-1)$ factor cancels', 'the numerator is larger', 'the denominator is linear', '$1$ is a positive number'],
              correctAnswer: 0,
              explanation: 'The factor $(x-1)$ appears in both numerator and denominator and cancels, leaving a removable discontinuity (a hole) at $x = 1$ rather than a vertical asymptote.',
            },
          ],
        },
      },
      {
        id: 'rf2-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Asymptote or Hole?** 🔽

Factor each function and decide what happens at the given $x$-value.`,
        exercise: {
          dropdowns: [
            { label: '$f(x) = \\frac{x+1}{x-2}$ at $x = 2$:', options: ['vertical asymptote', 'hole', 'nothing special', 'horizontal asymptote'] },
            { label: '$f(x) = \\frac{(x+5)(x-2)}{x-2}$ at $x = 2$:', options: ['hole', 'vertical asymptote', 'nothing special', 'x-intercept'] },
            { label: '$f(x) = \\frac{x}{x^2 - 1}$ at $x = 1$:', options: ['vertical asymptote', 'hole', 'nothing special', 'y-intercept'] },
          ],
          correctAnswers: ['vertical asymptote', 'hole', 'vertical asymptote'],
          hint1: '$\\frac{x+1}{x-2}$ has nothing to cancel, so $x=2$ gives a vertical asymptote.',
          hint2: 'In $\\frac{(x+5)(x-2)}{x-2}$ the $(x-2)$ cancels, leaving a hole at $x=2$.',
          hint3: '$x^2-1=(x-1)(x+1)$; the $(x-1)$ does not cancel with the numerator $x$, so $x=1$ is a vertical asymptote.',
          explanation: 'Factor and look for cancellation: cancels → hole; survives in the denominator → vertical asymptote.',
        },
      },
      {
        id: 'rf2-hole-howto',
        type: 'text' as const,
        content: `## Pinpointing a Hole's Coordinates

When a factor cancels, finding the exact missing point takes two quick steps:

1. **The $x$-coordinate** is the value that made the *canceled* factor zero.
2. **The $y$-coordinate** comes from plugging that $x$ into the **simplified** function.

### Example: $f(x) = \\dfrac{x^2 + x - 6}{x - 2}$

Factor: $\\dfrac{(x-2)(x+3)}{x-2} = x + 3$, with $x \\ne 2$.

- Hole's $x$: the canceled factor $x - 2 = 0 \\Rightarrow x = 2$.
- Hole's $y$: plug into $x + 3$: $\\;2 + 3 = 5$.

So the hole is at $(2, 5)$.

> 💡 Never plug into the *original* fraction to find the $y$-value — it's undefined there. Always use the **simplified** form.`,
      },
      {
        id: 'rf2-hole-drill',
        type: 'input-boxes' as const,
        content: `**Locate the Hole** 🧮

$$f(x) = \\dfrac{x^2 - 4}{x - 2}$$

**1)** This simplifies to $y = x + 2$ for $x \\ne 2$. The hole is at $x = \\,?$
**2)** The hole's $y$-coordinate (plug $x=2$ into $x+2$) $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '4'],
          hint1: 'The canceled factor is $(x-2)$, so the hole sits at $x = 2$.',
          hint2: 'Plug $x=2$ into the simplified form $y = x+2$: $y = 2+2 = 4$.',
          hint3: '$\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x+2$, hole at $(2, 4)$.',
          explanation: 'Factor: $\\frac{(x-2)(x+2)}{x-2} = x+2$ with $x\\ne 2$. The hole is at $(2, 4)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rational-functions-graphs-alg2',
    sections: [
      {
        id: 'rf3-intro',
        type: 'text' as const,
        content: `# 〽️ Rational Functions and Their Graphs

**Part 3 of 5 — Horizontal & Slant Asymptotes**

---

> 🔑 **The Idea:** Vertical asymptotes describe what happens near a forbidden $x$. **Horizontal** and **slant** asymptotes describe the *end behavior* — where the graph heads as $x \\to \\pm\\infty$. The answer depends only on the **degrees** of the top and bottom.`,
      },
      {
        id: 'rf3-ha-rules',
        type: 'text' as const,
        content: `## The Degree Rules

Compare the degree of the numerator ($n$) to the degree of the denominator ($d$):

| Case | End behavior |
|------|--------------|
| $n < d$ (bottom-heavy) | Horizontal asymptote $y = 0$ |
| $n = d$ (equal degrees) | Horizontal asymptote $y = \\dfrac{\\text{lead coeff of top}}{\\text{lead coeff of bottom}}$ |
| $n = d + 1$ (top one higher) | **Slant** (oblique) asymptote — do polynomial division |
| $n > d + 1$ | No horizontal or slant asymptote |

### Examples

- $\\dfrac{3x+1}{x^2 - 5}$: degree $1 < 2$, so $y = 0$.
- $\\dfrac{2x^2 + 1}{5x^2 - x}$: degrees equal, so $y = \\dfrac{2}{5}$.
- $\\dfrac{x^2 + 1}{x - 1}$: top degree is one higher → slant asymptote.

> 💡 A graph can cross a *horizontal* asymptote in the middle, but it always levels off toward it at the far ends.`,
      },
      {
        id: 'rf3-ha-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the horizontal asymptote of $f(x) = \\dfrac{4x + 7}{2x - 3}$?',
              options: ['$y = 2$', '$y = 0$', '$y = \\frac{7}{-3}$', 'none'],
              correctAnswer: 0,
              explanation: 'The degrees are equal (both $1$), so the horizontal asymptote is the ratio of leading coefficients: $y = \\frac{4}{2} = 2$.',
            },
            {
              question: 'What is the horizontal asymptote of $f(x) = \\dfrac{x - 1}{x^2 + 6}$?',
              options: ['$y = 0$', '$y = 1$', '$y = \\frac{1}{6}$', 'none'],
              correctAnswer: 0,
              explanation: 'The numerator degree ($1$) is less than the denominator degree ($2$), so the bottom grows faster and the function approaches $y = 0$.',
            },
            {
              question: 'Which function has NO horizontal asymptote?',
              options: ['$\\frac{x^3 + 1}{x - 2}$', '$\\frac{5}{x}$', '$\\frac{2x}{x+9}$', '$\\frac{x^2}{x^2-1}$'],
              correctAnswer: 0,
              explanation: 'In $\\frac{x^3+1}{x-2}$ the numerator degree ($3$) exceeds the denominator degree ($1$) by more than one, so there is no horizontal (and no slant) asymptote. The others fit the $n<d$ or $n=d$ rules.',
            },
          ],
        },
      },
      {
        id: 'rf3-slant',
        type: 'text' as const,
        content: `## Slant (Oblique) Asymptotes

When the numerator's degree is **exactly one more** than the denominator's, the graph follows a slanted line at the ends. Find it by **polynomial long division** — the quotient (ignoring the remainder) is the slant asymptote.

### Example: $f(x) = \\dfrac{x^2 + 3x + 2}{x - 1}$

Divide $x^2 + 3x + 2$ by $x - 1$:

$$x^2 + 3x + 2 = (x - 1)(x + 4) + 6$$

So $f(x) = x + 4 + \\dfrac{6}{x - 1}$. As $x \\to \\pm\\infty$, the remainder term $\\frac{6}{x-1} \\to 0$, and the graph hugs the line

$$y = x + 4 \\quad (\\text{the slant asymptote}).$$

> ⚠️ A graph cannot have **both** a horizontal and a slant asymptote — it's one or the other (or neither).`,
      },
      {
        id: 'rf3-asym-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the End Behavior** 🔽

For each function, choose the correct horizontal/slant asymptote.`,
        exercise: {
          dropdowns: [
            { label: '$f(x) = \\frac{6x^2}{3x^2 + 1}$:', options: ['$y = 2$', '$y = 0$', '$y = 6$', 'slant asymptote'] },
            { label: '$f(x) = \\frac{x + 4}{x^3 - x}$:', options: ['$y = 0$', '$y = 1$', '$y = 4$', 'slant asymptote'] },
            { label: '$f(x) = \\frac{x^2 - 1}{x}$:', options: ['slant asymptote $y = x$', '$y = 0$', '$y = 1$', '$y = -1$'] },
          ],
          correctAnswers: ['$y = 2$', '$y = 0$', 'slant asymptote $y = x$'],
          hint1: 'Equal degrees → ratio of leading coefficients: $\\frac{6}{3} = 2$.',
          hint2: 'Numerator degree $1 <$ denominator degree $3$, so $y = 0$.',
          hint3: '$\\frac{x^2-1}{x} = x - \\frac{1}{x}$; the slant asymptote is $y = x$.',
          explanation: 'Compare degrees: equal → leading-coefficient ratio; bottom-heavy → $y=0$; top one higher → divide to get the slant line.',
        },
      },
      {
        id: 'rf3-ha-drill',
        type: 'input-boxes' as const,
        content: `**Find the Horizontal Asymptote** 🧮

Enter the $y$-value of the horizontal asymptote. (Decimals or fractions are fine.)

**1)** $f(x) = \\dfrac{7x - 2}{x + 5}$.  $y = \\,?$
**2)** $f(x) = \\dfrac{3x^2 + x}{6x^2 - 4}$.  $y = \\,?$  *(fraction or decimal)*
**3)** $f(x) = \\dfrac{8}{x^2 + 1}$.  $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '0.5', '0'],
          hint1: 'Equal degrees: ratio of leading coefficients $= \\frac{7}{1} = 7$.',
          hint2: 'Equal degrees: $\\frac{3}{6} = \\frac{1}{2} = 0.5$.',
          hint3: 'Numerator degree $0 <$ denominator degree $2$, so $y = 0$.',
          explanation: '1) $\\frac{7}{1}=7$.  2) $\\frac{3}{6}=\\frac{1}{2}=0.5$.  3) bottom-heavy $\\Rightarrow y=0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rational-functions-graphs-alg2',
    sections: [
      {
        id: 'rf4-intro',
        type: 'text' as const,
        content: `# 〽️ Rational Functions and Their Graphs

**Part 4 of 5 — Intercepts & Sketching the Whole Graph**

---

> 🔑 **Big Payoff:** With domain, asymptotes, and intercepts in hand, you can sketch any rational graph. This part adds the last two pieces — the **$x$- and $y$-intercepts** — and assembles a full step-by-step recipe.`,
      },
      {
        id: 'rf4-intercepts',
        type: 'text' as const,
        content: `## Finding Intercepts

**$x$-intercepts** (where the graph crosses the $x$-axis): a fraction equals zero only when its **numerator** equals zero (and the denominator is nonzero there). So set $P(x) = 0$ and solve.

**$y$-intercept** (where it crosses the $y$-axis): plug in $x = 0$, i.e. compute $f(0)$ — provided $0$ is in the domain.

### Example: $f(x) = \\dfrac{x - 2}{x + 4}$

- **$x$-intercept:** numerator $x - 2 = 0 \\Rightarrow x = 2$. Point $(2, 0)$.
- **$y$-intercept:** $f(0) = \\dfrac{0 - 2}{0 + 4} = \\dfrac{-2}{4} = -\\dfrac{1}{2}$. Point $\\left(0, -\\tfrac{1}{2}\\right)$.

> 🔑 **Numerator zero → $x$-intercept. Plug in $0$ → $y$-intercept.** Don't mix them up: the denominator's zeros give asymptotes/holes, *not* intercepts.`,
      },
      {
        id: 'rf4-intercept-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the $x$-intercept of $f(x) = \\dfrac{2x - 6}{x + 1}$?',
              options: ['$(3, 0)$', '$(-1, 0)$', '$(0, -6)$', '$(0, 3)$'],
              correctAnswer: 0,
              explanation: 'Set the numerator to zero: $2x - 6 = 0 \\Rightarrow x = 3$. The $x$-intercept is $(3, 0)$ — and $x=3$ is in the domain, so it is valid.',
            },
            {
              question: 'What is the $y$-intercept of $f(x) = \\dfrac{x + 4}{x - 2}$?',
              options: ['$(0, -2)$', '$(0, 4)$', '$(0, 2)$', '$(-4, 0)$'],
              correctAnswer: 0,
              explanation: 'Plug in $x = 0$: $f(0) = \\frac{0+4}{0-2} = \\frac{4}{-2} = -2$. The $y$-intercept is $(0, -2)$.',
            },
          ],
        },
      },
      {
        id: 'rf4-recipe',
        type: 'text' as const,
        content: `## The Full Sketching Recipe

To graph any rational function $f(x) = \\dfrac{P(x)}{Q(x)}$:

1. **Factor** both $P$ and $Q$, and **cancel** common factors (those give holes).
2. **Vertical asymptotes:** zeros of the *remaining* denominator.
3. **Horizontal/slant asymptote:** compare degrees (Part 3 rules).
4. **$x$-intercepts:** zeros of the numerator.
5. **$y$-intercept:** compute $f(0)$.
6. **Plot** asymptotes (dashed), intercepts, and a test point in each region; connect smoothly.

### Worked Example: $f(x) = \\dfrac{x - 1}{x - 3}$

| Feature | Result |
|---------|--------|
| Vertical asymptote | $x = 3$ |
| Horizontal asymptote | $y = 1$ (equal degrees, $\\frac{1}{1}$) |
| $x$-intercept | $(1, 0)$ |
| $y$-intercept | $f(0) = \\frac{-1}{-3} = \\frac{1}{3}$ → $\\left(0, \\tfrac{1}{3}\\right)$ |

> 💡 Asymptotes are **dashed guide lines**, not part of the curve. They tell the two branches where to go.`,
      },
      {
        id: 'rf4-sketch-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Graph** 🔽

Analyze $f(x) = \\dfrac{x + 2}{x - 4}$ feature by feature.`,
        exercise: {
          dropdowns: [
            { label: 'Vertical asymptote:', options: ['$x = 4$', '$x = -2$', '$x = 0$', '$y = 4$'] },
            { label: 'Horizontal asymptote:', options: ['$y = 1$', '$y = 0$', '$y = -2$', 'none'] },
            { label: '$x$-intercept:', options: ['$(-2, 0)$', '$(4, 0)$', '$(2, 0)$', '$(0, -2)$'] },
            { label: '$y$-intercept:', options: ['$\\left(0, -\\frac{1}{2}\\right)$', '$\\left(0, \\frac{1}{2}\\right)$', '$(0, -2)$', '$(0, 4)$'] },
          ],
          correctAnswers: ['$x = 4$', '$y = 1$', '$(-2, 0)$', '$\\left(0, -\\frac{1}{2}\\right)$'],
          hint1: 'Denominator zero: $x - 4 = 0 \\Rightarrow x = 4$.',
          hint2: 'Equal degrees → ratio of leading coefficients $= \\frac{1}{1} = 1$.',
          hint3: 'Numerator zero gives the $x$-intercept; $f(0) = \\frac{2}{-4} = -\\frac{1}{2}$ gives the $y$-intercept.',
          explanation: 'VA at $x=4$; HA at $y=1$; $x$-int where $x+2=0 \\Rightarrow (-2,0)$; $y$-int $f(0)=\\frac{2}{-4}=-\\frac{1}{2}$.',
        },
      },
      {
        id: 'rf4-intercept-drill',
        type: 'input-boxes' as const,
        content: `**Intercept Practice** 🧮

Use $f(x) = \\dfrac{3x - 12}{x + 2}$.

**1)** $x$-intercept: solve $3x - 12 = 0$, so $x = \\,?$
**2)** $y$-intercept value $f(0) = \\,?$  *(fraction or decimal)*
**3)** Vertical asymptote: $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '-6', '-2'],
          hint1: '$3x - 12 = 0 \\Rightarrow 3x = 12 \\Rightarrow x = 4$.',
          hint2: '$f(0) = \\frac{3(0)-12}{0+2} = \\frac{-12}{2} = -6$.',
          hint3: 'Denominator zero: $x + 2 = 0 \\Rightarrow x = -2$.',
          explanation: '1) $x=4$.  2) $f(0)=\\frac{-12}{2}=-6$.  3) VA at $x=-2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rational-functions-graphs-alg2',
    sections: [
      {
        id: 'rf5-intro',
        type: 'text' as const,
        content: `# 〽️ Rational Functions and Their Graphs

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) find the domain, (2) locate vertical asymptotes and holes, (3) determine horizontal/slant asymptotes from degrees, and (4) find intercepts and sketch the full graph. Let's put it all together.`,
      },
      {
        id: 'rf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Feature | How to find it |
|---------|----------------|
| Domain | denominator $\\ne 0$ |
| Hole | factor cancels top & bottom |
| Vertical asymptote | zero of the *remaining* denominator |
| Horizontal asymptote | $n<d \\Rightarrow y=0$; $\\;n=d \\Rightarrow y=\\frac{\\text{lead}}{\\text{lead}}$ |
| Slant asymptote | $n = d+1 \\Rightarrow$ divide, take the quotient |
| $x$-intercept | numerator $= 0$ |
| $y$-intercept | compute $f(0)$ |

> ⚠️ **Top-three traps:** (1) forgetting to *cancel first* and mislabeling a hole as an asymptote, (2) using leading coefficients only when degrees are **equal**, and (3) confusing which zero (top vs. bottom) gives intercepts vs. asymptotes.`,
      },
      {
        id: 'rf5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Fully analyze $f(x) = \\dfrac{x^2 - 1}{x^2 - 4}$. Its vertical asymptotes are:',
              options: ['$x = 2$ and $x = -2$', '$x = 1$ and $x = -1$', '$x = 2$ only', 'none — they are holes'],
              correctAnswer: 0,
              explanation: 'Factor: $\\frac{(x-1)(x+1)}{(x-2)(x+2)}$. Nothing cancels, so the denominator zeros $x = 2$ and $x = -2$ are vertical asymptotes.',
            },
            {
              question: 'For the same $f(x) = \\dfrac{x^2 - 1}{x^2 - 4}$, the horizontal asymptote is:',
              options: ['$y = 1$', '$y = 0$', '$y = \\frac{1}{4}$', 'none'],
              correctAnswer: 0,
              explanation: 'The degrees are equal (both $2$), so the horizontal asymptote is the ratio of leading coefficients: $\\frac{1}{1} = 1$.',
            },
          ],
        },
      },
      {
        id: 'rf5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One Big Analysis** 🧮

Analyze $f(x) = \\dfrac{(x - 5)(x + 1)}{(x + 1)(x - 2)}$ completely.

**1)** A factor cancels, creating a hole at $x = \\,?$
**2)** After canceling, the vertical asymptote is at $x = \\,?$
**3)** The $x$-intercept comes from the surviving numerator factor: $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '2', '5'],
          hint1: 'The common factor $(x+1)$ cancels, so the hole is at $x = -1$.',
          hint2: 'The remaining denominator factor is $(x-2)$, giving a vertical asymptote at $x = 2$.',
          hint3: 'After canceling, the numerator is $(x-5)$, so the $x$-intercept is at $x = 5$.',
          explanation: 'Cancel $(x+1)$ → hole at $x=-1$. Simplified: $\\frac{x-5}{x-2}$, VA at $x=2$, $x$-intercept at $x=5$.',
        },
      },
      {
        id: 'rf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the domain of $f(x) = \\dfrac{x + 3}{x^2 - 16}$?',
              options: ['all reals except $x = 4$ and $x = -4$', 'all reals except $x = -3$', 'all reals except $x = 16$', 'all real numbers'],
              correctAnswer: 0,
              explanation: '$x^2 - 16 = (x-4)(x+4) = 0$ at $x = 4$ and $x = -4$. Those are excluded; the numerator never restricts the domain.',
            },
            {
              question: 'Which describes the end behavior of $f(x) = \\dfrac{x^2 + 2x}{x - 3}$?',
              options: ['slant asymptote', 'horizontal asymptote $y = 0$', 'horizontal asymptote $y = 1$', 'no asymptotes at all'],
              correctAnswer: 0,
              explanation: 'The numerator degree ($2$) is exactly one more than the denominator degree ($1$), so the graph has a slant (oblique) asymptote, found by polynomial division.',
            },
            {
              question: 'The function $f(x) = \\dfrac{(x-7)(x+2)}{x+2}$ has, at $x = -2$:',
              options: ['a hole at $(-2, -9)$', 'a vertical asymptote', 'an $x$-intercept', 'a $y$-intercept'],
              correctAnswer: 0,
              explanation: 'The $(x+2)$ factor cancels, leaving $y = x - 7$ with $x \\ne -2$. So there is a hole; its $y$-value is $-2 - 7 = -9$, giving $(-2, -9)$.',
            },
          ],
        },
      },
    ],
  },
]
